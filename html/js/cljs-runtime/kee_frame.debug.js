goog.provide('kee_frame.debug');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame.interceptor');
goog.require('clojure.data');
goog.require('kee_frame.state');
kee_frame.debug.debug_enabled_QMARK_ = (function kee_frame$debug$debug_enabled_QMARK_(p__40166){
var vec__40167 = p__40166;
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40167,(0),null);
var map__40170 = cljs.core.deref(kee_frame.state.debug_config);
var map__40170__$1 = (((((!((map__40170 == null))))?(((((map__40170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40170):map__40170);
var blacklist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40170__$1,new cljs.core.Keyword(null,"blacklist","blacklist",1248093170));
var events_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40170__$1,new cljs.core.Keyword(null,"events?","events?",-780512682),true);
var and__4174__auto__ = cljs.core.deref(kee_frame.state.debug_QMARK_);
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = events_QMARK_;
if(cljs.core.truth_(and__4174__auto____$1)){
return cljs.core.not((function (){var and__4174__auto____$2 = blacklist;
if(cljs.core.truth_(and__4174__auto____$2)){
return (blacklist.cljs$core$IFn$_invoke$arity$1 ? blacklist.cljs$core$IFn$_invoke$arity$1(event_key) : blacklist.call(null,event_key));
} else {
return and__4174__auto____$2;
}
})());
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
});
kee_frame.debug.debug_interceptor = (function kee_frame$debug$debug_interceptor(debug_QMARK_){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"before","before",-1633692388),(function kee_frame$debug$debug_interceptor_$_debug_before(context){
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(kee_frame.debug.debug_enabled_QMARK_(event))){
var G__40177_40243 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__40178_40244 = "Handling event ";
var G__40179_40245 = event;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__40177_40243,G__40178_40244,G__40179_40245) : re_frame.core.console.call(null,G__40177_40243,G__40178_40244,G__40179_40245));
} else {
}

return context;
}),new cljs.core.Keyword(null,"after","after",594996914),(function kee_frame$debug$debug_interceptor_$_debug_after(context){
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var orig_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var new_db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("kee-frame.debug","not-found","kee-frame.debug/not-found",-1447708124));
var effects = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_((function (){var and__4174__auto__ = kee_frame.debug.debug_enabled_QMARK_(event);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.seq(effects);
} else {
return and__4174__auto__;
}
})())){
var G__40183_40261 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__40184_40262 = "Side effects caused by event ";
var G__40185_40263 = cljs.core.first(event);
var G__40186_40264 = ": ";
var G__40187_40265 = effects;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$5 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$5(G__40183_40261,G__40184_40262,G__40185_40263,G__40186_40264,G__40187_40265) : re_frame.core.console.call(null,G__40183_40261,G__40184_40262,G__40185_40263,G__40186_40264,G__40187_40265));
} else {
}

if(cljs.core.truth_((function (){var and__4174__auto__ = kee_frame.debug.debug_enabled_QMARK_(event);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_db,new cljs.core.Keyword("kee-frame.debug","not-found","kee-frame.debug/not-found",-1447708124));
} else {
return and__4174__auto__;
}
})())){
var vec__40198_40266 = clojure.data.diff(orig_db,new_db);
var only_before_40267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40198_40266,(0),null);
var only_after_40268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40198_40266,(1),null);
var db_changed_QMARK__40269 = (((!((only_before_40267 == null)))) || ((!((only_after_40268 == null)))));
if(db_changed_QMARK__40269){
var G__40206_40274 = new cljs.core.Keyword(null,"group","group",582596132);
var G__40207_40275 = "db clojure.data/diff for:";
var G__40208_40276 = cljs.core.first(event);
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__40206_40274,G__40207_40275,G__40208_40276) : re_frame.core.console.call(null,G__40206_40274,G__40207_40275,G__40208_40276));

var G__40209_40280 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__40210_40281 = "only before:";
var G__40211_40282 = only_before_40267;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__40209_40280,G__40210_40281,G__40211_40282) : re_frame.core.console.call(null,G__40209_40280,G__40210_40281,G__40211_40282));

var G__40212_40283 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__40213_40284 = "only after :";
var G__40214_40285 = only_after_40268;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__40212_40283,G__40213_40284,G__40214_40285) : re_frame.core.console.call(null,G__40212_40283,G__40213_40284,G__40214_40285));

var G__40218_40286 = new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382);
(re_frame.core.console.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$1(G__40218_40286) : re_frame.core.console.call(null,G__40218_40286));
} else {
}
} else {
}

return context;
})], 0));
});

//# sourceMappingURL=kee_frame.debug.js.map
