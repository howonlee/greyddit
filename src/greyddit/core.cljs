(ns greyddit.core
  (:require
    ["marked" :as marked]
    [reagent.core :as r]
    ["react-dom/client" :as rdom-client]))

(defonce state (r/atom {:view :home
                        :subreddit nil
                        :posts []
                        :after nil
                        :selected-post nil
                        :comments []
                        :error nil
                        :loading? false}))

(defonce subreddits ["askculinary"
                     "askhistorians"
                     "askscience"
                     "clojure"
                     "comics"
                     "credibledefense"
                     "curatedtumblr"
                     "experienceddevs"
                     "hobbydrama"
                     "noncredibledefense"
                     "personalfinance"
                     "stardewvalley"
                     "subredditdrama"
                     "totalwar"
                     "warcollege"])

(def mobile-button-style
  {:padding "1rem"
   :fontSize "1.25rem"
   :borderRadius "6px"
   :cursor "pointer"
   :border "1px solid #ccc"
   :background "#f0f0f0"
   :textAlign "left"})

(defn delay-transition
  ([transition-fn]
   (delay-transition nil transition-fn))
  ([preload-fn transition-fn]
   (let [delay-ms (+ 1000 (rand-int 6000))] ;; 1s to 7s
     (swap! state assoc :loading? true)
     (when preload-fn (preload-fn)) ;; start preload immediately
     (js/setTimeout
      (fn []
        (swap! state assoc :loading? false)
        (transition-fn))
      delay-ms))))

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
    (swap! state assoc
           :posts posts
           :after new-after
           :error nil)))


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

;; ===
;; Dealing with posts
;; ===

(defn decode-url [s]
  (clojure.string/replace s #"&amp;" "&"))

(defn reddit-image-url [post]
  (let [direct-url  (some-> (:url post) decode-url)]
    direct-url))

(defn reddit-video-url [post]
  (when-let [url (get-in post [:media :reddit_video :fallback_url])]
    (decode-url url)))

(defn reddit-gif-url [post]
  (when-let [url (get-in post [:media :reddit_video :fallback_url])]
    (decode-url url)))

(defn is-youtube-url? [url]
  (re-find #"(?i)youtube\.com|youtu\.be" url))

(defn gallery-images [post]
  (let [media-data (get post :media_metadata)
        ids (get-in post [:gallery_data :items])]
    (keep (fn [{:keys [media_id]}]
            (some-> (get-in media-data [media_id :s :u]) decode-url))
          ids)))

(defn summarize-parent [parent]
  (when parent
    (let [body (:body parent)
          trimmed (subs body 0 (min 200 (count body)))
          summary (if (< (count body) 200)
                    trimmed
                    (str trimmed "…"))]
      {:id (:id parent)
       :author (:author parent)
       :summary summary})))

(defn flatten-comments
  ([comments]
   (flatten-comments comments nil))
  ([comments parent-map]
   (reduce
    (fn [acc {:keys [data] :as full-comment}]
      (let [id (:id data)
            parent-id (:parent_id data)
            parent-summary (summarize-parent (get parent-map parent-id))
            flattened (conj acc {:comment data :parent parent-summary})
            reply-children (when (map? (:replies data))
                             (get-in data [:replies :data :children]))]
        (if (seq reply-children)
          (into flattened (flatten-comments reply-children (assoc parent-map (str "t1_" id) data)))
          flattened)))
    []
    (or comments []))))


(defn post-page []
  (let [{:keys [selected-post comments]} @state
        url (:url selected-post)
        video-url (reddit-video-url selected-post)
        image-url (reddit-image-url selected-post)
        gif-url (when (and video-url (re-find #"\.gif" url)) video-url)
        gallery (gallery-images selected-post)]
    [:div {:style {:padding "2rem"}}
     [:button {:on-click #(swap! state assoc :view :subreddit :comments [] :selected-post nil)
               :style mobile-button-style}
      "← Back to Subreddit"]

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
                 :style {:max-width "100%" :margin "1rem 0" :border "1px solid #ccc"}
                 :on-error #(set! (.-display (.-style (.-target %))) "none")}])


        ;; Self-text
        (when (:selftext selected-post)
          [:div (merge {:style {:marginTop "0.5rem"
                                :background "#f9f9f9"
                                :padding "0.5rem"
                                :borderRadius "4px"}}
                       (render-markdown (:selftext selected-post)))])

        ;; Comments
        [:h3 "Comments"]
        (let [flat-comments (flatten-comments (or comments []))]
          (if (seq flat-comments)
            [:div
             (for [{:keys [comment parent]} flat-comments
                   :when (not (:stickied comment))]
               ^{:key (:id comment)}
               [:div {:style {:marginBottom "2rem"}}
                (when parent
                  [:div {:style {:background "#eee"
                                 :padding "0.5rem"
                                 :marginBottom "0.5rem"
                                 :borderRadius "4px"
                                 :fontStyle "italic"}}
                   [:p [:b (:author parent)] ":"]
                   [:div (render-markdown (:summary parent))]])

                [:div {:style {:background "#f9f9f9"
                               :padding "0.75rem"
                               :borderRadius "4px"
                               :border "1px solid #ddd"}}
                 [:p [:b (:author comment)] ":"]
                 [:div (when (:body comment) (render-markdown (:body comment)))]]])]
            [:p "No comments or failed to load."]))])]))

(defn post-table [posts]
  [:div {:style {:overflowX "auto" :maxWidth "100%"}}
   [:table {:style {:borderCollapse "collapse"
                    :width "100%"
                    :minWidth "500px"}} ;; keeps layout readable on large screens
    [:thead
     [:tr
      [:th {:style {:textAlign "left" :padding "0.5rem" :borderBottom "1px solid #ccc"}} "Title"]
      [:th {:style {:textAlign "left" :padding "0.5rem" :borderBottom "1px solid #ccc"}} "Author"]
      [:th {:style {:textAlign "left" :padding "0.5rem" :borderBottom "1px solid #ccc"}} "Upvotes"]]]
    [:tbody
     (for [{:keys [data]} posts]
       ^{:key (:id data)}
       [:tr
        [:td {:style {:padding "1.5rem" :borderBottom "1px solid #eee"}}
         [:a {:href "#"
              :on-click #(do
                           (.preventDefault %)
                           (delay-transition
                             (fn [] (fetch-comments (:subreddit @state) (:id data))) ;; preload
                             (fn [] (swap! state assoc :view :post))))}
          (:title data)]]
        [:td {:style {:padding "0.5rem" :borderBottom "1px solid #eee"}} (:author data)]
        [:td {:style {:padding "0.5rem" :borderBottom "1px solid #eee"}} (:ups data)]])]]])


(defn home-page []
  [:div {:style {:padding "2rem"}}
   [:h1 "Welcome to Greyddit"]
   [:p "Select a subreddit:"]

   [:div {:style {:display "flex"
                  :flexDirection "column"
                  :gap "1rem"
                  :marginTop "1rem"}}
    (for [s subreddits]
      ^{:key s}
      [:button
       {:on-click #(delay-transition
                     (fn [] (fetch-reddit-posts s)) ;; preload
                     (fn [] (swap! state assoc :view :subreddit :subreddit s)))
        :style mobile-button-style}
       (str "r/" s)])]])

(defn subreddit-page []
  (let [{:keys [subreddit posts error after]} @state]
    [:div {:style {:padding "2rem"}}
     [:h1 (str "Top r/" subreddit " Posts")]
     [:div {:style {:display "flex"
                    :flexWrap "wrap"
                    :gap "0.5rem"
                    :marginBottom "1rem"}}
      [:button
       {:on-click #(delay-transition nil (fn [] (swap! state assoc :view :home)))
        :style mobile-button-style}
       "← Back to Home"]

      (when after
        [:button {:on-click #(fetch-reddit-posts subreddit after false)
                  :style mobile-button-style}
         "Next Page →"])]
     (when error
       [:p {:style {:color "red"}} error])
     (when (seq posts)
       [post-table posts])]))

(defn app []
  (let [{:keys [view loading?]} @state]
    (if loading?
      [:div {:style {:padding "2rem"}}
       [:h2 "Loading..."]
       [:div {:style {:width "3rem"
                      :height "3rem"
                      :border "4px solid #ccc"
                      :borderTop "4px solid #333"
                      :borderRadius "50%"
                      :animation "spin 1s linear infinite"}}]]
      (case view
        :home [home-page]
        :subreddit [subreddit-page]
        :post [post-page]
        [:div "Unknown view"]))))

(defn ^:dev/after-load start []
  (let [root (rdom-client/createRoot (.getElementById js/document "app"))]
    (.render root (r/as-element [app]))))

(defn ^:export init []
  (start))
