goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
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
var _STAR_current_trace_STAR__orig_val__28167 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__28168 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__28168);

try{try{var seq__28169 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__28170 = null;
var count__28171 = (0);
var i__28172 = (0);
while(true){
if((i__28172 < count__28171)){
var vec__28187 = chunk__28170.cljs$core$IIndexed$_nth$arity$2(null,i__28172);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28187,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28187,(1),null);
var temp__5733__auto___28308 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28308)){
var effect_fn_28309 = temp__5733__auto___28308;
(effect_fn_28309.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28309.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28309.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28310 = seq__28169;
var G__28311 = chunk__28170;
var G__28312 = count__28171;
var G__28313 = (i__28172 + (1));
seq__28169 = G__28310;
chunk__28170 = G__28311;
count__28171 = G__28312;
i__28172 = G__28313;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28169);
if(temp__5735__auto__){
var seq__28169__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28169__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28169__$1);
var G__28319 = cljs.core.chunk_rest(seq__28169__$1);
var G__28320 = c__4609__auto__;
var G__28321 = cljs.core.count(c__4609__auto__);
var G__28322 = (0);
seq__28169 = G__28319;
chunk__28170 = G__28320;
count__28171 = G__28321;
i__28172 = G__28322;
continue;
} else {
var vec__28190 = cljs.core.first(seq__28169__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28190,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28190,(1),null);
var temp__5733__auto___28323 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28323)){
var effect_fn_28326 = temp__5733__auto___28323;
(effect_fn_28326.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28326.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28326.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28341 = cljs.core.next(seq__28169__$1);
var G__28342 = null;
var G__28343 = (0);
var G__28344 = (0);
seq__28169 = G__28341;
chunk__28170 = G__28342;
count__28171 = G__28343;
i__28172 = G__28344;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26371__auto___28351 = re_frame.interop.now();
var duration__26372__auto___28352 = (end__26371__auto___28351 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26372__auto___28352,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26371__auto___28351);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__28167);
}} else {
var seq__28197 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__28198 = null;
var count__28199 = (0);
var i__28200 = (0);
while(true){
if((i__28200 < count__28199)){
var vec__28212 = chunk__28198.cljs$core$IIndexed$_nth$arity$2(null,i__28200);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28212,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28212,(1),null);
var temp__5733__auto___28360 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28360)){
var effect_fn_28363 = temp__5733__auto___28360;
(effect_fn_28363.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28363.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28363.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28365 = seq__28197;
var G__28366 = chunk__28198;
var G__28367 = count__28199;
var G__28368 = (i__28200 + (1));
seq__28197 = G__28365;
chunk__28198 = G__28366;
count__28199 = G__28367;
i__28200 = G__28368;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28197);
if(temp__5735__auto__){
var seq__28197__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28197__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28197__$1);
var G__28371 = cljs.core.chunk_rest(seq__28197__$1);
var G__28372 = c__4609__auto__;
var G__28373 = cljs.core.count(c__4609__auto__);
var G__28374 = (0);
seq__28197 = G__28371;
chunk__28198 = G__28372;
count__28199 = G__28373;
i__28200 = G__28374;
continue;
} else {
var vec__28217 = cljs.core.first(seq__28197__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28217,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28217,(1),null);
var temp__5733__auto___28376 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28376)){
var effect_fn_28378 = temp__5733__auto___28376;
(effect_fn_28378.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28378.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28378.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28382 = cljs.core.next(seq__28197__$1);
var G__28383 = null;
var G__28384 = (0);
var G__28385 = (0);
seq__28197 = G__28382;
chunk__28198 = G__28383;
count__28199 = G__28384;
i__28200 = G__28385;
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
var seq__28222 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28223 = null;
var count__28224 = (0);
var i__28225 = (0);
while(true){
if((i__28225 < count__28224)){
var map__28252 = chunk__28223.cljs$core$IIndexed$_nth$arity$2(null,i__28225);
var map__28252__$1 = (((((!((map__28252 == null))))?(((((map__28252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28252):map__28252);
var effect = map__28252__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28252__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28252__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__28222,chunk__28223,count__28224,i__28225,map__28252,map__28252__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__28222,chunk__28223,count__28224,i__28225,map__28252,map__28252__$1,effect,ms,dispatch))
,ms);
}


var G__28392 = seq__28222;
var G__28393 = chunk__28223;
var G__28394 = count__28224;
var G__28395 = (i__28225 + (1));
seq__28222 = G__28392;
chunk__28223 = G__28393;
count__28224 = G__28394;
i__28225 = G__28395;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28222);
if(temp__5735__auto__){
var seq__28222__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28222__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28222__$1);
var G__28397 = cljs.core.chunk_rest(seq__28222__$1);
var G__28398 = c__4609__auto__;
var G__28399 = cljs.core.count(c__4609__auto__);
var G__28400 = (0);
seq__28222 = G__28397;
chunk__28223 = G__28398;
count__28224 = G__28399;
i__28225 = G__28400;
continue;
} else {
var map__28260 = cljs.core.first(seq__28222__$1);
var map__28260__$1 = (((((!((map__28260 == null))))?(((((map__28260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28260):map__28260);
var effect = map__28260__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28260__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28260__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__28222,chunk__28223,count__28224,i__28225,map__28260,map__28260__$1,effect,ms,dispatch,seq__28222__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__28222,chunk__28223,count__28224,i__28225,map__28260,map__28260__$1,effect,ms,dispatch,seq__28222__$1,temp__5735__auto__))
,ms);
}


var G__28404 = cljs.core.next(seq__28222__$1);
var G__28405 = null;
var G__28406 = (0);
var G__28407 = (0);
seq__28222 = G__28404;
chunk__28223 = G__28405;
count__28224 = G__28406;
i__28225 = G__28407;
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
var seq__28265 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28266 = null;
var count__28267 = (0);
var i__28268 = (0);
while(true){
if((i__28268 < count__28267)){
var event = chunk__28266.cljs$core$IIndexed$_nth$arity$2(null,i__28268);
re_frame.router.dispatch(event);


var G__28412 = seq__28265;
var G__28413 = chunk__28266;
var G__28414 = count__28267;
var G__28415 = (i__28268 + (1));
seq__28265 = G__28412;
chunk__28266 = G__28413;
count__28267 = G__28414;
i__28268 = G__28415;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28265);
if(temp__5735__auto__){
var seq__28265__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28265__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28265__$1);
var G__28416 = cljs.core.chunk_rest(seq__28265__$1);
var G__28417 = c__4609__auto__;
var G__28418 = cljs.core.count(c__4609__auto__);
var G__28419 = (0);
seq__28265 = G__28416;
chunk__28266 = G__28417;
count__28267 = G__28418;
i__28268 = G__28419;
continue;
} else {
var event = cljs.core.first(seq__28265__$1);
re_frame.router.dispatch(event);


var G__28420 = cljs.core.next(seq__28265__$1);
var G__28421 = null;
var G__28422 = (0);
var G__28423 = (0);
seq__28265 = G__28420;
chunk__28266 = G__28421;
count__28267 = G__28422;
i__28268 = G__28423;
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
var seq__28281 = cljs.core.seq(value);
var chunk__28282 = null;
var count__28283 = (0);
var i__28284 = (0);
while(true){
if((i__28284 < count__28283)){
var event = chunk__28282.cljs$core$IIndexed$_nth$arity$2(null,i__28284);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__28426 = seq__28281;
var G__28427 = chunk__28282;
var G__28428 = count__28283;
var G__28429 = (i__28284 + (1));
seq__28281 = G__28426;
chunk__28282 = G__28427;
count__28283 = G__28428;
i__28284 = G__28429;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28281);
if(temp__5735__auto__){
var seq__28281__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28281__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28281__$1);
var G__28430 = cljs.core.chunk_rest(seq__28281__$1);
var G__28431 = c__4609__auto__;
var G__28432 = cljs.core.count(c__4609__auto__);
var G__28433 = (0);
seq__28281 = G__28430;
chunk__28282 = G__28431;
count__28283 = G__28432;
i__28284 = G__28433;
continue;
} else {
var event = cljs.core.first(seq__28281__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__28435 = cljs.core.next(seq__28281__$1);
var G__28436 = null;
var G__28437 = (0);
var G__28438 = (0);
seq__28281 = G__28435;
chunk__28282 = G__28436;
count__28283 = G__28437;
i__28284 = G__28438;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
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
