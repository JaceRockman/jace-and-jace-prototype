goog.provide('modular_roleplaying_framework.db_CRUD');
modular_roleplaying_framework.db_CRUD._GT_evt = re_frame.core.dispatch;
modular_roleplaying_framework.db_CRUD._LT_sub = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,re_frame.core.subscribe);
/**
 * Dissociate a value in a nested assocative structure, identified by a sequence
 *   of keys. Any collections left empty by the operation will be dissociated from
 *   their containing structures.
 */
modular_roleplaying_framework.db_CRUD.dissoc_in = (function modular_roleplaying_framework$db_CRUD$dissoc_in(m,ks){
var temp__5751__auto__ = cljs.core.seq(ks);
if(temp__5751__auto__){
var vec__41314 = temp__5751__auto__;
var seq__41315 = cljs.core.seq(vec__41314);
var first__41316 = cljs.core.first(seq__41315);
var seq__41315__$1 = cljs.core.next(seq__41315);
var k = first__41316;
var ks__$1 = seq__41315__$1;
if(cljs.core.seq(ks__$1)){
var v = (function (){var G__41317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__41318 = ks__$1;
return (modular_roleplaying_framework.db_CRUD.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? modular_roleplaying_framework.db_CRUD.dissoc_in.cljs$core$IFn$_invoke$arity$2(G__41317,G__41318) : modular_roleplaying_framework.db_CRUD.dissoc_in.call(null,G__41317,G__41318));
})();
if(cljs.core.empty_QMARK_(v)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
});
modular_roleplaying_framework.db_CRUD.exsert = (function modular_roleplaying_framework$db_CRUD$exsert(v,i){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((i + (1)),v),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(((2) + i),v)));
});
modular_roleplaying_framework.db_CRUD.insert = (function modular_roleplaying_framework$db_CRUD$insert(v,i,e){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take.cljs$core$IFn$_invoke$arity$2((i + (1)),v),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2((i + (1)),v)], 0)));
});
modular_roleplaying_framework.db_CRUD.insertv = (function modular_roleplaying_framework$db_CRUD$insertv(v,i,e){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take.cljs$core$IFn$_invoke$arity$2((i + (1)),v),e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2((i + (1)),v)], 0)));
});
modular_roleplaying_framework.db_CRUD.url_friendly = (function modular_roleplaying_framework$db_CRUD$url_friendly(string){
return clojure.string.replace(string,/ /,"-");
});
modular_roleplaying_framework.db_CRUD.system_fsm = (function modular_roleplaying_framework$db_CRUD$system_fsm(ruleset_id,world_id,adventure_id,main_section,layout){
return null;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-system","initialize-system",-1223784141),(function (p__41319,p__41320){
var map__41321 = p__41319;
var map__41321__$1 = cljs.core.__destructure_map(map__41321);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41321__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41322 = p__41320;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41322,(0),null);
var section_one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41322,(1),null);
var section_two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41322,(2),null);
var section_three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41322,(3),null);
var layout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41322,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section_two),(0)),(0),modular_roleplaying_framework.db_CRUD.url_friendly(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section_two)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section_two),(0),layout,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section_one),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section_three),(0)),modular_roleplaying_framework.db_CRUD.url_friendly(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section_three)),modular_roleplaying_framework.db_CRUD.url_friendly(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section_one)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section_one),(0)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-layout","toggle-layout",-241410907),(function (p__41325,_){
var map__41326 = p__41325;
var map__41326__$1 = cljs.core.__destructure_map(map__41326);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41326__$1,new cljs.core.Keyword(null,"db","db",993250759));
var system_state = new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db);
var map__41327 = system_state;
var map__41327__$1 = cljs.core.__destructure_map(map__41327);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41327__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41327__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41327__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41327__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout,"book-layout"))?"pages-layout":"book-layout"),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reorder-sections","reorder-sections",208296526),(function (p__41328,p__41329){
var map__41330 = p__41328;
var map__41330__$1 = cljs.core.__destructure_map(map__41330);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41330__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41331 = p__41329;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41331,(0),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41331,(1),null);
var section_one = modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section","state-section",-1039543225),"section-one"], null));
var section_two = modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section","state-section",-1039543225),"section-two"], null));
var section_three = modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section","state-section",-1039543225),"section-three"], null));
var layout = modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921)], null));
var G__41334 = direction;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("forward",G__41334)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_three)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_one)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_two))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("backward",G__41334)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_two)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_three)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_one))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),G__41334)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Unrecognized direction when reordering sections."], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41334)].join('')));

}
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"section-select","section-select",-1432207285),(function (p__41335,p__41336){
var map__41337 = p__41335;
var map__41337__$1 = cljs.core.__destructure_map(map__41337);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41337__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41338 = p__41336;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41338,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41338,(1),null);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41338,(2),null);
var system_state = cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-title","section-title",1261938902)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section),(0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-tab-parent","item-tab-parent",-1109190767)], null),null);
var map__41341 = system_state;
var map__41341__$1 = cljs.core.__destructure_map(map__41341);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41341__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41341__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41341__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41341__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tab-select","tab-select",1957789174),(function (p__41342,p__41343){
var map__41344 = p__41342;
var map__41344__$1 = cljs.core.__destructure_map(map__41344);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41344__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41345 = p__41343;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41345,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41345,(1),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41345,(2),null);
var system_state = cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null),tab_id);
var map__41348 = system_state;
var map__41348__$1 = cljs.core.__destructure_map(map__41348);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41348__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41348__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41348__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41348__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"item-select","item-select",-1822277284),(function (p__41349,p__41350){
var map__41351 = p__41349;
var map__41351__$1 = cljs.core.__destructure_map(map__41351);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41351__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41352 = p__41350;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41352,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41352,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41352,(2),null);
var system_state = cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),item_id);
var map__41355 = system_state;
var map__41355__$1 = cljs.core.__destructure_map(map__41355);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41355__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41355__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41355__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41355__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null)))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"item-tab-select","item-tab-select",-183749023),(function (p__41356,p__41357){
var map__41358 = p__41356;
var map__41358__$1 = cljs.core.__destructure_map(map__41358);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41358__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41359 = p__41357;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41359,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41359,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41359,(2),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41359,(3),null);
var system_state = cljs.core.assoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),item_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null),tab_id);
var map__41362 = system_state;
var map__41362__$1 = cljs.core.__destructure_map(map__41362);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41362__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41362__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41362__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41362__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null)))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),(function (p__41363,p__41364){
var map__41365 = p__41363;
var map__41365__$1 = cljs.core.__destructure_map(map__41365);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41365__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41366 = p__41364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41366,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41366,(1),null);
var system_state = cljs.core.assoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),null);
var map__41369 = system_state;
var map__41369__$1 = cljs.core.__destructure_map(map__41369);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41369__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41369__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41369__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41369__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null)))], null);
}));
kee_frame.core.reg_controller(new cljs.core.Keyword(null,"system-change","system-change",-2058310733),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),(function (route_data){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route_data)),new cljs.core.Keyword(null,"system","system",-29381724))){
var section_one_title = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767)], null));
var section_one_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656)], null));
var section_one_tab = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187)], null));
var section_one_item = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)], null));
var section_two_title = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701)], null));
var section_two_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701)], null));
var section_two_tab = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550)], null));
var section_two_item = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076)], null));
var section_three_title = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221)], null));
var section_three_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891)], null));
var section_three_tab = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660)], null));
var section_three_item = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901)], null));
var layout = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null));
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [section_one_title,(section_one_id | (0)),(section_one_tab | (0)),(section_one_item | (0)),section_two_title,(section_two_id | (0)),(section_two_tab | (0)),(section_two_item | (0)),section_three_title,(section_three_id | (0)),(section_three_tab | (0)),(section_three_item | (0)),layout], null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-system-state","update-system-state",-69675065)], null)], null));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-system-state","update-system-state",-69675065),(function (p__41370,p__41371){
var map__41372 = p__41370;
var map__41372__$1 = cljs.core.__destructure_map(map__41372);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41372__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41373 = p__41371;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41373,(0),null);
var vec__41376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41373,(1),null);
var section_one_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41376,(0),null);
var section_one_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41376,(1),null);
var section_one_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41376,(2),null);
var section_one_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41376,(3),null);
var section_two_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41376,(4),null);
var section_two_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41376,(5),null);
var section_two_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41376,(6),null);
var section_two_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41376,(7),null);
var section_three_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41376,(8),null);
var section_three_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41376,(9),null);
var section_three_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41376,(10),null);
var section_three_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41376,(11),null);
var layout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41376,(12),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section-title","section-title",1261938902),section_one_title,new cljs.core.Keyword(null,"section-id","section-id",-1780104220),section_one_id,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778),section_one_tab,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),section_one_item], null)], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section-title","section-title",1261938902),section_two_title,new cljs.core.Keyword(null,"section-id","section-id",-1780104220),section_two_id,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778),section_two_tab,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),section_two_item], null)], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section-title","section-title",1261938902),section_three_title,new cljs.core.Keyword(null,"section-id","section-id",-1780104220),section_three_id,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778),section_three_tab,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),section_three_item], null)], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),layout),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"initialized?","initialized?",1707939066)], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-active-item","select-active-item",384984244),(function (db,p__41379){
var vec__41380 = p__41379;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41380,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41380,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41380,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null)),(item_id | (0)))){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),null);
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),(item_id | (0)));
}
}));
var G__41383_42530 = new cljs.core.Keyword(null,"system-state","system-state",509607631);
var G__41384_42531 = (function (db){
return new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41383_42530,G__41384_42531) : re_frame.core.reg_sub.call(null,G__41383_42530,G__41384_42531));
var G__41385_42533 = new cljs.core.Keyword(null,"overlay-state","overlay-state",95491678);
var G__41386_42534 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-state","overlay-state",95491678)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41385_42533,G__41386_42534) : re_frame.core.reg_sub.call(null,G__41385_42533,G__41386_42534));
var G__41387_42536 = new cljs.core.Keyword(null,"overlay-item","overlay-item",1921913766);
var G__41388_42537 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-item","overlay-item",1921913766)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41387_42536,G__41388_42537) : re_frame.core.reg_sub.call(null,G__41387_42536,G__41388_42537));
var G__41389_42538 = new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523);
var G__41390_42539 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41389_42538,G__41390_42539) : re_frame.core.reg_sub.call(null,G__41389_42538,G__41390_42539));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-state-change","overlay-state-change",1441777589),(function (db,p__41391){
var vec__41392 = p__41391;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41392,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41392,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-state","overlay-state",95491678)], null),state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-item-change","overlay-item-change",-1911220370),(function (db,p__41395){
var vec__41396 = p__41395;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41396,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41396,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-item","overlay-item",1921913766)], null),item_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-params-change","overlay-params-change",171897048),(function (db,p__41399){
var vec__41400 = p__41399;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41400,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41400,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523)], null),params);
}));
var G__41403_42543 = new cljs.core.Keyword(null,"initialized?","initialized?",1707939066);
var G__41404_42544 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"initialized?","initialized?",1707939066)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41403_42543,G__41404_42544) : re_frame.core.reg_sub.call(null,G__41403_42543,G__41404_42544));
var G__41405_42546 = new cljs.core.Keyword(null,"state-section","state-section",-1039543225);
var G__41406_42547 = (function (db,p__41407){
var vec__41408 = p__41407;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41408,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41408,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41405_42546,G__41406_42547) : re_frame.core.reg_sub.call(null,G__41405_42546,G__41406_42547));
var G__41411_42549 = new cljs.core.Keyword(null,"state-section-id","state-section-id",210581770);
var G__41412_42550 = (function (db,p__41413){
var vec__41414 = p__41413;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41414,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41414,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41411_42549,G__41412_42550) : re_frame.core.reg_sub.call(null,G__41411_42549,G__41412_42550));
var G__41417_42551 = new cljs.core.Keyword(null,"state-section-ids","state-section-ids",1524494040);
var G__41418_42552 = (function (db,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null))], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41417_42551,G__41418_42552) : re_frame.core.reg_sub.call(null,G__41417_42551,G__41418_42552));
var G__41419_42553 = new cljs.core.Keyword(null,"state-section-tab","state-section-tab",1111796390);
var G__41420_42554 = (function (db,p__41421){
var vec__41422 = p__41421;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41422,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41422,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41419_42553,G__41420_42554) : re_frame.core.reg_sub.call(null,G__41419_42553,G__41420_42554));
var G__41425_42555 = new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226);
var G__41426_42556 = (function (db,p__41427){
var vec__41428 = p__41427;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41428,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41428,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41425_42555,G__41426_42556) : re_frame.core.reg_sub.call(null,G__41425_42555,G__41426_42556));
var G__41431_42557 = new cljs.core.Keyword(null,"layout","layout",-2120940921);
var G__41432_42558 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41431_42557,G__41432_42558) : re_frame.core.reg_sub.call(null,G__41431_42557,G__41432_42558));
var G__41433_42559 = new cljs.core.Keyword(null,"section","section",-300141526);
var G__41434_42560 = (function (db,p__41435){
var vec__41436 = p__41435;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41436,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41436,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41433_42559,G__41434_42560) : re_frame.core.reg_sub.call(null,G__41433_42559,G__41434_42560));
var G__41439_42561 = new cljs.core.Keyword(null,"section-type","section-type",-1815294838);
var G__41440_42562 = (function (db,p__41441){
var vec__41442 = p__41441;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41442,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41442,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"type","type",1174270348)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41439_42561,G__41440_42562) : re_frame.core.reg_sub.call(null,G__41439_42561,G__41440_42562));
var G__41445_42563 = new cljs.core.Keyword(null,"section-title","section-title",1261938902);
var G__41446_42564 = (function (db,p__41447){
var vec__41448 = p__41447;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41448,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41448,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41445_42563,G__41446_42564) : re_frame.core.reg_sub.call(null,G__41445_42563,G__41446_42564));
var G__41451_42565 = new cljs.core.Keyword(null,"section-tabs","section-tabs",1270711059);
var G__41452_42566 = (function (db,p__41453){
var vec__41454 = p__41453;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41454,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41454,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41451_42565,G__41452_42566) : re_frame.core.reg_sub.call(null,G__41451_42565,G__41452_42566));
var G__41457_42569 = new cljs.core.Keyword(null,"ruleset-skillbilities?","ruleset-skillbilities?",-1360174223);
var G__41458_42570 = (function (db,p__41459){
var vec__41460 = p__41459;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41460,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41460,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"skillbilities?","skillbilities?",788972706)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41457_42569,G__41458_42570) : re_frame.core.reg_sub.call(null,G__41457_42569,G__41458_42570));
var G__41463_42571 = new cljs.core.Keyword(null,"ruleset-skills","ruleset-skills",-1459168412);
var G__41464_42572 = (function (db,p__41465){
var vec__41466 = p__41465;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41466,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41466,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"skills","skills",958701426)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41463_42571,G__41464_42572) : re_frame.core.reg_sub.call(null,G__41463_42571,G__41464_42572));
var G__41469_42573 = new cljs.core.Keyword(null,"ruleset-abilities","ruleset-abilities",1582837328);
var G__41470_42574 = (function (db,p__41471){
var vec__41472 = p__41471;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41472,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41472,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"abilities","abilities",-1471386226)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41469_42573,G__41470_42574) : re_frame.core.reg_sub.call(null,G__41469_42573,G__41470_42574));
var G__41476_42575 = new cljs.core.Keyword(null,"section-tabs-full","section-tabs-full",300098194);
var G__41477_42576 = (function (db,p__41478){
var vec__41479 = p__41478;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41479,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41479,(1),null);
var section_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41479,(2),null);
var item_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
var section_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null));
var tabs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null));
var subtabs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"subtabs","subtabs",627577425)], null))));
if((item_id == null)){
return tabs;
} else {
return modular_roleplaying_framework.db_CRUD.insertv(tabs,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41475_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__41475_SHARP_),cljs.core.first(subtabs));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tabs))),cljs.core.rest(subtabs));
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41476_42575,G__41477_42576) : re_frame.core.reg_sub.call(null,G__41476_42575,G__41477_42576));
var G__41482_42577 = new cljs.core.Keyword(null,"active-tab","active-tab",1102432568);
var G__41483_42578 = (function (db,p__41484){
var vec__41485 = p__41484;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41485,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41485,(1),null);
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null)) | (0));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41482_42577,G__41483_42578) : re_frame.core.reg_sub.call(null,G__41482_42577,G__41483_42578));
var G__41488_42579 = new cljs.core.Keyword(null,"tab-icon","tab-icon",-601622304);
var G__41489_42580 = (function (db,p__41490){
var vec__41491 = p__41490;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41491,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41491,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"icon","icon",1679606541)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41488_42579,G__41489_42580) : re_frame.core.reg_sub.call(null,G__41488_42579,G__41489_42580));
var G__41494_42581 = new cljs.core.Keyword(null,"tab-type","tab-type",-913444495);
var G__41495_42582 = (function (db,p__41496){
var vec__41497 = p__41496;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41497,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41497,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"type","type",1174270348)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41494_42581,G__41495_42582) : re_frame.core.reg_sub.call(null,G__41494_42581,G__41495_42582));
var G__41500_42584 = new cljs.core.Keyword(null,"tab-title","tab-title",1398279061);
var G__41501_42585 = (function (db,p__41502){
var vec__41503 = p__41502;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41503,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41503,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41500_42584,G__41501_42585) : re_frame.core.reg_sub.call(null,G__41500_42584,G__41501_42585));
var G__41506_42586 = new cljs.core.Keyword(null,"tab-template","tab-template",-1557753771);
var G__41507_42587 = (function (db,p__41508){
var vec__41509 = p__41508;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41509,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41509,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"template","template",-702405684)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41506_42586,G__41507_42587) : re_frame.core.reg_sub.call(null,G__41506_42586,G__41507_42587));
var G__41512_42588 = new cljs.core.Keyword(null,"tab-items","tab-items",1934951825);
var G__41513_42589 = (function (db,p__41514){
var vec__41515 = p__41514;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41515,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41515,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"items","items",1031954938)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41512_42588,G__41513_42589) : re_frame.core.reg_sub.call(null,G__41512_42588,G__41513_42589));
var G__41518_42590 = new cljs.core.Keyword(null,"item","item",249373802);
var G__41519_42591 = (function (db,p__41520){
var vec__41521 = p__41520;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41521,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41521,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41518_42590,G__41519_42591) : re_frame.core.reg_sub.call(null,G__41518_42590,G__41519_42591));
var G__41524_42593 = new cljs.core.Keyword(null,"item-title","item-title",-249793661);
var G__41525_42594 = (function (db,p__41526){
var vec__41527 = p__41526;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41527,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41527,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41524_42593,G__41525_42594) : re_frame.core.reg_sub.call(null,G__41524_42593,G__41525_42594));
var G__41530_42595 = new cljs.core.Keyword(null,"item-type","item-type",-73995695);
var G__41531_42596 = (function (db,p__41532){
var vec__41533 = p__41532;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41533,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41533,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"type","type",1174270348)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41530_42595,G__41531_42596) : re_frame.core.reg_sub.call(null,G__41530_42595,G__41531_42596));
var G__41536_42597 = new cljs.core.Keyword(null,"item-details","item-details",-987623935);
var G__41537_42598 = (function (db,p__41538){
var vec__41539 = p__41538;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41539,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41539,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41536_42597,G__41537_42598) : re_frame.core.reg_sub.call(null,G__41536_42597,G__41537_42598));
var G__41542_42601 = new cljs.core.Keyword(null,"item-text","item-text",-2146003655);
var G__41543_42602 = (function (db,p__41544){
var vec__41545 = p__41544;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41545,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41545,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41542_42601,G__41543_42602) : re_frame.core.reg_sub.call(null,G__41542_42601,G__41543_42602));
var G__41548_42603 = new cljs.core.Keyword(null,"item-subtabs","item-subtabs",-894115020);
var G__41549_42604 = (function (db,p__41550){
var vec__41551 = p__41550;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41551,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41551,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"subtabs","subtabs",627577425)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41548_42603,G__41549_42604) : re_frame.core.reg_sub.call(null,G__41548_42603,G__41549_42604));
var G__41554_42605 = new cljs.core.Keyword(null,"ruleset-skills","ruleset-skills",-1459168412);
var G__41555_42606 = (function (db,p__41556){
var vec__41557 = p__41556;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41557,(0),null);
var ruleset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41557,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),ruleset_id,new cljs.core.Keyword(null,"skills","skills",958701426)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41554_42605,G__41555_42606) : re_frame.core.reg_sub.call(null,G__41554_42605,G__41555_42606));
var G__41560_42607 = new cljs.core.Keyword(null,"ruleset-skillbilities","ruleset-skillbilities",2131758022);
var G__41561_42608 = (function (db,p__41562){
var vec__41563 = p__41562;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41563,(0),null);
var ruleset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41563,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),ruleset_id,new cljs.core.Keyword(null,"skillbilities?","skillbilities?",788972706)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41560_42607,G__41561_42608) : re_frame.core.reg_sub.call(null,G__41560_42607,G__41561_42608));
var G__41566_42609 = new cljs.core.Keyword(null,"item-password","item-password",501455667);
var G__41567_42610 = (function (db,p__41568){
var vec__41569 = p__41568;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41569,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41569,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"password","password",417022471)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41566_42609,G__41567_42610) : re_frame.core.reg_sub.call(null,G__41566_42609,G__41567_42610));
var G__41572_42611 = new cljs.core.Keyword(null,"unlock-creature","unlock-creature",1380788176);
var G__41573_42612 = (function (db,p__41574){
var vec__41575 = p__41574;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41575,(0),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41575,(1),null);
var creature_id = cljs.core.filterv((function (item_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"password","password",417022471)], null)),password);
}),cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null))));
if((creature_id == null)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Password does not correspond with a creature."], 0));
} else {
return creature_id;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41572_42611,G__41573_42612) : re_frame.core.reg_sub.call(null,G__41572_42611,G__41573_42612));
var G__41578_42613 = new cljs.core.Keyword(null,"creature-title","creature-title",-418581929);
var G__41579_42614 = (function (db,p__41580){
var vec__41581 = p__41580;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41581,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41581,(1),null);
var character = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id], null));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(character)),", the ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"heritage","heritage",-1161447356).cljs$core$IFn$_invoke$arity$1(character))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(character))].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41578_42613,G__41579_42614) : re_frame.core.reg_sub.call(null,G__41578_42613,G__41579_42614));
var G__41584_42615 = new cljs.core.Keyword(null,"creature-summary","creature-summary",2046084639);
var G__41585_42616 = (function (db,p__41586){
var vec__41587 = p__41586;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41587,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41587,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary","summary",380847952)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41584_42615,G__41585_42616) : re_frame.core.reg_sub.call(null,G__41584_42615,G__41585_42616));
var G__41590_42617 = new cljs.core.Keyword(null,"creature-summary-state","creature-summary-state",-780207604);
var G__41591_42618 = (function (db,p__41592){
var vec__41593 = p__41592;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41593,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41593,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary-state","summary-state",163086774)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41590_42617,G__41591_42618) : re_frame.core.reg_sub.call(null,G__41590_42617,G__41591_42618));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-summary-state-change","creature-summary-state-change",714628401),(function (db,p__41596){
var vec__41597 = p__41596;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41597,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41597,(1),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41597,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary-state","summary-state",163086774)], null),new_state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-summary-update","creature-summary-update",99922919),(function (db,p__41600){
var vec__41601 = p__41600;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41601,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41601,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41601,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary","summary",380847952)], null),changes);
}));
var G__41604_42619 = new cljs.core.Keyword(null,"creature-stats","creature-stats",961451436);
var G__41605_42620 = (function (db,p__41606){
var vec__41607 = p__41606;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41607,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41607,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41604_42619,G__41605_42620) : re_frame.core.reg_sub.call(null,G__41604_42619,G__41605_42620));
var G__41610_42622 = new cljs.core.Keyword(null,"coordination","coordination",1076145876);
var G__41611_42623 = (function (db,p__41612){
var vec__41613 = p__41612;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41613,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41613,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41610_42622,G__41611_42623) : re_frame.core.reg_sub.call(null,G__41610_42622,G__41611_42623));
var G__41616_42624 = new cljs.core.Keyword(null,"reflexes","reflexes",-1252736336);
var G__41617_42625 = (function (db,p__41618){
var vec__41619 = p__41618;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41619,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41619,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41616_42624,G__41617_42625) : re_frame.core.reg_sub.call(null,G__41616_42624,G__41617_42625));
var G__41622_42626 = new cljs.core.Keyword(null,"endurance","endurance",2002692038);
var G__41623_42627 = (function (db,p__41624){
var vec__41625 = p__41624;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41625,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41625,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41622_42626,G__41623_42627) : re_frame.core.reg_sub.call(null,G__41622_42626,G__41623_42627));
var G__41628_42630 = new cljs.core.Keyword(null,"exertion","exertion",-1240242361);
var G__41629_42631 = (function (db,p__41630){
var vec__41631 = p__41630;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41631,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41631,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41628_42630,G__41629_42631) : re_frame.core.reg_sub.call(null,G__41628_42630,G__41629_42631));
var G__41634_42632 = new cljs.core.Keyword(null,"instinct","instinct",2090002619);
var G__41635_42633 = (function (db,p__41636){
var vec__41637 = p__41636;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41637,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41637,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41634_42632,G__41635_42633) : re_frame.core.reg_sub.call(null,G__41634_42632,G__41635_42633));
var G__41640_42634 = new cljs.core.Keyword(null,"perseverance","perseverance",-470288293);
var G__41641_42635 = (function (db,p__41642){
var vec__41643 = p__41642;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41643,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41643,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41640_42634,G__41641_42635) : re_frame.core.reg_sub.call(null,G__41640_42634,G__41641_42635));
var G__41646_42636 = new cljs.core.Keyword(null,"concentration","concentration",1539606986);
var G__41647_42637 = (function (db,p__41648){
var vec__41649 = p__41648;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41649,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41649,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41646_42636,G__41647_42637) : re_frame.core.reg_sub.call(null,G__41646_42636,G__41647_42637));
var G__41652_42638 = new cljs.core.Keyword(null,"recognition","recognition",1793959531);
var G__41653_42639 = (function (db,p__41654){
var vec__41655 = p__41654;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41655,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41655,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41652_42638,G__41653_42639) : re_frame.core.reg_sub.call(null,G__41652_42638,G__41653_42639));
var G__41658_42640 = new cljs.core.Keyword(null,"comprehension","comprehension",-756656463);
var G__41659_42641 = (function (db,p__41660){
var vec__41661 = p__41660;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41661,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41661,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41658_42640,G__41659_42641) : re_frame.core.reg_sub.call(null,G__41658_42640,G__41659_42641));
var G__41664_42642 = new cljs.core.Keyword(null,"persuasion","persuasion",1089798916);
var G__41665_42643 = (function (db,p__41666){
var vec__41667 = p__41666;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41667,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41667,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41664_42642,G__41665_42643) : re_frame.core.reg_sub.call(null,G__41664_42642,G__41665_42643));
var G__41670_42644 = new cljs.core.Keyword(null,"insight","insight",-1501263459);
var G__41671_42645 = (function (db,p__41672){
var vec__41673 = p__41672;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41673,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41673,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41670_42644,G__41671_42645) : re_frame.core.reg_sub.call(null,G__41670_42644,G__41671_42645));
var G__41676_42647 = new cljs.core.Keyword(null,"connections","connections",-2064090887);
var G__41677_42648 = (function (db,p__41678){
var vec__41679 = p__41678;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41679,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41679,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41676_42647,G__41677_42648) : re_frame.core.reg_sub.call(null,G__41676_42647,G__41677_42648));
var G__41682_42651 = new cljs.core.Keyword(null,"might","might",-1328381368);
var G__41683_42652 = (function (db,p__41684){
var vec__41685 = p__41684;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41685,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41685,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41682_42651,G__41683_42652) : re_frame.core.reg_sub.call(null,G__41682_42651,G__41683_42652));
var G__41688_42653 = new cljs.core.Keyword(null,"finesse","finesse",891142453);
var G__41689_42654 = (function (db,p__41690){
var vec__41691 = p__41690;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41691,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41691,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41688_42653,G__41689_42654) : re_frame.core.reg_sub.call(null,G__41688_42653,G__41689_42654));
var G__41694_42655 = new cljs.core.Keyword(null,"fortitude","fortitude",1187352341);
var G__41695_42656 = (function (db,p__41696){
var vec__41697 = p__41696;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41697,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41697,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41694_42655,G__41695_42656) : re_frame.core.reg_sub.call(null,G__41694_42655,G__41695_42656));
var G__41700_42657 = new cljs.core.Keyword(null,"ambition","ambition",-153662933);
var G__41701_42658 = (function (db,p__41702){
var vec__41703 = p__41702;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41703,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41703,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41700_42657,G__41701_42658) : re_frame.core.reg_sub.call(null,G__41700_42657,G__41701_42658));
var G__41706_42659 = new cljs.core.Keyword(null,"discipline","discipline",343863089);
var G__41707_42660 = (function (db,p__41708){
var vec__41709 = p__41708;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41709,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41709,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41706_42659,G__41707_42660) : re_frame.core.reg_sub.call(null,G__41706_42659,G__41707_42660));
var G__41712_42661 = new cljs.core.Keyword(null,"dedication","dedication",2052444551);
var G__41713_42662 = (function (db,p__41714){
var vec__41715 = p__41714;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41715,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41715,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41712_42661,G__41713_42662) : re_frame.core.reg_sub.call(null,G__41712_42661,G__41713_42662));
var G__41718_42663 = new cljs.core.Keyword(null,"intellect","intellect",414822757);
var G__41719_42664 = (function (db,p__41720){
var vec__41721 = p__41720;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41721,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41721,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41718_42663,G__41719_42664) : re_frame.core.reg_sub.call(null,G__41718_42663,G__41719_42664));
var G__41724_42665 = new cljs.core.Keyword(null,"intuition","intuition",1122677380);
var G__41725_42666 = (function (db,p__41726){
var vec__41727 = p__41726;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41727,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41727,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41724_42665,G__41725_42666) : re_frame.core.reg_sub.call(null,G__41724_42665,G__41725_42666));
var G__41730_42667 = new cljs.core.Keyword(null,"stability","stability",1733225509);
var G__41731_42668 = (function (db,p__41732){
var vec__41733 = p__41732;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41733,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41733,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41730_42667,G__41731_42668) : re_frame.core.reg_sub.call(null,G__41730_42667,G__41731_42668));
var G__41736_42669 = new cljs.core.Keyword(null,"presence","presence",-1580756953);
var G__41737_42670 = (function (db,p__41738){
var vec__41739 = p__41738;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41739,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41739,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41736_42669,G__41737_42670) : re_frame.core.reg_sub.call(null,G__41736_42669,G__41737_42670));
var G__41742_42671 = new cljs.core.Keyword(null,"wit","wit",-1627445195);
var G__41743_42672 = (function (db,p__41744){
var vec__41745 = p__41744;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41745,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41745,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41742_42671,G__41743_42672) : re_frame.core.reg_sub.call(null,G__41742_42671,G__41743_42672));
var G__41748_42673 = new cljs.core.Keyword(null,"poise","poise",-429377896);
var G__41749_42674 = (function (db,p__41750){
var vec__41751 = p__41750;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41751,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41751,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41748_42673,G__41749_42674) : re_frame.core.reg_sub.call(null,G__41748_42673,G__41749_42674));
var G__41754_42675 = new cljs.core.Keyword(null,"creature-resources","creature-resources",495041557);
var G__41755_42676 = (function (db,p__41756){
var vec__41757 = p__41756;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41757,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41757,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41754_42675,G__41755_42676) : re_frame.core.reg_sub.call(null,G__41754_42675,G__41755_42676));
var G__41760_42678 = new cljs.core.Keyword(null,"creature-resources-typed","creature-resources-typed",728372146);
var G__41761_42679 = (function (db,p__41762){
var vec__41763 = p__41762;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41763,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41763,(1),null);
var resource_subtype_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41763,(2),null);
return cljs.core.filterv((function (resource_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"subtype","subtype",-2092672993)], null)),resource_subtype_id);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41760_42678,G__41761_42679) : re_frame.core.reg_sub.call(null,G__41760_42678,G__41761_42679));
var G__41766_42681 = new cljs.core.Keyword(null,"creature-resources-typed-quantified","creature-resources-typed-quantified",-1136110511);
var G__41767_42682 = (function (db,p__41768){
var vec__41769 = p__41768;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41769,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41769,(1),null);
var resource_subtype_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41769,(2),null);
return cljs.core.frequencies(modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-resources-typed","creature-resources-typed",728372146),creature_id,resource_subtype_id], null)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41766_42681,G__41767_42682) : re_frame.core.reg_sub.call(null,G__41766_42681,G__41767_42682));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-add-resource","creature-add-resource",409356036),(function (db,p__41772){
var vec__41773 = p__41772;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41773,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41773,(1),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41773,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null),cljs.core.conj,resource_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-remove-resource","creature-remove-resource",-1835624647),(function (db,p__41776){
var vec__41777 = p__41776;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41777,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41777,(1),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41777,(2),null);
var resource_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
var index = (0);
while(true){
if((index >= cljs.core.count(resource_list))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Resource not found."], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resource_id,(resource_list.cljs$core$IFn$_invoke$arity$1 ? resource_list.cljs$core$IFn$_invoke$arity$1(index) : resource_list.call(null,index)))){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null),modular_roleplaying_framework.db_CRUD.exsert(resource_list,(index - (1))));
} else {
var G__42684 = resource_list;
var G__42685 = (index + (1));
resource_list = G__42684;
index = G__42685;
continue;
}
}
break;
}
}));
var G__41780_42686 = new cljs.core.Keyword(null,"creature-feature-list","creature-feature-list",225155610);
var G__41781_42687 = (function (db,p__41782){
var vec__41783 = p__41782;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41783,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41783,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41780_42686,G__41781_42687) : re_frame.core.reg_sub.call(null,G__41780_42686,G__41781_42687));
var G__41786_42688 = new cljs.core.Keyword(null,"creature-notes","creature-notes",-2029123219);
var G__41787_42689 = (function (db,p__41788){
var vec__41789 = p__41788;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41789,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41789,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41786_42688,G__41787_42689) : re_frame.core.reg_sub.call(null,G__41786_42688,G__41787_42689));
var G__41792_42690 = new cljs.core.Keyword(null,"creature-notes-state","creature-notes-state",-471696466);
var G__41793_42691 = (function (db,p__41794){
var vec__41795 = p__41794;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41795,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41795,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes-state","notes-state",-1025022243)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41792_42690,G__41793_42691) : re_frame.core.reg_sub.call(null,G__41792_42690,G__41793_42691));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-notes-state-change","creature-notes-state-change",-1510434125),(function (db,p__41798){
var vec__41799 = p__41798;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41799,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41799,(1),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41799,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes-state","notes-state",-1025022243)], null),new_state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-notes-update","creature-notes-update",-350278924),(function (db,p__41802){
var vec__41803 = p__41802;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41803,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41803,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41803,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes","notes",-1039600523)], null),changes);
}));
var G__41806_42694 = new cljs.core.Keyword(null,"resource-title","resource-title",904657571);
var G__41807_42695 = (function (db,p__41808){
var vec__41809 = p__41808;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41809,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41809,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41806_42694,G__41807_42695) : re_frame.core.reg_sub.call(null,G__41806_42694,G__41807_42695));
var G__41812_42696 = new cljs.core.Keyword(null,"resource-subtype","resource-subtype",1660664175);
var G__41813_42697 = (function (db,p__41814){
var vec__41815 = p__41814;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41815,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41815,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"subtype","subtype",-2092672993)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41812_42696,G__41813_42697) : re_frame.core.reg_sub.call(null,G__41812_42696,G__41813_42697));
var G__41818_42698 = new cljs.core.Keyword(null,"resource-properties","resource-properties",-677994762);
var G__41819_42699 = (function (db,p__41820){
var vec__41821 = p__41820;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41821,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41821,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"properties","properties",685819552)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41818_42698,G__41819_42699) : re_frame.core.reg_sub.call(null,G__41818_42698,G__41819_42699));
var G__41824_42700 = new cljs.core.Keyword(null,"resource-quality","resource-quality",-1384712256);
var G__41825_42701 = (function (db,p__41826){
var vec__41827 = p__41826;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41827,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41827,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"benefits","benefits",20804277),new cljs.core.Keyword(null,"quality","quality",147850199)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41824_42700,G__41825_42701) : re_frame.core.reg_sub.call(null,G__41824_42700,G__41825_42701));
var G__41830_42702 = new cljs.core.Keyword(null,"resource-quality-bonus","resource-quality-bonus",496784380);
var G__41831_42703 = (function (db,p__41832){
var vec__41833 = p__41832;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41833,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41833,(1),null);
var quality_level = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"benefits","benefits",20804277),new cljs.core.Keyword(null,"quality","quality",147850199)], null));
if(((0) < quality_level)){
return ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quality_level),"d"].join('');
} else {
if(((0) > quality_level)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(quality_level),"d"].join('');
} else {
return "--";

}
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41830_42702,G__41831_42703) : re_frame.core.reg_sub.call(null,G__41830_42702,G__41831_42703));
var G__41836_42705 = new cljs.core.Keyword(null,"resource-power","resource-power",-283348905);
var G__41837_42706 = (function (db,p__41838){
var vec__41839 = p__41838;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41839,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41839,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"benefits","benefits",20804277),new cljs.core.Keyword(null,"power","power",-937852079)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41836_42705,G__41837_42706) : re_frame.core.reg_sub.call(null,G__41836_42705,G__41837_42706));
var G__41842_42708 = new cljs.core.Keyword(null,"resource-power-bonus","resource-power-bonus",669478217);
var G__41843_42709 = (function (db,p__41844){
var vec__41845 = p__41844;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41845,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41845,(1),null);
var power_level = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"benefits","benefits",20804277),new cljs.core.Keyword(null,"power","power",-937852079)], null));
if(((0) < power_level)){
return ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_level)].join('');
} else {
if(((0) > power_level)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_level);
} else {
return "--";

}
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41842_42708,G__41843_42709) : re_frame.core.reg_sub.call(null,G__41842_42708,G__41843_42709));
var G__41848_42710 = new cljs.core.Keyword(null,"resource-flavor-text","resource-flavor-text",429244330);
var G__41849_42711 = (function (db,p__41850){
var vec__41851 = p__41850;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41851,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41851,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"flavor-text","flavor-text",-227991981)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41848_42710,G__41849_42711) : re_frame.core.reg_sub.call(null,G__41848_42710,G__41849_42711));
var G__41854_42712 = new cljs.core.Keyword(null,"all-features","all-features",-969912234);
var G__41855_42713 = (function (db,_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__41856){
var vec__41857 = p__41856;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41857,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41857,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("feature",modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),k], null)));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"items","items",1031954938))));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41854_42712,G__41855_42713) : re_frame.core.reg_sub.call(null,G__41854_42712,G__41855_42713));
var G__41861_42714 = new cljs.core.Keyword(null,"features-by-property","features-by-property",-1888070616);
var G__41862_42715 = (function (db,p__41863){
var vec__41864 = p__41863;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41864,(0),null);
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41864,(1),null);
return cljs.core.filterv((function (feature){
return cljs.core.some((function (p1__41860_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property,p1__41860_SHARP_);
}),modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-keywords","feature-keywords",-513678207),feature], null)));
}),modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-features","all-features",-969912234)], null)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41861_42714,G__41862_42715) : re_frame.core.reg_sub.call(null,G__41861_42714,G__41862_42715));
var G__41867_42716 = new cljs.core.Keyword(null,"resource-features","resource-features",-1831876409);
var G__41868_42717 = (function (db,p__41869){
var vec__41870 = p__41869;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41870,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41870,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41867_42716,G__41868_42717) : re_frame.core.reg_sub.call(null,G__41867_42716,G__41868_42717));
var G__41874_42718 = new cljs.core.Keyword(null,"resource-feature-lookup","resource-feature-lookup",1465251014);
var G__41875_42719 = (function (db,p__41876){
var vec__41877 = p__41876;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41877,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41877,(1),null);
var resource_properties = modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-properties","resource-properties",-677994762),resource_id], null));
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__41873_SHARP_){
return modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features-by-property","features-by-property",-1888070616),p1__41873_SHARP_], null));
}),resource_properties))));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41874_42718,G__41875_42719) : re_frame.core.reg_sub.call(null,G__41874_42718,G__41875_42719));
var G__41880_42720 = new cljs.core.Keyword(null,"resource-list","resource-list",1498099584);
var G__41881_42721 = (function (db,_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__41882){
var vec__41883 = p__41882;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41883,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41883,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("resource",modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),k], null)));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"items","items",1031954938))));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41880_42720,G__41881_42721) : re_frame.core.reg_sub.call(null,G__41880_42720,G__41881_42721));
modular_roleplaying_framework.db_CRUD.melee_weapons = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sword","Spear","Axe"], null);
modular_roleplaying_framework.db_CRUD.matches_QMARK_ = (function modular_roleplaying_framework$db_CRUD$matches_QMARK_(coll1,coll2){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,coll1,coll2)));
});
var G__41886_42722 = new cljs.core.Keyword(null,"implement","implement",832506591);
var G__41887_42723 = (function (db,p__41888){
var vec__41889 = p__41888;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41889,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41889,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Modal Tool",new cljs.core.Keyword(null,"description","description",-1428560544),"These arcane gauntlets have two modes stored: the melee mode and the ranged mode. While in melee mode, the left gauntlet produces a shield of solid aethereal force with capabilities and restrictions equivalent to a kite shield while the right gauntlet produces a sharp aethereal blade with capabilities and restrictions equivalent to a longsword. While in ranged mode, the two gauntlets function together as a bow with capabilities and restrictions equivalent to a longbow. Changing from one mode to the other requires a setup action. Gain +Quality +Power on attacks with the Arcane Gauntlets as well as +Quality from your Aethereal Knowledge."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41886_42722,G__41887_42723) : re_frame.core.reg_sub.call(null,G__41886_42722,G__41887_42723));
var G__41892_42724 = new cljs.core.Keyword(null,"weapon-attack","weapon-attack",1268897249);
var G__41893_42725 = (function (db,p__41894){
var vec__41895 = p__41894;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41895,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41895,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__41898 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__41899 = properties;
if(cljs.core.truth_((function (){var G__41901 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bow"], null);
var G__41902 = expr__41899;
return (pred__41898.cljs$core$IFn$_invoke$arity$2 ? pred__41898.cljs$core$IFn$_invoke$arity$2(G__41901,G__41902) : pred__41898.call(null,G__41901,G__41902));
})())){
return "Ranged Attack";
} else {
if(cljs.core.truth_((pred__41898.cljs$core$IFn$_invoke$arity$2 ? pred__41898.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.db_CRUD.melee_weapons,expr__41899) : pred__41898.call(null,modular_roleplaying_framework.db_CRUD.melee_weapons,expr__41899)))){
return "Melee Attack";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__41899)].join('')));
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__41903 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__41904 = properties;
if(cljs.core.truth_((function (){var G__41906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bow"], null);
var G__41907 = expr__41904;
return (pred__41903.cljs$core$IFn$_invoke$arity$2 ? pred__41903.cljs$core$IFn$_invoke$arity$2(G__41906,G__41907) : pred__41903.call(null,G__41906,G__41907));
})())){
return ["You may spend a main action to make a Coordination +Quality +Power check against a creature. \n                   You must have the creature targeted and the creature must be within ten zones but cannot be within the same zone. ",(function (){var pred__41917 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__41918 = properties;
if(cljs.core.truth_((function (){var G__41920 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__41921 = expr__41918;
return (pred__41917.cljs$core$IFn$_invoke$arity$2 ? pred__41917.cljs$core$IFn$_invoke$arity$2(G__41920,G__41921) : pred__41917.call(null,G__41920,G__41921));
})())){
return "As a light bow, it can be wielded alongside a shield. When partitioning the base dice pool, the resulting dice pools must have at least two dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__41922 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__41923 = expr__41918;
return (pred__41917.cljs$core$IFn$_invoke$arity$2 ? pred__41917.cljs$core$IFn$_invoke$arity$2(G__41922,G__41923) : pred__41917.call(null,G__41922,G__41923));
})())){
return "As a medium bow, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least three dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__41924 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__41925 = expr__41918;
return (pred__41917.cljs$core$IFn$_invoke$arity$2 ? pred__41917.cljs$core$IFn$_invoke$arity$2(G__41924,G__41925) : pred__41917.call(null,G__41924,G__41925));
})())){
return "As a heavy bow, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least four dice in them. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__41918)].join('')));
}
}
}
})(),"This weapon deals piercing damage."].join('');
} else {
return ["You may spend a main action to make a Coordination +Quality +Power check against a creature. ",(function (){var pred__41949 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__41950 = properties;
if(cljs.core.truth_((function (){var G__41952 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sword","Spear","Axe"], null);
var G__41953 = expr__41950;
return (pred__41949.cljs$core$IFn$_invoke$arity$2 ? pred__41949.cljs$core$IFn$_invoke$arity$2(G__41952,G__41953) : pred__41949.call(null,G__41952,G__41953));
})())){
return "You must have the creature targeted and the creature must be in the same zone as you. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__41950)].join('')));
}
})(),(function (){var pred__41954 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__41955 = properties;
if(cljs.core.truth_((function (){var G__41957 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__41958 = expr__41955;
return (pred__41954.cljs$core$IFn$_invoke$arity$2 ? pred__41954.cljs$core$IFn$_invoke$arity$2(G__41957,G__41958) : pred__41954.call(null,G__41957,G__41958));
})())){
return "As a light weapon, it may be wielded in either hand. When partitioning the base dice pool, the resulting dice pools must have at least two dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__41959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__41960 = expr__41955;
return (pred__41954.cljs$core$IFn$_invoke$arity$2 ? pred__41954.cljs$core$IFn$_invoke$arity$2(G__41959,G__41960) : pred__41954.call(null,G__41959,G__41960));
})())){
return "As a medium weapon, it must be wielded in the dominant hand. When partitioning the base dice pool, the resulting dice pools must have at least three dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__41961 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__41962 = expr__41955;
return (pred__41954.cljs$core$IFn$_invoke$arity$2 ? pred__41954.cljs$core$IFn$_invoke$arity$2(G__41961,G__41962) : pred__41954.call(null,G__41961,G__41962));
})())){
return "As a heavy weapon, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least four dice in them. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__41955)].join('')));
}
}
}
})(),(function (){var pred__41963 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__41964 = properties;
if(cljs.core.truth_((function (){var G__41966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sword"], null);
var G__41967 = expr__41964;
return (pred__41963.cljs$core$IFn$_invoke$arity$2 ? pred__41963.cljs$core$IFn$_invoke$arity$2(G__41966,G__41967) : pred__41963.call(null,G__41966,G__41967));
})())){
return "This weapon may deal piercing or slashing damage.";
} else {
if(cljs.core.truth_((function (){var G__41968 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Spear"], null);
var G__41969 = expr__41964;
return (pred__41963.cljs$core$IFn$_invoke$arity$2 ? pred__41963.cljs$core$IFn$_invoke$arity$2(G__41968,G__41969) : pred__41963.call(null,G__41968,G__41969));
})())){
return "This weapon may deal piercing or bludgeoning damage.";
} else {
if(cljs.core.truth_((function (){var G__41970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Axe"], null);
var G__41971 = expr__41964;
return (pred__41963.cljs$core$IFn$_invoke$arity$2 ? pred__41963.cljs$core$IFn$_invoke$arity$2(G__41970,G__41971) : pred__41963.call(null,G__41970,G__41971));
})())){
return "This weapon may deal slashing or bludgeoning damage.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__41964)].join('')));
}
}
}
})()].join('');
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41892_42724,G__41893_42725) : re_frame.core.reg_sub.call(null,G__41892_42724,G__41893_42725));
var G__41972_42726 = new cljs.core.Keyword(null,"block-attack","block-attack",-1348539017);
var G__41973_42727 = (function (db,p__41974){
var vec__41975 = p__41974;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41975,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41975,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__41978 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__41979 = properties;
if(cljs.core.truth_((function (){var G__41981 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Shield"], null);
var G__41982 = expr__41979;
return (pred__41978.cljs$core$IFn$_invoke$arity$2 ? pred__41978.cljs$core$IFn$_invoke$arity$2(G__41981,G__41982) : pred__41978.call(null,G__41981,G__41982));
})())){
return "Shield Block";
} else {
if(cljs.core.truth_((function (){var G__41983 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Armor"], null);
var G__41984 = expr__41979;
return (pred__41978.cljs$core$IFn$_invoke$arity$2 ? pred__41978.cljs$core$IFn$_invoke$arity$2(G__41983,G__41984) : pred__41978.call(null,G__41983,G__41984));
})())){
return "Armored Defense";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__41979)].join('')));
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),["You may spend a main action to make a Reflexes +Quality +Power check to defend yourself against a creature's attack that targets you. \n         When partitioning the base dice pool while defending yourself against physical attacks, the resulting dice pools must have at least ",(function (){var pred__41994 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__41995 = properties;
if(cljs.core.truth_((function (){var G__41997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__41998 = expr__41995;
return (pred__41994.cljs$core$IFn$_invoke$arity$2 ? pred__41994.cljs$core$IFn$_invoke$arity$2(G__41997,G__41998) : pred__41994.call(null,G__41997,G__41998));
})())){
return "two ";
} else {
if(cljs.core.truth_((function (){var G__41999 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__42000 = expr__41995;
return (pred__41994.cljs$core$IFn$_invoke$arity$2 ? pred__41994.cljs$core$IFn$_invoke$arity$2(G__41999,G__42000) : pred__41994.call(null,G__41999,G__42000));
})())){
return "three ";
} else {
if(cljs.core.truth_((function (){var G__42001 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__42002 = expr__41995;
return (pred__41994.cljs$core$IFn$_invoke$arity$2 ? pred__41994.cljs$core$IFn$_invoke$arity$2(G__42001,G__42002) : pred__41994.call(null,G__42001,G__42002));
})())){
return "four ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__41995)].join('')));
}
}
}
})(),"dice in them. When multiple items contribute to a defense check, the partitioned dice pools must follow the size limitations of every item involved.",((modular_roleplaying_framework.db_CRUD.matches_QMARK_(properties,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Shield"], null)))?"As a shield, it can be wielded in either hand.":null)].join('')], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41972_42726,G__41973_42727) : re_frame.core.reg_sub.call(null,G__41972_42726,G__41973_42727));
var G__42003_42728 = new cljs.core.Keyword(null,"trait","trait",626034900);
var G__42004_42729 = (function (db,p__42005){
var vec__42006 = p__42005;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42006,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42006,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__42009 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__42010 = properties;
if(cljs.core.truth_((function (){var G__42012 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Flaw"], null);
var G__42013 = expr__42010;
return (pred__42009.cljs$core$IFn$_invoke$arity$2 ? pred__42009.cljs$core$IFn$_invoke$arity$2(G__42012,G__42013) : pred__42009.call(null,G__42012,G__42013));
})())){
return "Flaw";
} else {
if(cljs.core.truth_((function (){var G__42014 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ideal"], null);
var G__42015 = expr__42010;
return (pred__42009.cljs$core$IFn$_invoke$arity$2 ? pred__42009.cljs$core$IFn$_invoke$arity$2(G__42014,G__42015) : pred__42009.call(null,G__42014,G__42015));
})())){
return "Ideal";
} else {
if(cljs.core.truth_((function (){var G__42016 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attribute"], null);
var G__42017 = expr__42010;
return (pred__42009.cljs$core$IFn$_invoke$arity$2 ? pred__42009.cljs$core$IFn$_invoke$arity$2(G__42016,G__42017) : pred__42009.call(null,G__42016,G__42017));
})())){
return "Attribute";
} else {
if(cljs.core.truth_((function (){var G__42018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Goal"], null);
var G__42019 = expr__42010;
return (pred__42009.cljs$core$IFn$_invoke$arity$2 ? pred__42009.cljs$core$IFn$_invoke$arity$2(G__42018,G__42019) : pred__42009.call(null,G__42018,G__42019));
})())){
return "Goal";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__42010)].join('')));
}
}
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),["Grants +Quality +Power to checks that ",(function (){var pred__42031 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__42032 = properties;
if(cljs.core.truth_((function (){var G__42034 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Flaw"], null);
var G__42035 = expr__42032;
return (pred__42031.cljs$core$IFn$_invoke$arity$2 ? pred__42031.cljs$core$IFn$_invoke$arity$2(G__42034,G__42035) : pred__42031.call(null,G__42034,G__42035));
})())){
return "give in to your flaw. Checks that attempt to resist giving in to your flaw gain penalties equal to the Quality and Power of your flaw. ";
} else {
if(cljs.core.truth_((function (){var G__42036 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ideal"], null);
var G__42037 = expr__42032;
return (pred__42031.cljs$core$IFn$_invoke$arity$2 ? pred__42031.cljs$core$IFn$_invoke$arity$2(G__42036,G__42037) : pred__42031.call(null,G__42036,G__42037));
})())){
return "promote or exemplify your ideal. Checks that run counter to your ideal gain penalties equal to the Quality and Power of your ideal. ";
} else {
if(cljs.core.truth_((function (){var G__42038 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attribute"], null);
var G__42039 = expr__42032;
return (pred__42031.cljs$core$IFn$_invoke$arity$2 ? pred__42031.cljs$core$IFn$_invoke$arity$2(G__42038,G__42039) : pred__42031.call(null,G__42038,G__42039));
})())){
return "utilize your attribute. Checks that are opposed by your attribute gain penalties equal to the Quality and Power of your attribute. ";
} else {
if(cljs.core.truth_((function (){var G__42040 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Goal"], null);
var G__42041 = expr__42032;
return (pred__42031.cljs$core$IFn$_invoke$arity$2 ? pred__42031.cljs$core$IFn$_invoke$arity$2(G__42040,G__42041) : pred__42031.call(null,G__42040,G__42041));
})())){
return "attempt to make progress towards your goal. Checks that sacrifice progress towards your goal gain penalties equal to the Quality and Power of your goal. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__42032)].join('')));
}
}
}
}
})(),"Circumstances may cause multiple traits to apply bonuses or penalties to a check. Ultimately, it is up to the DM's discretion whether a trait grants a bonus or penalty."].join('')], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42003_42728,G__42004_42729) : re_frame.core.reg_sub.call(null,G__42003_42728,G__42004_42729));
var G__42042_42730 = new cljs.core.Keyword(null,"martial-prowess","martial-prowess",-114945878);
var G__42043_42731 = (function (db,p__42044){
var vec__42045 = p__42044;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42045,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42045,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__42057 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__42058 = properties;
if(cljs.core.truth_((function (){var G__42060 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__42061 = expr__42058;
return (pred__42057.cljs$core$IFn$_invoke$arity$2 ? pred__42057.cljs$core$IFn$_invoke$arity$2(G__42060,G__42061) : pred__42057.call(null,G__42060,G__42061));
})())){
return "Light Martial Prowess";
} else {
if(cljs.core.truth_((function (){var G__42062 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__42063 = expr__42058;
return (pred__42057.cljs$core$IFn$_invoke$arity$2 ? pred__42057.cljs$core$IFn$_invoke$arity$2(G__42062,G__42063) : pred__42057.call(null,G__42062,G__42063));
})())){
return "Medium Martial Prowess";
} else {
if(cljs.core.truth_((function (){var G__42064 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__42065 = expr__42058;
return (pred__42057.cljs$core$IFn$_invoke$arity$2 ? pred__42057.cljs$core$IFn$_invoke$arity$2(G__42064,G__42065) : pred__42057.call(null,G__42064,G__42065));
})())){
return "Heavy Martial Prowess";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__42058)].join('')));
}
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__42075 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__42076 = properties;
if(cljs.core.truth_((function (){var G__42078 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__42079 = expr__42076;
return (pred__42075.cljs$core$IFn$_invoke$arity$2 ? pred__42075.cljs$core$IFn$_invoke$arity$2(G__42078,G__42079) : pred__42075.call(null,G__42078,G__42079));
})())){
return "Gain +Quality +Power on checks that use a light weapon, shield, or armor.";
} else {
if(cljs.core.truth_((function (){var G__42080 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__42081 = expr__42076;
return (pred__42075.cljs$core$IFn$_invoke$arity$2 ? pred__42075.cljs$core$IFn$_invoke$arity$2(G__42080,G__42081) : pred__42075.call(null,G__42080,G__42081));
})())){
return "Gain +Quality +Power on checks that use a medium weapon, shield, or armor.";
} else {
if(cljs.core.truth_((function (){var G__42082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__42083 = expr__42076;
return (pred__42075.cljs$core$IFn$_invoke$arity$2 ? pred__42075.cljs$core$IFn$_invoke$arity$2(G__42082,G__42083) : pred__42075.call(null,G__42082,G__42083));
})())){
return "Gain +Quality +Power on checks that use a heavy weapon.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__42076)].join('')));
}
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42042_42730,G__42043_42731) : re_frame.core.reg_sub.call(null,G__42042_42730,G__42043_42731));
var G__42084_42732 = new cljs.core.Keyword(null,"sneak-attack","sneak-attack",-1793099532);
var G__42085_42733 = (function (db,p__42086){
var vec__42087 = p__42086;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42087,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42087,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Sneak Attack",new cljs.core.Keyword(null,"description","description",-1428560544),"Gain +Quality +Power on checks using weapons that benefit from your martial prowess to attack a creature who is unaware of your presence or who you are hidden from."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42084_42732,G__42085_42733) : re_frame.core.reg_sub.call(null,G__42084_42732,G__42085_42733));
var G__42090_42734 = new cljs.core.Keyword(null,"combat-maneuvers","combat-maneuvers",-846517552);
var G__42091_42735 = (function (db,p__42092){
var vec__42093 = p__42092;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42093,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42093,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Combat Maneuvers",new cljs.core.Keyword(null,"description","description",-1428560544),"When you make a melee attack against a targeted creature, you can choose to make one of the following combat maneuvers instead: trip, shove, or disarm. If your trip attack is successful, the target falls prone. If the shove is successful, the target is moved to an adjacent zone. If the disarm is successful, the target's weapon falls to the ground in the zone that they occupy."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42090_42734,G__42091_42735) : re_frame.core.reg_sub.call(null,G__42090_42734,G__42091_42735));
var G__42096_42736 = new cljs.core.Keyword(null,"protective-stance","protective-stance",1339958411);
var G__42097_42737 = (function (db,p__42098){
var vec__42099 = p__42098;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42099,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42099,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Protective Stance",new cljs.core.Keyword(null,"description","description",-1428560544),"If a target creature within the same zone as you is attacked and you are wielding a shield for which you have martial prowess, you can make a defense check against that attack. The result of your defense check is inflicted as a flat penalty on the attack roll. The target of the attack may still make their own defense check if needed."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42096_42736,G__42097_42737) : re_frame.core.reg_sub.call(null,G__42096_42736,G__42097_42737));
var G__42102_42738 = new cljs.core.Keyword(null,"knowledge","knowledge",1188023043);
var G__42103_42739 = (function (db,p__42104){
var vec__42105 = p__42104;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42105,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42105,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Recall Information",new cljs.core.Keyword(null,"description","description",-1428560544),["Recollection +Quality +Power on checks to determine your knowledge on ",(function (){var pred__42119 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__42120 = properties;
if(cljs.core.truth_((function (){var G__42122 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religion"], null);
var G__42123 = expr__42120;
return (pred__42119.cljs$core$IFn$_invoke$arity$2 ? pred__42119.cljs$core$IFn$_invoke$arity$2(G__42122,G__42123) : pred__42119.call(null,G__42122,G__42123));
})())){
return "religious matters.";
} else {
if(cljs.core.truth_((function (){var G__42124 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aethrology"], null);
var G__42125 = expr__42120;
return (pred__42119.cljs$core$IFn$_invoke$arity$2 ? pred__42119.cljs$core$IFn$_invoke$arity$2(G__42124,G__42125) : pred__42119.call(null,G__42124,G__42125));
})())){
return "aethereal matters.";
} else {
if(cljs.core.truth_((function (){var G__42126 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medicine"], null);
var G__42127 = expr__42120;
return (pred__42119.cljs$core$IFn$_invoke$arity$2 ? pred__42119.cljs$core$IFn$_invoke$arity$2(G__42126,G__42127) : pred__42119.call(null,G__42126,G__42127));
})())){
return "medicinal matters.";
} else {
if(cljs.core.truth_((function (){var G__42128 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["History"], null);
var G__42129 = expr__42120;
return (pred__42119.cljs$core$IFn$_invoke$arity$2 ? pred__42119.cljs$core$IFn$_invoke$arity$2(G__42128,G__42129) : pred__42119.call(null,G__42128,G__42129));
})())){
return "historical matters.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__42120)].join('')));
}
}
}
}
})()].join('')], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42102_42738,G__42103_42739) : re_frame.core.reg_sub.call(null,G__42102_42738,G__42103_42739));
var G__42130_42741 = new cljs.core.Keyword(null,"implement-prowess","implement-prowess",-267630211);
var G__42131_42742 = (function (db,p__42132){
var vec__42133 = p__42132;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42133,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42133,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Arcane Implement Prowess",new cljs.core.Keyword(null,"description","description",-1428560544),"You know how to access the powers stored within arcane implements. Gain +Quality on checks using arcane implements."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42130_42741,G__42131_42742) : re_frame.core.reg_sub.call(null,G__42130_42741,G__42131_42742));
var G__42136_42743 = new cljs.core.Keyword(null,"relic-prowess","relic-prowess",-1221354922);
var G__42137_42744 = (function (db,p__42138){
var vec__42139 = p__42138;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42139,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42139,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Religious Relic Prowess",new cljs.core.Keyword(null,"description","description",-1428560544),"You are capable of drawing out the power resting within religious relics. Gain +Quality +Power on checks using religious relics."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42136_42743,G__42137_42744) : re_frame.core.reg_sub.call(null,G__42136_42743,G__42137_42744));
var G__42142_42745 = new cljs.core.Keyword(null,"slight-of-hand","slight-of-hand",971131650);
var G__42143_42746 = (function (db,p__42144){
var vec__42145 = p__42144;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42145,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42145,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Sleight of Hand",new cljs.core.Keyword(null,"description","description",-1428560544),"Coordination +Quality +Power to checks attempting to plant or lift and object from someone or when attempting to secretly hide or retrieve an object on your person."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42142_42745,G__42143_42746) : re_frame.core.reg_sub.call(null,G__42142_42745,G__42143_42746));
var G__42148_42749 = new cljs.core.Keyword(null,"lockpicking","lockpicking",-1008040736);
var G__42149_42750 = (function (db,p__42150){
var vec__42151 = p__42150;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42151,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42151,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Lockpicking",new cljs.core.Keyword(null,"description","description",-1428560544),"Coordination +Quality +Power to checks attempting to pick a lock. You may need certain tools to make this check."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42148_42749,G__42149_42750) : re_frame.core.reg_sub.call(null,G__42148_42749,G__42149_42750));
var G__42154_42751 = new cljs.core.Keyword(null,"reputation","reputation",-898759917);
var G__42155_42752 = (function (db,p__42156){
var vec__42157 = p__42156;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42157,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42157,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Reputation",new cljs.core.Keyword(null,"description","description",-1428560544),"Gain +Quality +Power when making checks to persuade someone who is aware of your reputation."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42154_42751,G__42155_42752) : re_frame.core.reg_sub.call(null,G__42154_42751,G__42155_42752));
var G__42160_42753 = new cljs.core.Keyword(null,"membership","membership",254556333);
var G__42161_42754 = (function (db,p__42162){
var vec__42163 = p__42162;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42163,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42163,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Membership Benefits",new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__42166 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__42167 = properties;
if(cljs.core.truth_((function (){var G__42169 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Political"], null);
var G__42170 = expr__42167;
return (pred__42166.cljs$core$IFn$_invoke$arity$2 ? pred__42166.cljs$core$IFn$_invoke$arity$2(G__42169,G__42170) : pred__42166.call(null,G__42169,G__42170));
})())){
return "Your political connections grant you access to resources and favors. Gain +Quality +Power when making social checks with those you have political sway with.";
} else {
if(cljs.core.truth_((function (){var G__42171 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religious"], null);
var G__42172 = expr__42167;
return (pred__42166.cljs$core$IFn$_invoke$arity$2 ? pred__42166.cljs$core$IFn$_invoke$arity$2(G__42171,G__42172) : pred__42166.call(null,G__42171,G__42172));
})())){
return "Your religious connections grant you access to resources, favors, lodging, and healing. Gain +Quality +Power when making social checks with those who share your religious beliefs.";
} else {
if(cljs.core.truth_((function (){var G__42173 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Guild"], null);
var G__42174 = expr__42167;
return (pred__42166.cljs$core$IFn$_invoke$arity$2 ? pred__42166.cljs$core$IFn$_invoke$arity$2(G__42173,G__42174) : pred__42166.call(null,G__42173,G__42174));
})())){
return "Your economic connections grant you access to resources and favors. Gain +Quality +Power when making social checks with your business associates.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__42167)].join('')));
}
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42160_42753,G__42161_42754) : re_frame.core.reg_sub.call(null,G__42160_42753,G__42161_42754));
var G__42175_42759 = new cljs.core.Keyword(null,"relationship","relationship",670482699);
var G__42176_42760 = (function (db,p__42177){
var vec__42178 = p__42177;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42178,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42178,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Friendship",new cljs.core.Keyword(null,"description","description",-1428560544),"Your relationship gives you access to resources and favors. Gain +Quality +Power when making social checks with this individual."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42175_42759,G__42176_42760) : re_frame.core.reg_sub.call(null,G__42175_42759,G__42176_42760));
var G__42181_42762 = new cljs.core.Keyword(null,"potion","potion",1292791805);
var G__42182_42763 = (function (db,p__42183){
var vec__42184 = p__42183;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42184,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42184,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__42187 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__42188 = properties;
if(cljs.core.truth_((function (){var G__42190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Healing"], null);
var G__42191 = expr__42188;
return (pred__42187.cljs$core$IFn$_invoke$arity$2 ? pred__42187.cljs$core$IFn$_invoke$arity$2(G__42190,G__42191) : pred__42187.call(null,G__42190,G__42191));
})())){
return "Cure Wounds";
} else {
return "Drink Potion";
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__42192 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__42193 = properties;
if(cljs.core.truth_((function (){var G__42195 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Healing"], null);
var G__42196 = expr__42193;
return (pred__42192.cljs$core$IFn$_invoke$arity$2 ? pred__42192.cljs$core$IFn$_invoke$arity$2(G__42195,G__42196) : pred__42192.call(null,G__42195,G__42196));
})())){
return "When consumed, this potion heals 1 point of damage and grants +1d on healing checks for the physical domain.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__42193)].join('')));
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42181_42762,G__42182_42763) : re_frame.core.reg_sub.call(null,G__42181_42762,G__42182_42763));
var G__42197_42764 = new cljs.core.Keyword(null,"poison","poison",566911550);
var G__42198_42765 = (function (db,p__42199){
var vec__42200 = p__42199;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42200,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42200,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Inflict Poison",new cljs.core.Keyword(null,"description","description",-1428560544),"When ingested, the infected creature must make a physical healing check with a Target Number of 6. If they fail, then they take -1d -2 on all of their checks for 1d4 hours. If they succeed, then they only take -1d on all of their checks for the next hour. Contains 3 doses which can be applied through ingesting food or drink that contains the poison or the user can apply the poison to a weapon that deals piercing or slashing damage and hit the creature with the weapon."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42197_42764,G__42198_42765) : re_frame.core.reg_sub.call(null,G__42197_42764,G__42198_42765));
var G__42203_42766 = new cljs.core.Keyword(null,"tool","tool",-1298696470);
var G__42204_42767 = (function (db,p__42205){
var vec__42206 = p__42205;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42206,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42206,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Utilize Tool",new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__42209 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__42210 = properties;
if(cljs.core.truth_((function (){var G__42212 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Climbing"], null);
var G__42213 = expr__42210;
return (pred__42209.cljs$core$IFn$_invoke$arity$2 ? pred__42209.cljs$core$IFn$_invoke$arity$2(G__42212,G__42213) : pred__42209.call(null,G__42212,G__42213));
})())){
return "Gain +Quality +Power on checks attempting to climb walls, cliffs, trees, etc.";
} else {
if(cljs.core.truth_((function (){var G__42214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Larceny"], null);
var G__42215 = expr__42210;
return (pred__42209.cljs$core$IFn$_invoke$arity$2 ? pred__42209.cljs$core$IFn$_invoke$arity$2(G__42214,G__42215) : pred__42209.call(null,G__42214,G__42215));
})())){
return "Gain +Quality +Power on checks attempting to open doors and locks or to disarm traps and devices while using these tools.";
} else {
return "You use the tool!";
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42203_42766,G__42204_42767) : re_frame.core.reg_sub.call(null,G__42203_42766,G__42204_42767));
var G__42216_42768 = new cljs.core.Keyword(null,"book","book",-918152214);
var G__42217_42769 = (function (db,p__42218){
var vec__42219 = p__42218;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42219,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42219,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__42222 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__42223 = properties;
if(cljs.core.truth_((function (){var G__42225 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religious"], null);
var G__42226 = expr__42223;
return (pred__42222.cljs$core$IFn$_invoke$arity$2 ? pred__42222.cljs$core$IFn$_invoke$arity$2(G__42225,G__42226) : pred__42222.call(null,G__42225,G__42226));
})())){
return "Prayer of Healing";
} else {
if(cljs.core.truth_((function (){var G__42227 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medicinal"], null);
var G__42228 = expr__42223;
return (pred__42222.cljs$core$IFn$_invoke$arity$2 ? pred__42222.cljs$core$IFn$_invoke$arity$2(G__42227,G__42228) : pred__42222.call(null,G__42227,G__42228));
})())){
return "Common Treatments";
} else {
if(cljs.core.truth_((function (){var G__42229 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aethereal"], null);
var G__42230 = expr__42223;
return (pred__42222.cljs$core$IFn$_invoke$arity$2 ? pred__42222.cljs$core$IFn$_invoke$arity$2(G__42229,G__42230) : pred__42222.call(null,G__42229,G__42230));
})())){
return "Arcane Knowledge";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__42223)].join('')));
}
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__42231 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__42232 = properties;
if(cljs.core.truth_((function (){var G__42234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religious"], null);
var G__42235 = expr__42232;
return (pred__42231.cljs$core$IFn$_invoke$arity$2 ? pred__42231.cljs$core$IFn$_invoke$arity$2(G__42234,G__42235) : pred__42231.call(null,G__42234,G__42235));
})())){
return "Exertion +Quality +Power with a Target Number of 5 to pray over a flame to imbue it with the healing powers of Heilm. On a success, the flame heals a number of physical, spiritual, and mental wounds equal to the result of the check at the rate of 1 wound per hour and can be distributed among any number of creatures. On a failure, you take a number of spiritual wounds equal to the amount that you failed by. This prayer can only be made once per day.";
} else {
if(cljs.core.truth_((function (){var G__42236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medicinal"], null);
var G__42237 = expr__42232;
return (pred__42231.cljs$core$IFn$_invoke$arity$2 ? pred__42231.cljs$core$IFn$_invoke$arity$2(G__42236,G__42237) : pred__42231.call(null,G__42236,G__42237));
})())){
return "Concentration +Quality +Power on checks using herbs from the Four Duchies to treat wounds or illnesses.";
} else {
if(cljs.core.truth_((function (){var G__42238 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aethereal"], null);
var G__42239 = expr__42232;
return (pred__42231.cljs$core$IFn$_invoke$arity$2 ? pred__42231.cljs$core$IFn$_invoke$arity$2(G__42238,G__42239) : pred__42231.call(null,G__42238,G__42239));
})())){
return "Gain +Quality +Power on checks that attempting to understand or use objects, text, or rituals that are of Eldari origin.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__42232)].join('')));
}
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42216_42768,G__42217_42769) : re_frame.core.reg_sub.call(null,G__42216_42768,G__42217_42769));
var G__42240_42770 = new cljs.core.Keyword(null,"coin","coin",-227557189);
var G__42241_42771 = (function (db,p__42242){
var vec__42243 = p__42242;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42243,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42243,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Gold",new cljs.core.Keyword(null,"description","description",-1428560544),"Gold is a standard unit of exchange for goods and services. It may also be used to influence the outcomes of persuasion checks depending on the recipient's disposition towards bribery."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42240_42770,G__42241_42771) : re_frame.core.reg_sub.call(null,G__42240_42770,G__42241_42771));
var G__42246_42772 = new cljs.core.Keyword(null,"feature-title","feature-title",2026798069);
var G__42247_42773 = (function (db,p__42248){
var vec__42249 = p__42248;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42249,(0),null);
var feature = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42249,(1),null);
var resource_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42249,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [feature,resource_properties], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42246_42772,G__42247_42773) : re_frame.core.reg_sub.call(null,G__42246_42772,G__42247_42773));
var G__42252_42774 = new cljs.core.Keyword(null,"feature-details","feature-details",96542810);
var G__42253_42775 = (function (db,p__42254){
var vec__42255 = p__42254;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42255,(0),null);
var feature = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42255,(1),null);
var resource_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42255,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [feature,resource_properties], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42252_42774,G__42253_42775) : re_frame.core.reg_sub.call(null,G__42252_42774,G__42253_42775));
var G__42258_42776 = new cljs.core.Keyword(null,"heritage-details","heritage-details",517842258);
var G__42259_42777 = (function (db,p__42260){
var vec__42261 = p__42260;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42261,(0),null);
var heritage_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42261,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),heritage_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42258_42776,G__42259_42777) : re_frame.core.reg_sub.call(null,G__42258_42776,G__42259_42777));
var G__42264_42778 = new cljs.core.Keyword(null,"heritage-resources","heritage-resources",-1286324504);
var G__42265_42779 = (function (db,p__42266){
var vec__42267 = p__42266;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42267,(0),null);
var heritage_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42267,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),heritage_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42264_42778,G__42265_42779) : re_frame.core.reg_sub.call(null,G__42264_42778,G__42265_42779));
var G__42270_42780 = new cljs.core.Keyword(null,"heritage-features","heritage-features",-1746727718);
var G__42271_42781 = (function (db,p__42272){
var vec__42273 = p__42272;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42273,(0),null);
var heritage_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42273,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),heritage_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42270_42780,G__42271_42781) : re_frame.core.reg_sub.call(null,G__42270_42780,G__42271_42781));
var G__42276_42782 = new cljs.core.Keyword(null,"role-details","role-details",-772961800);
var G__42277_42783 = (function (db,p__42278){
var vec__42279 = p__42278;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42279,(0),null);
var role_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42279,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),role_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42276_42782,G__42277_42783) : re_frame.core.reg_sub.call(null,G__42276_42782,G__42277_42783));
var G__42282_42784 = new cljs.core.Keyword(null,"role-resources","role-resources",819423685);
var G__42283_42785 = (function (db,p__42284){
var vec__42285 = p__42284;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42285,(0),null);
var role_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42285,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),role_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42282_42784,G__42283_42785) : re_frame.core.reg_sub.call(null,G__42282_42784,G__42283_42785));
var G__42288_42787 = new cljs.core.Keyword(null,"role-features","role-features",459150250);
var G__42289_42788 = (function (db,p__42290){
var vec__42291 = p__42290;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42291,(0),null);
var role_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42291,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),role_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42288_42787,G__42289_42788) : re_frame.core.reg_sub.call(null,G__42288_42787,G__42289_42788));
var G__42294_42790 = new cljs.core.Keyword(null,"prototype-text","prototype-text",620288557);
var G__42295_42791 = (function (db,p__42296){
var vec__42297 = p__42296;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42297,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42297,(1),null);
var keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42297,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),keyword], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42294_42790,G__42295_42791) : re_frame.core.reg_sub.call(null,G__42294_42790,G__42295_42791));
var G__42300_42793 = new cljs.core.Keyword(null,"overview","overview",-435037267);
var G__42301_42794 = (function (db,p__42302){
var vec__42303 = p__42302;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42303,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42303,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"overview","overview",-435037267)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42300_42793,G__42301_42794) : re_frame.core.reg_sub.call(null,G__42300_42793,G__42301_42794));
var G__42306_42796 = new cljs.core.Keyword(null,"base-dice-pool","base-dice-pool",-2000848897);
var G__42307_42797 = (function (db,p__42308){
var vec__42309 = p__42308;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42309,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42309,(1),null);
var skillbilities_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42309,(2),null);
var skills = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42309,(3),null);
var end = ((skillbilities_QMARK_ === true)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"base-dice-pool-variations","base-dice-pool-variations",-2068843221),new cljs.core.Keyword(null,"skillbilities","skillbilities",-571801846)], null)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"base-dice-pool-variations","base-dice-pool-variations",-2068843221),new cljs.core.Keyword(null,"skills-and-abilities","skills-and-abilities",-4029936)], null)));
var example = ((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(1)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"dice-pool-example","dice-pool-example",1828496004),new cljs.core.Keyword(null,"simple-skillbilities","simple-skillbilities",-1733944826)], null)):((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"dice-pool-example","dice-pool-example",1828496004),new cljs.core.Keyword(null,"full-skillbilities","full-skillbilities",-451516920)], null)):((((skillbilities_QMARK_ === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"dice-pool-example","dice-pool-example",1828496004),new cljs.core.Keyword(null,"skills-and-abilities","skills-and-abilities",-4029936)], null)):null)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"base-dice-pool","base-dice-pool",-2000848897)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example)].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42306_42796,G__42307_42797) : re_frame.core.reg_sub.call(null,G__42306_42796,G__42307_42797));
var G__42312_42799 = new cljs.core.Keyword(null,"bonuses-and-penalties","bonuses-and-penalties",606200007);
var G__42313_42800 = (function (db,p__42314){
var vec__42315 = p__42314;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42315,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42315,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"bonuses-and-penalties","bonuses-and-penalties",606200007)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42312_42799,G__42313_42800) : re_frame.core.reg_sub.call(null,G__42312_42799,G__42313_42800));
var G__42318_42801 = new cljs.core.Keyword(null,"splintering","splintering",-1707231919);
var G__42319_42802 = (function (db,p__42320){
var vec__42321 = p__42320;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42321,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42321,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"splintering","splintering",-1707231919)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42318_42801,G__42319_42802) : re_frame.core.reg_sub.call(null,G__42318_42801,G__42319_42802));
var G__42324_42803 = new cljs.core.Keyword(null,"caution","caution",1823615934);
var G__42325_42804 = (function (db,p__42326){
var vec__42327 = p__42326;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42327,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42327,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"caution","caution",1823615934)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42324_42803,G__42325_42804) : re_frame.core.reg_sub.call(null,G__42324_42803,G__42325_42804));
var G__42330_42805 = new cljs.core.Keyword(null,"passive-checks","passive-checks",-2057161289);
var G__42331_42806 = (function (db,p__42332){
var vec__42333 = p__42332;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42333,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42333,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"passive-checks","passive-checks",-2057161289)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42330_42805,G__42331_42806) : re_frame.core.reg_sub.call(null,G__42330_42805,G__42331_42806));
var G__42336_42808 = new cljs.core.Keyword(null,"actions","actions",-812656882);
var G__42337_42809 = (function (db,p__42338){
var vec__42339 = p__42338;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42339,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42339,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"actions","actions",-812656882)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42336_42808,G__42337_42809) : re_frame.core.reg_sub.call(null,G__42336_42808,G__42337_42809));
var G__42342_42812 = new cljs.core.Keyword(null,"moments","moments",-1541189836);
var G__42343_42813 = (function (db,p__42344){
var vec__42345 = p__42344;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42345,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42345,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"moments","moments",-1541189836)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42342_42812,G__42343_42813) : re_frame.core.reg_sub.call(null,G__42342_42812,G__42343_42813));
var G__42348_42816 = new cljs.core.Keyword(null,"rounds","rounds",1157201084);
var G__42349_42817 = (function (db,p__42350){
var vec__42351 = p__42350;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42351,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42351,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"rounds","rounds",1157201084)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42348_42816,G__42349_42817) : re_frame.core.reg_sub.call(null,G__42348_42816,G__42349_42817));
var G__42354_42818 = new cljs.core.Keyword(null,"complex-moments","complex-moments",1664654174);
var G__42355_42819 = (function (db,p__42356){
var vec__42357 = p__42356;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42357,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42357,(1),null);
var encounter_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42357,(2),null);
var splintering = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42357,(3),null);
var caution = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42357,(4),null);
var G__42360 = encounter_style;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("turn-based",G__42360)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("simultaneous",G__42360)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"beginning","beginning",77824097)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,splintering)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,caution))))?["may modify their dice pool at this point. ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,splintering))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"splintering","splintering",-1707231919)], null))):null),"Modifications to your dice pool may cause your actions to be resolved earlier or later than they otherwise would be. "].join(''):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"default","default",-1987822328)], null)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),G__42360)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["ERROR: Unrecognized encounter style in item: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join('')], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42360)].join('')));

}
}
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42354_42818,G__42355_42819) : re_frame.core.reg_sub.call(null,G__42354_42818,G__42355_42819));
var G__42361_42820 = new cljs.core.Keyword(null,"complex-rounds","complex-rounds",-1215067926);
var G__42362_42821 = (function (db,p__42363){
var vec__42364 = p__42363;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42364,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42364,(1),null);
var encounter_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42364,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"rounds","rounds",1157201084)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42361_42820,G__42362_42821) : re_frame.core.reg_sub.call(null,G__42361_42820,G__42362_42821));
var G__42367_42823 = new cljs.core.Keyword(null,"injuries","injuries",-299210720);
var G__42368_42824 = (function (db,p__42369){
var vec__42370 = p__42369;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42370,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42370,(1),null);
var damage_tiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42370,(2),null);
var recovery_tiers_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42370,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(damage_tiers,(1))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers], null));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers,new cljs.core.Keyword(null,"beginning","beginning",77824097)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((recovery_tiers_QMARK_ === true)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers,new cljs.core.Keyword(null,"recovery-tiers?","recovery-tiers?",1974730784)], null)):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers,new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42367_42823,G__42368_42824) : re_frame.core.reg_sub.call(null,G__42367_42823,G__42368_42824));
var G__42373_42825 = new cljs.core.Keyword(null,"conditions","conditions",-1647236270);
var G__42374_42826 = (function (db,p__42375){
var vec__42376 = p__42375;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42376,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42376,(1),null);
var condition_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42376,(2),null);
var skills = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42376,(3),null);
var abilities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42376,(4),null);
var skillbilities_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42376,(5),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.Keyword(null,"beginning","beginning",77824097)], null))),((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(1)))))?"that domain's skill. ":((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"that domain's continuation skill. ":((((skillbilities_QMARK_ === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"that domain's continuation skill with it's resilience ability. ":null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(condition_style)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42373_42825,G__42374_42826) : re_frame.core.reg_sub.call(null,G__42373_42825,G__42374_42826));
var G__42379_42830 = new cljs.core.Keyword(null,"recovery","recovery",-2004840646);
var G__42380_42831 = (function (db,p__42381){
var vec__42382 = p__42381;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42382,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42382,(1),null);
var damage_tiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42382,(2),null);
var recovery_tiers_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42382,(3),null);
var recovery_times = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42382,(4),null);
var treatment_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42382,(5),null);
var skills = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42382,(6),null);
var abilities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42382,(7),null);
var skillbilities_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42382,(8),null);
return [((recovery_tiers_QMARK_ === false)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),damage_tiers], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"value","value",305978217)], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"unit","unit",375175175)], null))),". "].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__42388 = damage_tiers;
switch (G__42388) {
case (1):
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),damage_tiers], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"value","value",305978217)], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"unit","unit",375175175)], null)))," "].join('');

break;
case (2):
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),damage_tiers,new cljs.core.Keyword(null,"minor","minor",-608536071)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minor","minor",-608536071),new cljs.core.Keyword(null,"value","value",305978217)], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minor","minor",-608536071),new cljs.core.Keyword(null,"unit","unit",375175175)], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),damage_tiers,new cljs.core.Keyword(null,"major","major",-27376078)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"value","value",305978217)], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"unit","unit",375175175)], null))),". "].join('');

break;
case (3):
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),damage_tiers,new cljs.core.Keyword(null,"minor","minor",-608536071)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minor","minor",-608536071),new cljs.core.Keyword(null,"value","value",305978217)], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minor","minor",-608536071),new cljs.core.Keyword(null,"unit","unit",375175175)], null))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),damage_tiers,new cljs.core.Keyword(null,"moderate","moderate",-1039163165)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moderate","moderate",-1039163165),new cljs.core.Keyword(null,"value","value",305978217)], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moderate","moderate",-1039163165),new cljs.core.Keyword(null,"unit","unit",375175175)], null))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),damage_tiers,new cljs.core.Keyword(null,"major","major",-27376078)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"value","value",305978217)], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"unit","unit",375175175)], null))),". "].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42388)].join('')));

}
})())),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,treatment_QMARK_))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),new cljs.core.Keyword(null,"treatment?","treatment?",264384759)], null))),((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(1)))))?"an acuity skill check. ":((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"a comprehension skill check. ":((((skillbilities_QMARK_ === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"a comprehension skill check with the relevant domain's discipline ability. ":null)))].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42379_42830,G__42380_42831) : re_frame.core.reg_sub.call(null,G__42379_42830,G__42380_42831));
var G__42389_42833 = new cljs.core.Keyword(null,"condition-title","condition-title",-1818530037);
var G__42390_42834 = (function (db,p__42391){
var vec__42392 = p__42391;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42392,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42392,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42389_42833,G__42390_42834) : re_frame.core.reg_sub.call(null,G__42389_42833,G__42390_42834));
var G__42395_42835 = new cljs.core.Keyword(null,"condition-description","condition-description",-584806753);
var G__42396_42836 = (function (db,p__42397){
var vec__42398 = p__42397;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42398,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42398,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"description","description",-1428560544)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42395_42835,G__42396_42836) : re_frame.core.reg_sub.call(null,G__42395_42835,G__42396_42836));
var G__42401_42837 = new cljs.core.Keyword(null,"condition-effects","condition-effects",1872046469);
var G__42402_42838 = (function (db,p__42403){
var vec__42404 = p__42403;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42404,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42404,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"effects","effects",-282369292)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42401_42837,G__42402_42838) : re_frame.core.reg_sub.call(null,G__42401_42837,G__42402_42838));
var G__42407_42839 = new cljs.core.Keyword(null,"condition-effect-description","condition-effect-description",-3743093);
var G__42408_42840 = (function (db,p__42409){
var vec__42410 = p__42409;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42410,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42410,(1),null);
var effect_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42410,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"effects","effects",-282369292),effect_id,new cljs.core.Keyword(null,"description","description",-1428560544)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42407_42839,G__42408_42840) : re_frame.core.reg_sub.call(null,G__42407_42839,G__42408_42840));
var G__42413_42841 = new cljs.core.Keyword(null,"condition-effect-duration","condition-effect-duration",-2101079389);
var G__42414_42842 = (function (db,p__42415){
var vec__42416 = p__42415;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42416,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42416,(1),null);
var effect_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42416,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"effects","effects",-282369292),effect_id,new cljs.core.Keyword(null,"duration","duration",1444101068)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42413_42841,G__42414_42842) : re_frame.core.reg_sub.call(null,G__42413_42841,G__42414_42842));
var G__42419_42843 = new cljs.core.Keyword(null,"world-overview","world-overview",-314945091);
var G__42420_42844 = (function (db,p__42421){
var vec__42422 = p__42421;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42422,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42422,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),world_id,new cljs.core.Keyword(null,"overview","overview",-435037267)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42419_42843,G__42420_42844) : re_frame.core.reg_sub.call(null,G__42419_42843,G__42420_42844));
var G__42425_42845 = new cljs.core.Keyword(null,"world-territories","world-territories",-982355734);
var G__42426_42846 = (function (db,p__42427){
var vec__42428 = p__42427;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42428,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42428,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),world_id,new cljs.core.Keyword(null,"territories","territories",-1856976391)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42425_42845,G__42426_42846) : re_frame.core.reg_sub.call(null,G__42425_42845,G__42426_42846));
var G__42431_42847 = new cljs.core.Keyword(null,"territory-civilizations","territory-civilizations",-523722954);
var G__42432_42848 = (function (db,p__42433){
var vec__42434 = p__42433;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42434,(0),null);
var territory_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42434,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),territory_id,new cljs.core.Keyword(null,"civilizations","civilizations",822016090)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42431_42847,G__42432_42848) : re_frame.core.reg_sub.call(null,G__42431_42847,G__42432_42848));
var G__42437_42849 = new cljs.core.Keyword(null,"territory-details","territory-details",323186833);
var G__42438_42850 = (function (db,p__42439){
var vec__42440 = p__42439;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42440,(0),null);
var territory_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42440,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),territory_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42437_42849,G__42438_42850) : re_frame.core.reg_sub.call(null,G__42437_42849,G__42438_42850));
var G__42443_42851 = new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185);
var G__42444_42852 = (function (db,p__42445){
var vec__42446 = p__42445;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42446,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42446,(1),null);
var territories = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),world_id,new cljs.core.Keyword(null,"territories","territories",-1856976391)], null));
var civilizations = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(territories)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(civilizations));
} else {
var G__42853 = cljs.core.rest(territories);
var G__42854 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,civilizations,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(territories),new cljs.core.Keyword(null,"civilizations","civilizations",822016090)], null)));
territories = G__42853;
civilizations = G__42854;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42443_42851,G__42444_42852) : re_frame.core.reg_sub.call(null,G__42443_42851,G__42444_42852));
var G__42449_42855 = new cljs.core.Keyword(null,"world-lore","world-lore",-1851264915);
var G__42450_42856 = (function (db,p__42451){
var vec__42452 = p__42451;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42452,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42452,(1),null);
var civilizations = modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null));
var lore = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(lore));
} else {
var G__42857 = cljs.core.rest(civilizations);
var G__42858 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,lore,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"lore","lore",-10530558)], null)));
civilizations = G__42857;
lore = G__42858;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42449_42855,G__42450_42856) : re_frame.core.reg_sub.call(null,G__42449_42855,G__42450_42856));
var G__42455_42859 = new cljs.core.Keyword(null,"world-organizations","world-organizations",-481549703);
var G__42456_42860 = (function (db,p__42457){
var vec__42458 = p__42457;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42458,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42458,(1),null);
var civilizations = modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null));
var organizations = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(organizations));
} else {
var G__42861 = cljs.core.rest(civilizations);
var G__42862 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,organizations,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"organizations","organizations",-755443762)], null)));
civilizations = G__42861;
organizations = G__42862;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42455_42859,G__42456_42860) : re_frame.core.reg_sub.call(null,G__42455_42859,G__42456_42860));
var G__42461_42863 = new cljs.core.Keyword(null,"world-key-figures","world-key-figures",-2094243827);
var G__42462_42864 = (function (db,p__42463){
var vec__42464 = p__42463;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42464,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42464,(1),null);
var civilizations = modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null));
var key_figures = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(key_figures));
} else {
var G__42865 = cljs.core.rest(civilizations);
var G__42866 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,key_figures,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"key-figures","key-figures",-2075124028)], null)));
civilizations = G__42865;
key_figures = G__42866;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42461_42863,G__42462_42864) : re_frame.core.reg_sub.call(null,G__42461_42863,G__42462_42864));
var G__42467_42867 = new cljs.core.Keyword(null,"world-advancements","world-advancements",2113721326);
var G__42468_42868 = (function (db,p__42469){
var vec__42470 = p__42469;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42470,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42470,(1),null);
var civilizations = modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null));
var advancements = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(advancements));
} else {
var G__42869 = cljs.core.rest(civilizations);
var G__42870 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,advancements,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"advancements","advancements",32607236)], null)));
civilizations = G__42869;
advancements = G__42870;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42467_42867,G__42468_42868) : re_frame.core.reg_sub.call(null,G__42467_42867,G__42468_42868));
var G__42473_42871 = new cljs.core.Keyword(null,"world-creatures","world-creatures",745737020);
var G__42474_42872 = (function (db,p__42475){
var vec__42476 = p__42475;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42476,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42476,(1),null);
var territories = modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-territories","world-territories",-982355734),world_id], null));
var creatures = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(territories)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(creatures));
} else {
var G__42873 = cljs.core.rest(territories);
var G__42874 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,creatures,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(territories),new cljs.core.Keyword(null,"creatures","creatures",761416150)], null)));
territories = G__42873;
creatures = G__42874;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42473_42871,G__42474_42872) : re_frame.core.reg_sub.call(null,G__42473_42871,G__42474_42872));
var G__42479_42879 = new cljs.core.Keyword(null,"world-heritages","world-heritages",-1355127108);
var G__42480_42880 = (function (db,p__42481){
var vec__42482 = p__42481;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42482,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42482,(1),null);
var civilizations = modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null));
var heritages = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(heritages));
} else {
var G__42881 = cljs.core.rest(civilizations);
var G__42882 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,heritages,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"heritages","heritages",1016532791)], null)));
civilizations = G__42881;
heritages = G__42882;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42479_42879,G__42480_42880) : re_frame.core.reg_sub.call(null,G__42479_42879,G__42480_42880));
var G__42485_42883 = new cljs.core.Keyword(null,"world-roles","world-roles",-1495875244);
var G__42486_42884 = (function (db,p__42487){
var vec__42488 = p__42487;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42488,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42488,(1),null);
var civilizations = modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null));
var roles = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(roles));
} else {
var G__42885 = cljs.core.rest(civilizations);
var G__42886 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,roles,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"roles","roles",143379530)], null)));
civilizations = G__42885;
roles = G__42886;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42485_42883,G__42486_42884) : re_frame.core.reg_sub.call(null,G__42485_42883,G__42486_42884));
var G__42491_42887 = new cljs.core.Keyword(null,"world-resources","world-resources",368334044);
var G__42492_42888 = (function (db,p__42493){
var vec__42494 = p__42493;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42494,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42494,(1),null);
var civilizations = modular_roleplaying_framework.db_CRUD._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null));
var resources = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(resources));
} else {
var G__42893 = cljs.core.rest(civilizations);
var G__42894 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,resources,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"resources","resources",1632806811)], null)));
civilizations = G__42893;
resources = G__42894;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42491_42887,G__42492_42888) : re_frame.core.reg_sub.call(null,G__42491_42887,G__42492_42888));
var G__42497_42895 = new cljs.core.Keyword(null,"civilization-details","civilization-details",281511038);
var G__42498_42896 = (function (db,p__42499){
var vec__42500 = p__42499;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42500,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42500,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42497_42895,G__42498_42896) : re_frame.core.reg_sub.call(null,G__42497_42895,G__42498_42896));
var G__42503_42898 = new cljs.core.Keyword(null,"civilization-lore","civilization-lore",-555959513);
var G__42504_42899 = (function (db,p__42505){
var vec__42506 = p__42505;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42506,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42506,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"lore","lore",-10530558)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42503_42898,G__42504_42899) : re_frame.core.reg_sub.call(null,G__42503_42898,G__42504_42899));
var G__42509_42901 = new cljs.core.Keyword(null,"civilization-organizations","civilization-organizations",-666067443);
var G__42510_42902 = (function (db,p__42511){
var vec__42512 = p__42511;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42512,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42512,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"organizations","organizations",-755443762)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42509_42901,G__42510_42902) : re_frame.core.reg_sub.call(null,G__42509_42901,G__42510_42902));
var G__42515_42903 = new cljs.core.Keyword(null,"civilization-key-figures","civilization-key-figures",1996035078);
var G__42516_42904 = (function (db,p__42517){
var vec__42518 = p__42517;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42518,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42518,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"key-figures","key-figures",-2075124028)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42515_42903,G__42516_42904) : re_frame.core.reg_sub.call(null,G__42515_42903,G__42516_42904));
var G__42521_42905 = new cljs.core.Keyword(null,"civilization-advancements","civilization-advancements",1472212775);
var G__42522_42906 = (function (db,p__42523){
var vec__42524 = p__42523;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42524,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42524,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"advancements","advancements",32607236)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42521_42905,G__42522_42906) : re_frame.core.reg_sub.call(null,G__42521_42905,G__42522_42906));

//# sourceMappingURL=modular_roleplaying_framework.db_CRUD.js.map
