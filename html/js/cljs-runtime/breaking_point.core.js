goog.provide('breaking_point.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame_fx.dispatch');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),(function (_,p__37992){
var vec__37993 = p__37992;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37993,(0),null);
var map__37996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37993,(1),null);
var map__37996__$1 = (((((!((map__37996 == null))))?(((((map__37996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37996):map__37996);
var opts = map__37996__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37996__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37996__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),opts], null);
}));
var G__38003_38199 = new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814);
var G__38004_38200 = (function (coeffect){
var screen_width = (function (){var or__4185__auto__ = (function (){var G__38007 = window;
if((G__38007 == null)){
return null;
} else {
return G__38007.innerWidth;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){var G__38012 = document;
var G__38012__$1 = (((G__38012 == null))?null:G__38012.documentElement);
if((G__38012__$1 == null)){
return null;
} else {
return G__38012__$1.clientWidth;
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var G__38018 = document;
var G__38018__$1 = (((G__38018 == null))?null:G__38018.body);
if((G__38018__$1 == null)){
return null;
} else {
return G__38018__$1.clientWidth;
}
}
}
})();
var screen_height = (function (){var or__4185__auto__ = (function (){var G__38029 = window;
if((G__38029 == null)){
return null;
} else {
return G__38029.innerHeight;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){var G__38039 = document;
var G__38039__$1 = (((G__38039 == null))?null:G__38039.documentElement);
if((G__38039__$1 == null)){
return null;
} else {
return G__38039__$1.clientHeight;
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var G__38042 = document;
var G__38042__$1 = (((G__38042 == null))?null:G__38042.body);
if((G__38042__$1 == null)){
return null;
} else {
return G__38042__$1.clientHeight;
}
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coeffect,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263),screen_width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen-height","screen-height",141363033),screen_height], 0));
});
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__38003_38199,G__38004_38200) : re_frame.core.reg_cofx.call(null,G__38003_38199,G__38004_38200));
breaking_point.core.set_screen_dimensions = (function breaking_point$core$set_screen_dimensions(p__38051,_){
var map__38053 = p__38051;
var map__38053__$1 = (((((!((map__38053 == null))))?(((((map__38053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38053):map__38053);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38053__$1,new cljs.core.Keyword(null,"db","db",993250759));
var screen_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38053__$1,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263));
var screen_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38053__$1,new cljs.core.Keyword(null,"screen-height","screen-height",141363033));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-width","screen-width",1557963263)], null),screen_width),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-height","screen-height",141363033)], null),screen_height)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38056 = new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814);
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__38056) : re_frame.core.inject_cofx.call(null,G__38056));
})()], null),breaking_point.core.set_screen_dimensions);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),(function (_,p__38062){
var vec__38063 = p__38062;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38063,(0),null);
var debounce_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38063,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (prev_breakpoint,p__38075){
var vec__38076 = p__38075;
var screen_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38076,(0),null);
var breakpoint = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38076,(1),null);
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
breaking_point.core.get_orientation = (function breaking_point$core$get_orientation(p__38081,_){
var vec__38083 = p__38081;
var screen_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38083,(0),null);
var screen_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38083,(1),null);
if((screen_height > screen_width)){
return new cljs.core.Keyword(null,"portrait","portrait",-9810007);
} else {
return new cljs.core.Keyword(null,"landscape","landscape",1519839253);
}
});
breaking_point.core.register_subs = (function breaking_point$core$register_subs(breakpoints){
var G__38096_38248 = new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360);
var G__38097_38249 = breaking_point.core.get_screen_width;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__38096_38248,G__38097_38249) : re_frame.core.reg_sub.call(null,G__38096_38248,G__38097_38249));

var G__38099_38250 = new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666);
var G__38100_38251 = breaking_point.core.get_screen_height;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__38099_38250,G__38100_38251) : re_frame.core.reg_sub.call(null,G__38099_38250,G__38100_38251));

var G__38101_38252 = new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405);
var G__38102_38254 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__38103_38255 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null);
var G__38104_38256 = breaking_point.core.__GT_get_screen(breakpoints);
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__38101_38252,G__38102_38254,G__38103_38255,G__38104_38256) : re_frame.core.reg_sub.call(null,G__38101_38252,G__38102_38254,G__38103_38255,G__38104_38256));

var G__38105_38260 = new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812);
var G__38106_38261 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__38107_38262 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null);
var G__38108_38263 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__38109_38264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666)], null);
var G__38110_38265 = breaking_point.core.get_orientation;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__38105_38260,G__38106_38261,G__38107_38262,G__38108_38263,G__38109_38264,G__38110_38265) : re_frame.core.reg_sub.call(null,G__38105_38260,G__38106_38261,G__38107_38262,G__38108_38263,G__38109_38264,G__38110_38265));

var G__38111_38272 = new cljs.core.Keyword("breaking-point.core","portrait?","breaking-point.core/portrait?",-1731575960);
var G__38112_38273 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__38113_38274 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null);
var G__38114_38275 = (function (orientation,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"portrait","portrait",-9810007));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__38111_38272,G__38112_38273,G__38113_38274,G__38114_38275) : re_frame.core.reg_sub.call(null,G__38111_38272,G__38112_38273,G__38113_38274,G__38114_38275));

var G__38115_38276 = new cljs.core.Keyword("breaking-point.core","landscape?","breaking-point.core/landscape?",1510790059);
var G__38116_38277 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__38117_38278 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null);
var G__38118_38279 = (function (orientation,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"landscape","landscape",1519839253));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__38115_38276,G__38116_38277,G__38117_38278,G__38118_38279) : re_frame.core.reg_sub.call(null,G__38115_38276,G__38116_38277,G__38117_38278,G__38118_38279));

var screen_keys = (function (){var G__38122 = breakpoints;
var G__38122__$1 = (((G__38122 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__38122));
var G__38122__$2 = (((G__38122__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38125){
var vec__38127 = p__38125;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38127,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38127,(1),null);
return cljs.core.even_QMARK_(i);
}),G__38122__$1));
if((G__38122__$2 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__38122__$2);
}
})();
var seq__38135 = cljs.core.seq(screen_keys);
var chunk__38136 = null;
var count__38137 = (0);
var i__38138 = (0);
while(true){
if((i__38138 < count__38137)){
var screen_key = chunk__38136.cljs$core$IIndexed$_nth$arity$2(null,i__38138);
var G__38157_38281 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("breaking-point.core",[cljs.core.name(screen_key),"?"].join(''));
var G__38158_38282 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__38159_38283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null);
var G__38160_38284 = ((function (seq__38135,chunk__38136,count__38137,i__38138,G__38157_38281,G__38158_38282,G__38159_38283,screen_key,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_key);
});})(seq__38135,chunk__38136,count__38137,i__38138,G__38157_38281,G__38158_38282,G__38159_38283,screen_key,screen_keys))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__38157_38281,G__38158_38282,G__38159_38283,G__38160_38284) : re_frame.core.reg_sub.call(null,G__38157_38281,G__38158_38282,G__38159_38283,G__38160_38284));


var G__38289 = seq__38135;
var G__38290 = chunk__38136;
var G__38291 = count__38137;
var G__38292 = (i__38138 + (1));
seq__38135 = G__38289;
chunk__38136 = G__38290;
count__38137 = G__38291;
i__38138 = G__38292;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38135);
if(temp__5735__auto__){
var seq__38135__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38135__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38135__$1);
var G__38297 = cljs.core.chunk_rest(seq__38135__$1);
var G__38298 = c__4609__auto__;
var G__38299 = cljs.core.count(c__4609__auto__);
var G__38300 = (0);
seq__38135 = G__38297;
chunk__38136 = G__38298;
count__38137 = G__38299;
i__38138 = G__38300;
continue;
} else {
var screen_key = cljs.core.first(seq__38135__$1);
var G__38169_38305 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("breaking-point.core",[cljs.core.name(screen_key),"?"].join(''));
var G__38170_38306 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__38171_38307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null);
var G__38172_38308 = ((function (seq__38135,chunk__38136,count__38137,i__38138,G__38169_38305,G__38170_38306,G__38171_38307,screen_key,seq__38135__$1,temp__5735__auto__,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_key);
});})(seq__38135,chunk__38136,count__38137,i__38138,G__38169_38305,G__38170_38306,G__38171_38307,screen_key,seq__38135__$1,temp__5735__auto__,screen_keys))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__38169_38305,G__38170_38306,G__38171_38307,G__38172_38308) : re_frame.core.reg_sub.call(null,G__38169_38305,G__38170_38306,G__38171_38307,G__38172_38308));


var G__38319 = cljs.core.next(seq__38135__$1);
var G__38320 = null;
var G__38321 = (0);
var G__38322 = (0);
seq__38135 = G__38319;
chunk__38136 = G__38320;
count__38137 = G__38321;
i__38138 = G__38322;
continue;
}
} else {
return null;
}
}
break;
}
});
breaking_point.core.set_breakpoints = (function breaking_point$core$set_breakpoints(p__38176){
var map__38178 = p__38176;
var map__38178__$1 = (((((!((map__38178 == null))))?(((((map__38178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38178):map__38178);
var opts = map__38178__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38178__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38178__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
breaking_point.core.register_subs(breakpoints);

var G__38181_38330 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38181_38330) : re_frame.core.dispatch.call(null,G__38181_38330));

return window.addEventListener("resize",(function (){
if(cljs.core.truth_(debounce_ms)){
var G__38184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),debounce_ms], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38184) : re_frame.core.dispatch.call(null,G__38184));
} else {
var G__38185 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38185) : re_frame.core.dispatch.call(null,G__38185));
}
}),true);
});
var G__38188_38335 = new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013);
var G__38189_38336 = breaking_point.core.set_breakpoints;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__38188_38335,G__38189_38336) : re_frame.core.reg_fx.call(null,G__38188_38335,G__38189_38336));

//# sourceMappingURL=breaking_point.core.js.map
