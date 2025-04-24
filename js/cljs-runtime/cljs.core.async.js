goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15203 = (function (f,blockable,meta15204){
this.f = f;
this.blockable = blockable;
this.meta15204 = meta15204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15205,meta15204__$1){
var self__ = this;
var _15205__$1 = this;
return (new cljs.core.async.t_cljs$core$async15203(self__.f,self__.blockable,meta15204__$1));
}));

(cljs.core.async.t_cljs$core$async15203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15205){
var self__ = this;
var _15205__$1 = this;
return self__.meta15204;
}));

(cljs.core.async.t_cljs$core$async15203.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15203.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15204","meta15204",1708957288,null)], null);
}));

(cljs.core.async.t_cljs$core$async15203.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15203");

(cljs.core.async.t_cljs$core$async15203.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15203");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15203.
 */
cljs.core.async.__GT_t_cljs$core$async15203 = (function cljs$core$async$__GT_t_cljs$core$async15203(f,blockable,meta15204){
return (new cljs.core.async.t_cljs$core$async15203(f,blockable,meta15204));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15200 = arguments.length;
switch (G__15200) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async15203(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15227 = arguments.length;
switch (G__15227) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15240 = arguments.length;
switch (G__15240) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15259 = arguments.length;
switch (G__15259) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18071 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18071) : fn1.call(null,val_18071));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18071) : fn1.call(null,val_18071));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15264 = arguments.length;
switch (G__15264) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___18081 = n;
var x_18084 = (0);
while(true){
if((x_18084 < n__5593__auto___18081)){
(a[x_18084] = x_18084);

var G__18085 = (x_18084 + (1));
x_18084 = G__18085;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15294 = (function (flag,meta15295){
this.flag = flag;
this.meta15295 = meta15295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15296,meta15295__$1){
var self__ = this;
var _15296__$1 = this;
return (new cljs.core.async.t_cljs$core$async15294(self__.flag,meta15295__$1));
}));

(cljs.core.async.t_cljs$core$async15294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15296){
var self__ = this;
var _15296__$1 = this;
return self__.meta15295;
}));

(cljs.core.async.t_cljs$core$async15294.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15294.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15294.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15294.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15295","meta15295",993807514,null)], null);
}));

(cljs.core.async.t_cljs$core$async15294.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15294");

(cljs.core.async.t_cljs$core$async15294.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15294");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15294.
 */
cljs.core.async.__GT_t_cljs$core$async15294 = (function cljs$core$async$__GT_t_cljs$core$async15294(flag,meta15295){
return (new cljs.core.async.t_cljs$core$async15294(flag,meta15295));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15294(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15302 = (function (flag,cb,meta15303){
this.flag = flag;
this.cb = cb;
this.meta15303 = meta15303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15304,meta15303__$1){
var self__ = this;
var _15304__$1 = this;
return (new cljs.core.async.t_cljs$core$async15302(self__.flag,self__.cb,meta15303__$1));
}));

(cljs.core.async.t_cljs$core$async15302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15304){
var self__ = this;
var _15304__$1 = this;
return self__.meta15303;
}));

(cljs.core.async.t_cljs$core$async15302.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15302.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15302.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15302.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15303","meta15303",2058685482,null)], null);
}));

(cljs.core.async.t_cljs$core$async15302.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15302");

(cljs.core.async.t_cljs$core$async15302.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15302");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15302.
 */
cljs.core.async.__GT_t_cljs$core$async15302 = (function cljs$core$async$__GT_t_cljs$core$async15302(flag,cb,meta15303){
return (new cljs.core.async.t_cljs$core$async15302(flag,cb,meta15303));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15302(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15306_SHARP_){
var G__15313 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15306_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15313) : fret.call(null,G__15313));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15308_SHARP_){
var G__15326 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15308_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15326) : fret.call(null,G__15326));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18089 = (i + (1));
i = G__18089;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18090 = arguments.length;
var i__5727__auto___18091 = (0);
while(true){
if((i__5727__auto___18091 < len__5726__auto___18090)){
args__5732__auto__.push((arguments[i__5727__auto___18091]));

var G__18092 = (i__5727__auto___18091 + (1));
i__5727__auto___18091 = G__18092;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15344){
var map__15347 = p__15344;
var map__15347__$1 = cljs.core.__destructure_map(map__15347);
var opts = map__15347__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15333){
var G__15338 = cljs.core.first(seq15333);
var seq15333__$1 = cljs.core.next(seq15333);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15338,seq15333__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15382 = arguments.length;
switch (G__15382) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15123__auto___18094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_15446){
var state_val_15456 = (state_15446[(1)]);
if((state_val_15456 === (7))){
var inst_15432 = (state_15446[(2)]);
var state_15446__$1 = state_15446;
var statearr_15505_18095 = state_15446__$1;
(statearr_15505_18095[(2)] = inst_15432);

(statearr_15505_18095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (1))){
var state_15446__$1 = state_15446;
var statearr_15508_18096 = state_15446__$1;
(statearr_15508_18096[(2)] = null);

(statearr_15508_18096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (4))){
var inst_15404 = (state_15446[(7)]);
var inst_15404__$1 = (state_15446[(2)]);
var inst_15405 = (inst_15404__$1 == null);
var state_15446__$1 = (function (){var statearr_15512 = state_15446;
(statearr_15512[(7)] = inst_15404__$1);

return statearr_15512;
})();
if(cljs.core.truth_(inst_15405)){
var statearr_15513_18097 = state_15446__$1;
(statearr_15513_18097[(1)] = (5));

} else {
var statearr_15514_18098 = state_15446__$1;
(statearr_15514_18098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (13))){
var state_15446__$1 = state_15446;
var statearr_15516_18099 = state_15446__$1;
(statearr_15516_18099[(2)] = null);

(statearr_15516_18099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (6))){
var inst_15404 = (state_15446[(7)]);
var state_15446__$1 = state_15446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15446__$1,(11),to,inst_15404);
} else {
if((state_val_15456 === (3))){
var inst_15436 = (state_15446[(2)]);
var state_15446__$1 = state_15446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15446__$1,inst_15436);
} else {
if((state_val_15456 === (12))){
var state_15446__$1 = state_15446;
var statearr_15562_18100 = state_15446__$1;
(statearr_15562_18100[(2)] = null);

(statearr_15562_18100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (2))){
var state_15446__$1 = state_15446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15446__$1,(4),from);
} else {
if((state_val_15456 === (11))){
var inst_15420 = (state_15446[(2)]);
var state_15446__$1 = state_15446;
if(cljs.core.truth_(inst_15420)){
var statearr_15603_18101 = state_15446__$1;
(statearr_15603_18101[(1)] = (12));

} else {
var statearr_15605_18102 = state_15446__$1;
(statearr_15605_18102[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (9))){
var state_15446__$1 = state_15446;
var statearr_15610_18103 = state_15446__$1;
(statearr_15610_18103[(2)] = null);

(statearr_15610_18103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (5))){
var state_15446__$1 = state_15446;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15611_18104 = state_15446__$1;
(statearr_15611_18104[(1)] = (8));

} else {
var statearr_15612_18105 = state_15446__$1;
(statearr_15612_18105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (14))){
var inst_15430 = (state_15446[(2)]);
var state_15446__$1 = state_15446;
var statearr_15618_18109 = state_15446__$1;
(statearr_15618_18109[(2)] = inst_15430);

(statearr_15618_18109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (10))){
var inst_15417 = (state_15446[(2)]);
var state_15446__$1 = state_15446;
var statearr_15627_18110 = state_15446__$1;
(statearr_15627_18110[(2)] = inst_15417);

(statearr_15627_18110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (8))){
var inst_15410 = cljs.core.async.close_BANG_(to);
var state_15446__$1 = state_15446;
var statearr_15628_18111 = state_15446__$1;
(statearr_15628_18111[(2)] = inst_15410);

(statearr_15628_18111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14780__auto__ = null;
var cljs$core$async$state_machine__14780__auto____0 = (function (){
var statearr_15659 = [null,null,null,null,null,null,null,null];
(statearr_15659[(0)] = cljs$core$async$state_machine__14780__auto__);

(statearr_15659[(1)] = (1));

return statearr_15659;
});
var cljs$core$async$state_machine__14780__auto____1 = (function (state_15446){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_15446);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e15667){var ex__14783__auto__ = e15667;
var statearr_15668_18112 = state_15446;
(statearr_15668_18112[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_15446[(4)]))){
var statearr_15669_18119 = state_15446;
(statearr_15669_18119[(1)] = cljs.core.first((state_15446[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18120 = state_15446;
state_15446 = G__18120;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$state_machine__14780__auto__ = function(state_15446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14780__auto____1.call(this,state_15446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14780__auto____0;
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14780__auto____1;
return cljs$core$async$state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_15674 = f__15124__auto__();
(statearr_15674[(6)] = c__15123__auto___18094);

return statearr_15674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15688){
var vec__15692 = p__15688;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15692,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15692,(1),null);
var job = vec__15692;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15123__auto___18121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_15701){
var state_val_15702 = (state_15701[(1)]);
if((state_val_15702 === (1))){
var state_15701__$1 = state_15701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15701__$1,(2),res,v);
} else {
if((state_val_15702 === (2))){
var inst_15697 = (state_15701[(2)]);
var inst_15698 = cljs.core.async.close_BANG_(res);
var state_15701__$1 = (function (){var statearr_15703 = state_15701;
(statearr_15703[(7)] = inst_15697);

return statearr_15703;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15701__$1,inst_15698);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____0 = (function (){
var statearr_15705 = [null,null,null,null,null,null,null,null];
(statearr_15705[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__);

(statearr_15705[(1)] = (1));

return statearr_15705;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____1 = (function (state_15701){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_15701);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e15706){var ex__14783__auto__ = e15706;
var statearr_15707_18122 = state_15701;
(statearr_15707_18122[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_15701[(4)]))){
var statearr_15708_18123 = state_15701;
(statearr_15708_18123[(1)] = cljs.core.first((state_15701[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18124 = state_15701;
state_15701 = G__18124;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__ = function(state_15701){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____1.call(this,state_15701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_15709 = f__15124__auto__();
(statearr_15709[(6)] = c__15123__auto___18121);

return statearr_15709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15713){
var vec__15714 = p__15713;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15714,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15714,(1),null);
var job = vec__15714;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18125 = n;
var __18126 = (0);
while(true){
if((__18126 < n__5593__auto___18125)){
var G__15717_18127 = type;
var G__15717_18128__$1 = (((G__15717_18127 instanceof cljs.core.Keyword))?G__15717_18127.fqn:null);
switch (G__15717_18128__$1) {
case "compute":
var c__15123__auto___18130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18126,c__15123__auto___18130,G__15717_18127,G__15717_18128__$1,n__5593__auto___18125,jobs,results,process__$1,async){
return (function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = ((function (__18126,c__15123__auto___18130,G__15717_18127,G__15717_18128__$1,n__5593__auto___18125,jobs,results,process__$1,async){
return (function (state_15730){
var state_val_15731 = (state_15730[(1)]);
if((state_val_15731 === (1))){
var state_15730__$1 = state_15730;
var statearr_15733_18131 = state_15730__$1;
(statearr_15733_18131[(2)] = null);

(statearr_15733_18131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15731 === (2))){
var state_15730__$1 = state_15730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15730__$1,(4),jobs);
} else {
if((state_val_15731 === (3))){
var inst_15728 = (state_15730[(2)]);
var state_15730__$1 = state_15730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15730__$1,inst_15728);
} else {
if((state_val_15731 === (4))){
var inst_15720 = (state_15730[(2)]);
var inst_15721 = process__$1(inst_15720);
var state_15730__$1 = state_15730;
if(cljs.core.truth_(inst_15721)){
var statearr_15736_18132 = state_15730__$1;
(statearr_15736_18132[(1)] = (5));

} else {
var statearr_15737_18133 = state_15730__$1;
(statearr_15737_18133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15731 === (5))){
var state_15730__$1 = state_15730;
var statearr_15740_18134 = state_15730__$1;
(statearr_15740_18134[(2)] = null);

(statearr_15740_18134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15731 === (6))){
var state_15730__$1 = state_15730;
var statearr_15741_18135 = state_15730__$1;
(statearr_15741_18135[(2)] = null);

(statearr_15741_18135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15731 === (7))){
var inst_15726 = (state_15730[(2)]);
var state_15730__$1 = state_15730;
var statearr_15742_18136 = state_15730__$1;
(statearr_15742_18136[(2)] = inst_15726);

(statearr_15742_18136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18126,c__15123__auto___18130,G__15717_18127,G__15717_18128__$1,n__5593__auto___18125,jobs,results,process__$1,async))
;
return ((function (__18126,switch__14779__auto__,c__15123__auto___18130,G__15717_18127,G__15717_18128__$1,n__5593__auto___18125,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____0 = (function (){
var statearr_15745 = [null,null,null,null,null,null,null];
(statearr_15745[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__);

(statearr_15745[(1)] = (1));

return statearr_15745;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____1 = (function (state_15730){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_15730);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e15747){var ex__14783__auto__ = e15747;
var statearr_15748_18137 = state_15730;
(statearr_15748_18137[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_15730[(4)]))){
var statearr_15749_18138 = state_15730;
(statearr_15749_18138[(1)] = cljs.core.first((state_15730[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18139 = state_15730;
state_15730 = G__18139;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__ = function(state_15730){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____1.call(this,state_15730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__;
})()
;})(__18126,switch__14779__auto__,c__15123__auto___18130,G__15717_18127,G__15717_18128__$1,n__5593__auto___18125,jobs,results,process__$1,async))
})();
var state__15125__auto__ = (function (){var statearr_15751 = f__15124__auto__();
(statearr_15751[(6)] = c__15123__auto___18130);

return statearr_15751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
});})(__18126,c__15123__auto___18130,G__15717_18127,G__15717_18128__$1,n__5593__auto___18125,jobs,results,process__$1,async))
);


break;
case "async":
var c__15123__auto___18140 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18126,c__15123__auto___18140,G__15717_18127,G__15717_18128__$1,n__5593__auto___18125,jobs,results,process__$1,async){
return (function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = ((function (__18126,c__15123__auto___18140,G__15717_18127,G__15717_18128__$1,n__5593__auto___18125,jobs,results,process__$1,async){
return (function (state_15764){
var state_val_15765 = (state_15764[(1)]);
if((state_val_15765 === (1))){
var state_15764__$1 = state_15764;
var statearr_15766_18141 = state_15764__$1;
(statearr_15766_18141[(2)] = null);

(statearr_15766_18141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (2))){
var state_15764__$1 = state_15764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15764__$1,(4),jobs);
} else {
if((state_val_15765 === (3))){
var inst_15762 = (state_15764[(2)]);
var state_15764__$1 = state_15764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15764__$1,inst_15762);
} else {
if((state_val_15765 === (4))){
var inst_15754 = (state_15764[(2)]);
var inst_15755 = async(inst_15754);
var state_15764__$1 = state_15764;
if(cljs.core.truth_(inst_15755)){
var statearr_15767_18142 = state_15764__$1;
(statearr_15767_18142[(1)] = (5));

} else {
var statearr_15768_18143 = state_15764__$1;
(statearr_15768_18143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (5))){
var state_15764__$1 = state_15764;
var statearr_15769_18144 = state_15764__$1;
(statearr_15769_18144[(2)] = null);

(statearr_15769_18144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (6))){
var state_15764__$1 = state_15764;
var statearr_15770_18145 = state_15764__$1;
(statearr_15770_18145[(2)] = null);

(statearr_15770_18145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (7))){
var inst_15760 = (state_15764[(2)]);
var state_15764__$1 = state_15764;
var statearr_15771_18146 = state_15764__$1;
(statearr_15771_18146[(2)] = inst_15760);

(statearr_15771_18146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18126,c__15123__auto___18140,G__15717_18127,G__15717_18128__$1,n__5593__auto___18125,jobs,results,process__$1,async))
;
return ((function (__18126,switch__14779__auto__,c__15123__auto___18140,G__15717_18127,G__15717_18128__$1,n__5593__auto___18125,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____0 = (function (){
var statearr_15772 = [null,null,null,null,null,null,null];
(statearr_15772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__);

(statearr_15772[(1)] = (1));

return statearr_15772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____1 = (function (state_15764){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_15764);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e15774){var ex__14783__auto__ = e15774;
var statearr_15775_18150 = state_15764;
(statearr_15775_18150[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_15764[(4)]))){
var statearr_15776_18151 = state_15764;
(statearr_15776_18151[(1)] = cljs.core.first((state_15764[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18152 = state_15764;
state_15764 = G__18152;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__ = function(state_15764){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____1.call(this,state_15764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__;
})()
;})(__18126,switch__14779__auto__,c__15123__auto___18140,G__15717_18127,G__15717_18128__$1,n__5593__auto___18125,jobs,results,process__$1,async))
})();
var state__15125__auto__ = (function (){var statearr_15779 = f__15124__auto__();
(statearr_15779[(6)] = c__15123__auto___18140);

return statearr_15779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
});})(__18126,c__15123__auto___18140,G__15717_18127,G__15717_18128__$1,n__5593__auto___18125,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15717_18128__$1)].join('')));

}

var G__18153 = (__18126 + (1));
__18126 = G__18153;
continue;
} else {
}
break;
}

var c__15123__auto___18154 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_15803){
var state_val_15804 = (state_15803[(1)]);
if((state_val_15804 === (7))){
var inst_15799 = (state_15803[(2)]);
var state_15803__$1 = state_15803;
var statearr_15805_18155 = state_15803__$1;
(statearr_15805_18155[(2)] = inst_15799);

(statearr_15805_18155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (1))){
var state_15803__$1 = state_15803;
var statearr_15806_18156 = state_15803__$1;
(statearr_15806_18156[(2)] = null);

(statearr_15806_18156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (4))){
var inst_15782 = (state_15803[(7)]);
var inst_15782__$1 = (state_15803[(2)]);
var inst_15783 = (inst_15782__$1 == null);
var state_15803__$1 = (function (){var statearr_15821 = state_15803;
(statearr_15821[(7)] = inst_15782__$1);

return statearr_15821;
})();
if(cljs.core.truth_(inst_15783)){
var statearr_15835_18157 = state_15803__$1;
(statearr_15835_18157[(1)] = (5));

} else {
var statearr_15836_18158 = state_15803__$1;
(statearr_15836_18158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (6))){
var inst_15782 = (state_15803[(7)]);
var inst_15787 = (state_15803[(8)]);
var inst_15787__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15790 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15791 = [inst_15782,inst_15787__$1];
var inst_15792 = (new cljs.core.PersistentVector(null,2,(5),inst_15790,inst_15791,null));
var state_15803__$1 = (function (){var statearr_15837 = state_15803;
(statearr_15837[(8)] = inst_15787__$1);

return statearr_15837;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15803__$1,(8),jobs,inst_15792);
} else {
if((state_val_15804 === (3))){
var inst_15801 = (state_15803[(2)]);
var state_15803__$1 = state_15803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15803__$1,inst_15801);
} else {
if((state_val_15804 === (2))){
var state_15803__$1 = state_15803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15803__$1,(4),from);
} else {
if((state_val_15804 === (9))){
var inst_15796 = (state_15803[(2)]);
var state_15803__$1 = (function (){var statearr_15842 = state_15803;
(statearr_15842[(9)] = inst_15796);

return statearr_15842;
})();
var statearr_15843_18159 = state_15803__$1;
(statearr_15843_18159[(2)] = null);

(statearr_15843_18159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (5))){
var inst_15785 = cljs.core.async.close_BANG_(jobs);
var state_15803__$1 = state_15803;
var statearr_15845_18160 = state_15803__$1;
(statearr_15845_18160[(2)] = inst_15785);

(statearr_15845_18160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (8))){
var inst_15787 = (state_15803[(8)]);
var inst_15794 = (state_15803[(2)]);
var state_15803__$1 = (function (){var statearr_15846 = state_15803;
(statearr_15846[(10)] = inst_15794);

return statearr_15846;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15803__$1,(9),results,inst_15787);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____0 = (function (){
var statearr_15848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__);

(statearr_15848[(1)] = (1));

return statearr_15848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____1 = (function (state_15803){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_15803);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e15849){var ex__14783__auto__ = e15849;
var statearr_15850_18161 = state_15803;
(statearr_15850_18161[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_15803[(4)]))){
var statearr_15851_18162 = state_15803;
(statearr_15851_18162[(1)] = cljs.core.first((state_15803[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18163 = state_15803;
state_15803 = G__18163;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__ = function(state_15803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____1.call(this,state_15803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_15855 = f__15124__auto__();
(statearr_15855[(6)] = c__15123__auto___18154);

return statearr_15855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));


var c__15123__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_15929){
var state_val_15931 = (state_15929[(1)]);
if((state_val_15931 === (7))){
var inst_15919 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
var statearr_15954_18164 = state_15929__$1;
(statearr_15954_18164[(2)] = inst_15919);

(statearr_15954_18164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (20))){
var state_15929__$1 = state_15929;
var statearr_15964_18165 = state_15929__$1;
(statearr_15964_18165[(2)] = null);

(statearr_15964_18165[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (1))){
var state_15929__$1 = state_15929;
var statearr_15965_18166 = state_15929__$1;
(statearr_15965_18166[(2)] = null);

(statearr_15965_18166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (4))){
var inst_15879 = (state_15929[(7)]);
var inst_15879__$1 = (state_15929[(2)]);
var inst_15884 = (inst_15879__$1 == null);
var state_15929__$1 = (function (){var statearr_15969 = state_15929;
(statearr_15969[(7)] = inst_15879__$1);

return statearr_15969;
})();
if(cljs.core.truth_(inst_15884)){
var statearr_15970_18167 = state_15929__$1;
(statearr_15970_18167[(1)] = (5));

} else {
var statearr_15971_18168 = state_15929__$1;
(statearr_15971_18168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (15))){
var inst_15896 = (state_15929[(8)]);
var state_15929__$1 = state_15929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15929__$1,(18),to,inst_15896);
} else {
if((state_val_15931 === (21))){
var inst_15913 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
var statearr_15972_18169 = state_15929__$1;
(statearr_15972_18169[(2)] = inst_15913);

(statearr_15972_18169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (13))){
var inst_15916 = (state_15929[(2)]);
var state_15929__$1 = (function (){var statearr_15973 = state_15929;
(statearr_15973[(9)] = inst_15916);

return statearr_15973;
})();
var statearr_15974_18170 = state_15929__$1;
(statearr_15974_18170[(2)] = null);

(statearr_15974_18170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (6))){
var inst_15879 = (state_15929[(7)]);
var state_15929__$1 = state_15929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15929__$1,(11),inst_15879);
} else {
if((state_val_15931 === (17))){
var inst_15904 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
if(cljs.core.truth_(inst_15904)){
var statearr_15976_18171 = state_15929__$1;
(statearr_15976_18171[(1)] = (19));

} else {
var statearr_15978_18172 = state_15929__$1;
(statearr_15978_18172[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (3))){
var inst_15921 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15929__$1,inst_15921);
} else {
if((state_val_15931 === (12))){
var inst_15893 = (state_15929[(10)]);
var state_15929__$1 = state_15929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15929__$1,(14),inst_15893);
} else {
if((state_val_15931 === (2))){
var state_15929__$1 = state_15929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15929__$1,(4),results);
} else {
if((state_val_15931 === (19))){
var state_15929__$1 = state_15929;
var statearr_15979_18173 = state_15929__$1;
(statearr_15979_18173[(2)] = null);

(statearr_15979_18173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (11))){
var inst_15893 = (state_15929[(2)]);
var state_15929__$1 = (function (){var statearr_15992 = state_15929;
(statearr_15992[(10)] = inst_15893);

return statearr_15992;
})();
var statearr_15993_18174 = state_15929__$1;
(statearr_15993_18174[(2)] = null);

(statearr_15993_18174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (9))){
var state_15929__$1 = state_15929;
var statearr_15994_18175 = state_15929__$1;
(statearr_15994_18175[(2)] = null);

(statearr_15994_18175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (5))){
var state_15929__$1 = state_15929;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15995_18176 = state_15929__$1;
(statearr_15995_18176[(1)] = (8));

} else {
var statearr_15996_18177 = state_15929__$1;
(statearr_15996_18177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (14))){
var inst_15896 = (state_15929[(8)]);
var inst_15898 = (state_15929[(11)]);
var inst_15896__$1 = (state_15929[(2)]);
var inst_15897 = (inst_15896__$1 == null);
var inst_15898__$1 = cljs.core.not(inst_15897);
var state_15929__$1 = (function (){var statearr_15997 = state_15929;
(statearr_15997[(8)] = inst_15896__$1);

(statearr_15997[(11)] = inst_15898__$1);

return statearr_15997;
})();
if(inst_15898__$1){
var statearr_15999_18178 = state_15929__$1;
(statearr_15999_18178[(1)] = (15));

} else {
var statearr_16000_18179 = state_15929__$1;
(statearr_16000_18179[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (16))){
var inst_15898 = (state_15929[(11)]);
var state_15929__$1 = state_15929;
var statearr_16001_18180 = state_15929__$1;
(statearr_16001_18180[(2)] = inst_15898);

(statearr_16001_18180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (10))){
var inst_15890 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
var statearr_16004_18181 = state_15929__$1;
(statearr_16004_18181[(2)] = inst_15890);

(statearr_16004_18181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (18))){
var inst_15901 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
var statearr_16005_18182 = state_15929__$1;
(statearr_16005_18182[(2)] = inst_15901);

(statearr_16005_18182[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15931 === (8))){
var inst_15887 = cljs.core.async.close_BANG_(to);
var state_15929__$1 = state_15929;
var statearr_16006_18186 = state_15929__$1;
(statearr_16006_18186[(2)] = inst_15887);

(statearr_16006_18186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____0 = (function (){
var statearr_16014 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16014[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__);

(statearr_16014[(1)] = (1));

return statearr_16014;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____1 = (function (state_15929){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_15929);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e16015){var ex__14783__auto__ = e16015;
var statearr_16016_18187 = state_15929;
(statearr_16016_18187[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_15929[(4)]))){
var statearr_16019_18188 = state_15929;
(statearr_16019_18188[(1)] = cljs.core.first((state_15929[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18189 = state_15929;
state_15929 = G__18189;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__ = function(state_15929){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____1.call(this,state_15929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14780__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_16020 = f__15124__auto__();
(statearr_16020[(6)] = c__15123__auto__);

return statearr_16020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));

return c__15123__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16028 = arguments.length;
switch (G__16028) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16040 = arguments.length;
switch (G__16040) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16052 = arguments.length;
switch (G__16052) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15123__auto___18204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_16083){
var state_val_16084 = (state_16083[(1)]);
if((state_val_16084 === (7))){
var inst_16079 = (state_16083[(2)]);
var state_16083__$1 = state_16083;
var statearr_16085_18205 = state_16083__$1;
(statearr_16085_18205[(2)] = inst_16079);

(statearr_16085_18205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16084 === (1))){
var state_16083__$1 = state_16083;
var statearr_16087_18206 = state_16083__$1;
(statearr_16087_18206[(2)] = null);

(statearr_16087_18206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16084 === (4))){
var inst_16059 = (state_16083[(7)]);
var inst_16059__$1 = (state_16083[(2)]);
var inst_16060 = (inst_16059__$1 == null);
var state_16083__$1 = (function (){var statearr_16088 = state_16083;
(statearr_16088[(7)] = inst_16059__$1);

return statearr_16088;
})();
if(cljs.core.truth_(inst_16060)){
var statearr_16089_18210 = state_16083__$1;
(statearr_16089_18210[(1)] = (5));

} else {
var statearr_16091_18211 = state_16083__$1;
(statearr_16091_18211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16084 === (13))){
var state_16083__$1 = state_16083;
var statearr_16092_18212 = state_16083__$1;
(statearr_16092_18212[(2)] = null);

(statearr_16092_18212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16084 === (6))){
var inst_16059 = (state_16083[(7)]);
var inst_16065 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16059) : p.call(null,inst_16059));
var state_16083__$1 = state_16083;
if(cljs.core.truth_(inst_16065)){
var statearr_16093_18213 = state_16083__$1;
(statearr_16093_18213[(1)] = (9));

} else {
var statearr_16094_18214 = state_16083__$1;
(statearr_16094_18214[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16084 === (3))){
var inst_16081 = (state_16083[(2)]);
var state_16083__$1 = state_16083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16083__$1,inst_16081);
} else {
if((state_val_16084 === (12))){
var state_16083__$1 = state_16083;
var statearr_16095_18215 = state_16083__$1;
(statearr_16095_18215[(2)] = null);

(statearr_16095_18215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16084 === (2))){
var state_16083__$1 = state_16083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16083__$1,(4),ch);
} else {
if((state_val_16084 === (11))){
var inst_16059 = (state_16083[(7)]);
var inst_16069 = (state_16083[(2)]);
var state_16083__$1 = state_16083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16083__$1,(8),inst_16069,inst_16059);
} else {
if((state_val_16084 === (9))){
var state_16083__$1 = state_16083;
var statearr_16102_18216 = state_16083__$1;
(statearr_16102_18216[(2)] = tc);

(statearr_16102_18216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16084 === (5))){
var inst_16062 = cljs.core.async.close_BANG_(tc);
var inst_16063 = cljs.core.async.close_BANG_(fc);
var state_16083__$1 = (function (){var statearr_16103 = state_16083;
(statearr_16103[(8)] = inst_16062);

return statearr_16103;
})();
var statearr_16104_18217 = state_16083__$1;
(statearr_16104_18217[(2)] = inst_16063);

(statearr_16104_18217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16084 === (14))){
var inst_16077 = (state_16083[(2)]);
var state_16083__$1 = state_16083;
var statearr_16107_18218 = state_16083__$1;
(statearr_16107_18218[(2)] = inst_16077);

(statearr_16107_18218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16084 === (10))){
var state_16083__$1 = state_16083;
var statearr_16108_18219 = state_16083__$1;
(statearr_16108_18219[(2)] = fc);

(statearr_16108_18219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16084 === (8))){
var inst_16071 = (state_16083[(2)]);
var state_16083__$1 = state_16083;
if(cljs.core.truth_(inst_16071)){
var statearr_16109_18220 = state_16083__$1;
(statearr_16109_18220[(1)] = (12));

} else {
var statearr_16110_18221 = state_16083__$1;
(statearr_16110_18221[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14780__auto__ = null;
var cljs$core$async$state_machine__14780__auto____0 = (function (){
var statearr_16111 = [null,null,null,null,null,null,null,null,null];
(statearr_16111[(0)] = cljs$core$async$state_machine__14780__auto__);

(statearr_16111[(1)] = (1));

return statearr_16111;
});
var cljs$core$async$state_machine__14780__auto____1 = (function (state_16083){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_16083);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e16112){var ex__14783__auto__ = e16112;
var statearr_16113_18224 = state_16083;
(statearr_16113_18224[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_16083[(4)]))){
var statearr_16114_18225 = state_16083;
(statearr_16114_18225[(1)] = cljs.core.first((state_16083[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18226 = state_16083;
state_16083 = G__18226;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$state_machine__14780__auto__ = function(state_16083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14780__auto____1.call(this,state_16083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14780__auto____0;
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14780__auto____1;
return cljs$core$async$state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_16132 = f__15124__auto__();
(statearr_16132[(6)] = c__15123__auto___18204);

return statearr_16132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15123__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_16179){
var state_val_16180 = (state_16179[(1)]);
if((state_val_16180 === (7))){
var inst_16174 = (state_16179[(2)]);
var state_16179__$1 = state_16179;
var statearr_16182_18227 = state_16179__$1;
(statearr_16182_18227[(2)] = inst_16174);

(statearr_16182_18227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16180 === (1))){
var inst_16154 = init;
var inst_16156 = inst_16154;
var state_16179__$1 = (function (){var statearr_16184 = state_16179;
(statearr_16184[(7)] = inst_16156);

return statearr_16184;
})();
var statearr_16186_18228 = state_16179__$1;
(statearr_16186_18228[(2)] = null);

(statearr_16186_18228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16180 === (4))){
var inst_16161 = (state_16179[(8)]);
var inst_16161__$1 = (state_16179[(2)]);
var inst_16162 = (inst_16161__$1 == null);
var state_16179__$1 = (function (){var statearr_16187 = state_16179;
(statearr_16187[(8)] = inst_16161__$1);

return statearr_16187;
})();
if(cljs.core.truth_(inst_16162)){
var statearr_16188_18229 = state_16179__$1;
(statearr_16188_18229[(1)] = (5));

} else {
var statearr_16189_18230 = state_16179__$1;
(statearr_16189_18230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16180 === (6))){
var inst_16156 = (state_16179[(7)]);
var inst_16161 = (state_16179[(8)]);
var inst_16165 = (state_16179[(9)]);
var inst_16165__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16156,inst_16161) : f.call(null,inst_16156,inst_16161));
var inst_16166 = cljs.core.reduced_QMARK_(inst_16165__$1);
var state_16179__$1 = (function (){var statearr_16191 = state_16179;
(statearr_16191[(9)] = inst_16165__$1);

return statearr_16191;
})();
if(inst_16166){
var statearr_16192_18231 = state_16179__$1;
(statearr_16192_18231[(1)] = (8));

} else {
var statearr_16196_18232 = state_16179__$1;
(statearr_16196_18232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16180 === (3))){
var inst_16176 = (state_16179[(2)]);
var state_16179__$1 = state_16179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16179__$1,inst_16176);
} else {
if((state_val_16180 === (2))){
var state_16179__$1 = state_16179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16179__$1,(4),ch);
} else {
if((state_val_16180 === (9))){
var inst_16165 = (state_16179[(9)]);
var inst_16156 = inst_16165;
var state_16179__$1 = (function (){var statearr_16200 = state_16179;
(statearr_16200[(7)] = inst_16156);

return statearr_16200;
})();
var statearr_16201_18234 = state_16179__$1;
(statearr_16201_18234[(2)] = null);

(statearr_16201_18234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16180 === (5))){
var inst_16156 = (state_16179[(7)]);
var state_16179__$1 = state_16179;
var statearr_16202_18236 = state_16179__$1;
(statearr_16202_18236[(2)] = inst_16156);

(statearr_16202_18236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16180 === (10))){
var inst_16172 = (state_16179[(2)]);
var state_16179__$1 = state_16179;
var statearr_16203_18237 = state_16179__$1;
(statearr_16203_18237[(2)] = inst_16172);

(statearr_16203_18237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16180 === (8))){
var inst_16165 = (state_16179[(9)]);
var inst_16168 = cljs.core.deref(inst_16165);
var state_16179__$1 = state_16179;
var statearr_16204_18238 = state_16179__$1;
(statearr_16204_18238[(2)] = inst_16168);

(statearr_16204_18238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14780__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14780__auto____0 = (function (){
var statearr_16208 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16208[(0)] = cljs$core$async$reduce_$_state_machine__14780__auto__);

(statearr_16208[(1)] = (1));

return statearr_16208;
});
var cljs$core$async$reduce_$_state_machine__14780__auto____1 = (function (state_16179){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_16179);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e16212){var ex__14783__auto__ = e16212;
var statearr_16213_18241 = state_16179;
(statearr_16213_18241[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_16179[(4)]))){
var statearr_16214_18242 = state_16179;
(statearr_16214_18242[(1)] = cljs.core.first((state_16179[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18243 = state_16179;
state_16179 = G__18243;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14780__auto__ = function(state_16179){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14780__auto____1.call(this,state_16179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14780__auto____0;
cljs$core$async$reduce_$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14780__auto____1;
return cljs$core$async$reduce_$_state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_16222 = f__15124__auto__();
(statearr_16222[(6)] = c__15123__auto__);

return statearr_16222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));

return c__15123__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15123__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_16228){
var state_val_16229 = (state_16228[(1)]);
if((state_val_16229 === (1))){
var inst_16223 = cljs.core.async.reduce(f__$1,init,ch);
var state_16228__$1 = state_16228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16228__$1,(2),inst_16223);
} else {
if((state_val_16229 === (2))){
var inst_16225 = (state_16228[(2)]);
var inst_16226 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16225) : f__$1.call(null,inst_16225));
var state_16228__$1 = state_16228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16228__$1,inst_16226);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14780__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14780__auto____0 = (function (){
var statearr_16247 = [null,null,null,null,null,null,null];
(statearr_16247[(0)] = cljs$core$async$transduce_$_state_machine__14780__auto__);

(statearr_16247[(1)] = (1));

return statearr_16247;
});
var cljs$core$async$transduce_$_state_machine__14780__auto____1 = (function (state_16228){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_16228);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e16248){var ex__14783__auto__ = e16248;
var statearr_16249_18247 = state_16228;
(statearr_16249_18247[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_16228[(4)]))){
var statearr_16250_18249 = state_16228;
(statearr_16250_18249[(1)] = cljs.core.first((state_16228[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18251 = state_16228;
state_16228 = G__18251;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14780__auto__ = function(state_16228){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14780__auto____1.call(this,state_16228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14780__auto____0;
cljs$core$async$transduce_$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14780__auto____1;
return cljs$core$async$transduce_$_state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_16251 = f__15124__auto__();
(statearr_16251[(6)] = c__15123__auto__);

return statearr_16251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));

return c__15123__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16257 = arguments.length;
switch (G__16257) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15123__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_16294){
var state_val_16295 = (state_16294[(1)]);
if((state_val_16295 === (7))){
var inst_16276 = (state_16294[(2)]);
var state_16294__$1 = state_16294;
var statearr_16300_18254 = state_16294__$1;
(statearr_16300_18254[(2)] = inst_16276);

(statearr_16300_18254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16295 === (1))){
var inst_16270 = cljs.core.seq(coll);
var inst_16271 = inst_16270;
var state_16294__$1 = (function (){var statearr_16304 = state_16294;
(statearr_16304[(7)] = inst_16271);

return statearr_16304;
})();
var statearr_16305_18256 = state_16294__$1;
(statearr_16305_18256[(2)] = null);

(statearr_16305_18256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16295 === (4))){
var inst_16271 = (state_16294[(7)]);
var inst_16274 = cljs.core.first(inst_16271);
var state_16294__$1 = state_16294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16294__$1,(7),ch,inst_16274);
} else {
if((state_val_16295 === (13))){
var inst_16288 = (state_16294[(2)]);
var state_16294__$1 = state_16294;
var statearr_16310_18258 = state_16294__$1;
(statearr_16310_18258[(2)] = inst_16288);

(statearr_16310_18258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16295 === (6))){
var inst_16279 = (state_16294[(2)]);
var state_16294__$1 = state_16294;
if(cljs.core.truth_(inst_16279)){
var statearr_16311_18259 = state_16294__$1;
(statearr_16311_18259[(1)] = (8));

} else {
var statearr_16312_18260 = state_16294__$1;
(statearr_16312_18260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16295 === (3))){
var inst_16292 = (state_16294[(2)]);
var state_16294__$1 = state_16294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16294__$1,inst_16292);
} else {
if((state_val_16295 === (12))){
var state_16294__$1 = state_16294;
var statearr_16313_18261 = state_16294__$1;
(statearr_16313_18261[(2)] = null);

(statearr_16313_18261[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16295 === (2))){
var inst_16271 = (state_16294[(7)]);
var state_16294__$1 = state_16294;
if(cljs.core.truth_(inst_16271)){
var statearr_16314_18262 = state_16294__$1;
(statearr_16314_18262[(1)] = (4));

} else {
var statearr_16315_18263 = state_16294__$1;
(statearr_16315_18263[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16295 === (11))){
var inst_16285 = cljs.core.async.close_BANG_(ch);
var state_16294__$1 = state_16294;
var statearr_16317_18264 = state_16294__$1;
(statearr_16317_18264[(2)] = inst_16285);

(statearr_16317_18264[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16295 === (9))){
var state_16294__$1 = state_16294;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16318_18265 = state_16294__$1;
(statearr_16318_18265[(1)] = (11));

} else {
var statearr_16319_18266 = state_16294__$1;
(statearr_16319_18266[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16295 === (5))){
var inst_16271 = (state_16294[(7)]);
var state_16294__$1 = state_16294;
var statearr_16321_18267 = state_16294__$1;
(statearr_16321_18267[(2)] = inst_16271);

(statearr_16321_18267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16295 === (10))){
var inst_16290 = (state_16294[(2)]);
var state_16294__$1 = state_16294;
var statearr_16322_18268 = state_16294__$1;
(statearr_16322_18268[(2)] = inst_16290);

(statearr_16322_18268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16295 === (8))){
var inst_16271 = (state_16294[(7)]);
var inst_16281 = cljs.core.next(inst_16271);
var inst_16271__$1 = inst_16281;
var state_16294__$1 = (function (){var statearr_16323 = state_16294;
(statearr_16323[(7)] = inst_16271__$1);

return statearr_16323;
})();
var statearr_16324_18270 = state_16294__$1;
(statearr_16324_18270[(2)] = null);

(statearr_16324_18270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14780__auto__ = null;
var cljs$core$async$state_machine__14780__auto____0 = (function (){
var statearr_16326 = [null,null,null,null,null,null,null,null];
(statearr_16326[(0)] = cljs$core$async$state_machine__14780__auto__);

(statearr_16326[(1)] = (1));

return statearr_16326;
});
var cljs$core$async$state_machine__14780__auto____1 = (function (state_16294){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_16294);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e16327){var ex__14783__auto__ = e16327;
var statearr_16328_18272 = state_16294;
(statearr_16328_18272[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_16294[(4)]))){
var statearr_16329_18273 = state_16294;
(statearr_16329_18273[(1)] = cljs.core.first((state_16294[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18274 = state_16294;
state_16294 = G__18274;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$state_machine__14780__auto__ = function(state_16294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14780__auto____1.call(this,state_16294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14780__auto____0;
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14780__auto____1;
return cljs$core$async$state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_16331 = f__15124__auto__();
(statearr_16331[(6)] = c__15123__auto__);

return statearr_16331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));

return c__15123__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16334 = arguments.length;
switch (G__16334) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18283 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18283(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18284 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18284(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18285 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18285(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18286 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18286(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16346 = (function (ch,cs,meta16347){
this.ch = ch;
this.cs = cs;
this.meta16347 = meta16347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16348,meta16347__$1){
var self__ = this;
var _16348__$1 = this;
return (new cljs.core.async.t_cljs$core$async16346(self__.ch,self__.cs,meta16347__$1));
}));

(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16348){
var self__ = this;
var _16348__$1 = this;
return self__.meta16347;
}));

(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16346.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16347","meta16347",-328658132,null)], null);
}));

(cljs.core.async.t_cljs$core$async16346.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16346");

(cljs.core.async.t_cljs$core$async16346.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16346");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16346.
 */
cljs.core.async.__GT_t_cljs$core$async16346 = (function cljs$core$async$__GT_t_cljs$core$async16346(ch,cs,meta16347){
return (new cljs.core.async.t_cljs$core$async16346(ch,cs,meta16347));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async16346(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15123__auto___18287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_16498){
var state_val_16499 = (state_16498[(1)]);
if((state_val_16499 === (7))){
var inst_16494 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16501_18289 = state_16498__$1;
(statearr_16501_18289[(2)] = inst_16494);

(statearr_16501_18289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (20))){
var inst_16393 = (state_16498[(7)]);
var inst_16405 = cljs.core.first(inst_16393);
var inst_16406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16405,(0),null);
var inst_16407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16405,(1),null);
var state_16498__$1 = (function (){var statearr_16503 = state_16498;
(statearr_16503[(8)] = inst_16406);

return statearr_16503;
})();
if(cljs.core.truth_(inst_16407)){
var statearr_16504_18290 = state_16498__$1;
(statearr_16504_18290[(1)] = (22));

} else {
var statearr_16505_18291 = state_16498__$1;
(statearr_16505_18291[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (27))){
var inst_16443 = (state_16498[(9)]);
var inst_16441 = (state_16498[(10)]);
var inst_16362 = (state_16498[(11)]);
var inst_16448 = (state_16498[(12)]);
var inst_16448__$1 = cljs.core._nth(inst_16441,inst_16443);
var inst_16449 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16448__$1,inst_16362,done);
var state_16498__$1 = (function (){var statearr_16509 = state_16498;
(statearr_16509[(12)] = inst_16448__$1);

return statearr_16509;
})();
if(cljs.core.truth_(inst_16449)){
var statearr_16510_18292 = state_16498__$1;
(statearr_16510_18292[(1)] = (30));

} else {
var statearr_16511_18293 = state_16498__$1;
(statearr_16511_18293[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (1))){
var state_16498__$1 = state_16498;
var statearr_16512_18294 = state_16498__$1;
(statearr_16512_18294[(2)] = null);

(statearr_16512_18294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (24))){
var inst_16393 = (state_16498[(7)]);
var inst_16412 = (state_16498[(2)]);
var inst_16413 = cljs.core.next(inst_16393);
var inst_16371 = inst_16413;
var inst_16372 = null;
var inst_16373 = (0);
var inst_16374 = (0);
var state_16498__$1 = (function (){var statearr_16513 = state_16498;
(statearr_16513[(13)] = inst_16412);

(statearr_16513[(14)] = inst_16372);

(statearr_16513[(15)] = inst_16374);

(statearr_16513[(16)] = inst_16371);

(statearr_16513[(17)] = inst_16373);

return statearr_16513;
})();
var statearr_16515_18296 = state_16498__$1;
(statearr_16515_18296[(2)] = null);

(statearr_16515_18296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (39))){
var state_16498__$1 = state_16498;
var statearr_16519_18297 = state_16498__$1;
(statearr_16519_18297[(2)] = null);

(statearr_16519_18297[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (4))){
var inst_16362 = (state_16498[(11)]);
var inst_16362__$1 = (state_16498[(2)]);
var inst_16363 = (inst_16362__$1 == null);
var state_16498__$1 = (function (){var statearr_16520 = state_16498;
(statearr_16520[(11)] = inst_16362__$1);

return statearr_16520;
})();
if(cljs.core.truth_(inst_16363)){
var statearr_16521_18298 = state_16498__$1;
(statearr_16521_18298[(1)] = (5));

} else {
var statearr_16522_18299 = state_16498__$1;
(statearr_16522_18299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (15))){
var inst_16372 = (state_16498[(14)]);
var inst_16374 = (state_16498[(15)]);
var inst_16371 = (state_16498[(16)]);
var inst_16373 = (state_16498[(17)]);
var inst_16389 = (state_16498[(2)]);
var inst_16390 = (inst_16374 + (1));
var tmp16516 = inst_16372;
var tmp16517 = inst_16371;
var tmp16518 = inst_16373;
var inst_16371__$1 = tmp16517;
var inst_16372__$1 = tmp16516;
var inst_16373__$1 = tmp16518;
var inst_16374__$1 = inst_16390;
var state_16498__$1 = (function (){var statearr_16523 = state_16498;
(statearr_16523[(18)] = inst_16389);

(statearr_16523[(14)] = inst_16372__$1);

(statearr_16523[(15)] = inst_16374__$1);

(statearr_16523[(16)] = inst_16371__$1);

(statearr_16523[(17)] = inst_16373__$1);

return statearr_16523;
})();
var statearr_16525_18300 = state_16498__$1;
(statearr_16525_18300[(2)] = null);

(statearr_16525_18300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (21))){
var inst_16416 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16529_18301 = state_16498__$1;
(statearr_16529_18301[(2)] = inst_16416);

(statearr_16529_18301[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (31))){
var inst_16448 = (state_16498[(12)]);
var inst_16452 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16448);
var state_16498__$1 = state_16498;
var statearr_16530_18302 = state_16498__$1;
(statearr_16530_18302[(2)] = inst_16452);

(statearr_16530_18302[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (32))){
var inst_16442 = (state_16498[(19)]);
var inst_16443 = (state_16498[(9)]);
var inst_16441 = (state_16498[(10)]);
var inst_16440 = (state_16498[(20)]);
var inst_16454 = (state_16498[(2)]);
var inst_16455 = (inst_16443 + (1));
var tmp16526 = inst_16442;
var tmp16527 = inst_16441;
var tmp16528 = inst_16440;
var inst_16440__$1 = tmp16528;
var inst_16441__$1 = tmp16527;
var inst_16442__$1 = tmp16526;
var inst_16443__$1 = inst_16455;
var state_16498__$1 = (function (){var statearr_16531 = state_16498;
(statearr_16531[(19)] = inst_16442__$1);

(statearr_16531[(9)] = inst_16443__$1);

(statearr_16531[(10)] = inst_16441__$1);

(statearr_16531[(21)] = inst_16454);

(statearr_16531[(20)] = inst_16440__$1);

return statearr_16531;
})();
var statearr_16532_18303 = state_16498__$1;
(statearr_16532_18303[(2)] = null);

(statearr_16532_18303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (40))){
var inst_16467 = (state_16498[(22)]);
var inst_16471 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16467);
var state_16498__$1 = state_16498;
var statearr_16533_18304 = state_16498__$1;
(statearr_16533_18304[(2)] = inst_16471);

(statearr_16533_18304[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (33))){
var inst_16458 = (state_16498[(23)]);
var inst_16460 = cljs.core.chunked_seq_QMARK_(inst_16458);
var state_16498__$1 = state_16498;
if(inst_16460){
var statearr_16534_18305 = state_16498__$1;
(statearr_16534_18305[(1)] = (36));

} else {
var statearr_16535_18306 = state_16498__$1;
(statearr_16535_18306[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (13))){
var inst_16383 = (state_16498[(24)]);
var inst_16386 = cljs.core.async.close_BANG_(inst_16383);
var state_16498__$1 = state_16498;
var statearr_16536_18307 = state_16498__$1;
(statearr_16536_18307[(2)] = inst_16386);

(statearr_16536_18307[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (22))){
var inst_16406 = (state_16498[(8)]);
var inst_16409 = cljs.core.async.close_BANG_(inst_16406);
var state_16498__$1 = state_16498;
var statearr_16542_18311 = state_16498__$1;
(statearr_16542_18311[(2)] = inst_16409);

(statearr_16542_18311[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (36))){
var inst_16458 = (state_16498[(23)]);
var inst_16462 = cljs.core.chunk_first(inst_16458);
var inst_16463 = cljs.core.chunk_rest(inst_16458);
var inst_16464 = cljs.core.count(inst_16462);
var inst_16440 = inst_16463;
var inst_16441 = inst_16462;
var inst_16442 = inst_16464;
var inst_16443 = (0);
var state_16498__$1 = (function (){var statearr_16545 = state_16498;
(statearr_16545[(19)] = inst_16442);

(statearr_16545[(9)] = inst_16443);

(statearr_16545[(10)] = inst_16441);

(statearr_16545[(20)] = inst_16440);

return statearr_16545;
})();
var statearr_16546_18312 = state_16498__$1;
(statearr_16546_18312[(2)] = null);

(statearr_16546_18312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (41))){
var inst_16458 = (state_16498[(23)]);
var inst_16473 = (state_16498[(2)]);
var inst_16474 = cljs.core.next(inst_16458);
var inst_16440 = inst_16474;
var inst_16441 = null;
var inst_16442 = (0);
var inst_16443 = (0);
var state_16498__$1 = (function (){var statearr_16547 = state_16498;
(statearr_16547[(19)] = inst_16442);

(statearr_16547[(9)] = inst_16443);

(statearr_16547[(10)] = inst_16441);

(statearr_16547[(20)] = inst_16440);

(statearr_16547[(25)] = inst_16473);

return statearr_16547;
})();
var statearr_16548_18313 = state_16498__$1;
(statearr_16548_18313[(2)] = null);

(statearr_16548_18313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (43))){
var state_16498__$1 = state_16498;
var statearr_16549_18314 = state_16498__$1;
(statearr_16549_18314[(2)] = null);

(statearr_16549_18314[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (29))){
var inst_16482 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16553_18315 = state_16498__$1;
(statearr_16553_18315[(2)] = inst_16482);

(statearr_16553_18315[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (44))){
var inst_16491 = (state_16498[(2)]);
var state_16498__$1 = (function (){var statearr_16557 = state_16498;
(statearr_16557[(26)] = inst_16491);

return statearr_16557;
})();
var statearr_16558_18319 = state_16498__$1;
(statearr_16558_18319[(2)] = null);

(statearr_16558_18319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (6))){
var inst_16432 = (state_16498[(27)]);
var inst_16431 = cljs.core.deref(cs);
var inst_16432__$1 = cljs.core.keys(inst_16431);
var inst_16433 = cljs.core.count(inst_16432__$1);
var inst_16434 = cljs.core.reset_BANG_(dctr,inst_16433);
var inst_16439 = cljs.core.seq(inst_16432__$1);
var inst_16440 = inst_16439;
var inst_16441 = null;
var inst_16442 = (0);
var inst_16443 = (0);
var state_16498__$1 = (function (){var statearr_16559 = state_16498;
(statearr_16559[(19)] = inst_16442);

(statearr_16559[(9)] = inst_16443);

(statearr_16559[(10)] = inst_16441);

(statearr_16559[(20)] = inst_16440);

(statearr_16559[(27)] = inst_16432__$1);

(statearr_16559[(28)] = inst_16434);

return statearr_16559;
})();
var statearr_16560_18324 = state_16498__$1;
(statearr_16560_18324[(2)] = null);

(statearr_16560_18324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (28))){
var inst_16458 = (state_16498[(23)]);
var inst_16440 = (state_16498[(20)]);
var inst_16458__$1 = cljs.core.seq(inst_16440);
var state_16498__$1 = (function (){var statearr_16561 = state_16498;
(statearr_16561[(23)] = inst_16458__$1);

return statearr_16561;
})();
if(inst_16458__$1){
var statearr_16562_18328 = state_16498__$1;
(statearr_16562_18328[(1)] = (33));

} else {
var statearr_16563_18329 = state_16498__$1;
(statearr_16563_18329[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (25))){
var inst_16442 = (state_16498[(19)]);
var inst_16443 = (state_16498[(9)]);
var inst_16445 = (inst_16443 < inst_16442);
var inst_16446 = inst_16445;
var state_16498__$1 = state_16498;
if(cljs.core.truth_(inst_16446)){
var statearr_16564_18330 = state_16498__$1;
(statearr_16564_18330[(1)] = (27));

} else {
var statearr_16565_18334 = state_16498__$1;
(statearr_16565_18334[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (34))){
var state_16498__$1 = state_16498;
var statearr_16567_18338 = state_16498__$1;
(statearr_16567_18338[(2)] = null);

(statearr_16567_18338[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (17))){
var state_16498__$1 = state_16498;
var statearr_16568_18342 = state_16498__$1;
(statearr_16568_18342[(2)] = null);

(statearr_16568_18342[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (3))){
var inst_16496 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16498__$1,inst_16496);
} else {
if((state_val_16499 === (12))){
var inst_16421 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16569_18347 = state_16498__$1;
(statearr_16569_18347[(2)] = inst_16421);

(statearr_16569_18347[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (2))){
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16498__$1,(4),ch);
} else {
if((state_val_16499 === (23))){
var state_16498__$1 = state_16498;
var statearr_16570_18348 = state_16498__$1;
(statearr_16570_18348[(2)] = null);

(statearr_16570_18348[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (35))){
var inst_16480 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16571_18349 = state_16498__$1;
(statearr_16571_18349[(2)] = inst_16480);

(statearr_16571_18349[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (19))){
var inst_16393 = (state_16498[(7)]);
var inst_16397 = cljs.core.chunk_first(inst_16393);
var inst_16398 = cljs.core.chunk_rest(inst_16393);
var inst_16399 = cljs.core.count(inst_16397);
var inst_16371 = inst_16398;
var inst_16372 = inst_16397;
var inst_16373 = inst_16399;
var inst_16374 = (0);
var state_16498__$1 = (function (){var statearr_16572 = state_16498;
(statearr_16572[(14)] = inst_16372);

(statearr_16572[(15)] = inst_16374);

(statearr_16572[(16)] = inst_16371);

(statearr_16572[(17)] = inst_16373);

return statearr_16572;
})();
var statearr_16573_18350 = state_16498__$1;
(statearr_16573_18350[(2)] = null);

(statearr_16573_18350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (11))){
var inst_16371 = (state_16498[(16)]);
var inst_16393 = (state_16498[(7)]);
var inst_16393__$1 = cljs.core.seq(inst_16371);
var state_16498__$1 = (function (){var statearr_16574 = state_16498;
(statearr_16574[(7)] = inst_16393__$1);

return statearr_16574;
})();
if(inst_16393__$1){
var statearr_16575_18352 = state_16498__$1;
(statearr_16575_18352[(1)] = (16));

} else {
var statearr_16576_18353 = state_16498__$1;
(statearr_16576_18353[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (9))){
var inst_16423 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16578_18354 = state_16498__$1;
(statearr_16578_18354[(2)] = inst_16423);

(statearr_16578_18354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (5))){
var inst_16369 = cljs.core.deref(cs);
var inst_16370 = cljs.core.seq(inst_16369);
var inst_16371 = inst_16370;
var inst_16372 = null;
var inst_16373 = (0);
var inst_16374 = (0);
var state_16498__$1 = (function (){var statearr_16579 = state_16498;
(statearr_16579[(14)] = inst_16372);

(statearr_16579[(15)] = inst_16374);

(statearr_16579[(16)] = inst_16371);

(statearr_16579[(17)] = inst_16373);

return statearr_16579;
})();
var statearr_16581_18355 = state_16498__$1;
(statearr_16581_18355[(2)] = null);

(statearr_16581_18355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (14))){
var state_16498__$1 = state_16498;
var statearr_16582_18357 = state_16498__$1;
(statearr_16582_18357[(2)] = null);

(statearr_16582_18357[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (45))){
var inst_16488 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16586_18358 = state_16498__$1;
(statearr_16586_18358[(2)] = inst_16488);

(statearr_16586_18358[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (26))){
var inst_16432 = (state_16498[(27)]);
var inst_16484 = (state_16498[(2)]);
var inst_16485 = cljs.core.seq(inst_16432);
var state_16498__$1 = (function (){var statearr_16587 = state_16498;
(statearr_16587[(29)] = inst_16484);

return statearr_16587;
})();
if(inst_16485){
var statearr_16588_18359 = state_16498__$1;
(statearr_16588_18359[(1)] = (42));

} else {
var statearr_16589_18360 = state_16498__$1;
(statearr_16589_18360[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (16))){
var inst_16393 = (state_16498[(7)]);
var inst_16395 = cljs.core.chunked_seq_QMARK_(inst_16393);
var state_16498__$1 = state_16498;
if(inst_16395){
var statearr_16590_18361 = state_16498__$1;
(statearr_16590_18361[(1)] = (19));

} else {
var statearr_16591_18362 = state_16498__$1;
(statearr_16591_18362[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (38))){
var inst_16477 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16593_18363 = state_16498__$1;
(statearr_16593_18363[(2)] = inst_16477);

(statearr_16593_18363[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (30))){
var state_16498__$1 = state_16498;
var statearr_16594_18364 = state_16498__$1;
(statearr_16594_18364[(2)] = null);

(statearr_16594_18364[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (10))){
var inst_16372 = (state_16498[(14)]);
var inst_16374 = (state_16498[(15)]);
var inst_16382 = cljs.core._nth(inst_16372,inst_16374);
var inst_16383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16382,(0),null);
var inst_16384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16382,(1),null);
var state_16498__$1 = (function (){var statearr_16595 = state_16498;
(statearr_16595[(24)] = inst_16383);

return statearr_16595;
})();
if(cljs.core.truth_(inst_16384)){
var statearr_16596_18365 = state_16498__$1;
(statearr_16596_18365[(1)] = (13));

} else {
var statearr_16597_18366 = state_16498__$1;
(statearr_16597_18366[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (18))){
var inst_16419 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16599_18371 = state_16498__$1;
(statearr_16599_18371[(2)] = inst_16419);

(statearr_16599_18371[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (42))){
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16498__$1,(45),dchan);
} else {
if((state_val_16499 === (37))){
var inst_16467 = (state_16498[(22)]);
var inst_16362 = (state_16498[(11)]);
var inst_16458 = (state_16498[(23)]);
var inst_16467__$1 = cljs.core.first(inst_16458);
var inst_16468 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16467__$1,inst_16362,done);
var state_16498__$1 = (function (){var statearr_16601 = state_16498;
(statearr_16601[(22)] = inst_16467__$1);

return statearr_16601;
})();
if(cljs.core.truth_(inst_16468)){
var statearr_16602_18382 = state_16498__$1;
(statearr_16602_18382[(1)] = (39));

} else {
var statearr_16603_18383 = state_16498__$1;
(statearr_16603_18383[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (8))){
var inst_16374 = (state_16498[(15)]);
var inst_16373 = (state_16498[(17)]);
var inst_16376 = (inst_16374 < inst_16373);
var inst_16377 = inst_16376;
var state_16498__$1 = state_16498;
if(cljs.core.truth_(inst_16377)){
var statearr_16608_18387 = state_16498__$1;
(statearr_16608_18387[(1)] = (10));

} else {
var statearr_16609_18388 = state_16498__$1;
(statearr_16609_18388[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14780__auto__ = null;
var cljs$core$async$mult_$_state_machine__14780__auto____0 = (function (){
var statearr_16611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16611[(0)] = cljs$core$async$mult_$_state_machine__14780__auto__);

(statearr_16611[(1)] = (1));

return statearr_16611;
});
var cljs$core$async$mult_$_state_machine__14780__auto____1 = (function (state_16498){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_16498);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e16613){var ex__14783__auto__ = e16613;
var statearr_16614_18390 = state_16498;
(statearr_16614_18390[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_16498[(4)]))){
var statearr_16615_18391 = state_16498;
(statearr_16615_18391[(1)] = cljs.core.first((state_16498[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18392 = state_16498;
state_16498 = G__18392;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14780__auto__ = function(state_16498){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14780__auto____1.call(this,state_16498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14780__auto____0;
cljs$core$async$mult_$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14780__auto____1;
return cljs$core$async$mult_$_state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_16616 = f__15124__auto__();
(statearr_16616[(6)] = c__15123__auto___18287);

return statearr_16616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16619 = arguments.length;
switch (G__16619) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18409 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18409(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18425 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18425(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18426 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18426(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18427 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18427(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18428 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18428(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18429 = arguments.length;
var i__5727__auto___18430 = (0);
while(true){
if((i__5727__auto___18430 < len__5726__auto___18429)){
args__5732__auto__.push((arguments[i__5727__auto___18430]));

var G__18431 = (i__5727__auto___18430 + (1));
i__5727__auto___18430 = G__18431;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16633){
var map__16634 = p__16633;
var map__16634__$1 = cljs.core.__destructure_map(map__16634);
var opts = map__16634__$1;
var statearr_16636_18432 = state;
(statearr_16636_18432[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16637_18433 = state;
(statearr_16637_18433[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16641_18434 = state;
(statearr_16641_18434[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16629){
var G__16630 = cljs.core.first(seq16629);
var seq16629__$1 = cljs.core.next(seq16629);
var G__16631 = cljs.core.first(seq16629__$1);
var seq16629__$2 = cljs.core.next(seq16629__$1);
var G__16632 = cljs.core.first(seq16629__$2);
var seq16629__$3 = cljs.core.next(seq16629__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16630,G__16631,G__16632,seq16629__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16651 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16652){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16652 = meta16652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16653,meta16652__$1){
var self__ = this;
var _16653__$1 = this;
return (new cljs.core.async.t_cljs$core$async16651(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16652__$1));
}));

(cljs.core.async.t_cljs$core$async16651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16653){
var self__ = this;
var _16653__$1 = this;
return self__.meta16652;
}));

(cljs.core.async.t_cljs$core$async16651.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16651.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16651.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16651.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16651.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16651.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16651.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16651.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16652","meta16652",-632967678,null)], null);
}));

(cljs.core.async.t_cljs$core$async16651.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16651");

(cljs.core.async.t_cljs$core$async16651.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16651");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16651.
 */
cljs.core.async.__GT_t_cljs$core$async16651 = (function cljs$core$async$__GT_t_cljs$core$async16651(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16652){
return (new cljs.core.async.t_cljs$core$async16651(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16652));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16651(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15123__auto___18489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_16740){
var state_val_16743 = (state_16740[(1)]);
if((state_val_16743 === (7))){
var inst_16696 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
if(cljs.core.truth_(inst_16696)){
var statearr_16744_18490 = state_16740__$1;
(statearr_16744_18490[(1)] = (8));

} else {
var statearr_16745_18491 = state_16740__$1;
(statearr_16745_18491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (20))){
var inst_16689 = (state_16740[(7)]);
var state_16740__$1 = state_16740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16740__$1,(23),out,inst_16689);
} else {
if((state_val_16743 === (1))){
var inst_16669 = calc_state();
var inst_16672 = cljs.core.__destructure_map(inst_16669);
var inst_16673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16672,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16672,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16672,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16677 = inst_16669;
var state_16740__$1 = (function (){var statearr_16747 = state_16740;
(statearr_16747[(8)] = inst_16675);

(statearr_16747[(9)] = inst_16673);

(statearr_16747[(10)] = inst_16674);

(statearr_16747[(11)] = inst_16677);

return statearr_16747;
})();
var statearr_16749_18493 = state_16740__$1;
(statearr_16749_18493[(2)] = null);

(statearr_16749_18493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (24))){
var inst_16680 = (state_16740[(12)]);
var inst_16677 = inst_16680;
var state_16740__$1 = (function (){var statearr_16753 = state_16740;
(statearr_16753[(11)] = inst_16677);

return statearr_16753;
})();
var statearr_16754_18494 = state_16740__$1;
(statearr_16754_18494[(2)] = null);

(statearr_16754_18494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (4))){
var inst_16691 = (state_16740[(13)]);
var inst_16689 = (state_16740[(7)]);
var inst_16688 = (state_16740[(2)]);
var inst_16689__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16688,(0),null);
var inst_16690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16688,(1),null);
var inst_16691__$1 = (inst_16689__$1 == null);
var state_16740__$1 = (function (){var statearr_16755 = state_16740;
(statearr_16755[(14)] = inst_16690);

(statearr_16755[(13)] = inst_16691__$1);

(statearr_16755[(7)] = inst_16689__$1);

return statearr_16755;
})();
if(cljs.core.truth_(inst_16691__$1)){
var statearr_16756_18495 = state_16740__$1;
(statearr_16756_18495[(1)] = (5));

} else {
var statearr_16757_18500 = state_16740__$1;
(statearr_16757_18500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (15))){
var inst_16681 = (state_16740[(15)]);
var inst_16710 = (state_16740[(16)]);
var inst_16710__$1 = cljs.core.empty_QMARK_(inst_16681);
var state_16740__$1 = (function (){var statearr_16758 = state_16740;
(statearr_16758[(16)] = inst_16710__$1);

return statearr_16758;
})();
if(inst_16710__$1){
var statearr_16759_18501 = state_16740__$1;
(statearr_16759_18501[(1)] = (17));

} else {
var statearr_16760_18502 = state_16740__$1;
(statearr_16760_18502[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (21))){
var inst_16680 = (state_16740[(12)]);
var inst_16677 = inst_16680;
var state_16740__$1 = (function (){var statearr_16761 = state_16740;
(statearr_16761[(11)] = inst_16677);

return statearr_16761;
})();
var statearr_16762_18503 = state_16740__$1;
(statearr_16762_18503[(2)] = null);

(statearr_16762_18503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (13))){
var inst_16703 = (state_16740[(2)]);
var inst_16704 = calc_state();
var inst_16677 = inst_16704;
var state_16740__$1 = (function (){var statearr_16764 = state_16740;
(statearr_16764[(17)] = inst_16703);

(statearr_16764[(11)] = inst_16677);

return statearr_16764;
})();
var statearr_16765_18504 = state_16740__$1;
(statearr_16765_18504[(2)] = null);

(statearr_16765_18504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (22))){
var inst_16734 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
var statearr_16766_18505 = state_16740__$1;
(statearr_16766_18505[(2)] = inst_16734);

(statearr_16766_18505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (6))){
var inst_16690 = (state_16740[(14)]);
var inst_16694 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16690,change);
var state_16740__$1 = state_16740;
var statearr_16767_18506 = state_16740__$1;
(statearr_16767_18506[(2)] = inst_16694);

(statearr_16767_18506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (25))){
var state_16740__$1 = state_16740;
var statearr_16768_18507 = state_16740__$1;
(statearr_16768_18507[(2)] = null);

(statearr_16768_18507[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (17))){
var inst_16682 = (state_16740[(18)]);
var inst_16690 = (state_16740[(14)]);
var inst_16712 = (inst_16682.cljs$core$IFn$_invoke$arity$1 ? inst_16682.cljs$core$IFn$_invoke$arity$1(inst_16690) : inst_16682.call(null,inst_16690));
var inst_16713 = cljs.core.not(inst_16712);
var state_16740__$1 = state_16740;
var statearr_16769_18508 = state_16740__$1;
(statearr_16769_18508[(2)] = inst_16713);

(statearr_16769_18508[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (3))){
var inst_16738 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16740__$1,inst_16738);
} else {
if((state_val_16743 === (12))){
var state_16740__$1 = state_16740;
var statearr_16771_18509 = state_16740__$1;
(statearr_16771_18509[(2)] = null);

(statearr_16771_18509[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (2))){
var inst_16680 = (state_16740[(12)]);
var inst_16677 = (state_16740[(11)]);
var inst_16680__$1 = cljs.core.__destructure_map(inst_16677);
var inst_16681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16680__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16680__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16680__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16740__$1 = (function (){var statearr_16772 = state_16740;
(statearr_16772[(12)] = inst_16680__$1);

(statearr_16772[(18)] = inst_16682);

(statearr_16772[(15)] = inst_16681);

return statearr_16772;
})();
return cljs.core.async.ioc_alts_BANG_(state_16740__$1,(4),inst_16683);
} else {
if((state_val_16743 === (23))){
var inst_16723 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
if(cljs.core.truth_(inst_16723)){
var statearr_16780_18516 = state_16740__$1;
(statearr_16780_18516[(1)] = (24));

} else {
var statearr_16781_18517 = state_16740__$1;
(statearr_16781_18517[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (19))){
var inst_16716 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
var statearr_16782_18518 = state_16740__$1;
(statearr_16782_18518[(2)] = inst_16716);

(statearr_16782_18518[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (11))){
var inst_16690 = (state_16740[(14)]);
var inst_16700 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16690);
var state_16740__$1 = state_16740;
var statearr_16785_18519 = state_16740__$1;
(statearr_16785_18519[(2)] = inst_16700);

(statearr_16785_18519[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (9))){
var inst_16707 = (state_16740[(19)]);
var inst_16681 = (state_16740[(15)]);
var inst_16690 = (state_16740[(14)]);
var inst_16707__$1 = (inst_16681.cljs$core$IFn$_invoke$arity$1 ? inst_16681.cljs$core$IFn$_invoke$arity$1(inst_16690) : inst_16681.call(null,inst_16690));
var state_16740__$1 = (function (){var statearr_16787 = state_16740;
(statearr_16787[(19)] = inst_16707__$1);

return statearr_16787;
})();
if(cljs.core.truth_(inst_16707__$1)){
var statearr_16792_18520 = state_16740__$1;
(statearr_16792_18520[(1)] = (14));

} else {
var statearr_16794_18521 = state_16740__$1;
(statearr_16794_18521[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (5))){
var inst_16691 = (state_16740[(13)]);
var state_16740__$1 = state_16740;
var statearr_16795_18522 = state_16740__$1;
(statearr_16795_18522[(2)] = inst_16691);

(statearr_16795_18522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (14))){
var inst_16707 = (state_16740[(19)]);
var state_16740__$1 = state_16740;
var statearr_16797_18523 = state_16740__$1;
(statearr_16797_18523[(2)] = inst_16707);

(statearr_16797_18523[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (26))){
var inst_16730 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
var statearr_16798_18524 = state_16740__$1;
(statearr_16798_18524[(2)] = inst_16730);

(statearr_16798_18524[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (16))){
var inst_16718 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
if(cljs.core.truth_(inst_16718)){
var statearr_16799_18525 = state_16740__$1;
(statearr_16799_18525[(1)] = (20));

} else {
var statearr_16800_18526 = state_16740__$1;
(statearr_16800_18526[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (10))){
var inst_16736 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
var statearr_16801_18527 = state_16740__$1;
(statearr_16801_18527[(2)] = inst_16736);

(statearr_16801_18527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (18))){
var inst_16710 = (state_16740[(16)]);
var state_16740__$1 = state_16740;
var statearr_16803_18528 = state_16740__$1;
(statearr_16803_18528[(2)] = inst_16710);

(statearr_16803_18528[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16743 === (8))){
var inst_16689 = (state_16740[(7)]);
var inst_16698 = (inst_16689 == null);
var state_16740__$1 = state_16740;
if(cljs.core.truth_(inst_16698)){
var statearr_16807_18529 = state_16740__$1;
(statearr_16807_18529[(1)] = (11));

} else {
var statearr_16808_18530 = state_16740__$1;
(statearr_16808_18530[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14780__auto__ = null;
var cljs$core$async$mix_$_state_machine__14780__auto____0 = (function (){
var statearr_16809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16809[(0)] = cljs$core$async$mix_$_state_machine__14780__auto__);

(statearr_16809[(1)] = (1));

return statearr_16809;
});
var cljs$core$async$mix_$_state_machine__14780__auto____1 = (function (state_16740){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_16740);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e16810){var ex__14783__auto__ = e16810;
var statearr_16811_18536 = state_16740;
(statearr_16811_18536[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_16740[(4)]))){
var statearr_16812_18537 = state_16740;
(statearr_16812_18537[(1)] = cljs.core.first((state_16740[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18540 = state_16740;
state_16740 = G__18540;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14780__auto__ = function(state_16740){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14780__auto____1.call(this,state_16740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14780__auto____0;
cljs$core$async$mix_$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14780__auto____1;
return cljs$core$async$mix_$_state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_16813 = f__15124__auto__();
(statearr_16813[(6)] = c__15123__auto___18489);

return statearr_16813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18544 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18544(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18545 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18545(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18558 = (function() {
var G__18559 = null;
var G__18559__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18559__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18559 = function(p,v){
switch(arguments.length){
case 1:
return G__18559__1.call(this,p);
case 2:
return G__18559__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18559.cljs$core$IFn$_invoke$arity$1 = G__18559__1;
G__18559.cljs$core$IFn$_invoke$arity$2 = G__18559__2;
return G__18559;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16820 = arguments.length;
switch (G__16820) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18558(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18558(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16832 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16833){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16833 = meta16833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16834,meta16833__$1){
var self__ = this;
var _16834__$1 = this;
return (new cljs.core.async.t_cljs$core$async16832(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16833__$1));
}));

(cljs.core.async.t_cljs$core$async16832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16834){
var self__ = this;
var _16834__$1 = this;
return self__.meta16833;
}));

(cljs.core.async.t_cljs$core$async16832.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16832.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16832.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16832.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16832.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16832.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16832.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16833","meta16833",1215848962,null)], null);
}));

(cljs.core.async.t_cljs$core$async16832.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16832");

(cljs.core.async.t_cljs$core$async16832.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16832");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16832.
 */
cljs.core.async.__GT_t_cljs$core$async16832 = (function cljs$core$async$__GT_t_cljs$core$async16832(ch,topic_fn,buf_fn,mults,ensure_mult,meta16833){
return (new cljs.core.async.t_cljs$core$async16832(ch,topic_fn,buf_fn,mults,ensure_mult,meta16833));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16827 = arguments.length;
switch (G__16827) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16825_SHARP_){
if(cljs.core.truth_((p1__16825_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16825_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16825_SHARP_.call(null,topic)))){
return p1__16825_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16825_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16832(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15123__auto___18582 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_16976){
var state_val_16977 = (state_16976[(1)]);
if((state_val_16977 === (7))){
var inst_16956 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
var statearr_16982_18586 = state_16976__$1;
(statearr_16982_18586[(2)] = inst_16956);

(statearr_16982_18586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (20))){
var state_16976__$1 = state_16976;
var statearr_16983_18587 = state_16976__$1;
(statearr_16983_18587[(2)] = null);

(statearr_16983_18587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (1))){
var state_16976__$1 = state_16976;
var statearr_16986_18588 = state_16976__$1;
(statearr_16986_18588[(2)] = null);

(statearr_16986_18588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (24))){
var inst_16939 = (state_16976[(7)]);
var inst_16948 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16939);
var state_16976__$1 = state_16976;
var statearr_16987_18589 = state_16976__$1;
(statearr_16987_18589[(2)] = inst_16948);

(statearr_16987_18589[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (4))){
var inst_16871 = (state_16976[(8)]);
var inst_16871__$1 = (state_16976[(2)]);
var inst_16872 = (inst_16871__$1 == null);
var state_16976__$1 = (function (){var statearr_16989 = state_16976;
(statearr_16989[(8)] = inst_16871__$1);

return statearr_16989;
})();
if(cljs.core.truth_(inst_16872)){
var statearr_16990_18590 = state_16976__$1;
(statearr_16990_18590[(1)] = (5));

} else {
var statearr_16991_18591 = state_16976__$1;
(statearr_16991_18591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (15))){
var inst_16933 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
var statearr_16992_18592 = state_16976__$1;
(statearr_16992_18592[(2)] = inst_16933);

(statearr_16992_18592[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (21))){
var inst_16953 = (state_16976[(2)]);
var state_16976__$1 = (function (){var statearr_16993 = state_16976;
(statearr_16993[(9)] = inst_16953);

return statearr_16993;
})();
var statearr_16994_18593 = state_16976__$1;
(statearr_16994_18593[(2)] = null);

(statearr_16994_18593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (13))){
var inst_16903 = (state_16976[(10)]);
var inst_16905 = cljs.core.chunked_seq_QMARK_(inst_16903);
var state_16976__$1 = state_16976;
if(inst_16905){
var statearr_16996_18594 = state_16976__$1;
(statearr_16996_18594[(1)] = (16));

} else {
var statearr_16997_18595 = state_16976__$1;
(statearr_16997_18595[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (22))){
var inst_16945 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
if(cljs.core.truth_(inst_16945)){
var statearr_16998_18598 = state_16976__$1;
(statearr_16998_18598[(1)] = (23));

} else {
var statearr_16999_18599 = state_16976__$1;
(statearr_16999_18599[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (6))){
var inst_16871 = (state_16976[(8)]);
var inst_16941 = (state_16976[(11)]);
var inst_16939 = (state_16976[(7)]);
var inst_16939__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16871) : topic_fn.call(null,inst_16871));
var inst_16940 = cljs.core.deref(mults);
var inst_16941__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16940,inst_16939__$1);
var state_16976__$1 = (function (){var statearr_17000 = state_16976;
(statearr_17000[(11)] = inst_16941__$1);

(statearr_17000[(7)] = inst_16939__$1);

return statearr_17000;
})();
if(cljs.core.truth_(inst_16941__$1)){
var statearr_17001_18605 = state_16976__$1;
(statearr_17001_18605[(1)] = (19));

} else {
var statearr_17005_18606 = state_16976__$1;
(statearr_17005_18606[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (25))){
var inst_16950 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
var statearr_17017_18607 = state_16976__$1;
(statearr_17017_18607[(2)] = inst_16950);

(statearr_17017_18607[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (17))){
var inst_16903 = (state_16976[(10)]);
var inst_16924 = cljs.core.first(inst_16903);
var inst_16925 = cljs.core.async.muxch_STAR_(inst_16924);
var inst_16926 = cljs.core.async.close_BANG_(inst_16925);
var inst_16927 = cljs.core.next(inst_16903);
var inst_16884 = inst_16927;
var inst_16885 = null;
var inst_16886 = (0);
var inst_16887 = (0);
var state_16976__$1 = (function (){var statearr_17018 = state_16976;
(statearr_17018[(12)] = inst_16886);

(statearr_17018[(13)] = inst_16926);

(statearr_17018[(14)] = inst_16884);

(statearr_17018[(15)] = inst_16887);

(statearr_17018[(16)] = inst_16885);

return statearr_17018;
})();
var statearr_17019_18608 = state_16976__$1;
(statearr_17019_18608[(2)] = null);

(statearr_17019_18608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (3))){
var inst_16958 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16976__$1,inst_16958);
} else {
if((state_val_16977 === (12))){
var inst_16935 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
var statearr_17021_18609 = state_16976__$1;
(statearr_17021_18609[(2)] = inst_16935);

(statearr_17021_18609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (2))){
var state_16976__$1 = state_16976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16976__$1,(4),ch);
} else {
if((state_val_16977 === (23))){
var state_16976__$1 = state_16976;
var statearr_17022_18610 = state_16976__$1;
(statearr_17022_18610[(2)] = null);

(statearr_17022_18610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (19))){
var inst_16871 = (state_16976[(8)]);
var inst_16941 = (state_16976[(11)]);
var inst_16943 = cljs.core.async.muxch_STAR_(inst_16941);
var state_16976__$1 = state_16976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16976__$1,(22),inst_16943,inst_16871);
} else {
if((state_val_16977 === (11))){
var inst_16884 = (state_16976[(14)]);
var inst_16903 = (state_16976[(10)]);
var inst_16903__$1 = cljs.core.seq(inst_16884);
var state_16976__$1 = (function (){var statearr_17023 = state_16976;
(statearr_17023[(10)] = inst_16903__$1);

return statearr_17023;
})();
if(inst_16903__$1){
var statearr_17024_18616 = state_16976__$1;
(statearr_17024_18616[(1)] = (13));

} else {
var statearr_17025_18618 = state_16976__$1;
(statearr_17025_18618[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (9))){
var inst_16937 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
var statearr_17026_18619 = state_16976__$1;
(statearr_17026_18619[(2)] = inst_16937);

(statearr_17026_18619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (5))){
var inst_16881 = cljs.core.deref(mults);
var inst_16882 = cljs.core.vals(inst_16881);
var inst_16883 = cljs.core.seq(inst_16882);
var inst_16884 = inst_16883;
var inst_16885 = null;
var inst_16886 = (0);
var inst_16887 = (0);
var state_16976__$1 = (function (){var statearr_17027 = state_16976;
(statearr_17027[(12)] = inst_16886);

(statearr_17027[(14)] = inst_16884);

(statearr_17027[(15)] = inst_16887);

(statearr_17027[(16)] = inst_16885);

return statearr_17027;
})();
var statearr_17028_18621 = state_16976__$1;
(statearr_17028_18621[(2)] = null);

(statearr_17028_18621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (14))){
var state_16976__$1 = state_16976;
var statearr_17033_18623 = state_16976__$1;
(statearr_17033_18623[(2)] = null);

(statearr_17033_18623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (16))){
var inst_16903 = (state_16976[(10)]);
var inst_16919 = cljs.core.chunk_first(inst_16903);
var inst_16920 = cljs.core.chunk_rest(inst_16903);
var inst_16921 = cljs.core.count(inst_16919);
var inst_16884 = inst_16920;
var inst_16885 = inst_16919;
var inst_16886 = inst_16921;
var inst_16887 = (0);
var state_16976__$1 = (function (){var statearr_17035 = state_16976;
(statearr_17035[(12)] = inst_16886);

(statearr_17035[(14)] = inst_16884);

(statearr_17035[(15)] = inst_16887);

(statearr_17035[(16)] = inst_16885);

return statearr_17035;
})();
var statearr_17036_18627 = state_16976__$1;
(statearr_17036_18627[(2)] = null);

(statearr_17036_18627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (10))){
var inst_16886 = (state_16976[(12)]);
var inst_16884 = (state_16976[(14)]);
var inst_16887 = (state_16976[(15)]);
var inst_16885 = (state_16976[(16)]);
var inst_16897 = cljs.core._nth(inst_16885,inst_16887);
var inst_16898 = cljs.core.async.muxch_STAR_(inst_16897);
var inst_16899 = cljs.core.async.close_BANG_(inst_16898);
var inst_16900 = (inst_16887 + (1));
var tmp17029 = inst_16886;
var tmp17030 = inst_16884;
var tmp17031 = inst_16885;
var inst_16884__$1 = tmp17030;
var inst_16885__$1 = tmp17031;
var inst_16886__$1 = tmp17029;
var inst_16887__$1 = inst_16900;
var state_16976__$1 = (function (){var statearr_17038 = state_16976;
(statearr_17038[(12)] = inst_16886__$1);

(statearr_17038[(14)] = inst_16884__$1);

(statearr_17038[(15)] = inst_16887__$1);

(statearr_17038[(17)] = inst_16899);

(statearr_17038[(16)] = inst_16885__$1);

return statearr_17038;
})();
var statearr_17039_18640 = state_16976__$1;
(statearr_17039_18640[(2)] = null);

(statearr_17039_18640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (18))){
var inst_16930 = (state_16976[(2)]);
var state_16976__$1 = state_16976;
var statearr_17040_18641 = state_16976__$1;
(statearr_17040_18641[(2)] = inst_16930);

(statearr_17040_18641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16977 === (8))){
var inst_16886 = (state_16976[(12)]);
var inst_16887 = (state_16976[(15)]);
var inst_16894 = (inst_16887 < inst_16886);
var inst_16895 = inst_16894;
var state_16976__$1 = state_16976;
if(cljs.core.truth_(inst_16895)){
var statearr_17041_18642 = state_16976__$1;
(statearr_17041_18642[(1)] = (10));

} else {
var statearr_17042_18643 = state_16976__$1;
(statearr_17042_18643[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14780__auto__ = null;
var cljs$core$async$state_machine__14780__auto____0 = (function (){
var statearr_17043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17043[(0)] = cljs$core$async$state_machine__14780__auto__);

(statearr_17043[(1)] = (1));

return statearr_17043;
});
var cljs$core$async$state_machine__14780__auto____1 = (function (state_16976){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_16976);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e17044){var ex__14783__auto__ = e17044;
var statearr_17045_18644 = state_16976;
(statearr_17045_18644[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_16976[(4)]))){
var statearr_17046_18645 = state_16976;
(statearr_17046_18645[(1)] = cljs.core.first((state_16976[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18646 = state_16976;
state_16976 = G__18646;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$state_machine__14780__auto__ = function(state_16976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14780__auto____1.call(this,state_16976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14780__auto____0;
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14780__auto____1;
return cljs$core$async$state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_17047 = f__15124__auto__();
(statearr_17047[(6)] = c__15123__auto___18582);

return statearr_17047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17051 = arguments.length;
switch (G__17051) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17060 = arguments.length;
switch (G__17060) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17063 = arguments.length;
switch (G__17063) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15123__auto___18719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_17116){
var state_val_17117 = (state_17116[(1)]);
if((state_val_17117 === (7))){
var state_17116__$1 = state_17116;
var statearr_17119_18720 = state_17116__$1;
(statearr_17119_18720[(2)] = null);

(statearr_17119_18720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17117 === (1))){
var state_17116__$1 = state_17116;
var statearr_17120_18721 = state_17116__$1;
(statearr_17120_18721[(2)] = null);

(statearr_17120_18721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17117 === (4))){
var inst_17066 = (state_17116[(7)]);
var inst_17067 = (state_17116[(8)]);
var inst_17070 = (inst_17067 < inst_17066);
var state_17116__$1 = state_17116;
if(cljs.core.truth_(inst_17070)){
var statearr_17121_18722 = state_17116__$1;
(statearr_17121_18722[(1)] = (6));

} else {
var statearr_17122_18723 = state_17116__$1;
(statearr_17122_18723[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17117 === (15))){
var inst_17100 = (state_17116[(9)]);
var inst_17105 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17100);
var state_17116__$1 = state_17116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17116__$1,(17),out,inst_17105);
} else {
if((state_val_17117 === (13))){
var inst_17100 = (state_17116[(9)]);
var inst_17100__$1 = (state_17116[(2)]);
var inst_17101 = cljs.core.some(cljs.core.nil_QMARK_,inst_17100__$1);
var state_17116__$1 = (function (){var statearr_17123 = state_17116;
(statearr_17123[(9)] = inst_17100__$1);

return statearr_17123;
})();
if(cljs.core.truth_(inst_17101)){
var statearr_17124_18724 = state_17116__$1;
(statearr_17124_18724[(1)] = (14));

} else {
var statearr_17125_18725 = state_17116__$1;
(statearr_17125_18725[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17117 === (6))){
var state_17116__$1 = state_17116;
var statearr_17126_18726 = state_17116__$1;
(statearr_17126_18726[(2)] = null);

(statearr_17126_18726[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17117 === (17))){
var inst_17107 = (state_17116[(2)]);
var state_17116__$1 = (function (){var statearr_17131 = state_17116;
(statearr_17131[(10)] = inst_17107);

return statearr_17131;
})();
var statearr_17132_18727 = state_17116__$1;
(statearr_17132_18727[(2)] = null);

(statearr_17132_18727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17117 === (3))){
var inst_17112 = (state_17116[(2)]);
var state_17116__$1 = state_17116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17116__$1,inst_17112);
} else {
if((state_val_17117 === (12))){
var _ = (function (){var statearr_17133 = state_17116;
(statearr_17133[(4)] = cljs.core.rest((state_17116[(4)])));

return statearr_17133;
})();
var state_17116__$1 = state_17116;
var ex17130 = (state_17116__$1[(2)]);
var statearr_17134_18728 = state_17116__$1;
(statearr_17134_18728[(5)] = ex17130);


if((ex17130 instanceof Object)){
var statearr_17138_18729 = state_17116__$1;
(statearr_17138_18729[(1)] = (11));

(statearr_17138_18729[(5)] = null);

} else {
throw ex17130;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17117 === (2))){
var inst_17065 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17066 = cnt;
var inst_17067 = (0);
var state_17116__$1 = (function (){var statearr_17139 = state_17116;
(statearr_17139[(7)] = inst_17066);

(statearr_17139[(8)] = inst_17067);

(statearr_17139[(11)] = inst_17065);

return statearr_17139;
})();
var statearr_17140_18730 = state_17116__$1;
(statearr_17140_18730[(2)] = null);

(statearr_17140_18730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17117 === (11))){
var inst_17079 = (state_17116[(2)]);
var inst_17080 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17116__$1 = (function (){var statearr_17141 = state_17116;
(statearr_17141[(12)] = inst_17079);

return statearr_17141;
})();
var statearr_17142_18731 = state_17116__$1;
(statearr_17142_18731[(2)] = inst_17080);

(statearr_17142_18731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17117 === (9))){
var inst_17067 = (state_17116[(8)]);
var _ = (function (){var statearr_17143 = state_17116;
(statearr_17143[(4)] = cljs.core.cons((12),(state_17116[(4)])));

return statearr_17143;
})();
var inst_17086 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17067) : chs__$1.call(null,inst_17067));
var inst_17087 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17067) : done.call(null,inst_17067));
var inst_17088 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17086,inst_17087);
var ___$1 = (function (){var statearr_17144 = state_17116;
(statearr_17144[(4)] = cljs.core.rest((state_17116[(4)])));

return statearr_17144;
})();
var state_17116__$1 = state_17116;
var statearr_17145_18733 = state_17116__$1;
(statearr_17145_18733[(2)] = inst_17088);

(statearr_17145_18733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17117 === (5))){
var inst_17098 = (state_17116[(2)]);
var state_17116__$1 = (function (){var statearr_17146 = state_17116;
(statearr_17146[(13)] = inst_17098);

return statearr_17146;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17116__$1,(13),dchan);
} else {
if((state_val_17117 === (14))){
var inst_17103 = cljs.core.async.close_BANG_(out);
var state_17116__$1 = state_17116;
var statearr_17147_18734 = state_17116__$1;
(statearr_17147_18734[(2)] = inst_17103);

(statearr_17147_18734[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17117 === (16))){
var inst_17110 = (state_17116[(2)]);
var state_17116__$1 = state_17116;
var statearr_17149_18735 = state_17116__$1;
(statearr_17149_18735[(2)] = inst_17110);

(statearr_17149_18735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17117 === (10))){
var inst_17067 = (state_17116[(8)]);
var inst_17091 = (state_17116[(2)]);
var inst_17092 = (inst_17067 + (1));
var inst_17067__$1 = inst_17092;
var state_17116__$1 = (function (){var statearr_17152 = state_17116;
(statearr_17152[(8)] = inst_17067__$1);

(statearr_17152[(14)] = inst_17091);

return statearr_17152;
})();
var statearr_17154_18736 = state_17116__$1;
(statearr_17154_18736[(2)] = null);

(statearr_17154_18736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17117 === (8))){
var inst_17096 = (state_17116[(2)]);
var state_17116__$1 = state_17116;
var statearr_17156_18737 = state_17116__$1;
(statearr_17156_18737[(2)] = inst_17096);

(statearr_17156_18737[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14780__auto__ = null;
var cljs$core$async$state_machine__14780__auto____0 = (function (){
var statearr_17162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17162[(0)] = cljs$core$async$state_machine__14780__auto__);

(statearr_17162[(1)] = (1));

return statearr_17162;
});
var cljs$core$async$state_machine__14780__auto____1 = (function (state_17116){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_17116);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e17163){var ex__14783__auto__ = e17163;
var statearr_17164_18738 = state_17116;
(statearr_17164_18738[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_17116[(4)]))){
var statearr_17165_18739 = state_17116;
(statearr_17165_18739[(1)] = cljs.core.first((state_17116[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18741 = state_17116;
state_17116 = G__18741;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$state_machine__14780__auto__ = function(state_17116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14780__auto____1.call(this,state_17116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14780__auto____0;
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14780__auto____1;
return cljs$core$async$state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_17170 = f__15124__auto__();
(statearr_17170[(6)] = c__15123__auto___18719);

return statearr_17170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17176 = arguments.length;
switch (G__17176) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15123__auto___18746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_17220){
var state_val_17221 = (state_17220[(1)]);
if((state_val_17221 === (7))){
var inst_17196 = (state_17220[(7)]);
var inst_17195 = (state_17220[(8)]);
var inst_17195__$1 = (state_17220[(2)]);
var inst_17196__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17195__$1,(0),null);
var inst_17197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17195__$1,(1),null);
var inst_17199 = (inst_17196__$1 == null);
var state_17220__$1 = (function (){var statearr_17236 = state_17220;
(statearr_17236[(9)] = inst_17197);

(statearr_17236[(7)] = inst_17196__$1);

(statearr_17236[(8)] = inst_17195__$1);

return statearr_17236;
})();
if(cljs.core.truth_(inst_17199)){
var statearr_17237_18751 = state_17220__$1;
(statearr_17237_18751[(1)] = (8));

} else {
var statearr_17238_18755 = state_17220__$1;
(statearr_17238_18755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17221 === (1))){
var inst_17182 = cljs.core.vec(chs);
var inst_17183 = inst_17182;
var state_17220__$1 = (function (){var statearr_17239 = state_17220;
(statearr_17239[(10)] = inst_17183);

return statearr_17239;
})();
var statearr_17240_18759 = state_17220__$1;
(statearr_17240_18759[(2)] = null);

(statearr_17240_18759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17221 === (4))){
var inst_17183 = (state_17220[(10)]);
var state_17220__$1 = state_17220;
return cljs.core.async.ioc_alts_BANG_(state_17220__$1,(7),inst_17183);
} else {
if((state_val_17221 === (6))){
var inst_17215 = (state_17220[(2)]);
var state_17220__$1 = state_17220;
var statearr_17253_18764 = state_17220__$1;
(statearr_17253_18764[(2)] = inst_17215);

(statearr_17253_18764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17221 === (3))){
var inst_17217 = (state_17220[(2)]);
var state_17220__$1 = state_17220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17220__$1,inst_17217);
} else {
if((state_val_17221 === (2))){
var inst_17183 = (state_17220[(10)]);
var inst_17188 = cljs.core.count(inst_17183);
var inst_17189 = (inst_17188 > (0));
var state_17220__$1 = state_17220;
if(cljs.core.truth_(inst_17189)){
var statearr_17262_18765 = state_17220__$1;
(statearr_17262_18765[(1)] = (4));

} else {
var statearr_17263_18766 = state_17220__$1;
(statearr_17263_18766[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17221 === (11))){
var inst_17183 = (state_17220[(10)]);
var inst_17208 = (state_17220[(2)]);
var tmp17256 = inst_17183;
var inst_17183__$1 = tmp17256;
var state_17220__$1 = (function (){var statearr_17265 = state_17220;
(statearr_17265[(10)] = inst_17183__$1);

(statearr_17265[(11)] = inst_17208);

return statearr_17265;
})();
var statearr_17269_18769 = state_17220__$1;
(statearr_17269_18769[(2)] = null);

(statearr_17269_18769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17221 === (9))){
var inst_17196 = (state_17220[(7)]);
var state_17220__$1 = state_17220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17220__$1,(11),out,inst_17196);
} else {
if((state_val_17221 === (5))){
var inst_17213 = cljs.core.async.close_BANG_(out);
var state_17220__$1 = state_17220;
var statearr_17283_18770 = state_17220__$1;
(statearr_17283_18770[(2)] = inst_17213);

(statearr_17283_18770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17221 === (10))){
var inst_17211 = (state_17220[(2)]);
var state_17220__$1 = state_17220;
var statearr_17289_18771 = state_17220__$1;
(statearr_17289_18771[(2)] = inst_17211);

(statearr_17289_18771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17221 === (8))){
var inst_17197 = (state_17220[(9)]);
var inst_17196 = (state_17220[(7)]);
var inst_17195 = (state_17220[(8)]);
var inst_17183 = (state_17220[(10)]);
var inst_17203 = (function (){var cs = inst_17183;
var vec__17191 = inst_17195;
var v = inst_17196;
var c = inst_17197;
return (function (p1__17173_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17173_SHARP_);
});
})();
var inst_17204 = cljs.core.filterv(inst_17203,inst_17183);
var inst_17183__$1 = inst_17204;
var state_17220__$1 = (function (){var statearr_17297 = state_17220;
(statearr_17297[(10)] = inst_17183__$1);

return statearr_17297;
})();
var statearr_17306_18774 = state_17220__$1;
(statearr_17306_18774[(2)] = null);

(statearr_17306_18774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14780__auto__ = null;
var cljs$core$async$state_machine__14780__auto____0 = (function (){
var statearr_17313 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17313[(0)] = cljs$core$async$state_machine__14780__auto__);

(statearr_17313[(1)] = (1));

return statearr_17313;
});
var cljs$core$async$state_machine__14780__auto____1 = (function (state_17220){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_17220);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e17316){var ex__14783__auto__ = e17316;
var statearr_17318_18775 = state_17220;
(statearr_17318_18775[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_17220[(4)]))){
var statearr_17319_18776 = state_17220;
(statearr_17319_18776[(1)] = cljs.core.first((state_17220[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18777 = state_17220;
state_17220 = G__18777;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$state_machine__14780__auto__ = function(state_17220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14780__auto____1.call(this,state_17220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14780__auto____0;
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14780__auto____1;
return cljs$core$async$state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_17323 = f__15124__auto__();
(statearr_17323[(6)] = c__15123__auto___18746);

return statearr_17323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17333 = arguments.length;
switch (G__17333) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15123__auto___18781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_17371){
var state_val_17372 = (state_17371[(1)]);
if((state_val_17372 === (7))){
var inst_17353 = (state_17371[(7)]);
var inst_17353__$1 = (state_17371[(2)]);
var inst_17354 = (inst_17353__$1 == null);
var inst_17355 = cljs.core.not(inst_17354);
var state_17371__$1 = (function (){var statearr_17377 = state_17371;
(statearr_17377[(7)] = inst_17353__$1);

return statearr_17377;
})();
if(inst_17355){
var statearr_17378_18783 = state_17371__$1;
(statearr_17378_18783[(1)] = (8));

} else {
var statearr_17379_18787 = state_17371__$1;
(statearr_17379_18787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17372 === (1))){
var inst_17348 = (0);
var state_17371__$1 = (function (){var statearr_17380 = state_17371;
(statearr_17380[(8)] = inst_17348);

return statearr_17380;
})();
var statearr_17381_18788 = state_17371__$1;
(statearr_17381_18788[(2)] = null);

(statearr_17381_18788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17372 === (4))){
var state_17371__$1 = state_17371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17371__$1,(7),ch);
} else {
if((state_val_17372 === (6))){
var inst_17366 = (state_17371[(2)]);
var state_17371__$1 = state_17371;
var statearr_17386_18789 = state_17371__$1;
(statearr_17386_18789[(2)] = inst_17366);

(statearr_17386_18789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17372 === (3))){
var inst_17368 = (state_17371[(2)]);
var inst_17369 = cljs.core.async.close_BANG_(out);
var state_17371__$1 = (function (){var statearr_17387 = state_17371;
(statearr_17387[(9)] = inst_17368);

return statearr_17387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17371__$1,inst_17369);
} else {
if((state_val_17372 === (2))){
var inst_17348 = (state_17371[(8)]);
var inst_17350 = (inst_17348 < n);
var state_17371__$1 = state_17371;
if(cljs.core.truth_(inst_17350)){
var statearr_17394_18790 = state_17371__$1;
(statearr_17394_18790[(1)] = (4));

} else {
var statearr_17395_18791 = state_17371__$1;
(statearr_17395_18791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17372 === (11))){
var inst_17348 = (state_17371[(8)]);
var inst_17358 = (state_17371[(2)]);
var inst_17359 = (inst_17348 + (1));
var inst_17348__$1 = inst_17359;
var state_17371__$1 = (function (){var statearr_17396 = state_17371;
(statearr_17396[(8)] = inst_17348__$1);

(statearr_17396[(10)] = inst_17358);

return statearr_17396;
})();
var statearr_17397_18793 = state_17371__$1;
(statearr_17397_18793[(2)] = null);

(statearr_17397_18793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17372 === (9))){
var state_17371__$1 = state_17371;
var statearr_17398_18794 = state_17371__$1;
(statearr_17398_18794[(2)] = null);

(statearr_17398_18794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17372 === (5))){
var state_17371__$1 = state_17371;
var statearr_17399_18795 = state_17371__$1;
(statearr_17399_18795[(2)] = null);

(statearr_17399_18795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17372 === (10))){
var inst_17363 = (state_17371[(2)]);
var state_17371__$1 = state_17371;
var statearr_17401_18796 = state_17371__$1;
(statearr_17401_18796[(2)] = inst_17363);

(statearr_17401_18796[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17372 === (8))){
var inst_17353 = (state_17371[(7)]);
var state_17371__$1 = state_17371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17371__$1,(11),out,inst_17353);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14780__auto__ = null;
var cljs$core$async$state_machine__14780__auto____0 = (function (){
var statearr_17402 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17402[(0)] = cljs$core$async$state_machine__14780__auto__);

(statearr_17402[(1)] = (1));

return statearr_17402;
});
var cljs$core$async$state_machine__14780__auto____1 = (function (state_17371){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_17371);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e17403){var ex__14783__auto__ = e17403;
var statearr_17404_18797 = state_17371;
(statearr_17404_18797[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_17371[(4)]))){
var statearr_17405_18798 = state_17371;
(statearr_17405_18798[(1)] = cljs.core.first((state_17371[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18799 = state_17371;
state_17371 = G__18799;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$state_machine__14780__auto__ = function(state_17371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14780__auto____1.call(this,state_17371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14780__auto____0;
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14780__auto____1;
return cljs$core$async$state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_17406 = f__15124__auto__();
(statearr_17406[(6)] = c__15123__auto___18781);

return statearr_17406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17445 = (function (f,ch,meta17417,_,fn1,meta17446){
this.f = f;
this.ch = ch;
this.meta17417 = meta17417;
this._ = _;
this.fn1 = fn1;
this.meta17446 = meta17446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17447,meta17446__$1){
var self__ = this;
var _17447__$1 = this;
return (new cljs.core.async.t_cljs$core$async17445(self__.f,self__.ch,self__.meta17417,self__._,self__.fn1,meta17446__$1));
}));

(cljs.core.async.t_cljs$core$async17445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17447){
var self__ = this;
var _17447__$1 = this;
return self__.meta17446;
}));

(cljs.core.async.t_cljs$core$async17445.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17445.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17445.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17445.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17415_SHARP_){
var G__17452 = (((p1__17415_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17415_SHARP_) : self__.f.call(null,p1__17415_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17452) : f1.call(null,G__17452));
});
}));

(cljs.core.async.t_cljs$core$async17445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17417","meta17417",-2052426452,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17416","cljs.core.async/t_cljs$core$async17416",2104666650,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17446","meta17446",1721974465,null)], null);
}));

(cljs.core.async.t_cljs$core$async17445.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17445");

(cljs.core.async.t_cljs$core$async17445.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17445");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17445.
 */
cljs.core.async.__GT_t_cljs$core$async17445 = (function cljs$core$async$__GT_t_cljs$core$async17445(f,ch,meta17417,_,fn1,meta17446){
return (new cljs.core.async.t_cljs$core$async17445(f,ch,meta17417,_,fn1,meta17446));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17416 = (function (f,ch,meta17417){
this.f = f;
this.ch = ch;
this.meta17417 = meta17417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17418,meta17417__$1){
var self__ = this;
var _17418__$1 = this;
return (new cljs.core.async.t_cljs$core$async17416(self__.f,self__.ch,meta17417__$1));
}));

(cljs.core.async.t_cljs$core$async17416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17418){
var self__ = this;
var _17418__$1 = this;
return self__.meta17417;
}));

(cljs.core.async.t_cljs$core$async17416.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17416.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17416.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17416.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17416.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17445(self__.f,self__.ch,self__.meta17417,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17461 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17461) : self__.f.call(null,G__17461));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17416.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17416.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17417","meta17417",-2052426452,null)], null);
}));

(cljs.core.async.t_cljs$core$async17416.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17416");

(cljs.core.async.t_cljs$core$async17416.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17416");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17416.
 */
cljs.core.async.__GT_t_cljs$core$async17416 = (function cljs$core$async$__GT_t_cljs$core$async17416(f,ch,meta17417){
return (new cljs.core.async.t_cljs$core$async17416(f,ch,meta17417));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17416(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17466 = (function (f,ch,meta17467){
this.f = f;
this.ch = ch;
this.meta17467 = meta17467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17468,meta17467__$1){
var self__ = this;
var _17468__$1 = this;
return (new cljs.core.async.t_cljs$core$async17466(self__.f,self__.ch,meta17467__$1));
}));

(cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17468){
var self__ = this;
var _17468__$1 = this;
return self__.meta17467;
}));

(cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17467","meta17467",-1558825998,null)], null);
}));

(cljs.core.async.t_cljs$core$async17466.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17466");

(cljs.core.async.t_cljs$core$async17466.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17466");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17466.
 */
cljs.core.async.__GT_t_cljs$core$async17466 = (function cljs$core$async$__GT_t_cljs$core$async17466(f,ch,meta17467){
return (new cljs.core.async.t_cljs$core$async17466(f,ch,meta17467));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17466(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17485 = (function (p,ch,meta17486){
this.p = p;
this.ch = ch;
this.meta17486 = meta17486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17487,meta17486__$1){
var self__ = this;
var _17487__$1 = this;
return (new cljs.core.async.t_cljs$core$async17485(self__.p,self__.ch,meta17486__$1));
}));

(cljs.core.async.t_cljs$core$async17485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17487){
var self__ = this;
var _17487__$1 = this;
return self__.meta17486;
}));

(cljs.core.async.t_cljs$core$async17485.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17485.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17485.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17485.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17485.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17485.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17485.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17486","meta17486",-1040471368,null)], null);
}));

(cljs.core.async.t_cljs$core$async17485.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17485");

(cljs.core.async.t_cljs$core$async17485.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17485");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17485.
 */
cljs.core.async.__GT_t_cljs$core$async17485 = (function cljs$core$async$__GT_t_cljs$core$async17485(p,ch,meta17486){
return (new cljs.core.async.t_cljs$core$async17485(p,ch,meta17486));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17485(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17494 = arguments.length;
switch (G__17494) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15123__auto___18827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_17528){
var state_val_17529 = (state_17528[(1)]);
if((state_val_17529 === (7))){
var inst_17522 = (state_17528[(2)]);
var state_17528__$1 = state_17528;
var statearr_17530_18828 = state_17528__$1;
(statearr_17530_18828[(2)] = inst_17522);

(statearr_17530_18828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (1))){
var state_17528__$1 = state_17528;
var statearr_17531_18836 = state_17528__$1;
(statearr_17531_18836[(2)] = null);

(statearr_17531_18836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (4))){
var inst_17506 = (state_17528[(7)]);
var inst_17506__$1 = (state_17528[(2)]);
var inst_17507 = (inst_17506__$1 == null);
var state_17528__$1 = (function (){var statearr_17532 = state_17528;
(statearr_17532[(7)] = inst_17506__$1);

return statearr_17532;
})();
if(cljs.core.truth_(inst_17507)){
var statearr_17533_18837 = state_17528__$1;
(statearr_17533_18837[(1)] = (5));

} else {
var statearr_17534_18838 = state_17528__$1;
(statearr_17534_18838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (6))){
var inst_17506 = (state_17528[(7)]);
var inst_17513 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17506) : p.call(null,inst_17506));
var state_17528__$1 = state_17528;
if(cljs.core.truth_(inst_17513)){
var statearr_17535_18839 = state_17528__$1;
(statearr_17535_18839[(1)] = (8));

} else {
var statearr_17536_18841 = state_17528__$1;
(statearr_17536_18841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (3))){
var inst_17524 = (state_17528[(2)]);
var state_17528__$1 = state_17528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17528__$1,inst_17524);
} else {
if((state_val_17529 === (2))){
var state_17528__$1 = state_17528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17528__$1,(4),ch);
} else {
if((state_val_17529 === (11))){
var inst_17516 = (state_17528[(2)]);
var state_17528__$1 = state_17528;
var statearr_17540_18850 = state_17528__$1;
(statearr_17540_18850[(2)] = inst_17516);

(statearr_17540_18850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (9))){
var state_17528__$1 = state_17528;
var statearr_17541_18851 = state_17528__$1;
(statearr_17541_18851[(2)] = null);

(statearr_17541_18851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (5))){
var inst_17511 = cljs.core.async.close_BANG_(out);
var state_17528__$1 = state_17528;
var statearr_17542_18852 = state_17528__$1;
(statearr_17542_18852[(2)] = inst_17511);

(statearr_17542_18852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (10))){
var inst_17519 = (state_17528[(2)]);
var state_17528__$1 = (function (){var statearr_17543 = state_17528;
(statearr_17543[(8)] = inst_17519);

return statearr_17543;
})();
var statearr_17544_18853 = state_17528__$1;
(statearr_17544_18853[(2)] = null);

(statearr_17544_18853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17529 === (8))){
var inst_17506 = (state_17528[(7)]);
var state_17528__$1 = state_17528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17528__$1,(11),out,inst_17506);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14780__auto__ = null;
var cljs$core$async$state_machine__14780__auto____0 = (function (){
var statearr_17545 = [null,null,null,null,null,null,null,null,null];
(statearr_17545[(0)] = cljs$core$async$state_machine__14780__auto__);

(statearr_17545[(1)] = (1));

return statearr_17545;
});
var cljs$core$async$state_machine__14780__auto____1 = (function (state_17528){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_17528);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e17546){var ex__14783__auto__ = e17546;
var statearr_17547_18855 = state_17528;
(statearr_17547_18855[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_17528[(4)]))){
var statearr_17548_18856 = state_17528;
(statearr_17548_18856[(1)] = cljs.core.first((state_17528[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18857 = state_17528;
state_17528 = G__18857;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$state_machine__14780__auto__ = function(state_17528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14780__auto____1.call(this,state_17528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14780__auto____0;
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14780__auto____1;
return cljs$core$async$state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_17549 = f__15124__auto__();
(statearr_17549[(6)] = c__15123__auto___18827);

return statearr_17549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17556 = arguments.length;
switch (G__17556) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15123__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_17629){
var state_val_17630 = (state_17629[(1)]);
if((state_val_17630 === (7))){
var inst_17625 = (state_17629[(2)]);
var state_17629__$1 = state_17629;
var statearr_17633_18864 = state_17629__$1;
(statearr_17633_18864[(2)] = inst_17625);

(statearr_17633_18864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (20))){
var inst_17584 = (state_17629[(7)]);
var inst_17606 = (state_17629[(2)]);
var inst_17607 = cljs.core.next(inst_17584);
var inst_17570 = inst_17607;
var inst_17571 = null;
var inst_17572 = (0);
var inst_17573 = (0);
var state_17629__$1 = (function (){var statearr_17638 = state_17629;
(statearr_17638[(8)] = inst_17571);

(statearr_17638[(9)] = inst_17570);

(statearr_17638[(10)] = inst_17572);

(statearr_17638[(11)] = inst_17573);

(statearr_17638[(12)] = inst_17606);

return statearr_17638;
})();
var statearr_17648_18865 = state_17629__$1;
(statearr_17648_18865[(2)] = null);

(statearr_17648_18865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (1))){
var state_17629__$1 = state_17629;
var statearr_17649_18866 = state_17629__$1;
(statearr_17649_18866[(2)] = null);

(statearr_17649_18866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (4))){
var inst_17559 = (state_17629[(13)]);
var inst_17559__$1 = (state_17629[(2)]);
var inst_17560 = (inst_17559__$1 == null);
var state_17629__$1 = (function (){var statearr_17653 = state_17629;
(statearr_17653[(13)] = inst_17559__$1);

return statearr_17653;
})();
if(cljs.core.truth_(inst_17560)){
var statearr_17654_18867 = state_17629__$1;
(statearr_17654_18867[(1)] = (5));

} else {
var statearr_17655_18868 = state_17629__$1;
(statearr_17655_18868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (15))){
var state_17629__$1 = state_17629;
var statearr_17660_18869 = state_17629__$1;
(statearr_17660_18869[(2)] = null);

(statearr_17660_18869[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (21))){
var state_17629__$1 = state_17629;
var statearr_17661_18870 = state_17629__$1;
(statearr_17661_18870[(2)] = null);

(statearr_17661_18870[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (13))){
var inst_17571 = (state_17629[(8)]);
var inst_17570 = (state_17629[(9)]);
var inst_17572 = (state_17629[(10)]);
var inst_17573 = (state_17629[(11)]);
var inst_17580 = (state_17629[(2)]);
var inst_17581 = (inst_17573 + (1));
var tmp17657 = inst_17571;
var tmp17658 = inst_17570;
var tmp17659 = inst_17572;
var inst_17570__$1 = tmp17658;
var inst_17571__$1 = tmp17657;
var inst_17572__$1 = tmp17659;
var inst_17573__$1 = inst_17581;
var state_17629__$1 = (function (){var statearr_17662 = state_17629;
(statearr_17662[(8)] = inst_17571__$1);

(statearr_17662[(9)] = inst_17570__$1);

(statearr_17662[(10)] = inst_17572__$1);

(statearr_17662[(11)] = inst_17573__$1);

(statearr_17662[(14)] = inst_17580);

return statearr_17662;
})();
var statearr_17663_18872 = state_17629__$1;
(statearr_17663_18872[(2)] = null);

(statearr_17663_18872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (22))){
var state_17629__$1 = state_17629;
var statearr_17664_18873 = state_17629__$1;
(statearr_17664_18873[(2)] = null);

(statearr_17664_18873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (6))){
var inst_17559 = (state_17629[(13)]);
var inst_17568 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17559) : f.call(null,inst_17559));
var inst_17569 = cljs.core.seq(inst_17568);
var inst_17570 = inst_17569;
var inst_17571 = null;
var inst_17572 = (0);
var inst_17573 = (0);
var state_17629__$1 = (function (){var statearr_17665 = state_17629;
(statearr_17665[(8)] = inst_17571);

(statearr_17665[(9)] = inst_17570);

(statearr_17665[(10)] = inst_17572);

(statearr_17665[(11)] = inst_17573);

return statearr_17665;
})();
var statearr_17666_18874 = state_17629__$1;
(statearr_17666_18874[(2)] = null);

(statearr_17666_18874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (17))){
var inst_17584 = (state_17629[(7)]);
var inst_17591 = cljs.core.chunk_first(inst_17584);
var inst_17592 = cljs.core.chunk_rest(inst_17584);
var inst_17593 = cljs.core.count(inst_17591);
var inst_17570 = inst_17592;
var inst_17571 = inst_17591;
var inst_17572 = inst_17593;
var inst_17573 = (0);
var state_17629__$1 = (function (){var statearr_17667 = state_17629;
(statearr_17667[(8)] = inst_17571);

(statearr_17667[(9)] = inst_17570);

(statearr_17667[(10)] = inst_17572);

(statearr_17667[(11)] = inst_17573);

return statearr_17667;
})();
var statearr_17681_18876 = state_17629__$1;
(statearr_17681_18876[(2)] = null);

(statearr_17681_18876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (3))){
var inst_17627 = (state_17629[(2)]);
var state_17629__$1 = state_17629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17629__$1,inst_17627);
} else {
if((state_val_17630 === (12))){
var inst_17615 = (state_17629[(2)]);
var state_17629__$1 = state_17629;
var statearr_17721_18877 = state_17629__$1;
(statearr_17721_18877[(2)] = inst_17615);

(statearr_17721_18877[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (2))){
var state_17629__$1 = state_17629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17629__$1,(4),in$);
} else {
if((state_val_17630 === (23))){
var inst_17623 = (state_17629[(2)]);
var state_17629__$1 = state_17629;
var statearr_17722_18878 = state_17629__$1;
(statearr_17722_18878[(2)] = inst_17623);

(statearr_17722_18878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (19))){
var inst_17610 = (state_17629[(2)]);
var state_17629__$1 = state_17629;
var statearr_17726_18879 = state_17629__$1;
(statearr_17726_18879[(2)] = inst_17610);

(statearr_17726_18879[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (11))){
var inst_17584 = (state_17629[(7)]);
var inst_17570 = (state_17629[(9)]);
var inst_17584__$1 = cljs.core.seq(inst_17570);
var state_17629__$1 = (function (){var statearr_17727 = state_17629;
(statearr_17727[(7)] = inst_17584__$1);

return statearr_17727;
})();
if(inst_17584__$1){
var statearr_17729_18880 = state_17629__$1;
(statearr_17729_18880[(1)] = (14));

} else {
var statearr_17731_18881 = state_17629__$1;
(statearr_17731_18881[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (9))){
var inst_17617 = (state_17629[(2)]);
var inst_17618 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17629__$1 = (function (){var statearr_17733 = state_17629;
(statearr_17733[(15)] = inst_17617);

return statearr_17733;
})();
if(cljs.core.truth_(inst_17618)){
var statearr_17734_18882 = state_17629__$1;
(statearr_17734_18882[(1)] = (21));

} else {
var statearr_17735_18883 = state_17629__$1;
(statearr_17735_18883[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (5))){
var inst_17562 = cljs.core.async.close_BANG_(out);
var state_17629__$1 = state_17629;
var statearr_17737_18884 = state_17629__$1;
(statearr_17737_18884[(2)] = inst_17562);

(statearr_17737_18884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (14))){
var inst_17584 = (state_17629[(7)]);
var inst_17586 = cljs.core.chunked_seq_QMARK_(inst_17584);
var state_17629__$1 = state_17629;
if(inst_17586){
var statearr_17738_18885 = state_17629__$1;
(statearr_17738_18885[(1)] = (17));

} else {
var statearr_17739_18886 = state_17629__$1;
(statearr_17739_18886[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (16))){
var inst_17613 = (state_17629[(2)]);
var state_17629__$1 = state_17629;
var statearr_17740_18887 = state_17629__$1;
(statearr_17740_18887[(2)] = inst_17613);

(statearr_17740_18887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (10))){
var inst_17571 = (state_17629[(8)]);
var inst_17573 = (state_17629[(11)]);
var inst_17578 = cljs.core._nth(inst_17571,inst_17573);
var state_17629__$1 = state_17629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17629__$1,(13),out,inst_17578);
} else {
if((state_val_17630 === (18))){
var inst_17584 = (state_17629[(7)]);
var inst_17604 = cljs.core.first(inst_17584);
var state_17629__$1 = state_17629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17629__$1,(20),out,inst_17604);
} else {
if((state_val_17630 === (8))){
var inst_17572 = (state_17629[(10)]);
var inst_17573 = (state_17629[(11)]);
var inst_17575 = (inst_17573 < inst_17572);
var inst_17576 = inst_17575;
var state_17629__$1 = state_17629;
if(cljs.core.truth_(inst_17576)){
var statearr_17742_18888 = state_17629__$1;
(statearr_17742_18888[(1)] = (10));

} else {
var statearr_17743_18889 = state_17629__$1;
(statearr_17743_18889[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14780__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14780__auto____0 = (function (){
var statearr_17747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17747[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14780__auto__);

(statearr_17747[(1)] = (1));

return statearr_17747;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14780__auto____1 = (function (state_17629){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_17629);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e17748){var ex__14783__auto__ = e17748;
var statearr_17749_18892 = state_17629;
(statearr_17749_18892[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_17629[(4)]))){
var statearr_17750_18896 = state_17629;
(statearr_17750_18896[(1)] = cljs.core.first((state_17629[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18897 = state_17629;
state_17629 = G__18897;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14780__auto__ = function(state_17629){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14780__auto____1.call(this,state_17629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14780__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14780__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_17751 = f__15124__auto__();
(statearr_17751[(6)] = c__15123__auto__);

return statearr_17751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));

return c__15123__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17756 = arguments.length;
switch (G__17756) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17773 = arguments.length;
switch (G__17773) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17775 = arguments.length;
switch (G__17775) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15123__auto___18915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_17802){
var state_val_17803 = (state_17802[(1)]);
if((state_val_17803 === (7))){
var inst_17797 = (state_17802[(2)]);
var state_17802__$1 = state_17802;
var statearr_17807_18916 = state_17802__$1;
(statearr_17807_18916[(2)] = inst_17797);

(statearr_17807_18916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17803 === (1))){
var inst_17779 = null;
var state_17802__$1 = (function (){var statearr_17808 = state_17802;
(statearr_17808[(7)] = inst_17779);

return statearr_17808;
})();
var statearr_17810_18918 = state_17802__$1;
(statearr_17810_18918[(2)] = null);

(statearr_17810_18918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17803 === (4))){
var inst_17782 = (state_17802[(8)]);
var inst_17782__$1 = (state_17802[(2)]);
var inst_17783 = (inst_17782__$1 == null);
var inst_17784 = cljs.core.not(inst_17783);
var state_17802__$1 = (function (){var statearr_17814 = state_17802;
(statearr_17814[(8)] = inst_17782__$1);

return statearr_17814;
})();
if(inst_17784){
var statearr_17815_18919 = state_17802__$1;
(statearr_17815_18919[(1)] = (5));

} else {
var statearr_17816_18920 = state_17802__$1;
(statearr_17816_18920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17803 === (6))){
var state_17802__$1 = state_17802;
var statearr_17817_18921 = state_17802__$1;
(statearr_17817_18921[(2)] = null);

(statearr_17817_18921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17803 === (3))){
var inst_17799 = (state_17802[(2)]);
var inst_17800 = cljs.core.async.close_BANG_(out);
var state_17802__$1 = (function (){var statearr_17819 = state_17802;
(statearr_17819[(9)] = inst_17799);

return statearr_17819;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17802__$1,inst_17800);
} else {
if((state_val_17803 === (2))){
var state_17802__$1 = state_17802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17802__$1,(4),ch);
} else {
if((state_val_17803 === (11))){
var inst_17782 = (state_17802[(8)]);
var inst_17791 = (state_17802[(2)]);
var inst_17779 = inst_17782;
var state_17802__$1 = (function (){var statearr_17820 = state_17802;
(statearr_17820[(7)] = inst_17779);

(statearr_17820[(10)] = inst_17791);

return statearr_17820;
})();
var statearr_17821_18925 = state_17802__$1;
(statearr_17821_18925[(2)] = null);

(statearr_17821_18925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17803 === (9))){
var inst_17782 = (state_17802[(8)]);
var state_17802__$1 = state_17802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17802__$1,(11),out,inst_17782);
} else {
if((state_val_17803 === (5))){
var inst_17782 = (state_17802[(8)]);
var inst_17779 = (state_17802[(7)]);
var inst_17786 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17782,inst_17779);
var state_17802__$1 = state_17802;
if(inst_17786){
var statearr_17826_18931 = state_17802__$1;
(statearr_17826_18931[(1)] = (8));

} else {
var statearr_17827_18932 = state_17802__$1;
(statearr_17827_18932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17803 === (10))){
var inst_17794 = (state_17802[(2)]);
var state_17802__$1 = state_17802;
var statearr_17829_18933 = state_17802__$1;
(statearr_17829_18933[(2)] = inst_17794);

(statearr_17829_18933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17803 === (8))){
var inst_17779 = (state_17802[(7)]);
var tmp17824 = inst_17779;
var inst_17779__$1 = tmp17824;
var state_17802__$1 = (function (){var statearr_17830 = state_17802;
(statearr_17830[(7)] = inst_17779__$1);

return statearr_17830;
})();
var statearr_17831_18934 = state_17802__$1;
(statearr_17831_18934[(2)] = null);

(statearr_17831_18934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14780__auto__ = null;
var cljs$core$async$state_machine__14780__auto____0 = (function (){
var statearr_17832 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17832[(0)] = cljs$core$async$state_machine__14780__auto__);

(statearr_17832[(1)] = (1));

return statearr_17832;
});
var cljs$core$async$state_machine__14780__auto____1 = (function (state_17802){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_17802);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e17834){var ex__14783__auto__ = e17834;
var statearr_17835_18936 = state_17802;
(statearr_17835_18936[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_17802[(4)]))){
var statearr_17837_18937 = state_17802;
(statearr_17837_18937[(1)] = cljs.core.first((state_17802[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18938 = state_17802;
state_17802 = G__18938;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$state_machine__14780__auto__ = function(state_17802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14780__auto____1.call(this,state_17802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14780__auto____0;
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14780__auto____1;
return cljs$core$async$state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_17841 = f__15124__auto__();
(statearr_17841[(6)] = c__15123__auto___18915);

return statearr_17841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17844 = arguments.length;
switch (G__17844) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15123__auto___18940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_17889){
var state_val_17890 = (state_17889[(1)]);
if((state_val_17890 === (7))){
var inst_17885 = (state_17889[(2)]);
var state_17889__$1 = state_17889;
var statearr_17895_18942 = state_17889__$1;
(statearr_17895_18942[(2)] = inst_17885);

(statearr_17895_18942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (1))){
var inst_17848 = (new Array(n));
var inst_17849 = inst_17848;
var inst_17850 = (0);
var state_17889__$1 = (function (){var statearr_17896 = state_17889;
(statearr_17896[(7)] = inst_17849);

(statearr_17896[(8)] = inst_17850);

return statearr_17896;
})();
var statearr_17897_18946 = state_17889__$1;
(statearr_17897_18946[(2)] = null);

(statearr_17897_18946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (4))){
var inst_17854 = (state_17889[(9)]);
var inst_17854__$1 = (state_17889[(2)]);
var inst_17858 = (inst_17854__$1 == null);
var inst_17859 = cljs.core.not(inst_17858);
var state_17889__$1 = (function (){var statearr_17898 = state_17889;
(statearr_17898[(9)] = inst_17854__$1);

return statearr_17898;
})();
if(inst_17859){
var statearr_17899_18947 = state_17889__$1;
(statearr_17899_18947[(1)] = (5));

} else {
var statearr_17900_18948 = state_17889__$1;
(statearr_17900_18948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (15))){
var inst_17879 = (state_17889[(2)]);
var state_17889__$1 = state_17889;
var statearr_17901_18949 = state_17889__$1;
(statearr_17901_18949[(2)] = inst_17879);

(statearr_17901_18949[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (13))){
var state_17889__$1 = state_17889;
var statearr_17902_18950 = state_17889__$1;
(statearr_17902_18950[(2)] = null);

(statearr_17902_18950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (6))){
var inst_17850 = (state_17889[(8)]);
var inst_17875 = (inst_17850 > (0));
var state_17889__$1 = state_17889;
if(cljs.core.truth_(inst_17875)){
var statearr_17903_18951 = state_17889__$1;
(statearr_17903_18951[(1)] = (12));

} else {
var statearr_17904_18952 = state_17889__$1;
(statearr_17904_18952[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (3))){
var inst_17887 = (state_17889[(2)]);
var state_17889__$1 = state_17889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17889__$1,inst_17887);
} else {
if((state_val_17890 === (12))){
var inst_17849 = (state_17889[(7)]);
var inst_17877 = cljs.core.vec(inst_17849);
var state_17889__$1 = state_17889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17889__$1,(15),out,inst_17877);
} else {
if((state_val_17890 === (2))){
var state_17889__$1 = state_17889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17889__$1,(4),ch);
} else {
if((state_val_17890 === (11))){
var inst_17869 = (state_17889[(2)]);
var inst_17870 = (new Array(n));
var inst_17849 = inst_17870;
var inst_17850 = (0);
var state_17889__$1 = (function (){var statearr_17905 = state_17889;
(statearr_17905[(10)] = inst_17869);

(statearr_17905[(7)] = inst_17849);

(statearr_17905[(8)] = inst_17850);

return statearr_17905;
})();
var statearr_17906_18960 = state_17889__$1;
(statearr_17906_18960[(2)] = null);

(statearr_17906_18960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (9))){
var inst_17849 = (state_17889[(7)]);
var inst_17867 = cljs.core.vec(inst_17849);
var state_17889__$1 = state_17889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17889__$1,(11),out,inst_17867);
} else {
if((state_val_17890 === (5))){
var inst_17862 = (state_17889[(11)]);
var inst_17849 = (state_17889[(7)]);
var inst_17854 = (state_17889[(9)]);
var inst_17850 = (state_17889[(8)]);
var inst_17861 = (inst_17849[inst_17850] = inst_17854);
var inst_17862__$1 = (inst_17850 + (1));
var inst_17863 = (inst_17862__$1 < n);
var state_17889__$1 = (function (){var statearr_17907 = state_17889;
(statearr_17907[(11)] = inst_17862__$1);

(statearr_17907[(12)] = inst_17861);

return statearr_17907;
})();
if(cljs.core.truth_(inst_17863)){
var statearr_17908_18967 = state_17889__$1;
(statearr_17908_18967[(1)] = (8));

} else {
var statearr_17910_18968 = state_17889__$1;
(statearr_17910_18968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (14))){
var inst_17882 = (state_17889[(2)]);
var inst_17883 = cljs.core.async.close_BANG_(out);
var state_17889__$1 = (function (){var statearr_17913 = state_17889;
(statearr_17913[(13)] = inst_17882);

return statearr_17913;
})();
var statearr_17914_18969 = state_17889__$1;
(statearr_17914_18969[(2)] = inst_17883);

(statearr_17914_18969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (10))){
var inst_17873 = (state_17889[(2)]);
var state_17889__$1 = state_17889;
var statearr_17915_18970 = state_17889__$1;
(statearr_17915_18970[(2)] = inst_17873);

(statearr_17915_18970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17890 === (8))){
var inst_17862 = (state_17889[(11)]);
var inst_17849 = (state_17889[(7)]);
var tmp17911 = inst_17849;
var inst_17849__$1 = tmp17911;
var inst_17850 = inst_17862;
var state_17889__$1 = (function (){var statearr_17916 = state_17889;
(statearr_17916[(7)] = inst_17849__$1);

(statearr_17916[(8)] = inst_17850);

return statearr_17916;
})();
var statearr_17917_18974 = state_17889__$1;
(statearr_17917_18974[(2)] = null);

(statearr_17917_18974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14780__auto__ = null;
var cljs$core$async$state_machine__14780__auto____0 = (function (){
var statearr_17918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17918[(0)] = cljs$core$async$state_machine__14780__auto__);

(statearr_17918[(1)] = (1));

return statearr_17918;
});
var cljs$core$async$state_machine__14780__auto____1 = (function (state_17889){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_17889);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e17922){var ex__14783__auto__ = e17922;
var statearr_17923_18981 = state_17889;
(statearr_17923_18981[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_17889[(4)]))){
var statearr_17924_18982 = state_17889;
(statearr_17924_18982[(1)] = cljs.core.first((state_17889[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18986 = state_17889;
state_17889 = G__18986;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$state_machine__14780__auto__ = function(state_17889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14780__auto____1.call(this,state_17889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14780__auto____0;
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14780__auto____1;
return cljs$core$async$state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_17925 = f__15124__auto__();
(statearr_17925[(6)] = c__15123__auto___18940);

return statearr_17925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17927 = arguments.length;
switch (G__17927) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15123__auto___18995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15124__auto__ = (function (){var switch__14779__auto__ = (function (state_17975){
var state_val_17977 = (state_17975[(1)]);
if((state_val_17977 === (7))){
var inst_17971 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
var statearr_17984_19002 = state_17975__$1;
(statearr_17984_19002[(2)] = inst_17971);

(statearr_17984_19002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17977 === (1))){
var inst_17931 = [];
var inst_17932 = inst_17931;
var inst_17933 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17975__$1 = (function (){var statearr_17985 = state_17975;
(statearr_17985[(7)] = inst_17932);

(statearr_17985[(8)] = inst_17933);

return statearr_17985;
})();
var statearr_17986_19013 = state_17975__$1;
(statearr_17986_19013[(2)] = null);

(statearr_17986_19013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17977 === (4))){
var inst_17936 = (state_17975[(9)]);
var inst_17936__$1 = (state_17975[(2)]);
var inst_17937 = (inst_17936__$1 == null);
var inst_17938 = cljs.core.not(inst_17937);
var state_17975__$1 = (function (){var statearr_17987 = state_17975;
(statearr_17987[(9)] = inst_17936__$1);

return statearr_17987;
})();
if(inst_17938){
var statearr_17988_19023 = state_17975__$1;
(statearr_17988_19023[(1)] = (5));

} else {
var statearr_17989_19024 = state_17975__$1;
(statearr_17989_19024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17977 === (15))){
var inst_17932 = (state_17975[(7)]);
var inst_17963 = cljs.core.vec(inst_17932);
var state_17975__$1 = state_17975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17975__$1,(18),out,inst_17963);
} else {
if((state_val_17977 === (13))){
var inst_17958 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
var statearr_17990_19025 = state_17975__$1;
(statearr_17990_19025[(2)] = inst_17958);

(statearr_17990_19025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17977 === (6))){
var inst_17932 = (state_17975[(7)]);
var inst_17960 = inst_17932.length;
var inst_17961 = (inst_17960 > (0));
var state_17975__$1 = state_17975;
if(cljs.core.truth_(inst_17961)){
var statearr_17991_19026 = state_17975__$1;
(statearr_17991_19026[(1)] = (15));

} else {
var statearr_17992_19027 = state_17975__$1;
(statearr_17992_19027[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17977 === (17))){
var inst_17968 = (state_17975[(2)]);
var inst_17969 = cljs.core.async.close_BANG_(out);
var state_17975__$1 = (function (){var statearr_17997 = state_17975;
(statearr_17997[(10)] = inst_17968);

return statearr_17997;
})();
var statearr_17998_19031 = state_17975__$1;
(statearr_17998_19031[(2)] = inst_17969);

(statearr_17998_19031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17977 === (3))){
var inst_17973 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17975__$1,inst_17973);
} else {
if((state_val_17977 === (12))){
var inst_17932 = (state_17975[(7)]);
var inst_17951 = cljs.core.vec(inst_17932);
var state_17975__$1 = state_17975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17975__$1,(14),out,inst_17951);
} else {
if((state_val_17977 === (2))){
var state_17975__$1 = state_17975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17975__$1,(4),ch);
} else {
if((state_val_17977 === (11))){
var inst_17936 = (state_17975[(9)]);
var inst_17932 = (state_17975[(7)]);
var inst_17940 = (state_17975[(11)]);
var inst_17948 = inst_17932.push(inst_17936);
var tmp17999 = inst_17932;
var inst_17932__$1 = tmp17999;
var inst_17933 = inst_17940;
var state_17975__$1 = (function (){var statearr_18000 = state_17975;
(statearr_18000[(7)] = inst_17932__$1);

(statearr_18000[(8)] = inst_17933);

(statearr_18000[(12)] = inst_17948);

return statearr_18000;
})();
var statearr_18001_19035 = state_17975__$1;
(statearr_18001_19035[(2)] = null);

(statearr_18001_19035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17977 === (9))){
var inst_17933 = (state_17975[(8)]);
var inst_17944 = cljs.core.keyword_identical_QMARK_(inst_17933,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17975__$1 = state_17975;
var statearr_18002_19036 = state_17975__$1;
(statearr_18002_19036[(2)] = inst_17944);

(statearr_18002_19036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17977 === (5))){
var inst_17936 = (state_17975[(9)]);
var inst_17941 = (state_17975[(13)]);
var inst_17933 = (state_17975[(8)]);
var inst_17940 = (state_17975[(11)]);
var inst_17940__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17936) : f.call(null,inst_17936));
var inst_17941__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17940__$1,inst_17933);
var state_17975__$1 = (function (){var statearr_18003 = state_17975;
(statearr_18003[(13)] = inst_17941__$1);

(statearr_18003[(11)] = inst_17940__$1);

return statearr_18003;
})();
if(inst_17941__$1){
var statearr_18004_19037 = state_17975__$1;
(statearr_18004_19037[(1)] = (8));

} else {
var statearr_18005_19038 = state_17975__$1;
(statearr_18005_19038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17977 === (14))){
var inst_17936 = (state_17975[(9)]);
var inst_17940 = (state_17975[(11)]);
var inst_17953 = (state_17975[(2)]);
var inst_17954 = [];
var inst_17955 = inst_17954.push(inst_17936);
var inst_17932 = inst_17954;
var inst_17933 = inst_17940;
var state_17975__$1 = (function (){var statearr_18006 = state_17975;
(statearr_18006[(7)] = inst_17932);

(statearr_18006[(8)] = inst_17933);

(statearr_18006[(14)] = inst_17953);

(statearr_18006[(15)] = inst_17955);

return statearr_18006;
})();
var statearr_18007_19042 = state_17975__$1;
(statearr_18007_19042[(2)] = null);

(statearr_18007_19042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17977 === (16))){
var state_17975__$1 = state_17975;
var statearr_18008_19043 = state_17975__$1;
(statearr_18008_19043[(2)] = null);

(statearr_18008_19043[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17977 === (10))){
var inst_17946 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
if(cljs.core.truth_(inst_17946)){
var statearr_18009_19044 = state_17975__$1;
(statearr_18009_19044[(1)] = (11));

} else {
var statearr_18010_19045 = state_17975__$1;
(statearr_18010_19045[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17977 === (18))){
var inst_17965 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
var statearr_18011_19046 = state_17975__$1;
(statearr_18011_19046[(2)] = inst_17965);

(statearr_18011_19046[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17977 === (8))){
var inst_17941 = (state_17975[(13)]);
var state_17975__$1 = state_17975;
var statearr_18012_19047 = state_17975__$1;
(statearr_18012_19047[(2)] = inst_17941);

(statearr_18012_19047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14780__auto__ = null;
var cljs$core$async$state_machine__14780__auto____0 = (function (){
var statearr_18013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18013[(0)] = cljs$core$async$state_machine__14780__auto__);

(statearr_18013[(1)] = (1));

return statearr_18013;
});
var cljs$core$async$state_machine__14780__auto____1 = (function (state_17975){
while(true){
var ret_value__14781__auto__ = (function (){try{while(true){
var result__14782__auto__ = switch__14779__auto__(state_17975);
if(cljs.core.keyword_identical_QMARK_(result__14782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14782__auto__;
}
break;
}
}catch (e18028){var ex__14783__auto__ = e18028;
var statearr_18029_19048 = state_17975;
(statearr_18029_19048[(2)] = ex__14783__auto__);


if(cljs.core.seq((state_17975[(4)]))){
var statearr_18030_19049 = state_17975;
(statearr_18030_19049[(1)] = cljs.core.first((state_17975[(4)])));

} else {
throw ex__14783__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19050 = state_17975;
state_17975 = G__19050;
continue;
} else {
return ret_value__14781__auto__;
}
break;
}
});
cljs$core$async$state_machine__14780__auto__ = function(state_17975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14780__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14780__auto____1.call(this,state_17975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14780__auto____0;
cljs$core$async$state_machine__14780__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14780__auto____1;
return cljs$core$async$state_machine__14780__auto__;
})()
})();
var state__15125__auto__ = (function (){var statearr_18040 = f__15124__auto__();
(statearr_18040[(6)] = c__15123__auto___18995);

return statearr_18040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15125__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
