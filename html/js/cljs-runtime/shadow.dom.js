goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34306 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34306(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34308 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34308(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32988 = coll;
var G__32989 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32988,G__32989) : shadow.dom.lazy_native_coll_seq.call(null,G__32988,G__32989));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33050 = arguments.length;
switch (G__33050) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33073 = arguments.length;
switch (G__33073) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33096 = arguments.length;
switch (G__33096) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33116 = arguments.length;
switch (G__33116) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33144 = arguments.length;
switch (G__33144) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33192 = arguments.length;
switch (G__33192) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33206){if((e33206 instanceof Object)){
var e = e33206;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33206;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33224 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33225 = null;
var count__33226 = (0);
var i__33227 = (0);
while(true){
if((i__33227 < count__33226)){
var el = chunk__33225.cljs$core$IIndexed$_nth$arity$2(null,i__33227);
var handler_34323__$1 = ((function (seq__33224,chunk__33225,count__33226,i__33227,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33224,chunk__33225,count__33226,i__33227,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34323__$1);


var G__34324 = seq__33224;
var G__34325 = chunk__33225;
var G__34326 = count__33226;
var G__34327 = (i__33227 + (1));
seq__33224 = G__34324;
chunk__33225 = G__34325;
count__33226 = G__34326;
i__33227 = G__34327;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33224);
if(temp__5753__auto__){
var seq__33224__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33224__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33224__$1);
var G__34328 = cljs.core.chunk_rest(seq__33224__$1);
var G__34329 = c__4638__auto__;
var G__34330 = cljs.core.count(c__4638__auto__);
var G__34331 = (0);
seq__33224 = G__34328;
chunk__33225 = G__34329;
count__33226 = G__34330;
i__33227 = G__34331;
continue;
} else {
var el = cljs.core.first(seq__33224__$1);
var handler_34332__$1 = ((function (seq__33224,chunk__33225,count__33226,i__33227,el,seq__33224__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33224,chunk__33225,count__33226,i__33227,el,seq__33224__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34332__$1);


var G__34333 = cljs.core.next(seq__33224__$1);
var G__34334 = null;
var G__34335 = (0);
var G__34336 = (0);
seq__33224 = G__34333;
chunk__33225 = G__34334;
count__33226 = G__34335;
i__33227 = G__34336;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33269 = arguments.length;
switch (G__33269) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33321 = cljs.core.seq(events);
var chunk__33322 = null;
var count__33323 = (0);
var i__33324 = (0);
while(true){
if((i__33324 < count__33323)){
var vec__33354 = chunk__33322.cljs$core$IIndexed$_nth$arity$2(null,i__33324);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34338 = seq__33321;
var G__34339 = chunk__33322;
var G__34340 = count__33323;
var G__34341 = (i__33324 + (1));
seq__33321 = G__34338;
chunk__33322 = G__34339;
count__33323 = G__34340;
i__33324 = G__34341;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33321);
if(temp__5753__auto__){
var seq__33321__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33321__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33321__$1);
var G__34342 = cljs.core.chunk_rest(seq__33321__$1);
var G__34343 = c__4638__auto__;
var G__34344 = cljs.core.count(c__4638__auto__);
var G__34345 = (0);
seq__33321 = G__34342;
chunk__33322 = G__34343;
count__33323 = G__34344;
i__33324 = G__34345;
continue;
} else {
var vec__33374 = cljs.core.first(seq__33321__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33374,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33374,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34346 = cljs.core.next(seq__33321__$1);
var G__34347 = null;
var G__34348 = (0);
var G__34349 = (0);
seq__33321 = G__34346;
chunk__33322 = G__34347;
count__33323 = G__34348;
i__33324 = G__34349;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33390 = cljs.core.seq(styles);
var chunk__33391 = null;
var count__33392 = (0);
var i__33393 = (0);
while(true){
if((i__33393 < count__33392)){
var vec__33417 = chunk__33391.cljs$core$IIndexed$_nth$arity$2(null,i__33393);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33417,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33417,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34350 = seq__33390;
var G__34351 = chunk__33391;
var G__34352 = count__33392;
var G__34353 = (i__33393 + (1));
seq__33390 = G__34350;
chunk__33391 = G__34351;
count__33392 = G__34352;
i__33393 = G__34353;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33390);
if(temp__5753__auto__){
var seq__33390__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33390__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33390__$1);
var G__34354 = cljs.core.chunk_rest(seq__33390__$1);
var G__34355 = c__4638__auto__;
var G__34356 = cljs.core.count(c__4638__auto__);
var G__34357 = (0);
seq__33390 = G__34354;
chunk__33391 = G__34355;
count__33392 = G__34356;
i__33393 = G__34357;
continue;
} else {
var vec__33423 = cljs.core.first(seq__33390__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33423,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33423,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34358 = cljs.core.next(seq__33390__$1);
var G__34359 = null;
var G__34360 = (0);
var G__34361 = (0);
seq__33390 = G__34358;
chunk__33391 = G__34359;
count__33392 = G__34360;
i__33393 = G__34361;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33439_34362 = key;
var G__33439_34363__$1 = (((G__33439_34362 instanceof cljs.core.Keyword))?G__33439_34362.fqn:null);
switch (G__33439_34363__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34365 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_34365,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_34365,"aria-");
}
})())){
el.setAttribute(ks_34365,value);
} else {
(el[ks_34365] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33516){
var map__33517 = p__33516;
var map__33517__$1 = cljs.core.__destructure_map(map__33517);
var props = map__33517__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33517__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33521 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33521,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33521,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33521,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33527 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33527,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33527;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33534 = arguments.length;
switch (G__33534) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33556){
var vec__33558 = p__33556;
var seq__33559 = cljs.core.seq(vec__33558);
var first__33560 = cljs.core.first(seq__33559);
var seq__33559__$1 = cljs.core.next(seq__33559);
var nn = first__33560;
var first__33560__$1 = cljs.core.first(seq__33559__$1);
var seq__33559__$2 = cljs.core.next(seq__33559__$1);
var np = first__33560__$1;
var nc = seq__33559__$2;
var node = vec__33558;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33564 = nn;
var G__33565 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33564,G__33565) : create_fn.call(null,G__33564,G__33565));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33566 = nn;
var G__33567 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33566,G__33567) : create_fn.call(null,G__33566,G__33567));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33578 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33578,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33578,(1),null);
var seq__33586_34377 = cljs.core.seq(node_children);
var chunk__33587_34378 = null;
var count__33588_34379 = (0);
var i__33589_34380 = (0);
while(true){
if((i__33589_34380 < count__33588_34379)){
var child_struct_34381 = chunk__33587_34378.cljs$core$IIndexed$_nth$arity$2(null,i__33589_34380);
var children_34382 = shadow.dom.dom_node(child_struct_34381);
if(cljs.core.seq_QMARK_(children_34382)){
var seq__33631_34387 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34382));
var chunk__33633_34388 = null;
var count__33634_34389 = (0);
var i__33635_34390 = (0);
while(true){
if((i__33635_34390 < count__33634_34389)){
var child_34392 = chunk__33633_34388.cljs$core$IIndexed$_nth$arity$2(null,i__33635_34390);
if(cljs.core.truth_(child_34392)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34392);


var G__34393 = seq__33631_34387;
var G__34394 = chunk__33633_34388;
var G__34395 = count__33634_34389;
var G__34396 = (i__33635_34390 + (1));
seq__33631_34387 = G__34393;
chunk__33633_34388 = G__34394;
count__33634_34389 = G__34395;
i__33635_34390 = G__34396;
continue;
} else {
var G__34397 = seq__33631_34387;
var G__34398 = chunk__33633_34388;
var G__34399 = count__33634_34389;
var G__34400 = (i__33635_34390 + (1));
seq__33631_34387 = G__34397;
chunk__33633_34388 = G__34398;
count__33634_34389 = G__34399;
i__33635_34390 = G__34400;
continue;
}
} else {
var temp__5753__auto___34401 = cljs.core.seq(seq__33631_34387);
if(temp__5753__auto___34401){
var seq__33631_34402__$1 = temp__5753__auto___34401;
if(cljs.core.chunked_seq_QMARK_(seq__33631_34402__$1)){
var c__4638__auto___34403 = cljs.core.chunk_first(seq__33631_34402__$1);
var G__34404 = cljs.core.chunk_rest(seq__33631_34402__$1);
var G__34405 = c__4638__auto___34403;
var G__34406 = cljs.core.count(c__4638__auto___34403);
var G__34407 = (0);
seq__33631_34387 = G__34404;
chunk__33633_34388 = G__34405;
count__33634_34389 = G__34406;
i__33635_34390 = G__34407;
continue;
} else {
var child_34408 = cljs.core.first(seq__33631_34402__$1);
if(cljs.core.truth_(child_34408)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34408);


var G__34409 = cljs.core.next(seq__33631_34402__$1);
var G__34410 = null;
var G__34411 = (0);
var G__34412 = (0);
seq__33631_34387 = G__34409;
chunk__33633_34388 = G__34410;
count__33634_34389 = G__34411;
i__33635_34390 = G__34412;
continue;
} else {
var G__34413 = cljs.core.next(seq__33631_34402__$1);
var G__34414 = null;
var G__34415 = (0);
var G__34416 = (0);
seq__33631_34387 = G__34413;
chunk__33633_34388 = G__34414;
count__33634_34389 = G__34415;
i__33635_34390 = G__34416;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34382);
}


var G__34417 = seq__33586_34377;
var G__34418 = chunk__33587_34378;
var G__34419 = count__33588_34379;
var G__34420 = (i__33589_34380 + (1));
seq__33586_34377 = G__34417;
chunk__33587_34378 = G__34418;
count__33588_34379 = G__34419;
i__33589_34380 = G__34420;
continue;
} else {
var temp__5753__auto___34426 = cljs.core.seq(seq__33586_34377);
if(temp__5753__auto___34426){
var seq__33586_34427__$1 = temp__5753__auto___34426;
if(cljs.core.chunked_seq_QMARK_(seq__33586_34427__$1)){
var c__4638__auto___34428 = cljs.core.chunk_first(seq__33586_34427__$1);
var G__34429 = cljs.core.chunk_rest(seq__33586_34427__$1);
var G__34430 = c__4638__auto___34428;
var G__34431 = cljs.core.count(c__4638__auto___34428);
var G__34432 = (0);
seq__33586_34377 = G__34429;
chunk__33587_34378 = G__34430;
count__33588_34379 = G__34431;
i__33589_34380 = G__34432;
continue;
} else {
var child_struct_34438 = cljs.core.first(seq__33586_34427__$1);
var children_34439 = shadow.dom.dom_node(child_struct_34438);
if(cljs.core.seq_QMARK_(children_34439)){
var seq__33651_34440 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34439));
var chunk__33653_34441 = null;
var count__33654_34442 = (0);
var i__33655_34443 = (0);
while(true){
if((i__33655_34443 < count__33654_34442)){
var child_34449 = chunk__33653_34441.cljs$core$IIndexed$_nth$arity$2(null,i__33655_34443);
if(cljs.core.truth_(child_34449)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34449);


var G__34454 = seq__33651_34440;
var G__34455 = chunk__33653_34441;
var G__34456 = count__33654_34442;
var G__34457 = (i__33655_34443 + (1));
seq__33651_34440 = G__34454;
chunk__33653_34441 = G__34455;
count__33654_34442 = G__34456;
i__33655_34443 = G__34457;
continue;
} else {
var G__34458 = seq__33651_34440;
var G__34459 = chunk__33653_34441;
var G__34460 = count__33654_34442;
var G__34461 = (i__33655_34443 + (1));
seq__33651_34440 = G__34458;
chunk__33653_34441 = G__34459;
count__33654_34442 = G__34460;
i__33655_34443 = G__34461;
continue;
}
} else {
var temp__5753__auto___34462__$1 = cljs.core.seq(seq__33651_34440);
if(temp__5753__auto___34462__$1){
var seq__33651_34463__$1 = temp__5753__auto___34462__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33651_34463__$1)){
var c__4638__auto___34468 = cljs.core.chunk_first(seq__33651_34463__$1);
var G__34469 = cljs.core.chunk_rest(seq__33651_34463__$1);
var G__34470 = c__4638__auto___34468;
var G__34471 = cljs.core.count(c__4638__auto___34468);
var G__34472 = (0);
seq__33651_34440 = G__34469;
chunk__33653_34441 = G__34470;
count__33654_34442 = G__34471;
i__33655_34443 = G__34472;
continue;
} else {
var child_34473 = cljs.core.first(seq__33651_34463__$1);
if(cljs.core.truth_(child_34473)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34473);


var G__34474 = cljs.core.next(seq__33651_34463__$1);
var G__34475 = null;
var G__34476 = (0);
var G__34477 = (0);
seq__33651_34440 = G__34474;
chunk__33653_34441 = G__34475;
count__33654_34442 = G__34476;
i__33655_34443 = G__34477;
continue;
} else {
var G__34478 = cljs.core.next(seq__33651_34463__$1);
var G__34479 = null;
var G__34480 = (0);
var G__34481 = (0);
seq__33651_34440 = G__34478;
chunk__33653_34441 = G__34479;
count__33654_34442 = G__34480;
i__33655_34443 = G__34481;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34439);
}


var G__34482 = cljs.core.next(seq__33586_34427__$1);
var G__34483 = null;
var G__34484 = (0);
var G__34485 = (0);
seq__33586_34377 = G__34482;
chunk__33587_34378 = G__34483;
count__33588_34379 = G__34484;
i__33589_34380 = G__34485;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33693 = cljs.core.seq(node);
var chunk__33694 = null;
var count__33695 = (0);
var i__33696 = (0);
while(true){
if((i__33696 < count__33695)){
var n = chunk__33694.cljs$core$IIndexed$_nth$arity$2(null,i__33696);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34491 = seq__33693;
var G__34492 = chunk__33694;
var G__34493 = count__33695;
var G__34494 = (i__33696 + (1));
seq__33693 = G__34491;
chunk__33694 = G__34492;
count__33695 = G__34493;
i__33696 = G__34494;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33693);
if(temp__5753__auto__){
var seq__33693__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33693__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33693__$1);
var G__34495 = cljs.core.chunk_rest(seq__33693__$1);
var G__34496 = c__4638__auto__;
var G__34497 = cljs.core.count(c__4638__auto__);
var G__34498 = (0);
seq__33693 = G__34495;
chunk__33694 = G__34496;
count__33695 = G__34497;
i__33696 = G__34498;
continue;
} else {
var n = cljs.core.first(seq__33693__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34499 = cljs.core.next(seq__33693__$1);
var G__34500 = null;
var G__34501 = (0);
var G__34502 = (0);
seq__33693 = G__34499;
chunk__33694 = G__34500;
count__33695 = G__34501;
i__33696 = G__34502;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33717 = arguments.length;
switch (G__33717) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33724 = arguments.length;
switch (G__33724) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33755 = arguments.length;
switch (G__33755) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34514 = arguments.length;
var i__4819__auto___34515 = (0);
while(true){
if((i__4819__auto___34515 < len__4818__auto___34514)){
args__4824__auto__.push((arguments[i__4819__auto___34515]));

var G__34516 = (i__4819__auto___34515 + (1));
i__4819__auto___34515 = G__34516;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33789_34518 = cljs.core.seq(nodes);
var chunk__33790_34519 = null;
var count__33791_34520 = (0);
var i__33792_34521 = (0);
while(true){
if((i__33792_34521 < count__33791_34520)){
var node_34522 = chunk__33790_34519.cljs$core$IIndexed$_nth$arity$2(null,i__33792_34521);
fragment.appendChild(shadow.dom._to_dom(node_34522));


var G__34523 = seq__33789_34518;
var G__34524 = chunk__33790_34519;
var G__34525 = count__33791_34520;
var G__34526 = (i__33792_34521 + (1));
seq__33789_34518 = G__34523;
chunk__33790_34519 = G__34524;
count__33791_34520 = G__34525;
i__33792_34521 = G__34526;
continue;
} else {
var temp__5753__auto___34527 = cljs.core.seq(seq__33789_34518);
if(temp__5753__auto___34527){
var seq__33789_34534__$1 = temp__5753__auto___34527;
if(cljs.core.chunked_seq_QMARK_(seq__33789_34534__$1)){
var c__4638__auto___34535 = cljs.core.chunk_first(seq__33789_34534__$1);
var G__34537 = cljs.core.chunk_rest(seq__33789_34534__$1);
var G__34538 = c__4638__auto___34535;
var G__34539 = cljs.core.count(c__4638__auto___34535);
var G__34540 = (0);
seq__33789_34518 = G__34537;
chunk__33790_34519 = G__34538;
count__33791_34520 = G__34539;
i__33792_34521 = G__34540;
continue;
} else {
var node_34545 = cljs.core.first(seq__33789_34534__$1);
fragment.appendChild(shadow.dom._to_dom(node_34545));


var G__34548 = cljs.core.next(seq__33789_34534__$1);
var G__34549 = null;
var G__34550 = (0);
var G__34551 = (0);
seq__33789_34518 = G__34548;
chunk__33790_34519 = G__34549;
count__33791_34520 = G__34550;
i__33792_34521 = G__34551;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33783){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33783));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33815_34568 = cljs.core.seq(scripts);
var chunk__33816_34569 = null;
var count__33817_34570 = (0);
var i__33818_34571 = (0);
while(true){
if((i__33818_34571 < count__33817_34570)){
var vec__33830_34574 = chunk__33816_34569.cljs$core$IIndexed$_nth$arity$2(null,i__33818_34571);
var script_tag_34575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33830_34574,(0),null);
var script_body_34576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33830_34574,(1),null);
eval(script_body_34576);


var G__34577 = seq__33815_34568;
var G__34578 = chunk__33816_34569;
var G__34579 = count__33817_34570;
var G__34580 = (i__33818_34571 + (1));
seq__33815_34568 = G__34577;
chunk__33816_34569 = G__34578;
count__33817_34570 = G__34579;
i__33818_34571 = G__34580;
continue;
} else {
var temp__5753__auto___34581 = cljs.core.seq(seq__33815_34568);
if(temp__5753__auto___34581){
var seq__33815_34582__$1 = temp__5753__auto___34581;
if(cljs.core.chunked_seq_QMARK_(seq__33815_34582__$1)){
var c__4638__auto___34583 = cljs.core.chunk_first(seq__33815_34582__$1);
var G__34584 = cljs.core.chunk_rest(seq__33815_34582__$1);
var G__34585 = c__4638__auto___34583;
var G__34586 = cljs.core.count(c__4638__auto___34583);
var G__34587 = (0);
seq__33815_34568 = G__34584;
chunk__33816_34569 = G__34585;
count__33817_34570 = G__34586;
i__33818_34571 = G__34587;
continue;
} else {
var vec__33846_34588 = cljs.core.first(seq__33815_34582__$1);
var script_tag_34589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33846_34588,(0),null);
var script_body_34590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33846_34588,(1),null);
eval(script_body_34590);


var G__34591 = cljs.core.next(seq__33815_34582__$1);
var G__34592 = null;
var G__34593 = (0);
var G__34594 = (0);
seq__33815_34568 = G__34591;
chunk__33816_34569 = G__34592;
count__33817_34570 = G__34593;
i__33818_34571 = G__34594;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33851){
var vec__33852 = p__33851;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33852,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33852,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33869 = arguments.length;
switch (G__33869) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33888 = cljs.core.seq(style_keys);
var chunk__33889 = null;
var count__33890 = (0);
var i__33891 = (0);
while(true){
if((i__33891 < count__33890)){
var it = chunk__33889.cljs$core$IIndexed$_nth$arity$2(null,i__33891);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34625 = seq__33888;
var G__34626 = chunk__33889;
var G__34627 = count__33890;
var G__34628 = (i__33891 + (1));
seq__33888 = G__34625;
chunk__33889 = G__34626;
count__33890 = G__34627;
i__33891 = G__34628;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33888);
if(temp__5753__auto__){
var seq__33888__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33888__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33888__$1);
var G__34633 = cljs.core.chunk_rest(seq__33888__$1);
var G__34634 = c__4638__auto__;
var G__34635 = cljs.core.count(c__4638__auto__);
var G__34636 = (0);
seq__33888 = G__34633;
chunk__33889 = G__34634;
count__33890 = G__34635;
i__33891 = G__34636;
continue;
} else {
var it = cljs.core.first(seq__33888__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34637 = cljs.core.next(seq__33888__$1);
var G__34638 = null;
var G__34639 = (0);
var G__34640 = (0);
seq__33888 = G__34637;
chunk__33889 = G__34638;
count__33890 = G__34639;
i__33891 = G__34640;
continue;
}
} else {
return null;
}
}
break;
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k33893,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__33901 = k33893;
var G__33901__$1 = (((G__33901 instanceof cljs.core.Keyword))?G__33901.fqn:null);
switch (G__33901__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33893,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__33903){
var vec__33905 = p__33903;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33905,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33905,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33892){
var self__ = this;
var G__33892__$1 = this;
return (new cljs.core.RecordIter((0),G__33892__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33894,other33895){
var self__ = this;
var this33894__$1 = this;
return (((!((other33895 == null)))) && ((((this33894__$1.constructor === other33895.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33894__$1.x,other33895.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33894__$1.y,other33895.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33894__$1.__extmap,other33895.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k33893){
var self__ = this;
var this__4468__auto____$1 = this;
var G__33933 = k33893;
var G__33933__$1 = (((G__33933 instanceof cljs.core.Keyword))?G__33933.fqn:null);
switch (G__33933__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33893);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__33892){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__33936 = cljs.core.keyword_identical_QMARK_;
var expr__33937 = k__4470__auto__;
if(cljs.core.truth_((pred__33936.cljs$core$IFn$_invoke$arity$2 ? pred__33936.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33937) : pred__33936.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33937)))){
return (new shadow.dom.Coordinate(G__33892,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33936.cljs$core$IFn$_invoke$arity$2 ? pred__33936.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33937) : pred__33936.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33937)))){
return (new shadow.dom.Coordinate(self__.x,G__33892,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__33892),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__33892){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33892,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33897){
var extmap__4501__auto__ = (function (){var G__33960 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33897,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33897)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33960);
} else {
return G__33960;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33897),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33897),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k33971,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__33984 = k33971;
var G__33984__$1 = (((G__33984 instanceof cljs.core.Keyword))?G__33984.fqn:null);
switch (G__33984__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33971,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__33988){
var vec__33989 = p__33988;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33989,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33989,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33970){
var self__ = this;
var G__33970__$1 = this;
return (new cljs.core.RecordIter((0),G__33970__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33972,other33973){
var self__ = this;
var this33972__$1 = this;
return (((!((other33973 == null)))) && ((((this33972__$1.constructor === other33973.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33972__$1.w,other33973.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33972__$1.h,other33973.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33972__$1.__extmap,other33973.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k33971){
var self__ = this;
var this__4468__auto____$1 = this;
var G__34017 = k33971;
var G__34017__$1 = (((G__34017 instanceof cljs.core.Keyword))?G__34017.fqn:null);
switch (G__34017__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33971);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__33970){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__34019 = cljs.core.keyword_identical_QMARK_;
var expr__34020 = k__4470__auto__;
if(cljs.core.truth_((pred__34019.cljs$core$IFn$_invoke$arity$2 ? pred__34019.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34020) : pred__34019.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34020)))){
return (new shadow.dom.Size(G__33970,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34019.cljs$core$IFn$_invoke$arity$2 ? pred__34019.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34020) : pred__34019.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34020)))){
return (new shadow.dom.Size(self__.w,G__33970,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__33970),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__33970){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33970,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33975){
var extmap__4501__auto__ = (function (){var G__34035 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33975,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33975)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34035);
} else {
return G__34035;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33975),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33975),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__34694 = (i + (1));
var G__34695 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34694;
ret = G__34695;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34057){
var vec__34058 = p__34057;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34058,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34058,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34062 = arguments.length;
switch (G__34062) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34710 = ps;
var G__34711 = (i + (1));
el__$1 = G__34710;
i = G__34711;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34074 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34074,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34074,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34074,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34077_34719 = cljs.core.seq(props);
var chunk__34078_34720 = null;
var count__34079_34721 = (0);
var i__34080_34722 = (0);
while(true){
if((i__34080_34722 < count__34079_34721)){
var vec__34087_34723 = chunk__34078_34720.cljs$core$IIndexed$_nth$arity$2(null,i__34080_34722);
var k_34724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34087_34723,(0),null);
var v_34725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34087_34723,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34724);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34724),v_34725);


var G__34726 = seq__34077_34719;
var G__34727 = chunk__34078_34720;
var G__34728 = count__34079_34721;
var G__34729 = (i__34080_34722 + (1));
seq__34077_34719 = G__34726;
chunk__34078_34720 = G__34727;
count__34079_34721 = G__34728;
i__34080_34722 = G__34729;
continue;
} else {
var temp__5753__auto___34730 = cljs.core.seq(seq__34077_34719);
if(temp__5753__auto___34730){
var seq__34077_34731__$1 = temp__5753__auto___34730;
if(cljs.core.chunked_seq_QMARK_(seq__34077_34731__$1)){
var c__4638__auto___34732 = cljs.core.chunk_first(seq__34077_34731__$1);
var G__34733 = cljs.core.chunk_rest(seq__34077_34731__$1);
var G__34734 = c__4638__auto___34732;
var G__34736 = cljs.core.count(c__4638__auto___34732);
var G__34737 = (0);
seq__34077_34719 = G__34733;
chunk__34078_34720 = G__34734;
count__34079_34721 = G__34736;
i__34080_34722 = G__34737;
continue;
} else {
var vec__34090_34741 = cljs.core.first(seq__34077_34731__$1);
var k_34742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34090_34741,(0),null);
var v_34743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34090_34741,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34742);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34742),v_34743);


var G__34744 = cljs.core.next(seq__34077_34731__$1);
var G__34745 = null;
var G__34746 = (0);
var G__34747 = (0);
seq__34077_34719 = G__34744;
chunk__34078_34720 = G__34745;
count__34079_34721 = G__34746;
i__34080_34722 = G__34747;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34097 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34097,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34097,(1),null);
var seq__34100_34749 = cljs.core.seq(node_children);
var chunk__34102_34750 = null;
var count__34103_34751 = (0);
var i__34104_34752 = (0);
while(true){
if((i__34104_34752 < count__34103_34751)){
var child_struct_34753 = chunk__34102_34750.cljs$core$IIndexed$_nth$arity$2(null,i__34104_34752);
if((!((child_struct_34753 == null)))){
if(typeof child_struct_34753 === 'string'){
var text_34754 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34754),child_struct_34753].join(''));
} else {
var children_34755 = shadow.dom.svg_node(child_struct_34753);
if(cljs.core.seq_QMARK_(children_34755)){
var seq__34145_34756 = cljs.core.seq(children_34755);
var chunk__34147_34757 = null;
var count__34148_34758 = (0);
var i__34149_34759 = (0);
while(true){
if((i__34149_34759 < count__34148_34758)){
var child_34760 = chunk__34147_34757.cljs$core$IIndexed$_nth$arity$2(null,i__34149_34759);
if(cljs.core.truth_(child_34760)){
node.appendChild(child_34760);


var G__34761 = seq__34145_34756;
var G__34762 = chunk__34147_34757;
var G__34763 = count__34148_34758;
var G__34764 = (i__34149_34759 + (1));
seq__34145_34756 = G__34761;
chunk__34147_34757 = G__34762;
count__34148_34758 = G__34763;
i__34149_34759 = G__34764;
continue;
} else {
var G__34766 = seq__34145_34756;
var G__34767 = chunk__34147_34757;
var G__34768 = count__34148_34758;
var G__34769 = (i__34149_34759 + (1));
seq__34145_34756 = G__34766;
chunk__34147_34757 = G__34767;
count__34148_34758 = G__34768;
i__34149_34759 = G__34769;
continue;
}
} else {
var temp__5753__auto___34770 = cljs.core.seq(seq__34145_34756);
if(temp__5753__auto___34770){
var seq__34145_34771__$1 = temp__5753__auto___34770;
if(cljs.core.chunked_seq_QMARK_(seq__34145_34771__$1)){
var c__4638__auto___34772 = cljs.core.chunk_first(seq__34145_34771__$1);
var G__34773 = cljs.core.chunk_rest(seq__34145_34771__$1);
var G__34774 = c__4638__auto___34772;
var G__34775 = cljs.core.count(c__4638__auto___34772);
var G__34776 = (0);
seq__34145_34756 = G__34773;
chunk__34147_34757 = G__34774;
count__34148_34758 = G__34775;
i__34149_34759 = G__34776;
continue;
} else {
var child_34777 = cljs.core.first(seq__34145_34771__$1);
if(cljs.core.truth_(child_34777)){
node.appendChild(child_34777);


var G__34779 = cljs.core.next(seq__34145_34771__$1);
var G__34780 = null;
var G__34781 = (0);
var G__34782 = (0);
seq__34145_34756 = G__34779;
chunk__34147_34757 = G__34780;
count__34148_34758 = G__34781;
i__34149_34759 = G__34782;
continue;
} else {
var G__34784 = cljs.core.next(seq__34145_34771__$1);
var G__34785 = null;
var G__34786 = (0);
var G__34787 = (0);
seq__34145_34756 = G__34784;
chunk__34147_34757 = G__34785;
count__34148_34758 = G__34786;
i__34149_34759 = G__34787;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34755);
}
}


var G__34788 = seq__34100_34749;
var G__34789 = chunk__34102_34750;
var G__34790 = count__34103_34751;
var G__34791 = (i__34104_34752 + (1));
seq__34100_34749 = G__34788;
chunk__34102_34750 = G__34789;
count__34103_34751 = G__34790;
i__34104_34752 = G__34791;
continue;
} else {
var G__34795 = seq__34100_34749;
var G__34796 = chunk__34102_34750;
var G__34797 = count__34103_34751;
var G__34798 = (i__34104_34752 + (1));
seq__34100_34749 = G__34795;
chunk__34102_34750 = G__34796;
count__34103_34751 = G__34797;
i__34104_34752 = G__34798;
continue;
}
} else {
var temp__5753__auto___34799 = cljs.core.seq(seq__34100_34749);
if(temp__5753__auto___34799){
var seq__34100_34800__$1 = temp__5753__auto___34799;
if(cljs.core.chunked_seq_QMARK_(seq__34100_34800__$1)){
var c__4638__auto___34801 = cljs.core.chunk_first(seq__34100_34800__$1);
var G__34803 = cljs.core.chunk_rest(seq__34100_34800__$1);
var G__34804 = c__4638__auto___34801;
var G__34805 = cljs.core.count(c__4638__auto___34801);
var G__34806 = (0);
seq__34100_34749 = G__34803;
chunk__34102_34750 = G__34804;
count__34103_34751 = G__34805;
i__34104_34752 = G__34806;
continue;
} else {
var child_struct_34808 = cljs.core.first(seq__34100_34800__$1);
if((!((child_struct_34808 == null)))){
if(typeof child_struct_34808 === 'string'){
var text_34809 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34809),child_struct_34808].join(''));
} else {
var children_34810 = shadow.dom.svg_node(child_struct_34808);
if(cljs.core.seq_QMARK_(children_34810)){
var seq__34179_34811 = cljs.core.seq(children_34810);
var chunk__34182_34812 = null;
var count__34183_34813 = (0);
var i__34184_34814 = (0);
while(true){
if((i__34184_34814 < count__34183_34813)){
var child_34815 = chunk__34182_34812.cljs$core$IIndexed$_nth$arity$2(null,i__34184_34814);
if(cljs.core.truth_(child_34815)){
node.appendChild(child_34815);


var G__34816 = seq__34179_34811;
var G__34817 = chunk__34182_34812;
var G__34818 = count__34183_34813;
var G__34819 = (i__34184_34814 + (1));
seq__34179_34811 = G__34816;
chunk__34182_34812 = G__34817;
count__34183_34813 = G__34818;
i__34184_34814 = G__34819;
continue;
} else {
var G__34821 = seq__34179_34811;
var G__34822 = chunk__34182_34812;
var G__34823 = count__34183_34813;
var G__34824 = (i__34184_34814 + (1));
seq__34179_34811 = G__34821;
chunk__34182_34812 = G__34822;
count__34183_34813 = G__34823;
i__34184_34814 = G__34824;
continue;
}
} else {
var temp__5753__auto___34826__$1 = cljs.core.seq(seq__34179_34811);
if(temp__5753__auto___34826__$1){
var seq__34179_34827__$1 = temp__5753__auto___34826__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34179_34827__$1)){
var c__4638__auto___34828 = cljs.core.chunk_first(seq__34179_34827__$1);
var G__34829 = cljs.core.chunk_rest(seq__34179_34827__$1);
var G__34830 = c__4638__auto___34828;
var G__34831 = cljs.core.count(c__4638__auto___34828);
var G__34832 = (0);
seq__34179_34811 = G__34829;
chunk__34182_34812 = G__34830;
count__34183_34813 = G__34831;
i__34184_34814 = G__34832;
continue;
} else {
var child_34833 = cljs.core.first(seq__34179_34827__$1);
if(cljs.core.truth_(child_34833)){
node.appendChild(child_34833);


var G__34834 = cljs.core.next(seq__34179_34827__$1);
var G__34835 = null;
var G__34836 = (0);
var G__34837 = (0);
seq__34179_34811 = G__34834;
chunk__34182_34812 = G__34835;
count__34183_34813 = G__34836;
i__34184_34814 = G__34837;
continue;
} else {
var G__34838 = cljs.core.next(seq__34179_34827__$1);
var G__34839 = null;
var G__34840 = (0);
var G__34841 = (0);
seq__34179_34811 = G__34838;
chunk__34182_34812 = G__34839;
count__34183_34813 = G__34840;
i__34184_34814 = G__34841;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34810);
}
}


var G__34842 = cljs.core.next(seq__34100_34800__$1);
var G__34843 = null;
var G__34844 = (0);
var G__34845 = (0);
seq__34100_34749 = G__34842;
chunk__34102_34750 = G__34843;
count__34103_34751 = G__34844;
i__34104_34752 = G__34845;
continue;
} else {
var G__34846 = cljs.core.next(seq__34100_34800__$1);
var G__34847 = null;
var G__34848 = (0);
var G__34849 = (0);
seq__34100_34749 = G__34846;
chunk__34102_34750 = G__34847;
count__34103_34751 = G__34848;
i__34104_34752 = G__34849;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34852 = arguments.length;
var i__4819__auto___34856 = (0);
while(true){
if((i__4819__auto___34856 < len__4818__auto___34852)){
args__4824__auto__.push((arguments[i__4819__auto___34856]));

var G__34857 = (i__4819__auto___34856 + (1));
i__4819__auto___34856 = G__34857;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34264){
var G__34265 = cljs.core.first(seq34264);
var seq34264__$1 = cljs.core.next(seq34264);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34265,seq34264__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34269 = arguments.length;
switch (G__34269) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__28997__auto___34868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_34277){
var state_val_34278 = (state_34277[(1)]);
if((state_val_34278 === (1))){
var state_34277__$1 = state_34277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34277__$1,(2),once_or_cleanup);
} else {
if((state_val_34278 === (2))){
var inst_34274 = (state_34277[(2)]);
var inst_34275 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34277__$1 = (function (){var statearr_34281 = state_34277;
(statearr_34281[(7)] = inst_34274);

return statearr_34281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34277__$1,inst_34275);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28629__auto__ = null;
var shadow$dom$state_machine__28629__auto____0 = (function (){
var statearr_34286 = [null,null,null,null,null,null,null,null];
(statearr_34286[(0)] = shadow$dom$state_machine__28629__auto__);

(statearr_34286[(1)] = (1));

return statearr_34286;
});
var shadow$dom$state_machine__28629__auto____1 = (function (state_34277){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_34277);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e34287){var ex__28632__auto__ = e34287;
var statearr_34289_34873 = state_34277;
(statearr_34289_34873[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_34277[(4)]))){
var statearr_34290_34874 = state_34277;
(statearr_34290_34874[(1)] = cljs.core.first((state_34277[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34875 = state_34277;
state_34277 = G__34875;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
shadow$dom$state_machine__28629__auto__ = function(state_34277){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28629__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28629__auto____1.call(this,state_34277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28629__auto____0;
shadow$dom$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28629__auto____1;
return shadow$dom$state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_34295 = f__28998__auto__();
(statearr_34295[(6)] = c__28997__auto___34868);

return statearr_34295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
