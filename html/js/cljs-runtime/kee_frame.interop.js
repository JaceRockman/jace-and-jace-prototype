goog.provide('kee_frame.interop');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {kee_frame.api.Navigator}
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
kee_frame.interop.AccountantNavigator = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k38683,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__38687 = k38683;
switch (G__38687) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38683,else__4464__auto__);

}
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__38689){
var vec__38690 = p__38689;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38690,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38690,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#kee-frame.interop.AccountantNavigator{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38682){
var self__ = this;
var G__38682__$1 = this;
return (new cljs.core.RecordIter((0),G__38682__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new kee_frame.interop.AccountantNavigator(self__.__meta,self__.__extmap,self__.__hash));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(kee_frame.interop.AccountantNavigator.prototype.kee_frame$api$Navigator$ = cljs.core.PROTOCOL_SENTINEL);

(kee_frame.interop.AccountantNavigator.prototype.kee_frame$api$Navigator$dispatch_current_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return accountant.core.dispatch_current_BANG_();
}));

(kee_frame.interop.AccountantNavigator.prototype.kee_frame$api$Navigator$navigate_BANG_$arity$2 = (function (_,url){
var self__ = this;
var ___$1 = this;
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1(url);
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (1922069210 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38684,other38685){
var self__ = this;
var this38684__$1 = this;
return (((!((other38685 == null)))) && ((((this38684__$1.constructor === other38685.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38684__$1.__extmap,other38685.__extmap)))));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new kee_frame.interop.AccountantNavigator(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k38683){
var self__ = this;
var this__4468__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k38683);
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__38682){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__38715 = cljs.core.keyword_identical_QMARK_;
var expr__38716 = k__4470__auto__;
return (new kee_frame.interop.AccountantNavigator(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__38682),null));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__38682){
var self__ = this;
var this__4460__auto____$1 = this;
return (new kee_frame.interop.AccountantNavigator(G__38682,self__.__extmap,self__.__hash));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(kee_frame.interop.AccountantNavigator.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(kee_frame.interop.AccountantNavigator.cljs$lang$type = true);

(kee_frame.interop.AccountantNavigator.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"kee-frame.interop/AccountantNavigator",null,(1),null));
}));

(kee_frame.interop.AccountantNavigator.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"kee-frame.interop/AccountantNavigator");
}));

/**
 * Positional factory function for kee-frame.interop/AccountantNavigator.
 */
kee_frame.interop.__GT_AccountantNavigator = (function kee_frame$interop$__GT_AccountantNavigator(){
return (new kee_frame.interop.AccountantNavigator(null,null,null));
});

/**
 * Factory function for kee-frame.interop/AccountantNavigator, taking a map of keywords to field values.
 */
kee_frame.interop.map__GT_AccountantNavigator = (function kee_frame$interop$map__GT_AccountantNavigator(G__38686){
var extmap__4501__auto__ = (function (){var G__38730 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__38686);
if(cljs.core.record_QMARK_(G__38686)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38730);
} else {
return G__38730;
}
})();
return (new kee_frame.interop.AccountantNavigator(null,cljs.core.not_empty(extmap__4501__auto__),null));
});

kee_frame.interop.create_socket = chord.client.ws_ch;
kee_frame.interop.websocket_url = (function kee_frame$interop$websocket_url(path){
if(clojure.string.starts_with_QMARK_(path,"/")){
return [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("https:",document.location.protocol))?"wss://":"ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(document.location.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
} else {
return path;
}
});
kee_frame.interop.make_navigator = (function kee_frame$interop$make_navigator(opts){
accountant.core.configure_navigation_BANG_(opts);

return kee_frame.interop.__GT_AccountantNavigator();
});
kee_frame.interop.render_root = (function kee_frame$interop$render_root(root_component){
if(cljs.core.truth_(root_component)){
var temp__5751__auto__ = document.getElementById("app");
if(cljs.core.truth_(temp__5751__auto__)){
var app_element = temp__5751__auto__;
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(root_component,app_element);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not find element with id 'app' to mount app into",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),root_component], null));
}
} else {
return null;
}
});
kee_frame.interop.breakpoints_or_defaults = (function kee_frame$interop$breakpoints_or_defaults(breakpoints){
var or__4212__auto__ = breakpoints;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167),(166),new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mobile","mobile",1403078170),(768),new cljs.core.Keyword(null,"tablet","tablet",-318585919),(992),new cljs.core.Keyword(null,"small-monitor","small-monitor",-1851699481),(1200),new cljs.core.Keyword(null,"large-monitor","large-monitor",-1142074365)], null)], null);
}
});
kee_frame.interop.set_breakpoint_subs = (function kee_frame$interop$set_breakpoint_subs(breakpoints){
return breaking_point.core.register_subs(new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739).cljs$core$IFn$_invoke$arity$1(kee_frame.interop.breakpoints_or_defaults(breakpoints)));
});
kee_frame.interop.set_breakpoints = (function kee_frame$interop$set_breakpoints(breakpoints){
var G__38749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),kee_frame.interop.breakpoints_or_defaults(breakpoints)], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__38749) : re_frame.core.dispatch_sync.call(null,G__38749));
});
kee_frame.interop.set_log_level_BANG_ = (function kee_frame$interop$set_log_level_BANG_(p__38752){
var map__38754 = p__38752;
var map__38754__$1 = cljs.core.__destructure_map(map__38754);
var overwrites_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38754__$1,new cljs.core.Keyword(null,"overwrites?","overwrites?",-1906761528),false);
if(cljs.core.truth_(overwrites_QMARK_)){
return null;
} else {
return re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warn","warn",-436710552),(function() { 
var G__38805__delegate = function (args){
if(cljs.core.truth_(cljs.core.re_find(/^re-frame: overwriting/,cljs.core.first(args)))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.warn,args);
}
};
var G__38805 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38806__i = 0, G__38806__a = new Array(arguments.length -  0);
while (G__38806__i < G__38806__a.length) {G__38806__a[G__38806__i] = arguments[G__38806__i + 0]; ++G__38806__i;}
  args = new cljs.core.IndexedSeq(G__38806__a,0,null);
} 
return G__38805__delegate.call(this,args);};
G__38805.cljs$lang$maxFixedArity = 0;
G__38805.cljs$lang$applyTo = (function (arglist__38807){
var args = cljs.core.seq(arglist__38807);
return G__38805__delegate(args);
});
G__38805.cljs$core$IFn$_invoke$arity$variadic = G__38805__delegate;
return G__38805;
})()
], null));
}
});

//# sourceMappingURL=kee_frame.interop.js.map
