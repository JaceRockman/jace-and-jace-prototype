goog.provide('kee_frame.debug');
kee_frame.debug.debug_enabled_QMARK_ = (function kee_frame$debug$debug_enabled_QMARK_(p__40535){
var vec__40536 = p__40535;
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40536,(0),null);
var map__40539 = cljs.core.deref(kee_frame.state.debug_config);
var map__40539__$1 = cljs.core.__destructure_map(map__40539);
var blacklist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40539__$1,new cljs.core.Keyword(null,"blacklist","blacklist",1248093170));
var events_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40539__$1,new cljs.core.Keyword(null,"events?","events?",-780512682),true);
var and__4210__auto__ = cljs.core.deref(kee_frame.state.debug_QMARK_);
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = events_QMARK_;
if(cljs.core.truth_(and__4210__auto____$1)){
return cljs.core.not((function (){var and__4210__auto____$2 = blacklist;
if(cljs.core.truth_(and__4210__auto____$2)){
return (blacklist.cljs$core$IFn$_invoke$arity$1 ? blacklist.cljs$core$IFn$_invoke$arity$1(event_key) : blacklist.call(null,event_key));
} else {
return and__4210__auto____$2;
}
})());
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
});
kee_frame.debug.debug_interceptor = (function kee_frame$debug$debug_interceptor(debug_QMARK_){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"before","before",-1633692388),(function kee_frame$debug$debug_interceptor_$_debug_before(context){
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(kee_frame.debug.debug_enabled_QMARK_(event))){
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"log","log",-1595516004),"Handling event ",event) : re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"Handling event ",event));
} else {
}

return context;
}),new cljs.core.Keyword(null,"after","after",594996914),(function kee_frame$debug$debug_interceptor_$_debug_after(context){
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var orig_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var new_db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("kee-frame.debug","not-found","kee-frame.debug/not-found",-1447708124));
var effects = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_((function (){var and__4210__auto__ = kee_frame.debug.debug_enabled_QMARK_(event);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.seq(effects);
} else {
return and__4210__auto__;
}
})())){
var G__40547_40569 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__40548_40570 = "Side effects caused by event ";
var G__40549_40571 = cljs.core.first(event);
var G__40550_40572 = ": ";
var G__40551_40573 = effects;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$5 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$5(G__40547_40569,G__40548_40570,G__40549_40571,G__40550_40572,G__40551_40573) : re_frame.core.console.call(null,G__40547_40569,G__40548_40570,G__40549_40571,G__40550_40572,G__40551_40573));
} else {
}

if(cljs.core.truth_((function (){var and__4210__auto__ = kee_frame.debug.debug_enabled_QMARK_(event);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_db,new cljs.core.Keyword("kee-frame.debug","not-found","kee-frame.debug/not-found",-1447708124));
} else {
return and__4210__auto__;
}
})())){
var vec__40552_40577 = clojure.data.diff(orig_db,new_db);
var only_before_40578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40552_40577,(0),null);
var only_after_40579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40552_40577,(1),null);
var db_changed_QMARK__40580 = (((!((only_before_40578 == null)))) || ((!((only_after_40579 == null)))));
if(db_changed_QMARK__40580){
var G__40565_40583 = new cljs.core.Keyword(null,"group","group",582596132);
var G__40566_40584 = "db clojure.data/diff for:";
var G__40567_40585 = cljs.core.first(event);
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__40565_40583,G__40566_40584,G__40567_40585) : re_frame.core.console.call(null,G__40565_40583,G__40566_40584,G__40567_40585));

(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"log","log",-1595516004),"only before:",only_before_40578) : re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"only before:",only_before_40578));

(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"log","log",-1595516004),"only after :",only_after_40579) : re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"only after :",only_after_40579));

(re_frame.core.console.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382)) : re_frame.core.console.call(null,new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382)));
} else {
}
} else {
}

return context;
})], 0));
});

//# sourceMappingURL=kee_frame.debug.js.map
