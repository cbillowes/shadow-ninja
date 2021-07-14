(ns shadow-ninja.pages.home
  (:require [shadow-ninja.components.core :as c]
            [react-easy-emoji :as emoji]))


(defn title []
  [:h2.font-bold.text-5xl.lg:text-7xl "Enter the Shadow Ninja!" (emoji "🥷")])


(defn page []
  [:div.h-screen.bg-gray-700
   (js/console.log [c/hello-world])
   (js/console.log [c/click])
   [title]
   [c/hello-world]
   [c/click]])
