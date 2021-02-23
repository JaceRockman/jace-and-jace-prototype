goog.provide('breaking_point.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame_fx.dispatch');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),(function (_,p__28755){
var vec__28756 = p__28755;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28756,(0),null);
var map__28759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28756,(1),null);
var map__28759__$1 = (((((!((map__28759 == null))))?(((((map__28759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28759):map__28759);
var opts = map__28759__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28759__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28759__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),opts], null);
}));
var G__28770_28896 = new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814);
var G__28771_28897 = (function (coeffect){
var screen_width = (function (){var or__4185__auto__ = (function (){var G__28782 = window;
if((G__28782 == null)){
return null;
} else {
return G__28782.innerWidth;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){var G__28788 = document;
var G__28788__$1 = (((G__28788 == null))?null:G__28788.documentElement);
if((G__28788__$1 == null)){
return null;
} else {
return G__28788__$1.clientWidth;
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var G__28789 = document;
var G__28789__$1 = (((G__28789 == null))?null:G__28789.body);
if((G__28789__$1 == null)){
return null;
} else {
return G__28789__$1.clientWidth;
}
}
}
})();
var screen_height = (function (){var or__4185__auto__ = (function (){var G__28791 = window;
if((G__28791 == null)){
return null;
} else {
return G__28791.innerHeight;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){var G__28794 = document;
var G__28794__$1 = (((G__28794 == null))?null:G__28794.documentElement);
if((G__28794__$1 == null)){
return null;
} else {
return G__28794__$1.clientHeight;
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var G__28800 = document;
var G__28800__$1 = (((G__28800 == null))?null:G__28800.body);
if((G__28800__$1 == null)){
return null;
} else {
return G__28800__$1.clientHeight;
}
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coeffect,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263),screen_width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen-height","screen-height",141363033),screen_height], 0));
});
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__28770_28896,G__28771_28897) : re_frame.core.reg_cofx.call(null,G__28770_28896,G__28771_28897));
breaking_point.core.set_screen_dimensions = (function breaking_point$core$set_screen_dimensions(p__28801,_){
var map__28802 = p__28801;
var map__28802__$1 = (((((!((map__28802 == null))))?(((((map__28802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28802):map__28802);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28802__$1,new cljs.core.Keyword(null,"db","db",993250759));
var screen_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28802__$1,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263));
var screen_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28802__$1,new cljs.core.Keyword(null,"screen-height","screen-height",141363033));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-width","screen-width",1557963263)], null),screen_width),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-height","screen-height",141363033)], null),screen_height)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28805 = new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814);
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__28805) : re_frame.core.inject_cofx.call(null,G__28805));
})()], null),breaking_point.core.set_screen_dimensions);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),(function (_,p__28811){
var vec__28812 = p__28811;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28812,(0),null);
var debounce_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28812,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("breaking-point.core","calcaulate-width-after-resize","breaking-point.core/calcaulate-width-after-resize",1288445004),new cljs.core.Keyword(null,"timeout","timeout",-318625318),debounce_ms,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null)], null)], null)], null);
}));
breaking_point.core.get_screen_width = (function breaking_point$core$get_screen_width(db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-width","screen-width",1557963263)], null));
});
breaking_point.core.get_screen_height = (function breaking_point$core$get_screen_height(db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-height","screen-height",141363033)], null));
});
breaking_point.core.__GT_get_screen = (function breaking_point$core$__GT_get_screen(breakpoints){
return (function breaking_point$core$__GT_get_screen_$_get_screen(screen_width,_){
if(cljs.core.truth_(screen_width)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (prev_breakpoint,p__28821){
var vec__28822 = p__28821;
var screen_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28822,(0),null);
var breakpoint = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28822,(1),null);
if((((breakpoint == null)) || ((((screen_width < breakpoint)) && ((screen_width >= prev_breakpoint)))))){
return cljs.core.reduced(screen_key);
} else {
return breakpoint;
}
}),(0),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),breakpoints));
} else {
return null;
}
});
});
breaking_point.core.get_orientation = (function breaking_point$core$get_orientation(p__28828,_){
var vec__28830 = p__28828;
var screen_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28830,(0),null);
var screen_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28830,(1),null);
if((screen_height > screen_width)){
return new cljs.core.Keyword(null,"portrait","portrait",-9810007);
} else {
return new cljs.core.Keyword(null,"landscape","landscape",1519839253);
}
});
breaking_point.core.register_subs = (function breaking_point$core$register_subs(breakpoints){
var G__28833_28900 = new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360);
var G__28834_28901 = breaking_point.core.get_screen_width;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28833_28900,G__28834_28901) : re_frame.core.reg_sub.call(null,G__28833_28900,G__28834_28901));

var G__28835_28902 = new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666);
var G__28836_28903 = breaking_point.core.get_screen_height;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__28835_28902,G__28836_28903) : re_frame.core.reg_sub.call(null,G__28835_28902,G__28836_28903));

var G__28837_28904 = new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405);
var G__28838_28905 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__28839_28906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null);
var G__28840_28907 = breaking_point.core.__GT_get_screen(breakpoints);
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__28837_28904,G__28838_28905,G__28839_28906,G__28840_28907) : re_frame.core.reg_sub.call(null,G__28837_28904,G__28838_28905,G__28839_28906,G__28840_28907));

var G__28842_28908 = new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812);
var G__28843_28909 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__28844_28910 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null);
var G__28845_28911 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__28846_28912 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666)], null);
var G__28847_28913 = breaking_point.core.get_orientation;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__28842_28908,G__28843_28909,G__28844_28910,G__28845_28911,G__28846_28912,G__28847_28913) : re_frame.core.reg_sub.call(null,G__28842_28908,G__28843_28909,G__28844_28910,G__28845_28911,G__28846_28912,G__28847_28913));

var G__28849_28914 = new cljs.core.Keyword("breaking-point.core","portrait?","breaking-point.core/portrait?",-1731575960);
var G__28850_28915 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__28851_28916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null);
var G__28852_28917 = (function (orientation,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"portrait","portrait",-9810007));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__28849_28914,G__28850_28915,G__28851_28916,G__28852_28917) : re_frame.core.reg_sub.call(null,G__28849_28914,G__28850_28915,G__28851_28916,G__28852_28917));

var G__28853_28918 = new cljs.core.Keyword("breaking-point.core","landscape?","breaking-point.core/landscape?",1510790059);
var G__28854_28919 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__28855_28920 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null);
var G__28856_28921 = (function (orientation,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"landscape","landscape",1519839253));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__28853_28918,G__28854_28919,G__28855_28920,G__28856_28921) : re_frame.core.reg_sub.call(null,G__28853_28918,G__28854_28919,G__28855_28920,G__28856_28921));

var screen_keys = (function (){var G__28857 = breakpoints;
var G__28857__$1 = (((G__28857 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__28857));
var G__28857__$2 = (((G__28857__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__28860){
var vec__28861 = p__28860;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28861,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28861,(1),null);
return cljs.core.even_QMARK_(i);
}),G__28857__$1));
if((G__28857__$2 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__28857__$2);
}
})();
var seq__28864 = cljs.core.seq(screen_keys);
var chunk__28865 = null;
var count__28866 = (0);
var i__28867 = (0);
while(true){
if((i__28867 < count__28866)){
var screen_key = chunk__28865.cljs$core$IIndexed$_nth$arity$2(null,i__28867);
var G__28876_28924 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("breaking-point.core",[cljs.core.name(screen_key),"?"].join(''));
var G__28877_28925 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__28878_28926 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null);
var G__28879_28927 = ((function (seq__28864,chunk__28865,count__28866,i__28867,G__28876_28924,G__28877_28925,G__28878_28926,screen_key,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_key);
});})(seq__28864,chunk__28865,count__28866,i__28867,G__28876_28924,G__28877_28925,G__28878_28926,screen_key,screen_keys))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__28876_28924,G__28877_28925,G__28878_28926,G__28879_28927) : re_frame.core.reg_sub.call(null,G__28876_28924,G__28877_28925,G__28878_28926,G__28879_28927));


var G__28928 = seq__28864;
var G__28929 = chunk__28865;
var G__28930 = count__28866;
var G__28931 = (i__28867 + (1));
seq__28864 = G__28928;
chunk__28865 = G__28929;
count__28866 = G__28930;
i__28867 = G__28931;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28864);
if(temp__5735__auto__){
var seq__28864__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28864__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__28864__$1);
var G__28936 = cljs.core.chunk_rest(seq__28864__$1);
var G__28937 = c__4609__auto__;
var G__28938 = cljs.core.count(c__4609__auto__);
var G__28939 = (0);
seq__28864 = G__28936;
chunk__28865 = G__28937;
count__28866 = G__28938;
i__28867 = G__28939;
continue;
} else {
var screen_key = cljs.core.first(seq__28864__$1);
var G__28883_28940 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("breaking-point.core",[cljs.core.name(screen_key),"?"].join(''));
var G__28884_28941 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__28885_28942 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null);
var G__28886_28943 = ((function (seq__28864,chunk__28865,count__28866,i__28867,G__28883_28940,G__28884_28941,G__28885_28942,screen_key,seq__28864__$1,temp__5735__auto__,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_key);
});})(seq__28864,chunk__28865,count__28866,i__28867,G__28883_28940,G__28884_28941,G__28885_28942,screen_key,seq__28864__$1,temp__5735__auto__,screen_keys))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__28883_28940,G__28884_28941,G__28885_28942,G__28886_28943) : re_frame.core.reg_sub.call(null,G__28883_28940,G__28884_28941,G__28885_28942,G__28886_28943));


var G__28944 = cljs.core.next(seq__28864__$1);
var G__28945 = null;
var G__28946 = (0);
var G__28947 = (0);
seq__28864 = G__28944;
chunk__28865 = G__28945;
count__28866 = G__28946;
i__28867 = G__28947;
continue;
}
} else {
return null;
}
}
break;
}
});
breaking_point.core.set_breakpoints = (function breaking_point$core$set_breakpoints(p__28887){
var map__28888 = p__28887;
var map__28888__$1 = (((((!((map__28888 == null))))?(((((map__28888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28888):map__28888);
var opts = map__28888__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28888__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28888__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
breaking_point.core.register_subs(breakpoints);

var G__28890_28950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28890_28950) : re_frame.core.dispatch.call(null,G__28890_28950));

return window.addEventListener("resize",(function (){
if(cljs.core.truth_(debounce_ms)){
var G__28891 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),debounce_ms], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28891) : re_frame.core.dispatch.call(null,G__28891));
} else {
var G__28892 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28892) : re_frame.core.dispatch.call(null,G__28892));
}
}),true);
});
var G__28893_28951 = new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013);
var G__28894_28952 = breaking_point.core.set_breakpoints;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__28893_28951,G__28894_28952) : re_frame.core.reg_fx.call(null,G__28893_28951,G__28894_28952));

//# sourceMappingURL=breaking_point.core.js.map
