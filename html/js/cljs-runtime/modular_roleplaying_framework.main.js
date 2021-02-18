goog.provide('modular_roleplaying_framework.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('kee_frame.core');
goog.require('modular_roleplaying_framework.views');
goog.require('modular_roleplaying_framework.db_CRUD');
goog.require('modular_roleplaying_framework.db');
modular_roleplaying_framework.main.app = (function modular_roleplaying_framework$main$app(){
return kee_frame.core.switch_route.cljs$core$IFn$_invoke$arity$variadic((function (route){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [modular_roleplaying_framework.views.main_menu], null),new cljs.core.Keyword(null,"system","system",-29381724),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [modular_roleplaying_framework.views.system_menu], null),null,"PAGE NOT FOUND"], 0));
});
modular_roleplaying_framework.main.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"home","home",-74557309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:section-one-title/:section-one-id/:section-one-tab/:section-one-item/:section-two-title/:section-two-id/:section-two-tab/:section-two-item/:section-three-title/:section-three-id/:section-three-tab/:section-three-item/:layout",new cljs.core.Keyword(null,"system","system",-29381724)], null)], null);
modular_roleplaying_framework.main.initial_db = modular_roleplaying_framework.db.prototype_data;
modular_roleplaying_framework.main.main_BANG_ = (function modular_roleplaying_framework$main$main_BANG_(){
return kee_frame.core.start_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"routes","routes",457900162),modular_roleplaying_framework.main.routes,new cljs.core.Keyword(null,"initial-db","initial-db",1939835102),modular_roleplaying_framework.main.initial_db,new cljs.core.Keyword(null,"root-component","root-component",-1807026475),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [modular_roleplaying_framework.main.app], null)], null));
});

//# sourceMappingURL=modular_roleplaying_framework.main.js.map
