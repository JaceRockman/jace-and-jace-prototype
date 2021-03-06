goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34150){
var map__34151 = p__34150;
var map__34151__$1 = (((((!((map__34151 == null))))?(((((map__34151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34151):map__34151);
var m = map__34151__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34151__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34151__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
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
var seq__34157_34677 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34158_34678 = null;
var count__34159_34679 = (0);
var i__34160_34680 = (0);
while(true){
if((i__34160_34680 < count__34159_34679)){
var f_34683 = chunk__34158_34678.cljs$core$IIndexed$_nth$arity$2(null,i__34160_34680);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34683], 0));


var G__34688 = seq__34157_34677;
var G__34689 = chunk__34158_34678;
var G__34690 = count__34159_34679;
var G__34691 = (i__34160_34680 + (1));
seq__34157_34677 = G__34688;
chunk__34158_34678 = G__34689;
count__34159_34679 = G__34690;
i__34160_34680 = G__34691;
continue;
} else {
var temp__5735__auto___34694 = cljs.core.seq(seq__34157_34677);
if(temp__5735__auto___34694){
var seq__34157_34697__$1 = temp__5735__auto___34694;
if(cljs.core.chunked_seq_QMARK_(seq__34157_34697__$1)){
var c__4609__auto___34698 = cljs.core.chunk_first(seq__34157_34697__$1);
var G__34699 = cljs.core.chunk_rest(seq__34157_34697__$1);
var G__34700 = c__4609__auto___34698;
var G__34701 = cljs.core.count(c__4609__auto___34698);
var G__34702 = (0);
seq__34157_34677 = G__34699;
chunk__34158_34678 = G__34700;
count__34159_34679 = G__34701;
i__34160_34680 = G__34702;
continue;
} else {
var f_34707 = cljs.core.first(seq__34157_34697__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34707], 0));


var G__34708 = cljs.core.next(seq__34157_34697__$1);
var G__34709 = null;
var G__34710 = (0);
var G__34711 = (0);
seq__34157_34677 = G__34708;
chunk__34158_34678 = G__34709;
count__34159_34679 = G__34710;
i__34160_34680 = G__34711;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34715 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34715], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34715)))?cljs.core.second(arglists_34715):arglists_34715)], 0));
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
var seq__34173_34722 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34174_34723 = null;
var count__34175_34724 = (0);
var i__34176_34725 = (0);
while(true){
if((i__34176_34725 < count__34175_34724)){
var vec__34195_34726 = chunk__34174_34723.cljs$core$IIndexed$_nth$arity$2(null,i__34176_34725);
var name_34727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34195_34726,(0),null);
var map__34198_34728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34195_34726,(1),null);
var map__34198_34729__$1 = (((((!((map__34198_34728 == null))))?(((((map__34198_34728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34198_34728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34198_34728):map__34198_34728);
var doc_34730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34198_34729__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34198_34729__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34727], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34731], 0));

if(cljs.core.truth_(doc_34730)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34730], 0));
} else {
}


var G__34741 = seq__34173_34722;
var G__34742 = chunk__34174_34723;
var G__34743 = count__34175_34724;
var G__34744 = (i__34176_34725 + (1));
seq__34173_34722 = G__34741;
chunk__34174_34723 = G__34742;
count__34175_34724 = G__34743;
i__34176_34725 = G__34744;
continue;
} else {
var temp__5735__auto___34745 = cljs.core.seq(seq__34173_34722);
if(temp__5735__auto___34745){
var seq__34173_34746__$1 = temp__5735__auto___34745;
if(cljs.core.chunked_seq_QMARK_(seq__34173_34746__$1)){
var c__4609__auto___34747 = cljs.core.chunk_first(seq__34173_34746__$1);
var G__34750 = cljs.core.chunk_rest(seq__34173_34746__$1);
var G__34751 = c__4609__auto___34747;
var G__34752 = cljs.core.count(c__4609__auto___34747);
var G__34753 = (0);
seq__34173_34722 = G__34750;
chunk__34174_34723 = G__34751;
count__34175_34724 = G__34752;
i__34176_34725 = G__34753;
continue;
} else {
var vec__34207_34758 = cljs.core.first(seq__34173_34746__$1);
var name_34759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34207_34758,(0),null);
var map__34210_34760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34207_34758,(1),null);
var map__34210_34761__$1 = (((((!((map__34210_34760 == null))))?(((((map__34210_34760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34210_34760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34210_34760):map__34210_34760);
var doc_34762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34210_34761__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34210_34761__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34759], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34763], 0));

if(cljs.core.truth_(doc_34762)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34762], 0));
} else {
}


var G__34770 = cljs.core.next(seq__34173_34746__$1);
var G__34771 = null;
var G__34772 = (0);
var G__34773 = (0);
seq__34173_34722 = G__34770;
chunk__34174_34723 = G__34771;
count__34175_34724 = G__34772;
i__34176_34725 = G__34773;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34221 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34222 = null;
var count__34223 = (0);
var i__34224 = (0);
while(true){
if((i__34224 < count__34223)){
var role = chunk__34222.cljs$core$IIndexed$_nth$arity$2(null,i__34224);
var temp__5735__auto___34782__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34782__$1)){
var spec_34784 = temp__5735__auto___34782__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34784)], 0));
} else {
}


var G__34789 = seq__34221;
var G__34790 = chunk__34222;
var G__34791 = count__34223;
var G__34792 = (i__34224 + (1));
seq__34221 = G__34789;
chunk__34222 = G__34790;
count__34223 = G__34791;
i__34224 = G__34792;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__34221);
if(temp__5735__auto____$1){
var seq__34221__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34221__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34221__$1);
var G__34794 = cljs.core.chunk_rest(seq__34221__$1);
var G__34795 = c__4609__auto__;
var G__34796 = cljs.core.count(c__4609__auto__);
var G__34797 = (0);
seq__34221 = G__34794;
chunk__34222 = G__34795;
count__34223 = G__34796;
i__34224 = G__34797;
continue;
} else {
var role = cljs.core.first(seq__34221__$1);
var temp__5735__auto___34798__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34798__$2)){
var spec_34800 = temp__5735__auto___34798__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34800)], 0));
} else {
}


var G__34802 = cljs.core.next(seq__34221__$1);
var G__34803 = null;
var G__34804 = (0);
var G__34805 = (0);
seq__34221 = G__34802;
chunk__34222 = G__34803;
count__34223 = G__34804;
i__34224 = G__34805;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
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
var G__34814 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34815 = cljs.core.ex_cause(t);
via = G__34814;
t = G__34815;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
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
var map__34314 = datafied_throwable;
var map__34314__$1 = (((((!((map__34314 == null))))?(((((map__34314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34314):map__34314);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34314__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34314__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34314__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34317 = cljs.core.last(via);
var map__34317__$1 = (((((!((map__34317 == null))))?(((((map__34317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34317):map__34317);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34317__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34317__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34317__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34318 = data;
var map__34318__$1 = (((((!((map__34318 == null))))?(((((map__34318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34318):map__34318);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34318__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34318__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34318__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34319 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34319__$1 = (((((!((map__34319 == null))))?(((((map__34319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34319):map__34319);
var top_data = map__34319__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34319__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34368 = phase;
var G__34368__$1 = (((G__34368 instanceof cljs.core.Keyword))?G__34368.fqn:null);
switch (G__34368__$1) {
case "read-source":
var map__34373 = data;
var map__34373__$1 = (((((!((map__34373 == null))))?(((((map__34373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34373):map__34373);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34373__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34373__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34382 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34382__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34382,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34382);
var G__34382__$2 = (cljs.core.truth_((function (){var fexpr__34388 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34388.cljs$core$IFn$_invoke$arity$1 ? fexpr__34388.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34388.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34382__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34382__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34382__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34382__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34390 = top_data;
var G__34390__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34390,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34390);
var G__34390__$2 = (cljs.core.truth_((function (){var fexpr__34392 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34392.cljs$core$IFn$_invoke$arity$1 ? fexpr__34392.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34392.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34390__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34390__$1);
var G__34390__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34390__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34390__$2);
var G__34390__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34390__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34390__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34390__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34390__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34406 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34406,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34406,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34406,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34406,(3),null);
var G__34413 = top_data;
var G__34413__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34413,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34413);
var G__34413__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34413__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34413__$1);
var G__34413__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34413__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34413__$2);
var G__34413__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34413__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34413__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34413__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34413__$4;
}

break;
case "execution":
var vec__34435 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34435,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34435,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34435,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34435,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34300_SHARP_){
var or__4185__auto__ = (p1__34300_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__34450 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34450.cljs$core$IFn$_invoke$arity$1 ? fexpr__34450.cljs$core$IFn$_invoke$arity$1(p1__34300_SHARP_) : fexpr__34450.call(null,p1__34300_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__34452 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34452__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34452,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34452);
var G__34452__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34452__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34452__$1);
var G__34452__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34452__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34452__$2);
var G__34452__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34452__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34452__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34452__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34452__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34368__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34491){
var map__34493 = p__34491;
var map__34493__$1 = (((((!((map__34493 == null))))?(((((map__34493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34493):map__34493);
var triage_data = map__34493__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34493__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34493__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34493__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34493__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34493__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34493__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34493__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34493__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34548 = phase;
var G__34548__$1 = (((G__34548 instanceof cljs.core.Keyword))?G__34548.fqn:null);
switch (G__34548__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34556 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34557 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34558 = loc;
var G__34559 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34569_34915 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34570_34916 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34571_34917 = true;
var _STAR_print_fn_STAR__temp_val__34572_34918 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34571_34917);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34572_34918);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34472_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34472_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34570_34916);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34569_34915);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34556,G__34557,G__34558,G__34559) : format.call(null,G__34556,G__34557,G__34558,G__34559));

break;
case "macroexpansion":
var G__34585 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34586 = cause_type;
var G__34587 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34588 = loc;
var G__34589 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34585,G__34586,G__34587,G__34588,G__34589) : format.call(null,G__34585,G__34586,G__34587,G__34588,G__34589));

break;
case "compile-syntax-check":
var G__34594 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34595 = cause_type;
var G__34596 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34597 = loc;
var G__34598 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34594,G__34595,G__34596,G__34597,G__34598) : format.call(null,G__34594,G__34595,G__34596,G__34597,G__34598));

break;
case "compilation":
var G__34601 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34602 = cause_type;
var G__34603 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34604 = loc;
var G__34605 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34601,G__34602,G__34603,G__34604,G__34605) : format.call(null,G__34601,G__34602,G__34603,G__34604,G__34605));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34613 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34614 = symbol;
var G__34615 = loc;
var G__34616 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34623_34945 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34624_34946 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34625_34947 = true;
var _STAR_print_fn_STAR__temp_val__34626_34948 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34625_34947);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34626_34948);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34482_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34482_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34624_34946);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34623_34945);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34613,G__34614,G__34615,G__34616) : format.call(null,G__34613,G__34614,G__34615,G__34616));
} else {
var G__34643 = "Execution error%s at %s(%s).\n%s\n";
var G__34644 = cause_type;
var G__34645 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34646 = loc;
var G__34647 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34643,G__34644,G__34645,G__34646,G__34647) : format.call(null,G__34643,G__34644,G__34645,G__34646,G__34647));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34548__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
