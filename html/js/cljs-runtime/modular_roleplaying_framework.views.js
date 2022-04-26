goog.provide('modular_roleplaying_framework.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('kee_frame.core');
goog.require('clojure.string');
goog.require('modular_roleplaying_framework.db_CRUD');
modular_roleplaying_framework.views.main_menu = (function modular_roleplaying_framework$views$main_menu(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-menu","div.main-menu",-1778376001),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"view-system-btn",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Prototype System",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__29516 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-system","initialize-system",-1223784141),(function (){var G__29517 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),(3)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29517) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29517));
})(),(function (){var G__29518 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),(2)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29518) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29518));
})(),(function (){var G__29519 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),(10)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29519) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29519));
})(),"book-layout"], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29516) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29516));
})], null),"Prototype System"], null)], null);
});
modular_roleplaying_framework.views.overlay = (function modular_roleplaying_framework$views$overlay(var_args){
var G__29521 = arguments.length;
switch (G__29521) {
case 1:
return modular_roleplaying_framework.views.overlay.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return modular_roleplaying_framework.views.overlay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(modular_roleplaying_framework.views.overlay.cljs$core$IFn$_invoke$arity$1 = (function (item_id){
var G__29522_29851 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-item-change","overlay-item-change",-1911220370),item_id], null);
(modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29522_29851) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29522_29851));

var G__29523 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-state-change","overlay-state-change",1441777589),"visible"], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29523) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29523));
}));

(modular_roleplaying_framework.views.overlay.cljs$core$IFn$_invoke$arity$2 = (function (item_id,params){
var G__29524_29852 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-item-change","overlay-item-change",-1911220370),item_id], null);
(modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29524_29852) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29524_29852));

var G__29525_29853 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-state-change","overlay-state-change",1441777589),"visible"], null);
(modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29525_29853) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29525_29853));

var G__29526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-params-change","overlay-params-change",171897048),params], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29526) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29526));
}));

(modular_roleplaying_framework.views.overlay.cljs$lang$maxFixedArity = 2);

modular_roleplaying_framework.views.dice_roll = (function modular_roleplaying_framework$views$dice_roll(var_args){
var G__29528 = arguments.length;
switch (G__29528) {
case 3:
return modular_roleplaying_framework.views.dice_roll.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return modular_roleplaying_framework.views.dice_roll.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(modular_roleplaying_framework.views.dice_roll.cljs$core$IFn$_invoke$arity$3 = (function (dice_quantity,dice_size,roll_type){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(roll_type),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dice_quantity,(cljs.core.rand_int(dice_size) + (1)))))].join('');
}));

(modular_roleplaying_framework.views.dice_roll.cljs$core$IFn$_invoke$arity$4 = (function (dice_quantity,dice_size,flat_bonus,roll_type){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(roll_type),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((flat_bonus + cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dice_quantity,(cljs.core.rand_int(dice_size) + (1))))))].join('');
}));

(modular_roleplaying_framework.views.dice_roll.cljs$lang$maxFixedArity = 4);

modular_roleplaying_framework.views.dice_button = (function modular_roleplaying_framework$views$dice_button(var_args){
var G__29530 = arguments.length;
switch (G__29530) {
case 3:
return modular_roleplaying_framework.views.dice_button.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return modular_roleplaying_framework.views.dice_button.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(modular_roleplaying_framework.views.dice_button.cljs$core$IFn$_invoke$arity$3 = (function (dice_quantity,dice_size,roll_type){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_quantity),"d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_size)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([modular_roleplaying_framework.views.dice_roll.cljs$core$IFn$_invoke$arity$3(dice_quantity,dice_size,roll_type)], 0));
})], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_quantity),"d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_size)].join('')], null);
}));

(modular_roleplaying_framework.views.dice_button.cljs$core$IFn$_invoke$arity$4 = (function (dice_quantity,dice_size,flat_bonus,roll_type){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_quantity),"d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_size)," +",cljs.core.str.cljs$core$IFn$_invoke$arity$1(flat_bonus)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([modular_roleplaying_framework.views.dice_roll.cljs$core$IFn$_invoke$arity$4(dice_quantity,dice_size,flat_bonus,roll_type)], 0));
})], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_quantity),"d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_size)," +",cljs.core.str.cljs$core$IFn$_invoke$arity$1(flat_bonus)].join('')], null);
}));

(modular_roleplaying_framework.views.dice_button.cljs$lang$maxFixedArity = 4);

modular_roleplaying_framework.views.dice_display = (function modular_roleplaying_framework$views$dice_display(dice_quantity,dice_size){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5em"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_quantity),"d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_size)].join('')], null);
});
/**
 * Convert newlines to [:br]'s.
 */
modular_roleplaying_framework.views.text__GT_hiccup = (function modular_roleplaying_framework$views$text__GT_hiccup(text){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29531_SHARP_){
if(typeof p1__29531_SHARP_ === 'string'){
return p1__29531_SHARP_;
} else {
return cljs.core.with_meta(p1__29531_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("br-")], null));
}
}),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,"\n")));
});
modular_roleplaying_framework.views.background_color = (function modular_roleplaying_framework$views$background_color(section_type,section_number){
var G__29532 = section_type;
switch (G__29532) {
case "ruleset":
return "rgb(125, 125, 125)";

break;
case "world":
return "rgb(125, 125, 125)";

break;
case "adventure":
return "rgb(125, 125, 125)";

break;
case "character":
return "rgb(125, 125, 125)";

break;
default:
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: BACKGROUND COLOR: unrecognized section type in",section_number,"-",section_type], 0));

}
});
modular_roleplaying_framework.views.get_section_class = (function modular_roleplaying_framework$views$get_section_class(section_layout,section_number){
var G__29533 = section_layout;
switch (G__29533) {
case "sidebar":
var G__29534 = section_number;
switch (G__29534) {
case "section-one":
return "sidebar left";

break;
case "section-three":
return "sidebar right";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29534)].join('')));

}

break;
case "page":
return "page";

break;
case "book":
return "book";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29533)].join('')));

}
});
modular_roleplaying_framework.views.divify = (function modular_roleplaying_framework$views$divify(content){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)], null);
});
modular_roleplaying_framework.views.keywordize_keys = (function modular_roleplaying_framework$views$keywordize_keys(m){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.keys(m)),cljs.core.vals(m));
});
modular_roleplaying_framework.views.keywordized_frequencies = (function modular_roleplaying_framework$views$keywordized_frequencies(v){
return modular_roleplaying_framework.views.keywordize_keys(cljs.core.frequencies(v));
});
modular_roleplaying_framework.views.positions = (function modular_roleplaying_framework$views$positions(pred,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,x)){
return idx;
} else {
return null;
}
}),coll);
});
modular_roleplaying_framework.views.toggle_layout = (function modular_roleplaying_framework$views$toggle_layout(section_one,section_two,section_three,layout){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"float-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"6%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"float-button",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Toggle Layout",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__29535 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-layout","toggle-layout",-241410907)], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29535) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29535));
})], null)], null)], null)], null);
});
modular_roleplaying_framework.views.reorder_sections = (function modular_roleplaying_framework$views$reorder_sections(section_one,section_two,section_three,layout,direction){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.float-button","div.float-button",945553340),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"float-button",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__29536 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reorder-sections","reorder-sections",208296526),direction], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29536) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29536));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__29537 = direction;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("forward",G__29537)){
return "fas fa-chevron-right";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("backward",G__29537)){
return "fas fa-chevron-left";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),G__29537)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Unrecognized direction while reordering sections."], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29537)].join('')));

}
}
}
})()], null)], null)], null)], null);
});
modular_roleplaying_framework.views.text = (function modular_roleplaying_framework$views$text(section_number,section_type,section_id,section_tab,section_layout){
var items = (function (){var G__29538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-items","tab-items",1934951825),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29538) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29538));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"body"], null),(function (){var G__29539 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-text","item-text",-2146003655),(items.cljs$core$IFn$_invoke$arity$1 ? items.cljs$core$IFn$_invoke$arity$1((0)) : items.call(null,(0)))], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29539) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29539));
})()], null);
});
modular_roleplaying_framework.views.list_item = (function modular_roleplaying_framework$views$list_item(item,section_number){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"body",new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29540) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29540));
})(),item))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"black",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null):null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,(function (){var G__29541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29541) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29541));
})()))?(function (){
var G__29542 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),section_number], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29542) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29542));
}):(function (){
var G__29543_29859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),section_number], null);
(modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29543_29859) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29543_29859));

var G__29544 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-select","item-select",-1822277284),section_number,item], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29544) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29544));
}))], null),(function (){var G__29545 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-title","item-title",-249793661),item], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29545) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29545));
})()], null);
});
modular_roleplaying_framework.views.basic_list = (function modular_roleplaying_framework$views$basic_list(section_number,section_type,section_id,section_tab,section_layout){
var items = (function (){var G__29546 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-items","tab-items",1934951825),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29546) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29546));
})();
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.list_item,items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number)));
});
modular_roleplaying_framework.views.skillbility_view = (function modular_roleplaying_framework$views$skillbility_view(skillbility_id,section_layout){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"unselected-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"95%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return modular_roleplaying_framework.views.overlay.cljs$core$IFn$_invoke$arity$1(skillbility_id);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__29547 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-title","item-title",-249793661),skillbility_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29547) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29547));
})()], null)], null);
});
modular_roleplaying_framework.views.skills_abilities_details = (function modular_roleplaying_framework$views$skills_abilities_details(section_number,section_type,section_id,section_tab,section_layout){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section_layout,"sidebar")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"maroon"], null)], null),"The skills and abilities section is not yet formatted to display in the sidebar. Modify your view using the layout controls at the bottom of the page to view the skills and abilities details in the page-style or book-style section."], null);
} else {
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"moderate-stats"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Initiation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Reaction"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Continuation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Physical"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((10),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((11),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((12),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Spiritual"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((13),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((14),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((15),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Mental"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((16),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((17),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((18),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Social"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((19),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((20),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((21),section_layout)], null)], null);
}
});
modular_roleplaying_framework.views.skill_checks = (function modular_roleplaying_framework$views$skill_checks(_,___$1,section_id,section_tab,section_layout){
var item = (function (){var fexpr__29550 = (function (){var G__29551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-items","tab-items",1934951825),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29551) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29551));
})();
return (fexpr__29550.cljs$core$IFn$_invoke$arity$1 ? fexpr__29550.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__29550.call(null,(0)));
})();
var map__29548 = (function (){var G__29552 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29552) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29552));
})();
var map__29548__$1 = (((((!((map__29548 == null))))?(((((map__29548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29548):map__29548);
var skills = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29548__$1,new cljs.core.Keyword(null,"skills","skills",958701426));
var skillbilities_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29548__$1,new cljs.core.Keyword(null,"skillbilities?","skillbilities?",788972706));
var splintering = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29548__$1,new cljs.core.Keyword(null,"splintering","splintering",-1707231919));
var caution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29548__$1,new cljs.core.Keyword(null,"caution","caution",1823615934));
var style = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section_layout,"book"))?"book-style-text":"standard-text");
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Overview"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__29554 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype-text","prototype-text",620288557),item,new cljs.core.Keyword(null,"overview","overview",-435037267)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29554) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29554));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Base Dice Pool"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__29555 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype-text","prototype-text",620288557),item,new cljs.core.Keyword(null,"base-dice-pool","base-dice-pool",-2000848897)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29555) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29555));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Bonuses & Penalties"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__29556 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype-text","prototype-text",620288557),item,new cljs.core.Keyword(null,"bonuses-and-penalties","bonuses-and-penalties",606200007)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29556) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29556));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Splintering"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__29557 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype-text","prototype-text",620288557),item,new cljs.core.Keyword(null,"splintering","splintering",-1707231919)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29557) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29557));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Combining & Splitting"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__29558 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype-text","prototype-text",620288557),item,new cljs.core.Keyword(null,"combining-and-splitting","combining-and-splitting",-1963502873)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29558) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29558));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Passive Checks"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__29559 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype-text","prototype-text",620288557),item,new cljs.core.Keyword(null,"passive","passive",252884080)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29559) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29559));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
modular_roleplaying_framework.views.resources = (function modular_roleplaying_framework$views$resources(section_number,section_type,section_id,section_tab,section_layout){
var item = (function (){var fexpr__29561 = (function (){var G__29562 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-items","tab-items",1934951825),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29562) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29562));
})();
return (fexpr__29561.cljs$core$IFn$_invoke$arity$1 ? fexpr__29561.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__29561.call(null,(0)));
})();
var style = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section_layout,"book"))?"book-style-text":"standard-text");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Overview"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__29563 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overview","overview",-435037267),item], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29563) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29563));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
modular_roleplaying_framework.views.encounters = (function modular_roleplaying_framework$views$encounters(section_number,section_type,section_id,section_tab,section_layout){
var item = (function (){var fexpr__29566 = (function (){var G__29567 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-items","tab-items",1934951825),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29567) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29567));
})();
return (fexpr__29566.cljs$core$IFn$_invoke$arity$1 ? fexpr__29566.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__29566.call(null,(0)));
})();
var map__29564 = (function (){var G__29568 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29568) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29568));
})();
var map__29564__$1 = (((((!((map__29564 == null))))?(((((map__29564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29564):map__29564);
var encounter_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29564__$1,new cljs.core.Keyword(null,"encounter-style","encounter-style",841336692));
var splintering = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29564__$1,new cljs.core.Keyword(null,"splintering","splintering",-1707231919));
var caution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29564__$1,new cljs.core.Keyword(null,"caution","caution",1823615934));
var style = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section_layout,"book"))?"book-style-text":"standard-text");
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Overview"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__29570 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype-text","prototype-text",620288557),item,new cljs.core.Keyword(null,"overview","overview",-435037267)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29570) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29570));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Rounds"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__29571 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype-text","prototype-text",620288557),item,new cljs.core.Keyword(null,"rounds","rounds",1157201084)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29571) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29571));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Moments"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__29572 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype-text","prototype-text",620288557),item,new cljs.core.Keyword(null,"moments","moments",-1541189836)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29572) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29572));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Actions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__29573 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype-text","prototype-text",620288557),item,new cljs.core.Keyword(null,"actions","actions",-812656882)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29573) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29573));
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"actions-list"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"action-section"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Setup Actions"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.divify,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["- Duck Behind Cover","- Fall Prone","- Stand Up","- Walk","- Focus"], null))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"action-section"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Engagement Actions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5em"], null)], null),"Initiations"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.divify,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["- Cast a spell","- Attack with a weapon","- Grapple","- Disarm","- Climb","- Swim","- Jump","- Hide","- Provide First Aid"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5em"], null)], null),"Reactions"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.divify,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["- Block","- Parry","- Counterspell","- Guard mind","- Evade"], null))], null)], null)], null);
});
modular_roleplaying_framework.views.damage_and_recovery = (function modular_roleplaying_framework$views$damage_and_recovery(section_number,section_type,section_id,section_tab,section_layout){
var item = (function (){var fexpr__29576 = (function (){var G__29577 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-items","tab-items",1934951825),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29577) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29577));
})();
return (fexpr__29576.cljs$core$IFn$_invoke$arity$1 ? fexpr__29576.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__29576.call(null,(0)));
})();
var map__29574 = (function (){var G__29578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29578) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29578));
})();
var map__29574__$1 = (((((!((map__29574 == null))))?(((((map__29574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29574):map__29574);
var damage_tiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29574__$1,new cljs.core.Keyword(null,"damage-tiers","damage-tiers",753202606));
var recovery_tiers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29574__$1,new cljs.core.Keyword(null,"recovery-tiers?","recovery-tiers?",1974730784));
var condition_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29574__$1,new cljs.core.Keyword(null,"condition-style","condition-style",-1128400844));
var skills = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29574__$1,new cljs.core.Keyword(null,"skills","skills",958701426));
var abilities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29574__$1,new cljs.core.Keyword(null,"abilities","abilities",-1471386226));
var skillbilities_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29574__$1,new cljs.core.Keyword(null,"skillbilities?","skillbilities?",788972706));
var recovery_times = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29574__$1,new cljs.core.Keyword(null,"recovery-times","recovery-times",-324037834));
var treatment_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29574__$1,new cljs.core.Keyword(null,"treatment?","treatment?",264384759));
var style = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section_layout,"book"))?"book-style-text":"standard-text");
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Overview"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__29580 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype-text","prototype-text",620288557),item,new cljs.core.Keyword(null,"overview","overview",-435037267)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29580) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29580));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Injuries"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__29581 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype-text","prototype-text",620288557),item,new cljs.core.Keyword(null,"injuries","injuries",-299210720)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29581) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29581));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Conditions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__29582 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype-text","prototype-text",620288557),item,new cljs.core.Keyword(null,"conditions","conditions",-1647236270)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29582) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29582));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Recovery"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__29583 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype-text","prototype-text",620288557),item,new cljs.core.Keyword(null,"recovery","recovery",-2004840646)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29583) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29583));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
modular_roleplaying_framework.views.condition = (function modular_roleplaying_framework$views$condition(condition){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"unselected-button medium",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return modular_roleplaying_framework.views.overlay.cljs$core$IFn$_invoke$arity$1(condition);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__29584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-title","item-title",-249793661),condition], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29584) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29584));
})()], null)], null);
});
modular_roleplaying_framework.views.conditions_list = (function modular_roleplaying_framework$views$conditions_list(section_number,section_type,section_id,section_tab,section_layout){
var items = (function (){var G__29585 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-items","tab-items",1934951825),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29585) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29585));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"conditions-list"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.condition,items)], null);
});
modular_roleplaying_framework.views.creature_summary = (function modular_roleplaying_framework$views$creature_summary(section_number,section_type,section_id,section_tab,section_layout){
var creature_id = (function (){var G__29586 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29586) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29586));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),"1 / 3",new cljs.core.Keyword(null,"background","background",-863952629),"rgb(150, 150, 150)",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"10px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"creature-summary-header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit"], null)], null),(function (){var G__29587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-title","creature-title",-418581929),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29587) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29587));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"span"], null)], null),(function (){var G__29588 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-summary","creature-summary",2046084639),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29588) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29588));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
modular_roleplaying_framework.views.skill = (function modular_roleplaying_framework$views$skill(skill_title,skill_level,section_layout){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"stat"], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("sidebar",section_layout))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),skill_title], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),skill_level], null)], null);
});
modular_roleplaying_framework.views.ability = (function modular_roleplaying_framework$views$ability(ability_title,ability_level,section_layout){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"stat"], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("sidebar",section_layout))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ability_title], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ability_level)].join('')], null)], null);
});
modular_roleplaying_framework.views.skillbility = (function modular_roleplaying_framework$views$skillbility(skillbility_title,skill_level,ability_level,section_layout){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"stat"], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("sidebar",section_layout))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),skillbility_title], null):null),modular_roleplaying_framework.views.dice_display(skill_level,((2) * ability_level))], null);
});
modular_roleplaying_framework.views.simple_stat_block = (function modular_roleplaying_framework$views$simple_stat_block(creature_id,section_layout){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"simple-stats"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Physical"], null),modular_roleplaying_framework.views.skillbility("Athleticism",(function (){var G__29589 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coordination","coordination",1076145876),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29589) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29589));
})(),(function (){var G__29590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"might","might",-1328381368),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29590) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29590));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Spiritual"], null),modular_roleplaying_framework.views.skillbility("Will",(function (){var G__29591 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exertion","exertion",-1240242361),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29591) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29591));
})(),(function (){var G__29592 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ambition","ambition",-153662933),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29592) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29592));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Mental"], null),modular_roleplaying_framework.views.skillbility("Acuity",(function (){var G__29593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"concentration","concentration",1539606986),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29593) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29593));
})(),(function (){var G__29594 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intellect","intellect",414822757),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29594) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29594));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Social"], null),modular_roleplaying_framework.views.skillbility("Charisma",(function (){var G__29595 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"persuasion","persuasion",1089798916),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29595) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29595));
})(),(function (){var G__29596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presence","presence",-1580756953),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29596) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29596));
})(),section_layout)], null);
});
modular_roleplaying_framework.views.moderate_stat_block = (function modular_roleplaying_framework$views$moderate_stat_block(creature_id,section_layout){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section_layout,"sidebar")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"maroon",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),"The stats section is not yet formatted to display in the sidebar. Modify your view using the layout controls at the bottom of the page to view your stats in the page-style or book-style section."], null);
} else {
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"moderate-stats"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Initiation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Reaction"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Continuation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Physical"], null),modular_roleplaying_framework.views.skillbility("Coordination",(function (){var G__29597 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coordination","coordination",1076145876),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29597) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29597));
})(),(function (){var G__29598 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"might","might",-1328381368),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29598) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29598));
})(),section_layout),modular_roleplaying_framework.views.skillbility("Reflexes",(function (){var G__29599 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reflexes","reflexes",-1252736336),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29599) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29599));
})(),(function (){var G__29600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"finesse","finesse",891142453),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29600) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29600));
})(),section_layout),modular_roleplaying_framework.views.skillbility("Endurance",(function (){var G__29601 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"endurance","endurance",2002692038),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29601) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29601));
})(),(function (){var G__29602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fortitude","fortitude",1187352341),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29602) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29602));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Spiritual"], null),modular_roleplaying_framework.views.skillbility("Exertion",(function (){var G__29603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exertion","exertion",-1240242361),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29603) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29603));
})(),(function (){var G__29604 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ambition","ambition",-153662933),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29604) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29604));
})(),section_layout),modular_roleplaying_framework.views.skillbility("Instinct",(function (){var G__29605 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instinct","instinct",2090002619),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29605) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29605));
})(),(function (){var G__29606 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discipline","discipline",343863089),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29606) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29606));
})(),section_layout),modular_roleplaying_framework.views.skillbility("Perseverance",(function (){var G__29607 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"perseverance","perseverance",-470288293),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29607) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29607));
})(),(function (){var G__29608 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dedication","dedication",2052444551),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29608) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29608));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Mental"], null),modular_roleplaying_framework.views.skillbility("Concentration",(function (){var G__29609 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"concentration","concentration",1539606986),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29609) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29609));
})(),(function (){var G__29610 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intellect","intellect",414822757),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29610) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29610));
})(),section_layout),modular_roleplaying_framework.views.skillbility("Recognition",(function (){var G__29611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recognition","recognition",1793959531),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29611) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29611));
})(),(function (){var G__29612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intuition","intuition",1122677380),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29612) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29612));
})(),section_layout),modular_roleplaying_framework.views.skillbility("Comprehension",(function (){var G__29613 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comprehension","comprehension",-756656463),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29613) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29613));
})(),(function (){var G__29614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stability","stability",1733225509),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29614) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29614));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Social"], null),modular_roleplaying_framework.views.skillbility("Persuasion",(function (){var G__29615 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"persuasion","persuasion",1089798916),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29615) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29615));
})(),(function (){var G__29616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presence","presence",-1580756953),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29616) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29616));
})(),section_layout),modular_roleplaying_framework.views.skillbility("Insight",(function (){var G__29617 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insight","insight",-1501263459),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29617) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29617));
})(),(function (){var G__29618 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wit","wit",-1627445195),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29618) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29618));
})(),section_layout),modular_roleplaying_framework.views.skillbility("Connections",(function (){var G__29619 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connections","connections",-2064090887),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29619) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29619));
})(),(function (){var G__29620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"poise","poise",-429377896),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29620) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29620));
})(),section_layout)], null);
}
});
modular_roleplaying_framework.views.complex_stat_block = (function modular_roleplaying_framework$views$complex_stat_block(creature_id,section_layout){
var sidebar_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("sidebar",section_layout);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("blarg",section_layout)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"standard-text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"ERROR: Complex stats cannot currently be displayed in the sidebar."], null);
} else {
return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"complex-stats"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),"2 / 5"], null)], null),"Skills"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),"5 / 8"], null)], null),"Abilities"], null),(((!(sidebar_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null)], null):null),(((!(sidebar_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Initiation"], null):null),(((!(sidebar_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Reaction"], null):null),(((!(sidebar_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Continuation"], null):null),(((!(sidebar_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Dominance"], null):null),(((!(sidebar_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Competence"], null):null),(((!(sidebar_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Resilience"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Physical"], null),modular_roleplaying_framework.views.skill("Coordination",(function (){var G__29621 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coordination","coordination",1076145876),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29621) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29621));
})(),section_layout),modular_roleplaying_framework.views.skill("Reflexes",(function (){var G__29622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reflexes","reflexes",-1252736336),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29622) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29622));
})(),section_layout),modular_roleplaying_framework.views.skill("Endurance",(function (){var G__29623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"endurance","endurance",2002692038),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29623) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29623));
})(),section_layout),modular_roleplaying_framework.views.ability("Might",(function (){var G__29624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"might","might",-1328381368),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29624) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29624));
})(),section_layout),modular_roleplaying_framework.views.ability("Finesse",(function (){var G__29625 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"finesse","finesse",891142453),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29625) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29625));
})(),section_layout),modular_roleplaying_framework.views.ability("Fortitude",(function (){var G__29626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fortitude","fortitude",1187352341),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29626) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29626));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Spiritual"], null),modular_roleplaying_framework.views.skill("Exertion",(function (){var G__29627 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exertion","exertion",-1240242361),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29627) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29627));
})(),section_layout),modular_roleplaying_framework.views.skill("Instinct",(function (){var G__29628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instinct","instinct",2090002619),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29628) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29628));
})(),section_layout),modular_roleplaying_framework.views.skill("Perseverance",(function (){var G__29629 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"perseverance","perseverance",-470288293),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29629) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29629));
})(),section_layout),modular_roleplaying_framework.views.ability("Ambition",(function (){var G__29630 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ambition","ambition",-153662933),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29630) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29630));
})(),section_layout),modular_roleplaying_framework.views.ability("Discipline",(function (){var G__29631 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discipline","discipline",343863089),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29631) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29631));
})(),section_layout),modular_roleplaying_framework.views.ability("Dedication",(function (){var G__29632 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dedication","dedication",2052444551),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29632) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29632));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Mental"], null),modular_roleplaying_framework.views.skill("Concentration",(function (){var G__29633 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"concentration","concentration",1539606986),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29633) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29633));
})(),section_layout),modular_roleplaying_framework.views.skill("Recognition",(function (){var G__29634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recognition","recognition",1793959531),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29634) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29634));
})(),section_layout),modular_roleplaying_framework.views.skill("Comprehension",(function (){var G__29635 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comprehension","comprehension",-756656463),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29635) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29635));
})(),section_layout),modular_roleplaying_framework.views.ability("Intellect",(function (){var G__29636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intellect","intellect",414822757),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29636) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29636));
})(),section_layout),modular_roleplaying_framework.views.ability("Intuition",(function (){var G__29637 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intuition","intuition",1122677380),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29637) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29637));
})(),section_layout),modular_roleplaying_framework.views.ability("Stability",(function (){var G__29638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stability","stability",1733225509),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29638) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29638));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Social"], null),modular_roleplaying_framework.views.skill("Persuasion",(function (){var G__29639 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"persuasion","persuasion",1089798916),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29639) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29639));
})(),section_layout),modular_roleplaying_framework.views.skill("Insight",(function (){var G__29640 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insight","insight",-1501263459),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29640) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29640));
})(),section_layout),modular_roleplaying_framework.views.skill("Connections",(function (){var G__29641 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connections","connections",-2064090887),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29641) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29641));
})(),section_layout),modular_roleplaying_framework.views.ability("Presence",(function (){var G__29642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presence","presence",-1580756953),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29642) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29642));
})(),section_layout),modular_roleplaying_framework.views.ability("Wit",(function (){var G__29643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wit","wit",-1627445195),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29643) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29643));
})(),section_layout),modular_roleplaying_framework.views.ability("Poise",(function (){var G__29644 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"poise","poise",-429377896),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29644) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29644));
})(),section_layout)], true);
}
});
modular_roleplaying_framework.views.creature_stats = (function modular_roleplaying_framework$views$creature_stats(section_number,section_type,section_id,section_tab,section_layout){
var creature_id = (function (){var G__29646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29646) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29646));
})();
var section_ids = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-id","state-section-id",210581770),"section-one"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29647) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29647));
})(),(function (){var G__29648 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-id","state-section-id",210581770),"section-two"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29648) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29648));
})(),(function (){var G__29649 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-id","state-section-id",210581770),"section-three"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29649) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29649));
})()], null);
var section_types = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29645_SHARP_){
var G__29650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),p1__29645_SHARP_], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29650) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29650));
}),section_ids);
var style = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
if(((1) > new cljs.core.Keyword(null,"ruleset","ruleset",-2145273412).cljs$core$IFn$_invoke$arity$1(modular_roleplaying_framework.views.keywordized_frequencies(section_types)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: NO RULESETS"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"ruleset","ruleset",-2145273412).cljs$core$IFn$_invoke$arity$1(modular_roleplaying_framework.views.keywordized_frequencies(section_types)))){
var map__29651_29860 = (function (){var G__29652 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),(function (){var G__29653 = cljs.core.first(modular_roleplaying_framework.views.positions("ruleset",section_types));
return (section_ids.cljs$core$IFn$_invoke$arity$1 ? section_ids.cljs$core$IFn$_invoke$arity$1(G__29653) : section_ids.call(null,G__29653));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29652) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29652));
})();
var map__29651_29861__$1 = (((((!((map__29651_29860 == null))))?(((((map__29651_29860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29651_29860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29651_29860):map__29651_29860);
var skills_29862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29651_29861__$1,new cljs.core.Keyword(null,"skills","skills",958701426));
var abilities_29863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29651_29861__$1,new cljs.core.Keyword(null,"abilities","abilities",-1471386226));
var skillbilities_QMARK__29864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29651_29861__$1,new cljs.core.Keyword(null,"skillbilities?","skillbilities?",788972706));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills_29862,(1))) && (skillbilities_QMARK__29864 === true))){
cljs.core.reset_BANG_(style,"simple-stats");
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills_29862,(3))) && (skillbilities_QMARK__29864 === true))){
cljs.core.reset_BANG_(style,"moderate-stats");
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills_29862,(3))) && (skillbilities_QMARK__29864 === false))){
cljs.core.reset_BANG_(style,"complex-stats");
} else {
}
}
}
} else {
if(((1) < new cljs.core.Keyword(null,"ruleset","ruleset",-2145273412).cljs$core$IFn$_invoke$arity$1(modular_roleplaying_framework.views.keywordized_frequencies(section_types)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["ERROR: MULTIPLE RULESETS: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__29657 = cljs.core.first(modular_roleplaying_framework.views.positions("ruleset",section_types));
return (section_ids.cljs$core$IFn$_invoke$arity$1 ? section_ids.cljs$core$IFn$_invoke$arity$1(G__29657) : section_ids.call(null,G__29657));
})())," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__29658 = cljs.core.second(modular_roleplaying_framework.views.positions("ruleset",section_types));
return (section_ids.cljs$core$IFn$_invoke$arity$1 ? section_ids.cljs$core$IFn$_invoke$arity$1(G__29658) : section_ids.call(null,G__29658));
})())].join('')], 0));
} else {
}
}
}

var G__29659 = cljs.core.deref(style);
switch (G__29659) {
case "simple-stats":
return modular_roleplaying_framework.views.simple_stat_block(creature_id,section_layout);

break;
case "moderate-stats":
return modular_roleplaying_framework.views.moderate_stat_block(creature_id,section_layout);

break;
case "complex-stats":
return modular_roleplaying_framework.views.complex_stat_block(creature_id,section_layout);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29659)].join('')));

}
});
modular_roleplaying_framework.views.resource_divify = (function modular_roleplaying_framework$views$resource_divify(resource_quantity,creature_id){
var resource = cljs.core.first(resource_quantity);
var quantity = cljs.core.last(resource_quantity);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"resource"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"unselected-button small",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return modular_roleplaying_framework.views.overlay.cljs$core$IFn$_invoke$arity$1(resource);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__29661 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-title","resource-title",904657571),resource], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29661) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29661));
})()),(((quantity > (1)))?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quantity),")"].join(''):null)].join('')], null)], null)], null);
});
modular_roleplaying_framework.views.subsection_titles = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["physical equipment","spiritual traits","mental expertise","social affiliations","items","wealth"], null);
/**
 * Capitalize every word in a string
 */
modular_roleplaying_framework.views.capitalize_words = (function modular_roleplaying_framework$views$capitalize_words(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/\b/)));
});
modular_roleplaying_framework.views.domain_resource_subsection = (function modular_roleplaying_framework$views$domain_resource_subsection(section_number,subsection_id){
var creature_id = (function (){var G__29662 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29662) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29662));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"subheader",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),modular_roleplaying_framework.views.capitalize_words((modular_roleplaying_framework.views.subsection_titles.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.views.subsection_titles.cljs$core$IFn$_invoke$arity$1(subsection_id) : modular_roleplaying_framework.views.subsection_titles.call(null,subsection_id)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-resource-list"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.resource_divify,(function (){var G__29663 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-resources-typed-quantified","creature-resources-typed-quantified",-1136110511),creature_id,subsection_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29663) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29663));
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(creature_id))], null)], null);
});
modular_roleplaying_framework.views.miscellaneous_resource_subsection = (function modular_roleplaying_framework$views$miscellaneous_resource_subsection(section_number,subsection_id){
var creature_id = (function (){var G__29664 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29664) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29664));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"subheader",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),modular_roleplaying_framework.views.capitalize_words((modular_roleplaying_framework.views.subsection_titles.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.views.subsection_titles.cljs$core$IFn$_invoke$arity$1(subsection_id) : modular_roleplaying_framework.views.subsection_titles.call(null,subsection_id)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"miscellaneous-resource-list"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.resource_divify,(function (){var G__29665 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-resources-typed-quantified","creature-resources-typed-quantified",-1136110511),creature_id,subsection_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29665) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29665));
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(creature_id))], null)], null);
});
modular_roleplaying_framework.views.creature_resources_subsections = (function modular_roleplaying_framework$views$creature_resources_subsections(section_number,section_type,section_id,section_tab,section_layout){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"resource-section"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),"1 / 3",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null)], null),"Resources"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),modular_roleplaying_framework.views.domain_resource_subsection(section_number,(0)),modular_roleplaying_framework.views.domain_resource_subsection(section_number,(1)),modular_roleplaying_framework.views.domain_resource_subsection(section_number,(2)),modular_roleplaying_framework.views.domain_resource_subsection(section_number,(3))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),modular_roleplaying_framework.views.miscellaneous_resource_subsection(section_number,(4)),modular_roleplaying_framework.views.miscellaneous_resource_subsection(section_number,(5))], null)], null);
});
modular_roleplaying_framework.views.feature_display = (function modular_roleplaying_framework$views$feature_display(feature_id,section_layout){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"feature"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"feature-title"], null),(function (){var G__29666 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-title","feature-title",2026798069),feature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29666) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29666));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"feature-content"], null),(function (){var G__29667 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-details","feature-details",96542810),feature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29667) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29667));
})()], null)], null);
});
modular_roleplaying_framework.views.creature_features = (function modular_roleplaying_framework$views$creature_features(section_number,section_type,section_id,section_tab,section_layout){
var creature_id = (function (){var G__29668 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29668) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29668));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"feature-list"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.feature_display,(function (){var G__29669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-feature-list","creature-feature-list",225155610),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29669) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29669));
})(),section_layout)], null);
});
modular_roleplaying_framework.views.creature_notes = (function modular_roleplaying_framework$views$creature_notes(section_number,section_type,section_id,section_tab,section_layout){
var creature_id = (function (){var G__29671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29671) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29671));
})();
var G__29672 = (function (){var G__29673 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-notes-state","creature-notes-state",-471696466),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29673) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29673));
})();
switch (G__29672) {
case (0):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"creature-notes"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"creature-notes-header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em"], null)], null),"Notes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px",new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__29674 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-notes-state-change","creature-notes-state-change",-1510434125),creature_id,(1)], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29674) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29674));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-edit"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("book",section_layout))?"book-style-text":"standard-text"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"1 / 3"], null)], null),modular_roleplaying_framework.views.text__GT_hiccup((function (){var G__29675 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-notes","creature-notes",-2029123219),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29675) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29675));
})())], null)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"creature-notes"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"creature-notes-header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em"], null)], null),"Notes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"2em",new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__29676 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-notes-state-change","creature-notes-state-change",-1510434125),creature_id,(0)], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29676) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29676));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-check"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-edit",new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__29677 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-notes","creature-notes",-2029123219),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29677) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29677));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29670_SHARP_){
var G__29678 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-notes-update","creature-notes-update",-350278924),creature_id,p1__29670_SHARP_.target.value], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29678) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29678));
})], null)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29672)].join('')));

}
});
modular_roleplaying_framework.views.creature_sheet = (function modular_roleplaying_framework$views$creature_sheet(section_number,section_type,section_id,section_tab,section_layout){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"creature-sheet"], null),modular_roleplaying_framework.views.creature_summary(section_number,section_type,section_id,section_tab,section_layout),modular_roleplaying_framework.views.creature_stats(section_number,section_type,section_id,section_tab,section_layout),modular_roleplaying_framework.views.creature_resources_subsections(section_number,section_type,section_id,section_tab,section_layout),modular_roleplaying_framework.views.creature_notes(section_number,section_type,section_id,section_tab,section_layout)], null);
});
modular_roleplaying_framework.views.unlocked_creatures = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1618),(1619),(1620),(1621)], null));
modular_roleplaying_framework.views.password_entry = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
modular_roleplaying_framework.views.creature_list_item = (function modular_roleplaying_framework$views$creature_list_item(creature_id,section_number){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29679 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29679) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29679));
})(),creature_id))?"selected-button":"unselected-button"),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(creature_id,(function (){var G__29680 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29680) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29680));
})()))?(function (){
var G__29681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),section_number], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29681) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29681));
}):(function (){
var G__29682_29867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),section_number], null);
(modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29682_29867) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29682_29867));

var G__29683_29868 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-summary-state-change","creature-summary-state-change",714628401),creature_id,(0)], null);
(modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29683_29868) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29683_29868));

var G__29684_29869 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-notes-state-change","creature-notes-state-change",-1510434125),creature_id,(0)], null);
(modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29684_29869) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29684_29869));

var G__29685 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-select","item-select",-1822277284),section_number,creature_id], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29685) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29685));
}))], null),(function (){var G__29686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-title","item-title",-249793661),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29686) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29686));
})()], null);
});
modular_roleplaying_framework.views.player_characters = cljs.core.PersistentVector.EMPTY;
modular_roleplaying_framework.views.creature_list = (function modular_roleplaying_framework$views$creature_list(section_number,section_type,section_id,section_tab,section_layout){
var active_world = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (section_id__$1){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("world",(function (){var G__29687 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),section_id__$1], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29687) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29687));
})());
}),(function (){var G__29688 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-ids","state-section-ids",1524494040)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29688) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29688));
})()));
var creatures = (function (){var G__29689 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-creatures","world-creatures",745737020),active_world], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29689) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29689));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.creature_list_item,modular_roleplaying_framework.views.player_characters,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number)),cljs.core.map.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.creature_list_item,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(modular_roleplaying_framework.views.unlocked_creatures))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("creature",(function (){var G__29690 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__29691 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29691) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29691));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29690) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29690));
})()))?modular_roleplaying_framework.views.creature_sheet(section_number,section_type,section_id,section_tab,section_layout):null)], null);
});
modular_roleplaying_framework.views.heritage_roles_list_item = (function modular_roleplaying_framework$views$heritage_roles_list_item(item_id,section_number,section_tab){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"body",new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29692 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29692) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29692));
})(),item_id))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"black",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null):null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_id,(function (){var G__29693 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29693) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29693));
})()))?(function (){
var G__29694 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),section_number], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29694) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29694));
}):(function (){
var G__29695_29870 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),section_number], null);
(modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29695_29870) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29695_29870));

var G__29696 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-select","item-select",-1822277284),section_number,item_id], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29696) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29696));
}))], null),(function (){var G__29697 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-title","item-title",-249793661),item_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29697) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29697));
})()], null);
});
modular_roleplaying_framework.views.fixed_resource_divify = (function modular_roleplaying_framework$views$fixed_resource_divify(resource_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"resource-view-only"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return modular_roleplaying_framework.views.overlay.cljs$core$IFn$_invoke$arity$1(resource_id);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__29698 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-title","resource-title",904657571),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29698) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29698));
})()], null)], null)], null);
});
modular_roleplaying_framework.views.fixed_heritage_divify = (function modular_roleplaying_framework$views$fixed_heritage_divify(feature_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"feature-view-only"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return modular_roleplaying_framework.views.overlay.cljs$core$IFn$_invoke$arity$1(feature_id);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__29699 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-title","feature-title",2026798069),feature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29699) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29699));
})()], null)], null)], null);
});
modular_roleplaying_framework.views.heritages_list = (function modular_roleplaying_framework$views$heritages_list(section_number,section_type,section_id,section_tab,section_layout){
var active_world = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (section_id__$1){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("world",(function (){var G__29700 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),section_id__$1], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29700) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29700));
})());
}),(function (){var G__29701 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-ids","state-section-ids",1524494040)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29701) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29701));
})()));
var heritages = (function (){var G__29702 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-heritages","world-heritages",-1355127108),active_world], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29702) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29702));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$4(modular_roleplaying_framework.views.heritage_roles_list_item,heritages,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("heritage",(function (){var G__29703 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__29704 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29704) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29704));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29703) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29703));
})()))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__29705 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heritage-details","heritage-details",517842258),(function (){var G__29706 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29706) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29706));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29705) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29705));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Resources"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"resource-list"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.fixed_resource_divify,(function (){var G__29707 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heritage-resources","heritage-resources",-1286324504),(function (){var G__29708 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29708) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29708));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29707) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29707));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Features"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.fixed_heritage_divify,(function (){var G__29709 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heritage-features","heritage-features",-1746727718),(function (){var G__29710 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29710) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29710));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29709) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29709));
})())], null):null)], null);
});
modular_roleplaying_framework.views.roles_list = (function modular_roleplaying_framework$views$roles_list(section_number,section_type,section_id,section_tab,section_layout){
var active_world = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (section_id__$1){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("world",(function (){var G__29711 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),section_id__$1], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29711) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29711));
})());
}),(function (){var G__29712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-ids","state-section-ids",1524494040)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29712) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29712));
})()));
var roles = (function (){var G__29713 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-roles","world-roles",-1495875244),active_world], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29713) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29713));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$4(modular_roleplaying_framework.views.heritage_roles_list_item,roles,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("role",(function (){var G__29714 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__29715 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29715) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29715));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29714) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29714));
})()))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__29716 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"role-details","role-details",-772961800),(function (){var G__29717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29717) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29717));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29716) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29716));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Resources"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"resource-list"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.fixed_resource_divify,(function (){var G__29718 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"role-resources","role-resources",819423685),(function (){var G__29719 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29719) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29719));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29718) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29718));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Features"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.fixed_heritage_divify,(function (){var G__29720 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"role-features","role-features",459150250),(function (){var G__29721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29721) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29721));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29720) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29720));
})())], null):null)], null);
});
modular_roleplaying_framework.views.simple_skill_description = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"ATHLETICISM"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"WILLPOWER"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"ACUITY"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"CHARISMA"], null)], null);
modular_roleplaying_framework.views.moderate_skill_description = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Coordination, Reflexes, and Endurance"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Exertion, Instinct, and Perseverance"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Concentration, Recognition, and Comprehension"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Persuasion, Insight, and Connections"], null)], null);
modular_roleplaying_framework.views.complex_skill_description = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Coordination, Reflexes, Endurance, Might, Finesse, and Fortitude"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Exertion, Instinct, Perseverance, Ambition, Discipline, and Dedication"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Concentration, Recognition, Comprehension, Intellect, Intuition, and Stability"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Persuasion, Insight, Connections, Presence, Wit, and Poise"], null)], null);
modular_roleplaying_framework.views.skills_and_abilities = (function modular_roleplaying_framework$views$skills_and_abilities(section_number,section_type,section_id,section_tab,section_layout){
var active_ruleset = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (section_id__$1){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ruleset",(function (){var G__29722 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),section_id__$1], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29722) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29722));
})());
}),(function (){var G__29723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-ids","state-section-ids",1524494040)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29723) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29723));
})()));
var skills = (function (){var G__29724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ruleset-skills","ruleset-skills",-1459168412),active_ruleset], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29724) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29724));
})();
var skillbilities_QMARK_ = (function (){var G__29725 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ruleset-skillbilities","ruleset-skillbilities",2131758022),active_ruleset], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29725) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29725));
})();
if(skillbilities_QMARK_ === true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),skills)){
return modular_roleplaying_framework.views.simple_skill_description;
} else {
return modular_roleplaying_framework.views.moderate_skill_description;
}
} else {
return modular_roleplaying_framework.views.complex_skill_description;
}
});
modular_roleplaying_framework.views.complete_resource_divify = (function modular_roleplaying_framework$views$complete_resource_divify(resource_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fixed-resource"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"unselected-button small",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return modular_roleplaying_framework.views.overlay.cljs$core$IFn$_invoke$arity$1(resource_id);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__29726 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-title","resource-title",904657571),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29726) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29726));
})()], null)], null)], null);
});
modular_roleplaying_framework.views.resources_list = (function modular_roleplaying_framework$views$resources_list(section_number,section_type,section_id,section_tab,section_layout){
var resources = (function (){var G__29727 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-list","resource-list",1498099584)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29727) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29727));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"complete-resource-list",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.complete_resource_divify,resources)], null);
});
modular_roleplaying_framework.views.world_item = (function modular_roleplaying_framework$views$world_item(var_args){
var args__4795__auto__ = [];
var len__4789__auto___29871 = arguments.length;
var i__4790__auto___29872 = (0);
while(true){
if((i__4790__auto___29872 < len__4789__auto___29871)){
args__4795__auto__.push((arguments[i__4790__auto___29872]));

var G__29873 = (i__4790__auto___29872 + (1));
i__4790__auto___29872 = G__29873;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return modular_roleplaying_framework.views.world_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(modular_roleplaying_framework.views.world_item.cljs$core$IFn$_invoke$arity$variadic = (function (item_id,section_number,section_tab,p__29732){
var vec__29733 = p__29732;
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29733,(0),null);
var tab_id = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (tab_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29736 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),item_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29736) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29736));
})(),(function (){var G__29737 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-type","tab-type",-913444495),tab_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29737) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29737));
})());
}),(function (){var G__29738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-tabs","section-tabs",1270711059),(function (){var G__29739 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-id","state-section-id",210581770),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29739) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29739));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29738) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29738));
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29740) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29740));
})(),item_id))?["selected-button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join(''):["unselected-button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"15px"], null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_id,(function (){var G__29741 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29741) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29741));
})()))?(function (){
var G__29742 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),section_number], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29742) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29742));
}):(function (){
var G__29743 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-tab-select","item-tab-select",-183749023),section_number,item_id,tab_id], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29743) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29743));
}))], null),(function (){var G__29744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-title","item-title",-249793661),item_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29744) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29744));
})()], null);
}));

(modular_roleplaying_framework.views.world_item.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(modular_roleplaying_framework.views.world_item.cljs$lang$applyTo = (function (seq29728){
var G__29729 = cljs.core.first(seq29728);
var seq29728__$1 = cljs.core.next(seq29728);
var G__29730 = cljs.core.first(seq29728__$1);
var seq29728__$2 = cljs.core.next(seq29728__$1);
var G__29731 = cljs.core.first(seq29728__$2);
var seq29728__$3 = cljs.core.next(seq29728__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29729,G__29730,G__29731,seq29728__$3);
}));

modular_roleplaying_framework.views.creatures_list = (function modular_roleplaying_framework$views$creatures_list(section_number,section_type,section_id,section_tab,section_layout){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"CREATURES"], null);
});
modular_roleplaying_framework.views.advancements_list = (function modular_roleplaying_framework$views$advancements_list(section_number,section_type,section_id,section_tab,section_layout){
var advancements = (function (){var G__29745 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-advancements","world-advancements",2113721326),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29745) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29745));
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([advancements], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$4(modular_roleplaying_framework.views.world_item,advancements,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("advancement",(function (){var G__29746 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__29747 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29747) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29747));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29746) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29746));
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__29748 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-details","item-details",-987623935),(function (){var G__29749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29749) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29749));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29748) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29748));
})()], null):null)], null);
});
modular_roleplaying_framework.views.key_figures_list = (function modular_roleplaying_framework$views$key_figures_list(section_number,section_type,section_id,section_tab,section_layout){
var key_figures = (function (){var G__29750 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-key-figures","world-key-figures",-2094243827),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29750) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29750));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$4(modular_roleplaying_framework.views.world_item,key_figures,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("key-figure",(function (){var G__29751 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__29752 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29752) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29752));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29751) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29751));
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__29753 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-details","item-details",-987623935),(function (){var G__29754 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29754) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29754));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29753) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29753));
})()], null):null)], null);
});
modular_roleplaying_framework.views.organizations_list = (function modular_roleplaying_framework$views$organizations_list(section_number,section_type,section_id,section_tab,section_layout){
var organizations = (function (){var G__29755 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-organizations","world-organizations",-481549703),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29755) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29755));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$4(modular_roleplaying_framework.views.world_item,organizations,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("organization",(function (){var G__29756 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__29757 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29757) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29757));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29756) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29756));
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__29758 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-details","item-details",-987623935),(function (){var G__29759 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29759) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29759));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29758) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29758));
})()], null):null)], null);
});
modular_roleplaying_framework.views.lore_list = (function modular_roleplaying_framework$views$lore_list(section_number,section_type,section_id,section_tab,section_layout){
var lore = (function (){var G__29760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-lore","world-lore",-1851264915),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29760) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29760));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$4(modular_roleplaying_framework.views.world_item,lore,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("lore",(function (){var G__29761 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__29762 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29762) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29762));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29761) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29761));
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__29763 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-details","item-details",-987623935),(function (){var G__29764 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29764) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29764));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29763) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29763));
})()], null):null)], null);
});
modular_roleplaying_framework.views.civilizations_list = (function modular_roleplaying_framework$views$civilizations_list(section_number,section_type,section_id,section_tab,section_layout){
var active_world_item = (function (){var G__29765 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29765) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29765));
})();
var world_territories = (function (){var G__29766 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-territories","world-territories",-982355734),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29766) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29766));
})();
var civilizations = (function (){var G__29767 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29767) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29767));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(modular_roleplaying_framework.views.world_item,civilizations,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("medium")], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("civilization",(function (){var G__29768 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__29769 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29769) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29769));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29768) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29768));
})()))?(function (){var civilization_details = (function (){var G__29771 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"civilization-details","civilization-details",281511038),(function (){var G__29772 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29772) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29772));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29771) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29771));
})();
var map__29770 = civilization_details;
var map__29770__$1 = (((((!((map__29770 == null))))?(((((map__29770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29770):map__29770);
var religion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29770__$1,new cljs.core.Keyword(null,"religion","religion",-40640352));
var society = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29770__$1,new cljs.core.Keyword(null,"society","society",1602704557));
var economy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29770__$1,new cljs.core.Keyword(null,"economy","economy",502906683));
var politics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29770__$1,new cljs.core.Keyword(null,"politics","politics",-448638170));
var military = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29770__$1,new cljs.core.Keyword(null,"military","military",1724894572));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((!((religion == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),"Religion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),religion], null)], null):null),(((!((society == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),"Society"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),society], null)], null):null),(((!((economy == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),"Economy"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),economy], null)], null):null),(((!((politics == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),"Politics"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),politics], null)], null):null),(((!((military == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),"Military"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),military], null)], null):null)], null);
})():null)], null);
});
modular_roleplaying_framework.views.territories_list = (function modular_roleplaying_framework$views$territories_list(section_number,section_type,section_id,section_tab,section_layout){
var territories = (function (){var G__29774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-territories","world-territories",-982355734),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29774) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29774));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(modular_roleplaying_framework.views.world_item,territories,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("medium")], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("territory",(function (){var G__29775 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__29776 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29776) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29776));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29775) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29775));
})()))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__29777 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"territory-details","territory-details",323186833),(function (){var G__29778 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29778) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29778));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29777) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29777));
})()], null),(cljs.core.truth_(cljs.core.not_empty((function (){var G__29779 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"territory-civilizations","territory-civilizations",-523722954),(function (){var G__29780 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29780) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29780));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29779) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29779));
})()))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5em"], null)], null),"CIVILIZATIONS"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(modular_roleplaying_framework.views.world_item,(function (){var G__29781 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"territory-civilizations","territory-civilizations",-523722954),(function (){var G__29782 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29782) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29782));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29781) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29781));
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("medium")], 0))], null):null)], null):null)], null);
});
modular_roleplaying_framework.views.world_overview = (function modular_roleplaying_framework$views$world_overview(section_number,section_type,section_id,section_tab,section_layout){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"superbody"], null),(function (){var G__29783 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-overview","world-overview",-314945091),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29783) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29783));
})()], null);
});
modular_roleplaying_framework.views.content = (function modular_roleplaying_framework$views$content(section_number,section_type,section_id,section_tab,section_layout){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),(function (){var G__29784 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-title","section-title",1261938902),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29784) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29784));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"subheader"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__29786 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-title","tab-title",1398279061),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29786) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29786));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"body"], null),(function (){var fexpr__29788 = (function (){var G__29789 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-template","tab-template",-1557753771),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29789) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29789));
})();
return (fexpr__29788.cljs$core$IFn$_invoke$arity$5 ? fexpr__29788.cljs$core$IFn$_invoke$arity$5(section_number,section_type,section_id,section_tab,section_layout) : fexpr__29788.call(null,section_number,section_type,section_id,section_tab,section_layout));
})()], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section_number,"section-two"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"30px"], null)], null)], null):null)], null);
});
modular_roleplaying_framework.views.navigation_tab = (function modular_roleplaying_framework$views$navigation_tab(section_number,section_id,section_layout){
var direction = (function (){var G__29790 = section_number;
switch (G__29790) {
case "section-one":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"backward",new cljs.core.Keyword(null,"icon","icon",1679606541),"fas fa-chevron-left"], null);

break;
case "section-three":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"forward",new cljs.core.Keyword(null,"icon","icon",1679606541),"fas fa-chevron-right"], null);

break;
default:
return null;

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"navigation-tab",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__29791 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reorder-sections","reorder-sections",208296526),(function (){var G__29792 = new cljs.core.Keyword(null,"text","text",-1790561697);
return (direction.cljs$core$IFn$_invoke$arity$1 ? direction.cljs$core$IFn$_invoke$arity$1(G__29792) : direction.call(null,G__29792));
})()], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29791) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29791));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__29793 = new cljs.core.Keyword(null,"icon","icon",1679606541);
return (direction.cljs$core$IFn$_invoke$arity$1 ? direction.cljs$core$IFn$_invoke$arity$1(G__29793) : direction.call(null,G__29793));
})()], null)], null)], null);
});
modular_roleplaying_framework.views.navbar_tab = (function modular_roleplaying_framework$views$navbar_tab(section_number,section_id,section_layout,tab_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"tab",new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab_id,(function (){var G__29795 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29795) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29795));
})()))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),modular_roleplaying_framework.views.background_color((function (){var G__29796 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29796) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29796));
})(),section_number),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null):((cljs.core.not_any_QMARK_((function (p1__29794_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab_id,p1__29794_SHARP_);
}),(function (){var G__29797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-tabs","section-tabs",1270711059),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29797) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29797));
})()))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),modular_roleplaying_framework.views.background_color((function (){var G__29798 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29798) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29798));
})(),section_number)], null):null)),new cljs.core.Keyword(null,"key","key",-1516042587),tab_id,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__29799 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-select","tab-select",1957789174),section_number,tab_id], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29799) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29799));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__29800 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-icon","tab-icon",-601622304),tab_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29800) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29800));
})()], null)], null)], null);
});
modular_roleplaying_framework.views.generate_tabs = (function modular_roleplaying_framework$views$generate_tabs(section_number,section_id,section_layout,tabs){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(modular_roleplaying_framework.views.navbar_tab,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_id),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_layout),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tabs], 0)));
});
modular_roleplaying_framework.views.navbar = (function modular_roleplaying_framework$views$navbar(section_number,section_type,section_id,section_tab,section_layout){
var tabs = (function (){var G__29801 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-tabs-full","section-tabs-full",300098194),section_number,section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29801) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29801));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar"], null),modular_roleplaying_framework.views.generate_tabs(section_number,section_id,section_layout,tabs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"max-content"], null)], null)], null)], null);
});
modular_roleplaying_framework.views.section = (function modular_roleplaying_framework$views$section(section_number,section_type,section_id,section_tab,section_layout){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),modular_roleplaying_framework.views.get_section_class(section_layout,section_number),new cljs.core.Keyword(null,"key","key",-1516042587),section_number,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),modular_roleplaying_framework.views.background_color((function (){var G__29802 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29802) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29802));
})(),section_number)], null)], null),modular_roleplaying_framework.views.navbar(section_number,section_type,section_id,section_tab,section_layout),modular_roleplaying_framework.views.content(section_number,section_type,section_id,section_tab,section_layout)], null);
});
modular_roleplaying_framework.views.resource_select = (function modular_roleplaying_framework$views$resource_select(resource_id,creature_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2px",new cljs.core.Keyword(null,"align-content","align-content",-990200349),"left"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__29803 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-add-resource","creature-add-resource",409356036),resource_id,creature_id], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29803) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29803));
})], null),(function (){var G__29804 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-title","item-title",-249793661),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29804) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29804));
})()], null)], null);
});
modular_roleplaying_framework.views.creature_resource = (function modular_roleplaying_framework$views$creature_resource(creature_id){
var resource_subtype = (function (){var fexpr__29806 = (function (){var G__29807 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29807) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29807));
})();
return (fexpr__29806.cljs$core$IFn$_invoke$arity$1 ? fexpr__29806.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__29806.call(null,(1)));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"resource-select-menu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Select an item below to add it to your inventory."], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.resource_select,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (resource_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resource_subtype,(function (){var G__29808 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-subtype","resource-subtype",1660664175),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29808) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29808));
})());
}),(function (){var G__29809 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-list","resource-list",1498099584)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29809) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29809));
})()),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(creature_id))], null);
});
modular_roleplaying_framework.views.creature_menu = (function modular_roleplaying_framework$views$creature_menu(creature_id){
var G__29810 = (function (){var fexpr__29812 = (function (){var G__29813 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29813) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29813));
})();
return (fexpr__29812.cljs$core$IFn$_invoke$arity$1 ? fexpr__29812.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__29812.call(null,(0)));
})();
switch (G__29810) {
case "resource":
return modular_roleplaying_framework.views.creature_resource(creature_id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29810)].join('')));

}
});
modular_roleplaying_framework.views.matches_QMARK_ = (function modular_roleplaying_framework$views$matches_QMARK_(coll1,coll2){
return cljs.core.some((function (matches){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,matches);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,y){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),coll1,coll2));
});
modular_roleplaying_framework.views.feature_details = (function modular_roleplaying_framework$views$feature_details(feature,resource_properties){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),(function (){var G__29814 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-title","feature-title",2026798069),feature,resource_properties], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29814) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29814));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__29815 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-details","feature-details",96542810),feature,resource_properties], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29815) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29815));
})()], null)], null);
});
modular_roleplaying_framework.views.resource_details = (function modular_roleplaying_framework$views$resource_details(resource_id){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"resource-details"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),(function (){var G__29816 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-title","resource-title",904657571),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29816) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29816));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",(function (){var G__29817 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-properties","resource-properties",-677994762),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29817) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29817));
})()))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__29818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-flavor-text","resource-flavor-text",429244330),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29818) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29818));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Quality: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__29820 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-quality-bonus","resource-quality-bonus",496784380),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29820) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29820));
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Power: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__29822 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-power-bonus","resource-power-bonus",669478217),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29822) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29822));
})())].join('')], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.feature_details,(function (){var G__29823 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-features","resource-features",-1831876409),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29823) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29823));
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((function (){var G__29824 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-properties","resource-properties",-677994762),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29824) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29824));
})()))], null);
});
modular_roleplaying_framework.views.condition_effect = (function modular_roleplaying_framework$views$condition_effect(condition_id,effect_id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"effect"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),(function (){var G__29825 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"condition-effect-description","condition-effect-description",-3743093),condition_id,effect_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29825) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29825));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"duration"], null),(function (){var G__29826 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"condition-effect-duration","condition-effect-duration",-2101079389),condition_id,effect_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29826) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29826));
})()], null)], null);
});
modular_roleplaying_framework.views.condition_details = (function modular_roleplaying_framework$views$condition_details(condition_id){
var map__29827 = (function (){var G__29828 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802),condition_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29828) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29828));
})();
var map__29827__$1 = (((((!((map__29827 == null))))?(((((map__29827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29827):map__29827);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29827__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29827__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29827__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29827__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"condition"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),(function (){var G__29830 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"condition-title","condition-title",-1818530037),condition_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29830) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29830));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),(function (){var G__29831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"condition-description","condition-description",-584806753),condition_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29831) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29831));
})()], null),(function (){var effect_count = cljs.core.count((function (){var G__29832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"condition-effects","condition-effects",1872046469),condition_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29832) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29832));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"effects"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"effect"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Effect"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Duration"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.condition_effect,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(condition_id),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1(effect_count)))], null);
})()], null);
});
modular_roleplaying_framework.views.skillbility_details = (function modular_roleplaying_framework$views$skillbility_details(skillbility_id){
var map__29833 = (function (){var G__29834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802),skillbility_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29834) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29834));
})();
var map__29833__$1 = (((((!((map__29833 == null))))?(((((map__29833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29833):map__29833);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29833__$1,new cljs.core.Keyword(null,"title","title",636505583));
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29833__$1,new cljs.core.Keyword(null,"details","details",1956795411));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"condition"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),(function (){var G__29836 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-title","item-title",-249793661),skillbility_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29836) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29836));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),(function (){var G__29837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-details","item-details",-987623935),skillbility_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29837) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29837));
})()], null)], null);
});
modular_roleplaying_framework.views.overlay_content = (function modular_roleplaying_framework$views$overlay_content(item_id){
var G__29838 = (function (){var G__29839 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),item_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29839) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29839));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("creature",G__29838)){
return modular_roleplaying_framework.views.creature_menu(item_id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("resource",G__29838)){
return modular_roleplaying_framework.views.resource_details(item_id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("condition",G__29838)){
return modular_roleplaying_framework.views.condition_details(item_id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("skillbility",G__29838)){
return modular_roleplaying_framework.views.skillbility_details(item_id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),G__29838)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Item type not configured for overlay display."], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29838)].join('')));

}
}
}
}
}
});
modular_roleplaying_framework.views.system_menu = (function modular_roleplaying_framework$views$system_menu(){
if(cljs.core.truth_((function (){var G__29840 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialized?","initialized?",1707939066)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29840) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29840));
})())){
var map__29841 = (function (){var G__29842 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29842) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29842));
})();
var map__29841__$1 = (((((!((map__29841 == null))))?(((((map__29841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29841):map__29841);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29841__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29841__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29841__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29841__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),layout], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("visible",(function (){var G__29844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-state","overlay-state",95491678)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29844) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29844));
})()))?(function (){var overlay_item = (function (){var G__29845 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-item","overlay-item",1921913766)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29845) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29845));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"overlay"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"overlay-content"], null),modular_roleplaying_framework.views.overlay_content(overlay_item),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"overlay-x",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__29846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-state-change","overlay-state-change",1441777589),"hidden"], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__29846) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__29846));
})], null),"X"], null)], null)], null);
})():null),(function (){var section_numbers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["section-one","section-two","section-three"], null);
var section_ids = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three)], null);
var section_types = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),(section_ids.cljs$core$IFn$_invoke$arity$1 ? section_ids.cljs$core$IFn$_invoke$arity$1((0)) : section_ids.call(null,(0)))], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29847) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29847));
})(),(function (){var G__29848 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),(section_ids.cljs$core$IFn$_invoke$arity$1 ? section_ids.cljs$core$IFn$_invoke$arity$1((1)) : section_ids.call(null,(1)))], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29848) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29848));
})(),(function (){var G__29849 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),(section_ids.cljs$core$IFn$_invoke$arity$1 ? section_ids.cljs$core$IFn$_invoke$arity$1((2)) : section_ids.call(null,(2)))], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29849) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29849));
})()], null);
var section_tabs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three)], null);
var section_layouts = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout,"pages-layout"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page","page","page"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sidebar","book","sidebar"], null));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(modular_roleplaying_framework.views.section,section_numbers,section_types,section_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([section_tabs,section_layouts], 0)));
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"float-section",new cljs.core.Keyword(null,"draggable","draggable",1676206163),"true"], null),modular_roleplaying_framework.views.reorder_sections(section_one,section_two,section_three,layout,"backward"),modular_roleplaying_framework.views.toggle_layout(section_one,section_two,section_three,layout),modular_roleplaying_framework.views.reorder_sections(section_one,section_two,section_three,layout,"forward")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Initializing..."], null);
}
});

//# sourceMappingURL=modular_roleplaying_framework.views.js.map
