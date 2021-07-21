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
var vec__27876 = temp__5733__auto__;
var seq__27877 = cljs.core.seq(vec__27876);
var first__27878 = cljs.core.first(seq__27877);
var seq__27877__$1 = cljs.core.next(seq__27877);
var k = first__27878;
var ks__$1 = seq__27877__$1;
if(cljs.core.seq(ks__$1)){
var v = (function (){var G__27879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__27880 = ks__$1;
return (modular_roleplaying_framework.db_CRUD.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? modular_roleplaying_framework.db_CRUD.dissoc_in.cljs$core$IFn$_invoke$arity$2(G__27879,G__27880) : modular_roleplaying_framework.db_CRUD.dissoc_in.call(null,G__27879,G__27880));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-system","initialize-system",-1223784141),(function (p__27881,p__27882){
var map__27883 = p__27881;
var map__27883__$1 = (((((!((map__27883 == null))))?(((((map__27883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27883):map__27883);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27883__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27884 = p__27882;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27884,(0),null);
var section_one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27884,(1),null);
var section_two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27884,(2),null);
var section_three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27884,(3),null);
var layout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27884,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section_two),(0)),(0),modular_roleplaying_framework.db_CRUD.url_friendly(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section_two)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section_two),(0),layout,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section_one),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section_three),(0)),modular_roleplaying_framework.db_CRUD.url_friendly(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section_three)),modular_roleplaying_framework.db_CRUD.url_friendly(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section_one)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section_one),(0)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-layout","toggle-layout",-241410907),(function (p__27888,_){
var map__27889 = p__27888;
var map__27889__$1 = (((((!((map__27889 == null))))?(((((map__27889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27889):map__27889);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27889__$1,new cljs.core.Keyword(null,"db","db",993250759));
var system_state = new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db);
var map__27891 = system_state;
var map__27891__$1 = (((((!((map__27891 == null))))?(((((map__27891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27891):map__27891);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27891__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27891__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27891__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27891__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout,"book-layout"))?"pages-layout":"book-layout"),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reorder-sections","reorder-sections",208296526),(function (p__27893,p__27894){
var map__27895 = p__27893;
var map__27895__$1 = (((((!((map__27895 == null))))?(((((map__27895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27895):map__27895);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27895__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27896 = p__27894;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27896,(0),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27896,(1),null);
var section_one = (function (){var G__27900 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section","state-section",-1039543225),"section-one"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__27900) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__27900));
})();
var section_two = (function (){var G__27901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section","state-section",-1039543225),"section-two"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__27901) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__27901));
})();
var section_three = (function (){var G__27902 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section","state-section",-1039543225),"section-three"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__27902) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__27902));
})();
var layout = (function (){var G__27903 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__27903) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__27903));
})();
var G__27904 = direction;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("forward",G__27904)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_three)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_one)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_two))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("backward",G__27904)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_two)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_three)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_one))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),G__27904)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Unrecognized direction when reordering sections."], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27904)].join('')));

}
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"section-select","section-select",-1432207285),(function (p__27905,p__27906){
var map__27907 = p__27905;
var map__27907__$1 = (((((!((map__27907 == null))))?(((((map__27907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27907):map__27907);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27907__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27908 = p__27906;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27908,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27908,(1),null);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27908,(2),null);
var system_state = cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-title","section-title",1261938902)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section),(0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-tab-parent","item-tab-parent",-1109190767)], null),null);
var map__27912 = system_state;
var map__27912__$1 = (((((!((map__27912 == null))))?(((((map__27912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27912):map__27912);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27912__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27912__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27912__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27912__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tab-select","tab-select",1957789174),(function (p__27914,p__27915){
var map__27916 = p__27914;
var map__27916__$1 = (((((!((map__27916 == null))))?(((((map__27916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27916):map__27916);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27916__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27917 = p__27915;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27917,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27917,(1),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27917,(2),null);
var system_state = cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null),tab_id);
var map__27921 = system_state;
var map__27921__$1 = (((((!((map__27921 == null))))?(((((map__27921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27921):map__27921);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27921__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27921__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27921__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27921__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"item-select","item-select",-1822277284),(function (p__27923,p__27924){
var map__27925 = p__27923;
var map__27925__$1 = (((((!((map__27925 == null))))?(((((map__27925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27925):map__27925);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27925__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27926 = p__27924;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27926,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27926,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27926,(2),null);
var system_state = cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),item_id);
var map__27930 = system_state;
var map__27930__$1 = (((((!((map__27930 == null))))?(((((map__27930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27930):map__27930);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27930__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27930__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27930__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27930__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null)))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"item-tab-select","item-tab-select",-183749023),(function (p__27932,p__27933){
var map__27934 = p__27932;
var map__27934__$1 = (((((!((map__27934 == null))))?(((((map__27934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27934):map__27934);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27934__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27935 = p__27933;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27935,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27935,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27935,(2),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27935,(3),null);
var system_state = cljs.core.assoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),item_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null),tab_id);
var map__27939 = system_state;
var map__27939__$1 = (((((!((map__27939 == null))))?(((((map__27939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27939):map__27939);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27939__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27939__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27939__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27939__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null)))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),(function (p__27941,p__27942){
var map__27943 = p__27941;
var map__27943__$1 = (((((!((map__27943 == null))))?(((((map__27943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27943):map__27943);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27943__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27944 = p__27942;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27944,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27944,(1),null);
var system_state = cljs.core.assoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),null);
var map__27948 = system_state;
var map__27948__$1 = (((((!((map__27948 == null))))?(((((map__27948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27948):map__27948);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27948__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27948__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27948__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27948__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-system-state","update-system-state",-69675065),(function (p__27950,p__27951){
var map__27952 = p__27950;
var map__27952__$1 = (((((!((map__27952 == null))))?(((((map__27952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27952):map__27952);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27952__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27953 = p__27951;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27953,(0),null);
var vec__27956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27953,(1),null);
var section_one_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27956,(0),null);
var section_one_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27956,(1),null);
var section_one_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27956,(2),null);
var section_one_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27956,(3),null);
var section_two_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27956,(4),null);
var section_two_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27956,(5),null);
var section_two_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27956,(6),null);
var section_two_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27956,(7),null);
var section_three_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27956,(8),null);
var section_three_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27956,(9),null);
var section_three_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27956,(10),null);
var section_three_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27956,(11),null);
var layout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27956,(12),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section-title","section-title",1261938902),section_one_title,new cljs.core.Keyword(null,"section-id","section-id",-1780104220),section_one_id,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778),section_one_tab,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),section_one_item], null)], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section-title","section-title",1261938902),section_two_title,new cljs.core.Keyword(null,"section-id","section-id",-1780104220),section_two_id,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778),section_two_tab,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),section_two_item], null)], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section-title","section-title",1261938902),section_three_title,new cljs.core.Keyword(null,"section-id","section-id",-1780104220),section_three_id,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778),section_three_tab,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),section_three_item], null)], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),layout),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"initialized?","initialized?",1707939066)], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-active-item","select-active-item",384984244),(function (db,p__27960){
var vec__27961 = p__27960;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27961,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27961,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27961,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null)),(item_id | (0)))){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),null);
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),(item_id | (0)));
}
}));
var G__27964_29203 = new cljs.core.Keyword(null,"system-state","system-state",509607631);
var G__27965_29204 = (function (db){
return new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27964_29203,G__27965_29204) : re_frame.core.reg_sub.call(null,G__27964_29203,G__27965_29204));
var G__27966_29205 = new cljs.core.Keyword(null,"overlay-state","overlay-state",95491678);
var G__27967_29206 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-state","overlay-state",95491678)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27966_29205,G__27967_29206) : re_frame.core.reg_sub.call(null,G__27966_29205,G__27967_29206));
var G__27968_29208 = new cljs.core.Keyword(null,"overlay-item","overlay-item",1921913766);
var G__27969_29209 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-item","overlay-item",1921913766)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27968_29208,G__27969_29209) : re_frame.core.reg_sub.call(null,G__27968_29208,G__27969_29209));
var G__27970_29212 = new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523);
var G__27971_29213 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27970_29212,G__27971_29213) : re_frame.core.reg_sub.call(null,G__27970_29212,G__27971_29213));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-state-change","overlay-state-change",1441777589),(function (db,p__27972){
var vec__27973 = p__27972;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27973,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27973,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-state","overlay-state",95491678)], null),state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-item-change","overlay-item-change",-1911220370),(function (db,p__27976){
var vec__27977 = p__27976;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27977,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27977,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-item","overlay-item",1921913766)], null),item_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-params-change","overlay-params-change",171897048),(function (db,p__27980){
var vec__27981 = p__27980;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27981,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27981,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523)], null),params);
}));
var G__27984_29214 = new cljs.core.Keyword(null,"initialized?","initialized?",1707939066);
var G__27985_29215 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"initialized?","initialized?",1707939066)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27984_29214,G__27985_29215) : re_frame.core.reg_sub.call(null,G__27984_29214,G__27985_29215));
var G__27986_29216 = new cljs.core.Keyword(null,"state-section","state-section",-1039543225);
var G__27987_29217 = (function (db,p__27988){
var vec__27989 = p__27988;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27989,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27989,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27986_29216,G__27987_29217) : re_frame.core.reg_sub.call(null,G__27986_29216,G__27987_29217));
var G__27992_29223 = new cljs.core.Keyword(null,"state-section-id","state-section-id",210581770);
var G__27993_29224 = (function (db,p__27994){
var vec__27995 = p__27994;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27995,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27995,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27992_29223,G__27993_29224) : re_frame.core.reg_sub.call(null,G__27992_29223,G__27993_29224));
var G__27998_29228 = new cljs.core.Keyword(null,"state-section-ids","state-section-ids",1524494040);
var G__27999_29229 = (function (db,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null))], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27998_29228,G__27999_29229) : re_frame.core.reg_sub.call(null,G__27998_29228,G__27999_29229));
var G__28000_29230 = new cljs.core.Keyword(null,"state-section-tab","state-section-tab",1111796390);
var G__28001_29231 = (function (db,p__28002){
var vec__28003 = p__28002;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28003,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28003,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28000_29230,G__28001_29231) : re_frame.core.reg_sub.call(null,G__28000_29230,G__28001_29231));
var G__28006_29237 = new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226);
var G__28007_29238 = (function (db,p__28008){
var vec__28009 = p__28008;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28009,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28009,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28006_29237,G__28007_29238) : re_frame.core.reg_sub.call(null,G__28006_29237,G__28007_29238));
var G__28012_29245 = new cljs.core.Keyword(null,"layout","layout",-2120940921);
var G__28013_29246 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28012_29245,G__28013_29246) : re_frame.core.reg_sub.call(null,G__28012_29245,G__28013_29246));
var G__28014_29250 = new cljs.core.Keyword(null,"section","section",-300141526);
var G__28015_29251 = (function (db,p__28016){
var vec__28017 = p__28016;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28017,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28017,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28014_29250,G__28015_29251) : re_frame.core.reg_sub.call(null,G__28014_29250,G__28015_29251));
var G__28020_29257 = new cljs.core.Keyword(null,"section-type","section-type",-1815294838);
var G__28021_29258 = (function (db,p__28022){
var vec__28023 = p__28022;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28023,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28023,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"type","type",1174270348)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28020_29257,G__28021_29258) : re_frame.core.reg_sub.call(null,G__28020_29257,G__28021_29258));
var G__28026_29264 = new cljs.core.Keyword(null,"section-title","section-title",1261938902);
var G__28027_29265 = (function (db,p__28028){
var vec__28029 = p__28028;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28029,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28029,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28026_29264,G__28027_29265) : re_frame.core.reg_sub.call(null,G__28026_29264,G__28027_29265));
var G__28032_29266 = new cljs.core.Keyword(null,"section-tabs","section-tabs",1270711059);
var G__28033_29267 = (function (db,p__28034){
var vec__28035 = p__28034;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28035,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28035,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28032_29266,G__28033_29267) : re_frame.core.reg_sub.call(null,G__28032_29266,G__28033_29267));
var G__28038_29268 = new cljs.core.Keyword(null,"ruleset-skillbilities?","ruleset-skillbilities?",-1360174223);
var G__28039_29269 = (function (db,p__28040){
var vec__28041 = p__28040;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28041,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28041,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"skillbilities?","skillbilities?",788972706)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28038_29268,G__28039_29269) : re_frame.core.reg_sub.call(null,G__28038_29268,G__28039_29269));
var G__28044_29270 = new cljs.core.Keyword(null,"ruleset-skills","ruleset-skills",-1459168412);
var G__28045_29271 = (function (db,p__28046){
var vec__28047 = p__28046;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28047,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28047,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"skills","skills",958701426)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28044_29270,G__28045_29271) : re_frame.core.reg_sub.call(null,G__28044_29270,G__28045_29271));
var G__28050_29277 = new cljs.core.Keyword(null,"ruleset-abilities","ruleset-abilities",1582837328);
var G__28051_29278 = (function (db,p__28052){
var vec__28053 = p__28052;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28053,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28053,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"abilities","abilities",-1471386226)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28050_29277,G__28051_29278) : re_frame.core.reg_sub.call(null,G__28050_29277,G__28051_29278));
var G__28057_29284 = new cljs.core.Keyword(null,"section-tabs-full","section-tabs-full",300098194);
var G__28058_29285 = (function (db,p__28059){
var vec__28060 = p__28059;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28060,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28060,(1),null);
var section_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28060,(2),null);
var item_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
var section_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null));
var tabs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null));
var subtabs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"subtabs","subtabs",627577425)], null))));
if((item_id == null)){
return tabs;
} else {
return modular_roleplaying_framework.db_CRUD.insertv(tabs,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28056_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__28056_SHARP_),cljs.core.first(subtabs));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tabs))),cljs.core.rest(subtabs));
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28057_29284,G__28058_29285) : re_frame.core.reg_sub.call(null,G__28057_29284,G__28058_29285));
var G__28063_29301 = new cljs.core.Keyword(null,"active-tab","active-tab",1102432568);
var G__28064_29302 = (function (db,p__28065){
var vec__28066 = p__28065;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28066,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28066,(1),null);
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null)) | (0));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28063_29301,G__28064_29302) : re_frame.core.reg_sub.call(null,G__28063_29301,G__28064_29302));
var G__28069_29303 = new cljs.core.Keyword(null,"tab-icon","tab-icon",-601622304);
var G__28070_29304 = (function (db,p__28071){
var vec__28072 = p__28071;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28072,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28072,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"icon","icon",1679606541)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28069_29303,G__28070_29304) : re_frame.core.reg_sub.call(null,G__28069_29303,G__28070_29304));
var G__28075_29307 = new cljs.core.Keyword(null,"tab-type","tab-type",-913444495);
var G__28076_29308 = (function (db,p__28077){
var vec__28078 = p__28077;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28078,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28078,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"type","type",1174270348)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28075_29307,G__28076_29308) : re_frame.core.reg_sub.call(null,G__28075_29307,G__28076_29308));
var G__28081_29312 = new cljs.core.Keyword(null,"tab-title","tab-title",1398279061);
var G__28082_29313 = (function (db,p__28083){
var vec__28084 = p__28083;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28084,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28084,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28081_29312,G__28082_29313) : re_frame.core.reg_sub.call(null,G__28081_29312,G__28082_29313));
var G__28087_29318 = new cljs.core.Keyword(null,"tab-template","tab-template",-1557753771);
var G__28088_29319 = (function (db,p__28089){
var vec__28090 = p__28089;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28090,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28090,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"template","template",-702405684)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28087_29318,G__28088_29319) : re_frame.core.reg_sub.call(null,G__28087_29318,G__28088_29319));
var G__28093_29320 = new cljs.core.Keyword(null,"tab-items","tab-items",1934951825);
var G__28094_29321 = (function (db,p__28095){
var vec__28096 = p__28095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28096,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28096,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"items","items",1031954938)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28093_29320,G__28094_29321) : re_frame.core.reg_sub.call(null,G__28093_29320,G__28094_29321));
var G__28099_29324 = new cljs.core.Keyword(null,"item","item",249373802);
var G__28100_29325 = (function (db,p__28101){
var vec__28102 = p__28101;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28102,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28102,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28099_29324,G__28100_29325) : re_frame.core.reg_sub.call(null,G__28099_29324,G__28100_29325));
var G__28105_29329 = new cljs.core.Keyword(null,"item-title","item-title",-249793661);
var G__28106_29330 = (function (db,p__28107){
var vec__28108 = p__28107;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28108,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28108,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28105_29329,G__28106_29330) : re_frame.core.reg_sub.call(null,G__28105_29329,G__28106_29330));
var G__28111_29331 = new cljs.core.Keyword(null,"item-type","item-type",-73995695);
var G__28112_29332 = (function (db,p__28113){
var vec__28114 = p__28113;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28114,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28114,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"type","type",1174270348)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28111_29331,G__28112_29332) : re_frame.core.reg_sub.call(null,G__28111_29331,G__28112_29332));
var G__28117_29335 = new cljs.core.Keyword(null,"item-details","item-details",-987623935);
var G__28118_29336 = (function (db,p__28119){
var vec__28120 = p__28119;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28120,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28120,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28117_29335,G__28118_29336) : re_frame.core.reg_sub.call(null,G__28117_29335,G__28118_29336));
var G__28123_29337 = new cljs.core.Keyword(null,"item-text","item-text",-2146003655);
var G__28124_29338 = (function (db,p__28125){
var vec__28126 = p__28125;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28126,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28126,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28123_29337,G__28124_29338) : re_frame.core.reg_sub.call(null,G__28123_29337,G__28124_29338));
var G__28129_29341 = new cljs.core.Keyword(null,"item-subtabs","item-subtabs",-894115020);
var G__28130_29342 = (function (db,p__28131){
var vec__28132 = p__28131;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28132,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28132,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"subtabs","subtabs",627577425)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28129_29341,G__28130_29342) : re_frame.core.reg_sub.call(null,G__28129_29341,G__28130_29342));
var G__28135_29345 = new cljs.core.Keyword(null,"ruleset-skills","ruleset-skills",-1459168412);
var G__28136_29346 = (function (db,p__28137){
var vec__28138 = p__28137;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28138,(0),null);
var ruleset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28138,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),ruleset_id,new cljs.core.Keyword(null,"skills","skills",958701426)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28135_29345,G__28136_29346) : re_frame.core.reg_sub.call(null,G__28135_29345,G__28136_29346));
var G__28141_29347 = new cljs.core.Keyword(null,"ruleset-skillbilities","ruleset-skillbilities",2131758022);
var G__28142_29348 = (function (db,p__28143){
var vec__28144 = p__28143;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28144,(0),null);
var ruleset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28144,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),ruleset_id,new cljs.core.Keyword(null,"skillbilities?","skillbilities?",788972706)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28141_29347,G__28142_29348) : re_frame.core.reg_sub.call(null,G__28141_29347,G__28142_29348));
var G__28147_29349 = new cljs.core.Keyword(null,"item-password","item-password",501455667);
var G__28148_29350 = (function (db,p__28149){
var vec__28150 = p__28149;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28150,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28150,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"password","password",417022471)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28147_29349,G__28148_29350) : re_frame.core.reg_sub.call(null,G__28147_29349,G__28148_29350));
var G__28153_29353 = new cljs.core.Keyword(null,"unlock-creature","unlock-creature",1380788176);
var G__28154_29354 = (function (db,p__28155){
var vec__28156 = p__28155;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28156,(0),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28156,(1),null);
var creature_id = cljs.core.filterv((function (item_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"password","password",417022471)], null)),password);
}),cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null))));
if((creature_id == null)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Password does not correspond with a creature."], 0));
} else {
return creature_id;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28153_29353,G__28154_29354) : re_frame.core.reg_sub.call(null,G__28153_29353,G__28154_29354));
var G__28159_29357 = new cljs.core.Keyword(null,"creature-title","creature-title",-418581929);
var G__28160_29358 = (function (db,p__28161){
var vec__28162 = p__28161;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28162,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28162,(1),null);
var character = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id], null));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(character)),", the ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"heritage","heritage",-1161447356).cljs$core$IFn$_invoke$arity$1(character))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(character))].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28159_29357,G__28160_29358) : re_frame.core.reg_sub.call(null,G__28159_29357,G__28160_29358));
var G__28165_29363 = new cljs.core.Keyword(null,"creature-summary","creature-summary",2046084639);
var G__28166_29364 = (function (db,p__28167){
var vec__28168 = p__28167;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28168,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28168,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary","summary",380847952)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28165_29363,G__28166_29364) : re_frame.core.reg_sub.call(null,G__28165_29363,G__28166_29364));
var G__28171_29367 = new cljs.core.Keyword(null,"creature-summary-state","creature-summary-state",-780207604);
var G__28172_29368 = (function (db,p__28173){
var vec__28174 = p__28173;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28174,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28174,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary-state","summary-state",163086774)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28171_29367,G__28172_29368) : re_frame.core.reg_sub.call(null,G__28171_29367,G__28172_29368));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-summary-state-change","creature-summary-state-change",714628401),(function (db,p__28177){
var vec__28178 = p__28177;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28178,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28178,(1),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28178,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary-state","summary-state",163086774)], null),new_state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-summary-update","creature-summary-update",99922919),(function (db,p__28181){
var vec__28182 = p__28181;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28182,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28182,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28182,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary","summary",380847952)], null),changes);
}));
var G__28185_29372 = new cljs.core.Keyword(null,"creature-stats","creature-stats",961451436);
var G__28186_29373 = (function (db,p__28187){
var vec__28188 = p__28187;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28188,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28188,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28185_29372,G__28186_29373) : re_frame.core.reg_sub.call(null,G__28185_29372,G__28186_29373));
var G__28191_29374 = new cljs.core.Keyword(null,"coordination","coordination",1076145876);
var G__28192_29375 = (function (db,p__28193){
var vec__28194 = p__28193;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28194,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28194,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28191_29374,G__28192_29375) : re_frame.core.reg_sub.call(null,G__28191_29374,G__28192_29375));
var G__28197_29379 = new cljs.core.Keyword(null,"reflexes","reflexes",-1252736336);
var G__28198_29380 = (function (db,p__28199){
var vec__28200 = p__28199;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28200,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28200,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28197_29379,G__28198_29380) : re_frame.core.reg_sub.call(null,G__28197_29379,G__28198_29380));
var G__28203_29386 = new cljs.core.Keyword(null,"endurance","endurance",2002692038);
var G__28204_29387 = (function (db,p__28205){
var vec__28206 = p__28205;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28206,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28206,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28203_29386,G__28204_29387) : re_frame.core.reg_sub.call(null,G__28203_29386,G__28204_29387));
var G__28209_29388 = new cljs.core.Keyword(null,"exertion","exertion",-1240242361);
var G__28210_29389 = (function (db,p__28211){
var vec__28212 = p__28211;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28212,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28212,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28209_29388,G__28210_29389) : re_frame.core.reg_sub.call(null,G__28209_29388,G__28210_29389));
var G__28215_29393 = new cljs.core.Keyword(null,"instinct","instinct",2090002619);
var G__28216_29394 = (function (db,p__28217){
var vec__28218 = p__28217;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28218,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28218,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28215_29393,G__28216_29394) : re_frame.core.reg_sub.call(null,G__28215_29393,G__28216_29394));
var G__28221_29397 = new cljs.core.Keyword(null,"perseverance","perseverance",-470288293);
var G__28222_29398 = (function (db,p__28223){
var vec__28224 = p__28223;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28224,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28224,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28221_29397,G__28222_29398) : re_frame.core.reg_sub.call(null,G__28221_29397,G__28222_29398));
var G__28227_29402 = new cljs.core.Keyword(null,"concentration","concentration",1539606986);
var G__28228_29403 = (function (db,p__28229){
var vec__28230 = p__28229;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28230,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28230,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28227_29402,G__28228_29403) : re_frame.core.reg_sub.call(null,G__28227_29402,G__28228_29403));
var G__28233_29406 = new cljs.core.Keyword(null,"recognition","recognition",1793959531);
var G__28234_29407 = (function (db,p__28235){
var vec__28236 = p__28235;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28236,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28236,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28233_29406,G__28234_29407) : re_frame.core.reg_sub.call(null,G__28233_29406,G__28234_29407));
var G__28239_29412 = new cljs.core.Keyword(null,"comprehension","comprehension",-756656463);
var G__28240_29413 = (function (db,p__28241){
var vec__28242 = p__28241;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28242,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28242,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28239_29412,G__28240_29413) : re_frame.core.reg_sub.call(null,G__28239_29412,G__28240_29413));
var G__28245_29415 = new cljs.core.Keyword(null,"persuasion","persuasion",1089798916);
var G__28246_29416 = (function (db,p__28247){
var vec__28248 = p__28247;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28248,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28248,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28245_29415,G__28246_29416) : re_frame.core.reg_sub.call(null,G__28245_29415,G__28246_29416));
var G__28251_29418 = new cljs.core.Keyword(null,"insight","insight",-1501263459);
var G__28252_29419 = (function (db,p__28253){
var vec__28254 = p__28253;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28254,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28254,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28251_29418,G__28252_29419) : re_frame.core.reg_sub.call(null,G__28251_29418,G__28252_29419));
var G__28257_29420 = new cljs.core.Keyword(null,"connections","connections",-2064090887);
var G__28258_29421 = (function (db,p__28259){
var vec__28260 = p__28259;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28260,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28260,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28257_29420,G__28258_29421) : re_frame.core.reg_sub.call(null,G__28257_29420,G__28258_29421));
var G__28263_29426 = new cljs.core.Keyword(null,"might","might",-1328381368);
var G__28264_29427 = (function (db,p__28265){
var vec__28266 = p__28265;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28266,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28266,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28263_29426,G__28264_29427) : re_frame.core.reg_sub.call(null,G__28263_29426,G__28264_29427));
var G__28269_29433 = new cljs.core.Keyword(null,"finesse","finesse",891142453);
var G__28270_29434 = (function (db,p__28271){
var vec__28272 = p__28271;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28272,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28272,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28269_29433,G__28270_29434) : re_frame.core.reg_sub.call(null,G__28269_29433,G__28270_29434));
var G__28275_29437 = new cljs.core.Keyword(null,"fortitude","fortitude",1187352341);
var G__28276_29438 = (function (db,p__28277){
var vec__28278 = p__28277;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28278,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28278,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28275_29437,G__28276_29438) : re_frame.core.reg_sub.call(null,G__28275_29437,G__28276_29438));
var G__28281_29440 = new cljs.core.Keyword(null,"ambition","ambition",-153662933);
var G__28282_29441 = (function (db,p__28283){
var vec__28284 = p__28283;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28284,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28284,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28281_29440,G__28282_29441) : re_frame.core.reg_sub.call(null,G__28281_29440,G__28282_29441));
var G__28287_29447 = new cljs.core.Keyword(null,"discipline","discipline",343863089);
var G__28288_29448 = (function (db,p__28289){
var vec__28290 = p__28289;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28290,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28290,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28287_29447,G__28288_29448) : re_frame.core.reg_sub.call(null,G__28287_29447,G__28288_29448));
var G__28293_29454 = new cljs.core.Keyword(null,"dedication","dedication",2052444551);
var G__28294_29455 = (function (db,p__28295){
var vec__28296 = p__28295;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28296,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28296,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28293_29454,G__28294_29455) : re_frame.core.reg_sub.call(null,G__28293_29454,G__28294_29455));
var G__28299_29456 = new cljs.core.Keyword(null,"intellect","intellect",414822757);
var G__28300_29457 = (function (db,p__28301){
var vec__28302 = p__28301;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28302,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28302,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28299_29456,G__28300_29457) : re_frame.core.reg_sub.call(null,G__28299_29456,G__28300_29457));
var G__28305_29459 = new cljs.core.Keyword(null,"intuition","intuition",1122677380);
var G__28306_29460 = (function (db,p__28307){
var vec__28308 = p__28307;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28308,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28308,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28305_29459,G__28306_29460) : re_frame.core.reg_sub.call(null,G__28305_29459,G__28306_29460));
var G__28311_29464 = new cljs.core.Keyword(null,"stability","stability",1733225509);
var G__28312_29465 = (function (db,p__28313){
var vec__28314 = p__28313;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28314,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28314,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28311_29464,G__28312_29465) : re_frame.core.reg_sub.call(null,G__28311_29464,G__28312_29465));
var G__28317_29467 = new cljs.core.Keyword(null,"presence","presence",-1580756953);
var G__28318_29468 = (function (db,p__28319){
var vec__28320 = p__28319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28320,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28320,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28317_29467,G__28318_29468) : re_frame.core.reg_sub.call(null,G__28317_29467,G__28318_29468));
var G__28323_29470 = new cljs.core.Keyword(null,"wit","wit",-1627445195);
var G__28324_29471 = (function (db,p__28325){
var vec__28326 = p__28325;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28326,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28326,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28323_29470,G__28324_29471) : re_frame.core.reg_sub.call(null,G__28323_29470,G__28324_29471));
var G__28329_29472 = new cljs.core.Keyword(null,"poise","poise",-429377896);
var G__28330_29473 = (function (db,p__28331){
var vec__28332 = p__28331;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28332,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28332,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28329_29472,G__28330_29473) : re_frame.core.reg_sub.call(null,G__28329_29472,G__28330_29473));
var G__28335_29475 = new cljs.core.Keyword(null,"creature-resources","creature-resources",495041557);
var G__28336_29476 = (function (db,p__28337){
var vec__28338 = p__28337;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28338,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28338,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28335_29475,G__28336_29476) : re_frame.core.reg_sub.call(null,G__28335_29475,G__28336_29476));
var G__28341_29477 = new cljs.core.Keyword(null,"creature-resources-typed","creature-resources-typed",728372146);
var G__28342_29478 = (function (db,p__28343){
var vec__28344 = p__28343;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28344,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28344,(1),null);
var resource_subtype_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28344,(2),null);
return cljs.core.filterv((function (resource_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"subtype","subtype",-2092672993)], null)),resource_subtype_id);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28341_29477,G__28342_29478) : re_frame.core.reg_sub.call(null,G__28341_29477,G__28342_29478));
var G__28347_29482 = new cljs.core.Keyword(null,"creature-resources-typed-quantified","creature-resources-typed-quantified",-1136110511);
var G__28348_29483 = (function (db,p__28349){
var vec__28350 = p__28349;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28350,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28350,(1),null);
var resource_subtype_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28350,(2),null);
return cljs.core.frequencies((function (){var G__28353 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-resources-typed","creature-resources-typed",728372146),creature_id,resource_subtype_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__28353) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__28353));
})());
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28347_29482,G__28348_29483) : re_frame.core.reg_sub.call(null,G__28347_29482,G__28348_29483));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-add-resource","creature-add-resource",409356036),(function (db,p__28354){
var vec__28355 = p__28354;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28355,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28355,(1),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28355,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null),cljs.core.conj,resource_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-remove-resource","creature-remove-resource",-1835624647),(function (db,p__28358){
var vec__28359 = p__28358;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28359,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28359,(1),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28359,(2),null);
var resource_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
var index = (0);
while(true){
if((index >= cljs.core.count(resource_list))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Resource not found."], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resource_id,(resource_list.cljs$core$IFn$_invoke$arity$1 ? resource_list.cljs$core$IFn$_invoke$arity$1(index) : resource_list.call(null,index)))){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null),modular_roleplaying_framework.db_CRUD.exsert(resource_list,(index - (1))));
} else {
var G__29494 = resource_list;
var G__29495 = (index + (1));
resource_list = G__29494;
index = G__29495;
continue;
}
}
break;
}
}));
var G__28362_29497 = new cljs.core.Keyword(null,"creature-feature-list","creature-feature-list",225155610);
var G__28363_29498 = (function (db,p__28364){
var vec__28365 = p__28364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28365,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28365,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28362_29497,G__28363_29498) : re_frame.core.reg_sub.call(null,G__28362_29497,G__28363_29498));
var G__28368_29501 = new cljs.core.Keyword(null,"creature-notes","creature-notes",-2029123219);
var G__28369_29502 = (function (db,p__28370){
var vec__28371 = p__28370;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28371,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28371,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28368_29501,G__28369_29502) : re_frame.core.reg_sub.call(null,G__28368_29501,G__28369_29502));
var G__28374_29503 = new cljs.core.Keyword(null,"creature-notes-state","creature-notes-state",-471696466);
var G__28375_29504 = (function (db,p__28376){
var vec__28377 = p__28376;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28377,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28377,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes-state","notes-state",-1025022243)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28374_29503,G__28375_29504) : re_frame.core.reg_sub.call(null,G__28374_29503,G__28375_29504));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-notes-state-change","creature-notes-state-change",-1510434125),(function (db,p__28380){
var vec__28381 = p__28380;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28381,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28381,(1),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28381,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes-state","notes-state",-1025022243)], null),new_state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-notes-update","creature-notes-update",-350278924),(function (db,p__28384){
var vec__28385 = p__28384;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28385,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28385,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28385,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes","notes",-1039600523)], null),changes);
}));
var G__28388_29510 = new cljs.core.Keyword(null,"resource-title","resource-title",904657571);
var G__28389_29511 = (function (db,p__28390){
var vec__28391 = p__28390;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28391,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28391,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28388_29510,G__28389_29511) : re_frame.core.reg_sub.call(null,G__28388_29510,G__28389_29511));
var G__28394_29516 = new cljs.core.Keyword(null,"resource-subtype","resource-subtype",1660664175);
var G__28395_29517 = (function (db,p__28396){
var vec__28397 = p__28396;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28397,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28397,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"subtype","subtype",-2092672993)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28394_29516,G__28395_29517) : re_frame.core.reg_sub.call(null,G__28394_29516,G__28395_29517));
var G__28400_29519 = new cljs.core.Keyword(null,"resource-properties","resource-properties",-677994762);
var G__28401_29520 = (function (db,p__28402){
var vec__28403 = p__28402;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28403,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28403,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"properties","properties",685819552)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28400_29519,G__28401_29520) : re_frame.core.reg_sub.call(null,G__28400_29519,G__28401_29520));
var G__28406_29523 = new cljs.core.Keyword(null,"resource-quality","resource-quality",-1384712256);
var G__28407_29524 = (function (db,p__28408){
var vec__28409 = p__28408;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28409,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28409,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"benefits","benefits",20804277),new cljs.core.Keyword(null,"quality","quality",147850199)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28406_29523,G__28407_29524) : re_frame.core.reg_sub.call(null,G__28406_29523,G__28407_29524));
var G__28412_29528 = new cljs.core.Keyword(null,"resource-quality-bonus","resource-quality-bonus",496784380);
var G__28413_29529 = (function (db,p__28414){
var vec__28415 = p__28414;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28415,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28415,(1),null);
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28412_29528,G__28413_29529) : re_frame.core.reg_sub.call(null,G__28412_29528,G__28413_29529));
var G__28418_29535 = new cljs.core.Keyword(null,"resource-power","resource-power",-283348905);
var G__28419_29536 = (function (db,p__28420){
var vec__28421 = p__28420;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28421,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28421,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"benefits","benefits",20804277),new cljs.core.Keyword(null,"power","power",-937852079)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28418_29535,G__28419_29536) : re_frame.core.reg_sub.call(null,G__28418_29535,G__28419_29536));
var G__28424_29537 = new cljs.core.Keyword(null,"resource-power-bonus","resource-power-bonus",669478217);
var G__28425_29538 = (function (db,p__28426){
var vec__28427 = p__28426;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28427,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28427,(1),null);
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28424_29537,G__28425_29538) : re_frame.core.reg_sub.call(null,G__28424_29537,G__28425_29538));
var G__28430_29543 = new cljs.core.Keyword(null,"resource-flavor-text","resource-flavor-text",429244330);
var G__28431_29544 = (function (db,p__28432){
var vec__28433 = p__28432;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28433,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28433,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"flavor-text","flavor-text",-227991981)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28430_29543,G__28431_29544) : re_frame.core.reg_sub.call(null,G__28430_29543,G__28431_29544));
var G__28436_29549 = new cljs.core.Keyword(null,"all-features","all-features",-969912234);
var G__28437_29550 = (function (db,_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__28438){
var vec__28439 = p__28438;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28439,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28439,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("feature",(function (){var G__28442 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),k], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__28442) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__28442));
})());
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"items","items",1031954938))));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28436_29549,G__28437_29550) : re_frame.core.reg_sub.call(null,G__28436_29549,G__28437_29550));
var G__28444_29552 = new cljs.core.Keyword(null,"features-by-property","features-by-property",-1888070616);
var G__28445_29553 = (function (db,p__28446){
var vec__28447 = p__28446;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28447,(0),null);
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28447,(1),null);
return cljs.core.filterv((function (feature){
return cljs.core.some((function (p1__28443_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property,p1__28443_SHARP_);
}),(function (){var G__28450 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-keywords","feature-keywords",-513678207),feature], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__28450) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__28450));
})());
}),(function (){var G__28451 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-features","all-features",-969912234)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__28451) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__28451));
})());
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28444_29552,G__28445_29553) : re_frame.core.reg_sub.call(null,G__28444_29552,G__28445_29553));
var G__28452_29554 = new cljs.core.Keyword(null,"resource-features","resource-features",-1831876409);
var G__28453_29555 = (function (db,p__28454){
var vec__28455 = p__28454;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28455,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28455,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28452_29554,G__28453_29555) : re_frame.core.reg_sub.call(null,G__28452_29554,G__28453_29555));
var G__28459_29559 = new cljs.core.Keyword(null,"resource-feature-lookup","resource-feature-lookup",1465251014);
var G__28460_29560 = (function (db,p__28461){
var vec__28462 = p__28461;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28462,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28462,(1),null);
var resource_properties = (function (){var G__28465 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-properties","resource-properties",-677994762),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__28465) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__28465));
})();
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28458_SHARP_){
var G__28466 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features-by-property","features-by-property",-1888070616),p1__28458_SHARP_], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__28466) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__28466));
}),resource_properties))));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28459_29559,G__28460_29560) : re_frame.core.reg_sub.call(null,G__28459_29559,G__28460_29560));
var G__28467_29567 = new cljs.core.Keyword(null,"resource-list","resource-list",1498099584);
var G__28468_29568 = (function (db,_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__28469){
var vec__28470 = p__28469;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28470,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28470,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("resource",(function (){var G__28473 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),k], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__28473) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__28473));
})());
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"items","items",1031954938))));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28467_29567,G__28468_29568) : re_frame.core.reg_sub.call(null,G__28467_29567,G__28468_29568));
modular_roleplaying_framework.db_CRUD.melee_weapons = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sword","Spear","Axe"], null);
modular_roleplaying_framework.db_CRUD.matches_QMARK_ = (function modular_roleplaying_framework$db_CRUD$matches_QMARK_(coll1,coll2){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,coll1,coll2)));
});
var G__28474_29573 = new cljs.core.Keyword(null,"implement","implement",832506591);
var G__28475_29574 = (function (db,p__28476){
var vec__28477 = p__28476;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28477,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28477,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Modal Tool",new cljs.core.Keyword(null,"description","description",-1428560544),"These arcane gauntlets have two modes stored: the melee mode and the ranged mode. While in melee mode, the left gauntlet produces a shield of solid aethereal force with capabilities and restrictions equivalent to a kite shield while the right gauntlet produces a sharp aethereal blade with capabilities and restrictions equivalent to a longsword. While in ranged mode, the two gauntlets function together as a bow with capabilities and restrictions equivalent to a longbow. Changing from one mode to the other requires a setup action. Gain +Quality +Power on attacks with the Arcane Gauntlets as well as +Quality from your Aethereal Knowledge."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28474_29573,G__28475_29574) : re_frame.core.reg_sub.call(null,G__28474_29573,G__28475_29574));
var G__28480_29578 = new cljs.core.Keyword(null,"weapon-attack","weapon-attack",1268897249);
var G__28481_29579 = (function (db,p__28482){
var vec__28483 = p__28482;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28483,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28483,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__28486 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28487 = properties;
if(cljs.core.truth_((function (){var G__28489 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bow"], null);
var G__28490 = expr__28487;
return (pred__28486.cljs$core$IFn$_invoke$arity$2 ? pred__28486.cljs$core$IFn$_invoke$arity$2(G__28489,G__28490) : pred__28486.call(null,G__28489,G__28490));
})())){
return "Ranged Attack";
} else {
if(cljs.core.truth_((pred__28486.cljs$core$IFn$_invoke$arity$2 ? pred__28486.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.db_CRUD.melee_weapons,expr__28487) : pred__28486.call(null,modular_roleplaying_framework.db_CRUD.melee_weapons,expr__28487)))){
return "Melee Attack";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28487)].join('')));
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__28491 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28492 = properties;
if(cljs.core.truth_((function (){var G__28494 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bow"], null);
var G__28495 = expr__28492;
return (pred__28491.cljs$core$IFn$_invoke$arity$2 ? pred__28491.cljs$core$IFn$_invoke$arity$2(G__28494,G__28495) : pred__28491.call(null,G__28494,G__28495));
})())){
return ["You may spend a main action to make a Coordination +Quality +Power check against a creature. \n                   You must have the creature targeted and the creature must be within ten zones but cannot be within the same zone. ",(function (){var pred__28505 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28506 = properties;
if(cljs.core.truth_((function (){var G__28508 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__28509 = expr__28506;
return (pred__28505.cljs$core$IFn$_invoke$arity$2 ? pred__28505.cljs$core$IFn$_invoke$arity$2(G__28508,G__28509) : pred__28505.call(null,G__28508,G__28509));
})())){
return "As a light bow, it can be wielded alongside a shield. When partitioning the base dice pool, the resulting dice pools must have at least two dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__28510 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__28511 = expr__28506;
return (pred__28505.cljs$core$IFn$_invoke$arity$2 ? pred__28505.cljs$core$IFn$_invoke$arity$2(G__28510,G__28511) : pred__28505.call(null,G__28510,G__28511));
})())){
return "As a medium bow, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least three dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__28512 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__28513 = expr__28506;
return (pred__28505.cljs$core$IFn$_invoke$arity$2 ? pred__28505.cljs$core$IFn$_invoke$arity$2(G__28512,G__28513) : pred__28505.call(null,G__28512,G__28513));
})())){
return "As a heavy bow, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least four dice in them. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28506)].join('')));
}
}
}
})(),"This weapon deals piercing damage."].join('');
} else {
return ["You may spend a main action to make a Coordination +Quality +Power check against a creature. ",(function (){var pred__28537 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28538 = properties;
if(cljs.core.truth_((function (){var G__28540 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sword","Spear","Axe"], null);
var G__28541 = expr__28538;
return (pred__28537.cljs$core$IFn$_invoke$arity$2 ? pred__28537.cljs$core$IFn$_invoke$arity$2(G__28540,G__28541) : pred__28537.call(null,G__28540,G__28541));
})())){
return "You must have the creature targeted and the creature must be in the same zone as you. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28538)].join('')));
}
})(),(function (){var pred__28542 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28543 = properties;
if(cljs.core.truth_((function (){var G__28545 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__28546 = expr__28543;
return (pred__28542.cljs$core$IFn$_invoke$arity$2 ? pred__28542.cljs$core$IFn$_invoke$arity$2(G__28545,G__28546) : pred__28542.call(null,G__28545,G__28546));
})())){
return "As a light weapon, it may be wielded in either hand. When partitioning the base dice pool, the resulting dice pools must have at least two dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__28547 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__28548 = expr__28543;
return (pred__28542.cljs$core$IFn$_invoke$arity$2 ? pred__28542.cljs$core$IFn$_invoke$arity$2(G__28547,G__28548) : pred__28542.call(null,G__28547,G__28548));
})())){
return "As a medium weapon, it must be wielded in the dominant hand. When partitioning the base dice pool, the resulting dice pools must have at least three dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__28549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__28550 = expr__28543;
return (pred__28542.cljs$core$IFn$_invoke$arity$2 ? pred__28542.cljs$core$IFn$_invoke$arity$2(G__28549,G__28550) : pred__28542.call(null,G__28549,G__28550));
})())){
return "As a heavy weapon, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least four dice in them. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28543)].join('')));
}
}
}
})(),(function (){var pred__28551 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28552 = properties;
if(cljs.core.truth_((function (){var G__28554 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sword"], null);
var G__28555 = expr__28552;
return (pred__28551.cljs$core$IFn$_invoke$arity$2 ? pred__28551.cljs$core$IFn$_invoke$arity$2(G__28554,G__28555) : pred__28551.call(null,G__28554,G__28555));
})())){
return "This weapon may deal piercing or slashing damage.";
} else {
if(cljs.core.truth_((function (){var G__28556 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Spear"], null);
var G__28557 = expr__28552;
return (pred__28551.cljs$core$IFn$_invoke$arity$2 ? pred__28551.cljs$core$IFn$_invoke$arity$2(G__28556,G__28557) : pred__28551.call(null,G__28556,G__28557));
})())){
return "This weapon may deal piercing or bludgeoning damage.";
} else {
if(cljs.core.truth_((function (){var G__28558 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Axe"], null);
var G__28559 = expr__28552;
return (pred__28551.cljs$core$IFn$_invoke$arity$2 ? pred__28551.cljs$core$IFn$_invoke$arity$2(G__28558,G__28559) : pred__28551.call(null,G__28558,G__28559));
})())){
return "This weapon may deal slashing or bludgeoning damage.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28552)].join('')));
}
}
}
})()].join('');
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28480_29578,G__28481_29579) : re_frame.core.reg_sub.call(null,G__28480_29578,G__28481_29579));
var G__28560_29595 = new cljs.core.Keyword(null,"block-attack","block-attack",-1348539017);
var G__28561_29596 = (function (db,p__28562){
var vec__28563 = p__28562;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28563,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28563,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__28566 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28567 = properties;
if(cljs.core.truth_((function (){var G__28569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Shield"], null);
var G__28570 = expr__28567;
return (pred__28566.cljs$core$IFn$_invoke$arity$2 ? pred__28566.cljs$core$IFn$_invoke$arity$2(G__28569,G__28570) : pred__28566.call(null,G__28569,G__28570));
})())){
return "Shield Block";
} else {
if(cljs.core.truth_((function (){var G__28571 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Armor"], null);
var G__28572 = expr__28567;
return (pred__28566.cljs$core$IFn$_invoke$arity$2 ? pred__28566.cljs$core$IFn$_invoke$arity$2(G__28571,G__28572) : pred__28566.call(null,G__28571,G__28572));
})())){
return "Armored Defense";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28567)].join('')));
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),["You may spend a main action to make a Reflexes +Quality +Power check to defend yourself against a creature's attack that targets you. \n         When partitioning the base dice pool while defending yourself against physical attacks, the resulting dice pools must have at least ",(function (){var pred__28582 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28583 = properties;
if(cljs.core.truth_((function (){var G__28585 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__28586 = expr__28583;
return (pred__28582.cljs$core$IFn$_invoke$arity$2 ? pred__28582.cljs$core$IFn$_invoke$arity$2(G__28585,G__28586) : pred__28582.call(null,G__28585,G__28586));
})())){
return "two ";
} else {
if(cljs.core.truth_((function (){var G__28587 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__28588 = expr__28583;
return (pred__28582.cljs$core$IFn$_invoke$arity$2 ? pred__28582.cljs$core$IFn$_invoke$arity$2(G__28587,G__28588) : pred__28582.call(null,G__28587,G__28588));
})())){
return "three ";
} else {
if(cljs.core.truth_((function (){var G__28589 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__28590 = expr__28583;
return (pred__28582.cljs$core$IFn$_invoke$arity$2 ? pred__28582.cljs$core$IFn$_invoke$arity$2(G__28589,G__28590) : pred__28582.call(null,G__28589,G__28590));
})())){
return "four ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28583)].join('')));
}
}
}
})(),"dice in them. When multiple items contribute to a defense check, the partitioned dice pools must follow the size limitations of every item involved.",((modular_roleplaying_framework.db_CRUD.matches_QMARK_(properties,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Shield"], null)))?"As a shield, it can be wielded in either hand.":null)].join('')], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28560_29595,G__28561_29596) : re_frame.core.reg_sub.call(null,G__28560_29595,G__28561_29596));
var G__28591_29606 = new cljs.core.Keyword(null,"trait","trait",626034900);
var G__28592_29607 = (function (db,p__28593){
var vec__28594 = p__28593;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28594,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28594,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__28597 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28598 = properties;
if(cljs.core.truth_((function (){var G__28600 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Flaw"], null);
var G__28601 = expr__28598;
return (pred__28597.cljs$core$IFn$_invoke$arity$2 ? pred__28597.cljs$core$IFn$_invoke$arity$2(G__28600,G__28601) : pred__28597.call(null,G__28600,G__28601));
})())){
return "Flaw";
} else {
if(cljs.core.truth_((function (){var G__28602 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ideal"], null);
var G__28603 = expr__28598;
return (pred__28597.cljs$core$IFn$_invoke$arity$2 ? pred__28597.cljs$core$IFn$_invoke$arity$2(G__28602,G__28603) : pred__28597.call(null,G__28602,G__28603));
})())){
return "Ideal";
} else {
if(cljs.core.truth_((function (){var G__28604 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attribute"], null);
var G__28605 = expr__28598;
return (pred__28597.cljs$core$IFn$_invoke$arity$2 ? pred__28597.cljs$core$IFn$_invoke$arity$2(G__28604,G__28605) : pred__28597.call(null,G__28604,G__28605));
})())){
return "Attribute";
} else {
if(cljs.core.truth_((function (){var G__28606 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Goal"], null);
var G__28607 = expr__28598;
return (pred__28597.cljs$core$IFn$_invoke$arity$2 ? pred__28597.cljs$core$IFn$_invoke$arity$2(G__28606,G__28607) : pred__28597.call(null,G__28606,G__28607));
})())){
return "Goal";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28598)].join('')));
}
}
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),["Grants +Quality +Power to checks that ",(function (){var pred__28619 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28620 = properties;
if(cljs.core.truth_((function (){var G__28622 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Flaw"], null);
var G__28623 = expr__28620;
return (pred__28619.cljs$core$IFn$_invoke$arity$2 ? pred__28619.cljs$core$IFn$_invoke$arity$2(G__28622,G__28623) : pred__28619.call(null,G__28622,G__28623));
})())){
return "give in to your flaw. Checks that attempt to resist giving in to your flaw gain penalties equal to the Quality and Power of your flaw. ";
} else {
if(cljs.core.truth_((function (){var G__28624 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ideal"], null);
var G__28625 = expr__28620;
return (pred__28619.cljs$core$IFn$_invoke$arity$2 ? pred__28619.cljs$core$IFn$_invoke$arity$2(G__28624,G__28625) : pred__28619.call(null,G__28624,G__28625));
})())){
return "promote or exemplify your ideal. Checks that run counter to your ideal gain penalties equal to the Quality and Power of your ideal. ";
} else {
if(cljs.core.truth_((function (){var G__28626 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attribute"], null);
var G__28627 = expr__28620;
return (pred__28619.cljs$core$IFn$_invoke$arity$2 ? pred__28619.cljs$core$IFn$_invoke$arity$2(G__28626,G__28627) : pred__28619.call(null,G__28626,G__28627));
})())){
return "utilize your attribute. Checks that are opposed by your attribute gain penalties equal to the Quality and Power of your attribute. ";
} else {
if(cljs.core.truth_((function (){var G__28628 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Goal"], null);
var G__28629 = expr__28620;
return (pred__28619.cljs$core$IFn$_invoke$arity$2 ? pred__28619.cljs$core$IFn$_invoke$arity$2(G__28628,G__28629) : pred__28619.call(null,G__28628,G__28629));
})())){
return "attempt to make progress towards your goal. Checks that sacrifice progress towards your goal gain penalties equal to the Quality and Power of your goal. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28620)].join('')));
}
}
}
}
})(),"Circumstances may cause multiple traits to apply bonuses or penalties to a check. Ultimately, it is up to the DM's discretion whether a trait grants a bonus or penalty."].join('')], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28591_29606,G__28592_29607) : re_frame.core.reg_sub.call(null,G__28591_29606,G__28592_29607));
var G__28630_29619 = new cljs.core.Keyword(null,"martial-prowess","martial-prowess",-114945878);
var G__28631_29620 = (function (db,p__28632){
var vec__28633 = p__28632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28633,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28633,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__28645 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28646 = properties;
if(cljs.core.truth_((function (){var G__28648 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__28649 = expr__28646;
return (pred__28645.cljs$core$IFn$_invoke$arity$2 ? pred__28645.cljs$core$IFn$_invoke$arity$2(G__28648,G__28649) : pred__28645.call(null,G__28648,G__28649));
})())){
return "Light Martial Prowess";
} else {
if(cljs.core.truth_((function (){var G__28650 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__28651 = expr__28646;
return (pred__28645.cljs$core$IFn$_invoke$arity$2 ? pred__28645.cljs$core$IFn$_invoke$arity$2(G__28650,G__28651) : pred__28645.call(null,G__28650,G__28651));
})())){
return "Medium Martial Prowess";
} else {
if(cljs.core.truth_((function (){var G__28652 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__28653 = expr__28646;
return (pred__28645.cljs$core$IFn$_invoke$arity$2 ? pred__28645.cljs$core$IFn$_invoke$arity$2(G__28652,G__28653) : pred__28645.call(null,G__28652,G__28653));
})())){
return "Heavy Martial Prowess";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28646)].join('')));
}
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__28663 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28664 = properties;
if(cljs.core.truth_((function (){var G__28666 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__28667 = expr__28664;
return (pred__28663.cljs$core$IFn$_invoke$arity$2 ? pred__28663.cljs$core$IFn$_invoke$arity$2(G__28666,G__28667) : pred__28663.call(null,G__28666,G__28667));
})())){
return "Gain +Quality +Power on checks that use a light weapon, shield, or armor.";
} else {
if(cljs.core.truth_((function (){var G__28668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__28669 = expr__28664;
return (pred__28663.cljs$core$IFn$_invoke$arity$2 ? pred__28663.cljs$core$IFn$_invoke$arity$2(G__28668,G__28669) : pred__28663.call(null,G__28668,G__28669));
})())){
return "Gain +Quality +Power on checks that use a medium weapon, shield, or armor.";
} else {
if(cljs.core.truth_((function (){var G__28670 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__28671 = expr__28664;
return (pred__28663.cljs$core$IFn$_invoke$arity$2 ? pred__28663.cljs$core$IFn$_invoke$arity$2(G__28670,G__28671) : pred__28663.call(null,G__28670,G__28671));
})())){
return "Gain +Quality +Power on checks that use a heavy weapon, shield, or armor.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28664)].join('')));
}
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28630_29619,G__28631_29620) : re_frame.core.reg_sub.call(null,G__28630_29619,G__28631_29620));
var G__28672_29629 = new cljs.core.Keyword(null,"sneak-attack","sneak-attack",-1793099532);
var G__28673_29630 = (function (db,p__28674){
var vec__28675 = p__28674;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28675,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28675,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Sneak Attack",new cljs.core.Keyword(null,"description","description",-1428560544),"Gain +Quality +Power on checks using weapons that benefit from your martial prowess to attack a creature who is unaware of your presence or who you are hidden from."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28672_29629,G__28673_29630) : re_frame.core.reg_sub.call(null,G__28672_29629,G__28673_29630));
var G__28678_29634 = new cljs.core.Keyword(null,"combat-maneuvers","combat-maneuvers",-846517552);
var G__28679_29635 = (function (db,p__28680){
var vec__28681 = p__28680;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28681,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28681,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Combat Maneuvers",new cljs.core.Keyword(null,"description","description",-1428560544),"When you make a melee attack against a targeted creature, you can choose to make one of the following combat maneuvers instead: trip, shove, or disarm. If your trip attack is successful, the target falls prone. If the shove is successful, the target is moved to an adjacent zone. If the disarm is successful, the target's weapon falls to the ground in the zone that they occupy."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28678_29634,G__28679_29635) : re_frame.core.reg_sub.call(null,G__28678_29634,G__28679_29635));
var G__28684_29638 = new cljs.core.Keyword(null,"protective-stance","protective-stance",1339958411);
var G__28685_29639 = (function (db,p__28686){
var vec__28687 = p__28686;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28687,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28687,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Protective Stance",new cljs.core.Keyword(null,"description","description",-1428560544),"If a target creature within the same zone as you is attacked and you are wielding a shield for which you have martial prowess, you can make a defense check against that attack. The result of your defense check is inflicted as a flat penalty on the attack roll. The target of the attack may still make their own defense check if needed."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28684_29638,G__28685_29639) : re_frame.core.reg_sub.call(null,G__28684_29638,G__28685_29639));
var G__28690_29642 = new cljs.core.Keyword(null,"knowledge","knowledge",1188023043);
var G__28691_29643 = (function (db,p__28692){
var vec__28693 = p__28692;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28693,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28693,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Recall Information",new cljs.core.Keyword(null,"description","description",-1428560544),["Recollection +Quality +Power on checks to determine your knowledge on ",(function (){var pred__28707 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28708 = properties;
if(cljs.core.truth_((function (){var G__28710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religion"], null);
var G__28711 = expr__28708;
return (pred__28707.cljs$core$IFn$_invoke$arity$2 ? pred__28707.cljs$core$IFn$_invoke$arity$2(G__28710,G__28711) : pred__28707.call(null,G__28710,G__28711));
})())){
return "religious matters.";
} else {
if(cljs.core.truth_((function (){var G__28712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aethrology"], null);
var G__28713 = expr__28708;
return (pred__28707.cljs$core$IFn$_invoke$arity$2 ? pred__28707.cljs$core$IFn$_invoke$arity$2(G__28712,G__28713) : pred__28707.call(null,G__28712,G__28713));
})())){
return "aethereal matters.";
} else {
if(cljs.core.truth_((function (){var G__28714 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medicine"], null);
var G__28715 = expr__28708;
return (pred__28707.cljs$core$IFn$_invoke$arity$2 ? pred__28707.cljs$core$IFn$_invoke$arity$2(G__28714,G__28715) : pred__28707.call(null,G__28714,G__28715));
})())){
return "medicinal matters.";
} else {
if(cljs.core.truth_((function (){var G__28716 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["History"], null);
var G__28717 = expr__28708;
return (pred__28707.cljs$core$IFn$_invoke$arity$2 ? pred__28707.cljs$core$IFn$_invoke$arity$2(G__28716,G__28717) : pred__28707.call(null,G__28716,G__28717));
})())){
return "historical matters.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28708)].join('')));
}
}
}
}
})()].join('')], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28690_29642,G__28691_29643) : re_frame.core.reg_sub.call(null,G__28690_29642,G__28691_29643));
var G__28718_29650 = new cljs.core.Keyword(null,"implement-prowess","implement-prowess",-267630211);
var G__28719_29651 = (function (db,p__28720){
var vec__28721 = p__28720;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28721,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28721,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Arcane Implement Prowess",new cljs.core.Keyword(null,"description","description",-1428560544),"You know how to access the powers stored within arcane implements. Gain +Quality on checks using arcane implements."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28718_29650,G__28719_29651) : re_frame.core.reg_sub.call(null,G__28718_29650,G__28719_29651));
var G__28724_29655 = new cljs.core.Keyword(null,"relic-prowess","relic-prowess",-1221354922);
var G__28725_29656 = (function (db,p__28726){
var vec__28727 = p__28726;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28727,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28727,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Religious Relic Prowess",new cljs.core.Keyword(null,"description","description",-1428560544),"You are capable of drawing out the power resting within religious relics. Gain +Quality +Power on checks using religious relics."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28724_29655,G__28725_29656) : re_frame.core.reg_sub.call(null,G__28724_29655,G__28725_29656));
var G__28730_29658 = new cljs.core.Keyword(null,"slight-of-hand","slight-of-hand",971131650);
var G__28731_29659 = (function (db,p__28732){
var vec__28733 = p__28732;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28733,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28733,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Sleight of Hand",new cljs.core.Keyword(null,"description","description",-1428560544),"Coordination +Quality +Power to checks attempting to plant or lift and object from someone or when attempting to secretly hide or retrieve an object on your person."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28730_29658,G__28731_29659) : re_frame.core.reg_sub.call(null,G__28730_29658,G__28731_29659));
var G__28736_29660 = new cljs.core.Keyword(null,"lockpicking","lockpicking",-1008040736);
var G__28737_29661 = (function (db,p__28738){
var vec__28739 = p__28738;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28739,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28739,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Lockpicking",new cljs.core.Keyword(null,"description","description",-1428560544),"Coordination +Quality +Power to checks attempting to pick a lock. You may need certain tools to make this check."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28736_29660,G__28737_29661) : re_frame.core.reg_sub.call(null,G__28736_29660,G__28737_29661));
var G__28742_29663 = new cljs.core.Keyword(null,"reputation","reputation",-898759917);
var G__28743_29664 = (function (db,p__28744){
var vec__28745 = p__28744;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28745,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28745,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Reputation",new cljs.core.Keyword(null,"description","description",-1428560544),"Gain +Quality +Power when making checks to persuade someone who is aware of your reputation."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28742_29663,G__28743_29664) : re_frame.core.reg_sub.call(null,G__28742_29663,G__28743_29664));
var G__28748_29666 = new cljs.core.Keyword(null,"membership","membership",254556333);
var G__28749_29667 = (function (db,p__28750){
var vec__28751 = p__28750;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28751,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28751,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Membership Benefits",new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__28754 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28755 = properties;
if(cljs.core.truth_((function (){var G__28757 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Political"], null);
var G__28758 = expr__28755;
return (pred__28754.cljs$core$IFn$_invoke$arity$2 ? pred__28754.cljs$core$IFn$_invoke$arity$2(G__28757,G__28758) : pred__28754.call(null,G__28757,G__28758));
})())){
return "Your political connections grant you access to resources and favors. Gain +Quality +Power when making social checks with those you have political sway with.";
} else {
if(cljs.core.truth_((function (){var G__28759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religious"], null);
var G__28760 = expr__28755;
return (pred__28754.cljs$core$IFn$_invoke$arity$2 ? pred__28754.cljs$core$IFn$_invoke$arity$2(G__28759,G__28760) : pred__28754.call(null,G__28759,G__28760));
})())){
return "Your religious connections grant you access to resources, favors, lodging, and healing. Gain +Quality +Power when making social checks with those who share your religious beliefs.";
} else {
if(cljs.core.truth_((function (){var G__28761 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Guild"], null);
var G__28762 = expr__28755;
return (pred__28754.cljs$core$IFn$_invoke$arity$2 ? pred__28754.cljs$core$IFn$_invoke$arity$2(G__28761,G__28762) : pred__28754.call(null,G__28761,G__28762));
})())){
return "Your economic connections grant you access to resources and favors. Gain +Quality +Power when making social checks with your business associates.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28755)].join('')));
}
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28748_29666,G__28749_29667) : re_frame.core.reg_sub.call(null,G__28748_29666,G__28749_29667));
var G__28763_29671 = new cljs.core.Keyword(null,"relationship","relationship",670482699);
var G__28764_29672 = (function (db,p__28765){
var vec__28766 = p__28765;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28766,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28766,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Friendship",new cljs.core.Keyword(null,"description","description",-1428560544),"Your relationship gives you access to resources and favors. Gain +Quality +Power when making social checks with this individual."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28763_29671,G__28764_29672) : re_frame.core.reg_sub.call(null,G__28763_29671,G__28764_29672));
var G__28769_29674 = new cljs.core.Keyword(null,"potion","potion",1292791805);
var G__28770_29675 = (function (db,p__28771){
var vec__28772 = p__28771;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28772,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28772,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__28775 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28776 = properties;
if(cljs.core.truth_((function (){var G__28778 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Healing"], null);
var G__28779 = expr__28776;
return (pred__28775.cljs$core$IFn$_invoke$arity$2 ? pred__28775.cljs$core$IFn$_invoke$arity$2(G__28778,G__28779) : pred__28775.call(null,G__28778,G__28779));
})())){
return "Cure Wounds";
} else {
return "Drink Potion";
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__28780 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28781 = properties;
if(cljs.core.truth_((function (){var G__28783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Healing"], null);
var G__28784 = expr__28781;
return (pred__28780.cljs$core$IFn$_invoke$arity$2 ? pred__28780.cljs$core$IFn$_invoke$arity$2(G__28783,G__28784) : pred__28780.call(null,G__28783,G__28784));
})())){
return "When consumed, this potion heals 1 point of damage and grants +1d on healing checks for the physical domain.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28781)].join('')));
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28769_29674,G__28770_29675) : re_frame.core.reg_sub.call(null,G__28769_29674,G__28770_29675));
var G__28785_29676 = new cljs.core.Keyword(null,"poison","poison",566911550);
var G__28786_29677 = (function (db,p__28787){
var vec__28788 = p__28787;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28788,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28788,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Inflict Poison",new cljs.core.Keyword(null,"description","description",-1428560544),"When ingested, the infected creature must make a physical healing check with a Target Number of 6. If they fail, then they take -1d -2 on all of their checks for 1d4 hours. If they succeed, then they only take -1d on all of their checks for the next hour. Contains 3 doses which can be applied through ingesting food or drink that contains the poison or the user can apply the poison to a weapon that deals piercing or slashing damage and hit the creature with the weapon."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28785_29676,G__28786_29677) : re_frame.core.reg_sub.call(null,G__28785_29676,G__28786_29677));
var G__28791_29681 = new cljs.core.Keyword(null,"tool","tool",-1298696470);
var G__28792_29682 = (function (db,p__28793){
var vec__28794 = p__28793;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28794,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28794,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Utilize Tool",new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__28797 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28798 = properties;
if(cljs.core.truth_((function (){var G__28800 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Climbing"], null);
var G__28801 = expr__28798;
return (pred__28797.cljs$core$IFn$_invoke$arity$2 ? pred__28797.cljs$core$IFn$_invoke$arity$2(G__28800,G__28801) : pred__28797.call(null,G__28800,G__28801));
})())){
return "Gain +Quality +Power on checks attempting to climb walls, cliffs, trees, etc.";
} else {
if(cljs.core.truth_((function (){var G__28802 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Larceny"], null);
var G__28803 = expr__28798;
return (pred__28797.cljs$core$IFn$_invoke$arity$2 ? pred__28797.cljs$core$IFn$_invoke$arity$2(G__28802,G__28803) : pred__28797.call(null,G__28802,G__28803));
})())){
return "Gain +Quality +Power on checks attempting to open doors and locks or to disarm traps and devices while using these tools.";
} else {
return "You use the tool!";
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28791_29681,G__28792_29682) : re_frame.core.reg_sub.call(null,G__28791_29681,G__28792_29682));
var G__28804_29683 = new cljs.core.Keyword(null,"book","book",-918152214);
var G__28805_29684 = (function (db,p__28806){
var vec__28807 = p__28806;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28807,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28807,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__28810 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28811 = properties;
if(cljs.core.truth_((function (){var G__28813 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religious"], null);
var G__28814 = expr__28811;
return (pred__28810.cljs$core$IFn$_invoke$arity$2 ? pred__28810.cljs$core$IFn$_invoke$arity$2(G__28813,G__28814) : pred__28810.call(null,G__28813,G__28814));
})())){
return "Prayer of Healing";
} else {
if(cljs.core.truth_((function (){var G__28815 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medicinal"], null);
var G__28816 = expr__28811;
return (pred__28810.cljs$core$IFn$_invoke$arity$2 ? pred__28810.cljs$core$IFn$_invoke$arity$2(G__28815,G__28816) : pred__28810.call(null,G__28815,G__28816));
})())){
return "Common Treatments";
} else {
if(cljs.core.truth_((function (){var G__28817 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aethereal"], null);
var G__28818 = expr__28811;
return (pred__28810.cljs$core$IFn$_invoke$arity$2 ? pred__28810.cljs$core$IFn$_invoke$arity$2(G__28817,G__28818) : pred__28810.call(null,G__28817,G__28818));
})())){
return "Arcane Knowledge";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28811)].join('')));
}
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__28819 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__28820 = properties;
if(cljs.core.truth_((function (){var G__28822 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religious"], null);
var G__28823 = expr__28820;
return (pred__28819.cljs$core$IFn$_invoke$arity$2 ? pred__28819.cljs$core$IFn$_invoke$arity$2(G__28822,G__28823) : pred__28819.call(null,G__28822,G__28823));
})())){
return "Exertion +Quality +Power with a Target Number of 5 to pray over a flame to imbue it with the healing powers of Heilm. On a success, the flame heals a number of physical, spiritual, and mental wounds equal to the result of the check at the rate of 1 wound per hour and can be distributed among any number of creatures. On a failure, you take a number of spiritual wounds equal to the amount that you failed by. This prayer can only be made once per day.";
} else {
if(cljs.core.truth_((function (){var G__28824 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medicinal"], null);
var G__28825 = expr__28820;
return (pred__28819.cljs$core$IFn$_invoke$arity$2 ? pred__28819.cljs$core$IFn$_invoke$arity$2(G__28824,G__28825) : pred__28819.call(null,G__28824,G__28825));
})())){
return "Concentration +Quality +Power on checks using herbs from the Four Duchies to treat wounds or illnesses.";
} else {
if(cljs.core.truth_((function (){var G__28826 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aethereal"], null);
var G__28827 = expr__28820;
return (pred__28819.cljs$core$IFn$_invoke$arity$2 ? pred__28819.cljs$core$IFn$_invoke$arity$2(G__28826,G__28827) : pred__28819.call(null,G__28826,G__28827));
})())){
return "Gain +Quality +Power on checks that attempting to understand or use objects, text, or rituals that are of Eldari origin.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28820)].join('')));
}
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28804_29683,G__28805_29684) : re_frame.core.reg_sub.call(null,G__28804_29683,G__28805_29684));
var G__28828_29685 = new cljs.core.Keyword(null,"coin","coin",-227557189);
var G__28829_29686 = (function (db,p__28830){
var vec__28831 = p__28830;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28831,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28831,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Gold",new cljs.core.Keyword(null,"description","description",-1428560544),"Gold is a standard unit of exchange for goods and services. It may also be used to influence the outcomes of persuasion checks depending on the recipient's disposition towards bribery."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28828_29685,G__28829_29686) : re_frame.core.reg_sub.call(null,G__28828_29685,G__28829_29686));
var G__28834_29687 = new cljs.core.Keyword(null,"feature-title","feature-title",2026798069);
var G__28835_29688 = (function (db,p__28836){
var vec__28837 = p__28836;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837,(0),null);
var feature = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837,(1),null);
var resource_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__28840 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [feature,resource_properties], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__28840) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__28840));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28834_29687,G__28835_29688) : re_frame.core.reg_sub.call(null,G__28834_29687,G__28835_29688));
var G__28841_29690 = new cljs.core.Keyword(null,"feature-details","feature-details",96542810);
var G__28842_29691 = (function (db,p__28843){
var vec__28844 = p__28843;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28844,(0),null);
var feature = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28844,(1),null);
var resource_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28844,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__28847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [feature,resource_properties], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__28847) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__28847));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28841_29690,G__28842_29691) : re_frame.core.reg_sub.call(null,G__28841_29690,G__28842_29691));
var G__28848_29692 = new cljs.core.Keyword(null,"heritage-details","heritage-details",517842258);
var G__28849_29693 = (function (db,p__28850){
var vec__28851 = p__28850;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28851,(0),null);
var heritage_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28851,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),heritage_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28848_29692,G__28849_29693) : re_frame.core.reg_sub.call(null,G__28848_29692,G__28849_29693));
var G__28854_29694 = new cljs.core.Keyword(null,"heritage-resources","heritage-resources",-1286324504);
var G__28855_29695 = (function (db,p__28856){
var vec__28857 = p__28856;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28857,(0),null);
var heritage_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28857,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),heritage_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28854_29694,G__28855_29695) : re_frame.core.reg_sub.call(null,G__28854_29694,G__28855_29695));
var G__28860_29696 = new cljs.core.Keyword(null,"heritage-features","heritage-features",-1746727718);
var G__28861_29697 = (function (db,p__28862){
var vec__28863 = p__28862;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28863,(0),null);
var heritage_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28863,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),heritage_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28860_29696,G__28861_29697) : re_frame.core.reg_sub.call(null,G__28860_29696,G__28861_29697));
var G__28866_29698 = new cljs.core.Keyword(null,"role-details","role-details",-772961800);
var G__28867_29699 = (function (db,p__28868){
var vec__28869 = p__28868;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28869,(0),null);
var role_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28869,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),role_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28866_29698,G__28867_29699) : re_frame.core.reg_sub.call(null,G__28866_29698,G__28867_29699));
var G__28872_29700 = new cljs.core.Keyword(null,"role-resources","role-resources",819423685);
var G__28873_29701 = (function (db,p__28874){
var vec__28875 = p__28874;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28875,(0),null);
var role_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28875,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),role_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28872_29700,G__28873_29701) : re_frame.core.reg_sub.call(null,G__28872_29700,G__28873_29701));
var G__28878_29702 = new cljs.core.Keyword(null,"role-features","role-features",459150250);
var G__28879_29703 = (function (db,p__28880){
var vec__28881 = p__28880;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28881,(0),null);
var role_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28881,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),role_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28878_29702,G__28879_29703) : re_frame.core.reg_sub.call(null,G__28878_29702,G__28879_29703));
var G__28884_29704 = new cljs.core.Keyword(null,"prototype-text","prototype-text",620288557);
var G__28885_29705 = (function (db,p__28886){
var vec__28887 = p__28886;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28887,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28887,(1),null);
var keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28887,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),keyword], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28884_29704,G__28885_29705) : re_frame.core.reg_sub.call(null,G__28884_29704,G__28885_29705));
var G__28890_29706 = new cljs.core.Keyword(null,"overview","overview",-435037267);
var G__28891_29707 = (function (db,p__28892){
var vec__28893 = p__28892;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28893,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28893,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"overview","overview",-435037267)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28890_29706,G__28891_29707) : re_frame.core.reg_sub.call(null,G__28890_29706,G__28891_29707));
var G__28896_29708 = new cljs.core.Keyword(null,"base-dice-pool","base-dice-pool",-2000848897);
var G__28897_29709 = (function (db,p__28898){
var vec__28899 = p__28898;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28899,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28899,(1),null);
var skillbilities_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28899,(2),null);
var skills = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28899,(3),null);
var end = ((skillbilities_QMARK_ === true)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"base-dice-pool-variations","base-dice-pool-variations",-2068843221),new cljs.core.Keyword(null,"skillbilities","skillbilities",-571801846)], null)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"base-dice-pool-variations","base-dice-pool-variations",-2068843221),new cljs.core.Keyword(null,"skills-and-abilities","skills-and-abilities",-4029936)], null)));
var example = ((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(1)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"dice-pool-example","dice-pool-example",1828496004),new cljs.core.Keyword(null,"simple-skillbilities","simple-skillbilities",-1733944826)], null)):((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"dice-pool-example","dice-pool-example",1828496004),new cljs.core.Keyword(null,"full-skillbilities","full-skillbilities",-451516920)], null)):((((skillbilities_QMARK_ === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"dice-pool-example","dice-pool-example",1828496004),new cljs.core.Keyword(null,"skills-and-abilities","skills-and-abilities",-4029936)], null)):null)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"base-dice-pool","base-dice-pool",-2000848897)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example)].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28896_29708,G__28897_29709) : re_frame.core.reg_sub.call(null,G__28896_29708,G__28897_29709));
var G__28902_29710 = new cljs.core.Keyword(null,"bonuses-and-penalties","bonuses-and-penalties",606200007);
var G__28903_29711 = (function (db,p__28904){
var vec__28905 = p__28904;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28905,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28905,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"bonuses-and-penalties","bonuses-and-penalties",606200007)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28902_29710,G__28903_29711) : re_frame.core.reg_sub.call(null,G__28902_29710,G__28903_29711));
var G__28908_29712 = new cljs.core.Keyword(null,"splintering","splintering",-1707231919);
var G__28909_29713 = (function (db,p__28910){
var vec__28911 = p__28910;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28911,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28911,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"splintering","splintering",-1707231919)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28908_29712,G__28909_29713) : re_frame.core.reg_sub.call(null,G__28908_29712,G__28909_29713));
var G__28914_29714 = new cljs.core.Keyword(null,"caution","caution",1823615934);
var G__28915_29715 = (function (db,p__28916){
var vec__28917 = p__28916;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28917,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28917,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"caution","caution",1823615934)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28914_29714,G__28915_29715) : re_frame.core.reg_sub.call(null,G__28914_29714,G__28915_29715));
var G__28920_29717 = new cljs.core.Keyword(null,"passive-checks","passive-checks",-2057161289);
var G__28921_29718 = (function (db,p__28922){
var vec__28923 = p__28922;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28923,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28923,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"passive-checks","passive-checks",-2057161289)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28920_29717,G__28921_29718) : re_frame.core.reg_sub.call(null,G__28920_29717,G__28921_29718));
var G__28926_29719 = new cljs.core.Keyword(null,"actions","actions",-812656882);
var G__28927_29720 = (function (db,p__28928){
var vec__28929 = p__28928;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28929,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28929,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"actions","actions",-812656882)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28926_29719,G__28927_29720) : re_frame.core.reg_sub.call(null,G__28926_29719,G__28927_29720));
var G__28932_29721 = new cljs.core.Keyword(null,"moments","moments",-1541189836);
var G__28933_29722 = (function (db,p__28934){
var vec__28935 = p__28934;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28935,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28935,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"moments","moments",-1541189836)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28932_29721,G__28933_29722) : re_frame.core.reg_sub.call(null,G__28932_29721,G__28933_29722));
var G__28938_29723 = new cljs.core.Keyword(null,"rounds","rounds",1157201084);
var G__28939_29724 = (function (db,p__28940){
var vec__28941 = p__28940;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28941,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28941,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"rounds","rounds",1157201084)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28938_29723,G__28939_29724) : re_frame.core.reg_sub.call(null,G__28938_29723,G__28939_29724));
var G__28944_29725 = new cljs.core.Keyword(null,"complex-moments","complex-moments",1664654174);
var G__28945_29726 = (function (db,p__28946){
var vec__28947 = p__28946;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28947,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28947,(1),null);
var encounter_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28947,(2),null);
var splintering = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28947,(3),null);
var caution = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28947,(4),null);
var G__28950 = encounter_style;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("turn-based",G__28950)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("simultaneous",G__28950)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"beginning","beginning",77824097)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,splintering)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,caution))))?["may modify their dice pool at this point. ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,splintering))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"splintering","splintering",-1707231919)], null))):null),"Modifications to your dice pool may cause your actions to be resolved earlier or later than they otherwise would be. "].join(''):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"default","default",-1987822328)], null)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),G__28950)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["ERROR: Unrecognized encounter style in item: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join('')], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28950)].join('')));

}
}
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28944_29725,G__28945_29726) : re_frame.core.reg_sub.call(null,G__28944_29725,G__28945_29726));
var G__28951_29727 = new cljs.core.Keyword(null,"complex-rounds","complex-rounds",-1215067926);
var G__28952_29728 = (function (db,p__28953){
var vec__28954 = p__28953;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28954,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28954,(1),null);
var encounter_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28954,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"rounds","rounds",1157201084)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28951_29727,G__28952_29728) : re_frame.core.reg_sub.call(null,G__28951_29727,G__28952_29728));
var G__28957_29729 = new cljs.core.Keyword(null,"injuries","injuries",-299210720);
var G__28958_29730 = (function (db,p__28959){
var vec__28960 = p__28959;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28960,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28960,(1),null);
var damage_tiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28960,(2),null);
var recovery_tiers_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28960,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(damage_tiers,(1))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers], null));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers,new cljs.core.Keyword(null,"beginning","beginning",77824097)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((recovery_tiers_QMARK_ === true)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers,new cljs.core.Keyword(null,"recovery-tiers?","recovery-tiers?",1974730784)], null)):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers,new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28957_29729,G__28958_29730) : re_frame.core.reg_sub.call(null,G__28957_29729,G__28958_29730));
var G__28963_29731 = new cljs.core.Keyword(null,"conditions","conditions",-1647236270);
var G__28964_29732 = (function (db,p__28965){
var vec__28966 = p__28965;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28966,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28966,(1),null);
var condition_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28966,(2),null);
var skills = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28966,(3),null);
var abilities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28966,(4),null);
var skillbilities_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28966,(5),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.Keyword(null,"beginning","beginning",77824097)], null))),((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(1)))))?"that domain's skill. ":((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"that domain's continuation skill. ":((((skillbilities_QMARK_ === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"that domain's continuation skill with it's resilience ability. ":null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(condition_style)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28963_29731,G__28964_29732) : re_frame.core.reg_sub.call(null,G__28963_29731,G__28964_29732));
var G__28969_29733 = new cljs.core.Keyword(null,"recovery","recovery",-2004840646);
var G__28970_29734 = (function (db,p__28971){
var vec__28972 = p__28971;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28972,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28972,(1),null);
var damage_tiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28972,(2),null);
var recovery_tiers_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28972,(3),null);
var recovery_times = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28972,(4),null);
var treatment_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28972,(5),null);
var skills = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28972,(6),null);
var abilities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28972,(7),null);
var skillbilities_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28972,(8),null);
return [((recovery_tiers_QMARK_ === false)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),damage_tiers], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"value","value",305978217)], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"unit","unit",375175175)], null))),". "].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__28978 = damage_tiers;
switch (G__28978) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28978)].join('')));

}
})())),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,treatment_QMARK_))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),new cljs.core.Keyword(null,"treatment?","treatment?",264384759)], null))),((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(1)))))?"an acuity skill check. ":((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"a comprehension skill check. ":((((skillbilities_QMARK_ === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"a comprehension skill check with the relevant domain's discipline ability. ":null)))].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28969_29733,G__28970_29734) : re_frame.core.reg_sub.call(null,G__28969_29733,G__28970_29734));
var G__28979_29736 = new cljs.core.Keyword(null,"condition-title","condition-title",-1818530037);
var G__28980_29737 = (function (db,p__28981){
var vec__28982 = p__28981;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28982,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28982,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28979_29736,G__28980_29737) : re_frame.core.reg_sub.call(null,G__28979_29736,G__28980_29737));
var G__28985_29738 = new cljs.core.Keyword(null,"condition-description","condition-description",-584806753);
var G__28986_29739 = (function (db,p__28987){
var vec__28988 = p__28987;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28988,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28988,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"description","description",-1428560544)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28985_29738,G__28986_29739) : re_frame.core.reg_sub.call(null,G__28985_29738,G__28986_29739));
var G__28991_29740 = new cljs.core.Keyword(null,"condition-effects","condition-effects",1872046469);
var G__28992_29741 = (function (db,p__28993){
var vec__28994 = p__28993;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28994,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28994,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"effects","effects",-282369292)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28991_29740,G__28992_29741) : re_frame.core.reg_sub.call(null,G__28991_29740,G__28992_29741));
var G__28997_29742 = new cljs.core.Keyword(null,"condition-effect-description","condition-effect-description",-3743093);
var G__28998_29743 = (function (db,p__28999){
var vec__29000 = p__28999;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29000,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29000,(1),null);
var effect_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29000,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"effects","effects",-282369292),effect_id,new cljs.core.Keyword(null,"description","description",-1428560544)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28997_29742,G__28998_29743) : re_frame.core.reg_sub.call(null,G__28997_29742,G__28998_29743));
var G__29003_29744 = new cljs.core.Keyword(null,"condition-effect-duration","condition-effect-duration",-2101079389);
var G__29004_29745 = (function (db,p__29005){
var vec__29006 = p__29005;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29006,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29006,(1),null);
var effect_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29006,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"effects","effects",-282369292),effect_id,new cljs.core.Keyword(null,"duration","duration",1444101068)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29003_29744,G__29004_29745) : re_frame.core.reg_sub.call(null,G__29003_29744,G__29004_29745));
var G__29009_29746 = new cljs.core.Keyword(null,"world-overview","world-overview",-314945091);
var G__29010_29747 = (function (db,p__29011){
var vec__29012 = p__29011;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29012,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29012,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),world_id,new cljs.core.Keyword(null,"overview","overview",-435037267)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29009_29746,G__29010_29747) : re_frame.core.reg_sub.call(null,G__29009_29746,G__29010_29747));
var G__29015_29748 = new cljs.core.Keyword(null,"world-territories","world-territories",-982355734);
var G__29016_29749 = (function (db,p__29017){
var vec__29018 = p__29017;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29018,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29018,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),world_id,new cljs.core.Keyword(null,"territories","territories",-1856976391)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29015_29748,G__29016_29749) : re_frame.core.reg_sub.call(null,G__29015_29748,G__29016_29749));
var G__29021_29750 = new cljs.core.Keyword(null,"territory-civilizations","territory-civilizations",-523722954);
var G__29022_29751 = (function (db,p__29023){
var vec__29024 = p__29023;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29024,(0),null);
var territory_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29024,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),territory_id,new cljs.core.Keyword(null,"civilizations","civilizations",822016090)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29021_29750,G__29022_29751) : re_frame.core.reg_sub.call(null,G__29021_29750,G__29022_29751));
var G__29027_29752 = new cljs.core.Keyword(null,"territory-details","territory-details",323186833);
var G__29028_29753 = (function (db,p__29029){
var vec__29030 = p__29029;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29030,(0),null);
var territory_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29030,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),territory_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29027_29752,G__29028_29753) : re_frame.core.reg_sub.call(null,G__29027_29752,G__29028_29753));
var G__29033_29754 = new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185);
var G__29034_29755 = (function (db,p__29035){
var vec__29036 = p__29035;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29036,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29036,(1),null);
var territories = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),world_id,new cljs.core.Keyword(null,"territories","territories",-1856976391)], null));
var civilizations = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(territories)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(civilizations));
} else {
var G__29756 = cljs.core.rest(territories);
var G__29757 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,civilizations,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(territories),new cljs.core.Keyword(null,"civilizations","civilizations",822016090)], null)));
territories = G__29756;
civilizations = G__29757;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29033_29754,G__29034_29755) : re_frame.core.reg_sub.call(null,G__29033_29754,G__29034_29755));
var G__29039_29758 = new cljs.core.Keyword(null,"world-lore","world-lore",-1851264915);
var G__29040_29759 = (function (db,p__29041){
var vec__29042 = p__29041;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29042,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29042,(1),null);
var civilizations = (function (){var G__29046 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29046) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29046));
})();
var lore = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(lore));
} else {
var G__29760 = cljs.core.rest(civilizations);
var G__29761 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,lore,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"lore","lore",-10530558)], null)));
civilizations = G__29760;
lore = G__29761;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29039_29758,G__29040_29759) : re_frame.core.reg_sub.call(null,G__29039_29758,G__29040_29759));
var G__29047_29762 = new cljs.core.Keyword(null,"world-organizations","world-organizations",-481549703);
var G__29048_29763 = (function (db,p__29049){
var vec__29050 = p__29049;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29050,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29050,(1),null);
var civilizations = (function (){var G__29054 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29054) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29054));
})();
var organizations = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(organizations));
} else {
var G__29764 = cljs.core.rest(civilizations);
var G__29765 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,organizations,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"organizations","organizations",-755443762)], null)));
civilizations = G__29764;
organizations = G__29765;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29047_29762,G__29048_29763) : re_frame.core.reg_sub.call(null,G__29047_29762,G__29048_29763));
var G__29055_29766 = new cljs.core.Keyword(null,"world-key-figures","world-key-figures",-2094243827);
var G__29056_29767 = (function (db,p__29057){
var vec__29058 = p__29057;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29058,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29058,(1),null);
var civilizations = (function (){var G__29062 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29062) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29062));
})();
var key_figures = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(key_figures));
} else {
var G__29768 = cljs.core.rest(civilizations);
var G__29769 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,key_figures,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"key-figures","key-figures",-2075124028)], null)));
civilizations = G__29768;
key_figures = G__29769;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29055_29766,G__29056_29767) : re_frame.core.reg_sub.call(null,G__29055_29766,G__29056_29767));
var G__29063_29770 = new cljs.core.Keyword(null,"world-advancements","world-advancements",2113721326);
var G__29064_29771 = (function (db,p__29065){
var vec__29066 = p__29065;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29066,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29066,(1),null);
var civilizations = (function (){var G__29070 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29070) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29070));
})();
var advancements = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(advancements));
} else {
var G__29772 = cljs.core.rest(civilizations);
var G__29773 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,advancements,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"advancements","advancements",32607236)], null)));
civilizations = G__29772;
advancements = G__29773;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29063_29770,G__29064_29771) : re_frame.core.reg_sub.call(null,G__29063_29770,G__29064_29771));
var G__29071_29774 = new cljs.core.Keyword(null,"world-creatures","world-creatures",745737020);
var G__29072_29775 = (function (db,p__29073){
var vec__29074 = p__29073;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29074,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29074,(1),null);
var territories = (function (){var G__29078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-territories","world-territories",-982355734),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29078) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29078));
})();
var creatures = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(territories)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(creatures));
} else {
var G__29781 = cljs.core.rest(territories);
var G__29782 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,creatures,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(territories),new cljs.core.Keyword(null,"creatures","creatures",761416150)], null)));
territories = G__29781;
creatures = G__29782;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29071_29774,G__29072_29775) : re_frame.core.reg_sub.call(null,G__29071_29774,G__29072_29775));
var G__29079_29783 = new cljs.core.Keyword(null,"world-heritages","world-heritages",-1355127108);
var G__29080_29784 = (function (db,p__29081){
var vec__29082 = p__29081;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29082,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29082,(1),null);
var civilizations = (function (){var G__29086 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29086) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29086));
})();
var heritages = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(heritages));
} else {
var G__29785 = cljs.core.rest(civilizations);
var G__29786 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,heritages,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"heritages","heritages",1016532791)], null)));
civilizations = G__29785;
heritages = G__29786;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29079_29783,G__29080_29784) : re_frame.core.reg_sub.call(null,G__29079_29783,G__29080_29784));
var G__29087_29788 = new cljs.core.Keyword(null,"world-roles","world-roles",-1495875244);
var G__29088_29789 = (function (db,p__29089){
var vec__29090 = p__29089;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29090,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29090,(1),null);
var civilizations = (function (){var G__29094 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29094) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29094));
})();
var roles = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(roles));
} else {
var G__29790 = cljs.core.rest(civilizations);
var G__29791 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,roles,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"roles","roles",143379530)], null)));
civilizations = G__29790;
roles = G__29791;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29087_29788,G__29088_29789) : re_frame.core.reg_sub.call(null,G__29087_29788,G__29088_29789));
var G__29095_29792 = new cljs.core.Keyword(null,"world-resources","world-resources",368334044);
var G__29096_29793 = (function (db,p__29097){
var vec__29098 = p__29097;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29098,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29098,(1),null);
var civilizations = (function (){var G__29102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__29102) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__29102));
})();
var resources = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(resources));
} else {
var G__29794 = cljs.core.rest(civilizations);
var G__29795 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,resources,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"resources","resources",1632806811)], null)));
civilizations = G__29794;
resources = G__29795;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29095_29792,G__29096_29793) : re_frame.core.reg_sub.call(null,G__29095_29792,G__29096_29793));
var G__29103_29796 = new cljs.core.Keyword(null,"civilization-details","civilization-details",281511038);
var G__29104_29797 = (function (db,p__29105){
var vec__29106 = p__29105;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29106,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29106,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29103_29796,G__29104_29797) : re_frame.core.reg_sub.call(null,G__29103_29796,G__29104_29797));
var G__29109_29798 = new cljs.core.Keyword(null,"civilization-lore","civilization-lore",-555959513);
var G__29110_29799 = (function (db,p__29111){
var vec__29112 = p__29111;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29112,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29112,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"lore","lore",-10530558)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29109_29798,G__29110_29799) : re_frame.core.reg_sub.call(null,G__29109_29798,G__29110_29799));
var G__29115_29800 = new cljs.core.Keyword(null,"civilization-organizations","civilization-organizations",-666067443);
var G__29116_29801 = (function (db,p__29117){
var vec__29118 = p__29117;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29118,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29118,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"organizations","organizations",-755443762)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29115_29800,G__29116_29801) : re_frame.core.reg_sub.call(null,G__29115_29800,G__29116_29801));
var G__29121_29802 = new cljs.core.Keyword(null,"civilization-key-figures","civilization-key-figures",1996035078);
var G__29122_29803 = (function (db,p__29123){
var vec__29124 = p__29123;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29124,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29124,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"key-figures","key-figures",-2075124028)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29121_29802,G__29122_29803) : re_frame.core.reg_sub.call(null,G__29121_29802,G__29122_29803));
var G__29127_29804 = new cljs.core.Keyword(null,"civilization-advancements","civilization-advancements",1472212775);
var G__29128_29805 = (function (db,p__29129){
var vec__29130 = p__29129;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29130,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29130,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"advancements","advancements",32607236)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29127_29804,G__29128_29805) : re_frame.core.reg_sub.call(null,G__29127_29804,G__29128_29805));

//# sourceMappingURL=modular_roleplaying_framework.db_CRUD.js.map
