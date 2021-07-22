goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__38362){
var vec__38364 = p__38362;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38364,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38364,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__38370){
var map__38371 = p__38370;
var map__38371__$1 = cljs.core.__destructure_map(map__38371);
var request = map__38371__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38371__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38371__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__38368_SHARP_){
var G__38372 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__38368_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38372) : re_frame.core.dispatch.call(null,G__38372));
}),(function (p1__38369_SHARP_){
var G__38373 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__38369_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38373) : re_frame.core.dispatch.call(null,G__38373));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__38374 = cljs.core.seq(seq_request_maps);
var chunk__38375 = null;
var count__38376 = (0);
var i__38377 = (0);
while(true){
if((i__38377 < count__38376)){
var request__$1 = chunk__38375.cljs$core$IIndexed$_nth$arity$2(null,i__38377);
var G__38380_38386 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__38380_38386) : ajax.core.ajax_request.call(null,G__38380_38386));


var G__38387 = seq__38374;
var G__38388 = chunk__38375;
var G__38389 = count__38376;
var G__38390 = (i__38377 + (1));
seq__38374 = G__38387;
chunk__38375 = G__38388;
count__38376 = G__38389;
i__38377 = G__38390;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38374);
if(temp__5753__auto__){
var seq__38374__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38374__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38374__$1);
var G__38391 = cljs.core.chunk_rest(seq__38374__$1);
var G__38392 = c__4638__auto__;
var G__38393 = cljs.core.count(c__4638__auto__);
var G__38394 = (0);
seq__38374 = G__38391;
chunk__38375 = G__38392;
count__38376 = G__38393;
i__38377 = G__38394;
continue;
} else {
var request__$1 = cljs.core.first(seq__38374__$1);
var G__38385_38395 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__38385_38395) : ajax.core.ajax_request.call(null,G__38385_38395));


var G__38396 = cljs.core.next(seq__38374__$1);
var G__38397 = null;
var G__38398 = (0);
var G__38399 = (0);
seq__38374 = G__38396;
chunk__38375 = G__38397;
count__38376 = G__38398;
i__38377 = G__38399;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect) : re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect));

//# sourceMappingURL=day8.re_frame.http_fx.js.map
