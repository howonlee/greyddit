(ns greyddit.core
  (:require
   [reagent.core :as r]
   ["react-dom/client" :as rdom-client]))

(defonce state (r/atom {:posts []
                        :error nil}))

(defn fetch-reddit-posts []
  (-> (.fetch js/window "https://www.reddit.com/r/aww/top.json?limit=10")
      (.then (fn [res]
               (if (.-ok res)
                 (.json res)
                 (throw (js/Error. "Fetch failed")))))
      (.then (fn [data]
               (let [clj-data (js->clj data :keywordize-keys true)
                     posts    (get-in clj-data [:data :children])]
                 (print posts)
                 (swap! state assoc
                        :posts posts
                        :error nil))))
      (.catch (fn [err]
                (js/console.error err)
                (swap! state assoc :error "Failed to load or CORS error")))))

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
  (let [{:keys [posts error]} @state]
    [:div {:style {:padding "2rem"}}
     [:h1 "Top r/aww Posts (old Reddit API)"]
     [:button {:on-click fetch-reddit-posts
               :style {:margin-bottom "1rem"}} "Load Posts"]
     (when error
       [:p {:style {:color "red"}} error])
     (when (seq posts)
       [post-table posts])]))

(defn ^:dev/after-load start []
  (let [root (rdom-client/createRoot (.getElementById js/document "app"))]
    (.render root (r/as-element [app]))))

(defn ^:export init []
  (start))
