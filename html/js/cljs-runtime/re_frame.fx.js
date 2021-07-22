goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__37383 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37384 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37384);

try{try{var seq__37390 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37391 = null;
var count__37392 = (0);
var i__37393 = (0);
while(true){
if((i__37393 < count__37392)){
var vec__37414 = chunk__37391.cljs$core$IIndexed$_nth$arity$2(null,i__37393);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37414,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37414,(1),null);
var temp__5751__auto___37533 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37533)){
var effect_fn_37534 = temp__5751__auto___37533;
(effect_fn_37534.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37534.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37534.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37535 = seq__37390;
var G__37536 = chunk__37391;
var G__37537 = count__37392;
var G__37538 = (i__37393 + (1));
seq__37390 = G__37535;
chunk__37391 = G__37536;
count__37392 = G__37537;
i__37393 = G__37538;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37390);
if(temp__5753__auto__){
var seq__37390__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37390__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37390__$1);
var G__37539 = cljs.core.chunk_rest(seq__37390__$1);
var G__37540 = c__4638__auto__;
var G__37541 = cljs.core.count(c__4638__auto__);
var G__37542 = (0);
seq__37390 = G__37539;
chunk__37391 = G__37540;
count__37392 = G__37541;
i__37393 = G__37542;
continue;
} else {
var vec__37430 = cljs.core.first(seq__37390__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37430,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37430,(1),null);
var temp__5751__auto___37544 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37544)){
var effect_fn_37545 = temp__5751__auto___37544;
(effect_fn_37545.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37545.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37545.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37546 = cljs.core.next(seq__37390__$1);
var G__37547 = null;
var G__37548 = (0);
var G__37549 = (0);
seq__37390 = G__37546;
chunk__37391 = G__37547;
count__37392 = G__37548;
i__37393 = G__37549;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37030__auto___37551 = re_frame.interop.now();
var duration__37031__auto___37552 = (end__37030__auto___37551 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37031__auto___37552,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37030__auto___37551);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37383);
}} else {
var seq__37461 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37462 = null;
var count__37463 = (0);
var i__37464 = (0);
while(true){
if((i__37464 < count__37463)){
var vec__37490 = chunk__37462.cljs$core$IIndexed$_nth$arity$2(null,i__37464);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37490,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37490,(1),null);
var temp__5751__auto___37553 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37553)){
var effect_fn_37554 = temp__5751__auto___37553;
(effect_fn_37554.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37554.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37554.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37555 = seq__37461;
var G__37556 = chunk__37462;
var G__37557 = count__37463;
var G__37558 = (i__37464 + (1));
seq__37461 = G__37555;
chunk__37462 = G__37556;
count__37463 = G__37557;
i__37464 = G__37558;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37461);
if(temp__5753__auto__){
var seq__37461__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37461__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37461__$1);
var G__37559 = cljs.core.chunk_rest(seq__37461__$1);
var G__37560 = c__4638__auto__;
var G__37561 = cljs.core.count(c__4638__auto__);
var G__37562 = (0);
seq__37461 = G__37559;
chunk__37462 = G__37560;
count__37463 = G__37561;
i__37464 = G__37562;
continue;
} else {
var vec__37496 = cljs.core.first(seq__37461__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37496,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37496,(1),null);
var temp__5751__auto___37563 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37563)){
var effect_fn_37564 = temp__5751__auto___37563;
(effect_fn_37564.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37564.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37564.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37565 = cljs.core.next(seq__37461__$1);
var G__37566 = null;
var G__37567 = (0);
var G__37568 = (0);
seq__37461 = G__37565;
chunk__37462 = G__37566;
count__37463 = G__37567;
i__37464 = G__37568;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__37500 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37501 = null;
var count__37502 = (0);
var i__37503 = (0);
while(true){
if((i__37503 < count__37502)){
var map__37508 = chunk__37501.cljs$core$IIndexed$_nth$arity$2(null,i__37503);
var map__37508__$1 = cljs.core.__destructure_map(map__37508);
var effect = map__37508__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37508__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37508__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__37500,chunk__37501,count__37502,i__37503,map__37508,map__37508__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__37500,chunk__37501,count__37502,i__37503,map__37508,map__37508__$1,effect,ms,dispatch))
,ms);
}


var G__37571 = seq__37500;
var G__37572 = chunk__37501;
var G__37573 = count__37502;
var G__37574 = (i__37503 + (1));
seq__37500 = G__37571;
chunk__37501 = G__37572;
count__37502 = G__37573;
i__37503 = G__37574;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37500);
if(temp__5753__auto__){
var seq__37500__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37500__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37500__$1);
var G__37575 = cljs.core.chunk_rest(seq__37500__$1);
var G__37576 = c__4638__auto__;
var G__37577 = cljs.core.count(c__4638__auto__);
var G__37578 = (0);
seq__37500 = G__37575;
chunk__37501 = G__37576;
count__37502 = G__37577;
i__37503 = G__37578;
continue;
} else {
var map__37510 = cljs.core.first(seq__37500__$1);
var map__37510__$1 = cljs.core.__destructure_map(map__37510);
var effect = map__37510__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37510__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37510__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__37500,chunk__37501,count__37502,i__37503,map__37510,map__37510__$1,effect,ms,dispatch,seq__37500__$1,temp__5753__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__37500,chunk__37501,count__37502,i__37503,map__37510,map__37510__$1,effect,ms,dispatch,seq__37500__$1,temp__5753__auto__))
,ms);
}


var G__37579 = cljs.core.next(seq__37500__$1);
var G__37580 = null;
var G__37581 = (0);
var G__37582 = (0);
seq__37500 = G__37579;
chunk__37501 = G__37580;
count__37502 = G__37581;
i__37503 = G__37582;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__37511 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37512 = null;
var count__37513 = (0);
var i__37514 = (0);
while(true){
if((i__37514 < count__37513)){
var event = chunk__37512.cljs$core$IIndexed$_nth$arity$2(null,i__37514);
re_frame.router.dispatch(event);


var G__37585 = seq__37511;
var G__37586 = chunk__37512;
var G__37587 = count__37513;
var G__37588 = (i__37514 + (1));
seq__37511 = G__37585;
chunk__37512 = G__37586;
count__37513 = G__37587;
i__37514 = G__37588;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37511);
if(temp__5753__auto__){
var seq__37511__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37511__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37511__$1);
var G__37589 = cljs.core.chunk_rest(seq__37511__$1);
var G__37590 = c__4638__auto__;
var G__37591 = cljs.core.count(c__4638__auto__);
var G__37592 = (0);
seq__37511 = G__37589;
chunk__37512 = G__37590;
count__37513 = G__37591;
i__37514 = G__37592;
continue;
} else {
var event = cljs.core.first(seq__37511__$1);
re_frame.router.dispatch(event);


var G__37593 = cljs.core.next(seq__37511__$1);
var G__37594 = null;
var G__37595 = (0);
var G__37596 = (0);
seq__37511 = G__37593;
chunk__37512 = G__37594;
count__37513 = G__37595;
i__37514 = G__37596;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__37521 = cljs.core.seq(value);
var chunk__37522 = null;
var count__37523 = (0);
var i__37524 = (0);
while(true){
if((i__37524 < count__37523)){
var event = chunk__37522.cljs$core$IIndexed$_nth$arity$2(null,i__37524);
clear_event(event);


var G__37597 = seq__37521;
var G__37598 = chunk__37522;
var G__37599 = count__37523;
var G__37600 = (i__37524 + (1));
seq__37521 = G__37597;
chunk__37522 = G__37598;
count__37523 = G__37599;
i__37524 = G__37600;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37521);
if(temp__5753__auto__){
var seq__37521__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37521__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37521__$1);
var G__37601 = cljs.core.chunk_rest(seq__37521__$1);
var G__37602 = c__4638__auto__;
var G__37603 = cljs.core.count(c__4638__auto__);
var G__37604 = (0);
seq__37521 = G__37601;
chunk__37522 = G__37602;
count__37523 = G__37603;
i__37524 = G__37604;
continue;
} else {
var event = cljs.core.first(seq__37521__$1);
clear_event(event);


var G__37605 = cljs.core.next(seq__37521__$1);
var G__37606 = null;
var G__37607 = (0);
var G__37608 = (0);
seq__37521 = G__37605;
chunk__37522 = G__37606;
count__37523 = G__37607;
i__37524 = G__37608;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
