goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__34991,p__34992){
var map__34994 = p__34991;
var map__34994__$1 = cljs.core.__destructure_map(map__34994);
var svc = map__34994__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34994__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34994__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34994__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__34996 = p__34992;
var map__34996__$1 = cljs.core.__destructure_map(map__34996);
var msg = map__34996__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34996__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34996__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34996__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34996__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35007,p__35008){
var map__35009 = p__35007;
var map__35009__$1 = cljs.core.__destructure_map(map__35009);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35009__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35010 = p__35008;
var map__35010__$1 = cljs.core.__destructure_map(map__35010);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35010__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35013,p__35014){
var map__35015 = p__35013;
var map__35015__$1 = cljs.core.__destructure_map(map__35015);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35015__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35015__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35016 = p__35014;
var map__35016__$1 = cljs.core.__destructure_map(map__35016);
var msg = map__35016__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35016__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35022,tid){
var map__35024 = p__35022;
var map__35024__$1 = cljs.core.__destructure_map(map__35024);
var svc = map__35024__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35024__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35031 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35032 = null;
var count__35033 = (0);
var i__35034 = (0);
while(true){
if((i__35034 < count__35033)){
var vec__35044 = chunk__35032.cljs$core$IIndexed$_nth$arity$2(null,i__35034);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35044,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35044,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35058 = seq__35031;
var G__35059 = chunk__35032;
var G__35060 = count__35033;
var G__35061 = (i__35034 + (1));
seq__35031 = G__35058;
chunk__35032 = G__35059;
count__35033 = G__35060;
i__35034 = G__35061;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35031);
if(temp__5753__auto__){
var seq__35031__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35031__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35031__$1);
var G__35062 = cljs.core.chunk_rest(seq__35031__$1);
var G__35063 = c__4638__auto__;
var G__35064 = cljs.core.count(c__4638__auto__);
var G__35065 = (0);
seq__35031 = G__35062;
chunk__35032 = G__35063;
count__35033 = G__35064;
i__35034 = G__35065;
continue;
} else {
var vec__35048 = cljs.core.first(seq__35031__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35048,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35048,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35066 = cljs.core.next(seq__35031__$1);
var G__35067 = null;
var G__35068 = (0);
var G__35069 = (0);
seq__35031 = G__35066;
chunk__35032 = G__35067;
count__35033 = G__35068;
i__35034 = G__35069;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35025_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35025_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35026_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35026_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35027_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35027_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35028_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35028_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35054){
var map__35055 = p__35054;
var map__35055__$1 = cljs.core.__destructure_map(map__35055);
var svc = map__35055__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35055__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35055__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
