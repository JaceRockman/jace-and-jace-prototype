goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__28578){
var vec__28580 = p__28578;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28580,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28580,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),(function (){var G__28597 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__28597);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__28610){
var map__28613 = p__28610;
var map__28613__$1 = (((((!((map__28613 == null))))?(((((map__28613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28613):map__28613);
var request = map__28613__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28613__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28613__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__28600_SHARP_){
var G__28634 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__28600_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28634) : re_frame.core.dispatch.call(null,G__28634));
}),(function (p1__28601_SHARP_){
var G__28635 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__28601_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28635) : re_frame.core.dispatch.call(null,G__28635));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__28639 = cljs.core.seq(seq_request_maps);
var chunk__28640 = null;
var count__28641 = (0);
var i__28642 = (0);
while(true){
if((i__28642 < count__28641)){
var request__$1 = chunk__28640.cljs$core$IIndexed$_nth$arity$2(null,i__28642);
var G__28658_28693 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__28658_28693) : ajax.core.ajax_request.call(null,G__28658_28693));


var G__28695 = seq__28639;
var G__28696 = chunk__28640;
var G__28697 = count__28641;
var G__28698 = (i__28642 + (1));
seq__28639 = G__28695;
chunk__28640 = G__28696;
count__28641 = G__28697;
i__28642 = G__28698;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28639);
if(temp__5735__auto__){
var seq__28639__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28639__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28639__$1);
var G__28700 = cljs.core.chunk_rest(seq__28639__$1);
var G__28701 = c__4609__auto__;
var G__28702 = cljs.core.count(c__4609__auto__);
var G__28703 = (0);
seq__28639 = G__28700;
chunk__28640 = G__28701;
count__28641 = G__28702;
i__28642 = G__28703;
continue;
} else {
var request__$1 = cljs.core.first(seq__28639__$1);
var G__28672_28704 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__28672_28704) : ajax.core.ajax_request.call(null,G__28672_28704));


var G__28706 = cljs.core.next(seq__28639__$1);
var G__28707 = null;
var G__28708 = (0);
var G__28709 = (0);
seq__28639 = G__28706;
chunk__28640 = G__28707;
count__28641 = G__28708;
i__28642 = G__28709;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__28677_28710 = new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714);
var G__28678_28711 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__28677_28710,G__28678_28711) : re_frame.core.reg_fx.call(null,G__28677_28710,G__28678_28711));

//# sourceMappingURL=day8.re_frame.http_fx.js.map
