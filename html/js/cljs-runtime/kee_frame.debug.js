goog.provide('kee_frame.debug');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame.interceptor');
goog.require('clojure.data');
goog.require('kee_frame.state');
kee_frame.debug.debug_enabled_QMARK_ = (function kee_frame$debug$debug_enabled_QMARK_(p__28546){
var vec__28547 = p__28546;
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28547,(0),null);
var map__28555 = cljs.core.deref(kee_frame.state.debug_config);
var map__28555__$1 = (((((!((map__28555 == null))))?(((((map__28555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28555):map__28555);
var blacklist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28555__$1,new cljs.core.Keyword(null,"blacklist","blacklist",1248093170));
var events_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28555__$1,new cljs.core.Keyword(null,"events?","events?",-780512682),true);
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
var G__28573_28646 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__28574_28647 = "Handling event ";
var G__28575_28648 = event;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__28573_28646,G__28574_28647,G__28575_28648) : re_frame.core.console.call(null,G__28573_28646,G__28574_28647,G__28575_28648));
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
var G__28592_28659 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__28593_28660 = "Side effects caused by event ";
var G__28594_28661 = cljs.core.first(event);
var G__28595_28662 = ": ";
var G__28596_28663 = effects;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$5 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$5(G__28592_28659,G__28593_28660,G__28594_28661,G__28595_28662,G__28596_28663) : re_frame.core.console.call(null,G__28592_28659,G__28593_28660,G__28594_28661,G__28595_28662,G__28596_28663));
} else {
}

if(cljs.core.truth_((function (){var and__4174__auto__ = kee_frame.debug.debug_enabled_QMARK_(event);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_db,new cljs.core.Keyword("kee-frame.debug","not-found","kee-frame.debug/not-found",-1447708124));
} else {
return and__4174__auto__;
}
})())){
var vec__28606_28668 = clojure.data.diff(orig_db,new_db);
var only_before_28669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28606_28668,(0),null);
var only_after_28670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28606_28668,(1),null);
var db_changed_QMARK__28671 = (((!((only_before_28669 == null)))) || ((!((only_after_28670 == null)))));
if(db_changed_QMARK__28671){
var G__28616_28674 = new cljs.core.Keyword(null,"group","group",582596132);
var G__28617_28675 = "db clojure.data/diff for:";
var G__28618_28676 = cljs.core.first(event);
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__28616_28674,G__28617_28675,G__28618_28676) : re_frame.core.console.call(null,G__28616_28674,G__28617_28675,G__28618_28676));

var G__28619_28679 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__28620_28680 = "only before:";
var G__28621_28681 = only_before_28669;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__28619_28679,G__28620_28680,G__28621_28681) : re_frame.core.console.call(null,G__28619_28679,G__28620_28680,G__28621_28681));

var G__28623_28684 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__28624_28685 = "only after :";
var G__28625_28686 = only_after_28670;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__28623_28684,G__28624_28685,G__28625_28686) : re_frame.core.console.call(null,G__28623_28684,G__28624_28685,G__28625_28686));

var G__28630_28687 = new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382);
(re_frame.core.console.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$1(G__28630_28687) : re_frame.core.console.call(null,G__28630_28687));
} else {
}
} else {
}

return context;
})], 0));
});

//# sourceMappingURL=kee_frame.debug.js.map
