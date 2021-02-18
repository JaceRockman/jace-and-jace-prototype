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
var vec__101842 = temp__5733__auto__;
var seq__101843 = cljs.core.seq(vec__101842);
var first__101844 = cljs.core.first(seq__101843);
var seq__101843__$1 = cljs.core.next(seq__101843);
var k = first__101844;
var ks__$1 = seq__101843__$1;
if(cljs.core.seq(ks__$1)){
var v = (function (){var G__101845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__101846 = ks__$1;
return (modular_roleplaying_framework.db_CRUD.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? modular_roleplaying_framework.db_CRUD.dissoc_in.cljs$core$IFn$_invoke$arity$2(G__101845,G__101846) : modular_roleplaying_framework.db_CRUD.dissoc_in.call(null,G__101845,G__101846));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-system","initialize-system",-1223784141),(function (p__101847,p__101848){
var map__101849 = p__101847;
var map__101849__$1 = (((((!((map__101849 == null))))?(((((map__101849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__101849):map__101849);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101849__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__101850 = p__101848;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101850,(0),null);
var section_one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101850,(1),null);
var section_two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101850,(2),null);
var section_three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101850,(3),null);
var layout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101850,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section_two),(0)),(0),modular_roleplaying_framework.db_CRUD.url_friendly(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section_two)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section_two),(0),layout,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section_one),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section_three),(0)),modular_roleplaying_framework.db_CRUD.url_friendly(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section_three)),modular_roleplaying_framework.db_CRUD.url_friendly(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section_one)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section_one),(0)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-layout","toggle-layout",-241410907),(function (p__101854,_){
var map__101855 = p__101854;
var map__101855__$1 = (((((!((map__101855 == null))))?(((((map__101855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__101855):map__101855);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101855__$1,new cljs.core.Keyword(null,"db","db",993250759));
var system_state = new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db);
var map__101857 = system_state;
var map__101857__$1 = (((((!((map__101857 == null))))?(((((map__101857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__101857):map__101857);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101857__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101857__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101857__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101857__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout,"book-layout"))?"pages-layout":"book-layout"),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reorder-sections","reorder-sections",208296526),(function (p__101859,p__101860){
var map__101861 = p__101859;
var map__101861__$1 = (((((!((map__101861 == null))))?(((((map__101861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__101861):map__101861);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101861__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__101862 = p__101860;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101862,(0),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101862,(1),null);
var section_one = (function (){var G__101866 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section","state-section",-1039543225),"section-one"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__101866) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__101866));
})();
var section_two = (function (){var G__101867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section","state-section",-1039543225),"section-two"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__101867) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__101867));
})();
var section_three = (function (){var G__101868 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-section","state-section",-1039543225),"section-three"], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__101868) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__101868));
})();
var layout = (function (){var G__101869 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__101869) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__101869));
})();
var G__101870 = direction;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("forward",G__101870)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_three)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_one)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_two))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("backward",G__101870)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_two)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_three)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394).cljs$core$IFn$_invoke$arity$1(section_one))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),G__101870)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Unrecognized direction when reordering sections."], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__101870)].join('')));

}
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"section-select","section-select",-1432207285),(function (p__101871,p__101872){
var map__101873 = p__101871;
var map__101873__$1 = (((((!((map__101873 == null))))?(((((map__101873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__101873):map__101873);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101873__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__101874 = p__101872;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101874,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101874,(1),null);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101874,(2),null);
var system_state = cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-title","section-title",1261938902)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(section),(0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-tab-parent","item-tab-parent",-1109190767)], null),null);
var map__101878 = system_state;
var map__101878__$1 = (((((!((map__101878 == null))))?(((((map__101878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__101878):map__101878);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101878__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101878__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101878__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101878__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tab-select","tab-select",1957789174),(function (p__101880,p__101881){
var map__101882 = p__101880;
var map__101882__$1 = (((((!((map__101882 == null))))?(((((map__101882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__101882):map__101882);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101882__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__101883 = p__101881;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101883,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101883,(1),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101883,(2),null);
var system_state = cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null),tab_id);
var map__101887 = system_state;
var map__101887__$1 = (((((!((map__101887 == null))))?(((((map__101887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__101887):map__101887);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101887__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101887__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101887__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101887__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"item-select","item-select",-1822277284),(function (p__101889,p__101890){
var map__101891 = p__101889;
var map__101891__$1 = (((((!((map__101891 == null))))?(((((map__101891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__101891):map__101891);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101891__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__101892 = p__101890;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101892,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101892,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101892,(2),null);
var system_state = cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),item_id);
var map__101896 = system_state;
var map__101896__$1 = (((((!((map__101896 == null))))?(((((map__101896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__101896):map__101896);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101896__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101896__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101896__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101896__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null)))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"item-tab-select","item-tab-select",-183749023),(function (p__101898,p__101899){
var map__101900 = p__101898;
var map__101900__$1 = (((((!((map__101900 == null))))?(((((map__101900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__101900):map__101900);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101900__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__101901 = p__101899;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101901,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101901,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101901,(2),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101901,(3),null);
var system_state = cljs.core.assoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),item_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null),tab_id);
var map__101905 = system_state;
var map__101905__$1 = (((((!((map__101905 == null))))?(((((map__101905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__101905):map__101905);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101905__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101905__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101905__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101905__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"section-two-tab","section-two-tab",-624403550),new cljs.core.Keyword(null,"section-two-item","section-two-item",191099076),new cljs.core.Keyword(null,"section-two-title","section-two-title",922133701),new cljs.core.Keyword(null,"section-two-id","section-two-id",540557701),new cljs.core.Keyword(null,"section-three-item","section-three-item",1221292901),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"section-one-tab","section-one-tab",1551930187),new cljs.core.Keyword(null,"section-three-tab","section-three-tab",-301788660),new cljs.core.Keyword(null,"section-three-title","section-three-title",489950221),new cljs.core.Keyword(null,"section-one-title","section-one-title",-691782767),new cljs.core.Keyword(null,"section-three-id","section-three-id",-1149334891),new cljs.core.Keyword(null,"section-one-id","section-one-id",859857656),new cljs.core.Keyword(null,"section-one-item","section-one-item",1259738426)],[new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_two),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_three),layout,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-title","section-title",1261938902).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_three),new cljs.core.Keyword(null,"section-id","section-id",-1780104220).cljs$core$IFn$_invoke$arity$1(section_one),new cljs.core.Keyword(null,"item-id","item-id",-1804511607).cljs$core$IFn$_invoke$arity$1(section_one)])], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null)))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"item-deselect","item-deselect",631056973),(function (p__101907,p__101908){
var map__101909 = p__101907;
var map__101909__$1 = (((((!((map__101909 == null))))?(((((map__101909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__101909):map__101909);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101909__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__101910 = p__101908;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101910,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101910,(1),null);
var system_state = cljs.core.assoc_in(cljs.core.assoc_in(new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null),null);
var map__101914 = system_state;
var map__101914__$1 = (((((!((map__101914 == null))))?(((((map__101914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__101914):map__101914);
var section_one = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101914__$1,new cljs.core.Keyword(null,"section-one","section-one",2122114939));
var section_two = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101914__$1,new cljs.core.Keyword(null,"section-two","section-two",2014896122));
var section_three = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101914__$1,new cljs.core.Keyword(null,"section-three","section-three",1855364595));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101914__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-system-state","update-system-state",-69675065),(function (p__101916,p__101917){
var map__101918 = p__101916;
var map__101918__$1 = (((((!((map__101918 == null))))?(((((map__101918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__101918):map__101918);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101918__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__101919 = p__101917;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101919,(0),null);
var vec__101922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101919,(1),null);
var section_one_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101922,(0),null);
var section_one_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101922,(1),null);
var section_one_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101922,(2),null);
var section_one_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101922,(3),null);
var section_two_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101922,(4),null);
var section_two_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101922,(5),null);
var section_two_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101922,(6),null);
var section_two_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101922,(7),null);
var section_three_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101922,(8),null);
var section_three_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101922,(9),null);
var section_three_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101922,(10),null);
var section_three_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101922,(11),null);
var layout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101922,(12),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section-title","section-title",1261938902),section_one_title,new cljs.core.Keyword(null,"section-id","section-id",-1780104220),section_one_id,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778),section_one_tab,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),section_one_item], null)], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section-title","section-title",1261938902),section_two_title,new cljs.core.Keyword(null,"section-id","section-id",-1780104220),section_two_id,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778),section_two_tab,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),section_two_item], null)], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section-title","section-title",1261938902),section_three_title,new cljs.core.Keyword(null,"section-id","section-id",-1780104220),section_three_id,new cljs.core.Keyword(null,"tab-id","tab-id",-468188778),section_three_tab,new cljs.core.Keyword(null,"item-id","item-id",-1804511607),section_three_item], null)], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),layout),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"initialized?","initialized?",1707939066)], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-active-item","select-active-item",384984244),(function (db,p__101926){
var vec__101927 = p__101926;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101927,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101927,(1),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101927,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null)),(item_id | (0)))){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),null);
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),(item_id | (0)));
}
}));
var G__101930_103165 = new cljs.core.Keyword(null,"system-state","system-state",509607631);
var G__101931_103166 = (function (db){
return new cljs.core.Keyword(null,"system-state","system-state",509607631).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__101930_103165,G__101931_103166) : re_frame.core.reg_sub.call(null,G__101930_103165,G__101931_103166));
var G__101932_103167 = new cljs.core.Keyword(null,"overlay-state","overlay-state",95491678);
var G__101933_103168 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-state","overlay-state",95491678)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__101932_103167,G__101933_103168) : re_frame.core.reg_sub.call(null,G__101932_103167,G__101933_103168));
var G__101934_103169 = new cljs.core.Keyword(null,"overlay-item","overlay-item",1921913766);
var G__101935_103170 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-item","overlay-item",1921913766)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__101934_103169,G__101935_103170) : re_frame.core.reg_sub.call(null,G__101934_103169,G__101935_103170));
var G__101936_103174 = new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523);
var G__101937_103175 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__101936_103174,G__101937_103175) : re_frame.core.reg_sub.call(null,G__101936_103174,G__101937_103175));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-state-change","overlay-state-change",1441777589),(function (db,p__101938){
var vec__101939 = p__101938;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101939,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101939,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-state","overlay-state",95491678)], null),state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-item-change","overlay-item-change",-1911220370),(function (db,p__101942){
var vec__101943 = p__101942;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101943,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101943,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-item","overlay-item",1921913766)], null),item_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-params-change","overlay-params-change",171897048),(function (db,p__101946){
var vec__101947 = p__101946;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101947,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101947,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"overlay-params","overlay-params",-1006140523)], null),params);
}));
var G__101950_103184 = new cljs.core.Keyword(null,"initialized?","initialized?",1707939066);
var G__101951_103185 = (function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"initialized?","initialized?",1707939066)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__101950_103184,G__101951_103185) : re_frame.core.reg_sub.call(null,G__101950_103184,G__101951_103185));
var G__101952_103189 = new cljs.core.Keyword(null,"state-section","state-section",-1039543225);
var G__101953_103190 = (function (db,p__101954){
var vec__101955 = p__101954;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101955,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101955,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__101952_103189,G__101953_103190) : re_frame.core.reg_sub.call(null,G__101952_103189,G__101953_103190));
var G__101958_103195 = new cljs.core.Keyword(null,"state-section-id","state-section-id",210581770);
var G__101959_103196 = (function (db,p__101960){
var vec__101961 = p__101960;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101961,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101961,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__101958_103195,G__101959_103196) : re_frame.core.reg_sub.call(null,G__101958_103195,G__101959_103196));
var G__101964_103202 = new cljs.core.Keyword(null,"state-section-ids","state-section-ids",1524494040);
var G__101965_103203 = (function (db,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-one","section-one",2122114939),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-two","section-two",2014896122),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"section-three","section-three",1855364595),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null))], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__101964_103202,G__101965_103203) : re_frame.core.reg_sub.call(null,G__101964_103202,G__101965_103203));
var G__101966_103208 = new cljs.core.Keyword(null,"state-section-tab","state-section-tab",1111796390);
var G__101967_103209 = (function (db,p__101968){
var vec__101969 = p__101968;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101969,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101969,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__101966_103208,G__101967_103209) : re_frame.core.reg_sub.call(null,G__101966_103208,G__101967_103209));
var G__101972_103215 = new cljs.core.Keyword(null,"state-section-item","state-section-item",2066315226);
var G__101973_103216 = (function (db,p__101974){
var vec__101975 = p__101974;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101975,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101975,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__101972_103215,G__101973_103216) : re_frame.core.reg_sub.call(null,G__101972_103215,G__101973_103216));
var G__101978_103217 = new cljs.core.Keyword(null,"layout","layout",-2120940921);
var G__101979_103218 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__101978_103217,G__101979_103218) : re_frame.core.reg_sub.call(null,G__101978_103217,G__101979_103218));
var G__101980_103219 = new cljs.core.Keyword(null,"section","section",-300141526);
var G__101981_103220 = (function (db,p__101982){
var vec__101983 = p__101982;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101983,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101983,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__101980_103219,G__101981_103220) : re_frame.core.reg_sub.call(null,G__101980_103219,G__101981_103220));
var G__101986_103221 = new cljs.core.Keyword(null,"section-type","section-type",-1815294838);
var G__101987_103222 = (function (db,p__101988){
var vec__101989 = p__101988;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101989,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101989,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"type","type",1174270348)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__101986_103221,G__101987_103222) : re_frame.core.reg_sub.call(null,G__101986_103221,G__101987_103222));
var G__101992_103223 = new cljs.core.Keyword(null,"section-title","section-title",1261938902);
var G__101993_103224 = (function (db,p__101994){
var vec__101995 = p__101994;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101995,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101995,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__101992_103223,G__101993_103224) : re_frame.core.reg_sub.call(null,G__101992_103223,G__101993_103224));
var G__101998_103229 = new cljs.core.Keyword(null,"section-tabs","section-tabs",1270711059);
var G__101999_103230 = (function (db,p__102000){
var vec__102001 = p__102000;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102001,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102001,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__101998_103229,G__101999_103230) : re_frame.core.reg_sub.call(null,G__101998_103229,G__101999_103230));
var G__102004_103236 = new cljs.core.Keyword(null,"ruleset-skillbilities?","ruleset-skillbilities?",-1360174223);
var G__102005_103237 = (function (db,p__102006){
var vec__102007 = p__102006;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102007,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102007,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"skillbilities?","skillbilities?",788972706)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102004_103236,G__102005_103237) : re_frame.core.reg_sub.call(null,G__102004_103236,G__102005_103237));
var G__102010_103242 = new cljs.core.Keyword(null,"ruleset-skills","ruleset-skills",-1459168412);
var G__102011_103243 = (function (db,p__102012){
var vec__102013 = p__102012;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102013,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102013,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"skills","skills",958701426)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102010_103242,G__102011_103243) : re_frame.core.reg_sub.call(null,G__102010_103242,G__102011_103243));
var G__102016_103248 = new cljs.core.Keyword(null,"ruleset-abilities","ruleset-abilities",1582837328);
var G__102017_103249 = (function (db,p__102018){
var vec__102019 = p__102018;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102019,(0),null);
var section_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102019,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"abilities","abilities",-1471386226)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102016_103248,G__102017_103249) : re_frame.core.reg_sub.call(null,G__102016_103248,G__102017_103249));
var G__102023_103254 = new cljs.core.Keyword(null,"section-tabs-full","section-tabs-full",300098194);
var G__102024_103255 = (function (db,p__102025){
var vec__102026 = p__102025;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102026,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102026,(1),null);
var section_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102026,(2),null);
var item_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
var section_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"section-id","section-id",-1780104220)], null));
var tabs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),section_id,new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null));
var subtabs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"item-parent-tab","item-parent-tab",771985394)], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"subtabs","subtabs",627577425)], null))));
if((item_id == null)){
return tabs;
} else {
return modular_roleplaying_framework.db_CRUD.insertv(tabs,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__102022_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__102022_SHARP_),cljs.core.first(subtabs));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tabs))),cljs.core.rest(subtabs));
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102023_103254,G__102024_103255) : re_frame.core.reg_sub.call(null,G__102023_103254,G__102024_103255));
var G__102029_103264 = new cljs.core.Keyword(null,"active-tab","active-tab",1102432568);
var G__102030_103265 = (function (db,p__102031){
var vec__102032 = p__102031;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102032,(0),null);
var section_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102032,(1),null);
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-state","system-state",509607631),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(section_number),new cljs.core.Keyword(null,"tab-id","tab-id",-468188778)], null)) | (0));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102029_103264,G__102030_103265) : re_frame.core.reg_sub.call(null,G__102029_103264,G__102030_103265));
var G__102035_103269 = new cljs.core.Keyword(null,"tab-icon","tab-icon",-601622304);
var G__102036_103270 = (function (db,p__102037){
var vec__102038 = p__102037;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102038,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102038,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"icon","icon",1679606541)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102035_103269,G__102036_103270) : re_frame.core.reg_sub.call(null,G__102035_103269,G__102036_103270));
var G__102041_103273 = new cljs.core.Keyword(null,"tab-type","tab-type",-913444495);
var G__102042_103274 = (function (db,p__102043){
var vec__102044 = p__102043;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102044,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102044,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"type","type",1174270348)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102041_103273,G__102042_103274) : re_frame.core.reg_sub.call(null,G__102041_103273,G__102042_103274));
var G__102047_103275 = new cljs.core.Keyword(null,"tab-title","tab-title",1398279061);
var G__102048_103276 = (function (db,p__102049){
var vec__102050 = p__102049;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102050,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102050,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102047_103275,G__102048_103276) : re_frame.core.reg_sub.call(null,G__102047_103275,G__102048_103276));
var G__102053_103280 = new cljs.core.Keyword(null,"tab-template","tab-template",-1557753771);
var G__102054_103281 = (function (db,p__102055){
var vec__102056 = p__102055;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102056,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102056,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"template","template",-702405684)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102053_103280,G__102054_103281) : re_frame.core.reg_sub.call(null,G__102053_103280,G__102054_103281));
var G__102059_103284 = new cljs.core.Keyword(null,"tab-items","tab-items",1934951825);
var G__102060_103285 = (function (db,p__102061){
var vec__102062 = p__102061;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102062,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102062,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),tab_id,new cljs.core.Keyword(null,"items","items",1031954938)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102059_103284,G__102060_103285) : re_frame.core.reg_sub.call(null,G__102059_103284,G__102060_103285));
var G__102065_103286 = new cljs.core.Keyword(null,"item","item",249373802);
var G__102066_103287 = (function (db,p__102067){
var vec__102068 = p__102067;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102068,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102068,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102065_103286,G__102066_103287) : re_frame.core.reg_sub.call(null,G__102065_103286,G__102066_103287));
var G__102071_103290 = new cljs.core.Keyword(null,"item-title","item-title",-249793661);
var G__102072_103291 = (function (db,p__102073){
var vec__102074 = p__102073;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102074,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102074,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102071_103290,G__102072_103291) : re_frame.core.reg_sub.call(null,G__102071_103290,G__102072_103291));
var G__102077_103292 = new cljs.core.Keyword(null,"item-type","item-type",-73995695);
var G__102078_103293 = (function (db,p__102079){
var vec__102080 = p__102079;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102080,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102080,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"type","type",1174270348)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102077_103292,G__102078_103293) : re_frame.core.reg_sub.call(null,G__102077_103292,G__102078_103293));
var G__102083_103295 = new cljs.core.Keyword(null,"item-details","item-details",-987623935);
var G__102084_103296 = (function (db,p__102085){
var vec__102086 = p__102085;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102086,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102086,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102083_103295,G__102084_103296) : re_frame.core.reg_sub.call(null,G__102083_103295,G__102084_103296));
var G__102089_103298 = new cljs.core.Keyword(null,"item-text","item-text",-2146003655);
var G__102090_103299 = (function (db,p__102091){
var vec__102092 = p__102091;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102092,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102092,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102089_103298,G__102090_103299) : re_frame.core.reg_sub.call(null,G__102089_103298,G__102090_103299));
var G__102095_103302 = new cljs.core.Keyword(null,"item-subtabs","item-subtabs",-894115020);
var G__102096_103303 = (function (db,p__102097){
var vec__102098 = p__102097;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102098,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102098,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"subtabs","subtabs",627577425)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102095_103302,G__102096_103303) : re_frame.core.reg_sub.call(null,G__102095_103302,G__102096_103303));
var G__102101_103304 = new cljs.core.Keyword(null,"ruleset-skills","ruleset-skills",-1459168412);
var G__102102_103305 = (function (db,p__102103){
var vec__102104 = p__102103;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102104,(0),null);
var ruleset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102104,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),ruleset_id,new cljs.core.Keyword(null,"skills","skills",958701426)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102101_103304,G__102102_103305) : re_frame.core.reg_sub.call(null,G__102101_103304,G__102102_103305));
var G__102107_103306 = new cljs.core.Keyword(null,"ruleset-skillbilities","ruleset-skillbilities",2131758022);
var G__102108_103307 = (function (db,p__102109){
var vec__102110 = p__102109;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102110,(0),null);
var ruleset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102110,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),ruleset_id,new cljs.core.Keyword(null,"skillbilities?","skillbilities?",788972706)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102107_103306,G__102108_103307) : re_frame.core.reg_sub.call(null,G__102107_103306,G__102108_103307));
var G__102113_103308 = new cljs.core.Keyword(null,"item-password","item-password",501455667);
var G__102114_103309 = (function (db,p__102115){
var vec__102116 = p__102115;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102116,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102116,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"password","password",417022471)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102113_103308,G__102114_103309) : re_frame.core.reg_sub.call(null,G__102113_103308,G__102114_103309));
var G__102119_103312 = new cljs.core.Keyword(null,"unlock-creature","unlock-creature",1380788176);
var G__102120_103313 = (function (db,p__102121){
var vec__102122 = p__102121;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102122,(0),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102122,(1),null);
var creature_id = cljs.core.filterv((function (item_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"password","password",417022471)], null)),password);
}),cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null))));
if((creature_id == null)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Password does not correspond with a creature."], 0));
} else {
return creature_id;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102119_103312,G__102120_103313) : re_frame.core.reg_sub.call(null,G__102119_103312,G__102120_103313));
var G__102125_103315 = new cljs.core.Keyword(null,"creature-title","creature-title",-418581929);
var G__102126_103316 = (function (db,p__102127){
var vec__102128 = p__102127;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102128,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102128,(1),null);
var character = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id], null));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(character)),", the ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"heritage","heritage",-1161447356).cljs$core$IFn$_invoke$arity$1(character))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(character))].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102125_103315,G__102126_103316) : re_frame.core.reg_sub.call(null,G__102125_103315,G__102126_103316));
var G__102131_103319 = new cljs.core.Keyword(null,"creature-summary","creature-summary",2046084639);
var G__102132_103320 = (function (db,p__102133){
var vec__102134 = p__102133;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102134,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102134,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary","summary",380847952)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102131_103319,G__102132_103320) : re_frame.core.reg_sub.call(null,G__102131_103319,G__102132_103320));
var G__102137_103324 = new cljs.core.Keyword(null,"creature-summary-state","creature-summary-state",-780207604);
var G__102138_103325 = (function (db,p__102139){
var vec__102140 = p__102139;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102140,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102140,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary-state","summary-state",163086774)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102137_103324,G__102138_103325) : re_frame.core.reg_sub.call(null,G__102137_103324,G__102138_103325));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-summary-state-change","creature-summary-state-change",714628401),(function (db,p__102143){
var vec__102144 = p__102143;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102144,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102144,(1),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102144,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary-state","summary-state",163086774)], null),new_state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-summary-update","creature-summary-update",99922919),(function (db,p__102147){
var vec__102148 = p__102147;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102148,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102148,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102148,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"summary","summary",380847952)], null),changes);
}));
var G__102151_103331 = new cljs.core.Keyword(null,"creature-stats","creature-stats",961451436);
var G__102152_103332 = (function (db,p__102153){
var vec__102154 = p__102153;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102154,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102154,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102151_103331,G__102152_103332) : re_frame.core.reg_sub.call(null,G__102151_103331,G__102152_103332));
var G__102157_103333 = new cljs.core.Keyword(null,"coordination","coordination",1076145876);
var G__102158_103334 = (function (db,p__102159){
var vec__102160 = p__102159;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102160,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102160,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102157_103333,G__102158_103334) : re_frame.core.reg_sub.call(null,G__102157_103333,G__102158_103334));
var G__102163_103335 = new cljs.core.Keyword(null,"reflexes","reflexes",-1252736336);
var G__102164_103336 = (function (db,p__102165){
var vec__102166 = p__102165;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102166,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102166,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102163_103335,G__102164_103336) : re_frame.core.reg_sub.call(null,G__102163_103335,G__102164_103336));
var G__102169_103340 = new cljs.core.Keyword(null,"endurance","endurance",2002692038);
var G__102170_103341 = (function (db,p__102171){
var vec__102172 = p__102171;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102172,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102172,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102169_103340,G__102170_103341) : re_frame.core.reg_sub.call(null,G__102169_103340,G__102170_103341));
var G__102175_103347 = new cljs.core.Keyword(null,"exertion","exertion",-1240242361);
var G__102176_103348 = (function (db,p__102177){
var vec__102178 = p__102177;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102178,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102178,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102175_103347,G__102176_103348) : re_frame.core.reg_sub.call(null,G__102175_103347,G__102176_103348));
var G__102181_103349 = new cljs.core.Keyword(null,"instinct","instinct",2090002619);
var G__102182_103350 = (function (db,p__102183){
var vec__102184 = p__102183;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102184,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102184,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102181_103349,G__102182_103350) : re_frame.core.reg_sub.call(null,G__102181_103349,G__102182_103350));
var G__102187_103353 = new cljs.core.Keyword(null,"perseverance","perseverance",-470288293);
var G__102188_103354 = (function (db,p__102189){
var vec__102190 = p__102189;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102190,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102190,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102187_103353,G__102188_103354) : re_frame.core.reg_sub.call(null,G__102187_103353,G__102188_103354));
var G__102193_103357 = new cljs.core.Keyword(null,"concentration","concentration",1539606986);
var G__102194_103358 = (function (db,p__102195){
var vec__102196 = p__102195;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102196,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102196,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102193_103357,G__102194_103358) : re_frame.core.reg_sub.call(null,G__102193_103357,G__102194_103358));
var G__102199_103361 = new cljs.core.Keyword(null,"recognition","recognition",1793959531);
var G__102200_103362 = (function (db,p__102201){
var vec__102202 = p__102201;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102202,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102202,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102199_103361,G__102200_103362) : re_frame.core.reg_sub.call(null,G__102199_103361,G__102200_103362));
var G__102205_103365 = new cljs.core.Keyword(null,"comprehension","comprehension",-756656463);
var G__102206_103366 = (function (db,p__102207){
var vec__102208 = p__102207;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102208,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102208,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102205_103365,G__102206_103366) : re_frame.core.reg_sub.call(null,G__102205_103365,G__102206_103366));
var G__102211_103370 = new cljs.core.Keyword(null,"persuasion","persuasion",1089798916);
var G__102212_103371 = (function (db,p__102213){
var vec__102214 = p__102213;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102214,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102214,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"skills","skills",958701426),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102211_103370,G__102212_103371) : re_frame.core.reg_sub.call(null,G__102211_103370,G__102212_103371));
var G__102217_103375 = new cljs.core.Keyword(null,"insight","insight",-1501263459);
var G__102218_103376 = (function (db,p__102219){
var vec__102220 = p__102219;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102220,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102220,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"skills","skills",958701426),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102217_103375,G__102218_103376) : re_frame.core.reg_sub.call(null,G__102217_103375,G__102218_103376));
var G__102223_103378 = new cljs.core.Keyword(null,"connections","connections",-2064090887);
var G__102224_103379 = (function (db,p__102225){
var vec__102226 = p__102225;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102226,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102226,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"skills","skills",958701426),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102223_103378,G__102224_103379) : re_frame.core.reg_sub.call(null,G__102223_103378,G__102224_103379));
var G__102229_103381 = new cljs.core.Keyword(null,"might","might",-1328381368);
var G__102230_103382 = (function (db,p__102231){
var vec__102232 = p__102231;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102232,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102232,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102229_103381,G__102230_103382) : re_frame.core.reg_sub.call(null,G__102229_103381,G__102230_103382));
var G__102235_103383 = new cljs.core.Keyword(null,"finesse","finesse",891142453);
var G__102236_103384 = (function (db,p__102237){
var vec__102238 = p__102237;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102238,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102238,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102235_103383,G__102236_103384) : re_frame.core.reg_sub.call(null,G__102235_103383,G__102236_103384));
var G__102241_103388 = new cljs.core.Keyword(null,"fortitude","fortitude",1187352341);
var G__102242_103389 = (function (db,p__102243){
var vec__102244 = p__102243;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102244,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102244,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102241_103388,G__102242_103389) : re_frame.core.reg_sub.call(null,G__102241_103388,G__102242_103389));
var G__102247_103396 = new cljs.core.Keyword(null,"ambition","ambition",-153662933);
var G__102248_103397 = (function (db,p__102249){
var vec__102250 = p__102249;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102250,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102250,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102247_103396,G__102248_103397) : re_frame.core.reg_sub.call(null,G__102247_103396,G__102248_103397));
var G__102253_103400 = new cljs.core.Keyword(null,"discipline","discipline",343863089);
var G__102254_103401 = (function (db,p__102255){
var vec__102256 = p__102255;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102256,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102256,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102253_103400,G__102254_103401) : re_frame.core.reg_sub.call(null,G__102253_103400,G__102254_103401));
var G__102259_103402 = new cljs.core.Keyword(null,"dedication","dedication",2052444551);
var G__102260_103403 = (function (db,p__102261){
var vec__102262 = p__102261;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102262,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102262,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"spiritual","spiritual",-67206148),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102259_103402,G__102260_103403) : re_frame.core.reg_sub.call(null,G__102259_103402,G__102260_103403));
var G__102265_103409 = new cljs.core.Keyword(null,"intellect","intellect",414822757);
var G__102266_103410 = (function (db,p__102267){
var vec__102268 = p__102267;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102268,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102268,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102265_103409,G__102266_103410) : re_frame.core.reg_sub.call(null,G__102265_103409,G__102266_103410));
var G__102271_103417 = new cljs.core.Keyword(null,"intuition","intuition",1122677380);
var G__102272_103418 = (function (db,p__102273){
var vec__102274 = p__102273;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102274,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102274,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102271_103417,G__102272_103418) : re_frame.core.reg_sub.call(null,G__102271_103417,G__102272_103418));
var G__102277_103419 = new cljs.core.Keyword(null,"stability","stability",1733225509);
var G__102278_103420 = (function (db,p__102279){
var vec__102280 = p__102279;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102280,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102280,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mental","mental",-123765745),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102277_103419,G__102278_103420) : re_frame.core.reg_sub.call(null,G__102277_103419,G__102278_103420));
var G__102283_103421 = new cljs.core.Keyword(null,"presence","presence",-1580756953);
var G__102284_103422 = (function (db,p__102285){
var vec__102286 = p__102285;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102286,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102286,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(0)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102283_103421,G__102284_103422) : re_frame.core.reg_sub.call(null,G__102283_103421,G__102284_103422));
var G__102289_103427 = new cljs.core.Keyword(null,"wit","wit",-1627445195);
var G__102290_103428 = (function (db,p__102291){
var vec__102292 = p__102291;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102292,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102292,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(1)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102289_103427,G__102290_103428) : re_frame.core.reg_sub.call(null,G__102289_103427,G__102290_103428));
var G__102295_103430 = new cljs.core.Keyword(null,"poise","poise",-429377896);
var G__102296_103431 = (function (db,p__102297){
var vec__102298 = p__102297;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102298,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102298,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"social","social",-1560314971),new cljs.core.Keyword(null,"abilities","abilities",-1471386226),(2)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102295_103430,G__102296_103431) : re_frame.core.reg_sub.call(null,G__102295_103430,G__102296_103431));
var G__102301_103433 = new cljs.core.Keyword(null,"creature-resources","creature-resources",495041557);
var G__102302_103434 = (function (db,p__102303){
var vec__102304 = p__102303;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102304,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102304,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102301_103433,G__102302_103434) : re_frame.core.reg_sub.call(null,G__102301_103433,G__102302_103434));
var G__102307_103439 = new cljs.core.Keyword(null,"creature-resources-typed","creature-resources-typed",728372146);
var G__102308_103440 = (function (db,p__102309){
var vec__102310 = p__102309;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102310,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102310,(1),null);
var resource_subtype_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102310,(2),null);
return cljs.core.filterv((function (resource_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"subtype","subtype",-2092672993)], null)),resource_subtype_id);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null)));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102307_103439,G__102308_103440) : re_frame.core.reg_sub.call(null,G__102307_103439,G__102308_103440));
var G__102313_103441 = new cljs.core.Keyword(null,"creature-resources-typed-quantified","creature-resources-typed-quantified",-1136110511);
var G__102314_103442 = (function (db,p__102315){
var vec__102316 = p__102315;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102316,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102316,(1),null);
var resource_subtype_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102316,(2),null);
return cljs.core.frequencies((function (){var G__102319 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-resources-typed","creature-resources-typed",728372146),creature_id,resource_subtype_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__102319) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__102319));
})());
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102313_103441,G__102314_103442) : re_frame.core.reg_sub.call(null,G__102313_103441,G__102314_103442));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-add-resource","creature-add-resource",409356036),(function (db,p__102320){
var vec__102321 = p__102320;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102321,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102321,(1),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102321,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null),cljs.core.conj,resource_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-remove-resource","creature-remove-resource",-1835624647),(function (db,p__102324){
var vec__102325 = p__102324;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102325,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102325,(1),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102325,(2),null);
var resource_list = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
var index = (0);
while(true){
if((index >= cljs.core.count(resource_list))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR: Resource not found."], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resource_id,(resource_list.cljs$core$IFn$_invoke$arity$1 ? resource_list.cljs$core$IFn$_invoke$arity$1(index) : resource_list.call(null,index)))){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null),modular_roleplaying_framework.db_CRUD.exsert(resource_list,(index - (1))));
} else {
var G__103456 = resource_list;
var G__103457 = (index + (1));
resource_list = G__103456;
index = G__103457;
continue;
}
}
break;
}
}));
var G__102328_103458 = new cljs.core.Keyword(null,"creature-feature-list","creature-feature-list",225155610);
var G__102329_103459 = (function (db,p__102330){
var vec__102331 = p__102330;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102331,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102331,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102328_103458,G__102329_103459) : re_frame.core.reg_sub.call(null,G__102328_103458,G__102329_103459));
var G__102334_103460 = new cljs.core.Keyword(null,"creature-notes","creature-notes",-2029123219);
var G__102335_103461 = (function (db,p__102336){
var vec__102337 = p__102336;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102337,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102337,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102334_103460,G__102335_103461) : re_frame.core.reg_sub.call(null,G__102334_103460,G__102335_103461));
var G__102340_103465 = new cljs.core.Keyword(null,"creature-notes-state","creature-notes-state",-471696466);
var G__102341_103466 = (function (db,p__102342){
var vec__102343 = p__102342;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102343,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102343,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes-state","notes-state",-1025022243)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102340_103465,G__102341_103466) : re_frame.core.reg_sub.call(null,G__102340_103465,G__102341_103466));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-notes-state-change","creature-notes-state-change",-1510434125),(function (db,p__102346){
var vec__102347 = p__102346;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102347,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102347,(1),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102347,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes-state","notes-state",-1025022243)], null),new_state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creature-notes-update","creature-notes-update",-350278924),(function (db,p__102350){
var vec__102351 = p__102350;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102351,(0),null);
var creature_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102351,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102351,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),creature_id,new cljs.core.Keyword(null,"notes","notes",-1039600523)], null),changes);
}));
var G__102354_103474 = new cljs.core.Keyword(null,"resource-title","resource-title",904657571);
var G__102355_103475 = (function (db,p__102356){
var vec__102357 = p__102356;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102357,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102357,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102354_103474,G__102355_103475) : re_frame.core.reg_sub.call(null,G__102354_103474,G__102355_103475));
var G__102360_103476 = new cljs.core.Keyword(null,"resource-subtype","resource-subtype",1660664175);
var G__102361_103477 = (function (db,p__102362){
var vec__102363 = p__102362;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102363,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102363,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"subtype","subtype",-2092672993)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102360_103476,G__102361_103477) : re_frame.core.reg_sub.call(null,G__102360_103476,G__102361_103477));
var G__102366_103483 = new cljs.core.Keyword(null,"resource-properties","resource-properties",-677994762);
var G__102367_103484 = (function (db,p__102368){
var vec__102369 = p__102368;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102369,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102369,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"properties","properties",685819552)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102366_103483,G__102367_103484) : re_frame.core.reg_sub.call(null,G__102366_103483,G__102367_103484));
var G__102372_103485 = new cljs.core.Keyword(null,"resource-quality","resource-quality",-1384712256);
var G__102373_103486 = (function (db,p__102374){
var vec__102375 = p__102374;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102375,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102375,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"benefits","benefits",20804277),new cljs.core.Keyword(null,"quality","quality",147850199)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102372_103485,G__102373_103486) : re_frame.core.reg_sub.call(null,G__102372_103485,G__102373_103486));
var G__102378_103490 = new cljs.core.Keyword(null,"resource-quality-bonus","resource-quality-bonus",496784380);
var G__102379_103491 = (function (db,p__102380){
var vec__102381 = p__102380;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102381,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102381,(1),null);
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102378_103490,G__102379_103491) : re_frame.core.reg_sub.call(null,G__102378_103490,G__102379_103491));
var G__102384_103494 = new cljs.core.Keyword(null,"resource-power","resource-power",-283348905);
var G__102385_103495 = (function (db,p__102386){
var vec__102387 = p__102386;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102387,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102387,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"benefits","benefits",20804277),new cljs.core.Keyword(null,"power","power",-937852079)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102384_103494,G__102385_103495) : re_frame.core.reg_sub.call(null,G__102384_103494,G__102385_103495));
var G__102390_103498 = new cljs.core.Keyword(null,"resource-power-bonus","resource-power-bonus",669478217);
var G__102391_103499 = (function (db,p__102392){
var vec__102393 = p__102392;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102393,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102393,(1),null);
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
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102390_103498,G__102391_103499) : re_frame.core.reg_sub.call(null,G__102390_103498,G__102391_103499));
var G__102396_103506 = new cljs.core.Keyword(null,"resource-flavor-text","resource-flavor-text",429244330);
var G__102397_103507 = (function (db,p__102398){
var vec__102399 = p__102398;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102399,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102399,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"flavor-text","flavor-text",-227991981)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102396_103506,G__102397_103507) : re_frame.core.reg_sub.call(null,G__102396_103506,G__102397_103507));
var G__102402_103509 = new cljs.core.Keyword(null,"all-features","all-features",-969912234);
var G__102403_103510 = (function (db,_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__102404){
var vec__102405 = p__102404;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102405,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102405,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("feature",(function (){var G__102408 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),k], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__102408) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__102408));
})());
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"items","items",1031954938))));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102402_103509,G__102403_103510) : re_frame.core.reg_sub.call(null,G__102402_103509,G__102403_103510));
var G__102410_103511 = new cljs.core.Keyword(null,"features-by-property","features-by-property",-1888070616);
var G__102411_103512 = (function (db,p__102412){
var vec__102413 = p__102412;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102413,(0),null);
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102413,(1),null);
return cljs.core.filterv((function (feature){
return cljs.core.some((function (p1__102409_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property,p1__102409_SHARP_);
}),(function (){var G__102416 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-keywords","feature-keywords",-513678207),feature], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__102416) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__102416));
})());
}),(function (){var G__102417 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-features","all-features",-969912234)], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__102417) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__102417));
})());
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102410_103511,G__102411_103512) : re_frame.core.reg_sub.call(null,G__102410_103511,G__102411_103512));
var G__102418_103516 = new cljs.core.Keyword(null,"resource-features","resource-features",-1831876409);
var G__102419_103517 = (function (db,p__102420){
var vec__102421 = p__102420;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102421,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102421,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),resource_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102418_103516,G__102419_103517) : re_frame.core.reg_sub.call(null,G__102418_103516,G__102419_103517));
var G__102425_103523 = new cljs.core.Keyword(null,"resource-feature-lookup","resource-feature-lookup",1465251014);
var G__102426_103524 = (function (db,p__102427){
var vec__102428 = p__102427;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102428,(0),null);
var resource_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102428,(1),null);
var resource_properties = (function (){var G__102431 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resource-properties","resource-properties",-677994762),resource_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__102431) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__102431));
})();
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__102424_SHARP_){
var G__102432 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features-by-property","features-by-property",-1888070616),p1__102424_SHARP_], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__102432) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__102432));
}),resource_properties))));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102425_103523,G__102426_103524) : re_frame.core.reg_sub.call(null,G__102425_103523,G__102426_103524));
var G__102433_103527 = new cljs.core.Keyword(null,"resource-list","resource-list",1498099584);
var G__102434_103528 = (function (db,_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__102435){
var vec__102436 = p__102435;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102436,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102436,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("resource",(function (){var G__102439 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-type","item-type",-73995695),k], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__102439) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__102439));
})());
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"items","items",1031954938))));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102433_103527,G__102434_103528) : re_frame.core.reg_sub.call(null,G__102433_103527,G__102434_103528));
modular_roleplaying_framework.db_CRUD.melee_weapons = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sword","Spear","Axe"], null);
modular_roleplaying_framework.db_CRUD.matches_QMARK_ = (function modular_roleplaying_framework$db_CRUD$matches_QMARK_(coll1,coll2){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,coll1,coll2)));
});
var G__102440_103535 = new cljs.core.Keyword(null,"implement","implement",832506591);
var G__102441_103536 = (function (db,p__102442){
var vec__102443 = p__102442;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102443,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102443,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Modal Tool",new cljs.core.Keyword(null,"description","description",-1428560544),"These arcane gauntlets have two modes stored: the melee mode and the ranged mode. While in melee mode, the left gauntlet produces a shield of solid aethereal force with stats equivalent to a kite shield while the right gauntlet produces a sharp aethereal blade with stats equivalent to a longsword. While in ranged mode, the two gauntlets function together as a bow with stats equivalent to a longbow. Changing from one mode to the other requires a setup action. Gain +Quality +Power on attacks with the Arcane Gauntlets as well as +Quality from your Aethereal Knowledge."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102440_103535,G__102441_103536) : re_frame.core.reg_sub.call(null,G__102440_103535,G__102441_103536));
var G__102446_103538 = new cljs.core.Keyword(null,"weapon-attack","weapon-attack",1268897249);
var G__102447_103539 = (function (db,p__102448){
var vec__102449 = p__102448;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102449,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102449,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__102452 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102453 = properties;
if(cljs.core.truth_((function (){var G__102455 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bow"], null);
var G__102456 = expr__102453;
return (pred__102452.cljs$core$IFn$_invoke$arity$2 ? pred__102452.cljs$core$IFn$_invoke$arity$2(G__102455,G__102456) : pred__102452.call(null,G__102455,G__102456));
})())){
return "Ranged Attack";
} else {
if(cljs.core.truth_((pred__102452.cljs$core$IFn$_invoke$arity$2 ? pred__102452.cljs$core$IFn$_invoke$arity$2(modular_roleplaying_framework.db_CRUD.melee_weapons,expr__102453) : pred__102452.call(null,modular_roleplaying_framework.db_CRUD.melee_weapons,expr__102453)))){
return "Melee Attack";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102453)].join('')));
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__102457 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102458 = properties;
if(cljs.core.truth_((function (){var G__102460 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bow"], null);
var G__102461 = expr__102458;
return (pred__102457.cljs$core$IFn$_invoke$arity$2 ? pred__102457.cljs$core$IFn$_invoke$arity$2(G__102460,G__102461) : pred__102457.call(null,G__102460,G__102461));
})())){
return ["You may spend a main action to make a Coordination +Quality +Power check against a creature. \n                   You must have the creature targeted and the creature must be within ten zones but cannot be within the same zone. ",(function (){var pred__102471 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102472 = properties;
if(cljs.core.truth_((function (){var G__102474 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__102475 = expr__102472;
return (pred__102471.cljs$core$IFn$_invoke$arity$2 ? pred__102471.cljs$core$IFn$_invoke$arity$2(G__102474,G__102475) : pred__102471.call(null,G__102474,G__102475));
})())){
return "As a light bow, it can be wielded alongside a shield. When partitioning the base dice pool, the resulting dice pools must have at least two dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__102476 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__102477 = expr__102472;
return (pred__102471.cljs$core$IFn$_invoke$arity$2 ? pred__102471.cljs$core$IFn$_invoke$arity$2(G__102476,G__102477) : pred__102471.call(null,G__102476,G__102477));
})())){
return "As a medium bow, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least three dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__102478 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__102479 = expr__102472;
return (pred__102471.cljs$core$IFn$_invoke$arity$2 ? pred__102471.cljs$core$IFn$_invoke$arity$2(G__102478,G__102479) : pred__102471.call(null,G__102478,G__102479));
})())){
return "As a heavy bow, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least four dice in them. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102472)].join('')));
}
}
}
})(),"This weapon deals piercing damage."].join('');
} else {
return ["You may spend a main action to make a Coordination +Quality +Power check against a creature. ",(function (){var pred__102503 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102504 = properties;
if(cljs.core.truth_((function (){var G__102506 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sword","Spear","Axe"], null);
var G__102507 = expr__102504;
return (pred__102503.cljs$core$IFn$_invoke$arity$2 ? pred__102503.cljs$core$IFn$_invoke$arity$2(G__102506,G__102507) : pred__102503.call(null,G__102506,G__102507));
})())){
return "You must have the creature targeted and the creature must be in the same zone as you. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102504)].join('')));
}
})(),(function (){var pred__102508 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102509 = properties;
if(cljs.core.truth_((function (){var G__102511 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__102512 = expr__102509;
return (pred__102508.cljs$core$IFn$_invoke$arity$2 ? pred__102508.cljs$core$IFn$_invoke$arity$2(G__102511,G__102512) : pred__102508.call(null,G__102511,G__102512));
})())){
return "As a light weapon, it may be wielded in either hand. When partitioning the base dice pool, the resulting dice pools must have at least two dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__102513 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__102514 = expr__102509;
return (pred__102508.cljs$core$IFn$_invoke$arity$2 ? pred__102508.cljs$core$IFn$_invoke$arity$2(G__102513,G__102514) : pred__102508.call(null,G__102513,G__102514));
})())){
return "As a medium weapon, it must be wielded in the dominant hand. When partitioning the base dice pool, the resulting dice pools must have at least three dice in them. ";
} else {
if(cljs.core.truth_((function (){var G__102515 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__102516 = expr__102509;
return (pred__102508.cljs$core$IFn$_invoke$arity$2 ? pred__102508.cljs$core$IFn$_invoke$arity$2(G__102515,G__102516) : pred__102508.call(null,G__102515,G__102516));
})())){
return "As a heavy weapon, it must be wielded in both hands. When partitioning the base dice pool, the resulting dice pools must have at least four dice in them. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102509)].join('')));
}
}
}
})(),(function (){var pred__102517 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102518 = properties;
if(cljs.core.truth_((function (){var G__102520 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sword"], null);
var G__102521 = expr__102518;
return (pred__102517.cljs$core$IFn$_invoke$arity$2 ? pred__102517.cljs$core$IFn$_invoke$arity$2(G__102520,G__102521) : pred__102517.call(null,G__102520,G__102521));
})())){
return "This weapon may deal piercing or slashing damage.";
} else {
if(cljs.core.truth_((function (){var G__102522 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Spear"], null);
var G__102523 = expr__102518;
return (pred__102517.cljs$core$IFn$_invoke$arity$2 ? pred__102517.cljs$core$IFn$_invoke$arity$2(G__102522,G__102523) : pred__102517.call(null,G__102522,G__102523));
})())){
return "This weapon may deal piercing or bludgeoning damage.";
} else {
if(cljs.core.truth_((function (){var G__102524 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Axe"], null);
var G__102525 = expr__102518;
return (pred__102517.cljs$core$IFn$_invoke$arity$2 ? pred__102517.cljs$core$IFn$_invoke$arity$2(G__102524,G__102525) : pred__102517.call(null,G__102524,G__102525));
})())){
return "This weapon may deal slashing or bludgeoning damage.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102518)].join('')));
}
}
}
})()].join('');
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102446_103538,G__102447_103539) : re_frame.core.reg_sub.call(null,G__102446_103538,G__102447_103539));
var G__102526_103552 = new cljs.core.Keyword(null,"block-attack","block-attack",-1348539017);
var G__102527_103553 = (function (db,p__102528){
var vec__102529 = p__102528;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102529,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102529,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__102532 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102533 = properties;
if(cljs.core.truth_((function (){var G__102535 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Shield"], null);
var G__102536 = expr__102533;
return (pred__102532.cljs$core$IFn$_invoke$arity$2 ? pred__102532.cljs$core$IFn$_invoke$arity$2(G__102535,G__102536) : pred__102532.call(null,G__102535,G__102536));
})())){
return "Shield Block";
} else {
if(cljs.core.truth_((function (){var G__102537 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Armor"], null);
var G__102538 = expr__102533;
return (pred__102532.cljs$core$IFn$_invoke$arity$2 ? pred__102532.cljs$core$IFn$_invoke$arity$2(G__102537,G__102538) : pred__102532.call(null,G__102537,G__102538));
})())){
return "Armored Defense";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102533)].join('')));
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),["You may spend a main action to make a Reflexes +Quality +Power check to defend yourself against a creature's attack that targets you. \n         When partitioning the base dice pool while defending yourself against physical attacks, the resulting dice pools must have at least ",(function (){var pred__102548 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102549 = properties;
if(cljs.core.truth_((function (){var G__102551 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__102552 = expr__102549;
return (pred__102548.cljs$core$IFn$_invoke$arity$2 ? pred__102548.cljs$core$IFn$_invoke$arity$2(G__102551,G__102552) : pred__102548.call(null,G__102551,G__102552));
})())){
return "two ";
} else {
if(cljs.core.truth_((function (){var G__102553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__102554 = expr__102549;
return (pred__102548.cljs$core$IFn$_invoke$arity$2 ? pred__102548.cljs$core$IFn$_invoke$arity$2(G__102553,G__102554) : pred__102548.call(null,G__102553,G__102554));
})())){
return "three ";
} else {
if(cljs.core.truth_((function (){var G__102555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__102556 = expr__102549;
return (pred__102548.cljs$core$IFn$_invoke$arity$2 ? pred__102548.cljs$core$IFn$_invoke$arity$2(G__102555,G__102556) : pred__102548.call(null,G__102555,G__102556));
})())){
return "four ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102549)].join('')));
}
}
}
})(),"dice in them. When multiple items contribute to a defense check, the partitioned dice pools must follow the size limitations of every item involved.",((modular_roleplaying_framework.db_CRUD.matches_QMARK_(properties,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Shield"], null)))?"As a shield, it can be wielded in either hand.":null)].join('')], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102526_103552,G__102527_103553) : re_frame.core.reg_sub.call(null,G__102526_103552,G__102527_103553));
var G__102557_103561 = new cljs.core.Keyword(null,"trait","trait",626034900);
var G__102558_103562 = (function (db,p__102559){
var vec__102560 = p__102559;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102560,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102560,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__102563 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102564 = properties;
if(cljs.core.truth_((function (){var G__102566 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Flaw"], null);
var G__102567 = expr__102564;
return (pred__102563.cljs$core$IFn$_invoke$arity$2 ? pred__102563.cljs$core$IFn$_invoke$arity$2(G__102566,G__102567) : pred__102563.call(null,G__102566,G__102567));
})())){
return "Flaw";
} else {
if(cljs.core.truth_((function (){var G__102568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ideal"], null);
var G__102569 = expr__102564;
return (pred__102563.cljs$core$IFn$_invoke$arity$2 ? pred__102563.cljs$core$IFn$_invoke$arity$2(G__102568,G__102569) : pred__102563.call(null,G__102568,G__102569));
})())){
return "Ideal";
} else {
if(cljs.core.truth_((function (){var G__102570 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attribute"], null);
var G__102571 = expr__102564;
return (pred__102563.cljs$core$IFn$_invoke$arity$2 ? pred__102563.cljs$core$IFn$_invoke$arity$2(G__102570,G__102571) : pred__102563.call(null,G__102570,G__102571));
})())){
return "Attribute";
} else {
if(cljs.core.truth_((function (){var G__102572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Goal"], null);
var G__102573 = expr__102564;
return (pred__102563.cljs$core$IFn$_invoke$arity$2 ? pred__102563.cljs$core$IFn$_invoke$arity$2(G__102572,G__102573) : pred__102563.call(null,G__102572,G__102573));
})())){
return "Goal";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102564)].join('')));
}
}
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),["Grants +Quality +Power to checks that ",(function (){var pred__102585 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102586 = properties;
if(cljs.core.truth_((function (){var G__102588 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Flaw"], null);
var G__102589 = expr__102586;
return (pred__102585.cljs$core$IFn$_invoke$arity$2 ? pred__102585.cljs$core$IFn$_invoke$arity$2(G__102588,G__102589) : pred__102585.call(null,G__102588,G__102589));
})())){
return "give in to your flaw. Checks that attempt to resist giving in to your flaw gain penalties equal to the Quality and Power of your flaw. ";
} else {
if(cljs.core.truth_((function (){var G__102590 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ideal"], null);
var G__102591 = expr__102586;
return (pred__102585.cljs$core$IFn$_invoke$arity$2 ? pred__102585.cljs$core$IFn$_invoke$arity$2(G__102590,G__102591) : pred__102585.call(null,G__102590,G__102591));
})())){
return "promote or exemplify your ideal. Checks that run counter to your ideal gain penalties equal to the Quality and Power of your ideal. ";
} else {
if(cljs.core.truth_((function (){var G__102592 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attribute"], null);
var G__102593 = expr__102586;
return (pred__102585.cljs$core$IFn$_invoke$arity$2 ? pred__102585.cljs$core$IFn$_invoke$arity$2(G__102592,G__102593) : pred__102585.call(null,G__102592,G__102593));
})())){
return "utilize your attribute. Checks that are opposed by your attribute gain penalties equal to the Quality and Power of your attribute. ";
} else {
if(cljs.core.truth_((function (){var G__102594 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Goal"], null);
var G__102595 = expr__102586;
return (pred__102585.cljs$core$IFn$_invoke$arity$2 ? pred__102585.cljs$core$IFn$_invoke$arity$2(G__102594,G__102595) : pred__102585.call(null,G__102594,G__102595));
})())){
return "attempt to make progress towards your goal. Checks that sacrifice progress towards your goal gain penalties equal to the Quality and Power of your goal. ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102586)].join('')));
}
}
}
}
})(),"Circumstances may cause multiple traits to apply bonuses or penalties to a check. Ultimately, it is up to the DM's discretion whether a trait grants a bonus or penalty."].join('')], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102557_103561,G__102558_103562) : re_frame.core.reg_sub.call(null,G__102557_103561,G__102558_103562));
var G__102596_103569 = new cljs.core.Keyword(null,"martial-prowess","martial-prowess",-114945878);
var G__102597_103570 = (function (db,p__102598){
var vec__102599 = p__102598;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102599,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102599,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__102611 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102612 = properties;
if(cljs.core.truth_((function (){var G__102614 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__102615 = expr__102612;
return (pred__102611.cljs$core$IFn$_invoke$arity$2 ? pred__102611.cljs$core$IFn$_invoke$arity$2(G__102614,G__102615) : pred__102611.call(null,G__102614,G__102615));
})())){
return "Light Martial Prowess";
} else {
if(cljs.core.truth_((function (){var G__102616 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__102617 = expr__102612;
return (pred__102611.cljs$core$IFn$_invoke$arity$2 ? pred__102611.cljs$core$IFn$_invoke$arity$2(G__102616,G__102617) : pred__102611.call(null,G__102616,G__102617));
})())){
return "Medium Martial Prowess";
} else {
if(cljs.core.truth_((function (){var G__102618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__102619 = expr__102612;
return (pred__102611.cljs$core$IFn$_invoke$arity$2 ? pred__102611.cljs$core$IFn$_invoke$arity$2(G__102618,G__102619) : pred__102611.call(null,G__102618,G__102619));
})())){
return "Heavy Martial Prowess";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102612)].join('')));
}
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__102629 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102630 = properties;
if(cljs.core.truth_((function (){var G__102632 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Light"], null);
var G__102633 = expr__102630;
return (pred__102629.cljs$core$IFn$_invoke$arity$2 ? pred__102629.cljs$core$IFn$_invoke$arity$2(G__102632,G__102633) : pred__102629.call(null,G__102632,G__102633));
})())){
return "Gain +Quality +Power on checks that use a light weapon, shield, or armor.";
} else {
if(cljs.core.truth_((function (){var G__102634 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medium"], null);
var G__102635 = expr__102630;
return (pred__102629.cljs$core$IFn$_invoke$arity$2 ? pred__102629.cljs$core$IFn$_invoke$arity$2(G__102634,G__102635) : pred__102629.call(null,G__102634,G__102635));
})())){
return "Gain +Quality +Power on checks that use a medium weapon, shield, or armor.";
} else {
if(cljs.core.truth_((function (){var G__102636 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Heavy"], null);
var G__102637 = expr__102630;
return (pred__102629.cljs$core$IFn$_invoke$arity$2 ? pred__102629.cljs$core$IFn$_invoke$arity$2(G__102636,G__102637) : pred__102629.call(null,G__102636,G__102637));
})())){
return "Gain +Quality +Power on checks that use a heavy weapon, shield, or armor.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102630)].join('')));
}
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102596_103569,G__102597_103570) : re_frame.core.reg_sub.call(null,G__102596_103569,G__102597_103570));
var G__102638_103582 = new cljs.core.Keyword(null,"sneak-attack","sneak-attack",-1793099532);
var G__102639_103583 = (function (db,p__102640){
var vec__102641 = p__102640;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102641,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102641,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Sneak Attack",new cljs.core.Keyword(null,"description","description",-1428560544),"Gain +Quality +Power on checks using weapons that benefit from your martial prowess to attack a creature who is unaware of your presence or who you are hidden from."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102638_103582,G__102639_103583) : re_frame.core.reg_sub.call(null,G__102638_103582,G__102639_103583));
var G__102644_103586 = new cljs.core.Keyword(null,"combat-maneuvers","combat-maneuvers",-846517552);
var G__102645_103587 = (function (db,p__102646){
var vec__102647 = p__102646;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102647,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102647,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Combat Maneuvers",new cljs.core.Keyword(null,"description","description",-1428560544),"When you make a melee attack against a targeted creature, you can choose to make one of the following combat maneuvers instead: trip, shove, or disarm. If your trip attack is successful, the target falls prone. If the shove is successful, the target is moved to an adjacent zone. If the disarm is successful, the target's weapon falls to the ground in the zone that they occupy."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102644_103586,G__102645_103587) : re_frame.core.reg_sub.call(null,G__102644_103586,G__102645_103587));
var G__102650_103590 = new cljs.core.Keyword(null,"protective-stance","protective-stance",1339958411);
var G__102651_103591 = (function (db,p__102652){
var vec__102653 = p__102652;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102653,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102653,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Protective Stance",new cljs.core.Keyword(null,"description","description",-1428560544),"If a target creature within the same zone as you is attacked and you are wielding a shield for which you have martial prowess, you can make a defense check against that attack. The result of your defense check is inflicted as a flat penalty on the attack roll. The target of the attack may still make their own defense check if needed."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102650_103590,G__102651_103591) : re_frame.core.reg_sub.call(null,G__102650_103590,G__102651_103591));
var G__102656_103594 = new cljs.core.Keyword(null,"knowledge","knowledge",1188023043);
var G__102657_103595 = (function (db,p__102658){
var vec__102659 = p__102658;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102659,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102659,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Recall Information",new cljs.core.Keyword(null,"description","description",-1428560544),["Recollection +Quality +Power on checks to determine your knowledge on ",(function (){var pred__102673 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102674 = properties;
if(cljs.core.truth_((function (){var G__102676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religion"], null);
var G__102677 = expr__102674;
return (pred__102673.cljs$core$IFn$_invoke$arity$2 ? pred__102673.cljs$core$IFn$_invoke$arity$2(G__102676,G__102677) : pred__102673.call(null,G__102676,G__102677));
})())){
return "religious matters.";
} else {
if(cljs.core.truth_((function (){var G__102678 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aethrology"], null);
var G__102679 = expr__102674;
return (pred__102673.cljs$core$IFn$_invoke$arity$2 ? pred__102673.cljs$core$IFn$_invoke$arity$2(G__102678,G__102679) : pred__102673.call(null,G__102678,G__102679));
})())){
return "aethereal matters.";
} else {
if(cljs.core.truth_((function (){var G__102680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medicine"], null);
var G__102681 = expr__102674;
return (pred__102673.cljs$core$IFn$_invoke$arity$2 ? pred__102673.cljs$core$IFn$_invoke$arity$2(G__102680,G__102681) : pred__102673.call(null,G__102680,G__102681));
})())){
return "medicinal matters.";
} else {
if(cljs.core.truth_((function (){var G__102682 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["History"], null);
var G__102683 = expr__102674;
return (pred__102673.cljs$core$IFn$_invoke$arity$2 ? pred__102673.cljs$core$IFn$_invoke$arity$2(G__102682,G__102683) : pred__102673.call(null,G__102682,G__102683));
})())){
return "historical matters.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102674)].join('')));
}
}
}
}
})()].join('')], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102656_103594,G__102657_103595) : re_frame.core.reg_sub.call(null,G__102656_103594,G__102657_103595));
var G__102684_103601 = new cljs.core.Keyword(null,"implement-prowess","implement-prowess",-267630211);
var G__102685_103602 = (function (db,p__102686){
var vec__102687 = p__102686;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102687,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102687,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Arcane Implement Prowess",new cljs.core.Keyword(null,"description","description",-1428560544),"You know how to access the powers stored within arcane implements. Gain +Quality on checks using arcane implements."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102684_103601,G__102685_103602) : re_frame.core.reg_sub.call(null,G__102684_103601,G__102685_103602));
var G__102690_103605 = new cljs.core.Keyword(null,"relic-prowess","relic-prowess",-1221354922);
var G__102691_103606 = (function (db,p__102692){
var vec__102693 = p__102692;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102693,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102693,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Religious Relic Prowess",new cljs.core.Keyword(null,"description","description",-1428560544),"You are capable of drawing out the power resting within religious relics. Gain +Quality +Power on checks using religious relics."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102690_103605,G__102691_103606) : re_frame.core.reg_sub.call(null,G__102690_103605,G__102691_103606));
var G__102696_103607 = new cljs.core.Keyword(null,"slight-of-hand","slight-of-hand",971131650);
var G__102697_103608 = (function (db,p__102698){
var vec__102699 = p__102698;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102699,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102699,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Sleight of Hand",new cljs.core.Keyword(null,"description","description",-1428560544),"Coordination +Quality +Power to checks attempting to plant or lift and object from someone or when attempting to secretly hide or retrieve an object on your person."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102696_103607,G__102697_103608) : re_frame.core.reg_sub.call(null,G__102696_103607,G__102697_103608));
var G__102702_103613 = new cljs.core.Keyword(null,"lockpicking","lockpicking",-1008040736);
var G__102703_103614 = (function (db,p__102704){
var vec__102705 = p__102704;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102705,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102705,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Lockpicking",new cljs.core.Keyword(null,"description","description",-1428560544),"Coordination +Quality +Power to checks attempting to pick a lock. You may need certain tools to make this check."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102702_103613,G__102703_103614) : re_frame.core.reg_sub.call(null,G__102702_103613,G__102703_103614));
var G__102708_103617 = new cljs.core.Keyword(null,"reputation","reputation",-898759917);
var G__102709_103618 = (function (db,p__102710){
var vec__102711 = p__102710;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102711,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102711,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Reputation",new cljs.core.Keyword(null,"description","description",-1428560544),"Gain +Quality +Power when making checks to persuade someone who is aware of your reputation."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102708_103617,G__102709_103618) : re_frame.core.reg_sub.call(null,G__102708_103617,G__102709_103618));
var G__102714_103622 = new cljs.core.Keyword(null,"membership","membership",254556333);
var G__102715_103623 = (function (db,p__102716){
var vec__102717 = p__102716;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102717,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102717,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Membership Benefits",new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__102720 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102721 = properties;
if(cljs.core.truth_((function (){var G__102723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Political"], null);
var G__102724 = expr__102721;
return (pred__102720.cljs$core$IFn$_invoke$arity$2 ? pred__102720.cljs$core$IFn$_invoke$arity$2(G__102723,G__102724) : pred__102720.call(null,G__102723,G__102724));
})())){
return "Your political connections grant you access to resources and favors. Gain +Quality +Power when making social checks with those you have political sway with.";
} else {
if(cljs.core.truth_((function (){var G__102725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religious"], null);
var G__102726 = expr__102721;
return (pred__102720.cljs$core$IFn$_invoke$arity$2 ? pred__102720.cljs$core$IFn$_invoke$arity$2(G__102725,G__102726) : pred__102720.call(null,G__102725,G__102726));
})())){
return "Your religious connections grant you access to resources, favors, lodging, and healing. Gain +Quality +Power when making social checks with those who share your religious beliefs.";
} else {
if(cljs.core.truth_((function (){var G__102727 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Guild"], null);
var G__102728 = expr__102721;
return (pred__102720.cljs$core$IFn$_invoke$arity$2 ? pred__102720.cljs$core$IFn$_invoke$arity$2(G__102727,G__102728) : pred__102720.call(null,G__102727,G__102728));
})())){
return "Your economic connections grant you access to resources and favors. Gain +Quality +Power when making social checks with your business associates.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102721)].join('')));
}
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102714_103622,G__102715_103623) : re_frame.core.reg_sub.call(null,G__102714_103622,G__102715_103623));
var G__102729_103625 = new cljs.core.Keyword(null,"relationship","relationship",670482699);
var G__102730_103626 = (function (db,p__102731){
var vec__102732 = p__102731;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102732,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102732,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Friendship",new cljs.core.Keyword(null,"description","description",-1428560544),"Your relationship gives you access to resources and favors. Gain +Quality +Power when making social checks with this individual."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102729_103625,G__102730_103626) : re_frame.core.reg_sub.call(null,G__102729_103625,G__102730_103626));
var G__102735_103628 = new cljs.core.Keyword(null,"potion","potion",1292791805);
var G__102736_103629 = (function (db,p__102737){
var vec__102738 = p__102737;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102738,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102738,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__102741 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102742 = properties;
if(cljs.core.truth_((function (){var G__102744 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Healing"], null);
var G__102745 = expr__102742;
return (pred__102741.cljs$core$IFn$_invoke$arity$2 ? pred__102741.cljs$core$IFn$_invoke$arity$2(G__102744,G__102745) : pred__102741.call(null,G__102744,G__102745));
})())){
return "Cure Wounds";
} else {
return "Drink Potion";
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__102746 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102747 = properties;
if(cljs.core.truth_((function (){var G__102749 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Healing"], null);
var G__102750 = expr__102747;
return (pred__102746.cljs$core$IFn$_invoke$arity$2 ? pred__102746.cljs$core$IFn$_invoke$arity$2(G__102749,G__102750) : pred__102746.call(null,G__102749,G__102750));
})())){
return "When consumed, this potion heals 1 point of damage and grants +1d on healing checks for the physical domain.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102747)].join('')));
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102735_103628,G__102736_103629) : re_frame.core.reg_sub.call(null,G__102735_103628,G__102736_103629));
var G__102751_103633 = new cljs.core.Keyword(null,"poison","poison",566911550);
var G__102752_103634 = (function (db,p__102753){
var vec__102754 = p__102753;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102754,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102754,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Inflict Poison",new cljs.core.Keyword(null,"description","description",-1428560544),"When ingested, the infected creature must make a physical healing check with a Target Number of 6. If they fail, then they take -1d -2 on all of their checks for 1d4 hours. If they succeed, then they only take -1d on all of their checks for the next hour. Contains 3 doses which can be applied through ingesting food or drink that contains the poison or the user can apply the poison to a weapon that deals piercing or slashing damage and hit the creature with the weapon."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102751_103633,G__102752_103634) : re_frame.core.reg_sub.call(null,G__102751_103633,G__102752_103634));
var G__102757_103636 = new cljs.core.Keyword(null,"tool","tool",-1298696470);
var G__102758_103637 = (function (db,p__102759){
var vec__102760 = p__102759;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102760,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102760,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Utilize Tool",new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__102763 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102764 = properties;
if(cljs.core.truth_((function (){var G__102766 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Climbing"], null);
var G__102767 = expr__102764;
return (pred__102763.cljs$core$IFn$_invoke$arity$2 ? pred__102763.cljs$core$IFn$_invoke$arity$2(G__102766,G__102767) : pred__102763.call(null,G__102766,G__102767));
})())){
return "Gain +Quality +Power on checks attempting to climb walls, cliffs, trees, etc.";
} else {
if(cljs.core.truth_((function (){var G__102768 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Larceny"], null);
var G__102769 = expr__102764;
return (pred__102763.cljs$core$IFn$_invoke$arity$2 ? pred__102763.cljs$core$IFn$_invoke$arity$2(G__102768,G__102769) : pred__102763.call(null,G__102768,G__102769));
})())){
return "Gain +Quality +Power on checks attempting to open doors and locks or to disarm traps and devices while using these tools.";
} else {
return "You use the tool!";
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102757_103636,G__102758_103637) : re_frame.core.reg_sub.call(null,G__102757_103636,G__102758_103637));
var G__102770_103639 = new cljs.core.Keyword(null,"book","book",-918152214);
var G__102771_103640 = (function (db,p__102772){
var vec__102773 = p__102772;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102773,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102773,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var pred__102776 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102777 = properties;
if(cljs.core.truth_((function (){var G__102779 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religious"], null);
var G__102780 = expr__102777;
return (pred__102776.cljs$core$IFn$_invoke$arity$2 ? pred__102776.cljs$core$IFn$_invoke$arity$2(G__102779,G__102780) : pred__102776.call(null,G__102779,G__102780));
})())){
return "Prayer of Healing";
} else {
if(cljs.core.truth_((function (){var G__102781 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medicinal"], null);
var G__102782 = expr__102777;
return (pred__102776.cljs$core$IFn$_invoke$arity$2 ? pred__102776.cljs$core$IFn$_invoke$arity$2(G__102781,G__102782) : pred__102776.call(null,G__102781,G__102782));
})())){
return "Common Treatments";
} else {
if(cljs.core.truth_((function (){var G__102783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aethereal"], null);
var G__102784 = expr__102777;
return (pred__102776.cljs$core$IFn$_invoke$arity$2 ? pred__102776.cljs$core$IFn$_invoke$arity$2(G__102783,G__102784) : pred__102776.call(null,G__102783,G__102784));
})())){
return "Arcane Knowledge";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102777)].join('')));
}
}
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var pred__102785 = modular_roleplaying_framework.db_CRUD.matches_QMARK_;
var expr__102786 = properties;
if(cljs.core.truth_((function (){var G__102788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religious"], null);
var G__102789 = expr__102786;
return (pred__102785.cljs$core$IFn$_invoke$arity$2 ? pred__102785.cljs$core$IFn$_invoke$arity$2(G__102788,G__102789) : pred__102785.call(null,G__102788,G__102789));
})())){
return "Exertion +Quality +Power with a Target Number of 5 to pray over a flame to imbue it with the healing powers of Heilm. On a success, the flame heals a number of physical, spiritual, and mental wounds equal to the result of the check at the rate of 1 wound per hour and can be distributed among any number of creatures. On a failure, you take a number of spiritual wounds equal to the amount that you failed by. This prayer can only be made once per day.";
} else {
if(cljs.core.truth_((function (){var G__102790 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Medicinal"], null);
var G__102791 = expr__102786;
return (pred__102785.cljs$core$IFn$_invoke$arity$2 ? pred__102785.cljs$core$IFn$_invoke$arity$2(G__102790,G__102791) : pred__102785.call(null,G__102790,G__102791));
})())){
return "Concentration +Quality +Power on checks using herbs from the Four Duchies to treat wounds or illnesses.";
} else {
if(cljs.core.truth_((function (){var G__102792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aethereal"], null);
var G__102793 = expr__102786;
return (pred__102785.cljs$core$IFn$_invoke$arity$2 ? pred__102785.cljs$core$IFn$_invoke$arity$2(G__102792,G__102793) : pred__102785.call(null,G__102792,G__102793));
})())){
return "Gain +Quality +Power on checks that attempting to understand or use objects, text, or rituals that are of Eldari origin.";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__102786)].join('')));
}
}
}
})()], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102770_103639,G__102771_103640) : re_frame.core.reg_sub.call(null,G__102770_103639,G__102771_103640));
var G__102794_103644 = new cljs.core.Keyword(null,"coin","coin",-227557189);
var G__102795_103645 = (function (db,p__102796){
var vec__102797 = p__102796;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102797,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102797,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Gold",new cljs.core.Keyword(null,"description","description",-1428560544),"Gold is a standard unit of exchange for goods and services. It may also be used to influence the outcomes of persuasion checks depending on the recipient's disposition towards bribery."], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102794_103644,G__102795_103645) : re_frame.core.reg_sub.call(null,G__102794_103644,G__102795_103645));
var G__102800_103646 = new cljs.core.Keyword(null,"feature-title","feature-title",2026798069);
var G__102801_103647 = (function (db,p__102802){
var vec__102803 = p__102802;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102803,(0),null);
var feature = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102803,(1),null);
var resource_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102803,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__102806 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [feature,resource_properties], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__102806) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__102806));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102800_103646,G__102801_103647) : re_frame.core.reg_sub.call(null,G__102800_103646,G__102801_103647));
var G__102807_103648 = new cljs.core.Keyword(null,"feature-details","feature-details",96542810);
var G__102808_103649 = (function (db,p__102809){
var vec__102810 = p__102809;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102810,(0),null);
var feature = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102810,(1),null);
var resource_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102810,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__102813 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [feature,resource_properties], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__102813) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__102813));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102807_103648,G__102808_103649) : re_frame.core.reg_sub.call(null,G__102807_103648,G__102808_103649));
var G__102814_103650 = new cljs.core.Keyword(null,"heritage-details","heritage-details",517842258);
var G__102815_103651 = (function (db,p__102816){
var vec__102817 = p__102816;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102817,(0),null);
var heritage_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102817,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),heritage_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102814_103650,G__102815_103651) : re_frame.core.reg_sub.call(null,G__102814_103650,G__102815_103651));
var G__102820_103652 = new cljs.core.Keyword(null,"heritage-resources","heritage-resources",-1286324504);
var G__102821_103653 = (function (db,p__102822){
var vec__102823 = p__102822;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102823,(0),null);
var heritage_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102823,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),heritage_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102820_103652,G__102821_103653) : re_frame.core.reg_sub.call(null,G__102820_103652,G__102821_103653));
var G__102826_103654 = new cljs.core.Keyword(null,"heritage-features","heritage-features",-1746727718);
var G__102827_103655 = (function (db,p__102828){
var vec__102829 = p__102828;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102829,(0),null);
var heritage_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102829,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),heritage_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102826_103654,G__102827_103655) : re_frame.core.reg_sub.call(null,G__102826_103654,G__102827_103655));
var G__102832_103656 = new cljs.core.Keyword(null,"role-details","role-details",-772961800);
var G__102833_103657 = (function (db,p__102834){
var vec__102835 = p__102834;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102835,(0),null);
var role_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102835,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),role_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102832_103656,G__102833_103657) : re_frame.core.reg_sub.call(null,G__102832_103656,G__102833_103657));
var G__102838_103659 = new cljs.core.Keyword(null,"role-resources","role-resources",819423685);
var G__102839_103660 = (function (db,p__102840){
var vec__102841 = p__102840;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102841,(0),null);
var role_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102841,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),role_id,new cljs.core.Keyword(null,"resources","resources",1632806811)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102838_103659,G__102839_103660) : re_frame.core.reg_sub.call(null,G__102838_103659,G__102839_103660));
var G__102844_103661 = new cljs.core.Keyword(null,"role-features","role-features",459150250);
var G__102845_103662 = (function (db,p__102846){
var vec__102847 = p__102846;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102847,(0),null);
var role_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102847,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),role_id,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102844_103661,G__102845_103662) : re_frame.core.reg_sub.call(null,G__102844_103661,G__102845_103662));
var G__102850_103663 = new cljs.core.Keyword(null,"overview","overview",-435037267);
var G__102851_103664 = (function (db,p__102852){
var vec__102853 = p__102852;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102853,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102853,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"overview","overview",-435037267)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102850_103663,G__102851_103664) : re_frame.core.reg_sub.call(null,G__102850_103663,G__102851_103664));
var G__102856_103665 = new cljs.core.Keyword(null,"base-dice-pool","base-dice-pool",-2000848897);
var G__102857_103666 = (function (db,p__102858){
var vec__102859 = p__102858;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102859,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102859,(1),null);
var skillbilities_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102859,(2),null);
var skills = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102859,(3),null);
var end = ((skillbilities_QMARK_ === true)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"base-dice-pool-variations","base-dice-pool-variations",-2068843221),new cljs.core.Keyword(null,"skillbilities","skillbilities",-571801846)], null)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"base-dice-pool-variations","base-dice-pool-variations",-2068843221),new cljs.core.Keyword(null,"skills-and-abilities","skills-and-abilities",-4029936)], null)));
var example = ((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(1)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"dice-pool-example","dice-pool-example",1828496004),new cljs.core.Keyword(null,"simple-skillbilities","simple-skillbilities",-1733944826)], null)):((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"dice-pool-example","dice-pool-example",1828496004),new cljs.core.Keyword(null,"full-skillbilities","full-skillbilities",-451516920)], null)):((((skillbilities_QMARK_ === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"dice-pool-example","dice-pool-example",1828496004),new cljs.core.Keyword(null,"skills-and-abilities","skills-and-abilities",-4029936)], null)):null)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"base-dice-pool","base-dice-pool",-2000848897)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example)].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102856_103665,G__102857_103666) : re_frame.core.reg_sub.call(null,G__102856_103665,G__102857_103666));
var G__102862_103667 = new cljs.core.Keyword(null,"bonuses-and-penalties","bonuses-and-penalties",606200007);
var G__102863_103668 = (function (db,p__102864){
var vec__102865 = p__102864;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102865,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102865,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"bonuses-and-penalties","bonuses-and-penalties",606200007)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102862_103667,G__102863_103668) : re_frame.core.reg_sub.call(null,G__102862_103667,G__102863_103668));
var G__102868_103669 = new cljs.core.Keyword(null,"splintering","splintering",-1707231919);
var G__102869_103670 = (function (db,p__102870){
var vec__102871 = p__102870;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102871,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102871,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"splintering","splintering",-1707231919)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102868_103669,G__102869_103670) : re_frame.core.reg_sub.call(null,G__102868_103669,G__102869_103670));
var G__102874_103671 = new cljs.core.Keyword(null,"caution","caution",1823615934);
var G__102875_103672 = (function (db,p__102876){
var vec__102877 = p__102876;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102877,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102877,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"caution","caution",1823615934)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102874_103671,G__102875_103672) : re_frame.core.reg_sub.call(null,G__102874_103671,G__102875_103672));
var G__102880_103673 = new cljs.core.Keyword(null,"passive-checks","passive-checks",-2057161289);
var G__102881_103674 = (function (db,p__102882){
var vec__102883 = p__102882;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102883,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102883,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"passive-checks","passive-checks",-2057161289)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102880_103673,G__102881_103674) : re_frame.core.reg_sub.call(null,G__102880_103673,G__102881_103674));
var G__102886_103675 = new cljs.core.Keyword(null,"actions","actions",-812656882);
var G__102887_103676 = (function (db,p__102888){
var vec__102889 = p__102888;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102889,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102889,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"actions","actions",-812656882)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102886_103675,G__102887_103676) : re_frame.core.reg_sub.call(null,G__102886_103675,G__102887_103676));
var G__102892_103677 = new cljs.core.Keyword(null,"moments","moments",-1541189836);
var G__102893_103678 = (function (db,p__102894){
var vec__102895 = p__102894;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102895,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102895,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"moments","moments",-1541189836)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102892_103677,G__102893_103678) : re_frame.core.reg_sub.call(null,G__102892_103677,G__102893_103678));
var G__102898_103679 = new cljs.core.Keyword(null,"rounds","rounds",1157201084);
var G__102899_103680 = (function (db,p__102900){
var vec__102901 = p__102900;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102901,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102901,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"rounds","rounds",1157201084)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102898_103679,G__102899_103680) : re_frame.core.reg_sub.call(null,G__102898_103679,G__102899_103680));
var G__102904_103681 = new cljs.core.Keyword(null,"complex-moments","complex-moments",1664654174);
var G__102905_103682 = (function (db,p__102906){
var vec__102907 = p__102906;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102907,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102907,(1),null);
var encounter_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102907,(2),null);
var splintering = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102907,(3),null);
var caution = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102907,(4),null);
var G__102910 = encounter_style;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("turn-based",G__102910)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("simultaneous",G__102910)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"beginning","beginning",77824097)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,splintering)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,caution))))?["may modify their dice pool at this point. ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,splintering))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"splintering","splintering",-1707231919)], null))):null),"Modifications to your dice pool may cause your actions to be resolved earlier or later than they otherwise would be. "].join(''):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"default","default",-1987822328)], null)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"moments","moments",-1541189836),new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),G__102910)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["ERROR: Unrecognized encounter style in item: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join('')], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__102910)].join('')));

}
}
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102904_103681,G__102905_103682) : re_frame.core.reg_sub.call(null,G__102904_103681,G__102905_103682));
var G__102911_103683 = new cljs.core.Keyword(null,"complex-rounds","complex-rounds",-1215067926);
var G__102912_103684 = (function (db,p__102913){
var vec__102914 = p__102913;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102914,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102914,(1),null);
var encounter_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102914,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(encounter_style),new cljs.core.Keyword(null,"rounds","rounds",1157201084)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102911_103683,G__102912_103684) : re_frame.core.reg_sub.call(null,G__102911_103683,G__102912_103684));
var G__102917_103685 = new cljs.core.Keyword(null,"injuries","injuries",-299210720);
var G__102918_103686 = (function (db,p__102919){
var vec__102920 = p__102919;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102920,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102920,(1),null);
var damage_tiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102920,(2),null);
var recovery_tiers_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102920,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(damage_tiers,(1))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers], null));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers,new cljs.core.Keyword(null,"beginning","beginning",77824097)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((recovery_tiers_QMARK_ === true)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers,new cljs.core.Keyword(null,"recovery-tiers?","recovery-tiers?",1974730784)], null)):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"injuries","injuries",-299210720),damage_tiers,new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102917_103685,G__102918_103686) : re_frame.core.reg_sub.call(null,G__102917_103685,G__102918_103686));
var G__102923_103687 = new cljs.core.Keyword(null,"conditions","conditions",-1647236270);
var G__102924_103688 = (function (db,p__102925){
var vec__102926 = p__102925;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102926,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102926,(1),null);
var condition_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102926,(2),null);
var skills = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102926,(3),null);
var abilities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102926,(4),null);
var skillbilities_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102926,(5),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.Keyword(null,"beginning","beginning",77824097)], null))),((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(1)))))?"that domain's skill. ":((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"that domain's continuation skill. ":((((skillbilities_QMARK_ === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"that domain's continuation skill with it's resilience ability. ":null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(condition_style)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102923_103687,G__102924_103688) : re_frame.core.reg_sub.call(null,G__102923_103687,G__102924_103688));
var G__102929_103689 = new cljs.core.Keyword(null,"recovery","recovery",-2004840646);
var G__102930_103690 = (function (db,p__102931){
var vec__102932 = p__102931;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102932,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102932,(1),null);
var damage_tiers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102932,(2),null);
var recovery_tiers_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102932,(3),null);
var recovery_times = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102932,(4),null);
var treatment_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102932,(5),null);
var skills = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102932,(6),null);
var abilities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102932,(7),null);
var skillbilities_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102932,(8),null);
return [((recovery_tiers_QMARK_ === false)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),damage_tiers], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"value","value",305978217)], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recovery_times,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"unit","unit",375175175)], null))),". "].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__102938 = damage_tiers;
switch (G__102938) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__102938)].join('')));

}
})())),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,treatment_QMARK_))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),new cljs.core.Keyword(null,"treatment?","treatment?",264384759)], null))),((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(1)))))?"an acuity skill check. ":((((skillbilities_QMARK_ === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"a comprehension skill check. ":((((skillbilities_QMARK_ === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(skills,(3)))))?"a comprehension skill check with the relevant domain's discipline ability. ":null)))].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),item_id,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"recovery","recovery",-2004840646),new cljs.core.Keyword(null,"ending","ending",1236735934)], null)))].join('');
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102929_103689,G__102930_103690) : re_frame.core.reg_sub.call(null,G__102929_103689,G__102930_103690));
var G__102939_103692 = new cljs.core.Keyword(null,"condition-title","condition-title",-1818530037);
var G__102940_103693 = (function (db,p__102941){
var vec__102942 = p__102941;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102942,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102942,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"title","title",636505583)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102939_103692,G__102940_103693) : re_frame.core.reg_sub.call(null,G__102939_103692,G__102940_103693));
var G__102945_103694 = new cljs.core.Keyword(null,"condition-description","condition-description",-584806753);
var G__102946_103695 = (function (db,p__102947){
var vec__102948 = p__102947;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102948,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102948,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"description","description",-1428560544)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102945_103694,G__102946_103695) : re_frame.core.reg_sub.call(null,G__102945_103694,G__102946_103695));
var G__102951_103696 = new cljs.core.Keyword(null,"condition-effects","condition-effects",1872046469);
var G__102952_103697 = (function (db,p__102953){
var vec__102954 = p__102953;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102954,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102954,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"effects","effects",-282369292)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102951_103696,G__102952_103697) : re_frame.core.reg_sub.call(null,G__102951_103696,G__102952_103697));
var G__102957_103698 = new cljs.core.Keyword(null,"condition-effect-description","condition-effect-description",-3743093);
var G__102958_103699 = (function (db,p__102959){
var vec__102960 = p__102959;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102960,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102960,(1),null);
var effect_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102960,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"effects","effects",-282369292),effect_id,new cljs.core.Keyword(null,"description","description",-1428560544)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102957_103698,G__102958_103699) : re_frame.core.reg_sub.call(null,G__102957_103698,G__102958_103699));
var G__102963_103700 = new cljs.core.Keyword(null,"condition-effect-duration","condition-effect-duration",-2101079389);
var G__102964_103701 = (function (db,p__102965){
var vec__102966 = p__102965;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102966,(0),null);
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102966,(1),null);
var effect_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102966,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),condition_id,new cljs.core.Keyword(null,"effects","effects",-282369292),effect_id,new cljs.core.Keyword(null,"duration","duration",1444101068)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102963_103700,G__102964_103701) : re_frame.core.reg_sub.call(null,G__102963_103700,G__102964_103701));
var G__102969_103702 = new cljs.core.Keyword(null,"world-overview","world-overview",-314945091);
var G__102970_103703 = (function (db,p__102971){
var vec__102972 = p__102971;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102972,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102972,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),world_id,new cljs.core.Keyword(null,"overview","overview",-435037267)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102969_103702,G__102970_103703) : re_frame.core.reg_sub.call(null,G__102969_103702,G__102970_103703));
var G__102975_103704 = new cljs.core.Keyword(null,"world-territories","world-territories",-982355734);
var G__102976_103705 = (function (db,p__102977){
var vec__102978 = p__102977;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102978,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102978,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),world_id,new cljs.core.Keyword(null,"territories","territories",-1856976391)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102975_103704,G__102976_103705) : re_frame.core.reg_sub.call(null,G__102975_103704,G__102976_103705));
var G__102981_103711 = new cljs.core.Keyword(null,"territory-civilizations","territory-civilizations",-523722954);
var G__102982_103712 = (function (db,p__102983){
var vec__102984 = p__102983;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102984,(0),null);
var territory_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102984,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),territory_id,new cljs.core.Keyword(null,"civilizations","civilizations",822016090)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102981_103711,G__102982_103712) : re_frame.core.reg_sub.call(null,G__102981_103711,G__102982_103712));
var G__102987_103713 = new cljs.core.Keyword(null,"territory-details","territory-details",323186833);
var G__102988_103714 = (function (db,p__102989){
var vec__102990 = p__102989;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102990,(0),null);
var territory_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102990,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),territory_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102987_103713,G__102988_103714) : re_frame.core.reg_sub.call(null,G__102987_103713,G__102988_103714));
var G__102993_103715 = new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185);
var G__102994_103716 = (function (db,p__102995){
var vec__102996 = p__102995;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102996,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102996,(1),null);
var territories = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections","sections",-886710106),world_id,new cljs.core.Keyword(null,"territories","territories",-1856976391)], null));
var civilizations = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(territories)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(civilizations));
} else {
var G__103717 = cljs.core.rest(territories);
var G__103718 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,civilizations,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(territories),new cljs.core.Keyword(null,"civilizations","civilizations",822016090)], null)));
territories = G__103717;
civilizations = G__103718;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102993_103715,G__102994_103716) : re_frame.core.reg_sub.call(null,G__102993_103715,G__102994_103716));
var G__102999_103720 = new cljs.core.Keyword(null,"world-lore","world-lore",-1851264915);
var G__103000_103721 = (function (db,p__103001){
var vec__103002 = p__103001;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103002,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103002,(1),null);
var civilizations = (function (){var G__103006 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__103006) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__103006));
})();
var lore = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(lore));
} else {
var G__103722 = cljs.core.rest(civilizations);
var G__103723 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,lore,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"lore","lore",-10530558)], null)));
civilizations = G__103722;
lore = G__103723;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__102999_103720,G__103000_103721) : re_frame.core.reg_sub.call(null,G__102999_103720,G__103000_103721));
var G__103007_103724 = new cljs.core.Keyword(null,"world-organizations","world-organizations",-481549703);
var G__103008_103725 = (function (db,p__103009){
var vec__103010 = p__103009;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103010,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103010,(1),null);
var civilizations = (function (){var G__103014 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__103014) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__103014));
})();
var organizations = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(organizations));
} else {
var G__103726 = cljs.core.rest(civilizations);
var G__103727 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,organizations,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"organizations","organizations",-755443762)], null)));
civilizations = G__103726;
organizations = G__103727;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__103007_103724,G__103008_103725) : re_frame.core.reg_sub.call(null,G__103007_103724,G__103008_103725));
var G__103015_103728 = new cljs.core.Keyword(null,"world-key-figures","world-key-figures",-2094243827);
var G__103016_103729 = (function (db,p__103017){
var vec__103018 = p__103017;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103018,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103018,(1),null);
var civilizations = (function (){var G__103022 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__103022) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__103022));
})();
var key_figures = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(key_figures));
} else {
var G__103730 = cljs.core.rest(civilizations);
var G__103731 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,key_figures,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"key-figures","key-figures",-2075124028)], null)));
civilizations = G__103730;
key_figures = G__103731;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__103015_103728,G__103016_103729) : re_frame.core.reg_sub.call(null,G__103015_103728,G__103016_103729));
var G__103023_103732 = new cljs.core.Keyword(null,"world-advancements","world-advancements",2113721326);
var G__103024_103733 = (function (db,p__103025){
var vec__103026 = p__103025;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103026,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103026,(1),null);
var civilizations = (function (){var G__103030 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__103030) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__103030));
})();
var advancements = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(advancements));
} else {
var G__103734 = cljs.core.rest(civilizations);
var G__103735 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,advancements,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"advancements","advancements",32607236)], null)));
civilizations = G__103734;
advancements = G__103735;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__103023_103732,G__103024_103733) : re_frame.core.reg_sub.call(null,G__103023_103732,G__103024_103733));
var G__103031_103736 = new cljs.core.Keyword(null,"world-creatures","world-creatures",745737020);
var G__103032_103737 = (function (db,p__103033){
var vec__103034 = p__103033;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103034,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103034,(1),null);
var territories = (function (){var G__103038 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-territories","world-territories",-982355734),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__103038) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__103038));
})();
var creatures = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(territories)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(creatures));
} else {
var G__103738 = cljs.core.rest(territories);
var G__103739 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,creatures,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(territories),new cljs.core.Keyword(null,"creatures","creatures",761416150)], null)));
territories = G__103738;
creatures = G__103739;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__103031_103736,G__103032_103737) : re_frame.core.reg_sub.call(null,G__103031_103736,G__103032_103737));
var G__103039_103740 = new cljs.core.Keyword(null,"world-heritages","world-heritages",-1355127108);
var G__103040_103741 = (function (db,p__103041){
var vec__103042 = p__103041;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103042,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103042,(1),null);
var civilizations = (function (){var G__103046 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__103046) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__103046));
})();
var heritages = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(heritages));
} else {
var G__103743 = cljs.core.rest(civilizations);
var G__103744 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,heritages,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"heritages","heritages",1016532791)], null)));
civilizations = G__103743;
heritages = G__103744;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__103039_103740,G__103040_103741) : re_frame.core.reg_sub.call(null,G__103039_103740,G__103040_103741));
var G__103047_103745 = new cljs.core.Keyword(null,"world-roles","world-roles",-1495875244);
var G__103048_103746 = (function (db,p__103049){
var vec__103050 = p__103049;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103050,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103050,(1),null);
var civilizations = (function (){var G__103054 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__103054) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__103054));
})();
var roles = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(roles));
} else {
var G__103747 = cljs.core.rest(civilizations);
var G__103748 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,roles,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"roles","roles",143379530)], null)));
civilizations = G__103747;
roles = G__103748;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__103047_103745,G__103048_103746) : re_frame.core.reg_sub.call(null,G__103047_103745,G__103048_103746));
var G__103055_103749 = new cljs.core.Keyword(null,"world-resources","world-resources",368334044);
var G__103056_103750 = (function (db,p__103057){
var vec__103058 = p__103057;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103058,(0),null);
var world_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103058,(1),null);
var civilizations = (function (){var G__103062 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-civilizations","world-civilizations",1554766185),world_id], null);
return (modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1 ? modular_roleplaying_framework.db_CRUD._LT_sub.cljs$core$IFn$_invoke$arity$1(G__103062) : modular_roleplaying_framework.db_CRUD._LT_sub.call(null,G__103062));
})();
var resources = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(civilizations)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(resources));
} else {
var G__103751 = cljs.core.rest(civilizations);
var G__103752 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,resources,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(civilizations),new cljs.core.Keyword(null,"resources","resources",1632806811)], null)));
civilizations = G__103751;
resources = G__103752;
continue;
}
break;
}
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__103055_103749,G__103056_103750) : re_frame.core.reg_sub.call(null,G__103055_103749,G__103056_103750));
var G__103063_103753 = new cljs.core.Keyword(null,"civilization-details","civilization-details",281511038);
var G__103064_103754 = (function (db,p__103065){
var vec__103066 = p__103065;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103066,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103066,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"details","details",1956795411)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__103063_103753,G__103064_103754) : re_frame.core.reg_sub.call(null,G__103063_103753,G__103064_103754));
var G__103069_103755 = new cljs.core.Keyword(null,"civilization-lore","civilization-lore",-555959513);
var G__103070_103756 = (function (db,p__103071){
var vec__103072 = p__103071;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103072,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103072,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"lore","lore",-10530558)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__103069_103755,G__103070_103756) : re_frame.core.reg_sub.call(null,G__103069_103755,G__103070_103756));
var G__103075_103757 = new cljs.core.Keyword(null,"civilization-organizations","civilization-organizations",-666067443);
var G__103076_103758 = (function (db,p__103077){
var vec__103078 = p__103077;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103078,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103078,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"organizations","organizations",-755443762)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__103075_103757,G__103076_103758) : re_frame.core.reg_sub.call(null,G__103075_103757,G__103076_103758));
var G__103081_103762 = new cljs.core.Keyword(null,"civilization-key-figures","civilization-key-figures",1996035078);
var G__103082_103763 = (function (db,p__103083){
var vec__103084 = p__103083;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103084,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103084,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"key-figures","key-figures",-2075124028)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__103081_103762,G__103082_103763) : re_frame.core.reg_sub.call(null,G__103081_103762,G__103082_103763));
var G__103087_103764 = new cljs.core.Keyword(null,"civilization-advancements","civilization-advancements",1472212775);
var G__103088_103765 = (function (db,p__103089){
var vec__103090 = p__103089;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103090,(0),null);
var civilization_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103090,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),civilization_id,new cljs.core.Keyword(null,"advancements","advancements",32607236)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__103087_103764,G__103088_103765) : re_frame.core.reg_sub.call(null,G__103087_103764,G__103088_103765));

//# sourceMappingURL=modular_roleplaying_framework.db_CRUD.js.map
