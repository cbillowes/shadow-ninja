(ns shadow-ninja.app
  (:require [reagent.dom :as dom]
            [shadow-ninja.pages.home :as home]))

(defn app
  []
  [home/page])

(defn ^:dev/after-load start []
  (dom/render [app]
              (.getElementById js/document "app")))

(defn init []
  (start))
