(ns greyddit.core
  (:require
    ["marked" :as marked]
    [reagent.core :as r]
    ["react-dom/client" :as rdom-client]))

(defonce state (r/atom {:view :home
                        :subreddit nil
                        :posts []
                        :after nil
                        :history []
                        :selected-post nil
                        :comments []
                        :error nil}))

(defonce subreddits ["programming" "credibledefense" "funny" "science" "gaming"])

(defn fetch-json [url on-success on-error]
  (-> (.fetch js/window url)
      (.then (fn [res]
               (if (.-ok res)
                 (.json res)
                 (throw (js/Error. "Fetch failed")))))
      (.then on-success)
      (.catch (fn [err]
                (js/console.error err)
                (on-error err)))))

(defn render-markdown [md]
  {:dangerouslySetInnerHTML
   {:__html (.parse marked md)}})

;; ====
;; Handling subreddit listings
;; ====

(defn build-reddit-url [subreddit after]
  (str "https://www.reddit.com/r/" subreddit "/top.json?limit=20&t=week"
       (when after (str "&after=" after))))

(defn handle-reddit-response [response push-history?]
  (let [clj-data (js->clj response :keywordize-keys true)
        posts (get-in clj-data [:data :children])
        new-after (get-in clj-data [:data :after])]
    (swap! state (fn [s]
                   (-> s
                       (assoc :posts posts
                              :after new-after
                              :error nil)
                       (update :history #(if push-history?
                                           (conj % (:after s))
                                           %)))))))


;; ===
;; Handling comment listings
;; ===

(defn build-comments-url [subreddit id]
  (str "https://www.reddit.com/r/" subreddit "/comments/" id ".json"))

(defn fetch-comments [subreddit id]
  (let [url (build-comments-url subreddit id)]
    (fetch-json url
                (fn [response]
                  (let [[post comments] (js->clj response :keywordize-keys true)]
                    (swap! state assoc
                           :selected-post (get-in post [:data :children 0 :data])
                           :comments (get-in comments [:data :children])
                           :view :post)))
                (fn [_]
                  (swap! state assoc :error "Failed to load post or CORS error")))))


(defn fetch-reddit-posts
  ([subreddit]
   (fetch-reddit-posts subreddit nil false))
  ([subreddit after push-history?]
   (swap! state assoc :subreddit subreddit)
   (let [url (build-reddit-url subreddit after)]
     (fetch-json url
                 #(handle-reddit-response % push-history?)
                 (fn [_]
                   (swap! state assoc :error "Failed to load or CORS error"))))))

(defn go-back []
  (let [{:keys [history subreddit]} @state
        prev-after (peek history)
        new-history (pop history)]
    (fetch-reddit-posts subreddit prev-after false)
    (swap! state assoc :history new-history)))

;; ===
;; Dealing with posts
;; ===

(defn reddit-image-url [post]
  (get-in post [:preview :images 0 :source :url]))

(defn reddit-video-url [post]
  (get-in post [:media :reddit_video :fallback_url]))

(defn reddit-gif-url [post]
  (get-in post [:media :reddit_video :fallback_url]))

(defn is-youtube-url? [url]
  (re-find #"(?i)youtube\.com|youtu\.be" url))

(defn gallery-images [post]
  (let [media-data (get post :media_metadata)
        ids (get-in post [:gallery_data :items])]
    (map (fn [{:keys [media_id]}]
           (get-in media-data [media_id :s :u]))
         ids)))

(defn post-page []
  (let [{:keys [selected-post comments]} @state
        url (:url selected-post)
        video-url (reddit-video-url selected-post)
        image-url (reddit-image-url selected-post)
        gif-url (when (and video-url (re-find #"\.gif" url)) video-url)
        gallery (gallery-images selected-post)]
    [:div {:style {:padding "2rem"}}
     [:button {:on-click #(swap! state assoc :view :subreddit :comments [] :selected-post nil)} "← Back to Subreddit"]

     (when selected-post
       [:div
        [:h2 (:title selected-post)]
        [:p "by " [:b (:author selected-post)]]

        ;; Reddit video
        (when (and video-url (not gif-url))
          [:video {:controls true :style {:max-width "100%" :margin "1rem 0"}}
           [:source {:src video-url :type "video/mp4"}]])

        ;; GIF (Reddit-hosted)
        (when gif-url
          [:video {:autoplay true :loop true :muted true
                   :style {:max-width "100%" :margin "1rem 0"}}
           [:source {:src gif-url :type "video/mp4"}]])

        ;; YouTube embed
        (when (is-youtube-url? url)
          [:iframe {:width "100%" :height "400"
                    :src (str "https://www.youtube.com/embed/"
                              (last (clojure.string/split url #"[=/]")))
                    :frameBorder "0" :allow "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    :allowFullScreen true
                    :style {:margin "1rem 0"}}])

        ;; Gallery (Reddit image gallery)
        (when (seq gallery)
          [:div {:style {:display "flex" :gap "1rem" :overflow "auto" :margin "1rem 0"}}
           (for [img-url gallery]
             ^{:key img-url}
             [:img {:src img-url
                    :style {:max-height "300px" :border "1px solid #ccc"}}])])

        ;; Static image fallback
        (when (and image-url
                   (not video-url)
                   (not (is-youtube-url? url))
                   (re-matches #"(?i).*\.(jpg|jpeg|png|gif)$" image-url))
          [:img {:src image-url
                 :style {:max-width "100%" :margin "1rem 0" :border "1px solid #ccc"}}])

        ;; Self-text
        [:div (merge {:style {:marginTop "0.5rem"
                              :background "#f9f9f9"
                              :padding "0.5rem"
                              :borderRadius "4px"}}
                     (render-markdown (:selftext selected-post)))]

        ;; Comments
        [:h3 "Comments"]
        (if (seq comments)
          [:ul
           (for [{:keys [data]} comments
                 :when (not (:stickied data))]
             ^{:key (:id data)}
             [:li {:style {:marginBottom "1rem"}}
              [:p [:b (:author data)] ":"] 
              [:div (merge {:style {:marginTop "0.5rem"
                                    :background "#f9f9f9"
                                    :padding "0.5rem"
                                    :borderRadius "4px"}}
                           (render-markdown (:body data)))]])]
          [:p "No comments or failed to load."])])]))

(defn post-table [posts]
  [:table {:style {:border-collapse "collapse" :width "100%"}}
   [:thead
    [:tr
     [:th "Title"] [:th "Author"] [:th "Upvotes"]]]
   [:tbody
    (for [{:keys [data]} posts]
      ^{:key (:id data)}
      [:tr
       [:td
        [:a {:href "#"
             :on-click #(do
                          (.preventDefault %)
                          (fetch-comments (:subreddit @state) (:id data)))}
         (:title data)]]
       [:td (:author data)]
       [:td (:ups data)]])]])

(defn home-page []
  [:div {:style {:padding "2rem"}}
   [:h1 "Welcome to Greyddit"]
   [:p "Select a subreddit:"]
   [:select {:on-change #(let [sub (.. % -target -value)]
                           (swap! state assoc :view :subreddit :subreddit sub :posts [] :history [])
                           (fetch-reddit-posts sub))}
    [:option {:value ""} "-- Choose a subreddit --"]
    (for [s subreddits]
      ^{:key s} [:option {:value s} s])]])

(defn subreddit-page []
  (let [{:keys [subreddit posts error after history]} @state]
    [:div {:style {:padding "2rem"}}
     [:h1 (str "Top r/" subreddit " Posts")]
     [:div {:style {:margin-bottom "1rem"}}
      [:button {:on-click #(swap! state assoc :view :home)} "← Back to Home"]
      (when (seq history)
        [:button {:on-click go-back
                  :style {:margin-left "1rem"}} "← Previous Page"])
      (when after
        [:button {:on-click #(fetch-reddit-posts subreddit after true)
                  :style {:margin-left "1rem"}} "Next Page →"])]
     (when error
       [:p {:style {:color "red"}} error])
     (when (seq posts)
       [post-table posts])]))

(defn app []
  (let [{:keys [view]} @state]
    (case view
      :home [home-page]
      :subreddit [subreddit-page]
      :post [post-page]
      [:div "Unknown view"])))

(defn ^:dev/after-load start []
  (let [root (rdom-client/createRoot (.getElementById js/document "app"))]
    (.render root (r/as-element [app]))))

(defn ^:export init []
  (start))
