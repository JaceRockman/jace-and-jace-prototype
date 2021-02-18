goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__34391__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__34391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34394__i = 0, G__34394__a = new Array(arguments.length -  0);
while (G__34394__i < G__34394__a.length) {G__34394__a[G__34394__i] = arguments[G__34394__i + 0]; ++G__34394__i;}
  args = new cljs.core.IndexedSeq(G__34394__a,0,null);
} 
return G__34391__delegate.call(this,args);};
G__34391.cljs$lang$maxFixedArity = 0;
G__34391.cljs$lang$applyTo = (function (arglist__34395){
var args = cljs.core.seq(arglist__34395);
return G__34391__delegate(args);
});
G__34391.cljs$core$IFn$_invoke$arity$variadic = G__34391__delegate;
return G__34391;
})()
);

(o.error = (function() { 
var G__34401__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__34401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34409__i = 0, G__34409__a = new Array(arguments.length -  0);
while (G__34409__i < G__34409__a.length) {G__34409__a[G__34409__i] = arguments[G__34409__i + 0]; ++G__34409__i;}
  args = new cljs.core.IndexedSeq(G__34409__a,0,null);
} 
return G__34401__delegate.call(this,args);};
G__34401.cljs$lang$maxFixedArity = 0;
G__34401.cljs$lang$applyTo = (function (arglist__34410){
var args = cljs.core.seq(arglist__34410);
return G__34401__delegate(args);
});
G__34401.cljs$core$IFn$_invoke$arity$variadic = G__34401__delegate;
return G__34401;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
