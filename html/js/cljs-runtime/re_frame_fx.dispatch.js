goog.provide('re_frame_fx.dispatch');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame_fx.dispatch.deferred_actions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frame_fx.dispatch.dispatch_debounce = (function re_frame_fx$dispatch$dispatch_debounce(dispatch_map_or_seq){
var cancel_timeout = (function (id){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto__)){
var deferred = temp__5735__auto__;
clearTimeout(new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(deferred));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame_fx.dispatch.deferred_actions,cljs.core.dissoc,id);
} else {
return null;
}
});
var run_action = (function (action,event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),action)){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),action)){
var seq__37826 = cljs.core.seq(event);
var chunk__37827 = null;
var count__37828 = (0);
var i__37829 = (0);
while(true){
if((i__37829 < count__37828)){
var e = chunk__37827.cljs$core$IIndexed$_nth$arity$2(null,i__37829);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(e) : re_frame.core.dispatch.call(null,e));


var G__37887 = seq__37826;
var G__37888 = chunk__37827;
var G__37889 = count__37828;
var G__37890 = (i__37829 + (1));
seq__37826 = G__37887;
chunk__37827 = G__37888;
count__37828 = G__37889;
i__37829 = G__37890;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37826);
if(temp__5735__auto__){
var seq__37826__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37826__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37826__$1);
var G__37896 = cljs.core.chunk_rest(seq__37826__$1);
var G__37897 = c__4609__auto__;
var G__37898 = cljs.core.count(c__4609__auto__);
var G__37899 = (0);
seq__37826 = G__37896;
chunk__37827 = G__37897;
count__37828 = G__37898;
i__37829 = G__37899;
continue;
} else {
var e = cljs.core.first(seq__37826__$1);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(e) : re_frame.core.dispatch.call(null,e));


var G__37901 = cljs.core.next(seq__37826__$1);
var G__37902 = null;
var G__37903 = (0);
var G__37904 = (0);
seq__37826 = G__37901;
chunk__37827 = G__37902;
count__37828 = G__37903;
i__37829 = G__37904;
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
}
});
var seq__37840 = cljs.core.seq((function (){var G__37864 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__37864],null));
} else {
return G__37864;
}
})());
var chunk__37841 = null;
var count__37842 = (0);
var i__37843 = (0);
while(true){
if((i__37843 < count__37842)){
var map__37865 = chunk__37841.cljs$core$IIndexed$_nth$arity$2(null,i__37843);
var map__37865__$1 = (((((!((map__37865 == null))))?(((((map__37865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37865):map__37865);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37865__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37865__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37865__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37865__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__37867 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__37867.cljs$core$IFn$_invoke$arity$1 ? fexpr__37867.cljs$core$IFn$_invoke$arity$1(action) : fexpr__37867.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__37840,chunk__37841,count__37842,i__37843,map__37865,map__37865__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__37840,chunk__37841,count__37842,i__37843,map__37865,map__37865__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___37932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___37932)){
var map__37868_37936 = temp__5735__auto___37932;
var map__37868_37937__$1 = (((((!((map__37868_37936 == null))))?(((((map__37868_37936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37868_37936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37868_37936):map__37868_37936);
var action_37938__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37868_37937__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_37939__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37868_37937__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_37938__$1,event_37939__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__37970 = seq__37840;
var G__37971 = chunk__37841;
var G__37972 = count__37842;
var G__37973 = (i__37843 + (1));
seq__37840 = G__37970;
chunk__37841 = G__37971;
count__37842 = G__37972;
i__37843 = G__37973;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37840);
if(temp__5735__auto__){
var seq__37840__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37840__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37840__$1);
var G__37987 = cljs.core.chunk_rest(seq__37840__$1);
var G__37988 = c__4609__auto__;
var G__37989 = cljs.core.count(c__4609__auto__);
var G__37990 = (0);
seq__37840 = G__37987;
chunk__37841 = G__37988;
count__37842 = G__37989;
i__37843 = G__37990;
continue;
} else {
var map__37870 = cljs.core.first(seq__37840__$1);
var map__37870__$1 = (((((!((map__37870 == null))))?(((((map__37870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37870):map__37870);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37870__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37870__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37870__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37870__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__37872 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__37872.cljs$core$IFn$_invoke$arity$1 ? fexpr__37872.cljs$core$IFn$_invoke$arity$1(action) : fexpr__37872.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__37840,chunk__37841,count__37842,i__37843,map__37870,map__37870__$1,id,timeout,action,event,seq__37840__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__37840,chunk__37841,count__37842,i__37843,map__37870,map__37870__$1,id,timeout,action,event,seq__37840__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38013__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38013__$1)){
var map__37875_38019 = temp__5735__auto___38013__$1;
var map__37875_38020__$1 = (((((!((map__37875_38019 == null))))?(((((map__37875_38019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37875_38019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37875_38019):map__37875_38019);
var action_38021__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37875_38020__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38022__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37875_38020__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38021__$1,event_38022__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38030 = cljs.core.next(seq__37840__$1);
var G__38031 = null;
var G__38032 = (0);
var G__38033 = (0);
seq__37840 = G__38030;
chunk__37841 = G__38031;
count__37842 = G__38032;
i__37843 = G__38033;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__37879_38036 = new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020);
var G__37880_38037 = re_frame_fx.dispatch.dispatch_debounce;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__37879_38036,G__37880_38037) : re_frame.core.reg_fx.call(null,G__37879_38036,G__37880_38037));

//# sourceMappingURL=re_frame_fx.dispatch.js.map
