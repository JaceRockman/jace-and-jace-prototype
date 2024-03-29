(ns modular-roleplaying-framework.db
  (:require [clojure.string :as s]
            [modular-roleplaying-framework.views :as views]))

(defn text->hiccup
  "Convert newlines to [:br]'s."
  [text]
  (->> (s/split text "\n")
       (interpose [:br])
       (map #(if (string? %)
               %
               (with-meta % {:key (gensym "br-")})))))

(def prototype-data
  {:system-state {:section-one {:section-title nil
                                :section-id nil
                                :tab-id nil
                                :item-id nil
                                :item-parent-tab nil}
                  :section-two {:section-title nil
                                :section-id nil
                                :tab-id nil
                                :item-id nil
                                :item-parent-tab nil}
                  :section-three {:section-title nil
                                  :section-id nil
                                  :tab-id nil
                                  :item-id nil
                                  :item-parent-tab nil}
                  :layout nil
                  :overlay {:overlay-state "hidden"
                            :overlay-item nil
                            :overlay-params nil}
                  :initialized? false}
   :sections {;; Rulesets will contain all of the mechanics needed to play the game.
              10 {:id 10
                  :type "ruleset"
                  :title "Ruleset"
                  :tabs [11 17 12 14 15 16]
                  :scale 8
                  :skills 3
                  :abilities 3
                  :skillbilities? true
                  :splintering true
                  :caution true
                  :encounter-style "simultaneous"
                  :damage-tiers '(:minor :major)
                  :condition-style "mixed"
                  :recovery-tiers? true
                  :recovery-times {:minor {:value 2
                                           :unit "days"}
                                   :moderate {}
                                   :major {:value 1
                                           :unit "week"}}
                  :treatment? false}
              11 {:id 11
                  :type "ruleset"
                  :title "Simple Ruleset"
                  :tabs [11 12 14 15 16 17]
                  :scale 8
                  :skills 1
                  :abilities 1
                  :skillbilities? true
                  :splintering false
                  :caution false
                  :encounter-style "turn-based"
                  :damage-tiers '(:minor :major)
                  :condition-style "threshold"
                  :recovery-tiers? true
                  :recovery-times {:minor {:value 2
                                           :unit "days"}
                                   :moderate {}
                                   :major {:value 1
                                           :unit "week"}}
                  :treatment? false}
              12 {:id 12
                  :type "ruleset"
                  :title "Moderate Ruleset"
                  :tabs [11 12 14 15 16 17]
                  :scale 12
                  :skills 3
                  :abilities 3
                  :skillbilities? true
                  :splintering true
                  :caution false
                  :encounter-style "turn-based"
                  :damage-tiers '(:minor :major)
                  :condition-style "roll"
                  :recovery-tiers? true
                  :recovery-times {:minor {:value 2
                                           :unit "days"}
                                   :moderate {}
                                   :major {:value 2
                                           :unit "weeks"}}
                  :treatment? true}
              13 {:id 13
                  :type "ruleset"
                  :title "Complex Ruleset"
                  :tabs [11 12 14 15 16 17]
                  :scale 20
                  :skills 3
                  :abilities 3
                  :skillbilities? false
                  :splintering true
                  :caution true
                  :encounter-style "simultaneous"
                  :damage-tiers '(:minor :moderate :major)
                  :condition-style "mixed"
                  :recovery-tiers? true
                  :recovery-times {:minor {:value 2
                                           :unit "days"}
                                   :moderate {:value 2
                                              :unit "weeks"}
                                   :major {:value 2
                                           :unit "months"}}
                  :treatment? true}
              ;; Worlds will contain all of the lore and knowledge of the game's setting.
              2 {:id 2
                 :type "world"
                 :title "Kalashar"
                 :overview "In a time twice forgotten, the conspirations of Flame and Rain did yield the enshadowed form of Kalashar. In its depths did sleep the nascent souls of our most holy Lords. First did emerge Ishiq, the Lady of Light, who glimpsed the once-dappled canopy, and thus her tears of solitude did fill the sky with its ceaseless flame. Then came Heilm, the Lord of Preservation, who's mighty hands grasped the great stones which had fallen to the depths and held them together as one. Then Ijarda, The Mother of All, came forth and whispered the passion of embers and ash into the dust of the land. Last, Kef, The Child of Whimsy and Mischief, escaped and stole the eye of Ishiq, the fist of Heilm, and the breath of Ijarda, bestowing them as gifts upon the lands and creatures of Kalashar. All was as all was meant to be until ages passed and the first cosmic dusk befell these lands and the Gods retreated into slumber once again. A stagnance blankets Kalashar and the land itself yearns for a second kindling."
                 :territories [300 301]
                 :tabs [20 21 22]}
              ;; Adventures will take information from rulesets and worlds and apply it to the playable characters, their heritages, roles, stats, and equipment.
              3 {:id 3
                 :type "character"
                 :title "Character"
                 :tabs [31 35]}}
   :tabs {10 {:id 10
              :icon "fas fa-book-open"
              :title "Instructions"
              :template views/text
              :items [1]}
          11 {:id 11
              :icon "fas fa-stream"
              :title "Flow of Play"
              :template views/text
              :items [100]}
          12 {:id 12
              :icon "fas fa-dice"
              :title "Skill Checks"
              :template views/skill-checks
              :items [12001]}
          13 {:id 13
              :icon "fas fa-coins"
              :title "Resources"
              :template views/resources
              :items [1201]}
          14 {:id 14
              :icon "fas fa-dragon"
              :title "Encounters"
              :template views/encounters
              :items [12021]}
          15 {:id 15
              :icon "fas fa-skull"
              :title "Damage & Recovery"
              :template views/damage-and-recovery
              :items [12031]}
          16 {:id 16
              :icon "fas fa-tint"
              :title "Conditions"
              :template views/conditions-list
              :items [47 48 49 62 63 64 65 66 67]}
          17 {:id 17
              :icon "fas fa-running"
              :title "Skills & Abilities"
              :template views/skills-abilities-details
              :items []}
          20 {:id 20
              :icon "fas fa-book-open"
              :title "World Overview"
              :template views/world-overview
              :items [1]}
          21 {:id 21
              :icon "fas fa-globe-europe"
              :type "territory"
              :title "Territories"
              :template views/territories-list
              :items [1]
              :active-item nil}
          22 {:id 22
              :icon "fas fa-users"
              :type "civilization"
              :title "Civilizations"
              :template views/civilizations-list
              :items [1]
              :active-item nil}
          23 {:id 23
              :icon "fas fa-dice-d20"
              :type "lore"
              :title "Lore"
              :template views/lore-list
              :items [1]
              :active-item nil}
          24 {:id 24
              :icon "fas fa-dice-d20"
              :type "organization"
              :title "Organizations"
              :template views/organizations-list
              :items [1]
              :active-item nil}
          25 {:id 25
              :icon "fas fa-dice-d20"
              :type "key-figure"
              :title "Key Figures"
              :template views/key-figures-list
              :items [1]
              :active-item nil}
          26 {:id 26
              :icon "fas fa-dice-d20"
              :type "advancement"
              :title "Advancements"
              :template views/advancements-list
              :items [1]
              :active-item nil}
          27 {:id 27
              :icon "fas fa-dice-d20"
              :type "creatures"
              :title "Creatures"
              :template views/creatures-list
              :items [1]
              :active-item nil}
          30 {:id 30
              :icon "fas fa-book-open"
              :title "Instructions"
              :template views/text
              :items [1]}
          31 {:id 31
              :icon "fas fa-user"
              :title "Characters"
              :template views/creature-list
              :items []
              :active-item nil}
          32 {:id 32
              :icon "fas fa-dice-d20"
              :title "Heritages"
              :template views/heritages-list
              :items [1]
              :active-item nil}
          33 {:id 33
              :icon "fas fa-dice-d20"
              :title "Roles"
              :template views/roles-list
              :items [1]
              :active-item nil}
          34 {:id 34
              :icon "fas fa-dice-d20"
              :title "Skills & Abilities"
              :template views/skills-and-abilities
              :items [1]
              :active-item nil}
          35 {:id 35
              :icon "fas fa-angle-double-up"
              :title "Resources"
              :template views/resources-list
              :items [1]
              :active-item nil}
          1000 {:id 1000
                :icon "fas fa-dice-d20"
                :title "Character Sheet"
                :template views/creature-sheet}
          1001 {:id 1001
                :icon "fas fa-address-card"
                :title "Character Summary"
                :template views/creature-summary}
          1002 {:id 1002
                :icon "fas fa-fist-raised"
                :title "Skills & Abilities"
                :template views/creature-stats
                :items [2]}
          1003 {:id 1003
                :icon "fas fa-chevron-up"
                :title "Resources"
                :template views/creature-resources-subsections
                :items [2]}
          1004 {:id 1004
                :icon "fas fa-hat-wizard"
                :title "Features"
                :template views/creature-features
                :items [2]}
          1005 {:id 1005
                :icon "fas fa-scroll"
                :title "Notes"
                :template views/creature-notes
                :items [2]}}

   :items {;;;;;;;;;;;;;;;;
           ;; Characters ;;
           ;;;;;;;;;;;;;;;;

           1618 {:id 1618
                 :type "creature"
                 :password "Loyalty"
                 :title "Aleks"
                 :heritage "Human"
                 :role "Soldier"
                 :summary "Aleks has been hardened by a difficult life, but this has forged a firece loyalty to those they consider to be friends. Aleks and Finipher have known one another for many years."
                 :summary-state 0
                 :stats {:physical {:skills [1 3 1]
                                    :abilities [5 3 4]}
                         :spiritual {:skills [1 2 2]
                                     :abilities [3 3 4]}
                         :mental {:skills [1 2 1]
                                  :abilities [2 3 4]}
                         :social {:skills [3 1 2]
                                  :abilities [3 3 3]}}
                 :resources [1001 1005 1017 1019 1024 1030 1037 1038 1046
                             1044 1044
                             1051 1051 1051 1051 1051 1051 1051 1051 1051 1051]
                 :notes ""
                 :notes-state 0
                 :subtabs [1002 1003 1005]}
           1619 {:id 1619
                 :type "creature"
                 :password "Heilm"
                 :title "Gurian"
                 :heritage "Dwarf"
                 :role "Paladin"
                 :summary "Gurian trusts and follows the will of Heilm above all else and has a particular fervor for the virtue of life. Gurian has taken Lewellyn under wing, preserving the doe-eyed innocence of their apparent youth."
                 :summary-state 0
                 :stats {:physical {:skills [1 2 1]
                                    :abilities [3 3 5]}
                         :spiritual {:skills [3 1 1]
                                     :abilities [4 3 4]}
                         :mental {:skills [2 1 1]
                                  :abilities [4 4 3]}
                         :social {:skills [1 1 1]
                                  :abilities [4 2 4]}}
                 :resources [1002 1014 1016 1020 1026 1031 1032 1039 1048
                             1044 1044 1044
                             1051 1051 1051 1051 1051 1051 1051 1051 1051 1051
                             1051 1051 1051 1051 1051]
                 :notes ""
                 :notes-state 0
                 :subtabs [1002 1003 1005]}
           1620 {:id 1620
                 :type "creature"
                 :password "Forgotten Magic"
                 :title "Lewellyn"
                 :heritage "Elf"
                 :role "Arcanist"
                 :summary "Lewellyn's curiosity lured them from the comfort of their family's expansive library and into the wondrous and dangerous world outside. They would be dead had it not been for a fortunate encounter with Gurian."
                 :summary-state 0
                 :stats {:physical {:skills [1 2 1]
                                    :abilities [3 3 3]}
                         :spiritual {:skills [1 1 2]
                                     :abilities [4 3 4]}
                         :mental {:skills [1 1 1]
                                  :abilities [5 5 4]}
                         :social {:skills [1 2 1]
                                  :abilities [3 4 4]}}
                 :resources [1000 10021 10051 10141 1027 1033 1034 1035 1040 1041 1049 1050
                             1044
                             1051 1051 1051 1051 1051 1051 1051 1051 1051 1051
                             1051 1051 1051 1051 1051 1051 1051 1051 1051 1051
                             1051 1051 1051 1051 1051]
                 :notes ""
                 :notes-state 0
                 :subtabs [1002 1003 1005]}
           1621 {:id 1621
                 :type "creature"
                 :password "Money"
                 :title "Finipher"
                 :heritage "Halfling"
                 :role "Rogue"
                 :summary "Finipher has been running their whole life. Whether that be in the direction of wealth and riches or away from trouble. Aleks is one of the few people that Finipher feels they can truly rely on."
                 :summary-state 0
                 :stats {:physical {:skills [1 4 1]
                                    :abilities [3 3 3]}
                         :spiritual {:skills [2 2 1]
                                     :abilities [3 3 2]}
                         :mental {:skills [1 2 1]
                                  :abilities [3 4 4]}
                         :social {:skills [2 1 1]
                                  :abilities [5 4 4]}}
                 :resources [1003 1003 1003 1018 1025 1028 1029 1036 1042 1043 1045 1047
                             1044
                             1051 1051 1051 1051 1051 1051 1051 1051 1051 1051
                             1051 1051 1051 1051 1051 1051 1051 1051 1051 1051
                             1051 1051 1051 1051 1051 1051 1051 1051 1051 1051
                             1051 1051 1051 1051 1051]
                 :notes ""
                 :notes-state 0
                 :subtabs [1002 1003 1005]}

           ;;;;;;;;;;;;;;;
           ;; Resources ;;
           ;;;;;;;;;;;;;;;


      ;;      1000 {:id 1000
      ;;            :type "resource"
      ;;            :subtype "equipment, trait, expertise, affiliation, item, or wealth"
      ;;            :title "resource title"
      ;;            :description {:flavor-text "Flavor Text"
      ;;                          :weight "lbs"
      ;;                          :cost "10 gp"
      ;;                          :etc. nil}
      ;;            :properties []
      ;;            :benefits {:power nil
      ;;                       :quality nil}
      ;;            :features []}

           1000 {:id 1000
                 :type "resource"
                 :subtype 0
                 :title "Arcane Gauntlet"
                 :description {:flavor-text ""}
                 :properties ["Arcane Implement" "Weapon" "Medium"]
                 :benefits {:quality 1
                            :power 1}
                 :features [:implement]}
           1001 {:id 1001
                 :type "resource"
                 :subtype 0
                 :title "Greatsword"
                 :description {:flavor-text ""}
                 :properties ["Sword" "Heavy"]
                 :benefits {:quality 0
                            :power 3}
                 :features [:weapon-attack]}
           1002 {:id 1002
                 :type "resource"
                 :subtype 0
                 :title "Longsword"
                 :description {:flavor-text ""}
                 :properties ["Medium" "Sword"]
                 :benefits {:quality 2
                            :power 1}
                 :features [:weapon-attack]}
           10021 {:id 10021
                  :type "resource"
                  :subtype 0
                  :title "Aethereal Longsword"
                  :description {:flavor-text ""}
                  :properties ["Medium" "Sword"]
                  :benefits {:quality 0
                             :power 0}
                  :features [:weapon-attack]}
           1003 {:id 1003
                 :type "resource"
                 :subtype 0
                 :title "Dagger"
                 :description {:flavor-text ""}
                 :properties ["Light" "Sword"]
                 :benefits {:quality 3
                            :power 0}
                 :features [:weapon-attack]}
           1004 {:id 1004
                 :type "resource"
                 :subtype 0
                 :title "Greatbow"
                 :description {:flavor-text ""}
                 :properties ["Heavy" "Bow"]
                 :benefits {:quality 1
                            :power 2}
                 :features [:weapon-attack]}
           1005 {:id 1005
                 :type "resource"
                 :subtype 0
                 :title "Longbow"
                 :description {:flavor-text ""}
                 :properties ["Medium" "Bow"]
                 :benefits {:quality 2
                            :power 1}
                 :features [:weapon-attack]}
           10051 {:id 10051
                  :type "resource"
                  :subtype 0
                  :title "Aethereal Longbow"
                  :description {:flavor-text ""}
                  :properties ["Medium" "Bow"]
                  :benefits {:quality 0
                             :power 0}
                  :features [:weapon-attack]}
           1006 {:id 1006
                 :type "resource"
                 :subtype 0
                 :title "Shortbow"
                 :description {:flavor-text ""}
                 :properties ["Light" "Bow"]
                 :benefits {:quality 3
                            :power 0}
                 :features [:weapon-attack]}
           1007 {:id 1007
                 :type "resource"
                 :subtype 0
                 :title "Greataxe"
                 :description {:flavor-text ""}
                 :properties ["Heavy" "Axe"]
                 :benefits {:quality 0
                            :power 3}
                 :features [:weapon-attack]}
           1008 {:id 1008
                 :type "resource"
                 :subtype 0
                 :title "War Axe"
                 :description {:flavor-text ""}
                 :properties ["Medium" "Axe"]
                 :benefits {:quality 1
                            :power 2}
                 :features [:weapon-attack]}
           1009 {:id 1009
                 :type "resource"
                 :subtype 0
                 :title "Handaxe"
                 :description {:flavor-text ""}
                 :properties ["Light" "Axe"]
                 :benefits {:quality 2
                            :power 1}
                 :features [:weapon-attack]}
           1010 {:id 1010
                 :type "resource"
                 :subtype 0
                 :title "Lance"
                 :description {:flavor-text ""}
                 :properties ["Heavy" "Spear"]
                 :benefits {:quality 0
                            :power 3}
                 :features [:weapon-attack]}
           1011 {:id 1011
                 :type "resource"
                 :subtype 0
                 :title "Spear"
                 :description {:flavor-text ""}
                 :properties ["Medium" "Spear"]
                 :benefits {:quality 2
                            :power 1}
                 :features [:weapon-attack]}
           1012 {:id 1012
                 :type "resource"
                 :subtype 0
                 :title "Javelin"
                 :description {:flavor-text ""}
                 :properties ["Light" "Spear"]
                 :benefits {:quality 3
                            :power 0}
                 :features [:weapon-attack]}
           1013 {:id 1013
                 :type "resource"
                 :subtype 0
                 :title "Tower Shield"
                 :description {:flavor-text ""}
                 :properties ["Heavy" "Shield"]
                 :benefits {:quality 1
                            :power 3}
                 :features [:block-attack]}
           1014 {:id 1014
                 :type "resource"
                 :subtype 0
                 :title "Kite Shield"
                 :description {:flavor-text ""}
                 :properties ["Medium" "Shield"]
                 :benefits {:quality 2
                            :power 2}
                 :features [:block-attack]}
           10141 {:id 10141
                  :type "resource"
                  :subtype 0
                  :title "Aethereal Shield"
                  :description {:flavor-text ""}
                  :properties ["Medium" "Shield"]
                  :benefits {:quality 0
                             :power 0}
                  :features [:block-attack]}
           1015 {:id 1015
                 :type "resource"
                 :subtype 0
                 :title "Buckler"
                 :description {:flavor-text ""}
                 :properties ["Light" "Shield"]
                 :benefits {:quality 4
                            :power 0}
                 :features [:block-attack]}
           1016 {:id 1016
                 :type "resource"
                 :subtype 0
                 :title "Plate Armor"
                 :description {:flavor-text ""}
                 :properties ["Heavy" "Armor"]
                 :benefits {:quality -1
                            :power 3}
                 :features [:block-attack]}
           1017 {:id 1017
                 :type "resource"
                 :subtype 0
                 :title "Chain Maille"
                 :description {:flavor-text ""}
                 :properties ["Medium" "Armor"]
                 :benefits {:quality 1
                            :power 1}
                 :features [:block-attack]}
           1018 {:id 1018
                 :type "resource"
                 :subtype 0
                 :title "Leather Armor"
                 :description {:flavor-text ""}
                 :properties ["Light" "Armor"]
                 :benefits {:quality 2
                            :power 0}
                 :features [:block-attack]}


           1019 {:id 1019
                 :type "resource"
                 :subtype 1
                 :title "Lion's Bravery"
                 :description {:flavor-text ""}
                 :properties ["Ideal"]
                 :benefits {:quality 0
                            :power 1}
                 :features [:trait]}
           1020 {:id 1020
                 :type "resource"
                 :subtype 1
                 :title "Virtue of Heilm (Life)"
                 :description {:flavor-text ""}
                 :properties ["Ideal"]
                 :benefits {:quality 0
                            :power 2}
                 :features [:trait]}
           1021 {:id 1021
                 :type "resource"
                 :subtype 1
                 :title "Knowledge"
                 :description {:flavor-text ""}
                 :properties ["Ideal"]
                 :benefits {:quality 1
                            :power 1}
                 :features [:trait]}
           1022 {:id 1022
                 :type "resource"
                 :subtype 1
                 :title "Intimidating Presence"
                 :description {:flavor-text ""}
                 :properties ["Attribute"]
                 :benefits {:quality 1
                            :power 0}
                 :features [:trait]}
           1023 {:id 1023
                 :type "resource"
                 :subtype 1
                 :title "Protective Instincts"
                 :description {:flavor-text ""}
                 :properties ["Attribute"]
                 :benefits {:quality 1
                            :power 1}
                 :features [:trait]}
           1024 {:id 1024
                 :type "resource"
                 :subtype 1
                 :title "Alcoholic"
                 :description {:flavor-text ""}
                 :properties ["Flaw"]
                 :benefits {:quality 1
                            :power 0}
                 :features [:trait]}
           1025 {:id 1025
                 :type "resource"
                 :subtype 1
                 :title "Selfish Bastard"
                 :description {:flavor-text ""}
                 :properties ["Flaw"]
                 :benefits {:quality 2
                            :power 0}
                 :features [:trait]}
           1026 {:id 1026
                 :type "resource"
                 :subtype 1
                 :title "Spread the Faith"
                 :description {:flavor-text ""}
                 :properties ["Goal"]
                 :benefits {:quality 2
                            :power 0}
                 :features [:trait]}
           1027 {:id 1027
                 :type "resource"
                 :subtype 1
                 :title "Uncover Forgotten Magics"
                 :description {:flavor-text ""}
                 :properties ["Goal"]
                 :benefits {:quality 1
                            :power 1}
                 :features [:trait]}
           1028 {:id 1028
                 :type "resource"
                 :subtype 1
                 :title "Accumulate Wealth"
                 :description {:flavor-text ""}
                 :properties ["Flaw"]
                 :benefits {:quality 0
                            :power 2}
                 :features [:trait]}

           1029 {:id 1029
                 :type "resource"
                 :subtype 2
                 :title "Scout"
                 :description {:flavor-text ""}
                 :properties ["Light" "Fighting Style"]
                 :benefits {:quality 2
                            :power 0}
                 :features [:martial-prowess :sneak-attack]}
           1030 {:id 1030
                 :type "resource"
                 :subtype 2
                 :title "Soldier"
                 :description {:flavor-text ""}
                 :properties ["Medium" "Fighting Style"]
                 :benefits {:quality 1
                            :power 1}
                 :features [:martial-prowess :combat-maneuvers]}
           1031 {:id 1031
                 :type "resource"
                 :subtype 2
                 :title "Sentinel"
                 :description {:flavor-text ""}
                 :properties ["Heavy" "Fighting Style"]
                 :benefits {:quality 0
                            :power 2}
                 :features [:martial-prowess :protective-stance]}
           1032 {:id 1032
                 :type "resource"
                 :subtype 2
                 :title "Religious Knowledge"
                 :description {:flavor-text ""}
                 :properties ["Moderate" "Education" "Religion"]
                 :benefits {:quality 1
                            :power 1}
                 :features [:knowledge :relic-prowess]}
           1033 {:id 1033
                 :type "resource"
                 :subtype 2
                 :title "Aethrology Knowledge"
                 :description {:flavor-text ""}
                 :properties ["Major" "Education" "Aethrology"]
                 :benefits {:quality 1
                            :power 3}
                 :features [:knowledge :implement-prowess]}
           1034 {:id 1034
                 :type "resource"
                 :subtype 2
                 :title "Medicinal Knowledge"
                 :description {:flavor-text ""}
                 :properties ["Moderate" "Education" "Medicine"]
                 :benefits {:quality 2
                            :power 0}
                 :features [:knowledge]}
           1035 {:id 1035
                 :type "resource"
                 :subtype 2
                 :title "History Knowledge"
                 :description {:flavor-text ""}
                 :properties ["Minor" "Education" "History"]
                 :benefits {:quality 1
                            :power 0}
                 :features [:knowledge]}
           1036 {:id 1036
                 :type "resource"
                 :subtype 2
                 :title "Light Fingers"
                 :description {:flavor-text ""}
                 :properties ["Moderate" "Talent"]
                 :benefits {:quality 3
                            :power 0}
                 :features [:slight-of-hand :lockpicking]}

           1037 {:id 1037
                 :type "resource"
                 :subtype 3
                 :title "Adventurer"
                 :description {:flavor-text ""}
                 :properties ["Minor" "Reputation"]
                 :benefits {:quality 1
                            :power 0}
                 :features [:reputation]}
           1038 {:id 1038
                 :type "resource"
                 :subtype 3
                 :title "Town Councilman"
                 :description {:flavor-text ""}
                 :properties ["Minor" "Membership" "Political"]
                 :benefits {:quality 0
                            :power 1}
                 :features [:membership]}
           1039 {:id 1039
                 :type "resource"
                 :subtype 3
                 :title "Paladin of Heilm"
                 :description {:flavor-text ""}
                 :properties ["Minor" "Membership" "Religious"]
                 :benefits {:quality 0
                            :power 1}
                 :features [:membership]}
           1040 {:id 1040
                 :type "resource"
                 :subtype 3
                 :title "Mediker's Guild"
                 :description {:flavor-text ""}
                 :properties ["Minor" "Membership" "Guild"]
                 :benefits {:quality 0
                            :power 1}
                 :features [:membership]}
           1041 {:id 1041
                 :type "resource"
                 :subtype 3
                 :title "Arcanist's Guild"
                 :description {:flavor-text ""}
                 :properties ["Minor" "Membership" "Guild"]
                 :benefits {:quality 0
                            :power 1}
                 :features [:membership]}
           1042 {:id 1042
                 :type "resource"
                 :subtype 3
                 :title "Thieves' Guild"
                 :description {:flavor-text ""}
                 :properties ["Minor" "Membership" "Guild"]
                 :benefits {:quality 0
                            :power 1}
                 :features [:membership]}
           1043 {:id 1043
                 :type "resource"
                 :subtype 3
                 :title "Thommand Hartwell"
                 :description {:flavor-text ""}
                 :properties ["Minor" "Friendship"]
                 :benefits {:quality 0
                            :power 1}
                 :features [:relationship]}

           1044 {:id 1044
                 :type "resource"
                 :subtype 4
                 :title "Healing Potion"
                 :description {:flavor-text ""}
                 :properties ["Healing" "Minor"]
                 :benefits {:quality 0
                            :power 1}
                 :features [:potion]}
           1045 {:id 1045
                 :type "resource"
                 :subtype 4
                 :title "Poison"
                 :description {:flavor-text ""}
                 :properties []
                 :benefits {:quality 1
                            :power 2}
                 :features [:poison]}
           1046 {:id 1046
                 :type "resource"
                 :subtype 4
                 :title "Climber's Tools"
                 :description {:flavor-text ""}
                 :properties ["Climbing"]
                 :benefits {:quality 1
                            :power 2}
                 :features [:tool]}
           1047 {:id 1047
                 :type "resource"
                 :subtype 4
                 :title "Thieves' Tools"
                 :description {:flavor-text ""}
                 :properties ["Larceny"]
                 :benefits {:quality 1
                            :power 2}
                 :features [:tool]}
           1048 {:id 1048
                 :type "resource"
                 :subtype 4
                 :title "The Prayers of Heilm"
                 :description {:flavor-text ""}
                 :properties ["Religious"]
                 :benefits {:quality 1
                            :power 2}
                 :features [:book]}
           1049 {:id 1049
                 :type "resource"
                 :subtype 4
                 :title "Common Medicinals of the Four Duchies"
                 :description {:flavor-text ""}
                 :properties ["Medicinal"]
                 :benefits {:quality 1
                            :power 2}
                 :features [:book]}
           1050 {:id 1050
                 :type "resource"
                 :subtype 4
                 :title "Rites and Runes of the Eldari"
                 :description {:flavor-text ""}
                 :properties ["Aethereal"]
                 :benefits {:quality 1
                            :power 2}
                 :features [:book]}
           1051 {:id 1051
                 :type "resource"
                 :subtype 5
                 :title "Gold"
                 :description {:flavor-text ""}
                 :properties []
                 :benefits {:quality 0
                            :power 0}
                 :features [:coin]}



           ;;;;;;;;;;;
           ;; World ;;
           ;;;;;;;;;;;

           300 {:id 300
                :type "territory"
                :title "The Commonlands"
                :details "Surrounded by the fraught Outwilds, the Commonlands are home to the civilized races: Humans, Elves, and Dwarves. While each of these groups have carved out areas of this land for themself, Kairinith, often simply referred to as The Capital, is shared by all. It is here that the social engineering of the Humans meets the work ethic of the Dwarves and the elegance of the Elves. While The Capital is not free from divisive issues, it is rife with opportunity and is therefore a wellspring of new ideas, technologies, and art. Beyond the walls of The Capital, you will find that the Humans squabble over land and power, the Elves content themselves with tending their forests, and the Dwarves delve deep into their mountains seeking ever more valuable gems. War has not touched the lives of the common folk for decades while the gods continue their centuries-long slumber."
                :civilizations [400 401 402]
                :creatures []}
           301 {:id 301
                :type "territory"
                :title "The Outwilds"
                :details "Encircling the tranquil lands of the civilized races are The Outwilds. Deadly swamps bubble and hiss in the North, jungles teem with ferocious beasts and verdure to the East just beyond the Greyiron Mountains, and eternal dark subsumes the Elderwoods if one dares travel West of the Eldari ruins. In many of the old tales, The Outwilds act as the crucible for heroes and the resting place of great treasures from forgotten ages. Many adventurers have attempted to claim their place in the annals of history by venturing into these lands. Many adventurers have died in that attempt. Those that survive are often driven mad by the events that took place on their harrowing journey. There is little that can be said for certain about these wild lands apart from this: death sleeps lightly there."
                :civilizations []
                :creatures []}
           400 {:id 400
                :type "civilization"
                :title "Elves"
                :details {:religion "Elves who dedicate their lives to the study and worship of Ishiq are called Seers. They are well respected in Elven society since most Elves have at least a passing faith in Ishiq. They believe that the highest form of divination is conveying visual scenes and so they consider it blasphemy to attempt to record these visions with words. The only exception they make to this tenet is that they give some credence to The Tears of Ishiq, however, they still often lament that the Eldari lacked the modern methods of preserving and projecting visual memories. This distrust of written doctrine has left the Seers with a fairly vague theology which has in turn caused many conflicts and religious upheavals throughout the Elves’ long history. The most violent of these occurred some 1,000 years ago and culminated in the banning of the Seers from the Elven Council. At the time, the Seers held much more direct power in Elven society as they were permitted to hold positions on the various Elven Councils. This eventually lead to corruption on the part of both the church and the body of councils. False visions were crafted in order to suggest that Ishiq was calling for a holy war against their human neighbors. The devout followers of Ishiq were baffled by this revelation and, however, there was no other option but for the Elves to begin mobilizing their armies. Many Humans and Elves died in the ensuing years and they are remembered by the Elves as the False War. It wasn't until a young prodigious Seer named Elheim uncovered the plot and the war was quickly abandoned though it left a great rift between Humans and Elves as well as eroded the trust in the Seers for centuries to come. It is said that centuries ago, Ishiq fell into a deep slumber alongside her deific counterparts and while there is still great observance of the faith, there are now those who doubt the authority of the Seers."
                          :society "Elven society is largely cohesive as there is extensive integration between all eleven of the Realms. The greatest divide between Elves is between Eastern and Western populations. Those who reside in the Eastern Realms that border Umaeria of The Four Duchies view the border conflicts of the Humans as a great threat to the Elves while those who reside in the Western Realms that border the Eldari ruins view the treasure hunters that loot the ancient ruins as the most crucial issue at hand. Elves are most unwelcoming to Dwarves ever since the False War. Due to their great rarity, Elves are often intrigued more than disgusted when they encounter Orcs or Goblins."
                          :economy "The Economy of the Elves is largely self-sustained with occasional luxury items imported from The Four Duchies. Elves have developed complex methods of agriculture and woodsmithing providing all of the food and resources required for their civilization to run smoothly. The closely guarded secrets of treesinging and woodsmithing produce a wide variety of weapons, armors, and tools that are much desired by the merchants of The Four Duchies, however, Elven law forbids the sale of woodsmithed products which has lead to a thriving black market of these items in the Eastern Realms."
                          :politics "The Viër Elen is the lord or lady ruler of the Elves, however, they do not have complete authority. They answer to the three Elven Councils: Eiaven, the Council of Nobles, Fasfontan, the Council of War, and Messaram, the Council of the People. Each of these councils is presided over by a Speaker who upholds order during council meetings, votes in cases of national legislation and declarations of war, and serves as an adviser to the Viër Elen. National legislation can be brought to vote by any one of the Speakers or by the Viër Elen themself. If a piece of legislation has two Speakers who vote in favor, then it passes unless the Viër Elen vetoes it. If a piece of legislation has all three Speakers supporting it, then there is nothing that can prevent it from passing. Declarations of war may likewise be initiated by any one of the Speakers or the Viër Elen, however, in order for the declaration to pass it must have unanimous agreement. The Viër Elen may deem a Speaker unworthy of their post and that Speaker will be removed if their council agrees. The three Speakers and the Viër Elen reside in the Elven Capital City of Essevael in the Asturian Realm. Each of the eleven noble houses are given one seat on the Eiaven Council. Notably, the noble house of Asturias is granted the Speaker's seat which acts as the tie breaker when there is an even split amongst the other ten noble houses. Each of these noble houses rules over one of the Elven Realms creating laws as they see fit, just so long as those laws do not contradict any of the national legislation. The Speaker for the Fasfontan Council is also the Elven Warlord, or the Auth Arato, commanding the Elven armies in times of war and organizing the Elven guard in times of peace. Beneath the Auth Arato are the Commanders and then the Captains. Each Captain is given a single vote on the Fasfontan Council and each Commander is given five votes. The Auth Arato votes only when there is need for a tie breaker. The seats of the Messaram Council are available to any who have no noble titles and who are not actively enlisted in the military. Each one of the fifty-one seats corresponds to a major Elven City and the individual who holds the seat also serves as the Overseer for that city. The Overseer elections are held every five years and an Overseer may serve any number of terms. The Speaker of the Messaram Council is the Overseer of the Asturian Capital City, Essevael. While each of the noble houses create individual legislation for the Realm they are responsible for, the Overseers are charged with the enforcement of those laws."
                          :military "The Elven Military is lead by the Auth Arato who is the Speaker for the Council of Fasfontan. They command the Elven armies in times of war and organize the Elven guard in times of peace. Beneath the Auth Arato are the Commanders and then the Captains. Any citizen of an Elven Realm, common or noble, may become a Captain, however, to attain the rank of Commander or the Auth Arato you must forego any noble titles or position as an Overseer. The bulk of the Elven military force resides in the Eastern Realms patrolling the borders to deter the logging operations of Humans and attempting to crack down on the black market that is taking root."}
                :lore []
                :organizations []
                :key-figures []
                :advancements []
                :heritages []
                :roles []
                :resources []}
           401 {:id 401
                :type "civilization"
                :title "Dwarves"
                :details {:religion "The Dwarves worship Heilm first and foremost. There is a straightforward hierarchy of leadership amongst the Order of Heilm which is determined by the Crucible of Heilm. The Crucible of Heilm is a series of tournaments and competitions held every four years. Those who wish to join the ranks of the Paladins must complete the Trial of the Gauntlet, a grueling and dangerous series of tasks and challenges. Those who wish to rise in the hierarchy and attain greater status as a Paladin may partake in the competitions where they are pitted against one another. Should they manage to defeat two contenders of their own rank and one of a higher rank, they will be evaluated for their deeds throughout the past four years. Should their might and vigilance be deemed worthy, they will attain the next rank. While there are many ways to serve as a Paladin of Heilm, the most common path is as follows. First they become an Initiate where they serve minor functions during court trials of the Paladins and learn the Dwarven fighting style. Then they become a Disciple studying under a higher ranked Paladin and acting as a scribe to them. Then they become a Sentinel where they join a patrol and serve under a Warden at the borders fending off Goblins and Orcs and their ilk. Then they become a Warden and they continue to serve as a leader of a patrol at the borders. Then they become a Witness where they work alongside and Arbiter assisting them in their endeavors. Finally, they become an Arbiter themself, free to enforce the will of Heilm as they see fit. The Dwarven traditions involving Heilm have been unwavering in the face of the Gods’ slumber that began centuries ago."
                          :society "Dwarves are a hardy lot living in constant struggle with the denizens of The Outwild Jungles that lay just beyond the Greyiron Mountains. They are known to be honorable and just yet willing to grant second chances. Should you befriend a Dwarf, you will have a loyal comrade who will neither betray you nor forsake you. Despite the fact that Dwarves do not often entertain Elven guests, they hold strong opinions about them. They distrust the Elves for the manipulations done by the Seers in generations past. Seers and Paladins once served side by side as leaders in the societies of Dwarves and Elves. A time came when the Seers on the Council of Elves foresaw war and conquest with mankind. In the bloody midst of war, the prophecies of this nature were discovered to be counterfeits by a young Master Elheim and the trust in the Seers was broken for many generations. With their long memories, the Dwarves still mistrust the Seers and the Elves."
                          :economy "The greatest economic output of the Greyiron Mountains is precious gems, metals, and stones. The Dwarven mines run deep and their forges burn hot. The various Dwarven techniques of forging and architecture are well-kept secrets and the resulting products are coveted throughout Kalashar. This includes weapons, armor, tools, trinkets, and art. Their goods are transported via barge down the rivers that flow out of the Greyiron Mountains passing through Kleth and snaking all throughout The Four Duchies. A few other notable Dwarven exports are a wide array of meads and ales and various rare herbs and types of lumber from The Outwild Jungles. The commodities that are most desired by Dwarves are honey, herbs, silk, and lumber from the Elderwoods and fish from the The Nelend Isles."
                          :politics "The King of the Dwarves is largely a figurehead where most of the ruling is reserved for the Arbiters. Technically, the position of King is a Paladin of Heilm one rank above the Arbiters, however, it is often the case that if a King rules well, then their next of kin will succeed them. Thus the Durfall clan has held the position for the last hundred years. Aside from public appearances, maintaining a presence at international negotiations, and organization of the Crucible of Heilm, the King's only real power is adjudicating disputes amongst Arbiters. The inauguration process takes place during the Crucible of Heilm and the heir of the Durfall clan challenges a specialized member of each rank of Paladin to compete. Those members make their vows to serve him and forfeit the competition. Thus the heir ascends to the rank of King in a single day."
                          :military "The bulk of the Dwarven military is comprised of Sentinels and Wardens of the Paladins of Heilm. They serve faithfully at the border to The Outwilds repelling the ever violent tribes of Goblins and Trolls. The standard militia largely defend the trade routes and act as city guards serving under Witnesses and Arbiters within the Dwarven towns and cities. Aside from the constant skirmishes with the creatures at the border, the Dwarves live a mostly peaceful existence with very little internal conflict and not much more with humans."}
                :lore []
                :organizations []
                :key-figures []
                :advancements []
                :heritages []
                :roles []
                :resources []}
           402 {:id 402
                :type "civilization"
                :title "Humans"
                :details {:religion "In The Four Duchies, there is a general adherence to the edicts of the four Gods and only a slightly greater deference to Ijarda. This largely stems from the farming communities in Nidia who are her most fervent worshipers. This observance manifests mostly in the rituals of birth, marriage, and death and the celebrations of the vernal equinox, which is said to be the day of Ijarda's emergence from Kalashar. Among Humans, especially those in Erstead, a far greater observance is given to King Erdith who was the first ruler of man and the uniter of the disparate tribes millenia ago. Though it has been long, it is said that the spirit of Erdith has been reborn whenever mankind was in greatest need. This is why the rulers of Erstead are known as the Regents, for they only rule while Erdith rests. The stories say that the Erdithstone, which rests above the throne in the Kairinith palace, will shine once more when the soul of the king again takes breath. This is understood to mean that when the soul of Erdith has been reborn, the stone reacts to this rebirth and that it will illuminate to herald the coming of its lord. Those who worship King Erdith as more than just a man call themselves the Sons and Daughters of Erdith. This is the source of the tradition of the Kingsday celebration, where noble children are brought to stand in the throne room to test for the presence of King Erdith’s soul."
                          :society "Erstead lies in the center of The Four Duchies and is the most densely populated of the four. As a result of its relative prosperity and the protection that it is granted by being surrounded by the three other duchies, the citizens of Erstead are perceived as being pompous and out of touch with the common folk. Erstead being home to the absurdly wealthy capital city of Kairinith only serves to reinforce this view. There is a widespread respect for the royal line and a significant number of those who follow The Sons of Erdith. While King Erdith rests, as has been the case for almost 200 years, the Aemon family rules in his stead not as Kings and Queens or Dukes and Duchesses, but rather as Regents. They have all of the power of the King, though tradition dictates that they wield this power only when the Kingdom is threatened. Kleth rests in the craggy foothills of The Greyiron Mountains. Klethians are a hardy independent folk consisting primarily of mercenaries, miners, and blacksmiths. They begrudge anything they perceive as an overreach of power and thus have a particularly unwelcoming attitude towards those of Erstead often referring to them as Steadlings. Many of those in Kleth feel a greater kinship with the Dwarves of The Greyiron Mountains than with the Humans of The Four Duchies. They often work alongside the Dwarves within the common mines and large passes of the mountains which are frequently assaulted by Goblins. This relationship results in a greater adherence to the teachings of Heilm than in any of the other duchies. The current ruler, Duchess Agata Kleth, is particularly fond of Heilm and she is well liked by her citizens. Umaeria is a bountiful land where the most clever scheming merchants come out on top. There are some who say that the Guildmeisters of Umaeria collectively hold more power than even Duke Claude Umaeria himself. As Umaeria is the largest of the duchies and has the greatest gap of wealth between merchants and workers, it has historically struggled with revolts and rebellions. These are often quelled with the assistance of the Erstead military forces and the mercenaries employed by the Merchant's Guild of Umaeria. In a similar vein, there have been many skirmishes between Umaeria and the Elves of the The Elderwoods as merchants tend to \"accidentally\" overextend their logging operations into Elven territory, however, such conflict has not manifested since an accord was produced between the Elven Council and the Guildmeisters. Nidia crowns The Four Duchies and although it is a bountiful land, there is little else to draw one to these marshy lands to the North. Most of the communities are but small agrarian villages known for their warm hospitality. Since oft times little else but rumors reach these communities, visits from outsiders are times not soon forgot there is a great deal of superstition and misinformation. Particularly, any technology or sciences unfamiliar to these rural lands are considered dark omens and should it be revealed that one dabbles in these occult practices, they may quickly find that they have overstayed their welcome."
                          :economy "There are three main trade circuits that distribute goods throughout The Four Duchies. The Laikendall route begins near the end of the Faelfest celebrations in Laikendall, which is in the Eastern territory if Nidia. They bring a full load of crops to Kairinith and their arrival heralds the Vernefest. During this celebration, these merchants acquire luxury items and travel South to Finipor by river and then back up through Kleth to arrive in Kairinith for the next Faelfest. The Veshtapor route begins in Kairinith, departing just after Vernefest. They take their goods and travel Southwest by river to arrive in Veshtapor in late Summer. Following the Finethire Way, they travel back East towards The Crossways and then North to return to Kairinith in time for Vernefest. The Finipor route likewise begins in Kairinith, departing just after Vernefest, however, they take their goods South along the Finethire Way towards The Crossways. They continue Eastwards towards Finipor and travel upriver to arrive in Kairinith by Vernefest. If merchants who take the Veshtapor or Finipor routes are delayed and do not return to Kairinith in time for the Vernefest, they will often take a lucrative detour through Trell before returning to their route in order to get back on schedule. The most skilled and dedicated merchants will take the difficult but rewarding trip all throughout The Four Duchies. They begin with the Laikendall route travelling towards Kairinith but then they go to Veshtapor and then to The Crossways taking a detour to Trell and then back up through The Crossways, Finipor, and Kleth to arrive back in Laikendall just in time for Faelfest. In total, this trip spans the course of three years, but with the right connections and a good bit of luck, you can make a veritable fortune off of a single pass of this grand route. The combination of these routes manages to distribute crops, precious stones, metals, and lumber to the entire Four Duchies as well as bringing enchanted and luxury items from Erstead to Umaeria."
                          :politics "While Dukes and Duchesses rule in Kleth, Umaeria, and Nidia, it is the Regents who rule in Erstead until the return of King Erdith. Duke Claude Umaeria is content to retain the status quo, however, the Guildmasters of Umaeria constantly seek to amend the accord with the Elves to expand their resources and influence. Duchess Agata Kleth is a fierce woman who feels more of a kinship with her Dwarven neighbors than with her fellow rulers. Over the many years of her rule, this disposition has grown only stronger as Kleth becomes more and more economically independent on the other duchies. While Regent Giles Aemon was once well loved by the citizens of Erstead, lately he has been seen as being responsible for the increases in taxes. It is now widely believed that he has lost touch with the people and many resent him for it."
                          :military "The Four Duchies was once a fairly militant society, but since the relationships with both the Dwarves and Elves have been relatively stable for the past few centuries, this aspect of their culture has abated. Umaeria possesses very little in the way of an official militia, though it has significant forces to call upon in ways of mercenaries and private militias employed by merchants and guilds. The mercenaries and militias are some of the most competent bowmen in The Four Duchies. Kleth has a dedicated military force that is well trained and well equipped. This is necessitated by the invading forces of Goblins that frequently make it through the passes of The Greyiron Mountains. It is often that they work side by side with the Dwarves in driving these fell creatures back. Erstead's military presence is most often occupied with policing the streets of its many cities. Most notably, Erstead employs the Kairinith University in providing training to the nobles who often serve in the upper ranks of its military."}
                :lore []
                :organizations []
                :key-figures []
                :advancements []
                :heritages []
                :roles []
                :resources []}

           ;;;;;;;;;;;;;
           ;; Ruleset ;;
           ;;;;;;;;;;;;;

           100 {:id 100
                :type "text"
                :text (text->hiccup "1. The GM describes a scene or situation.\n
                                    2. The players state how their characters react by describing their intent and approach.\n
                                    3. The GM may call for a check to be made in order to resolve the characters’ actions. This will usually happen if there is a reasonable chance of those actions failing and failure has a cost.\n
                                    4. Based on the characters’ actions, the GM and players collaboratively describe how the scene or situation develops and we begin again at step 1.")}

           1200 {:id 1200
                 :type "text"
                 :text {:overview "To make a check, you will roll a pool of dice and take the highest result that is rolled. That result is then compared to a target number which represents the difficulty of the task you are trying to achieve. If the result of your roll equals or exceeds that target number, then your character’s actions are successful.
Checks may be called for when there is a chance of failure and when that failure would come at a cost. While it’s true that there is almost always some chance of failure, it is often unlikely enough that it can be ignored in order to keep the game running smoothly.
Ultimately, this is up to the GM's discretion. Likewise, there are many actions that, even if failure is possible or likely, it may not cost you anything to simply try again and again until you succeed. For example, if you find a locked chest and bring it back to your home base and decide to break it open, you can simply try to pry at it for as long as you like until you pop it open. As long as it’s possible for you to open the chest with the tools at hand and there are no other constraints on your time, this action should go without a check. Again, ultimately, this decision is up to the GM's discretion."
                        :base-dice-pool "When a check is called for, the GM will determine which of your stats are most relevant to the task at hand. "
                        :base-dice-pool-variations {:skillbilities "The dice given in the chosen skill make up your base dice pool."
                                                    :skills-and-abilities "The chosen skill will determine the number of dice that you roll while the chosen ability will determine the size of dice that you roll."}
                        :dice-pool-example {:simple-skillbilities "For example, if you are trying to climb a cliffside, the GM may ask for a check using your athletics skill. If your athletics skill is 1d8, then your base dice pool would be a single 8-sided die. However, there are additional factors that can modify your base dice pool."
                                            :full-skillbilities "For example, if you are trying to climb a cliffside, the GM may ask for a check using your coordination skill. If your coordination skill is 1d8, then your base dice pool would be a single 8-sided die. However, there are additional factors that can modify your base dice pool."
                                            :skills-and-abilities "For example, if you are trying to climb a cliffside, the GM may ask for a check using your might ability and coordination skill. If your might ability is a d8 and your coordination skill level is 3, then your base dice pool would be three 8-sided dice. However, there are additional factors that can modify your base dice pool."}
                        :passive-checks "Passive checks may be used by the GM to resolve situations where your character’s stats are relevant but where there is no approach that can be taken. Checks to determine your character's level of knowledge will commonly be made as passive checks. The GM will still determine a target number and choose which stats are most relevant, and you will still put together your base dice pool. Instead of rolling, however, you will add the number of dice in your base dice pool to half the size of the dice and compare that to the target number as if it were the result of a normal check. One exception is that the result of a passive check cannot exceed the size of your ability die. So, if your base dice pool was 5d6, the result would be 6 instead of 8. Any bonuses or penalties that would be applied to the check simply add +1 or -1 to the result."
                        :bonuses-and-penalties "Checks may be made easier or more difficult by modifying your chances of success or modifying what you are capable of achieving. This can be caused by circumstances, equipment, traits, etc. When your chances of success are altered, you will add dice bonuses or penalties to your base dice pool which are represented in the format of \"+1d\" and \"-1d\". When the limits of what you can accomplish are altered, you will add flat bonuses or penalties which are represented in the format of \"+1\" or \"-1\". When dice bonuses are added to a dice pool, you increase the number of dice in the pool by an amount equal to the number given in the bonus. The additional dice are of the same size as those in the base dice pool.
When dice penalties are inflicted upon a dice pool, you decrease the number of dice in the pool by an amount equal to the number given in the penalty. If you are applying a dice penalty to a dice pool that only contains a single die, reduce the size of that die a number of times equal to the number given in the penalty. When flat bonuses or penalties are applied to a roll, you roll your base dice pool as you normally would and add or subtract the bonus or penalty before comparing it to the target number. If a dice bonus is applied after you roll your dice but before the roll is resolved, then roll the bonus dice and take the highest number between the dice pool and your bonus dice. If a dice penalty is inflicted after you roll all of your dice but before the roll is resolved, then roll the penalty dice one at a time and compare the result to the dice pool dice that you rolled. The die that is numerically closest to the penalty die you rolled is removed from the roll, rounding unfavorably, and then roll the next penalty dice. If you have penalty dice remaining when there is only one die left in the dice pool you rolled, then roll the next penalty die and take the lower of the two. Continue this process until there are no penalty dice left."
                        :splintering "After bonuses and penalties are applied but before the roll is made, you may choose to splinter your base dice pool into multiple fragmentary pools. This represents more complex actions with a single check. A common example of this is making two or more attacks in a single round. If you choose to splinter your base dice pool, the total number of dice that you roll remains unchanged. When splintering your dice pool, each of the fragmentary dice pools must contain at least two dice. So if your base dice pool was 5d6, you could only splinter it into die pools of 2d6 and 3d6, you could not splinter it into three die pools of 2d6, 2d6, and 1d6. Bonuses and penalties must be distributed as evenly as possible amongst the fragmentary dice pools. "
                        :caution "The final modification that can be made to a dice pool before rolling is your choice of acting recklessly or carefully. If you choose to act recklessly, then two dice may be combined into a single die of the next highest size. So, if you were rolling 4d6 and you chose to act recklessly, you could instead roll 2d8. On the other hand, if you choose to act carefully, then each individual die is split into two dice of the next smallest size. So, that same roll of 4d6 would become 8d4 if the action was taken as carefully as possible. You can choose your degree of carefulness or recklessness by splitting or combining only some of the dice in the pool. Combining a dice pool of 4d6 into 2d8 is more reckless than combining that same dice pool of 4d6 into 1d8 + 2d6 and taking the highest result of those three dice. This modification can only be applied once, so you could not combine 4d4 into 2d6 and then combine those 2d6 into 1d8. Similarly, you could not split 2d8 into 4d6 and then split those 4d6 into 8d4."}}
           1201 {:id 1201
                 :type "text"
                 :text {:overview "Each resource will have a description of the item, a list of any ownership requirements, and a list of the uses that the resource has. The description will provide an overall sense of the resource and what it will help you accomplish. The ownership requirements may include one-time costs to acquire the resource as well as ongoing costs to maintain access to or use of the resource. Each of the uses that are given will likewise have a description, and a list of requirements, benefits, and costs. The use descriptions will provide further details for how the resource may be used and to what end. The requirements list any circumstances or character traits must be present to use the resource in this manner. The benefits and costs most often will be in the form of bonuses and penalties to specific checks, though this is not always the case. Resources are not restricted to any particular domain and range from as concrete as a single set of armor to as abstract as a deeply held ideal."}}
           1202 {:id 1202
                 :type "text"
                 :text {:overview "An encounter is a scene that is centered around a goal and obstacle where many of your actions require skill checks. One of the clearest examples of an encounter is combat. During combat, the basic goal is survival, the obstacle to that goal is the creatures or characters that are trying to kill you, and most of your actions will involve attacking or defending which requires skill checks. Other examples of scenes that may be counted as encounters are chase scenes, detailed social functions, navigation through treacherous territories, heists, and investigations. Encounters are the most structured and game-like portions of an adventure. Your GM may decide to run some encounters just like they would any other part of the adventure, however, if they want to track the order of actions a bit more carefully, then they may use the following structure."
                        :actions "There are two types of actions: setup actions and engagement actions. Setup actions are small adjustments that don’t take much focus, time, or effort. Engagement actions are where the bulk of the encounter takes place and they will usually require much more from you and have a risk of failure. Generally speaking, if an action requires a check, then it is likely an engagement action and if an action only requires a passive check or no check at all, then it is likely a setup action. Each combatant can take two setup actions during the setup phase and two engagement actions during the engagement phase. Combatants may take additional setup actions during the engagement phase as part of their engagement actions, however, each one of these setup actions inflicts a -1d penalty on both of their engagement actions. This penalty is applied even if you did not use either of your two setup actions in the setup phase. You may sacrifice one of your engagement actions to prevent these penalties from being applied to your other engagement action. You cannot take more than six setup actions in a round and you can’t take more than two setup actions in a moment. Engagement actions are further divided into initiations and reactions. Initiations require you to have focus on a target while reactions can only be used when you are the target of another creature's initiation. Listed below are some examples of the two kinds of actions."
                        :moments "After the setup phase of a round is complete, the first moment of the engagement phase begins. Anyone who would like to act in that moment may choose modifications to their dice pool such as splintering, acting carefully, or acting recklessly. As usual, bonuses and penalties are applied first, then splintering that base dice pool must be done before dice are combined or split for acting carefully or recklessly. If you choose to splinter your base dice pool, you can decide whether to act multiple times in the current moment or spread out your action between moments. Within a moment, the dice pools with the fewest dice are resolved first. If two dice pools have the same number of dice, then the dice pool with the larger sized dice goes first. If that does not resolve the tie, then the GM simply decides which action is resolved first. In this way, modifications to your dice pool may cause your actions to be resolved earlier or later than they otherwise would be. Once all of those rolls have been resolved, the next moment of the round begins and everyone who has dice remaining in their dice pool may choose to roll following the same rules as in the prior moment."
                        :rounds "The in-game duration of a round depends very much on the encounter you are involved in. In the case of combat, a round will usually take about five to ten seconds whereas in a social encounter, a round may take twenty minutes or an hour or even longer. Rounds are made up of two phases: the setup phase and the engagement phase. During the setup phase, creatures will have two setup actions that they can use to prepare themselves for the engagements that are to come. This phase will begin with everyone being given the opportunity to take the target action. Many engagement actions can only be used on targeted creatures or areas. Then everyone is given the opportunity to use their remaining setup actions. During the engagement phase, creatures will have two engagement actions which they can use to attempt to overcome the obstacles they have targeted. This phase will usually involve traversing significant obstacles by climbing, swimming, jumping, etc., using items that you have on hand, attacking and defending, or various forms of persuasion. The round ends once all of the engagement actions have been resolved or when a moment passes where no dice were rolled for engagement actions."
                        :turn-based {:moments "When the encounter begins, you immediately have two actions that you can spend as long as your character is aware of the goal and obstacle being presented to them. During the other creatures’ moments leading up to your moment, you may need to spend actions as reactions to protect yourself. If you have taken both of your actions as reactions before your moment arrives, then you are unable to take any initiations or movements. If you have actions remaining when your moment comes around, however, then you can spend them to take initiations and movements. Once a creature’s initiation and movement actions are resolved, their moment is complete and they regain both of their actions. Unused actions do not build up from round to round."
                                     :rounds "The in-game duration of a round depends very much on the encounter you are involved in. In the case of combat, a round will usually take about five to ten seconds whereas a social encounter may take twenty minutes or more. At the beginning of the encounter, the GM will use their preferred method of determining initiative order - that could be based on a skill check, it could be going clockwise around the table, it could be popcorn style, or it could be something else. Then, in order of initiative, each creature gets their moment where they may take initiation or movement actions to influence events around them. Once every creature has had their moment, then the next round begins."}
                        :simultaneous {:moments {:beginning "When the encounter begins, you immediately have two actions that you can spend as long as your character is aware of the goal and obstacle being presented to them. Once the initiations and movements have been declared and the base dice pools have been constructed, the first moment begins. When the moment begins, anyone who would like to act in that moment "
                                                 :body {:splintering "If you choose to splinter your base dice pool, you can decide whether to act multiple times in the current moment or spread out your action between moments. "
                                                        :default "must roll their dice immediately. "}
                                                 :ending "The dice pools with the fewest dice are resolved first. When there is a tie, the dice pool with the larger dice goes first. If there is still a tie, then the GM simply decides which action is resolved first. Once all of those rolls have been resolved, the next moment of the round begins and everyone who has a dice pool remaining may choose to roll following the same rules as in the prior moment."}
                                       :rounds "The in-game duration of a round depends very much on the encounter you are involved in. In the case of combat, a round will usually take about five to ten seconds whereas a social encounter may take twenty minutes or more. At the beginning of each round, the GM and the Players will go around the table and declare any initiations or movements they intend to take as well as what the targets of those actions will be. Everyone then constructs their base dice pool accounting for any bonuses or penalties. During each moment of the round, everyone will decide whether they are acting in that moment and these moments continue until either no creature has a dice pool remaining or a moment passes where no rolls are made. Then the next round begins and everyone once again has two actions to spend."}}}
           1203 {:id 1203
                 :type "text"
                 :text {:overview "Both in and out of encounters, your character will have to react to events around them in an attempt to prevent harm to themself. Often times, when these reactions fail, your character will take damage. This damage is tracked separately for each of the four domains: physical, spiritual, mental, and social. As damage accumulates in each of the domains, you will be inflicted with more and more serious conditions."
                        :injuries {1 "If an attack targets you and the result is equal to or greater than your reaction, then you take an injury. When you are inflicted with an injury, increase the total damage in the relevant domain by one."
                                   2 {:beginning "If an attack targets you and the result is equal to or greater than your reaction, then you take a minor injury. If the attack roll is equal to or greater than the reaction roll + 3, then you take a major injury. When you are inflicted with an injury, "
                                      :recovery-tiers? "mark off a single slot in the section that matches the severity of the injury within the relevant domain and "
                                      :ending "update your damage total by one for minor injuries and two for major injuries."}
                                   3 {:beginning "If an attack targets you and the result is equal to or greater than your reaction roll, then you take a minor injury. If the attack roll is equal to or greater than the reaction roll + 3, then you take a moderate injury. If the attack roll is equal to or greater than your reaction roll + 6, then you take a major injury. When you are inflicted with an injury, "
                                      :recovery-tiers? "mark off a single slot in the section that matches the severity of the injury within the relevant domain and "
                                      :ending "update your damage total by one for minor injuries, two for moderate injuries, and three for major injuries."}}
                        :conditions {:beginning "There are three conditions in each domain that are applied to your character as they take increasing numbers of injuries. Each domain will have its own health check that you will use to determine when these conditions are applied. To make a health check for a domain, roll "
                                     :threshold "Each domain’s health check determines three thresholds for that domain which correspond to the three conditions. The first threshold for a domain is half of the passive result of that domain’s health check rounded down. The second threshold for a domain is equal to the passive result of that domain’s health check. The third and final threshold for a domain is equal to the maximum possible result of that health check. If you receive an injury in a domain and the new total number of injuries exceeds any of your three condition thresholds in that domain, then you are inflicted with that condition. These conditions are removed only when your injuries recover such that your total damage is at or below the associated threshold. "
                                     :roll "Each time you take damage in a domain, make a health check for that domain where the target number is equal to your new damage total. If your health check fails, then you become inflicted with that domain’s first condition. If you were already inflicted with the first condition and your health check fails, then you become inflicted with that domain’s second condition. If at any point, the total damage in a domain exceeds your maximum possible roll, then you are inflicted with that domain’s third and final condition. Whenever your wounds heal, make another health check where the target number is equal to your new damage total. If you succeed, then the most severe condition in that domain is removed. "
                                     :mixed "If you receive an injury in a domain and the new total number of injuries exceeds half of the passive result of your health check, then you become inflicted with that domain’s first condition. If you are inflicted with a domain’s first condition and you take damage in that domain, you must make a health check for that domain where the target number is equal to the new damage total. If your health check fails, then you become inflicted with that domain’s second condition. If at any point, the total damage in a domain exceeds your maximum possible roll, then you are inflicted with that domain’s third and final condition. Whenever your wounds heal, look at your most severe condition in that domain. If you rolled to receive that condition, then roll a health check now where the target number is equal to your new damage total. If you succeed, then remove the condition. If the condition was received as a result of passing a threshold, then compare your new damage total to the threshold. If it is equal to or lesser than the damage threshold, then remove the condition. "
                                     :ending "The physical conditions in order of increasing severity are bloodied, unconscious, and dead. The spiritual conditions are daunted, despondent, and hollow. The mental conditions are unsettled, unstable, and insane. The social conditions are shunned, rejected, and despised."}
                        :recovery {1 "All of your injuries will heal naturally after "
                                   2 {:minor "Minor injuries will heal naturally after "
                                      :major "while major injuries will heal naturally after "}
                                   3 {:minor "Minor injuries will heal naturally after "
                                      :moderate "moderate injuries will heal naturally after "
                                      :major "while major injuries will heal naturally after "}
                                   :treatment? "Injuries can be treated to reduce that recovery time by half and remove any secondary effects that the injury imposes. To treat another creature's injuries, select a domain and the amount of damage you would like to attempt to treat. The target number for the treatment check is equal to the amount of damage you selected and if you succeed, then those injuries are considered treated. If you fail to equal or exceed the target number, however, then the damage that you failed to treat now has twice the recovery time. To make a treatment check, roll "
                                   :ending "You may come across items or techniques that can be used to heal injuries quicker than through the natural process."}}}
           12001 {:id 12001
                  :title "Skill Checks"
                  :type "text"
                  :text {:overview "Skill checks should be made when a character’s actions have a reasonable chance of both failure and success and when failure would come at a cost. If it is impossible for a skill check to fail or to succeed, then there is nothing to check. If a skill check has a reasonable chance of both success and failure but there is no cost for the actions either way, then the character could just continue to try again until they succeed. Ultimately, it is up to the GM’s discretion when a skill check should be called for. When a skill check is called for, you will use your character’s stats to determine the check’s base dice pool. The base dice pool may then be modified in three ways which must occur in the following order: bonuses and penalties, splintering the dice pool, and combining or splitting dice. Once the base dice pool has been modified, then the dice are rolled and the results are compared to a target number which represents the difficulty of the actions you are taking. For example, say the dice pool you roll for a skill check is 3d6 and you roll a 1, 3, and 4. The result of the check would be the 4 and the other two numbers are ignored."
                         :base-dice-pool "When a check is called for, the GM will determine which of your stats is most relevant to the task at hand and the dice pool provided under that stat will become your base dice pool. For example, if you are trying to climb a cliffside, the GM may ask for a check using your coordination skill. If your coordination skill is 2d8, then your base dice pool would be two 8-sided dice."
                         :bonuses-and-penalties "Circumstances and resources can affect skill checks by granting bonuses to make them easier or inflicting penalties to make them more difficult. These bonuses and penalties can either alter your chances of success or alter what you are capable of achieving. When your chances of success are altered, you will add dice bonuses or penalties to your base dice pool which are represented in the format of \"+1d\" and \"-1d\". Dice bonuses and penalties cancel each other out and the final number is then applied to the base dice pool by adding or removing that number of dice. If a dice penalty would cause you to roll zero dice, instead, roll one die of the next size down. If a dice bonus is applied after you roll your dice but before the roll is resolved, then roll the bonus dice and compare the result of the dice pool in question to your bonus dice result and take the higher of the two. If a dice penalty is inflicted after you roll all of your dice but before the roll is resolved, then roll the penalty dice one at a time and compare the result to the dice pool dice that you rolled. The die that is numerically closest to the penalty die you rolled is removed from the roll, rounding unfavorably, and then repeat this process with any remaining penalty dice. If you have penalty dice remaining when there is only one die left in the dice pool in question, then roll the next penalty die and take the lower of the two results. Continue this process until there are no penalty dice left. For example, say you have rolled 2d8 and gotten a 7 and a 3 but before the check is resolved, you get a -2d penalty. You would then roll 1d8 for the first penalty die and let’s say that it lands on a 5. You would remove the result closest to it, rounding unfavorably, so in this case, you would remove the 7 result and the new result of the roll is 3, however, you have 1 more penalty die remaining. You would then roll 1d8 for that second penalty die and let’s say it lands on an 8. You would take the lower of the two results and so when your check is resolved, the result you give would be 3. On the other hand, when the limits of what you can accomplish are altered, you will add flat bonuses or penalties which are represented in the format of \"+1\" or \"-1\". When flat bonuses or penalties are applied to a roll, they cancel each other out and the final number is added to or subtracted from the roll result before comparing it to the target number."
                         :splintering "After bonuses and penalties are applied but before the roll is made, you may choose to splinter your base dice pool into multiple fragmentary pools. This represents taking multiple actions with a single check. A common example of this is when you attack multiple enemies at once. If you choose to splinter your base dice pool, the total number of dice that you roll remains unchanged and each of the fragmentary dice pools must contain at least two dice. So if your base dice pool was 5d6, you could only splinter it into dice pools of 2d6 and 3d6, you could not splinter it into three die pools of 2d6, 2d6, and 1d6. Flat bonuses and penalties must be distributed as evenly as possible amongst the fragmentary dice pools."
                         :combining-and-splitting "The final modification that can be made to a dice pool before rolling is combining dice into larger sizes or splitting them into smaller sizes. This represents your choice of acting recklessly or carefully. If you choose to act recklessly, then two dice may be combined into a single die of the next highest size. So, if you were rolling 4d6 and you chose to act recklessly, you could instead roll 2d8. On the other hand, if you choose to act carefully, then each individual die is split into two dice of the next smallest size. So, that same roll of 4d6 would become 8d4 if the action was taken as carefully as possible. You can choose your degree of carefulness or recklessness by splitting or combining only some of the dice in the pool. Combining a dice pool of 4d6 into 2d8 is more reckless than combining that same dice pool of 4d6 into 1d8 + 2d6 and taking the highest result of those three dice. This modification can only be applied once, so you could not combine 4d4 into 2d6 and then combine those 2d6 into 1d8. Similarly, you could not split 2d8 into 4d6 and then split those 4d6 into 8d4."
                         :passive "Passive checks may be used by the GM to resolve situations where your character’s stats are relevant but where there are no actions that your character takes to resolve the situation. Checks to determine your character's level of knowledge on a topic or checks to notice something in your surroundings when you aren’t searching will commonly be made as passive checks. The GM will still determine a target number and choose which stats are most relevant, and you will still put together your base dice pool and add the bonuses and penalties. However, instead of modifying that dice pool and rolling those dice, you will add together the number of dice in the dice pool, the net value of the flat bonuses and penalties, and half of the size of the dice that are being rolled and use that as the result of your check. The result of a passive check cannot exceed the size of your ability die plus the net value of your flat bonuses and penalties. So, in a simple case, if your base dice pool was 2d6 and you had no bonuses or penalties, then the result would be determined by adding 2 for the number of dice to 3 for half the size of your dice for a total of 5. If the 2d6 had a flat bonus of +2, then that is added to the result as well as the cap on the check. So the result would be 7 with a maximum possible result of 8. Once the result is determined, it is compared to the target number determined by the GM as usual. Passive checks cannot be modified by splintering, combining, or splitting."}}
           12021 {:id 12021
                  :title "Encounters"
                  :type "text"
                  :text {:overview "An encounter is a scene that is centered around a goal and obstacle where many of your actions require skill checks. One of the clearest examples of an encounter is combat. During combat, the most basic goal is survival, the obstacle to that goal is the creatures or characters that are trying to kill you, and most of your actions will relate to attacking, defending, or positioning which all frequently require skill checks. Other examples of scenes that may be counted as encounters are chase scenes, social functions, survivalist challenges, heists, and investigations. Encounters are the most structured portions of an adventure. Your GM may decide to run some encounters more casually just like they would any other part of the adventure, however, if they want to track the order of actions more carefully, then they may use the following structure."
                         :rounds "The in-game duration of a round depends on the encounter you are involved in. In the case of small scale combat, a round will usually take about five to ten seconds whereas in something like a social encounter, a round may take twenty minutes or an hour or even longer. Rounds are made up of two phases: the setup phase and the engagement phase. During the setup phase, creatures will have two setup actions that they can use to prepare themselves for the engagements that are to come. This phase will begin with everyone being given the opportunity to take the target action since many engagement actions can only be used on targeted creatures or areas. Then everyone is given the opportunity to use their remaining setup actions. During the engagement phase, creatures will have two engagement actions which they can use to attempt to overcome the obstacles they have targeted. This phase will usually involve traversing significant obstacles by climbing, swimming, jumping, etc., using items, attacking and defending, or various forms of persuasion. The round ends once all of the engagement actions have been resolved or when a moment passes where no dice were rolled for engagement actions."
                         :moments "After the setup phase of a round is complete and bonuses and penalties have been added to everyone’s base dice pools, the first moment of the engagement phase begins. When a moment begins, anyone who would like to act in that moment may commit dice to the moment by setting them aside. You can choose to commit only a portion of your dice pool to the moment by splintering them from their current dice pool and you can also commit multiple fragmentary dice pools to a single moment. Once everyone has committed their dice, they may modify them by combining or splitting them and then everyone rolls their dice at the same time. The dice that have been rolled are resolved in the following manner: the dice pools with the fewest dice are resolved first, if two dice pools have the same number of dice, then the dice pool with the larger sized dice goes first. If that does not resolve the tie, then the GM simply decides which action is resolved first. This means that modifications to your dice pool may cause your actions to be resolved earlier or later than they otherwise would be. Reckless actions will have fewer dice and so will be resolved earlier while careful actions will have more dice and so be resolved later. Once all of the rolls committed to a moment have been resolved, the next moment of the round begins and everyone who has dice remaining in their dice pool may choose to commit dice to the next moment following the same rules as in the prior moment."
                         :actions "There are two types of actions: setup actions and engagement actions. Setup actions are small adjustments that don’t take much focus, time, or effort. Engagement actions are where the bulk of the encounter takes place and they will usually require much more from you and have a risk of failure. Generally speaking, if an action requires a check, then it is likely an engagement action and if an action only requires a passive check or no check at all, then it is likely a setup action. Each combatant can take two setup actions during the setup phase and two engagement actions during the engagement phase. Combatants may take additional setup actions during the engagement phase as part of their engagement actions, however, each one of these setup actions inflicts a -1d penalty on both of their engagement actions. This penalty is applied even if you did not use either of your two setup actions in the setup phase. You may sacrifice one of your engagement actions to prevent these penalties from being applied to your other engagement action. You cannot take more than six setup actions in a round and you can’t take more than two setup actions in a moment. Engagement actions are further divided into initiations and reactions. Initiations require you to have focus on a target while reactions can only be used when you are the target of another creature's initiation. Listed below are some examples of the two kinds of actions."}}
           12031 {:id 12031
                  :title "Recovery"
                  :type "text"
                  :text {:overview "Both in and out of encounters, your character will have to react to events around them in an attempt to prevent harm to themself. Often times, when these reactions fail, your character will take damage. This damage is tracked separately for each of the four domains: physical, spiritual, mental, and social. As damage accumulates in each of the domains, you will be inflicted with more and more serious conditions."
                         :injuries "If an attack targets you and the result is equal to or greater than your reaction, then you take a minor injury. If the attack roll is equal to or greater than the reaction roll + 3, then you take a major injury. When you are inflicted with an injury, record the severity of the injury and the domain in which it was inflicted. It may also help to keep a running total of the points of damage you have in each domain. Minor injuries inflict one point of damage while major injuries inflict two points of damage."
                         :conditions "There are three conditions that can apply to each domain that are inflicted on your character as they take increasing numbers of injuries: Wounded, Incapacitated, and Dead. You will make health checks to determine when these conditions are applied and the health check for each domain is that domain's continuation skill. If you receive an injury in a domain and the new total number of injuries exceeds half of the passive result of your health check rounded favorably, then you become inflicted with the Wounded condition in that domain. If you are inflicted with the Wounded condition and you take further damage in that domain, you must make a health check for that domain where the target number is equal to the new damage total. If your health check fails, then you become inflicted with the Incapacitated condition in that domain. If at any point, the total damage in a domain exceeds your maximum possible roll, then you are inflicted with the final condition in that domain - Dead. Whenever your wounds heal, look at your most severe condition in that domain. If you rolled to receive that condition, then roll a health check now where the target number is equal to your new damage total. If you succeed, then remove the condition. If the condition was received as a result of passing a threshold, then compare your new damage total to the threshold. If it is equal to or lesser than the damage threshold, then remove the condition. If inflicted with the Death condition in the Physical, Spiritual, or Mental domain, your character is no longer playable unless there is some process or item that specifically reverses the condition. The Death condition in the Social domain is relative to the circumstances in which it was acquired and so your character is still playable, however, the individuals that you are “dead to” so to speak may never want to interact with you again or they may become hostile to you."
                         :recovery "Minor injuries will heal naturally after 2 days while major injuries will heal naturally after 1 week. You may come across items or techniques that can be used to heal injuries quicker than through the natural process."}}
           1204 {:id 1204
                 :type "text"
                 :text {:overview "Conditions Overview"}}

           10 {:id 10
               :type "skillbility"
               :title "Coordination"
               :details "Coordination represents a creature's physical strength, flexibility, and control. A creature with high coordination will hit harder and faster and be able to perform impressive feats of athleticism and acrobatics."}
           11 {:id 11
               :type "skillbility"
               :title "Reflexes"
               :details "Reflexes represents the speed and accuracy of a creature's reactions. A creature with high reflexes will be able to defend themself from incoming attacks much more reliably."}
           12 {:id 12
               :type "skillbility"
               :title "Endurance"
               :details "Endurance represents how much of a beating a creature can take as well as their resistance to sickness, disease, and exhaustion. A creature with high endurance will manage to survive where most other would not."}
           13 {:id 13
               :type "skillbility"
               :title "Exertion"
               :details "Exertion represents the strength of a creature's sense of self. A creature with high exertion is capable of handling enormous amounts of aethereal energy without fear of being consumed by it."}
           14 {:id 14
               :type "skillbility"
               :title "Instinct"
               :details "Instinct represents the strength and reliability of a creature's gut reactions. A creature with high instinct is very sensitive to the constantly shifting aether and are able to block out or reinforce the magic that touches their spirit."}
           15 {:id 15
               :type "skillbility"
               :title "Perseverance"
               :details "Perseverance represents a creature's ability to maintain their sense of self in the face of doubt and temptation. A creature with high perseverance is able to absorb large amounts of foreign aethereal energy without losing themself to the chaos."}
           16 {:id 16
               :type "skillbility"
               :title "Concentration"
               :details "Concentration represents a creature's ability to focus on a single task and avoid distractions. A creature with high concentration is able to accomplish more impressive feats with greater efficiency."}
           17 {:id 17
               :type "skillbility"
               :title "Recognition"
               :details "Recognition represents a creature's attention to detail. A creature with high recognition will often be able to notice the small things that others find insignificant. They are attentive to their surroundings and usually have great memories."}
           18 {:id 18
               :type "skillbility"
               :title "Comprehension"
               :details "Comprehension represents a creature's ability to absorb and retain information. A creature with high comprehension is better able to understand the underlying principles of that which they are learning often causing them to pick up skills quickly and can make them great teachers."}
           19 {:id 19
               :type "skillbility"
               :title "Persuasion"
               :details "Persuasion represents a creature's ability to sway the dispositions of others through charm, intimidation, or deception. A creature with high persuasion is able to get what they want from people without resorting to violence."}
           20 {:id 20
               :type "skillbility"
               :title "Insight"
               :details "Insight represents how well a creature picks up on the many unspoken facets of a social environment. A creature with high insight can often discern the true motives and character of those they are interacting with."}
           21 {:id 21
               :type "skillbility"
               :title "Connections"
               :details "Connections represents how many relationships and affiliations a creature has, how deep those connections run, and how good they are at calling upon those connections for favors. A creature with high connections always knows a guy who knows a guy whether that is through a membership in a group, a trade deal they made years ago, or simply a friend they met throughout their journeys."}

           47 {:id 47
               :type "condition"
               :title "Wounded"
               :description "As a result of the injuries you have accumulated, your performance in a particular domain has diminished."
               :effects {1 {:description "While wounded, a -1d penalty is applied to all checks made in the domain you are wounded in."
                            :duration "This condition lasts until the total injuries in the relevant domain are equal to or lower than the threshold determined by that domain's health check."}}}
           48 {:id 48
               :type "condition"
               :title "Incapacitated"
               :description "You have accumulated enough injuries that your character is no longer in control of their body, mind, spirit, or reputation."
               :effects {1 {:description "When this condition is inflicted in the physical, spiritual, or mental domain, your character becomes unconscious, despondent, or unstable, respectively. You have no control over your character in any of these circumstances. In the case of social incapacitation, people may avoid associating with you or may ignore you completely."
                            :duration "Whenever your wounds heal, make a health check where the target number is your new damage total. If you succeed, then this condition is removed."}}}
           49 {:id 49
               :type "condition"
               :title "Dead"
               :description "You have accumulated more injuries than your body, mind, spirit, or reputation can handle."
               :effects {1 {:description "When this condition is inflicted in the physical, spiritual, or mental domain, the injuries accumulated in those domains no longer heal naturally over time. In the case of the social domain, your relationships with specific individuals or groups may be permanently severed and trying to interact with them may cause them to become hostile."
                            :duration "Unless a certain circumstance, process, or item says otherwise, this condition is permanent."}}}

           50 {:id 50
               :type "condition"
               :title "Bloodied"
               :description "As a result of the physical injuries you have accumulated, your body is no longer at peak performance."
               :effects {1 {:description "While bloodied, you take a -1d penalty to all checks made in the physical domain."
                            :duration "If this condition was acquired by your total damage exceeding a threshold, then it is removed by your total damage being equal to or lower than that threshold. If this condition was acquired by failing a health check, then, whenever your wounds heal, make another health check where the target number is your new damage total. If you succeed, then this condition is removed. However, this condition cannot be removed if your character is unconscious."}}}
           51 {:id 51
               :type "condition"
               :title "Unconscious"
               :description "You have accumulated enough physical injuries that your body has shut down."
               :effects {1 {:description "Your body falls limp and you are unable to take actions or perceive your surroundings."
                            :duration "If this condition was acquired by your total damage exceeding a threshold, then it is removed by your total damage being equal to or lower than that threshold. If this condition was acquired by failing a health check, then, whenever your wounds heal, make another health check where the target number is your new damage total. If you succeed, then this condition is removed. However, this condition cannot be removed if your character is dead."}}}
           52 {:id 52
               :type "condition"
               :title "Dead"
               :description "Your body has sustained damage beyond its capacities for self-healing."
               :effects {1 {:description "Physical wounds can no longer heal naturally and your body begins to decay."
                            :duration "If this condition was acquired by your total damage exceeding a threshold, then it is removed by your total damage being equal to or lower than that threshold. If this condition was acquired by failing a health check, then, whenever your wounds heal, make another health check where the target number is your new damage total. If you succeed, then this condition is removed."}}}
           53 {:id 53
               :type "condition"
               :title "Daunted"
               :description "As a result of the spiritual injuries you have accumulated, your spirit is no longer at peak performance."
               :effects {1 {:description "While daunted, you take a -1d penalty to all checks made in the spiritual domain."
                            :duration "If this condition was acquired by your total damage exceeding a threshold, then it is removed by your total damage being equal to or lower than that threshold. If this condition was acquired by failing a health check, then, whenever your wounds heal, make another health check where the target number is your new damage total. If you succeed, then this condition is removed. However, this condition cannot be removed if your character is despondent."}}}
           54 {:id 54
               :type "condition"
               :title "Despondent"
               :description "You have accumulated enough spiritual injuries that your spirit has shut down."
               :effects {1 {:description "You sit or lie down in a comfortable position and are unable to take actions and are inattentive to your surroundings."
                            :duration "If this condition was acquired by your total damage exceeding a threshold, then it is removed by your total damage being equal to or lower than that threshold. If this condition was acquired by failing a health check, then, whenever your wounds heal, make another health check where the target number is your new damage total. If you succeed, then this condition is removed. However, this condition cannot be removed if your character is hollow."}}}
           55 {:id 55
               :type "condition"
               :title "Hollow"
               :description "Your spirit has sustained damage beyond its capacity for self-healing."
               :effects {1 {:description "Spiritual wounds can no longer heal naturally and your living body becomes vulnerable to occupation by an external will."
                            :duration "If this condition was acquired by your total damage exceeding a threshold, then it is removed by your total damage being equal to or lower than that threshold. If this condition was acquired by failing a health check, then, whenever your wounds heal, make another health check where the target number is your new damage total. If you succeed, then this condition is removed."}}}
           56 {:id 56
               :type "condition"
               :title "Unsettled"
               :description "As a result of the mental injuries you have accumulated, your mind is no longer at peak performance."
               :effects {1 {:description "While unsettled, you take a -1d penalty to all checks made in the mental domain."
                            :duration "If this condition was acquired by your total damage exceeding a threshold, then it is removed by your total damage being equal to or lower than that threshold. If this condition was acquired by failing a health check, then, whenever your wounds heal, make another health check where the target number is your new damage total. If you succeed, then this condition is removed. However, this condition cannot be removed if your character is unstable."}}}
           57 {:id 57
               :type "condition"
               :title "Unstable"
               :description "You have accumulated enough mental injuries that your mind can no longer comprehend your circumstances."
               :effects {1 {:description "Your character has a mental breakdown the nature of which is determined by the Game Master."
                            :duration "If this condition was acquired by your total damage exceeding a threshold, then it is removed by your total damage being equal to or lower than that threshold. If this condition was acquired by failing a health check, then, whenever your wounds heal, make another health check where the target number is your new damage total. If you succeed, then this condition is removed. However, this condition cannot be removed if your character is insane."}}}
           58 {:id 58
               :type "condition"
               :title "Insane"
               :description "Your mind has sustained damage beyond its capacity for self-healing."
               :effects {1 {:description "Mental wounds can no longer heal naturally and your mind becomes broken. The nature of this break is determined by the Game Master."
                            :duration "If this condition was acquired by your total damage exceeding a threshold, then it is removed by your total damage being equal to or lower than that threshold. If this condition was acquired by failing a health check, then, whenever your wounds heal, make another health check where the target number is your new damage total. If you succeed, then this condition is removed."}}}
           59 {:id 59
               :type "condition"
               :title "Shunned"
               :description "As a result of the social injuries you have accumulated, you are no longer able to interact normally in the current social context."
               :effects {1 {:description "While shunned, you take a -1d penalty to all checks made in the social domain within the social context that the damage was inflicted."
                            :duration "If this condition was acquired by your total damage exceeding a threshold, then it is removed by your total damage being equal to or lower than that threshold. If this condition was acquired by failing a health check, then, whenever your wounds heal, make another health check where the target number is your new damage total. If you succeed, then this condition is removed. However, this condition cannot be removed if your character is rejected."}}}
           60 {:id 60
               :type "condition"
               :title "Rejected"
               :description "You have accumulated enough social injuries that your character is no longer welcome within the social context that the damage was dealt."
               :effects {1 {:description "Your character is ostracized by the current social group and may be asked to leave or may be forcibly removed."
                            :duration "If this condition was acquired by your total damage exceeding a threshold, then it is removed by your total damage being equal to or lower than that threshold. If this condition was acquired by failing a health check, then, whenever your wounds heal, make another health check where the target number is your new damage total. If you succeed, then this condition is removed. However, this condition cannot be removed if your character is despised."}}}
           61 {:id 61
               :type "condition"
               :title "Despised"
               :description "Your reputation within this social context has been damaged beyond its capacity for self-healing."
               :effects {1 {:description "The wounds that you accumulated in this social context no longer heal naturally and confronting members of the group may lead them to become hostile to you."
                            :duration "If this condition was acquired by your total damage exceeding a threshold, then it is removed by your total damage being equal to or lower than that threshold. If this condition was acquired by failing a health check, then, whenever your wounds heal, make another health check where the target number is your new damage total. If you succeed, then this condition is removed."}}}
           62 {:id 62
               :type "condition"
               :title "Exhaustion"
               :description "Whether through over-exertion, sickness, or some other unfortunate circumstance, you have become exhausted and your overall capabilities are diminished. This condition can be applied any number of times adding additional levels of exhaustion."
               :effects {1 {:description "Each level of exhaustion inflicts a -1d penalty on all of your checks."
                            :duration "Six hours of uninterrupted sleep removes one level of exhaustion."}}}
           63 {:id 63
               :type "condition"
               :title "Surprise"
               :description "Events have unfolded that were so unexpected that it takes your mind a bit to catch up."
               :effects {1 {:description "You cannot take any actions while surprised."
                            :duration "The surprise fades away after a few seconds."}}}
           64 {:id 64
               :type "condition"
               :title "Blinded"
               :description "Some damage or barrier prevents you from seeing."
               :effects {1 {:description "Actions that depend on your sense of sight will receive penalties as determined by the Game Master."
                            :duration "Your sense of sight returns once the barrier is removed or damage healed."}}}
           65 {:id 65
               :type "condition"
               :title "Deafened"
               :description "Some damage or barrier prevents you from hearing."
               :effects {1 {:description "Actions that depend on your sense of hearing will receive penalties as determined by the Game Master."
                            :duration "Your sense of hearing returns once the barrier is removed or damage healed."}}}
           66 {:id 66
               :type "condition"
               :title "Constrained"
               :description "You have become tangled, tied, or grappled and your movement is restricted."
               :effects {1 {:description "Actions that depend on your ability to move will receive penalties as determined by the Game Master."
                            :duration "Your freedom of movement returns when the restraints are removed."}}}
           67 {:id 67
               :type "condition"
               :title "Frightened"
               :description "Your instinctual desire to preserve your life and well-being take over in the face of great danger."
               :effects {1 {:description "You cannot move closer to where you believe the source of your fear is."
                            :duration "This effect lasts for as long as you believe the source of your fear is still a threat."}
                         2 {:description "If the fear is accompanied by the infliction of mental damage, then you take a dice penalty to all of your actions equal to the amount of damage that the wound dealt."
                            :duration "This penalty persists until the mental damage that is causing it heals."}}}
           68 {:id 68
               :type "condition"
               :title "Frenzied"
               :description "Rage and bloodlust overtake the rest of your motivations and inclinations."
               :effects {1 {:description "You will gain dice bonuses to checks which aim to inflict physical harm on a creature or object with an equivalent dice penalty being inflicted to all other checks. The bonus/penalty is equal to your frenzy level."
                            :duration "If you remain still for one minute, your frenzied instincts die down and you return to your usual self."}
                         2 {:description "If you entered into the frenzy unwillingly, you must attack the nearest creature. If you cannot sense any creatures nearby, then you attack the most breakable object in sight."
                            :duration "Every few seconds, you may make a spiritual health check where the target number is determined by the Game Master. If successful, this effect of the frenzy ends."}}}}})
