(ns greyddit.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as rdom]))

(defonce state (r/atom {:url ""
                        :html nil
                        :dom  nil
                        :error nil}))

(defn fetch-html [url]
  (-> (.fetch js/window url)
      (.then (fn [res]
               (if (.-ok res)
                 (.text res)
                 (throw (js/Error. "Fetch failed")))))
      (.then (fn [text]
               (swap! state assoc
                      :html text
                      :dom (.parseFromString (js/DOMParser.) text "text/html")
                      :error nil)))
      (.catch (fn [err]
                (js/console.error err)
                (swap! state assoc :error "Failed to load or CORS error")))))

(defn app []
  (let [{:keys [url html dom error]} @state]
    [:div {:style {:padding "2rem"}}
     [:h1 "ClojureScript URL DOM Loader"]
     [:input {:type "text"
              :value url
              :on-change #(swap! state assoc :url (.. % -target -value))
              :placeholder "Enter a URL (must allow CORS)"
              :style {:width "400px" :margin-right "10px"}}]
     [:button {:on-click #(fetch-html url)} "Load"]
     (when error
       [:p {:style {:color "red"}} error])
     (when dom
       [:div {:style {:margin-top "2rem"}}
        [:h2 "DOM Preview:"]
        [:pre (subs (.-outerHTML (.-documentElement dom)) 0 1000) "..."]])]))

(defn ^:dev/after-load start []
  (rdom/render [app] (.getElementById js/document "app")))

(defn ^:export init []
  (start))
