goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35756 = arguments.length;
var i__4790__auto___35757 = (0);
while(true){
if((i__4790__auto___35757 < len__4789__auto___35756)){
args__4795__auto__.push((arguments[i__4790__auto___35757]));

var G__35758 = (i__4790__auto___35757 + (1));
i__4790__auto___35757 = G__35758;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35353){
var G__35354 = cljs.core.first(seq35353);
var seq35353__$1 = cljs.core.next(seq35353);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35354,seq35353__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35367){
var map__35369 = p__35367;
var map__35369__$1 = (((((!((map__35369 == null))))?(((((map__35369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35369):map__35369);
var src = map__35369__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35369__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35369__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35372 = cljs.core.seq(sources);
var chunk__35373 = null;
var count__35374 = (0);
var i__35375 = (0);
while(true){
if((i__35375 < count__35374)){
var map__35390 = chunk__35373.cljs$core$IIndexed$_nth$arity$2(null,i__35375);
var map__35390__$1 = (((((!((map__35390 == null))))?(((((map__35390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35390):map__35390);
var src = map__35390__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35390__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35390__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35390__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35390__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35392){var e_35766 = e35392;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35766);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35766.message)].join('')));
}

var G__35767 = seq__35372;
var G__35768 = chunk__35373;
var G__35769 = count__35374;
var G__35770 = (i__35375 + (1));
seq__35372 = G__35767;
chunk__35373 = G__35768;
count__35374 = G__35769;
i__35375 = G__35770;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35372);
if(temp__5735__auto__){
var seq__35372__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35372__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35372__$1);
var G__35771 = cljs.core.chunk_rest(seq__35372__$1);
var G__35772 = c__4609__auto__;
var G__35773 = cljs.core.count(c__4609__auto__);
var G__35774 = (0);
seq__35372 = G__35771;
chunk__35373 = G__35772;
count__35374 = G__35773;
i__35375 = G__35774;
continue;
} else {
var map__35399 = cljs.core.first(seq__35372__$1);
var map__35399__$1 = (((((!((map__35399 == null))))?(((((map__35399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35399):map__35399);
var src = map__35399__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35399__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35399__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35399__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35399__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35401){var e_35781 = e35401;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35781);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35781.message)].join('')));
}

var G__35783 = cljs.core.next(seq__35372__$1);
var G__35784 = null;
var G__35785 = (0);
var G__35786 = (0);
seq__35372 = G__35783;
chunk__35373 = G__35784;
count__35374 = G__35785;
i__35375 = G__35786;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35405 = cljs.core.seq(js_requires);
var chunk__35406 = null;
var count__35407 = (0);
var i__35408 = (0);
while(true){
if((i__35408 < count__35407)){
var js_ns = chunk__35406.cljs$core$IIndexed$_nth$arity$2(null,i__35408);
var require_str_35787 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35787);


var G__35788 = seq__35405;
var G__35789 = chunk__35406;
var G__35790 = count__35407;
var G__35791 = (i__35408 + (1));
seq__35405 = G__35788;
chunk__35406 = G__35789;
count__35407 = G__35790;
i__35408 = G__35791;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35405);
if(temp__5735__auto__){
var seq__35405__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35405__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35405__$1);
var G__35792 = cljs.core.chunk_rest(seq__35405__$1);
var G__35793 = c__4609__auto__;
var G__35794 = cljs.core.count(c__4609__auto__);
var G__35795 = (0);
seq__35405 = G__35792;
chunk__35406 = G__35793;
count__35407 = G__35794;
i__35408 = G__35795;
continue;
} else {
var js_ns = cljs.core.first(seq__35405__$1);
var require_str_35797 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35797);


var G__35798 = cljs.core.next(seq__35405__$1);
var G__35799 = null;
var G__35800 = (0);
var G__35801 = (0);
seq__35405 = G__35798;
chunk__35406 = G__35799;
count__35407 = G__35800;
i__35408 = G__35801;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35412 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35412) : callback.call(null,G__35412));
} else {
var G__35413 = shadow.cljs.devtools.client.env.files_url();
var G__35414 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__35415 = "POST";
var G__35416 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35417 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35413,G__35414,G__35415,G__35416,G__35417);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35424){
var map__35425 = p__35424;
var map__35425__$1 = (((((!((map__35425 == null))))?(((((map__35425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35425):map__35425);
var msg = map__35425__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35425__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35425__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35427 = info;
var map__35427__$1 = (((((!((map__35427 == null))))?(((((map__35427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35427):map__35427);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35427__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35427__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35430(s__35431){
return (new cljs.core.LazySeq(null,(function (){
var s__35431__$1 = s__35431;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35431__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35437 = cljs.core.first(xs__6292__auto__);
var map__35437__$1 = (((((!((map__35437 == null))))?(((((map__35437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35437):map__35437);
var src = map__35437__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35437__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35437__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__35431__$1,map__35437,map__35437__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35427,map__35427__$1,sources,compiled,map__35425,map__35425__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35430_$_iter__35433(s__35434){
return (new cljs.core.LazySeq(null,((function (s__35431__$1,map__35437,map__35437__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35427,map__35427__$1,sources,compiled,map__35425,map__35425__$1,msg,info,reload_info){
return (function (){
var s__35434__$1 = s__35434;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35434__$1);
if(temp__5735__auto____$1){
var s__35434__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35434__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__35434__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__35436 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__35435 = (0);
while(true){
if((i__35435 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__35435);
cljs.core.chunk_append(b__35436,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35819 = (i__35435 + (1));
i__35435 = G__35819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35436),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35430_$_iter__35433(cljs.core.chunk_rest(s__35434__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35436),null);
}
} else {
var warning = cljs.core.first(s__35434__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35430_$_iter__35433(cljs.core.rest(s__35434__$2)));
}
} else {
return null;
}
break;
}
});})(s__35431__$1,map__35437,map__35437__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35427,map__35427__$1,sources,compiled,map__35425,map__35425__$1,msg,info,reload_info))
,null,null));
});})(s__35431__$1,map__35437,map__35437__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35427,map__35427__$1,sources,compiled,map__35425,map__35425__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35430(cljs.core.rest(s__35431__$1)));
} else {
var G__35824 = cljs.core.rest(s__35431__$1);
s__35431__$1 = G__35824;
continue;
}
} else {
var G__35825 = cljs.core.rest(s__35431__$1);
s__35431__$1 = G__35825;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__35443_35826 = cljs.core.seq(warnings);
var chunk__35444_35827 = null;
var count__35445_35828 = (0);
var i__35446_35829 = (0);
while(true){
if((i__35446_35829 < count__35445_35828)){
var map__35452_35830 = chunk__35444_35827.cljs$core$IIndexed$_nth$arity$2(null,i__35446_35829);
var map__35452_35831__$1 = (((((!((map__35452_35830 == null))))?(((((map__35452_35830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35452_35830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35452_35830):map__35452_35830);
var w_35832 = map__35452_35831__$1;
var msg_35833__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35452_35831__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35452_35831__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35452_35831__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35452_35831__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35836)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35834),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35835),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35833__$1)].join(''));


var G__35840 = seq__35443_35826;
var G__35841 = chunk__35444_35827;
var G__35842 = count__35445_35828;
var G__35843 = (i__35446_35829 + (1));
seq__35443_35826 = G__35840;
chunk__35444_35827 = G__35841;
count__35445_35828 = G__35842;
i__35446_35829 = G__35843;
continue;
} else {
var temp__5735__auto___35844 = cljs.core.seq(seq__35443_35826);
if(temp__5735__auto___35844){
var seq__35443_35845__$1 = temp__5735__auto___35844;
if(cljs.core.chunked_seq_QMARK_(seq__35443_35845__$1)){
var c__4609__auto___35847 = cljs.core.chunk_first(seq__35443_35845__$1);
var G__35848 = cljs.core.chunk_rest(seq__35443_35845__$1);
var G__35849 = c__4609__auto___35847;
var G__35850 = cljs.core.count(c__4609__auto___35847);
var G__35851 = (0);
seq__35443_35826 = G__35848;
chunk__35444_35827 = G__35849;
count__35445_35828 = G__35850;
i__35446_35829 = G__35851;
continue;
} else {
var map__35461_35852 = cljs.core.first(seq__35443_35845__$1);
var map__35461_35853__$1 = (((((!((map__35461_35852 == null))))?(((((map__35461_35852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35461_35852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35461_35852):map__35461_35852);
var w_35854 = map__35461_35853__$1;
var msg_35855__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35461_35853__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35461_35853__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35461_35853__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35461_35853__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35858)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35856),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35857),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35855__$1)].join(''));


var G__35859 = cljs.core.next(seq__35443_35845__$1);
var G__35860 = null;
var G__35861 = (0);
var G__35862 = (0);
seq__35443_35826 = G__35859;
chunk__35444_35827 = G__35860;
count__35445_35828 = G__35861;
i__35446_35829 = G__35862;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__35463){
var map__35464 = p__35463;
var map__35464__$1 = (((((!((map__35464 == null))))?(((((map__35464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35464):map__35464);
var src = map__35464__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35464__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35464__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35469){
var map__35470 = p__35469;
var map__35470__$1 = (((((!((map__35470 == null))))?(((((map__35470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35470):map__35470);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35470__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__35475){
var map__35477 = p__35475;
var map__35477__$1 = (((((!((map__35477 == null))))?(((((map__35477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35477):map__35477);
var rc = map__35477__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35477__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__35423_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35423_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35489){
var map__35490 = p__35489;
var map__35490__$1 = (((((!((map__35490 == null))))?(((((map__35490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35490):map__35490);
var msg = map__35490__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35490__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35499 = cljs.core.seq(updates);
var chunk__35501 = null;
var count__35502 = (0);
var i__35503 = (0);
while(true){
if((i__35503 < count__35502)){
var path = chunk__35501.cljs$core$IIndexed$_nth$arity$2(null,i__35503);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35591_35873 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35594_35874 = null;
var count__35595_35875 = (0);
var i__35596_35876 = (0);
while(true){
if((i__35596_35876 < count__35595_35875)){
var node_35877 = chunk__35594_35874.cljs$core$IIndexed$_nth$arity$2(null,i__35596_35876);
var path_match_35878 = shadow.cljs.devtools.client.browser.match_paths(node_35877.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35878)){
var new_link_35879 = (function (){var G__35614 = node_35877.cloneNode(true);
G__35614.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35878),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35614;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35878], 0));

goog.dom.insertSiblingAfter(new_link_35879,node_35877);

goog.dom.removeNode(node_35877);


var G__35880 = seq__35591_35873;
var G__35881 = chunk__35594_35874;
var G__35882 = count__35595_35875;
var G__35883 = (i__35596_35876 + (1));
seq__35591_35873 = G__35880;
chunk__35594_35874 = G__35881;
count__35595_35875 = G__35882;
i__35596_35876 = G__35883;
continue;
} else {
var G__35884 = seq__35591_35873;
var G__35885 = chunk__35594_35874;
var G__35886 = count__35595_35875;
var G__35887 = (i__35596_35876 + (1));
seq__35591_35873 = G__35884;
chunk__35594_35874 = G__35885;
count__35595_35875 = G__35886;
i__35596_35876 = G__35887;
continue;
}
} else {
var temp__5735__auto___35888 = cljs.core.seq(seq__35591_35873);
if(temp__5735__auto___35888){
var seq__35591_35889__$1 = temp__5735__auto___35888;
if(cljs.core.chunked_seq_QMARK_(seq__35591_35889__$1)){
var c__4609__auto___35891 = cljs.core.chunk_first(seq__35591_35889__$1);
var G__35892 = cljs.core.chunk_rest(seq__35591_35889__$1);
var G__35893 = c__4609__auto___35891;
var G__35894 = cljs.core.count(c__4609__auto___35891);
var G__35895 = (0);
seq__35591_35873 = G__35892;
chunk__35594_35874 = G__35893;
count__35595_35875 = G__35894;
i__35596_35876 = G__35895;
continue;
} else {
var node_35896 = cljs.core.first(seq__35591_35889__$1);
var path_match_35897 = shadow.cljs.devtools.client.browser.match_paths(node_35896.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35897)){
var new_link_35898 = (function (){var G__35619 = node_35896.cloneNode(true);
G__35619.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35897),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35619;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35897], 0));

goog.dom.insertSiblingAfter(new_link_35898,node_35896);

goog.dom.removeNode(node_35896);


var G__35899 = cljs.core.next(seq__35591_35889__$1);
var G__35900 = null;
var G__35901 = (0);
var G__35902 = (0);
seq__35591_35873 = G__35899;
chunk__35594_35874 = G__35900;
count__35595_35875 = G__35901;
i__35596_35876 = G__35902;
continue;
} else {
var G__35903 = cljs.core.next(seq__35591_35889__$1);
var G__35904 = null;
var G__35905 = (0);
var G__35906 = (0);
seq__35591_35873 = G__35903;
chunk__35594_35874 = G__35904;
count__35595_35875 = G__35905;
i__35596_35876 = G__35906;
continue;
}
}
} else {
}
}
break;
}


var G__35907 = seq__35499;
var G__35908 = chunk__35501;
var G__35909 = count__35502;
var G__35910 = (i__35503 + (1));
seq__35499 = G__35907;
chunk__35501 = G__35908;
count__35502 = G__35909;
i__35503 = G__35910;
continue;
} else {
var G__35911 = seq__35499;
var G__35912 = chunk__35501;
var G__35913 = count__35502;
var G__35914 = (i__35503 + (1));
seq__35499 = G__35911;
chunk__35501 = G__35912;
count__35502 = G__35913;
i__35503 = G__35914;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35499);
if(temp__5735__auto__){
var seq__35499__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35499__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35499__$1);
var G__35915 = cljs.core.chunk_rest(seq__35499__$1);
var G__35916 = c__4609__auto__;
var G__35917 = cljs.core.count(c__4609__auto__);
var G__35918 = (0);
seq__35499 = G__35915;
chunk__35501 = G__35916;
count__35502 = G__35917;
i__35503 = G__35918;
continue;
} else {
var path = cljs.core.first(seq__35499__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35621_35919 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35624_35920 = null;
var count__35625_35921 = (0);
var i__35626_35922 = (0);
while(true){
if((i__35626_35922 < count__35625_35921)){
var node_35923 = chunk__35624_35920.cljs$core$IIndexed$_nth$arity$2(null,i__35626_35922);
var path_match_35924 = shadow.cljs.devtools.client.browser.match_paths(node_35923.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35924)){
var new_link_35925 = (function (){var G__35639 = node_35923.cloneNode(true);
G__35639.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35924),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35639;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35924], 0));

goog.dom.insertSiblingAfter(new_link_35925,node_35923);

goog.dom.removeNode(node_35923);


var G__35929 = seq__35621_35919;
var G__35930 = chunk__35624_35920;
var G__35931 = count__35625_35921;
var G__35932 = (i__35626_35922 + (1));
seq__35621_35919 = G__35929;
chunk__35624_35920 = G__35930;
count__35625_35921 = G__35931;
i__35626_35922 = G__35932;
continue;
} else {
var G__35933 = seq__35621_35919;
var G__35934 = chunk__35624_35920;
var G__35935 = count__35625_35921;
var G__35936 = (i__35626_35922 + (1));
seq__35621_35919 = G__35933;
chunk__35624_35920 = G__35934;
count__35625_35921 = G__35935;
i__35626_35922 = G__35936;
continue;
}
} else {
var temp__5735__auto___35937__$1 = cljs.core.seq(seq__35621_35919);
if(temp__5735__auto___35937__$1){
var seq__35621_35938__$1 = temp__5735__auto___35937__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35621_35938__$1)){
var c__4609__auto___35939 = cljs.core.chunk_first(seq__35621_35938__$1);
var G__35940 = cljs.core.chunk_rest(seq__35621_35938__$1);
var G__35941 = c__4609__auto___35939;
var G__35942 = cljs.core.count(c__4609__auto___35939);
var G__35943 = (0);
seq__35621_35919 = G__35940;
chunk__35624_35920 = G__35941;
count__35625_35921 = G__35942;
i__35626_35922 = G__35943;
continue;
} else {
var node_35944 = cljs.core.first(seq__35621_35938__$1);
var path_match_35945 = shadow.cljs.devtools.client.browser.match_paths(node_35944.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35945)){
var new_link_35947 = (function (){var G__35645 = node_35944.cloneNode(true);
G__35645.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35945),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35645;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35945], 0));

goog.dom.insertSiblingAfter(new_link_35947,node_35944);

goog.dom.removeNode(node_35944);


var G__35948 = cljs.core.next(seq__35621_35938__$1);
var G__35949 = null;
var G__35950 = (0);
var G__35951 = (0);
seq__35621_35919 = G__35948;
chunk__35624_35920 = G__35949;
count__35625_35921 = G__35950;
i__35626_35922 = G__35951;
continue;
} else {
var G__35952 = cljs.core.next(seq__35621_35938__$1);
var G__35953 = null;
var G__35954 = (0);
var G__35955 = (0);
seq__35621_35919 = G__35952;
chunk__35624_35920 = G__35953;
count__35625_35921 = G__35954;
i__35626_35922 = G__35955;
continue;
}
}
} else {
}
}
break;
}


var G__35956 = cljs.core.next(seq__35499__$1);
var G__35957 = null;
var G__35958 = (0);
var G__35959 = (0);
seq__35499 = G__35956;
chunk__35501 = G__35957;
count__35502 = G__35958;
i__35503 = G__35959;
continue;
} else {
var G__35960 = cljs.core.next(seq__35499__$1);
var G__35961 = null;
var G__35962 = (0);
var G__35963 = (0);
seq__35499 = G__35960;
chunk__35501 = G__35961;
count__35502 = G__35962;
i__35503 = G__35963;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35650){
var map__35651 = p__35650;
var map__35651__$1 = (((((!((map__35651 == null))))?(((((map__35651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35651):map__35651);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35651__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35651__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35654,done){
var map__35655 = p__35654;
var map__35655__$1 = (((((!((map__35655 == null))))?(((((map__35655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35655):map__35655);
var msg = map__35655__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35655__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35655__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35655__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35655__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35657){
var map__35658 = p__35657;
var map__35658__$1 = (((((!((map__35658 == null))))?(((((map__35658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35658):map__35658);
var src = map__35658__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35658__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e35660){var e = e35660;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35661,done){
var map__35662 = p__35661;
var map__35662__$1 = (((((!((map__35662 == null))))?(((((map__35662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35662):map__35662);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35662__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35662__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35664){
var map__35665 = p__35664;
var map__35665__$1 = (((((!((map__35665 == null))))?(((((map__35665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35665):map__35665);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35665__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35665__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35676,done){
var map__35678 = p__35676;
var map__35678__$1 = (((((!((map__35678 == null))))?(((((map__35678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35678):map__35678);
var msg = map__35678__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35678__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35690_35969 = type;
var G__35690_35970__$1 = (((G__35690_35969 instanceof cljs.core.Keyword))?G__35690_35969.fqn:null);
switch (G__35690_35970__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35704 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35705 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__35706 = "POST";
var G__35707 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35708 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35704,G__35705,G__35706,G__35707,G__35708);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__35725 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__35724 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__35724.cljs$core$IFn$_invoke$arity$1 ? fexpr__35724.cljs$core$IFn$_invoke$arity$1(G__35725) : fexpr__35724.call(null,G__35725));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e35730){var e = e35730;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35981 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35981)){
var s_35982 = temp__5735__auto___35981;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35982.onclose = (function (e){
return null;
}));

s_35982.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
