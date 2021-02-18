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
var _STAR_current_trace_STAR__orig_val__37111 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37112 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37112);

try{try{var seq__37117 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37118 = null;
var count__37119 = (0);
var i__37120 = (0);
while(true){
if((i__37120 < count__37119)){
var vec__37137 = chunk__37118.cljs$core$IIndexed$_nth$arity$2(null,i__37120);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37137,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37137,(1),null);
var temp__5733__auto___37237 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37237)){
var effect_fn_37238 = temp__5733__auto___37237;
(effect_fn_37238.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37238.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37238.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37243 = seq__37117;
var G__37244 = chunk__37118;
var G__37245 = count__37119;
var G__37246 = (i__37120 + (1));
seq__37117 = G__37243;
chunk__37118 = G__37244;
count__37119 = G__37245;
i__37120 = G__37246;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37117);
if(temp__5735__auto__){
var seq__37117__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37117__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37117__$1);
var G__37248 = cljs.core.chunk_rest(seq__37117__$1);
var G__37249 = c__4609__auto__;
var G__37250 = cljs.core.count(c__4609__auto__);
var G__37251 = (0);
seq__37117 = G__37248;
chunk__37118 = G__37249;
count__37119 = G__37250;
i__37120 = G__37251;
continue;
} else {
var vec__37146 = cljs.core.first(seq__37117__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37146,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37146,(1),null);
var temp__5733__auto___37254 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37254)){
var effect_fn_37255 = temp__5733__auto___37254;
(effect_fn_37255.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37255.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37255.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37258 = cljs.core.next(seq__37117__$1);
var G__37259 = null;
var G__37260 = (0);
var G__37261 = (0);
seq__37117 = G__37258;
chunk__37118 = G__37259;
count__37119 = G__37260;
i__37120 = G__37261;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__36657__auto___37262 = re_frame.interop.now();
var duration__36658__auto___37263 = (end__36657__auto___37262 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36658__auto___37263,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__36657__auto___37262);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37111);
}} else {
var seq__37150 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37151 = null;
var count__37152 = (0);
var i__37153 = (0);
while(true){
if((i__37153 < count__37152)){
var vec__37161 = chunk__37151.cljs$core$IIndexed$_nth$arity$2(null,i__37153);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37161,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37161,(1),null);
var temp__5733__auto___37267 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37267)){
var effect_fn_37269 = temp__5733__auto___37267;
(effect_fn_37269.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37269.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37269.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37273 = seq__37150;
var G__37274 = chunk__37151;
var G__37275 = count__37152;
var G__37276 = (i__37153 + (1));
seq__37150 = G__37273;
chunk__37151 = G__37274;
count__37152 = G__37275;
i__37153 = G__37276;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37150);
if(temp__5735__auto__){
var seq__37150__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37150__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37150__$1);
var G__37278 = cljs.core.chunk_rest(seq__37150__$1);
var G__37279 = c__4609__auto__;
var G__37280 = cljs.core.count(c__4609__auto__);
var G__37281 = (0);
seq__37150 = G__37278;
chunk__37151 = G__37279;
count__37152 = G__37280;
i__37153 = G__37281;
continue;
} else {
var vec__37164 = cljs.core.first(seq__37150__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37164,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37164,(1),null);
var temp__5733__auto___37283 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37283)){
var effect_fn_37284 = temp__5733__auto___37283;
(effect_fn_37284.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37284.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37284.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37287 = cljs.core.next(seq__37150__$1);
var G__37288 = null;
var G__37289 = (0);
var G__37290 = (0);
seq__37150 = G__37287;
chunk__37151 = G__37288;
count__37152 = G__37289;
i__37153 = G__37290;
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
var seq__37173 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37174 = null;
var count__37175 = (0);
var i__37176 = (0);
while(true){
if((i__37176 < count__37175)){
var map__37191 = chunk__37174.cljs$core$IIndexed$_nth$arity$2(null,i__37176);
var map__37191__$1 = (((((!((map__37191 == null))))?(((((map__37191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37191):map__37191);
var effect = map__37191__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37191__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37191__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__37173,chunk__37174,count__37175,i__37176,map__37191,map__37191__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__37173,chunk__37174,count__37175,i__37176,map__37191,map__37191__$1,effect,ms,dispatch))
,ms);
}


var G__37304 = seq__37173;
var G__37305 = chunk__37174;
var G__37306 = count__37175;
var G__37307 = (i__37176 + (1));
seq__37173 = G__37304;
chunk__37174 = G__37305;
count__37175 = G__37306;
i__37176 = G__37307;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37173);
if(temp__5735__auto__){
var seq__37173__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37173__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37173__$1);
var G__37308 = cljs.core.chunk_rest(seq__37173__$1);
var G__37309 = c__4609__auto__;
var G__37310 = cljs.core.count(c__4609__auto__);
var G__37311 = (0);
seq__37173 = G__37308;
chunk__37174 = G__37309;
count__37175 = G__37310;
i__37176 = G__37311;
continue;
} else {
var map__37194 = cljs.core.first(seq__37173__$1);
var map__37194__$1 = (((((!((map__37194 == null))))?(((((map__37194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37194):map__37194);
var effect = map__37194__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37194__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37194__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__37173,chunk__37174,count__37175,i__37176,map__37194,map__37194__$1,effect,ms,dispatch,seq__37173__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__37173,chunk__37174,count__37175,i__37176,map__37194,map__37194__$1,effect,ms,dispatch,seq__37173__$1,temp__5735__auto__))
,ms);
}


var G__37323 = cljs.core.next(seq__37173__$1);
var G__37324 = null;
var G__37325 = (0);
var G__37326 = (0);
seq__37173 = G__37323;
chunk__37174 = G__37324;
count__37175 = G__37325;
i__37176 = G__37326;
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
var seq__37204 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37205 = null;
var count__37206 = (0);
var i__37207 = (0);
while(true){
if((i__37207 < count__37206)){
var event = chunk__37205.cljs$core$IIndexed$_nth$arity$2(null,i__37207);
re_frame.router.dispatch(event);


var G__37333 = seq__37204;
var G__37334 = chunk__37205;
var G__37335 = count__37206;
var G__37336 = (i__37207 + (1));
seq__37204 = G__37333;
chunk__37205 = G__37334;
count__37206 = G__37335;
i__37207 = G__37336;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37204);
if(temp__5735__auto__){
var seq__37204__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37204__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37204__$1);
var G__37344 = cljs.core.chunk_rest(seq__37204__$1);
var G__37345 = c__4609__auto__;
var G__37346 = cljs.core.count(c__4609__auto__);
var G__37347 = (0);
seq__37204 = G__37344;
chunk__37205 = G__37345;
count__37206 = G__37346;
i__37207 = G__37347;
continue;
} else {
var event = cljs.core.first(seq__37204__$1);
re_frame.router.dispatch(event);


var G__37350 = cljs.core.next(seq__37204__$1);
var G__37351 = null;
var G__37352 = (0);
var G__37353 = (0);
seq__37204 = G__37350;
chunk__37205 = G__37351;
count__37206 = G__37352;
i__37207 = G__37353;
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
var seq__37224 = cljs.core.seq(value);
var chunk__37225 = null;
var count__37226 = (0);
var i__37227 = (0);
while(true){
if((i__37227 < count__37226)){
var event = chunk__37225.cljs$core$IIndexed$_nth$arity$2(null,i__37227);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__37358 = seq__37224;
var G__37359 = chunk__37225;
var G__37360 = count__37226;
var G__37361 = (i__37227 + (1));
seq__37224 = G__37358;
chunk__37225 = G__37359;
count__37226 = G__37360;
i__37227 = G__37361;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37224);
if(temp__5735__auto__){
var seq__37224__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37224__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37224__$1);
var G__37363 = cljs.core.chunk_rest(seq__37224__$1);
var G__37364 = c__4609__auto__;
var G__37365 = cljs.core.count(c__4609__auto__);
var G__37366 = (0);
seq__37224 = G__37363;
chunk__37225 = G__37364;
count__37226 = G__37365;
i__37227 = G__37366;
continue;
} else {
var event = cljs.core.first(seq__37224__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__37372 = cljs.core.next(seq__37224__$1);
var G__37373 = null;
var G__37374 = (0);
var G__37375 = (0);
seq__37224 = G__37372;
chunk__37225 = G__37373;
count__37226 = G__37374;
i__37227 = G__37375;
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
