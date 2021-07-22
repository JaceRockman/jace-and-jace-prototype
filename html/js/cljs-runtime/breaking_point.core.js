goog.provide('breaking_point.core');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),(function (_,p__38130){
var vec__38131 = p__38130;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38131,(0),null);
var map__38134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38131,(1),null);
var map__38134__$1 = cljs.core.__destructure_map(map__38134);
var opts = map__38134__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38134__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38134__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),opts], null);
}));
var G__38135_38275 = new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814);
var G__38136_38276 = (function (coeffect){
var screen_width = (function (){var or__4212__auto__ = (function (){var G__38137 = window;
if((G__38137 == null)){
return null;
} else {
return G__38137.innerWidth;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = (function (){var G__38143 = document;
var G__38143__$1 = (((G__38143 == null))?null:G__38143.documentElement);
if((G__38143__$1 == null)){
return null;
} else {
return G__38143__$1.clientWidth;
}
})();
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var G__38144 = document;
var G__38144__$1 = (((G__38144 == null))?null:G__38144.body);
if((G__38144__$1 == null)){
return null;
} else {
return G__38144__$1.clientWidth;
}
}
}
})();
var screen_height = (function (){var or__4212__auto__ = (function (){var G__38145 = window;
if((G__38145 == null)){
return null;
} else {
return G__38145.innerHeight;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = (function (){var G__38146 = document;
var G__38146__$1 = (((G__38146 == null))?null:G__38146.documentElement);
if((G__38146__$1 == null)){
return null;
} else {
return G__38146__$1.clientHeight;
}
})();
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var G__38148 = document;
var G__38148__$1 = (((G__38148 == null))?null:G__38148.body);
if((G__38148__$1 == null)){
return null;
} else {
return G__38148__$1.clientHeight;
}
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coeffect,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263),screen_width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen-height","screen-height",141363033),screen_height], 0));
});
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__38135_38275,G__38136_38276) : re_frame.core.reg_cofx.call(null,G__38135_38275,G__38136_38276));
breaking_point.core.set_screen_dimensions = (function breaking_point$core$set_screen_dimensions(p__38149,_){
var map__38150 = p__38149;
var map__38150__$1 = cljs.core.__destructure_map(map__38150);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38150__$1,new cljs.core.Keyword(null,"db","db",993250759));
var screen_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38150__$1,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263));
var screen_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38150__$1,new cljs.core.Keyword(null,"screen-height","screen-height",141363033));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-width","screen-width",1557963263)], null),screen_width),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-height","screen-height",141363033)], null),screen_height)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814)) : re_frame.core.inject_cofx.call(null,new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814)))], null),breaking_point.core.set_screen_dimensions);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),(function (_,p__38157){
var vec__38158 = p__38157;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38158,(0),null);
var debounce_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38158,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (prev_breakpoint,p__38169){
var vec__38170 = p__38169;
var screen_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38170,(0),null);
var breakpoint = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38170,(1),null);
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
breaking_point.core.get_orientation = (function breaking_point$core$get_orientation(p__38181,_){
var vec__38182 = p__38181;
var screen_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38182,(0),null);
var screen_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38182,(1),null);
if((screen_height > screen_width)){
return new cljs.core.Keyword(null,"portrait","portrait",-9810007);
} else {
return new cljs.core.Keyword(null,"landscape","landscape",1519839253);
}
});
breaking_point.core.register_subs = (function breaking_point$core$register_subs(breakpoints){
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360),breaking_point.core.get_screen_width) : re_frame.core.reg_sub.call(null,new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360),breaking_point.core.get_screen_width));

(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666),breaking_point.core.get_screen_height) : re_frame.core.reg_sub.call(null,new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666),breaking_point.core.get_screen_height));

var G__38188_38298 = new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405);
var G__38189_38299 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__38190_38300 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null);
var G__38191_38301 = breaking_point.core.__GT_get_screen(breakpoints);
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__38188_38298,G__38189_38299,G__38190_38300,G__38191_38301) : re_frame.core.reg_sub.call(null,G__38188_38298,G__38189_38299,G__38190_38300,G__38191_38301));

var G__38192_38306 = new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812);
var G__38193_38307 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__38194_38308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null);
var G__38195_38309 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__38196_38310 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666)], null);
var G__38197_38311 = breaking_point.core.get_orientation;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__38192_38306,G__38193_38307,G__38194_38308,G__38195_38309,G__38196_38310,G__38197_38311) : re_frame.core.reg_sub.call(null,G__38192_38306,G__38193_38307,G__38194_38308,G__38195_38309,G__38196_38310,G__38197_38311));

var G__38201_38319 = new cljs.core.Keyword("breaking-point.core","portrait?","breaking-point.core/portrait?",-1731575960);
var G__38202_38320 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__38203_38321 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null);
var G__38204_38322 = (function (orientation,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"portrait","portrait",-9810007));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__38201_38319,G__38202_38320,G__38203_38321,G__38204_38322) : re_frame.core.reg_sub.call(null,G__38201_38319,G__38202_38320,G__38203_38321,G__38204_38322));

var G__38207_38330 = new cljs.core.Keyword("breaking-point.core","landscape?","breaking-point.core/landscape?",1510790059);
var G__38208_38331 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__38209_38334 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null);
var G__38210_38336 = (function (orientation,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"landscape","landscape",1519839253));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__38207_38330,G__38208_38331,G__38209_38334,G__38210_38336) : re_frame.core.reg_sub.call(null,G__38207_38330,G__38208_38331,G__38209_38334,G__38210_38336));

var screen_keys = (function (){var G__38211 = breakpoints;
var G__38211__$1 = (((G__38211 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__38211));
var G__38211__$2 = (((G__38211__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38212){
var vec__38213 = p__38212;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38213,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38213,(1),null);
return cljs.core.even_QMARK_(i);
}),G__38211__$1));
if((G__38211__$2 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__38211__$2);
}
})();
var seq__38218 = cljs.core.seq(screen_keys);
var chunk__38219 = null;
var count__38220 = (0);
var i__38221 = (0);
while(true){
if((i__38221 < count__38220)){
var screen_key = chunk__38219.cljs$core$IIndexed$_nth$arity$2(null,i__38221);
var G__38236_38341 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("breaking-point.core",[cljs.core.name(screen_key),"?"].join(''));
var G__38237_38342 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__38238_38343 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null);
var G__38239_38344 = ((function (seq__38218,chunk__38219,count__38220,i__38221,G__38236_38341,G__38237_38342,G__38238_38343,screen_key,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_key);
});})(seq__38218,chunk__38219,count__38220,i__38221,G__38236_38341,G__38237_38342,G__38238_38343,screen_key,screen_keys))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__38236_38341,G__38237_38342,G__38238_38343,G__38239_38344) : re_frame.core.reg_sub.call(null,G__38236_38341,G__38237_38342,G__38238_38343,G__38239_38344));


var G__38346 = seq__38218;
var G__38347 = chunk__38219;
var G__38348 = count__38220;
var G__38349 = (i__38221 + (1));
seq__38218 = G__38346;
chunk__38219 = G__38347;
count__38220 = G__38348;
i__38221 = G__38349;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38218);
if(temp__5753__auto__){
var seq__38218__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38218__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38218__$1);
var G__38350 = cljs.core.chunk_rest(seq__38218__$1);
var G__38351 = c__4638__auto__;
var G__38352 = cljs.core.count(c__4638__auto__);
var G__38353 = (0);
seq__38218 = G__38350;
chunk__38219 = G__38351;
count__38220 = G__38352;
i__38221 = G__38353;
continue;
} else {
var screen_key = cljs.core.first(seq__38218__$1);
var G__38249_38354 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("breaking-point.core",[cljs.core.name(screen_key),"?"].join(''));
var G__38250_38355 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__38251_38356 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null);
var G__38252_38357 = ((function (seq__38218,chunk__38219,count__38220,i__38221,G__38249_38354,G__38250_38355,G__38251_38356,screen_key,seq__38218__$1,temp__5753__auto__,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_key);
});})(seq__38218,chunk__38219,count__38220,i__38221,G__38249_38354,G__38250_38355,G__38251_38356,screen_key,seq__38218__$1,temp__5753__auto__,screen_keys))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__38249_38354,G__38250_38355,G__38251_38356,G__38252_38357) : re_frame.core.reg_sub.call(null,G__38249_38354,G__38250_38355,G__38251_38356,G__38252_38357));


var G__38358 = cljs.core.next(seq__38218__$1);
var G__38359 = null;
var G__38360 = (0);
var G__38361 = (0);
seq__38218 = G__38358;
chunk__38219 = G__38359;
count__38220 = G__38360;
i__38221 = G__38361;
continue;
}
} else {
return null;
}
}
break;
}
});
breaking_point.core.set_breakpoints = (function breaking_point$core$set_breakpoints(p__38260){
var map__38261 = p__38260;
var map__38261__$1 = cljs.core.__destructure_map(map__38261);
var opts = map__38261__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38261__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38261__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
breaking_point.core.register_subs(breakpoints);

var G__38262_38367 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38262_38367) : re_frame.core.dispatch.call(null,G__38262_38367));

return window.addEventListener("resize",(function (){
if(cljs.core.truth_(debounce_ms)){
var G__38266 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),debounce_ms], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38266) : re_frame.core.dispatch.call(null,G__38266));
} else {
var G__38267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38267) : re_frame.core.dispatch.call(null,G__38267));
}
}),true);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),breaking_point.core.set_breakpoints) : re_frame.core.reg_fx.call(null,new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),breaking_point.core.set_breakpoints));

//# sourceMappingURL=breaking_point.core.js.map
