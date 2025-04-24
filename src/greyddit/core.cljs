(ns greyddit.core
  (:require
   [reagent.core :as r]
   ["react-dom/client" :as rdom-client]))

(defonce state (r/atom {:subreddit "programming"
                        :posts []
                        :after nil
                        :history []
                        :error nil}))

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

(defn fetch-reddit-posts
  ([] (let [{:keys [subreddit]} @state]
        (fetch-reddit-posts subreddit nil false)))
  ([subreddit after push-history?]
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

(defn post-table [posts]
  [:table {:style {:border-collapse "collapse" :width "100%"}}
   [:thead
    [:tr
     [:th {:style {:border "1px solid #ccc" :padding "8px"}} "Title"]
     [:th {:style {:border "1px solid #ccc" :padding "8px"}} "Author"]
     [:th {:style {:border "1px solid #ccc" :padding "8px"}} "Upvotes"]]]
   [:tbody
    (for [{:keys [data]} posts]
      ^{:key (str (:id data))}
      [:tr
       [:td {:style {:border "1px solid #ccc" :padding "8px"}}
        [:a {:href (str "https://reddit.com" (:permalink data))
             :target "_blank"} (:title data)]]
       [:td {:style {:border "1px solid #ccc" :padding "8px"}} (:author data)]
       [:td {:style {:border "1px solid #ccc" :padding "8px"}} (:ups data)]])]])

(defn app []
  (let [{:keys [subreddit posts error after history]} @state]
    [:div {:style {:padding "2rem"}}
     [:h1 (str "Top r/" subreddit " Posts (old Reddit API)")]
     [:div {:style {:margin-bottom "1rem"}}
      [:input {:type "text"
               :value subreddit
               :on-change #(swap! state assoc :subreddit (.. % -target -value))
               :placeholder "Enter subreddit"
               :style {:margin-right "1rem"}}]
      [:button {:on-click #(fetch-reddit-posts (:subreddit @state) nil false)
                :style {:margin-right "1rem"}} "Load Posts"]
      (when (seq history)
        [:button {:on-click go-back
                  :style {:margin-right "1rem"}} "← Previous Page"])
      (when after
        [:button {:on-click #(fetch-reddit-posts subreddit after true)} "Next Page →"])]
     (when error
       [:p {:style {:color "red"}} error])
     (when (seq posts)
       [post-table posts])]))

(defn ^:dev/after-load start []
  (let [root (rdom-client/createRoot (.getElementById js/document "app"))]
    (.render root (r/as-element [app]))))

(defn ^:export init []
  (start))
