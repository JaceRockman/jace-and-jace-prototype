goog.provide('re_frame_fx.dispatch');
re_frame_fx.dispatch.deferred_actions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frame_fx.dispatch.dispatch_debounce = (function re_frame_fx$dispatch$dispatch_debounce(dispatch_map_or_seq){
var cancel_timeout = (function (id){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5753__auto__)){
var deferred = temp__5753__auto__;
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
var seq__38018 = cljs.core.seq(event);
var chunk__38019 = null;
var count__38020 = (0);
var i__38021 = (0);
while(true){
if((i__38021 < count__38020)){
var e = chunk__38019.cljs$core$IIndexed$_nth$arity$2(null,i__38021);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(e) : re_frame.core.dispatch.call(null,e));


var G__38082 = seq__38018;
var G__38083 = chunk__38019;
var G__38084 = count__38020;
var G__38085 = (i__38021 + (1));
seq__38018 = G__38082;
chunk__38019 = G__38083;
count__38020 = G__38084;
i__38021 = G__38085;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38018);
if(temp__5753__auto__){
var seq__38018__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38018__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38018__$1);
var G__38086 = cljs.core.chunk_rest(seq__38018__$1);
var G__38087 = c__4638__auto__;
var G__38088 = cljs.core.count(c__4638__auto__);
var G__38089 = (0);
seq__38018 = G__38086;
chunk__38019 = G__38087;
count__38020 = G__38088;
i__38021 = G__38089;
continue;
} else {
var e = cljs.core.first(seq__38018__$1);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(e) : re_frame.core.dispatch.call(null,e));


var G__38090 = cljs.core.next(seq__38018__$1);
var G__38091 = null;
var G__38092 = (0);
var G__38093 = (0);
seq__38018 = G__38090;
chunk__38019 = G__38091;
count__38020 = G__38092;
i__38021 = G__38093;
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
var seq__38027 = cljs.core.seq((function (){var G__38044 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__38044],null));
} else {
return G__38044;
}
})());
var chunk__38028 = null;
var count__38029 = (0);
var i__38030 = (0);
while(true){
if((i__38030 < count__38029)){
var map__38046 = chunk__38028.cljs$core$IIndexed$_nth$arity$2(null,i__38030);
var map__38046__$1 = cljs.core.__destructure_map(map__38046);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38046__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38046__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38046__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38046__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38050 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38050.cljs$core$IFn$_invoke$arity$1 ? fexpr__38050.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38050.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38027,chunk__38028,count__38029,i__38030,map__38046,map__38046__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38027,chunk__38028,count__38029,i__38030,map__38046,map__38046__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5753__auto___38096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5753__auto___38096)){
var map__38054_38097 = temp__5753__auto___38096;
var map__38054_38098__$1 = cljs.core.__destructure_map(map__38054_38097);
var action_38099__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38054_38098__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38100__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38054_38098__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38099__$1,event_38100__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38101 = seq__38027;
var G__38102 = chunk__38028;
var G__38103 = count__38029;
var G__38104 = (i__38030 + (1));
seq__38027 = G__38101;
chunk__38028 = G__38102;
count__38029 = G__38103;
i__38030 = G__38104;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38027);
if(temp__5753__auto__){
var seq__38027__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38027__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38027__$1);
var G__38105 = cljs.core.chunk_rest(seq__38027__$1);
var G__38106 = c__4638__auto__;
var G__38107 = cljs.core.count(c__4638__auto__);
var G__38108 = (0);
seq__38027 = G__38105;
chunk__38028 = G__38106;
count__38029 = G__38107;
i__38030 = G__38108;
continue;
} else {
var map__38061 = cljs.core.first(seq__38027__$1);
var map__38061__$1 = cljs.core.__destructure_map(map__38061);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38061__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38061__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38061__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38061__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38064 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38064.cljs$core$IFn$_invoke$arity$1 ? fexpr__38064.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38064.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38027,chunk__38028,count__38029,i__38030,map__38061,map__38061__$1,id,timeout,action,event,seq__38027__$1,temp__5753__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38027,chunk__38028,count__38029,i__38030,map__38061,map__38061__$1,id,timeout,action,event,seq__38027__$1,temp__5753__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5753__auto___38112__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5753__auto___38112__$1)){
var map__38076_38113 = temp__5753__auto___38112__$1;
var map__38076_38114__$1 = cljs.core.__destructure_map(map__38076_38113);
var action_38115__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38076_38114__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38116__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38076_38114__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38115__$1,event_38116__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38118 = cljs.core.next(seq__38027__$1);
var G__38119 = null;
var G__38120 = (0);
var G__38121 = (0);
seq__38027 = G__38118;
chunk__38028 = G__38119;
count__38029 = G__38120;
i__38030 = G__38121;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020),re_frame_fx.dispatch.dispatch_debounce) : re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020),re_frame_fx.dispatch.dispatch_debounce));

//# sourceMappingURL=re_frame_fx.dispatch.js.map
