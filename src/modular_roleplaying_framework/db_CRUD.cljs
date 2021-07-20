(ns modular-roleplaying-framework.db-CRUD
  (:require
   [clojure.string :as s]
   [re-frame.core :as rf]
   [kee-frame.core :as kf]))

(def >evt rf/dispatch)
(def <sub (comp deref rf/subscribe))

(defn dissoc-in
  "Dissociate a value in a nested assocative structure, identified by a sequence
  of keys. Any collections left empty by the operation will be dissociated from
  their containing structures."
  [m ks]
  (if-let [[k & ks] (seq ks)]
    (if (seq ks)
      (let [v (dissoc-in (get m k) ks)]
        (if (empty? v)
          (dissoc m k)
          (assoc m k v)))
      (dissoc m k))
    m))

(defn exsert [v i] (vec (concat (take (inc i) v) (drop (+ 2 i) v))))
(defn insert [v i e] (vec (concat (take (inc i) v) [e] (drop (inc i) v))))
(defn insertv [v i e] (vec (concat (take (inc i) v) e (drop (inc i) v))))

(defn url-friendly [string]
  (s/replace string #" " "-"))





(defn system-fsm [ruleset-id world-id adventure-id main-section layout])

(rf/reg-event-fx
 :initialize-system
 (fn [{:keys [db]} [_ section-one section-two section-three layout]]
   {:db db
    :navigate-to [:system {:section-one-title (url-friendly (:title section-one)) :section-one-id (:id section-one) :section-one-tab (nth (:tabs section-one) 0) :section-one-item 0
                           :section-two-title (url-friendly (:title section-two)) :section-two-id (:id section-two) :section-two-tab (nth (:tabs section-two) 0) :section-two-item 0
                           :section-three-title (url-friendly (:title section-three)) :section-three-id (:id section-three) :section-three-tab (nth (:tabs section-three) 0) :section-three-item 0
                           :layout layout}]}))

;; This just loads in the data to db right away, without using the controller
;; :db (-> db
;;         (assoc-in [:system-state :section-one] {:section-title (url-friendly (:title section-one)) :section-id (:id section-one) :section-tab (nth (:tabs section-one) 0) :section-item 0})
;;         (assoc-in [:system-state :section-two] {:section-title (url-friendly (:title section-two)) :section-id (:id section-two) :section-tab (nth (:tabs section-two) 0) :section-item 0})
;;         (assoc-in [:system-state :section-three] {:section-title (url-friendly (:title section-three)) :section-id (:id section-three) :section-tab (nth (:tabs section-three) 0) :section-item 0})
;;         (assoc-in [:system-state :layout] layout)
;;         (assoc-in [:system-state :initialized?] true))

(rf/reg-event-fx
 :toggle-layout
 (fn [{:keys [db]} _]
   (let [system-state (:system-state db)
         {:keys [section-one section-two section-three layout]} system-state]
     {:navigate-to [:system {:section-one-title (:section-title section-one) :section-one-id (:section-id section-one) :section-one-tab (:tab-id section-one) :section-one-item (:item-id section-one)
                             :section-two-title (:section-title section-two) :section-two-id (:section-id section-two) :section-two-tab (:tab-id section-two) :section-two-item (:item-id section-two)
                             :section-three-title (:section-title section-three) :section-three-id (:section-id section-three) :section-three-tab (:tab-id section-three) :section-three-item (:item-id section-three)
                             :layout (if (= layout "book-layout")
                                       "pages-layout"
                                       "book-layout")}]})))

(rf/reg-event-fx
 :reorder-sections
 (fn [{:keys [db]} [_ direction]]
   (let [section-one (<sub [:state-section "section-one"])
         section-two (<sub [:state-section "section-two"])
         section-three (<sub [:state-section "section-three"])
         layout (<sub [:layout])]
     (case direction
       "forward" {:navigate-to [:system {:section-one-title (:section-title section-three) :section-one-id (:section-id section-three) :section-one-tab (:tab-id section-three) :section-one-item (:item-id section-three)
                                         :section-two-title (:section-title section-one) :section-two-id (:section-id section-one) :section-two-tab (:tab-id section-one) :section-two-item (:item-id section-one)
                                         :section-three-title (:section-title section-two) :section-three-id (:section-id section-two) :section-three-tab (:tab-id section-two) :section-three-item (:item-id section-two)
                                         :layout layout}]
                  :db (-> db
                          (assoc-in [:system-state :section-one :item-parent-tab] (:item-parent-tab section-three))
                          (assoc-in [:system-state :section-two :item-parent-tab] (:item-parent-tab section-one))
                          (assoc-in [:system-state :section-three :item-parent-tab] (:item-parent-tab section-two)))}

       "backward" {:navigate-to [:system {:section-one-title (:section-title section-two) :section-one-id (:section-id section-two) :section-one-tab (:tab-id section-two) :section-one-item (:item-id section-two)
                                          :section-two-title (:section-title section-three) :section-two-id (:section-id section-three) :section-two-tab (:tab-id section-three) :section-two-item (:item-id section-three)
                                          :section-three-title (:section-title section-one) :section-three-id (:section-id section-one) :section-three-tab (:tab-id section-one) :section-three-item (:item-id section-one)
                                          :layout layout}]
                   :db (-> db
                           (assoc-in [:system-state :section-one :item-parent-tab] (:item-parent-tab section-two))
                           (assoc-in [:system-state :section-two :item-parent-tab] (:item-parent-tab section-three))
                           (assoc-in [:system-state :section-three :item-parent-tab] (:item-parent-tab section-one)))}
       :else (println "ERROR: Unrecognized direction when reordering sections.")))))

(rf/reg-event-fx
 :section-select
 (fn [{:keys [db]} [_ section-number section]]
   (let [system-state (-> (:system-state db)
                          (assoc-in [(keyword section-number) :section-title] (:title section))
                          (assoc-in [(keyword section-number) :section-id] (:id section))
                          (assoc-in [(keyword section-number) :tab-id] (nth (:tabs section) 0))
                          (assoc-in [(keyword section-number) :item-id] 0)
                          (assoc-in [(keyword section-number) :item-tab-parent] nil))
         {:keys [section-one section-two section-three layout]} system-state]
     {:navigate-to [:system {:section-one-title (:section-title section-one) :section-one-id (:section-id section-one) :section-one-tab (:tab-id section-one) :section-one-item (:item-id section-one)
                             :section-two-title (:section-title section-two) :section-two-id (:section-id section-two) :section-two-tab (:tab-id section-two) :section-two-item (:item-id section-two)
                             :section-three-title (:section-title section-three) :section-three-id (:section-id section-three) :section-three-tab (:tab-id section-three) :section-three-item (:item-id section-three)
                             :layout layout}]})))

(rf/reg-event-fx
 :tab-select
 (fn [{:keys [db]} [_ section-number tab-id]]
   (let [system-state (assoc-in (:system-state db) [(keyword section-number) :tab-id] tab-id)
         {:keys [section-one section-two section-three layout]} system-state]
     {:navigate-to [:system {:section-one-title (:section-title section-one) :section-one-id (:section-id section-one) :section-one-tab (:tab-id section-one) :section-one-item (:item-id section-one)
                             :section-two-title (:section-title section-two) :section-two-id (:section-id section-two) :section-two-tab (:tab-id section-two) :section-two-item (:item-id section-two)
                             :section-three-title (:section-title section-three) :section-three-id (:section-id section-three) :section-three-tab (:tab-id section-three) :section-three-item (:item-id section-three)
                             :layout layout}]})))

(rf/reg-event-fx
 :item-select
 (fn [{:keys [db]} [_ section-number item-id]]
   (let [system-state (assoc-in (:system-state db) [(keyword section-number) :item-id] item-id)
         {:keys [section-one section-two section-three layout]} system-state]
     {:navigate-to [:system {:section-one-title (:section-title section-one) :section-one-id (:section-id section-one) :section-one-tab (:tab-id section-one) :section-one-item (:item-id section-one)
                             :section-two-title (:section-title section-two) :section-two-id (:section-id section-two) :section-two-tab (:tab-id section-two) :section-two-item (:item-id section-two)
                             :section-three-title (:section-title section-three) :section-three-id (:section-id section-three) :section-three-tab (:tab-id section-three) :section-three-item (:item-id section-three)
                             :layout layout}]
      :db (assoc-in db [:system-state (keyword section-number) :item-parent-tab] (get-in db [:system-state (keyword section-number) :tab-id]))})))

(rf/reg-event-fx
 :item-tab-select
 (fn [{:keys [db]} [_ section-number item-id tab-id]]
   (let [system-state (-> (:system-state db)
                          (assoc-in [(keyword section-number) :item-id] item-id)
                          (assoc-in [(keyword section-number) :tab-id] tab-id))
         {:keys [section-one section-two section-three layout]} system-state]
     {:navigate-to [:system {:section-one-title (:section-title section-one) :section-one-id (:section-id section-one) :section-one-tab (:tab-id section-one) :section-one-item (:item-id section-one)
                             :section-two-title (:section-title section-two) :section-two-id (:section-id section-two) :section-two-tab (:tab-id section-two) :section-two-item (:item-id section-two)
                             :section-three-title (:section-title section-three) :section-three-id (:section-id section-three) :section-three-tab (:tab-id section-three) :section-three-item (:item-id section-three)
                             :layout layout}]
      :db (assoc-in db [:system-state (keyword section-number) :item-parent-tab] (get-in db [:system-state (keyword section-number) :tab-id]))})))

(rf/reg-event-fx
 :item-deselect
 (fn [{:keys [db]} [_ section-number]]
   (let [system-state (-> (:system-state db)
                          (assoc-in [(keyword section-number) :item-id] 0)
                          (assoc-in [(keyword section-number) :item-parent-tab] nil))
         {:keys [section-one section-two section-three layout]} system-state]
     {:navigate-to [:system {:section-one-title (:section-title section-one) :section-one-id (:section-id section-one) :section-one-tab (:tab-id section-one) :section-one-item (:item-id section-one)
                             :section-two-title (:section-title section-two) :section-two-id (:section-id section-two) :section-two-tab (:tab-id section-two) :section-two-item (:item-id section-two)
                             :section-three-title (:section-title section-three) :section-three-id (:section-id section-three) :section-three-tab (:tab-id section-three) :section-three-item (:item-id section-three)
                             :layout layout}]
      :db (assoc-in db [:system-state (keyword section-number) :item-parent-tab] (get-in db [:system-state (keyword section-number) :tab-id]))})))

(kf/reg-controller
 :system-change
 {:params (fn [route-data]
            (when (-> route-data :data :name (= :system))
              (let [section-one-title (get-in route-data [:path-params :section-one-title])
                    section-one-id (get-in route-data [:path-params :section-one-id])
                    section-one-tab (get-in route-data [:path-params :section-one-tab])
                    section-one-item (get-in route-data [:path-params :section-one-item])

                    section-two-title (get-in route-data [:path-params :section-two-title])
                    section-two-id (get-in route-data [:path-params :section-two-id])
                    section-two-tab (get-in route-data [:path-params :section-two-tab])
                    section-two-item (get-in route-data [:path-params :section-two-item])

                    section-three-title (get-in route-data [:path-params :section-three-title])
                    section-three-id (get-in route-data [:path-params :section-three-id])
                    section-three-tab (get-in route-data [:path-params :section-three-tab])
                    section-three-item (get-in route-data [:path-params :section-three-item])

                    layout (get-in route-data [:path-params :layout])]
                [section-one-title (int section-one-id) (int section-one-tab) (int section-one-item)
                 section-two-title (int section-two-id) (int section-two-tab) (int section-two-item)
                 section-three-title (int section-three-id) (int section-three-tab) (int section-three-item)
                 layout])))
  :start [:update-system-state]})

(rf/reg-event-fx
 :update-system-state
 (fn [{:keys [db]} [_ [section-one-title section-one-id section-one-tab section-one-item
                       section-two-title section-two-id section-two-tab section-two-item
                       section-three-title section-three-id section-three-tab section-three-item
                       layout]]]
   {:db (-> db
            (assoc-in [:system-state :section-one] (merge (get-in db [:system-state :section-one]) {:section-title section-one-title :section-id section-one-id :tab-id section-one-tab :item-id section-one-item}))
            (assoc-in [:system-state :section-two] (merge (get-in db [:system-state :section-two]) {:section-title section-two-title :section-id section-two-id :tab-id section-two-tab :item-id section-two-item}))
            (assoc-in [:system-state :section-three] (merge (get-in db [:system-state :section-three]) {:section-title section-three-title :section-id section-three-id :tab-id section-three-tab :item-id section-three-item}))
            (assoc-in [:system-state :layout] layout)
            (assoc-in [:system-state :initialized?] true))}))




(rf/reg-event-db
 :select-active-item
 (fn [db [_ section-number item-id]]
   (if (= (get-in db [:system-state (keyword section-number) :item-id]) (int item-id))
     (assoc-in db [:system-state (keyword section-number) :item-id] nil)
     (assoc-in db [:system-state (keyword section-number) :item-id] (int item-id)))))



(rf/reg-sub
 :system-state
 (fn [db]
   (:system-state db)))

(rf/reg-sub
 :overlay-state
 (fn [db]
   (get-in db [:system-state :overlay :overlay-state])))

(rf/reg-sub
 :overlay-item
 (fn [db]
   (get-in db [:system-state :overlay :overlay-item])))

(rf/reg-sub
 :overlay-params
 (fn [db]
   (get-in db [:system-state :overlay :overlay-params])))

(rf/reg-event-db
 :overlay-state-change
 (fn [db [_ state]]
   (assoc-in db [:system-state :overlay :overlay-state] state)))

(rf/reg-event-db
 :overlay-item-change
 (fn [db [_ item-id]]
   (assoc-in db [:system-state :overlay :overlay-item] item-id)))

(rf/reg-event-db
 :overlay-params-change
 (fn [db [_ params]]
   (assoc-in db [:system-state :overlay :overlay-params] params)))

(rf/reg-sub
 :initialized?
 (fn [db]
   (get-in db [:system-state :initialized?])))

(rf/reg-sub
 :state-section
 (fn [db [_ section-number]]
   (get-in db [:system-state (keyword section-number)])))

(rf/reg-sub
 :state-section-id
 (fn [db [_ section-number]]
   (get-in db [:system-state (keyword section-number) :section-id])))

(rf/reg-sub
 :state-section-ids
 (fn [db _]
   [(get-in db [:system-state :section-one :section-id])
    (get-in db [:system-state :section-two :section-id])
    (get-in db [:system-state :section-three :section-id])]))

(rf/reg-sub
 :state-section-tab
 (fn [db [_ section-number]]
   (get-in db [:system-state (keyword section-number) :tab-id])))

(rf/reg-sub
 :state-section-item
 (fn [db [_ section-number]]
   (get-in db [:system-state (keyword section-number) :item-id])))

(rf/reg-sub
 :layout
 (fn [db _]
   (get-in db [:system-state :layout])))






(rf/reg-sub
 :section
 (fn [db [_ section-id]]
   (get-in db [:sections section-id])))

(rf/reg-sub
 :section-type
 (fn [db [_ section-id]]
   (get-in db [:sections section-id :type])))

(rf/reg-sub
 :section-title
 (fn [db [_ section-id]]
   (get-in db [:sections section-id :title])))

(rf/reg-sub
 :section-tabs
 (fn [db [_ section-id]]
   (get-in db [:sections section-id :tabs])))


(rf/reg-sub
 :ruleset-skillbilities?
 (fn [db [_ section-id]]
   (get-in db [:sections section-id :skillbilities?])))

(rf/reg-sub
 :ruleset-skills
 (fn [db [_ section-id]]
   (get-in db [:sections section-id :skills])))

(rf/reg-sub
 :ruleset-abilities
 (fn [db [_ section-id]]
   (get-in db [:sections section-id :abilities])))




(rf/reg-sub
 :section-tabs-full
 (fn [db [_ section-number section-tab]]
   (let [item-id (get-in db [:system-state (keyword section-number) :item-id])
         section-id (get-in db [:system-state (keyword section-number) :section-id])
         tabs (get-in db [:sections section-id :tabs])
         subtabs (into [] (concat [(get-in db [:system-state (keyword section-number) :item-parent-tab])] (get-in db [:items item-id :subtabs])))]
     (if (nil? item-id)
       tabs
       (insertv tabs
                (apply first (filter #(= (second %) (first subtabs))
                                     (map-indexed vector tabs)))
                (rest subtabs))))))





(rf/reg-sub
 :active-tab
 (fn [db [_ section-number]]
   (int (get-in db [:system-state (keyword section-number) :tab-id]))))

(rf/reg-sub
 :tab-icon
 (fn [db [_ tab-id]]
   (get-in db [:tabs tab-id :icon])))

(rf/reg-sub
 :tab-type
 (fn [db [_ tab-id]]
   (get-in db [:tabs tab-id :type])))

(rf/reg-sub
 :tab-title
 (fn [db [_ tab-id]]
   (get-in db [:tabs tab-id :title])))

(rf/reg-sub
 :tab-template
 (fn [db [_ tab-id]]
   (get-in db [:tabs tab-id :template])))

(rf/reg-sub
 :tab-items
 (fn [db [_ tab-id]]
   (get-in db [:tabs tab-id :items])))




(rf/reg-sub
 :item
 (fn [db [_ item-id]]
   (get-in db [:items item-id])))

(rf/reg-sub
 :item-title
 (fn [db [_ item-id]]
   (get-in db [:items item-id :title])))

(rf/reg-sub
 :item-type
 (fn [db [_ item-id]]
   (get-in db [:items item-id :type])))

(rf/reg-sub
 :item-details
 (fn [db [_ item-id]]
   (get-in db [:items item-id :details])))

(rf/reg-sub
 :item-text
 (fn [db [_ item-id]]
   (get-in db [:items item-id :text])))

(rf/reg-sub
 :item-subtabs
 (fn [db [_ item-id]]
   (get-in db [:items item-id :subtabs])))









(rf/reg-sub
 :ruleset-skills
 (fn [db [_ ruleset-id]]
   (get-in db [:sections ruleset-id :skills])))

(rf/reg-sub
 :ruleset-skillbilities
 (fn [db [_ ruleset-id]]
   (get-in db [:sections ruleset-id :skillbilities?])))


(rf/reg-sub
 :item-password
 (fn [db [_ item-id]]
   (get-in db [:items item-id :password])))

(rf/reg-sub
 :unlock-creature
 (fn [db [_ password]]
   (let [creature-id (filterv (fn [item-id] (= (get-in db [:items item-id :password]) password)) (keys (get-in db [:items])))]
     (if (nil? creature-id)
       (println "ERROR: Password does not correspond with a creature.")
       creature-id))))

(rf/reg-sub
 :creature-title
 (fn [db [_ creature-id]]
   (let [character (get-in db [:items creature-id])]
     (str (:title character) ", the " (:heritage character) " " (:role character)))))

(rf/reg-sub
 :creature-summary
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :summary])))

(rf/reg-sub
 :creature-summary-state
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :summary-state])))

(rf/reg-event-db
 :creature-summary-state-change
 (fn [db [_ creature-id new-state]]
   (assoc-in db [:items creature-id :summary-state] new-state)))

(rf/reg-event-db
 :creature-summary-update
 (fn [db [_ creature-id changes]]
   (assoc-in db [:items creature-id :summary] changes)))

(rf/reg-sub
 :creature-stats
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats])))

(rf/reg-sub
 :coordination
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :physical :skills 0])))

(rf/reg-sub
 :reflexes
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :physical :skills 1])))

(rf/reg-sub
 :endurance
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :physical :skills 2])))


(rf/reg-sub
 :exertion
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :spiritual :skills 0])))

(rf/reg-sub
 :instinct
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :spiritual :skills 1])))

(rf/reg-sub
 :perseverance
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :spiritual :skills 2])))


(rf/reg-sub
 :concentration
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :mental :skills 0])))

(rf/reg-sub
 :recognition
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :mental :skills 1])))

(rf/reg-sub
 :comprehension
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :mental :skills 2])))


(rf/reg-sub
 :persuasion
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :social :skills 0])))

(rf/reg-sub
 :insight
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :social :skills 1])))

(rf/reg-sub
 :connections
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :social :skills 2])))




(rf/reg-sub
 :might
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :physical :abilities 0])))

(rf/reg-sub
 :finesse
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :physical :abilities 1])))

(rf/reg-sub
 :fortitude
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :physical :abilities 2])))


(rf/reg-sub
 :ambition
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :spiritual :abilities 0])))

(rf/reg-sub
 :discipline
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :spiritual :abilities 1])))

(rf/reg-sub
 :dedication
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :spiritual :abilities 2])))


(rf/reg-sub
 :intellect
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :mental :abilities 0])))

(rf/reg-sub
 :intuition
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :mental :abilities 1])))

(rf/reg-sub
 :stability
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :mental :abilities 2])))


(rf/reg-sub
 :presence
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :social :abilities 0])))

(rf/reg-sub
 :wit
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :social :abilities 1])))

(rf/reg-sub
 :poise
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :stats :social :abilities 2])))



(rf/reg-sub
 :creature-resources
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :resources])))

(rf/reg-sub
 :creature-resources-typed
 (fn [db [_ creature-id resource-subtype-id]]
   (filterv (fn [resource-id] (= (get-in db [:items resource-id :subtype]) resource-subtype-id)) (get-in db [:items creature-id :resources]))))

(rf/reg-sub
 :creature-resources-typed-quantified
 (fn [db [_ creature-id resource-subtype-id]]
   (frequencies (<sub [:creature-resources-typed creature-id resource-subtype-id]))))

(rf/reg-event-db
 :creature-add-resource
 (fn [db [_ resource-id creature-id]]
   (update-in db [:items creature-id :resources] conj resource-id)))

;; This should be updated to handle duplicate resource ids better.
(rf/reg-event-db
 :creature-remove-resource
 (fn [db [_ resource-id creature-id]]
   (loop [resource-list (get-in db [:items creature-id :resources])
          index 0]
     (if (>= index (count resource-list))
       (println "ERROR: Resource not found.")
       (if (= resource-id (resource-list index))
         (assoc-in db [:items creature-id :resources] (exsert resource-list (dec index)))
         (recur resource-list (inc index)))))))

(rf/reg-sub
 :creature-feature-list
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :features])))

(rf/reg-sub
 :creature-notes
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :notes])))

(rf/reg-sub
 :creature-notes-state
 (fn [db [_ creature-id]]
   (get-in db [:items creature-id :notes-state])))

(rf/reg-event-db
 :creature-notes-state-change
 (fn [db [_ creature-id new-state]]
   (assoc-in db [:items creature-id :notes-state] new-state)))

(rf/reg-event-db
 :creature-notes-update
 (fn [db [_ creature-id changes]]
   (assoc-in db [:items creature-id :notes] changes)))








(rf/reg-sub
 :resource-title
 (fn [db [_ resource-id]]
   (get-in db [:items resource-id :title])))

(rf/reg-sub
 :resource-subtype
 (fn [db [_ resource-id]]
   (get-in db [:items resource-id :subtype])))

(rf/reg-sub
 :resource-properties
 (fn [db [_ resource-id]]
   (get-in db [:items resource-id :properties])))

(rf/reg-sub
 :resource-quality
 (fn [db [_ resource-id]]
   (get-in db [:items resource-id :benefits :quality])))

(rf/reg-sub
 :resource-quality-bonus
 (fn [db [_ resource-id]]
   (let [quality-level (get-in db [:items resource-id :benefits :quality])]
     (cond
       (< 0 quality-level) (str "+" quality-level "d")
       (> 0 quality-level) (str quality-level "d")
       :else "--"))))

(rf/reg-sub
 :resource-power
 (fn [db [_ resource-id]]
   (get-in db [:items resource-id :benefits :power])))

(rf/reg-sub
 :resource-power-bonus
 (fn [db [_ resource-id]]
   (let [power-level (get-in db [:items resource-id :benefits :power])]
     (cond
       (< 0 power-level) (str "+" power-level)
       (> 0 power-level) (str power-level)
       :else "--"))))

(rf/reg-sub
 :resource-flavor-text
 (fn [db [_ resource-id]]
   (get-in db [:items resource-id :description :flavor-text])))

(rf/reg-sub
 :all-features
 (fn [db _]
   (mapv first (filter
                (fn [[k v]] (= "feature" (<sub [:item-type k])))
                (get db :items)))))


(rf/reg-sub
 :features-by-property
 (fn [db [_ property]]
   (filterv
    (fn [feature]
      (some
       #(= property %)
       (<sub [:feature-keywords feature])))
    (<sub [:all-features]))))


(rf/reg-sub
 :resource-features
 (fn [db [_ resource-id]]
   (get-in db [:items resource-id :features])))

(rf/reg-sub
 :resource-feature-lookup
 (fn [db [_ resource-id]]
   (let [resource-properties (<sub [:resource-properties resource-id])]
     (vec (distinct (apply concat (mapv #(<sub [:features-by-property %]) resource-properties)))))))






(rf/reg-sub
 :resource-list
 (fn [db _]
   (mapv first (filter (fn [[k v]] (= "resource" (<sub [:item-type k]))) (get db :items)))))



(def melee-weapons
  ["Sword" "Spear" "Axe"])

(defn matches? [coll1 coll2]
  (not (apply distinct? (reduce conj coll1 coll2))))

(rf/reg-sub
 :implement
 (fn [db [_ properties]]
   {:title "Modal Tool"
    :description "These arcane gauntlets have two modes stored: the melee mode and the ranged mode. While in melee mode, the left gauntlet produces a shield of solid aethereal force with capabilities and restrictions equivalent to a kite shield while the right gauntlet produces a sharp aethereal blade with capabilities and restrictions equivalent to a longsword. While in ranged mode, the two gauntlets function together as a bow with capabilities and restrictions equivalent to a longbow. Changing from one mode to the other requires a setup action. Gain +Quality +Power on attacks with the Arcane Gauntlets as well as +Quality from your Aethereal Knowledge."}))

(rf/reg-sub
 :weapon-attack
 (fn [db [_ properties]]
   {:title (condp matches? properties
             ["Bow"] "Ranged Attack"
             melee-weapons "Melee Attack")
    :description (condp matches? properties
                   ["Bow"] (str "You may spend a main action to make a Coordination +Quality +Power check against a creature. 
                   You must have the creature targeted and the creature must be within ten zones but cannot be within the same zone. "
                                (condp matches? properties
                                  ["Light"] "As a light bow, it can be wielded alongside a shield. When partitioning the base dice pool, the resulting dice pools must have at least two dice in them. "
                                  ["Medium"] "As a medium bow, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least three dice in them. "
                                  ["Heavy"] "As a heavy bow, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least four dice in them. ")
                                "This weapon deals piercing damage.")
                   (str "You may spend a main action to make a Coordination +Quality +Power check against a creature. "
                        (condp matches? properties
                          ["Sword" "Spear" "Axe"] "You must have the creature targeted and the creature must be in the same zone as you. ")
                        (condp matches? properties
                          ["Light"] "As a light weapon, it may be wielded in either hand. When partitioning the base dice pool, the resulting dice pools must have at least two dice in them. "
                          ["Medium"] "As a medium weapon, it must be wielded in the dominant hand. When partitioning the base dice pool, the resulting dice pools must have at least three dice in them. "
                          ["Heavy"] "As a heavy weapon, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least four dice in them. ")
                        (condp matches? properties
                          ["Sword"] "This weapon may deal piercing or slashing damage."
                          ["Spear"] "This weapon may deal piercing or bludgeoning damage."
                          ["Axe"] "This weapon may deal slashing or bludgeoning damage.")))}))

(rf/reg-sub
 :block-attack
 (fn [db [_ properties]]
   {:title (condp matches? properties
             ["Shield"] "Shield Block"
             ["Armor"] "Armored Defense")
    :description (str "You may spend a main action to make a Reflexes +Quality +Power check to defend yourself against a creature's attack that targets you. 
         When partitioning the base dice pool while defending yourself against physical attacks, the resulting dice pools must have at least "
                      (condp matches? properties
                        ["Light"] "two "
                        ["Medium"] "three "
                        ["Heavy"] "four ")
                      "dice in them. When multiple items contribute to a defense check, the partitioned dice pools must follow the size limitations of every item involved."
                      (if (matches? properties ["Shield"])
                        "As a shield, it can be wielded in either hand."))}))

(rf/reg-sub
 :trait
 (fn [db [_ properties]]
   {:title (condp matches? properties
             ["Flaw"] "Flaw"
             ["Ideal"] "Ideal"
             ["Attribute"] "Attribute"
             ["Goal"] "Goal")
    :description (str "Grants +Quality +Power to checks that "
                      (condp matches? properties
                        ["Flaw"] "give in to your flaw. Checks that attempt to resist giving in to your flaw gain penalties equal to the Quality and Power of your flaw. "
                        ["Ideal"] "promote or exemplify your ideal. Checks that run counter to your ideal gain penalties equal to the Quality and Power of your ideal. "
                        ["Attribute"] "utilize your attribute. Checks that are opposed by your attribute gain penalties equal to the Quality and Power of your attribute. "
                        ["Goal"] "attempt to make progress towards your goal. Checks that sacrifice progress towards your goal gain penalties equal to the Quality and Power of your goal. ")
                      "Circumstances may cause multiple traits to apply bonuses or penalties to a check. Ultimately, it is up to the DM's discretion whether a trait grants a bonus or penalty.")}))

(rf/reg-sub
 :martial-prowess
 (fn [db [_ properties]]
   {:title (str (condp matches? properties
                  ["Light"] "Light Martial Prowess"
                  ["Medium"] "Medium Martial Prowess"
                  ["Heavy"] "Heavy Martial Prowess"))
    :description (str (condp matches? properties
                        ["Light"] "Gain +Quality +Power on checks that use a light weapon, shield, or armor."
                        ["Medium"] "Gain +Quality +Power on checks that use a medium weapon, shield, or armor."
                        ["Heavy"] "Gain +Quality +Power on checks that use a heavy weapon, shield, or armor."))}))

(rf/reg-sub
 :sneak-attack
 (fn [db [_ properties]]
   {:title "Sneak Attack"
    :description "Gain +Quality +Power on checks using weapons that benefit from your martial prowess to attack a creature who is unaware of your presence or who you are hidden from."}))

(rf/reg-sub
 :combat-maneuvers
 (fn [db [_ properties]]
   {:title "Combat Maneuvers"
    :description "When you make a melee attack against a targeted creature, you can choose to make one of the following combat maneuvers instead: trip, shove, or disarm. If your trip attack is successful, the target falls prone. If the shove is successful, the target is moved to an adjacent zone. If the disarm is successful, the target's weapon falls to the ground in the zone that they occupy."}))

(rf/reg-sub
 :protective-stance
 (fn [db [_ properties]]
   {:title "Protective Stance"
    :description "If a target creature within the same zone as you is attacked and you are wielding a shield for which you have martial prowess, you can make a defense check against that attack. The result of your defense check is inflicted as a flat penalty on the attack roll. The target of the attack may still make their own defense check if needed."}))

(rf/reg-sub
 :knowledge
 (fn [db [_ properties]]
   {:title "Recall Information"
    :description (str "Recollection +Quality +Power on checks to determine your knowledge on "
                      (condp matches? properties
                        ["Religion"] "religious matters."
                        ["Aethrology"] "aethereal matters."
                        ["Medicine"] "medicinal matters."
                        ["History"] "historical matters."))}))

(rf/reg-sub
 :implement-prowess
 (fn [db [_ properties]]
   {:title "Arcane Implement Prowess"
    :description "You know how to access the powers stored within arcane implements. Gain +Quality on checks using arcane implements."}))
(rf/reg-sub
 :relic-prowess
 (fn [db [_ properties]]
   {:title "Religious Relic Prowess"
    :description "You are capable of drawing out the power resting within religious relics. Gain +Quality +Power on checks using religious relics."}))

(rf/reg-sub
 :slight-of-hand
 (fn [db [_ properties]]
   {:title "Sleight of Hand"
    :description "Coordination +Quality +Power to checks attempting to plant or lift and object from someone or when attempting to secretly hide or retrieve an object on your person."}))
(rf/reg-sub
 :lockpicking
 (fn [db [_ properties]]
   {:title "Lockpicking"
    :description "Coordination +Quality +Power to checks attempting to pick a lock. You may need certain tools to make this check."}))

(rf/reg-sub
 :reputation
 (fn [db [_ properties]]
   {:title "Reputation"
    :description "Gain +Quality +Power when making checks to persuade someone who is aware of your reputation."}))
(rf/reg-sub
 :membership
 (fn [db [_ properties]]
   {:title "Membership Benefits"
    :description (condp matches? properties
                   ["Political"] "Your political connections grant you access to resources and favors. Gain +Quality +Power when making social checks with those you have political sway with."
                   ["Religious"] "Your religious connections grant you access to resources, favors, lodging, and healing. Gain +Quality +Power when making social checks with those who share your religious beliefs."
                   ["Guild"] "Your economic connections grant you access to resources and favors. Gain +Quality +Power when making social checks with your business associates.")}))
(rf/reg-sub
 :relationship
 (fn [db [_ properties]]
   {:title "Friendship"
    :description "Your relationship gives you access to resources and favors. Gain +Quality +Power when making social checks with this individual."}))

(rf/reg-sub
 :potion
 (fn [db [_ properties]]
   {:title (condp matches? properties
             ["Healing"] "Cure Wounds"
             "Drink Potion")
    :description (condp matches? properties
                   ["Healing"] "When consumed, this potion heals 1 point of damage and grants +1d on healing checks for the physical domain.")}))
(rf/reg-sub
 :poison
 (fn [db [_ properties]]
   {:title "Inflict Poison"
    :description "When ingested, the infected creature must make a physical healing check with a Target Number of 6. If they fail, then they take -1d -2 on all of their checks for 1d4 hours. If they succeed, then they only take -1d on all of their checks for the next hour. Contains 3 doses which can be applied through ingesting food or drink that contains the poison or the user can apply the poison to a weapon that deals piercing or slashing damage and hit the creature with the weapon."}))
(rf/reg-sub
 :tool
 (fn [db [_ properties]]
   {:title "Utilize Tool"
    :description (condp matches? properties
                   ["Climbing"] "Gain +Quality +Power on checks attempting to climb walls, cliffs, trees, etc."
                   ["Larceny"] "Gain +Quality +Power on checks attempting to open doors and locks or to disarm traps and devices while using these tools."
                   "You use the tool!")}))
(rf/reg-sub
 :book
 (fn [db [_ properties]]
   {:title (condp matches? properties
             ["Religious"] "Prayer of Healing"
             ["Medicinal"] "Common Treatments"
             ["Aethereal"] "Arcane Knowledge")
    :description (condp matches? properties
                   ["Religious"] "Exertion +Quality +Power with a Target Number of 5 to pray over a flame to imbue it with the healing powers of Heilm. On a success, the flame heals a number of physical, spiritual, and mental wounds equal to the result of the check at the rate of 1 wound per hour and can be distributed among any number of creatures. On a failure, you take a number of spiritual wounds equal to the amount that you failed by. This prayer can only be made once per day."
                   ["Medicinal"] "Concentration +Quality +Power on checks using herbs from the Four Duchies to treat wounds or illnesses."
                   ["Aethereal"] "Gain +Quality +Power on checks that attempting to understand or use objects, text, or rituals that are of Eldari origin.")}))

(rf/reg-sub
 :coin
 (fn [db [_ properties]]
   {:title "Gold"
    :description "Gold is a standard unit of exchange for goods and services. It may also be used to influence the outcomes of persuasion checks depending on the recipient's disposition towards bribery."}))




(rf/reg-sub
 :feature-title
 (fn [db [_ feature resource-properties]]
   (get-in (<sub [feature resource-properties]) [:title])))

(rf/reg-sub
 :feature-details
 (fn [db [_ feature resource-properties]]
   (get-in (<sub [feature resource-properties]) [:description])))




(rf/reg-sub
 :heritage-details
 (fn [db [_ heritage-id]]
   (get-in db [:items heritage-id :details])))

(rf/reg-sub
 :heritage-resources
 (fn [db [_ heritage-id]]
   (get-in db [:items heritage-id :resources])))

(rf/reg-sub
 :heritage-features
 (fn [db [_ heritage-id]]
   (get-in db [:items heritage-id :features])))


(rf/reg-sub
 :role-details
 (fn [db [_ role-id]]
   (get-in db [:items role-id :details])))

(rf/reg-sub
 :role-resources
 (fn [db [_ role-id]]
   (get-in db [:items role-id :resources])))

(rf/reg-sub
 :role-features
 (fn [db [_ role-id]]
   (get-in db [:items role-id :features])))




;; These are all for subscribing to and formatting rules data

(rf/reg-sub
 :prototype-text
 (fn [db [_ item-id keyword]]
   (get-in db [:items item-id :text keyword])))

(rf/reg-sub
 :overview
 (fn [db [_ item-id]]
   (get-in db [:items item-id :text :overview])))

(rf/reg-sub
 :base-dice-pool
 (fn [db [_ item-id skillbilities? skills]]
   (let [end (if (true? skillbilities?)
               (get-in db [:items item-id :text :base-dice-pool-variations :skillbilities])
               (get-in db [:items item-id :text :base-dice-pool-variations :skills-and-abilities]))
         example (cond
                   (and (true? skillbilities?) (= skills 1)) (get-in db [:items item-id :text :dice-pool-example :simple-skillbilities])
                   (and (true? skillbilities?) (= skills 3)) (get-in db [:items item-id :text :dice-pool-example :full-skillbilities])
                   (and (false? skillbilities?) (= skills 3)) (get-in db [:items item-id :text :dice-pool-example :skills-and-abilities]))]
     (str (get-in db [:items item-id :text :base-dice-pool]) end " " example))))

(rf/reg-sub
 :bonuses-and-penalties
 (fn [db [_ item-id]]
   (get-in db [:items item-id :text :bonuses-and-penalties])))

(rf/reg-sub
 :splintering
 (fn [db [_ item-id]]
   (get-in db [:items item-id :text :splintering])))

(rf/reg-sub
 :caution
 (fn [db [_ item-id]]
   (get-in db [:items item-id :text :caution])))

(rf/reg-sub
 :passive-checks
 (fn [db [_ item-id]]
   (get-in db [:items item-id :text :passive-checks])))

(rf/reg-sub
 :actions
 (fn [db [_ item-id]]
   (get-in db [:items item-id :text :actions])))

(rf/reg-sub
 :moments
 (fn [db [_ item-id]]
   (get-in db [:items item-id :text :moments])))

(rf/reg-sub
 :rounds
 (fn [db [_ item-id]]
   (get-in db [:items item-id :text :rounds])))

(rf/reg-sub
 :complex-moments
 (fn [db [_ item-id encounter-style splintering caution]]
   (case encounter-style
     "turn-based" (get-in db [:items item-id :text (keyword encounter-style) :moments])
     "simultaneous" (str (get-in db [:items item-id :text (keyword encounter-style) :moments :beginning])
                         (if (or (= true splintering) (= true caution))
                           (str
                            "may modify their dice pool at this point. "
                            (if (= true splintering)
                              (str (get-in db [:items item-id :text (keyword encounter-style) :moments :body :splintering])))
                            "Modifications to your dice pool may cause your actions to be resolved earlier or later than they otherwise would be. ")
                           (get-in db [:items item-id :text (keyword encounter-style) :moments :body :default]))
                         (get-in db [:items item-id :text (keyword encounter-style) :moments :ending]))
     :else (println (str "ERROR: Unrecognized encounter style in item: " item-id)))))

(rf/reg-sub
 :complex-rounds
 (fn [db [_ item-id encounter-style]]
   (get-in db [:items item-id :text (keyword encounter-style) :rounds])))



(rf/reg-sub
 :injuries
 (fn [db [_ item-id damage-tiers recovery-tiers?]]
   (if (= damage-tiers 1)
     (get-in db [:items item-id :text :injuries damage-tiers])
     (str
      (get-in db [:items item-id :text :injuries damage-tiers :beginning])
      (if (true? recovery-tiers?)
        (get-in db [:items item-id :text :injuries damage-tiers :recovery-tiers?]))
      (get-in db [:items item-id :text :injuries damage-tiers :ending])))))

(rf/reg-sub
 :conditions
 (fn [db [_ item-id condition-style skills abilities skillbilities?]]
   (str
    (get-in db [:items item-id :text :conditions :beginning])
    (cond
      (and (true? skillbilities?) (= skills 1)) "that domain's skill. "
      (and (true? skillbilities?) (= skills 3)) "that domain's continuation skill. "
      (and (false? skillbilities?) (= skills 3)) "that domain's continuation skill with it's resilience ability. ")
    (get-in db [:items item-id :text :conditions (keyword condition-style)])
    (get-in db [:items item-id :text :conditions :ending]))))

(rf/reg-sub
 :recovery
 (fn [db [_ item-id damage-tiers recovery-tiers? recovery-times treatment? skills abilities skillbilities?]]
   (str
    (if (false? recovery-tiers?)
      (str
       (get-in db [:items item-id :text :recovery damage-tiers])
       (get-in recovery-times [:major :value]) " "
       (get-in recovery-times [:major :unit]) ". ")
      (str (case damage-tiers
             1 (str
                (get-in db [:items item-id :text :recovery damage-tiers])
                (get-in recovery-times [:major :value]) " "
                (get-in recovery-times [:major :unit]) " ")
             2 (str
                (get-in db [:items item-id :text :recovery damage-tiers :minor])
                (get-in recovery-times [:minor :value]) " "
                (get-in recovery-times [:minor :unit]) " "
                (get-in db [:items item-id :text :recovery damage-tiers :major])
                (get-in recovery-times [:major :value]) " "
                (get-in recovery-times [:major :unit]) ". ")
             3 (str
                (get-in db [:items item-id :text :recovery damage-tiers :minor])
                (get-in recovery-times [:minor :value]) " "
                (get-in recovery-times [:minor :unit]) ", "
                (get-in db [:items item-id :text :recovery damage-tiers :moderate])
                (get-in recovery-times [:moderate :value]) " "
                (get-in recovery-times [:moderate :unit]) ", "
                (get-in db [:items item-id :text :recovery damage-tiers :major])
                (get-in recovery-times [:major :value]) " "
                (get-in recovery-times [:major :unit]) ". "))))
    (if (= true treatment?)
      (str (get-in db [:items item-id :text :recovery :treatment?])
           (cond
             (and (true? skillbilities?) (= skills 1)) "an acuity skill check. "
             (and (true? skillbilities?) (= skills 3)) "a comprehension skill check. "
             (and (false? skillbilities?) (= skills 3)) "a comprehension skill check with the relevant domain's discipline ability. ")))
    (get-in db [:items item-id :text :recovery :ending]))))

(rf/reg-sub
 :condition-title
 (fn [db [_ condition-id]]
   (get-in db [:items condition-id :title])))

(rf/reg-sub
 :condition-description
 (fn [db [_ condition-id]]
   (get-in db [:items condition-id :description])))

(rf/reg-sub
 :condition-effects
 (fn [db [_ condition-id]]
   (get-in db [:items condition-id :effects])))

(rf/reg-sub
 :condition-effect-description
 (fn [db [_ condition-id effect-id]]
   (get-in db [:items condition-id :effects effect-id :description])))

(rf/reg-sub
 :condition-effect-duration
 (fn [db [_ condition-id effect-id]]
   (get-in db [:items condition-id :effects effect-id :duration])))




(rf/reg-sub
 :world-overview
 (fn [db [_ world-id]]
   (get-in db [:sections world-id :overview])))

(rf/reg-sub
 :world-territories
 (fn [db [_ world-id]]
   (get-in db [:sections world-id :territories])))

(rf/reg-sub
 :territory-civilizations
 (fn [db [_ territory-id]]
   (get-in db [:items territory-id :civilizations])))

(rf/reg-sub
 :territory-details
 (fn [db [_ territory-id]]
   (get-in db [:items territory-id :details])))

(rf/reg-sub
 :world-civilizations
 (fn [db [_ world-id]]
   (loop [territories (get-in db [:sections world-id :territories])
          civilizations []]
     (if (empty? territories)
       (apply vector (distinct civilizations))
       (recur (rest territories) (apply conj civilizations (get-in db [:items (first territories) :civilizations])))))))

(rf/reg-sub
 :world-lore
 (fn [db [_ world-id]]
   (loop [civilizations (<sub [:world-civilizations world-id])
          lore []]
     (if (empty? civilizations)
       (apply vector (distinct lore))
       (recur (rest civilizations) (apply conj lore (get-in db [:items (first civilizations) :lore])))))))

(rf/reg-sub
 :world-organizations
 (fn [db [_ world-id]]
   (loop [civilizations (<sub [:world-civilizations world-id])
          organizations []]
     (if (empty? civilizations)
       (apply vector (distinct organizations))
       (recur (rest civilizations) (apply conj organizations (get-in db [:items (first civilizations) :organizations])))))))

(rf/reg-sub
 :world-key-figures
 (fn [db [_ world-id]]
   (loop [civilizations (<sub [:world-civilizations world-id])
          key-figures []]
     (if (empty? civilizations)
       (apply vector (distinct key-figures))
       (recur (rest civilizations) (apply conj key-figures (get-in db [:items (first civilizations) :key-figures])))))))

(rf/reg-sub
 :world-advancements
 (fn [db [_ world-id]]
   (loop [civilizations (<sub [:world-civilizations world-id])
          advancements []]
     (if (empty? civilizations)
       (apply vector (distinct advancements))
       (recur (rest civilizations) (apply conj advancements (get-in db [:items (first civilizations) :advancements])))))))

(rf/reg-sub
 :world-creatures
 (fn [db [_ world-id]]
   (loop [territories (<sub [:world-territories world-id])
          creatures []]
     (if (empty? territories)
       (apply vector (distinct creatures))
       (recur (rest territories) (apply conj creatures (get-in db [:items (first territories) :creatures])))))))

(rf/reg-sub
 :world-heritages
 (fn [db [_ world-id]]
   (loop [civilizations (<sub [:world-civilizations world-id])
          heritages []]
     (if (empty? civilizations)
       (apply vector (distinct heritages))
       (recur (rest civilizations) (apply conj heritages (get-in db [:items (first civilizations) :heritages])))))))

(rf/reg-sub
 :world-roles
 (fn [db [_ world-id]]
   (loop [civilizations (<sub [:world-civilizations world-id])
          roles []]
     (if (empty? civilizations)
       (apply vector (distinct roles))
       (recur (rest civilizations) (apply conj roles (get-in db [:items (first civilizations) :roles])))))))

(rf/reg-sub
 :world-resources
 (fn [db [_ world-id]]
   (loop [civilizations (<sub [:world-civilizations world-id])
          resources []]
     (if (empty? civilizations)
       (apply vector (distinct resources))
       (recur (rest civilizations) (apply conj resources (get-in db [:items (first civilizations) :resources])))))))


(rf/reg-sub
 :civilization-details
 (fn [db [_ civilization-id]]
   (get-in db [:items civilization-id :details])))

(rf/reg-sub
 :civilization-lore
 (fn [db [_ civilization-id]]
   (get-in db [:items civilization-id :lore])))

(rf/reg-sub
 :civilization-organizations
 (fn [db [_ civilization-id]]
   (get-in db [:items civilization-id :organizations])))

(rf/reg-sub
 :civilization-key-figures
 (fn [db [_ civilization-id]]
   (get-in db [:items civilization-id :key-figures])))

(rf/reg-sub
 :civilization-advancements
 (fn [db [_ civilization-id]]
   (get-in db [:items civilization-id :advancements])))

