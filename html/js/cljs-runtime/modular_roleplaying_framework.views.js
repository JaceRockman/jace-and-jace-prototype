goog.provide('modular_roleplaying_framework.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('kee_frame.core');
goog.require('clojure.string');
goog.require('modular_roleplaying_framework.db_CRUD');
modular_roleplaying_framework.views.main_menu = (function modular_roleplaying_framework$views$main_menu(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-menu","div.main-menu",-1778376001),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"view-system-btn",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Prototype System",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__108491 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-system","initialize-system",-1223784141),(function (){var G__108492 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),(3)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108492) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108492));
})(),(function (){var G__108493 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),(2)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108493) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108493));
})(),(function (){var G__108494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),(10)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108494) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108494));
})(),"book-layout"], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108491) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108491));
})], null),"Prototype System"], null)], null);
});
modular_roleplaying_framework.views.overlay = (function modular_roleplaying_framework$views$overlay(var_args){
var G__108496 = arguments.length;
switch (G__108496) {
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
var G__108497_108828 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-item-change","overlay-item-change",-1911220370),item_id], null);
(modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108497_108828) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108497_108828));

var G__108498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-state-change","overlay-state-change",1441777589),"visible"], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108498) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108498));
}));

(modular_roleplaying_framework.views.overlay.cljs$core$IFn$_invoke$arity$2 = (function (item_id,params){
var G__108499_108830 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-item-change","overlay-item-change",-1911220370),item_id], null);
(modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108499_108830) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108499_108830));

var G__108500_108831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-state-change","overlay-state-change",1441777589),"visible"], null);
(modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108500_108831) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108500_108831));

var G__108501 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-params-change","overlay-params-change",171897048),params], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108501) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108501));
}));

(modular_roleplaying_framework.views.overlay.cljs$lang$maxFixedArity = 2);

modular_roleplaying_framework.views.dice_roll = (function modular_roleplaying_framework$views$dice_roll(var_args){
var G__108503 = arguments.length;
switch (G__108503) {
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
var G__108505 = arguments.length;
switch (G__108505) {
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__108506_SHARP_){
if(typeof p1__108506_SHARP_ === 'string'){
return p1__108506_SHARP_;
} else {
return cljs.core.with_meta(p1__108506_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("br-")], null));
}
}),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,"\n")));
});
modular_roleplaying_framework.views.background_color = (function modular_roleplaying_framework$views$background_color(section_type,section_number){
var G__108507 = section_type;
switch (G__108507) {
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
var G__108508 = section_layout;
switch (G__108508) {
case "sidebar":
var G__108509 = section_number;
switch (G__108509) {
case "section-one":
return "sidebar left";

break;
case "section-three":
return "sidebar right";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__108509)].join('')));

}

break;
case "page":
return "page";

break;
case "book":
return "book";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__108508)].join('')));

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
var G__108510 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-layout","toggle-layout",-241410907)], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108510) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108510));
})], null)], null)], null)], null);
});
modular_roleplaying_framework.views.reorder_sections = (function modular_roleplaying_framework$views$reorder_sections(section_one,section_two,section_three,layout,direction){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.float-button","div.float-button",945553340),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"float-button",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__108511 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reorder-sections","reorder-sections",208296526),direction], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108511) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108511));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__108512 = direction;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("forward",G__108512)){
return "fas fa-chevron-right";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("backward",G__108512)){
return "fas fa-chevron-left";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),G__108512)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Unrecognized direction while reordering sections."], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__108512)].join('')));

}
}
}
})()], null)], null)], null)], null);
});
modular_roleplaying_framework.views.text = (function modular_roleplaying_framework$views$text(section_number,section_type,section_id,section_tab,section_layout){
var items = (function (){var G__108513 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-items","tab-items",1934951825),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108513) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108513));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"body"], null),(function (){var G__108514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-text","item-text",-2146003655),(items.cljs$core$IFn$_invoke$arity$1 ? items.cljs$core$IFn$_invoke$arity$1((0)) : items.call(null,(0)))], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108514) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108514));
})()], null);
});
modular_roleplaying_framework.views.list_item = (function modular_roleplaying_framework$views$list_item(item,section_number,section_tab){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"body",new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__108515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108515) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108515));
})(),item))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"black",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null):null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,(function (){var G__108516 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108516) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108516));
})()))?(function (){
var G__108517 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),section_number], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108517) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108517));
}):(function (){
var G__108518_108837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),section_number], null);
(modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108518_108837) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108518_108837));

var G__108519 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-select","item-select",-1822277284),section_number,item], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108519) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108519));
}))], null),(function (){var G__108520 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-title","item-title",-249793661),item], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108520) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108520));
})()], null);
});
modular_roleplaying_framework.views.basic_list = (function modular_roleplaying_framework$views$basic_list(section_number,section_type,section_id,section_tab,section_layout){
var items = (function (){var G__108521 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-items","tab-items",1934951825),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108521) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108521));
})();
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.list_item,items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number)));
});
modular_roleplaying_framework.views.skillbility_view = (function modular_roleplaying_framework$views$skillbility_view(skillbility_id,section_layout){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"unselected-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"95%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return modular_roleplaying_framework.views.overlay.cljs$core$IFn$_invoke$arity$1(skillbility_id);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__108522 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-title","item-title",-249793661),skillbility_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108522) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108522));
})()], null)], null);
});
modular_roleplaying_framework.views.skills_abilities_details = (function modular_roleplaying_framework$views$skills_abilities_details(section_number,section_type,section_id,section_tab,section_layout){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section_layout,"sidebar")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This information is not formatted for the sidebar"], null);
} else {
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"moderate-stats"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Initiation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Reaction"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Continuation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Physical"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((10),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((11),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((12),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Spiritual"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((13),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((14),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((15),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Mental"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((16),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((17),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((18),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Social"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((19),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((20),section_layout)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border"], null),modular_roleplaying_framework.views.skillbility_view((21),section_layout)], null)], null);
}
});
modular_roleplaying_framework.views.skill_checks = (function modular_roleplaying_framework$views$skill_checks(_,___$1,section_id,section_tab,section_layout){
var item = (function (){var fexpr__108525 = (function (){var G__108526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-items","tab-items",1934951825),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108526) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108526));
})();
return (fexpr__108525.cljs$core$IFn$_invoke$arity$1 ? fexpr__108525.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__108525.call(null,(0)));
})();
var map__108523 = (function (){var G__108527 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108527) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108527));
})();
var map__108523__$1 = (((((!((map__108523 == null))))?(((((map__108523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__108523):map__108523);
var skills = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108523__$1,new cljs.core.Keyword(null,"skills","skills",958701426));
var skillbilities_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108523__$1,new cljs.core.Keyword(null,"skillbilities?","skillbilities?",788972706));
var splintering = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108523__$1,new cljs.core.Keyword(null,"splintering","splintering",-1707231919));
var caution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108523__$1,new cljs.core.Keyword(null,"caution","caution",1823615934));
var style = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section_layout,"book"))?"book-style-text":"standard-text");
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Overview"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__108529 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overview","overview",-435037267),item], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108529) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108529));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Base Dice Pool"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__108530 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-dice-pool","base-dice-pool",-2000848897),item,skillbilities_QMARK_,skills], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108530) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108530));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Passive Checks"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__108531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"passive-checks","passive-checks",-2057161289),item], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108531) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108531));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Bonuses & Penalties"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__108532 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bonuses-and-penalties","bonuses-and-penalties",606200007),item], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108532) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108532));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,splintering))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Multiple Actions"], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,splintering))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__108533 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"splintering","splintering",-1707231919),item], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108533) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108533));
})()], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,caution))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Careful & Reckless Action"], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,caution))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__108534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"caution","caution",1823615934),item], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108534) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108534));
})()], null):null)], null);
});
modular_roleplaying_framework.views.resources = (function modular_roleplaying_framework$views$resources(section_number,section_type,section_id,section_tab,section_layout){
var item = (function (){var fexpr__108536 = (function (){var G__108537 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-items","tab-items",1934951825),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108537) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108537));
})();
return (fexpr__108536.cljs$core$IFn$_invoke$arity$1 ? fexpr__108536.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__108536.call(null,(0)));
})();
var style = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section_layout,"book"))?"book-style-text":"standard-text");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Overview"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__108538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overview","overview",-435037267),item], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108538) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108538));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
modular_roleplaying_framework.views.encounters = (function modular_roleplaying_framework$views$encounters(section_number,section_type,section_id,section_tab,section_layout){
var item = (function (){var fexpr__108541 = (function (){var G__108542 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-items","tab-items",1934951825),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108542) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108542));
})();
return (fexpr__108541.cljs$core$IFn$_invoke$arity$1 ? fexpr__108541.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__108541.call(null,(0)));
})();
var map__108539 = (function (){var G__108543 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108543) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108543));
})();
var map__108539__$1 = (((((!((map__108539 == null))))?(((((map__108539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__108539):map__108539);
var encounter_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108539__$1,new cljs.core.Keyword(null,"encounter-style","encounter-style",841336692));
var splintering = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108539__$1,new cljs.core.Keyword(null,"splintering","splintering",-1707231919));
var caution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108539__$1,new cljs.core.Keyword(null,"caution","caution",1823615934));
var style = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section_layout,"book"))?"book-style-text":"standard-text");
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Overview"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__108545 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overview","overview",-435037267),item], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108545) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108545));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Rounds"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__108546 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rounds","rounds",1157201084),item], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108546) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108546));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Moments"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__108547 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moments","moments",-1541189836),item], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108547) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108547));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Actions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__108548 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),item], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108548) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108548));
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"actions-list"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"action-section"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Setup Actions"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.divify,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["- Release a Trap","- Duck Behind Cover","- Fall Prone","- Walk","- Crawl","- Stand Up","- Encourage","- Corroborate","- Focus "], null))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"action-section"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Engagement Actions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5em"], null)], null),"Initiations"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.divify,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, ["- Cast a spell","- Fire a weapon","- Strike at an opponent","- Grapple","- Disarm","- Climb","- Swim","- Jump","- Hide","- Provide First Aid","- Interrogate","- Deceive","- Befriend","- Inspire"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5em"], null)], null),"Reactions"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.divify,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["- Block","- Parry","- Counterspell","- Guard mind","- Deflect","- Evade"], null))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
modular_roleplaying_framework.views.damage_and_recovery = (function modular_roleplaying_framework$views$damage_and_recovery(section_number,section_type,section_id,section_tab,section_layout){
var item = (function (){var fexpr__108551 = (function (){var G__108552 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-items","tab-items",1934951825),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108552) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108552));
})();
return (fexpr__108551.cljs$core$IFn$_invoke$arity$1 ? fexpr__108551.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__108551.call(null,(0)));
})();
var map__108549 = (function (){var G__108553 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108553) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108553));
})();
var map__108549__$1 = (((((!((map__108549 == null))))?(((((map__108549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__108549):map__108549);
var damage_tiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108549__$1,new cljs.core.Keyword(null,"damage-tiers","damage-tiers",753202606));
var recovery_tiers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108549__$1,new cljs.core.Keyword(null,"recovery-tiers?","recovery-tiers?",1974730784));
var condition_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108549__$1,new cljs.core.Keyword(null,"condition-style","condition-style",-1128400844));
var skills = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108549__$1,new cljs.core.Keyword(null,"skills","skills",958701426));
var abilities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108549__$1,new cljs.core.Keyword(null,"abilities","abilities",-1471386226));
var skillbilities_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108549__$1,new cljs.core.Keyword(null,"skillbilities?","skillbilities?",788972706));
var recovery_times = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108549__$1,new cljs.core.Keyword(null,"recovery-times","recovery-times",-324037834));
var treatment_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108549__$1,new cljs.core.Keyword(null,"treatment?","treatment?",264384759));
var style = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section_layout,"book"))?"book-style-text":"standard-text");
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Overview"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__108555 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overview","overview",-435037267),item], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108555) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108555));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Injuries"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__108556 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"injuries","injuries",-299210720),item,cljs.core.count(damage_tiers),recovery_tiers_QMARK_], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108556) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108556));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Conditions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__108557 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conditions","conditions",-1647236270),item,condition_style,skills,abilities,skillbilities_QMARK_], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108557) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108557));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20pt"], null)], null),"Recovery"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),style], null),(function (){var G__108558 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recovery","recovery",-2004840646),item,cljs.core.count(damage_tiers),recovery_tiers_QMARK_,recovery_times,treatment_QMARK_,skills,abilities,skillbilities_QMARK_], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108558) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108558));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
modular_roleplaying_framework.views.condition = (function modular_roleplaying_framework$views$condition(condition){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"unselected-button medium",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return modular_roleplaying_framework.views.overlay.cljs$core$IFn$_invoke$arity$1(condition);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__108559 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-title","item-title",-249793661),condition], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108559) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108559));
})()], null)], null);
});
modular_roleplaying_framework.views.conditions_list = (function modular_roleplaying_framework$views$conditions_list(section_number,section_type,section_id,section_tab,section_layout){
var items = (function (){var G__108560 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-items","tab-items",1934951825),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108560) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108560));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"conditions-list"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.condition,items)], null);
});
modular_roleplaying_framework.views.creature_summary = (function modular_roleplaying_framework$views$creature_summary(section_number,section_type,section_id,section_tab,section_layout){
var creature_id = (function (){var G__108561 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108561) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108561));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"creature-summary-header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em"], null)], null),(function (){var G__108562 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-title","creature-title",-418581929),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108562) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108562));
})()], null)], null);
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
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"simple-stats"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Physical"], null),modular_roleplaying_framework.views.skillbility("Athleticism",(function (){var G__108563 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coordination","coordination",1076145876),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108563) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108563));
})(),(function (){var G__108564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"might","might",-1328381368),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108564) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108564));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Spiritual"], null),modular_roleplaying_framework.views.skillbility("Will",(function (){var G__108565 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exertion","exertion",-1240242361),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108565) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108565));
})(),(function (){var G__108566 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ambition","ambition",-153662933),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108566) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108566));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Mental"], null),modular_roleplaying_framework.views.skillbility("Acuity",(function (){var G__108567 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"concentration","concentration",1539606986),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108567) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108567));
})(),(function (){var G__108568 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intellect","intellect",414822757),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108568) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108568));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Social"], null),modular_roleplaying_framework.views.skillbility("Charisma",(function (){var G__108569 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"persuasion","persuasion",1089798916),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108569) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108569));
})(),(function (){var G__108570 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presence","presence",-1580756953),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108570) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108570));
})(),section_layout)], null);
});
modular_roleplaying_framework.views.moderate_stat_block = (function modular_roleplaying_framework$views$moderate_stat_block(creature_id,section_layout){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"moderate-stats"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Initiation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Reaction"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Continuation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Physical"], null),modular_roleplaying_framework.views.skillbility("Coordination",(function (){var G__108571 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coordination","coordination",1076145876),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108571) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108571));
})(),(function (){var G__108572 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"might","might",-1328381368),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108572) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108572));
})(),section_layout),modular_roleplaying_framework.views.skillbility("Reflexes",(function (){var G__108573 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reflexes","reflexes",-1252736336),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108573) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108573));
})(),(function (){var G__108574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"finesse","finesse",891142453),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108574) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108574));
})(),section_layout),modular_roleplaying_framework.views.skillbility("Endurance",(function (){var G__108575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"endurance","endurance",2002692038),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108575) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108575));
})(),(function (){var G__108576 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fortitude","fortitude",1187352341),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108576) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108576));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Spiritual"], null),modular_roleplaying_framework.views.skillbility("Exertion",(function (){var G__108577 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exertion","exertion",-1240242361),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108577) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108577));
})(),(function (){var G__108578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ambition","ambition",-153662933),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108578) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108578));
})(),section_layout),modular_roleplaying_framework.views.skillbility("Instinct",(function (){var G__108579 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instinct","instinct",2090002619),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108579) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108579));
})(),(function (){var G__108580 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discipline","discipline",343863089),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108580) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108580));
})(),section_layout),modular_roleplaying_framework.views.skillbility("Perseverance",(function (){var G__108581 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"perseverance","perseverance",-470288293),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108581) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108581));
})(),(function (){var G__108582 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dedication","dedication",2052444551),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108582) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108582));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Mental"], null),modular_roleplaying_framework.views.skillbility("Concentration",(function (){var G__108583 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"concentration","concentration",1539606986),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108583) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108583));
})(),(function (){var G__108584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intellect","intellect",414822757),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108584) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108584));
})(),section_layout),modular_roleplaying_framework.views.skillbility("Recognition",(function (){var G__108585 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recognition","recognition",1793959531),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108585) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108585));
})(),(function (){var G__108586 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intuition","intuition",1122677380),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108586) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108586));
})(),section_layout),modular_roleplaying_framework.views.skillbility("Comprehension",(function (){var G__108587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comprehension","comprehension",-756656463),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108587) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108587));
})(),(function (){var G__108588 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stability","stability",1733225509),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108588) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108588));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Social"], null),modular_roleplaying_framework.views.skillbility("Persuasion",(function (){var G__108589 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"persuasion","persuasion",1089798916),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108589) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108589));
})(),(function (){var G__108590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presence","presence",-1580756953),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108590) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108590));
})(),section_layout),modular_roleplaying_framework.views.skillbility("Insight",(function (){var G__108591 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insight","insight",-1501263459),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108591) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108591));
})(),(function (){var G__108592 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wit","wit",-1627445195),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108592) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108592));
})(),section_layout),modular_roleplaying_framework.views.skillbility("Connections",(function (){var G__108593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connections","connections",-2064090887),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108593) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108593));
})(),(function (){var G__108594 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"poise","poise",-429377896),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108594) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108594));
})(),section_layout)], null);
});
modular_roleplaying_framework.views.complex_stat_block = (function modular_roleplaying_framework$views$complex_stat_block(creature_id,section_layout){
var sidebar_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("sidebar",section_layout);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("blarg",section_layout)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"standard-text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"ERROR: Complex stats cannot currently be displayed in the sidebar."], null);
} else {
return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"complex-stats"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),"2 / 5"], null)], null),"Skills"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),"5 / 8"], null)], null),"Abilities"], null),(((!(sidebar_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null)], null):null),(((!(sidebar_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Initiation"], null):null),(((!(sidebar_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Reaction"], null):null),(((!(sidebar_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Continuation"], null):null),(((!(sidebar_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Dominance"], null):null),(((!(sidebar_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Competence"], null):null),(((!(sidebar_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skill-ability-header"], null),"Resilience"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Physical"], null),modular_roleplaying_framework.views.skill("Coordination",(function (){var G__108595 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coordination","coordination",1076145876),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108595) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108595));
})(),section_layout),modular_roleplaying_framework.views.skill("Reflexes",(function (){var G__108596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reflexes","reflexes",-1252736336),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108596) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108596));
})(),section_layout),modular_roleplaying_framework.views.skill("Endurance",(function (){var G__108597 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"endurance","endurance",2002692038),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108597) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108597));
})(),section_layout),modular_roleplaying_framework.views.ability("Might",(function (){var G__108598 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"might","might",-1328381368),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108598) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108598));
})(),section_layout),modular_roleplaying_framework.views.ability("Finesse",(function (){var G__108599 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"finesse","finesse",891142453),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108599) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108599));
})(),section_layout),modular_roleplaying_framework.views.ability("Fortitude",(function (){var G__108600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fortitude","fortitude",1187352341),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108600) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108600));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Spiritual"], null),modular_roleplaying_framework.views.skill("Exertion",(function (){var G__108601 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exertion","exertion",-1240242361),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108601) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108601));
})(),section_layout),modular_roleplaying_framework.views.skill("Instinct",(function (){var G__108602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instinct","instinct",2090002619),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108602) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108602));
})(),section_layout),modular_roleplaying_framework.views.skill("Perseverance",(function (){var G__108603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"perseverance","perseverance",-470288293),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108603) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108603));
})(),section_layout),modular_roleplaying_framework.views.ability("Ambition",(function (){var G__108604 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ambition","ambition",-153662933),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108604) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108604));
})(),section_layout),modular_roleplaying_framework.views.ability("Discipline",(function (){var G__108605 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discipline","discipline",343863089),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108605) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108605));
})(),section_layout),modular_roleplaying_framework.views.ability("Dedication",(function (){var G__108606 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dedication","dedication",2052444551),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108606) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108606));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Mental"], null),modular_roleplaying_framework.views.skill("Concentration",(function (){var G__108607 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"concentration","concentration",1539606986),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108607) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108607));
})(),section_layout),modular_roleplaying_framework.views.skill("Recognition",(function (){var G__108608 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recognition","recognition",1793959531),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108608) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108608));
})(),section_layout),modular_roleplaying_framework.views.skill("Comprehension",(function (){var G__108609 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comprehension","comprehension",-756656463),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108609) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108609));
})(),section_layout),modular_roleplaying_framework.views.ability("Intellect",(function (){var G__108610 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intellect","intellect",414822757),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108610) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108610));
})(),section_layout),modular_roleplaying_framework.views.ability("Intuition",(function (){var G__108611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intuition","intuition",1122677380),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108611) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108611));
})(),section_layout),modular_roleplaying_framework.views.ability("Stability",(function (){var G__108612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stability","stability",1733225509),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108612) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108612));
})(),section_layout),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-header"], null),"Social"], null),modular_roleplaying_framework.views.skill("Persuasion",(function (){var G__108613 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"persuasion","persuasion",1089798916),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108613) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108613));
})(),section_layout),modular_roleplaying_framework.views.skill("Insight",(function (){var G__108614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insight","insight",-1501263459),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108614) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108614));
})(),section_layout),modular_roleplaying_framework.views.skill("Connections",(function (){var G__108615 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connections","connections",-2064090887),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108615) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108615));
})(),section_layout),modular_roleplaying_framework.views.ability("Presence",(function (){var G__108616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presence","presence",-1580756953),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108616) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108616));
})(),section_layout),modular_roleplaying_framework.views.ability("Wit",(function (){var G__108617 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wit","wit",-1627445195),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108617) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108617));
})(),section_layout),modular_roleplaying_framework.views.ability("Poise",(function (){var G__108618 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"poise","poise",-429377896),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108618) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108618));
})(),section_layout)], true);
}
});
modular_roleplaying_framework.views.creature_stats = (function modular_roleplaying_framework$views$creature_stats(section_number,section_type,section_id,section_tab,section_layout){
var creature_id = (function (){var G__108620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108620) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108620));
})();
var section_ids = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__108621 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-id","state-section-id",210581770),"section-one"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108621) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108621));
})(),(function (){var G__108622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-id","state-section-id",210581770),"section-two"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108622) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108622));
})(),(function (){var G__108623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-id","state-section-id",210581770),"section-three"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108623) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108623));
})()], null);
var section_types = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__108619_SHARP_){
var G__108624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),p1__108619_SHARP_], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108624) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108624));
}),section_ids);
var style = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
if(((1) > new cljs.core.Keyword(null,"ruleset","ruleset",-2145273412).cljs$core$IFn$_invoke$arity$1(modular_roleplaying_framework.views.keywordized_frequencies(section_types)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: NO RULESETS"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"ruleset","ruleset",-2145273412).cljs$core$IFn$_invoke$arity$1(modular_roleplaying_framework.views.keywordized_frequencies(section_types)))){
var map__108625_108838 = (function (){var G__108626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),(function (){var G__108627 = cljs.core.first(modular_roleplaying_framework.views.positions("ruleset",section_types));
return (section_ids.cljs$core$IFn$_invoke$arity$1 ? section_ids.cljs$core$IFn$_invoke$arity$1(G__108627) : section_ids.call(null,G__108627));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108626) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108626));
})();
var map__108625_108839__$1 = (((((!((map__108625_108838 == null))))?(((((map__108625_108838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108625_108838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__108625_108838):map__108625_108838);
var skills_108840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108625_108839__$1,new cljs.core.Keyword(null,"skills","skills",958701426));
var abilities_108841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108625_108839__$1,new cljs.core.Keyword(null,"abilities","abilities",-1471386226));
var skillbilities_QMARK__108842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108625_108839__$1,new cljs.core.Keyword(null,"skillbilities?","skillbilities?",788972706));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills_108840,(1))) && (skillbilities_QMARK__108842 === true))){
cljs.core.reset_BANG_(style,"simple-stats");
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills_108840,(3))) && (skillbilities_QMARK__108842 === true))){
cljs.core.reset_BANG_(style,"moderate-stats");
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills_108840,(3))) && (skillbilities_QMARK__108842 === false))){
cljs.core.reset_BANG_(style,"complex-stats");
} else {
}
}
}
} else {
if(((1) < new cljs.core.Keyword(null,"ruleset","ruleset",-2145273412).cljs$core$IFn$_invoke$arity$1(modular_roleplaying_framework.views.keywordized_frequencies(section_types)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["ERROR: MULTIPLE RULESETS: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__108631 = cljs.core.first(modular_roleplaying_framework.views.positions("ruleset",section_types));
return (section_ids.cljs$core$IFn$_invoke$arity$1 ? section_ids.cljs$core$IFn$_invoke$arity$1(G__108631) : section_ids.call(null,G__108631));
})())," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__108632 = cljs.core.second(modular_roleplaying_framework.views.positions("ruleset",section_types));
return (section_ids.cljs$core$IFn$_invoke$arity$1 ? section_ids.cljs$core$IFn$_invoke$arity$1(G__108632) : section_ids.call(null,G__108632));
})())].join('')], 0));
} else {
}
}
}

var G__108633 = cljs.core.deref(style);
switch (G__108633) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__108633)].join('')));

}
});
modular_roleplaying_framework.views.resource_divify = (function modular_roleplaying_framework$views$resource_divify(resource_quantity,creature_id){
var resource = cljs.core.first(resource_quantity);
var quantity = cljs.core.last(resource_quantity);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"resource"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"unselected-button small",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return modular_roleplaying_framework.views.overlay.cljs$core$IFn$_invoke$arity$1(resource);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__108635 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-title","resource-title",904657571),resource], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108635) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108635));
})()),(((quantity > (1)))?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quantity),")"].join(''):null)].join('')], null)], null)], null);
});
modular_roleplaying_framework.views.subsection_titles = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["equipment","traits","expertise","affiliations","items","wealth"], null);
modular_roleplaying_framework.views.domain_resource_subsection = (function modular_roleplaying_framework$views$domain_resource_subsection(section_number,subsection_id){
var creature_id = (function (){var G__108636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108636) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108636));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"subheader",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),clojure.string.capitalize((modular_roleplaying_framework.views.subsection_titles.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.views.subsection_titles.cljs$core$IFn$_invoke$arity$1(subsection_id) : modular_roleplaying_framework.views.subsection_titles.call(null,subsection_id)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"domain-resource-list"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.resource_divify,(function (){var G__108637 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-resources-typed-quantified","creature-resources-typed-quantified",-1136110511),creature_id,subsection_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108637) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108637));
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(creature_id))], null)], null);
});
modular_roleplaying_framework.views.miscellaneous_resource_subsection = (function modular_roleplaying_framework$views$miscellaneous_resource_subsection(section_number,subsection_id){
var creature_id = (function (){var G__108638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108638) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108638));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"subheader",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),clojure.string.capitalize((modular_roleplaying_framework.views.subsection_titles.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.views.subsection_titles.cljs$core$IFn$_invoke$arity$1(subsection_id) : modular_roleplaying_framework.views.subsection_titles.call(null,subsection_id)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"miscellaneous-resource-list"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.resource_divify,(function (){var G__108639 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-resources-typed-quantified","creature-resources-typed-quantified",-1136110511),creature_id,subsection_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108639) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108639));
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(creature_id))], null)], null);
});
modular_roleplaying_framework.views.creature_resources_subsections = (function modular_roleplaying_framework$views$creature_resources_subsections(section_number,section_type,section_id,section_tab,section_layout){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"resource-section"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),"1 / 3",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null)], null),"Resources"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),modular_roleplaying_framework.views.domain_resource_subsection(section_number,(0)),modular_roleplaying_framework.views.domain_resource_subsection(section_number,(1)),modular_roleplaying_framework.views.domain_resource_subsection(section_number,(2)),modular_roleplaying_framework.views.domain_resource_subsection(section_number,(3))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),modular_roleplaying_framework.views.miscellaneous_resource_subsection(section_number,(4)),modular_roleplaying_framework.views.miscellaneous_resource_subsection(section_number,(5))], null)], null);
});
modular_roleplaying_framework.views.feature_display = (function modular_roleplaying_framework$views$feature_display(feature_id,section_layout){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"feature"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"feature-title"], null),(function (){var G__108640 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-title","feature-title",2026798069),feature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108640) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108640));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"feature-content"], null),(function (){var G__108641 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-details","feature-details",96542810),feature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108641) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108641));
})()], null)], null);
});
modular_roleplaying_framework.views.creature_features = (function modular_roleplaying_framework$views$creature_features(section_number,section_type,section_id,section_tab,section_layout){
var creature_id = (function (){var G__108642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108642) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108642));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"feature-list"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.feature_display,(function (){var G__108643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-feature-list","creature-feature-list",225155610),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108643) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108643));
})(),section_layout)], null);
});
modular_roleplaying_framework.views.creature_notes = (function modular_roleplaying_framework$views$creature_notes(section_number,section_type,section_id,section_tab,section_layout){
var creature_id = (function (){var G__108645 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108645) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108645));
})();
var G__108646 = (function (){var G__108647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-notes-state","creature-notes-state",-471696466),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108647) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108647));
})();
switch (G__108646) {
case (0):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"creature-notes"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"creature-notes-header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em"], null)], null),"Notes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px",new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__108648 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-notes-state-change","creature-notes-state-change",-1510434125),creature_id,(1)], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108648) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108648));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-edit"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("book",section_layout))?"book-style-text":"standard-text"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"1 / 3"], null)], null),modular_roleplaying_framework.views.text__GT_hiccup((function (){var G__108649 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-notes","creature-notes",-2029123219),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108649) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108649));
})())], null)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"creature-notes"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"creature-notes-header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em"], null)], null),"Notes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"2em",new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__108650 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-notes-state-change","creature-notes-state-change",-1510434125),creature_id,(0)], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108650) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108650));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-check"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-edit",new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__108651 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-notes","creature-notes",-2029123219),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108651) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108651));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__108644_SHARP_){
var G__108652 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-notes-update","creature-notes-update",-350278924),creature_id,p1__108644_SHARP_.target.value], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108652) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108652));
})], null)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__108646)].join('')));

}
});
modular_roleplaying_framework.views.creature_sheet = (function modular_roleplaying_framework$views$creature_sheet(section_number,section_type,section_id,section_tab,section_layout){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"creature-sheet"], null),modular_roleplaying_framework.views.creature_summary(section_number,section_type,section_id,section_tab,section_layout),modular_roleplaying_framework.views.creature_stats(section_number,section_type,section_id,section_tab,section_layout),modular_roleplaying_framework.views.creature_resources_subsections(section_number,section_type,section_id,section_tab,section_layout),modular_roleplaying_framework.views.creature_notes(section_number,section_type,section_id,section_tab,section_layout)], null);
});
modular_roleplaying_framework.views.unlocked_creatures = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
modular_roleplaying_framework.views.password_entry = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
modular_roleplaying_framework.views.creature_list_item = (function modular_roleplaying_framework$views$creature_list_item(creature_id,section_number,section_tab){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__108653 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108653) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108653));
})(),creature_id))?"selected-button":"unselected-button"),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(creature_id,(function (){var G__108654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108654) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108654));
})()))?(function (){
var G__108655 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),section_number], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108655) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108655));
}):(function (){
var G__108656_108845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),section_number], null);
(modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108656_108845) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108656_108845));

var G__108657_108846 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-summary-state-change","creature-summary-state-change",714628401),creature_id,(0)], null);
(modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108657_108846) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108657_108846));

var G__108658_108847 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-notes-state-change","creature-notes-state-change",-1510434125),creature_id,(0)], null);
(modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108658_108847) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108658_108847));

var G__108659 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-select","item-select",-1822277284),section_number,creature_id], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108659) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108659));
}))], null),(function (){var G__108660 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-title","item-title",-249793661),creature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108660) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108660));
})()], null);
});
modular_roleplaying_framework.views.creature_list = (function modular_roleplaying_framework$views$creature_list(section_number,section_type,section_id,section_tab,section_layout){
var active_world = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (section_id__$1){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("world",(function (){var G__108661 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),section_id__$1], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108661) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108661));
})());
}),(function (){var G__108662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-ids","state-section-ids",1524494040)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108662) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108662));
})()));
var creatures = (function (){var G__108663 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-creatures","world-creatures",745737020),active_world], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108663) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108663));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Enter Creature Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(modular_roleplaying_framework.views.password_entry),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (entry){
return cljs.core.reset_BANG_(modular_roleplaying_framework.views.password_entry,entry.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"unselected-button small",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.unlocked_creatures,cljs.core.conj,(function (){var fexpr__108665 = (function (){var G__108666 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unlock-creature","unlock-creature",1380788176),cljs.core.deref(modular_roleplaying_framework.views.password_entry)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108666) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108666));
})();
return (fexpr__108665.cljs$core$IFn$_invoke$arity$1 ? fexpr__108665.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__108665.call(null,(0)));
})());
})], null),"Submit"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.creature_list_item,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(modular_roleplaying_framework.views.unlocked_creatures))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("creature",(function (){var G__108667 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__108668 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108668) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108668));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108667) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108667));
})()))?modular_roleplaying_framework.views.creature_sheet(section_number,section_type,section_id,section_tab,section_layout):null)], null);
});
modular_roleplaying_framework.views.heritage_roles_list_item = (function modular_roleplaying_framework$views$heritage_roles_list_item(item_id,section_number,section_tab){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"body",new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__108669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108669) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108669));
})(),item_id))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"black",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null):null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_id,(function (){var G__108670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108670) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108670));
})()))?(function (){
var G__108671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),section_number], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108671) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108671));
}):(function (){
var G__108672_108848 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),section_number], null);
(modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108672_108848) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108672_108848));

var G__108673 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-select","item-select",-1822277284),section_number,item_id], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108673) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108673));
}))], null),(function (){var G__108674 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-title","item-title",-249793661),item_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108674) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108674));
})()], null);
});
modular_roleplaying_framework.views.fixed_resource_divify = (function modular_roleplaying_framework$views$fixed_resource_divify(resource_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"resource-view-only"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return modular_roleplaying_framework.views.overlay.cljs$core$IFn$_invoke$arity$1(resource_id);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__108675 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-title","resource-title",904657571),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108675) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108675));
})()], null)], null)], null);
});
modular_roleplaying_framework.views.fixed_heritage_divify = (function modular_roleplaying_framework$views$fixed_heritage_divify(feature_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"feature-view-only"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return modular_roleplaying_framework.views.overlay.cljs$core$IFn$_invoke$arity$1(feature_id);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__108676 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-title","feature-title",2026798069),feature_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108676) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108676));
})()], null)], null)], null);
});
modular_roleplaying_framework.views.heritages_list = (function modular_roleplaying_framework$views$heritages_list(section_number,section_type,section_id,section_tab,section_layout){
var active_world = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (section_id__$1){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("world",(function (){var G__108677 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),section_id__$1], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108677) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108677));
})());
}),(function (){var G__108678 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-ids","state-section-ids",1524494040)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108678) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108678));
})()));
var heritages = (function (){var G__108679 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-heritages","world-heritages",-1355127108),active_world], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108679) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108679));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$4(modular_roleplaying_framework.views.heritage_roles_list_item,heritages,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("heritage",(function (){var G__108680 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__108681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108681) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108681));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108680) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108680));
})()))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__108682 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heritage-details","heritage-details",517842258),(function (){var G__108683 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108683) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108683));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108682) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108682));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Resources"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"resource-list"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.fixed_resource_divify,(function (){var G__108684 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heritage-resources","heritage-resources",-1286324504),(function (){var G__108685 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108685) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108685));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108684) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108684));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Features"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.fixed_heritage_divify,(function (){var G__108686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heritage-features","heritage-features",-1746727718),(function (){var G__108687 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108687) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108687));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108686) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108686));
})())], null):null)], null);
});
modular_roleplaying_framework.views.roles_list = (function modular_roleplaying_framework$views$roles_list(section_number,section_type,section_id,section_tab,section_layout){
var active_world = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (section_id__$1){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("world",(function (){var G__108688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),section_id__$1], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108688) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108688));
})());
}),(function (){var G__108689 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-ids","state-section-ids",1524494040)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108689) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108689));
})()));
var roles = (function (){var G__108690 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-roles","world-roles",-1495875244),active_world], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108690) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108690));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$4(modular_roleplaying_framework.views.heritage_roles_list_item,roles,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("role",(function (){var G__108691 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__108692 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108692) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108692));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108691) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108691));
})()))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__108693 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"role-details","role-details",-772961800),(function (){var G__108694 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108694) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108694));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108693) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108693));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Resources"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"resource-list"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.fixed_resource_divify,(function (){var G__108695 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"role-resources","role-resources",819423685),(function (){var G__108696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108696) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108696));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108695) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108695));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Features"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.fixed_heritage_divify,(function (){var G__108697 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"role-features","role-features",459150250),(function (){var G__108698 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108698) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108698));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108697) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108697));
})())], null):null)], null);
});
modular_roleplaying_framework.views.simple_skill_description = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"ATHLETICISM"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"WILLPOWER"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"ACUITY"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"CHARISMA"], null)], null);
modular_roleplaying_framework.views.moderate_skill_description = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Coordination, Reflexes, and Endurance"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Exertion, Instinct, and Perseverance"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Concentration, Recognition, and Comprehension"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Persuasion, Insight, and Connections"], null)], null);
modular_roleplaying_framework.views.complex_skill_description = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Coordination, Reflexes, Endurance, Might, Finesse, and Fortitude"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Exertion, Instinct, Perseverance, Ambition, Discipline, and Dedication"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Concentration, Recognition, Comprehension, Intellect, Intuition, and Stability"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Persuasion, Insight, Connections, Presence, Wit, and Poise"], null)], null);
modular_roleplaying_framework.views.skills_and_abilities = (function modular_roleplaying_framework$views$skills_and_abilities(section_number,section_type,section_id,section_tab,section_layout){
var active_ruleset = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (section_id__$1){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ruleset",(function (){var G__108699 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),section_id__$1], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108699) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108699));
})());
}),(function (){var G__108700 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-ids","state-section-ids",1524494040)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108700) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108700));
})()));
var skills = (function (){var G__108701 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ruleset-skills","ruleset-skills",-1459168412),active_ruleset], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108701) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108701));
})();
var skillbilities_QMARK_ = (function (){var G__108702 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ruleset-skillbilities","ruleset-skillbilities",2131758022),active_ruleset], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108702) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108702));
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
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__108703 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-title","resource-title",904657571),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108703) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108703));
})()], null)], null)], null);
});
modular_roleplaying_framework.views.resources_list = (function modular_roleplaying_framework$views$resources_list(section_number,section_type,section_id,section_tab,section_layout){
var resources = (function (){var G__108704 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-list","resource-list",1498099584)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108704) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108704));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"complete-resource-list",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.views.complete_resource_divify,resources)], null);
});
modular_roleplaying_framework.views.world_item = (function modular_roleplaying_framework$views$world_item(var_args){
var args__4795__auto__ = [];
var len__4789__auto___108849 = arguments.length;
var i__4790__auto___108850 = (0);
while(true){
if((i__4790__auto___108850 < len__4789__auto___108849)){
args__4795__auto__.push((arguments[i__4790__auto___108850]));

var G__108851 = (i__4790__auto___108850 + (1));
i__4790__auto___108850 = G__108851;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return modular_roleplaying_framework.views.world_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(modular_roleplaying_framework.views.world_item.cljs$core$IFn$_invoke$arity$variadic = (function (item_id,section_number,section_tab,p__108709){
var vec__108710 = p__108709;
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108710,(0),null);
var tab_id = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (tab_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__108713 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),item_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108713) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108713));
})(),(function (){var G__108714 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-type","tab-type",-913444495),tab_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108714) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108714));
})());
}),(function (){var G__108715 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-tabs","section-tabs",1270711059),(function (){var G__108716 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-id","state-section-id",210581770),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108716) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108716));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108715) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108715));
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__108717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108717) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108717));
})(),item_id))?["selected-button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join(''):["unselected-button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"15px"], null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_id,(function (){var G__108718 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108718) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108718));
})()))?(function (){
var G__108719 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),section_number], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108719) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108719));
}):(function (){
var G__108720 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-tab-select","item-tab-select",-183749023),section_number,item_id,tab_id], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108720) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108720));
}))], null),(function (){var G__108721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-title","item-title",-249793661),item_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108721) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108721));
})()], null);
}));

(modular_roleplaying_framework.views.world_item.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(modular_roleplaying_framework.views.world_item.cljs$lang$applyTo = (function (seq108705){
var G__108706 = cljs.core.first(seq108705);
var seq108705__$1 = cljs.core.next(seq108705);
var G__108707 = cljs.core.first(seq108705__$1);
var seq108705__$2 = cljs.core.next(seq108705__$1);
var G__108708 = cljs.core.first(seq108705__$2);
var seq108705__$3 = cljs.core.next(seq108705__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__108706,G__108707,G__108708,seq108705__$3);
}));

modular_roleplaying_framework.views.creatures_list = (function modular_roleplaying_framework$views$creatures_list(section_number,section_type,section_id,section_tab,section_layout){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"CREATURES"], null);
});
modular_roleplaying_framework.views.advancements_list = (function modular_roleplaying_framework$views$advancements_list(section_number,section_type,section_id,section_tab,section_layout){
var advancements = (function (){var G__108722 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-advancements","world-advancements",2113721326),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108722) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108722));
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([advancements], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$4(modular_roleplaying_framework.views.world_item,advancements,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("advancement",(function (){var G__108723 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__108724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108724) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108724));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108723) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108723));
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__108725 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-details","item-details",-987623935),(function (){var G__108726 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108726) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108726));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108725) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108725));
})()], null):null)], null);
});
modular_roleplaying_framework.views.key_figures_list = (function modular_roleplaying_framework$views$key_figures_list(section_number,section_type,section_id,section_tab,section_layout){
var key_figures = (function (){var G__108727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-key-figures","world-key-figures",-2094243827),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108727) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108727));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$4(modular_roleplaying_framework.views.world_item,key_figures,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("key-figure",(function (){var G__108728 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__108729 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108729) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108729));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108728) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108728));
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__108730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-details","item-details",-987623935),(function (){var G__108731 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108731) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108731));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108730) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108730));
})()], null):null)], null);
});
modular_roleplaying_framework.views.organizations_list = (function modular_roleplaying_framework$views$organizations_list(section_number,section_type,section_id,section_tab,section_layout){
var organizations = (function (){var G__108732 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-organizations","world-organizations",-481549703),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108732) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108732));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$4(modular_roleplaying_framework.views.world_item,organizations,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("organization",(function (){var G__108733 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__108734 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108734) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108734));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108733) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108733));
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__108735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-details","item-details",-987623935),(function (){var G__108736 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108736) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108736));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108735) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108735));
})()], null):null)], null);
});
modular_roleplaying_framework.views.lore_list = (function modular_roleplaying_framework$views$lore_list(section_number,section_type,section_id,section_tab,section_layout){
var lore = (function (){var G__108737 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-lore","world-lore",-1851264915),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108737) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108737));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$4(modular_roleplaying_framework.views.world_item,lore,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("lore",(function (){var G__108738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__108739 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108739) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108739));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108738) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108738));
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__108740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-details","item-details",-987623935),(function (){var G__108741 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108741) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108741));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108740) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108740));
})()], null):null)], null);
});
modular_roleplaying_framework.views.civilizations_list = (function modular_roleplaying_framework$views$civilizations_list(section_number,section_type,section_id,section_tab,section_layout){
var active_world_item = (function (){var G__108742 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108742) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108742));
})();
var world_territories = (function (){var G__108743 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-territories","world-territories",-982355734),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108743) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108743));
})();
var civilizations = (function (){var G__108744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108744) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108744));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(modular_roleplaying_framework.views.world_item,civilizations,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("medium")], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("civilization",(function (){var G__108745 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__108746 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108746) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108746));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108745) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108745));
})()))?(function (){var civilization_details = (function (){var G__108748 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"civilization-details","civilization-details",281511038),(function (){var G__108749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108749) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108749));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108748) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108748));
})();
var map__108747 = civilization_details;
var map__108747__$1 = (((((!((map__108747 == null))))?(((((map__108747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__108747):map__108747);
var religion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108747__$1,new cljs.core.Keyword(null,"religion","religion",-40640352));
var society = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108747__$1,new cljs.core.Keyword(null,"society","society",1602704557));
var economy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108747__$1,new cljs.core.Keyword(null,"economy","economy",502906683));
var politics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108747__$1,new cljs.core.Keyword(null,"politics","politics",-448638170));
var military = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108747__$1,new cljs.core.Keyword(null,"military","military",1724894572));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((!((religion == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),"Religion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),religion], null)], null):null),(((!((society == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),"Society"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),society], null)], null):null),(((!((economy == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),"Economy"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),economy], null)], null):null),(((!((politics == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),"Politics"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),politics], null)], null):null),(((!((military == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),"Military"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),military], null)], null):null)], null);
})():null)], null);
});
modular_roleplaying_framework.views.territories_list = (function modular_roleplaying_framework$views$territories_list(section_number,section_type,section_id,section_tab,section_layout){
var territories = (function (){var G__108751 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-territories","world-territories",-982355734),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108751) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108751));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(modular_roleplaying_framework.views.world_item,territories,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("medium")], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("territory",(function (){var G__108752 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),(function (){var G__108753 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108753) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108753));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108752) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108752));
})()))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__108754 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"territory-details","territory-details",323186833),(function (){var G__108755 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108755) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108755));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108754) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108754));
})()], null),(cljs.core.truth_(cljs.core.not_empty((function (){var G__108756 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"territory-civilizations","territory-civilizations",-523722954),(function (){var G__108757 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108757) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108757));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108756) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108756));
})()))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"header",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5em"], null)], null),"CIVILIZATIONS"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(modular_roleplaying_framework.views.world_item,(function (){var G__108758 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"territory-civilizations","territory-civilizations",-523722954),(function (){var G__108759 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108759) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108759));
})()], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108758) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108758));
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_tab),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("medium")], 0))], null):null)], null):null)], null);
});
modular_roleplaying_framework.views.world_overview = (function modular_roleplaying_framework$views$world_overview(section_number,section_type,section_id,section_tab,section_layout){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"superbody"], null),(function (){var G__108760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-overview","world-overview",-314945091),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108760) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108760));
})()], null);
});
modular_roleplaying_framework.views.content = (function modular_roleplaying_framework$views$content(section_number,section_type,section_id,section_tab,section_layout){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),(function (){var G__108761 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-title","section-title",1261938902),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108761) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108761));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"subheader"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__108763 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-title","tab-title",1398279061),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108763) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108763));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"body"], null),(function (){var fexpr__108765 = (function (){var G__108766 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-template","tab-template",-1557753771),section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108766) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108766));
})();
return (fexpr__108765.cljs$core$IFn$_invoke$arity$5 ? fexpr__108765.cljs$core$IFn$_invoke$arity$5(section_number,section_type,section_id,section_tab,section_layout) : fexpr__108765.call(null,section_number,section_type,section_id,section_tab,section_layout));
})()], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section_number,"section-two"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"30px"], null)], null)], null):null)], null);
});
modular_roleplaying_framework.views.navigation_tab = (function modular_roleplaying_framework$views$navigation_tab(section_number,section_id,section_layout){
var direction = (function (){var G__108767 = section_number;
switch (G__108767) {
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
var G__108768 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reorder-sections","reorder-sections",208296526),(function (){var G__108769 = new cljs.core.Keyword(null,"text","text",-1790561697);
return (direction.cljs$core$IFn$_invoke$arity$1 ? direction.cljs$core$IFn$_invoke$arity$1(G__108769) : direction.call(null,G__108769));
})()], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108768) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108768));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__108770 = new cljs.core.Keyword(null,"icon","icon",1679606541);
return (direction.cljs$core$IFn$_invoke$arity$1 ? direction.cljs$core$IFn$_invoke$arity$1(G__108770) : direction.call(null,G__108770));
})()], null)], null)], null);
});
modular_roleplaying_framework.views.navbar_tab = (function modular_roleplaying_framework$views$navbar_tab(section_number,section_id,section_layout,tab_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"tab",new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab_id,(function (){var G__108772 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),section_number], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108772) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108772));
})()))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),modular_roleplaying_framework.views.background_color((function (){var G__108773 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108773) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108773));
})(),section_number),new cljs.core.Keyword(null,"color","color",1011675173),"black"], null):((cljs.core.not_any_QMARK_((function (p1__108771_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab_id,p1__108771_SHARP_);
}),(function (){var G__108774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-tabs","section-tabs",1270711059),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108774) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108774));
})()))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),modular_roleplaying_framework.views.background_color((function (){var G__108775 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108775) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108775));
})(),section_number)], null):null)),new cljs.core.Keyword(null,"key","key",-1516042587),tab_id,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__108776 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-select","tab-select",1957789174),section_number,tab_id], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108776) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108776));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__108777 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-icon","tab-icon",-601622304),tab_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108777) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108777));
})()], null)], null)], null);
});
modular_roleplaying_framework.views.generate_tabs = (function modular_roleplaying_framework$views$generate_tabs(section_number,section_id,section_layout,tabs){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(modular_roleplaying_framework.views.navbar_tab,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_number),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_id),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(section_layout),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tabs], 0)));
});
modular_roleplaying_framework.views.navbar = (function modular_roleplaying_framework$views$navbar(section_number,section_type,section_id,section_tab,section_layout){
var tabs = (function (){var G__108778 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-tabs-full","section-tabs-full",300098194),section_number,section_tab], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108778) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108778));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar"], null),modular_roleplaying_framework.views.generate_tabs(section_number,section_id,section_layout,tabs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"max-content"], null)], null)], null)], null);
});
modular_roleplaying_framework.views.section = (function modular_roleplaying_framework$views$section(section_number,section_type,section_id,section_tab,section_layout){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),modular_roleplaying_framework.views.get_section_class(section_layout,section_number),new cljs.core.Keyword(null,"key","key",-1516042587),section_number,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),modular_roleplaying_framework.views.background_color((function (){var G__108779 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),section_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108779) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108779));
})(),section_number)], null)], null),modular_roleplaying_framework.views.navbar(section_number,section_type,section_id,section_tab,section_layout),modular_roleplaying_framework.views.content(section_number,section_type,section_id,section_tab,section_layout)], null);
});
modular_roleplaying_framework.views.resource_select = (function modular_roleplaying_framework$views$resource_select(resource_id,creature_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2px",new cljs.core.Keyword(null,"align-content","align-content",-990200349),"left"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__108780 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-add-resource","creature-add-resource",409356036),resource_id,creature_id], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108780) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108780));
})], null),(function (){var G__108781 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-title","item-title",-249793661),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108781) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108781));
})()], null)], null);
});
modular_roleplaying_framework.views.creature_resource = (function modular_roleplaying_framework$views$creature_resource(creature_id){
var resource_subtype = (function (){var fexpr__108783 = (function (){var G__108784 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108784) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108784));
})();
return (fexpr__108783.cljs$core$IFn$_invoke$arity$1 ? fexpr__108783.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__108783.call(null,(1)));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"resource-select-menu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Select an item below to add it to your inventory."], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.resource_select,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (resource_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resource_subtype,(function (){var G__108785 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-subtype","resource-subtype",1660664175),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108785) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108785));
})());
}),(function (){var G__108786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-list","resource-list",1498099584)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108786) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108786));
})()),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(creature_id))], null);
});
modular_roleplaying_framework.views.creature_menu = (function modular_roleplaying_framework$views$creature_menu(creature_id){
var G__108787 = (function (){var fexpr__108789 = (function (){var G__108790 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108790) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108790));
})();
return (fexpr__108789.cljs$core$IFn$_invoke$arity$1 ? fexpr__108789.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__108789.call(null,(0)));
})();
switch (G__108787) {
case "resource":
return modular_roleplaying_framework.views.creature_resource(creature_id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__108787)].join('')));

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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),(function (){var G__108791 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-title","feature-title",2026798069),feature,resource_properties], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108791) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108791));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__108792 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-details","feature-details",96542810),feature,resource_properties], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108792) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108792));
})()], null)], null);
});
modular_roleplaying_framework.views.resource_details = (function modular_roleplaying_framework$views$resource_details(resource_id){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"resource-details"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),(function (){var G__108793 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-title","resource-title",904657571),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108793) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108793));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",(function (){var G__108794 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-properties","resource-properties",-677994762),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108794) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108794));
})()))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__108795 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-flavor-text","resource-flavor-text",429244330),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108795) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108795));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Quality: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__108797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-quality-bonus","resource-quality-bonus",496784380),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108797) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108797));
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Power: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__108799 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-power-bonus","resource-power-bonus",669478217),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108799) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108799));
})())].join('')], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.feature_details,(function (){var G__108800 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-features","resource-features",-1831876409),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108800) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108800));
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((function (){var G__108801 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-properties","resource-properties",-677994762),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108801) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108801));
})()))], null);
});
modular_roleplaying_framework.views.condition_effect = (function modular_roleplaying_framework$views$condition_effect(condition_id,effect_id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"effect"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),(function (){var G__108802 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"condition-effect-description","condition-effect-description",-3743093),condition_id,effect_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108802) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108802));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"duration"], null),(function (){var G__108803 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"condition-effect-duration","condition-effect-duration",-2101079389),condition_id,effect_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108803) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108803));
})()], null)], null);
});
modular_roleplaying_framework.views.condition_details = (function modular_roleplaying_framework$views$condition_details(condition_id){
var map__108804 = (function (){var G__108805 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802),condition_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108805) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108805));
})();
var map__108804__$1 = (((((!((map__108804 == null))))?(((((map__108804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__108804):map__108804);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108804__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108804__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108804__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108804__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"condition"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),(function (){var G__108807 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"condition-title","condition-title",-1818530037),condition_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108807) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108807));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),(function (){var G__108808 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"condition-description","condition-description",-584806753),condition_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108808) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108808));
})()], null),(function (){var effect_count = cljs.core.count((function (){var G__108809 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"condition-effects","condition-effects",1872046469),condition_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108809) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108809));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"effects"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"effect"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Effect"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Duration"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(modular_roleplaying_framework.views.condition_effect,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(condition_id),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1(effect_count)))], null);
})()], null);
});
modular_roleplaying_framework.views.skillbility_details = (function modular_roleplaying_framework$views$skillbility_details(skillbility_id){
var map__108810 = (function (){var G__108811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802),skillbility_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108811) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108811));
})();
var map__108810__$1 = (((((!((map__108810 == null))))?(((((map__108810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__108810):map__108810);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108810__$1,new cljs.core.Keyword(null,"title","title",636505583));
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108810__$1,new cljs.core.Keyword(null,"details","details",1956795411));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"condition"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),(function (){var G__108813 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-title","item-title",-249793661),skillbility_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108813) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108813));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),(function (){var G__108814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-details","item-details",-987623935),skillbility_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108814) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108814));
})()], null)], null);
});
modular_roleplaying_framework.views.overlay_content = (function modular_roleplaying_framework$views$overlay_content(item_id){
var G__108815 = (function (){var G__108816 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),item_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108816) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108816));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("creature",G__108815)){
return modular_roleplaying_framework.views.creature_menu(item_id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("resource",G__108815)){
return modular_roleplaying_framework.views.resource_details(item_id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("condition",G__108815)){
return modular_roleplaying_framework.views.condition_details(item_id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("skillbility",G__108815)){
return modular_roleplaying_framework.views.skillbility_details(item_id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),G__108815)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Item type not configured for overlay display."], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__108815)].join('')));

}
}
}
}
}
});
modular_roleplaying_framework.views.system_menu = (function modular_roleplaying_framework$views$system_menu(){
if(cljs.core.truth_((function (){var G__108817 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialized?","initialized?",1707939066)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108817) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108817));
})())){
var map__108818 = (function (){var G__108819 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108819) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108819));
})();
var map__108818__$1 = (((((!((map__108818 == null))))?(((((map__108818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__108818):map__108818);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108818__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108818__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108818__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108818__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),layout], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("visible",(function (){var G__108821 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-state","overlay-state",95491678)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108821) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108821));
})()))?(function (){var overlay_item = (function (){var G__108822 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-item","overlay-item",1921913766)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108822) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108822));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"overlay"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"overlay-content"], null),modular_roleplaying_framework.views.overlay_content(overlay_item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"overlay-x",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__108823 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-state-change","overlay-state-change",1441777589),"hidden"], null);
return (modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._GT_evt.cljs$core$IFn$_invoke$arity$1(G__108823) : modular_roleplaying_framework.db_CRUD._GT_evt.call(null,G__108823));
})], null),"X"], null)], null);
})():null),(function (){var section_numbers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["section-one","section-two","section-three"], null);
var section_ids = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three)], null);
var section_types = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__108824 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),(section_ids.cljs$core$IFn$_invoke$arity$1 ? section_ids.cljs$core$IFn$_invoke$arity$1((0)) : section_ids.call(null,(0)))], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108824) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108824));
})(),(function (){var G__108825 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),(section_ids.cljs$core$IFn$_invoke$arity$1 ? section_ids.cljs$core$IFn$_invoke$arity$1((1)) : section_ids.call(null,(1)))], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108825) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108825));
})(),(function (){var G__108826 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section-type","section-type",-1815294838),(section_ids.cljs$core$IFn$_invoke$arity$1 ? section_ids.cljs$core$IFn$_invoke$arity$1((2)) : section_ids.call(null,(2)))], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__108826) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__108826));
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
