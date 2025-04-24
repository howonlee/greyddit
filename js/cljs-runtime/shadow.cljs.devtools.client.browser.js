goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21518 = arguments.length;
var i__5727__auto___21519 = (0);
while(true){
if((i__5727__auto___21519 < len__5726__auto___21518)){
args__5732__auto__.push((arguments[i__5727__auto___21519]));

var G__21520 = (i__5727__auto___21519 + (1));
i__5727__auto___21519 = G__21520;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21106){
var G__21107 = cljs.core.first(seq21106);
var seq21106__$1 = cljs.core.next(seq21106);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21107,seq21106__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21109 = cljs.core.seq(sources);
var chunk__21110 = null;
var count__21111 = (0);
var i__21112 = (0);
while(true){
if((i__21112 < count__21111)){
var map__21121 = chunk__21110.cljs$core$IIndexed$_nth$arity$2(null,i__21112);
var map__21121__$1 = cljs.core.__destructure_map(map__21121);
var src = map__21121__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21124){var e_21521 = e21124;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21521);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21521.message)].join('')));
}

var G__21522 = seq__21109;
var G__21523 = chunk__21110;
var G__21524 = count__21111;
var G__21525 = (i__21112 + (1));
seq__21109 = G__21522;
chunk__21110 = G__21523;
count__21111 = G__21524;
i__21112 = G__21525;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21109);
if(temp__5804__auto__){
var seq__21109__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21109__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21109__$1);
var G__21526 = cljs.core.chunk_rest(seq__21109__$1);
var G__21527 = c__5525__auto__;
var G__21528 = cljs.core.count(c__5525__auto__);
var G__21529 = (0);
seq__21109 = G__21526;
chunk__21110 = G__21527;
count__21111 = G__21528;
i__21112 = G__21529;
continue;
} else {
var map__21125 = cljs.core.first(seq__21109__$1);
var map__21125__$1 = cljs.core.__destructure_map(map__21125);
var src = map__21125__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21125__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21125__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21125__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21125__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21126){var e_21530 = e21126;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21530);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21530.message)].join('')));
}

var G__21531 = cljs.core.next(seq__21109__$1);
var G__21532 = null;
var G__21533 = (0);
var G__21534 = (0);
seq__21109 = G__21531;
chunk__21110 = G__21532;
count__21111 = G__21533;
i__21112 = G__21534;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21127 = cljs.core.seq(js_requires);
var chunk__21128 = null;
var count__21129 = (0);
var i__21130 = (0);
while(true){
if((i__21130 < count__21129)){
var js_ns = chunk__21128.cljs$core$IIndexed$_nth$arity$2(null,i__21130);
var require_str_21537 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21537);


var G__21538 = seq__21127;
var G__21539 = chunk__21128;
var G__21540 = count__21129;
var G__21541 = (i__21130 + (1));
seq__21127 = G__21538;
chunk__21128 = G__21539;
count__21129 = G__21540;
i__21130 = G__21541;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21127);
if(temp__5804__auto__){
var seq__21127__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21127__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21127__$1);
var G__21542 = cljs.core.chunk_rest(seq__21127__$1);
var G__21543 = c__5525__auto__;
var G__21544 = cljs.core.count(c__5525__auto__);
var G__21545 = (0);
seq__21127 = G__21542;
chunk__21128 = G__21543;
count__21129 = G__21544;
i__21130 = G__21545;
continue;
} else {
var js_ns = cljs.core.first(seq__21127__$1);
var require_str_21546 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21546);


var G__21547 = cljs.core.next(seq__21127__$1);
var G__21548 = null;
var G__21549 = (0);
var G__21550 = (0);
seq__21127 = G__21547;
chunk__21128 = G__21548;
count__21129 = G__21549;
i__21130 = G__21550;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21136){
var map__21137 = p__21136;
var map__21137__$1 = cljs.core.__destructure_map(map__21137);
var msg = map__21137__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21137__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21137__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21138(s__21139){
return (new cljs.core.LazySeq(null,(function (){
var s__21139__$1 = s__21139;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21139__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21144 = cljs.core.first(xs__6360__auto__);
var map__21144__$1 = cljs.core.__destructure_map(map__21144);
var src = map__21144__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21144__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21144__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21139__$1,map__21144,map__21144__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21137,map__21137__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21138_$_iter__21140(s__21141){
return (new cljs.core.LazySeq(null,((function (s__21139__$1,map__21144,map__21144__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21137,map__21137__$1,msg,info,reload_info){
return (function (){
var s__21141__$1 = s__21141;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21141__$1);
if(temp__5804__auto____$1){
var s__21141__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21141__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21141__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21143 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21142 = (0);
while(true){
if((i__21142 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21142);
cljs.core.chunk_append(b__21143,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21551 = (i__21142 + (1));
i__21142 = G__21551;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21143),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21138_$_iter__21140(cljs.core.chunk_rest(s__21141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21143),null);
}
} else {
var warning = cljs.core.first(s__21141__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21138_$_iter__21140(cljs.core.rest(s__21141__$2)));
}
} else {
return null;
}
break;
}
});})(s__21139__$1,map__21144,map__21144__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21137,map__21137__$1,msg,info,reload_info))
,null,null));
});})(s__21139__$1,map__21144,map__21144__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21137,map__21137__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21138(cljs.core.rest(s__21139__$1)));
} else {
var G__21552 = cljs.core.rest(s__21139__$1);
s__21139__$1 = G__21552;
continue;
}
} else {
var G__21553 = cljs.core.rest(s__21139__$1);
s__21139__$1 = G__21553;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21147_21554 = cljs.core.seq(warnings);
var chunk__21148_21555 = null;
var count__21149_21556 = (0);
var i__21150_21557 = (0);
while(true){
if((i__21150_21557 < count__21149_21556)){
var map__21154_21558 = chunk__21148_21555.cljs$core$IIndexed$_nth$arity$2(null,i__21150_21557);
var map__21154_21559__$1 = cljs.core.__destructure_map(map__21154_21558);
var w_21560 = map__21154_21559__$1;
var msg_21561__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21154_21559__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21154_21559__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21154_21559__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21154_21559__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21564)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21562),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21563),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21561__$1)].join(''));


var G__21565 = seq__21147_21554;
var G__21566 = chunk__21148_21555;
var G__21567 = count__21149_21556;
var G__21568 = (i__21150_21557 + (1));
seq__21147_21554 = G__21565;
chunk__21148_21555 = G__21566;
count__21149_21556 = G__21567;
i__21150_21557 = G__21568;
continue;
} else {
var temp__5804__auto___21569 = cljs.core.seq(seq__21147_21554);
if(temp__5804__auto___21569){
var seq__21147_21570__$1 = temp__5804__auto___21569;
if(cljs.core.chunked_seq_QMARK_(seq__21147_21570__$1)){
var c__5525__auto___21571 = cljs.core.chunk_first(seq__21147_21570__$1);
var G__21572 = cljs.core.chunk_rest(seq__21147_21570__$1);
var G__21573 = c__5525__auto___21571;
var G__21574 = cljs.core.count(c__5525__auto___21571);
var G__21575 = (0);
seq__21147_21554 = G__21572;
chunk__21148_21555 = G__21573;
count__21149_21556 = G__21574;
i__21150_21557 = G__21575;
continue;
} else {
var map__21156_21576 = cljs.core.first(seq__21147_21570__$1);
var map__21156_21577__$1 = cljs.core.__destructure_map(map__21156_21576);
var w_21578 = map__21156_21577__$1;
var msg_21579__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21156_21577__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21156_21577__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21156_21577__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21156_21577__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21582)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21580),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21581),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21579__$1)].join(''));


var G__21583 = cljs.core.next(seq__21147_21570__$1);
var G__21584 = null;
var G__21585 = (0);
var G__21586 = (0);
seq__21147_21554 = G__21583;
chunk__21148_21555 = G__21584;
count__21149_21556 = G__21585;
i__21150_21557 = G__21586;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21135_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21135_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21160 = node_uri;
G__21160.setQuery(null);

G__21160.setPath(new$);

return G__21160;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21161){
var map__21162 = p__21161;
var map__21162__$1 = cljs.core.__destructure_map(map__21162);
var msg = map__21162__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21162__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21162__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21165 = cljs.core.seq(updates);
var chunk__21167 = null;
var count__21168 = (0);
var i__21169 = (0);
while(true){
if((i__21169 < count__21168)){
var path = chunk__21167.cljs$core$IIndexed$_nth$arity$2(null,i__21169);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21342_21587 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21346_21588 = null;
var count__21347_21589 = (0);
var i__21348_21590 = (0);
while(true){
if((i__21348_21590 < count__21347_21589)){
var node_21591 = chunk__21346_21588.cljs$core$IIndexed$_nth$arity$2(null,i__21348_21590);
if(cljs.core.not(node_21591.shadow$old)){
var path_match_21592 = shadow.cljs.devtools.client.browser.match_paths(node_21591.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21592)){
var new_link_21593 = (function (){var G__21383 = node_21591.cloneNode(true);
G__21383.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21592),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21383;
})();
(node_21591.shadow$old = true);

(new_link_21593.onload = ((function (seq__21342_21587,chunk__21346_21588,count__21347_21589,i__21348_21590,seq__21165,chunk__21167,count__21168,i__21169,new_link_21593,path_match_21592,node_21591,path,map__21162,map__21162__$1,msg,updates,reload_info){
return (function (e){
var seq__21384_21594 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21386_21595 = null;
var count__21387_21596 = (0);
var i__21388_21597 = (0);
while(true){
if((i__21388_21597 < count__21387_21596)){
var map__21394_21598 = chunk__21386_21595.cljs$core$IIndexed$_nth$arity$2(null,i__21388_21597);
var map__21394_21599__$1 = cljs.core.__destructure_map(map__21394_21598);
var task_21600 = map__21394_21599__$1;
var fn_str_21601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21394_21599__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21394_21599__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21603 = goog.getObjectByName(fn_str_21601,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21602)].join(''));

(fn_obj_21603.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21603.cljs$core$IFn$_invoke$arity$2(path,new_link_21593) : fn_obj_21603.call(null,path,new_link_21593));


var G__21604 = seq__21384_21594;
var G__21605 = chunk__21386_21595;
var G__21606 = count__21387_21596;
var G__21607 = (i__21388_21597 + (1));
seq__21384_21594 = G__21604;
chunk__21386_21595 = G__21605;
count__21387_21596 = G__21606;
i__21388_21597 = G__21607;
continue;
} else {
var temp__5804__auto___21608 = cljs.core.seq(seq__21384_21594);
if(temp__5804__auto___21608){
var seq__21384_21609__$1 = temp__5804__auto___21608;
if(cljs.core.chunked_seq_QMARK_(seq__21384_21609__$1)){
var c__5525__auto___21610 = cljs.core.chunk_first(seq__21384_21609__$1);
var G__21611 = cljs.core.chunk_rest(seq__21384_21609__$1);
var G__21612 = c__5525__auto___21610;
var G__21613 = cljs.core.count(c__5525__auto___21610);
var G__21614 = (0);
seq__21384_21594 = G__21611;
chunk__21386_21595 = G__21612;
count__21387_21596 = G__21613;
i__21388_21597 = G__21614;
continue;
} else {
var map__21397_21615 = cljs.core.first(seq__21384_21609__$1);
var map__21397_21616__$1 = cljs.core.__destructure_map(map__21397_21615);
var task_21617 = map__21397_21616__$1;
var fn_str_21618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21397_21616__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21397_21616__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21620 = goog.getObjectByName(fn_str_21618,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21619)].join(''));

(fn_obj_21620.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21620.cljs$core$IFn$_invoke$arity$2(path,new_link_21593) : fn_obj_21620.call(null,path,new_link_21593));


var G__21621 = cljs.core.next(seq__21384_21609__$1);
var G__21622 = null;
var G__21623 = (0);
var G__21624 = (0);
seq__21384_21594 = G__21621;
chunk__21386_21595 = G__21622;
count__21387_21596 = G__21623;
i__21388_21597 = G__21624;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21591);
});})(seq__21342_21587,chunk__21346_21588,count__21347_21589,i__21348_21590,seq__21165,chunk__21167,count__21168,i__21169,new_link_21593,path_match_21592,node_21591,path,map__21162,map__21162__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21592], 0));

goog.dom.insertSiblingAfter(new_link_21593,node_21591);


var G__21625 = seq__21342_21587;
var G__21626 = chunk__21346_21588;
var G__21627 = count__21347_21589;
var G__21628 = (i__21348_21590 + (1));
seq__21342_21587 = G__21625;
chunk__21346_21588 = G__21626;
count__21347_21589 = G__21627;
i__21348_21590 = G__21628;
continue;
} else {
var G__21629 = seq__21342_21587;
var G__21630 = chunk__21346_21588;
var G__21631 = count__21347_21589;
var G__21632 = (i__21348_21590 + (1));
seq__21342_21587 = G__21629;
chunk__21346_21588 = G__21630;
count__21347_21589 = G__21631;
i__21348_21590 = G__21632;
continue;
}
} else {
var G__21633 = seq__21342_21587;
var G__21634 = chunk__21346_21588;
var G__21635 = count__21347_21589;
var G__21636 = (i__21348_21590 + (1));
seq__21342_21587 = G__21633;
chunk__21346_21588 = G__21634;
count__21347_21589 = G__21635;
i__21348_21590 = G__21636;
continue;
}
} else {
var temp__5804__auto___21637 = cljs.core.seq(seq__21342_21587);
if(temp__5804__auto___21637){
var seq__21342_21638__$1 = temp__5804__auto___21637;
if(cljs.core.chunked_seq_QMARK_(seq__21342_21638__$1)){
var c__5525__auto___21639 = cljs.core.chunk_first(seq__21342_21638__$1);
var G__21640 = cljs.core.chunk_rest(seq__21342_21638__$1);
var G__21641 = c__5525__auto___21639;
var G__21642 = cljs.core.count(c__5525__auto___21639);
var G__21643 = (0);
seq__21342_21587 = G__21640;
chunk__21346_21588 = G__21641;
count__21347_21589 = G__21642;
i__21348_21590 = G__21643;
continue;
} else {
var node_21644 = cljs.core.first(seq__21342_21638__$1);
if(cljs.core.not(node_21644.shadow$old)){
var path_match_21645 = shadow.cljs.devtools.client.browser.match_paths(node_21644.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21645)){
var new_link_21646 = (function (){var G__21402 = node_21644.cloneNode(true);
G__21402.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21645),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21402;
})();
(node_21644.shadow$old = true);

(new_link_21646.onload = ((function (seq__21342_21587,chunk__21346_21588,count__21347_21589,i__21348_21590,seq__21165,chunk__21167,count__21168,i__21169,new_link_21646,path_match_21645,node_21644,seq__21342_21638__$1,temp__5804__auto___21637,path,map__21162,map__21162__$1,msg,updates,reload_info){
return (function (e){
var seq__21403_21647 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21405_21648 = null;
var count__21406_21649 = (0);
var i__21407_21650 = (0);
while(true){
if((i__21407_21650 < count__21406_21649)){
var map__21411_21651 = chunk__21405_21648.cljs$core$IIndexed$_nth$arity$2(null,i__21407_21650);
var map__21411_21652__$1 = cljs.core.__destructure_map(map__21411_21651);
var task_21653 = map__21411_21652__$1;
var fn_str_21654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21411_21652__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21411_21652__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21656 = goog.getObjectByName(fn_str_21654,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21655)].join(''));

(fn_obj_21656.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21656.cljs$core$IFn$_invoke$arity$2(path,new_link_21646) : fn_obj_21656.call(null,path,new_link_21646));


var G__21657 = seq__21403_21647;
var G__21658 = chunk__21405_21648;
var G__21659 = count__21406_21649;
var G__21660 = (i__21407_21650 + (1));
seq__21403_21647 = G__21657;
chunk__21405_21648 = G__21658;
count__21406_21649 = G__21659;
i__21407_21650 = G__21660;
continue;
} else {
var temp__5804__auto___21661__$1 = cljs.core.seq(seq__21403_21647);
if(temp__5804__auto___21661__$1){
var seq__21403_21662__$1 = temp__5804__auto___21661__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21403_21662__$1)){
var c__5525__auto___21663 = cljs.core.chunk_first(seq__21403_21662__$1);
var G__21664 = cljs.core.chunk_rest(seq__21403_21662__$1);
var G__21665 = c__5525__auto___21663;
var G__21666 = cljs.core.count(c__5525__auto___21663);
var G__21667 = (0);
seq__21403_21647 = G__21664;
chunk__21405_21648 = G__21665;
count__21406_21649 = G__21666;
i__21407_21650 = G__21667;
continue;
} else {
var map__21412_21668 = cljs.core.first(seq__21403_21662__$1);
var map__21412_21669__$1 = cljs.core.__destructure_map(map__21412_21668);
var task_21670 = map__21412_21669__$1;
var fn_str_21671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21412_21669__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21412_21669__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21673 = goog.getObjectByName(fn_str_21671,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21672)].join(''));

(fn_obj_21673.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21673.cljs$core$IFn$_invoke$arity$2(path,new_link_21646) : fn_obj_21673.call(null,path,new_link_21646));


var G__21674 = cljs.core.next(seq__21403_21662__$1);
var G__21675 = null;
var G__21676 = (0);
var G__21677 = (0);
seq__21403_21647 = G__21674;
chunk__21405_21648 = G__21675;
count__21406_21649 = G__21676;
i__21407_21650 = G__21677;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21644);
});})(seq__21342_21587,chunk__21346_21588,count__21347_21589,i__21348_21590,seq__21165,chunk__21167,count__21168,i__21169,new_link_21646,path_match_21645,node_21644,seq__21342_21638__$1,temp__5804__auto___21637,path,map__21162,map__21162__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21645], 0));

goog.dom.insertSiblingAfter(new_link_21646,node_21644);


var G__21678 = cljs.core.next(seq__21342_21638__$1);
var G__21679 = null;
var G__21680 = (0);
var G__21681 = (0);
seq__21342_21587 = G__21678;
chunk__21346_21588 = G__21679;
count__21347_21589 = G__21680;
i__21348_21590 = G__21681;
continue;
} else {
var G__21682 = cljs.core.next(seq__21342_21638__$1);
var G__21683 = null;
var G__21684 = (0);
var G__21685 = (0);
seq__21342_21587 = G__21682;
chunk__21346_21588 = G__21683;
count__21347_21589 = G__21684;
i__21348_21590 = G__21685;
continue;
}
} else {
var G__21686 = cljs.core.next(seq__21342_21638__$1);
var G__21687 = null;
var G__21688 = (0);
var G__21689 = (0);
seq__21342_21587 = G__21686;
chunk__21346_21588 = G__21687;
count__21347_21589 = G__21688;
i__21348_21590 = G__21689;
continue;
}
}
} else {
}
}
break;
}


var G__21690 = seq__21165;
var G__21691 = chunk__21167;
var G__21692 = count__21168;
var G__21693 = (i__21169 + (1));
seq__21165 = G__21690;
chunk__21167 = G__21691;
count__21168 = G__21692;
i__21169 = G__21693;
continue;
} else {
var G__21694 = seq__21165;
var G__21695 = chunk__21167;
var G__21696 = count__21168;
var G__21697 = (i__21169 + (1));
seq__21165 = G__21694;
chunk__21167 = G__21695;
count__21168 = G__21696;
i__21169 = G__21697;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21165);
if(temp__5804__auto__){
var seq__21165__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21165__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21165__$1);
var G__21698 = cljs.core.chunk_rest(seq__21165__$1);
var G__21699 = c__5525__auto__;
var G__21700 = cljs.core.count(c__5525__auto__);
var G__21701 = (0);
seq__21165 = G__21698;
chunk__21167 = G__21699;
count__21168 = G__21700;
i__21169 = G__21701;
continue;
} else {
var path = cljs.core.first(seq__21165__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21414_21702 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21418_21703 = null;
var count__21419_21704 = (0);
var i__21420_21705 = (0);
while(true){
if((i__21420_21705 < count__21419_21704)){
var node_21706 = chunk__21418_21703.cljs$core$IIndexed$_nth$arity$2(null,i__21420_21705);
if(cljs.core.not(node_21706.shadow$old)){
var path_match_21707 = shadow.cljs.devtools.client.browser.match_paths(node_21706.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21707)){
var new_link_21708 = (function (){var G__21446 = node_21706.cloneNode(true);
G__21446.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21707),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21446;
})();
(node_21706.shadow$old = true);

(new_link_21708.onload = ((function (seq__21414_21702,chunk__21418_21703,count__21419_21704,i__21420_21705,seq__21165,chunk__21167,count__21168,i__21169,new_link_21708,path_match_21707,node_21706,path,seq__21165__$1,temp__5804__auto__,map__21162,map__21162__$1,msg,updates,reload_info){
return (function (e){
var seq__21447_21709 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21449_21710 = null;
var count__21450_21711 = (0);
var i__21451_21712 = (0);
while(true){
if((i__21451_21712 < count__21450_21711)){
var map__21455_21713 = chunk__21449_21710.cljs$core$IIndexed$_nth$arity$2(null,i__21451_21712);
var map__21455_21714__$1 = cljs.core.__destructure_map(map__21455_21713);
var task_21715 = map__21455_21714__$1;
var fn_str_21716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21455_21714__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21455_21714__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21718 = goog.getObjectByName(fn_str_21716,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21717)].join(''));

(fn_obj_21718.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21718.cljs$core$IFn$_invoke$arity$2(path,new_link_21708) : fn_obj_21718.call(null,path,new_link_21708));


var G__21719 = seq__21447_21709;
var G__21720 = chunk__21449_21710;
var G__21721 = count__21450_21711;
var G__21722 = (i__21451_21712 + (1));
seq__21447_21709 = G__21719;
chunk__21449_21710 = G__21720;
count__21450_21711 = G__21721;
i__21451_21712 = G__21722;
continue;
} else {
var temp__5804__auto___21723__$1 = cljs.core.seq(seq__21447_21709);
if(temp__5804__auto___21723__$1){
var seq__21447_21724__$1 = temp__5804__auto___21723__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21447_21724__$1)){
var c__5525__auto___21725 = cljs.core.chunk_first(seq__21447_21724__$1);
var G__21726 = cljs.core.chunk_rest(seq__21447_21724__$1);
var G__21727 = c__5525__auto___21725;
var G__21728 = cljs.core.count(c__5525__auto___21725);
var G__21729 = (0);
seq__21447_21709 = G__21726;
chunk__21449_21710 = G__21727;
count__21450_21711 = G__21728;
i__21451_21712 = G__21729;
continue;
} else {
var map__21458_21730 = cljs.core.first(seq__21447_21724__$1);
var map__21458_21731__$1 = cljs.core.__destructure_map(map__21458_21730);
var task_21732 = map__21458_21731__$1;
var fn_str_21733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21458_21731__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21458_21731__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21735 = goog.getObjectByName(fn_str_21733,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21734)].join(''));

(fn_obj_21735.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21735.cljs$core$IFn$_invoke$arity$2(path,new_link_21708) : fn_obj_21735.call(null,path,new_link_21708));


var G__21736 = cljs.core.next(seq__21447_21724__$1);
var G__21737 = null;
var G__21738 = (0);
var G__21739 = (0);
seq__21447_21709 = G__21736;
chunk__21449_21710 = G__21737;
count__21450_21711 = G__21738;
i__21451_21712 = G__21739;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21706);
});})(seq__21414_21702,chunk__21418_21703,count__21419_21704,i__21420_21705,seq__21165,chunk__21167,count__21168,i__21169,new_link_21708,path_match_21707,node_21706,path,seq__21165__$1,temp__5804__auto__,map__21162,map__21162__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21707], 0));

goog.dom.insertSiblingAfter(new_link_21708,node_21706);


var G__21740 = seq__21414_21702;
var G__21741 = chunk__21418_21703;
var G__21742 = count__21419_21704;
var G__21743 = (i__21420_21705 + (1));
seq__21414_21702 = G__21740;
chunk__21418_21703 = G__21741;
count__21419_21704 = G__21742;
i__21420_21705 = G__21743;
continue;
} else {
var G__21744 = seq__21414_21702;
var G__21745 = chunk__21418_21703;
var G__21746 = count__21419_21704;
var G__21747 = (i__21420_21705 + (1));
seq__21414_21702 = G__21744;
chunk__21418_21703 = G__21745;
count__21419_21704 = G__21746;
i__21420_21705 = G__21747;
continue;
}
} else {
var G__21748 = seq__21414_21702;
var G__21749 = chunk__21418_21703;
var G__21750 = count__21419_21704;
var G__21751 = (i__21420_21705 + (1));
seq__21414_21702 = G__21748;
chunk__21418_21703 = G__21749;
count__21419_21704 = G__21750;
i__21420_21705 = G__21751;
continue;
}
} else {
var temp__5804__auto___21752__$1 = cljs.core.seq(seq__21414_21702);
if(temp__5804__auto___21752__$1){
var seq__21414_21753__$1 = temp__5804__auto___21752__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21414_21753__$1)){
var c__5525__auto___21754 = cljs.core.chunk_first(seq__21414_21753__$1);
var G__21755 = cljs.core.chunk_rest(seq__21414_21753__$1);
var G__21756 = c__5525__auto___21754;
var G__21757 = cljs.core.count(c__5525__auto___21754);
var G__21758 = (0);
seq__21414_21702 = G__21755;
chunk__21418_21703 = G__21756;
count__21419_21704 = G__21757;
i__21420_21705 = G__21758;
continue;
} else {
var node_21759 = cljs.core.first(seq__21414_21753__$1);
if(cljs.core.not(node_21759.shadow$old)){
var path_match_21760 = shadow.cljs.devtools.client.browser.match_paths(node_21759.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21760)){
var new_link_21761 = (function (){var G__21463 = node_21759.cloneNode(true);
G__21463.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21760),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21463;
})();
(node_21759.shadow$old = true);

(new_link_21761.onload = ((function (seq__21414_21702,chunk__21418_21703,count__21419_21704,i__21420_21705,seq__21165,chunk__21167,count__21168,i__21169,new_link_21761,path_match_21760,node_21759,seq__21414_21753__$1,temp__5804__auto___21752__$1,path,seq__21165__$1,temp__5804__auto__,map__21162,map__21162__$1,msg,updates,reload_info){
return (function (e){
var seq__21464_21762 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21466_21763 = null;
var count__21467_21764 = (0);
var i__21468_21765 = (0);
while(true){
if((i__21468_21765 < count__21467_21764)){
var map__21476_21766 = chunk__21466_21763.cljs$core$IIndexed$_nth$arity$2(null,i__21468_21765);
var map__21476_21767__$1 = cljs.core.__destructure_map(map__21476_21766);
var task_21768 = map__21476_21767__$1;
var fn_str_21769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21476_21767__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21476_21767__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21771 = goog.getObjectByName(fn_str_21769,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21770)].join(''));

(fn_obj_21771.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21771.cljs$core$IFn$_invoke$arity$2(path,new_link_21761) : fn_obj_21771.call(null,path,new_link_21761));


var G__21772 = seq__21464_21762;
var G__21773 = chunk__21466_21763;
var G__21774 = count__21467_21764;
var G__21775 = (i__21468_21765 + (1));
seq__21464_21762 = G__21772;
chunk__21466_21763 = G__21773;
count__21467_21764 = G__21774;
i__21468_21765 = G__21775;
continue;
} else {
var temp__5804__auto___21776__$2 = cljs.core.seq(seq__21464_21762);
if(temp__5804__auto___21776__$2){
var seq__21464_21777__$1 = temp__5804__auto___21776__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21464_21777__$1)){
var c__5525__auto___21778 = cljs.core.chunk_first(seq__21464_21777__$1);
var G__21779 = cljs.core.chunk_rest(seq__21464_21777__$1);
var G__21780 = c__5525__auto___21778;
var G__21781 = cljs.core.count(c__5525__auto___21778);
var G__21782 = (0);
seq__21464_21762 = G__21779;
chunk__21466_21763 = G__21780;
count__21467_21764 = G__21781;
i__21468_21765 = G__21782;
continue;
} else {
var map__21477_21783 = cljs.core.first(seq__21464_21777__$1);
var map__21477_21784__$1 = cljs.core.__destructure_map(map__21477_21783);
var task_21785 = map__21477_21784__$1;
var fn_str_21786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21477_21784__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21477_21784__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21788 = goog.getObjectByName(fn_str_21786,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21787)].join(''));

(fn_obj_21788.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21788.cljs$core$IFn$_invoke$arity$2(path,new_link_21761) : fn_obj_21788.call(null,path,new_link_21761));


var G__21789 = cljs.core.next(seq__21464_21777__$1);
var G__21790 = null;
var G__21791 = (0);
var G__21792 = (0);
seq__21464_21762 = G__21789;
chunk__21466_21763 = G__21790;
count__21467_21764 = G__21791;
i__21468_21765 = G__21792;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21759);
});})(seq__21414_21702,chunk__21418_21703,count__21419_21704,i__21420_21705,seq__21165,chunk__21167,count__21168,i__21169,new_link_21761,path_match_21760,node_21759,seq__21414_21753__$1,temp__5804__auto___21752__$1,path,seq__21165__$1,temp__5804__auto__,map__21162,map__21162__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21760], 0));

goog.dom.insertSiblingAfter(new_link_21761,node_21759);


var G__21793 = cljs.core.next(seq__21414_21753__$1);
var G__21794 = null;
var G__21795 = (0);
var G__21796 = (0);
seq__21414_21702 = G__21793;
chunk__21418_21703 = G__21794;
count__21419_21704 = G__21795;
i__21420_21705 = G__21796;
continue;
} else {
var G__21797 = cljs.core.next(seq__21414_21753__$1);
var G__21798 = null;
var G__21799 = (0);
var G__21800 = (0);
seq__21414_21702 = G__21797;
chunk__21418_21703 = G__21798;
count__21419_21704 = G__21799;
i__21420_21705 = G__21800;
continue;
}
} else {
var G__21801 = cljs.core.next(seq__21414_21753__$1);
var G__21802 = null;
var G__21803 = (0);
var G__21804 = (0);
seq__21414_21702 = G__21801;
chunk__21418_21703 = G__21802;
count__21419_21704 = G__21803;
i__21420_21705 = G__21804;
continue;
}
}
} else {
}
}
break;
}


var G__21805 = cljs.core.next(seq__21165__$1);
var G__21806 = null;
var G__21807 = (0);
var G__21808 = (0);
seq__21165 = G__21805;
chunk__21167 = G__21806;
count__21168 = G__21807;
i__21169 = G__21808;
continue;
} else {
var G__21809 = cljs.core.next(seq__21165__$1);
var G__21810 = null;
var G__21811 = (0);
var G__21812 = (0);
seq__21165 = G__21809;
chunk__21167 = G__21810;
count__21168 = G__21811;
i__21169 = G__21812;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21486 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21486) : success.call(null,G__21486));
}catch (e21485){var e = e21485;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21487,success,fail){
var map__21488 = p__21487;
var map__21488__$1 = cljs.core.__destructure_map(map__21488);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21488__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21490 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21490) : success.call(null,G__21490));
}catch (e21489){var e = e21489;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21491,done,error){
var map__21493 = p__21491;
var map__21493__$1 = cljs.core.__destructure_map(map__21493);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21493__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21494,done,error){
var map__21495 = p__21494;
var map__21495__$1 = cljs.core.__destructure_map(map__21495);
var msg = map__21495__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21496){
var map__21497 = p__21496;
var map__21497__$1 = cljs.core.__destructure_map(map__21497);
var src = map__21497__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21497__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21499 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21499) : done.call(null,G__21499));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21502){
var map__21503 = p__21502;
var map__21503__$1 = cljs.core.__destructure_map(map__21503);
var msg__$1 = map__21503__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21503__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21507){var ex = e21507;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21508){
var map__21509 = p__21508;
var map__21509__$1 = cljs.core.__destructure_map(map__21509);
var env = map__21509__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21509__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21510){
var map__21511 = p__21510;
var map__21511__$1 = cljs.core.__destructure_map(map__21511);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21511__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21511__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21512){
var map__21513 = p__21512;
var map__21513__$1 = cljs.core.__destructure_map(map__21513);
var svc = map__21513__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21513__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
