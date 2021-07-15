(ns shadow-ninja.components.core
  (:require [reagent.core :as r]
            ["@shadow-ninja/components" :refer [HelloWorld Click]]))

(defn hello-world []
  [HelloWorld])


(defn click []
  [:> (r/as-element Click)])
