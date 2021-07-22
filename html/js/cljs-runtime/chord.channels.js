goog.provide('chord.channels');
chord.channels.read_from_ws_BANG_ = (function chord$channels$read_from_ws_BANG_(ws,ch){
return (ws.onmessage = (function (ev){
var message = ev.data;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null));
}));
});
chord.channels.write_to_ws_BANG_ = (function chord$channels$write_to_ws_BANG_(ws,ch){
var c__28997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_37872){
var state_val_37873 = (state_37872[(1)]);
if((state_val_37873 === (1))){
var state_37872__$1 = state_37872;
var statearr_37875_37928 = state_37872__$1;
(statearr_37875_37928[(2)] = null);

(statearr_37875_37928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (2))){
var state_37872__$1 = state_37872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37872__$1,(4),ch);
} else {
if((state_val_37873 === (3))){
var inst_37870 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37872__$1,inst_37870);
} else {
if((state_val_37873 === (4))){
var inst_37862 = (state_37872[(7)]);
var inst_37862__$1 = (state_37872[(2)]);
var state_37872__$1 = (function (){var statearr_37878 = state_37872;
(statearr_37878[(7)] = inst_37862__$1);

return statearr_37878;
})();
if(cljs.core.truth_(inst_37862__$1)){
var statearr_37879_37930 = state_37872__$1;
(statearr_37879_37930[(1)] = (5));

} else {
var statearr_37881_37931 = state_37872__$1;
(statearr_37881_37931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (5))){
var inst_37862 = (state_37872[(7)]);
var inst_37864 = ws.send(inst_37862);
var state_37872__$1 = (function (){var statearr_37883 = state_37872;
(statearr_37883[(8)] = inst_37864);

return statearr_37883;
})();
var statearr_37885_37933 = state_37872__$1;
(statearr_37885_37933[(2)] = null);

(statearr_37885_37933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (6))){
var state_37872__$1 = state_37872;
var statearr_37887_37934 = state_37872__$1;
(statearr_37887_37934[(2)] = null);

(statearr_37887_37934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (7))){
var inst_37868 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
var statearr_37888_37935 = state_37872__$1;
(statearr_37888_37935[(2)] = inst_37868);

(statearr_37888_37935[(1)] = (3));


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
});
return (function() {
var chord$channels$write_to_ws_BANG__$_state_machine__28629__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__28629__auto____0 = (function (){
var statearr_37892 = [null,null,null,null,null,null,null,null,null];
(statearr_37892[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__28629__auto__);

(statearr_37892[(1)] = (1));

return statearr_37892;
});
var chord$channels$write_to_ws_BANG__$_state_machine__28629__auto____1 = (function (state_37872){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_37872);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e37894){var ex__28632__auto__ = e37894;
var statearr_37895_37937 = state_37872;
(statearr_37895_37937[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_37872[(4)]))){
var statearr_37897_37938 = state_37872;
(statearr_37897_37938[(1)] = cljs.core.first((state_37872[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37939 = state_37872;
state_37872 = G__37939;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__28629__auto__ = function(state_37872){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__28629__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__28629__auto____1.call(this,state_37872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$channels$write_to_ws_BANG__$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__28629__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__28629__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_37898 = f__28998__auto__();
(statearr_37898[(6)] = c__28997__auto__);

return statearr_37898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
}));

return c__28997__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37945 = arguments.length;
var i__4819__auto___37946 = (0);
while(true){
if((i__4819__auto___37946 < len__4818__auto___37945)){
args__4824__auto__.push((arguments[i__4819__auto___37946]));

var G__37947 = (i__4819__auto___37946 + (1));
i__4819__auto___37946 = G__37947;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__37906){
var vec__37907 = p__37906;
var map__37910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37907,(0),null);
var map__37910__$1 = cljs.core.__destructure_map(map__37910);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37910__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if((typeof chord !== 'undefined') && (typeof chord.channels !== 'undefined') && (typeof chord.channels.t_chord$channels37911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chord.channels.t_chord$channels37911 = (function (read_ch,write_ch,p__37906,vec__37907,map__37910,on_close,meta37912){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__37906 = p__37906;
this.vec__37907 = vec__37907;
this.map__37910 = map__37910;
this.on_close = on_close;
this.meta37912 = meta37912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.channels.t_chord$channels37911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37913,meta37912__$1){
var self__ = this;
var _37913__$1 = this;
return (new chord.channels.t_chord$channels37911(self__.read_ch,self__.write_ch,self__.p__37906,self__.vec__37907,self__.map__37910,self__.on_close,meta37912__$1));
}));

(chord.channels.t_chord$channels37911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37913){
var self__ = this;
var _37913__$1 = this;
return self__.meta37912;
}));

(chord.channels.t_chord$channels37911.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels37911.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
}));

(chord.channels.t_chord$channels37911.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels37911.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.write_ch,msg,handler);
}));

(chord.channels.t_chord$channels37911.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels37911.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_(self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_(self__.write_ch);

if(cljs.core.truth_(self__.on_close)){
return (self__.on_close.cljs$core$IFn$_invoke$arity$0 ? self__.on_close.cljs$core$IFn$_invoke$arity$0() : self__.on_close.call(null));
} else {
return null;
}
}));

(chord.channels.t_chord$channels37911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__37906","p__37906",-354783846,null),new cljs.core.Symbol(null,"vec__37907","vec__37907",-624806,null),new cljs.core.Symbol(null,"map__37910","map__37910",1545433837,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"meta37912","meta37912",-275605673,null)], null);
}));

(chord.channels.t_chord$channels37911.cljs$lang$type = true);

(chord.channels.t_chord$channels37911.cljs$lang$ctorStr = "chord.channels/t_chord$channels37911");

(chord.channels.t_chord$channels37911.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"chord.channels/t_chord$channels37911");
}));

/**
 * Positional factory function for chord.channels/t_chord$channels37911.
 */
chord.channels.__GT_t_chord$channels37911 = (function chord$channels$__GT_t_chord$channels37911(read_ch__$1,write_ch__$1,p__37906__$1,vec__37907__$1,map__37910__$2,on_close__$1,meta37912){
return (new chord.channels.t_chord$channels37911(read_ch__$1,write_ch__$1,p__37906__$1,vec__37907__$1,map__37910__$2,on_close__$1,meta37912));
});

}

return (new chord.channels.t_chord$channels37911(read_ch,write_ch,p__37906,vec__37907,map__37910__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
}));

(chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq37902){
var G__37903 = cljs.core.first(seq37902);
var seq37902__$1 = cljs.core.next(seq37902);
var G__37904 = cljs.core.first(seq37902__$1);
var seq37902__$2 = cljs.core.next(seq37902__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37903,G__37904,seq37902__$2);
}));


//# sourceMappingURL=chord.channels.js.map
