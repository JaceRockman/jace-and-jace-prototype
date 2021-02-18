goog.provide('chord.format');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cognitect.transit');

/**
 * @interface
 */
chord.format.ChordFormatter = function(){};

chord.format.freeze = (function chord$format$freeze(_,obj){
if((((!((_ == null)))) && ((!((_.chord$format$ChordFormatter$freeze$arity$2 == null)))))){
return _.chord$format$ChordFormatter$freeze$arity$2(_,obj);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (chord.format.freeze[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,obj) : m__4488__auto__.call(null,_,obj));
} else {
var m__4485__auto__ = (chord.format.freeze["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,obj) : m__4485__auto__.call(null,_,obj));
} else {
throw cljs.core.missing_protocol("ChordFormatter.freeze",_);
}
}
}
});

chord.format.thaw = (function chord$format$thaw(_,s){
if((((!((_ == null)))) && ((!((_.chord$format$ChordFormatter$thaw$arity$2 == null)))))){
return _.chord$format$ChordFormatter$thaw$arity$2(_,s);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (chord.format.thaw[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4488__auto__.call(null,_,s));
} else {
var m__4485__auto__ = (chord.format.thaw["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4485__auto__.call(null,_,s));
} else {
throw cljs.core.missing_protocol("ChordFormatter.thaw",_);
}
}
}
});

if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.formatter_STAR_ !== 'undefined')){
} else {
chord.format.formatter_STAR_ = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37780 = cljs.core.get_global_hierarchy;
return (fexpr__37780.cljs$core$IFn$_invoke$arity$0 ? fexpr__37780.cljs$core$IFn$_invoke$arity$0() : fexpr__37780.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("chord.format","formatter*"),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format37782 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format37782 = (function (_,meta37783){
this._ = _;
this.meta37783 = meta37783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format37782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37784,meta37783__$1){
var self__ = this;
var _37784__$1 = this;
return (new chord.format.t_chord$format37782(self__._,meta37783__$1));
}));

(chord.format.t_chord$format37782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37784){
var self__ = this;
var _37784__$1 = this;
return self__.meta37783;
}));

(chord.format.t_chord$format37782.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format37782.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0));
}));

(chord.format.t_chord$format37782.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
}));

(chord.format.t_chord$format37782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta37783","meta37783",-668329916,null)], null);
}));

(chord.format.t_chord$format37782.cljs$lang$type = true);

(chord.format.t_chord$format37782.cljs$lang$ctorStr = "chord.format/t_chord$format37782");

(chord.format.t_chord$format37782.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.format/t_chord$format37782");
}));

/**
 * Positional factory function for chord.format/t_chord$format37782.
 */
chord.format.__GT_t_chord$format37782 = (function chord$format$__GT_t_chord$format37782(___$1,meta37783){
return (new chord.format.t_chord$format37782(___$1,meta37783));
});

}

return (new chord.format.t_chord$format37782(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format37796 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format37796 = (function (_,meta37797){
this._ = _;
this.meta37797 = meta37797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format37796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37798,meta37797__$1){
var self__ = this;
var _37798__$1 = this;
return (new chord.format.t_chord$format37796(self__._,meta37797__$1));
}));

(chord.format.t_chord$format37796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37798){
var self__ = this;
var _37798__$1 = this;
return self__.meta37797;
}));

(chord.format.t_chord$format37796.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format37796.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js(obj));
}));

(chord.format.t_chord$format37796.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(s));
}));

(chord.format.t_chord$format37796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta37797","meta37797",1093230008,null)], null);
}));

(chord.format.t_chord$format37796.cljs$lang$type = true);

(chord.format.t_chord$format37796.cljs$lang$ctorStr = "chord.format/t_chord$format37796");

(chord.format.t_chord$format37796.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.format/t_chord$format37796");
}));

/**
 * Positional factory function for chord.format/t_chord$format37796.
 */
chord.format.__GT_t_chord$format37796 = (function chord$format$__GT_t_chord$format37796(___$1,meta37797){
return (new chord.format.t_chord$format37796(___$1,meta37797));
});

}

return (new chord.format.t_chord$format37796(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = (function (){var G__37802 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570));
return (chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1 ? chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1(G__37802) : chord.format.formatter_STAR_.call(null,G__37802));
})();
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format37804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format37804 = (function (opts,json_formatter,meta37805){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta37805 = meta37805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format37804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37806,meta37805__$1){
var self__ = this;
var _37806__$1 = this;
return (new chord.format.t_chord$format37804(self__.opts,self__.json_formatter,meta37805__$1));
}));

(chord.format.t_chord$format37804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37806){
var self__ = this;
var _37806__$1 = this;
return self__.meta37805;
}));

(chord.format.t_chord$format37804.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format37804.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze(self__.json_formatter,obj);
}));

(chord.format.t_chord$format37804.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys(chord.format.thaw(self__.json_formatter,s));
}));

(chord.format.t_chord$format37804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"json-formatter","json-formatter",-485654307,null),new cljs.core.Symbol(null,"meta37805","meta37805",-1028575681,null)], null);
}));

(chord.format.t_chord$format37804.cljs$lang$type = true);

(chord.format.t_chord$format37804.cljs$lang$ctorStr = "chord.format/t_chord$format37804");

(chord.format.t_chord$format37804.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.format/t_chord$format37804");
}));

/**
 * Positional factory function for chord.format/t_chord$format37804.
 */
chord.format.__GT_t_chord$format37804 = (function chord$format$__GT_t_chord$format37804(opts__$1,json_formatter__$1,meta37805){
return (new chord.format.t_chord$format37804(opts__$1,json_formatter__$1,meta37805));
});

}

return (new chord.format.t_chord$format37804(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format37811 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format37811 = (function (_,meta37812){
this._ = _;
this.meta37812 = meta37812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format37811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37813,meta37812__$1){
var self__ = this;
var _37813__$1 = this;
return (new chord.format.t_chord$format37811(self__._,meta37812__$1));
}));

(chord.format.t_chord$format37811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37813){
var self__ = this;
var _37813__$1 = this;
return self__.meta37812;
}));

(chord.format.t_chord$format37811.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format37811.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),obj);
}));

(chord.format.t_chord$format37811.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),s);
}));

(chord.format.t_chord$format37811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta37812","meta37812",1012671197,null)], null);
}));

(chord.format.t_chord$format37811.cljs$lang$type = true);

(chord.format.t_chord$format37811.cljs$lang$ctorStr = "chord.format/t_chord$format37811");

(chord.format.t_chord$format37811.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.format/t_chord$format37811");
}));

/**
 * Positional factory function for chord.format/t_chord$format37811.
 */
chord.format.__GT_t_chord$format37811 = (function chord$format$__GT_t_chord$format37811(___$1,meta37812){
return (new chord.format.t_chord$format37811(___$1,meta37812));
});

}

return (new chord.format.t_chord$format37811(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format37817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format37817 = (function (_,meta37818){
this._ = _;
this.meta37818 = meta37818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format37817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37819,meta37818__$1){
var self__ = this;
var _37819__$1 = this;
return (new chord.format.t_chord$format37817(self__._,meta37818__$1));
}));

(chord.format.t_chord$format37817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37819){
var self__ = this;
var _37819__$1 = this;
return self__.meta37818;
}));

(chord.format.t_chord$format37817.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format37817.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
}));

(chord.format.t_chord$format37817.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
}));

(chord.format.t_chord$format37817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta37818","meta37818",-1126624253,null)], null);
}));

(chord.format.t_chord$format37817.cljs$lang$type = true);

(chord.format.t_chord$format37817.cljs$lang$ctorStr = "chord.format/t_chord$format37817");

(chord.format.t_chord$format37817.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.format/t_chord$format37817");
}));

/**
 * Positional factory function for chord.format/t_chord$format37817.
 */
chord.format.__GT_t_chord$format37817 = (function chord$format$__GT_t_chord$format37817(___$1,meta37818){
return (new chord.format.t_chord$format37817(___$1,meta37818));
});

}

return (new chord.format.t_chord$format37817(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
var G__37833 = (((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts);
return (chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1 ? chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1(G__37833) : chord.format.formatter_STAR_.call(null,G__37833));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__37835,p__37836){
var map__37837 = p__37835;
var map__37837__$1 = (((((!((map__37837 == null))))?(((((map__37837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37837):map__37837);
var read_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37837__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37837__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var map__37838 = p__37836;
var map__37838__$1 = (((((!((map__37838 == null))))?(((((map__37838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37838):map__37838);
var opts = map__37838__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37838__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter((cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_((function (p__37849){
var map__37850 = p__37849;
var map__37850__$1 = (((((!((map__37850 == null))))?(((((map__37850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37850):map__37850);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37850__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{if(cljs.core.truth_(message)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw(fmtr,message)], null);
} else {
return null;
}
}catch (e37853){if((e37853 instanceof Error)){
var e = e37853;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e37853;

}
}}),read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_((function (p1__37834_SHARP_){
if(cljs.core.truth_(p1__37834_SHARP_)){
return chord.format.freeze(fmtr,p1__37834_SHARP_);
} else {
return null;
}
}),write_ch)], null);
});

//# sourceMappingURL=chord.format.js.map
