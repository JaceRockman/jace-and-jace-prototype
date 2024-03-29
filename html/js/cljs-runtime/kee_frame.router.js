goog.provide('kee_frame.router');
goog.require('cljs.core');
goog.require('kee_frame.interop');
goog.require('re_frame.core');
goog.require('re_chain.core');
goog.require('kee_frame.api');
goog.require('kee_frame.state');
goog.require('kee_frame.scroll');
goog.require('kee_frame.controller');
goog.require('reitit.core');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('kee_frame.spec');
goog.require('expound.alpha');
kee_frame.router.default_chain_links = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"effect-present?","effect-present?",131752804),(function (effects){
return new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714).cljs$core$IFn$_invoke$arity$1(effects);
}),new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793),(function (effects){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.Keyword(null,"on-success","on-success",1786904109)], null));
}),new cljs.core.Keyword(null,"set-dispatch","set-dispatch",2115263401),(function (effects,dispatch){
return cljs.core.assoc_in(effects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.Keyword(null,"on-success","on-success",1786904109)], null),dispatch);
})], null)], null);
kee_frame.router.url = (function kee_frame$router$url(data){
if(cljs.core.truth_(cljs.core.deref(kee_frame.state.router))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No router defined for this app",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),cljs.core.deref(kee_frame.state.router)], null));
}

return kee_frame.api.data__GT_url(cljs.core.deref(kee_frame.state.router),data);
});
kee_frame.router.goto$ = (function kee_frame$router$goto(data){
return kee_frame.api.navigate_BANG_(cljs.core.deref(kee_frame.state.navigator),kee_frame.router.url(data));
});
kee_frame.router.nav_handler = (function kee_frame$router$nav_handler(router){
return (function (path){
var temp__5733__auto__ = kee_frame.api.url__GT_data(router,path);
if(cljs.core.truth_(temp__5733__auto__)){
var route = temp__5733__auto__;
var G__29055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.router","route-changed","kee-frame.router/route-changed",8744849),route], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29055) : re_frame.core.dispatch.call(null,G__29055));
} else {
var G__29056_29131 = new cljs.core.Keyword(null,"group","group",582596132);
var G__29057_29132 = "No route match found";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$2(G__29056_29131,G__29057_29132) : re_frame.core.console.call(null,G__29056_29131,G__29057_29132));

var G__29058_29133 = new cljs.core.Keyword(null,"error","error",-978969032);
var G__29059_29134 = "No match found for path ";
var G__29060_29135 = path;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__29058_29133,G__29059_29134,G__29060_29135) : re_frame.core.console.call(null,G__29058_29133,G__29059_29134,G__29060_29135));

var G__29061 = new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382);
return (re_frame.core.console.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$1(G__29061) : re_frame.core.console.call(null,G__29061));
}
});
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.router","reitit-route-data","kee-frame.router/reitit-route-data",1934241365),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"route-name","route-name",-932603717),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"path-params","path-params",-48130597),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-name","route-name",-932603717),new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.spec.alpha.rep_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__29062){
return cljs.core.map_QMARK_(G__29062);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__11517__auto__,v__11518__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__11518__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))], null)));
kee_frame.router.assert_route_data = (function kee_frame$router$assert_route_data(data){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.router","reitit-route-data","kee-frame.router/reitit-route-data",1934241365),data)){
return null;
} else {
expound.alpha.expound(new cljs.core.Keyword("kee-frame.router","reitit-route-data","kee-frame.router/reitit-route-data",1934241365),data);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Bad route data input",cljs.spec.alpha.explain_data(new cljs.core.Keyword("kee-frame.router","reitit-route-data","kee-frame.router/reitit-route-data",1934241365),data));
}
});
kee_frame.router.url_not_found = (function kee_frame$router$url_not_found(routes,data){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not find url for the provided data",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),routes,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
kee_frame.router.route_match_not_found = (function kee_frame$router$route_match_not_found(routes,url){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No match for URL in routes",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"routes","routes",457900162),routes], null));
});
kee_frame.router.match_data = (function kee_frame$router$match_data(routes,route,hash_QMARK_){
var vec__29063 = route;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29063,(0),null);
var path_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29063,(1),null);
return [(cljs.core.truth_(hash_QMARK_)?"/#":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(reitit.core.match_by_name,routes,route))),(function (){var temp__5739__auto__ = new cljs.core.Keyword(null,"query-string","query-string",-1018845061).cljs$core$IFn$_invoke$arity$1(path_params);
if((temp__5739__auto__ == null)){
return null;
} else {
var q = temp__5739__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('');
}
})(),(function (){var temp__5739__auto__ = new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(path_params);
if((temp__5739__auto__ == null)){
return null;
} else {
var h = temp__5739__auto__;
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('');
}
})()].join('');
});
kee_frame.router.match_url = (function kee_frame$router$match_url(routes,url){
var vec__29066 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(url,/^\/#\//,"/"),/#/,(2));
var path_PLUS_query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29066,(0),null);
var fragment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29066,(1),null);
var vec__29069 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(path_PLUS_query,/\?/,(2));
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29069,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29069,(1),null);
var G__29072 = reitit.core.match_by_path(routes,path);
if((G__29072 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__29072,new cljs.core.Keyword(null,"query-string","query-string",-1018845061),query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hash","hash",-13781596),fragment], 0));
}
});

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
 * @implements {kee_frame.api.Router}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
kee_frame.router.ReititRouter = (function (routes,hash_QMARK_,__meta,__extmap,__hash){
this.routes = routes;
this.hash_QMARK_ = hash_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(kee_frame.router.ReititRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k29074,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__29078 = k29074;
var G__29078__$1 = (((G__29078 instanceof cljs.core.Keyword))?G__29078.fqn:null);
switch (G__29078__$1) {
case "routes":
return self__.routes;

break;
case "hash?":
return self__.hash_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29074,else__4442__auto__);

}
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__29079){
var vec__29080 = p__29079;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29080,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29080,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#kee-frame.router.ReititRouter{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash?","hash?",-1899275922),self__.hash_QMARK_],null))], null),self__.__extmap));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29073){
var self__ = this;
var G__29073__$1 = this;
return (new cljs.core.RecordIter((0),G__29073__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"hash?","hash?",-1899275922)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new kee_frame.router.ReititRouter(self__.routes,self__.hash_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__29083 = (function (coll__4436__auto__){
return (-1127529290 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__29083(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29075,other29076){
var self__ = this;
var this29075__$1 = this;
return (((!((other29076 == null)))) && ((this29075__$1.constructor === other29076.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29075__$1.routes,other29076.routes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29075__$1.hash_QMARK_,other29076.hash_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29075__$1.__extmap,other29076.__extmap)));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"hash?","hash?",-1899275922),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new kee_frame.router.ReititRouter(self__.routes,self__.hash_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(kee_frame.router.ReititRouter.prototype.kee_frame$api$Router$ = cljs.core.PROTOCOL_SENTINEL);

(kee_frame.router.ReititRouter.prototype.kee_frame$api$Router$data__GT_url$arity$2 = (function (_,data){
var self__ = this;
var ___$1 = this;
kee_frame.router.assert_route_data(data);

var or__4185__auto__ = kee_frame.router.match_data(self__.routes,data,self__.hash_QMARK_);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return kee_frame.router.url_not_found(self__.routes,data);
}
}));

(kee_frame.router.ReititRouter.prototype.kee_frame$api$Router$url__GT_data$arity$2 = (function (_,url){
var self__ = this;
var ___$1 = this;
var or__4185__auto__ = kee_frame.router.match_url(self__.routes,url);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return kee_frame.router.route_match_not_found(self__.routes,url);
}
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__29073){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__29084 = cljs.core.keyword_identical_QMARK_;
var expr__29085 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__29087 = new cljs.core.Keyword(null,"routes","routes",457900162);
var G__29088 = expr__29085;
return (pred__29084.cljs$core$IFn$_invoke$arity$2 ? pred__29084.cljs$core$IFn$_invoke$arity$2(G__29087,G__29088) : pred__29084.call(null,G__29087,G__29088));
})())){
return (new kee_frame.router.ReititRouter(G__29073,self__.hash_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29089 = new cljs.core.Keyword(null,"hash?","hash?",-1899275922);
var G__29090 = expr__29085;
return (pred__29084.cljs$core$IFn$_invoke$arity$2 ? pred__29084.cljs$core$IFn$_invoke$arity$2(G__29089,G__29090) : pred__29084.call(null,G__29089,G__29090));
})())){
return (new kee_frame.router.ReititRouter(self__.routes,G__29073,self__.__meta,self__.__extmap,null));
} else {
return (new kee_frame.router.ReititRouter(self__.routes,self__.hash_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__29073),null));
}
}
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hash?","hash?",-1899275922),self__.hash_QMARK_,null))], null),self__.__extmap));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__29073){
var self__ = this;
var this__4438__auto____$1 = this;
return (new kee_frame.router.ReititRouter(self__.routes,self__.hash_QMARK_,G__29073,self__.__extmap,self__.__hash));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(kee_frame.router.ReititRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"hash?","hash?",-258744395,null)], null);
}));

(kee_frame.router.ReititRouter.cljs$lang$type = true);

(kee_frame.router.ReititRouter.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"kee-frame.router/ReititRouter",null,(1),null));
}));

(kee_frame.router.ReititRouter.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"kee-frame.router/ReititRouter");
}));

/**
 * Positional factory function for kee-frame.router/ReititRouter.
 */
kee_frame.router.__GT_ReititRouter = (function kee_frame$router$__GT_ReititRouter(routes,hash_QMARK_){
return (new kee_frame.router.ReititRouter(routes,hash_QMARK_,null,null,null));
});

/**
 * Factory function for kee-frame.router/ReititRouter, taking a map of keywords to field values.
 */
kee_frame.router.map__GT_ReititRouter = (function kee_frame$router$map__GT_ReititRouter(G__29077){
var extmap__4478__auto__ = (function (){var G__29091 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29077,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hash?","hash?",-1899275922)], 0));
if(cljs.core.record_QMARK_(G__29077)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29091);
} else {
return G__29091;
}
})();
return (new kee_frame.router.ReititRouter(new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__29077),new cljs.core.Keyword(null,"hash?","hash?",-1899275922).cljs$core$IFn$_invoke$arity$1(G__29077),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

kee_frame.router.bootstrap_routes = (function kee_frame$router$bootstrap_routes(routes,router,hash_routing_QMARK_,scroll){
var initialized_QMARK_ = cljs.core.boolean$(cljs.core.deref(kee_frame.state.navigator));
var router__$1 = (function (){var or__4185__auto__ = router;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return kee_frame.router.__GT_ReititRouter(reitit.core.router.cljs$core$IFn$_invoke$arity$1(routes),hash_routing_QMARK_);
}
})();
cljs.core.reset_BANG_(kee_frame.state.router,router__$1);

var G__29093_29137 = new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312);
var G__29094_29138 = kee_frame.router.goto$;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__29093_29137,G__29094_29138) : re_frame.core.reg_fx.call(null,G__29093_29137,G__29094_29138));

if(initialized_QMARK_){
} else {
if(cljs.core.truth_(scroll)){
kee_frame.scroll.start_BANG_();
} else {
}

cljs.core.reset_BANG_(kee_frame.state.navigator,kee_frame.interop.make_navigator(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),kee_frame.router.nav_handler(router__$1),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (p1__29092_SHARP_){
return cljs.core.boolean$(kee_frame.api.url__GT_data(router__$1,p1__29092_SHARP_));
})], null)));
}

return kee_frame.api.dispatch_current_BANG_(cljs.core.deref(kee_frame.state.navigator));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init","init",-1875481434),(function (db,p__29095){
var vec__29096 = p__29095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29096,(0),null);
var initial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29096,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial,db], 0));
}));
kee_frame.router.debug_enabled_QMARK_ = (function kee_frame$router$debug_enabled_QMARK_(){
var map__29099 = cljs.core.deref(kee_frame.state.debug_config);
var map__29099__$1 = (((((!((map__29099 == null))))?(((((map__29099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29099):map__29099);
var routes_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29099__$1,new cljs.core.Keyword(null,"routes?","routes?",-1257506224),true);
var and__4174__auto__ = cljs.core.deref(kee_frame.state.debug_QMARK_);
if(cljs.core.truth_(and__4174__auto__)){
return routes_QMARK_;
} else {
return and__4174__auto__;
}
});
kee_frame.router.reg_route_event = (function kee_frame$router$reg_route_event(scroll){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("kee-frame.router","route-changed","kee-frame.router/route-changed",8744849),(cljs.core.truth_(kee_frame.router.debug_enabled_QMARK_())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null):null),(function (p__29101,p__29102){
var map__29103 = p__29101;
var map__29103__$1 = (((((!((map__29103 == null))))?(((((map__29103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29103):map__29103);
var ctx = map__29103__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29103__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29104 = p__29102;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29104,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29104,(1),null);
if(cljs.core.truth_(scroll)){
kee_frame.scroll.monitor_requests_BANG_(route);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kee_frame.state.controllers,kee_frame.controller.apply_route,ctx,route);

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640),route)], null),(cljs.core.truth_(scroll)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(50),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.scroll","poll","kee-frame.scroll/poll",-1227808225),route,(0)], null)], null)], null)], null):null)], 0));
}));
});
kee_frame.router.start_BANG_ = (function kee_frame$router$start_BANG_(p__29108){
var map__29109 = p__29108;
var map__29109__$1 = (((((!((map__29109 == null))))?(((((map__29109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29109):map__29109);
var initial_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29109__$1,new cljs.core.Keyword(null,"initial-db","initial-db",1939835102));
var debug_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29109__$1,new cljs.core.Keyword(null,"debug-config","debug-config",329260673));
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29109__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var screen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29109__$1,new cljs.core.Keyword(null,"screen","screen",1990059748));
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29109__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var app_db_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29109__$1,new cljs.core.Keyword(null,"app-db-spec","app-db-spec",-1030582586));
var hash_routing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29109__$1,new cljs.core.Keyword(null,"hash-routing?","hash-routing?",471914732));
var chain_links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29109__$1,new cljs.core.Keyword(null,"chain-links","chain-links",951542256));
var debug_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29109__$1,new cljs.core.Keyword(null,"debug?","debug?",-1831756173),false);
var scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29109__$1,new cljs.core.Keyword(null,"scroll","scroll",971553779),true);
var root_component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29109__$1,new cljs.core.Keyword(null,"root-component","root-component",-1807026475));
kee_frame.interop.set_log_level_BANG_(debug_config);

cljs.core.reset_BANG_(kee_frame.state.app_db_spec,app_db_spec);

cljs.core.reset_BANG_(kee_frame.state.debug_QMARK_,debug_QMARK_);

cljs.core.reset_BANG_(kee_frame.state.debug_config,debug_config);

re_chain.core.configure_BANG_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(kee_frame.router.default_chain_links,chain_links));

kee_frame.router.reg_route_event(scroll);

if(cljs.core.truth_((function (){var and__4174__auto__ = routes;
if(cljs.core.truth_(and__4174__auto__)){
return router;
} else {
return and__4174__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Both routes and router specified. If you want to use these routes, pass them to your router constructor.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),routes,new cljs.core.Keyword(null,"router","router",1091916230),router], null));
} else {
}

if(cljs.core.truth_((function (){var or__4185__auto__ = routes;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return router;
}
})())){
kee_frame.router.bootstrap_routes(routes,router,hash_routing_QMARK_,scroll);
} else {
}

if(cljs.core.truth_(initial_db)){
var G__29111_29150 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",-1875481434),initial_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__29111_29150) : re_frame.core.dispatch_sync.call(null,G__29111_29150));
} else {
}

if(cljs.core.truth_(screen)){
var config_29152 = ((cljs.core.boolean_QMARK_(screen))?null:screen);
if(cljs.core.truth_(cljs.core.deref(kee_frame.state.breakpoints_initialized_QMARK_))){
kee_frame.interop.set_breakpoint_subs(config_29152);
} else {
kee_frame.interop.set_breakpoints(config_29152);

cljs.core.reset_BANG_(kee_frame.state.breakpoints_initialized_QMARK_,true);
}
} else {
}

var G__29112_29154 = new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640);
var G__29113_29155 = (function (db){
return new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640).cljs$core$IFn$_invoke$arity$2(db,null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29112_29154,G__29113_29155) : re_frame.core.reg_sub.call(null,G__29112_29154,G__29113_29155));

return kee_frame.interop.render_root(root_component);
});
kee_frame.router.make_route_component = (function kee_frame$router$make_route_component(component,route){
if(cljs.core.fn_QMARK_(component)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,route], null);
} else {
return component;
}
});
kee_frame.router.switch_route = (function kee_frame$router$switch_route(var_args){
var args__4795__auto__ = [];
var len__4789__auto___29156 = arguments.length;
var i__4790__auto___29157 = (0);
while(true){
if((i__4790__auto___29157 < len__4789__auto___29156)){
args__4795__auto__.push((arguments[i__4790__auto___29157]));

var G__29158 = (i__4790__auto___29157 + (1));
i__4790__auto___29157 = G__29158;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return kee_frame.router.switch_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(kee_frame.router.switch_route.cljs$core$IFn$_invoke$arity$variadic = (function (f,pairs){
if(cljs.core.even_QMARK_(cljs.core.count(pairs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("switch-route accepts an even number of args",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pairs","pairs",614609779),pairs,new cljs.core.Keyword(null,"pairs-count","pairs-count",168301941),cljs.core.count(pairs)], null));
}

var route = (function (){var G__29116 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29116) : re_frame.core.subscribe.call(null,G__29116));
})();
var dispatch_value = (function (){var G__29117 = cljs.core.deref(route);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29117) : f.call(null,G__29117));
})();
var G__29121 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),pairs);
var vec__29122 = G__29121;
var seq__29123 = cljs.core.seq(vec__29122);
var first__29124 = cljs.core.first(seq__29123);
var seq__29123__$1 = cljs.core.next(seq__29123);
var first_pair = first__29124;
var rest_pairs = seq__29123__$1;
var G__29121__$1 = G__29121;
while(true){
var vec__29125 = G__29121__$1;
var seq__29126 = cljs.core.seq(vec__29125);
var first__29127 = cljs.core.first(seq__29126);
var seq__29126__$1 = cljs.core.next(seq__29126);
var first_pair__$1 = first__29127;
var rest_pairs__$1 = seq__29126__$1;
if(cljs.core.truth_(first_pair__$1)){
var vec__29128 = first_pair__$1;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29128,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29128,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,dispatch_value)){
return kee_frame.router.make_route_component(component,cljs.core.deref(route));
} else {
var G__29160 = rest_pairs__$1;
G__29121__$1 = G__29160;
continue;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not find a component to match route. Did you remember to include a case for nil?",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"route","route",329891309),cljs.core.deref(route),new cljs.core.Keyword(null,"dispatch-value","dispatch-value",163470182),dispatch_value,new cljs.core.Keyword(null,"pairs","pairs",614609779),pairs], null));
}
break;
}
}));

(kee_frame.router.switch_route.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kee_frame.router.switch_route.cljs$lang$applyTo = (function (seq29114){
var G__29115 = cljs.core.first(seq29114);
var seq29114__$1 = cljs.core.next(seq29114);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29115,seq29114__$1);
}));


//# sourceMappingURL=kee_frame.router.js.map
