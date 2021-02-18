goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
chord.channels.read_from_ws_BANG_ = (function chord$channels$read_from_ws_BANG_(ws,ch){
return (ws.onmessage = (function (ev){
var message = ev.data;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null));
}));
});
chord.channels.write_to_ws_BANG_ = (function chord$channels$write_to_ws_BANG_(ws,ch){
var c__28418__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_37742){
var state_val_37743 = (state_37742[(1)]);
if((state_val_37743 === (1))){
var state_37742__$1 = state_37742;
var statearr_37747_37781 = state_37742__$1;
(statearr_37747_37781[(2)] = null);

(statearr_37747_37781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (2))){
var state_37742__$1 = state_37742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37742__$1,(4),ch);
} else {
if((state_val_37743 === (3))){
var inst_37739 = (state_37742[(2)]);
var state_37742__$1 = state_37742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37742__$1,inst_37739);
} else {
if((state_val_37743 === (4))){
var inst_37731 = (state_37742[(7)]);
var inst_37731__$1 = (state_37742[(2)]);
var state_37742__$1 = (function (){var statearr_37748 = state_37742;
(statearr_37748[(7)] = inst_37731__$1);

return statearr_37748;
})();
if(cljs.core.truth_(inst_37731__$1)){
var statearr_37749_37785 = state_37742__$1;
(statearr_37749_37785[(1)] = (5));

} else {
var statearr_37750_37786 = state_37742__$1;
(statearr_37750_37786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (5))){
var inst_37731 = (state_37742[(7)]);
var inst_37733 = ws.send(inst_37731);
var state_37742__$1 = (function (){var statearr_37751 = state_37742;
(statearr_37751[(8)] = inst_37733);

return statearr_37751;
})();
var statearr_37752_37787 = state_37742__$1;
(statearr_37752_37787[(2)] = null);

(statearr_37752_37787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (6))){
var state_37742__$1 = state_37742;
var statearr_37753_37788 = state_37742__$1;
(statearr_37753_37788[(2)] = null);

(statearr_37753_37788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (7))){
var inst_37737 = (state_37742[(2)]);
var state_37742__$1 = state_37742;
var statearr_37754_37790 = state_37742__$1;
(statearr_37754_37790[(2)] = inst_37737);

(statearr_37754_37790[(1)] = (3));


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
var chord$channels$write_to_ws_BANG__$_state_machine__28058__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__28058__auto____0 = (function (){
var statearr_37755 = [null,null,null,null,null,null,null,null,null];
(statearr_37755[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__28058__auto__);

(statearr_37755[(1)] = (1));

return statearr_37755;
});
var chord$channels$write_to_ws_BANG__$_state_machine__28058__auto____1 = (function (state_37742){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_37742);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e37759){if((e37759 instanceof Object)){
var ex__28061__auto__ = e37759;
var statearr_37760_37791 = state_37742;
(statearr_37760_37791[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37759;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37792 = state_37742;
state_37742 = G__37792;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__28058__auto__ = function(state_37742){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__28058__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__28058__auto____1.call(this,state_37742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$channels$write_to_ws_BANG__$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__28058__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__28058__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_37761 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_37761[(6)] = c__28418__auto__);

return statearr_37761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
}));

return c__28418__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37793 = arguments.length;
var i__4790__auto___37794 = (0);
while(true){
if((i__4790__auto___37794 < len__4789__auto___37793)){
args__4795__auto__.push((arguments[i__4790__auto___37794]));

var G__37795 = (i__4790__auto___37794 + (1));
i__4790__auto___37794 = G__37795;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__37767){
var vec__37768 = p__37767;
var map__37771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37768,(0),null);
var map__37771__$1 = (((((!((map__37771 == null))))?(((((map__37771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37771):map__37771);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37771__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if((typeof chord !== 'undefined') && (typeof chord.channels !== 'undefined') && (typeof chord.channels.t_chord$channels37773 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chord.channels.t_chord$channels37773 = (function (read_ch,write_ch,p__37767,vec__37768,map__37771,on_close,meta37774){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__37767 = p__37767;
this.vec__37768 = vec__37768;
this.map__37771 = map__37771;
this.on_close = on_close;
this.meta37774 = meta37774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.channels.t_chord$channels37773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37775,meta37774__$1){
var self__ = this;
var _37775__$1 = this;
return (new chord.channels.t_chord$channels37773(self__.read_ch,self__.write_ch,self__.p__37767,self__.vec__37768,self__.map__37771,self__.on_close,meta37774__$1));
}));

(chord.channels.t_chord$channels37773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37775){
var self__ = this;
var _37775__$1 = this;
return self__.meta37774;
}));

(chord.channels.t_chord$channels37773.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels37773.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
}));

(chord.channels.t_chord$channels37773.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels37773.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.write_ch,msg,handler);
}));

(chord.channels.t_chord$channels37773.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels37773.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
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

(chord.channels.t_chord$channels37773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__37767","p__37767",1395442337,null),new cljs.core.Symbol(null,"vec__37768","vec__37768",-1989026026,null),new cljs.core.Symbol(null,"map__37771","map__37771",-1687599513,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"meta37774","meta37774",-1501883154,null)], null);
}));

(chord.channels.t_chord$channels37773.cljs$lang$type = true);

(chord.channels.t_chord$channels37773.cljs$lang$ctorStr = "chord.channels/t_chord$channels37773");

(chord.channels.t_chord$channels37773.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.channels/t_chord$channels37773");
}));

/**
 * Positional factory function for chord.channels/t_chord$channels37773.
 */
chord.channels.__GT_t_chord$channels37773 = (function chord$channels$__GT_t_chord$channels37773(read_ch__$1,write_ch__$1,p__37767__$1,vec__37768__$1,map__37771__$2,on_close__$1,meta37774){
return (new chord.channels.t_chord$channels37773(read_ch__$1,write_ch__$1,p__37767__$1,vec__37768__$1,map__37771__$2,on_close__$1,meta37774));
});

}

return (new chord.channels.t_chord$channels37773(read_ch,write_ch,p__37767,vec__37768,map__37771__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
}));

(chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq37764){
var G__37765 = cljs.core.first(seq37764);
var seq37764__$1 = cljs.core.next(seq37764);
var G__37766 = cljs.core.first(seq37764__$1);
var seq37764__$2 = cljs.core.next(seq37764__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37765,G__37766,seq37764__$2);
}));


//# sourceMappingURL=chord.channels.js.map
