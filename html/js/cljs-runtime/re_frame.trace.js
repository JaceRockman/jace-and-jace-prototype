goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__26391){
var map__26392 = p__26391;
var map__26392__$1 = (((((!((map__26392 == null))))?(((((map__26392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26392):map__26392);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26392__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26392__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26392__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26392__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__26394_26455 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__26395_26456 = null;
var count__26396_26457 = (0);
var i__26397_26458 = (0);
while(true){
if((i__26397_26458 < count__26396_26457)){
var vec__26408_26461 = chunk__26395_26456.cljs$core$IIndexed$_nth$arity$2(null,i__26397_26458);
var k_26462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26408_26461,(0),null);
var cb_26463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26408_26461,(1),null);
try{var G__26412_26465 = cljs.core.deref(re_frame.trace.traces);
(cb_26463.cljs$core$IFn$_invoke$arity$1 ? cb_26463.cljs$core$IFn$_invoke$arity$1(G__26412_26465) : cb_26463.call(null,G__26412_26465));
}catch (e26411){var e_26466 = e26411;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_26462,"while storing",cljs.core.deref(re_frame.trace.traces),e_26466], 0));
}

var G__26467 = seq__26394_26455;
var G__26468 = chunk__26395_26456;
var G__26469 = count__26396_26457;
var G__26470 = (i__26397_26458 + (1));
seq__26394_26455 = G__26467;
chunk__26395_26456 = G__26468;
count__26396_26457 = G__26469;
i__26397_26458 = G__26470;
continue;
} else {
var temp__5735__auto___26471 = cljs.core.seq(seq__26394_26455);
if(temp__5735__auto___26471){
var seq__26394_26472__$1 = temp__5735__auto___26471;
if(cljs.core.chunked_seq_QMARK_(seq__26394_26472__$1)){
var c__4609__auto___26474 = cljs.core.chunk_first(seq__26394_26472__$1);
var G__26475 = cljs.core.chunk_rest(seq__26394_26472__$1);
var G__26476 = c__4609__auto___26474;
var G__26477 = cljs.core.count(c__4609__auto___26474);
var G__26478 = (0);
seq__26394_26455 = G__26475;
chunk__26395_26456 = G__26476;
count__26396_26457 = G__26477;
i__26397_26458 = G__26478;
continue;
} else {
var vec__26413_26481 = cljs.core.first(seq__26394_26472__$1);
var k_26482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26413_26481,(0),null);
var cb_26483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26413_26481,(1),null);
try{var G__26417_26486 = cljs.core.deref(re_frame.trace.traces);
(cb_26483.cljs$core$IFn$_invoke$arity$1 ? cb_26483.cljs$core$IFn$_invoke$arity$1(G__26417_26486) : cb_26483.call(null,G__26417_26486));
}catch (e26416){var e_26487 = e26416;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_26482,"while storing",cljs.core.deref(re_frame.trace.traces),e_26487], 0));
}

var G__26489 = cljs.core.next(seq__26394_26472__$1);
var G__26490 = null;
var G__26491 = (0);
var G__26492 = (0);
seq__26394_26455 = G__26489;
chunk__26395_26456 = G__26490;
count__26396_26457 = G__26491;
i__26397_26458 = G__26492;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
