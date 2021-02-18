goog.provide('kee_frame.controller');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.core.match');
goog.require('kee_frame.state');
goog.require('kee_frame.spec');
goog.require('cljs.spec.alpha');
goog.require('expound.alpha');
kee_frame.controller.process_params = (function kee_frame$controller$process_params(params,route){
if(cljs.core.vector_QMARK_(params)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,params);
} else {
if(cljs.core.ifn_QMARK_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(route) : params.call(null,route));
} else {
return null;
}
}
});
kee_frame.controller.validate_and_dispatch_BANG_ = (function kee_frame$controller$validate_and_dispatch_BANG_(dispatch){
if(cljs.core.truth_(dispatch)){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch)){
} else {
expound.alpha.expound(new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid dispatch value",cljs.spec.alpha.explain_data(new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch));
}

return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(dispatch) : re_frame.core.dispatch.call(null,dispatch));
} else {
return null;
}
});
kee_frame.controller.debug_enabled_QMARK_ = (function kee_frame$controller$debug_enabled_QMARK_(){
var map__41029 = cljs.core.deref(kee_frame.state.debug_config);
var map__41029__$1 = (((((!((map__41029 == null))))?(((((map__41029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41029):map__41029);
var controllers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41029__$1,new cljs.core.Keyword(null,"controllers?","controllers?",-2009030071),true);
var and__4174__auto__ = cljs.core.deref(kee_frame.state.debug_QMARK_);
if(cljs.core.truth_(and__4174__auto__)){
return controllers_QMARK_;
} else {
return and__4174__auto__;
}
});
kee_frame.controller.start_BANG_ = (function kee_frame$controller$start_BANG_(id,ctx,start,params){
if(cljs.core.truth_(start)){
if(cljs.core.truth_(kee_frame.controller.debug_enabled_QMARK_())){
var G__41031_41074 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__41032_41075 = "Starting controller ";
var G__41033_41076 = id;
var G__41034_41077 = " with params ";
var G__41035_41078 = params;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$5 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$5(G__41031_41074,G__41032_41075,G__41033_41076,G__41034_41077,G__41035_41078) : re_frame.core.console.call(null,G__41031_41074,G__41032_41075,G__41033_41076,G__41034_41077,G__41035_41078));
} else {
}

if(cljs.core.vector_QMARK_(start)){
var G__41036 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(start,params);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41036) : re_frame.core.dispatch.call(null,G__41036));
} else {
if(cljs.core.ifn_QMARK_(start)){
return kee_frame.controller.validate_and_dispatch_BANG_((start.cljs$core$IFn$_invoke$arity$2 ? start.cljs$core$IFn$_invoke$arity$2(ctx,params) : start.call(null,ctx,params)));
} else {
return null;
}
}
} else {
return null;
}
});
kee_frame.controller.stop_BANG_ = (function kee_frame$controller$stop_BANG_(id,ctx,stop){
if(cljs.core.truth_(stop)){
if(cljs.core.truth_(kee_frame.controller.debug_enabled_QMARK_())){
var G__41037_41079 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__41038_41080 = "Stopping controller ";
var G__41039_41081 = id;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__41037_41079,G__41038_41080,G__41039_41081) : re_frame.core.console.call(null,G__41037_41079,G__41038_41080,G__41039_41081));
} else {
}

if(cljs.core.vector_QMARK_(stop)){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(stop) : re_frame.core.dispatch.call(null,stop));
} else {
if(cljs.core.ifn_QMARK_(stop)){
return kee_frame.controller.validate_and_dispatch_BANG_((stop.cljs$core$IFn$_invoke$arity$1 ? stop.cljs$core$IFn$_invoke$arity$1(ctx) : stop.call(null,ctx)));
} else {
return null;
}
}
} else {
return null;
}
});
kee_frame.controller.process_controller = (function kee_frame$controller$process_controller(id,p__41046,ctx,route){
var map__41047 = p__41046;
var map__41047__$1 = (((((!((map__41047 == null))))?(((((map__41047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41047):map__41047);
var last_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41047__$1,new cljs.core.Keyword(null,"last-params","last-params",1293824707));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41047__$1,new cljs.core.Keyword(null,"params","params",710516235));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41047__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41047__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var current_params = kee_frame.controller.process_params(params,route);
var last_params_41082__$1 = last_params;
var current_params_41083__$1 = current_params;
var ocr_41050_41084 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_params_41082__$1,current_params_41083__$1);
try{if((ocr_41050_41084 === true)){
} else {
throw cljs.core.match.backtrack;

}
}catch (e41066){if((e41066 instanceof Error)){
var e__39036__auto___41085 = e41066;
if((e__39036__auto___41085 === cljs.core.match.backtrack)){
try{if((ocr_41050_41084 === false)){
try{if((last_params_41082__$1 === null)){
kee_frame.controller.start_BANG_(id,ctx,start,current_params_41083__$1);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41068){if((e41068 instanceof Error)){
var e__39036__auto___41086__$1 = e41068;
if((e__39036__auto___41086__$1 === cljs.core.match.backtrack)){
try{if((current_params_41083__$1 === null)){
kee_frame.controller.stop_BANG_(id,ctx,stop);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41069){if((e41069 instanceof Error)){
var e__39036__auto___41087__$2 = e41069;
if((e__39036__auto___41087__$2 === cljs.core.match.backtrack)){
kee_frame.controller.stop_BANG_(id,ctx,stop);

kee_frame.controller.start_BANG_(id,ctx,start,current_params_41083__$1);
} else {
throw e__39036__auto___41087__$2;
}
} else {
throw e41069;

}
}} else {
throw e__39036__auto___41086__$1;
}
} else {
throw e41068;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41067){if((e41067 instanceof Error)){
var e__39036__auto___41088__$1 = e41067;
if((e__39036__auto___41088__$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_params_41082__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_params_41083__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_41050_41084)].join('')));
} else {
throw e__39036__auto___41088__$1;
}
} else {
throw e41067;

}
}} else {
throw e__39036__auto___41085;
}
} else {
throw e41066;

}
}
return current_params;
});
kee_frame.controller.apply_route = (function kee_frame$controller$apply_route(controllers,ctx,route){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41070){
var vec__41071 = p__41070;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41071,(0),null);
var controller = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41071,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword(null,"last-params","last-params",1293824707),kee_frame.controller.process_controller(id,controller,ctx,route))], null);
}),controllers));
});

//# sourceMappingURL=kee_frame.controller.js.map
