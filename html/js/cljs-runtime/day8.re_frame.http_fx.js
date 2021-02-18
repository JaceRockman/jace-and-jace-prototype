goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__38197){
var vec__38201 = p__38197;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38201,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38201,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),(function (){var G__38212 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__38212);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__38218){
var map__38221 = p__38218;
var map__38221__$1 = (((((!((map__38221 == null))))?(((((map__38221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38221):map__38221);
var request = map__38221__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38221__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38221__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__38215_SHARP_){
var G__38226 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__38215_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38226) : re_frame.core.dispatch.call(null,G__38226));
}),(function (p1__38216_SHARP_){
var G__38228 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__38216_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38228) : re_frame.core.dispatch.call(null,G__38228));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__38234 = cljs.core.seq(seq_request_maps);
var chunk__38235 = null;
var count__38236 = (0);
var i__38237 = (0);
while(true){
if((i__38237 < count__38236)){
var request__$1 = chunk__38235.cljs$core$IIndexed$_nth$arity$2(null,i__38237);
var G__38246_38287 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__38246_38287) : ajax.core.ajax_request.call(null,G__38246_38287));


var G__38293 = seq__38234;
var G__38294 = chunk__38235;
var G__38295 = count__38236;
var G__38296 = (i__38237 + (1));
seq__38234 = G__38293;
chunk__38235 = G__38294;
count__38236 = G__38295;
i__38237 = G__38296;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38234);
if(temp__5735__auto__){
var seq__38234__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38234__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38234__$1);
var G__38301 = cljs.core.chunk_rest(seq__38234__$1);
var G__38302 = c__4609__auto__;
var G__38303 = cljs.core.count(c__4609__auto__);
var G__38304 = (0);
seq__38234 = G__38301;
chunk__38235 = G__38302;
count__38236 = G__38303;
i__38237 = G__38304;
continue;
} else {
var request__$1 = cljs.core.first(seq__38234__$1);
var G__38253_38309 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__38253_38309) : ajax.core.ajax_request.call(null,G__38253_38309));


var G__38310 = cljs.core.next(seq__38234__$1);
var G__38311 = null;
var G__38312 = (0);
var G__38313 = (0);
seq__38234 = G__38310;
chunk__38235 = G__38311;
count__38236 = G__38312;
i__38237 = G__38313;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__38257_38314 = new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714);
var G__38258_38315 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__38257_38314,G__38258_38315) : re_frame.core.reg_fx.call(null,G__38257_38314,G__38258_38315));

//# sourceMappingURL=day8.re_frame.http_fx.js.map
