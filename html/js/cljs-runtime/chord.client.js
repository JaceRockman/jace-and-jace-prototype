goog.provide('chord.client');
chord.client.close_event__GT_maybe_error = (function chord$client$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),ev.reason,new cljs.core.Keyword(null,"code","code",1586293142),ev.code], null);
}
});
chord.client.create_ws = (function chord$client$create_ws(url,opts){
if(cljs.core.truth_((function (){var and__4210__auto__ = (typeof require !== 'undefined');
if(and__4210__auto__){
try{return require("ws");
}catch (e38466){var e = e38466;
return false;
}} else {
return and__4210__auto__;
}
})())){
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
var args__4824__auto__ = [];
var len__4818__auto___38647 = arguments.length;
var i__4819__auto___38648 = (0);
while(true){
if((i__4819__auto___38648 < len__4818__auto___38647)){
args__4824__auto__.push((arguments[i__4819__auto___38648]));

var G__38649 = (i__4819__auto___38648 + (1));
i__4819__auto___38648 = G__38649;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__38472){
var vec__38473 = p__38472;
var map__38476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38473,(0),null);
var map__38476__$1 = cljs.core.__destructure_map(map__38476);
var opts = map__38476__$1;
var read_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38476__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38476__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38476__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var ws_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38476__$1,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643));
var web_socket = chord.client.create_ws(ws_url,ws_opts);
var map__38477 = chord.format.wrap_format(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__4212__auto__ = read_ch;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),(function (){var or__4212__auto__ = write_ch;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})()], null),opts);
var map__38477__$1 = cljs.core.__destructure_map(map__38477);
var read_ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38477__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38477__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var open_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var close_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
(web_socket.binaryType = "arraybuffer");

chord.channels.read_from_ws_BANG_(web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_(web_socket,write_ch__$1);

(web_socket.onopen = (function (p1__38467_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(open_ch,p1__38467_SHARP_);
}));

(web_socket.onclose = (function (p1__38468_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(close_ch,p1__38468_SHARP_);
}));

var ws_chan = chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic(read_ch__$1,write_ch__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return web_socket.close();
})], null)], 0));
var initial_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__28997__auto___38650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_38551){
var state_val_38552 = (state_38551[(1)]);
if((state_val_38552 === (7))){
var inst_38541 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
var statearr_38557_38651 = state_38551__$1;
(statearr_38557_38651[(2)] = inst_38541);

(statearr_38557_38651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (20))){
var state_38551__$1 = state_38551;
var statearr_38558_38652 = state_38551__$1;
(statearr_38558_38652[(2)] = null);

(statearr_38558_38652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (1))){
var inst_38478 = false;
var state_38551__$1 = (function (){var statearr_38563 = state_38551;
(statearr_38563[(7)] = inst_38478);

return statearr_38563;
})();
var statearr_38564_38653 = state_38551__$1;
(statearr_38564_38653[(2)] = null);

(statearr_38564_38653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (4))){
var inst_38487 = (state_38551[(8)]);
var inst_38493 = (state_38551[(9)]);
var inst_38495 = (state_38551[(10)]);
var inst_38493__$1 = (state_38551[(2)]);
var inst_38494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38493__$1,(0),null);
var inst_38495__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38493__$1,(1),null);
var inst_38496 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38495__$1,inst_38487);
var state_38551__$1 = (function (){var statearr_38568 = state_38551;
(statearr_38568[(11)] = inst_38494);

(statearr_38568[(9)] = inst_38493__$1);

(statearr_38568[(10)] = inst_38495__$1);

return statearr_38568;
})();
if(inst_38496){
var statearr_38569_38655 = state_38551__$1;
(statearr_38569_38655[(1)] = (5));

} else {
var statearr_38570_38658 = state_38551__$1;
(statearr_38570_38658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (15))){
var inst_38526 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
var statearr_38571_38659 = state_38551__$1;
(statearr_38571_38659[(2)] = inst_38526);

(statearr_38571_38659[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (21))){
var inst_38537 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
var statearr_38572_38660 = state_38551__$1;
(statearr_38572_38660[(2)] = inst_38537);

(statearr_38572_38660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (13))){
var state_38551__$1 = state_38551;
var statearr_38577_38661 = state_38551__$1;
(statearr_38577_38661[(2)] = null);

(statearr_38577_38661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (6))){
var inst_38488 = (state_38551[(12)]);
var inst_38495 = (state_38551[(10)]);
var inst_38510 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38495,inst_38488);
var state_38551__$1 = state_38551;
if(inst_38510){
var statearr_38578_38662 = state_38551__$1;
(statearr_38578_38662[(1)] = (9));

} else {
var statearr_38579_38663 = state_38551__$1;
(statearr_38579_38663[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (17))){
var state_38551__$1 = state_38551;
var statearr_38583_38664 = state_38551__$1;
(statearr_38583_38664[(2)] = initial_ch);

(statearr_38583_38664[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (3))){
var inst_38543 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38551__$1,inst_38543);
} else {
if((state_val_38552 === (12))){
var inst_38478 = (state_38551[(7)]);
var state_38551__$1 = state_38551;
if(cljs.core.truth_(inst_38478)){
var statearr_38588_38665 = state_38551__$1;
(statearr_38588_38665[(1)] = (16));

} else {
var statearr_38589_38666 = state_38551__$1;
(statearr_38589_38666[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (2))){
var inst_38487 = (state_38551[(8)]);
var inst_38488 = (state_38551[(12)]);
var inst_38487__$1 = open_ch;
var inst_38488__$1 = close_ch;
var inst_38489 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38490 = [inst_38487__$1,inst_38488__$1];
var inst_38491 = (new cljs.core.PersistentVector(null,2,(5),inst_38489,inst_38490,null));
var state_38551__$1 = (function (){var statearr_38594 = state_38551;
(statearr_38594[(8)] = inst_38487__$1);

(statearr_38594[(12)] = inst_38488__$1);

return statearr_38594;
})();
return cljs.core.async.ioc_alts_BANG_(state_38551__$1,(4),inst_38491);
} else {
if((state_val_38552 === (19))){
var inst_38494 = (state_38551[(11)]);
var state_38551__$1 = state_38551;
var statearr_38595_38667 = state_38551__$1;
(statearr_38595_38667[(2)] = inst_38494);

(statearr_38595_38667[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (11))){
var inst_38539 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
var statearr_38596_38668 = state_38551__$1;
(statearr_38596_38668[(2)] = inst_38539);

(statearr_38596_38668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (9))){
var inst_38493 = (state_38551[(9)]);
var inst_38516 = (state_38551[(13)]);
var inst_38515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38493,(0),null);
var inst_38516__$1 = chord.client.close_event__GT_maybe_error(inst_38515);
var state_38551__$1 = (function (){var statearr_38603 = state_38551;
(statearr_38603[(13)] = inst_38516__$1);

return statearr_38603;
})();
if(cljs.core.truth_(inst_38516__$1)){
var statearr_38604_38669 = state_38551__$1;
(statearr_38604_38669[(1)] = (12));

} else {
var statearr_38605_38670 = state_38551__$1;
(statearr_38605_38670[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (5))){
var inst_38493 = (state_38551[(9)]);
var inst_38501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38493,(0),null);
var inst_38502 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_38503 = [ws_chan];
var inst_38504 = cljs.core.PersistentHashMap.fromArrays(inst_38502,inst_38503);
var state_38551__$1 = (function (){var statearr_38610 = state_38551;
(statearr_38610[(14)] = inst_38501);

return statearr_38610;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38551__$1,(8),initial_ch,inst_38504);
} else {
if((state_val_38552 === (14))){
var inst_38529 = (state_38551[(2)]);
var inst_38530 = cljs.core.async.close_BANG_(ws_chan);
var inst_38531 = cljs.core.async.close_BANG_(initial_ch);
var state_38551__$1 = (function (){var statearr_38615 = state_38551;
(statearr_38615[(15)] = inst_38530);

(statearr_38615[(16)] = inst_38529);

return statearr_38615;
})();
var statearr_38616_38672 = state_38551__$1;
(statearr_38616_38672[(2)] = inst_38531);

(statearr_38616_38672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (16))){
var state_38551__$1 = state_38551;
var statearr_38617_38673 = state_38551__$1;
(statearr_38617_38673[(2)] = read_ch__$1);

(statearr_38617_38673[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (10))){
var inst_38495 = (state_38551[(10)]);
var inst_38533 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38495,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_38551__$1 = state_38551;
if(inst_38533){
var statearr_38618_38674 = state_38551__$1;
(statearr_38618_38674[(1)] = (19));

} else {
var statearr_38619_38675 = state_38551__$1;
(statearr_38619_38675[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (18))){
var inst_38516 = (state_38551[(13)]);
var inst_38521 = (state_38551[(2)]);
var inst_38522 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_38523 = [inst_38516];
var inst_38524 = cljs.core.PersistentHashMap.fromArrays(inst_38522,inst_38523);
var state_38551__$1 = state_38551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38551__$1,(15),inst_38521,inst_38524);
} else {
if((state_val_38552 === (8))){
var inst_38506 = (state_38551[(2)]);
var inst_38507 = cljs.core.async.close_BANG_(initial_ch);
var inst_38478 = true;
var state_38551__$1 = (function (){var statearr_38620 = state_38551;
(statearr_38620[(17)] = inst_38506);

(statearr_38620[(18)] = inst_38507);

(statearr_38620[(7)] = inst_38478);

return statearr_38620;
})();
var statearr_38621_38676 = state_38551__$1;
(statearr_38621_38676[(2)] = null);

(statearr_38621_38676[(1)] = (2));


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
var chord$client$state_machine__28629__auto__ = null;
var chord$client$state_machine__28629__auto____0 = (function (){
var statearr_38623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38623[(0)] = chord$client$state_machine__28629__auto__);

(statearr_38623[(1)] = (1));

return statearr_38623;
});
var chord$client$state_machine__28629__auto____1 = (function (state_38551){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_38551);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e38631){var ex__28632__auto__ = e38631;
var statearr_38632_38677 = state_38551;
(statearr_38632_38677[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_38551[(4)]))){
var statearr_38633_38678 = state_38551;
(statearr_38633_38678[(1)] = cljs.core.first((state_38551[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38679 = state_38551;
state_38551 = G__38679;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
chord$client$state_machine__28629__auto__ = function(state_38551){
switch(arguments.length){
case 0:
return chord$client$state_machine__28629__auto____0.call(this);
case 1:
return chord$client$state_machine__28629__auto____1.call(this,state_38551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__28629__auto____0;
chord$client$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__28629__auto____1;
return chord$client$state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_38638 = f__28998__auto__();
(statearr_38638[(6)] = c__28997__auto___38650);

return statearr_38638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
}));


return initial_ch;
}));

(chord.client.ws_ch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(chord.client.ws_ch.cljs$lang$applyTo = (function (seq38469){
var G__38470 = cljs.core.first(seq38469);
var seq38469__$1 = cljs.core.next(seq38469);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38470,seq38469__$1);
}));


//# sourceMappingURL=chord.client.js.map
