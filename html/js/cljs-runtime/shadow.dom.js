goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__31575 = coll;
var G__31576 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__31575,G__31576) : shadow.dom.lazy_native_coll_seq.call(null,G__31575,G__31576));
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
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
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
var G__31623 = arguments.length;
switch (G__31623) {
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
var G__31634 = arguments.length;
switch (G__31634) {
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
var G__31652 = arguments.length;
switch (G__31652) {
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
var G__31664 = arguments.length;
switch (G__31664) {
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
var G__31678 = arguments.length;
switch (G__31678) {
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
var G__31682 = document;
var G__31683 = shadow.dom.dom_node(el);
return goog.dom.contains(G__31682,G__31683);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__31686 = shadow.dom.dom_node(parent);
var G__31687 = shadow.dom.dom_node(el);
return goog.dom.contains(G__31686,G__31687);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__31695 = shadow.dom.dom_node(el);
var G__31696 = cls;
return goog.dom.classlist.add(G__31695,G__31696);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__31698 = shadow.dom.dom_node(el);
var G__31699 = cls;
return goog.dom.classlist.remove(G__31698,G__31699);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__31707 = arguments.length;
switch (G__31707) {
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
var G__31715 = shadow.dom.dom_node(el);
var G__31716 = cls;
return goog.dom.classlist.toggle(G__31715,G__31716);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e31722){if((e31722 instanceof Object)){
var e = e31722;
return console.log("didnt support attachEvent",el,e);
} else {
throw e31722;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__31763 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__31764 = null;
var count__31765 = (0);
var i__31766 = (0);
while(true){
if((i__31766 < count__31765)){
var el = chunk__31764.cljs$core$IIndexed$_nth$arity$2(null,i__31766);
var handler_32974__$1 = ((function (seq__31763,chunk__31764,count__31765,i__31766,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31763,chunk__31764,count__31765,i__31766,el))
;
var G__31786_32975 = el;
var G__31787_32976 = cljs.core.name(ev);
var G__31788_32977 = handler_32974__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__31786_32975,G__31787_32976,G__31788_32977) : shadow.dom.dom_listen.call(null,G__31786_32975,G__31787_32976,G__31788_32977));


var G__32982 = seq__31763;
var G__32983 = chunk__31764;
var G__32984 = count__31765;
var G__32985 = (i__31766 + (1));
seq__31763 = G__32982;
chunk__31764 = G__32983;
count__31765 = G__32984;
i__31766 = G__32985;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31763);
if(temp__5735__auto__){
var seq__31763__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31763__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__31763__$1);
var G__33000 = cljs.core.chunk_rest(seq__31763__$1);
var G__33001 = c__4609__auto__;
var G__33002 = cljs.core.count(c__4609__auto__);
var G__33003 = (0);
seq__31763 = G__33000;
chunk__31764 = G__33001;
count__31765 = G__33002;
i__31766 = G__33003;
continue;
} else {
var el = cljs.core.first(seq__31763__$1);
var handler_33010__$1 = ((function (seq__31763,chunk__31764,count__31765,i__31766,el,seq__31763__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31763,chunk__31764,count__31765,i__31766,el,seq__31763__$1,temp__5735__auto__))
;
var G__31793_33012 = el;
var G__31794_33013 = cljs.core.name(ev);
var G__31795_33014 = handler_33010__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__31793_33012,G__31794_33013,G__31795_33014) : shadow.dom.dom_listen.call(null,G__31793_33012,G__31794_33013,G__31795_33014));


var G__33016 = cljs.core.next(seq__31763__$1);
var G__33017 = null;
var G__33018 = (0);
var G__33019 = (0);
seq__31763 = G__33016;
chunk__31764 = G__33017;
count__31765 = G__33018;
i__31766 = G__33019;
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
var G__31802 = arguments.length;
switch (G__31802) {
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
var G__31813 = shadow.dom.dom_node(el);
var G__31814 = cljs.core.name(ev);
var G__31815 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__31813,G__31814,G__31815) : shadow.dom.dom_listen.call(null,G__31813,G__31814,G__31815));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__31821 = shadow.dom.dom_node(el);
var G__31822 = cljs.core.name(ev);
var G__31823 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__31821,G__31822,G__31823) : shadow.dom.dom_listen_remove.call(null,G__31821,G__31822,G__31823));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__31827 = cljs.core.seq(events);
var chunk__31828 = null;
var count__31829 = (0);
var i__31830 = (0);
while(true){
if((i__31830 < count__31829)){
var vec__31850 = chunk__31828.cljs$core$IIndexed$_nth$arity$2(null,i__31830);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31850,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31850,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33051 = seq__31827;
var G__33052 = chunk__31828;
var G__33053 = count__31829;
var G__33054 = (i__31830 + (1));
seq__31827 = G__33051;
chunk__31828 = G__33052;
count__31829 = G__33053;
i__31830 = G__33054;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31827);
if(temp__5735__auto__){
var seq__31827__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31827__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__31827__$1);
var G__33063 = cljs.core.chunk_rest(seq__31827__$1);
var G__33064 = c__4609__auto__;
var G__33065 = cljs.core.count(c__4609__auto__);
var G__33066 = (0);
seq__31827 = G__33063;
chunk__31828 = G__33064;
count__31829 = G__33065;
i__31830 = G__33066;
continue;
} else {
var vec__31857 = cljs.core.first(seq__31827__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31857,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31857,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33068 = cljs.core.next(seq__31827__$1);
var G__33069 = null;
var G__33070 = (0);
var G__33071 = (0);
seq__31827 = G__33068;
chunk__31828 = G__33069;
count__31829 = G__33070;
i__31830 = G__33071;
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
var seq__31870 = cljs.core.seq(styles);
var chunk__31871 = null;
var count__31872 = (0);
var i__31873 = (0);
while(true){
if((i__31873 < count__31872)){
var vec__31910 = chunk__31871.cljs$core$IIndexed$_nth$arity$2(null,i__31873);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31910,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31910,(1),null);
var G__31916_33077 = dom;
var G__31918_33078 = cljs.core.name(k);
var G__31919_33079 = (((v == null))?"":v);
goog.style.setStyle(G__31916_33077,G__31918_33078,G__31919_33079);


var G__33080 = seq__31870;
var G__33081 = chunk__31871;
var G__33082 = count__31872;
var G__33083 = (i__31873 + (1));
seq__31870 = G__33080;
chunk__31871 = G__33081;
count__31872 = G__33082;
i__31873 = G__33083;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31870);
if(temp__5735__auto__){
var seq__31870__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31870__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__31870__$1);
var G__33088 = cljs.core.chunk_rest(seq__31870__$1);
var G__33089 = c__4609__auto__;
var G__33090 = cljs.core.count(c__4609__auto__);
var G__33091 = (0);
seq__31870 = G__33088;
chunk__31871 = G__33089;
count__31872 = G__33090;
i__31873 = G__33091;
continue;
} else {
var vec__31923 = cljs.core.first(seq__31870__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31923,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31923,(1),null);
var G__31929_33093 = dom;
var G__31930_33094 = cljs.core.name(k);
var G__31931_33095 = (((v == null))?"":v);
goog.style.setStyle(G__31929_33093,G__31930_33094,G__31931_33095);


var G__33096 = cljs.core.next(seq__31870__$1);
var G__33097 = null;
var G__33098 = (0);
var G__33099 = (0);
seq__31870 = G__33096;
chunk__31871 = G__33097;
count__31872 = G__33098;
i__31873 = G__33099;
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
var G__31948_33104 = key;
var G__31948_33105__$1 = (((G__31948_33104 instanceof cljs.core.Keyword))?G__31948_33104.fqn:null);
switch (G__31948_33105__$1) {
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
var ks_33111 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33111,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33111,"aria-");
}
})())){
el.setAttribute(ks_33111,value);
} else {
(el[ks_33111] = value);
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
var G__31980 = shadow.dom.dom_node(el);
var G__31981 = cls;
return goog.dom.classlist.contains(G__31980,G__31981);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32022){
var map__32026 = p__32022;
var map__32026__$1 = (((((!((map__32026 == null))))?(((((map__32026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32026):map__32026);
var props = map__32026__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32026__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32035 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32035,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32035,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32035,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32047 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32047,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32047;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32056 = arguments.length;
switch (G__32056) {
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
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
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
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32071){
var vec__32073 = p__32071;
var seq__32074 = cljs.core.seq(vec__32073);
var first__32075 = cljs.core.first(seq__32074);
var seq__32074__$1 = cljs.core.next(seq__32074);
var nn = first__32075;
var first__32075__$1 = cljs.core.first(seq__32074__$1);
var seq__32074__$2 = cljs.core.next(seq__32074__$1);
var np = first__32075__$1;
var nc = seq__32074__$2;
var node = vec__32073;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32077 = nn;
var G__32078 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32077,G__32078) : create_fn.call(null,G__32077,G__32078));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32084 = nn;
var G__32085 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32084,G__32085) : create_fn.call(null,G__32084,G__32085));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32100 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32100,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32100,(1),null);
var seq__32105_33167 = cljs.core.seq(node_children);
var chunk__32106_33168 = null;
var count__32107_33169 = (0);
var i__32108_33170 = (0);
while(true){
if((i__32108_33170 < count__32107_33169)){
var child_struct_33171 = chunk__32106_33168.cljs$core$IIndexed$_nth$arity$2(null,i__32108_33170);
var children_33173 = shadow.dom.dom_node(child_struct_33171);
if(cljs.core.seq_QMARK_(children_33173)){
var seq__32167_33174 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33173));
var chunk__32169_33175 = null;
var count__32170_33176 = (0);
var i__32171_33177 = (0);
while(true){
if((i__32171_33177 < count__32170_33176)){
var child_33188 = chunk__32169_33175.cljs$core$IIndexed$_nth$arity$2(null,i__32171_33177);
if(cljs.core.truth_(child_33188)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33188);


var G__33190 = seq__32167_33174;
var G__33191 = chunk__32169_33175;
var G__33192 = count__32170_33176;
var G__33193 = (i__32171_33177 + (1));
seq__32167_33174 = G__33190;
chunk__32169_33175 = G__33191;
count__32170_33176 = G__33192;
i__32171_33177 = G__33193;
continue;
} else {
var G__33197 = seq__32167_33174;
var G__33198 = chunk__32169_33175;
var G__33199 = count__32170_33176;
var G__33200 = (i__32171_33177 + (1));
seq__32167_33174 = G__33197;
chunk__32169_33175 = G__33198;
count__32170_33176 = G__33199;
i__32171_33177 = G__33200;
continue;
}
} else {
var temp__5735__auto___33204 = cljs.core.seq(seq__32167_33174);
if(temp__5735__auto___33204){
var seq__32167_33207__$1 = temp__5735__auto___33204;
if(cljs.core.chunked_seq_QMARK_(seq__32167_33207__$1)){
var c__4609__auto___33210 = cljs.core.chunk_first(seq__32167_33207__$1);
var G__33211 = cljs.core.chunk_rest(seq__32167_33207__$1);
var G__33212 = c__4609__auto___33210;
var G__33213 = cljs.core.count(c__4609__auto___33210);
var G__33214 = (0);
seq__32167_33174 = G__33211;
chunk__32169_33175 = G__33212;
count__32170_33176 = G__33213;
i__32171_33177 = G__33214;
continue;
} else {
var child_33219 = cljs.core.first(seq__32167_33207__$1);
if(cljs.core.truth_(child_33219)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33219);


var G__33221 = cljs.core.next(seq__32167_33207__$1);
var G__33222 = null;
var G__33223 = (0);
var G__33224 = (0);
seq__32167_33174 = G__33221;
chunk__32169_33175 = G__33222;
count__32170_33176 = G__33223;
i__32171_33177 = G__33224;
continue;
} else {
var G__33227 = cljs.core.next(seq__32167_33207__$1);
var G__33228 = null;
var G__33229 = (0);
var G__33230 = (0);
seq__32167_33174 = G__33227;
chunk__32169_33175 = G__33228;
count__32170_33176 = G__33229;
i__32171_33177 = G__33230;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33173);
}


var G__33232 = seq__32105_33167;
var G__33233 = chunk__32106_33168;
var G__33234 = count__32107_33169;
var G__33235 = (i__32108_33170 + (1));
seq__32105_33167 = G__33232;
chunk__32106_33168 = G__33233;
count__32107_33169 = G__33234;
i__32108_33170 = G__33235;
continue;
} else {
var temp__5735__auto___33237 = cljs.core.seq(seq__32105_33167);
if(temp__5735__auto___33237){
var seq__32105_33239__$1 = temp__5735__auto___33237;
if(cljs.core.chunked_seq_QMARK_(seq__32105_33239__$1)){
var c__4609__auto___33240 = cljs.core.chunk_first(seq__32105_33239__$1);
var G__33242 = cljs.core.chunk_rest(seq__32105_33239__$1);
var G__33243 = c__4609__auto___33240;
var G__33244 = cljs.core.count(c__4609__auto___33240);
var G__33245 = (0);
seq__32105_33167 = G__33242;
chunk__32106_33168 = G__33243;
count__32107_33169 = G__33244;
i__32108_33170 = G__33245;
continue;
} else {
var child_struct_33248 = cljs.core.first(seq__32105_33239__$1);
var children_33253 = shadow.dom.dom_node(child_struct_33248);
if(cljs.core.seq_QMARK_(children_33253)){
var seq__32182_33254 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33253));
var chunk__32184_33255 = null;
var count__32185_33256 = (0);
var i__32186_33257 = (0);
while(true){
if((i__32186_33257 < count__32185_33256)){
var child_33259 = chunk__32184_33255.cljs$core$IIndexed$_nth$arity$2(null,i__32186_33257);
if(cljs.core.truth_(child_33259)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33259);


var G__33265 = seq__32182_33254;
var G__33266 = chunk__32184_33255;
var G__33267 = count__32185_33256;
var G__33268 = (i__32186_33257 + (1));
seq__32182_33254 = G__33265;
chunk__32184_33255 = G__33266;
count__32185_33256 = G__33267;
i__32186_33257 = G__33268;
continue;
} else {
var G__33275 = seq__32182_33254;
var G__33276 = chunk__32184_33255;
var G__33277 = count__32185_33256;
var G__33278 = (i__32186_33257 + (1));
seq__32182_33254 = G__33275;
chunk__32184_33255 = G__33276;
count__32185_33256 = G__33277;
i__32186_33257 = G__33278;
continue;
}
} else {
var temp__5735__auto___33279__$1 = cljs.core.seq(seq__32182_33254);
if(temp__5735__auto___33279__$1){
var seq__32182_33280__$1 = temp__5735__auto___33279__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32182_33280__$1)){
var c__4609__auto___33281 = cljs.core.chunk_first(seq__32182_33280__$1);
var G__33282 = cljs.core.chunk_rest(seq__32182_33280__$1);
var G__33283 = c__4609__auto___33281;
var G__33284 = cljs.core.count(c__4609__auto___33281);
var G__33285 = (0);
seq__32182_33254 = G__33282;
chunk__32184_33255 = G__33283;
count__32185_33256 = G__33284;
i__32186_33257 = G__33285;
continue;
} else {
var child_33288 = cljs.core.first(seq__32182_33280__$1);
if(cljs.core.truth_(child_33288)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33288);


var G__33291 = cljs.core.next(seq__32182_33280__$1);
var G__33292 = null;
var G__33293 = (0);
var G__33294 = (0);
seq__32182_33254 = G__33291;
chunk__32184_33255 = G__33292;
count__32185_33256 = G__33293;
i__32186_33257 = G__33294;
continue;
} else {
var G__33300 = cljs.core.next(seq__32182_33280__$1);
var G__33301 = null;
var G__33302 = (0);
var G__33303 = (0);
seq__32182_33254 = G__33300;
chunk__32184_33255 = G__33301;
count__32185_33256 = G__33302;
i__32186_33257 = G__33303;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33253);
}


var G__33308 = cljs.core.next(seq__32105_33239__$1);
var G__33309 = null;
var G__33310 = (0);
var G__33311 = (0);
seq__32105_33167 = G__33308;
chunk__32106_33168 = G__33309;
count__32107_33169 = G__33310;
i__32108_33170 = G__33311;
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
var G__32195 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__32195);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32197 = cljs.core.seq(node);
var chunk__32198 = null;
var count__32199 = (0);
var i__32200 = (0);
while(true){
if((i__32200 < count__32199)){
var n = chunk__32198.cljs$core$IIndexed$_nth$arity$2(null,i__32200);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33338 = seq__32197;
var G__33339 = chunk__32198;
var G__33340 = count__32199;
var G__33341 = (i__32200 + (1));
seq__32197 = G__33338;
chunk__32198 = G__33339;
count__32199 = G__33340;
i__32200 = G__33341;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32197);
if(temp__5735__auto__){
var seq__32197__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32197__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32197__$1);
var G__33344 = cljs.core.chunk_rest(seq__32197__$1);
var G__33345 = c__4609__auto__;
var G__33346 = cljs.core.count(c__4609__auto__);
var G__33347 = (0);
seq__32197 = G__33344;
chunk__32198 = G__33345;
count__32199 = G__33346;
i__32200 = G__33347;
continue;
} else {
var n = cljs.core.first(seq__32197__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33348 = cljs.core.next(seq__32197__$1);
var G__33349 = null;
var G__33350 = (0);
var G__33351 = (0);
seq__32197 = G__33348;
chunk__32198 = G__33349;
count__32199 = G__33350;
i__32200 = G__33351;
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
var G__32213 = shadow.dom.dom_node(new$);
var G__32214 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__32213,G__32214);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32221 = arguments.length;
switch (G__32221) {
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
var G__32238 = arguments.length;
switch (G__32238) {
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
var G__32253 = arguments.length;
switch (G__32253) {
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
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
var args__4795__auto__ = [];
var len__4789__auto___33403 = arguments.length;
var i__4790__auto___33404 = (0);
while(true){
if((i__4790__auto___33404 < len__4789__auto___33403)){
args__4795__auto__.push((arguments[i__4790__auto___33404]));

var G__33407 = (i__4790__auto___33404 + (1));
i__4790__auto___33404 = G__33407;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32276_33411 = cljs.core.seq(nodes);
var chunk__32277_33412 = null;
var count__32278_33413 = (0);
var i__32279_33414 = (0);
while(true){
if((i__32279_33414 < count__32278_33413)){
var node_33418 = chunk__32277_33412.cljs$core$IIndexed$_nth$arity$2(null,i__32279_33414);
fragment.appendChild(shadow.dom._to_dom(node_33418));


var G__33419 = seq__32276_33411;
var G__33420 = chunk__32277_33412;
var G__33421 = count__32278_33413;
var G__33422 = (i__32279_33414 + (1));
seq__32276_33411 = G__33419;
chunk__32277_33412 = G__33420;
count__32278_33413 = G__33421;
i__32279_33414 = G__33422;
continue;
} else {
var temp__5735__auto___33428 = cljs.core.seq(seq__32276_33411);
if(temp__5735__auto___33428){
var seq__32276_33430__$1 = temp__5735__auto___33428;
if(cljs.core.chunked_seq_QMARK_(seq__32276_33430__$1)){
var c__4609__auto___33431 = cljs.core.chunk_first(seq__32276_33430__$1);
var G__33433 = cljs.core.chunk_rest(seq__32276_33430__$1);
var G__33434 = c__4609__auto___33431;
var G__33435 = cljs.core.count(c__4609__auto___33431);
var G__33436 = (0);
seq__32276_33411 = G__33433;
chunk__32277_33412 = G__33434;
count__32278_33413 = G__33435;
i__32279_33414 = G__33436;
continue;
} else {
var node_33438 = cljs.core.first(seq__32276_33430__$1);
fragment.appendChild(shadow.dom._to_dom(node_33438));


var G__33439 = cljs.core.next(seq__32276_33430__$1);
var G__33440 = null;
var G__33441 = (0);
var G__33442 = (0);
seq__32276_33411 = G__33439;
chunk__32277_33412 = G__33440;
count__32278_33413 = G__33441;
i__32279_33414 = G__33442;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32271){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32271));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32310_33455 = cljs.core.seq(scripts);
var chunk__32311_33456 = null;
var count__32312_33457 = (0);
var i__32313_33458 = (0);
while(true){
if((i__32313_33458 < count__32312_33457)){
var vec__32336_33459 = chunk__32311_33456.cljs$core$IIndexed$_nth$arity$2(null,i__32313_33458);
var script_tag_33460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32336_33459,(0),null);
var script_body_33461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32336_33459,(1),null);
eval(script_body_33461);


var G__33462 = seq__32310_33455;
var G__33463 = chunk__32311_33456;
var G__33464 = count__32312_33457;
var G__33465 = (i__32313_33458 + (1));
seq__32310_33455 = G__33462;
chunk__32311_33456 = G__33463;
count__32312_33457 = G__33464;
i__32313_33458 = G__33465;
continue;
} else {
var temp__5735__auto___33466 = cljs.core.seq(seq__32310_33455);
if(temp__5735__auto___33466){
var seq__32310_33468__$1 = temp__5735__auto___33466;
if(cljs.core.chunked_seq_QMARK_(seq__32310_33468__$1)){
var c__4609__auto___33469 = cljs.core.chunk_first(seq__32310_33468__$1);
var G__33470 = cljs.core.chunk_rest(seq__32310_33468__$1);
var G__33471 = c__4609__auto___33469;
var G__33472 = cljs.core.count(c__4609__auto___33469);
var G__33473 = (0);
seq__32310_33455 = G__33470;
chunk__32311_33456 = G__33471;
count__32312_33457 = G__33472;
i__32313_33458 = G__33473;
continue;
} else {
var vec__32340_33476 = cljs.core.first(seq__32310_33468__$1);
var script_tag_33477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32340_33476,(0),null);
var script_body_33478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32340_33476,(1),null);
eval(script_body_33478);


var G__33488 = cljs.core.next(seq__32310_33468__$1);
var G__33489 = null;
var G__33490 = (0);
var G__33491 = (0);
seq__32310_33455 = G__33488;
chunk__32311_33456 = G__33489;
count__32312_33457 = G__33490;
i__32313_33458 = G__33491;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32358){
var vec__32359 = p__32358;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32359,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32359,(1),null);
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
var G__32383 = shadow.dom.dom_node(el);
var G__32384 = cls;
return goog.dom.getAncestorByClass(G__32383,G__32384);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32393 = arguments.length;
switch (G__32393) {
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
var G__32397 = shadow.dom.dom_node(el);
var G__32398 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__32397,G__32398);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__32399 = shadow.dom.dom_node(el);
var G__32400 = cljs.core.name(tag);
var G__32401 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__32399,G__32400,G__32401);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__32408 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__32408);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__32409 = shadow.dom.dom_node(dom);
var G__32410 = value;
return goog.dom.forms.setValue(G__32409,G__32410);
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
var seq__32423 = cljs.core.seq(style_keys);
var chunk__32424 = null;
var count__32425 = (0);
var i__32426 = (0);
while(true){
if((i__32426 < count__32425)){
var it = chunk__32424.cljs$core$IIndexed$_nth$arity$2(null,i__32426);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33531 = seq__32423;
var G__33532 = chunk__32424;
var G__33533 = count__32425;
var G__33534 = (i__32426 + (1));
seq__32423 = G__33531;
chunk__32424 = G__33532;
count__32425 = G__33533;
i__32426 = G__33534;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32423);
if(temp__5735__auto__){
var seq__32423__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32423__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32423__$1);
var G__33540 = cljs.core.chunk_rest(seq__32423__$1);
var G__33541 = c__4609__auto__;
var G__33542 = cljs.core.count(c__4609__auto__);
var G__33543 = (0);
seq__32423 = G__33540;
chunk__32424 = G__33541;
count__32425 = G__33542;
i__32426 = G__33543;
continue;
} else {
var it = cljs.core.first(seq__32423__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33544 = cljs.core.next(seq__32423__$1);
var G__33545 = null;
var G__33546 = (0);
var G__33547 = (0);
seq__32423 = G__33544;
chunk__32424 = G__33545;
count__32425 = G__33546;
i__32426 = G__33547;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32432,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32440 = k32432;
var G__32440__$1 = (((G__32440 instanceof cljs.core.Keyword))?G__32440.fqn:null);
switch (G__32440__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32432,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32442){
var vec__32443 = p__32442;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32443,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32443,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32431){
var self__ = this;
var G__32431__$1 = this;
return (new cljs.core.RecordIter((0),G__32431__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__32455 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32455(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32433,other32434){
var self__ = this;
var this32433__$1 = this;
return (((!((other32434 == null)))) && ((this32433__$1.constructor === other32434.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32433__$1.x,other32434.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32433__$1.y,other32434.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32433__$1.__extmap,other32434.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32431){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32463 = cljs.core.keyword_identical_QMARK_;
var expr__32464 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32466 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__32467 = expr__32464;
return (pred__32463.cljs$core$IFn$_invoke$arity$2 ? pred__32463.cljs$core$IFn$_invoke$arity$2(G__32466,G__32467) : pred__32463.call(null,G__32466,G__32467));
})())){
return (new shadow.dom.Coordinate(G__32431,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32468 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__32469 = expr__32464;
return (pred__32463.cljs$core$IFn$_invoke$arity$2 ? pred__32463.cljs$core$IFn$_invoke$arity$2(G__32468,G__32469) : pred__32463.call(null,G__32468,G__32469));
})())){
return (new shadow.dom.Coordinate(self__.x,G__32431,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32431),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32431){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32431,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32435){
var extmap__4478__auto__ = (function (){var G__32479 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32435,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32435)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32479);
} else {
return G__32479;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32435),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32435),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__32482 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__32482);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__32485 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__32485);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__32491 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__32491);
})();
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32497,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32506 = k32497;
var G__32506__$1 = (((G__32506 instanceof cljs.core.Keyword))?G__32506.fqn:null);
switch (G__32506__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32497,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32509){
var vec__32510 = p__32509;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32510,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32510,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32496){
var self__ = this;
var G__32496__$1 = this;
return (new cljs.core.RecordIter((0),G__32496__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__32525 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32525(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32498,other32499){
var self__ = this;
var this32498__$1 = this;
return (((!((other32499 == null)))) && ((this32498__$1.constructor === other32499.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32498__$1.w,other32499.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32498__$1.h,other32499.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32498__$1.__extmap,other32499.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32496){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32541 = cljs.core.keyword_identical_QMARK_;
var expr__32542 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32544 = new cljs.core.Keyword(null,"w","w",354169001);
var G__32545 = expr__32542;
return (pred__32541.cljs$core$IFn$_invoke$arity$2 ? pred__32541.cljs$core$IFn$_invoke$arity$2(G__32544,G__32545) : pred__32541.call(null,G__32544,G__32545));
})())){
return (new shadow.dom.Size(G__32496,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32547 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__32548 = expr__32542;
return (pred__32541.cljs$core$IFn$_invoke$arity$2 ? pred__32541.cljs$core$IFn$_invoke$arity$2(G__32547,G__32548) : pred__32541.call(null,G__32547,G__32548));
})())){
return (new shadow.dom.Size(self__.w,G__32496,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32496),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32496){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32496,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32501){
var extmap__4478__auto__ = (function (){var G__32555 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32501,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32501)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32555);
} else {
return G__32555;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32501),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32501),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__32563 = shadow.dom.dom_node(el);
return goog.style.getSize(G__32563);
})());
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
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__33707 = (i + (1));
var G__33708 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33707;
ret = G__33708;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32575){
var vec__32576 = p__32575;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32576,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32576,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32580 = arguments.length;
switch (G__32580) {
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
var G__32588_33730 = new_node;
var G__32589_33731 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__32588_33730,G__32589_33731);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__32591_33733 = new_node;
var G__32592_33734 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__32591_33733,G__32592_33734);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
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
var G__33738 = ps;
var G__33739 = (i + (1));
el__$1 = G__33738;
i = G__33739;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__32597 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__32597);
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
var G__32600 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__32600);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__32601 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__32601);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32604 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32604,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32604,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32604,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32607_33762 = cljs.core.seq(props);
var chunk__32608_33763 = null;
var count__32609_33764 = (0);
var i__32610_33765 = (0);
while(true){
if((i__32610_33765 < count__32609_33764)){
var vec__32627_33770 = chunk__32608_33763.cljs$core$IIndexed$_nth$arity$2(null,i__32610_33765);
var k_33771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32627_33770,(0),null);
var v_33772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32627_33770,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33771);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33771),v_33772);


var G__33775 = seq__32607_33762;
var G__33777 = chunk__32608_33763;
var G__33778 = count__32609_33764;
var G__33779 = (i__32610_33765 + (1));
seq__32607_33762 = G__33775;
chunk__32608_33763 = G__33777;
count__32609_33764 = G__33778;
i__32610_33765 = G__33779;
continue;
} else {
var temp__5735__auto___33780 = cljs.core.seq(seq__32607_33762);
if(temp__5735__auto___33780){
var seq__32607_33781__$1 = temp__5735__auto___33780;
if(cljs.core.chunked_seq_QMARK_(seq__32607_33781__$1)){
var c__4609__auto___33782 = cljs.core.chunk_first(seq__32607_33781__$1);
var G__33783 = cljs.core.chunk_rest(seq__32607_33781__$1);
var G__33784 = c__4609__auto___33782;
var G__33785 = cljs.core.count(c__4609__auto___33782);
var G__33786 = (0);
seq__32607_33762 = G__33783;
chunk__32608_33763 = G__33784;
count__32609_33764 = G__33785;
i__32610_33765 = G__33786;
continue;
} else {
var vec__32637_33789 = cljs.core.first(seq__32607_33781__$1);
var k_33790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32637_33789,(0),null);
var v_33791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32637_33789,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33790);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33790),v_33791);


var G__33792 = cljs.core.next(seq__32607_33781__$1);
var G__33793 = null;
var G__33794 = (0);
var G__33795 = (0);
seq__32607_33762 = G__33792;
chunk__32608_33763 = G__33793;
count__32609_33764 = G__33794;
i__32610_33765 = G__33795;
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
var vec__32660 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32660,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32660,(1),null);
var seq__32664_33802 = cljs.core.seq(node_children);
var chunk__32666_33803 = null;
var count__32667_33804 = (0);
var i__32668_33805 = (0);
while(true){
if((i__32668_33805 < count__32667_33804)){
var child_struct_33806 = chunk__32666_33803.cljs$core$IIndexed$_nth$arity$2(null,i__32668_33805);
if((!((child_struct_33806 == null)))){
if(typeof child_struct_33806 === 'string'){
var text_33807 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33807),child_struct_33806].join(''));
} else {
var children_33808 = shadow.dom.svg_node(child_struct_33806);
if(cljs.core.seq_QMARK_(children_33808)){
var seq__32758_33809 = cljs.core.seq(children_33808);
var chunk__32760_33810 = null;
var count__32761_33811 = (0);
var i__32762_33812 = (0);
while(true){
if((i__32762_33812 < count__32761_33811)){
var child_33814 = chunk__32760_33810.cljs$core$IIndexed$_nth$arity$2(null,i__32762_33812);
if(cljs.core.truth_(child_33814)){
node.appendChild(child_33814);


var G__33816 = seq__32758_33809;
var G__33817 = chunk__32760_33810;
var G__33818 = count__32761_33811;
var G__33819 = (i__32762_33812 + (1));
seq__32758_33809 = G__33816;
chunk__32760_33810 = G__33817;
count__32761_33811 = G__33818;
i__32762_33812 = G__33819;
continue;
} else {
var G__33820 = seq__32758_33809;
var G__33821 = chunk__32760_33810;
var G__33822 = count__32761_33811;
var G__33823 = (i__32762_33812 + (1));
seq__32758_33809 = G__33820;
chunk__32760_33810 = G__33821;
count__32761_33811 = G__33822;
i__32762_33812 = G__33823;
continue;
}
} else {
var temp__5735__auto___33824 = cljs.core.seq(seq__32758_33809);
if(temp__5735__auto___33824){
var seq__32758_33825__$1 = temp__5735__auto___33824;
if(cljs.core.chunked_seq_QMARK_(seq__32758_33825__$1)){
var c__4609__auto___33826 = cljs.core.chunk_first(seq__32758_33825__$1);
var G__33827 = cljs.core.chunk_rest(seq__32758_33825__$1);
var G__33828 = c__4609__auto___33826;
var G__33829 = cljs.core.count(c__4609__auto___33826);
var G__33830 = (0);
seq__32758_33809 = G__33827;
chunk__32760_33810 = G__33828;
count__32761_33811 = G__33829;
i__32762_33812 = G__33830;
continue;
} else {
var child_33832 = cljs.core.first(seq__32758_33825__$1);
if(cljs.core.truth_(child_33832)){
node.appendChild(child_33832);


var G__33834 = cljs.core.next(seq__32758_33825__$1);
var G__33835 = null;
var G__33836 = (0);
var G__33837 = (0);
seq__32758_33809 = G__33834;
chunk__32760_33810 = G__33835;
count__32761_33811 = G__33836;
i__32762_33812 = G__33837;
continue;
} else {
var G__33838 = cljs.core.next(seq__32758_33825__$1);
var G__33839 = null;
var G__33840 = (0);
var G__33841 = (0);
seq__32758_33809 = G__33838;
chunk__32760_33810 = G__33839;
count__32761_33811 = G__33840;
i__32762_33812 = G__33841;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33808);
}
}


var G__33842 = seq__32664_33802;
var G__33843 = chunk__32666_33803;
var G__33844 = count__32667_33804;
var G__33845 = (i__32668_33805 + (1));
seq__32664_33802 = G__33842;
chunk__32666_33803 = G__33843;
count__32667_33804 = G__33844;
i__32668_33805 = G__33845;
continue;
} else {
var G__33846 = seq__32664_33802;
var G__33847 = chunk__32666_33803;
var G__33848 = count__32667_33804;
var G__33849 = (i__32668_33805 + (1));
seq__32664_33802 = G__33846;
chunk__32666_33803 = G__33847;
count__32667_33804 = G__33848;
i__32668_33805 = G__33849;
continue;
}
} else {
var temp__5735__auto___33850 = cljs.core.seq(seq__32664_33802);
if(temp__5735__auto___33850){
var seq__32664_33851__$1 = temp__5735__auto___33850;
if(cljs.core.chunked_seq_QMARK_(seq__32664_33851__$1)){
var c__4609__auto___33852 = cljs.core.chunk_first(seq__32664_33851__$1);
var G__33853 = cljs.core.chunk_rest(seq__32664_33851__$1);
var G__33854 = c__4609__auto___33852;
var G__33855 = cljs.core.count(c__4609__auto___33852);
var G__33856 = (0);
seq__32664_33802 = G__33853;
chunk__32666_33803 = G__33854;
count__32667_33804 = G__33855;
i__32668_33805 = G__33856;
continue;
} else {
var child_struct_33859 = cljs.core.first(seq__32664_33851__$1);
if((!((child_struct_33859 == null)))){
if(typeof child_struct_33859 === 'string'){
var text_33860 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33860),child_struct_33859].join(''));
} else {
var children_33863 = shadow.dom.svg_node(child_struct_33859);
if(cljs.core.seq_QMARK_(children_33863)){
var seq__32779_33868 = cljs.core.seq(children_33863);
var chunk__32781_33869 = null;
var count__32782_33870 = (0);
var i__32783_33871 = (0);
while(true){
if((i__32783_33871 < count__32782_33870)){
var child_33872 = chunk__32781_33869.cljs$core$IIndexed$_nth$arity$2(null,i__32783_33871);
if(cljs.core.truth_(child_33872)){
node.appendChild(child_33872);


var G__33874 = seq__32779_33868;
var G__33875 = chunk__32781_33869;
var G__33876 = count__32782_33870;
var G__33877 = (i__32783_33871 + (1));
seq__32779_33868 = G__33874;
chunk__32781_33869 = G__33875;
count__32782_33870 = G__33876;
i__32783_33871 = G__33877;
continue;
} else {
var G__33879 = seq__32779_33868;
var G__33880 = chunk__32781_33869;
var G__33881 = count__32782_33870;
var G__33882 = (i__32783_33871 + (1));
seq__32779_33868 = G__33879;
chunk__32781_33869 = G__33880;
count__32782_33870 = G__33881;
i__32783_33871 = G__33882;
continue;
}
} else {
var temp__5735__auto___33883__$1 = cljs.core.seq(seq__32779_33868);
if(temp__5735__auto___33883__$1){
var seq__32779_33884__$1 = temp__5735__auto___33883__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32779_33884__$1)){
var c__4609__auto___33885 = cljs.core.chunk_first(seq__32779_33884__$1);
var G__33889 = cljs.core.chunk_rest(seq__32779_33884__$1);
var G__33890 = c__4609__auto___33885;
var G__33891 = cljs.core.count(c__4609__auto___33885);
var G__33892 = (0);
seq__32779_33868 = G__33889;
chunk__32781_33869 = G__33890;
count__32782_33870 = G__33891;
i__32783_33871 = G__33892;
continue;
} else {
var child_33893 = cljs.core.first(seq__32779_33884__$1);
if(cljs.core.truth_(child_33893)){
node.appendChild(child_33893);


var G__33894 = cljs.core.next(seq__32779_33884__$1);
var G__33895 = null;
var G__33896 = (0);
var G__33897 = (0);
seq__32779_33868 = G__33894;
chunk__32781_33869 = G__33895;
count__32782_33870 = G__33896;
i__32783_33871 = G__33897;
continue;
} else {
var G__33898 = cljs.core.next(seq__32779_33884__$1);
var G__33899 = null;
var G__33900 = (0);
var G__33901 = (0);
seq__32779_33868 = G__33898;
chunk__32781_33869 = G__33899;
count__32782_33870 = G__33900;
i__32783_33871 = G__33901;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33863);
}
}


var G__33902 = cljs.core.next(seq__32664_33851__$1);
var G__33903 = null;
var G__33904 = (0);
var G__33905 = (0);
seq__32664_33802 = G__33902;
chunk__32666_33803 = G__33903;
count__32667_33804 = G__33904;
i__32668_33805 = G__33905;
continue;
} else {
var G__33906 = cljs.core.next(seq__32664_33851__$1);
var G__33907 = null;
var G__33908 = (0);
var G__33909 = (0);
seq__32664_33802 = G__33906;
chunk__32666_33803 = G__33907;
count__32667_33804 = G__33908;
i__32668_33805 = G__33909;
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

var G__32792_33912 = shadow.dom._to_svg;
var G__32793_33913 = "string";
var G__32794_33914 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__32792_33912,G__32793_33913,G__32794_33914);

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

var G__32799_33926 = shadow.dom._to_svg;
var G__32800_33927 = "null";
var G__32801_33928 = (function (_){
return null;
});
goog.object.set(G__32799_33926,G__32800_33927,G__32801_33928);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33930 = arguments.length;
var i__4790__auto___33931 = (0);
while(true){
if((i__4790__auto___33931 < len__4789__auto___33930)){
args__4795__auto__.push((arguments[i__4790__auto___33931]));

var G__33933 = (i__4790__auto___33931 + (1));
i__4790__auto___33931 = G__33933;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32807){
var G__32808 = cljs.core.first(seq32807);
var seq32807__$1 = cljs.core.next(seq32807);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32808,seq32807__$1);
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
var G__32829 = arguments.length;
switch (G__32829) {
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
var G__32855_33951 = shadow.dom.dom_node(el);
var G__32856_33952 = cljs.core.name(event);
var G__32857_33953 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32855_33951,G__32856_33952,G__32857_33953) : shadow.dom.dom_listen.call(null,G__32855_33951,G__32856_33952,G__32857_33953));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__28418__auto___33962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_32867){
var state_val_32868 = (state_32867[(1)]);
if((state_val_32868 === (1))){
var state_32867__$1 = state_32867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32867__$1,(2),once_or_cleanup);
} else {
if((state_val_32868 === (2))){
var inst_32864 = (state_32867[(2)]);
var inst_32865 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32867__$1 = (function (){var statearr_32873 = state_32867;
(statearr_32873[(7)] = inst_32864);

return statearr_32873;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32867__$1,inst_32865);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28058__auto__ = null;
var shadow$dom$state_machine__28058__auto____0 = (function (){
var statearr_32876 = [null,null,null,null,null,null,null,null];
(statearr_32876[(0)] = shadow$dom$state_machine__28058__auto__);

(statearr_32876[(1)] = (1));

return statearr_32876;
});
var shadow$dom$state_machine__28058__auto____1 = (function (state_32867){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_32867);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e32877){if((e32877 instanceof Object)){
var ex__28061__auto__ = e32877;
var statearr_32878_33976 = state_32867;
(statearr_32878_33976[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32877;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33984 = state_32867;
state_32867 = G__33984;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
shadow$dom$state_machine__28058__auto__ = function(state_32867){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28058__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28058__auto____1.call(this,state_32867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28058__auto____0;
shadow$dom$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28058__auto____1;
return shadow$dom$state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_32881 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_32881[(6)] = c__28418__auto___33962);

return statearr_32881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
