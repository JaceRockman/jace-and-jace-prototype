goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36177 = arguments.length;
var i__4819__auto___36178 = (0);
while(true){
if((i__4819__auto___36178 < len__4818__auto___36177)){
args__4824__auto__.push((arguments[i__4819__auto___36178]));

var G__36179 = (i__4819__auto___36178 + (1));
i__4819__auto___36178 = G__36179;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35953){
var G__35954 = cljs.core.first(seq35953);
var seq35953__$1 = cljs.core.next(seq35953);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35954,seq35953__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35956 = cljs.core.seq(sources);
var chunk__35957 = null;
var count__35958 = (0);
var i__35959 = (0);
while(true){
if((i__35959 < count__35958)){
var map__35966 = chunk__35957.cljs$core$IIndexed$_nth$arity$2(null,i__35959);
var map__35966__$1 = cljs.core.__destructure_map(map__35966);
var src = map__35966__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35966__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35966__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35966__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35966__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35967){var e_36180 = e35967;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36180);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36180.message)].join('')));
}

var G__36181 = seq__35956;
var G__36182 = chunk__35957;
var G__36183 = count__35958;
var G__36184 = (i__35959 + (1));
seq__35956 = G__36181;
chunk__35957 = G__36182;
count__35958 = G__36183;
i__35959 = G__36184;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35956);
if(temp__5753__auto__){
var seq__35956__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35956__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35956__$1);
var G__36190 = cljs.core.chunk_rest(seq__35956__$1);
var G__36191 = c__4638__auto__;
var G__36192 = cljs.core.count(c__4638__auto__);
var G__36193 = (0);
seq__35956 = G__36190;
chunk__35957 = G__36191;
count__35958 = G__36192;
i__35959 = G__36193;
continue;
} else {
var map__35968 = cljs.core.first(seq__35956__$1);
var map__35968__$1 = cljs.core.__destructure_map(map__35968);
var src = map__35968__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35968__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35968__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35968__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35968__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35969){var e_36207 = e35969;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36207);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36207.message)].join('')));
}

var G__36212 = cljs.core.next(seq__35956__$1);
var G__36213 = null;
var G__36214 = (0);
var G__36215 = (0);
seq__35956 = G__36212;
chunk__35957 = G__36213;
count__35958 = G__36214;
i__35959 = G__36215;
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
return null;
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
var seq__35970 = cljs.core.seq(js_requires);
var chunk__35971 = null;
var count__35972 = (0);
var i__35973 = (0);
while(true){
if((i__35973 < count__35972)){
var js_ns = chunk__35971.cljs$core$IIndexed$_nth$arity$2(null,i__35973);
var require_str_36218 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36218);


var G__36221 = seq__35970;
var G__36222 = chunk__35971;
var G__36223 = count__35972;
var G__36224 = (i__35973 + (1));
seq__35970 = G__36221;
chunk__35971 = G__36222;
count__35972 = G__36223;
i__35973 = G__36224;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35970);
if(temp__5753__auto__){
var seq__35970__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35970__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35970__$1);
var G__36225 = cljs.core.chunk_rest(seq__35970__$1);
var G__36226 = c__4638__auto__;
var G__36227 = cljs.core.count(c__4638__auto__);
var G__36228 = (0);
seq__35970 = G__36225;
chunk__35971 = G__36226;
count__35972 = G__36227;
i__35973 = G__36228;
continue;
} else {
var js_ns = cljs.core.first(seq__35970__$1);
var require_str_36229 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36229);


var G__36230 = cljs.core.next(seq__35970__$1);
var G__36231 = null;
var G__36232 = (0);
var G__36233 = (0);
seq__35970 = G__36230;
chunk__35971 = G__36231;
count__35972 = G__36232;
i__35973 = G__36233;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35981){
var map__35982 = p__35981;
var map__35982__$1 = cljs.core.__destructure_map(map__35982);
var msg = map__35982__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35982__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35982__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35983(s__35984){
return (new cljs.core.LazySeq(null,(function (){
var s__35984__$1 = s__35984;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35984__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35993 = cljs.core.first(xs__6308__auto__);
var map__35993__$1 = cljs.core.__destructure_map(map__35993);
var src = map__35993__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35993__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35993__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__35984__$1,map__35993,map__35993__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35982,map__35982__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35983_$_iter__35985(s__35986){
return (new cljs.core.LazySeq(null,((function (s__35984__$1,map__35993,map__35993__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35982,map__35982__$1,msg,info,reload_info){
return (function (){
var s__35986__$1 = s__35986;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35986__$1);
if(temp__5753__auto____$1){
var s__35986__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35986__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__35986__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__35988 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__35987 = (0);
while(true){
if((i__35987 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__35987);
cljs.core.chunk_append(b__35988,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36239 = (i__35987 + (1));
i__35987 = G__36239;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35988),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35983_$_iter__35985(cljs.core.chunk_rest(s__35986__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35988),null);
}
} else {
var warning = cljs.core.first(s__35986__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35983_$_iter__35985(cljs.core.rest(s__35986__$2)));
}
} else {
return null;
}
break;
}
});})(s__35984__$1,map__35993,map__35993__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35982,map__35982__$1,msg,info,reload_info))
,null,null));
});})(s__35984__$1,map__35993,map__35993__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35982,map__35982__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35983(cljs.core.rest(s__35984__$1)));
} else {
var G__36243 = cljs.core.rest(s__35984__$1);
s__35984__$1 = G__36243;
continue;
}
} else {
var G__36244 = cljs.core.rest(s__35984__$1);
s__35984__$1 = G__36244;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35994_36245 = cljs.core.seq(warnings);
var chunk__35995_36246 = null;
var count__35996_36247 = (0);
var i__35997_36248 = (0);
while(true){
if((i__35997_36248 < count__35996_36247)){
var map__36003_36249 = chunk__35995_36246.cljs$core$IIndexed$_nth$arity$2(null,i__35997_36248);
var map__36003_36250__$1 = cljs.core.__destructure_map(map__36003_36249);
var w_36251 = map__36003_36250__$1;
var msg_36252__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36003_36250__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36003_36250__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36003_36250__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36003_36250__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36255)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36253),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36254),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36252__$1)].join(''));


var G__36256 = seq__35994_36245;
var G__36257 = chunk__35995_36246;
var G__36258 = count__35996_36247;
var G__36259 = (i__35997_36248 + (1));
seq__35994_36245 = G__36256;
chunk__35995_36246 = G__36257;
count__35996_36247 = G__36258;
i__35997_36248 = G__36259;
continue;
} else {
var temp__5753__auto___36260 = cljs.core.seq(seq__35994_36245);
if(temp__5753__auto___36260){
var seq__35994_36261__$1 = temp__5753__auto___36260;
if(cljs.core.chunked_seq_QMARK_(seq__35994_36261__$1)){
var c__4638__auto___36262 = cljs.core.chunk_first(seq__35994_36261__$1);
var G__36263 = cljs.core.chunk_rest(seq__35994_36261__$1);
var G__36264 = c__4638__auto___36262;
var G__36265 = cljs.core.count(c__4638__auto___36262);
var G__36266 = (0);
seq__35994_36245 = G__36263;
chunk__35995_36246 = G__36264;
count__35996_36247 = G__36265;
i__35997_36248 = G__36266;
continue;
} else {
var map__36004_36267 = cljs.core.first(seq__35994_36261__$1);
var map__36004_36268__$1 = cljs.core.__destructure_map(map__36004_36267);
var w_36269 = map__36004_36268__$1;
var msg_36270__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36004_36268__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36004_36268__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36004_36268__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36004_36268__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36273)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36271),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36272),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36270__$1)].join(''));


var G__36274 = cljs.core.next(seq__35994_36261__$1);
var G__36275 = null;
var G__36276 = (0);
var G__36277 = (0);
seq__35994_36245 = G__36274;
chunk__35995_36246 = G__36275;
count__35996_36247 = G__36276;
i__35997_36248 = G__36277;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35980_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35980_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36010){
var map__36011 = p__36010;
var map__36011__$1 = cljs.core.__destructure_map(map__36011);
var msg = map__36011__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36011__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36012 = cljs.core.seq(updates);
var chunk__36014 = null;
var count__36015 = (0);
var i__36016 = (0);
while(true){
if((i__36016 < count__36015)){
var path = chunk__36014.cljs$core$IIndexed$_nth$arity$2(null,i__36016);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36058_36278 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36062_36279 = null;
var count__36063_36280 = (0);
var i__36064_36281 = (0);
while(true){
if((i__36064_36281 < count__36063_36280)){
var node_36282 = chunk__36062_36279.cljs$core$IIndexed$_nth$arity$2(null,i__36064_36281);
if(cljs.core.not(node_36282.shadow$old)){
var path_match_36283 = shadow.cljs.devtools.client.browser.match_paths(node_36282.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36283)){
var new_link_36284 = (function (){var G__36070 = node_36282.cloneNode(true);
G__36070.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36283),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36070;
})();
(node_36282.shadow$old = true);

(new_link_36284.onload = ((function (seq__36058_36278,chunk__36062_36279,count__36063_36280,i__36064_36281,seq__36012,chunk__36014,count__36015,i__36016,new_link_36284,path_match_36283,node_36282,path,map__36011,map__36011__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36282);
});})(seq__36058_36278,chunk__36062_36279,count__36063_36280,i__36064_36281,seq__36012,chunk__36014,count__36015,i__36016,new_link_36284,path_match_36283,node_36282,path,map__36011,map__36011__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36283], 0));

goog.dom.insertSiblingAfter(new_link_36284,node_36282);


var G__36286 = seq__36058_36278;
var G__36287 = chunk__36062_36279;
var G__36288 = count__36063_36280;
var G__36289 = (i__36064_36281 + (1));
seq__36058_36278 = G__36286;
chunk__36062_36279 = G__36287;
count__36063_36280 = G__36288;
i__36064_36281 = G__36289;
continue;
} else {
var G__36290 = seq__36058_36278;
var G__36291 = chunk__36062_36279;
var G__36292 = count__36063_36280;
var G__36293 = (i__36064_36281 + (1));
seq__36058_36278 = G__36290;
chunk__36062_36279 = G__36291;
count__36063_36280 = G__36292;
i__36064_36281 = G__36293;
continue;
}
} else {
var G__36294 = seq__36058_36278;
var G__36295 = chunk__36062_36279;
var G__36296 = count__36063_36280;
var G__36297 = (i__36064_36281 + (1));
seq__36058_36278 = G__36294;
chunk__36062_36279 = G__36295;
count__36063_36280 = G__36296;
i__36064_36281 = G__36297;
continue;
}
} else {
var temp__5753__auto___36298 = cljs.core.seq(seq__36058_36278);
if(temp__5753__auto___36298){
var seq__36058_36299__$1 = temp__5753__auto___36298;
if(cljs.core.chunked_seq_QMARK_(seq__36058_36299__$1)){
var c__4638__auto___36300 = cljs.core.chunk_first(seq__36058_36299__$1);
var G__36301 = cljs.core.chunk_rest(seq__36058_36299__$1);
var G__36302 = c__4638__auto___36300;
var G__36303 = cljs.core.count(c__4638__auto___36300);
var G__36304 = (0);
seq__36058_36278 = G__36301;
chunk__36062_36279 = G__36302;
count__36063_36280 = G__36303;
i__36064_36281 = G__36304;
continue;
} else {
var node_36305 = cljs.core.first(seq__36058_36299__$1);
if(cljs.core.not(node_36305.shadow$old)){
var path_match_36306 = shadow.cljs.devtools.client.browser.match_paths(node_36305.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36306)){
var new_link_36307 = (function (){var G__36071 = node_36305.cloneNode(true);
G__36071.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36306),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36071;
})();
(node_36305.shadow$old = true);

(new_link_36307.onload = ((function (seq__36058_36278,chunk__36062_36279,count__36063_36280,i__36064_36281,seq__36012,chunk__36014,count__36015,i__36016,new_link_36307,path_match_36306,node_36305,seq__36058_36299__$1,temp__5753__auto___36298,path,map__36011,map__36011__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36305);
});})(seq__36058_36278,chunk__36062_36279,count__36063_36280,i__36064_36281,seq__36012,chunk__36014,count__36015,i__36016,new_link_36307,path_match_36306,node_36305,seq__36058_36299__$1,temp__5753__auto___36298,path,map__36011,map__36011__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36306], 0));

goog.dom.insertSiblingAfter(new_link_36307,node_36305);


var G__36308 = cljs.core.next(seq__36058_36299__$1);
var G__36309 = null;
var G__36310 = (0);
var G__36311 = (0);
seq__36058_36278 = G__36308;
chunk__36062_36279 = G__36309;
count__36063_36280 = G__36310;
i__36064_36281 = G__36311;
continue;
} else {
var G__36312 = cljs.core.next(seq__36058_36299__$1);
var G__36313 = null;
var G__36314 = (0);
var G__36315 = (0);
seq__36058_36278 = G__36312;
chunk__36062_36279 = G__36313;
count__36063_36280 = G__36314;
i__36064_36281 = G__36315;
continue;
}
} else {
var G__36316 = cljs.core.next(seq__36058_36299__$1);
var G__36317 = null;
var G__36318 = (0);
var G__36319 = (0);
seq__36058_36278 = G__36316;
chunk__36062_36279 = G__36317;
count__36063_36280 = G__36318;
i__36064_36281 = G__36319;
continue;
}
}
} else {
}
}
break;
}


var G__36320 = seq__36012;
var G__36321 = chunk__36014;
var G__36322 = count__36015;
var G__36323 = (i__36016 + (1));
seq__36012 = G__36320;
chunk__36014 = G__36321;
count__36015 = G__36322;
i__36016 = G__36323;
continue;
} else {
var G__36324 = seq__36012;
var G__36325 = chunk__36014;
var G__36326 = count__36015;
var G__36327 = (i__36016 + (1));
seq__36012 = G__36324;
chunk__36014 = G__36325;
count__36015 = G__36326;
i__36016 = G__36327;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36012);
if(temp__5753__auto__){
var seq__36012__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36012__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36012__$1);
var G__36328 = cljs.core.chunk_rest(seq__36012__$1);
var G__36329 = c__4638__auto__;
var G__36330 = cljs.core.count(c__4638__auto__);
var G__36331 = (0);
seq__36012 = G__36328;
chunk__36014 = G__36329;
count__36015 = G__36330;
i__36016 = G__36331;
continue;
} else {
var path = cljs.core.first(seq__36012__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36074_36332 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36078_36333 = null;
var count__36079_36334 = (0);
var i__36080_36335 = (0);
while(true){
if((i__36080_36335 < count__36079_36334)){
var node_36336 = chunk__36078_36333.cljs$core$IIndexed$_nth$arity$2(null,i__36080_36335);
if(cljs.core.not(node_36336.shadow$old)){
var path_match_36337 = shadow.cljs.devtools.client.browser.match_paths(node_36336.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36337)){
var new_link_36338 = (function (){var G__36094 = node_36336.cloneNode(true);
G__36094.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36337),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36094;
})();
(node_36336.shadow$old = true);

(new_link_36338.onload = ((function (seq__36074_36332,chunk__36078_36333,count__36079_36334,i__36080_36335,seq__36012,chunk__36014,count__36015,i__36016,new_link_36338,path_match_36337,node_36336,path,seq__36012__$1,temp__5753__auto__,map__36011,map__36011__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36336);
});})(seq__36074_36332,chunk__36078_36333,count__36079_36334,i__36080_36335,seq__36012,chunk__36014,count__36015,i__36016,new_link_36338,path_match_36337,node_36336,path,seq__36012__$1,temp__5753__auto__,map__36011,map__36011__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36337], 0));

goog.dom.insertSiblingAfter(new_link_36338,node_36336);


var G__36339 = seq__36074_36332;
var G__36340 = chunk__36078_36333;
var G__36341 = count__36079_36334;
var G__36342 = (i__36080_36335 + (1));
seq__36074_36332 = G__36339;
chunk__36078_36333 = G__36340;
count__36079_36334 = G__36341;
i__36080_36335 = G__36342;
continue;
} else {
var G__36343 = seq__36074_36332;
var G__36344 = chunk__36078_36333;
var G__36345 = count__36079_36334;
var G__36346 = (i__36080_36335 + (1));
seq__36074_36332 = G__36343;
chunk__36078_36333 = G__36344;
count__36079_36334 = G__36345;
i__36080_36335 = G__36346;
continue;
}
} else {
var G__36347 = seq__36074_36332;
var G__36348 = chunk__36078_36333;
var G__36349 = count__36079_36334;
var G__36350 = (i__36080_36335 + (1));
seq__36074_36332 = G__36347;
chunk__36078_36333 = G__36348;
count__36079_36334 = G__36349;
i__36080_36335 = G__36350;
continue;
}
} else {
var temp__5753__auto___36351__$1 = cljs.core.seq(seq__36074_36332);
if(temp__5753__auto___36351__$1){
var seq__36074_36353__$1 = temp__5753__auto___36351__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36074_36353__$1)){
var c__4638__auto___36354 = cljs.core.chunk_first(seq__36074_36353__$1);
var G__36355 = cljs.core.chunk_rest(seq__36074_36353__$1);
var G__36356 = c__4638__auto___36354;
var G__36357 = cljs.core.count(c__4638__auto___36354);
var G__36358 = (0);
seq__36074_36332 = G__36355;
chunk__36078_36333 = G__36356;
count__36079_36334 = G__36357;
i__36080_36335 = G__36358;
continue;
} else {
var node_36359 = cljs.core.first(seq__36074_36353__$1);
if(cljs.core.not(node_36359.shadow$old)){
var path_match_36360 = shadow.cljs.devtools.client.browser.match_paths(node_36359.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36360)){
var new_link_36361 = (function (){var G__36098 = node_36359.cloneNode(true);
G__36098.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36360),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36098;
})();
(node_36359.shadow$old = true);

(new_link_36361.onload = ((function (seq__36074_36332,chunk__36078_36333,count__36079_36334,i__36080_36335,seq__36012,chunk__36014,count__36015,i__36016,new_link_36361,path_match_36360,node_36359,seq__36074_36353__$1,temp__5753__auto___36351__$1,path,seq__36012__$1,temp__5753__auto__,map__36011,map__36011__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36359);
});})(seq__36074_36332,chunk__36078_36333,count__36079_36334,i__36080_36335,seq__36012,chunk__36014,count__36015,i__36016,new_link_36361,path_match_36360,node_36359,seq__36074_36353__$1,temp__5753__auto___36351__$1,path,seq__36012__$1,temp__5753__auto__,map__36011,map__36011__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36360], 0));

goog.dom.insertSiblingAfter(new_link_36361,node_36359);


var G__36362 = cljs.core.next(seq__36074_36353__$1);
var G__36363 = null;
var G__36364 = (0);
var G__36365 = (0);
seq__36074_36332 = G__36362;
chunk__36078_36333 = G__36363;
count__36079_36334 = G__36364;
i__36080_36335 = G__36365;
continue;
} else {
var G__36366 = cljs.core.next(seq__36074_36353__$1);
var G__36367 = null;
var G__36368 = (0);
var G__36369 = (0);
seq__36074_36332 = G__36366;
chunk__36078_36333 = G__36367;
count__36079_36334 = G__36368;
i__36080_36335 = G__36369;
continue;
}
} else {
var G__36370 = cljs.core.next(seq__36074_36353__$1);
var G__36371 = null;
var G__36372 = (0);
var G__36373 = (0);
seq__36074_36332 = G__36370;
chunk__36078_36333 = G__36371;
count__36079_36334 = G__36372;
i__36080_36335 = G__36373;
continue;
}
}
} else {
}
}
break;
}


var G__36374 = cljs.core.next(seq__36012__$1);
var G__36375 = null;
var G__36376 = (0);
var G__36377 = (0);
seq__36012 = G__36374;
chunk__36014 = G__36375;
count__36015 = G__36376;
i__36016 = G__36377;
continue;
} else {
var G__36378 = cljs.core.next(seq__36012__$1);
var G__36379 = null;
var G__36380 = (0);
var G__36381 = (0);
seq__36012 = G__36378;
chunk__36014 = G__36379;
count__36015 = G__36380;
i__36016 = G__36381;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36099){
var map__36100 = p__36099;
var map__36100__$1 = cljs.core.__destructure_map(map__36100);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36100__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36107){
var map__36108 = p__36107;
var map__36108__$1 = cljs.core.__destructure_map(map__36108);
var _ = map__36108__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36108__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36117,done,error){
var map__36118 = p__36117;
var map__36118__$1 = cljs.core.__destructure_map(map__36118);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36118__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36119,done,error){
var map__36120 = p__36119;
var map__36120__$1 = cljs.core.__destructure_map(map__36120);
var msg = map__36120__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36120__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36120__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36120__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36121){
var map__36122 = p__36121;
var map__36122__$1 = cljs.core.__destructure_map(map__36122);
var src = map__36122__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36122__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36123 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36123) : done.call(null,G__36123));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36124){
var map__36125 = p__36124;
var map__36125__$1 = cljs.core.__destructure_map(map__36125);
var msg__$1 = map__36125__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36125__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36126){var ex = e36126;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36127){
var map__36128 = p__36127;
var map__36128__$1 = cljs.core.__destructure_map(map__36128);
var env = map__36128__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36128__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36132){
var map__36133 = p__36132;
var map__36133__$1 = cljs.core.__destructure_map(map__36133);
var msg = map__36133__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36133__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36135){
var map__36136 = p__36135;
var map__36136__$1 = cljs.core.__destructure_map(map__36136);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36136__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36136__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36158){
var map__36163 = p__36158;
var map__36163__$1 = cljs.core.__destructure_map(map__36163);
var svc = map__36163__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
