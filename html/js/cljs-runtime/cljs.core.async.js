goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28527 = arguments.length;
switch (G__28527) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28532 = (function (f,blockable,meta28533){
this.f = f;
this.blockable = blockable;
this.meta28533 = meta28533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28534,meta28533__$1){
var self__ = this;
var _28534__$1 = this;
return (new cljs.core.async.t_cljs$core$async28532(self__.f,self__.blockable,meta28533__$1));
}));

(cljs.core.async.t_cljs$core$async28532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28534){
var self__ = this;
var _28534__$1 = this;
return self__.meta28533;
}));

(cljs.core.async.t_cljs$core$async28532.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28532.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28532.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28532.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28533","meta28533",-567408945,null)], null);
}));

(cljs.core.async.t_cljs$core$async28532.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28532");

(cljs.core.async.t_cljs$core$async28532.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async28532");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28532.
 */
cljs.core.async.__GT_t_cljs$core$async28532 = (function cljs$core$async$__GT_t_cljs$core$async28532(f__$1,blockable__$1,meta28533){
return (new cljs.core.async.t_cljs$core$async28532(f__$1,blockable__$1,meta28533));
});

}

return (new cljs.core.async.t_cljs$core$async28532(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28620 = arguments.length;
switch (G__28620) {
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
var G__28632 = arguments.length;
switch (G__28632) {
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
var G__28649 = arguments.length;
switch (G__28649) {
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
var val_31349 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31349) : fn1.call(null,val_31349));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31349) : fn1.call(null,val_31349));
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
var G__28681 = arguments.length;
switch (G__28681) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
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
var n__4666__auto___31356 = n;
var x_31357 = (0);
while(true){
if((x_31357 < n__4666__auto___31356)){
(a[x_31357] = x_31357);

var G__31359 = (x_31357 + (1));
x_31357 = G__31359;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28719 = (function (flag,meta28720){
this.flag = flag;
this.meta28720 = meta28720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28721,meta28720__$1){
var self__ = this;
var _28721__$1 = this;
return (new cljs.core.async.t_cljs$core$async28719(self__.flag,meta28720__$1));
}));

(cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28721){
var self__ = this;
var _28721__$1 = this;
return self__.meta28720;
}));

(cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28720","meta28720",-902012297,null)], null);
}));

(cljs.core.async.t_cljs$core$async28719.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28719");

(cljs.core.async.t_cljs$core$async28719.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async28719");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28719.
 */
cljs.core.async.__GT_t_cljs$core$async28719 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28719(flag__$1,meta28720){
return (new cljs.core.async.t_cljs$core$async28719(flag__$1,meta28720));
});

}

return (new cljs.core.async.t_cljs$core$async28719(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28756 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28756 = (function (flag,cb,meta28757){
this.flag = flag;
this.cb = cb;
this.meta28757 = meta28757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28758,meta28757__$1){
var self__ = this;
var _28758__$1 = this;
return (new cljs.core.async.t_cljs$core$async28756(self__.flag,self__.cb,meta28757__$1));
}));

(cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28758){
var self__ = this;
var _28758__$1 = this;
return self__.meta28757;
}));

(cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28757","meta28757",487521364,null)], null);
}));

(cljs.core.async.t_cljs$core$async28756.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28756");

(cljs.core.async.t_cljs$core$async28756.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async28756");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28756.
 */
cljs.core.async.__GT_t_cljs$core$async28756 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28756(flag__$1,cb__$1,meta28757){
return (new cljs.core.async.t_cljs$core$async28756(flag__$1,cb__$1,meta28757));
});

}

return (new cljs.core.async.t_cljs$core$async28756(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28776_SHARP_){
var G__28783 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28776_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28783) : fret.call(null,G__28783));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28777_SHARP_){
var G__28784 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28777_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28784) : fret.call(null,G__28784));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31408 = (i + (1));
i = G__31408;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4795__auto__ = [];
var len__4789__auto___31412 = arguments.length;
var i__4790__auto___31419 = (0);
while(true){
if((i__4790__auto___31419 < len__4789__auto___31412)){
args__4795__auto__.push((arguments[i__4790__auto___31419]));

var G__31420 = (i__4790__auto___31419 + (1));
i__4790__auto___31419 = G__31420;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28791){
var map__28796 = p__28791;
var map__28796__$1 = (((((!((map__28796 == null))))?(((((map__28796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28796):map__28796);
var opts = map__28796__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28787){
var G__28788 = cljs.core.first(seq28787);
var seq28787__$1 = cljs.core.next(seq28787);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28788,seq28787__$1);
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
var G__28807 = arguments.length;
switch (G__28807) {
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
var c__28418__auto___31436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_28848){
var state_val_28849 = (state_28848[(1)]);
if((state_val_28849 === (7))){
var inst_28844 = (state_28848[(2)]);
var state_28848__$1 = state_28848;
var statearr_28860_31441 = state_28848__$1;
(statearr_28860_31441[(2)] = inst_28844);

(statearr_28860_31441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28849 === (1))){
var state_28848__$1 = state_28848;
var statearr_28864_31444 = state_28848__$1;
(statearr_28864_31444[(2)] = null);

(statearr_28864_31444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28849 === (4))){
var inst_28822 = (state_28848[(7)]);
var inst_28822__$1 = (state_28848[(2)]);
var inst_28824 = (inst_28822__$1 == null);
var state_28848__$1 = (function (){var statearr_28867 = state_28848;
(statearr_28867[(7)] = inst_28822__$1);

return statearr_28867;
})();
if(cljs.core.truth_(inst_28824)){
var statearr_28871_31448 = state_28848__$1;
(statearr_28871_31448[(1)] = (5));

} else {
var statearr_28872_31450 = state_28848__$1;
(statearr_28872_31450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28849 === (13))){
var state_28848__$1 = state_28848;
var statearr_28874_31451 = state_28848__$1;
(statearr_28874_31451[(2)] = null);

(statearr_28874_31451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28849 === (6))){
var inst_28822 = (state_28848[(7)]);
var state_28848__$1 = state_28848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28848__$1,(11),to,inst_28822);
} else {
if((state_val_28849 === (3))){
var inst_28846 = (state_28848[(2)]);
var state_28848__$1 = state_28848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28848__$1,inst_28846);
} else {
if((state_val_28849 === (12))){
var state_28848__$1 = state_28848;
var statearr_28885_31455 = state_28848__$1;
(statearr_28885_31455[(2)] = null);

(statearr_28885_31455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28849 === (2))){
var state_28848__$1 = state_28848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28848__$1,(4),from);
} else {
if((state_val_28849 === (11))){
var inst_28833 = (state_28848[(2)]);
var state_28848__$1 = state_28848;
if(cljs.core.truth_(inst_28833)){
var statearr_28890_31457 = state_28848__$1;
(statearr_28890_31457[(1)] = (12));

} else {
var statearr_28891_31458 = state_28848__$1;
(statearr_28891_31458[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28849 === (9))){
var state_28848__$1 = state_28848;
var statearr_28893_31465 = state_28848__$1;
(statearr_28893_31465[(2)] = null);

(statearr_28893_31465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28849 === (5))){
var state_28848__$1 = state_28848;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28897_31468 = state_28848__$1;
(statearr_28897_31468[(1)] = (8));

} else {
var statearr_28898_31470 = state_28848__$1;
(statearr_28898_31470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28849 === (14))){
var inst_28842 = (state_28848[(2)]);
var state_28848__$1 = state_28848;
var statearr_28899_31471 = state_28848__$1;
(statearr_28899_31471[(2)] = inst_28842);

(statearr_28899_31471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28849 === (10))){
var inst_28830 = (state_28848[(2)]);
var state_28848__$1 = state_28848;
var statearr_28900_31472 = state_28848__$1;
(statearr_28900_31472[(2)] = inst_28830);

(statearr_28900_31472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28849 === (8))){
var inst_28827 = cljs.core.async.close_BANG_(to);
var state_28848__$1 = state_28848;
var statearr_28906_31477 = state_28848__$1;
(statearr_28906_31477[(2)] = inst_28827);

(statearr_28906_31477[(1)] = (10));


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
var cljs$core$async$state_machine__28058__auto__ = null;
var cljs$core$async$state_machine__28058__auto____0 = (function (){
var statearr_28911 = [null,null,null,null,null,null,null,null];
(statearr_28911[(0)] = cljs$core$async$state_machine__28058__auto__);

(statearr_28911[(1)] = (1));

return statearr_28911;
});
var cljs$core$async$state_machine__28058__auto____1 = (function (state_28848){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_28848);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e28914){if((e28914 instanceof Object)){
var ex__28061__auto__ = e28914;
var statearr_28921_31482 = state_28848;
(statearr_28921_31482[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28914;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31485 = state_28848;
state_28848 = G__31485;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$state_machine__28058__auto__ = function(state_28848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28058__auto____1.call(this,state_28848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28058__auto____0;
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28058__auto____1;
return cljs$core$async$state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_28931 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_28931[(6)] = c__28418__auto___31436);

return statearr_28931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
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
var process = (function (p__28932){
var vec__28933 = p__28932;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28933,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28933,(1),null);
var job = vec__28933;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28418__auto___31495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_28940){
var state_val_28941 = (state_28940[(1)]);
if((state_val_28941 === (1))){
var state_28940__$1 = state_28940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28940__$1,(2),res,v);
} else {
if((state_val_28941 === (2))){
var inst_28937 = (state_28940[(2)]);
var inst_28938 = cljs.core.async.close_BANG_(res);
var state_28940__$1 = (function (){var statearr_28954 = state_28940;
(statearr_28954[(7)] = inst_28937);

return statearr_28954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28940__$1,inst_28938);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____0 = (function (){
var statearr_28955 = [null,null,null,null,null,null,null,null];
(statearr_28955[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__);

(statearr_28955[(1)] = (1));

return statearr_28955;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____1 = (function (state_28940){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_28940);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e28956){if((e28956 instanceof Object)){
var ex__28061__auto__ = e28956;
var statearr_28958_31508 = state_28940;
(statearr_28958_31508[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28956;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31510 = state_28940;
state_28940 = G__31510;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__ = function(state_28940){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____1.call(this,state_28940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_28959 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_28959[(6)] = c__28418__auto___31495);

return statearr_28959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__28960){
var vec__28961 = p__28960;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28961,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28961,(1),null);
var job = vec__28961;
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
var n__4666__auto___31527 = n;
var __31528 = (0);
while(true){
if((__31528 < n__4666__auto___31527)){
var G__28964_31529 = type;
var G__28964_31530__$1 = (((G__28964_31529 instanceof cljs.core.Keyword))?G__28964_31529.fqn:null);
switch (G__28964_31530__$1) {
case "compute":
var c__28418__auto___31534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31528,c__28418__auto___31534,G__28964_31529,G__28964_31530__$1,n__4666__auto___31527,jobs,results,process,async){
return (function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = ((function (__31528,c__28418__auto___31534,G__28964_31529,G__28964_31530__$1,n__4666__auto___31527,jobs,results,process,async){
return (function (state_28979){
var state_val_28980 = (state_28979[(1)]);
if((state_val_28980 === (1))){
var state_28979__$1 = state_28979;
var statearr_28981_31540 = state_28979__$1;
(statearr_28981_31540[(2)] = null);

(statearr_28981_31540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (2))){
var state_28979__$1 = state_28979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28979__$1,(4),jobs);
} else {
if((state_val_28980 === (3))){
var inst_28977 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28979__$1,inst_28977);
} else {
if((state_val_28980 === (4))){
var inst_28969 = (state_28979[(2)]);
var inst_28970 = process(inst_28969);
var state_28979__$1 = state_28979;
if(cljs.core.truth_(inst_28970)){
var statearr_28982_31552 = state_28979__$1;
(statearr_28982_31552[(1)] = (5));

} else {
var statearr_28984_31553 = state_28979__$1;
(statearr_28984_31553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (5))){
var state_28979__$1 = state_28979;
var statearr_28985_31555 = state_28979__$1;
(statearr_28985_31555[(2)] = null);

(statearr_28985_31555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (6))){
var state_28979__$1 = state_28979;
var statearr_28986_31557 = state_28979__$1;
(statearr_28986_31557[(2)] = null);

(statearr_28986_31557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (7))){
var inst_28975 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
var statearr_28987_31560 = state_28979__$1;
(statearr_28987_31560[(2)] = inst_28975);

(statearr_28987_31560[(1)] = (3));


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
});})(__31528,c__28418__auto___31534,G__28964_31529,G__28964_31530__$1,n__4666__auto___31527,jobs,results,process,async))
;
return ((function (__31528,switch__28057__auto__,c__28418__auto___31534,G__28964_31529,G__28964_31530__$1,n__4666__auto___31527,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____0 = (function (){
var statearr_28988 = [null,null,null,null,null,null,null];
(statearr_28988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__);

(statearr_28988[(1)] = (1));

return statearr_28988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____1 = (function (state_28979){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_28979);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e28989){if((e28989 instanceof Object)){
var ex__28061__auto__ = e28989;
var statearr_28990_31562 = state_28979;
(statearr_28990_31562[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28989;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31565 = state_28979;
state_28979 = G__31565;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__ = function(state_28979){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____1.call(this,state_28979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__;
})()
;})(__31528,switch__28057__auto__,c__28418__auto___31534,G__28964_31529,G__28964_31530__$1,n__4666__auto___31527,jobs,results,process,async))
})();
var state__28420__auto__ = (function (){var statearr_28994 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_28994[(6)] = c__28418__auto___31534);

return statearr_28994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
});})(__31528,c__28418__auto___31534,G__28964_31529,G__28964_31530__$1,n__4666__auto___31527,jobs,results,process,async))
);


break;
case "async":
var c__28418__auto___31568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31528,c__28418__auto___31568,G__28964_31529,G__28964_31530__$1,n__4666__auto___31527,jobs,results,process,async){
return (function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = ((function (__31528,c__28418__auto___31568,G__28964_31529,G__28964_31530__$1,n__4666__auto___31527,jobs,results,process,async){
return (function (state_29009){
var state_val_29010 = (state_29009[(1)]);
if((state_val_29010 === (1))){
var state_29009__$1 = state_29009;
var statearr_29011_31577 = state_29009__$1;
(statearr_29011_31577[(2)] = null);

(statearr_29011_31577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (2))){
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29009__$1,(4),jobs);
} else {
if((state_val_29010 === (3))){
var inst_29006 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29009__$1,inst_29006);
} else {
if((state_val_29010 === (4))){
var inst_28998 = (state_29009[(2)]);
var inst_28999 = async(inst_28998);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28999)){
var statearr_29016_31584 = state_29009__$1;
(statearr_29016_31584[(1)] = (5));

} else {
var statearr_29017_31585 = state_29009__$1;
(statearr_29017_31585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (5))){
var state_29009__$1 = state_29009;
var statearr_29018_31588 = state_29009__$1;
(statearr_29018_31588[(2)] = null);

(statearr_29018_31588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (6))){
var state_29009__$1 = state_29009;
var statearr_29019_31590 = state_29009__$1;
(statearr_29019_31590[(2)] = null);

(statearr_29019_31590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (7))){
var inst_29004 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29020_31594 = state_29009__$1;
(statearr_29020_31594[(2)] = inst_29004);

(statearr_29020_31594[(1)] = (3));


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
});})(__31528,c__28418__auto___31568,G__28964_31529,G__28964_31530__$1,n__4666__auto___31527,jobs,results,process,async))
;
return ((function (__31528,switch__28057__auto__,c__28418__auto___31568,G__28964_31529,G__28964_31530__$1,n__4666__auto___31527,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____0 = (function (){
var statearr_29023 = [null,null,null,null,null,null,null];
(statearr_29023[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__);

(statearr_29023[(1)] = (1));

return statearr_29023;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____1 = (function (state_29009){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_29009);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e29024){if((e29024 instanceof Object)){
var ex__28061__auto__ = e29024;
var statearr_29025_31602 = state_29009;
(statearr_29025_31602[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29024;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31603 = state_29009;
state_29009 = G__31603;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__ = function(state_29009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____1.call(this,state_29009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__;
})()
;})(__31528,switch__28057__auto__,c__28418__auto___31568,G__28964_31529,G__28964_31530__$1,n__4666__auto___31527,jobs,results,process,async))
})();
var state__28420__auto__ = (function (){var statearr_29030 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_29030[(6)] = c__28418__auto___31568);

return statearr_29030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
});})(__31528,c__28418__auto___31568,G__28964_31529,G__28964_31530__$1,n__4666__auto___31527,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28964_31530__$1)].join('')));

}

var G__31608 = (__31528 + (1));
__31528 = G__31608;
continue;
} else {
}
break;
}

var c__28418__auto___31609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_29058){
var state_val_29059 = (state_29058[(1)]);
if((state_val_29059 === (7))){
var inst_29054 = (state_29058[(2)]);
var state_29058__$1 = state_29058;
var statearr_29062_31610 = state_29058__$1;
(statearr_29062_31610[(2)] = inst_29054);

(statearr_29062_31610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (1))){
var state_29058__$1 = state_29058;
var statearr_29063_31611 = state_29058__$1;
(statearr_29063_31611[(2)] = null);

(statearr_29063_31611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (4))){
var inst_29039 = (state_29058[(7)]);
var inst_29039__$1 = (state_29058[(2)]);
var inst_29040 = (inst_29039__$1 == null);
var state_29058__$1 = (function (){var statearr_29064 = state_29058;
(statearr_29064[(7)] = inst_29039__$1);

return statearr_29064;
})();
if(cljs.core.truth_(inst_29040)){
var statearr_29065_31617 = state_29058__$1;
(statearr_29065_31617[(1)] = (5));

} else {
var statearr_29066_31618 = state_29058__$1;
(statearr_29066_31618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (6))){
var inst_29039 = (state_29058[(7)]);
var inst_29044 = (state_29058[(8)]);
var inst_29044__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29045 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29046 = [inst_29039,inst_29044__$1];
var inst_29047 = (new cljs.core.PersistentVector(null,2,(5),inst_29045,inst_29046,null));
var state_29058__$1 = (function (){var statearr_29067 = state_29058;
(statearr_29067[(8)] = inst_29044__$1);

return statearr_29067;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29058__$1,(8),jobs,inst_29047);
} else {
if((state_val_29059 === (3))){
var inst_29056 = (state_29058[(2)]);
var state_29058__$1 = state_29058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29058__$1,inst_29056);
} else {
if((state_val_29059 === (2))){
var state_29058__$1 = state_29058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29058__$1,(4),from);
} else {
if((state_val_29059 === (9))){
var inst_29051 = (state_29058[(2)]);
var state_29058__$1 = (function (){var statearr_29071 = state_29058;
(statearr_29071[(9)] = inst_29051);

return statearr_29071;
})();
var statearr_29073_31624 = state_29058__$1;
(statearr_29073_31624[(2)] = null);

(statearr_29073_31624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (5))){
var inst_29042 = cljs.core.async.close_BANG_(jobs);
var state_29058__$1 = state_29058;
var statearr_29077_31627 = state_29058__$1;
(statearr_29077_31627[(2)] = inst_29042);

(statearr_29077_31627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29059 === (8))){
var inst_29044 = (state_29058[(8)]);
var inst_29049 = (state_29058[(2)]);
var state_29058__$1 = (function (){var statearr_29078 = state_29058;
(statearr_29078[(10)] = inst_29049);

return statearr_29078;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29058__$1,(9),results,inst_29044);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____0 = (function (){
var statearr_29080 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29080[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__);

(statearr_29080[(1)] = (1));

return statearr_29080;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____1 = (function (state_29058){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_29058);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e29081){if((e29081 instanceof Object)){
var ex__28061__auto__ = e29081;
var statearr_29082_31633 = state_29058;
(statearr_29082_31633[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29081;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31637 = state_29058;
state_29058 = G__31637;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__ = function(state_29058){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____1.call(this,state_29058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_29083 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_29083[(6)] = c__28418__auto___31609);

return statearr_29083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
}));


var c__28418__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_29124){
var state_val_29125 = (state_29124[(1)]);
if((state_val_29125 === (7))){
var inst_29120 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
var statearr_29126_31644 = state_29124__$1;
(statearr_29126_31644[(2)] = inst_29120);

(statearr_29126_31644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (20))){
var state_29124__$1 = state_29124;
var statearr_29127_31646 = state_29124__$1;
(statearr_29127_31646[(2)] = null);

(statearr_29127_31646[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (1))){
var state_29124__$1 = state_29124;
var statearr_29128_31649 = state_29124__$1;
(statearr_29128_31649[(2)] = null);

(statearr_29128_31649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (4))){
var inst_29086 = (state_29124[(7)]);
var inst_29086__$1 = (state_29124[(2)]);
var inst_29087 = (inst_29086__$1 == null);
var state_29124__$1 = (function (){var statearr_29132 = state_29124;
(statearr_29132[(7)] = inst_29086__$1);

return statearr_29132;
})();
if(cljs.core.truth_(inst_29087)){
var statearr_29134_31653 = state_29124__$1;
(statearr_29134_31653[(1)] = (5));

} else {
var statearr_29135_31654 = state_29124__$1;
(statearr_29135_31654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (15))){
var inst_29100 = (state_29124[(8)]);
var state_29124__$1 = state_29124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29124__$1,(18),to,inst_29100);
} else {
if((state_val_29125 === (21))){
var inst_29115 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
var statearr_29136_31658 = state_29124__$1;
(statearr_29136_31658[(2)] = inst_29115);

(statearr_29136_31658[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (13))){
var inst_29117 = (state_29124[(2)]);
var state_29124__$1 = (function (){var statearr_29137 = state_29124;
(statearr_29137[(9)] = inst_29117);

return statearr_29137;
})();
var statearr_29138_31659 = state_29124__$1;
(statearr_29138_31659[(2)] = null);

(statearr_29138_31659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (6))){
var inst_29086 = (state_29124[(7)]);
var state_29124__$1 = state_29124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29124__$1,(11),inst_29086);
} else {
if((state_val_29125 === (17))){
var inst_29110 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
if(cljs.core.truth_(inst_29110)){
var statearr_29141_31660 = state_29124__$1;
(statearr_29141_31660[(1)] = (19));

} else {
var statearr_29142_31662 = state_29124__$1;
(statearr_29142_31662[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (3))){
var inst_29122 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29124__$1,inst_29122);
} else {
if((state_val_29125 === (12))){
var inst_29097 = (state_29124[(10)]);
var state_29124__$1 = state_29124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29124__$1,(14),inst_29097);
} else {
if((state_val_29125 === (2))){
var state_29124__$1 = state_29124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29124__$1,(4),results);
} else {
if((state_val_29125 === (19))){
var state_29124__$1 = state_29124;
var statearr_29145_31665 = state_29124__$1;
(statearr_29145_31665[(2)] = null);

(statearr_29145_31665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (11))){
var inst_29097 = (state_29124[(2)]);
var state_29124__$1 = (function (){var statearr_29146 = state_29124;
(statearr_29146[(10)] = inst_29097);

return statearr_29146;
})();
var statearr_29147_31668 = state_29124__$1;
(statearr_29147_31668[(2)] = null);

(statearr_29147_31668[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (9))){
var state_29124__$1 = state_29124;
var statearr_29148_31670 = state_29124__$1;
(statearr_29148_31670[(2)] = null);

(statearr_29148_31670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (5))){
var state_29124__$1 = state_29124;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29149_31671 = state_29124__$1;
(statearr_29149_31671[(1)] = (8));

} else {
var statearr_29150_31672 = state_29124__$1;
(statearr_29150_31672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (14))){
var inst_29100 = (state_29124[(8)]);
var inst_29100__$1 = (state_29124[(2)]);
var inst_29103 = (inst_29100__$1 == null);
var inst_29104 = cljs.core.not(inst_29103);
var state_29124__$1 = (function (){var statearr_29157 = state_29124;
(statearr_29157[(8)] = inst_29100__$1);

return statearr_29157;
})();
if(inst_29104){
var statearr_29158_31673 = state_29124__$1;
(statearr_29158_31673[(1)] = (15));

} else {
var statearr_29159_31674 = state_29124__$1;
(statearr_29159_31674[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (16))){
var state_29124__$1 = state_29124;
var statearr_29160_31676 = state_29124__$1;
(statearr_29160_31676[(2)] = false);

(statearr_29160_31676[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (10))){
var inst_29093 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
var statearr_29161_31679 = state_29124__$1;
(statearr_29161_31679[(2)] = inst_29093);

(statearr_29161_31679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (18))){
var inst_29107 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
var statearr_29162_31685 = state_29124__$1;
(statearr_29162_31685[(2)] = inst_29107);

(statearr_29162_31685[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (8))){
var inst_29090 = cljs.core.async.close_BANG_(to);
var state_29124__$1 = state_29124;
var statearr_29163_31688 = state_29124__$1;
(statearr_29163_31688[(2)] = inst_29090);

(statearr_29163_31688[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____0 = (function (){
var statearr_29164 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__);

(statearr_29164[(1)] = (1));

return statearr_29164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____1 = (function (state_29124){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_29124);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e29165){if((e29165 instanceof Object)){
var ex__28061__auto__ = e29165;
var statearr_29166_31704 = state_29124;
(statearr_29166_31704[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29165;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31708 = state_29124;
state_29124 = G__31708;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__ = function(state_29124){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____1.call(this,state_29124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28058__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_29167 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_29167[(6)] = c__28418__auto__);

return statearr_29167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
}));

return c__28418__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29170 = arguments.length;
switch (G__29170) {
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
var G__29183 = arguments.length;
switch (G__29183) {
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
var G__29194 = arguments.length;
switch (G__29194) {
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
var c__28418__auto___31779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_29224){
var state_val_29225 = (state_29224[(1)]);
if((state_val_29225 === (7))){
var inst_29220 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
var statearr_29226_31785 = state_29224__$1;
(statearr_29226_31785[(2)] = inst_29220);

(statearr_29226_31785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (1))){
var state_29224__$1 = state_29224;
var statearr_29230_31790 = state_29224__$1;
(statearr_29230_31790[(2)] = null);

(statearr_29230_31790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (4))){
var inst_29201 = (state_29224[(7)]);
var inst_29201__$1 = (state_29224[(2)]);
var inst_29202 = (inst_29201__$1 == null);
var state_29224__$1 = (function (){var statearr_29231 = state_29224;
(statearr_29231[(7)] = inst_29201__$1);

return statearr_29231;
})();
if(cljs.core.truth_(inst_29202)){
var statearr_29232_31797 = state_29224__$1;
(statearr_29232_31797[(1)] = (5));

} else {
var statearr_29233_31798 = state_29224__$1;
(statearr_29233_31798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (13))){
var state_29224__$1 = state_29224;
var statearr_29238_31799 = state_29224__$1;
(statearr_29238_31799[(2)] = null);

(statearr_29238_31799[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (6))){
var inst_29201 = (state_29224[(7)]);
var inst_29207 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29201) : p.call(null,inst_29201));
var state_29224__$1 = state_29224;
if(cljs.core.truth_(inst_29207)){
var statearr_29240_31803 = state_29224__$1;
(statearr_29240_31803[(1)] = (9));

} else {
var statearr_29242_31804 = state_29224__$1;
(statearr_29242_31804[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (3))){
var inst_29222 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29224__$1,inst_29222);
} else {
if((state_val_29225 === (12))){
var state_29224__$1 = state_29224;
var statearr_29243_31809 = state_29224__$1;
(statearr_29243_31809[(2)] = null);

(statearr_29243_31809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (2))){
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29224__$1,(4),ch);
} else {
if((state_val_29225 === (11))){
var inst_29201 = (state_29224[(7)]);
var inst_29211 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29224__$1,(8),inst_29211,inst_29201);
} else {
if((state_val_29225 === (9))){
var state_29224__$1 = state_29224;
var statearr_29250_31812 = state_29224__$1;
(statearr_29250_31812[(2)] = tc);

(statearr_29250_31812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (5))){
var inst_29204 = cljs.core.async.close_BANG_(tc);
var inst_29205 = cljs.core.async.close_BANG_(fc);
var state_29224__$1 = (function (){var statearr_29254 = state_29224;
(statearr_29254[(8)] = inst_29204);

return statearr_29254;
})();
var statearr_29255_31817 = state_29224__$1;
(statearr_29255_31817[(2)] = inst_29205);

(statearr_29255_31817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (14))){
var inst_29218 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
var statearr_29263_31824 = state_29224__$1;
(statearr_29263_31824[(2)] = inst_29218);

(statearr_29263_31824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (10))){
var state_29224__$1 = state_29224;
var statearr_29265_31825 = state_29224__$1;
(statearr_29265_31825[(2)] = fc);

(statearr_29265_31825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (8))){
var inst_29213 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
if(cljs.core.truth_(inst_29213)){
var statearr_29267_31831 = state_29224__$1;
(statearr_29267_31831[(1)] = (12));

} else {
var statearr_29268_31832 = state_29224__$1;
(statearr_29268_31832[(1)] = (13));

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
var cljs$core$async$state_machine__28058__auto__ = null;
var cljs$core$async$state_machine__28058__auto____0 = (function (){
var statearr_29269 = [null,null,null,null,null,null,null,null,null];
(statearr_29269[(0)] = cljs$core$async$state_machine__28058__auto__);

(statearr_29269[(1)] = (1));

return statearr_29269;
});
var cljs$core$async$state_machine__28058__auto____1 = (function (state_29224){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_29224);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e29270){if((e29270 instanceof Object)){
var ex__28061__auto__ = e29270;
var statearr_29271_31840 = state_29224;
(statearr_29271_31840[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29270;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31847 = state_29224;
state_29224 = G__31847;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$state_machine__28058__auto__ = function(state_29224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28058__auto____1.call(this,state_29224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28058__auto____0;
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28058__auto____1;
return cljs$core$async$state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_29272 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_29272[(6)] = c__28418__auto___31779);

return statearr_29272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
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
var c__28418__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_29294){
var state_val_29295 = (state_29294[(1)]);
if((state_val_29295 === (7))){
var inst_29290 = (state_29294[(2)]);
var state_29294__$1 = state_29294;
var statearr_29301_31860 = state_29294__$1;
(statearr_29301_31860[(2)] = inst_29290);

(statearr_29301_31860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29295 === (1))){
var inst_29274 = init;
var state_29294__$1 = (function (){var statearr_29303 = state_29294;
(statearr_29303[(7)] = inst_29274);

return statearr_29303;
})();
var statearr_29304_31862 = state_29294__$1;
(statearr_29304_31862[(2)] = null);

(statearr_29304_31862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29295 === (4))){
var inst_29277 = (state_29294[(8)]);
var inst_29277__$1 = (state_29294[(2)]);
var inst_29278 = (inst_29277__$1 == null);
var state_29294__$1 = (function (){var statearr_29306 = state_29294;
(statearr_29306[(8)] = inst_29277__$1);

return statearr_29306;
})();
if(cljs.core.truth_(inst_29278)){
var statearr_29307_31874 = state_29294__$1;
(statearr_29307_31874[(1)] = (5));

} else {
var statearr_29308_31875 = state_29294__$1;
(statearr_29308_31875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29295 === (6))){
var inst_29274 = (state_29294[(7)]);
var inst_29281 = (state_29294[(9)]);
var inst_29277 = (state_29294[(8)]);
var inst_29281__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29274,inst_29277) : f.call(null,inst_29274,inst_29277));
var inst_29282 = cljs.core.reduced_QMARK_(inst_29281__$1);
var state_29294__$1 = (function (){var statearr_29309 = state_29294;
(statearr_29309[(9)] = inst_29281__$1);

return statearr_29309;
})();
if(inst_29282){
var statearr_29310_31893 = state_29294__$1;
(statearr_29310_31893[(1)] = (8));

} else {
var statearr_29311_31894 = state_29294__$1;
(statearr_29311_31894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29295 === (3))){
var inst_29292 = (state_29294[(2)]);
var state_29294__$1 = state_29294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29294__$1,inst_29292);
} else {
if((state_val_29295 === (2))){
var state_29294__$1 = state_29294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29294__$1,(4),ch);
} else {
if((state_val_29295 === (9))){
var inst_29281 = (state_29294[(9)]);
var inst_29274 = inst_29281;
var state_29294__$1 = (function (){var statearr_29316 = state_29294;
(statearr_29316[(7)] = inst_29274);

return statearr_29316;
})();
var statearr_29318_31904 = state_29294__$1;
(statearr_29318_31904[(2)] = null);

(statearr_29318_31904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29295 === (5))){
var inst_29274 = (state_29294[(7)]);
var state_29294__$1 = state_29294;
var statearr_29319_31913 = state_29294__$1;
(statearr_29319_31913[(2)] = inst_29274);

(statearr_29319_31913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29295 === (10))){
var inst_29288 = (state_29294[(2)]);
var state_29294__$1 = state_29294;
var statearr_29323_31921 = state_29294__$1;
(statearr_29323_31921[(2)] = inst_29288);

(statearr_29323_31921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29295 === (8))){
var inst_29281 = (state_29294[(9)]);
var inst_29284 = cljs.core.deref(inst_29281);
var state_29294__$1 = state_29294;
var statearr_29324_31933 = state_29294__$1;
(statearr_29324_31933[(2)] = inst_29284);

(statearr_29324_31933[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28058__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28058__auto____0 = (function (){
var statearr_29326 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29326[(0)] = cljs$core$async$reduce_$_state_machine__28058__auto__);

(statearr_29326[(1)] = (1));

return statearr_29326;
});
var cljs$core$async$reduce_$_state_machine__28058__auto____1 = (function (state_29294){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_29294);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e29327){if((e29327 instanceof Object)){
var ex__28061__auto__ = e29327;
var statearr_29328_31944 = state_29294;
(statearr_29328_31944[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31946 = state_29294;
state_29294 = G__31946;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28058__auto__ = function(state_29294){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28058__auto____1.call(this,state_29294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28058__auto____0;
cljs$core$async$reduce_$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28058__auto____1;
return cljs$core$async$reduce_$_state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_29334 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_29334[(6)] = c__28418__auto__);

return statearr_29334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
}));

return c__28418__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28418__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_29340){
var state_val_29341 = (state_29340[(1)]);
if((state_val_29341 === (1))){
var inst_29335 = cljs.core.async.reduce(f__$1,init,ch);
var state_29340__$1 = state_29340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29340__$1,(2),inst_29335);
} else {
if((state_val_29341 === (2))){
var inst_29337 = (state_29340[(2)]);
var inst_29338 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29337) : f__$1.call(null,inst_29337));
var state_29340__$1 = state_29340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29340__$1,inst_29338);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28058__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28058__auto____0 = (function (){
var statearr_29353 = [null,null,null,null,null,null,null];
(statearr_29353[(0)] = cljs$core$async$transduce_$_state_machine__28058__auto__);

(statearr_29353[(1)] = (1));

return statearr_29353;
});
var cljs$core$async$transduce_$_state_machine__28058__auto____1 = (function (state_29340){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_29340);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e29354){if((e29354 instanceof Object)){
var ex__28061__auto__ = e29354;
var statearr_29355_31966 = state_29340;
(statearr_29355_31966[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31972 = state_29340;
state_29340 = G__31972;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28058__auto__ = function(state_29340){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28058__auto____1.call(this,state_29340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28058__auto____0;
cljs$core$async$transduce_$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28058__auto____1;
return cljs$core$async$transduce_$_state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_29359 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_29359[(6)] = c__28418__auto__);

return statearr_29359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
}));

return c__28418__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29369 = arguments.length;
switch (G__29369) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28418__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_29399){
var state_val_29400 = (state_29399[(1)]);
if((state_val_29400 === (7))){
var inst_29380 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
var statearr_29402_31989 = state_29399__$1;
(statearr_29402_31989[(2)] = inst_29380);

(statearr_29402_31989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (1))){
var inst_29374 = cljs.core.seq(coll);
var inst_29375 = inst_29374;
var state_29399__$1 = (function (){var statearr_29404 = state_29399;
(statearr_29404[(7)] = inst_29375);

return statearr_29404;
})();
var statearr_29405_31993 = state_29399__$1;
(statearr_29405_31993[(2)] = null);

(statearr_29405_31993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (4))){
var inst_29375 = (state_29399[(7)]);
var inst_29378 = cljs.core.first(inst_29375);
var state_29399__$1 = state_29399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29399__$1,(7),ch,inst_29378);
} else {
if((state_val_29400 === (13))){
var inst_29393 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
var statearr_29407_31995 = state_29399__$1;
(statearr_29407_31995[(2)] = inst_29393);

(statearr_29407_31995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (6))){
var inst_29383 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
if(cljs.core.truth_(inst_29383)){
var statearr_29408_32001 = state_29399__$1;
(statearr_29408_32001[(1)] = (8));

} else {
var statearr_29409_32002 = state_29399__$1;
(statearr_29409_32002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (3))){
var inst_29397 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29399__$1,inst_29397);
} else {
if((state_val_29400 === (12))){
var state_29399__$1 = state_29399;
var statearr_29411_32007 = state_29399__$1;
(statearr_29411_32007[(2)] = null);

(statearr_29411_32007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (2))){
var inst_29375 = (state_29399[(7)]);
var state_29399__$1 = state_29399;
if(cljs.core.truth_(inst_29375)){
var statearr_29412_32009 = state_29399__$1;
(statearr_29412_32009[(1)] = (4));

} else {
var statearr_29413_32010 = state_29399__$1;
(statearr_29413_32010[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (11))){
var inst_29390 = cljs.core.async.close_BANG_(ch);
var state_29399__$1 = state_29399;
var statearr_29416_32015 = state_29399__$1;
(statearr_29416_32015[(2)] = inst_29390);

(statearr_29416_32015[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (9))){
var state_29399__$1 = state_29399;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29418_32017 = state_29399__$1;
(statearr_29418_32017[(1)] = (11));

} else {
var statearr_29420_32021 = state_29399__$1;
(statearr_29420_32021[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (5))){
var inst_29375 = (state_29399[(7)]);
var state_29399__$1 = state_29399;
var statearr_29421_32024 = state_29399__$1;
(statearr_29421_32024[(2)] = inst_29375);

(statearr_29421_32024[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (10))){
var inst_29395 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
var statearr_29422_32029 = state_29399__$1;
(statearr_29422_32029[(2)] = inst_29395);

(statearr_29422_32029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (8))){
var inst_29375 = (state_29399[(7)]);
var inst_29385 = cljs.core.next(inst_29375);
var inst_29375__$1 = inst_29385;
var state_29399__$1 = (function (){var statearr_29423 = state_29399;
(statearr_29423[(7)] = inst_29375__$1);

return statearr_29423;
})();
var statearr_29424_32032 = state_29399__$1;
(statearr_29424_32032[(2)] = null);

(statearr_29424_32032[(1)] = (2));


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
var cljs$core$async$state_machine__28058__auto__ = null;
var cljs$core$async$state_machine__28058__auto____0 = (function (){
var statearr_29429 = [null,null,null,null,null,null,null,null];
(statearr_29429[(0)] = cljs$core$async$state_machine__28058__auto__);

(statearr_29429[(1)] = (1));

return statearr_29429;
});
var cljs$core$async$state_machine__28058__auto____1 = (function (state_29399){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_29399);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e29436){if((e29436 instanceof Object)){
var ex__28061__auto__ = e29436;
var statearr_29437_32043 = state_29399;
(statearr_29437_32043[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29436;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32049 = state_29399;
state_29399 = G__32049;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$state_machine__28058__auto__ = function(state_29399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28058__auto____1.call(this,state_29399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28058__auto____0;
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28058__auto____1;
return cljs$core$async$state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_29438 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_29438[(6)] = c__28418__auto__);

return statearr_29438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
}));

return c__28418__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29466 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29466 = (function (ch,cs,meta29467){
this.ch = ch;
this.cs = cs;
this.meta29467 = meta29467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29468,meta29467__$1){
var self__ = this;
var _29468__$1 = this;
return (new cljs.core.async.t_cljs$core$async29466(self__.ch,self__.cs,meta29467__$1));
}));

(cljs.core.async.t_cljs$core$async29466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29468){
var self__ = this;
var _29468__$1 = this;
return self__.meta29467;
}));

(cljs.core.async.t_cljs$core$async29466.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29466.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29466.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29466.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29466.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29466.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29467","meta29467",2043052421,null)], null);
}));

(cljs.core.async.t_cljs$core$async29466.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29466");

(cljs.core.async.t_cljs$core$async29466.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29466");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29466.
 */
cljs.core.async.__GT_t_cljs$core$async29466 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29466(ch__$1,cs__$1,meta29467){
return (new cljs.core.async.t_cljs$core$async29466(ch__$1,cs__$1,meta29467));
});

}

return (new cljs.core.async.t_cljs$core$async29466(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__28418__auto___32132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_29650){
var state_val_29653 = (state_29650[(1)]);
if((state_val_29653 === (7))){
var inst_29640 = (state_29650[(2)]);
var state_29650__$1 = state_29650;
var statearr_29658_32138 = state_29650__$1;
(statearr_29658_32138[(2)] = inst_29640);

(statearr_29658_32138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (20))){
var inst_29519 = (state_29650[(7)]);
var inst_29532 = cljs.core.first(inst_29519);
var inst_29533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29532,(0),null);
var inst_29534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29532,(1),null);
var state_29650__$1 = (function (){var statearr_29663 = state_29650;
(statearr_29663[(8)] = inst_29533);

return statearr_29663;
})();
if(cljs.core.truth_(inst_29534)){
var statearr_29664_32149 = state_29650__$1;
(statearr_29664_32149[(1)] = (22));

} else {
var statearr_29665_32150 = state_29650__$1;
(statearr_29665_32150[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (27))){
var inst_29572 = (state_29650[(9)]);
var inst_29580 = (state_29650[(10)]);
var inst_29574 = (state_29650[(11)]);
var inst_29483 = (state_29650[(12)]);
var inst_29580__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29572,inst_29574);
var inst_29581 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29580__$1,inst_29483,done);
var state_29650__$1 = (function (){var statearr_29666 = state_29650;
(statearr_29666[(10)] = inst_29580__$1);

return statearr_29666;
})();
if(cljs.core.truth_(inst_29581)){
var statearr_29667_32151 = state_29650__$1;
(statearr_29667_32151[(1)] = (30));

} else {
var statearr_29668_32152 = state_29650__$1;
(statearr_29668_32152[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (1))){
var state_29650__$1 = state_29650;
var statearr_29671_32153 = state_29650__$1;
(statearr_29671_32153[(2)] = null);

(statearr_29671_32153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (24))){
var inst_29519 = (state_29650[(7)]);
var inst_29539 = (state_29650[(2)]);
var inst_29540 = cljs.core.next(inst_29519);
var inst_29494 = inst_29540;
var inst_29495 = null;
var inst_29496 = (0);
var inst_29497 = (0);
var state_29650__$1 = (function (){var statearr_29673 = state_29650;
(statearr_29673[(13)] = inst_29539);

(statearr_29673[(14)] = inst_29497);

(statearr_29673[(15)] = inst_29495);

(statearr_29673[(16)] = inst_29496);

(statearr_29673[(17)] = inst_29494);

return statearr_29673;
})();
var statearr_29679_32164 = state_29650__$1;
(statearr_29679_32164[(2)] = null);

(statearr_29679_32164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (39))){
var state_29650__$1 = state_29650;
var statearr_29691_32165 = state_29650__$1;
(statearr_29691_32165[(2)] = null);

(statearr_29691_32165[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (4))){
var inst_29483 = (state_29650[(12)]);
var inst_29483__$1 = (state_29650[(2)]);
var inst_29484 = (inst_29483__$1 == null);
var state_29650__$1 = (function (){var statearr_29692 = state_29650;
(statearr_29692[(12)] = inst_29483__$1);

return statearr_29692;
})();
if(cljs.core.truth_(inst_29484)){
var statearr_29693_32166 = state_29650__$1;
(statearr_29693_32166[(1)] = (5));

} else {
var statearr_29694_32174 = state_29650__$1;
(statearr_29694_32174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (15))){
var inst_29497 = (state_29650[(14)]);
var inst_29495 = (state_29650[(15)]);
var inst_29496 = (state_29650[(16)]);
var inst_29494 = (state_29650[(17)]);
var inst_29513 = (state_29650[(2)]);
var inst_29514 = (inst_29497 + (1));
var tmp29683 = inst_29495;
var tmp29684 = inst_29496;
var tmp29685 = inst_29494;
var inst_29494__$1 = tmp29685;
var inst_29495__$1 = tmp29683;
var inst_29496__$1 = tmp29684;
var inst_29497__$1 = inst_29514;
var state_29650__$1 = (function (){var statearr_29697 = state_29650;
(statearr_29697[(18)] = inst_29513);

(statearr_29697[(14)] = inst_29497__$1);

(statearr_29697[(15)] = inst_29495__$1);

(statearr_29697[(16)] = inst_29496__$1);

(statearr_29697[(17)] = inst_29494__$1);

return statearr_29697;
})();
var statearr_29698_32176 = state_29650__$1;
(statearr_29698_32176[(2)] = null);

(statearr_29698_32176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (21))){
var inst_29544 = (state_29650[(2)]);
var state_29650__$1 = state_29650;
var statearr_29703_32177 = state_29650__$1;
(statearr_29703_32177[(2)] = inst_29544);

(statearr_29703_32177[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (31))){
var inst_29580 = (state_29650[(10)]);
var inst_29584 = done(null);
var inst_29586 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29580);
var state_29650__$1 = (function (){var statearr_29711 = state_29650;
(statearr_29711[(19)] = inst_29584);

return statearr_29711;
})();
var statearr_29712_32181 = state_29650__$1;
(statearr_29712_32181[(2)] = inst_29586);

(statearr_29712_32181[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (32))){
var inst_29572 = (state_29650[(9)]);
var inst_29573 = (state_29650[(20)]);
var inst_29574 = (state_29650[(11)]);
var inst_29571 = (state_29650[(21)]);
var inst_29588 = (state_29650[(2)]);
var inst_29590 = (inst_29574 + (1));
var tmp29700 = inst_29572;
var tmp29701 = inst_29573;
var tmp29702 = inst_29571;
var inst_29571__$1 = tmp29702;
var inst_29572__$1 = tmp29700;
var inst_29573__$1 = tmp29701;
var inst_29574__$1 = inst_29590;
var state_29650__$1 = (function (){var statearr_29716 = state_29650;
(statearr_29716[(9)] = inst_29572__$1);

(statearr_29716[(20)] = inst_29573__$1);

(statearr_29716[(11)] = inst_29574__$1);

(statearr_29716[(22)] = inst_29588);

(statearr_29716[(21)] = inst_29571__$1);

return statearr_29716;
})();
var statearr_29720_32188 = state_29650__$1;
(statearr_29720_32188[(2)] = null);

(statearr_29720_32188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (40))){
var inst_29608 = (state_29650[(23)]);
var inst_29612 = done(null);
var inst_29613 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29608);
var state_29650__$1 = (function (){var statearr_29723 = state_29650;
(statearr_29723[(24)] = inst_29612);

return statearr_29723;
})();
var statearr_29727_32189 = state_29650__$1;
(statearr_29727_32189[(2)] = inst_29613);

(statearr_29727_32189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (33))){
var inst_29593 = (state_29650[(25)]);
var inst_29600 = cljs.core.chunked_seq_QMARK_(inst_29593);
var state_29650__$1 = state_29650;
if(inst_29600){
var statearr_29730_32190 = state_29650__$1;
(statearr_29730_32190[(1)] = (36));

} else {
var statearr_29731_32191 = state_29650__$1;
(statearr_29731_32191[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (13))){
var inst_29507 = (state_29650[(26)]);
var inst_29510 = cljs.core.async.close_BANG_(inst_29507);
var state_29650__$1 = state_29650;
var statearr_29732_32192 = state_29650__$1;
(statearr_29732_32192[(2)] = inst_29510);

(statearr_29732_32192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (22))){
var inst_29533 = (state_29650[(8)]);
var inst_29536 = cljs.core.async.close_BANG_(inst_29533);
var state_29650__$1 = state_29650;
var statearr_29736_32193 = state_29650__$1;
(statearr_29736_32193[(2)] = inst_29536);

(statearr_29736_32193[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (36))){
var inst_29593 = (state_29650[(25)]);
var inst_29603 = cljs.core.chunk_first(inst_29593);
var inst_29604 = cljs.core.chunk_rest(inst_29593);
var inst_29605 = cljs.core.count(inst_29603);
var inst_29571 = inst_29604;
var inst_29572 = inst_29603;
var inst_29573 = inst_29605;
var inst_29574 = (0);
var state_29650__$1 = (function (){var statearr_29741 = state_29650;
(statearr_29741[(9)] = inst_29572);

(statearr_29741[(20)] = inst_29573);

(statearr_29741[(11)] = inst_29574);

(statearr_29741[(21)] = inst_29571);

return statearr_29741;
})();
var statearr_29746_32194 = state_29650__$1;
(statearr_29746_32194[(2)] = null);

(statearr_29746_32194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (41))){
var inst_29593 = (state_29650[(25)]);
var inst_29616 = (state_29650[(2)]);
var inst_29617 = cljs.core.next(inst_29593);
var inst_29571 = inst_29617;
var inst_29572 = null;
var inst_29573 = (0);
var inst_29574 = (0);
var state_29650__$1 = (function (){var statearr_29755 = state_29650;
(statearr_29755[(9)] = inst_29572);

(statearr_29755[(20)] = inst_29573);

(statearr_29755[(27)] = inst_29616);

(statearr_29755[(11)] = inst_29574);

(statearr_29755[(21)] = inst_29571);

return statearr_29755;
})();
var statearr_29757_32201 = state_29650__$1;
(statearr_29757_32201[(2)] = null);

(statearr_29757_32201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (43))){
var state_29650__$1 = state_29650;
var statearr_29759_32202 = state_29650__$1;
(statearr_29759_32202[(2)] = null);

(statearr_29759_32202[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (29))){
var inst_29625 = (state_29650[(2)]);
var state_29650__$1 = state_29650;
var statearr_29761_32203 = state_29650__$1;
(statearr_29761_32203[(2)] = inst_29625);

(statearr_29761_32203[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (44))){
var inst_29637 = (state_29650[(2)]);
var state_29650__$1 = (function (){var statearr_29763 = state_29650;
(statearr_29763[(28)] = inst_29637);

return statearr_29763;
})();
var statearr_29764_32208 = state_29650__$1;
(statearr_29764_32208[(2)] = null);

(statearr_29764_32208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (6))){
var inst_29563 = (state_29650[(29)]);
var inst_29559 = cljs.core.deref(cs);
var inst_29563__$1 = cljs.core.keys(inst_29559);
var inst_29564 = cljs.core.count(inst_29563__$1);
var inst_29565 = cljs.core.reset_BANG_(dctr,inst_29564);
var inst_29570 = cljs.core.seq(inst_29563__$1);
var inst_29571 = inst_29570;
var inst_29572 = null;
var inst_29573 = (0);
var inst_29574 = (0);
var state_29650__$1 = (function (){var statearr_29771 = state_29650;
(statearr_29771[(9)] = inst_29572);

(statearr_29771[(30)] = inst_29565);

(statearr_29771[(29)] = inst_29563__$1);

(statearr_29771[(20)] = inst_29573);

(statearr_29771[(11)] = inst_29574);

(statearr_29771[(21)] = inst_29571);

return statearr_29771;
})();
var statearr_29773_32219 = state_29650__$1;
(statearr_29773_32219[(2)] = null);

(statearr_29773_32219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (28))){
var inst_29593 = (state_29650[(25)]);
var inst_29571 = (state_29650[(21)]);
var inst_29593__$1 = cljs.core.seq(inst_29571);
var state_29650__$1 = (function (){var statearr_29774 = state_29650;
(statearr_29774[(25)] = inst_29593__$1);

return statearr_29774;
})();
if(inst_29593__$1){
var statearr_29775_32228 = state_29650__$1;
(statearr_29775_32228[(1)] = (33));

} else {
var statearr_29783_32229 = state_29650__$1;
(statearr_29783_32229[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (25))){
var inst_29573 = (state_29650[(20)]);
var inst_29574 = (state_29650[(11)]);
var inst_29576 = (inst_29574 < inst_29573);
var inst_29577 = inst_29576;
var state_29650__$1 = state_29650;
if(cljs.core.truth_(inst_29577)){
var statearr_29788_32230 = state_29650__$1;
(statearr_29788_32230[(1)] = (27));

} else {
var statearr_29790_32237 = state_29650__$1;
(statearr_29790_32237[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (34))){
var state_29650__$1 = state_29650;
var statearr_29792_32239 = state_29650__$1;
(statearr_29792_32239[(2)] = null);

(statearr_29792_32239[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (17))){
var state_29650__$1 = state_29650;
var statearr_29794_32242 = state_29650__$1;
(statearr_29794_32242[(2)] = null);

(statearr_29794_32242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (3))){
var inst_29642 = (state_29650[(2)]);
var state_29650__$1 = state_29650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29650__$1,inst_29642);
} else {
if((state_val_29653 === (12))){
var inst_29549 = (state_29650[(2)]);
var state_29650__$1 = state_29650;
var statearr_29800_32243 = state_29650__$1;
(statearr_29800_32243[(2)] = inst_29549);

(statearr_29800_32243[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (2))){
var state_29650__$1 = state_29650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29650__$1,(4),ch);
} else {
if((state_val_29653 === (23))){
var state_29650__$1 = state_29650;
var statearr_29805_32245 = state_29650__$1;
(statearr_29805_32245[(2)] = null);

(statearr_29805_32245[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (35))){
var inst_29623 = (state_29650[(2)]);
var state_29650__$1 = state_29650;
var statearr_29806_32251 = state_29650__$1;
(statearr_29806_32251[(2)] = inst_29623);

(statearr_29806_32251[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (19))){
var inst_29519 = (state_29650[(7)]);
var inst_29524 = cljs.core.chunk_first(inst_29519);
var inst_29525 = cljs.core.chunk_rest(inst_29519);
var inst_29526 = cljs.core.count(inst_29524);
var inst_29494 = inst_29525;
var inst_29495 = inst_29524;
var inst_29496 = inst_29526;
var inst_29497 = (0);
var state_29650__$1 = (function (){var statearr_29813 = state_29650;
(statearr_29813[(14)] = inst_29497);

(statearr_29813[(15)] = inst_29495);

(statearr_29813[(16)] = inst_29496);

(statearr_29813[(17)] = inst_29494);

return statearr_29813;
})();
var statearr_29816_32254 = state_29650__$1;
(statearr_29816_32254[(2)] = null);

(statearr_29816_32254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (11))){
var inst_29519 = (state_29650[(7)]);
var inst_29494 = (state_29650[(17)]);
var inst_29519__$1 = cljs.core.seq(inst_29494);
var state_29650__$1 = (function (){var statearr_29822 = state_29650;
(statearr_29822[(7)] = inst_29519__$1);

return statearr_29822;
})();
if(inst_29519__$1){
var statearr_29824_32258 = state_29650__$1;
(statearr_29824_32258[(1)] = (16));

} else {
var statearr_29827_32259 = state_29650__$1;
(statearr_29827_32259[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (9))){
var inst_29551 = (state_29650[(2)]);
var state_29650__$1 = state_29650;
var statearr_29834_32260 = state_29650__$1;
(statearr_29834_32260[(2)] = inst_29551);

(statearr_29834_32260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (5))){
var inst_29490 = cljs.core.deref(cs);
var inst_29492 = cljs.core.seq(inst_29490);
var inst_29494 = inst_29492;
var inst_29495 = null;
var inst_29496 = (0);
var inst_29497 = (0);
var state_29650__$1 = (function (){var statearr_29839 = state_29650;
(statearr_29839[(14)] = inst_29497);

(statearr_29839[(15)] = inst_29495);

(statearr_29839[(16)] = inst_29496);

(statearr_29839[(17)] = inst_29494);

return statearr_29839;
})();
var statearr_29840_32263 = state_29650__$1;
(statearr_29840_32263[(2)] = null);

(statearr_29840_32263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (14))){
var state_29650__$1 = state_29650;
var statearr_29845_32266 = state_29650__$1;
(statearr_29845_32266[(2)] = null);

(statearr_29845_32266[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (45))){
var inst_29634 = (state_29650[(2)]);
var state_29650__$1 = state_29650;
var statearr_29849_32267 = state_29650__$1;
(statearr_29849_32267[(2)] = inst_29634);

(statearr_29849_32267[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (26))){
var inst_29563 = (state_29650[(29)]);
var inst_29628 = (state_29650[(2)]);
var inst_29629 = cljs.core.seq(inst_29563);
var state_29650__$1 = (function (){var statearr_29852 = state_29650;
(statearr_29852[(31)] = inst_29628);

return statearr_29852;
})();
if(inst_29629){
var statearr_29853_32268 = state_29650__$1;
(statearr_29853_32268[(1)] = (42));

} else {
var statearr_29855_32269 = state_29650__$1;
(statearr_29855_32269[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (16))){
var inst_29519 = (state_29650[(7)]);
var inst_29521 = cljs.core.chunked_seq_QMARK_(inst_29519);
var state_29650__$1 = state_29650;
if(inst_29521){
var statearr_29857_32273 = state_29650__$1;
(statearr_29857_32273[(1)] = (19));

} else {
var statearr_29859_32274 = state_29650__$1;
(statearr_29859_32274[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (38))){
var inst_29620 = (state_29650[(2)]);
var state_29650__$1 = state_29650;
var statearr_29862_32275 = state_29650__$1;
(statearr_29862_32275[(2)] = inst_29620);

(statearr_29862_32275[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (30))){
var state_29650__$1 = state_29650;
var statearr_29865_32280 = state_29650__$1;
(statearr_29865_32280[(2)] = null);

(statearr_29865_32280[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (10))){
var inst_29497 = (state_29650[(14)]);
var inst_29495 = (state_29650[(15)]);
var inst_29506 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29495,inst_29497);
var inst_29507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29506,(0),null);
var inst_29508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29506,(1),null);
var state_29650__$1 = (function (){var statearr_29869 = state_29650;
(statearr_29869[(26)] = inst_29507);

return statearr_29869;
})();
if(cljs.core.truth_(inst_29508)){
var statearr_29873_32288 = state_29650__$1;
(statearr_29873_32288[(1)] = (13));

} else {
var statearr_29878_32289 = state_29650__$1;
(statearr_29878_32289[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (18))){
var inst_29547 = (state_29650[(2)]);
var state_29650__$1 = state_29650;
var statearr_29880_32290 = state_29650__$1;
(statearr_29880_32290[(2)] = inst_29547);

(statearr_29880_32290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (42))){
var state_29650__$1 = state_29650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29650__$1,(45),dchan);
} else {
if((state_val_29653 === (37))){
var inst_29608 = (state_29650[(23)]);
var inst_29593 = (state_29650[(25)]);
var inst_29483 = (state_29650[(12)]);
var inst_29608__$1 = cljs.core.first(inst_29593);
var inst_29609 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29608__$1,inst_29483,done);
var state_29650__$1 = (function (){var statearr_29883 = state_29650;
(statearr_29883[(23)] = inst_29608__$1);

return statearr_29883;
})();
if(cljs.core.truth_(inst_29609)){
var statearr_29885_32292 = state_29650__$1;
(statearr_29885_32292[(1)] = (39));

} else {
var statearr_29887_32295 = state_29650__$1;
(statearr_29887_32295[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (8))){
var inst_29497 = (state_29650[(14)]);
var inst_29496 = (state_29650[(16)]);
var inst_29499 = (inst_29497 < inst_29496);
var inst_29500 = inst_29499;
var state_29650__$1 = state_29650;
if(cljs.core.truth_(inst_29500)){
var statearr_29890_32301 = state_29650__$1;
(statearr_29890_32301[(1)] = (10));

} else {
var statearr_29891_32303 = state_29650__$1;
(statearr_29891_32303[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28058__auto__ = null;
var cljs$core$async$mult_$_state_machine__28058__auto____0 = (function (){
var statearr_29897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29897[(0)] = cljs$core$async$mult_$_state_machine__28058__auto__);

(statearr_29897[(1)] = (1));

return statearr_29897;
});
var cljs$core$async$mult_$_state_machine__28058__auto____1 = (function (state_29650){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_29650);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e29898){if((e29898 instanceof Object)){
var ex__28061__auto__ = e29898;
var statearr_29899_32328 = state_29650;
(statearr_29899_32328[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29898;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32335 = state_29650;
state_29650 = G__32335;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28058__auto__ = function(state_29650){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28058__auto____1.call(this,state_29650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28058__auto____0;
cljs$core$async$mult_$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28058__auto____1;
return cljs$core$async$mult_$_state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_29902 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_29902[(6)] = c__28418__auto___32132);

return statearr_29902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
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
var G__29909 = arguments.length;
switch (G__29909) {
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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32412 = arguments.length;
var i__4790__auto___32413 = (0);
while(true){
if((i__4790__auto___32413 < len__4789__auto___32412)){
args__4795__auto__.push((arguments[i__4790__auto___32413]));

var G__32414 = (i__4790__auto___32413 + (1));
i__4790__auto___32413 = G__32414;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29973){
var map__29974 = p__29973;
var map__29974__$1 = (((((!((map__29974 == null))))?(((((map__29974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29974):map__29974);
var opts = map__29974__$1;
var statearr_29980_32419 = state;
(statearr_29980_32419[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_29987_32420 = state;
(statearr_29987_32420[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_29989_32427 = state;
(statearr_29989_32427[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29962){
var G__29963 = cljs.core.first(seq29962);
var seq29962__$1 = cljs.core.next(seq29962);
var G__29964 = cljs.core.first(seq29962__$1);
var seq29962__$2 = cljs.core.next(seq29962__$1);
var G__29965 = cljs.core.first(seq29962__$2);
var seq29962__$3 = cljs.core.next(seq29962__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29963,G__29964,G__29965,seq29962__$3);
}));

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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30031 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30031 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30032){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30032 = meta30032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30033,meta30032__$1){
var self__ = this;
var _30033__$1 = this;
return (new cljs.core.async.t_cljs$core$async30031(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30032__$1));
}));

(cljs.core.async.t_cljs$core$async30031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30033){
var self__ = this;
var _30033__$1 = this;
return self__.meta30032;
}));

(cljs.core.async.t_cljs$core$async30031.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30031.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30031.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30031.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30031.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30031.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30031.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30031.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30032","meta30032",-471530115,null)], null);
}));

(cljs.core.async.t_cljs$core$async30031.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30031");

(cljs.core.async.t_cljs$core$async30031.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30031");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30031.
 */
cljs.core.async.__GT_t_cljs$core$async30031 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30031(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30032){
return (new cljs.core.async.t_cljs$core$async30031(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30032));
});

}

return (new cljs.core.async.t_cljs$core$async30031(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28418__auto___32450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_30166){
var state_val_30167 = (state_30166[(1)]);
if((state_val_30167 === (7))){
var inst_30072 = (state_30166[(2)]);
var state_30166__$1 = state_30166;
var statearr_30170_32451 = state_30166__$1;
(statearr_30170_32451[(2)] = inst_30072);

(statearr_30170_32451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (20))){
var inst_30085 = (state_30166[(7)]);
var state_30166__$1 = state_30166;
var statearr_30171_32452 = state_30166__$1;
(statearr_30171_32452[(2)] = inst_30085);

(statearr_30171_32452[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (27))){
var state_30166__$1 = state_30166;
var statearr_30172_32453 = state_30166__$1;
(statearr_30172_32453[(2)] = null);

(statearr_30172_32453[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (1))){
var inst_30059 = (state_30166[(8)]);
var inst_30059__$1 = calc_state();
var inst_30061 = (inst_30059__$1 == null);
var inst_30062 = cljs.core.not(inst_30061);
var state_30166__$1 = (function (){var statearr_30174 = state_30166;
(statearr_30174[(8)] = inst_30059__$1);

return statearr_30174;
})();
if(inst_30062){
var statearr_30175_32454 = state_30166__$1;
(statearr_30175_32454[(1)] = (2));

} else {
var statearr_30176_32456 = state_30166__$1;
(statearr_30176_32456[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (24))){
var inst_30136 = (state_30166[(9)]);
var inst_30110 = (state_30166[(10)]);
var inst_30121 = (state_30166[(11)]);
var inst_30136__$1 = (inst_30110.cljs$core$IFn$_invoke$arity$1 ? inst_30110.cljs$core$IFn$_invoke$arity$1(inst_30121) : inst_30110.call(null,inst_30121));
var state_30166__$1 = (function (){var statearr_30179 = state_30166;
(statearr_30179[(9)] = inst_30136__$1);

return statearr_30179;
})();
if(cljs.core.truth_(inst_30136__$1)){
var statearr_30180_32457 = state_30166__$1;
(statearr_30180_32457[(1)] = (29));

} else {
var statearr_30181_32458 = state_30166__$1;
(statearr_30181_32458[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (4))){
var inst_30075 = (state_30166[(2)]);
var state_30166__$1 = state_30166;
if(cljs.core.truth_(inst_30075)){
var statearr_30182_32459 = state_30166__$1;
(statearr_30182_32459[(1)] = (8));

} else {
var statearr_30183_32460 = state_30166__$1;
(statearr_30183_32460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (15))){
var inst_30103 = (state_30166[(2)]);
var state_30166__$1 = state_30166;
if(cljs.core.truth_(inst_30103)){
var statearr_30184_32461 = state_30166__$1;
(statearr_30184_32461[(1)] = (19));

} else {
var statearr_30185_32462 = state_30166__$1;
(statearr_30185_32462[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (21))){
var inst_30108 = (state_30166[(12)]);
var inst_30108__$1 = (state_30166[(2)]);
var inst_30110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30108__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30108__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30108__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30166__$1 = (function (){var statearr_30188 = state_30166;
(statearr_30188[(10)] = inst_30110);

(statearr_30188[(12)] = inst_30108__$1);

(statearr_30188[(13)] = inst_30111);

return statearr_30188;
})();
return cljs.core.async.ioc_alts_BANG_(state_30166__$1,(22),inst_30113);
} else {
if((state_val_30167 === (31))){
var inst_30148 = (state_30166[(2)]);
var state_30166__$1 = state_30166;
if(cljs.core.truth_(inst_30148)){
var statearr_30193_32470 = state_30166__$1;
(statearr_30193_32470[(1)] = (32));

} else {
var statearr_30194_32471 = state_30166__$1;
(statearr_30194_32471[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (32))){
var inst_30119 = (state_30166[(14)]);
var state_30166__$1 = state_30166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30166__$1,(35),out,inst_30119);
} else {
if((state_val_30167 === (33))){
var inst_30108 = (state_30166[(12)]);
var inst_30085 = inst_30108;
var state_30166__$1 = (function (){var statearr_30196 = state_30166;
(statearr_30196[(7)] = inst_30085);

return statearr_30196;
})();
var statearr_30197_32477 = state_30166__$1;
(statearr_30197_32477[(2)] = null);

(statearr_30197_32477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (13))){
var inst_30085 = (state_30166[(7)]);
var inst_30092 = inst_30085.cljs$lang$protocol_mask$partition0$;
var inst_30093 = (inst_30092 & (64));
var inst_30094 = inst_30085.cljs$core$ISeq$;
var inst_30095 = (cljs.core.PROTOCOL_SENTINEL === inst_30094);
var inst_30096 = ((inst_30093) || (inst_30095));
var state_30166__$1 = state_30166;
if(cljs.core.truth_(inst_30096)){
var statearr_30198_32481 = state_30166__$1;
(statearr_30198_32481[(1)] = (16));

} else {
var statearr_30199_32483 = state_30166__$1;
(statearr_30199_32483[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (22))){
var inst_30121 = (state_30166[(11)]);
var inst_30119 = (state_30166[(14)]);
var inst_30118 = (state_30166[(2)]);
var inst_30119__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30118,(0),null);
var inst_30121__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30118,(1),null);
var inst_30122 = (inst_30119__$1 == null);
var inst_30123 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30121__$1,change);
var inst_30124 = ((inst_30122) || (inst_30123));
var state_30166__$1 = (function (){var statearr_30203 = state_30166;
(statearr_30203[(11)] = inst_30121__$1);

(statearr_30203[(14)] = inst_30119__$1);

return statearr_30203;
})();
if(cljs.core.truth_(inst_30124)){
var statearr_30204_32488 = state_30166__$1;
(statearr_30204_32488[(1)] = (23));

} else {
var statearr_30205_32489 = state_30166__$1;
(statearr_30205_32489[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (36))){
var inst_30108 = (state_30166[(12)]);
var inst_30085 = inst_30108;
var state_30166__$1 = (function (){var statearr_30206 = state_30166;
(statearr_30206[(7)] = inst_30085);

return statearr_30206;
})();
var statearr_30207_32492 = state_30166__$1;
(statearr_30207_32492[(2)] = null);

(statearr_30207_32492[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (29))){
var inst_30136 = (state_30166[(9)]);
var state_30166__$1 = state_30166;
var statearr_30208_32500 = state_30166__$1;
(statearr_30208_32500[(2)] = inst_30136);

(statearr_30208_32500[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (6))){
var state_30166__$1 = state_30166;
var statearr_30209_32502 = state_30166__$1;
(statearr_30209_32502[(2)] = false);

(statearr_30209_32502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (28))){
var inst_30131 = (state_30166[(2)]);
var inst_30132 = calc_state();
var inst_30085 = inst_30132;
var state_30166__$1 = (function (){var statearr_30210 = state_30166;
(statearr_30210[(7)] = inst_30085);

(statearr_30210[(15)] = inst_30131);

return statearr_30210;
})();
var statearr_30211_32503 = state_30166__$1;
(statearr_30211_32503[(2)] = null);

(statearr_30211_32503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (25))){
var inst_30162 = (state_30166[(2)]);
var state_30166__$1 = state_30166;
var statearr_30212_32504 = state_30166__$1;
(statearr_30212_32504[(2)] = inst_30162);

(statearr_30212_32504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (34))){
var inst_30160 = (state_30166[(2)]);
var state_30166__$1 = state_30166;
var statearr_30213_32505 = state_30166__$1;
(statearr_30213_32505[(2)] = inst_30160);

(statearr_30213_32505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (17))){
var state_30166__$1 = state_30166;
var statearr_30214_32507 = state_30166__$1;
(statearr_30214_32507[(2)] = false);

(statearr_30214_32507[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (3))){
var state_30166__$1 = state_30166;
var statearr_30215_32508 = state_30166__$1;
(statearr_30215_32508[(2)] = false);

(statearr_30215_32508[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (12))){
var inst_30164 = (state_30166[(2)]);
var state_30166__$1 = state_30166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30166__$1,inst_30164);
} else {
if((state_val_30167 === (2))){
var inst_30059 = (state_30166[(8)]);
var inst_30064 = inst_30059.cljs$lang$protocol_mask$partition0$;
var inst_30065 = (inst_30064 & (64));
var inst_30066 = inst_30059.cljs$core$ISeq$;
var inst_30067 = (cljs.core.PROTOCOL_SENTINEL === inst_30066);
var inst_30068 = ((inst_30065) || (inst_30067));
var state_30166__$1 = state_30166;
if(cljs.core.truth_(inst_30068)){
var statearr_30221_32513 = state_30166__$1;
(statearr_30221_32513[(1)] = (5));

} else {
var statearr_30222_32514 = state_30166__$1;
(statearr_30222_32514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (23))){
var inst_30119 = (state_30166[(14)]);
var inst_30126 = (inst_30119 == null);
var state_30166__$1 = state_30166;
if(cljs.core.truth_(inst_30126)){
var statearr_30231_32515 = state_30166__$1;
(statearr_30231_32515[(1)] = (26));

} else {
var statearr_30232_32516 = state_30166__$1;
(statearr_30232_32516[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (35))){
var inst_30151 = (state_30166[(2)]);
var state_30166__$1 = state_30166;
if(cljs.core.truth_(inst_30151)){
var statearr_30235_32521 = state_30166__$1;
(statearr_30235_32521[(1)] = (36));

} else {
var statearr_30237_32522 = state_30166__$1;
(statearr_30237_32522[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (19))){
var inst_30085 = (state_30166[(7)]);
var inst_30105 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30085);
var state_30166__$1 = state_30166;
var statearr_30247_32524 = state_30166__$1;
(statearr_30247_32524[(2)] = inst_30105);

(statearr_30247_32524[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (11))){
var inst_30085 = (state_30166[(7)]);
var inst_30089 = (inst_30085 == null);
var inst_30090 = cljs.core.not(inst_30089);
var state_30166__$1 = state_30166;
if(inst_30090){
var statearr_30258_32532 = state_30166__$1;
(statearr_30258_32532[(1)] = (13));

} else {
var statearr_30259_32533 = state_30166__$1;
(statearr_30259_32533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (9))){
var inst_30059 = (state_30166[(8)]);
var state_30166__$1 = state_30166;
var statearr_30265_32536 = state_30166__$1;
(statearr_30265_32536[(2)] = inst_30059);

(statearr_30265_32536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (5))){
var state_30166__$1 = state_30166;
var statearr_30269_32537 = state_30166__$1;
(statearr_30269_32537[(2)] = true);

(statearr_30269_32537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (14))){
var state_30166__$1 = state_30166;
var statearr_30274_32540 = state_30166__$1;
(statearr_30274_32540[(2)] = false);

(statearr_30274_32540[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (26))){
var inst_30121 = (state_30166[(11)]);
var inst_30128 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30121);
var state_30166__$1 = state_30166;
var statearr_30280_32546 = state_30166__$1;
(statearr_30280_32546[(2)] = inst_30128);

(statearr_30280_32546[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (16))){
var state_30166__$1 = state_30166;
var statearr_30288_32549 = state_30166__$1;
(statearr_30288_32549[(2)] = true);

(statearr_30288_32549[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (38))){
var inst_30156 = (state_30166[(2)]);
var state_30166__$1 = state_30166;
var statearr_30295_32550 = state_30166__$1;
(statearr_30295_32550[(2)] = inst_30156);

(statearr_30295_32550[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (30))){
var inst_30110 = (state_30166[(10)]);
var inst_30121 = (state_30166[(11)]);
var inst_30111 = (state_30166[(13)]);
var inst_30143 = cljs.core.empty_QMARK_(inst_30110);
var inst_30144 = (inst_30111.cljs$core$IFn$_invoke$arity$1 ? inst_30111.cljs$core$IFn$_invoke$arity$1(inst_30121) : inst_30111.call(null,inst_30121));
var inst_30145 = cljs.core.not(inst_30144);
var inst_30146 = ((inst_30143) && (inst_30145));
var state_30166__$1 = state_30166;
var statearr_30310_32551 = state_30166__$1;
(statearr_30310_32551[(2)] = inst_30146);

(statearr_30310_32551[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (10))){
var inst_30059 = (state_30166[(8)]);
var inst_30080 = (state_30166[(2)]);
var inst_30081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30080,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30080,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30080,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30085 = inst_30059;
var state_30166__$1 = (function (){var statearr_30313 = state_30166;
(statearr_30313[(7)] = inst_30085);

(statearr_30313[(16)] = inst_30083);

(statearr_30313[(17)] = inst_30081);

(statearr_30313[(18)] = inst_30084);

return statearr_30313;
})();
var statearr_30315_32554 = state_30166__$1;
(statearr_30315_32554[(2)] = null);

(statearr_30315_32554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (18))){
var inst_30100 = (state_30166[(2)]);
var state_30166__$1 = state_30166;
var statearr_30317_32556 = state_30166__$1;
(statearr_30317_32556[(2)] = inst_30100);

(statearr_30317_32556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (37))){
var state_30166__$1 = state_30166;
var statearr_30319_32559 = state_30166__$1;
(statearr_30319_32559[(2)] = null);

(statearr_30319_32559[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30167 === (8))){
var inst_30059 = (state_30166[(8)]);
var inst_30077 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30059);
var state_30166__$1 = state_30166;
var statearr_30322_32562 = state_30166__$1;
(statearr_30322_32562[(2)] = inst_30077);

(statearr_30322_32562[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__28058__auto__ = null;
var cljs$core$async$mix_$_state_machine__28058__auto____0 = (function (){
var statearr_30327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30327[(0)] = cljs$core$async$mix_$_state_machine__28058__auto__);

(statearr_30327[(1)] = (1));

return statearr_30327;
});
var cljs$core$async$mix_$_state_machine__28058__auto____1 = (function (state_30166){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_30166);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e30328){if((e30328 instanceof Object)){
var ex__28061__auto__ = e30328;
var statearr_30332_32569 = state_30166;
(statearr_30332_32569[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30328;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32570 = state_30166;
state_30166 = G__32570;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28058__auto__ = function(state_30166){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28058__auto____1.call(this,state_30166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28058__auto____0;
cljs$core$async$mix_$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28058__auto____1;
return cljs$core$async$mix_$_state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_30334 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_30334[(6)] = c__28418__auto___32450);

return statearr_30334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30352 = arguments.length;
switch (G__30352) {
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
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__30374 = arguments.length;
switch (G__30374) {
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
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30369_SHARP_){
if(cljs.core.truth_((p1__30369_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30369_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30369_SHARP_.call(null,topic)))){
return p1__30369_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30369_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30378 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30378 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30379){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30379 = meta30379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30380,meta30379__$1){
var self__ = this;
var _30380__$1 = this;
return (new cljs.core.async.t_cljs$core$async30378(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30379__$1));
}));

(cljs.core.async.t_cljs$core$async30378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30380){
var self__ = this;
var _30380__$1 = this;
return self__.meta30379;
}));

(cljs.core.async.t_cljs$core$async30378.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30378.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30378.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30378.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30378.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30378.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30378.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30379","meta30379",1681423354,null)], null);
}));

(cljs.core.async.t_cljs$core$async30378.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30378");

(cljs.core.async.t_cljs$core$async30378.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30378");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30378.
 */
cljs.core.async.__GT_t_cljs$core$async30378 = (function cljs$core$async$__GT_t_cljs$core$async30378(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30379){
return (new cljs.core.async.t_cljs$core$async30378(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30379));
});

}

return (new cljs.core.async.t_cljs$core$async30378(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28418__auto___32603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_30477){
var state_val_30478 = (state_30477[(1)]);
if((state_val_30478 === (7))){
var inst_30473 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
var statearr_30479_32611 = state_30477__$1;
(statearr_30479_32611[(2)] = inst_30473);

(statearr_30479_32611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (20))){
var state_30477__$1 = state_30477;
var statearr_30480_32615 = state_30477__$1;
(statearr_30480_32615[(2)] = null);

(statearr_30480_32615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (1))){
var state_30477__$1 = state_30477;
var statearr_30482_32616 = state_30477__$1;
(statearr_30482_32616[(2)] = null);

(statearr_30482_32616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (24))){
var inst_30456 = (state_30477[(7)]);
var inst_30465 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30456);
var state_30477__$1 = state_30477;
var statearr_30483_32620 = state_30477__$1;
(statearr_30483_32620[(2)] = inst_30465);

(statearr_30483_32620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (4))){
var inst_30398 = (state_30477[(8)]);
var inst_30398__$1 = (state_30477[(2)]);
var inst_30399 = (inst_30398__$1 == null);
var state_30477__$1 = (function (){var statearr_30484 = state_30477;
(statearr_30484[(8)] = inst_30398__$1);

return statearr_30484;
})();
if(cljs.core.truth_(inst_30399)){
var statearr_30485_32625 = state_30477__$1;
(statearr_30485_32625[(1)] = (5));

} else {
var statearr_30486_32626 = state_30477__$1;
(statearr_30486_32626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (15))){
var inst_30450 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
var statearr_30487_32630 = state_30477__$1;
(statearr_30487_32630[(2)] = inst_30450);

(statearr_30487_32630[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (21))){
var inst_30470 = (state_30477[(2)]);
var state_30477__$1 = (function (){var statearr_30488 = state_30477;
(statearr_30488[(9)] = inst_30470);

return statearr_30488;
})();
var statearr_30489_32635 = state_30477__$1;
(statearr_30489_32635[(2)] = null);

(statearr_30489_32635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (13))){
var inst_30427 = (state_30477[(10)]);
var inst_30430 = cljs.core.chunked_seq_QMARK_(inst_30427);
var state_30477__$1 = state_30477;
if(inst_30430){
var statearr_30491_32645 = state_30477__$1;
(statearr_30491_32645[(1)] = (16));

} else {
var statearr_30492_32646 = state_30477__$1;
(statearr_30492_32646[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (22))){
var inst_30462 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
if(cljs.core.truth_(inst_30462)){
var statearr_30493_32649 = state_30477__$1;
(statearr_30493_32649[(1)] = (23));

} else {
var statearr_30494_32650 = state_30477__$1;
(statearr_30494_32650[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (6))){
var inst_30398 = (state_30477[(8)]);
var inst_30458 = (state_30477[(11)]);
var inst_30456 = (state_30477[(7)]);
var inst_30456__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30398) : topic_fn.call(null,inst_30398));
var inst_30457 = cljs.core.deref(mults);
var inst_30458__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30457,inst_30456__$1);
var state_30477__$1 = (function (){var statearr_30497 = state_30477;
(statearr_30497[(11)] = inst_30458__$1);

(statearr_30497[(7)] = inst_30456__$1);

return statearr_30497;
})();
if(cljs.core.truth_(inst_30458__$1)){
var statearr_30498_32658 = state_30477__$1;
(statearr_30498_32658[(1)] = (19));

} else {
var statearr_30499_32659 = state_30477__$1;
(statearr_30499_32659[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (25))){
var inst_30467 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
var statearr_30502_32663 = state_30477__$1;
(statearr_30502_32663[(2)] = inst_30467);

(statearr_30502_32663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (17))){
var inst_30427 = (state_30477[(10)]);
var inst_30439 = cljs.core.first(inst_30427);
var inst_30441 = cljs.core.async.muxch_STAR_(inst_30439);
var inst_30442 = cljs.core.async.close_BANG_(inst_30441);
var inst_30443 = cljs.core.next(inst_30427);
var inst_30409 = inst_30443;
var inst_30410 = null;
var inst_30411 = (0);
var inst_30412 = (0);
var state_30477__$1 = (function (){var statearr_30503 = state_30477;
(statearr_30503[(12)] = inst_30409);

(statearr_30503[(13)] = inst_30411);

(statearr_30503[(14)] = inst_30410);

(statearr_30503[(15)] = inst_30442);

(statearr_30503[(16)] = inst_30412);

return statearr_30503;
})();
var statearr_30504_32678 = state_30477__$1;
(statearr_30504_32678[(2)] = null);

(statearr_30504_32678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (3))){
var inst_30475 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30477__$1,inst_30475);
} else {
if((state_val_30478 === (12))){
var inst_30452 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
var statearr_30505_32680 = state_30477__$1;
(statearr_30505_32680[(2)] = inst_30452);

(statearr_30505_32680[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (2))){
var state_30477__$1 = state_30477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30477__$1,(4),ch);
} else {
if((state_val_30478 === (23))){
var state_30477__$1 = state_30477;
var statearr_30506_32683 = state_30477__$1;
(statearr_30506_32683[(2)] = null);

(statearr_30506_32683[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (19))){
var inst_30398 = (state_30477[(8)]);
var inst_30458 = (state_30477[(11)]);
var inst_30460 = cljs.core.async.muxch_STAR_(inst_30458);
var state_30477__$1 = state_30477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30477__$1,(22),inst_30460,inst_30398);
} else {
if((state_val_30478 === (11))){
var inst_30409 = (state_30477[(12)]);
var inst_30427 = (state_30477[(10)]);
var inst_30427__$1 = cljs.core.seq(inst_30409);
var state_30477__$1 = (function (){var statearr_30511 = state_30477;
(statearr_30511[(10)] = inst_30427__$1);

return statearr_30511;
})();
if(inst_30427__$1){
var statearr_30514_32692 = state_30477__$1;
(statearr_30514_32692[(1)] = (13));

} else {
var statearr_30516_32693 = state_30477__$1;
(statearr_30516_32693[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (9))){
var inst_30454 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
var statearr_30519_32700 = state_30477__$1;
(statearr_30519_32700[(2)] = inst_30454);

(statearr_30519_32700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (5))){
var inst_30406 = cljs.core.deref(mults);
var inst_30407 = cljs.core.vals(inst_30406);
var inst_30408 = cljs.core.seq(inst_30407);
var inst_30409 = inst_30408;
var inst_30410 = null;
var inst_30411 = (0);
var inst_30412 = (0);
var state_30477__$1 = (function (){var statearr_30523 = state_30477;
(statearr_30523[(12)] = inst_30409);

(statearr_30523[(13)] = inst_30411);

(statearr_30523[(14)] = inst_30410);

(statearr_30523[(16)] = inst_30412);

return statearr_30523;
})();
var statearr_30525_32711 = state_30477__$1;
(statearr_30525_32711[(2)] = null);

(statearr_30525_32711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (14))){
var state_30477__$1 = state_30477;
var statearr_30529_32714 = state_30477__$1;
(statearr_30529_32714[(2)] = null);

(statearr_30529_32714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (16))){
var inst_30427 = (state_30477[(10)]);
var inst_30432 = cljs.core.chunk_first(inst_30427);
var inst_30433 = cljs.core.chunk_rest(inst_30427);
var inst_30435 = cljs.core.count(inst_30432);
var inst_30409 = inst_30433;
var inst_30410 = inst_30432;
var inst_30411 = inst_30435;
var inst_30412 = (0);
var state_30477__$1 = (function (){var statearr_30530 = state_30477;
(statearr_30530[(12)] = inst_30409);

(statearr_30530[(13)] = inst_30411);

(statearr_30530[(14)] = inst_30410);

(statearr_30530[(16)] = inst_30412);

return statearr_30530;
})();
var statearr_30532_32725 = state_30477__$1;
(statearr_30532_32725[(2)] = null);

(statearr_30532_32725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (10))){
var inst_30409 = (state_30477[(12)]);
var inst_30411 = (state_30477[(13)]);
var inst_30410 = (state_30477[(14)]);
var inst_30412 = (state_30477[(16)]);
var inst_30417 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30410,inst_30412);
var inst_30420 = cljs.core.async.muxch_STAR_(inst_30417);
var inst_30421 = cljs.core.async.close_BANG_(inst_30420);
var inst_30422 = (inst_30412 + (1));
var tmp30526 = inst_30409;
var tmp30527 = inst_30411;
var tmp30528 = inst_30410;
var inst_30409__$1 = tmp30526;
var inst_30410__$1 = tmp30528;
var inst_30411__$1 = tmp30527;
var inst_30412__$1 = inst_30422;
var state_30477__$1 = (function (){var statearr_30535 = state_30477;
(statearr_30535[(12)] = inst_30409__$1);

(statearr_30535[(13)] = inst_30411__$1);

(statearr_30535[(14)] = inst_30410__$1);

(statearr_30535[(17)] = inst_30421);

(statearr_30535[(16)] = inst_30412__$1);

return statearr_30535;
})();
var statearr_30540_32748 = state_30477__$1;
(statearr_30540_32748[(2)] = null);

(statearr_30540_32748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (18))){
var inst_30447 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
var statearr_30543_32750 = state_30477__$1;
(statearr_30543_32750[(2)] = inst_30447);

(statearr_30543_32750[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30478 === (8))){
var inst_30411 = (state_30477[(13)]);
var inst_30412 = (state_30477[(16)]);
var inst_30414 = (inst_30412 < inst_30411);
var inst_30415 = inst_30414;
var state_30477__$1 = state_30477;
if(cljs.core.truth_(inst_30415)){
var statearr_30544_32752 = state_30477__$1;
(statearr_30544_32752[(1)] = (10));

} else {
var statearr_30546_32753 = state_30477__$1;
(statearr_30546_32753[(1)] = (11));

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
var cljs$core$async$state_machine__28058__auto__ = null;
var cljs$core$async$state_machine__28058__auto____0 = (function (){
var statearr_30560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30560[(0)] = cljs$core$async$state_machine__28058__auto__);

(statearr_30560[(1)] = (1));

return statearr_30560;
});
var cljs$core$async$state_machine__28058__auto____1 = (function (state_30477){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_30477);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e30565){if((e30565 instanceof Object)){
var ex__28061__auto__ = e30565;
var statearr_30567_32764 = state_30477;
(statearr_30567_32764[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32766 = state_30477;
state_30477 = G__32766;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$state_machine__28058__auto__ = function(state_30477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28058__auto____1.call(this,state_30477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28058__auto____0;
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28058__auto____1;
return cljs$core$async$state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_30571 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_30571[(6)] = c__28418__auto___32603);

return statearr_30571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
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
var G__30580 = arguments.length;
switch (G__30580) {
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
var G__30592 = arguments.length;
switch (G__30592) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__30594 = arguments.length;
switch (G__30594) {
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
var c__28418__auto___32788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_30638){
var state_val_30639 = (state_30638[(1)]);
if((state_val_30639 === (7))){
var state_30638__$1 = state_30638;
var statearr_30640_32789 = state_30638__$1;
(statearr_30640_32789[(2)] = null);

(statearr_30640_32789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (1))){
var state_30638__$1 = state_30638;
var statearr_30643_32790 = state_30638__$1;
(statearr_30643_32790[(2)] = null);

(statearr_30643_32790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (4))){
var inst_30599 = (state_30638[(7)]);
var inst_30601 = (inst_30599 < cnt);
var state_30638__$1 = state_30638;
if(cljs.core.truth_(inst_30601)){
var statearr_30645_32791 = state_30638__$1;
(statearr_30645_32791[(1)] = (6));

} else {
var statearr_30646_32795 = state_30638__$1;
(statearr_30646_32795[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (15))){
var inst_30634 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
var statearr_30647_32796 = state_30638__$1;
(statearr_30647_32796[(2)] = inst_30634);

(statearr_30647_32796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (13))){
var inst_30627 = cljs.core.async.close_BANG_(out);
var state_30638__$1 = state_30638;
var statearr_30648_32797 = state_30638__$1;
(statearr_30648_32797[(2)] = inst_30627);

(statearr_30648_32797[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (6))){
var state_30638__$1 = state_30638;
var statearr_30649_32798 = state_30638__$1;
(statearr_30649_32798[(2)] = null);

(statearr_30649_32798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (3))){
var inst_30636 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30638__$1,inst_30636);
} else {
if((state_val_30639 === (12))){
var inst_30623 = (state_30638[(8)]);
var inst_30623__$1 = (state_30638[(2)]);
var inst_30624 = cljs.core.some(cljs.core.nil_QMARK_,inst_30623__$1);
var state_30638__$1 = (function (){var statearr_30654 = state_30638;
(statearr_30654[(8)] = inst_30623__$1);

return statearr_30654;
})();
if(cljs.core.truth_(inst_30624)){
var statearr_30655_32802 = state_30638__$1;
(statearr_30655_32802[(1)] = (13));

} else {
var statearr_30656_32806 = state_30638__$1;
(statearr_30656_32806[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (2))){
var inst_30598 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30599 = (0);
var state_30638__$1 = (function (){var statearr_30659 = state_30638;
(statearr_30659[(9)] = inst_30598);

(statearr_30659[(7)] = inst_30599);

return statearr_30659;
})();
var statearr_30660_32810 = state_30638__$1;
(statearr_30660_32810[(2)] = null);

(statearr_30660_32810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (11))){
var inst_30599 = (state_30638[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_30638,(10),Object,null,(9));
var inst_30610 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30599) : chs__$1.call(null,inst_30599));
var inst_30611 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30599) : done.call(null,inst_30599));
var inst_30612 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30610,inst_30611);
var state_30638__$1 = state_30638;
var statearr_30661_32817 = state_30638__$1;
(statearr_30661_32817[(2)] = inst_30612);


cljs.core.async.impl.ioc_helpers.process_exception(state_30638__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (9))){
var inst_30599 = (state_30638[(7)]);
var inst_30614 = (state_30638[(2)]);
var inst_30615 = (inst_30599 + (1));
var inst_30599__$1 = inst_30615;
var state_30638__$1 = (function (){var statearr_30664 = state_30638;
(statearr_30664[(10)] = inst_30614);

(statearr_30664[(7)] = inst_30599__$1);

return statearr_30664;
})();
var statearr_30665_32824 = state_30638__$1;
(statearr_30665_32824[(2)] = null);

(statearr_30665_32824[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (5))){
var inst_30621 = (state_30638[(2)]);
var state_30638__$1 = (function (){var statearr_30666 = state_30638;
(statearr_30666[(11)] = inst_30621);

return statearr_30666;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30638__$1,(12),dchan);
} else {
if((state_val_30639 === (14))){
var inst_30623 = (state_30638[(8)]);
var inst_30629 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30623);
var state_30638__$1 = state_30638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30638__$1,(16),out,inst_30629);
} else {
if((state_val_30639 === (16))){
var inst_30631 = (state_30638[(2)]);
var state_30638__$1 = (function (){var statearr_30667 = state_30638;
(statearr_30667[(12)] = inst_30631);

return statearr_30667;
})();
var statearr_30668_32830 = state_30638__$1;
(statearr_30668_32830[(2)] = null);

(statearr_30668_32830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (10))){
var inst_30604 = (state_30638[(2)]);
var inst_30605 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30638__$1 = (function (){var statearr_30671 = state_30638;
(statearr_30671[(13)] = inst_30604);

return statearr_30671;
})();
var statearr_30672_32836 = state_30638__$1;
(statearr_30672_32836[(2)] = inst_30605);


cljs.core.async.impl.ioc_helpers.process_exception(state_30638__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (8))){
var inst_30619 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
var statearr_30673_32842 = state_30638__$1;
(statearr_30673_32842[(2)] = inst_30619);

(statearr_30673_32842[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__28058__auto__ = null;
var cljs$core$async$state_machine__28058__auto____0 = (function (){
var statearr_30676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30676[(0)] = cljs$core$async$state_machine__28058__auto__);

(statearr_30676[(1)] = (1));

return statearr_30676;
});
var cljs$core$async$state_machine__28058__auto____1 = (function (state_30638){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_30638);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e30677){if((e30677 instanceof Object)){
var ex__28061__auto__ = e30677;
var statearr_30678_32862 = state_30638;
(statearr_30678_32862[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32870 = state_30638;
state_30638 = G__32870;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$state_machine__28058__auto__ = function(state_30638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28058__auto____1.call(this,state_30638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28058__auto____0;
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28058__auto____1;
return cljs$core$async$state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_30679 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_30679[(6)] = c__28418__auto___32788);

return statearr_30679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
}));


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
var G__30682 = arguments.length;
switch (G__30682) {
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
var c__28418__auto___32879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_30716){
var state_val_30717 = (state_30716[(1)]);
if((state_val_30717 === (7))){
var inst_30694 = (state_30716[(7)]);
var inst_30695 = (state_30716[(8)]);
var inst_30694__$1 = (state_30716[(2)]);
var inst_30695__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30694__$1,(0),null);
var inst_30696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30694__$1,(1),null);
var inst_30697 = (inst_30695__$1 == null);
var state_30716__$1 = (function (){var statearr_30719 = state_30716;
(statearr_30719[(7)] = inst_30694__$1);

(statearr_30719[(9)] = inst_30696);

(statearr_30719[(8)] = inst_30695__$1);

return statearr_30719;
})();
if(cljs.core.truth_(inst_30697)){
var statearr_30720_32884 = state_30716__$1;
(statearr_30720_32884[(1)] = (8));

} else {
var statearr_30721_32888 = state_30716__$1;
(statearr_30721_32888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (1))){
var inst_30684 = cljs.core.vec(chs);
var inst_30685 = inst_30684;
var state_30716__$1 = (function (){var statearr_30722 = state_30716;
(statearr_30722[(10)] = inst_30685);

return statearr_30722;
})();
var statearr_30723_32891 = state_30716__$1;
(statearr_30723_32891[(2)] = null);

(statearr_30723_32891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (4))){
var inst_30685 = (state_30716[(10)]);
var state_30716__$1 = state_30716;
return cljs.core.async.ioc_alts_BANG_(state_30716__$1,(7),inst_30685);
} else {
if((state_val_30717 === (6))){
var inst_30711 = (state_30716[(2)]);
var state_30716__$1 = state_30716;
var statearr_30724_32894 = state_30716__$1;
(statearr_30724_32894[(2)] = inst_30711);

(statearr_30724_32894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (3))){
var inst_30713 = (state_30716[(2)]);
var state_30716__$1 = state_30716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30716__$1,inst_30713);
} else {
if((state_val_30717 === (2))){
var inst_30685 = (state_30716[(10)]);
var inst_30687 = cljs.core.count(inst_30685);
var inst_30688 = (inst_30687 > (0));
var state_30716__$1 = state_30716;
if(cljs.core.truth_(inst_30688)){
var statearr_30726_32899 = state_30716__$1;
(statearr_30726_32899[(1)] = (4));

} else {
var statearr_30727_32901 = state_30716__$1;
(statearr_30727_32901[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (11))){
var inst_30685 = (state_30716[(10)]);
var inst_30704 = (state_30716[(2)]);
var tmp30725 = inst_30685;
var inst_30685__$1 = tmp30725;
var state_30716__$1 = (function (){var statearr_30728 = state_30716;
(statearr_30728[(11)] = inst_30704);

(statearr_30728[(10)] = inst_30685__$1);

return statearr_30728;
})();
var statearr_30729_32906 = state_30716__$1;
(statearr_30729_32906[(2)] = null);

(statearr_30729_32906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (9))){
var inst_30695 = (state_30716[(8)]);
var state_30716__$1 = state_30716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30716__$1,(11),out,inst_30695);
} else {
if((state_val_30717 === (5))){
var inst_30709 = cljs.core.async.close_BANG_(out);
var state_30716__$1 = state_30716;
var statearr_30734_32910 = state_30716__$1;
(statearr_30734_32910[(2)] = inst_30709);

(statearr_30734_32910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (10))){
var inst_30707 = (state_30716[(2)]);
var state_30716__$1 = state_30716;
var statearr_30735_32915 = state_30716__$1;
(statearr_30735_32915[(2)] = inst_30707);

(statearr_30735_32915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30717 === (8))){
var inst_30694 = (state_30716[(7)]);
var inst_30685 = (state_30716[(10)]);
var inst_30696 = (state_30716[(9)]);
var inst_30695 = (state_30716[(8)]);
var inst_30699 = (function (){var cs = inst_30685;
var vec__30690 = inst_30694;
var v = inst_30695;
var c = inst_30696;
return (function (p1__30680_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30680_SHARP_);
});
})();
var inst_30700 = cljs.core.filterv(inst_30699,inst_30685);
var inst_30685__$1 = inst_30700;
var state_30716__$1 = (function (){var statearr_30738 = state_30716;
(statearr_30738[(10)] = inst_30685__$1);

return statearr_30738;
})();
var statearr_30739_32920 = state_30716__$1;
(statearr_30739_32920[(2)] = null);

(statearr_30739_32920[(1)] = (2));


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
var cljs$core$async$state_machine__28058__auto__ = null;
var cljs$core$async$state_machine__28058__auto____0 = (function (){
var statearr_30740 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30740[(0)] = cljs$core$async$state_machine__28058__auto__);

(statearr_30740[(1)] = (1));

return statearr_30740;
});
var cljs$core$async$state_machine__28058__auto____1 = (function (state_30716){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_30716);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e30741){if((e30741 instanceof Object)){
var ex__28061__auto__ = e30741;
var statearr_30742_32933 = state_30716;
(statearr_30742_32933[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30741;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32938 = state_30716;
state_30716 = G__32938;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$state_machine__28058__auto__ = function(state_30716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28058__auto____1.call(this,state_30716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28058__auto____0;
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28058__auto____1;
return cljs$core$async$state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_30744 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_30744[(6)] = c__28418__auto___32879);

return statearr_30744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
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
var G__30748 = arguments.length;
switch (G__30748) {
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
var c__28418__auto___32952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_30774){
var state_val_30775 = (state_30774[(1)]);
if((state_val_30775 === (7))){
var inst_30755 = (state_30774[(7)]);
var inst_30755__$1 = (state_30774[(2)]);
var inst_30756 = (inst_30755__$1 == null);
var inst_30757 = cljs.core.not(inst_30756);
var state_30774__$1 = (function (){var statearr_30776 = state_30774;
(statearr_30776[(7)] = inst_30755__$1);

return statearr_30776;
})();
if(inst_30757){
var statearr_30779_32955 = state_30774__$1;
(statearr_30779_32955[(1)] = (8));

} else {
var statearr_30780_32959 = state_30774__$1;
(statearr_30780_32959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (1))){
var inst_30750 = (0);
var state_30774__$1 = (function (){var statearr_30781 = state_30774;
(statearr_30781[(8)] = inst_30750);

return statearr_30781;
})();
var statearr_30782_32960 = state_30774__$1;
(statearr_30782_32960[(2)] = null);

(statearr_30782_32960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (4))){
var state_30774__$1 = state_30774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30774__$1,(7),ch);
} else {
if((state_val_30775 === (6))){
var inst_30769 = (state_30774[(2)]);
var state_30774__$1 = state_30774;
var statearr_30785_32963 = state_30774__$1;
(statearr_30785_32963[(2)] = inst_30769);

(statearr_30785_32963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (3))){
var inst_30771 = (state_30774[(2)]);
var inst_30772 = cljs.core.async.close_BANG_(out);
var state_30774__$1 = (function (){var statearr_30787 = state_30774;
(statearr_30787[(9)] = inst_30771);

return statearr_30787;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30774__$1,inst_30772);
} else {
if((state_val_30775 === (2))){
var inst_30750 = (state_30774[(8)]);
var inst_30752 = (inst_30750 < n);
var state_30774__$1 = state_30774;
if(cljs.core.truth_(inst_30752)){
var statearr_30788_32972 = state_30774__$1;
(statearr_30788_32972[(1)] = (4));

} else {
var statearr_30790_32973 = state_30774__$1;
(statearr_30790_32973[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (11))){
var inst_30750 = (state_30774[(8)]);
var inst_30760 = (state_30774[(2)]);
var inst_30762 = (inst_30750 + (1));
var inst_30750__$1 = inst_30762;
var state_30774__$1 = (function (){var statearr_30791 = state_30774;
(statearr_30791[(10)] = inst_30760);

(statearr_30791[(8)] = inst_30750__$1);

return statearr_30791;
})();
var statearr_30793_32979 = state_30774__$1;
(statearr_30793_32979[(2)] = null);

(statearr_30793_32979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (9))){
var state_30774__$1 = state_30774;
var statearr_30794_32986 = state_30774__$1;
(statearr_30794_32986[(2)] = null);

(statearr_30794_32986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (5))){
var state_30774__$1 = state_30774;
var statearr_30795_32988 = state_30774__$1;
(statearr_30795_32988[(2)] = null);

(statearr_30795_32988[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (10))){
var inst_30766 = (state_30774[(2)]);
var state_30774__$1 = state_30774;
var statearr_30797_33004 = state_30774__$1;
(statearr_30797_33004[(2)] = inst_30766);

(statearr_30797_33004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30775 === (8))){
var inst_30755 = (state_30774[(7)]);
var state_30774__$1 = state_30774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30774__$1,(11),out,inst_30755);
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
var cljs$core$async$state_machine__28058__auto__ = null;
var cljs$core$async$state_machine__28058__auto____0 = (function (){
var statearr_30800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30800[(0)] = cljs$core$async$state_machine__28058__auto__);

(statearr_30800[(1)] = (1));

return statearr_30800;
});
var cljs$core$async$state_machine__28058__auto____1 = (function (state_30774){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_30774);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e30803){if((e30803 instanceof Object)){
var ex__28061__auto__ = e30803;
var statearr_30804_33023 = state_30774;
(statearr_30804_33023[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30803;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33030 = state_30774;
state_30774 = G__33030;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$state_machine__28058__auto__ = function(state_30774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28058__auto____1.call(this,state_30774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28058__auto____0;
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28058__auto____1;
return cljs$core$async$state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_30806 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_30806[(6)] = c__28418__auto___32952);

return statearr_30806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30808 = (function (f,ch,meta30809){
this.f = f;
this.ch = ch;
this.meta30809 = meta30809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30810,meta30809__$1){
var self__ = this;
var _30810__$1 = this;
return (new cljs.core.async.t_cljs$core$async30808(self__.f,self__.ch,meta30809__$1));
}));

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30810){
var self__ = this;
var _30810__$1 = this;
return self__.meta30809;
}));

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30814 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30814 = (function (f,ch,meta30809,_,fn1,meta30815){
this.f = f;
this.ch = ch;
this.meta30809 = meta30809;
this._ = _;
this.fn1 = fn1;
this.meta30815 = meta30815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30816,meta30815__$1){
var self__ = this;
var _30816__$1 = this;
return (new cljs.core.async.t_cljs$core$async30814(self__.f,self__.ch,self__.meta30809,self__._,self__.fn1,meta30815__$1));
}));

(cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30816){
var self__ = this;
var _30816__$1 = this;
return self__.meta30815;
}));

(cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30814.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__30807_SHARP_){
var G__30822 = (((p1__30807_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__30807_SHARP_) : self__.f.call(null,p1__30807_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30822) : f1.call(null,G__30822));
});
}));

(cljs.core.async.t_cljs$core$async30814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30809","meta30809",1884724072,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30808","cljs.core.async/t_cljs$core$async30808",1654979371,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30815","meta30815",-1002893388,null)], null);
}));

(cljs.core.async.t_cljs$core$async30814.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30814");

(cljs.core.async.t_cljs$core$async30814.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30814");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30814.
 */
cljs.core.async.__GT_t_cljs$core$async30814 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30814(f__$1,ch__$1,meta30809__$1,___$2,fn1__$1,meta30815){
return (new cljs.core.async.t_cljs$core$async30814(f__$1,ch__$1,meta30809__$1,___$2,fn1__$1,meta30815));
});

}

return (new cljs.core.async.t_cljs$core$async30814(self__.f,self__.ch,self__.meta30809,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30831 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30831) : self__.f.call(null,G__30831));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30808.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async30808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30809","meta30809",1884724072,null)], null);
}));

(cljs.core.async.t_cljs$core$async30808.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30808");

(cljs.core.async.t_cljs$core$async30808.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30808");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30808.
 */
cljs.core.async.__GT_t_cljs$core$async30808 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30808(f__$1,ch__$1,meta30809){
return (new cljs.core.async.t_cljs$core$async30808(f__$1,ch__$1,meta30809));
});

}

return (new cljs.core.async.t_cljs$core$async30808(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30839 = (function (f,ch,meta30840){
this.f = f;
this.ch = ch;
this.meta30840 = meta30840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30841,meta30840__$1){
var self__ = this;
var _30841__$1 = this;
return (new cljs.core.async.t_cljs$core$async30839(self__.f,self__.ch,meta30840__$1));
}));

(cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30841){
var self__ = this;
var _30841__$1 = this;
return self__.meta30840;
}));

(cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30839.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async30839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30840","meta30840",1198383936,null)], null);
}));

(cljs.core.async.t_cljs$core$async30839.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30839");

(cljs.core.async.t_cljs$core$async30839.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30839");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30839.
 */
cljs.core.async.__GT_t_cljs$core$async30839 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30839(f__$1,ch__$1,meta30840){
return (new cljs.core.async.t_cljs$core$async30839(f__$1,ch__$1,meta30840));
});

}

return (new cljs.core.async.t_cljs$core$async30839(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30855 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30855 = (function (p,ch,meta30856){
this.p = p;
this.ch = ch;
this.meta30856 = meta30856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30857,meta30856__$1){
var self__ = this;
var _30857__$1 = this;
return (new cljs.core.async.t_cljs$core$async30855(self__.p,self__.ch,meta30856__$1));
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30857){
var self__ = this;
var _30857__$1 = this;
return self__.meta30856;
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async30855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30856","meta30856",1737564773,null)], null);
}));

(cljs.core.async.t_cljs$core$async30855.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30855");

(cljs.core.async.t_cljs$core$async30855.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30855");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30855.
 */
cljs.core.async.__GT_t_cljs$core$async30855 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30855(p__$1,ch__$1,meta30856){
return (new cljs.core.async.t_cljs$core$async30855(p__$1,ch__$1,meta30856));
});

}

return (new cljs.core.async.t_cljs$core$async30855(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30877 = arguments.length;
switch (G__30877) {
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
var c__28418__auto___33166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_30903){
var state_val_30904 = (state_30903[(1)]);
if((state_val_30904 === (7))){
var inst_30899 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_30906_33172 = state_30903__$1;
(statearr_30906_33172[(2)] = inst_30899);

(statearr_30906_33172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (1))){
var state_30903__$1 = state_30903;
var statearr_30907_33185 = state_30903__$1;
(statearr_30907_33185[(2)] = null);

(statearr_30907_33185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (4))){
var inst_30882 = (state_30903[(7)]);
var inst_30882__$1 = (state_30903[(2)]);
var inst_30883 = (inst_30882__$1 == null);
var state_30903__$1 = (function (){var statearr_30909 = state_30903;
(statearr_30909[(7)] = inst_30882__$1);

return statearr_30909;
})();
if(cljs.core.truth_(inst_30883)){
var statearr_30910_33194 = state_30903__$1;
(statearr_30910_33194[(1)] = (5));

} else {
var statearr_30912_33196 = state_30903__$1;
(statearr_30912_33196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (6))){
var inst_30882 = (state_30903[(7)]);
var inst_30887 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30882) : p.call(null,inst_30882));
var state_30903__$1 = state_30903;
if(cljs.core.truth_(inst_30887)){
var statearr_30913_33209 = state_30903__$1;
(statearr_30913_33209[(1)] = (8));

} else {
var statearr_30915_33215 = state_30903__$1;
(statearr_30915_33215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (3))){
var inst_30901 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30903__$1,inst_30901);
} else {
if((state_val_30904 === (2))){
var state_30903__$1 = state_30903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30903__$1,(4),ch);
} else {
if((state_val_30904 === (11))){
var inst_30893 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_30916_33231 = state_30903__$1;
(statearr_30916_33231[(2)] = inst_30893);

(statearr_30916_33231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (9))){
var state_30903__$1 = state_30903;
var statearr_30917_33236 = state_30903__$1;
(statearr_30917_33236[(2)] = null);

(statearr_30917_33236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (5))){
var inst_30885 = cljs.core.async.close_BANG_(out);
var state_30903__$1 = state_30903;
var statearr_30920_33246 = state_30903__$1;
(statearr_30920_33246[(2)] = inst_30885);

(statearr_30920_33246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (10))){
var inst_30896 = (state_30903[(2)]);
var state_30903__$1 = (function (){var statearr_30922 = state_30903;
(statearr_30922[(8)] = inst_30896);

return statearr_30922;
})();
var statearr_30924_33258 = state_30903__$1;
(statearr_30924_33258[(2)] = null);

(statearr_30924_33258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (8))){
var inst_30882 = (state_30903[(7)]);
var state_30903__$1 = state_30903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30903__$1,(11),out,inst_30882);
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
var cljs$core$async$state_machine__28058__auto__ = null;
var cljs$core$async$state_machine__28058__auto____0 = (function (){
var statearr_30925 = [null,null,null,null,null,null,null,null,null];
(statearr_30925[(0)] = cljs$core$async$state_machine__28058__auto__);

(statearr_30925[(1)] = (1));

return statearr_30925;
});
var cljs$core$async$state_machine__28058__auto____1 = (function (state_30903){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_30903);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e30926){if((e30926 instanceof Object)){
var ex__28061__auto__ = e30926;
var statearr_30927_33286 = state_30903;
(statearr_30927_33286[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30926;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33295 = state_30903;
state_30903 = G__33295;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$state_machine__28058__auto__ = function(state_30903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28058__auto____1.call(this,state_30903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28058__auto____0;
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28058__auto____1;
return cljs$core$async$state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_30928 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_30928[(6)] = c__28418__auto___33166);

return statearr_30928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30931 = arguments.length;
switch (G__30931) {
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
var c__28418__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_30998){
var state_val_30999 = (state_30998[(1)]);
if((state_val_30999 === (7))){
var inst_30993 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31004_33334 = state_30998__$1;
(statearr_31004_33334[(2)] = inst_30993);

(statearr_31004_33334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (20))){
var inst_30961 = (state_30998[(7)]);
var inst_30972 = (state_30998[(2)]);
var inst_30973 = cljs.core.next(inst_30961);
var inst_30947 = inst_30973;
var inst_30948 = null;
var inst_30949 = (0);
var inst_30950 = (0);
var state_30998__$1 = (function (){var statearr_31007 = state_30998;
(statearr_31007[(8)] = inst_30950);

(statearr_31007[(9)] = inst_30972);

(statearr_31007[(10)] = inst_30947);

(statearr_31007[(11)] = inst_30948);

(statearr_31007[(12)] = inst_30949);

return statearr_31007;
})();
var statearr_31008_33342 = state_30998__$1;
(statearr_31008_33342[(2)] = null);

(statearr_31008_33342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (1))){
var state_30998__$1 = state_30998;
var statearr_31017_33343 = state_30998__$1;
(statearr_31017_33343[(2)] = null);

(statearr_31017_33343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (4))){
var inst_30936 = (state_30998[(13)]);
var inst_30936__$1 = (state_30998[(2)]);
var inst_30937 = (inst_30936__$1 == null);
var state_30998__$1 = (function (){var statearr_31025 = state_30998;
(statearr_31025[(13)] = inst_30936__$1);

return statearr_31025;
})();
if(cljs.core.truth_(inst_30937)){
var statearr_31027_33356 = state_30998__$1;
(statearr_31027_33356[(1)] = (5));

} else {
var statearr_31028_33357 = state_30998__$1;
(statearr_31028_33357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (15))){
var state_30998__$1 = state_30998;
var statearr_31032_33359 = state_30998__$1;
(statearr_31032_33359[(2)] = null);

(statearr_31032_33359[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (21))){
var state_30998__$1 = state_30998;
var statearr_31037_33360 = state_30998__$1;
(statearr_31037_33360[(2)] = null);

(statearr_31037_33360[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (13))){
var inst_30950 = (state_30998[(8)]);
var inst_30947 = (state_30998[(10)]);
var inst_30948 = (state_30998[(11)]);
var inst_30949 = (state_30998[(12)]);
var inst_30957 = (state_30998[(2)]);
var inst_30958 = (inst_30950 + (1));
var tmp31029 = inst_30947;
var tmp31030 = inst_30948;
var tmp31031 = inst_30949;
var inst_30947__$1 = tmp31029;
var inst_30948__$1 = tmp31030;
var inst_30949__$1 = tmp31031;
var inst_30950__$1 = inst_30958;
var state_30998__$1 = (function (){var statearr_31039 = state_30998;
(statearr_31039[(8)] = inst_30950__$1);

(statearr_31039[(14)] = inst_30957);

(statearr_31039[(10)] = inst_30947__$1);

(statearr_31039[(11)] = inst_30948__$1);

(statearr_31039[(12)] = inst_30949__$1);

return statearr_31039;
})();
var statearr_31040_33363 = state_30998__$1;
(statearr_31040_33363[(2)] = null);

(statearr_31040_33363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (22))){
var state_30998__$1 = state_30998;
var statearr_31041_33365 = state_30998__$1;
(statearr_31041_33365[(2)] = null);

(statearr_31041_33365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (6))){
var inst_30936 = (state_30998[(13)]);
var inst_30945 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30936) : f.call(null,inst_30936));
var inst_30946 = cljs.core.seq(inst_30945);
var inst_30947 = inst_30946;
var inst_30948 = null;
var inst_30949 = (0);
var inst_30950 = (0);
var state_30998__$1 = (function (){var statearr_31042 = state_30998;
(statearr_31042[(8)] = inst_30950);

(statearr_31042[(10)] = inst_30947);

(statearr_31042[(11)] = inst_30948);

(statearr_31042[(12)] = inst_30949);

return statearr_31042;
})();
var statearr_31043_33375 = state_30998__$1;
(statearr_31043_33375[(2)] = null);

(statearr_31043_33375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (17))){
var inst_30961 = (state_30998[(7)]);
var inst_30965 = cljs.core.chunk_first(inst_30961);
var inst_30966 = cljs.core.chunk_rest(inst_30961);
var inst_30967 = cljs.core.count(inst_30965);
var inst_30947 = inst_30966;
var inst_30948 = inst_30965;
var inst_30949 = inst_30967;
var inst_30950 = (0);
var state_30998__$1 = (function (){var statearr_31044 = state_30998;
(statearr_31044[(8)] = inst_30950);

(statearr_31044[(10)] = inst_30947);

(statearr_31044[(11)] = inst_30948);

(statearr_31044[(12)] = inst_30949);

return statearr_31044;
})();
var statearr_31046_33388 = state_30998__$1;
(statearr_31046_33388[(2)] = null);

(statearr_31046_33388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (3))){
var inst_30995 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30998__$1,inst_30995);
} else {
if((state_val_30999 === (12))){
var inst_30981 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31047_33395 = state_30998__$1;
(statearr_31047_33395[(2)] = inst_30981);

(statearr_31047_33395[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (2))){
var state_30998__$1 = state_30998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30998__$1,(4),in$);
} else {
if((state_val_30999 === (23))){
var inst_30991 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31048_33405 = state_30998__$1;
(statearr_31048_33405[(2)] = inst_30991);

(statearr_31048_33405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (19))){
var inst_30976 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31049_33408 = state_30998__$1;
(statearr_31049_33408[(2)] = inst_30976);

(statearr_31049_33408[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (11))){
var inst_30947 = (state_30998[(10)]);
var inst_30961 = (state_30998[(7)]);
var inst_30961__$1 = cljs.core.seq(inst_30947);
var state_30998__$1 = (function (){var statearr_31050 = state_30998;
(statearr_31050[(7)] = inst_30961__$1);

return statearr_31050;
})();
if(inst_30961__$1){
var statearr_31054_33415 = state_30998__$1;
(statearr_31054_33415[(1)] = (14));

} else {
var statearr_31055_33417 = state_30998__$1;
(statearr_31055_33417[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (9))){
var inst_30983 = (state_30998[(2)]);
var inst_30984 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_30998__$1 = (function (){var statearr_31056 = state_30998;
(statearr_31056[(15)] = inst_30983);

return statearr_31056;
})();
if(cljs.core.truth_(inst_30984)){
var statearr_31057_33426 = state_30998__$1;
(statearr_31057_33426[(1)] = (21));

} else {
var statearr_31058_33429 = state_30998__$1;
(statearr_31058_33429[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (5))){
var inst_30939 = cljs.core.async.close_BANG_(out);
var state_30998__$1 = state_30998;
var statearr_31059_33437 = state_30998__$1;
(statearr_31059_33437[(2)] = inst_30939);

(statearr_31059_33437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (14))){
var inst_30961 = (state_30998[(7)]);
var inst_30963 = cljs.core.chunked_seq_QMARK_(inst_30961);
var state_30998__$1 = state_30998;
if(inst_30963){
var statearr_31060_33443 = state_30998__$1;
(statearr_31060_33443[(1)] = (17));

} else {
var statearr_31061_33445 = state_30998__$1;
(statearr_31061_33445[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (16))){
var inst_30979 = (state_30998[(2)]);
var state_30998__$1 = state_30998;
var statearr_31062_33453 = state_30998__$1;
(statearr_31062_33453[(2)] = inst_30979);

(statearr_31062_33453[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30999 === (10))){
var inst_30950 = (state_30998[(8)]);
var inst_30948 = (state_30998[(11)]);
var inst_30955 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30948,inst_30950);
var state_30998__$1 = state_30998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30998__$1,(13),out,inst_30955);
} else {
if((state_val_30999 === (18))){
var inst_30961 = (state_30998[(7)]);
var inst_30970 = cljs.core.first(inst_30961);
var state_30998__$1 = state_30998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30998__$1,(20),out,inst_30970);
} else {
if((state_val_30999 === (8))){
var inst_30950 = (state_30998[(8)]);
var inst_30949 = (state_30998[(12)]);
var inst_30952 = (inst_30950 < inst_30949);
var inst_30953 = inst_30952;
var state_30998__$1 = state_30998;
if(cljs.core.truth_(inst_30953)){
var statearr_31068_33474 = state_30998__$1;
(statearr_31068_33474[(1)] = (10));

} else {
var statearr_31069_33475 = state_30998__$1;
(statearr_31069_33475[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28058__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28058__auto____0 = (function (){
var statearr_31070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31070[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28058__auto__);

(statearr_31070[(1)] = (1));

return statearr_31070;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28058__auto____1 = (function (state_30998){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_30998);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e31071){if((e31071 instanceof Object)){
var ex__28061__auto__ = e31071;
var statearr_31072_33492 = state_30998;
(statearr_31072_33492[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31071;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33493 = state_30998;
state_30998 = G__33493;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28058__auto__ = function(state_30998){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28058__auto____1.call(this,state_30998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28058__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28058__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_31073 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_31073[(6)] = c__28418__auto__);

return statearr_31073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
}));

return c__28418__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31077 = arguments.length;
switch (G__31077) {
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
var G__31082 = arguments.length;
switch (G__31082) {
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
var G__31094 = arguments.length;
switch (G__31094) {
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
var c__28418__auto___33516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_31119){
var state_val_31120 = (state_31119[(1)]);
if((state_val_31120 === (7))){
var inst_31113 = (state_31119[(2)]);
var state_31119__$1 = state_31119;
var statearr_31123_33517 = state_31119__$1;
(statearr_31123_33517[(2)] = inst_31113);

(statearr_31123_33517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (1))){
var inst_31095 = null;
var state_31119__$1 = (function (){var statearr_31124 = state_31119;
(statearr_31124[(7)] = inst_31095);

return statearr_31124;
})();
var statearr_31125_33522 = state_31119__$1;
(statearr_31125_33522[(2)] = null);

(statearr_31125_33522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (4))){
var inst_31098 = (state_31119[(8)]);
var inst_31098__$1 = (state_31119[(2)]);
var inst_31099 = (inst_31098__$1 == null);
var inst_31100 = cljs.core.not(inst_31099);
var state_31119__$1 = (function (){var statearr_31126 = state_31119;
(statearr_31126[(8)] = inst_31098__$1);

return statearr_31126;
})();
if(inst_31100){
var statearr_31127_33537 = state_31119__$1;
(statearr_31127_33537[(1)] = (5));

} else {
var statearr_31128_33538 = state_31119__$1;
(statearr_31128_33538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (6))){
var state_31119__$1 = state_31119;
var statearr_31129_33539 = state_31119__$1;
(statearr_31129_33539[(2)] = null);

(statearr_31129_33539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (3))){
var inst_31115 = (state_31119[(2)]);
var inst_31116 = cljs.core.async.close_BANG_(out);
var state_31119__$1 = (function (){var statearr_31131 = state_31119;
(statearr_31131[(9)] = inst_31115);

return statearr_31131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31119__$1,inst_31116);
} else {
if((state_val_31120 === (2))){
var state_31119__$1 = state_31119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31119__$1,(4),ch);
} else {
if((state_val_31120 === (11))){
var inst_31098 = (state_31119[(8)]);
var inst_31107 = (state_31119[(2)]);
var inst_31095 = inst_31098;
var state_31119__$1 = (function (){var statearr_31136 = state_31119;
(statearr_31136[(10)] = inst_31107);

(statearr_31136[(7)] = inst_31095);

return statearr_31136;
})();
var statearr_31137_33551 = state_31119__$1;
(statearr_31137_33551[(2)] = null);

(statearr_31137_33551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (9))){
var inst_31098 = (state_31119[(8)]);
var state_31119__$1 = state_31119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31119__$1,(11),out,inst_31098);
} else {
if((state_val_31120 === (5))){
var inst_31098 = (state_31119[(8)]);
var inst_31095 = (state_31119[(7)]);
var inst_31102 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31098,inst_31095);
var state_31119__$1 = state_31119;
if(inst_31102){
var statearr_31139_33557 = state_31119__$1;
(statearr_31139_33557[(1)] = (8));

} else {
var statearr_31140_33558 = state_31119__$1;
(statearr_31140_33558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (10))){
var inst_31110 = (state_31119[(2)]);
var state_31119__$1 = state_31119;
var statearr_31141_33562 = state_31119__$1;
(statearr_31141_33562[(2)] = inst_31110);

(statearr_31141_33562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (8))){
var inst_31095 = (state_31119[(7)]);
var tmp31138 = inst_31095;
var inst_31095__$1 = tmp31138;
var state_31119__$1 = (function (){var statearr_31143 = state_31119;
(statearr_31143[(7)] = inst_31095__$1);

return statearr_31143;
})();
var statearr_31144_33567 = state_31119__$1;
(statearr_31144_33567[(2)] = null);

(statearr_31144_33567[(1)] = (2));


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
var cljs$core$async$state_machine__28058__auto__ = null;
var cljs$core$async$state_machine__28058__auto____0 = (function (){
var statearr_31145 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31145[(0)] = cljs$core$async$state_machine__28058__auto__);

(statearr_31145[(1)] = (1));

return statearr_31145;
});
var cljs$core$async$state_machine__28058__auto____1 = (function (state_31119){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_31119);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e31148){if((e31148 instanceof Object)){
var ex__28061__auto__ = e31148;
var statearr_31150_33578 = state_31119;
(statearr_31150_33578[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31148;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33584 = state_31119;
state_31119 = G__33584;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$state_machine__28058__auto__ = function(state_31119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28058__auto____1.call(this,state_31119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28058__auto____0;
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28058__auto____1;
return cljs$core$async$state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_31151 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_31151[(6)] = c__28418__auto___33516);

return statearr_31151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31154 = arguments.length;
switch (G__31154) {
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
var c__28418__auto___33606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_31195){
var state_val_31196 = (state_31195[(1)]);
if((state_val_31196 === (7))){
var inst_31189 = (state_31195[(2)]);
var state_31195__$1 = state_31195;
var statearr_31206_33607 = state_31195__$1;
(statearr_31206_33607[(2)] = inst_31189);

(statearr_31206_33607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31196 === (1))){
var inst_31156 = (new Array(n));
var inst_31157 = inst_31156;
var inst_31158 = (0);
var state_31195__$1 = (function (){var statearr_31207 = state_31195;
(statearr_31207[(7)] = inst_31157);

(statearr_31207[(8)] = inst_31158);

return statearr_31207;
})();
var statearr_31208_33610 = state_31195__$1;
(statearr_31208_33610[(2)] = null);

(statearr_31208_33610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31196 === (4))){
var inst_31161 = (state_31195[(9)]);
var inst_31161__$1 = (state_31195[(2)]);
var inst_31162 = (inst_31161__$1 == null);
var inst_31163 = cljs.core.not(inst_31162);
var state_31195__$1 = (function (){var statearr_31209 = state_31195;
(statearr_31209[(9)] = inst_31161__$1);

return statearr_31209;
})();
if(inst_31163){
var statearr_31210_33613 = state_31195__$1;
(statearr_31210_33613[(1)] = (5));

} else {
var statearr_31212_33614 = state_31195__$1;
(statearr_31212_33614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31196 === (15))){
var inst_31183 = (state_31195[(2)]);
var state_31195__$1 = state_31195;
var statearr_31214_33615 = state_31195__$1;
(statearr_31214_33615[(2)] = inst_31183);

(statearr_31214_33615[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31196 === (13))){
var state_31195__$1 = state_31195;
var statearr_31217_33618 = state_31195__$1;
(statearr_31217_33618[(2)] = null);

(statearr_31217_33618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31196 === (6))){
var inst_31158 = (state_31195[(8)]);
var inst_31179 = (inst_31158 > (0));
var state_31195__$1 = state_31195;
if(cljs.core.truth_(inst_31179)){
var statearr_31219_33622 = state_31195__$1;
(statearr_31219_33622[(1)] = (12));

} else {
var statearr_31220_33623 = state_31195__$1;
(statearr_31220_33623[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31196 === (3))){
var inst_31191 = (state_31195[(2)]);
var state_31195__$1 = state_31195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31195__$1,inst_31191);
} else {
if((state_val_31196 === (12))){
var inst_31157 = (state_31195[(7)]);
var inst_31181 = cljs.core.vec(inst_31157);
var state_31195__$1 = state_31195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31195__$1,(15),out,inst_31181);
} else {
if((state_val_31196 === (2))){
var state_31195__$1 = state_31195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31195__$1,(4),ch);
} else {
if((state_val_31196 === (11))){
var inst_31173 = (state_31195[(2)]);
var inst_31174 = (new Array(n));
var inst_31157 = inst_31174;
var inst_31158 = (0);
var state_31195__$1 = (function (){var statearr_31224 = state_31195;
(statearr_31224[(7)] = inst_31157);

(statearr_31224[(10)] = inst_31173);

(statearr_31224[(8)] = inst_31158);

return statearr_31224;
})();
var statearr_31225_33625 = state_31195__$1;
(statearr_31225_33625[(2)] = null);

(statearr_31225_33625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31196 === (9))){
var inst_31157 = (state_31195[(7)]);
var inst_31171 = cljs.core.vec(inst_31157);
var state_31195__$1 = state_31195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31195__$1,(11),out,inst_31171);
} else {
if((state_val_31196 === (5))){
var inst_31166 = (state_31195[(11)]);
var inst_31157 = (state_31195[(7)]);
var inst_31158 = (state_31195[(8)]);
var inst_31161 = (state_31195[(9)]);
var inst_31165 = (inst_31157[inst_31158] = inst_31161);
var inst_31166__$1 = (inst_31158 + (1));
var inst_31167 = (inst_31166__$1 < n);
var state_31195__$1 = (function (){var statearr_31227 = state_31195;
(statearr_31227[(11)] = inst_31166__$1);

(statearr_31227[(12)] = inst_31165);

return statearr_31227;
})();
if(cljs.core.truth_(inst_31167)){
var statearr_31228_33631 = state_31195__$1;
(statearr_31228_33631[(1)] = (8));

} else {
var statearr_31229_33632 = state_31195__$1;
(statearr_31229_33632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31196 === (14))){
var inst_31186 = (state_31195[(2)]);
var inst_31187 = cljs.core.async.close_BANG_(out);
var state_31195__$1 = (function (){var statearr_31231 = state_31195;
(statearr_31231[(13)] = inst_31186);

return statearr_31231;
})();
var statearr_31232_33635 = state_31195__$1;
(statearr_31232_33635[(2)] = inst_31187);

(statearr_31232_33635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31196 === (10))){
var inst_31177 = (state_31195[(2)]);
var state_31195__$1 = state_31195;
var statearr_31233_33636 = state_31195__$1;
(statearr_31233_33636[(2)] = inst_31177);

(statearr_31233_33636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31196 === (8))){
var inst_31166 = (state_31195[(11)]);
var inst_31157 = (state_31195[(7)]);
var tmp31230 = inst_31157;
var inst_31157__$1 = tmp31230;
var inst_31158 = inst_31166;
var state_31195__$1 = (function (){var statearr_31235 = state_31195;
(statearr_31235[(7)] = inst_31157__$1);

(statearr_31235[(8)] = inst_31158);

return statearr_31235;
})();
var statearr_31236_33639 = state_31195__$1;
(statearr_31236_33639[(2)] = null);

(statearr_31236_33639[(1)] = (2));


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
var cljs$core$async$state_machine__28058__auto__ = null;
var cljs$core$async$state_machine__28058__auto____0 = (function (){
var statearr_31237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31237[(0)] = cljs$core$async$state_machine__28058__auto__);

(statearr_31237[(1)] = (1));

return statearr_31237;
});
var cljs$core$async$state_machine__28058__auto____1 = (function (state_31195){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_31195);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e31238){if((e31238 instanceof Object)){
var ex__28061__auto__ = e31238;
var statearr_31239_33649 = state_31195;
(statearr_31239_33649[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31238;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33655 = state_31195;
state_31195 = G__33655;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$state_machine__28058__auto__ = function(state_31195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28058__auto____1.call(this,state_31195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28058__auto____0;
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28058__auto____1;
return cljs$core$async$state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_31242 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_31242[(6)] = c__28418__auto___33606);

return statearr_31242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31251 = arguments.length;
switch (G__31251) {
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
var c__28418__auto___33675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28419__auto__ = (function (){var switch__28057__auto__ = (function (state_31298){
var state_val_31299 = (state_31298[(1)]);
if((state_val_31299 === (7))){
var inst_31294 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31301_33677 = state_31298__$1;
(statearr_31301_33677[(2)] = inst_31294);

(statearr_31301_33677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (1))){
var inst_31255 = [];
var inst_31256 = inst_31255;
var inst_31257 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31298__$1 = (function (){var statearr_31304 = state_31298;
(statearr_31304[(7)] = inst_31256);

(statearr_31304[(8)] = inst_31257);

return statearr_31304;
})();
var statearr_31305_33685 = state_31298__$1;
(statearr_31305_33685[(2)] = null);

(statearr_31305_33685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (4))){
var inst_31262 = (state_31298[(9)]);
var inst_31262__$1 = (state_31298[(2)]);
var inst_31263 = (inst_31262__$1 == null);
var inst_31264 = cljs.core.not(inst_31263);
var state_31298__$1 = (function (){var statearr_31306 = state_31298;
(statearr_31306[(9)] = inst_31262__$1);

return statearr_31306;
})();
if(inst_31264){
var statearr_31307_33687 = state_31298__$1;
(statearr_31307_33687[(1)] = (5));

} else {
var statearr_31308_33688 = state_31298__$1;
(statearr_31308_33688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (15))){
var inst_31288 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31309_33690 = state_31298__$1;
(statearr_31309_33690[(2)] = inst_31288);

(statearr_31309_33690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (13))){
var state_31298__$1 = state_31298;
var statearr_31310_33692 = state_31298__$1;
(statearr_31310_33692[(2)] = null);

(statearr_31310_33692[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (6))){
var inst_31256 = (state_31298[(7)]);
var inst_31283 = inst_31256.length;
var inst_31284 = (inst_31283 > (0));
var state_31298__$1 = state_31298;
if(cljs.core.truth_(inst_31284)){
var statearr_31312_33693 = state_31298__$1;
(statearr_31312_33693[(1)] = (12));

} else {
var statearr_31313_33694 = state_31298__$1;
(statearr_31313_33694[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (3))){
var inst_31296 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31298__$1,inst_31296);
} else {
if((state_val_31299 === (12))){
var inst_31256 = (state_31298[(7)]);
var inst_31286 = cljs.core.vec(inst_31256);
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31298__$1,(15),out,inst_31286);
} else {
if((state_val_31299 === (2))){
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31298__$1,(4),ch);
} else {
if((state_val_31299 === (11))){
var inst_31266 = (state_31298[(10)]);
var inst_31262 = (state_31298[(9)]);
var inst_31276 = (state_31298[(2)]);
var inst_31277 = [];
var inst_31278 = inst_31277.push(inst_31262);
var inst_31256 = inst_31277;
var inst_31257 = inst_31266;
var state_31298__$1 = (function (){var statearr_31314 = state_31298;
(statearr_31314[(11)] = inst_31278);

(statearr_31314[(7)] = inst_31256);

(statearr_31314[(12)] = inst_31276);

(statearr_31314[(8)] = inst_31257);

return statearr_31314;
})();
var statearr_31315_33701 = state_31298__$1;
(statearr_31315_33701[(2)] = null);

(statearr_31315_33701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (9))){
var inst_31256 = (state_31298[(7)]);
var inst_31274 = cljs.core.vec(inst_31256);
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31298__$1,(11),out,inst_31274);
} else {
if((state_val_31299 === (5))){
var inst_31266 = (state_31298[(10)]);
var inst_31262 = (state_31298[(9)]);
var inst_31257 = (state_31298[(8)]);
var inst_31266__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31262) : f.call(null,inst_31262));
var inst_31267 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31266__$1,inst_31257);
var inst_31268 = cljs.core.keyword_identical_QMARK_(inst_31257,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31269 = ((inst_31267) || (inst_31268));
var state_31298__$1 = (function (){var statearr_31317 = state_31298;
(statearr_31317[(10)] = inst_31266__$1);

return statearr_31317;
})();
if(cljs.core.truth_(inst_31269)){
var statearr_31318_33717 = state_31298__$1;
(statearr_31318_33717[(1)] = (8));

} else {
var statearr_31319_33718 = state_31298__$1;
(statearr_31319_33718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (14))){
var inst_31291 = (state_31298[(2)]);
var inst_31292 = cljs.core.async.close_BANG_(out);
var state_31298__$1 = (function (){var statearr_31321 = state_31298;
(statearr_31321[(13)] = inst_31291);

return statearr_31321;
})();
var statearr_31322_33720 = state_31298__$1;
(statearr_31322_33720[(2)] = inst_31292);

(statearr_31322_33720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (10))){
var inst_31281 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31323_33723 = state_31298__$1;
(statearr_31323_33723[(2)] = inst_31281);

(statearr_31323_33723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (8))){
var inst_31266 = (state_31298[(10)]);
var inst_31256 = (state_31298[(7)]);
var inst_31262 = (state_31298[(9)]);
var inst_31271 = inst_31256.push(inst_31262);
var tmp31320 = inst_31256;
var inst_31256__$1 = tmp31320;
var inst_31257 = inst_31266;
var state_31298__$1 = (function (){var statearr_31324 = state_31298;
(statearr_31324[(14)] = inst_31271);

(statearr_31324[(7)] = inst_31256__$1);

(statearr_31324[(8)] = inst_31257);

return statearr_31324;
})();
var statearr_31325_33729 = state_31298__$1;
(statearr_31325_33729[(2)] = null);

(statearr_31325_33729[(1)] = (2));


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
var cljs$core$async$state_machine__28058__auto__ = null;
var cljs$core$async$state_machine__28058__auto____0 = (function (){
var statearr_31329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31329[(0)] = cljs$core$async$state_machine__28058__auto__);

(statearr_31329[(1)] = (1));

return statearr_31329;
});
var cljs$core$async$state_machine__28058__auto____1 = (function (state_31298){
while(true){
var ret_value__28059__auto__ = (function (){try{while(true){
var result__28060__auto__ = switch__28057__auto__(state_31298);
if(cljs.core.keyword_identical_QMARK_(result__28060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28060__auto__;
}
break;
}
}catch (e31331){if((e31331 instanceof Object)){
var ex__28061__auto__ = e31331;
var statearr_31333_33735 = state_31298;
(statearr_31333_33735[(5)] = ex__28061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33737 = state_31298;
state_31298 = G__33737;
continue;
} else {
return ret_value__28059__auto__;
}
break;
}
});
cljs$core$async$state_machine__28058__auto__ = function(state_31298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28058__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28058__auto____1.call(this,state_31298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28058__auto____0;
cljs$core$async$state_machine__28058__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28058__auto____1;
return cljs$core$async$state_machine__28058__auto__;
})()
})();
var state__28420__auto__ = (function (){var statearr_31334 = (f__28419__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28419__auto__.cljs$core$IFn$_invoke$arity$0() : f__28419__auto__.call(null));
(statearr_31334[(6)] = c__28418__auto___33675);

return statearr_31334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28420__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
