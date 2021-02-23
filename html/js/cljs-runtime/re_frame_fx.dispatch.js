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
var seq__28568 = cljs.core.seq(event);
var chunk__28569 = null;
var count__28570 = (0);
var i__28571 = (0);
while(true){
if((i__28571 < count__28570)){
var e = chunk__28569.cljs$core$IIndexed$_nth$arity$2(null,i__28571);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(e) : re_frame.core.dispatch.call(null,e));


var G__28720 = seq__28568;
var G__28721 = chunk__28569;
var G__28722 = count__28570;
var G__28723 = (i__28571 + (1));
seq__28568 = G__28720;
chunk__28569 = G__28721;
count__28570 = G__28722;
i__28571 = G__28723;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28568);
if(temp__5735__auto__){
var seq__28568__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28568__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28568__$1);
var G__28727 = cljs.core.chunk_rest(seq__28568__$1);
var G__28728 = c__4609__auto__;
var G__28729 = cljs.core.count(c__4609__auto__);
var G__28730 = (0);
seq__28568 = G__28727;
chunk__28569 = G__28728;
count__28570 = G__28729;
i__28571 = G__28730;
continue;
} else {
var e = cljs.core.first(seq__28568__$1);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(e) : re_frame.core.dispatch.call(null,e));


var G__28731 = cljs.core.next(seq__28568__$1);
var G__28732 = null;
var G__28733 = (0);
var G__28734 = (0);
seq__28568 = G__28731;
chunk__28569 = G__28732;
count__28570 = G__28733;
i__28571 = G__28734;
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
var seq__28583 = cljs.core.seq((function (){var G__28673 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__28673],null));
} else {
return G__28673;
}
})());
var chunk__28584 = null;
var count__28585 = (0);
var i__28586 = (0);
while(true){
if((i__28586 < count__28585)){
var map__28682 = chunk__28584.cljs$core$IIndexed$_nth$arity$2(null,i__28586);
var map__28682__$1 = (((((!((map__28682 == null))))?(((((map__28682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28682):map__28682);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28682__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28682__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28682__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28682__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__28688 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__28688.cljs$core$IFn$_invoke$arity$1 ? fexpr__28688.cljs$core$IFn$_invoke$arity$1(action) : fexpr__28688.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__28583,chunk__28584,count__28585,i__28586,map__28682,map__28682__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__28583,chunk__28584,count__28585,i__28586,map__28682,map__28682__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___28738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___28738)){
var map__28691_28739 = temp__5735__auto___28738;
var map__28691_28740__$1 = (((((!((map__28691_28739 == null))))?(((((map__28691_28739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28691_28739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28691_28739):map__28691_28739);
var action_28741__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28691_28740__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_28742__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28691_28740__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_28741__$1,event_28742__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__28743 = seq__28583;
var G__28744 = chunk__28584;
var G__28745 = count__28585;
var G__28746 = (i__28586 + (1));
seq__28583 = G__28743;
chunk__28584 = G__28744;
count__28585 = G__28745;
i__28586 = G__28746;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28583);
if(temp__5735__auto__){
var seq__28583__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28583__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28583__$1);
var G__28747 = cljs.core.chunk_rest(seq__28583__$1);
var G__28748 = c__4609__auto__;
var G__28749 = cljs.core.count(c__4609__auto__);
var G__28750 = (0);
seq__28583 = G__28747;
chunk__28584 = G__28748;
count__28585 = G__28749;
i__28586 = G__28750;
continue;
} else {
var map__28694 = cljs.core.first(seq__28583__$1);
var map__28694__$1 = (((((!((map__28694 == null))))?(((((map__28694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28694):map__28694);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28694__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28694__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28694__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28694__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__28705 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__28705.cljs$core$IFn$_invoke$arity$1 ? fexpr__28705.cljs$core$IFn$_invoke$arity$1(action) : fexpr__28705.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__28583,chunk__28584,count__28585,i__28586,map__28694,map__28694__$1,id,timeout,action,event,seq__28583__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__28583,chunk__28584,count__28585,i__28586,map__28694,map__28694__$1,id,timeout,action,event,seq__28583__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___28763__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___28763__$1)){
var map__28713_28764 = temp__5735__auto___28763__$1;
var map__28713_28765__$1 = (((((!((map__28713_28764 == null))))?(((((map__28713_28764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28713_28764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28713_28764):map__28713_28764);
var action_28766__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28713_28765__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_28767__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28713_28765__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_28766__$1,event_28767__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__28772 = cljs.core.next(seq__28583__$1);
var G__28773 = null;
var G__28774 = (0);
var G__28775 = (0);
seq__28583 = G__28772;
chunk__28584 = G__28773;
count__28585 = G__28774;
i__28586 = G__28775;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__28715_28777 = new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020);
var G__28716_28778 = re_frame_fx.dispatch.dispatch_debounce;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__28715_28777,G__28716_28778) : re_frame.core.reg_fx.call(null,G__28715_28777,G__28716_28778));

//# sourceMappingURL=re_frame_fx.dispatch.js.map
