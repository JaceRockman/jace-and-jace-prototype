goog.provide('kee_frame.scroll');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('clerk.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.scroll","connection-balance","kee-frame.scroll/connection-balance",2106148751),(function (db,p__40161){
var vec__40162 = p__40161;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40162,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40162,(1),null);
var inc_or_dec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40162,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-counter","route-counter",-2049314649),new cljs.core.Keyword(null,"route","route",329891309)], null),route),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-counter","route-counter",-2049314649),new cljs.core.Keyword(null,"balance","balance",418967409)], null),inc_or_dec);
}));
kee_frame.scroll.start_BANG_ = (function kee_frame$scroll$start_BANG_(){
return clerk.core.initialize_BANG_();
});
kee_frame.scroll.monitor_requests_BANG_ = (function kee_frame$scroll$monitor_requests_BANG_(route){
clerk.core.navigate_page_BANG_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ajax.core.default_interceptors,(function (interceptors){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__40172_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("route-interceptor",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__40172_SHARP_));
}),interceptors),(function (){var G__40174 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"route-interceptor",new cljs.core.Keyword(null,"request","request",1772954723),(function (request){
var G__40175_40242 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.scroll","connection-balance","kee-frame.scroll/connection-balance",2106148751),route,cljs.core.inc], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40175_40242) : re_frame.core.dispatch.call(null,G__40175_40242));

return request;
}),new cljs.core.Keyword(null,"response","response",-1068424192),(function (response){
var G__40176_40247 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.scroll","connection-balance","kee-frame.scroll/connection-balance",2106148751),route,cljs.core.dec], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40176_40247) : re_frame.core.dispatch.call(null,G__40176_40247));

return response;
})], null);
return (ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1 ? ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1(G__40174) : ajax.core.to_interceptor.call(null,G__40174));
})());
}));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.scroll","scroll","kee-frame.scroll/scroll",-1666611933),(function (_,___$1){
reagent.core.after_render(clerk.core.after_render_BANG_);

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.scroll","poll","kee-frame.scroll/poll",-1227808225),(function (p__40188,p__40189){
var map__40190 = p__40188;
var map__40190__$1 = (((((!((map__40190 == null))))?(((((map__40190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40190):map__40190);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40190__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40191 = p__40189;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40191,(0),null);
var active_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40191,(1),null);
var counter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40191,(2),null);
var map__40201 = new cljs.core.Keyword(null,"route-counter","route-counter",-2049314649).cljs$core$IFn$_invoke$arity$1(db);
var map__40201__$1 = (((((!((map__40201 == null))))?(((((map__40201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40201):map__40201);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40201__$1,new cljs.core.Keyword(null,"route","route",329891309));
var balance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40201__$1,new cljs.core.Keyword(null,"balance","balance",418967409));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,active_route)){
if((!((balance > (0))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.scroll","scroll","kee-frame.scroll/scroll",-1666611933)], null)], null);
} else {
if((balance > (0))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(50),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.scroll","poll","kee-frame.scroll/poll",-1227808225),active_route,(counter + (1))], null)], null)], null)], null);
} else {
if(((20) < counter)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"route-counter","route-counter",-2049314649),null)], null);
} else {
return null;
}
}
}
} else {
return null;
}
}));

//# sourceMappingURL=kee_frame.scroll.js.map
