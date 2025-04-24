goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__15270){
var map__15271 = p__15270;
var map__15271__$1 = cljs.core.__destructure_map(map__15271);
var runtime = map__15271__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15271__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_15487 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_15487)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__15288 = runtime;
var G__15289 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_15487);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__15288,G__15289) : shadow.remote.runtime.shared.process.call(null,G__15288,G__15289));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__15300,res){
var map__15301 = p__15300;
var map__15301__$1 = cljs.core.__destructure_map(map__15301);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15301__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15301__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__15305 = res;
var G__15305__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15305,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__15305);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15305__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__15305__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__15309 = arguments.length;
switch (G__15309) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__15311,msg,handlers,timeout_after_ms){
var map__15312 = p__15311;
var map__15312__$1 = cljs.core.__destructure_map(map__15312);
var runtime = map__15312__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15312__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15497 = arguments.length;
var i__5727__auto___15498 = (0);
while(true){
if((i__5727__auto___15498 < len__5726__auto___15497)){
args__5732__auto__.push((arguments[i__5727__auto___15498]));

var G__15500 = (i__5727__auto___15498 + (1));
i__5727__auto___15498 = G__15500;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__15343,ev,args){
var map__15349 = p__15343;
var map__15349__$1 = cljs.core.__destructure_map(map__15349);
var runtime = map__15349__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15349__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__15350 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__15353 = null;
var count__15354 = (0);
var i__15355 = (0);
while(true){
if((i__15355 < count__15354)){
var ext = chunk__15353.cljs$core$IIndexed$_nth$arity$2(null,i__15355);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15518 = seq__15350;
var G__15520 = chunk__15353;
var G__15521 = count__15354;
var G__15522 = (i__15355 + (1));
seq__15350 = G__15518;
chunk__15353 = G__15520;
count__15354 = G__15521;
i__15355 = G__15522;
continue;
} else {
var G__15523 = seq__15350;
var G__15524 = chunk__15353;
var G__15525 = count__15354;
var G__15526 = (i__15355 + (1));
seq__15350 = G__15523;
chunk__15353 = G__15524;
count__15354 = G__15525;
i__15355 = G__15526;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15350);
if(temp__5804__auto__){
var seq__15350__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15350__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15350__$1);
var G__15527 = cljs.core.chunk_rest(seq__15350__$1);
var G__15528 = c__5525__auto__;
var G__15529 = cljs.core.count(c__5525__auto__);
var G__15530 = (0);
seq__15350 = G__15527;
chunk__15353 = G__15528;
count__15354 = G__15529;
i__15355 = G__15530;
continue;
} else {
var ext = cljs.core.first(seq__15350__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15531 = cljs.core.next(seq__15350__$1);
var G__15532 = null;
var G__15533 = (0);
var G__15534 = (0);
seq__15350 = G__15531;
chunk__15353 = G__15532;
count__15354 = G__15533;
i__15355 = G__15534;
continue;
} else {
var G__15535 = cljs.core.next(seq__15350__$1);
var G__15536 = null;
var G__15537 = (0);
var G__15538 = (0);
seq__15350 = G__15535;
chunk__15353 = G__15536;
count__15354 = G__15537;
i__15355 = G__15538;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq15334){
var G__15335 = cljs.core.first(seq15334);
var seq15334__$1 = cljs.core.next(seq15334);
var G__15337 = cljs.core.first(seq15334__$1);
var seq15334__$2 = cljs.core.next(seq15334__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15335,G__15337,seq15334__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__15383,p__15384){
var map__15385 = p__15383;
var map__15385__$1 = cljs.core.__destructure_map(map__15385);
var runtime = map__15385__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15385__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15386 = p__15384;
var map__15386__$1 = cljs.core.__destructure_map(map__15386);
var msg = map__15386__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15386__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__15391 = cljs.core.deref(state_ref);
var map__15391__$1 = cljs.core.__destructure_map(map__15391);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15391__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15391__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__15392,msg){
var map__15393 = p__15392;
var map__15393__$1 = cljs.core.__destructure_map(map__15393);
var runtime = map__15393__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15393__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__15399,key,p__15400){
var map__15401 = p__15399;
var map__15401__$1 = cljs.core.__destructure_map(map__15401);
var state = map__15401__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15401__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__15402 = p__15400;
var map__15402__$1 = cljs.core.__destructure_map(map__15402);
var spec = map__15402__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15402__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15402__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__15407,key,spec){
var map__15408 = p__15407;
var map__15408__$1 = cljs.core.__destructure_map(map__15408);
var runtime = map__15408__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15408__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___15601 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___15601 == null)){
} else {
var on_welcome_15602 = temp__5808__auto___15601;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_15602.cljs$core$IFn$_invoke$arity$0 ? on_welcome_15602.cljs$core$IFn$_invoke$arity$0() : on_welcome_15602.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__15422_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__15422_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__15423_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__15423_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__15424_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__15424_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__15425_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__15425_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__15426_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__15426_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__15447,key){
var map__15448 = p__15447;
var map__15448__$1 = cljs.core.__destructure_map(map__15448);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15448__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__15450,msg){
var map__15452 = p__15450;
var map__15452__$1 = cljs.core.__destructure_map(map__15452);
var runtime = map__15452__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15452__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__15457,p__15458){
var map__15459 = p__15457;
var map__15459__$1 = cljs.core.__destructure_map(map__15459);
var runtime = map__15459__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15459__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15460 = p__15458;
var map__15460__$1 = cljs.core.__destructure_map(map__15460);
var msg = map__15460__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15460__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15460__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__15468 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__15470 = null;
var count__15471 = (0);
var i__15472 = (0);
while(true){
if((i__15472 < count__15471)){
var map__15478 = chunk__15470.cljs$core$IIndexed$_nth$arity$2(null,i__15472);
var map__15478__$1 = cljs.core.__destructure_map(map__15478);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15478__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15630 = seq__15468;
var G__15631 = chunk__15470;
var G__15632 = count__15471;
var G__15633 = (i__15472 + (1));
seq__15468 = G__15630;
chunk__15470 = G__15631;
count__15471 = G__15632;
i__15472 = G__15633;
continue;
} else {
var G__15634 = seq__15468;
var G__15635 = chunk__15470;
var G__15636 = count__15471;
var G__15637 = (i__15472 + (1));
seq__15468 = G__15634;
chunk__15470 = G__15635;
count__15471 = G__15636;
i__15472 = G__15637;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15468);
if(temp__5804__auto__){
var seq__15468__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15468__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15468__$1);
var G__15639 = cljs.core.chunk_rest(seq__15468__$1);
var G__15640 = c__5525__auto__;
var G__15641 = cljs.core.count(c__5525__auto__);
var G__15642 = (0);
seq__15468 = G__15639;
chunk__15470 = G__15640;
count__15471 = G__15641;
i__15472 = G__15642;
continue;
} else {
var map__15481 = cljs.core.first(seq__15468__$1);
var map__15481__$1 = cljs.core.__destructure_map(map__15481);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15481__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15643 = cljs.core.next(seq__15468__$1);
var G__15644 = null;
var G__15645 = (0);
var G__15646 = (0);
seq__15468 = G__15643;
chunk__15470 = G__15644;
count__15471 = G__15645;
i__15472 = G__15646;
continue;
} else {
var G__15647 = cljs.core.next(seq__15468__$1);
var G__15648 = null;
var G__15649 = (0);
var G__15650 = (0);
seq__15468 = G__15647;
chunk__15470 = G__15648;
count__15471 = G__15649;
i__15472 = G__15650;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
