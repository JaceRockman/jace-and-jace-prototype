goog.provide('chord.format');

/**
 * @interface
 */
chord.format.ChordFormatter = function(){};

var chord$format$ChordFormatter$freeze$dyn_38449 = (function (_,obj){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (chord.format.freeze[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(_,obj) : m__4510__auto__.call(null,_,obj));
} else {
var m__4508__auto__ = (chord.format.freeze["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(_,obj) : m__4508__auto__.call(null,_,obj));
} else {
throw cljs.core.missing_protocol("ChordFormatter.freeze",_);
}
}
});
chord.format.freeze = (function chord$format$freeze(_,obj){
if((((!((_ == null)))) && ((!((_.chord$format$ChordFormatter$freeze$arity$2 == null)))))){
return _.chord$format$ChordFormatter$freeze$arity$2(_,obj);
} else {
return chord$format$ChordFormatter$freeze$dyn_38449(_,obj);
}
});

var chord$format$ChordFormatter$thaw$dyn_38450 = (function (_,s){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (chord.format.thaw[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4510__auto__.call(null,_,s));
} else {
var m__4508__auto__ = (chord.format.thaw["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4508__auto__.call(null,_,s));
} else {
throw cljs.core.missing_protocol("ChordFormatter.thaw",_);
}
}
});
chord.format.thaw = (function chord$format$thaw(_,s){
if((((!((_ == null)))) && ((!((_.chord$format$ChordFormatter$thaw$arity$2 == null)))))){
return _.chord$format$ChordFormatter$thaw$arity$2(_,s);
} else {
return chord$format$ChordFormatter$thaw$dyn_38450(_,s);
}
});

if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.formatter_STAR_ !== 'undefined')){
} else {
chord.format.formatter_STAR_ = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__38381 = cljs.core.get_global_hierarchy;
return (fexpr__38381.cljs$core$IFn$_invoke$arity$0 ? fexpr__38381.cljs$core$IFn$_invoke$arity$0() : fexpr__38381.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("chord.format","formatter*"),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format38382 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format38382 = (function (_,meta38383){
this._ = _;
this.meta38383 = meta38383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format38382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38384,meta38383__$1){
var self__ = this;
var _38384__$1 = this;
return (new chord.format.t_chord$format38382(self__._,meta38383__$1));
}));

(chord.format.t_chord$format38382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38384){
var self__ = this;
var _38384__$1 = this;
return self__.meta38383;
}));

(chord.format.t_chord$format38382.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format38382.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0));
}));

(chord.format.t_chord$format38382.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
}));

(chord.format.t_chord$format38382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta38383","meta38383",-1149777218,null)], null);
}));

(chord.format.t_chord$format38382.cljs$lang$type = true);

(chord.format.t_chord$format38382.cljs$lang$ctorStr = "chord.format/t_chord$format38382");

(chord.format.t_chord$format38382.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"chord.format/t_chord$format38382");
}));

/**
 * Positional factory function for chord.format/t_chord$format38382.
 */
chord.format.__GT_t_chord$format38382 = (function chord$format$__GT_t_chord$format38382(___$1,meta38383){
return (new chord.format.t_chord$format38382(___$1,meta38383));
});

}

return (new chord.format.t_chord$format38382(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format38400 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format38400 = (function (_,meta38401){
this._ = _;
this.meta38401 = meta38401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format38400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38402,meta38401__$1){
var self__ = this;
var _38402__$1 = this;
return (new chord.format.t_chord$format38400(self__._,meta38401__$1));
}));

(chord.format.t_chord$format38400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38402){
var self__ = this;
var _38402__$1 = this;
return self__.meta38401;
}));

(chord.format.t_chord$format38400.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format38400.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js(obj));
}));

(chord.format.t_chord$format38400.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(s));
}));

(chord.format.t_chord$format38400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta38401","meta38401",1513711174,null)], null);
}));

(chord.format.t_chord$format38400.cljs$lang$type = true);

(chord.format.t_chord$format38400.cljs$lang$ctorStr = "chord.format/t_chord$format38400");

(chord.format.t_chord$format38400.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"chord.format/t_chord$format38400");
}));

/**
 * Positional factory function for chord.format/t_chord$format38400.
 */
chord.format.__GT_t_chord$format38400 = (function chord$format$__GT_t_chord$format38400(___$1,meta38401){
return (new chord.format.t_chord$format38400(___$1,meta38401));
});

}

return (new chord.format.t_chord$format38400(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)));
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format38407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format38407 = (function (opts,json_formatter,meta38408){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta38408 = meta38408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format38407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38409,meta38408__$1){
var self__ = this;
var _38409__$1 = this;
return (new chord.format.t_chord$format38407(self__.opts,self__.json_formatter,meta38408__$1));
}));

(chord.format.t_chord$format38407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38409){
var self__ = this;
var _38409__$1 = this;
return self__.meta38408;
}));

(chord.format.t_chord$format38407.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format38407.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze(self__.json_formatter,obj);
}));

(chord.format.t_chord$format38407.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys(chord.format.thaw(self__.json_formatter,s));
}));

(chord.format.t_chord$format38407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"json-formatter","json-formatter",-485654307,null),new cljs.core.Symbol(null,"meta38408","meta38408",-98383958,null)], null);
}));

(chord.format.t_chord$format38407.cljs$lang$type = true);

(chord.format.t_chord$format38407.cljs$lang$ctorStr = "chord.format/t_chord$format38407");

(chord.format.t_chord$format38407.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"chord.format/t_chord$format38407");
}));

/**
 * Positional factory function for chord.format/t_chord$format38407.
 */
chord.format.__GT_t_chord$format38407 = (function chord$format$__GT_t_chord$format38407(opts__$1,json_formatter__$1,meta38408){
return (new chord.format.t_chord$format38407(opts__$1,json_formatter__$1,meta38408));
});

}

return (new chord.format.t_chord$format38407(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format38416 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format38416 = (function (_,meta38417){
this._ = _;
this.meta38417 = meta38417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format38416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38418,meta38417__$1){
var self__ = this;
var _38418__$1 = this;
return (new chord.format.t_chord$format38416(self__._,meta38417__$1));
}));

(chord.format.t_chord$format38416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38418){
var self__ = this;
var _38418__$1 = this;
return self__.meta38417;
}));

(chord.format.t_chord$format38416.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format38416.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),obj);
}));

(chord.format.t_chord$format38416.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),s);
}));

(chord.format.t_chord$format38416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta38417","meta38417",571954593,null)], null);
}));

(chord.format.t_chord$format38416.cljs$lang$type = true);

(chord.format.t_chord$format38416.cljs$lang$ctorStr = "chord.format/t_chord$format38416");

(chord.format.t_chord$format38416.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"chord.format/t_chord$format38416");
}));

/**
 * Positional factory function for chord.format/t_chord$format38416.
 */
chord.format.__GT_t_chord$format38416 = (function chord$format$__GT_t_chord$format38416(___$1,meta38417){
return (new chord.format.t_chord$format38416(___$1,meta38417));
});

}

return (new chord.format.t_chord$format38416(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format38419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format38419 = (function (_,meta38420){
this._ = _;
this.meta38420 = meta38420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format38419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38421,meta38420__$1){
var self__ = this;
var _38421__$1 = this;
return (new chord.format.t_chord$format38419(self__._,meta38420__$1));
}));

(chord.format.t_chord$format38419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38421){
var self__ = this;
var _38421__$1 = this;
return self__.meta38420;
}));

(chord.format.t_chord$format38419.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format38419.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
}));

(chord.format.t_chord$format38419.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
}));

(chord.format.t_chord$format38419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta38420","meta38420",935340724,null)], null);
}));

(chord.format.t_chord$format38419.cljs$lang$type = true);

(chord.format.t_chord$format38419.cljs$lang$ctorStr = "chord.format/t_chord$format38419");

(chord.format.t_chord$format38419.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"chord.format/t_chord$format38419");
}));

/**
 * Positional factory function for chord.format/t_chord$format38419.
 */
chord.format.__GT_t_chord$format38419 = (function chord$format$__GT_t_chord$format38419(___$1,meta38420){
return (new chord.format.t_chord$format38419(___$1,meta38420));
});

}

return (new chord.format.t_chord$format38419(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
return chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1((((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__38431,p__38432){
var map__38433 = p__38431;
var map__38433__$1 = cljs.core.__destructure_map(map__38433);
var read_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38433__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38433__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var map__38434 = p__38432;
var map__38434__$1 = cljs.core.__destructure_map(map__38434);
var opts = map__38434__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38434__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter((cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_((function (p__38440){
var map__38441 = p__38440;
var map__38441__$1 = cljs.core.__destructure_map(map__38441);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38441__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{if(cljs.core.truth_(message)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw(fmtr,message)], null);
} else {
return null;
}
}catch (e38442){if((e38442 instanceof Error)){
var e = e38442;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e38442;

}
}}),read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_((function (p1__38429_SHARP_){
if(cljs.core.truth_(p1__38429_SHARP_)){
return chord.format.freeze(fmtr,p1__38429_SHARP_);
} else {
return null;
}
}),write_ch)], null);
});

//# sourceMappingURL=chord.format.js.map
