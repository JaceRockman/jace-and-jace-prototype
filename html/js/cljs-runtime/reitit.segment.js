goog.provide('reitit.segment');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.segment.Match = (function (data,path_params,__meta,__extmap,__hash){
this.data = data;
this.path_params = path_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.segment.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(reitit.segment.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k40726,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__40730 = k40726;
var G__40730__$1 = (((G__40730 instanceof cljs.core.Keyword))?G__40730.fqn:null);
switch (G__40730__$1) {
case "data":
return self__.data;

break;
case "path-params":
return self__.path_params;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40726,else__4464__auto__);

}
}));

(reitit.segment.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__40736){
var vec__40737 = p__40736;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40737,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40737,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(reitit.segment.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#reitit.segment.Match{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null))], null),self__.__extmap));
}));

(reitit.segment.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40725){
var self__ = this;
var G__40725__$1 = this;
return (new cljs.core.RecordIter((0),G__40725__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.segment.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(reitit.segment.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.segment.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(reitit.segment.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-129766334 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(reitit.segment.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40727,other40728){
var self__ = this;
var this40727__$1 = this;
return (((!((other40728 == null)))) && ((((this40727__$1.constructor === other40728.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40727__$1.data,other40728.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40727__$1.path_params,other40728.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40727__$1.__extmap,other40728.__extmap)))))))));
}));

(reitit.segment.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(reitit.segment.Match.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k40726){
var self__ = this;
var this__4468__auto____$1 = this;
var G__40754 = k40726;
var G__40754__$1 = (((G__40754 instanceof cljs.core.Keyword))?G__40754.fqn:null);
switch (G__40754__$1) {
case "data":
case "path-params":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40726);

}
}));

(reitit.segment.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__40725){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__40755 = cljs.core.keyword_identical_QMARK_;
var expr__40756 = k__4470__auto__;
if(cljs.core.truth_((pred__40755.cljs$core$IFn$_invoke$arity$2 ? pred__40755.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__40756) : pred__40755.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__40756)))){
return (new reitit.segment.Match(G__40725,self__.path_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40755.cljs$core$IFn$_invoke$arity$2 ? pred__40755.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__40756) : pred__40755.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__40756)))){
return (new reitit.segment.Match(self__.data,G__40725,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__40725),null));
}
}
}));

(reitit.segment.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null))], null),self__.__extmap));
}));

(reitit.segment.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__40725){
var self__ = this;
var this__4460__auto____$1 = this;
return (new reitit.segment.Match(self__.data,self__.path_params,G__40725,self__.__extmap,self__.__hash));
}));

(reitit.segment.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(reitit.segment.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null)], null);
}));

(reitit.segment.Match.cljs$lang$type = true);

(reitit.segment.Match.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"reitit.segment/Match",null,(1),null));
}));

(reitit.segment.Match.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"reitit.segment/Match");
}));

/**
 * Positional factory function for reitit.segment/Match.
 */
reitit.segment.__GT_Match = (function reitit$segment$__GT_Match(data,path_params){
return (new reitit.segment.Match(data,path_params,null,null,null));
});

/**
 * Factory function for reitit.segment/Match, taking a map of keywords to field values.
 */
reitit.segment.map__GT_Match = (function reitit$segment$map__GT_Match(G__40729){
var extmap__4501__auto__ = (function (){var G__40758 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40729,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path-params","path-params",-48130597)], 0));
if(cljs.core.record_QMARK_(G__40729)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40758);
} else {
return G__40758;
}
})();
return (new reitit.segment.Match(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__40729),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__40729),null,cljs.core.not_empty(extmap__4501__auto__),null));
});


/**
 * @interface
 */
reitit.segment.Segment = function(){};

var reitit$segment$Segment$_insert$dyn_40798 = (function (this$,ps,data){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.segment._insert[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,ps,data) : m__4510__auto__.call(null,this$,ps,data));
} else {
var m__4508__auto__ = (reitit.segment._insert["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,ps,data) : m__4508__auto__.call(null,this$,ps,data));
} else {
throw cljs.core.missing_protocol("Segment.-insert",this$);
}
}
});
reitit.segment._insert = (function reitit$segment$_insert(this$,ps,data){
if((((!((this$ == null)))) && ((!((this$.reitit$segment$Segment$_insert$arity$3 == null)))))){
return this$.reitit$segment$Segment$_insert$arity$3(this$,ps,data);
} else {
return reitit$segment$Segment$_insert$dyn_40798(this$,ps,data);
}
});

var reitit$segment$Segment$_lookup$dyn_40800 = (function (this$,ps,path_params){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.segment._lookup[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,ps,path_params) : m__4510__auto__.call(null,this$,ps,path_params));
} else {
var m__4508__auto__ = (reitit.segment._lookup["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,ps,path_params) : m__4508__auto__.call(null,this$,ps,path_params));
} else {
throw cljs.core.missing_protocol("Segment.-lookup",this$);
}
}
});
reitit.segment._lookup = (function reitit$segment$_lookup(this$,ps,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$segment$Segment$_lookup$arity$3 == null)))))){
return this$.reitit$segment$Segment$_lookup$arity$3(this$,ps,path_params);
} else {
return reitit$segment$Segment$_lookup$dyn_40800(this$,ps,path_params);
}
});

goog.object.set(reitit.segment.Segment,"null",true);

goog.object.set(reitit.segment._insert,"null",(function (_,___$1,___$2){
return null;
}));

goog.object.set(reitit.segment._lookup,"null",(function (_,___$1,___$2){
return null;
}));
reitit.segment._catch_all = (function reitit$segment$_catch_all(children,catch_all,path_params,p,ps){
return reitit.segment._lookup(reitit.impl.fast_get(children,catch_all),null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path_params,catch_all,clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.cons(p,ps))));
});
reitit.segment.segment = (function reitit$segment$segment(var_args){
var G__40767 = arguments.length;
switch (G__40767) {
case 0:
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$0();

break;
case 4:
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.segment.segment.cljs$core$IFn$_invoke$arity$0 = (function (){
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,null);
}));

(reitit.segment.segment.cljs$core$IFn$_invoke$arity$4 = (function (children,wilds,catch_all,match){
var children_SINGLEQUOTE_ = reitit.impl.fast_map(children);
var wilds_QMARK_ = cljs.core.seq(wilds);
if((typeof reitit !== 'undefined') && (typeof reitit.segment !== 'undefined') && (typeof reitit.segment.t_reitit$segment40770 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.segment.Segment}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.segment.t_reitit$segment40770 = (function (children,wilds,catch_all,match,children_SINGLEQUOTE_,wilds_QMARK_,meta40771){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.match = match;
this.children_SINGLEQUOTE_ = children_SINGLEQUOTE_;
this.wilds_QMARK_ = wilds_QMARK_;
this.meta40771 = meta40771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.segment.t_reitit$segment40770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40772,meta40771__$1){
var self__ = this;
var _40772__$1 = this;
return (new reitit.segment.t_reitit$segment40770(self__.children,self__.wilds,self__.catch_all,self__.match,self__.children_SINGLEQUOTE_,self__.wilds_QMARK_,meta40771__$1));
}));

(reitit.segment.t_reitit$segment40770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40772){
var self__ = this;
var _40772__$1 = this;
return self__.meta40771;
}));

(reitit.segment.t_reitit$segment40770.prototype.reitit$segment$Segment$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.segment.t_reitit$segment40770.prototype.reitit$segment$Segment$_insert$arity$3 = (function (_,p__40773,d){
var self__ = this;
var vec__40774 = p__40773;
var seq__40775 = cljs.core.seq(vec__40774);
var first__40776 = cljs.core.first(seq__40775);
var seq__40775__$1 = cljs.core.next(seq__40775);
var p = first__40776;
var ps = seq__40775__$1;
var ___$1 = this;
if(cljs.core.not(p)){
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4(self__.children,self__.wilds,self__.catch_all,d);
} else {
var vec__40777 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(reitit.impl.wild_param,reitit.impl.catch_all_param)(p);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40777,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40777,(1),null);
var wilds__$1 = (cljs.core.truth_(w)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.wilds,w):self__.wilds);
var catch_all__$1 = (function (){var or__4212__auto__ = c;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return self__.catch_all;
}
})();
var children__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(self__.children,(function (){var or__4212__auto__ = w;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = c;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return p;
}
}
})(),(function (p1__40764_SHARP_){
return reitit.segment._insert((function (){var or__4212__auto__ = p1__40764_SHARP_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$0();
}
})(),ps,d);
}));
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4(children__$1,wilds__$1,catch_all__$1,self__.match);
}
}));

(reitit.segment.t_reitit$segment40770.prototype.reitit$segment$Segment$_lookup$arity$3 = (function (_,p__40784,path_params){
var self__ = this;
var vec__40785 = p__40784;
var seq__40786 = cljs.core.seq(vec__40785);
var first__40787 = cljs.core.first(seq__40786);
var seq__40786__$1 = cljs.core.next(seq__40786);
var p = first__40787;
var ps = seq__40786__$1;
var ___$1 = this;
if((p == null)){
if(cljs.core.truth_(self__.match)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params);
} else {
return null;
}
} else {
var or__4212__auto__ = reitit.segment._lookup(reitit.impl.fast_get(self__.children_SINGLEQUOTE_,p),ps,path_params);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = (cljs.core.truth_((function (){var and__4210__auto__ = self__.wilds_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return (!(clojure.string.blank_QMARK_(p)));
} else {
return and__4210__auto__;
}
})())?cljs.core.some((function (p1__40765_SHARP_){
return reitit.segment._lookup(reitit.impl.fast_get(self__.children_SINGLEQUOTE_,p1__40765_SHARP_),ps,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path_params,p1__40765_SHARP_,p));
}),self__.wilds):null);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
if(cljs.core.truth_(self__.catch_all)){
return reitit.segment._catch_all(self__.children_SINGLEQUOTE_,self__.catch_all,path_params,p,ps);
} else {
return null;
}
}
}
}
}));

(reitit.segment.t_reitit$segment40770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"children'","children'",-942868266,null),new cljs.core.Symbol(null,"wilds?","wilds?",-1842060252,null),new cljs.core.Symbol(null,"meta40771","meta40771",-927384936,null)], null);
}));

(reitit.segment.t_reitit$segment40770.cljs$lang$type = true);

(reitit.segment.t_reitit$segment40770.cljs$lang$ctorStr = "reitit.segment/t_reitit$segment40770");

(reitit.segment.t_reitit$segment40770.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.segment/t_reitit$segment40770");
}));

/**
 * Positional factory function for reitit.segment/t_reitit$segment40770.
 */
reitit.segment.__GT_t_reitit$segment40770 = (function reitit$segment$__GT_t_reitit$segment40770(children__$1,wilds__$1,catch_all__$1,match__$1,children_SINGLEQUOTE___$1,wilds_QMARK___$1,meta40771){
return (new reitit.segment.t_reitit$segment40770(children__$1,wilds__$1,catch_all__$1,match__$1,children_SINGLEQUOTE___$1,wilds_QMARK___$1,meta40771));
});

}

return (new reitit.segment.t_reitit$segment40770(children,wilds,catch_all,match,children_SINGLEQUOTE_,wilds_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.segment","segment","reitit.segment/segment",424393474)], null)));
}));

(reitit.segment.segment.cljs$lang$maxFixedArity = 4);

/**
 * Returns a Segment Trie with path with data inserted into it. Creates the trie if `nil`.
 */
reitit.segment.insert = (function reitit$segment$insert(trie,path,data){
return reitit.segment._insert((function (){var or__4212__auto__ = trie;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$0();
}
})(),reitit.impl.segments(path),reitit.segment.map__GT_Match(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null)));
});
reitit.segment.compile = (function reitit$segment$compile(trie){

return trie;
});
reitit.segment.scanner = (function reitit$segment$scanner(compiled_tries){

if((typeof reitit !== 'undefined') && (typeof reitit.segment !== 'undefined') && (typeof reitit.segment.t_reitit$segment40793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.segment.Segment}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.segment.t_reitit$segment40793 = (function (compiled_tries,meta40794){
this.compiled_tries = compiled_tries;
this.meta40794 = meta40794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.segment.t_reitit$segment40793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40795,meta40794__$1){
var self__ = this;
var _40795__$1 = this;
return (new reitit.segment.t_reitit$segment40793(self__.compiled_tries,meta40794__$1));
}));

(reitit.segment.t_reitit$segment40793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40795){
var self__ = this;
var _40795__$1 = this;
return self__.meta40794;
}));

(reitit.segment.t_reitit$segment40793.prototype.reitit$segment$Segment$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.segment.t_reitit$segment40793.prototype.reitit$segment$Segment$_lookup$arity$3 = (function (_,ps,params){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (trie){
return reitit.segment._lookup(trie,ps,params);
}),self__.compiled_tries);
}));

(reitit.segment.t_reitit$segment40793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-tries","compiled-tries",-1788448068,null),new cljs.core.Symbol(null,"meta40794","meta40794",448318511,null)], null);
}));

(reitit.segment.t_reitit$segment40793.cljs$lang$type = true);

(reitit.segment.t_reitit$segment40793.cljs$lang$ctorStr = "reitit.segment/t_reitit$segment40793");

(reitit.segment.t_reitit$segment40793.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.segment/t_reitit$segment40793");
}));

/**
 * Positional factory function for reitit.segment/t_reitit$segment40793.
 */
reitit.segment.__GT_t_reitit$segment40793 = (function reitit$segment$scanner_$___GT_t_reitit$segment40793(compiled_tries__$1,meta40794){
return (new reitit.segment.t_reitit$segment40793(compiled_tries__$1,meta40794));
});

}

return (new reitit.segment.t_reitit$segment40793(compiled_tries,cljs.core.PersistentArrayMap.EMPTY));
});
reitit.segment.lookup = (function reitit$segment$lookup(trie,path){

var temp__5751__auto__ = reitit.segment._lookup(trie,reitit.impl.segments(path),cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.url_decode_coll(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match)));
} else {
return null;
}
});

//# sourceMappingURL=reitit.segment.js.map
