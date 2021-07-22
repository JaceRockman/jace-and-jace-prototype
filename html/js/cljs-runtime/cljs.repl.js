goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34106){
var map__34107 = p__34106;
var map__34107__$1 = cljs.core.__destructure_map(map__34107);
var m = map__34107__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34107__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34107__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34116_34528 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34117_34529 = null;
var count__34118_34530 = (0);
var i__34119_34531 = (0);
while(true){
if((i__34119_34531 < count__34118_34530)){
var f_34536 = chunk__34117_34529.cljs$core$IIndexed$_nth$arity$2(null,i__34119_34531);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34536], 0));


var G__34541 = seq__34116_34528;
var G__34542 = chunk__34117_34529;
var G__34543 = count__34118_34530;
var G__34544 = (i__34119_34531 + (1));
seq__34116_34528 = G__34541;
chunk__34117_34529 = G__34542;
count__34118_34530 = G__34543;
i__34119_34531 = G__34544;
continue;
} else {
var temp__5753__auto___34546 = cljs.core.seq(seq__34116_34528);
if(temp__5753__auto___34546){
var seq__34116_34552__$1 = temp__5753__auto___34546;
if(cljs.core.chunked_seq_QMARK_(seq__34116_34552__$1)){
var c__4638__auto___34553 = cljs.core.chunk_first(seq__34116_34552__$1);
var G__34557 = cljs.core.chunk_rest(seq__34116_34552__$1);
var G__34558 = c__4638__auto___34553;
var G__34559 = cljs.core.count(c__4638__auto___34553);
var G__34560 = (0);
seq__34116_34528 = G__34557;
chunk__34117_34529 = G__34558;
count__34118_34530 = G__34559;
i__34119_34531 = G__34560;
continue;
} else {
var f_34561 = cljs.core.first(seq__34116_34552__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34561], 0));


var G__34564 = cljs.core.next(seq__34116_34552__$1);
var G__34565 = null;
var G__34566 = (0);
var G__34567 = (0);
seq__34116_34528 = G__34564;
chunk__34117_34529 = G__34565;
count__34118_34530 = G__34566;
i__34119_34531 = G__34567;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34573 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34573], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34573)))?cljs.core.second(arglists_34573):arglists_34573)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34131_34596 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34132_34597 = null;
var count__34133_34598 = (0);
var i__34134_34599 = (0);
while(true){
if((i__34134_34599 < count__34133_34598)){
var vec__34195_34600 = chunk__34132_34597.cljs$core$IIndexed$_nth$arity$2(null,i__34134_34599);
var name_34601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34195_34600,(0),null);
var map__34198_34602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34195_34600,(1),null);
var map__34198_34603__$1 = cljs.core.__destructure_map(map__34198_34602);
var doc_34604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34198_34603__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34198_34603__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34601], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34605], 0));

if(cljs.core.truth_(doc_34604)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34604], 0));
} else {
}


var G__34608 = seq__34131_34596;
var G__34609 = chunk__34132_34597;
var G__34610 = count__34133_34598;
var G__34611 = (i__34134_34599 + (1));
seq__34131_34596 = G__34608;
chunk__34132_34597 = G__34609;
count__34133_34598 = G__34610;
i__34134_34599 = G__34611;
continue;
} else {
var temp__5753__auto___34612 = cljs.core.seq(seq__34131_34596);
if(temp__5753__auto___34612){
var seq__34131_34613__$1 = temp__5753__auto___34612;
if(cljs.core.chunked_seq_QMARK_(seq__34131_34613__$1)){
var c__4638__auto___34614 = cljs.core.chunk_first(seq__34131_34613__$1);
var G__34615 = cljs.core.chunk_rest(seq__34131_34613__$1);
var G__34616 = c__4638__auto___34614;
var G__34617 = cljs.core.count(c__4638__auto___34614);
var G__34618 = (0);
seq__34131_34596 = G__34615;
chunk__34132_34597 = G__34616;
count__34133_34598 = G__34617;
i__34134_34599 = G__34618;
continue;
} else {
var vec__34223_34619 = cljs.core.first(seq__34131_34613__$1);
var name_34620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34223_34619,(0),null);
var map__34226_34621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34223_34619,(1),null);
var map__34226_34622__$1 = cljs.core.__destructure_map(map__34226_34621);
var doc_34623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34226_34622__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34226_34622__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34620], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34624], 0));

if(cljs.core.truth_(doc_34623)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34623], 0));
} else {
}


var G__34629 = cljs.core.next(seq__34131_34613__$1);
var G__34630 = null;
var G__34631 = (0);
var G__34632 = (0);
seq__34131_34596 = G__34629;
chunk__34132_34597 = G__34630;
count__34133_34598 = G__34631;
i__34134_34599 = G__34632;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34234 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34235 = null;
var count__34236 = (0);
var i__34237 = (0);
while(true){
if((i__34237 < count__34236)){
var role = chunk__34235.cljs$core$IIndexed$_nth$arity$2(null,i__34237);
var temp__5753__auto___34641__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34641__$1)){
var spec_34642 = temp__5753__auto___34641__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34642)], 0));
} else {
}


var G__34644 = seq__34234;
var G__34645 = chunk__34235;
var G__34646 = count__34236;
var G__34647 = (i__34237 + (1));
seq__34234 = G__34644;
chunk__34235 = G__34645;
count__34236 = G__34646;
i__34237 = G__34647;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__34234);
if(temp__5753__auto____$1){
var seq__34234__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34234__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34234__$1);
var G__34649 = cljs.core.chunk_rest(seq__34234__$1);
var G__34650 = c__4638__auto__;
var G__34651 = cljs.core.count(c__4638__auto__);
var G__34652 = (0);
seq__34234 = G__34649;
chunk__34235 = G__34650;
count__34236 = G__34651;
i__34237 = G__34652;
continue;
} else {
var role = cljs.core.first(seq__34234__$1);
var temp__5753__auto___34653__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34653__$2)){
var spec_34654 = temp__5753__auto___34653__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34654)], 0));
} else {
}


var G__34655 = cljs.core.next(seq__34234__$1);
var G__34656 = null;
var G__34657 = (0);
var G__34658 = (0);
seq__34234 = G__34655;
chunk__34235 = G__34656;
count__34236 = G__34657;
i__34237 = G__34658;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34665 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34666 = cljs.core.ex_cause(t);
via = G__34665;
t = G__34666;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34282 = datafied_throwable;
var map__34282__$1 = cljs.core.__destructure_map(map__34282);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34282__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34282__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34282__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34283 = cljs.core.last(via);
var map__34283__$1 = cljs.core.__destructure_map(map__34283);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34283__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34283__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34283__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34284 = data;
var map__34284__$1 = cljs.core.__destructure_map(map__34284);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34284__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34284__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34284__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34285 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34285__$1 = cljs.core.__destructure_map(map__34285);
var top_data = map__34285__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34285__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34288 = phase;
var G__34288__$1 = (((G__34288 instanceof cljs.core.Keyword))?G__34288.fqn:null);
switch (G__34288__$1) {
case "read-source":
var map__34292 = data;
var map__34292__$1 = cljs.core.__destructure_map(map__34292);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34292__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34292__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34293 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34293__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34293,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34293);
var G__34293__$2 = (cljs.core.truth_((function (){var fexpr__34294 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34294.cljs$core$IFn$_invoke$arity$1 ? fexpr__34294.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34294.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34293__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34293__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34293__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34293__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34296 = top_data;
var G__34296__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34296,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34296);
var G__34296__$2 = (cljs.core.truth_((function (){var fexpr__34297 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34297.cljs$core$IFn$_invoke$arity$1 ? fexpr__34297.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34297.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34296__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34296__$1);
var G__34296__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34296__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34296__$2);
var G__34296__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34296__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34296__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34296__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34296__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34298 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34298,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34298,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34298,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34298,(3),null);
var G__34301 = top_data;
var G__34301__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34301,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34301);
var G__34301__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34301__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34301__$1);
var G__34301__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34301__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34301__$2);
var G__34301__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34301__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34301__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34301__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34301__$4;
}

break;
case "execution":
var vec__34302 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34302,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34302,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34302,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34302,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34280_SHARP_){
var or__4212__auto__ = (p1__34280_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__34305 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34305.cljs$core$IFn$_invoke$arity$1 ? fexpr__34305.cljs$core$IFn$_invoke$arity$1(p1__34280_SHARP_) : fexpr__34305.call(null,p1__34280_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__34307 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34307__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34307,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34307);
var G__34307__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34307__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34307__$1);
var G__34307__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34307__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34307__$2);
var G__34307__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34307__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34307__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34307__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34307__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34288__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34369){
var map__34370 = p__34369;
var map__34370__$1 = cljs.core.__destructure_map(map__34370);
var triage_data = map__34370__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34370__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34370__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34370__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34370__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34370__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34370__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34370__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34370__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34372 = phase;
var G__34372__$1 = (((G__34372 instanceof cljs.core.Keyword))?G__34372.fqn:null);
switch (G__34372__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34373 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34374 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34375 = loc;
var G__34376 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34383_34704 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34384_34706 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34385_34707 = true;
var _STAR_print_fn_STAR__temp_val__34386_34708 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34385_34707);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34386_34708);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34367_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34367_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34384_34706);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34383_34704);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34373,G__34374,G__34375,G__34376) : format.call(null,G__34373,G__34374,G__34375,G__34376));

break;
case "macroexpansion":
var G__34421 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34422 = cause_type;
var G__34423 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34424 = loc;
var G__34425 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34421,G__34422,G__34423,G__34424,G__34425) : format.call(null,G__34421,G__34422,G__34423,G__34424,G__34425));

break;
case "compile-syntax-check":
var G__34433 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34434 = cause_type;
var G__34435 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34436 = loc;
var G__34437 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34433,G__34434,G__34435,G__34436,G__34437) : format.call(null,G__34433,G__34434,G__34435,G__34436,G__34437));

break;
case "compilation":
var G__34444 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34445 = cause_type;
var G__34446 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34447 = loc;
var G__34448 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34444,G__34445,G__34446,G__34447,G__34448) : format.call(null,G__34444,G__34445,G__34446,G__34447,G__34448));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34450 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34451 = symbol;
var G__34452 = loc;
var G__34453 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34464_34715 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34465_34716 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34466_34717 = true;
var _STAR_print_fn_STAR__temp_val__34467_34718 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34466_34717);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34467_34718);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34368_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34368_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34465_34716);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34464_34715);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34450,G__34451,G__34452,G__34453) : format.call(null,G__34450,G__34451,G__34452,G__34453));
} else {
var G__34486 = "Execution error%s at %s(%s).\n%s\n";
var G__34487 = cause_type;
var G__34488 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34489 = loc;
var G__34490 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34486,G__34487,G__34488,G__34489,G__34490) : format.call(null,G__34486,G__34487,G__34488,G__34489,G__34490));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34372__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
