goog.provide('modular_roleplaying_framework.db_CRUD');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('re_frame.core');
goog.require('kee_frame.core');
modular_roleplaying_framework.db_CRUD._GT_evt = re_frame.core.dispatch;
modular_roleplaying_framework.db_CRUD._LT_sub = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,re_frame.core.subscribe);
/**
 * Dissociate a value in a nested assocative structure, identified by a sequence
 *   of keys. Any collections left empty by the operation will be dissociated from
 *   their containing structures.
 */
modular_roleplaying_framework.db_CRUD.dissoc_in = (function modular_roleplaying_framework$db_CRUD$dissoc_in(m,ks){
var temp__5733__auto__ = cljs.core.seq(ks);
if(temp__5733__auto__){
var vec__29185 = temp__5733__auto__;
var seq__29186 = cljs.core.seq(vec__29185);
var first__29187 = cljs.core.first(seq__29186);
var seq__29186__$1 = cljs.core.next(seq__29186);
var k = first__29187;
var ks__$1 = seq__29186__$1;
if(cljs.core.seq(ks__$1)){
var v = (function (){var G__29188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__29189 = ks__$1;
return (modular_roleplaying_framework.db_CRUD.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? modular_roleplaying_framework.db_CRUD.dissoc_in.cljs$core$IFn$_invoke$arity$2(G__29188,G__29189) : modular_roleplaying_framework.db_CRUD.dissoc_in.call(null,G__29188,G__29189));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-system","initialize-system",-1223784141),(function (p__29190,p__29191){
var map__29192 = p__29190;
var map__29192__$1 = (((((!((map__29192 == null))))?(((((map__29192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29192):map__29192);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29192__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29193 = p__29191;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29193,(0),null);
var section_one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29193,(1),null);
var section_two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29193,(2),null);
var section_three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29193,(3),null);
var layout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29193,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section_two),(0)),(0),modular_roleplaying_framework.db_CRUD.url_friendly(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section_two)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section_two),(0),layout,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section_one),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section_three),(0)),modular_roleplaying_framework.db_CRUD.url_friendly(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section_three)),modular_roleplaying_framework.db_CRUD.url_friendly(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section_one)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section_one),(0)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-layout","toggle-layout",-241410907),(function (p__29197,_){
var map__29198 = p__29197;
var map__29198__$1 = (((((!((map__29198 == null))))?(((((map__29198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29198):map__29198);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29198__$1,new cljs.core.Keyword(null,"db","db",993250759));
var system_state = new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db);
var map__29200 = system_state;
var map__29200__$1 = (((((!((map__29200 == null))))?(((((map__29200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29200):map__29200);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29200__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29200__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29200__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29200__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout,"book-layout"))?"pages-layout":"book-layout"),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reorder-sections","reorder-sections",208296526),(function (p__29202,p__29203){
var map__29204 = p__29202;
var map__29204__$1 = (((((!((map__29204 == null))))?(((((map__29204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29204):map__29204);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29204__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29205 = p__29203;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29205,(0),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29205,(1),null);
var section_one = (function (){var G__29209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section","state-section",-1039543225),"section-one"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29209) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29209));
})();
var section_two = (function (){var G__29210 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section","state-section",-1039543225),"section-two"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29210) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29210));
})();
var section_three = (function (){var G__29211 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section","state-section",-1039543225),"section-three"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29211) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29211));
})();
var layout = (function (){var G__29212 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29212) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29212));
})();
var G__29213 = direction;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("forward",G__29213)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_three)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_one)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_two))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("backward",G__29213)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_two)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_three)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_one))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),G__29213)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Unrecognized direction when reordering sections."], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29213)].join('')));

}
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"section-select","section-select",-1432207285),(function (p__29214,p__29215){
var map__29216 = p__29214;
var map__29216__$1 = (((((!((map__29216 == null))))?(((((map__29216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29216):map__29216);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29216__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29217 = p__29215;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29217,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29217,(1),null);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29217,(2),null);
var system_state = cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-title","section-title",1261938902)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section),(0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-tab-parent","item-tab-parent",-1109190767)], null),null);
var map__29221 = system_state;
var map__29221__$1 = (((((!((map__29221 == null))))?(((((map__29221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29221):map__29221);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29221__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29221__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29221__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29221__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tab-select","tab-select",1957789174),(function (p__29223,p__29224){
var map__29225 = p__29223;
var map__29225__$1 = (((((!((map__29225 == null))))?(((((map__29225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29225):map__29225);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29225__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29226 = p__29224;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29226,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29226,(1),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29226,(2),null);
var system_state = cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null),tab_id);
var map__29230 = system_state;
var map__29230__$1 = (((((!((map__29230 == null))))?(((((map__29230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29230):map__29230);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29230__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29230__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29230__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29230__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"item-select","item-select",-1822277284),(function (p__29232,p__29233){
var map__29234 = p__29232;
var map__29234__$1 = (((((!((map__29234 == null))))?(((((map__29234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29234):map__29234);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29234__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29235 = p__29233;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235,(2),null);
var system_state = cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),item_id);
var map__29239 = system_state;
var map__29239__$1 = (((((!((map__29239 == null))))?(((((map__29239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29239):map__29239);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29239__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29239__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29239__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29239__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null)))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"item-tab-select","item-tab-select",-183749023),(function (p__29241,p__29242){
var map__29243 = p__29241;
var map__29243__$1 = (((((!((map__29243 == null))))?(((((map__29243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29243):map__29243);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29243__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29244 = p__29242;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29244,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29244,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29244,(2),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29244,(3),null);
var system_state = cljs.core.assoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),item_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null),tab_id);
var map__29248 = system_state;
var map__29248__$1 = (((((!((map__29248 == null))))?(((((map__29248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29248):map__29248);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29248__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29248__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29248__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29248__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null)))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),(function (p__29250,p__29251){
var map__29252 = p__29250;
var map__29252__$1 = (((((!((map__29252 == null))))?(((((map__29252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29252):map__29252);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29252__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29253 = p__29251;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29253,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29253,(1),null);
var system_state = cljs.core.assoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),null);
var map__29257 = system_state;
var map__29257__$1 = (((((!((map__29257 == null))))?(((((map__29257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29257):map__29257);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29257__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29257__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29257__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29257__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-system-state","update-system-state",-69675065),(function (p__29259,p__29260){
var map__29261 = p__29259;
var map__29261__$1 = (((((!((map__29261 == null))))?(((((map__29261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29261):map__29261);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29261__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29262 = p__29260;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29262,(0),null);
var vec__29265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29262,(1),null);
var section_one_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29265,(0),null);
var section_one_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29265,(1),null);
var section_one_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29265,(2),null);
var section_one_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29265,(3),null);
var section_two_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29265,(4),null);
var section_two_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29265,(5),null);
var section_two_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29265,(6),null);
var section_two_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29265,(7),null);
var section_three_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29265,(8),null);
var section_three_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29265,(9),null);
var section_three_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29265,(10),null);
var section_three_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29265,(11),null);
var layout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29265,(12),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section-title","section-title",1261938902),section_one_title,new cljs.core.Keyword(null,"section-id","section-id",-1780104220),section_one_id,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778),section_one_tab,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),section_one_item], null)], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section-title","section-title",1261938902),section_two_title,new cljs.core.Keyword(null,"section-id","section-id",-1780104220),section_two_id,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778),section_two_tab,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),section_two_item], null)], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section-title","section-title",1261938902),section_three_title,new cljs.core.Keyword(null,"section-id","section-id",-1780104220),section_three_id,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778),section_three_tab,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),section_three_item], null)], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),layout),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"initialized?","initialized?",1707939066)], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-active-item","select-active-item",384984244),(function (db,p__29269){
var vec__29270 = p__29269;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29270,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29270,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29270,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null)),(item_id | (0)))){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),null);
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),(item_id | (0)));
}
}));
var G__29273_30489 = new cljs.core.Keyword(null,"system-state","system-state",509607631);
var G__29274_30490 = (function (db){
return new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29273_30489,G__29274_30490) : re_frame.core.reg_sub.call(null,G__29273_30489,G__29274_30490));
var G__29275_30492 = new cljs.core.Keyword(null,"overlay-state","overlay-state",95491678);
var G__29276_30493 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-state","overlay-state",95491678)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29275_30492,G__29276_30493) : re_frame.core.reg_sub.call(null,G__29275_30492,G__29276_30493));
var G__29277_30495 = new cljs.core.Keyword(null,"overlay-item","overlay-item",1921913766);
var G__29278_30496 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-item","overlay-item",1921913766)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29277_30495,G__29278_30496) : re_frame.core.reg_sub.call(null,G__29277_30495,G__29278_30496));
var G__29279_30499 = new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523);
var G__29280_30500 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29279_30499,G__29280_30500) : re_frame.core.reg_sub.call(null,G__29279_30499,G__29280_30500));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-state-change","overlay-state-change",1441777589),(function (db,p__29281){
var vec__29282 = p__29281;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29282,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29282,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-state","overlay-state",95491678)], null),state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-item-change","overlay-item-change",-1911220370),(function (db,p__29285){
var vec__29286 = p__29285;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29286,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29286,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-item","overlay-item",1921913766)], null),item_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-params-change","overlay-params-change",171897048),(function (db,p__29289){
var vec__29290 = p__29289;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29290,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29290,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523)], null),params);
}));
var G__29293_30508 = new cljs.core.Keyword(null,"initialized?","initialized?",1707939066);
var G__29294_30509 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"initialized?","initialized?",1707939066)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29293_30508,G__29294_30509) : re_frame.core.reg_sub.call(null,G__29293_30508,G__29294_30509));
var G__29295_30510 = new cljs.core.Keyword(null,"state-section","state-section",-1039543225);
var G__29296_30511 = (function (db,p__29297){
var vec__29298 = p__29297;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29298,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29298,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29295_30510,G__29296_30511) : re_frame.core.reg_sub.call(null,G__29295_30510,G__29296_30511));
var G__29301_30515 = new cljs.core.Keyword(null,"state-section-id","state-section-id",210581770);
var G__29302_30516 = (function (db,p__29303){
var vec__29304 = p__29303;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29304,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29304,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29301_30515,G__29302_30516) : re_frame.core.reg_sub.call(null,G__29301_30515,G__29302_30516));
var G__29307_30518 = new cljs.core.Keyword(null,"state-section-ids","state-section-ids",1524494040);
var G__29308_30519 = (function (db,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null))], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29307_30518,G__29308_30519) : re_frame.core.reg_sub.call(null,G__29307_30518,G__29308_30519));
var G__29309_30521 = new cljs.core.Keyword(null,"state-section-tab","state-section-tab",1111796390);
var G__29310_30522 = (function (db,p__29311){
var vec__29312 = p__29311;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29312,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29312,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29309_30521,G__29310_30522) : re_frame.core.reg_sub.call(null,G__29309_30521,G__29310_30522));
var G__29315_30524 = new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226);
var G__29316_30525 = (function (db,p__29317){
var vec__29318 = p__29317;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29318,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29318,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29315_30524,G__29316_30525) : re_frame.core.reg_sub.call(null,G__29315_30524,G__29316_30525));
var G__29321_30527 = new cljs.core.Keyword(null,"layout","layout",-2120940921);
var G__29322_30528 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29321_30527,G__29322_30528) : re_frame.core.reg_sub.call(null,G__29321_30527,G__29322_30528));
var G__29323_30530 = new cljs.core.Keyword(null,"section","section",-300141526);
var G__29324_30531 = (function (db,p__29325){
var vec__29326 = p__29325;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29326,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29326,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29323_30530,G__29324_30531) : re_frame.core.reg_sub.call(null,G__29323_30530,G__29324_30531));
var G__29329_30532 = new cljs.core.Keyword(null,"section-type","section-type",-1815294838);
var G__29330_30533 = (function (db,p__29331){
var vec__29332 = p__29331;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29332,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29332,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"type","type",1174270348)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29329_30532,G__29330_30533) : re_frame.core.reg_sub.call(null,G__29329_30532,G__29330_30533));
var G__29335_30534 = new cljs.core.Keyword(null,"section-title","section-title",1261938902);
var G__29336_30535 = (function (db,p__29337){
var vec__29338 = p__29337;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29338,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29338,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29335_30534,G__29336_30535) : re_frame.core.reg_sub.call(null,G__29335_30534,G__29336_30535));
var G__29341_30536 = new cljs.core.Keyword(null,"section-tabs","section-tabs",1270711059);
var G__29342_30537 = (function (db,p__29343){
var vec__29344 = p__29343;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29344,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29344,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29341_30536,G__29342_30537) : re_frame.core.reg_sub.call(null,G__29341_30536,G__29342_30537));
var G__29347_30538 = new cljs.core.Keyword(null,"ruleset-skillbilities?","ruleset-skillbilities?",-1360174223);
var G__29348_30539 = (function (db,p__29349){
var vec__29350 = p__29349;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29350,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29350,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"skillbilities?","skillbilities?",788972706)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29347_30538,G__29348_30539) : re_frame.core.reg_sub.call(null,G__29347_30538,G__29348_30539));
var G__29353_30544 = new cljs.core.Keyword(null,"ruleset-skills","ruleset-skills",-1459168412);
var G__29354_30545 = (function (db,p__29355){
var vec__29356 = p__29355;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29356,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29356,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"skills","skills",958701426)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29353_30544,G__29354_30545) : re_frame.core.reg_sub.call(null,G__29353_30544,G__29354_30545));
var G__29359_30549 = new cljs.core.Keyword(null,"ruleset-abilities","ruleset-abilities",1582837328);
var G__29360_30550 = (function (db,p__29361){
var vec__29362 = p__29361;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29362,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29362,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"abilities","abilities",-1471386226)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29359_30549,G__29360_30550) : re_frame.core.reg_sub.call(null,G__29359_30549,G__29360_30550));
var G__29366_30552 = new cljs.core.Keyword(null,"section-tabs-full","section-tabs-full",300098194);
var G__29367_30553 = (function (db,p__29368){
var vec__29369 = p__29368;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369,(1),null);
var section_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369,(2),null);
var item_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
var section_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null));
var tabs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null));
var subtabs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"subtabs","subtabs",627577425)], null))));
if((item_id == null)){
return tabs;
} else {
return modular_roleplaying_framework.db_CRUD.insertv(tabs,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29365_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__29365_SHARP_),cljs.core.first(subtabs));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tabs))),cljs.core.rest(subtabs));
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29366_30552,G__29367_30553) : re_frame.core.reg_sub.call(null,G__29366_30552,G__29367_30553));
var G__29372_30563 = new cljs.core.Keyword(null,"active-tab","active-tab",1102432568);
var G__29373_30564 = (function (db,p__29374){
var vec__29375 = p__29374;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29375,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29375,(1),null);
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null)) | (0));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29372_30563,G__29373_30564) : re_frame.core.reg_sub.call(null,G__29372_30563,G__29373_30564));
var G__29378_30569 = new cljs.core.Keyword(null,"tab-icon","tab-icon",-601622304);
var G__29379_30571 = (function (db,p__29380){
var vec__29381 = p__29380;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29381,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29381,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"icon","icon",1679606541)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29378_30569,G__29379_30571) : re_frame.core.reg_sub.call(null,G__29378_30569,G__29379_30571));
var G__29384_30576 = new cljs.core.Keyword(null,"tab-type","tab-type",-913444495);
var G__29385_30577 = (function (db,p__29386){
var vec__29387 = p__29386;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29387,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29387,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"type","type",1174270348)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29384_30576,G__29385_30577) : re_frame.core.reg_sub.call(null,G__29384_30576,G__29385_30577));
var G__29390_30583 = new cljs.core.Keyword(null,"tab-title","tab-title",1398279061);
var G__29391_30584 = (function (db,p__29392){
var vec__29393 = p__29392;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29393,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29393,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29390_30583,G__29391_30584) : re_frame.core.reg_sub.call(null,G__29390_30583,G__29391_30584));
var G__29396_30586 = new cljs.core.Keyword(null,"tab-template","tab-template",-1557753771);
var G__29397_30587 = (function (db,p__29398){
var vec__29399 = p__29398;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29399,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29399,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"template","template",-702405684)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29396_30586,G__29397_30587) : re_frame.core.reg_sub.call(null,G__29396_30586,G__29397_30587));
var G__29402_30588 = new cljs.core.Keyword(null,"tab-items","tab-items",1934951825);
var G__29403_30589 = (function (db,p__29404){
var vec__29405 = p__29404;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29405,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29405,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"items","items",1031954938)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29402_30588,G__29403_30589) : re_frame.core.reg_sub.call(null,G__29402_30588,G__29403_30589));
var G__29408_30590 = new cljs.core.Keyword(null,"item","item",249373802);
var G__29409_30591 = (function (db,p__29410){
var vec__29411 = p__29410;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29411,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29411,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29408_30590,G__29409_30591) : re_frame.core.reg_sub.call(null,G__29408_30590,G__29409_30591));
var G__29414_30592 = new cljs.core.Keyword(null,"item-title","item-title",-249793661);
var G__29415_30593 = (function (db,p__29416){
var vec__29417 = p__29416;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29417,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29417,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29414_30592,G__29415_30593) : re_frame.core.reg_sub.call(null,G__29414_30592,G__29415_30593));
var G__29420_30596 = new cljs.core.Keyword(null,"item-type","item-type",-73995695);
var G__29421_30597 = (function (db,p__29422){
var vec__29423 = p__29422;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29423,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29423,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"type","type",1174270348)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29420_30596,G__29421_30597) : re_frame.core.reg_sub.call(null,G__29420_30596,G__29421_30597));
var G__29426_30602 = new cljs.core.Keyword(null,"item-details","item-details",-987623935);
var G__29427_30603 = (function (db,p__29428){
var vec__29429 = p__29428;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29429,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29429,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29426_30602,G__29427_30603) : re_frame.core.reg_sub.call(null,G__29426_30602,G__29427_30603));
var G__29432_30609 = new cljs.core.Keyword(null,"item-text","item-text",-2146003655);
var G__29433_30610 = (function (db,p__29434){
var vec__29435 = p__29434;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29435,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29435,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29432_30609,G__29433_30610) : re_frame.core.reg_sub.call(null,G__29432_30609,G__29433_30610));
var G__29438_30616 = new cljs.core.Keyword(null,"item-subtabs","item-subtabs",-894115020);
var G__29439_30617 = (function (db,p__29440){
var vec__29441 = p__29440;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29441,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29441,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"subtabs","subtabs",627577425)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29438_30616,G__29439_30617) : re_frame.core.reg_sub.call(null,G__29438_30616,G__29439_30617));
var G__29444_30621 = new cljs.core.Keyword(null,"ruleset-skills","ruleset-skills",-1459168412);
var G__29445_30622 = (function (db,p__29446){
var vec__29447 = p__29446;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29447,(0),null);
var ruleset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29447,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),ruleset_id,new cljs.core.Keyword(null,"skills","skills",958701426)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29444_30621,G__29445_30622) : re_frame.core.reg_sub.call(null,G__29444_30621,G__29445_30622));
var G__29450_30628 = new cljs.core.Keyword(null,"ruleset-skillbilities","ruleset-skillbilities",2131758022);
var G__29451_30629 = (function (db,p__29452){
var vec__29453 = p__29452;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29453,(0),null);
var ruleset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29453,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),ruleset_id,new cljs.core.Keyword(null,"skillbilities?","skillbilities?",788972706)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29450_30628,G__29451_30629) : re_frame.core.reg_sub.call(null,G__29450_30628,G__29451_30629));
var G__29456_30631 = new cljs.core.Keyword(null,"item-password","item-password",501455667);
var G__29457_30632 = (function (db,p__29458){
var vec__29459 = p__29458;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29459,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29459,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"password","password",417022471)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29456_30631,G__29457_30632) : re_frame.core.reg_sub.call(null,G__29456_30631,G__29457_30632));
var G__29462_30633 = new cljs.core.Keyword(null,"unlock-creature","unlock-creature",1380788176);
var G__29463_30634 = (function (db,p__29464){
var vec__29465 = p__29464;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29465,(0),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29465,(1),null);
var creature_id = cljs.core.filterv((function (item_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"password","password",417022471)], null)),password);
}),cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null))));
if((creature_id == null)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Password does not correspond with a creature."], 0));
} else {
return creature_id;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29462_30633,G__29463_30634) : re_frame.core.reg_sub.call(null,G__29462_30633,G__29463_30634));
var G__29468_30640 = new cljs.core.Keyword(null,"creature-title","creature-title",-418581929);
var G__29469_30641 = (function (db,p__29470){
var vec__29471 = p__29470;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29471,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29471,(1),null);
var character = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id], null));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(character)),", the ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"heritage","heritage",-1161447356).cljs$core$IFn$_invoke$arity$1(character))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(character))].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29468_30640,G__29469_30641) : re_frame.core.reg_sub.call(null,G__29468_30640,G__29469_30641));
var G__29474_30646 = new cljs.core.Keyword(null,"creature-summary","creature-summary",2046084639);
var G__29475_30647 = (function (db,p__29476){
var vec__29477 = p__29476;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29477,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29477,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary","summary",380847952)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29474_30646,G__29475_30647) : re_frame.core.reg_sub.call(null,G__29474_30646,G__29475_30647));
var G__29480_30648 = new cljs.core.Keyword(null,"creature-summary-state","creature-summary-state",-780207604);
var G__29481_30649 = (function (db,p__29482){
var vec__29483 = p__29482;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29483,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29483,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary-state","summary-state",163086774)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29480_30648,G__29481_30649) : re_frame.core.reg_sub.call(null,G__29480_30648,G__29481_30649));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-summary-state-change","creature-summary-state-change",714628401),(function (db,p__29486){
var vec__29487 = p__29486;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29487,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29487,(1),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29487,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary-state","summary-state",163086774)], null),new_state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-summary-update","creature-summary-update",99922919),(function (db,p__29490){
var vec__29491 = p__29490;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29491,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29491,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29491,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary","summary",380847952)], null),changes);
}));
var G__29494_30655 = new cljs.core.Keyword(null,"creature-stats","creature-stats",961451436);
var G__29495_30656 = (function (db,p__29496){
var vec__29497 = p__29496;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29497,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29497,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29494_30655,G__29495_30656) : re_frame.core.reg_sub.call(null,G__29494_30655,G__29495_30656));
var G__29500_30659 = new cljs.core.Keyword(null,"coordination","coordination",1076145876);
var G__29501_30660 = (function (db,p__29502){
var vec__29503 = p__29502;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29503,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29503,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29500_30659,G__29501_30660) : re_frame.core.reg_sub.call(null,G__29500_30659,G__29501_30660));
var G__29506_30661 = new cljs.core.Keyword(null,"reflexes","reflexes",-1252736336);
var G__29507_30662 = (function (db,p__29508){
var vec__29509 = p__29508;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29509,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29509,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29506_30661,G__29507_30662) : re_frame.core.reg_sub.call(null,G__29506_30661,G__29507_30662));
var G__29512_30665 = new cljs.core.Keyword(null,"endurance","endurance",2002692038);
var G__29513_30666 = (function (db,p__29514){
var vec__29515 = p__29514;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29515,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29515,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29512_30665,G__29513_30666) : re_frame.core.reg_sub.call(null,G__29512_30665,G__29513_30666));
var G__29518_30668 = new cljs.core.Keyword(null,"exertion","exertion",-1240242361);
var G__29519_30669 = (function (db,p__29520){
var vec__29521 = p__29520;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29521,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29521,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29518_30668,G__29519_30669) : re_frame.core.reg_sub.call(null,G__29518_30668,G__29519_30669));
var G__29524_30671 = new cljs.core.Keyword(null,"instinct","instinct",2090002619);
var G__29525_30672 = (function (db,p__29526){
var vec__29527 = p__29526;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29527,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29527,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29524_30671,G__29525_30672) : re_frame.core.reg_sub.call(null,G__29524_30671,G__29525_30672));
var G__29530_30673 = new cljs.core.Keyword(null,"perseverance","perseverance",-470288293);
var G__29531_30674 = (function (db,p__29532){
var vec__29533 = p__29532;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29533,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29533,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29530_30673,G__29531_30674) : re_frame.core.reg_sub.call(null,G__29530_30673,G__29531_30674));
var G__29536_30676 = new cljs.core.Keyword(null,"concentration","concentration",1539606986);
var G__29537_30677 = (function (db,p__29538){
var vec__29539 = p__29538;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29539,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29539,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29536_30676,G__29537_30677) : re_frame.core.reg_sub.call(null,G__29536_30676,G__29537_30677));
var G__29542_30679 = new cljs.core.Keyword(null,"recognition","recognition",1793959531);
var G__29543_30680 = (function (db,p__29544){
var vec__29545 = p__29544;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29545,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29545,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29542_30679,G__29543_30680) : re_frame.core.reg_sub.call(null,G__29542_30679,G__29543_30680));
var G__29548_30683 = new cljs.core.Keyword(null,"comprehension","comprehension",-756656463);
var G__29549_30684 = (function (db,p__29550){
var vec__29551 = p__29550;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29551,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29551,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29548_30683,G__29549_30684) : re_frame.core.reg_sub.call(null,G__29548_30683,G__29549_30684));
var G__29554_30686 = new cljs.core.Keyword(null,"persuasion","persuasion",1089798916);
var G__29555_30687 = (function (db,p__29556){
var vec__29557 = p__29556;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29557,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29557,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29554_30686,G__29555_30687) : re_frame.core.reg_sub.call(null,G__29554_30686,G__29555_30687));
var G__29560_30691 = new cljs.core.Keyword(null,"insight","insight",-1501263459);
var G__29561_30692 = (function (db,p__29562){
var vec__29563 = p__29562;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29563,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29563,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29560_30691,G__29561_30692) : re_frame.core.reg_sub.call(null,G__29560_30691,G__29561_30692));
var G__29566_30696 = new cljs.core.Keyword(null,"connections","connections",-2064090887);
var G__29567_30697 = (function (db,p__29568){
var vec__29569 = p__29568;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29569,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29569,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29566_30696,G__29567_30697) : re_frame.core.reg_sub.call(null,G__29566_30696,G__29567_30697));
var G__29572_30700 = new cljs.core.Keyword(null,"might","might",-1328381368);
var G__29573_30701 = (function (db,p__29574){
var vec__29575 = p__29574;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29575,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29575,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29572_30700,G__29573_30701) : re_frame.core.reg_sub.call(null,G__29572_30700,G__29573_30701));
var G__29578_30702 = new cljs.core.Keyword(null,"finesse","finesse",891142453);
var G__29579_30703 = (function (db,p__29580){
var vec__29581 = p__29580;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29581,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29581,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29578_30702,G__29579_30703) : re_frame.core.reg_sub.call(null,G__29578_30702,G__29579_30703));
var G__29584_30704 = new cljs.core.Keyword(null,"fortitude","fortitude",1187352341);
var G__29585_30705 = (function (db,p__29586){
var vec__29587 = p__29586;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29587,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29587,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29584_30704,G__29585_30705) : re_frame.core.reg_sub.call(null,G__29584_30704,G__29585_30705));
var G__29590_30708 = new cljs.core.Keyword(null,"ambition","ambition",-153662933);
var G__29591_30709 = (function (db,p__29592){
var vec__29593 = p__29592;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29593,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29593,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29590_30708,G__29591_30709) : re_frame.core.reg_sub.call(null,G__29590_30708,G__29591_30709));
var G__29596_30715 = new cljs.core.Keyword(null,"discipline","discipline",343863089);
var G__29597_30716 = (function (db,p__29598){
var vec__29599 = p__29598;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29599,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29599,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29596_30715,G__29597_30716) : re_frame.core.reg_sub.call(null,G__29596_30715,G__29597_30716));
var G__29602_30718 = new cljs.core.Keyword(null,"dedication","dedication",2052444551);
var G__29603_30719 = (function (db,p__29604){
var vec__29605 = p__29604;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29605,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29605,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29602_30718,G__29603_30719) : re_frame.core.reg_sub.call(null,G__29602_30718,G__29603_30719));
var G__29608_30720 = new cljs.core.Keyword(null,"intellect","intellect",414822757);
var G__29609_30721 = (function (db,p__29610){
var vec__29611 = p__29610;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29611,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29611,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29608_30720,G__29609_30721) : re_frame.core.reg_sub.call(null,G__29608_30720,G__29609_30721));
var G__29614_30725 = new cljs.core.Keyword(null,"intuition","intuition",1122677380);
var G__29615_30726 = (function (db,p__29616){
var vec__29617 = p__29616;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29617,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29617,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29614_30725,G__29615_30726) : re_frame.core.reg_sub.call(null,G__29614_30725,G__29615_30726));
var G__29620_30730 = new cljs.core.Keyword(null,"stability","stability",1733225509);
var G__29621_30731 = (function (db,p__29622){
var vec__29623 = p__29622;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29623,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29623,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29620_30730,G__29621_30731) : re_frame.core.reg_sub.call(null,G__29620_30730,G__29621_30731));
var G__29626_30734 = new cljs.core.Keyword(null,"presence","presence",-1580756953);
var G__29627_30735 = (function (db,p__29628){
var vec__29629 = p__29628;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29629,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29629,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29626_30734,G__29627_30735) : re_frame.core.reg_sub.call(null,G__29626_30734,G__29627_30735));
var G__29632_30737 = new cljs.core.Keyword(null,"wit","wit",-1627445195);
var G__29633_30738 = (function (db,p__29634){
var vec__29635 = p__29634;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29635,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29635,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29632_30737,G__29633_30738) : re_frame.core.reg_sub.call(null,G__29632_30737,G__29633_30738));
var G__29638_30743 = new cljs.core.Keyword(null,"poise","poise",-429377896);
var G__29639_30744 = (function (db,p__29640){
var vec__29641 = p__29640;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29641,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29641,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29638_30743,G__29639_30744) : re_frame.core.reg_sub.call(null,G__29638_30743,G__29639_30744));
var G__29644_30746 = new cljs.core.Keyword(null,"creature-resources","creature-resources",495041557);
var G__29645_30747 = (function (db,p__29646){
var vec__29647 = p__29646;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29647,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29647,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29644_30746,G__29645_30747) : re_frame.core.reg_sub.call(null,G__29644_30746,G__29645_30747));
var G__29650_30749 = new cljs.core.Keyword(null,"creature-resources-typed","creature-resources-typed",728372146);
var G__29651_30750 = (function (db,p__29652){
var vec__29653 = p__29652;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29653,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29653,(1),null);
var resource_subtype_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29653,(2),null);
return cljs.core.filterv((function (resource_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"subtype","subtype",-2092672993)], null)),resource_subtype_id);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29650_30749,G__29651_30750) : re_frame.core.reg_sub.call(null,G__29650_30749,G__29651_30750));
var G__29656_30752 = new cljs.core.Keyword(null,"creature-resources-typed-quantified","creature-resources-typed-quantified",-1136110511);
var G__29657_30753 = (function (db,p__29658){
var vec__29659 = p__29658;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29659,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29659,(1),null);
var resource_subtype_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29659,(2),null);
return cljs.core.frequencies((function (){var G__29662 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-resources-typed","creature-resources-typed",728372146),creature_id,resource_subtype_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29662) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29662));
})());
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29656_30752,G__29657_30753) : re_frame.core.reg_sub.call(null,G__29656_30752,G__29657_30753));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-add-resource","creature-add-resource",409356036),(function (db,p__29663){
var vec__29664 = p__29663;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29664,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29664,(1),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29664,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null),cljs.core.conj,resource_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-remove-resource","creature-remove-resource",-1835624647),(function (db,p__29667){
var vec__29668 = p__29667;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29668,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29668,(1),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29668,(2),null);
var resource_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
var index = (0);
while(true){
if((index >= cljs.core.count(resource_list))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Resource not found."], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resource_id,(resource_list.cljs$core$IFn$_invoke$arity$1 ? resource_list.cljs$core$IFn$_invoke$arity$1(index) : resource_list.call(null,index)))){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null),modular_roleplaying_framework.db_CRUD.exsert(resource_list,(index - (1))));
} else {
var G__30765 = resource_list;
var G__30766 = (index + (1));
resource_list = G__30765;
index = G__30766;
continue;
}
}
break;
}
}));
var G__29671_30767 = new cljs.core.Keyword(null,"creature-feature-list","creature-feature-list",225155610);
var G__29672_30768 = (function (db,p__29673){
var vec__29674 = p__29673;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29674,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29674,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29671_30767,G__29672_30768) : re_frame.core.reg_sub.call(null,G__29671_30767,G__29672_30768));
var G__29677_30769 = new cljs.core.Keyword(null,"creature-notes","creature-notes",-2029123219);
var G__29678_30770 = (function (db,p__29679){
var vec__29680 = p__29679;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29680,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29680,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29677_30769,G__29678_30770) : re_frame.core.reg_sub.call(null,G__29677_30769,G__29678_30770));
var G__29683_30774 = new cljs.core.Keyword(null,"creature-notes-state","creature-notes-state",-471696466);
var G__29684_30775 = (function (db,p__29685){
var vec__29686 = p__29685;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29686,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29686,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes-state","notes-state",-1025022243)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29683_30774,G__29684_30775) : re_frame.core.reg_sub.call(null,G__29683_30774,G__29684_30775));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-notes-state-change","creature-notes-state-change",-1510434125),(function (db,p__29689){
var vec__29690 = p__29689;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29690,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29690,(1),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29690,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes-state","notes-state",-1025022243)], null),new_state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-notes-update","creature-notes-update",-350278924),(function (db,p__29693){
var vec__29694 = p__29693;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29694,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29694,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29694,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes","notes",-1039600523)], null),changes);
}));
var G__29697_30784 = new cljs.core.Keyword(null,"resource-title","resource-title",904657571);
var G__29698_30785 = (function (db,p__29699){
var vec__29700 = p__29699;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29700,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29700,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29697_30784,G__29698_30785) : re_frame.core.reg_sub.call(null,G__29697_30784,G__29698_30785));
var G__29703_30786 = new cljs.core.Keyword(null,"resource-subtype","resource-subtype",1660664175);
var G__29704_30787 = (function (db,p__29705){
var vec__29706 = p__29705;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29706,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29706,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"subtype","subtype",-2092672993)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29703_30786,G__29704_30787) : re_frame.core.reg_sub.call(null,G__29703_30786,G__29704_30787));
var G__29709_30791 = new cljs.core.Keyword(null,"resource-properties","resource-properties",-677994762);
var G__29710_30792 = (function (db,p__29711){
var vec__29712 = p__29711;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29712,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29712,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"properties","properties",685819552)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29709_30791,G__29710_30792) : re_frame.core.reg_sub.call(null,G__29709_30791,G__29710_30792));
var G__29715_30794 = new cljs.core.Keyword(null,"resource-quality","resource-quality",-1384712256);
var G__29716_30795 = (function (db,p__29717){
var vec__29718 = p__29717;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29718,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29718,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"benefits","benefits",20804277),new cljs.core.Keyword(null,"quality","quality",147850199)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29715_30794,G__29716_30795) : re_frame.core.reg_sub.call(null,G__29715_30794,G__29716_30795));
var G__29721_30797 = new cljs.core.Keyword(null,"resource-quality-bonus","resource-quality-bonus",496784380);
var G__29722_30798 = (function (db,p__29723){
var vec__29724 = p__29723;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29724,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29724,(1),null);
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29721_30797,G__29722_30798) : re_frame.core.reg_sub.call(null,G__29721_30797,G__29722_30798));
var G__29727_30800 = new cljs.core.Keyword(null,"resource-power","resource-power",-283348905);
var G__29728_30801 = (function (db,p__29729){
var vec__29730 = p__29729;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29730,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29730,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"benefits","benefits",20804277),new cljs.core.Keyword(null,"power","power",-937852079)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29727_30800,G__29728_30801) : re_frame.core.reg_sub.call(null,G__29727_30800,G__29728_30801));
var G__29733_30806 = new cljs.core.Keyword(null,"resource-power-bonus","resource-power-bonus",669478217);
var G__29734_30807 = (function (db,p__29735){
var vec__29736 = p__29735;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29736,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29736,(1),null);
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29733_30806,G__29734_30807) : re_frame.core.reg_sub.call(null,G__29733_30806,G__29734_30807));
var G__29739_30808 = new cljs.core.Keyword(null,"resource-flavor-text","resource-flavor-text",429244330);
var G__29740_30809 = (function (db,p__29741){
var vec__29742 = p__29741;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29742,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29742,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"flavor-text","flavor-text",-227991981)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29739_30808,G__29740_30809) : re_frame.core.reg_sub.call(null,G__29739_30808,G__29740_30809));
var G__29745_30815 = new cljs.core.Keyword(null,"all-features","all-features",-969912234);
var G__29746_30816 = (function (db,_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__29747){
var vec__29748 = p__29747;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29748,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29748,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("feature",(function (){var G__29751 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),k], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29751) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29751));
})());
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"items","items",1031954938))));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29745_30815,G__29746_30816) : re_frame.core.reg_sub.call(null,G__29745_30815,G__29746_30816));
var G__29753_30822 = new cljs.core.Keyword(null,"features-by-property","features-by-property",-1888070616);
var G__29754_30823 = (function (db,p__29755){
var vec__29756 = p__29755;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29756,(0),null);
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29756,(1),null);
return cljs.core.filterv((function (feature){
return cljs.core.some((function (p1__29752_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property,p1__29752_SHARP_);
}),(function (){var G__29759 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-keywords","feature-keywords",-513678207),feature], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29759) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29759));
})());
}),(function (){var G__29760 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-features","all-features",-969912234)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29760) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29760));
})());
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29753_30822,G__29754_30823) : re_frame.core.reg_sub.call(null,G__29753_30822,G__29754_30823));
var G__29761_30827 = new cljs.core.Keyword(null,"resource-features","resource-features",-1831876409);
var G__29762_30828 = (function (db,p__29763){
var vec__29764 = p__29763;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29764,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29764,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29761_30827,G__29762_30828) : re_frame.core.reg_sub.call(null,G__29761_30827,G__29762_30828));
var G__29768_30829 = new cljs.core.Keyword(null,"resource-feature-lookup","resource-feature-lookup",1465251014);
var G__29769_30830 = (function (db,p__29770){
var vec__29771 = p__29770;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29771,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29771,(1),null);
var resource_properties = (function (){var G__29774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-properties","resource-properties",-677994762),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29774) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29774));
})();
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29767_SHARP_){
var G__29775 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features-by-property","features-by-property",-1888070616),p1__29767_SHARP_], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29775) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29775));
}),resource_properties))));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29768_30829,G__29769_30830) : re_frame.core.reg_sub.call(null,G__29768_30829,G__29769_30830));
var G__29776_30833 = new cljs.core.Keyword(null,"resource-list","resource-list",1498099584);
var G__29777_30834 = (function (db,_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__29778){
var vec__29779 = p__29778;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29779,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29779,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("resource",(function (){var G__29782 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),k], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29782) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29782));
})());
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"items","items",1031954938))));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29776_30833,G__29777_30834) : re_frame.core.reg_sub.call(null,G__29776_30833,G__29777_30834));
modular_roleplaying_framework.db_CRUD.melee_weapons = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sword","Spear","Axe"], null);
modular_roleplaying_framework.db_CRUD.matches_QMARK_ = (function modular_roleplaying_framework$db_CRUD$matches_QMARK_(coll1,coll2){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,coll1,coll2)));
});
var G__29783_30839 = new cljs.core.Keyword(null,"implement","implement",832506591);
var G__29784_30840 = (function (db,p__29785){
var vec__29786 = p__29785;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29786,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29786,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Modal Tool",new cljs.core.Keyword(null,"description","description",-1428560544),"These arcane gauntlets have two modes stored: the melee mode and the ranged mode. While in melee mode, the left gauntlet produces a shield of solid aethereal force with stats equivalent to a kite shield while the right gauntlet produces a sharp aethereal blade with stats equivalent to a longsword. While in ranged mode, the two gauntlets function together as a bow with stats equivalent to a longbow. Changing from one mode to the other requires a setup action. Gain +Quality +Power on attacks with the Arcane Gauntlets as well as +Quality from your Aethereal Knowledge."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29783_30839,G__29784_30840) : re_frame.core.reg_sub.call(null,G__29783_30839,G__29784_30840));
var G__29789_30845 = new cljs.core.Keyword(null,"weapon-attack","weapon-attack",1268897249);
var G__29790_30846 = (function (db,p__29791){
var vec__29792 = p__29791;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29792,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29792,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__29795 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__29796 = properties;
if(cljs.core.truth_((function (){var G__29798 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bow"], null);
var G__29799 = expr__29796;
return (pred__29795.cljs$core$IFn$_invoke$arity$2 ? pred__29795.cljs$core$IFn$_invoke$arity$2(G__29798,G__29799) : pred__29795.call(null,G__29798,G__29799));
})())){
return "Ranged Attack";
} else {
if(cljs.core.truth_((pred__29795.cljs$core$IFn$_invoke$arity$2 ? pred__29795.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.db_CRUD.melee_weapons,expr__29796) : pred__29795.call(null,modular_roleplaying_framework.db_CRUD.melee_weapons,expr__29796)))){
return "Melee Attack";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29796)].join('')));
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__29800 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__29801 = properties;
if(cljs.core.truth_((function (){var G__29803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bow"], null);
var G__29804 = expr__29801;
return (pred__29800.cljs$core$IFn$_invoke$arity$2 ? pred__29800.cljs$core$IFn$_invoke$arity$2(G__29803,G__29804) : pred__29800.call(null,G__29803,G__29804));
})())){
return ["You may spend a main action to make a Coordination +Quality +Power check against a creature. \n                   You must have the creature targeted and the creature must be within ten zones but cannot be within the same zone. ",(function (){var pred__29814 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__29815 = properties;
if(cljs.core.truth_((function (){var G__29817 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__29818 = expr__29815;
return (pred__29814.cljs$core$IFn$_invoke$arity$2 ? pred__29814.cljs$core$IFn$_invoke$arity$2(G__29817,G__29818) : pred__29814.call(null,G__29817,G__29818));
})())){
return "As a light bow, it can be wielded alongside a shield. When partitioning the base dice pool, the resulting dice pools must have at least two dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__29819 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__29820 = expr__29815;
return (pred__29814.cljs$core$IFn$_invoke$arity$2 ? pred__29814.cljs$core$IFn$_invoke$arity$2(G__29819,G__29820) : pred__29814.call(null,G__29819,G__29820));
})())){
return "As a medium bow, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least three dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__29821 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__29822 = expr__29815;
return (pred__29814.cljs$core$IFn$_invoke$arity$2 ? pred__29814.cljs$core$IFn$_invoke$arity$2(G__29821,G__29822) : pred__29814.call(null,G__29821,G__29822));
})())){
return "As a heavy bow, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least four dice in them. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29815)].join('')));
}
}
}
})(),"This weapon deals piercing damage."].join('');
} else {
return ["You may spend a main action to make a Coordination +Quality +Power check against a creature. ",(function (){var pred__29846 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__29847 = properties;
if(cljs.core.truth_((function (){var G__29849 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sword","Spear","Axe"], null);
var G__29850 = expr__29847;
return (pred__29846.cljs$core$IFn$_invoke$arity$2 ? pred__29846.cljs$core$IFn$_invoke$arity$2(G__29849,G__29850) : pred__29846.call(null,G__29849,G__29850));
})())){
return "You must have the creature targeted and the creature must be in the same zone as you. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29847)].join('')));
}
})(),(function (){var pred__29851 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__29852 = properties;
if(cljs.core.truth_((function (){var G__29854 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__29855 = expr__29852;
return (pred__29851.cljs$core$IFn$_invoke$arity$2 ? pred__29851.cljs$core$IFn$_invoke$arity$2(G__29854,G__29855) : pred__29851.call(null,G__29854,G__29855));
})())){
return "As a light weapon, it may be wielded in either hand. When partitioning the base dice pool, the resulting dice pools must have at least two dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__29856 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__29857 = expr__29852;
return (pred__29851.cljs$core$IFn$_invoke$arity$2 ? pred__29851.cljs$core$IFn$_invoke$arity$2(G__29856,G__29857) : pred__29851.call(null,G__29856,G__29857));
})())){
return "As a medium weapon, it must be wielded in the dominant hand. When partitioning the base dice pool, the resulting dice pools must have at least three dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__29858 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__29859 = expr__29852;
return (pred__29851.cljs$core$IFn$_invoke$arity$2 ? pred__29851.cljs$core$IFn$_invoke$arity$2(G__29858,G__29859) : pred__29851.call(null,G__29858,G__29859));
})())){
return "As a heavy weapon, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least four dice in them. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29852)].join('')));
}
}
}
})(),(function (){var pred__29860 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__29861 = properties;
if(cljs.core.truth_((function (){var G__29863 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sword"], null);
var G__29864 = expr__29861;
return (pred__29860.cljs$core$IFn$_invoke$arity$2 ? pred__29860.cljs$core$IFn$_invoke$arity$2(G__29863,G__29864) : pred__29860.call(null,G__29863,G__29864));
})())){
return "This weapon may deal piercing or slashing damage.";
} else {
if(cljs.core.truth_((function (){var G__29865 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Spear"], null);
var G__29866 = expr__29861;
return (pred__29860.cljs$core$IFn$_invoke$arity$2 ? pred__29860.cljs$core$IFn$_invoke$arity$2(G__29865,G__29866) : pred__29860.call(null,G__29865,G__29866));
})())){
return "This weapon may deal piercing or bludgeoning damage.";
} else {
if(cljs.core.truth_((function (){var G__29867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Axe"], null);
var G__29868 = expr__29861;
return (pred__29860.cljs$core$IFn$_invoke$arity$2 ? pred__29860.cljs$core$IFn$_invoke$arity$2(G__29867,G__29868) : pred__29860.call(null,G__29867,G__29868));
})())){
return "This weapon may deal slashing or bludgeoning damage.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29861)].join('')));
}
}
}
})()].join('');
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29789_30845,G__29790_30846) : re_frame.core.reg_sub.call(null,G__29789_30845,G__29790_30846));
var G__29869_30862 = new cljs.core.Keyword(null,"block-attack","block-attack",-1348539017);
var G__29870_30863 = (function (db,p__29871){
var vec__29872 = p__29871;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29872,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29872,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__29875 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__29876 = properties;
if(cljs.core.truth_((function (){var G__29878 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Shield"], null);
var G__29879 = expr__29876;
return (pred__29875.cljs$core$IFn$_invoke$arity$2 ? pred__29875.cljs$core$IFn$_invoke$arity$2(G__29878,G__29879) : pred__29875.call(null,G__29878,G__29879));
})())){
return "Shield Block";
} else {
if(cljs.core.truth_((function (){var G__29880 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Armor"], null);
var G__29881 = expr__29876;
return (pred__29875.cljs$core$IFn$_invoke$arity$2 ? pred__29875.cljs$core$IFn$_invoke$arity$2(G__29880,G__29881) : pred__29875.call(null,G__29880,G__29881));
})())){
return "Armored Defense";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29876)].join('')));
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),["You may spend a main action to make a Reflexes +Quality +Power check to defend yourself against a creature's attack that targets you. \n         When partitioning the base dice pool while defending yourself against physical attacks, the resulting dice pools must have at least ",(function (){var pred__29891 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__29892 = properties;
if(cljs.core.truth_((function (){var G__29894 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__29895 = expr__29892;
return (pred__29891.cljs$core$IFn$_invoke$arity$2 ? pred__29891.cljs$core$IFn$_invoke$arity$2(G__29894,G__29895) : pred__29891.call(null,G__29894,G__29895));
})())){
return "two ";
} else {
if(cljs.core.truth_((function (){var G__29896 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__29897 = expr__29892;
return (pred__29891.cljs$core$IFn$_invoke$arity$2 ? pred__29891.cljs$core$IFn$_invoke$arity$2(G__29896,G__29897) : pred__29891.call(null,G__29896,G__29897));
})())){
return "three ";
} else {
if(cljs.core.truth_((function (){var G__29898 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__29899 = expr__29892;
return (pred__29891.cljs$core$IFn$_invoke$arity$2 ? pred__29891.cljs$core$IFn$_invoke$arity$2(G__29898,G__29899) : pred__29891.call(null,G__29898,G__29899));
})())){
return "four ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29892)].join('')));
}
}
}
})(),"dice in them. When multiple items contribute to a defense check, the partitioned dice pools must follow the size limitations of every item involved.",((modular_roleplaying_framework.db_CRUD.matches_QMARK_(properties,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Shield"], null)))?"As a shield, it can be wielded in either hand.":null)].join('')], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29869_30862,G__29870_30863) : re_frame.core.reg_sub.call(null,G__29869_30862,G__29870_30863));
var G__29900_30868 = new cljs.core.Keyword(null,"trait","trait",626034900);
var G__29901_30869 = (function (db,p__29902){
var vec__29903 = p__29902;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29903,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29903,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__29906 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__29907 = properties;
if(cljs.core.truth_((function (){var G__29909 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Flaw"], null);
var G__29910 = expr__29907;
return (pred__29906.cljs$core$IFn$_invoke$arity$2 ? pred__29906.cljs$core$IFn$_invoke$arity$2(G__29909,G__29910) : pred__29906.call(null,G__29909,G__29910));
})())){
return "Flaw";
} else {
if(cljs.core.truth_((function (){var G__29911 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ideal"], null);
var G__29912 = expr__29907;
return (pred__29906.cljs$core$IFn$_invoke$arity$2 ? pred__29906.cljs$core$IFn$_invoke$arity$2(G__29911,G__29912) : pred__29906.call(null,G__29911,G__29912));
})())){
return "Ideal";
} else {
if(cljs.core.truth_((function (){var G__29913 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attribute"], null);
var G__29914 = expr__29907;
return (pred__29906.cljs$core$IFn$_invoke$arity$2 ? pred__29906.cljs$core$IFn$_invoke$arity$2(G__29913,G__29914) : pred__29906.call(null,G__29913,G__29914));
})())){
return "Attribute";
} else {
if(cljs.core.truth_((function (){var G__29915 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Goal"], null);
var G__29916 = expr__29907;
return (pred__29906.cljs$core$IFn$_invoke$arity$2 ? pred__29906.cljs$core$IFn$_invoke$arity$2(G__29915,G__29916) : pred__29906.call(null,G__29915,G__29916));
})())){
return "Goal";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29907)].join('')));
}
}
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),["Grants +Quality +Power to checks that ",(function (){var pred__29928 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__29929 = properties;
if(cljs.core.truth_((function (){var G__29931 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Flaw"], null);
var G__29932 = expr__29929;
return (pred__29928.cljs$core$IFn$_invoke$arity$2 ? pred__29928.cljs$core$IFn$_invoke$arity$2(G__29931,G__29932) : pred__29928.call(null,G__29931,G__29932));
})())){
return "give in to your flaw. Checks that attempt to resist giving in to your flaw gain penalties equal to the Quality and Power of your flaw. ";
} else {
if(cljs.core.truth_((function (){var G__29933 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ideal"], null);
var G__29934 = expr__29929;
return (pred__29928.cljs$core$IFn$_invoke$arity$2 ? pred__29928.cljs$core$IFn$_invoke$arity$2(G__29933,G__29934) : pred__29928.call(null,G__29933,G__29934));
})())){
return "promote or exemplify your ideal. Checks that run counter to your ideal gain penalties equal to the Quality and Power of your ideal. ";
} else {
if(cljs.core.truth_((function (){var G__29935 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attribute"], null);
var G__29936 = expr__29929;
return (pred__29928.cljs$core$IFn$_invoke$arity$2 ? pred__29928.cljs$core$IFn$_invoke$arity$2(G__29935,G__29936) : pred__29928.call(null,G__29935,G__29936));
})())){
return "utilize your attribute. Checks that are opposed by your attribute gain penalties equal to the Quality and Power of your attribute. ";
} else {
if(cljs.core.truth_((function (){var G__29937 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Goal"], null);
var G__29938 = expr__29929;
return (pred__29928.cljs$core$IFn$_invoke$arity$2 ? pred__29928.cljs$core$IFn$_invoke$arity$2(G__29937,G__29938) : pred__29928.call(null,G__29937,G__29938));
})())){
return "attempt to make progress towards your goal. Checks that sacrifice progress towards your goal gain penalties equal to the Quality and Power of your goal. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29929)].join('')));
}
}
}
}
})(),"Circumstances may cause multiple traits to apply bonuses or penalties to a check. Ultimately, it is up to the DM's discretion whether a trait grants a bonus or penalty."].join('')], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29900_30868,G__29901_30869) : re_frame.core.reg_sub.call(null,G__29900_30868,G__29901_30869));
var G__29939_30879 = new cljs.core.Keyword(null,"martial-prowess","martial-prowess",-114945878);
var G__29940_30880 = (function (db,p__29941){
var vec__29942 = p__29941;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29942,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29942,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__29954 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__29955 = properties;
if(cljs.core.truth_((function (){var G__29957 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__29958 = expr__29955;
return (pred__29954.cljs$core$IFn$_invoke$arity$2 ? pred__29954.cljs$core$IFn$_invoke$arity$2(G__29957,G__29958) : pred__29954.call(null,G__29957,G__29958));
})())){
return "Light Martial Prowess";
} else {
if(cljs.core.truth_((function (){var G__29959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__29960 = expr__29955;
return (pred__29954.cljs$core$IFn$_invoke$arity$2 ? pred__29954.cljs$core$IFn$_invoke$arity$2(G__29959,G__29960) : pred__29954.call(null,G__29959,G__29960));
})())){
return "Medium Martial Prowess";
} else {
if(cljs.core.truth_((function (){var G__29961 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__29962 = expr__29955;
return (pred__29954.cljs$core$IFn$_invoke$arity$2 ? pred__29954.cljs$core$IFn$_invoke$arity$2(G__29961,G__29962) : pred__29954.call(null,G__29961,G__29962));
})())){
return "Heavy Martial Prowess";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29955)].join('')));
}
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__29972 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__29973 = properties;
if(cljs.core.truth_((function (){var G__29975 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__29976 = expr__29973;
return (pred__29972.cljs$core$IFn$_invoke$arity$2 ? pred__29972.cljs$core$IFn$_invoke$arity$2(G__29975,G__29976) : pred__29972.call(null,G__29975,G__29976));
})())){
return "Gain +Quality +Power on checks that use a light weapon, shield, or armor.";
} else {
if(cljs.core.truth_((function (){var G__29977 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__29978 = expr__29973;
return (pred__29972.cljs$core$IFn$_invoke$arity$2 ? pred__29972.cljs$core$IFn$_invoke$arity$2(G__29977,G__29978) : pred__29972.call(null,G__29977,G__29978));
})())){
return "Gain +Quality +Power on checks that use a medium weapon, shield, or armor.";
} else {
if(cljs.core.truth_((function (){var G__29979 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__29980 = expr__29973;
return (pred__29972.cljs$core$IFn$_invoke$arity$2 ? pred__29972.cljs$core$IFn$_invoke$arity$2(G__29979,G__29980) : pred__29972.call(null,G__29979,G__29980));
})())){
return "Gain +Quality +Power on checks that use a heavy weapon, shield, or armor.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29973)].join('')));
}
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29939_30879,G__29940_30880) : re_frame.core.reg_sub.call(null,G__29939_30879,G__29940_30880));
var G__29981_30888 = new cljs.core.Keyword(null,"sneak-attack","sneak-attack",-1793099532);
var G__29982_30889 = (function (db,p__29983){
var vec__29984 = p__29983;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29984,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29984,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Sneak Attack",new cljs.core.Keyword(null,"description","description",-1428560544),"Gain +Quality +Power on checks using weapons that benefit from your martial prowess to attack a creature who is unaware of your presence or who you are hidden from."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29981_30888,G__29982_30889) : re_frame.core.reg_sub.call(null,G__29981_30888,G__29982_30889));
var G__29987_30893 = new cljs.core.Keyword(null,"combat-maneuvers","combat-maneuvers",-846517552);
var G__29988_30894 = (function (db,p__29989){
var vec__29990 = p__29989;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29990,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29990,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Combat Maneuvers",new cljs.core.Keyword(null,"description","description",-1428560544),"When you make a melee attack against a targeted creature, you can choose to make one of the following combat maneuvers instead: trip, shove, or disarm. If your trip attack is successful, the target falls prone. If the shove is successful, the target is moved to an adjacent zone. If the disarm is successful, the target's weapon falls to the ground in the zone that they occupy."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29987_30893,G__29988_30894) : re_frame.core.reg_sub.call(null,G__29987_30893,G__29988_30894));
var G__29993_30897 = new cljs.core.Keyword(null,"protective-stance","protective-stance",1339958411);
var G__29994_30898 = (function (db,p__29995){
var vec__29996 = p__29995;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29996,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29996,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Protective Stance",new cljs.core.Keyword(null,"description","description",-1428560544),"If a target creature within the same zone as you is attacked and you are wielding a shield for which you have martial prowess, you can make a defense check against that attack. The result of your defense check is inflicted as a flat penalty on the attack roll. The target of the attack may still make their own defense check if needed."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29993_30897,G__29994_30898) : re_frame.core.reg_sub.call(null,G__29993_30897,G__29994_30898));
var G__29999_30901 = new cljs.core.Keyword(null,"knowledge","knowledge",1188023043);
var G__30000_30902 = (function (db,p__30001){
var vec__30002 = p__30001;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30002,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30002,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Recall Information",new cljs.core.Keyword(null,"description","description",-1428560544),["Recollection +Quality +Power on checks to determine your knowledge on ",(function (){var pred__30016 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__30017 = properties;
if(cljs.core.truth_((function (){var G__30019 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religion"], null);
var G__30020 = expr__30017;
return (pred__30016.cljs$core$IFn$_invoke$arity$2 ? pred__30016.cljs$core$IFn$_invoke$arity$2(G__30019,G__30020) : pred__30016.call(null,G__30019,G__30020));
})())){
return "religious matters.";
} else {
if(cljs.core.truth_((function (){var G__30021 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aethrology"], null);
var G__30022 = expr__30017;
return (pred__30016.cljs$core$IFn$_invoke$arity$2 ? pred__30016.cljs$core$IFn$_invoke$arity$2(G__30021,G__30022) : pred__30016.call(null,G__30021,G__30022));
})())){
return "aethereal matters.";
} else {
if(cljs.core.truth_((function (){var G__30023 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medicine"], null);
var G__30024 = expr__30017;
return (pred__30016.cljs$core$IFn$_invoke$arity$2 ? pred__30016.cljs$core$IFn$_invoke$arity$2(G__30023,G__30024) : pred__30016.call(null,G__30023,G__30024));
})())){
return "medicinal matters.";
} else {
if(cljs.core.truth_((function (){var G__30025 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["History"], null);
var G__30026 = expr__30017;
return (pred__30016.cljs$core$IFn$_invoke$arity$2 ? pred__30016.cljs$core$IFn$_invoke$arity$2(G__30025,G__30026) : pred__30016.call(null,G__30025,G__30026));
})())){
return "historical matters.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30017)].join('')));
}
}
}
}
})()].join('')], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29999_30901,G__30000_30902) : re_frame.core.reg_sub.call(null,G__29999_30901,G__30000_30902));
var G__30027_30907 = new cljs.core.Keyword(null,"implement-prowess","implement-prowess",-267630211);
var G__30028_30908 = (function (db,p__30029){
var vec__30030 = p__30029;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30030,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30030,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Arcane Implement Prowess",new cljs.core.Keyword(null,"description","description",-1428560544),"You know how to access the powers stored within arcane implements. Gain +Quality on checks using arcane implements."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30027_30907,G__30028_30908) : re_frame.core.reg_sub.call(null,G__30027_30907,G__30028_30908));
var G__30033_30910 = new cljs.core.Keyword(null,"relic-prowess","relic-prowess",-1221354922);
var G__30034_30911 = (function (db,p__30035){
var vec__30036 = p__30035;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30036,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30036,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Religious Relic Prowess",new cljs.core.Keyword(null,"description","description",-1428560544),"You are capable of drawing out the power resting within religious relics. Gain +Quality +Power on checks using religious relics."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30033_30910,G__30034_30911) : re_frame.core.reg_sub.call(null,G__30033_30910,G__30034_30911));
var G__30039_30912 = new cljs.core.Keyword(null,"slight-of-hand","slight-of-hand",971131650);
var G__30040_30913 = (function (db,p__30041){
var vec__30042 = p__30041;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30042,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30042,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Sleight of Hand",new cljs.core.Keyword(null,"description","description",-1428560544),"Coordination +Quality +Power to checks attempting to plant or lift and object from someone or when attempting to secretly hide or retrieve an object on your person."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30039_30912,G__30040_30913) : re_frame.core.reg_sub.call(null,G__30039_30912,G__30040_30913));
var G__30045_30915 = new cljs.core.Keyword(null,"lockpicking","lockpicking",-1008040736);
var G__30046_30916 = (function (db,p__30047){
var vec__30048 = p__30047;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30048,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30048,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Lockpicking",new cljs.core.Keyword(null,"description","description",-1428560544),"Coordination +Quality +Power to checks attempting to pick a lock. You may need certain tools to make this check."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30045_30915,G__30046_30916) : re_frame.core.reg_sub.call(null,G__30045_30915,G__30046_30916));
var G__30051_30919 = new cljs.core.Keyword(null,"reputation","reputation",-898759917);
var G__30052_30920 = (function (db,p__30053){
var vec__30054 = p__30053;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30054,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30054,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Reputation",new cljs.core.Keyword(null,"description","description",-1428560544),"Gain +Quality +Power when making checks to persuade someone who is aware of your reputation."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30051_30919,G__30052_30920) : re_frame.core.reg_sub.call(null,G__30051_30919,G__30052_30920));
var G__30057_30921 = new cljs.core.Keyword(null,"membership","membership",254556333);
var G__30058_30922 = (function (db,p__30059){
var vec__30060 = p__30059;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30060,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30060,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Membership Benefits",new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__30063 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__30064 = properties;
if(cljs.core.truth_((function (){var G__30066 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Political"], null);
var G__30067 = expr__30064;
return (pred__30063.cljs$core$IFn$_invoke$arity$2 ? pred__30063.cljs$core$IFn$_invoke$arity$2(G__30066,G__30067) : pred__30063.call(null,G__30066,G__30067));
})())){
return "Your political connections grant you access to resources and favors. Gain +Quality +Power when making social checks with those you have political sway with.";
} else {
if(cljs.core.truth_((function (){var G__30068 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religious"], null);
var G__30069 = expr__30064;
return (pred__30063.cljs$core$IFn$_invoke$arity$2 ? pred__30063.cljs$core$IFn$_invoke$arity$2(G__30068,G__30069) : pred__30063.call(null,G__30068,G__30069));
})())){
return "Your religious connections grant you access to resources, favors, lodging, and healing. Gain +Quality +Power when making social checks with those who share your religious beliefs.";
} else {
if(cljs.core.truth_((function (){var G__30070 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Guild"], null);
var G__30071 = expr__30064;
return (pred__30063.cljs$core$IFn$_invoke$arity$2 ? pred__30063.cljs$core$IFn$_invoke$arity$2(G__30070,G__30071) : pred__30063.call(null,G__30070,G__30071));
})())){
return "Your economic connections grant you access to resources and favors. Gain +Quality +Power when making social checks with your business associates.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30064)].join('')));
}
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30057_30921,G__30058_30922) : re_frame.core.reg_sub.call(null,G__30057_30921,G__30058_30922));
var G__30072_30931 = new cljs.core.Keyword(null,"relationship","relationship",670482699);
var G__30073_30932 = (function (db,p__30074){
var vec__30075 = p__30074;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30075,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30075,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Friendship",new cljs.core.Keyword(null,"description","description",-1428560544),"Your relationship gives you access to resources and favors. Gain +Quality +Power when making social checks with this individual."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30072_30931,G__30073_30932) : re_frame.core.reg_sub.call(null,G__30072_30931,G__30073_30932));
var G__30078_30934 = new cljs.core.Keyword(null,"potion","potion",1292791805);
var G__30079_30935 = (function (db,p__30080){
var vec__30081 = p__30080;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30081,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30081,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__30084 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__30085 = properties;
if(cljs.core.truth_((function (){var G__30087 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Healing"], null);
var G__30088 = expr__30085;
return (pred__30084.cljs$core$IFn$_invoke$arity$2 ? pred__30084.cljs$core$IFn$_invoke$arity$2(G__30087,G__30088) : pred__30084.call(null,G__30087,G__30088));
})())){
return "Cure Wounds";
} else {
return "Drink Potion";
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__30089 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__30090 = properties;
if(cljs.core.truth_((function (){var G__30092 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Healing"], null);
var G__30093 = expr__30090;
return (pred__30089.cljs$core$IFn$_invoke$arity$2 ? pred__30089.cljs$core$IFn$_invoke$arity$2(G__30092,G__30093) : pred__30089.call(null,G__30092,G__30093));
})())){
return "When consumed, this potion heals 1 point of damage and grants +1d on healing checks for the physical domain.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30090)].join('')));
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30078_30934,G__30079_30935) : re_frame.core.reg_sub.call(null,G__30078_30934,G__30079_30935));
var G__30094_30938 = new cljs.core.Keyword(null,"poison","poison",566911550);
var G__30095_30939 = (function (db,p__30096){
var vec__30097 = p__30096;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30097,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30097,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Inflict Poison",new cljs.core.Keyword(null,"description","description",-1428560544),"When ingested, the infected creature must make a physical healing check with a Target Number of 6. If they fail, then they take -1d -2 on all of their checks for 1d4 hours. If they succeed, then they only take -1d on all of their checks for the next hour. Contains 3 doses which can be applied through ingesting food or drink that contains the poison or the user can apply the poison to a weapon that deals piercing or slashing damage and hit the creature with the weapon."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30094_30938,G__30095_30939) : re_frame.core.reg_sub.call(null,G__30094_30938,G__30095_30939));
var G__30100_30943 = new cljs.core.Keyword(null,"tool","tool",-1298696470);
var G__30101_30944 = (function (db,p__30102){
var vec__30103 = p__30102;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30103,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30103,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Utilize Tool",new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__30106 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__30107 = properties;
if(cljs.core.truth_((function (){var G__30109 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Climbing"], null);
var G__30110 = expr__30107;
return (pred__30106.cljs$core$IFn$_invoke$arity$2 ? pred__30106.cljs$core$IFn$_invoke$arity$2(G__30109,G__30110) : pred__30106.call(null,G__30109,G__30110));
})())){
return "Gain +Quality +Power on checks attempting to climb walls, cliffs, trees, etc.";
} else {
if(cljs.core.truth_((function (){var G__30111 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Larceny"], null);
var G__30112 = expr__30107;
return (pred__30106.cljs$core$IFn$_invoke$arity$2 ? pred__30106.cljs$core$IFn$_invoke$arity$2(G__30111,G__30112) : pred__30106.call(null,G__30111,G__30112));
})())){
return "Gain +Quality +Power on checks attempting to open doors and locks or to disarm traps and devices while using these tools.";
} else {
return "You use the tool!";
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30100_30943,G__30101_30944) : re_frame.core.reg_sub.call(null,G__30100_30943,G__30101_30944));
var G__30113_30951 = new cljs.core.Keyword(null,"book","book",-918152214);
var G__30114_30952 = (function (db,p__30115){
var vec__30116 = p__30115;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30116,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30116,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__30119 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__30120 = properties;
if(cljs.core.truth_((function (){var G__30122 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religious"], null);
var G__30123 = expr__30120;
return (pred__30119.cljs$core$IFn$_invoke$arity$2 ? pred__30119.cljs$core$IFn$_invoke$arity$2(G__30122,G__30123) : pred__30119.call(null,G__30122,G__30123));
})())){
return "Prayer of Healing";
} else {
if(cljs.core.truth_((function (){var G__30124 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medicinal"], null);
var G__30125 = expr__30120;
return (pred__30119.cljs$core$IFn$_invoke$arity$2 ? pred__30119.cljs$core$IFn$_invoke$arity$2(G__30124,G__30125) : pred__30119.call(null,G__30124,G__30125));
})())){
return "Common Treatments";
} else {
if(cljs.core.truth_((function (){var G__30126 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aethereal"], null);
var G__30127 = expr__30120;
return (pred__30119.cljs$core$IFn$_invoke$arity$2 ? pred__30119.cljs$core$IFn$_invoke$arity$2(G__30126,G__30127) : pred__30119.call(null,G__30126,G__30127));
})())){
return "Arcane Knowledge";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30120)].join('')));
}
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__30128 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__30129 = properties;
if(cljs.core.truth_((function (){var G__30131 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religious"], null);
var G__30132 = expr__30129;
return (pred__30128.cljs$core$IFn$_invoke$arity$2 ? pred__30128.cljs$core$IFn$_invoke$arity$2(G__30131,G__30132) : pred__30128.call(null,G__30131,G__30132));
})())){
return "Exertion +Quality +Power with a Target Number of 5 to pray over a flame to imbue it with the healing powers of Heilm. On a success, the flame heals a number of physical, spiritual, and mental wounds equal to the result of the check at the rate of 1 wound per hour and can be distributed among any number of creatures. On a failure, you take a number of spiritual wounds equal to the amount that you failed by. This prayer can only be made once per day.";
} else {
if(cljs.core.truth_((function (){var G__30133 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medicinal"], null);
var G__30134 = expr__30129;
return (pred__30128.cljs$core$IFn$_invoke$arity$2 ? pred__30128.cljs$core$IFn$_invoke$arity$2(G__30133,G__30134) : pred__30128.call(null,G__30133,G__30134));
})())){
return "Concentration +Quality +Power on checks using herbs from the Four Duchies to treat wounds or illnesses.";
} else {
if(cljs.core.truth_((function (){var G__30135 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aethereal"], null);
var G__30136 = expr__30129;
return (pred__30128.cljs$core$IFn$_invoke$arity$2 ? pred__30128.cljs$core$IFn$_invoke$arity$2(G__30135,G__30136) : pred__30128.call(null,G__30135,G__30136));
})())){
return "Gain +Quality +Power on checks that attempting to understand or use objects, text, or rituals that are of Eldari origin.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30129)].join('')));
}
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30113_30951,G__30114_30952) : re_frame.core.reg_sub.call(null,G__30113_30951,G__30114_30952));
var G__30137_30961 = new cljs.core.Keyword(null,"coin","coin",-227557189);
var G__30138_30962 = (function (db,p__30139){
var vec__30140 = p__30139;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30140,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30140,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Gold",new cljs.core.Keyword(null,"description","description",-1428560544),"Gold is a standard unit of exchange for goods and services. It may also be used to influence the outcomes of persuasion checks depending on the recipient's disposition towards bribery."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30137_30961,G__30138_30962) : re_frame.core.reg_sub.call(null,G__30137_30961,G__30138_30962));
var G__30143_30966 = new cljs.core.Keyword(null,"feature-title","feature-title",2026798069);
var G__30144_30967 = (function (db,p__30145){
var vec__30146 = p__30145;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30146,(0),null);
var feature = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30146,(1),null);
var resource_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30146,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30149 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [feature,resource_properties], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__30149) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__30149));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30143_30966,G__30144_30967) : re_frame.core.reg_sub.call(null,G__30143_30966,G__30144_30967));
var G__30150_30970 = new cljs.core.Keyword(null,"feature-details","feature-details",96542810);
var G__30151_30971 = (function (db,p__30152){
var vec__30153 = p__30152;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30153,(0),null);
var feature = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30153,(1),null);
var resource_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30153,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [feature,resource_properties], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__30156) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__30156));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30150_30970,G__30151_30971) : re_frame.core.reg_sub.call(null,G__30150_30970,G__30151_30971));
var G__30157_30974 = new cljs.core.Keyword(null,"heritage-details","heritage-details",517842258);
var G__30158_30975 = (function (db,p__30159){
var vec__30160 = p__30159;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30160,(0),null);
var heritage_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30160,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),heritage_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30157_30974,G__30158_30975) : re_frame.core.reg_sub.call(null,G__30157_30974,G__30158_30975));
var G__30163_30976 = new cljs.core.Keyword(null,"heritage-resources","heritage-resources",-1286324504);
var G__30164_30977 = (function (db,p__30165){
var vec__30166 = p__30165;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30166,(0),null);
var heritage_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30166,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),heritage_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30163_30976,G__30164_30977) : re_frame.core.reg_sub.call(null,G__30163_30976,G__30164_30977));
var G__30169_30982 = new cljs.core.Keyword(null,"heritage-features","heritage-features",-1746727718);
var G__30170_30983 = (function (db,p__30171){
var vec__30172 = p__30171;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30172,(0),null);
var heritage_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30172,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),heritage_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30169_30982,G__30170_30983) : re_frame.core.reg_sub.call(null,G__30169_30982,G__30170_30983));
var G__30175_30986 = new cljs.core.Keyword(null,"role-details","role-details",-772961800);
var G__30176_30987 = (function (db,p__30177){
var vec__30178 = p__30177;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30178,(0),null);
var role_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30178,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),role_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30175_30986,G__30176_30987) : re_frame.core.reg_sub.call(null,G__30175_30986,G__30176_30987));
var G__30181_30990 = new cljs.core.Keyword(null,"role-resources","role-resources",819423685);
var G__30182_30991 = (function (db,p__30183){
var vec__30184 = p__30183;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30184,(0),null);
var role_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30184,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),role_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30181_30990,G__30182_30991) : re_frame.core.reg_sub.call(null,G__30181_30990,G__30182_30991));
var G__30187_30994 = new cljs.core.Keyword(null,"role-features","role-features",459150250);
var G__30188_30995 = (function (db,p__30189){
var vec__30190 = p__30189;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(0),null);
var role_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),role_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30187_30994,G__30188_30995) : re_frame.core.reg_sub.call(null,G__30187_30994,G__30188_30995));
var G__30193_30996 = new cljs.core.Keyword(null,"overview","overview",-435037267);
var G__30194_30997 = (function (db,p__30195){
var vec__30196 = p__30195;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30196,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30196,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"overview","overview",-435037267)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30193_30996,G__30194_30997) : re_frame.core.reg_sub.call(null,G__30193_30996,G__30194_30997));
var G__30199_30998 = new cljs.core.Keyword(null,"base-dice-pool","base-dice-pool",-2000848897);
var G__30200_30999 = (function (db,p__30201){
var vec__30202 = p__30201;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30202,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30202,(1),null);
var skillbilities_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30202,(2),null);
var skills = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30202,(3),null);
var end = ((skillbilities_QMARK_ === true)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"base-dice-pool-variations","base-dice-pool-variations",-2068843221),new cljs.core.Keyword(null,"skillbilities","skillbilities",-571801846)], null)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"base-dice-pool-variations","base-dice-pool-variations",-2068843221),new cljs.core.Keyword(null,"skills-and-abilities","skills-and-abilities",-4029936)], null)));
var example = ((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(1)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"dice-pool-example","dice-pool-example",1828496004),new cljs.core.Keyword(null,"simple-skillbilities","simple-skillbilities",-1733944826)], null)):((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"dice-pool-example","dice-pool-example",1828496004),new cljs.core.Keyword(null,"full-skillbilities","full-skillbilities",-451516920)], null)):((((skillbilities_QMARK_ === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"dice-pool-example","dice-pool-example",1828496004),new cljs.core.Keyword(null,"skills-and-abilities","skills-and-abilities",-4029936)], null)):null)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"base-dice-pool","base-dice-pool",-2000848897)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example)].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30199_30998,G__30200_30999) : re_frame.core.reg_sub.call(null,G__30199_30998,G__30200_30999));
var G__30205_31005 = new cljs.core.Keyword(null,"bonuses-and-penalties","bonuses-and-penalties",606200007);
var G__30206_31006 = (function (db,p__30207){
var vec__30208 = p__30207;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30208,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30208,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"bonuses-and-penalties","bonuses-and-penalties",606200007)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30205_31005,G__30206_31006) : re_frame.core.reg_sub.call(null,G__30205_31005,G__30206_31006));
var G__30211_31007 = new cljs.core.Keyword(null,"splintering","splintering",-1707231919);
var G__30212_31008 = (function (db,p__30213){
var vec__30214 = p__30213;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30214,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30214,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"splintering","splintering",-1707231919)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30211_31007,G__30212_31008) : re_frame.core.reg_sub.call(null,G__30211_31007,G__30212_31008));
var G__30217_31010 = new cljs.core.Keyword(null,"caution","caution",1823615934);
var G__30218_31011 = (function (db,p__30219){
var vec__30220 = p__30219;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30220,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30220,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"caution","caution",1823615934)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30217_31010,G__30218_31011) : re_frame.core.reg_sub.call(null,G__30217_31010,G__30218_31011));
var G__30223_31012 = new cljs.core.Keyword(null,"passive-checks","passive-checks",-2057161289);
var G__30224_31013 = (function (db,p__30225){
var vec__30226 = p__30225;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30226,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30226,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"passive-checks","passive-checks",-2057161289)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30223_31012,G__30224_31013) : re_frame.core.reg_sub.call(null,G__30223_31012,G__30224_31013));
var G__30229_31014 = new cljs.core.Keyword(null,"actions","actions",-812656882);
var G__30230_31015 = (function (db,p__30231){
var vec__30232 = p__30231;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30232,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30232,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"actions","actions",-812656882)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30229_31014,G__30230_31015) : re_frame.core.reg_sub.call(null,G__30229_31014,G__30230_31015));
var G__30235_31016 = new cljs.core.Keyword(null,"moments","moments",-1541189836);
var G__30236_31017 = (function (db,p__30237){
var vec__30238 = p__30237;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30238,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30238,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"moments","moments",-1541189836)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30235_31016,G__30236_31017) : re_frame.core.reg_sub.call(null,G__30235_31016,G__30236_31017));
var G__30241_31019 = new cljs.core.Keyword(null,"rounds","rounds",1157201084);
var G__30242_31020 = (function (db,p__30243){
var vec__30244 = p__30243;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30244,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30244,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"rounds","rounds",1157201084)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30241_31019,G__30242_31020) : re_frame.core.reg_sub.call(null,G__30241_31019,G__30242_31020));
var G__30247_31023 = new cljs.core.Keyword(null,"complex-moments","complex-moments",1664654174);
var G__30248_31024 = (function (db,p__30249){
var vec__30250 = p__30249;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30250,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30250,(1),null);
var encounter_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30250,(2),null);
var splintering = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30250,(3),null);
var caution = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30250,(4),null);
var G__30253 = encounter_style;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("turn-based",G__30253)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("simultaneous",G__30253)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"beginning","beginning",77824097)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,splintering)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,caution))))?["may modify their dice pool at this point. ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,splintering))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"splintering","splintering",-1707231919)], null))):null),"Modifications to your dice pool may cause your actions to be resolved earlier or later than they otherwise would be. "].join(''):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"default","default",-1987822328)], null)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),G__30253)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["ERROR: Unrecognized encounter style in item: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join('')], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30253)].join('')));

}
}
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30247_31023,G__30248_31024) : re_frame.core.reg_sub.call(null,G__30247_31023,G__30248_31024));
var G__30254_31025 = new cljs.core.Keyword(null,"complex-rounds","complex-rounds",-1215067926);
var G__30255_31026 = (function (db,p__30256){
var vec__30257 = p__30256;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30257,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30257,(1),null);
var encounter_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30257,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"rounds","rounds",1157201084)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30254_31025,G__30255_31026) : re_frame.core.reg_sub.call(null,G__30254_31025,G__30255_31026));
var G__30260_31027 = new cljs.core.Keyword(null,"injuries","injuries",-299210720);
var G__30261_31028 = (function (db,p__30262){
var vec__30263 = p__30262;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30263,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30263,(1),null);
var damage_tiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30263,(2),null);
var recovery_tiers_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30263,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(damage_tiers,(1))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers], null));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers,new cljs.core.Keyword(null,"beginning","beginning",77824097)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((recovery_tiers_QMARK_ === true)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers,new cljs.core.Keyword(null,"recovery-tiers?","recovery-tiers?",1974730784)], null)):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers,new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30260_31027,G__30261_31028) : re_frame.core.reg_sub.call(null,G__30260_31027,G__30261_31028));
var G__30266_31031 = new cljs.core.Keyword(null,"conditions","conditions",-1647236270);
var G__30267_31032 = (function (db,p__30268){
var vec__30269 = p__30268;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30269,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30269,(1),null);
var condition_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30269,(2),null);
var skills = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30269,(3),null);
var abilities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30269,(4),null);
var skillbilities_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30269,(5),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.Keyword(null,"beginning","beginning",77824097)], null))),((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(1)))))?"that domain's skill. ":((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"that domain's continuation skill. ":((((skillbilities_QMARK_ === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"that domain's continuation skill with it's resilience ability. ":null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(condition_style)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30266_31031,G__30267_31032) : re_frame.core.reg_sub.call(null,G__30266_31031,G__30267_31032));
var G__30272_31033 = new cljs.core.Keyword(null,"recovery","recovery",-2004840646);
var G__30273_31034 = (function (db,p__30274){
var vec__30275 = p__30274;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30275,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30275,(1),null);
var damage_tiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30275,(2),null);
var recovery_tiers_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30275,(3),null);
var recovery_times = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30275,(4),null);
var treatment_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30275,(5),null);
var skills = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30275,(6),null);
var abilities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30275,(7),null);
var skillbilities_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30275,(8),null);
return [((recovery_tiers_QMARK_ === false)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),damage_tiers], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"value","value",305978217)], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"unit","unit",375175175)], null))),". "].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__30281 = damage_tiers;
switch (G__30281) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30281)].join('')));

}
})())),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,treatment_QMARK_))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),new cljs.core.Keyword(null,"treatment?","treatment?",264384759)], null))),((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(1)))))?"an acuity skill check. ":((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"a comprehension skill check. ":((((skillbilities_QMARK_ === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"a comprehension skill check with the relevant domain's discipline ability. ":null)))].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30272_31033,G__30273_31034) : re_frame.core.reg_sub.call(null,G__30272_31033,G__30273_31034));
var G__30282_31036 = new cljs.core.Keyword(null,"condition-title","condition-title",-1818530037);
var G__30283_31037 = (function (db,p__30284){
var vec__30285 = p__30284;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30285,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30285,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30282_31036,G__30283_31037) : re_frame.core.reg_sub.call(null,G__30282_31036,G__30283_31037));
var G__30288_31038 = new cljs.core.Keyword(null,"condition-description","condition-description",-584806753);
var G__30289_31039 = (function (db,p__30290){
var vec__30291 = p__30290;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30291,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30291,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"description","description",-1428560544)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30288_31038,G__30289_31039) : re_frame.core.reg_sub.call(null,G__30288_31038,G__30289_31039));
var G__30294_31040 = new cljs.core.Keyword(null,"condition-effects","condition-effects",1872046469);
var G__30295_31041 = (function (db,p__30296){
var vec__30297 = p__30296;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30297,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30297,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"effects","effects",-282369292)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30294_31040,G__30295_31041) : re_frame.core.reg_sub.call(null,G__30294_31040,G__30295_31041));
var G__30300_31042 = new cljs.core.Keyword(null,"condition-effect-description","condition-effect-description",-3743093);
var G__30301_31043 = (function (db,p__30302){
var vec__30303 = p__30302;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30303,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30303,(1),null);
var effect_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30303,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"effects","effects",-282369292),effect_id,new cljs.core.Keyword(null,"description","description",-1428560544)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30300_31042,G__30301_31043) : re_frame.core.reg_sub.call(null,G__30300_31042,G__30301_31043));
var G__30306_31044 = new cljs.core.Keyword(null,"condition-effect-duration","condition-effect-duration",-2101079389);
var G__30307_31045 = (function (db,p__30308){
var vec__30309 = p__30308;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30309,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30309,(1),null);
var effect_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30309,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"effects","effects",-282369292),effect_id,new cljs.core.Keyword(null,"duration","duration",1444101068)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30306_31044,G__30307_31045) : re_frame.core.reg_sub.call(null,G__30306_31044,G__30307_31045));
var G__30312_31046 = new cljs.core.Keyword(null,"world-overview","world-overview",-314945091);
var G__30313_31047 = (function (db,p__30314){
var vec__30315 = p__30314;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30315,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30315,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),world_id,new cljs.core.Keyword(null,"overview","overview",-435037267)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30312_31046,G__30313_31047) : re_frame.core.reg_sub.call(null,G__30312_31046,G__30313_31047));
var G__30318_31048 = new cljs.core.Keyword(null,"world-territories","world-territories",-982355734);
var G__30319_31049 = (function (db,p__30320){
var vec__30321 = p__30320;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30321,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30321,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),world_id,new cljs.core.Keyword(null,"territories","territories",-1856976391)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30318_31048,G__30319_31049) : re_frame.core.reg_sub.call(null,G__30318_31048,G__30319_31049));
var G__30324_31050 = new cljs.core.Keyword(null,"territory-civilizations","territory-civilizations",-523722954);
var G__30325_31051 = (function (db,p__30326){
var vec__30327 = p__30326;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30327,(0),null);
var territory_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30327,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),territory_id,new cljs.core.Keyword(null,"civilizations","civilizations",822016090)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30324_31050,G__30325_31051) : re_frame.core.reg_sub.call(null,G__30324_31050,G__30325_31051));
var G__30330_31052 = new cljs.core.Keyword(null,"territory-details","territory-details",323186833);
var G__30331_31053 = (function (db,p__30332){
var vec__30333 = p__30332;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30333,(0),null);
var territory_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30333,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),territory_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30330_31052,G__30331_31053) : re_frame.core.reg_sub.call(null,G__30330_31052,G__30331_31053));
var G__30336_31054 = new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185);
var G__30337_31055 = (function (db,p__30338){
var vec__30339 = p__30338;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30339,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30339,(1),null);
var territories = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),world_id,new cljs.core.Keyword(null,"territories","territories",-1856976391)], null));
var civilizations = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(territories)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(civilizations));
} else {
var G__31056 = cljs.core.rest(territories);
var G__31057 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,civilizations,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(territories),new cljs.core.Keyword(null,"civilizations","civilizations",822016090)], null)));
territories = G__31056;
civilizations = G__31057;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30336_31054,G__30337_31055) : re_frame.core.reg_sub.call(null,G__30336_31054,G__30337_31055));
var G__30342_31058 = new cljs.core.Keyword(null,"world-lore","world-lore",-1851264915);
var G__30343_31059 = (function (db,p__30344){
var vec__30345 = p__30344;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30345,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30345,(1),null);
var civilizations = (function (){var G__30349 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__30349) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__30349));
})();
var lore = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(lore));
} else {
var G__31060 = cljs.core.rest(civilizations);
var G__31061 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,lore,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"lore","lore",-10530558)], null)));
civilizations = G__31060;
lore = G__31061;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30342_31058,G__30343_31059) : re_frame.core.reg_sub.call(null,G__30342_31058,G__30343_31059));
var G__30350_31062 = new cljs.core.Keyword(null,"world-organizations","world-organizations",-481549703);
var G__30351_31063 = (function (db,p__30352){
var vec__30353 = p__30352;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30353,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30353,(1),null);
var civilizations = (function (){var G__30357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__30357) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__30357));
})();
var organizations = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(organizations));
} else {
var G__31064 = cljs.core.rest(civilizations);
var G__31065 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,organizations,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"organizations","organizations",-755443762)], null)));
civilizations = G__31064;
organizations = G__31065;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30350_31062,G__30351_31063) : re_frame.core.reg_sub.call(null,G__30350_31062,G__30351_31063));
var G__30358_31066 = new cljs.core.Keyword(null,"world-key-figures","world-key-figures",-2094243827);
var G__30359_31067 = (function (db,p__30360){
var vec__30361 = p__30360;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30361,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30361,(1),null);
var civilizations = (function (){var G__30365 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__30365) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__30365));
})();
var key_figures = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(key_figures));
} else {
var G__31068 = cljs.core.rest(civilizations);
var G__31069 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,key_figures,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"key-figures","key-figures",-2075124028)], null)));
civilizations = G__31068;
key_figures = G__31069;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30358_31066,G__30359_31067) : re_frame.core.reg_sub.call(null,G__30358_31066,G__30359_31067));
var G__30366_31070 = new cljs.core.Keyword(null,"world-advancements","world-advancements",2113721326);
var G__30367_31071 = (function (db,p__30368){
var vec__30369 = p__30368;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30369,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30369,(1),null);
var civilizations = (function (){var G__30373 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__30373) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__30373));
})();
var advancements = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(advancements));
} else {
var G__31072 = cljs.core.rest(civilizations);
var G__31073 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,advancements,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"advancements","advancements",32607236)], null)));
civilizations = G__31072;
advancements = G__31073;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30366_31070,G__30367_31071) : re_frame.core.reg_sub.call(null,G__30366_31070,G__30367_31071));
var G__30374_31074 = new cljs.core.Keyword(null,"world-creatures","world-creatures",745737020);
var G__30375_31075 = (function (db,p__30376){
var vec__30377 = p__30376;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30377,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30377,(1),null);
var territories = (function (){var G__30381 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-territories","world-territories",-982355734),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__30381) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__30381));
})();
var creatures = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(territories)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(creatures));
} else {
var G__31076 = cljs.core.rest(territories);
var G__31077 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,creatures,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(territories),new cljs.core.Keyword(null,"creatures","creatures",761416150)], null)));
territories = G__31076;
creatures = G__31077;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30374_31074,G__30375_31075) : re_frame.core.reg_sub.call(null,G__30374_31074,G__30375_31075));
var G__30382_31078 = new cljs.core.Keyword(null,"world-heritages","world-heritages",-1355127108);
var G__30383_31079 = (function (db,p__30384){
var vec__30385 = p__30384;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30385,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30385,(1),null);
var civilizations = (function (){var G__30389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__30389) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__30389));
})();
var heritages = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(heritages));
} else {
var G__31080 = cljs.core.rest(civilizations);
var G__31081 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,heritages,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"heritages","heritages",1016532791)], null)));
civilizations = G__31080;
heritages = G__31081;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30382_31078,G__30383_31079) : re_frame.core.reg_sub.call(null,G__30382_31078,G__30383_31079));
var G__30390_31082 = new cljs.core.Keyword(null,"world-roles","world-roles",-1495875244);
var G__30391_31083 = (function (db,p__30392){
var vec__30393 = p__30392;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30393,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30393,(1),null);
var civilizations = (function (){var G__30397 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__30397) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__30397));
})();
var roles = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(roles));
} else {
var G__31084 = cljs.core.rest(civilizations);
var G__31085 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,roles,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"roles","roles",143379530)], null)));
civilizations = G__31084;
roles = G__31085;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30390_31082,G__30391_31083) : re_frame.core.reg_sub.call(null,G__30390_31082,G__30391_31083));
var G__30398_31086 = new cljs.core.Keyword(null,"world-resources","world-resources",368334044);
var G__30399_31087 = (function (db,p__30400){
var vec__30401 = p__30400;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30401,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30401,(1),null);
var civilizations = (function (){var G__30405 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__30405) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__30405));
})();
var resources = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(resources));
} else {
var G__31088 = cljs.core.rest(civilizations);
var G__31089 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,resources,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"resources","resources",1632806811)], null)));
civilizations = G__31088;
resources = G__31089;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30398_31086,G__30399_31087) : re_frame.core.reg_sub.call(null,G__30398_31086,G__30399_31087));
var G__30406_31090 = new cljs.core.Keyword(null,"civilization-details","civilization-details",281511038);
var G__30407_31091 = (function (db,p__30408){
var vec__30409 = p__30408;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30409,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30409,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30406_31090,G__30407_31091) : re_frame.core.reg_sub.call(null,G__30406_31090,G__30407_31091));
var G__30412_31092 = new cljs.core.Keyword(null,"civilization-lore","civilization-lore",-555959513);
var G__30413_31093 = (function (db,p__30414){
var vec__30415 = p__30414;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30415,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30415,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"lore","lore",-10530558)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30412_31092,G__30413_31093) : re_frame.core.reg_sub.call(null,G__30412_31092,G__30413_31093));
var G__30418_31094 = new cljs.core.Keyword(null,"civilization-organizations","civilization-organizations",-666067443);
var G__30419_31095 = (function (db,p__30420){
var vec__30421 = p__30420;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30421,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30421,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"organizations","organizations",-755443762)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30418_31094,G__30419_31095) : re_frame.core.reg_sub.call(null,G__30418_31094,G__30419_31095));
var G__30424_31096 = new cljs.core.Keyword(null,"civilization-key-figures","civilization-key-figures",1996035078);
var G__30425_31097 = (function (db,p__30426){
var vec__30427 = p__30426;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30427,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30427,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"key-figures","key-figures",-2075124028)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30424_31096,G__30425_31097) : re_frame.core.reg_sub.call(null,G__30424_31096,G__30425_31097));
var G__30430_31098 = new cljs.core.Keyword(null,"civilization-advancements","civilization-advancements",1472212775);
var G__30431_31099 = (function (db,p__30432){
var vec__30433 = p__30432;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30433,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30433,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"advancements","advancements",32607236)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30430_31098,G__30431_31099) : re_frame.core.reg_sub.call(null,G__30430_31098,G__30431_31099));

//# sourceMappingURL=modular_roleplaying_framework.db_CRUD.js.map
