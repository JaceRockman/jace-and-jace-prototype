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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__36677){
var map__36678 = p__36677;
var map__36678__$1 = (((((!((map__36678 == null))))?(((((map__36678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36678):map__36678);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36678__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36678__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36678__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36678__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__36680_36707 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__36681_36708 = null;
var count__36682_36709 = (0);
var i__36683_36710 = (0);
while(true){
if((i__36683_36710 < count__36682_36709)){
var vec__36694_36711 = chunk__36681_36708.cljs$core$IIndexed$_nth$arity$2(null,i__36683_36710);
var k_36712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36694_36711,(0),null);
var cb_36713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36694_36711,(1),null);
try{var G__36698_36714 = cljs.core.deref(re_frame.trace.traces);
(cb_36713.cljs$core$IFn$_invoke$arity$1 ? cb_36713.cljs$core$IFn$_invoke$arity$1(G__36698_36714) : cb_36713.call(null,G__36698_36714));
}catch (e36697){var e_36715 = e36697;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_36712,"while storing",cljs.core.deref(re_frame.trace.traces),e_36715], 0));
}

var G__36716 = seq__36680_36707;
var G__36717 = chunk__36681_36708;
var G__36718 = count__36682_36709;
var G__36719 = (i__36683_36710 + (1));
seq__36680_36707 = G__36716;
chunk__36681_36708 = G__36717;
count__36682_36709 = G__36718;
i__36683_36710 = G__36719;
continue;
} else {
var temp__5735__auto___36720 = cljs.core.seq(seq__36680_36707);
if(temp__5735__auto___36720){
var seq__36680_36721__$1 = temp__5735__auto___36720;
if(cljs.core.chunked_seq_QMARK_(seq__36680_36721__$1)){
var c__4609__auto___36722 = cljs.core.chunk_first(seq__36680_36721__$1);
var G__36723 = cljs.core.chunk_rest(seq__36680_36721__$1);
var G__36724 = c__4609__auto___36722;
var G__36725 = cljs.core.count(c__4609__auto___36722);
var G__36726 = (0);
seq__36680_36707 = G__36723;
chunk__36681_36708 = G__36724;
count__36682_36709 = G__36725;
i__36683_36710 = G__36726;
continue;
} else {
var vec__36699_36727 = cljs.core.first(seq__36680_36721__$1);
var k_36728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36699_36727,(0),null);
var cb_36729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36699_36727,(1),null);
try{var G__36703_36730 = cljs.core.deref(re_frame.trace.traces);
(cb_36729.cljs$core$IFn$_invoke$arity$1 ? cb_36729.cljs$core$IFn$_invoke$arity$1(G__36703_36730) : cb_36729.call(null,G__36703_36730));
}catch (e36702){var e_36731 = e36702;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_36728,"while storing",cljs.core.deref(re_frame.trace.traces),e_36731], 0));
}

var G__36732 = cljs.core.next(seq__36680_36721__$1);
var G__36733 = null;
var G__36734 = (0);
var G__36735 = (0);
seq__36680_36707 = G__36732;
chunk__36681_36708 = G__36733;
count__36682_36709 = G__36734;
i__36683_36710 = G__36735;
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
