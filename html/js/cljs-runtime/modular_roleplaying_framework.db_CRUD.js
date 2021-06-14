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
var vec__35882 = temp__5733__auto__;
var seq__35883 = cljs.core.seq(vec__35882);
var first__35884 = cljs.core.first(seq__35883);
var seq__35883__$1 = cljs.core.next(seq__35883);
var k = first__35884;
var ks__$1 = seq__35883__$1;
if(cljs.core.seq(ks__$1)){
var v = (function (){var G__35885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__35886 = ks__$1;
return (modular_roleplaying_framework.db_CRUD.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? modular_roleplaying_framework.db_CRUD.dissoc_in.cljs$core$IFn$_invoke$arity$2(G__35885,G__35886) : modular_roleplaying_framework.db_CRUD.dissoc_in.call(null,G__35885,G__35886));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-system","initialize-system",-1223784141),(function (p__35887,p__35888){
var map__35889 = p__35887;
var map__35889__$1 = (((((!((map__35889 == null))))?(((((map__35889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35889):map__35889);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35889__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35890 = p__35888;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35890,(0),null);
var section_one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35890,(1),null);
var section_two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35890,(2),null);
var section_three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35890,(3),null);
var layout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35890,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section_two),(0)),(0),modular_roleplaying_framework.db_CRUD.url_friendly(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section_two)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section_two),(0),layout,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section_one),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section_three),(0)),modular_roleplaying_framework.db_CRUD.url_friendly(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section_three)),modular_roleplaying_framework.db_CRUD.url_friendly(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section_one)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section_one),(0)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-layout","toggle-layout",-241410907),(function (p__35894,_){
var map__35895 = p__35894;
var map__35895__$1 = (((((!((map__35895 == null))))?(((((map__35895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35895):map__35895);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"db","db",993250759));
var system_state = new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db);
var map__35897 = system_state;
var map__35897__$1 = (((((!((map__35897 == null))))?(((((map__35897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35897):map__35897);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35897__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35897__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35897__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35897__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout,"book-layout"))?"pages-layout":"book-layout"),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reorder-sections","reorder-sections",208296526),(function (p__35899,p__35900){
var map__35901 = p__35899;
var map__35901__$1 = (((((!((map__35901 == null))))?(((((map__35901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35901):map__35901);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35901__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35902 = p__35900;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35902,(0),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35902,(1),null);
var section_one = (function (){var G__35906 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section","state-section",-1039543225),"section-one"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__35906) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__35906));
})();
var section_two = (function (){var G__35907 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section","state-section",-1039543225),"section-two"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__35907) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__35907));
})();
var section_three = (function (){var G__35908 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section","state-section",-1039543225),"section-three"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__35908) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__35908));
})();
var layout = (function (){var G__35909 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__35909) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__35909));
})();
var G__35910 = direction;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("forward",G__35910)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_three)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_one)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_two))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("backward",G__35910)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_two)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_three)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_one))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),G__35910)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Unrecognized direction when reordering sections."], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35910)].join('')));

}
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"section-select","section-select",-1432207285),(function (p__35911,p__35912){
var map__35913 = p__35911;
var map__35913__$1 = (((((!((map__35913 == null))))?(((((map__35913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35913):map__35913);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35913__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35914 = p__35912;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35914,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35914,(1),null);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35914,(2),null);
var system_state = cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-title","section-title",1261938902)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section),(0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-tab-parent","item-tab-parent",-1109190767)], null),null);
var map__35918 = system_state;
var map__35918__$1 = (((((!((map__35918 == null))))?(((((map__35918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35918):map__35918);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35918__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35918__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35918__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35918__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tab-select","tab-select",1957789174),(function (p__35920,p__35921){
var map__35922 = p__35920;
var map__35922__$1 = (((((!((map__35922 == null))))?(((((map__35922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35922):map__35922);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35922__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35923 = p__35921;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35923,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35923,(1),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35923,(2),null);
var system_state = cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null),tab_id);
var map__35927 = system_state;
var map__35927__$1 = (((((!((map__35927 == null))))?(((((map__35927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35927):map__35927);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35927__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35927__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35927__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35927__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"item-select","item-select",-1822277284),(function (p__35929,p__35930){
var map__35931 = p__35929;
var map__35931__$1 = (((((!((map__35931 == null))))?(((((map__35931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35931):map__35931);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35931__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35932 = p__35930;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35932,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35932,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35932,(2),null);
var system_state = cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),item_id);
var map__35936 = system_state;
var map__35936__$1 = (((((!((map__35936 == null))))?(((((map__35936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35936):map__35936);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35936__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35936__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35936__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35936__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null)))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"item-tab-select","item-tab-select",-183749023),(function (p__35938,p__35939){
var map__35940 = p__35938;
var map__35940__$1 = (((((!((map__35940 == null))))?(((((map__35940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35940):map__35940);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35940__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35941 = p__35939;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35941,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35941,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35941,(2),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35941,(3),null);
var system_state = cljs.core.assoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),item_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null),tab_id);
var map__35945 = system_state;
var map__35945__$1 = (((((!((map__35945 == null))))?(((((map__35945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35945):map__35945);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35945__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35945__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35945__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35945__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null)))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),(function (p__35947,p__35948){
var map__35949 = p__35947;
var map__35949__$1 = (((((!((map__35949 == null))))?(((((map__35949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35949):map__35949);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35949__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35950 = p__35948;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35950,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35950,(1),null);
var system_state = cljs.core.assoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),null);
var map__35954 = system_state;
var map__35954__$1 = (((((!((map__35954 == null))))?(((((map__35954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35954):map__35954);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35954__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35954__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35954__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35954__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-system-state","update-system-state",-69675065),(function (p__35956,p__35957){
var map__35958 = p__35956;
var map__35958__$1 = (((((!((map__35958 == null))))?(((((map__35958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35958):map__35958);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35958__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35959 = p__35957;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35959,(0),null);
var vec__35962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35959,(1),null);
var section_one_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(0),null);
var section_one_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(1),null);
var section_one_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(2),null);
var section_one_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(3),null);
var section_two_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(4),null);
var section_two_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(5),null);
var section_two_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(6),null);
var section_two_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(7),null);
var section_three_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(8),null);
var section_three_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(9),null);
var section_three_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(10),null);
var section_three_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(11),null);
var layout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(12),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section-title","section-title",1261938902),section_one_title,new cljs.core.Keyword(null,"section-id","section-id",-1780104220),section_one_id,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778),section_one_tab,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),section_one_item], null)], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section-title","section-title",1261938902),section_two_title,new cljs.core.Keyword(null,"section-id","section-id",-1780104220),section_two_id,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778),section_two_tab,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),section_two_item], null)], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section-title","section-title",1261938902),section_three_title,new cljs.core.Keyword(null,"section-id","section-id",-1780104220),section_three_id,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778),section_three_tab,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),section_three_item], null)], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),layout),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"initialized?","initialized?",1707939066)], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-active-item","select-active-item",384984244),(function (db,p__35966){
var vec__35967 = p__35966;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35967,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35967,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35967,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null)),(item_id | (0)))){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),null);
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),(item_id | (0)));
}
}));
var G__35970_37184 = new cljs.core.Keyword(null,"system-state","system-state",509607631);
var G__35971_37185 = (function (db){
return new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__35970_37184,G__35971_37185) : re_frame.core.reg_sub.call(null,G__35970_37184,G__35971_37185));
var G__35972_37188 = new cljs.core.Keyword(null,"overlay-state","overlay-state",95491678);
var G__35973_37189 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-state","overlay-state",95491678)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__35972_37188,G__35973_37189) : re_frame.core.reg_sub.call(null,G__35972_37188,G__35973_37189));
var G__35974_37191 = new cljs.core.Keyword(null,"overlay-item","overlay-item",1921913766);
var G__35975_37192 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-item","overlay-item",1921913766)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__35974_37191,G__35975_37192) : re_frame.core.reg_sub.call(null,G__35974_37191,G__35975_37192));
var G__35976_37193 = new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523);
var G__35977_37194 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__35976_37193,G__35977_37194) : re_frame.core.reg_sub.call(null,G__35976_37193,G__35977_37194));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-state-change","overlay-state-change",1441777589),(function (db,p__35978){
var vec__35979 = p__35978;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35979,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35979,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-state","overlay-state",95491678)], null),state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-item-change","overlay-item-change",-1911220370),(function (db,p__35982){
var vec__35983 = p__35982;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35983,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35983,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-item","overlay-item",1921913766)], null),item_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-params-change","overlay-params-change",171897048),(function (db,p__35986){
var vec__35987 = p__35986;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35987,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35987,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523)], null),params);
}));
var G__35990_37205 = new cljs.core.Keyword(null,"initialized?","initialized?",1707939066);
var G__35991_37206 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"initialized?","initialized?",1707939066)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__35990_37205,G__35991_37206) : re_frame.core.reg_sub.call(null,G__35990_37205,G__35991_37206));
var G__35992_37207 = new cljs.core.Keyword(null,"state-section","state-section",-1039543225);
var G__35993_37208 = (function (db,p__35994){
var vec__35995 = p__35994;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35995,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35995,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__35992_37207,G__35993_37208) : re_frame.core.reg_sub.call(null,G__35992_37207,G__35993_37208));
var G__35998_37215 = new cljs.core.Keyword(null,"state-section-id","state-section-id",210581770);
var G__35999_37216 = (function (db,p__36000){
var vec__36001 = p__36000;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36001,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36001,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__35998_37215,G__35999_37216) : re_frame.core.reg_sub.call(null,G__35998_37215,G__35999_37216));
var G__36004_37220 = new cljs.core.Keyword(null,"state-section-ids","state-section-ids",1524494040);
var G__36005_37221 = (function (db,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null))], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36004_37220,G__36005_37221) : re_frame.core.reg_sub.call(null,G__36004_37220,G__36005_37221));
var G__36006_37224 = new cljs.core.Keyword(null,"state-section-tab","state-section-tab",1111796390);
var G__36007_37225 = (function (db,p__36008){
var vec__36009 = p__36008;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36009,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36009,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36006_37224,G__36007_37225) : re_frame.core.reg_sub.call(null,G__36006_37224,G__36007_37225));
var G__36012_37227 = new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226);
var G__36013_37228 = (function (db,p__36014){
var vec__36015 = p__36014;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36015,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36015,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36012_37227,G__36013_37228) : re_frame.core.reg_sub.call(null,G__36012_37227,G__36013_37228));
var G__36018_37230 = new cljs.core.Keyword(null,"layout","layout",-2120940921);
var G__36019_37231 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36018_37230,G__36019_37231) : re_frame.core.reg_sub.call(null,G__36018_37230,G__36019_37231));
var G__36020_37234 = new cljs.core.Keyword(null,"section","section",-300141526);
var G__36021_37235 = (function (db,p__36022){
var vec__36023 = p__36022;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36023,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36023,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36020_37234,G__36021_37235) : re_frame.core.reg_sub.call(null,G__36020_37234,G__36021_37235));
var G__36026_37236 = new cljs.core.Keyword(null,"section-type","section-type",-1815294838);
var G__36027_37237 = (function (db,p__36028){
var vec__36029 = p__36028;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36029,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36029,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"type","type",1174270348)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36026_37236,G__36027_37237) : re_frame.core.reg_sub.call(null,G__36026_37236,G__36027_37237));
var G__36032_37238 = new cljs.core.Keyword(null,"section-title","section-title",1261938902);
var G__36033_37239 = (function (db,p__36034){
var vec__36035 = p__36034;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36035,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36035,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36032_37238,G__36033_37239) : re_frame.core.reg_sub.call(null,G__36032_37238,G__36033_37239));
var G__36038_37240 = new cljs.core.Keyword(null,"section-tabs","section-tabs",1270711059);
var G__36039_37241 = (function (db,p__36040){
var vec__36041 = p__36040;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36041,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36041,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36038_37240,G__36039_37241) : re_frame.core.reg_sub.call(null,G__36038_37240,G__36039_37241));
var G__36044_37248 = new cljs.core.Keyword(null,"ruleset-skillbilities?","ruleset-skillbilities?",-1360174223);
var G__36045_37249 = (function (db,p__36046){
var vec__36047 = p__36046;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36047,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36047,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"skillbilities?","skillbilities?",788972706)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36044_37248,G__36045_37249) : re_frame.core.reg_sub.call(null,G__36044_37248,G__36045_37249));
var G__36050_37252 = new cljs.core.Keyword(null,"ruleset-skills","ruleset-skills",-1459168412);
var G__36051_37253 = (function (db,p__36052){
var vec__36053 = p__36052;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36053,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36053,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"skills","skills",958701426)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36050_37252,G__36051_37253) : re_frame.core.reg_sub.call(null,G__36050_37252,G__36051_37253));
var G__36056_37255 = new cljs.core.Keyword(null,"ruleset-abilities","ruleset-abilities",1582837328);
var G__36057_37256 = (function (db,p__36058){
var vec__36059 = p__36058;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36059,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36059,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"abilities","abilities",-1471386226)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36056_37255,G__36057_37256) : re_frame.core.reg_sub.call(null,G__36056_37255,G__36057_37256));
var G__36063_37264 = new cljs.core.Keyword(null,"section-tabs-full","section-tabs-full",300098194);
var G__36064_37265 = (function (db,p__36065){
var vec__36066 = p__36065;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36066,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36066,(1),null);
var section_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36066,(2),null);
var item_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
var section_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null));
var tabs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null));
var subtabs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"subtabs","subtabs",627577425)], null))));
if((item_id == null)){
return tabs;
} else {
return modular_roleplaying_framework.db_CRUD.insertv(tabs,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36062_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__36062_SHARP_),cljs.core.first(subtabs));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tabs))),cljs.core.rest(subtabs));
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36063_37264,G__36064_37265) : re_frame.core.reg_sub.call(null,G__36063_37264,G__36064_37265));
var G__36069_37282 = new cljs.core.Keyword(null,"active-tab","active-tab",1102432568);
var G__36070_37283 = (function (db,p__36071){
var vec__36072 = p__36071;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36072,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36072,(1),null);
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null)) | (0));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36069_37282,G__36070_37283) : re_frame.core.reg_sub.call(null,G__36069_37282,G__36070_37283));
var G__36075_37284 = new cljs.core.Keyword(null,"tab-icon","tab-icon",-601622304);
var G__36076_37285 = (function (db,p__36077){
var vec__36078 = p__36077;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36078,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36078,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"icon","icon",1679606541)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36075_37284,G__36076_37285) : re_frame.core.reg_sub.call(null,G__36075_37284,G__36076_37285));
var G__36081_37286 = new cljs.core.Keyword(null,"tab-type","tab-type",-913444495);
var G__36082_37287 = (function (db,p__36083){
var vec__36084 = p__36083;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36084,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36084,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"type","type",1174270348)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36081_37286,G__36082_37287) : re_frame.core.reg_sub.call(null,G__36081_37286,G__36082_37287));
var G__36087_37288 = new cljs.core.Keyword(null,"tab-title","tab-title",1398279061);
var G__36088_37289 = (function (db,p__36089){
var vec__36090 = p__36089;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36090,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36090,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36087_37288,G__36088_37289) : re_frame.core.reg_sub.call(null,G__36087_37288,G__36088_37289));
var G__36093_37291 = new cljs.core.Keyword(null,"tab-template","tab-template",-1557753771);
var G__36094_37292 = (function (db,p__36095){
var vec__36096 = p__36095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36096,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36096,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"template","template",-702405684)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36093_37291,G__36094_37292) : re_frame.core.reg_sub.call(null,G__36093_37291,G__36094_37292));
var G__36099_37298 = new cljs.core.Keyword(null,"tab-items","tab-items",1934951825);
var G__36100_37299 = (function (db,p__36101){
var vec__36102 = p__36101;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36102,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36102,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"items","items",1031954938)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36099_37298,G__36100_37299) : re_frame.core.reg_sub.call(null,G__36099_37298,G__36100_37299));
var G__36105_37308 = new cljs.core.Keyword(null,"item","item",249373802);
var G__36106_37309 = (function (db,p__36107){
var vec__36108 = p__36107;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36108,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36108,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36105_37308,G__36106_37309) : re_frame.core.reg_sub.call(null,G__36105_37308,G__36106_37309));
var G__36111_37317 = new cljs.core.Keyword(null,"item-title","item-title",-249793661);
var G__36112_37318 = (function (db,p__36113){
var vec__36114 = p__36113;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36114,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36114,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36111_37317,G__36112_37318) : re_frame.core.reg_sub.call(null,G__36111_37317,G__36112_37318));
var G__36117_37322 = new cljs.core.Keyword(null,"item-type","item-type",-73995695);
var G__36118_37323 = (function (db,p__36119){
var vec__36120 = p__36119;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36120,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36120,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"type","type",1174270348)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36117_37322,G__36118_37323) : re_frame.core.reg_sub.call(null,G__36117_37322,G__36118_37323));
var G__36123_37325 = new cljs.core.Keyword(null,"item-details","item-details",-987623935);
var G__36124_37326 = (function (db,p__36125){
var vec__36126 = p__36125;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36126,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36126,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36123_37325,G__36124_37326) : re_frame.core.reg_sub.call(null,G__36123_37325,G__36124_37326));
var G__36129_37331 = new cljs.core.Keyword(null,"item-text","item-text",-2146003655);
var G__36130_37332 = (function (db,p__36131){
var vec__36132 = p__36131;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36132,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36132,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36129_37331,G__36130_37332) : re_frame.core.reg_sub.call(null,G__36129_37331,G__36130_37332));
var G__36135_37336 = new cljs.core.Keyword(null,"item-subtabs","item-subtabs",-894115020);
var G__36136_37337 = (function (db,p__36137){
var vec__36138 = p__36137;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36138,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36138,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"subtabs","subtabs",627577425)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36135_37336,G__36136_37337) : re_frame.core.reg_sub.call(null,G__36135_37336,G__36136_37337));
var G__36141_37340 = new cljs.core.Keyword(null,"ruleset-skills","ruleset-skills",-1459168412);
var G__36142_37341 = (function (db,p__36143){
var vec__36144 = p__36143;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144,(0),null);
var ruleset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),ruleset_id,new cljs.core.Keyword(null,"skills","skills",958701426)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36141_37340,G__36142_37341) : re_frame.core.reg_sub.call(null,G__36141_37340,G__36142_37341));
var G__36147_37342 = new cljs.core.Keyword(null,"ruleset-skillbilities","ruleset-skillbilities",2131758022);
var G__36148_37343 = (function (db,p__36149){
var vec__36150 = p__36149;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36150,(0),null);
var ruleset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36150,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),ruleset_id,new cljs.core.Keyword(null,"skillbilities?","skillbilities?",788972706)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36147_37342,G__36148_37343) : re_frame.core.reg_sub.call(null,G__36147_37342,G__36148_37343));
var G__36153_37348 = new cljs.core.Keyword(null,"item-password","item-password",501455667);
var G__36154_37349 = (function (db,p__36155){
var vec__36156 = p__36155;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36156,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36156,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"password","password",417022471)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36153_37348,G__36154_37349) : re_frame.core.reg_sub.call(null,G__36153_37348,G__36154_37349));
var G__36159_37351 = new cljs.core.Keyword(null,"unlock-creature","unlock-creature",1380788176);
var G__36160_37352 = (function (db,p__36161){
var vec__36162 = p__36161;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36162,(0),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36162,(1),null);
var creature_id = cljs.core.filterv((function (item_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"password","password",417022471)], null)),password);
}),cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null))));
if((creature_id == null)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Password does not correspond with a creature."], 0));
} else {
return creature_id;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36159_37351,G__36160_37352) : re_frame.core.reg_sub.call(null,G__36159_37351,G__36160_37352));
var G__36165_37355 = new cljs.core.Keyword(null,"creature-title","creature-title",-418581929);
var G__36166_37356 = (function (db,p__36167){
var vec__36168 = p__36167;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36168,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36168,(1),null);
var character = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id], null));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(character)),", the ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"heritage","heritage",-1161447356).cljs$core$IFn$_invoke$arity$1(character))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(character))].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36165_37355,G__36166_37356) : re_frame.core.reg_sub.call(null,G__36165_37355,G__36166_37356));
var G__36171_37358 = new cljs.core.Keyword(null,"creature-summary","creature-summary",2046084639);
var G__36172_37359 = (function (db,p__36173){
var vec__36174 = p__36173;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36174,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36174,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary","summary",380847952)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36171_37358,G__36172_37359) : re_frame.core.reg_sub.call(null,G__36171_37358,G__36172_37359));
var G__36177_37361 = new cljs.core.Keyword(null,"creature-summary-state","creature-summary-state",-780207604);
var G__36178_37362 = (function (db,p__36179){
var vec__36180 = p__36179;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36180,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36180,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary-state","summary-state",163086774)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36177_37361,G__36178_37362) : re_frame.core.reg_sub.call(null,G__36177_37361,G__36178_37362));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-summary-state-change","creature-summary-state-change",714628401),(function (db,p__36183){
var vec__36184 = p__36183;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36184,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36184,(1),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36184,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary-state","summary-state",163086774)], null),new_state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-summary-update","creature-summary-update",99922919),(function (db,p__36187){
var vec__36188 = p__36187;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36188,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36188,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36188,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary","summary",380847952)], null),changes);
}));
var G__36191_37367 = new cljs.core.Keyword(null,"creature-stats","creature-stats",961451436);
var G__36192_37368 = (function (db,p__36193){
var vec__36194 = p__36193;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36194,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36194,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36191_37367,G__36192_37368) : re_frame.core.reg_sub.call(null,G__36191_37367,G__36192_37368));
var G__36197_37370 = new cljs.core.Keyword(null,"coordination","coordination",1076145876);
var G__36198_37371 = (function (db,p__36199){
var vec__36200 = p__36199;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36200,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36200,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36197_37370,G__36198_37371) : re_frame.core.reg_sub.call(null,G__36197_37370,G__36198_37371));
var G__36203_37374 = new cljs.core.Keyword(null,"reflexes","reflexes",-1252736336);
var G__36204_37375 = (function (db,p__36205){
var vec__36206 = p__36205;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36206,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36206,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36203_37374,G__36204_37375) : re_frame.core.reg_sub.call(null,G__36203_37374,G__36204_37375));
var G__36209_37376 = new cljs.core.Keyword(null,"endurance","endurance",2002692038);
var G__36210_37377 = (function (db,p__36211){
var vec__36212 = p__36211;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36212,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36212,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36209_37376,G__36210_37377) : re_frame.core.reg_sub.call(null,G__36209_37376,G__36210_37377));
var G__36215_37378 = new cljs.core.Keyword(null,"exertion","exertion",-1240242361);
var G__36216_37379 = (function (db,p__36217){
var vec__36218 = p__36217;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36218,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36218,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36215_37378,G__36216_37379) : re_frame.core.reg_sub.call(null,G__36215_37378,G__36216_37379));
var G__36221_37380 = new cljs.core.Keyword(null,"instinct","instinct",2090002619);
var G__36222_37381 = (function (db,p__36223){
var vec__36224 = p__36223;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36224,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36224,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36221_37380,G__36222_37381) : re_frame.core.reg_sub.call(null,G__36221_37380,G__36222_37381));
var G__36227_37382 = new cljs.core.Keyword(null,"perseverance","perseverance",-470288293);
var G__36228_37383 = (function (db,p__36229){
var vec__36230 = p__36229;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36230,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36230,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36227_37382,G__36228_37383) : re_frame.core.reg_sub.call(null,G__36227_37382,G__36228_37383));
var G__36233_37384 = new cljs.core.Keyword(null,"concentration","concentration",1539606986);
var G__36234_37385 = (function (db,p__36235){
var vec__36236 = p__36235;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36236,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36236,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36233_37384,G__36234_37385) : re_frame.core.reg_sub.call(null,G__36233_37384,G__36234_37385));
var G__36239_37386 = new cljs.core.Keyword(null,"recognition","recognition",1793959531);
var G__36240_37387 = (function (db,p__36241){
var vec__36242 = p__36241;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36242,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36242,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36239_37386,G__36240_37387) : re_frame.core.reg_sub.call(null,G__36239_37386,G__36240_37387));
var G__36245_37388 = new cljs.core.Keyword(null,"comprehension","comprehension",-756656463);
var G__36246_37389 = (function (db,p__36247){
var vec__36248 = p__36247;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36248,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36248,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36245_37388,G__36246_37389) : re_frame.core.reg_sub.call(null,G__36245_37388,G__36246_37389));
var G__36251_37390 = new cljs.core.Keyword(null,"persuasion","persuasion",1089798916);
var G__36252_37391 = (function (db,p__36253){
var vec__36254 = p__36253;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36254,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36254,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36251_37390,G__36252_37391) : re_frame.core.reg_sub.call(null,G__36251_37390,G__36252_37391));
var G__36257_37392 = new cljs.core.Keyword(null,"insight","insight",-1501263459);
var G__36258_37393 = (function (db,p__36259){
var vec__36260 = p__36259;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36260,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36260,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36257_37392,G__36258_37393) : re_frame.core.reg_sub.call(null,G__36257_37392,G__36258_37393));
var G__36263_37394 = new cljs.core.Keyword(null,"connections","connections",-2064090887);
var G__36264_37395 = (function (db,p__36265){
var vec__36266 = p__36265;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36266,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36266,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36263_37394,G__36264_37395) : re_frame.core.reg_sub.call(null,G__36263_37394,G__36264_37395));
var G__36269_37396 = new cljs.core.Keyword(null,"might","might",-1328381368);
var G__36270_37397 = (function (db,p__36271){
var vec__36272 = p__36271;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36272,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36272,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36269_37396,G__36270_37397) : re_frame.core.reg_sub.call(null,G__36269_37396,G__36270_37397));
var G__36275_37398 = new cljs.core.Keyword(null,"finesse","finesse",891142453);
var G__36276_37399 = (function (db,p__36277){
var vec__36278 = p__36277;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36278,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36278,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36275_37398,G__36276_37399) : re_frame.core.reg_sub.call(null,G__36275_37398,G__36276_37399));
var G__36281_37400 = new cljs.core.Keyword(null,"fortitude","fortitude",1187352341);
var G__36282_37401 = (function (db,p__36283){
var vec__36284 = p__36283;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36284,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36284,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36281_37400,G__36282_37401) : re_frame.core.reg_sub.call(null,G__36281_37400,G__36282_37401));
var G__36287_37402 = new cljs.core.Keyword(null,"ambition","ambition",-153662933);
var G__36288_37403 = (function (db,p__36289){
var vec__36290 = p__36289;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36290,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36290,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36287_37402,G__36288_37403) : re_frame.core.reg_sub.call(null,G__36287_37402,G__36288_37403));
var G__36293_37407 = new cljs.core.Keyword(null,"discipline","discipline",343863089);
var G__36294_37408 = (function (db,p__36295){
var vec__36296 = p__36295;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36296,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36296,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36293_37407,G__36294_37408) : re_frame.core.reg_sub.call(null,G__36293_37407,G__36294_37408));
var G__36299_37411 = new cljs.core.Keyword(null,"dedication","dedication",2052444551);
var G__36300_37412 = (function (db,p__36301){
var vec__36302 = p__36301;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36302,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36302,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36299_37411,G__36300_37412) : re_frame.core.reg_sub.call(null,G__36299_37411,G__36300_37412));
var G__36305_37416 = new cljs.core.Keyword(null,"intellect","intellect",414822757);
var G__36306_37417 = (function (db,p__36307){
var vec__36308 = p__36307;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36308,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36308,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36305_37416,G__36306_37417) : re_frame.core.reg_sub.call(null,G__36305_37416,G__36306_37417));
var G__36311_37418 = new cljs.core.Keyword(null,"intuition","intuition",1122677380);
var G__36312_37419 = (function (db,p__36313){
var vec__36314 = p__36313;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36314,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36314,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36311_37418,G__36312_37419) : re_frame.core.reg_sub.call(null,G__36311_37418,G__36312_37419));
var G__36317_37420 = new cljs.core.Keyword(null,"stability","stability",1733225509);
var G__36318_37421 = (function (db,p__36319){
var vec__36320 = p__36319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36320,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36320,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36317_37420,G__36318_37421) : re_frame.core.reg_sub.call(null,G__36317_37420,G__36318_37421));
var G__36323_37424 = new cljs.core.Keyword(null,"presence","presence",-1580756953);
var G__36324_37425 = (function (db,p__36325){
var vec__36326 = p__36325;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36326,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36326,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36323_37424,G__36324_37425) : re_frame.core.reg_sub.call(null,G__36323_37424,G__36324_37425));
var G__36329_37432 = new cljs.core.Keyword(null,"wit","wit",-1627445195);
var G__36330_37433 = (function (db,p__36331){
var vec__36332 = p__36331;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36332,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36332,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36329_37432,G__36330_37433) : re_frame.core.reg_sub.call(null,G__36329_37432,G__36330_37433));
var G__36335_37434 = new cljs.core.Keyword(null,"poise","poise",-429377896);
var G__36336_37435 = (function (db,p__36337){
var vec__36338 = p__36337;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36338,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36338,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36335_37434,G__36336_37435) : re_frame.core.reg_sub.call(null,G__36335_37434,G__36336_37435));
var G__36341_37439 = new cljs.core.Keyword(null,"creature-resources","creature-resources",495041557);
var G__36342_37440 = (function (db,p__36343){
var vec__36344 = p__36343;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36344,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36344,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36341_37439,G__36342_37440) : re_frame.core.reg_sub.call(null,G__36341_37439,G__36342_37440));
var G__36347_37444 = new cljs.core.Keyword(null,"creature-resources-typed","creature-resources-typed",728372146);
var G__36348_37445 = (function (db,p__36349){
var vec__36350 = p__36349;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36350,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36350,(1),null);
var resource_subtype_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36350,(2),null);
return cljs.core.filterv((function (resource_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"subtype","subtype",-2092672993)], null)),resource_subtype_id);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36347_37444,G__36348_37445) : re_frame.core.reg_sub.call(null,G__36347_37444,G__36348_37445));
var G__36353_37448 = new cljs.core.Keyword(null,"creature-resources-typed-quantified","creature-resources-typed-quantified",-1136110511);
var G__36354_37449 = (function (db,p__36355){
var vec__36356 = p__36355;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36356,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36356,(1),null);
var resource_subtype_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36356,(2),null);
return cljs.core.frequencies((function (){var G__36359 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-resources-typed","creature-resources-typed",728372146),creature_id,resource_subtype_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__36359) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__36359));
})());
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36353_37448,G__36354_37449) : re_frame.core.reg_sub.call(null,G__36353_37448,G__36354_37449));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-add-resource","creature-add-resource",409356036),(function (db,p__36360){
var vec__36361 = p__36360;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36361,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36361,(1),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36361,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null),cljs.core.conj,resource_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-remove-resource","creature-remove-resource",-1835624647),(function (db,p__36364){
var vec__36365 = p__36364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36365,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36365,(1),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36365,(2),null);
var resource_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
var index = (0);
while(true){
if((index >= cljs.core.count(resource_list))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Resource not found."], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resource_id,(resource_list.cljs$core$IFn$_invoke$arity$1 ? resource_list.cljs$core$IFn$_invoke$arity$1(index) : resource_list.call(null,index)))){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null),modular_roleplaying_framework.db_CRUD.exsert(resource_list,(index - (1))));
} else {
var G__37459 = resource_list;
var G__37460 = (index + (1));
resource_list = G__37459;
index = G__37460;
continue;
}
}
break;
}
}));
var G__36368_37462 = new cljs.core.Keyword(null,"creature-feature-list","creature-feature-list",225155610);
var G__36369_37463 = (function (db,p__36370){
var vec__36371 = p__36370;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36371,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36371,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36368_37462,G__36369_37463) : re_frame.core.reg_sub.call(null,G__36368_37462,G__36369_37463));
var G__36374_37469 = new cljs.core.Keyword(null,"creature-notes","creature-notes",-2029123219);
var G__36375_37470 = (function (db,p__36376){
var vec__36377 = p__36376;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36377,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36377,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36374_37469,G__36375_37470) : re_frame.core.reg_sub.call(null,G__36374_37469,G__36375_37470));
var G__36380_37475 = new cljs.core.Keyword(null,"creature-notes-state","creature-notes-state",-471696466);
var G__36381_37476 = (function (db,p__36382){
var vec__36383 = p__36382;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36383,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36383,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes-state","notes-state",-1025022243)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36380_37475,G__36381_37476) : re_frame.core.reg_sub.call(null,G__36380_37475,G__36381_37476));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-notes-state-change","creature-notes-state-change",-1510434125),(function (db,p__36386){
var vec__36387 = p__36386;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36387,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36387,(1),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36387,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes-state","notes-state",-1025022243)], null),new_state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-notes-update","creature-notes-update",-350278924),(function (db,p__36390){
var vec__36391 = p__36390;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36391,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36391,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36391,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes","notes",-1039600523)], null),changes);
}));
var G__36394_37483 = new cljs.core.Keyword(null,"resource-title","resource-title",904657571);
var G__36395_37484 = (function (db,p__36396){
var vec__36397 = p__36396;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36397,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36397,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36394_37483,G__36395_37484) : re_frame.core.reg_sub.call(null,G__36394_37483,G__36395_37484));
var G__36400_37488 = new cljs.core.Keyword(null,"resource-subtype","resource-subtype",1660664175);
var G__36401_37489 = (function (db,p__36402){
var vec__36403 = p__36402;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36403,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36403,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"subtype","subtype",-2092672993)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36400_37488,G__36401_37489) : re_frame.core.reg_sub.call(null,G__36400_37488,G__36401_37489));
var G__36406_37492 = new cljs.core.Keyword(null,"resource-properties","resource-properties",-677994762);
var G__36407_37493 = (function (db,p__36408){
var vec__36409 = p__36408;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36409,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36409,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"properties","properties",685819552)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36406_37492,G__36407_37493) : re_frame.core.reg_sub.call(null,G__36406_37492,G__36407_37493));
var G__36412_37494 = new cljs.core.Keyword(null,"resource-quality","resource-quality",-1384712256);
var G__36413_37495 = (function (db,p__36414){
var vec__36415 = p__36414;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36415,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36415,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"benefits","benefits",20804277),new cljs.core.Keyword(null,"quality","quality",147850199)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36412_37494,G__36413_37495) : re_frame.core.reg_sub.call(null,G__36412_37494,G__36413_37495));
var G__36418_37496 = new cljs.core.Keyword(null,"resource-quality-bonus","resource-quality-bonus",496784380);
var G__36419_37497 = (function (db,p__36420){
var vec__36421 = p__36420;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36421,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36421,(1),null);
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36418_37496,G__36419_37497) : re_frame.core.reg_sub.call(null,G__36418_37496,G__36419_37497));
var G__36424_37498 = new cljs.core.Keyword(null,"resource-power","resource-power",-283348905);
var G__36425_37499 = (function (db,p__36426){
var vec__36427 = p__36426;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36427,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36427,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"benefits","benefits",20804277),new cljs.core.Keyword(null,"power","power",-937852079)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36424_37498,G__36425_37499) : re_frame.core.reg_sub.call(null,G__36424_37498,G__36425_37499));
var G__36430_37500 = new cljs.core.Keyword(null,"resource-power-bonus","resource-power-bonus",669478217);
var G__36431_37501 = (function (db,p__36432){
var vec__36433 = p__36432;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36433,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36433,(1),null);
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36430_37500,G__36431_37501) : re_frame.core.reg_sub.call(null,G__36430_37500,G__36431_37501));
var G__36436_37502 = new cljs.core.Keyword(null,"resource-flavor-text","resource-flavor-text",429244330);
var G__36437_37503 = (function (db,p__36438){
var vec__36439 = p__36438;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36439,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36439,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"flavor-text","flavor-text",-227991981)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36436_37502,G__36437_37503) : re_frame.core.reg_sub.call(null,G__36436_37502,G__36437_37503));
var G__36442_37504 = new cljs.core.Keyword(null,"all-features","all-features",-969912234);
var G__36443_37505 = (function (db,_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__36444){
var vec__36445 = p__36444;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36445,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36445,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("feature",(function (){var G__36448 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),k], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__36448) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__36448));
})());
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"items","items",1031954938))));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36442_37504,G__36443_37505) : re_frame.core.reg_sub.call(null,G__36442_37504,G__36443_37505));
var G__36450_37506 = new cljs.core.Keyword(null,"features-by-property","features-by-property",-1888070616);
var G__36451_37507 = (function (db,p__36452){
var vec__36453 = p__36452;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36453,(0),null);
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36453,(1),null);
return cljs.core.filterv((function (feature){
return cljs.core.some((function (p1__36449_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property,p1__36449_SHARP_);
}),(function (){var G__36456 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-keywords","feature-keywords",-513678207),feature], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__36456) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__36456));
})());
}),(function (){var G__36457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-features","all-features",-969912234)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__36457) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__36457));
})());
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36450_37506,G__36451_37507) : re_frame.core.reg_sub.call(null,G__36450_37506,G__36451_37507));
var G__36458_37512 = new cljs.core.Keyword(null,"resource-features","resource-features",-1831876409);
var G__36459_37513 = (function (db,p__36460){
var vec__36461 = p__36460;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36461,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36461,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36458_37512,G__36459_37513) : re_frame.core.reg_sub.call(null,G__36458_37512,G__36459_37513));
var G__36465_37514 = new cljs.core.Keyword(null,"resource-feature-lookup","resource-feature-lookup",1465251014);
var G__36466_37515 = (function (db,p__36467){
var vec__36468 = p__36467;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36468,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36468,(1),null);
var resource_properties = (function (){var G__36471 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-properties","resource-properties",-677994762),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__36471) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__36471));
})();
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36464_SHARP_){
var G__36472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features-by-property","features-by-property",-1888070616),p1__36464_SHARP_], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__36472) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__36472));
}),resource_properties))));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36465_37514,G__36466_37515) : re_frame.core.reg_sub.call(null,G__36465_37514,G__36466_37515));
var G__36473_37518 = new cljs.core.Keyword(null,"resource-list","resource-list",1498099584);
var G__36474_37519 = (function (db,_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__36475){
var vec__36476 = p__36475;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36476,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36476,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("resource",(function (){var G__36479 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),k], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__36479) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__36479));
})());
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"items","items",1031954938))));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36473_37518,G__36474_37519) : re_frame.core.reg_sub.call(null,G__36473_37518,G__36474_37519));
modular_roleplaying_framework.db_CRUD.melee_weapons = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sword","Spear","Axe"], null);
modular_roleplaying_framework.db_CRUD.matches_QMARK_ = (function modular_roleplaying_framework$db_CRUD$matches_QMARK_(coll1,coll2){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,coll1,coll2)));
});
var G__36480_37534 = new cljs.core.Keyword(null,"implement","implement",832506591);
var G__36481_37535 = (function (db,p__36482){
var vec__36483 = p__36482;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36483,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36483,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Modal Tool",new cljs.core.Keyword(null,"description","description",-1428560544),"These arcane gauntlets have two modes stored: the melee mode and the ranged mode. While in melee mode, the left gauntlet produces a shield of solid aethereal force with stats equivalent to a kite shield while the right gauntlet produces a sharp aethereal blade with stats equivalent to a longsword. While in ranged mode, the two gauntlets function together as a bow with stats equivalent to a longbow. Changing from one mode to the other requires a setup action. Gain +Quality +Power on attacks with the Arcane Gauntlets as well as +Quality from your Aethereal Knowledge."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36480_37534,G__36481_37535) : re_frame.core.reg_sub.call(null,G__36480_37534,G__36481_37535));
var G__36486_37539 = new cljs.core.Keyword(null,"weapon-attack","weapon-attack",1268897249);
var G__36487_37540 = (function (db,p__36488){
var vec__36489 = p__36488;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36489,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36489,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__36492 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36493 = properties;
if(cljs.core.truth_((function (){var G__36495 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bow"], null);
var G__36496 = expr__36493;
return (pred__36492.cljs$core$IFn$_invoke$arity$2 ? pred__36492.cljs$core$IFn$_invoke$arity$2(G__36495,G__36496) : pred__36492.call(null,G__36495,G__36496));
})())){
return "Ranged Attack";
} else {
if(cljs.core.truth_((pred__36492.cljs$core$IFn$_invoke$arity$2 ? pred__36492.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.db_CRUD.melee_weapons,expr__36493) : pred__36492.call(null,modular_roleplaying_framework.db_CRUD.melee_weapons,expr__36493)))){
return "Melee Attack";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36493)].join('')));
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__36497 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36498 = properties;
if(cljs.core.truth_((function (){var G__36500 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bow"], null);
var G__36501 = expr__36498;
return (pred__36497.cljs$core$IFn$_invoke$arity$2 ? pred__36497.cljs$core$IFn$_invoke$arity$2(G__36500,G__36501) : pred__36497.call(null,G__36500,G__36501));
})())){
return ["You may spend a main action to make a Coordination +Quality +Power check against a creature. \n                   You must have the creature targeted and the creature must be within ten zones but cannot be within the same zone. ",(function (){var pred__36511 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36512 = properties;
if(cljs.core.truth_((function (){var G__36514 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__36515 = expr__36512;
return (pred__36511.cljs$core$IFn$_invoke$arity$2 ? pred__36511.cljs$core$IFn$_invoke$arity$2(G__36514,G__36515) : pred__36511.call(null,G__36514,G__36515));
})())){
return "As a light bow, it can be wielded alongside a shield. When partitioning the base dice pool, the resulting dice pools must have at least two dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__36516 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__36517 = expr__36512;
return (pred__36511.cljs$core$IFn$_invoke$arity$2 ? pred__36511.cljs$core$IFn$_invoke$arity$2(G__36516,G__36517) : pred__36511.call(null,G__36516,G__36517));
})())){
return "As a medium bow, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least three dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__36518 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__36519 = expr__36512;
return (pred__36511.cljs$core$IFn$_invoke$arity$2 ? pred__36511.cljs$core$IFn$_invoke$arity$2(G__36518,G__36519) : pred__36511.call(null,G__36518,G__36519));
})())){
return "As a heavy bow, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least four dice in them. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36512)].join('')));
}
}
}
})(),"This weapon deals piercing damage."].join('');
} else {
return ["You may spend a main action to make a Coordination +Quality +Power check against a creature. ",(function (){var pred__36543 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36544 = properties;
if(cljs.core.truth_((function (){var G__36546 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sword","Spear","Axe"], null);
var G__36547 = expr__36544;
return (pred__36543.cljs$core$IFn$_invoke$arity$2 ? pred__36543.cljs$core$IFn$_invoke$arity$2(G__36546,G__36547) : pred__36543.call(null,G__36546,G__36547));
})())){
return "You must have the creature targeted and the creature must be in the same zone as you. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36544)].join('')));
}
})(),(function (){var pred__36548 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36549 = properties;
if(cljs.core.truth_((function (){var G__36551 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__36552 = expr__36549;
return (pred__36548.cljs$core$IFn$_invoke$arity$2 ? pred__36548.cljs$core$IFn$_invoke$arity$2(G__36551,G__36552) : pred__36548.call(null,G__36551,G__36552));
})())){
return "As a light weapon, it may be wielded in either hand. When partitioning the base dice pool, the resulting dice pools must have at least two dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__36553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__36554 = expr__36549;
return (pred__36548.cljs$core$IFn$_invoke$arity$2 ? pred__36548.cljs$core$IFn$_invoke$arity$2(G__36553,G__36554) : pred__36548.call(null,G__36553,G__36554));
})())){
return "As a medium weapon, it must be wielded in the dominant hand. When partitioning the base dice pool, the resulting dice pools must have at least three dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__36555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__36556 = expr__36549;
return (pred__36548.cljs$core$IFn$_invoke$arity$2 ? pred__36548.cljs$core$IFn$_invoke$arity$2(G__36555,G__36556) : pred__36548.call(null,G__36555,G__36556));
})())){
return "As a heavy weapon, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least four dice in them. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36549)].join('')));
}
}
}
})(),(function (){var pred__36557 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36558 = properties;
if(cljs.core.truth_((function (){var G__36560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sword"], null);
var G__36561 = expr__36558;
return (pred__36557.cljs$core$IFn$_invoke$arity$2 ? pred__36557.cljs$core$IFn$_invoke$arity$2(G__36560,G__36561) : pred__36557.call(null,G__36560,G__36561));
})())){
return "This weapon may deal piercing or slashing damage.";
} else {
if(cljs.core.truth_((function (){var G__36562 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Spear"], null);
var G__36563 = expr__36558;
return (pred__36557.cljs$core$IFn$_invoke$arity$2 ? pred__36557.cljs$core$IFn$_invoke$arity$2(G__36562,G__36563) : pred__36557.call(null,G__36562,G__36563));
})())){
return "This weapon may deal piercing or bludgeoning damage.";
} else {
if(cljs.core.truth_((function (){var G__36564 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Axe"], null);
var G__36565 = expr__36558;
return (pred__36557.cljs$core$IFn$_invoke$arity$2 ? pred__36557.cljs$core$IFn$_invoke$arity$2(G__36564,G__36565) : pred__36557.call(null,G__36564,G__36565));
})())){
return "This weapon may deal slashing or bludgeoning damage.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36558)].join('')));
}
}
}
})()].join('');
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36486_37539,G__36487_37540) : re_frame.core.reg_sub.call(null,G__36486_37539,G__36487_37540));
var G__36566_37556 = new cljs.core.Keyword(null,"block-attack","block-attack",-1348539017);
var G__36567_37557 = (function (db,p__36568){
var vec__36569 = p__36568;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36569,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36569,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__36572 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36573 = properties;
if(cljs.core.truth_((function (){var G__36575 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Shield"], null);
var G__36576 = expr__36573;
return (pred__36572.cljs$core$IFn$_invoke$arity$2 ? pred__36572.cljs$core$IFn$_invoke$arity$2(G__36575,G__36576) : pred__36572.call(null,G__36575,G__36576));
})())){
return "Shield Block";
} else {
if(cljs.core.truth_((function (){var G__36577 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Armor"], null);
var G__36578 = expr__36573;
return (pred__36572.cljs$core$IFn$_invoke$arity$2 ? pred__36572.cljs$core$IFn$_invoke$arity$2(G__36577,G__36578) : pred__36572.call(null,G__36577,G__36578));
})())){
return "Armored Defense";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36573)].join('')));
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),["You may spend a main action to make a Reflexes +Quality +Power check to defend yourself against a creature's attack that targets you. \n         When partitioning the base dice pool while defending yourself against physical attacks, the resulting dice pools must have at least ",(function (){var pred__36588 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36589 = properties;
if(cljs.core.truth_((function (){var G__36591 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__36592 = expr__36589;
return (pred__36588.cljs$core$IFn$_invoke$arity$2 ? pred__36588.cljs$core$IFn$_invoke$arity$2(G__36591,G__36592) : pred__36588.call(null,G__36591,G__36592));
})())){
return "two ";
} else {
if(cljs.core.truth_((function (){var G__36593 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__36594 = expr__36589;
return (pred__36588.cljs$core$IFn$_invoke$arity$2 ? pred__36588.cljs$core$IFn$_invoke$arity$2(G__36593,G__36594) : pred__36588.call(null,G__36593,G__36594));
})())){
return "three ";
} else {
if(cljs.core.truth_((function (){var G__36595 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__36596 = expr__36589;
return (pred__36588.cljs$core$IFn$_invoke$arity$2 ? pred__36588.cljs$core$IFn$_invoke$arity$2(G__36595,G__36596) : pred__36588.call(null,G__36595,G__36596));
})())){
return "four ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36589)].join('')));
}
}
}
})(),"dice in them. When multiple items contribute to a defense check, the partitioned dice pools must follow the size limitations of every item involved.",((modular_roleplaying_framework.db_CRUD.matches_QMARK_(properties,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Shield"], null)))?"As a shield, it can be wielded in either hand.":null)].join('')], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36566_37556,G__36567_37557) : re_frame.core.reg_sub.call(null,G__36566_37556,G__36567_37557));
var G__36597_37563 = new cljs.core.Keyword(null,"trait","trait",626034900);
var G__36598_37564 = (function (db,p__36599){
var vec__36600 = p__36599;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36600,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36600,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__36603 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36604 = properties;
if(cljs.core.truth_((function (){var G__36606 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Flaw"], null);
var G__36607 = expr__36604;
return (pred__36603.cljs$core$IFn$_invoke$arity$2 ? pred__36603.cljs$core$IFn$_invoke$arity$2(G__36606,G__36607) : pred__36603.call(null,G__36606,G__36607));
})())){
return "Flaw";
} else {
if(cljs.core.truth_((function (){var G__36608 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ideal"], null);
var G__36609 = expr__36604;
return (pred__36603.cljs$core$IFn$_invoke$arity$2 ? pred__36603.cljs$core$IFn$_invoke$arity$2(G__36608,G__36609) : pred__36603.call(null,G__36608,G__36609));
})())){
return "Ideal";
} else {
if(cljs.core.truth_((function (){var G__36610 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attribute"], null);
var G__36611 = expr__36604;
return (pred__36603.cljs$core$IFn$_invoke$arity$2 ? pred__36603.cljs$core$IFn$_invoke$arity$2(G__36610,G__36611) : pred__36603.call(null,G__36610,G__36611));
})())){
return "Attribute";
} else {
if(cljs.core.truth_((function (){var G__36612 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Goal"], null);
var G__36613 = expr__36604;
return (pred__36603.cljs$core$IFn$_invoke$arity$2 ? pred__36603.cljs$core$IFn$_invoke$arity$2(G__36612,G__36613) : pred__36603.call(null,G__36612,G__36613));
})())){
return "Goal";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36604)].join('')));
}
}
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),["Grants +Quality +Power to checks that ",(function (){var pred__36625 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36626 = properties;
if(cljs.core.truth_((function (){var G__36628 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Flaw"], null);
var G__36629 = expr__36626;
return (pred__36625.cljs$core$IFn$_invoke$arity$2 ? pred__36625.cljs$core$IFn$_invoke$arity$2(G__36628,G__36629) : pred__36625.call(null,G__36628,G__36629));
})())){
return "give in to your flaw. Checks that attempt to resist giving in to your flaw gain penalties equal to the Quality and Power of your flaw. ";
} else {
if(cljs.core.truth_((function (){var G__36630 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ideal"], null);
var G__36631 = expr__36626;
return (pred__36625.cljs$core$IFn$_invoke$arity$2 ? pred__36625.cljs$core$IFn$_invoke$arity$2(G__36630,G__36631) : pred__36625.call(null,G__36630,G__36631));
})())){
return "promote or exemplify your ideal. Checks that run counter to your ideal gain penalties equal to the Quality and Power of your ideal. ";
} else {
if(cljs.core.truth_((function (){var G__36632 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attribute"], null);
var G__36633 = expr__36626;
return (pred__36625.cljs$core$IFn$_invoke$arity$2 ? pred__36625.cljs$core$IFn$_invoke$arity$2(G__36632,G__36633) : pred__36625.call(null,G__36632,G__36633));
})())){
return "utilize your attribute. Checks that are opposed by your attribute gain penalties equal to the Quality and Power of your attribute. ";
} else {
if(cljs.core.truth_((function (){var G__36634 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Goal"], null);
var G__36635 = expr__36626;
return (pred__36625.cljs$core$IFn$_invoke$arity$2 ? pred__36625.cljs$core$IFn$_invoke$arity$2(G__36634,G__36635) : pred__36625.call(null,G__36634,G__36635));
})())){
return "attempt to make progress towards your goal. Checks that sacrifice progress towards your goal gain penalties equal to the Quality and Power of your goal. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36626)].join('')));
}
}
}
}
})(),"Circumstances may cause multiple traits to apply bonuses or penalties to a check. Ultimately, it is up to the DM's discretion whether a trait grants a bonus or penalty."].join('')], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36597_37563,G__36598_37564) : re_frame.core.reg_sub.call(null,G__36597_37563,G__36598_37564));
var G__36636_37568 = new cljs.core.Keyword(null,"martial-prowess","martial-prowess",-114945878);
var G__36637_37569 = (function (db,p__36638){
var vec__36639 = p__36638;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36639,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36639,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__36651 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36652 = properties;
if(cljs.core.truth_((function (){var G__36654 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__36655 = expr__36652;
return (pred__36651.cljs$core$IFn$_invoke$arity$2 ? pred__36651.cljs$core$IFn$_invoke$arity$2(G__36654,G__36655) : pred__36651.call(null,G__36654,G__36655));
})())){
return "Light Martial Prowess";
} else {
if(cljs.core.truth_((function (){var G__36656 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__36657 = expr__36652;
return (pred__36651.cljs$core$IFn$_invoke$arity$2 ? pred__36651.cljs$core$IFn$_invoke$arity$2(G__36656,G__36657) : pred__36651.call(null,G__36656,G__36657));
})())){
return "Medium Martial Prowess";
} else {
if(cljs.core.truth_((function (){var G__36658 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__36659 = expr__36652;
return (pred__36651.cljs$core$IFn$_invoke$arity$2 ? pred__36651.cljs$core$IFn$_invoke$arity$2(G__36658,G__36659) : pred__36651.call(null,G__36658,G__36659));
})())){
return "Heavy Martial Prowess";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36652)].join('')));
}
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__36669 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36670 = properties;
if(cljs.core.truth_((function (){var G__36672 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__36673 = expr__36670;
return (pred__36669.cljs$core$IFn$_invoke$arity$2 ? pred__36669.cljs$core$IFn$_invoke$arity$2(G__36672,G__36673) : pred__36669.call(null,G__36672,G__36673));
})())){
return "Gain +Quality +Power on checks that use a light weapon, shield, or armor.";
} else {
if(cljs.core.truth_((function (){var G__36674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__36675 = expr__36670;
return (pred__36669.cljs$core$IFn$_invoke$arity$2 ? pred__36669.cljs$core$IFn$_invoke$arity$2(G__36674,G__36675) : pred__36669.call(null,G__36674,G__36675));
})())){
return "Gain +Quality +Power on checks that use a medium weapon, shield, or armor.";
} else {
if(cljs.core.truth_((function (){var G__36676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__36677 = expr__36670;
return (pred__36669.cljs$core$IFn$_invoke$arity$2 ? pred__36669.cljs$core$IFn$_invoke$arity$2(G__36676,G__36677) : pred__36669.call(null,G__36676,G__36677));
})())){
return "Gain +Quality +Power on checks that use a heavy weapon, shield, or armor.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36670)].join('')));
}
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36636_37568,G__36637_37569) : re_frame.core.reg_sub.call(null,G__36636_37568,G__36637_37569));
var G__36678_37570 = new cljs.core.Keyword(null,"sneak-attack","sneak-attack",-1793099532);
var G__36679_37571 = (function (db,p__36680){
var vec__36681 = p__36680;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36681,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36681,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Sneak Attack",new cljs.core.Keyword(null,"description","description",-1428560544),"Gain +Quality +Power on checks using weapons that benefit from your martial prowess to attack a creature who is unaware of your presence or who you are hidden from."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36678_37570,G__36679_37571) : re_frame.core.reg_sub.call(null,G__36678_37570,G__36679_37571));
var G__36684_37572 = new cljs.core.Keyword(null,"combat-maneuvers","combat-maneuvers",-846517552);
var G__36685_37573 = (function (db,p__36686){
var vec__36687 = p__36686;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36687,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36687,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Combat Maneuvers",new cljs.core.Keyword(null,"description","description",-1428560544),"When you make a melee attack against a targeted creature, you can choose to make one of the following combat maneuvers instead: trip, shove, or disarm. If your trip attack is successful, the target falls prone. If the shove is successful, the target is moved to an adjacent zone. If the disarm is successful, the target's weapon falls to the ground in the zone that they occupy."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36684_37572,G__36685_37573) : re_frame.core.reg_sub.call(null,G__36684_37572,G__36685_37573));
var G__36690_37574 = new cljs.core.Keyword(null,"protective-stance","protective-stance",1339958411);
var G__36691_37575 = (function (db,p__36692){
var vec__36693 = p__36692;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36693,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36693,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Protective Stance",new cljs.core.Keyword(null,"description","description",-1428560544),"If a target creature within the same zone as you is attacked and you are wielding a shield for which you have martial prowess, you can make a defense check against that attack. The result of your defense check is inflicted as a flat penalty on the attack roll. The target of the attack may still make their own defense check if needed."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36690_37574,G__36691_37575) : re_frame.core.reg_sub.call(null,G__36690_37574,G__36691_37575));
var G__36696_37576 = new cljs.core.Keyword(null,"knowledge","knowledge",1188023043);
var G__36697_37577 = (function (db,p__36698){
var vec__36699 = p__36698;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36699,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36699,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Recall Information",new cljs.core.Keyword(null,"description","description",-1428560544),["Recollection +Quality +Power on checks to determine your knowledge on ",(function (){var pred__36713 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36714 = properties;
if(cljs.core.truth_((function (){var G__36716 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religion"], null);
var G__36717 = expr__36714;
return (pred__36713.cljs$core$IFn$_invoke$arity$2 ? pred__36713.cljs$core$IFn$_invoke$arity$2(G__36716,G__36717) : pred__36713.call(null,G__36716,G__36717));
})())){
return "religious matters.";
} else {
if(cljs.core.truth_((function (){var G__36718 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aethrology"], null);
var G__36719 = expr__36714;
return (pred__36713.cljs$core$IFn$_invoke$arity$2 ? pred__36713.cljs$core$IFn$_invoke$arity$2(G__36718,G__36719) : pred__36713.call(null,G__36718,G__36719));
})())){
return "aethereal matters.";
} else {
if(cljs.core.truth_((function (){var G__36720 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medicine"], null);
var G__36721 = expr__36714;
return (pred__36713.cljs$core$IFn$_invoke$arity$2 ? pred__36713.cljs$core$IFn$_invoke$arity$2(G__36720,G__36721) : pred__36713.call(null,G__36720,G__36721));
})())){
return "medicinal matters.";
} else {
if(cljs.core.truth_((function (){var G__36722 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["History"], null);
var G__36723 = expr__36714;
return (pred__36713.cljs$core$IFn$_invoke$arity$2 ? pred__36713.cljs$core$IFn$_invoke$arity$2(G__36722,G__36723) : pred__36713.call(null,G__36722,G__36723));
})())){
return "historical matters.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36714)].join('')));
}
}
}
}
})()].join('')], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36696_37576,G__36697_37577) : re_frame.core.reg_sub.call(null,G__36696_37576,G__36697_37577));
var G__36724_37578 = new cljs.core.Keyword(null,"implement-prowess","implement-prowess",-267630211);
var G__36725_37579 = (function (db,p__36726){
var vec__36727 = p__36726;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36727,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36727,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Arcane Implement Prowess",new cljs.core.Keyword(null,"description","description",-1428560544),"You know how to access the powers stored within arcane implements. Gain +Quality on checks using arcane implements."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36724_37578,G__36725_37579) : re_frame.core.reg_sub.call(null,G__36724_37578,G__36725_37579));
var G__36730_37580 = new cljs.core.Keyword(null,"relic-prowess","relic-prowess",-1221354922);
var G__36731_37581 = (function (db,p__36732){
var vec__36733 = p__36732;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36733,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36733,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Religious Relic Prowess",new cljs.core.Keyword(null,"description","description",-1428560544),"You are capable of drawing out the power resting within religious relics. Gain +Quality +Power on checks using religious relics."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36730_37580,G__36731_37581) : re_frame.core.reg_sub.call(null,G__36730_37580,G__36731_37581));
var G__36736_37582 = new cljs.core.Keyword(null,"slight-of-hand","slight-of-hand",971131650);
var G__36737_37583 = (function (db,p__36738){
var vec__36739 = p__36738;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36739,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36739,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Sleight of Hand",new cljs.core.Keyword(null,"description","description",-1428560544),"Coordination +Quality +Power to checks attempting to plant or lift and object from someone or when attempting to secretly hide or retrieve an object on your person."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36736_37582,G__36737_37583) : re_frame.core.reg_sub.call(null,G__36736_37582,G__36737_37583));
var G__36742_37584 = new cljs.core.Keyword(null,"lockpicking","lockpicking",-1008040736);
var G__36743_37585 = (function (db,p__36744){
var vec__36745 = p__36744;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36745,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36745,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Lockpicking",new cljs.core.Keyword(null,"description","description",-1428560544),"Coordination +Quality +Power to checks attempting to pick a lock. You may need certain tools to make this check."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36742_37584,G__36743_37585) : re_frame.core.reg_sub.call(null,G__36742_37584,G__36743_37585));
var G__36748_37586 = new cljs.core.Keyword(null,"reputation","reputation",-898759917);
var G__36749_37587 = (function (db,p__36750){
var vec__36751 = p__36750;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36751,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36751,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Reputation",new cljs.core.Keyword(null,"description","description",-1428560544),"Gain +Quality +Power when making checks to persuade someone who is aware of your reputation."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36748_37586,G__36749_37587) : re_frame.core.reg_sub.call(null,G__36748_37586,G__36749_37587));
var G__36754_37593 = new cljs.core.Keyword(null,"membership","membership",254556333);
var G__36755_37594 = (function (db,p__36756){
var vec__36757 = p__36756;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36757,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36757,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Membership Benefits",new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__36760 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36761 = properties;
if(cljs.core.truth_((function (){var G__36763 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Political"], null);
var G__36764 = expr__36761;
return (pred__36760.cljs$core$IFn$_invoke$arity$2 ? pred__36760.cljs$core$IFn$_invoke$arity$2(G__36763,G__36764) : pred__36760.call(null,G__36763,G__36764));
})())){
return "Your political connections grant you access to resources and favors. Gain +Quality +Power when making social checks with those you have political sway with.";
} else {
if(cljs.core.truth_((function (){var G__36765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religious"], null);
var G__36766 = expr__36761;
return (pred__36760.cljs$core$IFn$_invoke$arity$2 ? pred__36760.cljs$core$IFn$_invoke$arity$2(G__36765,G__36766) : pred__36760.call(null,G__36765,G__36766));
})())){
return "Your religious connections grant you access to resources, favors, lodging, and healing. Gain +Quality +Power when making social checks with those who share your religious beliefs.";
} else {
if(cljs.core.truth_((function (){var G__36767 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Guild"], null);
var G__36768 = expr__36761;
return (pred__36760.cljs$core$IFn$_invoke$arity$2 ? pred__36760.cljs$core$IFn$_invoke$arity$2(G__36767,G__36768) : pred__36760.call(null,G__36767,G__36768));
})())){
return "Your economic connections grant you access to resources and favors. Gain +Quality +Power when making social checks with your business associates.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36761)].join('')));
}
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36754_37593,G__36755_37594) : re_frame.core.reg_sub.call(null,G__36754_37593,G__36755_37594));
var G__36769_37596 = new cljs.core.Keyword(null,"relationship","relationship",670482699);
var G__36770_37597 = (function (db,p__36771){
var vec__36772 = p__36771;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Friendship",new cljs.core.Keyword(null,"description","description",-1428560544),"Your relationship gives you access to resources and favors. Gain +Quality +Power when making social checks with this individual."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36769_37596,G__36770_37597) : re_frame.core.reg_sub.call(null,G__36769_37596,G__36770_37597));
var G__36775_37599 = new cljs.core.Keyword(null,"potion","potion",1292791805);
var G__36776_37600 = (function (db,p__36777){
var vec__36778 = p__36777;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36778,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36778,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__36781 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36782 = properties;
if(cljs.core.truth_((function (){var G__36784 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Healing"], null);
var G__36785 = expr__36782;
return (pred__36781.cljs$core$IFn$_invoke$arity$2 ? pred__36781.cljs$core$IFn$_invoke$arity$2(G__36784,G__36785) : pred__36781.call(null,G__36784,G__36785));
})())){
return "Cure Wounds";
} else {
return "Drink Potion";
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__36786 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36787 = properties;
if(cljs.core.truth_((function (){var G__36789 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Healing"], null);
var G__36790 = expr__36787;
return (pred__36786.cljs$core$IFn$_invoke$arity$2 ? pred__36786.cljs$core$IFn$_invoke$arity$2(G__36789,G__36790) : pred__36786.call(null,G__36789,G__36790));
})())){
return "When consumed, this potion heals 1 point of damage and grants +1d on healing checks for the physical domain.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36787)].join('')));
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36775_37599,G__36776_37600) : re_frame.core.reg_sub.call(null,G__36775_37599,G__36776_37600));
var G__36791_37608 = new cljs.core.Keyword(null,"poison","poison",566911550);
var G__36792_37609 = (function (db,p__36793){
var vec__36794 = p__36793;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36794,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36794,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Inflict Poison",new cljs.core.Keyword(null,"description","description",-1428560544),"When ingested, the infected creature must make a physical healing check with a Target Number of 6. If they fail, then they take -1d -2 on all of their checks for 1d4 hours. If they succeed, then they only take -1d on all of their checks for the next hour. Contains 3 doses which can be applied through ingesting food or drink that contains the poison or the user can apply the poison to a weapon that deals piercing or slashing damage and hit the creature with the weapon."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36791_37608,G__36792_37609) : re_frame.core.reg_sub.call(null,G__36791_37608,G__36792_37609));
var G__36797_37611 = new cljs.core.Keyword(null,"tool","tool",-1298696470);
var G__36798_37612 = (function (db,p__36799){
var vec__36800 = p__36799;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36800,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36800,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Utilize Tool",new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__36803 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36804 = properties;
if(cljs.core.truth_((function (){var G__36806 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Climbing"], null);
var G__36807 = expr__36804;
return (pred__36803.cljs$core$IFn$_invoke$arity$2 ? pred__36803.cljs$core$IFn$_invoke$arity$2(G__36806,G__36807) : pred__36803.call(null,G__36806,G__36807));
})())){
return "Gain +Quality +Power on checks attempting to climb walls, cliffs, trees, etc.";
} else {
if(cljs.core.truth_((function (){var G__36808 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Larceny"], null);
var G__36809 = expr__36804;
return (pred__36803.cljs$core$IFn$_invoke$arity$2 ? pred__36803.cljs$core$IFn$_invoke$arity$2(G__36808,G__36809) : pred__36803.call(null,G__36808,G__36809));
})())){
return "Gain +Quality +Power on checks attempting to open doors and locks or to disarm traps and devices while using these tools.";
} else {
return "You use the tool!";
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36797_37611,G__36798_37612) : re_frame.core.reg_sub.call(null,G__36797_37611,G__36798_37612));
var G__36810_37619 = new cljs.core.Keyword(null,"book","book",-918152214);
var G__36811_37620 = (function (db,p__36812){
var vec__36813 = p__36812;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36813,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36813,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__36816 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36817 = properties;
if(cljs.core.truth_((function (){var G__36819 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religious"], null);
var G__36820 = expr__36817;
return (pred__36816.cljs$core$IFn$_invoke$arity$2 ? pred__36816.cljs$core$IFn$_invoke$arity$2(G__36819,G__36820) : pred__36816.call(null,G__36819,G__36820));
})())){
return "Prayer of Healing";
} else {
if(cljs.core.truth_((function (){var G__36821 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medicinal"], null);
var G__36822 = expr__36817;
return (pred__36816.cljs$core$IFn$_invoke$arity$2 ? pred__36816.cljs$core$IFn$_invoke$arity$2(G__36821,G__36822) : pred__36816.call(null,G__36821,G__36822));
})())){
return "Common Treatments";
} else {
if(cljs.core.truth_((function (){var G__36823 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aethereal"], null);
var G__36824 = expr__36817;
return (pred__36816.cljs$core$IFn$_invoke$arity$2 ? pred__36816.cljs$core$IFn$_invoke$arity$2(G__36823,G__36824) : pred__36816.call(null,G__36823,G__36824));
})())){
return "Arcane Knowledge";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36817)].join('')));
}
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__36825 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__36826 = properties;
if(cljs.core.truth_((function (){var G__36828 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religious"], null);
var G__36829 = expr__36826;
return (pred__36825.cljs$core$IFn$_invoke$arity$2 ? pred__36825.cljs$core$IFn$_invoke$arity$2(G__36828,G__36829) : pred__36825.call(null,G__36828,G__36829));
})())){
return "Exertion +Quality +Power with a Target Number of 5 to pray over a flame to imbue it with the healing powers of Heilm. On a success, the flame heals a number of physical, spiritual, and mental wounds equal to the result of the check at the rate of 1 wound per hour and can be distributed among any number of creatures. On a failure, you take a number of spiritual wounds equal to the amount that you failed by. This prayer can only be made once per day.";
} else {
if(cljs.core.truth_((function (){var G__36830 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medicinal"], null);
var G__36831 = expr__36826;
return (pred__36825.cljs$core$IFn$_invoke$arity$2 ? pred__36825.cljs$core$IFn$_invoke$arity$2(G__36830,G__36831) : pred__36825.call(null,G__36830,G__36831));
})())){
return "Concentration +Quality +Power on checks using herbs from the Four Duchies to treat wounds or illnesses.";
} else {
if(cljs.core.truth_((function (){var G__36832 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aethereal"], null);
var G__36833 = expr__36826;
return (pred__36825.cljs$core$IFn$_invoke$arity$2 ? pred__36825.cljs$core$IFn$_invoke$arity$2(G__36832,G__36833) : pred__36825.call(null,G__36832,G__36833));
})())){
return "Gain +Quality +Power on checks that attempting to understand or use objects, text, or rituals that are of Eldari origin.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36826)].join('')));
}
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36810_37619,G__36811_37620) : re_frame.core.reg_sub.call(null,G__36810_37619,G__36811_37620));
var G__36834_37626 = new cljs.core.Keyword(null,"coin","coin",-227557189);
var G__36835_37627 = (function (db,p__36836){
var vec__36837 = p__36836;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36837,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36837,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Gold",new cljs.core.Keyword(null,"description","description",-1428560544),"Gold is a standard unit of exchange for goods and services. It may also be used to influence the outcomes of persuasion checks depending on the recipient's disposition towards bribery."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36834_37626,G__36835_37627) : re_frame.core.reg_sub.call(null,G__36834_37626,G__36835_37627));
var G__36840_37629 = new cljs.core.Keyword(null,"feature-title","feature-title",2026798069);
var G__36841_37630 = (function (db,p__36842){
var vec__36843 = p__36842;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36843,(0),null);
var feature = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36843,(1),null);
var resource_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36843,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__36846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [feature,resource_properties], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__36846) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__36846));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36840_37629,G__36841_37630) : re_frame.core.reg_sub.call(null,G__36840_37629,G__36841_37630));
var G__36847_37637 = new cljs.core.Keyword(null,"feature-details","feature-details",96542810);
var G__36848_37638 = (function (db,p__36849){
var vec__36850 = p__36849;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36850,(0),null);
var feature = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36850,(1),null);
var resource_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36850,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__36853 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [feature,resource_properties], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__36853) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__36853));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36847_37637,G__36848_37638) : re_frame.core.reg_sub.call(null,G__36847_37637,G__36848_37638));
var G__36854_37640 = new cljs.core.Keyword(null,"heritage-details","heritage-details",517842258);
var G__36855_37641 = (function (db,p__36856){
var vec__36857 = p__36856;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36857,(0),null);
var heritage_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36857,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),heritage_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36854_37640,G__36855_37641) : re_frame.core.reg_sub.call(null,G__36854_37640,G__36855_37641));
var G__36860_37642 = new cljs.core.Keyword(null,"heritage-resources","heritage-resources",-1286324504);
var G__36861_37643 = (function (db,p__36862){
var vec__36863 = p__36862;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36863,(0),null);
var heritage_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36863,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),heritage_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36860_37642,G__36861_37643) : re_frame.core.reg_sub.call(null,G__36860_37642,G__36861_37643));
var G__36866_37646 = new cljs.core.Keyword(null,"heritage-features","heritage-features",-1746727718);
var G__36867_37647 = (function (db,p__36868){
var vec__36869 = p__36868;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36869,(0),null);
var heritage_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36869,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),heritage_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36866_37646,G__36867_37647) : re_frame.core.reg_sub.call(null,G__36866_37646,G__36867_37647));
var G__36872_37649 = new cljs.core.Keyword(null,"role-details","role-details",-772961800);
var G__36873_37650 = (function (db,p__36874){
var vec__36875 = p__36874;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36875,(0),null);
var role_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36875,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),role_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36872_37649,G__36873_37650) : re_frame.core.reg_sub.call(null,G__36872_37649,G__36873_37650));
var G__36878_37655 = new cljs.core.Keyword(null,"role-resources","role-resources",819423685);
var G__36879_37656 = (function (db,p__36880){
var vec__36881 = p__36880;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36881,(0),null);
var role_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36881,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),role_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36878_37655,G__36879_37656) : re_frame.core.reg_sub.call(null,G__36878_37655,G__36879_37656));
var G__36884_37663 = new cljs.core.Keyword(null,"role-features","role-features",459150250);
var G__36885_37664 = (function (db,p__36886){
var vec__36887 = p__36886;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36887,(0),null);
var role_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36887,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),role_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36884_37663,G__36885_37664) : re_frame.core.reg_sub.call(null,G__36884_37663,G__36885_37664));
var G__36890_37666 = new cljs.core.Keyword(null,"prototype-text","prototype-text",620288557);
var G__36891_37667 = (function (db,p__36892){
var vec__36893 = p__36892;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36893,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36893,(1),null);
var keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36893,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),keyword], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36890_37666,G__36891_37667) : re_frame.core.reg_sub.call(null,G__36890_37666,G__36891_37667));
var G__36896_37674 = new cljs.core.Keyword(null,"overview","overview",-435037267);
var G__36897_37675 = (function (db,p__36898){
var vec__36899 = p__36898;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36899,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36899,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"overview","overview",-435037267)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36896_37674,G__36897_37675) : re_frame.core.reg_sub.call(null,G__36896_37674,G__36897_37675));
var G__36902_37679 = new cljs.core.Keyword(null,"base-dice-pool","base-dice-pool",-2000848897);
var G__36903_37680 = (function (db,p__36904){
var vec__36905 = p__36904;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36905,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36905,(1),null);
var skillbilities_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36905,(2),null);
var skills = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36905,(3),null);
var end = ((skillbilities_QMARK_ === true)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"base-dice-pool-variations","base-dice-pool-variations",-2068843221),new cljs.core.Keyword(null,"skillbilities","skillbilities",-571801846)], null)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"base-dice-pool-variations","base-dice-pool-variations",-2068843221),new cljs.core.Keyword(null,"skills-and-abilities","skills-and-abilities",-4029936)], null)));
var example = ((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(1)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"dice-pool-example","dice-pool-example",1828496004),new cljs.core.Keyword(null,"simple-skillbilities","simple-skillbilities",-1733944826)], null)):((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"dice-pool-example","dice-pool-example",1828496004),new cljs.core.Keyword(null,"full-skillbilities","full-skillbilities",-451516920)], null)):((((skillbilities_QMARK_ === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"dice-pool-example","dice-pool-example",1828496004),new cljs.core.Keyword(null,"skills-and-abilities","skills-and-abilities",-4029936)], null)):null)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"base-dice-pool","base-dice-pool",-2000848897)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example)].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36902_37679,G__36903_37680) : re_frame.core.reg_sub.call(null,G__36902_37679,G__36903_37680));
var G__36908_37689 = new cljs.core.Keyword(null,"bonuses-and-penalties","bonuses-and-penalties",606200007);
var G__36909_37690 = (function (db,p__36910){
var vec__36911 = p__36910;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36911,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36911,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"bonuses-and-penalties","bonuses-and-penalties",606200007)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36908_37689,G__36909_37690) : re_frame.core.reg_sub.call(null,G__36908_37689,G__36909_37690));
var G__36914_37692 = new cljs.core.Keyword(null,"splintering","splintering",-1707231919);
var G__36915_37693 = (function (db,p__36916){
var vec__36917 = p__36916;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36917,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36917,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"splintering","splintering",-1707231919)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36914_37692,G__36915_37693) : re_frame.core.reg_sub.call(null,G__36914_37692,G__36915_37693));
var G__36920_37697 = new cljs.core.Keyword(null,"caution","caution",1823615934);
var G__36921_37698 = (function (db,p__36922){
var vec__36923 = p__36922;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36923,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36923,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"caution","caution",1823615934)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36920_37697,G__36921_37698) : re_frame.core.reg_sub.call(null,G__36920_37697,G__36921_37698));
var G__36926_37700 = new cljs.core.Keyword(null,"passive-checks","passive-checks",-2057161289);
var G__36927_37701 = (function (db,p__36928){
var vec__36929 = p__36928;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36929,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36929,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"passive-checks","passive-checks",-2057161289)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36926_37700,G__36927_37701) : re_frame.core.reg_sub.call(null,G__36926_37700,G__36927_37701));
var G__36932_37704 = new cljs.core.Keyword(null,"actions","actions",-812656882);
var G__36933_37705 = (function (db,p__36934){
var vec__36935 = p__36934;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36935,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36935,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"actions","actions",-812656882)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36932_37704,G__36933_37705) : re_frame.core.reg_sub.call(null,G__36932_37704,G__36933_37705));
var G__36938_37706 = new cljs.core.Keyword(null,"moments","moments",-1541189836);
var G__36939_37707 = (function (db,p__36940){
var vec__36941 = p__36940;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36941,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36941,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"moments","moments",-1541189836)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36938_37706,G__36939_37707) : re_frame.core.reg_sub.call(null,G__36938_37706,G__36939_37707));
var G__36944_37712 = new cljs.core.Keyword(null,"rounds","rounds",1157201084);
var G__36945_37713 = (function (db,p__36946){
var vec__36947 = p__36946;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36947,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36947,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"rounds","rounds",1157201084)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36944_37712,G__36945_37713) : re_frame.core.reg_sub.call(null,G__36944_37712,G__36945_37713));
var G__36950_37716 = new cljs.core.Keyword(null,"complex-moments","complex-moments",1664654174);
var G__36951_37717 = (function (db,p__36952){
var vec__36953 = p__36952;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36953,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36953,(1),null);
var encounter_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36953,(2),null);
var splintering = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36953,(3),null);
var caution = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36953,(4),null);
var G__36956 = encounter_style;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("turn-based",G__36956)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("simultaneous",G__36956)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"beginning","beginning",77824097)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,splintering)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,caution))))?["may modify their dice pool at this point. ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,splintering))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"splintering","splintering",-1707231919)], null))):null),"Modifications to your dice pool may cause your actions to be resolved earlier or later than they otherwise would be. "].join(''):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"default","default",-1987822328)], null)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),G__36956)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["ERROR: Unrecognized encounter style in item: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join('')], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36956)].join('')));

}
}
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36950_37716,G__36951_37717) : re_frame.core.reg_sub.call(null,G__36950_37716,G__36951_37717));
var G__36957_37723 = new cljs.core.Keyword(null,"complex-rounds","complex-rounds",-1215067926);
var G__36958_37724 = (function (db,p__36959){
var vec__36960 = p__36959;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36960,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36960,(1),null);
var encounter_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36960,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"rounds","rounds",1157201084)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36957_37723,G__36958_37724) : re_frame.core.reg_sub.call(null,G__36957_37723,G__36958_37724));
var G__36963_37727 = new cljs.core.Keyword(null,"injuries","injuries",-299210720);
var G__36964_37728 = (function (db,p__36965){
var vec__36966 = p__36965;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36966,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36966,(1),null);
var damage_tiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36966,(2),null);
var recovery_tiers_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36966,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(damage_tiers,(1))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers], null));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers,new cljs.core.Keyword(null,"beginning","beginning",77824097)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((recovery_tiers_QMARK_ === true)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers,new cljs.core.Keyword(null,"recovery-tiers?","recovery-tiers?",1974730784)], null)):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers,new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36963_37727,G__36964_37728) : re_frame.core.reg_sub.call(null,G__36963_37727,G__36964_37728));
var G__36969_37731 = new cljs.core.Keyword(null,"conditions","conditions",-1647236270);
var G__36970_37732 = (function (db,p__36971){
var vec__36972 = p__36971;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36972,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36972,(1),null);
var condition_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36972,(2),null);
var skills = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36972,(3),null);
var abilities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36972,(4),null);
var skillbilities_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36972,(5),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.Keyword(null,"beginning","beginning",77824097)], null))),((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(1)))))?"that domain's skill. ":((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"that domain's continuation skill. ":((((skillbilities_QMARK_ === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"that domain's continuation skill with it's resilience ability. ":null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(condition_style)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36969_37731,G__36970_37732) : re_frame.core.reg_sub.call(null,G__36969_37731,G__36970_37732));
var G__36975_37737 = new cljs.core.Keyword(null,"recovery","recovery",-2004840646);
var G__36976_37738 = (function (db,p__36977){
var vec__36978 = p__36977;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36978,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36978,(1),null);
var damage_tiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36978,(2),null);
var recovery_tiers_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36978,(3),null);
var recovery_times = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36978,(4),null);
var treatment_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36978,(5),null);
var skills = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36978,(6),null);
var abilities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36978,(7),null);
var skillbilities_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36978,(8),null);
return [((recovery_tiers_QMARK_ === false)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),damage_tiers], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"value","value",305978217)], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"unit","unit",375175175)], null))),". "].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__36984 = damage_tiers;
switch (G__36984) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36984)].join('')));

}
})())),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,treatment_QMARK_))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),new cljs.core.Keyword(null,"treatment?","treatment?",264384759)], null))),((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(1)))))?"an acuity skill check. ":((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"a comprehension skill check. ":((((skillbilities_QMARK_ === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"a comprehension skill check with the relevant domain's discipline ability. ":null)))].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36975_37737,G__36976_37738) : re_frame.core.reg_sub.call(null,G__36975_37737,G__36976_37738));
var G__36985_37741 = new cljs.core.Keyword(null,"condition-title","condition-title",-1818530037);
var G__36986_37742 = (function (db,p__36987){
var vec__36988 = p__36987;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36988,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36988,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36985_37741,G__36986_37742) : re_frame.core.reg_sub.call(null,G__36985_37741,G__36986_37742));
var G__36991_37743 = new cljs.core.Keyword(null,"condition-description","condition-description",-584806753);
var G__36992_37744 = (function (db,p__36993){
var vec__36994 = p__36993;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36994,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36994,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"description","description",-1428560544)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36991_37743,G__36992_37744) : re_frame.core.reg_sub.call(null,G__36991_37743,G__36992_37744));
var G__36997_37745 = new cljs.core.Keyword(null,"condition-effects","condition-effects",1872046469);
var G__36998_37746 = (function (db,p__36999){
var vec__37000 = p__36999;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37000,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37000,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"effects","effects",-282369292)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36997_37745,G__36998_37746) : re_frame.core.reg_sub.call(null,G__36997_37745,G__36998_37746));
var G__37003_37747 = new cljs.core.Keyword(null,"condition-effect-description","condition-effect-description",-3743093);
var G__37004_37748 = (function (db,p__37005){
var vec__37006 = p__37005;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37006,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37006,(1),null);
var effect_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37006,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"effects","effects",-282369292),effect_id,new cljs.core.Keyword(null,"description","description",-1428560544)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37003_37747,G__37004_37748) : re_frame.core.reg_sub.call(null,G__37003_37747,G__37004_37748));
var G__37009_37749 = new cljs.core.Keyword(null,"condition-effect-duration","condition-effect-duration",-2101079389);
var G__37010_37750 = (function (db,p__37011){
var vec__37012 = p__37011;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37012,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37012,(1),null);
var effect_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37012,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"effects","effects",-282369292),effect_id,new cljs.core.Keyword(null,"duration","duration",1444101068)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37009_37749,G__37010_37750) : re_frame.core.reg_sub.call(null,G__37009_37749,G__37010_37750));
var G__37015_37751 = new cljs.core.Keyword(null,"world-overview","world-overview",-314945091);
var G__37016_37752 = (function (db,p__37017){
var vec__37018 = p__37017;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37018,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37018,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),world_id,new cljs.core.Keyword(null,"overview","overview",-435037267)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37015_37751,G__37016_37752) : re_frame.core.reg_sub.call(null,G__37015_37751,G__37016_37752));
var G__37021_37753 = new cljs.core.Keyword(null,"world-territories","world-territories",-982355734);
var G__37022_37754 = (function (db,p__37023){
var vec__37024 = p__37023;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37024,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37024,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),world_id,new cljs.core.Keyword(null,"territories","territories",-1856976391)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37021_37753,G__37022_37754) : re_frame.core.reg_sub.call(null,G__37021_37753,G__37022_37754));
var G__37027_37755 = new cljs.core.Keyword(null,"territory-civilizations","territory-civilizations",-523722954);
var G__37028_37756 = (function (db,p__37029){
var vec__37030 = p__37029;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37030,(0),null);
var territory_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37030,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),territory_id,new cljs.core.Keyword(null,"civilizations","civilizations",822016090)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37027_37755,G__37028_37756) : re_frame.core.reg_sub.call(null,G__37027_37755,G__37028_37756));
var G__37033_37757 = new cljs.core.Keyword(null,"territory-details","territory-details",323186833);
var G__37034_37758 = (function (db,p__37035){
var vec__37036 = p__37035;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37036,(0),null);
var territory_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37036,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),territory_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37033_37757,G__37034_37758) : re_frame.core.reg_sub.call(null,G__37033_37757,G__37034_37758));
var G__37039_37759 = new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185);
var G__37040_37760 = (function (db,p__37041){
var vec__37042 = p__37041;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37042,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37042,(1),null);
var territories = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),world_id,new cljs.core.Keyword(null,"territories","territories",-1856976391)], null));
var civilizations = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(territories)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(civilizations));
} else {
var G__37761 = cljs.core.rest(territories);
var G__37762 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,civilizations,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(territories),new cljs.core.Keyword(null,"civilizations","civilizations",822016090)], null)));
territories = G__37761;
civilizations = G__37762;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37039_37759,G__37040_37760) : re_frame.core.reg_sub.call(null,G__37039_37759,G__37040_37760));
var G__37045_37763 = new cljs.core.Keyword(null,"world-lore","world-lore",-1851264915);
var G__37046_37764 = (function (db,p__37047){
var vec__37048 = p__37047;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37048,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37048,(1),null);
var civilizations = (function (){var G__37052 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__37052) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__37052));
})();
var lore = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(lore));
} else {
var G__37765 = cljs.core.rest(civilizations);
var G__37766 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,lore,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"lore","lore",-10530558)], null)));
civilizations = G__37765;
lore = G__37766;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37045_37763,G__37046_37764) : re_frame.core.reg_sub.call(null,G__37045_37763,G__37046_37764));
var G__37053_37767 = new cljs.core.Keyword(null,"world-organizations","world-organizations",-481549703);
var G__37054_37768 = (function (db,p__37055){
var vec__37056 = p__37055;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37056,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37056,(1),null);
var civilizations = (function (){var G__37060 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__37060) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__37060));
})();
var organizations = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(organizations));
} else {
var G__37769 = cljs.core.rest(civilizations);
var G__37770 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,organizations,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"organizations","organizations",-755443762)], null)));
civilizations = G__37769;
organizations = G__37770;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37053_37767,G__37054_37768) : re_frame.core.reg_sub.call(null,G__37053_37767,G__37054_37768));
var G__37061_37771 = new cljs.core.Keyword(null,"world-key-figures","world-key-figures",-2094243827);
var G__37062_37772 = (function (db,p__37063){
var vec__37064 = p__37063;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37064,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37064,(1),null);
var civilizations = (function (){var G__37068 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__37068) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__37068));
})();
var key_figures = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(key_figures));
} else {
var G__37773 = cljs.core.rest(civilizations);
var G__37774 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,key_figures,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"key-figures","key-figures",-2075124028)], null)));
civilizations = G__37773;
key_figures = G__37774;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37061_37771,G__37062_37772) : re_frame.core.reg_sub.call(null,G__37061_37771,G__37062_37772));
var G__37069_37775 = new cljs.core.Keyword(null,"world-advancements","world-advancements",2113721326);
var G__37070_37776 = (function (db,p__37071){
var vec__37072 = p__37071;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37072,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37072,(1),null);
var civilizations = (function (){var G__37076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__37076) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__37076));
})();
var advancements = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(advancements));
} else {
var G__37777 = cljs.core.rest(civilizations);
var G__37778 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,advancements,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"advancements","advancements",32607236)], null)));
civilizations = G__37777;
advancements = G__37778;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37069_37775,G__37070_37776) : re_frame.core.reg_sub.call(null,G__37069_37775,G__37070_37776));
var G__37077_37779 = new cljs.core.Keyword(null,"world-creatures","world-creatures",745737020);
var G__37078_37780 = (function (db,p__37079){
var vec__37080 = p__37079;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37080,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37080,(1),null);
var territories = (function (){var G__37084 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-territories","world-territories",-982355734),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__37084) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__37084));
})();
var creatures = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(territories)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(creatures));
} else {
var G__37781 = cljs.core.rest(territories);
var G__37782 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,creatures,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(territories),new cljs.core.Keyword(null,"creatures","creatures",761416150)], null)));
territories = G__37781;
creatures = G__37782;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37077_37779,G__37078_37780) : re_frame.core.reg_sub.call(null,G__37077_37779,G__37078_37780));
var G__37085_37783 = new cljs.core.Keyword(null,"world-heritages","world-heritages",-1355127108);
var G__37086_37784 = (function (db,p__37087){
var vec__37088 = p__37087;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37088,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37088,(1),null);
var civilizations = (function (){var G__37092 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__37092) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__37092));
})();
var heritages = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(heritages));
} else {
var G__37785 = cljs.core.rest(civilizations);
var G__37786 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,heritages,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"heritages","heritages",1016532791)], null)));
civilizations = G__37785;
heritages = G__37786;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37085_37783,G__37086_37784) : re_frame.core.reg_sub.call(null,G__37085_37783,G__37086_37784));
var G__37093_37787 = new cljs.core.Keyword(null,"world-roles","world-roles",-1495875244);
var G__37094_37788 = (function (db,p__37095){
var vec__37096 = p__37095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37096,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37096,(1),null);
var civilizations = (function (){var G__37100 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__37100) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__37100));
})();
var roles = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(roles));
} else {
var G__37789 = cljs.core.rest(civilizations);
var G__37790 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,roles,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"roles","roles",143379530)], null)));
civilizations = G__37789;
roles = G__37790;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37093_37787,G__37094_37788) : re_frame.core.reg_sub.call(null,G__37093_37787,G__37094_37788));
var G__37101_37791 = new cljs.core.Keyword(null,"world-resources","world-resources",368334044);
var G__37102_37792 = (function (db,p__37103){
var vec__37104 = p__37103;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37104,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37104,(1),null);
var civilizations = (function (){var G__37108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__37108) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__37108));
})();
var resources = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(resources));
} else {
var G__37793 = cljs.core.rest(civilizations);
var G__37794 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,resources,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"resources","resources",1632806811)], null)));
civilizations = G__37793;
resources = G__37794;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37101_37791,G__37102_37792) : re_frame.core.reg_sub.call(null,G__37101_37791,G__37102_37792));
var G__37109_37795 = new cljs.core.Keyword(null,"civilization-details","civilization-details",281511038);
var G__37110_37796 = (function (db,p__37111){
var vec__37112 = p__37111;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37112,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37112,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37109_37795,G__37110_37796) : re_frame.core.reg_sub.call(null,G__37109_37795,G__37110_37796));
var G__37115_37797 = new cljs.core.Keyword(null,"civilization-lore","civilization-lore",-555959513);
var G__37116_37798 = (function (db,p__37117){
var vec__37118 = p__37117;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37118,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37118,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"lore","lore",-10530558)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37115_37797,G__37116_37798) : re_frame.core.reg_sub.call(null,G__37115_37797,G__37116_37798));
var G__37121_37799 = new cljs.core.Keyword(null,"civilization-organizations","civilization-organizations",-666067443);
var G__37122_37800 = (function (db,p__37123){
var vec__37124 = p__37123;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37124,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37124,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"organizations","organizations",-755443762)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37121_37799,G__37122_37800) : re_frame.core.reg_sub.call(null,G__37121_37799,G__37122_37800));
var G__37127_37801 = new cljs.core.Keyword(null,"civilization-key-figures","civilization-key-figures",1996035078);
var G__37128_37802 = (function (db,p__37129){
var vec__37130 = p__37129;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37130,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37130,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"key-figures","key-figures",-2075124028)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37127_37801,G__37128_37802) : re_frame.core.reg_sub.call(null,G__37127_37801,G__37128_37802));
var G__37133_37803 = new cljs.core.Keyword(null,"civilization-advancements","civilization-advancements",1472212775);
var G__37134_37804 = (function (db,p__37135){
var vec__37136 = p__37135;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37136,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37136,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"advancements","advancements",32607236)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__37133_37803,G__37134_37804) : re_frame.core.reg_sub.call(null,G__37133_37803,G__37134_37804));

//# sourceMappingURL=modular_roleplaying_framework.db_CRUD.js.map
