goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19552){
var map__19554 = p__19552;
var map__19554__$1 = cljs.core.__destructure_map(map__19554);
var m = map__19554__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19554__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19554__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
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
var seq__19566_19913 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19567_19914 = null;
var count__19568_19915 = (0);
var i__19569_19916 = (0);
while(true){
if((i__19569_19916 < count__19568_19915)){
var f_19917 = chunk__19567_19914.cljs$core$IIndexed$_nth$arity$2(null,i__19569_19916);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19917], 0));


var G__19918 = seq__19566_19913;
var G__19919 = chunk__19567_19914;
var G__19920 = count__19568_19915;
var G__19921 = (i__19569_19916 + (1));
seq__19566_19913 = G__19918;
chunk__19567_19914 = G__19919;
count__19568_19915 = G__19920;
i__19569_19916 = G__19921;
continue;
} else {
var temp__5804__auto___19922 = cljs.core.seq(seq__19566_19913);
if(temp__5804__auto___19922){
var seq__19566_19923__$1 = temp__5804__auto___19922;
if(cljs.core.chunked_seq_QMARK_(seq__19566_19923__$1)){
var c__5525__auto___19924 = cljs.core.chunk_first(seq__19566_19923__$1);
var G__19925 = cljs.core.chunk_rest(seq__19566_19923__$1);
var G__19926 = c__5525__auto___19924;
var G__19927 = cljs.core.count(c__5525__auto___19924);
var G__19928 = (0);
seq__19566_19913 = G__19925;
chunk__19567_19914 = G__19926;
count__19568_19915 = G__19927;
i__19569_19916 = G__19928;
continue;
} else {
var f_19929 = cljs.core.first(seq__19566_19923__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19929], 0));


var G__19930 = cljs.core.next(seq__19566_19923__$1);
var G__19931 = null;
var G__19932 = (0);
var G__19933 = (0);
seq__19566_19913 = G__19930;
chunk__19567_19914 = G__19931;
count__19568_19915 = G__19932;
i__19569_19916 = G__19933;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19934 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19934], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19934)))?cljs.core.second(arglists_19934):arglists_19934)], 0));
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
var seq__19590_19935 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19591_19936 = null;
var count__19592_19937 = (0);
var i__19593_19938 = (0);
while(true){
if((i__19593_19938 < count__19592_19937)){
var vec__19624_19939 = chunk__19591_19936.cljs$core$IIndexed$_nth$arity$2(null,i__19593_19938);
var name_19940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19624_19939,(0),null);
var map__19627_19941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19624_19939,(1),null);
var map__19627_19942__$1 = cljs.core.__destructure_map(map__19627_19941);
var doc_19943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19627_19942__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19627_19942__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19940], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19944], 0));

if(cljs.core.truth_(doc_19943)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19943], 0));
} else {
}


var G__19945 = seq__19590_19935;
var G__19946 = chunk__19591_19936;
var G__19947 = count__19592_19937;
var G__19948 = (i__19593_19938 + (1));
seq__19590_19935 = G__19945;
chunk__19591_19936 = G__19946;
count__19592_19937 = G__19947;
i__19593_19938 = G__19948;
continue;
} else {
var temp__5804__auto___19949 = cljs.core.seq(seq__19590_19935);
if(temp__5804__auto___19949){
var seq__19590_19950__$1 = temp__5804__auto___19949;
if(cljs.core.chunked_seq_QMARK_(seq__19590_19950__$1)){
var c__5525__auto___19951 = cljs.core.chunk_first(seq__19590_19950__$1);
var G__19956 = cljs.core.chunk_rest(seq__19590_19950__$1);
var G__19957 = c__5525__auto___19951;
var G__19958 = cljs.core.count(c__5525__auto___19951);
var G__19959 = (0);
seq__19590_19935 = G__19956;
chunk__19591_19936 = G__19957;
count__19592_19937 = G__19958;
i__19593_19938 = G__19959;
continue;
} else {
var vec__19708_19960 = cljs.core.first(seq__19590_19950__$1);
var name_19961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19708_19960,(0),null);
var map__19711_19962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19708_19960,(1),null);
var map__19711_19963__$1 = cljs.core.__destructure_map(map__19711_19962);
var doc_19964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19711_19963__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19711_19963__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19961], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19965], 0));

if(cljs.core.truth_(doc_19964)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19964], 0));
} else {
}


var G__19967 = cljs.core.next(seq__19590_19950__$1);
var G__19968 = null;
var G__19969 = (0);
var G__19970 = (0);
seq__19590_19935 = G__19967;
chunk__19591_19936 = G__19968;
count__19592_19937 = G__19969;
i__19593_19938 = G__19970;
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
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19720 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19721 = null;
var count__19722 = (0);
var i__19723 = (0);
while(true){
if((i__19723 < count__19722)){
var role = chunk__19721.cljs$core$IIndexed$_nth$arity$2(null,i__19723);
var temp__5804__auto___19971__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19971__$1)){
var spec_19972 = temp__5804__auto___19971__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19972)], 0));
} else {
}


var G__19973 = seq__19720;
var G__19974 = chunk__19721;
var G__19975 = count__19722;
var G__19976 = (i__19723 + (1));
seq__19720 = G__19973;
chunk__19721 = G__19974;
count__19722 = G__19975;
i__19723 = G__19976;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19720);
if(temp__5804__auto____$1){
var seq__19720__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19720__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19720__$1);
var G__19977 = cljs.core.chunk_rest(seq__19720__$1);
var G__19978 = c__5525__auto__;
var G__19979 = cljs.core.count(c__5525__auto__);
var G__19980 = (0);
seq__19720 = G__19977;
chunk__19721 = G__19978;
count__19722 = G__19979;
i__19723 = G__19980;
continue;
} else {
var role = cljs.core.first(seq__19720__$1);
var temp__5804__auto___19981__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19981__$2)){
var spec_19982 = temp__5804__auto___19981__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19982)], 0));
} else {
}


var G__19983 = cljs.core.next(seq__19720__$1);
var G__19984 = null;
var G__19985 = (0);
var G__19986 = (0);
seq__19720 = G__19983;
chunk__19721 = G__19984;
count__19722 = G__19985;
i__19723 = G__19986;
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
return cljs.core.Throwable__GT_map(o);
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
var map__19734 = datafied_throwable;
var map__19734__$1 = cljs.core.__destructure_map(map__19734);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19734__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19734__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19734__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19735 = cljs.core.last(via);
var map__19735__$1 = cljs.core.__destructure_map(map__19735);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19735__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19735__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19735__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19736 = data;
var map__19736__$1 = cljs.core.__destructure_map(map__19736);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19736__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19736__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19736__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19737 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19737__$1 = cljs.core.__destructure_map(map__19737);
var top_data = map__19737__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19737__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19757 = phase;
var G__19757__$1 = (((G__19757 instanceof cljs.core.Keyword))?G__19757.fqn:null);
switch (G__19757__$1) {
case "read-source":
var map__19759 = data;
var map__19759__$1 = cljs.core.__destructure_map(map__19759);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19759__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19759__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19760 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19760__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19760,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19760);
var G__19760__$2 = (cljs.core.truth_((function (){var fexpr__19771 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19771.cljs$core$IFn$_invoke$arity$1 ? fexpr__19771.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19771.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19760__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19760__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19760__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19760__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19777 = top_data;
var G__19777__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19777,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19777);
var G__19777__$2 = (cljs.core.truth_((function (){var fexpr__19778 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19778.cljs$core$IFn$_invoke$arity$1 ? fexpr__19778.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19778.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19777__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19777__$1);
var G__19777__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19777__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19777__$2);
var G__19777__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19777__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19777__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19777__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19777__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19783 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19783,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19783,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19783,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19783,(3),null);
var G__19786 = top_data;
var G__19786__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19786,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19786);
var G__19786__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19786__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19786__$1);
var G__19786__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19786__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19786__$2);
var G__19786__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19786__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19786__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19786__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19786__$4;
}

break;
case "execution":
var vec__19801 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19801,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19801,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19801,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19801,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19731_SHARP_){
var or__5002__auto__ = (p1__19731_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19804 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19804.cljs$core$IFn$_invoke$arity$1 ? fexpr__19804.cljs$core$IFn$_invoke$arity$1(p1__19731_SHARP_) : fexpr__19804.call(null,p1__19731_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19806 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19806__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19806,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19806);
var G__19806__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19806__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19806__$1);
var G__19806__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19806__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19806__$2);
var G__19806__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19806__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19806__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19806__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19806__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19757__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19831){
var map__19832 = p__19831;
var map__19832__$1 = cljs.core.__destructure_map(map__19832);
var triage_data = map__19832__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19832__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19832__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19832__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19832__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19832__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19832__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19832__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19832__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19849 = phase;
var G__19849__$1 = (((G__19849 instanceof cljs.core.Keyword))?G__19849.fqn:null);
switch (G__19849__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19859 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19860 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19861 = loc;
var G__19862 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19865_20029 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19866_20030 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19867_20031 = true;
var _STAR_print_fn_STAR__temp_val__19868_20032 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19867_20031);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19868_20032);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19821_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19821_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19866_20030);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19865_20029);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19859,G__19860,G__19861,G__19862) : format.call(null,G__19859,G__19860,G__19861,G__19862));

break;
case "macroexpansion":
var G__19869 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19870 = cause_type;
var G__19871 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19872 = loc;
var G__19873 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19869,G__19870,G__19871,G__19872,G__19873) : format.call(null,G__19869,G__19870,G__19871,G__19872,G__19873));

break;
case "compile-syntax-check":
var G__19877 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19878 = cause_type;
var G__19879 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19880 = loc;
var G__19881 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19877,G__19878,G__19879,G__19880,G__19881) : format.call(null,G__19877,G__19878,G__19879,G__19880,G__19881));

break;
case "compilation":
var G__19882 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19883 = cause_type;
var G__19884 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19885 = loc;
var G__19886 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19882,G__19883,G__19884,G__19885,G__19886) : format.call(null,G__19882,G__19883,G__19884,G__19885,G__19886));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19887 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19888 = symbol;
var G__19889 = loc;
var G__19890 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19891_20037 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19892_20038 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19893_20039 = true;
var _STAR_print_fn_STAR__temp_val__19894_20040 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19893_20039);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19894_20040);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19828_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19828_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19892_20038);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19891_20037);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19887,G__19888,G__19889,G__19890) : format.call(null,G__19887,G__19888,G__19889,G__19890));
} else {
var G__19904 = "Execution error%s at %s(%s).\n%s\n";
var G__19905 = cause_type;
var G__19906 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19907 = loc;
var G__19908 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19904,G__19905,G__19906,G__19907,G__19908) : format.call(null,G__19904,G__19905,G__19906,G__19907,G__19908));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19849__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
