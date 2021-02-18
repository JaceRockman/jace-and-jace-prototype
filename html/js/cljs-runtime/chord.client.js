goog.provide('chord.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chord.channels');
goog.require('chord.format');
chord.client.close_event__GT_maybe_error = (function chord$client$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),ev.reason,new cljs.core.Keyword(null,"code","code",1586293142),ev.code], null);
}
});
chord.client.create_ws = (function chord$client$create_ws(url,opts){
if(cljs.core.truth_((((typeof require !== 'undefined'))?(function (){try{return require("ws");
}catch (e37878){var e = e37878;
return false;
}})():false))){
var ws = require("ws");
if(cljs.core.truth_(opts)){
return (new ws(url,cljs.core.clj__GT_js(opts)));
} else {
return (new ws(url));
}
} else {
return (new WebSocket(url));

}
});
/**
 * Creates websockets connection and returns a 2-sided channel when the websocket is opened.
 * Arguments:
 *  ws-url           - (required) link to websocket service
 *  opts             - (optional) map to configure reading/writing channels
 *    :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
 *    :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
 *    :format        - (optional) data format to use on the channel, (at the moment)
 *                                either :edn (default), :json, :json-kw or :str.
 *    :ws-opts       - (optional) Other options to be passed to the websocket constructor (NodeJS only)
 *                                see https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketaddress-protocols-options
 * 
 * Usage:
 *  (:require [cljs.core.async :as a])
 * 
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437"))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
 *                                        :write-ch (a/chan (a/dropping-buffer 10))}))
 */
chord.client.ws_ch = (function chord$client$ws_ch(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38124 = arguments.length;
var i__4790__auto___38126 = (0);
while(true){
if((i__4790__auto___38126 < len__4789__auto___38124)){
args__4795__auto__.push((arguments[i__4790__auto___38126]));

var G__38130 = (i__4790__auto___38126 + (1));
i__4790__auto___38126 = G__38130;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__37891){
var vec__37892 = p__37891;
var map__37895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37892,(0),null);
var map__37895__$1 = (((((!((map__37895 == null))))?(((((map__37895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37895):map__37895);
var opts = map__37895__$1;
var read_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37895__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37895__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37895__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var ws_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37895__$1,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643));
var web_socket = chord.client.create_ws(ws_url,ws_opts);
var map__37907 = chord.format.wrap_format(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__4185__auto__ = read_ch;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),(function (){var or__4185__auto__ = write_ch;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})()], null),opts);
var map__37907__$1 = (((((!((map__37907 == null))))?(((((map__37907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37907):map__37907);
var read_ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37907__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37907__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var open_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var close_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
(web_socket.binaryType = "arraybuffer");

chord.channels.read_from_ws_BANG_(web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_(web_socket,write_ch__$1);

(web_socket.onopen = (function (p1__37881_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(open_ch,p1__37881_SHARP_);
}));

(web_socket.onclose = (function (p1__37882_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(close_ch,p1__37882_SHARP_);
}));

var ws_chan = chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic(read_ch__$1,write_ch__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return web_socket.close();
})], null)], 0));
var initial_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__28418__auto___38177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_37985){
var state_val_37986 = (state_37985[(1)]);
if((state_val_37986 === (7))){
var inst_37981 = (state_37985[(2)]);
var state_37985__$1 = state_37985;
var statearr_37991_38180 = state_37985__$1;
(statearr_37991_38180[(2)] = inst_37981);

(statearr_37991_38180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (20))){
var state_37985__$1 = state_37985;
var statearr_37997_38183 = state_37985__$1;
(statearr_37997_38183[(2)] = null);

(statearr_37997_38183[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (1))){
var inst_37909 = false;
var state_37985__$1 = (function (){var statearr_38001 = state_37985;
(statearr_38001[(7)] = inst_37909);

return statearr_38001;
})();
var statearr_38002_38191 = state_37985__$1;
(statearr_38002_38191[(2)] = null);

(statearr_38002_38191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (4))){
var inst_37926 = (state_37985[(8)]);
var inst_37924 = (state_37985[(9)]);
var inst_37924__$1 = (state_37985[(2)]);
var inst_37925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37924__$1,(0),null);
var inst_37926__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37924__$1,(1),null);
var inst_37927 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37926__$1,open_ch);
var state_37985__$1 = (function (){var statearr_38006 = state_37985;
(statearr_38006[(8)] = inst_37926__$1);

(statearr_38006[(10)] = inst_37925);

(statearr_38006[(9)] = inst_37924__$1);

return statearr_38006;
})();
if(inst_37927){
var statearr_38008_38193 = state_37985__$1;
(statearr_38008_38193[(1)] = (5));

} else {
var statearr_38009_38196 = state_37985__$1;
(statearr_38009_38196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (15))){
var inst_37962 = (state_37985[(2)]);
var state_37985__$1 = state_37985;
var statearr_38011_38207 = state_37985__$1;
(statearr_38011_38207[(2)] = inst_37962);

(statearr_38011_38207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (21))){
var inst_37977 = (state_37985[(2)]);
var state_37985__$1 = state_37985;
var statearr_38023_38213 = state_37985__$1;
(statearr_38023_38213[(2)] = inst_37977);

(statearr_38023_38213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (13))){
var state_37985__$1 = state_37985;
var statearr_38028_38214 = state_37985__$1;
(statearr_38028_38214[(2)] = null);

(statearr_38028_38214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (6))){
var inst_37926 = (state_37985[(8)]);
var inst_37946 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37926,close_ch);
var state_37985__$1 = state_37985;
if(inst_37946){
var statearr_38035_38217 = state_37985__$1;
(statearr_38035_38217[(1)] = (9));

} else {
var statearr_38038_38220 = state_37985__$1;
(statearr_38038_38220[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (17))){
var state_37985__$1 = state_37985;
var statearr_38040_38225 = state_37985__$1;
(statearr_38040_38225[(2)] = initial_ch);

(statearr_38040_38225[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (3))){
var inst_37983 = (state_37985[(2)]);
var state_37985__$1 = state_37985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37985__$1,inst_37983);
} else {
if((state_val_37986 === (12))){
var inst_37909 = (state_37985[(7)]);
var state_37985__$1 = state_37985;
if(cljs.core.truth_(inst_37909)){
var statearr_38044_38227 = state_37985__$1;
(statearr_38044_38227[(1)] = (16));

} else {
var statearr_38046_38229 = state_37985__$1;
(statearr_38046_38229[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (2))){
var inst_37920 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37921 = [open_ch,close_ch];
var inst_37922 = (new cljs.core.PersistentVector(null,2,(5),inst_37920,inst_37921,null));
var state_37985__$1 = state_37985;
return cljs.core.async.ioc_alts_BANG_(state_37985__$1,(4),inst_37922);
} else {
if((state_val_37986 === (19))){
var inst_37925 = (state_37985[(10)]);
var state_37985__$1 = state_37985;
var statearr_38052_38238 = state_37985__$1;
(statearr_38052_38238[(2)] = inst_37925);

(statearr_38052_38238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (11))){
var inst_37979 = (state_37985[(2)]);
var state_37985__$1 = state_37985;
var statearr_38055_38243 = state_37985__$1;
(statearr_38055_38243[(2)] = inst_37979);

(statearr_38055_38243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (9))){
var inst_37952 = (state_37985[(11)]);
var inst_37924 = (state_37985[(9)]);
var inst_37951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37924,(0),null);
var inst_37952__$1 = chord.client.close_event__GT_maybe_error(inst_37951);
var state_37985__$1 = (function (){var statearr_38057 = state_37985;
(statearr_38057[(11)] = inst_37952__$1);

return statearr_38057;
})();
if(cljs.core.truth_(inst_37952__$1)){
var statearr_38060_38245 = state_37985__$1;
(statearr_38060_38245[(1)] = (12));

} else {
var statearr_38061_38247 = state_37985__$1;
(statearr_38061_38247[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (5))){
var inst_37924 = (state_37985[(9)]);
var inst_37933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37924,(0),null);
var inst_37934 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_37935 = [ws_chan];
var inst_37940 = cljs.core.PersistentHashMap.fromArrays(inst_37934,inst_37935);
var state_37985__$1 = (function (){var statearr_38066 = state_37985;
(statearr_38066[(12)] = inst_37933);

return statearr_38066;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37985__$1,(8),initial_ch,inst_37940);
} else {
if((state_val_37986 === (14))){
var inst_37965 = (state_37985[(2)]);
var inst_37966 = cljs.core.async.close_BANG_(ws_chan);
var inst_37967 = cljs.core.async.close_BANG_(initial_ch);
var state_37985__$1 = (function (){var statearr_38067 = state_37985;
(statearr_38067[(13)] = inst_37965);

(statearr_38067[(14)] = inst_37966);

return statearr_38067;
})();
var statearr_38068_38259 = state_37985__$1;
(statearr_38068_38259[(2)] = inst_37967);

(statearr_38068_38259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (16))){
var state_37985__$1 = state_37985;
var statearr_38072_38266 = state_37985__$1;
(statearr_38072_38266[(2)] = read_ch__$1);

(statearr_38072_38266[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (10))){
var inst_37926 = (state_37985[(8)]);
var inst_37969 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37926,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_37985__$1 = state_37985;
if(inst_37969){
var statearr_38073_38270 = state_37985__$1;
(statearr_38073_38270[(1)] = (19));

} else {
var statearr_38074_38271 = state_37985__$1;
(statearr_38074_38271[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (18))){
var inst_37952 = (state_37985[(11)]);
var inst_37957 = (state_37985[(2)]);
var inst_37958 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_37959 = [inst_37952];
var inst_37960 = cljs.core.PersistentHashMap.fromArrays(inst_37958,inst_37959);
var state_37985__$1 = state_37985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37985__$1,(15),inst_37957,inst_37960);
} else {
if((state_val_37986 === (8))){
var inst_37942 = (state_37985[(2)]);
var inst_37943 = cljs.core.async.close_BANG_(initial_ch);
var inst_37909 = true;
var state_37985__$1 = (function (){var statearr_38079 = state_37985;
(statearr_38079[(15)] = inst_37942);

(statearr_38079[(7)] = inst_37909);

(statearr_38079[(16)] = inst_37943);

return statearr_38079;
})();
var statearr_38080_38280 = state_37985__$1;
(statearr_38080_38280[(2)] = null);

(statearr_38080_38280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var chord$client$state_machine__28058__auto__ = null;
var chord$client$state_machine__28058__auto____0 = (function (){
var statearr_38082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38082[(0)] = chord$client$state_machine__28058__auto__);

(statearr_38082[(1)] = (1));

return statearr_38082;
});
var chord$client$state_machine__28058__auto____1 = (function (state_37985){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_37985);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e38086){if((e38086 instanceof Object)){
var ex__28061__auto__ = e38086;
var statearr_38087_38285 = state_37985;
(statearr_38087_38285[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38086;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38286 = state_37985;
state_37985 = G__38286;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
chord$client$state_machine__28058__auto__ = function(state_37985){
switch(arguments.length){
case 0:
return chord$client$state_machine__28058__auto____0.call(this);
case 1:
return chord$client$state_machine__28058__auto____1.call(this,state_37985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__28058__auto____0;
chord$client$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__28058__auto____1;
return chord$client$state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_38094 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_38094[(6)] = c__28418__auto___38177);

return statearr_38094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
}));


return initial_ch;
}));

(chord.client.ws_ch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(chord.client.ws_ch.cljs$lang$applyTo = (function (seq37883){
var G__37884 = cljs.core.first(seq37883);
var seq37883__$1 = cljs.core.next(seq37883);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37884,seq37883__$1);
}));


//# sourceMappingURL=chord.client.js.map
