(ns modular-roleplaying-framework.main
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [kee-frame.core :as kf]
   [modular-roleplaying-framework.views :as views]
   [modular-roleplaying-framework.db-CRUD :as db-CRUD]
   [modular-roleplaying-framework.db :as db]))

(defn app []
  (kf/switch-route
   (fn [route] (-> route :data :name))
   :home [views/main-menu]
   :system [views/system-menu]
   nil "PAGE NOT FOUND"))

(def routes
  [["/" :home]
   ["/:section-one-title/:section-one-id/:section-one-tab/:section-one-item/:section-two-title/:section-two-id/:section-two-tab/:section-two-item/:section-three-title/:section-three-id/:section-three-tab/:section-three-item/:layout" :system]])

(def initial-db db/prototype-data)

(defn main! []
  (kf/start! {:routes routes
              :initial-db initial-db
              :root-component [app]}))