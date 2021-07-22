goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__37730 = e.target.readyState;
var fexpr__37729 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__37729.cljs$core$IFn$_invoke$arity$1 ? fexpr__37729.cljs$core$IFn$_invoke$arity$1(G__37730) : fexpr__37729.call(null,G__37730));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__37743,handler){
var map__37744 = p__37743;
var map__37744__$1 = cljs.core.__destructure_map(map__37744);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37744__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37744__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37744__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37744__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37744__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37744__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37744__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__37742_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__37742_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___37777 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___37777)){
var response_type_37778 = temp__5753__auto___37777;
(this$__$1.responseType = cljs.core.name(response_type_37778));
} else {
}

var seq__37750_37779 = cljs.core.seq(headers);
var chunk__37751_37780 = null;
var count__37752_37781 = (0);
var i__37753_37782 = (0);
while(true){
if((i__37753_37782 < count__37752_37781)){
var vec__37765_37783 = chunk__37751_37780.cljs$core$IIndexed$_nth$arity$2(null,i__37753_37782);
var k_37784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37765_37783,(0),null);
var v_37785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37765_37783,(1),null);
this$__$1.setRequestHeader(k_37784,v_37785);


var G__37786 = seq__37750_37779;
var G__37787 = chunk__37751_37780;
var G__37788 = count__37752_37781;
var G__37789 = (i__37753_37782 + (1));
seq__37750_37779 = G__37786;
chunk__37751_37780 = G__37787;
count__37752_37781 = G__37788;
i__37753_37782 = G__37789;
continue;
} else {
var temp__5753__auto___37790 = cljs.core.seq(seq__37750_37779);
if(temp__5753__auto___37790){
var seq__37750_37791__$1 = temp__5753__auto___37790;
if(cljs.core.chunked_seq_QMARK_(seq__37750_37791__$1)){
var c__4638__auto___37792 = cljs.core.chunk_first(seq__37750_37791__$1);
var G__37793 = cljs.core.chunk_rest(seq__37750_37791__$1);
var G__37794 = c__4638__auto___37792;
var G__37795 = cljs.core.count(c__4638__auto___37792);
var G__37796 = (0);
seq__37750_37779 = G__37793;
chunk__37751_37780 = G__37794;
count__37752_37781 = G__37795;
i__37753_37782 = G__37796;
continue;
} else {
var vec__37771_37797 = cljs.core.first(seq__37750_37791__$1);
var k_37798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37771_37797,(0),null);
var v_37799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37771_37797,(1),null);
this$__$1.setRequestHeader(k_37798,v_37799);


var G__37800 = cljs.core.next(seq__37750_37791__$1);
var G__37801 = null;
var G__37802 = (0);
var G__37803 = (0);
seq__37750_37779 = G__37800;
chunk__37751_37780 = G__37801;
count__37752_37781 = G__37802;
i__37753_37782 = G__37803;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4212__auto__ = body;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
