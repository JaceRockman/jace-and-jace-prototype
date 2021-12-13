(ns modular-roleplaying-framework.views
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [kee-frame.core :as kf]
   [clojure.string :as s]
   [modular-roleplaying-framework.db-CRUD :refer (<sub >evt)]))



;;;;;;;;;;;;;;;
;; Main Menu ;;
;;;;;;;;;;;;;;;

;; Currently, the main menu simply navigates to the test data of ruleset 1, world 1, adventure 1, and layout: "book"
;; Eventually, it will actually navigate to real data.
(defn main-menu []
  [:div.main-menu
   [:button
    {:class "view-system-btn"
     :type "button"
     :value "Prototype System"
     :on-click #(>evt [:initialize-system (<sub [:section 3]) (<sub [:section 2]) (<sub [:section 10]) "book-layout"])}
    "Prototype System"]
  ;;  [:button
  ;;   {:class "view-system-btn"
  ;;    :type "button"
  ;;    :value "Simple System"
  ;;    :on-click #(>evt [:initialize-system (<sub [:section 3]) (<sub [:section 2]) (<sub [:section 11]) "book-layout"])}
  ;;   "Simple System"]
  ;;  [:button
  ;;   {:class "view-system-btn"
  ;;    :type "button"
  ;;    :value "Moderate System"
  ;;    :on-click #(>evt [:initialize-system (<sub [:section 3]) (<sub [:section 2]) (<sub [:section 12]) "book-layout"])}
  ;;   "Moderate System"]
  ;;  [:button
  ;;   {:class "view-system-btn"
  ;;    :type "button"
  ;;    :value "Complex System"
  ;;    :on-click #(>evt [:initialize-system (<sub [:section 3]) (<sub [:section 2]) (<sub [:section 13]) "book-layout"])}
  ;;   "Complex System"]
  ;;  [:button
  ;;   {:class "view-system-btn"
  ;;    :type "button"
  ;;    :value "Multiple Characters"
  ;;    :on-click #(>evt [:initialize-system (<sub [:section 13]) (<sub [:section 3]) (<sub [:section 3]) "book-layout"])}
  ;;   "Multiple Characters"]
   ])



;;;;;;;;;;;;;;;;;;;;;;
;; Helper Functions ;;
;;;;;;;;;;;;;;;;;;;;;;

(defn overlay
  ([item-id]
   (do (>evt [:overlay-item-change item-id])
       (>evt [:overlay-state-change "visible"])))
  ([item-id params]
   (do (>evt [:overlay-item-change item-id])
       (>evt [:overlay-state-change "visible"])
       (>evt [:overlay-params-change params]))))

(defn dice-roll
  ([dice-quantity dice-size roll-type]
   (str roll-type ": " (apply max (repeat dice-quantity (inc (rand-int dice-size))))))
  ([dice-quantity dice-size flat-bonus roll-type]
   (str roll-type ": " (+ flat-bonus (apply max (repeat dice-quantity (inc (rand-int dice-size))))))))

(defn dice-button
  ([dice-quantity dice-size roll-type]
   [:button {:type "button"
             :value (str dice-quantity "d" dice-size)
             :on-click #(println (dice-roll dice-quantity dice-size roll-type))}
    (str dice-quantity "d" dice-size)])
  ([dice-quantity dice-size flat-bonus roll-type]
   [:button {:type "button"
             :value (str dice-quantity "d" dice-size " +" flat-bonus)
             :on-click #(println (dice-roll dice-quantity dice-size flat-bonus roll-type))}
    (str dice-quantity "d" dice-size " +" flat-bonus)]))

(defn dice-display [dice-quantity dice-size]
  [:div {:style {:font-size "1.5em"}}
   (str dice-quantity "d" dice-size)])

(defn text->hiccup
  "Convert newlines to [:br]'s."
  [text]
  (->> (s/split text "\n")
       (interpose [:br])
       (map #(if (string? %)
               %
               (with-meta % {:key (gensym "br-")})))))

;; Given a section-type (adventure, ruleset, world, etc.) this function will return the color styling for that section.
;; (defn background-color [section-type section-number]
;;   (case section-type
;;     "ruleset"   "rgb(230, 230, 255)"
;;     "world"     "rgb(230, 255, 230)"
;;     "adventure" "rgb(255, 230, 230)"
;;     "character" "rgb(250, 230, 255)"
;;     (println "ERROR: BACKGROUND COLOR: unrecognized section type in" section-number "-" section-type)))

;; Given a section-type (adventure, ruleset, world, etc.) this function will return the color styling for that section.
(defn background-color [section-type section-number]
  (case section-type
    "ruleset"   "rgb(125, 125, 125)"
    "world"     "rgb(125, 125, 125)"
    "adventure" "rgb(125, 125, 125)"
    "character" "rgb(125, 125, 125)"
    (println "ERROR: BACKGROUND COLOR: unrecognized section type in" section-number "-" section-type)))

;; This is used to simplify the the class declaration in the main div for the section function.
;; I'm hoping to find a more clever way of doing this since this feels pretty ugly.
(defn get-section-class [section-layout section-number]
  (case section-layout
    "sidebar" (case section-number
                "section-one" "sidebar left"
                "section-three" "sidebar right")
    "page" "page"
    "book" "book"))

(defn divify [content]
  [:div (str content)])

(defn keywordize-keys [m] (zipmap (map keyword (keys m)) (vals m)))

(defn keywordized-frequencies [v] (keywordize-keys (frequencies v)))

(defn positions
  [pred coll]
  (keep-indexed (fn [idx x]
                  (when (= pred x)
                    idx))
                coll))



;;;;;;;;;;;;;;;;;;;;;;
;; Floating Buttons ;;
;;;;;;;;;;;;;;;;;;;;;;

(defn toggle-layout [section-one section-two section-three layout]
  [:div {:class "float-button" :style {:bottom "6%"}}
   [:div [:input {:class "float-button"
                  :type "button"
                  :value "Toggle Layout"
                  :on-click #(>evt [:toggle-layout])}]]])

(defn reorder-sections [section-one section-two section-three layout direction]
  [:div.float-button
   [:button {:class "float-button"
             :type "button"
             :on-click #(>evt [:reorder-sections direction])}
    [:i {:class (case direction
                  "forward" "fas fa-chevron-right"
                  "backward" "fas fa-chevron-left"
                  :else (println "ERROR: Unrecognized direction while reordering sections."))}]]])


;;;;;;;;;;;;;;;;;;;
;; Tab Templates ;;
;;;;;;;;;;;;;;;;;;;
;; Tasks:
;; 1. Create better formatting for the content section.

;; Testing out tab template functionality.
;; In a tab's data, it will have a template.
;; The tab-template function will receive that template name and return the function that knows how to turn sidebar-items and page-items into hiccup.

(defn text [section-number section-type section-id section-tab section-layout]
  (let [items (<sub [:tab-items section-tab])]
    [:div {:class "body"} (<sub [:item-text (items 0)])]))

(defn list-item [item section-number section-tab]
  [:button {:class "body"
            :style (if (= (<sub [:state-section-item section-number]) item)
                     {:background "black"
                      :color "white"})
            :type "button"
            :on-click (if (= item (<sub [:state-section-item section-number]))
                        #(>evt [:item-deselect section-number])
                        #(do (>evt [:item-deselect section-number])
                             (>evt [:item-select section-number item])))}
   (<sub [:item-title item])])

(defn basic-list [section-number section-type section-id section-tab section-layout]
  (let [items (<sub [:tab-items section-tab])]
    (doall (map list-item items (repeat section-number)))))

   ;;;;;;;;;;;;;;
   ;; Rulesets ;;
   ;;;;;;;;;;;;;;

(defn skillbility-view [skillbility-id section-layout]
  [:button {:class "unselected-button"
            :style {:width "95%"}
            :on-click #(overlay skillbility-id)}
   [:div (<sub [:item-title skillbility-id])]])

(defn skills-abilities-details [section-number section-type section-id section-tab section-layout]
  (if (= section-layout "sidebar")
    [:div {:style {:color "maroon"}} "The skills and abilities section is not yet formatted to display in the sidebar. Modify your view using the layout controls at the bottom of the page to view the skills and abilities details in the page-style or book-style section."]
    [:div {:class "moderate-stats"}
     [:div {:class "skill-ability-header"}]
     [:div {:class "skill-ability-header"} "Initiation"]
     [:div {:class "skill-ability-header"} "Reaction"]
     [:div {:class "skill-ability-header"} "Continuation"]
     [:div {:class "domain-header"} "Physical"]
     [:div {:class "border"} (skillbility-view 10 section-layout)]
     [:div {:class "border"} (skillbility-view 11 section-layout)]
     [:div {:class "border"} (skillbility-view 12 section-layout)]
     [:div {:class "domain-header"} "Spiritual"]
     [:div {:class "border"} (skillbility-view 13 section-layout)]
     [:div {:class "border"} (skillbility-view 14 section-layout)]
     [:div {:class "border"} (skillbility-view 15 section-layout)]
     [:div {:class "domain-header"} "Mental"]
     [:div {:class "border"} (skillbility-view 16 section-layout)]
     [:div {:class "border"} (skillbility-view 17 section-layout)]
     [:div {:class "border"} (skillbility-view 18 section-layout)]
     [:div {:class "domain-header"} "Social"]
     [:div {:class "border"} (skillbility-view 19 section-layout)]
     [:div {:class "border"} (skillbility-view 20 section-layout)]
     [:div {:class "border"} (skillbility-view 21 section-layout)]]))

(defn skill-checks [_ _ section-id section-tab section-layout]
  (let [item ((<sub [:tab-items section-tab]) 0)
        {:keys [skills skillbilities? splintering caution]} (<sub [:section section-id])
        style (if (= section-layout "book")
                "book-style-text"
                "standard-text")]
    [:div
     [:div {:style {:font-size "20pt"}} "Overview"]
     [:div {:class style} (<sub [:prototype-text item :overview])]
     [:br]
     [:div {:style {:font-size "20pt"}} "Base Dice Pool"]
     [:div {:class style} (<sub [:prototype-text item :base-dice-pool])]
     [:br]
     [:div {:style {:font-size "20pt"}} "Bonuses & Penalties"]
     [:div {:class style} (<sub [:prototype-text item :bonuses-and-penalties])]
     [:br]
     [:div {:style {:font-size "20pt"}} "Splintering"]
     [:div {:class style} (<sub [:prototype-text item :splintering])]
     [:br]
     [:div {:style {:font-size "20pt"}} "Combining & Splitting"]
     [:div {:class style} (<sub [:prototype-text item :combining-and-splitting])]
     [:br]
     [:div {:style {:font-size "20pt"}} "Passive Checks"]
     [:div {:class style} (<sub [:prototype-text item :passive])]
     [:br]]))

(defn resources [section-number section-type section-id section-tab section-layout]
  (let [item ((<sub [:tab-items section-tab]) 0)
        style (if (= section-layout "book")
                "book-style-text"
                "standard-text")]
    [:div
     [:div {:style {:font-size "20pt"}} "Overview"]
     [:div {:class style} (<sub [:overview item])]
     [:br]]))

(defn encounters [section-number section-type section-id section-tab section-layout]
  (let [item ((<sub [:tab-items section-tab]) 0)
        {:keys [encounter-style splintering caution]} (<sub [:section section-id])
        style (if (= section-layout "book")
                "book-style-text"
                "standard-text")]
    [:div
     [:div {:style {:font-size "20pt"}} "Overview"]
     [:div {:class style} (<sub [:prototype-text item :overview])]
     [:br]
     [:div {:style {:font-size "20pt"}} "Rounds"]
     [:div {:class style} (<sub [:prototype-text item :rounds])]
     [:br]
     [:div {:style {:font-size "20pt"}} "Moments"]
     [:div {:class style} (<sub [:prototype-text item :moments])]
     [:br]
     [:div {:style {:font-size "20pt"}} "Actions"]
     [:div {:class style} (<sub [:prototype-text item :actions])]
     [:div {:class "actions-list"}
      [:div {:class "action-section"}
       [:div {:class "header"} (str "Setup Actions")]
       (map divify ["- Duck Behind Cover"
                    "- Fall Prone"
                    "- Stand Up"
                    "- Walk"
                    "- Focus"])]
      [:div {:class "action-section"}
       [:div {:class "header"} (str "Engagement Actions")]
       [:div {:style {:font-size "1.5em"}} "Initiations"]
       (map divify ["- Cast a spell"
                    "- Attack with a weapon"
                    "- Grapple"
                    "- Disarm"
                    "- Climb"
                    "- Swim"
                    "- Jump"
                    "- Hide"
                    "- Provide First Aid"])
       [:div {:style {:font-size "1.5em"}} "Reactions"]
       (map divify ["- Block"
                    "- Parry"
                    "- Counterspell"
                    "- Guard mind"
                    "- Evade"])]]]))

(defn damage-and-recovery [section-number section-type section-id section-tab section-layout]
  (let [item ((<sub [:tab-items section-tab]) 0)
        {:keys [damage-tiers recovery-tiers? condition-style skills abilities skillbilities? recovery-times treatment?]} (<sub [:section section-id])
        style (if (= section-layout "book")
                "book-style-text"
                "standard-text")]
    [:div
     [:div {:style {:font-size "20pt"}} "Overview"]
     [:div {:class style} (<sub [:prototype-text item :overview])]
     [:br]
     [:div {:style {:font-size "20pt"}} "Injuries"]
     [:div {:class style} (<sub [:prototype-text item :injuries])]
     [:br]
     [:div {:style {:font-size "20pt"}} "Conditions"]
     [:div {:class style} (<sub [:prototype-text item :conditions])]
     [:br]
     [:div {:style {:font-size "20pt"}} "Recovery"]
     [:div {:class style} (<sub [:prototype-text item :recovery])]
     [:br]]))

(defn condition [condition]
  [:button {:class "unselected-button medium"
            :on-click #(overlay condition)}
   [:div (<sub [:item-title condition])]])

(defn conditions-list [section-number section-type section-id section-tab section-layout]
  (let [items (<sub [:tab-items section-tab])]
    [:div {:class "conditions-list"}
     (map condition items)]))



   ;;;;;;;;;;;;;;;
   ;; Creatures ;;
   ;;;;;;;;;;;;;;;


(defn creature-summary [section-number section-type section-id section-tab section-layout]
  (let [creature-id (<sub [:state-section-item section-number])]
    [:div {:style {:grid-column "1 / 3" :background "rgb(150, 150, 150)" :padding-left "10px" :padding-top "10px"}}
     [:div {:class "creature-summary-header"}
      [:div {:style {:color "inherit"}} (<sub [:creature-title creature-id])]]
    ;; (case (<sub [:creature-summary-state creature-id])
    ;;   0 [:div {:class "creature-summary"}
    ;;      [:div {:class "creature-summary-header"}
    ;;       [:div {:style {:font-size "2em"}} (<sub [:creature-title creature-id])]
    ;;       [:button {:style {:background "none" :border "none" :outline "none"}
    ;;                 :on-click #(>evt [:creature-summary-state-change creature-id 1])}
    ;;        [:i {:class "fas fa-edit"}]]]
    ;;      [:div {:class (if (= "book" section-layout) "book-style-text" "standard-text")}  (<sub [:creature-summary creature-id])]]
    ;;   1 [:div {:class "creature-summary"}
    ;;      [:div {:class "creature-summary-header"}
    ;;       [:div {:style {:font-size "2em"}} (<sub [:creature-title creature-id])]
    ;;       [:button {:style {:margin-left "10px" :margin-top "5px" :max-height "2em" :background "none" :border "none" :outline "none"}
    ;;                 :on-click #(>evt [:creature-summary-state-change creature-id 0])}
    ;;        [:i {:class "fas fa-check"}]]]
    ;;      [:div {:style {:width "100%"}}]
    ;;      [:textarea {:class "text-edit"
    ;;                  :value (<sub [:creature-summary creature-id])
    ;;                  :on-change #(>evt [:creature-summary-update creature-id (-> % .-target .-value)])}]])
     [:div {:style {:grid-template-columns "span"}}  (<sub [:creature-summary creature-id])]
     [:br]]))



(defn skill [skill-title skill-level section-layout]
  [:div {:class "stat"}
   (if (not= "sidebar" section-layout) [:div skill-title])
   [:div skill-level]])

(defn ability [ability-title ability-level section-layout]
  [:div {:class "stat"}
   (if (not= "sidebar" section-layout) [:div ability-title])
   [:div (str "d" ability-level)]])

(defn skillbility [skillbility-title skill-level ability-level section-layout]
  [:div {:class "stat"}
   (if (not= "sidebar" section-layout) [:div skillbility-title])
   (dice-display skill-level (* 2 ability-level))])

(defn simple-stat-block [creature-id section-layout]
  [:div {:class "simple-stats"}
   [:div {:class "domain-header"} "Physical"]
   (skillbility "Athleticism" (<sub [:coordination creature-id]) (<sub [:might creature-id]) section-layout)
   [:div {:class "domain-header"} "Spiritual"]
   (skillbility "Will" (<sub [:exertion creature-id]) (<sub [:ambition creature-id]) section-layout)
   [:div {:class "domain-header"} "Mental"]
   (skillbility "Acuity" (<sub [:concentration creature-id]) (<sub [:intellect creature-id]) section-layout)
   [:div {:class "domain-header"} "Social"]
   (skillbility "Charisma" (<sub [:persuasion creature-id]) (<sub [:presence creature-id]) section-layout)])

(defn moderate-stat-block [creature-id section-layout]
  (if (= section-layout "sidebar")
    [:div {:style {:color "maroon" :margin-top "10px" :margin-bottom "10px"}} "The stats section is not yet formatted to display in the sidebar. Modify your view using the layout controls at the bottom of the page to view your stats in the page-style or book-style section."]
    [:div {:class "moderate-stats"}
     [:div {:class "skill-ability-header"}]
     [:div {:class "skill-ability-header"} "Initiation"]
     [:div {:class "skill-ability-header"} "Reaction"]
     [:div {:class "skill-ability-header"} "Continuation"]
     [:div {:class "domain-header"} "Physical"]
     (skillbility "Coordination" (<sub [:coordination creature-id]) (<sub [:might creature-id]) section-layout)
     (skillbility "Reflexes" (<sub [:reflexes creature-id]) (<sub [:finesse creature-id]) section-layout)
     (skillbility "Endurance" (<sub [:endurance creature-id]) (<sub [:fortitude creature-id]) section-layout)
     [:div {:class "domain-header"} "Spiritual"]
     (skillbility "Exertion" (<sub [:exertion creature-id]) (<sub [:ambition creature-id]) section-layout)
     (skillbility "Instinct" (<sub [:instinct creature-id]) (<sub [:discipline creature-id]) section-layout)
     (skillbility "Perseverance" (<sub [:perseverance creature-id]) (<sub [:dedication creature-id]) section-layout)
     [:div {:class "domain-header"} "Mental"]
     (skillbility "Concentration" (<sub [:concentration creature-id]) (<sub [:intellect creature-id]) section-layout)
     (skillbility "Recognition" (<sub [:recognition creature-id]) (<sub [:intuition creature-id]) section-layout)
     (skillbility "Comprehension" (<sub [:comprehension creature-id]) (<sub [:stability creature-id]) section-layout)
     [:div {:class "domain-header"} "Social"]
     (skillbility "Persuasion" (<sub [:persuasion creature-id]) (<sub [:presence creature-id]) section-layout)
     (skillbility "Insight" (<sub [:insight creature-id]) (<sub [:wit creature-id]) section-layout)
     (skillbility "Connections" (<sub [:connections creature-id]) (<sub [:poise creature-id]) section-layout)]))

(defn complex-stat-block [creature-id section-layout]
  (let [sidebar? (= "sidebar" section-layout)]
    (if (= "blarg" section-layout)
      [:div {:class "standard-text" :style {:color "red"}} "ERROR: Complex stats cannot currently be displayed in the sidebar."]
      [:div {:class "complex-stats"}
       [:div {:class "skill-ability-header"}]
       [:div {:class "skill-ability-header" :style {:grid-column "2 / 5"}} "Skills"]
       [:div {:class "skill-ability-header" :style {:grid-column "5 / 8"}} "Abilities"]
       (if-not sidebar? [:div {:class "skill-ability-header"}])
       (if-not sidebar? [:div {:class "skill-ability-header"} "Initiation"])
       (if-not sidebar? [:div {:class "skill-ability-header"} "Reaction"])
       (if-not sidebar? [:div {:class "skill-ability-header"} "Continuation"])
       (if-not sidebar? [:div {:class "skill-ability-header"} "Dominance"])
       (if-not sidebar? [:div {:class "skill-ability-header"} "Competence"])
       (if-not sidebar? [:div {:class "skill-ability-header"} "Resilience"])
       [:div {:class "domain-header"} "Physical"]
       (skill "Coordination" (<sub [:coordination creature-id]) section-layout)
       (skill "Reflexes" (<sub [:reflexes creature-id]) section-layout)
       (skill "Endurance" (<sub [:endurance creature-id]) section-layout)
       (ability "Might" (<sub [:might creature-id]) section-layout)
       (ability "Finesse" (<sub [:finesse creature-id]) section-layout)
       (ability "Fortitude" (<sub [:fortitude creature-id]) section-layout)
       [:div {:class "domain-header"} "Spiritual"]
       (skill "Exertion" (<sub [:exertion creature-id]) section-layout)
       (skill "Instinct" (<sub [:instinct creature-id]) section-layout)
       (skill "Perseverance" (<sub [:perseverance creature-id]) section-layout)
       (ability "Ambition" (<sub [:ambition creature-id]) section-layout)
       (ability "Discipline" (<sub [:discipline creature-id]) section-layout)
       (ability "Dedication" (<sub [:dedication creature-id]) section-layout)
       [:div {:class "domain-header"} "Mental"]
       (skill "Concentration" (<sub [:concentration creature-id]) section-layout)
       (skill "Recognition" (<sub [:recognition creature-id]) section-layout)
       (skill "Comprehension" (<sub [:comprehension creature-id]) section-layout)
       (ability "Intellect" (<sub [:intellect creature-id]) section-layout)
       (ability "Intuition" (<sub [:intuition creature-id]) section-layout)
       (ability "Stability" (<sub [:stability creature-id]) section-layout)
       [:div {:class "domain-header"} "Social"]
       (skill "Persuasion" (<sub [:persuasion creature-id]) section-layout)
       (skill "Insight" (<sub [:insight creature-id]) section-layout)
       (skill "Connections" (<sub [:connections creature-id]) section-layout)
       (ability "Presence" (<sub [:presence creature-id]) section-layout)
       (ability "Wit" (<sub [:wit creature-id]) section-layout)
       (ability "Poise" (<sub [:poise creature-id]) section-layout)])))

(defn creature-stats [section-number section-type section-id section-tab section-layout]
  (let [creature-id (<sub [:state-section-item section-number])
        section-ids [(<sub [:state-section-id "section-one"]) (<sub [:state-section-id "section-two"]) (<sub [:state-section-id "section-three"])]
        section-types (mapv #(<sub [:section-type %]) section-ids)
        style (r/atom "")]
    (cond
      (> 1 (:ruleset (keywordized-frequencies section-types))) (println "ERROR: NO RULESETS")
      (= 1 (:ruleset (keywordized-frequencies section-types))) (let [{:keys [skills abilities skillbilities?]} (<sub [:section (section-ids (first (positions "ruleset" section-types)))])]
                                                                 (cond
                                                                   (and (= skills 1) (true? skillbilities?)) (reset! style "simple-stats")
                                                                   (and (= skills 3) (true? skillbilities?)) (reset! style "moderate-stats")
                                                                   (and (= skills 3) (false? skillbilities?)) (reset! style "complex-stats")))
      (< 1 (:ruleset (keywordized-frequencies section-types))) (println (str "ERROR: MULTIPLE RULESETS: " (section-ids (first (positions "ruleset" section-types))) " and " (section-ids (second (positions "ruleset" section-types))))))
    (case @style
      "simple-stats" (simple-stat-block creature-id section-layout)
      "moderate-stats" (moderate-stat-block creature-id section-layout)
      "complex-stats" (complex-stat-block creature-id section-layout))))



(defn resource-divify [resource-quantity creature-id]
  (let [resource (first resource-quantity)
        quantity (last resource-quantity)]
    [:div {:class "resource"}
     [:button {:class "unselected-button small"
               :on-click #(overlay resource)}
      [:div (str (<sub [:resource-title resource])
                 (if (> quantity 1)
                   (str " (" quantity ")")))]]
    ;;  [:button {:on-click #(>evt [:creature-remove-resource resource creature-id])}
    ;;   "-"]
     ]))

(def subsection-titles
  ["physical equipment" "spiritual traits" "mental expertise" "social affiliations" "items" "wealth"])

(defn capitalize-words
  "Capitalize every word in a string"
  [s]
  (->> (string/split (str s) #"\b")
       (map string/capitalize)
       string/join))

(defn domain-resource-subsection [section-number subsection-id]
  (let [creature-id (<sub [:state-section-item section-number])]
    [:div
     [:div {:class "subheader" :style {:text-align "left"}} (clojure.string/capitalize-words (subsection-titles subsection-id))]
     [:div {:class "domain-resource-list"}
      (map resource-divify (<sub [:creature-resources-typed-quantified creature-id subsection-id]) (repeat creature-id))
      ;; [:button {:class "add-resource"
      ;;           :on-click #(overlay creature-id ["resource" subsection-id])}
      ;;  "+"]
      ]]))

(defn miscellaneous-resource-subsection [section-number subsection-id]
  (let [creature-id (<sub [:state-section-item section-number])]
    [:div
     [:div {:class "subheader" :style {:text-align "left"}} (clojure.string/capitalize-words (subsection-titles subsection-id))]
     [:div {:class "miscellaneous-resource-list"}
      (map resource-divify (<sub [:creature-resources-typed-quantified creature-id subsection-id]) (repeat creature-id))
      ;; [:button {:class "add-resource"
      ;;           :on-click #(overlay creature-id ["resource" subsection-id])}
      ;;  "+"]
      ]]))

;; (defn creature-resources-section [section-number section-type section-id section-tab section-layout]
;;   (let [creature-id (<sub [:state-section-item section-number])]
;;     [:div {:style {:grid-column "1 / 3"}}
;;      [:div {:class "header"} "Resources"]
;;      [:div {:class "resource-list"}
;;       (map resource-divify (<sub [:creature-resources creature-id]))]
;;      [:button {:class "add-resource"
;;                :on-click #(overlay creature-id ["resource"])}
;;       "+"]]))

(defn creature-resources-subsections [section-number section-type section-id section-tab section-layout]
  [:div {:class "resource-section"}
   [:div {:class "header" :style {:grid-column "1 / 3" :padding "5px"}} "Resources"]
   [:div
    (domain-resource-subsection section-number 0)
    (domain-resource-subsection section-number 1)
    (domain-resource-subsection section-number 2)
    (domain-resource-subsection section-number 3)]
   [:div
    (miscellaneous-resource-subsection section-number 4)
    (miscellaneous-resource-subsection section-number 5)]])

(defn feature-display [feature-id section-layout]
  [:div {:class "feature"}
   [:div {:class "feature-title"} (<sub [:feature-title feature-id])]
   [:div {:class "feature-content"} (<sub [:feature-details feature-id])]])

(defn creature-features [section-number section-type section-id section-tab section-layout]
  (let [creature-id (<sub [:state-section-item section-number])]
    [:div {:class "feature-list"}
     (map feature-display (<sub [:creature-feature-list creature-id]) section-layout)]))

(defn creature-notes [section-number section-type section-id section-tab section-layout]
  (let [creature-id (<sub [:state-section-item section-number])]
    (case (<sub [:creature-notes-state creature-id])
      0 [:div {:class "creature-notes"}
         [:div {:class "creature-notes-header"}
          [:div {:style {:font-size "2em"}} "Notes"]
          [:button {:style {:margin-left "10px" :margin-top "5px" :background "none" :border "none" :outline "none"}
                    :on-click #(>evt [:creature-notes-state-change creature-id 1])}
           [:i {:class "fas fa-edit"}]]]
         [:div {:class (if (= "book" section-layout) "book-style-text" "standard-text")
                :style {:grid-template-columns "1 / 3"}}
          (text->hiccup (<sub [:creature-notes creature-id]))]]
      1 [:div {:class "creature-notes"}
         [:div {:class "creature-notes-header"}
          [:div {:style {:font-size "2em"}} "Notes"]
          [:button {:style {:margin-left "10px" :margin-top "5px" :max-height "2em" :background "none" :border "none" :outline "none"}
                    :on-click #(>evt [:creature-notes-state-change creature-id 0])}
           [:i {:class "fas fa-check"}]]]
         [:textarea {:class "text-edit"
                     :value (<sub [:creature-notes creature-id])
                     :on-change #(>evt [:creature-notes-update creature-id (-> % .-target .-value)])}]])))

(defn creature-sheet [section-number section-type section-id section-tab section-layout]
  [:div {:class "creature-sheet"}
   (creature-summary section-number section-type section-id section-tab section-layout)
   (creature-stats section-number section-type section-id section-tab section-layout)
   (creature-resources-subsections section-number section-type section-id section-tab section-layout)
   (creature-notes section-number section-type section-id section-tab section-layout)])


(def unlocked-creatures
  (r/atom []))

(def password-entry
  (r/atom ""))

(defn creature-list-item [creature-id section-number section-tab]
  [:button {:class (if (= (<sub [:state-section-item section-number]) creature-id)
                     (str "selected-button")
                     (str "unselected-button"))
            :type "button"
            :on-click (if (= creature-id (<sub [:state-section-item section-number]))
                        #(>evt [:item-deselect section-number])
                        #(do (>evt [:item-deselect section-number])
                             (>evt [:creature-summary-state-change creature-id 0])
                             (>evt [:creature-notes-state-change creature-id 0])
                             (>evt [:item-select section-number creature-id])))}
   (<sub [:item-title creature-id])])

(def player-characters [])

(defn creature-list [section-number section-type section-id section-tab section-layout]
  (let [active-world (first (filter (fn [section-id] (= "world" (<sub [:section-type section-id]))) (<sub [:state-section-ids])))
        creatures (<sub [:world-creatures active-world])]
    [:div {:style {:display "block"}}
     [:div
      [:div "Enter Creature Password"]
      [:input {:type "text"
               :value @password-entry
               :on-change (fn [entry] (reset! password-entry (-> entry .-target .-value)))}]
      [:button {:class "unselected-button small"
                :on-click #(swap! unlocked-creatures conj ((<sub [:unlock-creature @password-entry]) 0))} "Submit"]]
     (map creature-list-item player-characters (repeat section-number))
     (map creature-list-item (apply vector (distinct @unlocked-creatures)) (repeat section-number))
     (if (= "creature" (<sub [:item-type (<sub [:state-section-item section-number])]))
       (creature-sheet section-number section-type section-id section-tab section-layout))]))

(defn heritage-roles-list-item [item-id section-number section-tab]
  [:button {:class "body"
            :style (if (= (<sub [:state-section-item section-number]) item-id)
                     {:background "black"
                      :color "white"})
            :type "button"
            :on-click (if (= item-id (<sub [:state-section-item section-number]))
                        #(>evt [:item-deselect section-number])
                        #(do (>evt [:item-deselect section-number])
                             (>evt [:item-select section-number item-id])))}
   (<sub [:item-title item-id])])

(defn fixed-resource-divify [resource-id]
  [:div {:class "resource-view-only"}
   [:button {:on-click #(overlay resource-id)}
    [:div (<sub [:resource-title resource-id])]]])

(defn fixed-heritage-divify [feature-id]
  [:div {:class "feature-view-only"}
   [:button {:on-click #(overlay feature-id)}
    [:div (<sub [:feature-title feature-id])]]])

(defn heritages-list [section-number section-type section-id section-tab section-layout]
  (let [active-world (first (filter (fn [section-id] (= "world" (<sub [:section-type section-id]))) (<sub [:state-section-ids])))
        heritages (<sub [:world-heritages active-world])]
    [:div
     (map heritage-roles-list-item heritages (repeat section-number) (repeat section-tab))
     (if (= "heritage" (<sub [:item-type (<sub [:state-section-item section-number])]))
       [:div
        [:div (<sub [:heritage-details (<sub [:state-section-item section-number])])]
        [:div {:class "header"} "Resources"]
        [:div {:class "resource-list"}
         (map fixed-resource-divify (<sub [:heritage-resources (<sub [:state-section-item section-number])]))]
        [:div {:class "header"} "Features"]
        (map fixed-heritage-divify (<sub [:heritage-features (<sub [:state-section-item section-number])]))])]))

(defn roles-list [section-number section-type section-id section-tab section-layout]
  (let [active-world (first (filter (fn [section-id] (= "world" (<sub [:section-type section-id]))) (<sub [:state-section-ids])))
        roles (<sub [:world-roles active-world])]
    [:div
     (map heritage-roles-list-item roles (repeat section-number) (repeat section-tab))
     (if (= "role" (<sub [:item-type (<sub [:state-section-item section-number])]))
       [:div
        [:div (<sub [:role-details (<sub [:state-section-item section-number])])]
        [:div {:class "header"} "Resources"]
        [:div {:class "resource-list"}
         (map fixed-resource-divify (<sub [:role-resources (<sub [:state-section-item section-number])]))]
        [:div {:class "header"} "Features"]
        (map fixed-heritage-divify (<sub [:role-features (<sub [:state-section-item section-number])]))])]))

(def simple-skill-description
  [:div
   [:div "ATHLETICISM"]
   [:div "WILLPOWER"]
   [:div "ACUITY"]
   [:div "CHARISMA"]])

(def moderate-skill-description
  [:div
   [:div "Coordination, Reflexes, and Endurance"]
   [:div "Exertion, Instinct, and Perseverance"]
   [:div "Concentration, Recognition, and Comprehension"]
   [:div "Persuasion, Insight, and Connections"]])

(def complex-skill-description
  [:div
   [:div "Coordination, Reflexes, Endurance, Might, Finesse, and Fortitude"]
   [:div "Exertion, Instinct, Perseverance, Ambition, Discipline, and Dedication"]
   [:div "Concentration, Recognition, Comprehension, Intellect, Intuition, and Stability"]
   [:div "Persuasion, Insight, Connections, Presence, Wit, and Poise"]])

(defn skills-and-abilities [section-number section-type section-id section-tab section-layout]
  (let [active-ruleset (first (filter (fn [section-id] (= "ruleset" (<sub [:section-type section-id]))) (<sub [:state-section-ids])))
        skills (<sub [:ruleset-skills active-ruleset])
        skillbilities? (<sub [:ruleset-skillbilities active-ruleset])]
    (if (true? skillbilities?)
      (if (= 1 skills)
        simple-skill-description
        moderate-skill-description)
      complex-skill-description)))

;; (defn resources-list [section-number section-type section-id section-tab section-layout]
;;   (let [active-world (first (filter (fn [section-id] (= "world" (<sub [:section-type section-id]))) (<sub [:state-section-ids])))
;;         resources (<sub [::resource-list active-world])]
;;     [:div {:class "resource-list"}
;;      (map fixed-resource-divify resources)]))

(defn complete-resource-divify [resource-id]
  [:div {:class "fixed-resource"}
   [:button {:class "unselected-button small" :on-click #(overlay resource-id)}
    [:div (<sub [:resource-title resource-id])]]])

(defn resources-list [section-number section-type section-id section-tab section-layout]
  (let [resources (<sub [:resource-list])]
    [:div {:class "complete-resource-list" :style {:margin "0px"}}
     (map complete-resource-divify resources)]))

   ;;;;;;;;;;;;
   ;; Worlds ;;
   ;;;;;;;;;;;;

(defn world-item [item-id section-number section-tab & [size]]
  ;; Set tab-id to the tab contained in the section where the tab-type is identical to the item-type.
  (let [tab-id (first (filter (fn [tab-id] (= (<sub [:item-type item-id]) (<sub [:tab-type tab-id]))) (<sub [:section-tabs (<sub [:state-section-id section-number])])))]
    [:button {:class (if (= (<sub [:state-section-item section-number]) item-id)
                       (str "selected-button " size)
                       (str "unselected-button " size))
              :style {:margin-bottom "15px"}
              :type "button"
              :on-click (if (= item-id (<sub [:state-section-item section-number]))
                          #(>evt [:item-deselect section-number])
                          #(>evt [:item-tab-select section-number item-id tab-id]))}
     (<sub [:item-title item-id])]))

(defn creatures-list [section-number section-type section-id section-tab section-layout]
  [:div "CREATURES"])

(defn advancements-list [section-number section-type section-id section-tab section-layout]
  (let [advancements (<sub [:world-advancements section-id])]
    (println advancements)
    [:div
     (map world-item advancements (repeat section-number) (repeat section-tab))
     (if (= "advancement" (<sub [:item-type (<sub [:state-section-item section-number])]))
       [:div (<sub [:item-details (<sub [:state-section-item section-number])])])]))

(defn key-figures-list [section-number section-type section-id section-tab section-layout]
  (let [key-figures (<sub [:world-key-figures section-id])]
    [:div
     (map world-item key-figures (repeat section-number) (repeat section-tab))
     (if (= "key-figure" (<sub [:item-type (<sub [:state-section-item section-number])]))
       [:div (<sub [:item-details (<sub [:state-section-item section-number])])])]))

(defn organizations-list [section-number section-type section-id section-tab section-layout]
  (let [organizations (<sub [:world-organizations section-id])]
    [:div
     (map world-item organizations (repeat section-number) (repeat section-tab))
     (if (= "organization" (<sub [:item-type (<sub [:state-section-item section-number])]))
       [:div (<sub [:item-details (<sub [:state-section-item section-number])])])]))

(defn lore-list [section-number section-type section-id section-tab section-layout]
  (let [lore (<sub [:world-lore section-id])]
    [:div
     (map world-item lore (repeat section-number) (repeat section-tab))
     (if (= "lore" (<sub [:item-type (<sub [:state-section-item section-number])]))
       [:div (<sub [:item-details (<sub [:state-section-item section-number])])])]))

(defn civilizations-list [section-number section-type section-id section-tab section-layout]
  (let [active-world-item (<sub [:state-section-item section-number])
        world-territories (<sub [:world-territories section-id])
        civilizations (<sub [:world-civilizations section-id])]
    [:div
     (map world-item civilizations (repeat section-number) (repeat section-tab) (repeat "medium"))
     (if (= "civilization" (<sub [:item-type (<sub [:state-section-item section-number])]))
       (let [civilization-details (<sub [:civilization-details (<sub [:state-section-item section-number])])
             {:keys [religion society economy politics military]} civilization-details]
         [:div
          ;; [:div {:style {:font-size "250%"}} (<sub [:item-title (<sub [:state-section-item section-number])])]
          (if (some? religion)
            [:div
             [:div {:class "header" :style {:margin-bottom "10px"}} "Religion"]
             [:div religion]])
          (if (some? society)
            [:div
             [:div {:class "header" :style {:margin-bottom "10px"}} "Society"]
             [:div society]])
          (if (some? economy)
            [:div
             [:div {:class "header" :style {:margin-bottom "10px"}} "Economy"]
             [:div economy]])
          (if (some? politics)
            [:div
             [:div {:class "header" :style {:margin-bottom "10px"}} "Politics"]
             [:div politics]])
          (if (some? military)
            [:div
             [:div {:class "header" :style {:margin-bottom "10px"}} "Military"]
             [:div military]])]))]))
          ;; [:div {:class "header"} "Lore"]
          ;; (map world-item (<sub [:civilization-lore (<sub [:state-section-item section-number])]) (repeat section-number) (repeat section-tab))
          ;; [:div {:class "header"} "Organizations"]
          ;; (map world-item (<sub [:civilization-organizations (<sub [:state-section-item section-number])]) (repeat section-number) (repeat section-tab))
          ;; [:div {:class "header"} "Key Figures"]
          ;; (map world-item (<sub [:civilization-key-figures (<sub [:state-section-item section-number])]) (repeat section-number) (repeat section-tab))
          ;; [:div {:class "header"} "Advancements"]
          ;; (map world-item (<sub [:civilization-advancements (<sub [:state-section-item section-number])]) (repeat section-number) (repeat section-tab))

(defn territories-list [section-number section-type section-id section-tab section-layout]
  (let [territories (<sub [:world-territories section-id])]
    [:div
     (map world-item territories (repeat section-number) (repeat section-tab) (repeat "medium"))
     (if (= "territory" (<sub [:item-type (<sub [:state-section-item section-number])]))
       [:div
        [:div (<sub [:territory-details (<sub [:state-section-item section-number])])]
        (if (not-empty (<sub [:territory-civilizations (<sub [:state-section-item section-number])]))
          [:div
           [:br]
           [:div {:class "header" :style {:margin-bottom "10px" :font-size "1.5em"}} "CIVILIZATIONS"]
           (map world-item (<sub [:territory-civilizations (<sub [:state-section-item section-number])]) (repeat section-number) (repeat section-tab) (repeat "medium"))])])]))

(defn world-overview [section-number section-type section-id section-tab section-layout]
  [:div {:class "superbody"} (<sub [:world-overview section-id])])




;;;;;;;;;;;;;;;;;;
;; Content Area ;;
;;;;;;;;;;;;;;;;;;
(defn content [section-number section-type section-id section-tab section-layout]
  [:div {:class "content"}
   [:div {:class "header"} (<sub [:section-title section-id])]
   [:div {:class "subheader"} (str (<sub [:tab-title section-tab]))]
   [:div {:class "body"} ((<sub [:tab-template section-tab]) section-number section-type section-id section-tab section-layout)]
   (if (= section-number "section-two")
     [:div {:style {:height "30px"}}])])



;;;;;;;;;;;;;;;;;
;; Navbar Area ;;
;;;;;;;;;;;;;;;;;
;; Tasks:
;; 1. Get navbar icons to always center and resize correctly regardless of screen size.
;; 2. Clean up the tab-order declaration if possible

(defn navigation-tab [section-number section-id section-layout]
  (let [direction (case section-number
                    "section-one" {:text "backward" :icon "fas fa-chevron-left"}
                    "section-three" {:text "forward" :icon "fas fa-chevron-right"}
                    nil)]
    [:button {:class "navigation-tab"
              :type "button"
              :on-click #(>evt [:reorder-sections (direction :text)])}
     [:i {:class (direction :icon)}]]))

;; navbar-tab takes a section number, that section's layout, and a tab-id and generates a tab button.
(defn navbar-tab [section-number section-id section-layout tab-id]
  [:button {:class "tab"
            :style (cond
                     (= tab-id (<sub [:active-tab section-number])) {:background (background-color (<sub [:section-type section-id]) section-number)
                                                                     :color "black"}
                     (not-any? #(= tab-id %) (<sub [:section-tabs section-id])) {:border "1px" :border-style "solid" :border-color (background-color (<sub [:section-type section-id]) section-number)})
            :key tab-id
            :type "button"
            :on-click #(>evt [:tab-select section-number tab-id])}
   [:i {:class (<sub [:tab-icon tab-id])}]])

(defn generate-tabs [section-number section-id section-layout tabs]
  (doall (map navbar-tab
              (repeat section-number)
              (repeat section-id)
              (repeat section-layout)
              tabs)))

;; This takes all of the section data (section number, type, id, tab, and layout) and generates a navbar with the active tab highlighted.
(defn navbar [section-number section-type section-id section-tab section-layout]
  (let [tabs (<sub [:section-tabs-full section-number section-tab])]
    [:div {:class "navbar"}
     (generate-tabs section-number section-id section-layout tabs)
     [:div {:style {:height "max-content"}}]
    ;;  (if (= section-layout "sidebar")
    ;;    (navigation-tab section-number section-id section-layout))
     ]))



;;;;;;;;;;;;;
;; Section ;;
;;;;;;;;;;;;;
;; Tasks:

;; This takes all of the section data (section number, type, id, tab, and layout) and builds a section consisting of a navbar area and content area.
(defn section [section-number section-type section-id section-tab section-layout]
  [:div {:class (get-section-class section-layout section-number)
         :key section-number
         :style {:background (background-color (<sub [:section-type section-id]) section-number)}}
   (navbar section-number section-type section-id section-tab section-layout)
   (content section-number section-type section-id section-tab section-layout)])

;;;;;;;;;;;;;
;; Overlay ;;
;;;;;;;;;;;;;

(defn resource-select [resource-id creature-id]
  [:div {:style {:display "block"}}
   [:button {:style {:margin "2px" :align-content "left"}
             :on-click #(>evt [:creature-add-resource resource-id creature-id])}
    (<sub [:item-title resource-id])]])

(defn creature-resource [creature-id]
  (let [resource-subtype ((<sub [:overlay-params]) 1)]
    [:div {:class "resource-select-menu"}
     [:div "Select an item below to add it to your inventory."]
     (map resource-select (filter (fn [resource-id] (= resource-subtype (<sub [:resource-subtype resource-id]))) (<sub [:resource-list])) (repeat creature-id))]))

(defn creature-menu [creature-id]
  (case ((<sub [:overlay-params]) 0)
    "resource" (creature-resource creature-id)))

(defn matches? [coll1 coll2]
  (some (fn [matches] (= true matches)) (map (fn [x y] (= x y)) coll1 coll2)))

(defn feature-details [feature resource-properties]
  [:div
   [:div {:class "header"} (<sub [:feature-title feature resource-properties])]
   [:div (<sub [:feature-details feature resource-properties])]])

(defn resource-details [resource-id]
  [:div {:class "resource-details"}
   [:div
    [:div {:class "header"} (<sub [:resource-title resource-id])]
    [:div (apply str (interpose ", " (<sub [:resource-properties resource-id])))]]
   [:div
    [:div (<sub [:resource-flavor-text resource-id])]
    [:div (str "Quality: " (<sub [:resource-quality-bonus resource-id]))]
    [:div (str "Power: " (<sub [:resource-power-bonus resource-id]))]]
   (map feature-details
        (<sub [:resource-features resource-id])
        (repeat (<sub [:resource-properties resource-id])))])

(defn condition-effect [condition-id effect-id]
  [:div {:class "effect"}
   [:div {:class "description"}
    (<sub [:condition-effect-description condition-id effect-id])]
   [:div {:class "duration"}
    (<sub [:condition-effect-duration condition-id effect-id])]])

(defn condition-details [condition-id]
  (let [{:keys [title description duration effects]} (<sub [:item condition-id])]
    [:div {:class "condition"}
     ;; Get the title and description from the condition data
     [:div {:class "title"} (<sub [:condition-title condition-id])]
     [:div {:class "description"} (<sub [:condition-description condition-id])]
     ;; Create multiple divs with the class "effect" using a list of the condition effect descriptions and condition effect durations.
     ;; I'll need to come back to this.
     (let [effect-count (count (<sub [:condition-effects condition-id]))]
       [:div {:class "effects"}
        [:div {:class "effect"}
         [:div {:class "header"} "Effect"]
         [:div {:class "header"} "Duration"]]
        (map condition-effect (repeat condition-id) (map inc (range effect-count)))])]))

(defn skillbility-details [skillbility-id]
  (let [{:keys [title details]} (<sub [:item skillbility-id])]
    [:div {:class "condition"}
     [:div {:class "title"} (<sub [:item-title skillbility-id])]
     [:div {:class "description"} (<sub [:item-details skillbility-id])]]))

(defn overlay-content [item-id]
  (case (<sub [:item-type item-id])
    "creature" (creature-menu item-id)
    "resource" (resource-details item-id)
    ;; "feature" (feature-details item-id)
    "condition" (condition-details item-id)
    "skillbility" (skillbility-details item-id)
    :else (println "ERROR: Item type not configured for overlay display.")))



;;;;;;;;;;;;;;;;;
;; System Menu ;;
;;;;;;;;;;;;;;;;;

;; The system menu can have one of two css classes: pages and book.
;; "pages" consists of three equal sized page sections with navbars at the top.
;; "book" consists of two sidebars half the size of a page section with navbars on the edges of the screen 
;;      and a central section that is twice the size of a page section with a navbar at the top.
(defn system-menu []
  (if (<sub [:initialized?])
    (let [{:keys [section-one section-two section-three layout]} (<sub [:system-state])]
      [:div {:class layout}

       (if (= "visible" (<sub [:overlay-state]))
         (let [overlay-item (<sub [:overlay-item])]
           [:div {:class "overlay"}
            [:div {:class "overlay-content"} (overlay-content overlay-item)
             [:button {:class "overlay-x"
                       :on-click #(>evt [:overlay-state-change "hidden"])}
              "X"]]]))

     ;; SECTIONS
       (let [section-numbers ["section-one" "section-two" "section-three"]
             section-ids [(:section-id section-one) (:section-id section-two) (:section-id section-three)]
             section-types [(<sub [:section-type (section-ids 0)]) (<sub [:section-type (section-ids 1)]) (<sub [:section-type (section-ids 2)])]
             section-tabs [(:tab-id section-one) (:tab-id section-two) (:tab-id section-three)]
             section-layouts (if (= layout "pages-layout") ["page" "page" "page"] ["sidebar" "book" "sidebar"])]

         (doall (map section section-numbers section-types section-ids section-tabs section-layouts)))

       ;; FLOATING BUTTONS
       [:div {:class "float-section" :draggable "true"}
        (reorder-sections section-one section-two section-three layout "backward")
        (toggle-layout  section-one section-two section-three layout)
        (reorder-sections section-one section-two section-three layout "forward")]])
    [:div "Initializing..."]))