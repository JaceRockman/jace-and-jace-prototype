goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29101 = arguments.length;
switch (G__29101) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29133 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29133 = (function (f,blockable,meta29134){
this.f = f;
this.blockable = blockable;
this.meta29134 = meta29134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29135,meta29134__$1){
var self__ = this;
var _29135__$1 = this;
return (new cljs.core.async.t_cljs$core$async29133(self__.f,self__.blockable,meta29134__$1));
}));

(cljs.core.async.t_cljs$core$async29133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29135){
var self__ = this;
var _29135__$1 = this;
return self__.meta29134;
}));

(cljs.core.async.t_cljs$core$async29133.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29133.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29133.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29133.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29133.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29134","meta29134",479876821,null)], null);
}));

(cljs.core.async.t_cljs$core$async29133.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29133");

(cljs.core.async.t_cljs$core$async29133.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29133");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29133.
 */
cljs.core.async.__GT_t_cljs$core$async29133 = (function cljs$core$async$__GT_t_cljs$core$async29133(f__$1,blockable__$1,meta29134){
return (new cljs.core.async.t_cljs$core$async29133(f__$1,blockable__$1,meta29134));
});

}

return (new cljs.core.async.t_cljs$core$async29133(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29200 = arguments.length;
switch (G__29200) {
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
var G__29216 = arguments.length;
switch (G__29216) {
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
var G__29230 = arguments.length;
switch (G__29230) {
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
var val_32928 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32928) : fn1.call(null,val_32928));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32928) : fn1.call(null,val_32928));
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
var G__29267 = arguments.length;
switch (G__29267) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
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
var n__4695__auto___32933 = n;
var x_32934 = (0);
while(true){
if((x_32934 < n__4695__auto___32933)){
(a[x_32934] = x_32934);

var G__32935 = (x_32934 + (1));
x_32934 = G__32935;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29300 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29300 = (function (flag,meta29301){
this.flag = flag;
this.meta29301 = meta29301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29302,meta29301__$1){
var self__ = this;
var _29302__$1 = this;
return (new cljs.core.async.t_cljs$core$async29300(self__.flag,meta29301__$1));
}));

(cljs.core.async.t_cljs$core$async29300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29302){
var self__ = this;
var _29302__$1 = this;
return self__.meta29301;
}));

(cljs.core.async.t_cljs$core$async29300.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29300.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29300.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29300.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29301","meta29301",1868531055,null)], null);
}));

(cljs.core.async.t_cljs$core$async29300.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29300");

(cljs.core.async.t_cljs$core$async29300.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29300");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29300.
 */
cljs.core.async.__GT_t_cljs$core$async29300 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29300(flag__$1,meta29301){
return (new cljs.core.async.t_cljs$core$async29300(flag__$1,meta29301));
});

}

return (new cljs.core.async.t_cljs$core$async29300(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29335 = (function (flag,cb,meta29336){
this.flag = flag;
this.cb = cb;
this.meta29336 = meta29336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29337,meta29336__$1){
var self__ = this;
var _29337__$1 = this;
return (new cljs.core.async.t_cljs$core$async29335(self__.flag,self__.cb,meta29336__$1));
}));

(cljs.core.async.t_cljs$core$async29335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29337){
var self__ = this;
var _29337__$1 = this;
return self__.meta29336;
}));

(cljs.core.async.t_cljs$core$async29335.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29335.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29336","meta29336",-699431764,null)], null);
}));

(cljs.core.async.t_cljs$core$async29335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29335");

(cljs.core.async.t_cljs$core$async29335.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29335.
 */
cljs.core.async.__GT_t_cljs$core$async29335 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29335(flag__$1,cb__$1,meta29336){
return (new cljs.core.async.t_cljs$core$async29335(flag__$1,cb__$1,meta29336));
});

}

return (new cljs.core.async.t_cljs$core$async29335(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29352_SHARP_){
var G__29361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29352_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29361) : fret.call(null,G__29361));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29353_SHARP_){
var G__29364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29353_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29364) : fret.call(null,G__29364));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32952 = (i + (1));
i = G__32952;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4824__auto__ = [];
var len__4818__auto___32953 = arguments.length;
var i__4819__auto___32954 = (0);
while(true){
if((i__4819__auto___32954 < len__4818__auto___32953)){
args__4824__auto__.push((arguments[i__4819__auto___32954]));

var G__32955 = (i__4819__auto___32954 + (1));
i__4819__auto___32954 = G__32955;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29383){
var map__29385 = p__29383;
var map__29385__$1 = cljs.core.__destructure_map(map__29385);
var opts = map__29385__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29376){
var G__29377 = cljs.core.first(seq29376);
var seq29376__$1 = cljs.core.next(seq29376);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29377,seq29376__$1);
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
var G__29398 = arguments.length;
switch (G__29398) {
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
var c__28997__auto___32960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_29453){
var state_val_29460 = (state_29453[(1)]);
if((state_val_29460 === (7))){
var inst_29445 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
var statearr_29469_32962 = state_29453__$1;
(statearr_29469_32962[(2)] = inst_29445);

(statearr_29469_32962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (1))){
var state_29453__$1 = state_29453;
var statearr_29472_32966 = state_29453__$1;
(statearr_29472_32966[(2)] = null);

(statearr_29472_32966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (4))){
var inst_29426 = (state_29453[(7)]);
var inst_29426__$1 = (state_29453[(2)]);
var inst_29427 = (inst_29426__$1 == null);
var state_29453__$1 = (function (){var statearr_29494 = state_29453;
(statearr_29494[(7)] = inst_29426__$1);

return statearr_29494;
})();
if(cljs.core.truth_(inst_29427)){
var statearr_29498_32968 = state_29453__$1;
(statearr_29498_32968[(1)] = (5));

} else {
var statearr_29499_32969 = state_29453__$1;
(statearr_29499_32969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (13))){
var state_29453__$1 = state_29453;
var statearr_29503_32970 = state_29453__$1;
(statearr_29503_32970[(2)] = null);

(statearr_29503_32970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (6))){
var inst_29426 = (state_29453[(7)]);
var state_29453__$1 = state_29453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29453__$1,(11),to,inst_29426);
} else {
if((state_val_29460 === (3))){
var inst_29448 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29453__$1,inst_29448);
} else {
if((state_val_29460 === (12))){
var state_29453__$1 = state_29453;
var statearr_29520_32972 = state_29453__$1;
(statearr_29520_32972[(2)] = null);

(statearr_29520_32972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (2))){
var state_29453__$1 = state_29453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29453__$1,(4),from);
} else {
if((state_val_29460 === (11))){
var inst_29437 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
if(cljs.core.truth_(inst_29437)){
var statearr_29522_32974 = state_29453__$1;
(statearr_29522_32974[(1)] = (12));

} else {
var statearr_29531_32975 = state_29453__$1;
(statearr_29531_32975[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (9))){
var state_29453__$1 = state_29453;
var statearr_29536_32976 = state_29453__$1;
(statearr_29536_32976[(2)] = null);

(statearr_29536_32976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (5))){
var state_29453__$1 = state_29453;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29541_32977 = state_29453__$1;
(statearr_29541_32977[(1)] = (8));

} else {
var statearr_29542_32978 = state_29453__$1;
(statearr_29542_32978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (14))){
var inst_29443 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
var statearr_29544_32980 = state_29453__$1;
(statearr_29544_32980[(2)] = inst_29443);

(statearr_29544_32980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (10))){
var inst_29434 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
var statearr_29564_32981 = state_29453__$1;
(statearr_29564_32981[(2)] = inst_29434);

(statearr_29564_32981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (8))){
var inst_29430 = cljs.core.async.close_BANG_(to);
var state_29453__$1 = state_29453;
var statearr_29566_32982 = state_29453__$1;
(statearr_29566_32982[(2)] = inst_29430);

(statearr_29566_32982[(1)] = (10));


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
var cljs$core$async$state_machine__28629__auto__ = null;
var cljs$core$async$state_machine__28629__auto____0 = (function (){
var statearr_29567 = [null,null,null,null,null,null,null,null];
(statearr_29567[(0)] = cljs$core$async$state_machine__28629__auto__);

(statearr_29567[(1)] = (1));

return statearr_29567;
});
var cljs$core$async$state_machine__28629__auto____1 = (function (state_29453){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_29453);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e29573){var ex__28632__auto__ = e29573;
var statearr_29574_32986 = state_29453;
(statearr_29574_32986[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_29453[(4)]))){
var statearr_29575_32987 = state_29453;
(statearr_29575_32987[(1)] = cljs.core.first((state_29453[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32990 = state_29453;
state_29453 = G__32990;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$state_machine__28629__auto__ = function(state_29453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28629__auto____1.call(this,state_29453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28629__auto____0;
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28629__auto____1;
return cljs$core$async$state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_29578 = f__28998__auto__();
(statearr_29578[(6)] = c__28997__auto___32960);

return statearr_29578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
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
var process = (function (p__29588){
var vec__29589 = p__29588;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29589,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29589,(1),null);
var job = vec__29589;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28997__auto___32993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_29600){
var state_val_29601 = (state_29600[(1)]);
if((state_val_29601 === (1))){
var state_29600__$1 = state_29600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29600__$1,(2),res,v);
} else {
if((state_val_29601 === (2))){
var inst_29596 = (state_29600[(2)]);
var inst_29597 = cljs.core.async.close_BANG_(res);
var state_29600__$1 = (function (){var statearr_29612 = state_29600;
(statearr_29612[(7)] = inst_29596);

return statearr_29612;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29600__$1,inst_29597);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____0 = (function (){
var statearr_29616 = [null,null,null,null,null,null,null,null];
(statearr_29616[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__);

(statearr_29616[(1)] = (1));

return statearr_29616;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____1 = (function (state_29600){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_29600);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e29619){var ex__28632__auto__ = e29619;
var statearr_29620_32996 = state_29600;
(statearr_29620_32996[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_29600[(4)]))){
var statearr_29625_32997 = state_29600;
(statearr_29625_32997[(1)] = cljs.core.first((state_29600[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32998 = state_29600;
state_29600 = G__32998;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__ = function(state_29600){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____1.call(this,state_29600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_29627 = f__28998__auto__();
(statearr_29627[(6)] = c__28997__auto___32993);

return statearr_29627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29629){
var vec__29630 = p__29629;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29630,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29630,(1),null);
var job = vec__29630;
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
var n__4695__auto___33002 = n;
var __33003 = (0);
while(true){
if((__33003 < n__4695__auto___33002)){
var G__29637_33005 = type;
var G__29637_33006__$1 = (((G__29637_33005 instanceof cljs.core.Keyword))?G__29637_33005.fqn:null);
switch (G__29637_33006__$1) {
case "compute":
var c__28997__auto___33009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33003,c__28997__auto___33009,G__29637_33005,G__29637_33006__$1,n__4695__auto___33002,jobs,results,process,async){
return (function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = ((function (__33003,c__28997__auto___33009,G__29637_33005,G__29637_33006__$1,n__4695__auto___33002,jobs,results,process,async){
return (function (state_29652){
var state_val_29653 = (state_29652[(1)]);
if((state_val_29653 === (1))){
var state_29652__$1 = state_29652;
var statearr_29658_33010 = state_29652__$1;
(statearr_29658_33010[(2)] = null);

(statearr_29658_33010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (2))){
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29652__$1,(4),jobs);
} else {
if((state_val_29653 === (3))){
var inst_29650 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29652__$1,inst_29650);
} else {
if((state_val_29653 === (4))){
var inst_29642 = (state_29652[(2)]);
var inst_29643 = process(inst_29642);
var state_29652__$1 = state_29652;
if(cljs.core.truth_(inst_29643)){
var statearr_29659_33012 = state_29652__$1;
(statearr_29659_33012[(1)] = (5));

} else {
var statearr_29660_33013 = state_29652__$1;
(statearr_29660_33013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (5))){
var state_29652__$1 = state_29652;
var statearr_29664_33014 = state_29652__$1;
(statearr_29664_33014[(2)] = null);

(statearr_29664_33014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (6))){
var state_29652__$1 = state_29652;
var statearr_29667_33015 = state_29652__$1;
(statearr_29667_33015[(2)] = null);

(statearr_29667_33015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (7))){
var inst_29648 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29670_33016 = state_29652__$1;
(statearr_29670_33016[(2)] = inst_29648);

(statearr_29670_33016[(1)] = (3));


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
});})(__33003,c__28997__auto___33009,G__29637_33005,G__29637_33006__$1,n__4695__auto___33002,jobs,results,process,async))
;
return ((function (__33003,switch__28628__auto__,c__28997__auto___33009,G__29637_33005,G__29637_33006__$1,n__4695__auto___33002,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____0 = (function (){
var statearr_29671 = [null,null,null,null,null,null,null];
(statearr_29671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__);

(statearr_29671[(1)] = (1));

return statearr_29671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____1 = (function (state_29652){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_29652);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e29675){var ex__28632__auto__ = e29675;
var statearr_29676_33023 = state_29652;
(statearr_29676_33023[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_29652[(4)]))){
var statearr_29678_33026 = state_29652;
(statearr_29678_33026[(1)] = cljs.core.first((state_29652[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33027 = state_29652;
state_29652 = G__33027;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__ = function(state_29652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____1.call(this,state_29652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__;
})()
;})(__33003,switch__28628__auto__,c__28997__auto___33009,G__29637_33005,G__29637_33006__$1,n__4695__auto___33002,jobs,results,process,async))
})();
var state__28999__auto__ = (function (){var statearr_29680 = f__28998__auto__();
(statearr_29680[(6)] = c__28997__auto___33009);

return statearr_29680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
});})(__33003,c__28997__auto___33009,G__29637_33005,G__29637_33006__$1,n__4695__auto___33002,jobs,results,process,async))
);


break;
case "async":
var c__28997__auto___33038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33003,c__28997__auto___33038,G__29637_33005,G__29637_33006__$1,n__4695__auto___33002,jobs,results,process,async){
return (function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = ((function (__33003,c__28997__auto___33038,G__29637_33005,G__29637_33006__$1,n__4695__auto___33002,jobs,results,process,async){
return (function (state_29696){
var state_val_29697 = (state_29696[(1)]);
if((state_val_29697 === (1))){
var state_29696__$1 = state_29696;
var statearr_29701_33041 = state_29696__$1;
(statearr_29701_33041[(2)] = null);

(statearr_29701_33041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (2))){
var state_29696__$1 = state_29696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29696__$1,(4),jobs);
} else {
if((state_val_29697 === (3))){
var inst_29694 = (state_29696[(2)]);
var state_29696__$1 = state_29696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29696__$1,inst_29694);
} else {
if((state_val_29697 === (4))){
var inst_29684 = (state_29696[(2)]);
var inst_29685 = async(inst_29684);
var state_29696__$1 = state_29696;
if(cljs.core.truth_(inst_29685)){
var statearr_29704_33045 = state_29696__$1;
(statearr_29704_33045[(1)] = (5));

} else {
var statearr_29706_33046 = state_29696__$1;
(statearr_29706_33046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (5))){
var state_29696__$1 = state_29696;
var statearr_29709_33048 = state_29696__$1;
(statearr_29709_33048[(2)] = null);

(statearr_29709_33048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (6))){
var state_29696__$1 = state_29696;
var statearr_29714_33049 = state_29696__$1;
(statearr_29714_33049[(2)] = null);

(statearr_29714_33049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (7))){
var inst_29691 = (state_29696[(2)]);
var state_29696__$1 = state_29696;
var statearr_29719_33055 = state_29696__$1;
(statearr_29719_33055[(2)] = inst_29691);

(statearr_29719_33055[(1)] = (3));


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
});})(__33003,c__28997__auto___33038,G__29637_33005,G__29637_33006__$1,n__4695__auto___33002,jobs,results,process,async))
;
return ((function (__33003,switch__28628__auto__,c__28997__auto___33038,G__29637_33005,G__29637_33006__$1,n__4695__auto___33002,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____0 = (function (){
var statearr_29721 = [null,null,null,null,null,null,null];
(statearr_29721[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__);

(statearr_29721[(1)] = (1));

return statearr_29721;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____1 = (function (state_29696){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_29696);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e29724){var ex__28632__auto__ = e29724;
var statearr_29725_33062 = state_29696;
(statearr_29725_33062[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_29696[(4)]))){
var statearr_29727_33063 = state_29696;
(statearr_29727_33063[(1)] = cljs.core.first((state_29696[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33066 = state_29696;
state_29696 = G__33066;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__ = function(state_29696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____1.call(this,state_29696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__;
})()
;})(__33003,switch__28628__auto__,c__28997__auto___33038,G__29637_33005,G__29637_33006__$1,n__4695__auto___33002,jobs,results,process,async))
})();
var state__28999__auto__ = (function (){var statearr_29729 = f__28998__auto__();
(statearr_29729[(6)] = c__28997__auto___33038);

return statearr_29729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
});})(__33003,c__28997__auto___33038,G__29637_33005,G__29637_33006__$1,n__4695__auto___33002,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29637_33006__$1)].join('')));

}

var G__33071 = (__33003 + (1));
__33003 = G__33071;
continue;
} else {
}
break;
}

var c__28997__auto___33072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_29755){
var state_val_29756 = (state_29755[(1)]);
if((state_val_29756 === (7))){
var inst_29750 = (state_29755[(2)]);
var state_29755__$1 = state_29755;
var statearr_29772_33082 = state_29755__$1;
(statearr_29772_33082[(2)] = inst_29750);

(statearr_29772_33082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (1))){
var state_29755__$1 = state_29755;
var statearr_29788_33085 = state_29755__$1;
(statearr_29788_33085[(2)] = null);

(statearr_29788_33085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (4))){
var inst_29732 = (state_29755[(7)]);
var inst_29732__$1 = (state_29755[(2)]);
var inst_29733 = (inst_29732__$1 == null);
var state_29755__$1 = (function (){var statearr_29790 = state_29755;
(statearr_29790[(7)] = inst_29732__$1);

return statearr_29790;
})();
if(cljs.core.truth_(inst_29733)){
var statearr_29791_33086 = state_29755__$1;
(statearr_29791_33086[(1)] = (5));

} else {
var statearr_29796_33090 = state_29755__$1;
(statearr_29796_33090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (6))){
var inst_29737 = (state_29755[(8)]);
var inst_29732 = (state_29755[(7)]);
var inst_29737__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29739 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29740 = [inst_29732,inst_29737__$1];
var inst_29742 = (new cljs.core.PersistentVector(null,2,(5),inst_29739,inst_29740,null));
var state_29755__$1 = (function (){var statearr_29799 = state_29755;
(statearr_29799[(8)] = inst_29737__$1);

return statearr_29799;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29755__$1,(8),jobs,inst_29742);
} else {
if((state_val_29756 === (3))){
var inst_29753 = (state_29755[(2)]);
var state_29755__$1 = state_29755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29755__$1,inst_29753);
} else {
if((state_val_29756 === (2))){
var state_29755__$1 = state_29755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29755__$1,(4),from);
} else {
if((state_val_29756 === (9))){
var inst_29747 = (state_29755[(2)]);
var state_29755__$1 = (function (){var statearr_29808 = state_29755;
(statearr_29808[(9)] = inst_29747);

return statearr_29808;
})();
var statearr_29809_33097 = state_29755__$1;
(statearr_29809_33097[(2)] = null);

(statearr_29809_33097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (5))){
var inst_29735 = cljs.core.async.close_BANG_(jobs);
var state_29755__$1 = state_29755;
var statearr_29813_33098 = state_29755__$1;
(statearr_29813_33098[(2)] = inst_29735);

(statearr_29813_33098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (8))){
var inst_29737 = (state_29755[(8)]);
var inst_29744 = (state_29755[(2)]);
var state_29755__$1 = (function (){var statearr_29814 = state_29755;
(statearr_29814[(10)] = inst_29744);

return statearr_29814;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29755__$1,(9),results,inst_29737);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____0 = (function (){
var statearr_29821 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29821[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__);

(statearr_29821[(1)] = (1));

return statearr_29821;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____1 = (function (state_29755){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_29755);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e29826){var ex__28632__auto__ = e29826;
var statearr_29827_33106 = state_29755;
(statearr_29827_33106[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_29755[(4)]))){
var statearr_29830_33110 = state_29755;
(statearr_29830_33110[(1)] = cljs.core.first((state_29755[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33111 = state_29755;
state_29755 = G__33111;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__ = function(state_29755){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____1.call(this,state_29755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_29876 = f__28998__auto__();
(statearr_29876[(6)] = c__28997__auto___33072);

return statearr_29876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
}));


var c__28997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_29951){
var state_val_29952 = (state_29951[(1)]);
if((state_val_29952 === (7))){
var inst_29941 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
var statearr_29971_33117 = state_29951__$1;
(statearr_29971_33117[(2)] = inst_29941);

(statearr_29971_33117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (20))){
var state_29951__$1 = state_29951;
var statearr_29979_33118 = state_29951__$1;
(statearr_29979_33118[(2)] = null);

(statearr_29979_33118[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (1))){
var state_29951__$1 = state_29951;
var statearr_29990_33119 = state_29951__$1;
(statearr_29990_33119[(2)] = null);

(statearr_29990_33119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (4))){
var inst_29891 = (state_29951[(7)]);
var inst_29891__$1 = (state_29951[(2)]);
var inst_29893 = (inst_29891__$1 == null);
var state_29951__$1 = (function (){var statearr_29991 = state_29951;
(statearr_29991[(7)] = inst_29891__$1);

return statearr_29991;
})();
if(cljs.core.truth_(inst_29893)){
var statearr_29992_33120 = state_29951__$1;
(statearr_29992_33120[(1)] = (5));

} else {
var statearr_29993_33121 = state_29951__$1;
(statearr_29993_33121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (15))){
var inst_29915 = (state_29951[(8)]);
var state_29951__$1 = state_29951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29951__$1,(18),to,inst_29915);
} else {
if((state_val_29952 === (21))){
var inst_29936 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
var statearr_29994_33122 = state_29951__$1;
(statearr_29994_33122[(2)] = inst_29936);

(statearr_29994_33122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (13))){
var inst_29938 = (state_29951[(2)]);
var state_29951__$1 = (function (){var statearr_29995 = state_29951;
(statearr_29995[(9)] = inst_29938);

return statearr_29995;
})();
var statearr_29996_33123 = state_29951__$1;
(statearr_29996_33123[(2)] = null);

(statearr_29996_33123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (6))){
var inst_29891 = (state_29951[(7)]);
var state_29951__$1 = state_29951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29951__$1,(11),inst_29891);
} else {
if((state_val_29952 === (17))){
var inst_29930 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
if(cljs.core.truth_(inst_29930)){
var statearr_30000_33135 = state_29951__$1;
(statearr_30000_33135[(1)] = (19));

} else {
var statearr_30001_33136 = state_29951__$1;
(statearr_30001_33136[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (3))){
var inst_29947 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29951__$1,inst_29947);
} else {
if((state_val_29952 === (12))){
var inst_29912 = (state_29951[(10)]);
var state_29951__$1 = state_29951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29951__$1,(14),inst_29912);
} else {
if((state_val_29952 === (2))){
var state_29951__$1 = state_29951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29951__$1,(4),results);
} else {
if((state_val_29952 === (19))){
var state_29951__$1 = state_29951;
var statearr_30004_33142 = state_29951__$1;
(statearr_30004_33142[(2)] = null);

(statearr_30004_33142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (11))){
var inst_29912 = (state_29951[(2)]);
var state_29951__$1 = (function (){var statearr_30010 = state_29951;
(statearr_30010[(10)] = inst_29912);

return statearr_30010;
})();
var statearr_30011_33147 = state_29951__$1;
(statearr_30011_33147[(2)] = null);

(statearr_30011_33147[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (9))){
var state_29951__$1 = state_29951;
var statearr_30020_33151 = state_29951__$1;
(statearr_30020_33151[(2)] = null);

(statearr_30020_33151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (5))){
var state_29951__$1 = state_29951;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30021_33152 = state_29951__$1;
(statearr_30021_33152[(1)] = (8));

} else {
var statearr_30026_33153 = state_29951__$1;
(statearr_30026_33153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (14))){
var inst_29920 = (state_29951[(11)]);
var inst_29915 = (state_29951[(8)]);
var inst_29915__$1 = (state_29951[(2)]);
var inst_29919 = (inst_29915__$1 == null);
var inst_29920__$1 = cljs.core.not(inst_29919);
var state_29951__$1 = (function (){var statearr_30027 = state_29951;
(statearr_30027[(11)] = inst_29920__$1);

(statearr_30027[(8)] = inst_29915__$1);

return statearr_30027;
})();
if(inst_29920__$1){
var statearr_30029_33161 = state_29951__$1;
(statearr_30029_33161[(1)] = (15));

} else {
var statearr_30030_33163 = state_29951__$1;
(statearr_30030_33163[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (16))){
var inst_29920 = (state_29951[(11)]);
var state_29951__$1 = state_29951;
var statearr_30031_33167 = state_29951__$1;
(statearr_30031_33167[(2)] = inst_29920);

(statearr_30031_33167[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (10))){
var inst_29909 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
var statearr_30036_33172 = state_29951__$1;
(statearr_30036_33172[(2)] = inst_29909);

(statearr_30036_33172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (18))){
var inst_29927 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
var statearr_30037_33173 = state_29951__$1;
(statearr_30037_33173[(2)] = inst_29927);

(statearr_30037_33173[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (8))){
var inst_29903 = cljs.core.async.close_BANG_(to);
var state_29951__$1 = state_29951;
var statearr_30038_33178 = state_29951__$1;
(statearr_30038_33178[(2)] = inst_29903);

(statearr_30038_33178[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____0 = (function (){
var statearr_30039 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30039[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__);

(statearr_30039[(1)] = (1));

return statearr_30039;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____1 = (function (state_29951){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_29951);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e30040){var ex__28632__auto__ = e30040;
var statearr_30041_33184 = state_29951;
(statearr_30041_33184[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_29951[(4)]))){
var statearr_30042_33185 = state_29951;
(statearr_30042_33185[(1)] = cljs.core.first((state_29951[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33186 = state_29951;
state_29951 = G__33186;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__ = function(state_29951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____1.call(this,state_29951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_30043 = f__28998__auto__();
(statearr_30043[(6)] = c__28997__auto__);

return statearr_30043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
}));

return c__28997__auto__;
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
var G__30047 = arguments.length;
switch (G__30047) {
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
var G__30049 = arguments.length;
switch (G__30049) {
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
var G__30070 = arguments.length;
switch (G__30070) {
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
var c__28997__auto___33205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_30100){
var state_val_30101 = (state_30100[(1)]);
if((state_val_30101 === (7))){
var inst_30096 = (state_30100[(2)]);
var state_30100__$1 = state_30100;
var statearr_30102_33207 = state_30100__$1;
(statearr_30102_33207[(2)] = inst_30096);

(statearr_30102_33207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (1))){
var state_30100__$1 = state_30100;
var statearr_30103_33208 = state_30100__$1;
(statearr_30103_33208[(2)] = null);

(statearr_30103_33208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (4))){
var inst_30077 = (state_30100[(7)]);
var inst_30077__$1 = (state_30100[(2)]);
var inst_30078 = (inst_30077__$1 == null);
var state_30100__$1 = (function (){var statearr_30104 = state_30100;
(statearr_30104[(7)] = inst_30077__$1);

return statearr_30104;
})();
if(cljs.core.truth_(inst_30078)){
var statearr_30105_33213 = state_30100__$1;
(statearr_30105_33213[(1)] = (5));

} else {
var statearr_30106_33214 = state_30100__$1;
(statearr_30106_33214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (13))){
var state_30100__$1 = state_30100;
var statearr_30107_33216 = state_30100__$1;
(statearr_30107_33216[(2)] = null);

(statearr_30107_33216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (6))){
var inst_30077 = (state_30100[(7)]);
var inst_30083 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30077) : p.call(null,inst_30077));
var state_30100__$1 = state_30100;
if(cljs.core.truth_(inst_30083)){
var statearr_30108_33219 = state_30100__$1;
(statearr_30108_33219[(1)] = (9));

} else {
var statearr_30110_33220 = state_30100__$1;
(statearr_30110_33220[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (3))){
var inst_30098 = (state_30100[(2)]);
var state_30100__$1 = state_30100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30100__$1,inst_30098);
} else {
if((state_val_30101 === (12))){
var state_30100__$1 = state_30100;
var statearr_30112_33228 = state_30100__$1;
(statearr_30112_33228[(2)] = null);

(statearr_30112_33228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (2))){
var state_30100__$1 = state_30100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30100__$1,(4),ch);
} else {
if((state_val_30101 === (11))){
var inst_30077 = (state_30100[(7)]);
var inst_30087 = (state_30100[(2)]);
var state_30100__$1 = state_30100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30100__$1,(8),inst_30087,inst_30077);
} else {
if((state_val_30101 === (9))){
var state_30100__$1 = state_30100;
var statearr_30117_33232 = state_30100__$1;
(statearr_30117_33232[(2)] = tc);

(statearr_30117_33232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (5))){
var inst_30080 = cljs.core.async.close_BANG_(tc);
var inst_30081 = cljs.core.async.close_BANG_(fc);
var state_30100__$1 = (function (){var statearr_30118 = state_30100;
(statearr_30118[(8)] = inst_30080);

return statearr_30118;
})();
var statearr_30119_33237 = state_30100__$1;
(statearr_30119_33237[(2)] = inst_30081);

(statearr_30119_33237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (14))){
var inst_30094 = (state_30100[(2)]);
var state_30100__$1 = state_30100;
var statearr_30121_33239 = state_30100__$1;
(statearr_30121_33239[(2)] = inst_30094);

(statearr_30121_33239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (10))){
var state_30100__$1 = state_30100;
var statearr_30127_33242 = state_30100__$1;
(statearr_30127_33242[(2)] = fc);

(statearr_30127_33242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (8))){
var inst_30089 = (state_30100[(2)]);
var state_30100__$1 = state_30100;
if(cljs.core.truth_(inst_30089)){
var statearr_30128_33244 = state_30100__$1;
(statearr_30128_33244[(1)] = (12));

} else {
var statearr_30132_33245 = state_30100__$1;
(statearr_30132_33245[(1)] = (13));

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
var cljs$core$async$state_machine__28629__auto__ = null;
var cljs$core$async$state_machine__28629__auto____0 = (function (){
var statearr_30136 = [null,null,null,null,null,null,null,null,null];
(statearr_30136[(0)] = cljs$core$async$state_machine__28629__auto__);

(statearr_30136[(1)] = (1));

return statearr_30136;
});
var cljs$core$async$state_machine__28629__auto____1 = (function (state_30100){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_30100);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e30137){var ex__28632__auto__ = e30137;
var statearr_30138_33251 = state_30100;
(statearr_30138_33251[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_30100[(4)]))){
var statearr_30139_33253 = state_30100;
(statearr_30139_33253[(1)] = cljs.core.first((state_30100[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33256 = state_30100;
state_30100 = G__33256;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$state_machine__28629__auto__ = function(state_30100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28629__auto____1.call(this,state_30100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28629__auto____0;
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28629__auto____1;
return cljs$core$async$state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_30143 = f__28998__auto__();
(statearr_30143[(6)] = c__28997__auto___33205);

return statearr_30143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
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
var c__28997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_30177){
var state_val_30178 = (state_30177[(1)]);
if((state_val_30178 === (7))){
var inst_30172 = (state_30177[(2)]);
var state_30177__$1 = state_30177;
var statearr_30179_33260 = state_30177__$1;
(statearr_30179_33260[(2)] = inst_30172);

(statearr_30179_33260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (1))){
var inst_30150 = init;
var inst_30154 = inst_30150;
var state_30177__$1 = (function (){var statearr_30180 = state_30177;
(statearr_30180[(7)] = inst_30154);

return statearr_30180;
})();
var statearr_30181_33261 = state_30177__$1;
(statearr_30181_33261[(2)] = null);

(statearr_30181_33261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (4))){
var inst_30157 = (state_30177[(8)]);
var inst_30157__$1 = (state_30177[(2)]);
var inst_30159 = (inst_30157__$1 == null);
var state_30177__$1 = (function (){var statearr_30186 = state_30177;
(statearr_30186[(8)] = inst_30157__$1);

return statearr_30186;
})();
if(cljs.core.truth_(inst_30159)){
var statearr_30188_33267 = state_30177__$1;
(statearr_30188_33267[(1)] = (5));

} else {
var statearr_30189_33268 = state_30177__$1;
(statearr_30189_33268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (6))){
var inst_30154 = (state_30177[(7)]);
var inst_30157 = (state_30177[(8)]);
var inst_30162 = (state_30177[(9)]);
var inst_30162__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30154,inst_30157) : f.call(null,inst_30154,inst_30157));
var inst_30164 = cljs.core.reduced_QMARK_(inst_30162__$1);
var state_30177__$1 = (function (){var statearr_30191 = state_30177;
(statearr_30191[(9)] = inst_30162__$1);

return statearr_30191;
})();
if(inst_30164){
var statearr_30192_33271 = state_30177__$1;
(statearr_30192_33271[(1)] = (8));

} else {
var statearr_30194_33274 = state_30177__$1;
(statearr_30194_33274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (3))){
var inst_30174 = (state_30177[(2)]);
var state_30177__$1 = state_30177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30177__$1,inst_30174);
} else {
if((state_val_30178 === (2))){
var state_30177__$1 = state_30177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30177__$1,(4),ch);
} else {
if((state_val_30178 === (9))){
var inst_30162 = (state_30177[(9)]);
var inst_30154 = inst_30162;
var state_30177__$1 = (function (){var statearr_30196 = state_30177;
(statearr_30196[(7)] = inst_30154);

return statearr_30196;
})();
var statearr_30198_33278 = state_30177__$1;
(statearr_30198_33278[(2)] = null);

(statearr_30198_33278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (5))){
var inst_30154 = (state_30177[(7)]);
var state_30177__$1 = state_30177;
var statearr_30203_33280 = state_30177__$1;
(statearr_30203_33280[(2)] = inst_30154);

(statearr_30203_33280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (10))){
var inst_30170 = (state_30177[(2)]);
var state_30177__$1 = state_30177;
var statearr_30205_33284 = state_30177__$1;
(statearr_30205_33284[(2)] = inst_30170);

(statearr_30205_33284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (8))){
var inst_30162 = (state_30177[(9)]);
var inst_30166 = cljs.core.deref(inst_30162);
var state_30177__$1 = state_30177;
var statearr_30206_33286 = state_30177__$1;
(statearr_30206_33286[(2)] = inst_30166);

(statearr_30206_33286[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28629__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28629__auto____0 = (function (){
var statearr_30209 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30209[(0)] = cljs$core$async$reduce_$_state_machine__28629__auto__);

(statearr_30209[(1)] = (1));

return statearr_30209;
});
var cljs$core$async$reduce_$_state_machine__28629__auto____1 = (function (state_30177){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_30177);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e30210){var ex__28632__auto__ = e30210;
var statearr_30211_33293 = state_30177;
(statearr_30211_33293[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_30177[(4)]))){
var statearr_30212_33294 = state_30177;
(statearr_30212_33294[(1)] = cljs.core.first((state_30177[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33299 = state_30177;
state_30177 = G__33299;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28629__auto__ = function(state_30177){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28629__auto____1.call(this,state_30177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28629__auto____0;
cljs$core$async$reduce_$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28629__auto____1;
return cljs$core$async$reduce_$_state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_30217 = f__28998__auto__();
(statearr_30217[(6)] = c__28997__auto__);

return statearr_30217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
}));

return c__28997__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_30228){
var state_val_30229 = (state_30228[(1)]);
if((state_val_30229 === (1))){
var inst_30223 = cljs.core.async.reduce(f__$1,init,ch);
var state_30228__$1 = state_30228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30228__$1,(2),inst_30223);
} else {
if((state_val_30229 === (2))){
var inst_30225 = (state_30228[(2)]);
var inst_30226 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30225) : f__$1.call(null,inst_30225));
var state_30228__$1 = state_30228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30228__$1,inst_30226);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28629__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28629__auto____0 = (function (){
var statearr_30231 = [null,null,null,null,null,null,null];
(statearr_30231[(0)] = cljs$core$async$transduce_$_state_machine__28629__auto__);

(statearr_30231[(1)] = (1));

return statearr_30231;
});
var cljs$core$async$transduce_$_state_machine__28629__auto____1 = (function (state_30228){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_30228);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e30232){var ex__28632__auto__ = e30232;
var statearr_30233_33307 = state_30228;
(statearr_30233_33307[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_30228[(4)]))){
var statearr_30234_33308 = state_30228;
(statearr_30234_33308[(1)] = cljs.core.first((state_30228[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33313 = state_30228;
state_30228 = G__33313;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28629__auto__ = function(state_30228){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28629__auto____1.call(this,state_30228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28629__auto____0;
cljs$core$async$transduce_$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28629__auto____1;
return cljs$core$async$transduce_$_state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_30240 = f__28998__auto__();
(statearr_30240[(6)] = c__28997__auto__);

return statearr_30240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
}));

return c__28997__auto__;
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
var G__30249 = arguments.length;
switch (G__30249) {
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
var c__28997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_30287){
var state_val_30288 = (state_30287[(1)]);
if((state_val_30288 === (7))){
var inst_30269 = (state_30287[(2)]);
var state_30287__$1 = state_30287;
var statearr_30302_33333 = state_30287__$1;
(statearr_30302_33333[(2)] = inst_30269);

(statearr_30302_33333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (1))){
var inst_30263 = cljs.core.seq(coll);
var inst_30264 = inst_30263;
var state_30287__$1 = (function (){var statearr_30303 = state_30287;
(statearr_30303[(7)] = inst_30264);

return statearr_30303;
})();
var statearr_30304_33335 = state_30287__$1;
(statearr_30304_33335[(2)] = null);

(statearr_30304_33335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (4))){
var inst_30264 = (state_30287[(7)]);
var inst_30267 = cljs.core.first(inst_30264);
var state_30287__$1 = state_30287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30287__$1,(7),ch,inst_30267);
} else {
if((state_val_30288 === (13))){
var inst_30281 = (state_30287[(2)]);
var state_30287__$1 = state_30287;
var statearr_30309_33337 = state_30287__$1;
(statearr_30309_33337[(2)] = inst_30281);

(statearr_30309_33337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (6))){
var inst_30272 = (state_30287[(2)]);
var state_30287__$1 = state_30287;
if(cljs.core.truth_(inst_30272)){
var statearr_30310_33339 = state_30287__$1;
(statearr_30310_33339[(1)] = (8));

} else {
var statearr_30311_33344 = state_30287__$1;
(statearr_30311_33344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (3))){
var inst_30285 = (state_30287[(2)]);
var state_30287__$1 = state_30287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30287__$1,inst_30285);
} else {
if((state_val_30288 === (12))){
var state_30287__$1 = state_30287;
var statearr_30312_33349 = state_30287__$1;
(statearr_30312_33349[(2)] = null);

(statearr_30312_33349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (2))){
var inst_30264 = (state_30287[(7)]);
var state_30287__$1 = state_30287;
if(cljs.core.truth_(inst_30264)){
var statearr_30313_33351 = state_30287__$1;
(statearr_30313_33351[(1)] = (4));

} else {
var statearr_30314_33352 = state_30287__$1;
(statearr_30314_33352[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (11))){
var inst_30278 = cljs.core.async.close_BANG_(ch);
var state_30287__$1 = state_30287;
var statearr_30316_33353 = state_30287__$1;
(statearr_30316_33353[(2)] = inst_30278);

(statearr_30316_33353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (9))){
var state_30287__$1 = state_30287;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30317_33359 = state_30287__$1;
(statearr_30317_33359[(1)] = (11));

} else {
var statearr_30318_33360 = state_30287__$1;
(statearr_30318_33360[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (5))){
var inst_30264 = (state_30287[(7)]);
var state_30287__$1 = state_30287;
var statearr_30319_33361 = state_30287__$1;
(statearr_30319_33361[(2)] = inst_30264);

(statearr_30319_33361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (10))){
var inst_30283 = (state_30287[(2)]);
var state_30287__$1 = state_30287;
var statearr_30320_33366 = state_30287__$1;
(statearr_30320_33366[(2)] = inst_30283);

(statearr_30320_33366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30288 === (8))){
var inst_30264 = (state_30287[(7)]);
var inst_30274 = cljs.core.next(inst_30264);
var inst_30264__$1 = inst_30274;
var state_30287__$1 = (function (){var statearr_30321 = state_30287;
(statearr_30321[(7)] = inst_30264__$1);

return statearr_30321;
})();
var statearr_30326_33368 = state_30287__$1;
(statearr_30326_33368[(2)] = null);

(statearr_30326_33368[(1)] = (2));


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
var cljs$core$async$state_machine__28629__auto__ = null;
var cljs$core$async$state_machine__28629__auto____0 = (function (){
var statearr_30328 = [null,null,null,null,null,null,null,null];
(statearr_30328[(0)] = cljs$core$async$state_machine__28629__auto__);

(statearr_30328[(1)] = (1));

return statearr_30328;
});
var cljs$core$async$state_machine__28629__auto____1 = (function (state_30287){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_30287);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e30329){var ex__28632__auto__ = e30329;
var statearr_30330_33369 = state_30287;
(statearr_30330_33369[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_30287[(4)]))){
var statearr_30331_33370 = state_30287;
(statearr_30331_33370[(1)] = cljs.core.first((state_30287[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33373 = state_30287;
state_30287 = G__33373;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$state_machine__28629__auto__ = function(state_30287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28629__auto____1.call(this,state_30287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28629__auto____0;
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28629__auto____1;
return cljs$core$async$state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_30333 = f__28998__auto__();
(statearr_30333[(6)] = c__28997__auto__);

return statearr_30333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
}));

return c__28997__auto__;
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
var G__30342 = arguments.length;
switch (G__30342) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33383 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33383(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33389 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33389(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33401 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33401(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33404 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33404(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30369 = (function (ch,cs,meta30370){
this.ch = ch;
this.cs = cs;
this.meta30370 = meta30370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30371,meta30370__$1){
var self__ = this;
var _30371__$1 = this;
return (new cljs.core.async.t_cljs$core$async30369(self__.ch,self__.cs,meta30370__$1));
}));

(cljs.core.async.t_cljs$core$async30369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30371){
var self__ = this;
var _30371__$1 = this;
return self__.meta30370;
}));

(cljs.core.async.t_cljs$core$async30369.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30369.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30369.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30369.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30369.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30369.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30370","meta30370",-1558712696,null)], null);
}));

(cljs.core.async.t_cljs$core$async30369.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30369");

(cljs.core.async.t_cljs$core$async30369.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30369");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30369.
 */
cljs.core.async.__GT_t_cljs$core$async30369 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30369(ch__$1,cs__$1,meta30370){
return (new cljs.core.async.t_cljs$core$async30369(ch__$1,cs__$1,meta30370));
});

}

return (new cljs.core.async.t_cljs$core$async30369(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28997__auto___33426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_30531){
var state_val_30532 = (state_30531[(1)]);
if((state_val_30532 === (7))){
var inst_30521 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30535_33428 = state_30531__$1;
(statearr_30535_33428[(2)] = inst_30521);

(statearr_30535_33428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (20))){
var inst_30419 = (state_30531[(7)]);
var inst_30436 = cljs.core.first(inst_30419);
var inst_30437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30436,(0),null);
var inst_30439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30436,(1),null);
var state_30531__$1 = (function (){var statearr_30538 = state_30531;
(statearr_30538[(8)] = inst_30437);

return statearr_30538;
})();
if(cljs.core.truth_(inst_30439)){
var statearr_30540_33429 = state_30531__$1;
(statearr_30540_33429[(1)] = (22));

} else {
var statearr_30541_33430 = state_30531__$1;
(statearr_30541_33430[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (27))){
var inst_30467 = (state_30531[(9)]);
var inst_30474 = (state_30531[(10)]);
var inst_30387 = (state_30531[(11)]);
var inst_30469 = (state_30531[(12)]);
var inst_30474__$1 = cljs.core._nth(inst_30467,inst_30469);
var inst_30475 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30474__$1,inst_30387,done);
var state_30531__$1 = (function (){var statearr_30543 = state_30531;
(statearr_30543[(10)] = inst_30474__$1);

return statearr_30543;
})();
if(cljs.core.truth_(inst_30475)){
var statearr_30545_33433 = state_30531__$1;
(statearr_30545_33433[(1)] = (30));

} else {
var statearr_30546_33436 = state_30531__$1;
(statearr_30546_33436[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (1))){
var state_30531__$1 = state_30531;
var statearr_30547_33437 = state_30531__$1;
(statearr_30547_33437[(2)] = null);

(statearr_30547_33437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (24))){
var inst_30419 = (state_30531[(7)]);
var inst_30444 = (state_30531[(2)]);
var inst_30445 = cljs.core.next(inst_30419);
var inst_30397 = inst_30445;
var inst_30398 = null;
var inst_30399 = (0);
var inst_30400 = (0);
var state_30531__$1 = (function (){var statearr_30553 = state_30531;
(statearr_30553[(13)] = inst_30398);

(statearr_30553[(14)] = inst_30397);

(statearr_30553[(15)] = inst_30399);

(statearr_30553[(16)] = inst_30400);

(statearr_30553[(17)] = inst_30444);

return statearr_30553;
})();
var statearr_30555_33443 = state_30531__$1;
(statearr_30555_33443[(2)] = null);

(statearr_30555_33443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (39))){
var state_30531__$1 = state_30531;
var statearr_30560_33444 = state_30531__$1;
(statearr_30560_33444[(2)] = null);

(statearr_30560_33444[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (4))){
var inst_30387 = (state_30531[(11)]);
var inst_30387__$1 = (state_30531[(2)]);
var inst_30388 = (inst_30387__$1 == null);
var state_30531__$1 = (function (){var statearr_30562 = state_30531;
(statearr_30562[(11)] = inst_30387__$1);

return statearr_30562;
})();
if(cljs.core.truth_(inst_30388)){
var statearr_30563_33446 = state_30531__$1;
(statearr_30563_33446[(1)] = (5));

} else {
var statearr_30564_33447 = state_30531__$1;
(statearr_30564_33447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (15))){
var inst_30398 = (state_30531[(13)]);
var inst_30397 = (state_30531[(14)]);
var inst_30399 = (state_30531[(15)]);
var inst_30400 = (state_30531[(16)]);
var inst_30415 = (state_30531[(2)]);
var inst_30416 = (inst_30400 + (1));
var tmp30556 = inst_30398;
var tmp30557 = inst_30397;
var tmp30558 = inst_30399;
var inst_30397__$1 = tmp30557;
var inst_30398__$1 = tmp30556;
var inst_30399__$1 = tmp30558;
var inst_30400__$1 = inst_30416;
var state_30531__$1 = (function (){var statearr_30569 = state_30531;
(statearr_30569[(13)] = inst_30398__$1);

(statearr_30569[(14)] = inst_30397__$1);

(statearr_30569[(15)] = inst_30399__$1);

(statearr_30569[(16)] = inst_30400__$1);

(statearr_30569[(18)] = inst_30415);

return statearr_30569;
})();
var statearr_30571_33450 = state_30531__$1;
(statearr_30571_33450[(2)] = null);

(statearr_30571_33450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (21))){
var inst_30448 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30580_33451 = state_30531__$1;
(statearr_30580_33451[(2)] = inst_30448);

(statearr_30580_33451[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (31))){
var inst_30474 = (state_30531[(10)]);
var inst_30478 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30474);
var state_30531__$1 = state_30531;
var statearr_30582_33452 = state_30531__$1;
(statearr_30582_33452[(2)] = inst_30478);

(statearr_30582_33452[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (32))){
var inst_30467 = (state_30531[(9)]);
var inst_30466 = (state_30531[(19)]);
var inst_30468 = (state_30531[(20)]);
var inst_30469 = (state_30531[(12)]);
var inst_30480 = (state_30531[(2)]);
var inst_30481 = (inst_30469 + (1));
var tmp30572 = inst_30467;
var tmp30573 = inst_30466;
var tmp30574 = inst_30468;
var inst_30466__$1 = tmp30573;
var inst_30467__$1 = tmp30572;
var inst_30468__$1 = tmp30574;
var inst_30469__$1 = inst_30481;
var state_30531__$1 = (function (){var statearr_30583 = state_30531;
(statearr_30583[(9)] = inst_30467__$1);

(statearr_30583[(21)] = inst_30480);

(statearr_30583[(19)] = inst_30466__$1);

(statearr_30583[(20)] = inst_30468__$1);

(statearr_30583[(12)] = inst_30469__$1);

return statearr_30583;
})();
var statearr_30584_33462 = state_30531__$1;
(statearr_30584_33462[(2)] = null);

(statearr_30584_33462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (40))){
var inst_30493 = (state_30531[(22)]);
var inst_30497 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30493);
var state_30531__$1 = state_30531;
var statearr_30585_33465 = state_30531__$1;
(statearr_30585_33465[(2)] = inst_30497);

(statearr_30585_33465[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (33))){
var inst_30484 = (state_30531[(23)]);
var inst_30486 = cljs.core.chunked_seq_QMARK_(inst_30484);
var state_30531__$1 = state_30531;
if(inst_30486){
var statearr_30588_33470 = state_30531__$1;
(statearr_30588_33470[(1)] = (36));

} else {
var statearr_30590_33471 = state_30531__$1;
(statearr_30590_33471[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (13))){
var inst_30409 = (state_30531[(24)]);
var inst_30412 = cljs.core.async.close_BANG_(inst_30409);
var state_30531__$1 = state_30531;
var statearr_30591_33476 = state_30531__$1;
(statearr_30591_33476[(2)] = inst_30412);

(statearr_30591_33476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (22))){
var inst_30437 = (state_30531[(8)]);
var inst_30441 = cljs.core.async.close_BANG_(inst_30437);
var state_30531__$1 = state_30531;
var statearr_30592_33483 = state_30531__$1;
(statearr_30592_33483[(2)] = inst_30441);

(statearr_30592_33483[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (36))){
var inst_30484 = (state_30531[(23)]);
var inst_30488 = cljs.core.chunk_first(inst_30484);
var inst_30489 = cljs.core.chunk_rest(inst_30484);
var inst_30490 = cljs.core.count(inst_30488);
var inst_30466 = inst_30489;
var inst_30467 = inst_30488;
var inst_30468 = inst_30490;
var inst_30469 = (0);
var state_30531__$1 = (function (){var statearr_30593 = state_30531;
(statearr_30593[(9)] = inst_30467);

(statearr_30593[(19)] = inst_30466);

(statearr_30593[(20)] = inst_30468);

(statearr_30593[(12)] = inst_30469);

return statearr_30593;
})();
var statearr_30598_33485 = state_30531__$1;
(statearr_30598_33485[(2)] = null);

(statearr_30598_33485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (41))){
var inst_30484 = (state_30531[(23)]);
var inst_30499 = (state_30531[(2)]);
var inst_30500 = cljs.core.next(inst_30484);
var inst_30466 = inst_30500;
var inst_30467 = null;
var inst_30468 = (0);
var inst_30469 = (0);
var state_30531__$1 = (function (){var statearr_30601 = state_30531;
(statearr_30601[(9)] = inst_30467);

(statearr_30601[(25)] = inst_30499);

(statearr_30601[(19)] = inst_30466);

(statearr_30601[(20)] = inst_30468);

(statearr_30601[(12)] = inst_30469);

return statearr_30601;
})();
var statearr_30602_33486 = state_30531__$1;
(statearr_30602_33486[(2)] = null);

(statearr_30602_33486[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (43))){
var state_30531__$1 = state_30531;
var statearr_30603_33491 = state_30531__$1;
(statearr_30603_33491[(2)] = null);

(statearr_30603_33491[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (29))){
var inst_30509 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30604_33496 = state_30531__$1;
(statearr_30604_33496[(2)] = inst_30509);

(statearr_30604_33496[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (44))){
var inst_30518 = (state_30531[(2)]);
var state_30531__$1 = (function (){var statearr_30605 = state_30531;
(statearr_30605[(26)] = inst_30518);

return statearr_30605;
})();
var statearr_30606_33501 = state_30531__$1;
(statearr_30606_33501[(2)] = null);

(statearr_30606_33501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (6))){
var inst_30458 = (state_30531[(27)]);
var inst_30457 = cljs.core.deref(cs);
var inst_30458__$1 = cljs.core.keys(inst_30457);
var inst_30459 = cljs.core.count(inst_30458__$1);
var inst_30460 = cljs.core.reset_BANG_(dctr,inst_30459);
var inst_30465 = cljs.core.seq(inst_30458__$1);
var inst_30466 = inst_30465;
var inst_30467 = null;
var inst_30468 = (0);
var inst_30469 = (0);
var state_30531__$1 = (function (){var statearr_30609 = state_30531;
(statearr_30609[(28)] = inst_30460);

(statearr_30609[(9)] = inst_30467);

(statearr_30609[(27)] = inst_30458__$1);

(statearr_30609[(19)] = inst_30466);

(statearr_30609[(20)] = inst_30468);

(statearr_30609[(12)] = inst_30469);

return statearr_30609;
})();
var statearr_30614_33502 = state_30531__$1;
(statearr_30614_33502[(2)] = null);

(statearr_30614_33502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (28))){
var inst_30484 = (state_30531[(23)]);
var inst_30466 = (state_30531[(19)]);
var inst_30484__$1 = cljs.core.seq(inst_30466);
var state_30531__$1 = (function (){var statearr_30623 = state_30531;
(statearr_30623[(23)] = inst_30484__$1);

return statearr_30623;
})();
if(inst_30484__$1){
var statearr_30624_33505 = state_30531__$1;
(statearr_30624_33505[(1)] = (33));

} else {
var statearr_30625_33507 = state_30531__$1;
(statearr_30625_33507[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (25))){
var inst_30468 = (state_30531[(20)]);
var inst_30469 = (state_30531[(12)]);
var inst_30471 = (inst_30469 < inst_30468);
var inst_30472 = inst_30471;
var state_30531__$1 = state_30531;
if(cljs.core.truth_(inst_30472)){
var statearr_30630_33508 = state_30531__$1;
(statearr_30630_33508[(1)] = (27));

} else {
var statearr_30631_33509 = state_30531__$1;
(statearr_30631_33509[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (34))){
var state_30531__$1 = state_30531;
var statearr_30632_33510 = state_30531__$1;
(statearr_30632_33510[(2)] = null);

(statearr_30632_33510[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (17))){
var state_30531__$1 = state_30531;
var statearr_30633_33511 = state_30531__$1;
(statearr_30633_33511[(2)] = null);

(statearr_30633_33511[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (3))){
var inst_30523 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30531__$1,inst_30523);
} else {
if((state_val_30532 === (12))){
var inst_30453 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30635_33512 = state_30531__$1;
(statearr_30635_33512[(2)] = inst_30453);

(statearr_30635_33512[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (2))){
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30531__$1,(4),ch);
} else {
if((state_val_30532 === (23))){
var state_30531__$1 = state_30531;
var statearr_30637_33513 = state_30531__$1;
(statearr_30637_33513[(2)] = null);

(statearr_30637_33513[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (35))){
var inst_30507 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30652_33514 = state_30531__$1;
(statearr_30652_33514[(2)] = inst_30507);

(statearr_30652_33514[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (19))){
var inst_30419 = (state_30531[(7)]);
var inst_30427 = cljs.core.chunk_first(inst_30419);
var inst_30428 = cljs.core.chunk_rest(inst_30419);
var inst_30429 = cljs.core.count(inst_30427);
var inst_30397 = inst_30428;
var inst_30398 = inst_30427;
var inst_30399 = inst_30429;
var inst_30400 = (0);
var state_30531__$1 = (function (){var statearr_30656 = state_30531;
(statearr_30656[(13)] = inst_30398);

(statearr_30656[(14)] = inst_30397);

(statearr_30656[(15)] = inst_30399);

(statearr_30656[(16)] = inst_30400);

return statearr_30656;
})();
var statearr_30661_33518 = state_30531__$1;
(statearr_30661_33518[(2)] = null);

(statearr_30661_33518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (11))){
var inst_30397 = (state_30531[(14)]);
var inst_30419 = (state_30531[(7)]);
var inst_30419__$1 = cljs.core.seq(inst_30397);
var state_30531__$1 = (function (){var statearr_30666 = state_30531;
(statearr_30666[(7)] = inst_30419__$1);

return statearr_30666;
})();
if(inst_30419__$1){
var statearr_30667_33524 = state_30531__$1;
(statearr_30667_33524[(1)] = (16));

} else {
var statearr_30668_33525 = state_30531__$1;
(statearr_30668_33525[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (9))){
var inst_30455 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30676_33526 = state_30531__$1;
(statearr_30676_33526[(2)] = inst_30455);

(statearr_30676_33526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (5))){
var inst_30395 = cljs.core.deref(cs);
var inst_30396 = cljs.core.seq(inst_30395);
var inst_30397 = inst_30396;
var inst_30398 = null;
var inst_30399 = (0);
var inst_30400 = (0);
var state_30531__$1 = (function (){var statearr_30683 = state_30531;
(statearr_30683[(13)] = inst_30398);

(statearr_30683[(14)] = inst_30397);

(statearr_30683[(15)] = inst_30399);

(statearr_30683[(16)] = inst_30400);

return statearr_30683;
})();
var statearr_30686_33528 = state_30531__$1;
(statearr_30686_33528[(2)] = null);

(statearr_30686_33528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (14))){
var state_30531__$1 = state_30531;
var statearr_30691_33529 = state_30531__$1;
(statearr_30691_33529[(2)] = null);

(statearr_30691_33529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (45))){
var inst_30515 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30694_33531 = state_30531__$1;
(statearr_30694_33531[(2)] = inst_30515);

(statearr_30694_33531[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (26))){
var inst_30458 = (state_30531[(27)]);
var inst_30511 = (state_30531[(2)]);
var inst_30512 = cljs.core.seq(inst_30458);
var state_30531__$1 = (function (){var statearr_30695 = state_30531;
(statearr_30695[(29)] = inst_30511);

return statearr_30695;
})();
if(inst_30512){
var statearr_30696_33535 = state_30531__$1;
(statearr_30696_33535[(1)] = (42));

} else {
var statearr_30697_33536 = state_30531__$1;
(statearr_30697_33536[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (16))){
var inst_30419 = (state_30531[(7)]);
var inst_30421 = cljs.core.chunked_seq_QMARK_(inst_30419);
var state_30531__$1 = state_30531;
if(inst_30421){
var statearr_30698_33537 = state_30531__$1;
(statearr_30698_33537[(1)] = (19));

} else {
var statearr_30701_33538 = state_30531__$1;
(statearr_30701_33538[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (38))){
var inst_30504 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30703_33539 = state_30531__$1;
(statearr_30703_33539[(2)] = inst_30504);

(statearr_30703_33539[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (30))){
var state_30531__$1 = state_30531;
var statearr_30704_33540 = state_30531__$1;
(statearr_30704_33540[(2)] = null);

(statearr_30704_33540[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (10))){
var inst_30398 = (state_30531[(13)]);
var inst_30400 = (state_30531[(16)]);
var inst_30408 = cljs.core._nth(inst_30398,inst_30400);
var inst_30409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30408,(0),null);
var inst_30410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30408,(1),null);
var state_30531__$1 = (function (){var statearr_30706 = state_30531;
(statearr_30706[(24)] = inst_30409);

return statearr_30706;
})();
if(cljs.core.truth_(inst_30410)){
var statearr_30707_33541 = state_30531__$1;
(statearr_30707_33541[(1)] = (13));

} else {
var statearr_30709_33542 = state_30531__$1;
(statearr_30709_33542[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (18))){
var inst_30451 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
var statearr_30719_33543 = state_30531__$1;
(statearr_30719_33543[(2)] = inst_30451);

(statearr_30719_33543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (42))){
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30531__$1,(45),dchan);
} else {
if((state_val_30532 === (37))){
var inst_30387 = (state_30531[(11)]);
var inst_30484 = (state_30531[(23)]);
var inst_30493 = (state_30531[(22)]);
var inst_30493__$1 = cljs.core.first(inst_30484);
var inst_30494 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30493__$1,inst_30387,done);
var state_30531__$1 = (function (){var statearr_30724 = state_30531;
(statearr_30724[(22)] = inst_30493__$1);

return statearr_30724;
})();
if(cljs.core.truth_(inst_30494)){
var statearr_30728_33544 = state_30531__$1;
(statearr_30728_33544[(1)] = (39));

} else {
var statearr_30729_33545 = state_30531__$1;
(statearr_30729_33545[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30532 === (8))){
var inst_30399 = (state_30531[(15)]);
var inst_30400 = (state_30531[(16)]);
var inst_30402 = (inst_30400 < inst_30399);
var inst_30403 = inst_30402;
var state_30531__$1 = state_30531;
if(cljs.core.truth_(inst_30403)){
var statearr_30730_33546 = state_30531__$1;
(statearr_30730_33546[(1)] = (10));

} else {
var statearr_30731_33547 = state_30531__$1;
(statearr_30731_33547[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28629__auto__ = null;
var cljs$core$async$mult_$_state_machine__28629__auto____0 = (function (){
var statearr_30733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30733[(0)] = cljs$core$async$mult_$_state_machine__28629__auto__);

(statearr_30733[(1)] = (1));

return statearr_30733;
});
var cljs$core$async$mult_$_state_machine__28629__auto____1 = (function (state_30531){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_30531);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e30734){var ex__28632__auto__ = e30734;
var statearr_30735_33555 = state_30531;
(statearr_30735_33555[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_30531[(4)]))){
var statearr_30738_33557 = state_30531;
(statearr_30738_33557[(1)] = cljs.core.first((state_30531[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33562 = state_30531;
state_30531 = G__33562;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28629__auto__ = function(state_30531){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28629__auto____1.call(this,state_30531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28629__auto____0;
cljs$core$async$mult_$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28629__auto____1;
return cljs$core$async$mult_$_state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_30739 = f__28998__auto__();
(statearr_30739[(6)] = c__28997__auto___33426);

return statearr_30739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
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
var G__30743 = arguments.length;
switch (G__30743) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33577 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33577(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33583 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33583(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33597 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33597(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33605 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33605(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33606 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33606(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33609 = arguments.length;
var i__4819__auto___33610 = (0);
while(true){
if((i__4819__auto___33610 < len__4818__auto___33609)){
args__4824__auto__.push((arguments[i__4819__auto___33610]));

var G__33611 = (i__4819__auto___33610 + (1));
i__4819__auto___33610 = G__33611;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30792){
var map__30793 = p__30792;
var map__30793__$1 = cljs.core.__destructure_map(map__30793);
var opts = map__30793__$1;
var statearr_30794_33615 = state;
(statearr_30794_33615[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30795_33618 = state;
(statearr_30795_33618[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_30796_33619 = state;
(statearr_30796_33619[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30783){
var G__30784 = cljs.core.first(seq30783);
var seq30783__$1 = cljs.core.next(seq30783);
var G__30785 = cljs.core.first(seq30783__$1);
var seq30783__$2 = cljs.core.next(seq30783__$1);
var G__30786 = cljs.core.first(seq30783__$2);
var seq30783__$3 = cljs.core.next(seq30783__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30784,G__30785,G__30786,seq30783__$3);
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30818 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30819){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30819 = meta30819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30820,meta30819__$1){
var self__ = this;
var _30820__$1 = this;
return (new cljs.core.async.t_cljs$core$async30818(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30819__$1));
}));

(cljs.core.async.t_cljs$core$async30818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30820){
var self__ = this;
var _30820__$1 = this;
return self__.meta30819;
}));

(cljs.core.async.t_cljs$core$async30818.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30818.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30818.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30818.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30818.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30818.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30818.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30819","meta30819",-1503479906,null)], null);
}));

(cljs.core.async.t_cljs$core$async30818.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30818");

(cljs.core.async.t_cljs$core$async30818.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30818");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30818.
 */
cljs.core.async.__GT_t_cljs$core$async30818 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30818(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30819){
return (new cljs.core.async.t_cljs$core$async30818(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30819));
});

}

return (new cljs.core.async.t_cljs$core$async30818(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28997__auto___33645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_30912){
var state_val_30914 = (state_30912[(1)]);
if((state_val_30914 === (7))){
var inst_30865 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
if(cljs.core.truth_(inst_30865)){
var statearr_30915_33646 = state_30912__$1;
(statearr_30915_33646[(1)] = (8));

} else {
var statearr_30916_33647 = state_30912__$1;
(statearr_30916_33647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (20))){
var inst_30858 = (state_30912[(7)]);
var state_30912__$1 = state_30912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30912__$1,(23),out,inst_30858);
} else {
if((state_val_30914 === (1))){
var inst_30841 = calc_state();
var inst_30842 = cljs.core.__destructure_map(inst_30841);
var inst_30843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30842,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30842,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30842,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30846 = inst_30841;
var state_30912__$1 = (function (){var statearr_30922 = state_30912;
(statearr_30922[(8)] = inst_30846);

(statearr_30922[(9)] = inst_30844);

(statearr_30922[(10)] = inst_30843);

(statearr_30922[(11)] = inst_30845);

return statearr_30922;
})();
var statearr_30924_33649 = state_30912__$1;
(statearr_30924_33649[(2)] = null);

(statearr_30924_33649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (24))){
var inst_30849 = (state_30912[(12)]);
var inst_30846 = inst_30849;
var state_30912__$1 = (function (){var statearr_30925 = state_30912;
(statearr_30925[(8)] = inst_30846);

return statearr_30925;
})();
var statearr_30926_33650 = state_30912__$1;
(statearr_30926_33650[(2)] = null);

(statearr_30926_33650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (4))){
var inst_30858 = (state_30912[(7)]);
var inst_30860 = (state_30912[(13)]);
var inst_30857 = (state_30912[(2)]);
var inst_30858__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30857,(0),null);
var inst_30859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30857,(1),null);
var inst_30860__$1 = (inst_30858__$1 == null);
var state_30912__$1 = (function (){var statearr_30927 = state_30912;
(statearr_30927[(7)] = inst_30858__$1);

(statearr_30927[(13)] = inst_30860__$1);

(statearr_30927[(14)] = inst_30859);

return statearr_30927;
})();
if(cljs.core.truth_(inst_30860__$1)){
var statearr_30928_33657 = state_30912__$1;
(statearr_30928_33657[(1)] = (5));

} else {
var statearr_30929_33658 = state_30912__$1;
(statearr_30929_33658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (15))){
var inst_30850 = (state_30912[(15)]);
var inst_30881 = (state_30912[(16)]);
var inst_30881__$1 = cljs.core.empty_QMARK_(inst_30850);
var state_30912__$1 = (function (){var statearr_30931 = state_30912;
(statearr_30931[(16)] = inst_30881__$1);

return statearr_30931;
})();
if(inst_30881__$1){
var statearr_30932_33659 = state_30912__$1;
(statearr_30932_33659[(1)] = (17));

} else {
var statearr_30936_33660 = state_30912__$1;
(statearr_30936_33660[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (21))){
var inst_30849 = (state_30912[(12)]);
var inst_30846 = inst_30849;
var state_30912__$1 = (function (){var statearr_30939 = state_30912;
(statearr_30939[(8)] = inst_30846);

return statearr_30939;
})();
var statearr_30940_33663 = state_30912__$1;
(statearr_30940_33663[(2)] = null);

(statearr_30940_33663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (13))){
var inst_30872 = (state_30912[(2)]);
var inst_30873 = calc_state();
var inst_30846 = inst_30873;
var state_30912__$1 = (function (){var statearr_30941 = state_30912;
(statearr_30941[(17)] = inst_30872);

(statearr_30941[(8)] = inst_30846);

return statearr_30941;
})();
var statearr_30942_33664 = state_30912__$1;
(statearr_30942_33664[(2)] = null);

(statearr_30942_33664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (22))){
var inst_30905 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
var statearr_30943_33665 = state_30912__$1;
(statearr_30943_33665[(2)] = inst_30905);

(statearr_30943_33665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (6))){
var inst_30859 = (state_30912[(14)]);
var inst_30863 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30859,change);
var state_30912__$1 = state_30912;
var statearr_30945_33666 = state_30912__$1;
(statearr_30945_33666[(2)] = inst_30863);

(statearr_30945_33666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (25))){
var state_30912__$1 = state_30912;
var statearr_30946_33667 = state_30912__$1;
(statearr_30946_33667[(2)] = null);

(statearr_30946_33667[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (17))){
var inst_30851 = (state_30912[(18)]);
var inst_30859 = (state_30912[(14)]);
var inst_30883 = (inst_30851.cljs$core$IFn$_invoke$arity$1 ? inst_30851.cljs$core$IFn$_invoke$arity$1(inst_30859) : inst_30851.call(null,inst_30859));
var inst_30884 = cljs.core.not(inst_30883);
var state_30912__$1 = state_30912;
var statearr_30947_33670 = state_30912__$1;
(statearr_30947_33670[(2)] = inst_30884);

(statearr_30947_33670[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (3))){
var inst_30909 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30912__$1,inst_30909);
} else {
if((state_val_30914 === (12))){
var state_30912__$1 = state_30912;
var statearr_30950_33671 = state_30912__$1;
(statearr_30950_33671[(2)] = null);

(statearr_30950_33671[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (2))){
var inst_30849 = (state_30912[(12)]);
var inst_30846 = (state_30912[(8)]);
var inst_30849__$1 = cljs.core.__destructure_map(inst_30846);
var inst_30850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30849__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30849__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30849__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30912__$1 = (function (){var statearr_30953 = state_30912;
(statearr_30953[(15)] = inst_30850);

(statearr_30953[(12)] = inst_30849__$1);

(statearr_30953[(18)] = inst_30851);

return statearr_30953;
})();
return cljs.core.async.ioc_alts_BANG_(state_30912__$1,(4),inst_30852);
} else {
if((state_val_30914 === (23))){
var inst_30896 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
if(cljs.core.truth_(inst_30896)){
var statearr_30955_33672 = state_30912__$1;
(statearr_30955_33672[(1)] = (24));

} else {
var statearr_30956_33673 = state_30912__$1;
(statearr_30956_33673[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (19))){
var inst_30887 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
var statearr_30957_33675 = state_30912__$1;
(statearr_30957_33675[(2)] = inst_30887);

(statearr_30957_33675[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (11))){
var inst_30859 = (state_30912[(14)]);
var inst_30869 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30859);
var state_30912__$1 = state_30912;
var statearr_30958_33676 = state_30912__$1;
(statearr_30958_33676[(2)] = inst_30869);

(statearr_30958_33676[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (9))){
var inst_30850 = (state_30912[(15)]);
var inst_30877 = (state_30912[(19)]);
var inst_30859 = (state_30912[(14)]);
var inst_30877__$1 = (inst_30850.cljs$core$IFn$_invoke$arity$1 ? inst_30850.cljs$core$IFn$_invoke$arity$1(inst_30859) : inst_30850.call(null,inst_30859));
var state_30912__$1 = (function (){var statearr_30959 = state_30912;
(statearr_30959[(19)] = inst_30877__$1);

return statearr_30959;
})();
if(cljs.core.truth_(inst_30877__$1)){
var statearr_30960_33678 = state_30912__$1;
(statearr_30960_33678[(1)] = (14));

} else {
var statearr_30961_33679 = state_30912__$1;
(statearr_30961_33679[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (5))){
var inst_30860 = (state_30912[(13)]);
var state_30912__$1 = state_30912;
var statearr_30962_33680 = state_30912__$1;
(statearr_30962_33680[(2)] = inst_30860);

(statearr_30962_33680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (14))){
var inst_30877 = (state_30912[(19)]);
var state_30912__$1 = state_30912;
var statearr_30966_33681 = state_30912__$1;
(statearr_30966_33681[(2)] = inst_30877);

(statearr_30966_33681[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (26))){
var inst_30901 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
var statearr_30969_33682 = state_30912__$1;
(statearr_30969_33682[(2)] = inst_30901);

(statearr_30969_33682[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (16))){
var inst_30889 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
if(cljs.core.truth_(inst_30889)){
var statearr_30973_33683 = state_30912__$1;
(statearr_30973_33683[(1)] = (20));

} else {
var statearr_30974_33684 = state_30912__$1;
(statearr_30974_33684[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (10))){
var inst_30907 = (state_30912[(2)]);
var state_30912__$1 = state_30912;
var statearr_30981_33685 = state_30912__$1;
(statearr_30981_33685[(2)] = inst_30907);

(statearr_30981_33685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (18))){
var inst_30881 = (state_30912[(16)]);
var state_30912__$1 = state_30912;
var statearr_30985_33686 = state_30912__$1;
(statearr_30985_33686[(2)] = inst_30881);

(statearr_30985_33686[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (8))){
var inst_30858 = (state_30912[(7)]);
var inst_30867 = (inst_30858 == null);
var state_30912__$1 = state_30912;
if(cljs.core.truth_(inst_30867)){
var statearr_30986_33687 = state_30912__$1;
(statearr_30986_33687[(1)] = (11));

} else {
var statearr_30987_33688 = state_30912__$1;
(statearr_30987_33688[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__28629__auto__ = null;
var cljs$core$async$mix_$_state_machine__28629__auto____0 = (function (){
var statearr_30988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30988[(0)] = cljs$core$async$mix_$_state_machine__28629__auto__);

(statearr_30988[(1)] = (1));

return statearr_30988;
});
var cljs$core$async$mix_$_state_machine__28629__auto____1 = (function (state_30912){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_30912);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e30990){var ex__28632__auto__ = e30990;
var statearr_30995_33689 = state_30912;
(statearr_30995_33689[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_30912[(4)]))){
var statearr_30996_33690 = state_30912;
(statearr_30996_33690[(1)] = cljs.core.first((state_30912[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33691 = state_30912;
state_30912 = G__33691;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28629__auto__ = function(state_30912){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28629__auto____1.call(this,state_30912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28629__auto____0;
cljs$core$async$mix_$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28629__auto____1;
return cljs$core$async$mix_$_state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_31000 = f__28998__auto__();
(statearr_31000[(6)] = c__28997__auto___33645);

return statearr_31000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33701 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33701(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33702 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33702(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33704 = (function() {
var G__33705 = null;
var G__33705__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33705__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33705 = function(p,v){
switch(arguments.length){
case 1:
return G__33705__1.call(this,p);
case 2:
return G__33705__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33705.cljs$core$IFn$_invoke$arity$1 = G__33705__1;
G__33705.cljs$core$IFn$_invoke$arity$2 = G__33705__2;
return G__33705;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31072 = arguments.length;
switch (G__31072) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33704(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33704(p,v);
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
var G__31090 = arguments.length;
switch (G__31090) {
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
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31082_SHARP_){
if(cljs.core.truth_((p1__31082_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31082_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31082_SHARP_.call(null,topic)))){
return p1__31082_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31082_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31104 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31104 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31106){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31106 = meta31106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31107,meta31106__$1){
var self__ = this;
var _31107__$1 = this;
return (new cljs.core.async.t_cljs$core$async31104(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31106__$1));
}));

(cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31107){
var self__ = this;
var _31107__$1 = this;
return self__.meta31106;
}));

(cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31106","meta31106",1647797663,null)], null);
}));

(cljs.core.async.t_cljs$core$async31104.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31104");

(cljs.core.async.t_cljs$core$async31104.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31104");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31104.
 */
cljs.core.async.__GT_t_cljs$core$async31104 = (function cljs$core$async$__GT_t_cljs$core$async31104(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31106){
return (new cljs.core.async.t_cljs$core$async31104(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31106));
});

}

return (new cljs.core.async.t_cljs$core$async31104(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28997__auto___33731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_31231){
var state_val_31233 = (state_31231[(1)]);
if((state_val_31233 === (7))){
var inst_31225 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31243_33732 = state_31231__$1;
(statearr_31243_33732[(2)] = inst_31225);

(statearr_31243_33732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (20))){
var state_31231__$1 = state_31231;
var statearr_31245_33733 = state_31231__$1;
(statearr_31245_33733[(2)] = null);

(statearr_31245_33733[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (1))){
var state_31231__$1 = state_31231;
var statearr_31247_33734 = state_31231__$1;
(statearr_31247_33734[(2)] = null);

(statearr_31247_33734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (24))){
var inst_31203 = (state_31231[(7)]);
var inst_31217 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31203);
var state_31231__$1 = state_31231;
var statearr_31252_33735 = state_31231__$1;
(statearr_31252_33735[(2)] = inst_31217);

(statearr_31252_33735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (4))){
var inst_31150 = (state_31231[(8)]);
var inst_31150__$1 = (state_31231[(2)]);
var inst_31152 = (inst_31150__$1 == null);
var state_31231__$1 = (function (){var statearr_31256 = state_31231;
(statearr_31256[(8)] = inst_31150__$1);

return statearr_31256;
})();
if(cljs.core.truth_(inst_31152)){
var statearr_31259_33742 = state_31231__$1;
(statearr_31259_33742[(1)] = (5));

} else {
var statearr_31263_33743 = state_31231__$1;
(statearr_31263_33743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (15))){
var inst_31197 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31268_33744 = state_31231__$1;
(statearr_31268_33744[(2)] = inst_31197);

(statearr_31268_33744[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (21))){
var inst_31222 = (state_31231[(2)]);
var state_31231__$1 = (function (){var statearr_31274 = state_31231;
(statearr_31274[(9)] = inst_31222);

return statearr_31274;
})();
var statearr_31276_33745 = state_31231__$1;
(statearr_31276_33745[(2)] = null);

(statearr_31276_33745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (13))){
var inst_31178 = (state_31231[(10)]);
var inst_31180 = cljs.core.chunked_seq_QMARK_(inst_31178);
var state_31231__$1 = state_31231;
if(inst_31180){
var statearr_31286_33746 = state_31231__$1;
(statearr_31286_33746[(1)] = (16));

} else {
var statearr_31287_33747 = state_31231__$1;
(statearr_31287_33747[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (22))){
var inst_31212 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
if(cljs.core.truth_(inst_31212)){
var statearr_31291_33748 = state_31231__$1;
(statearr_31291_33748[(1)] = (23));

} else {
var statearr_31292_33749 = state_31231__$1;
(statearr_31292_33749[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (6))){
var inst_31203 = (state_31231[(7)]);
var inst_31205 = (state_31231[(11)]);
var inst_31150 = (state_31231[(8)]);
var inst_31203__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31150) : topic_fn.call(null,inst_31150));
var inst_31204 = cljs.core.deref(mults);
var inst_31205__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31204,inst_31203__$1);
var state_31231__$1 = (function (){var statearr_31299 = state_31231;
(statearr_31299[(7)] = inst_31203__$1);

(statearr_31299[(11)] = inst_31205__$1);

return statearr_31299;
})();
if(cljs.core.truth_(inst_31205__$1)){
var statearr_31300_33751 = state_31231__$1;
(statearr_31300_33751[(1)] = (19));

} else {
var statearr_31302_33752 = state_31231__$1;
(statearr_31302_33752[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (25))){
var inst_31219 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31309_33753 = state_31231__$1;
(statearr_31309_33753[(2)] = inst_31219);

(statearr_31309_33753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (17))){
var inst_31178 = (state_31231[(10)]);
var inst_31187 = cljs.core.first(inst_31178);
var inst_31188 = cljs.core.async.muxch_STAR_(inst_31187);
var inst_31189 = cljs.core.async.close_BANG_(inst_31188);
var inst_31190 = cljs.core.next(inst_31178);
var inst_31161 = inst_31190;
var inst_31162 = null;
var inst_31163 = (0);
var inst_31164 = (0);
var state_31231__$1 = (function (){var statearr_31314 = state_31231;
(statearr_31314[(12)] = inst_31162);

(statearr_31314[(13)] = inst_31163);

(statearr_31314[(14)] = inst_31189);

(statearr_31314[(15)] = inst_31164);

(statearr_31314[(16)] = inst_31161);

return statearr_31314;
})();
var statearr_31319_33756 = state_31231__$1;
(statearr_31319_33756[(2)] = null);

(statearr_31319_33756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (3))){
var inst_31228 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31231__$1,inst_31228);
} else {
if((state_val_31233 === (12))){
var inst_31199 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31321_33758 = state_31231__$1;
(statearr_31321_33758[(2)] = inst_31199);

(statearr_31321_33758[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (2))){
var state_31231__$1 = state_31231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31231__$1,(4),ch);
} else {
if((state_val_31233 === (23))){
var state_31231__$1 = state_31231;
var statearr_31327_33759 = state_31231__$1;
(statearr_31327_33759[(2)] = null);

(statearr_31327_33759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (19))){
var inst_31205 = (state_31231[(11)]);
var inst_31150 = (state_31231[(8)]);
var inst_31209 = cljs.core.async.muxch_STAR_(inst_31205);
var state_31231__$1 = state_31231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31231__$1,(22),inst_31209,inst_31150);
} else {
if((state_val_31233 === (11))){
var inst_31178 = (state_31231[(10)]);
var inst_31161 = (state_31231[(16)]);
var inst_31178__$1 = cljs.core.seq(inst_31161);
var state_31231__$1 = (function (){var statearr_31342 = state_31231;
(statearr_31342[(10)] = inst_31178__$1);

return statearr_31342;
})();
if(inst_31178__$1){
var statearr_31344_33760 = state_31231__$1;
(statearr_31344_33760[(1)] = (13));

} else {
var statearr_31351_33761 = state_31231__$1;
(statearr_31351_33761[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (9))){
var inst_31201 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31355_33762 = state_31231__$1;
(statearr_31355_33762[(2)] = inst_31201);

(statearr_31355_33762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (5))){
var inst_31158 = cljs.core.deref(mults);
var inst_31159 = cljs.core.vals(inst_31158);
var inst_31160 = cljs.core.seq(inst_31159);
var inst_31161 = inst_31160;
var inst_31162 = null;
var inst_31163 = (0);
var inst_31164 = (0);
var state_31231__$1 = (function (){var statearr_31360 = state_31231;
(statearr_31360[(12)] = inst_31162);

(statearr_31360[(13)] = inst_31163);

(statearr_31360[(15)] = inst_31164);

(statearr_31360[(16)] = inst_31161);

return statearr_31360;
})();
var statearr_31361_33763 = state_31231__$1;
(statearr_31361_33763[(2)] = null);

(statearr_31361_33763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (14))){
var state_31231__$1 = state_31231;
var statearr_31368_33769 = state_31231__$1;
(statearr_31368_33769[(2)] = null);

(statearr_31368_33769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (16))){
var inst_31178 = (state_31231[(10)]);
var inst_31182 = cljs.core.chunk_first(inst_31178);
var inst_31183 = cljs.core.chunk_rest(inst_31178);
var inst_31184 = cljs.core.count(inst_31182);
var inst_31161 = inst_31183;
var inst_31162 = inst_31182;
var inst_31163 = inst_31184;
var inst_31164 = (0);
var state_31231__$1 = (function (){var statearr_31377 = state_31231;
(statearr_31377[(12)] = inst_31162);

(statearr_31377[(13)] = inst_31163);

(statearr_31377[(15)] = inst_31164);

(statearr_31377[(16)] = inst_31161);

return statearr_31377;
})();
var statearr_31378_33770 = state_31231__$1;
(statearr_31378_33770[(2)] = null);

(statearr_31378_33770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (10))){
var inst_31162 = (state_31231[(12)]);
var inst_31163 = (state_31231[(13)]);
var inst_31164 = (state_31231[(15)]);
var inst_31161 = (state_31231[(16)]);
var inst_31171 = cljs.core._nth(inst_31162,inst_31164);
var inst_31172 = cljs.core.async.muxch_STAR_(inst_31171);
var inst_31173 = cljs.core.async.close_BANG_(inst_31172);
var inst_31175 = (inst_31164 + (1));
var tmp31365 = inst_31162;
var tmp31366 = inst_31163;
var tmp31367 = inst_31161;
var inst_31161__$1 = tmp31367;
var inst_31162__$1 = tmp31365;
var inst_31163__$1 = tmp31366;
var inst_31164__$1 = inst_31175;
var state_31231__$1 = (function (){var statearr_31386 = state_31231;
(statearr_31386[(12)] = inst_31162__$1);

(statearr_31386[(13)] = inst_31163__$1);

(statearr_31386[(17)] = inst_31173);

(statearr_31386[(15)] = inst_31164__$1);

(statearr_31386[(16)] = inst_31161__$1);

return statearr_31386;
})();
var statearr_31389_33776 = state_31231__$1;
(statearr_31389_33776[(2)] = null);

(statearr_31389_33776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (18))){
var inst_31194 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31392_33777 = state_31231__$1;
(statearr_31392_33777[(2)] = inst_31194);

(statearr_31392_33777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31233 === (8))){
var inst_31163 = (state_31231[(13)]);
var inst_31164 = (state_31231[(15)]);
var inst_31166 = (inst_31164 < inst_31163);
var inst_31167 = inst_31166;
var state_31231__$1 = state_31231;
if(cljs.core.truth_(inst_31167)){
var statearr_31399_33778 = state_31231__$1;
(statearr_31399_33778[(1)] = (10));

} else {
var statearr_31403_33779 = state_31231__$1;
(statearr_31403_33779[(1)] = (11));

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
var cljs$core$async$state_machine__28629__auto__ = null;
var cljs$core$async$state_machine__28629__auto____0 = (function (){
var statearr_31408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31408[(0)] = cljs$core$async$state_machine__28629__auto__);

(statearr_31408[(1)] = (1));

return statearr_31408;
});
var cljs$core$async$state_machine__28629__auto____1 = (function (state_31231){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_31231);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e31414){var ex__28632__auto__ = e31414;
var statearr_31415_33780 = state_31231;
(statearr_31415_33780[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_31231[(4)]))){
var statearr_31417_33782 = state_31231;
(statearr_31417_33782[(1)] = cljs.core.first((state_31231[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33784 = state_31231;
state_31231 = G__33784;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$state_machine__28629__auto__ = function(state_31231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28629__auto____1.call(this,state_31231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28629__auto____0;
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28629__auto____1;
return cljs$core$async$state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_31430 = f__28998__auto__();
(statearr_31430[(6)] = c__28997__auto___33731);

return statearr_31430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
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
var G__31438 = arguments.length;
switch (G__31438) {
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
var G__31464 = arguments.length;
switch (G__31464) {
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
var G__31488 = arguments.length;
switch (G__31488) {
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
var c__28997__auto___33798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_31589){
var state_val_31590 = (state_31589[(1)]);
if((state_val_31590 === (7))){
var state_31589__$1 = state_31589;
var statearr_31610_33799 = state_31589__$1;
(statearr_31610_33799[(2)] = null);

(statearr_31610_33799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (1))){
var state_31589__$1 = state_31589;
var statearr_31618_33800 = state_31589__$1;
(statearr_31618_33800[(2)] = null);

(statearr_31618_33800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (4))){
var inst_31532 = (state_31589[(7)]);
var inst_31531 = (state_31589[(8)]);
var inst_31534 = (inst_31532 < inst_31531);
var state_31589__$1 = state_31589;
if(cljs.core.truth_(inst_31534)){
var statearr_31631_33801 = state_31589__$1;
(statearr_31631_33801[(1)] = (6));

} else {
var statearr_31632_33802 = state_31589__$1;
(statearr_31632_33802[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (15))){
var inst_31570 = (state_31589[(9)]);
var inst_31576 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31570);
var state_31589__$1 = state_31589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31589__$1,(17),out,inst_31576);
} else {
if((state_val_31590 === (13))){
var inst_31570 = (state_31589[(9)]);
var inst_31570__$1 = (state_31589[(2)]);
var inst_31571 = cljs.core.some(cljs.core.nil_QMARK_,inst_31570__$1);
var state_31589__$1 = (function (){var statearr_31638 = state_31589;
(statearr_31638[(9)] = inst_31570__$1);

return statearr_31638;
})();
if(cljs.core.truth_(inst_31571)){
var statearr_31645_33803 = state_31589__$1;
(statearr_31645_33803[(1)] = (14));

} else {
var statearr_31646_33804 = state_31589__$1;
(statearr_31646_33804[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (6))){
var state_31589__$1 = state_31589;
var statearr_31647_33805 = state_31589__$1;
(statearr_31647_33805[(2)] = null);

(statearr_31647_33805[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (17))){
var inst_31578 = (state_31589[(2)]);
var state_31589__$1 = (function (){var statearr_31677 = state_31589;
(statearr_31677[(10)] = inst_31578);

return statearr_31677;
})();
var statearr_31680_33806 = state_31589__$1;
(statearr_31680_33806[(2)] = null);

(statearr_31680_33806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (3))){
var inst_31586 = (state_31589[(2)]);
var state_31589__$1 = state_31589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31589__$1,inst_31586);
} else {
if((state_val_31590 === (12))){
var _ = (function (){var statearr_31692 = state_31589;
(statearr_31692[(4)] = cljs.core.rest((state_31589[(4)])));

return statearr_31692;
})();
var state_31589__$1 = state_31589;
var ex31661 = (state_31589__$1[(2)]);
var statearr_31700_33807 = state_31589__$1;
(statearr_31700_33807[(5)] = ex31661);


if((ex31661 instanceof Object)){
var statearr_31706_33808 = state_31589__$1;
(statearr_31706_33808[(1)] = (11));

(statearr_31706_33808[(5)] = null);

} else {
throw ex31661;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (2))){
var inst_31530 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31531 = cnt;
var inst_31532 = (0);
var state_31589__$1 = (function (){var statearr_31714 = state_31589;
(statearr_31714[(7)] = inst_31532);

(statearr_31714[(11)] = inst_31530);

(statearr_31714[(8)] = inst_31531);

return statearr_31714;
})();
var statearr_31717_33809 = state_31589__$1;
(statearr_31717_33809[(2)] = null);

(statearr_31717_33809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (11))){
var inst_31547 = (state_31589[(2)]);
var inst_31548 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31589__$1 = (function (){var statearr_31718 = state_31589;
(statearr_31718[(12)] = inst_31547);

return statearr_31718;
})();
var statearr_31720_33811 = state_31589__$1;
(statearr_31720_33811[(2)] = inst_31548);

(statearr_31720_33811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (9))){
var inst_31532 = (state_31589[(7)]);
var _ = (function (){var statearr_31729 = state_31589;
(statearr_31729[(4)] = cljs.core.cons((12),(state_31589[(4)])));

return statearr_31729;
})();
var inst_31555 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31532) : chs__$1.call(null,inst_31532));
var inst_31556 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31532) : done.call(null,inst_31532));
var inst_31557 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31555,inst_31556);
var ___$1 = (function (){var statearr_31731 = state_31589;
(statearr_31731[(4)] = cljs.core.rest((state_31589[(4)])));

return statearr_31731;
})();
var state_31589__$1 = state_31589;
var statearr_31732_33822 = state_31589__$1;
(statearr_31732_33822[(2)] = inst_31557);

(statearr_31732_33822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (5))){
var inst_31567 = (state_31589[(2)]);
var state_31589__$1 = (function (){var statearr_31733 = state_31589;
(statearr_31733[(13)] = inst_31567);

return statearr_31733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31589__$1,(13),dchan);
} else {
if((state_val_31590 === (14))){
var inst_31574 = cljs.core.async.close_BANG_(out);
var state_31589__$1 = state_31589;
var statearr_31737_33823 = state_31589__$1;
(statearr_31737_33823[(2)] = inst_31574);

(statearr_31737_33823[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (16))){
var inst_31583 = (state_31589[(2)]);
var state_31589__$1 = state_31589;
var statearr_31739_33824 = state_31589__$1;
(statearr_31739_33824[(2)] = inst_31583);

(statearr_31739_33824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (10))){
var inst_31532 = (state_31589[(7)]);
var inst_31560 = (state_31589[(2)]);
var inst_31561 = (inst_31532 + (1));
var inst_31532__$1 = inst_31561;
var state_31589__$1 = (function (){var statearr_31743 = state_31589;
(statearr_31743[(7)] = inst_31532__$1);

(statearr_31743[(14)] = inst_31560);

return statearr_31743;
})();
var statearr_31746_33828 = state_31589__$1;
(statearr_31746_33828[(2)] = null);

(statearr_31746_33828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (8))){
var inst_31565 = (state_31589[(2)]);
var state_31589__$1 = state_31589;
var statearr_31747_33829 = state_31589__$1;
(statearr_31747_33829[(2)] = inst_31565);

(statearr_31747_33829[(1)] = (5));


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
var cljs$core$async$state_machine__28629__auto__ = null;
var cljs$core$async$state_machine__28629__auto____0 = (function (){
var statearr_31748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31748[(0)] = cljs$core$async$state_machine__28629__auto__);

(statearr_31748[(1)] = (1));

return statearr_31748;
});
var cljs$core$async$state_machine__28629__auto____1 = (function (state_31589){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_31589);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e31752){var ex__28632__auto__ = e31752;
var statearr_31753_33840 = state_31589;
(statearr_31753_33840[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_31589[(4)]))){
var statearr_31755_33841 = state_31589;
(statearr_31755_33841[(1)] = cljs.core.first((state_31589[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33845 = state_31589;
state_31589 = G__33845;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$state_machine__28629__auto__ = function(state_31589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28629__auto____1.call(this,state_31589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28629__auto____0;
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28629__auto____1;
return cljs$core$async$state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_31758 = f__28998__auto__();
(statearr_31758[(6)] = c__28997__auto___33798);

return statearr_31758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
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
var G__31763 = arguments.length;
switch (G__31763) {
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
var c__28997__auto___33850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_31812){
var state_val_31813 = (state_31812[(1)]);
if((state_val_31813 === (7))){
var inst_31789 = (state_31812[(7)]);
var inst_31788 = (state_31812[(8)]);
var inst_31788__$1 = (state_31812[(2)]);
var inst_31789__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31788__$1,(0),null);
var inst_31790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31788__$1,(1),null);
var inst_31791 = (inst_31789__$1 == null);
var state_31812__$1 = (function (){var statearr_31825 = state_31812;
(statearr_31825[(7)] = inst_31789__$1);

(statearr_31825[(8)] = inst_31788__$1);

(statearr_31825[(9)] = inst_31790);

return statearr_31825;
})();
if(cljs.core.truth_(inst_31791)){
var statearr_31827_33855 = state_31812__$1;
(statearr_31827_33855[(1)] = (8));

} else {
var statearr_31828_33856 = state_31812__$1;
(statearr_31828_33856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (1))){
var inst_31772 = cljs.core.vec(chs);
var inst_31773 = inst_31772;
var state_31812__$1 = (function (){var statearr_31829 = state_31812;
(statearr_31829[(10)] = inst_31773);

return statearr_31829;
})();
var statearr_31830_33857 = state_31812__$1;
(statearr_31830_33857[(2)] = null);

(statearr_31830_33857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (4))){
var inst_31773 = (state_31812[(10)]);
var state_31812__$1 = state_31812;
return cljs.core.async.ioc_alts_BANG_(state_31812__$1,(7),inst_31773);
} else {
if((state_val_31813 === (6))){
var inst_31805 = (state_31812[(2)]);
var state_31812__$1 = state_31812;
var statearr_31834_33858 = state_31812__$1;
(statearr_31834_33858[(2)] = inst_31805);

(statearr_31834_33858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (3))){
var inst_31807 = (state_31812[(2)]);
var state_31812__$1 = state_31812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31812__$1,inst_31807);
} else {
if((state_val_31813 === (2))){
var inst_31773 = (state_31812[(10)]);
var inst_31776 = cljs.core.count(inst_31773);
var inst_31777 = (inst_31776 > (0));
var state_31812__$1 = state_31812;
if(cljs.core.truth_(inst_31777)){
var statearr_31845_33859 = state_31812__$1;
(statearr_31845_33859[(1)] = (4));

} else {
var statearr_31854_33860 = state_31812__$1;
(statearr_31854_33860[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (11))){
var inst_31773 = (state_31812[(10)]);
var inst_31798 = (state_31812[(2)]);
var tmp31836 = inst_31773;
var inst_31773__$1 = tmp31836;
var state_31812__$1 = (function (){var statearr_31863 = state_31812;
(statearr_31863[(10)] = inst_31773__$1);

(statearr_31863[(11)] = inst_31798);

return statearr_31863;
})();
var statearr_31864_33861 = state_31812__$1;
(statearr_31864_33861[(2)] = null);

(statearr_31864_33861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (9))){
var inst_31789 = (state_31812[(7)]);
var state_31812__$1 = state_31812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31812__$1,(11),out,inst_31789);
} else {
if((state_val_31813 === (5))){
var inst_31803 = cljs.core.async.close_BANG_(out);
var state_31812__$1 = state_31812;
var statearr_31866_33865 = state_31812__$1;
(statearr_31866_33865[(2)] = inst_31803);

(statearr_31866_33865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (10))){
var inst_31801 = (state_31812[(2)]);
var state_31812__$1 = state_31812;
var statearr_31871_33866 = state_31812__$1;
(statearr_31871_33866[(2)] = inst_31801);

(statearr_31871_33866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (8))){
var inst_31789 = (state_31812[(7)]);
var inst_31773 = (state_31812[(10)]);
var inst_31788 = (state_31812[(8)]);
var inst_31790 = (state_31812[(9)]);
var inst_31793 = (function (){var cs = inst_31773;
var vec__31784 = inst_31788;
var v = inst_31789;
var c = inst_31790;
return (function (p1__31760_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31760_SHARP_);
});
})();
var inst_31794 = cljs.core.filterv(inst_31793,inst_31773);
var inst_31773__$1 = inst_31794;
var state_31812__$1 = (function (){var statearr_31873 = state_31812;
(statearr_31873[(10)] = inst_31773__$1);

return statearr_31873;
})();
var statearr_31874_33868 = state_31812__$1;
(statearr_31874_33868[(2)] = null);

(statearr_31874_33868[(1)] = (2));


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
var cljs$core$async$state_machine__28629__auto__ = null;
var cljs$core$async$state_machine__28629__auto____0 = (function (){
var statearr_31879 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31879[(0)] = cljs$core$async$state_machine__28629__auto__);

(statearr_31879[(1)] = (1));

return statearr_31879;
});
var cljs$core$async$state_machine__28629__auto____1 = (function (state_31812){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_31812);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e31887){var ex__28632__auto__ = e31887;
var statearr_31888_33870 = state_31812;
(statearr_31888_33870[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_31812[(4)]))){
var statearr_31891_33871 = state_31812;
(statearr_31891_33871[(1)] = cljs.core.first((state_31812[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33872 = state_31812;
state_31812 = G__33872;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$state_machine__28629__auto__ = function(state_31812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28629__auto____1.call(this,state_31812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28629__auto____0;
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28629__auto____1;
return cljs$core$async$state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_31897 = f__28998__auto__();
(statearr_31897[(6)] = c__28997__auto___33850);

return statearr_31897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
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
var G__31901 = arguments.length;
switch (G__31901) {
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
var c__28997__auto___33874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_31939){
var state_val_31940 = (state_31939[(1)]);
if((state_val_31940 === (7))){
var inst_31921 = (state_31939[(7)]);
var inst_31921__$1 = (state_31939[(2)]);
var inst_31922 = (inst_31921__$1 == null);
var inst_31923 = cljs.core.not(inst_31922);
var state_31939__$1 = (function (){var statearr_31941 = state_31939;
(statearr_31941[(7)] = inst_31921__$1);

return statearr_31941;
})();
if(inst_31923){
var statearr_31942_33875 = state_31939__$1;
(statearr_31942_33875[(1)] = (8));

} else {
var statearr_31944_33876 = state_31939__$1;
(statearr_31944_33876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (1))){
var inst_31912 = (0);
var state_31939__$1 = (function (){var statearr_31945 = state_31939;
(statearr_31945[(8)] = inst_31912);

return statearr_31945;
})();
var statearr_31946_33877 = state_31939__$1;
(statearr_31946_33877[(2)] = null);

(statearr_31946_33877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (4))){
var state_31939__$1 = state_31939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31939__$1,(7),ch);
} else {
if((state_val_31940 === (6))){
var inst_31934 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_31947_33878 = state_31939__$1;
(statearr_31947_33878[(2)] = inst_31934);

(statearr_31947_33878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (3))){
var inst_31936 = (state_31939[(2)]);
var inst_31937 = cljs.core.async.close_BANG_(out);
var state_31939__$1 = (function (){var statearr_31952 = state_31939;
(statearr_31952[(9)] = inst_31936);

return statearr_31952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31939__$1,inst_31937);
} else {
if((state_val_31940 === (2))){
var inst_31912 = (state_31939[(8)]);
var inst_31918 = (inst_31912 < n);
var state_31939__$1 = state_31939;
if(cljs.core.truth_(inst_31918)){
var statearr_31957_33879 = state_31939__$1;
(statearr_31957_33879[(1)] = (4));

} else {
var statearr_31958_33880 = state_31939__$1;
(statearr_31958_33880[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (11))){
var inst_31912 = (state_31939[(8)]);
var inst_31926 = (state_31939[(2)]);
var inst_31927 = (inst_31912 + (1));
var inst_31912__$1 = inst_31927;
var state_31939__$1 = (function (){var statearr_31962 = state_31939;
(statearr_31962[(10)] = inst_31926);

(statearr_31962[(8)] = inst_31912__$1);

return statearr_31962;
})();
var statearr_31966_33881 = state_31939__$1;
(statearr_31966_33881[(2)] = null);

(statearr_31966_33881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (9))){
var state_31939__$1 = state_31939;
var statearr_31968_33882 = state_31939__$1;
(statearr_31968_33882[(2)] = null);

(statearr_31968_33882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (5))){
var state_31939__$1 = state_31939;
var statearr_31972_33883 = state_31939__$1;
(statearr_31972_33883[(2)] = null);

(statearr_31972_33883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (10))){
var inst_31931 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_31976_33884 = state_31939__$1;
(statearr_31976_33884[(2)] = inst_31931);

(statearr_31976_33884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (8))){
var inst_31921 = (state_31939[(7)]);
var state_31939__$1 = state_31939;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31939__$1,(11),out,inst_31921);
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
var cljs$core$async$state_machine__28629__auto__ = null;
var cljs$core$async$state_machine__28629__auto____0 = (function (){
var statearr_31989 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31989[(0)] = cljs$core$async$state_machine__28629__auto__);

(statearr_31989[(1)] = (1));

return statearr_31989;
});
var cljs$core$async$state_machine__28629__auto____1 = (function (state_31939){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_31939);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e31993){var ex__28632__auto__ = e31993;
var statearr_31994_33885 = state_31939;
(statearr_31994_33885[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_31939[(4)]))){
var statearr_31996_33886 = state_31939;
(statearr_31996_33886[(1)] = cljs.core.first((state_31939[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33887 = state_31939;
state_31939 = G__33887;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$state_machine__28629__auto__ = function(state_31939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28629__auto____1.call(this,state_31939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28629__auto____0;
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28629__auto____1;
return cljs$core$async$state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_32002 = f__28998__auto__();
(statearr_32002[(6)] = c__28997__auto___33874);

return statearr_32002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32009 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32009 = (function (f,ch,meta32010){
this.f = f;
this.ch = ch;
this.meta32010 = meta32010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32011,meta32010__$1){
var self__ = this;
var _32011__$1 = this;
return (new cljs.core.async.t_cljs$core$async32009(self__.f,self__.ch,meta32010__$1));
}));

(cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32011){
var self__ = this;
var _32011__$1 = this;
return self__.meta32010;
}));

(cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32028 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32028 = (function (f,ch,meta32010,_,fn1,meta32029){
this.f = f;
this.ch = ch;
this.meta32010 = meta32010;
this._ = _;
this.fn1 = fn1;
this.meta32029 = meta32029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32030,meta32029__$1){
var self__ = this;
var _32030__$1 = this;
return (new cljs.core.async.t_cljs$core$async32028(self__.f,self__.ch,self__.meta32010,self__._,self__.fn1,meta32029__$1));
}));

(cljs.core.async.t_cljs$core$async32028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32030){
var self__ = this;
var _32030__$1 = this;
return self__.meta32029;
}));

(cljs.core.async.t_cljs$core$async32028.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32028.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32006_SHARP_){
var G__32035 = (((p1__32006_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32006_SHARP_) : self__.f.call(null,p1__32006_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32035) : f1.call(null,G__32035));
});
}));

(cljs.core.async.t_cljs$core$async32028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32010","meta32010",-1265895235,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32009","cljs.core.async/t_cljs$core$async32009",-126845514,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32029","meta32029",-308213290,null)], null);
}));

(cljs.core.async.t_cljs$core$async32028.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32028");

(cljs.core.async.t_cljs$core$async32028.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32028");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32028.
 */
cljs.core.async.__GT_t_cljs$core$async32028 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32028(f__$1,ch__$1,meta32010__$1,___$2,fn1__$1,meta32029){
return (new cljs.core.async.t_cljs$core$async32028(f__$1,ch__$1,meta32010__$1,___$2,fn1__$1,meta32029));
});

}

return (new cljs.core.async.t_cljs$core$async32028(self__.f,self__.ch,self__.meta32010,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32057 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32057) : self__.f.call(null,G__32057));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32010","meta32010",-1265895235,null)], null);
}));

(cljs.core.async.t_cljs$core$async32009.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32009");

(cljs.core.async.t_cljs$core$async32009.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32009");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32009.
 */
cljs.core.async.__GT_t_cljs$core$async32009 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32009(f__$1,ch__$1,meta32010){
return (new cljs.core.async.t_cljs$core$async32009(f__$1,ch__$1,meta32010));
});

}

return (new cljs.core.async.t_cljs$core$async32009(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32066 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32066 = (function (f,ch,meta32067){
this.f = f;
this.ch = ch;
this.meta32067 = meta32067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32068,meta32067__$1){
var self__ = this;
var _32068__$1 = this;
return (new cljs.core.async.t_cljs$core$async32066(self__.f,self__.ch,meta32067__$1));
}));

(cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32068){
var self__ = this;
var _32068__$1 = this;
return self__.meta32067;
}));

(cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32067","meta32067",-1700642075,null)], null);
}));

(cljs.core.async.t_cljs$core$async32066.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32066");

(cljs.core.async.t_cljs$core$async32066.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32066");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32066.
 */
cljs.core.async.__GT_t_cljs$core$async32066 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32066(f__$1,ch__$1,meta32067){
return (new cljs.core.async.t_cljs$core$async32066(f__$1,ch__$1,meta32067));
});

}

return (new cljs.core.async.t_cljs$core$async32066(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32079 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32079 = (function (p,ch,meta32080){
this.p = p;
this.ch = ch;
this.meta32080 = meta32080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32081,meta32080__$1){
var self__ = this;
var _32081__$1 = this;
return (new cljs.core.async.t_cljs$core$async32079(self__.p,self__.ch,meta32080__$1));
}));

(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32081){
var self__ = this;
var _32081__$1 = this;
return self__.meta32080;
}));

(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32079.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32080","meta32080",1595566551,null)], null);
}));

(cljs.core.async.t_cljs$core$async32079.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32079");

(cljs.core.async.t_cljs$core$async32079.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32079");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32079.
 */
cljs.core.async.__GT_t_cljs$core$async32079 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32079(p__$1,ch__$1,meta32080){
return (new cljs.core.async.t_cljs$core$async32079(p__$1,ch__$1,meta32080));
});

}

return (new cljs.core.async.t_cljs$core$async32079(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32095 = arguments.length;
switch (G__32095) {
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
var c__28997__auto___33904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_32140){
var state_val_32141 = (state_32140[(1)]);
if((state_val_32141 === (7))){
var inst_32136 = (state_32140[(2)]);
var state_32140__$1 = state_32140;
var statearr_32152_33908 = state_32140__$1;
(statearr_32152_33908[(2)] = inst_32136);

(statearr_32152_33908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (1))){
var state_32140__$1 = state_32140;
var statearr_32153_33912 = state_32140__$1;
(statearr_32153_33912[(2)] = null);

(statearr_32153_33912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (4))){
var inst_32122 = (state_32140[(7)]);
var inst_32122__$1 = (state_32140[(2)]);
var inst_32123 = (inst_32122__$1 == null);
var state_32140__$1 = (function (){var statearr_32154 = state_32140;
(statearr_32154[(7)] = inst_32122__$1);

return statearr_32154;
})();
if(cljs.core.truth_(inst_32123)){
var statearr_32156_33913 = state_32140__$1;
(statearr_32156_33913[(1)] = (5));

} else {
var statearr_32162_33914 = state_32140__$1;
(statearr_32162_33914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (6))){
var inst_32122 = (state_32140[(7)]);
var inst_32127 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32122) : p.call(null,inst_32122));
var state_32140__$1 = state_32140;
if(cljs.core.truth_(inst_32127)){
var statearr_32168_33915 = state_32140__$1;
(statearr_32168_33915[(1)] = (8));

} else {
var statearr_32169_33916 = state_32140__$1;
(statearr_32169_33916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (3))){
var inst_32138 = (state_32140[(2)]);
var state_32140__$1 = state_32140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32140__$1,inst_32138);
} else {
if((state_val_32141 === (2))){
var state_32140__$1 = state_32140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32140__$1,(4),ch);
} else {
if((state_val_32141 === (11))){
var inst_32130 = (state_32140[(2)]);
var state_32140__$1 = state_32140;
var statearr_32173_33917 = state_32140__$1;
(statearr_32173_33917[(2)] = inst_32130);

(statearr_32173_33917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (9))){
var state_32140__$1 = state_32140;
var statearr_32174_33918 = state_32140__$1;
(statearr_32174_33918[(2)] = null);

(statearr_32174_33918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (5))){
var inst_32125 = cljs.core.async.close_BANG_(out);
var state_32140__$1 = state_32140;
var statearr_32175_33919 = state_32140__$1;
(statearr_32175_33919[(2)] = inst_32125);

(statearr_32175_33919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (10))){
var inst_32133 = (state_32140[(2)]);
var state_32140__$1 = (function (){var statearr_32178 = state_32140;
(statearr_32178[(8)] = inst_32133);

return statearr_32178;
})();
var statearr_32180_33920 = state_32140__$1;
(statearr_32180_33920[(2)] = null);

(statearr_32180_33920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32141 === (8))){
var inst_32122 = (state_32140[(7)]);
var state_32140__$1 = state_32140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32140__$1,(11),out,inst_32122);
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
var cljs$core$async$state_machine__28629__auto__ = null;
var cljs$core$async$state_machine__28629__auto____0 = (function (){
var statearr_32184 = [null,null,null,null,null,null,null,null,null];
(statearr_32184[(0)] = cljs$core$async$state_machine__28629__auto__);

(statearr_32184[(1)] = (1));

return statearr_32184;
});
var cljs$core$async$state_machine__28629__auto____1 = (function (state_32140){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_32140);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e32187){var ex__28632__auto__ = e32187;
var statearr_32188_33921 = state_32140;
(statearr_32188_33921[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_32140[(4)]))){
var statearr_32189_33922 = state_32140;
(statearr_32189_33922[(1)] = cljs.core.first((state_32140[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33923 = state_32140;
state_32140 = G__33923;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$state_machine__28629__auto__ = function(state_32140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28629__auto____1.call(this,state_32140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28629__auto____0;
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28629__auto____1;
return cljs$core$async$state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_32193 = f__28998__auto__();
(statearr_32193[(6)] = c__28997__auto___33904);

return statearr_32193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32197 = arguments.length;
switch (G__32197) {
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
var c__28997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_32272){
var state_val_32273 = (state_32272[(1)]);
if((state_val_32273 === (7))){
var inst_32268 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
var statearr_32275_33925 = state_32272__$1;
(statearr_32275_33925[(2)] = inst_32268);

(statearr_32275_33925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (20))){
var inst_32237 = (state_32272[(7)]);
var inst_32249 = (state_32272[(2)]);
var inst_32250 = cljs.core.next(inst_32237);
var inst_32221 = inst_32250;
var inst_32222 = null;
var inst_32223 = (0);
var inst_32224 = (0);
var state_32272__$1 = (function (){var statearr_32276 = state_32272;
(statearr_32276[(8)] = inst_32224);

(statearr_32276[(9)] = inst_32221);

(statearr_32276[(10)] = inst_32223);

(statearr_32276[(11)] = inst_32222);

(statearr_32276[(12)] = inst_32249);

return statearr_32276;
})();
var statearr_32279_33927 = state_32272__$1;
(statearr_32279_33927[(2)] = null);

(statearr_32279_33927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (1))){
var state_32272__$1 = state_32272;
var statearr_32283_33928 = state_32272__$1;
(statearr_32283_33928[(2)] = null);

(statearr_32283_33928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (4))){
var inst_32209 = (state_32272[(13)]);
var inst_32209__$1 = (state_32272[(2)]);
var inst_32210 = (inst_32209__$1 == null);
var state_32272__$1 = (function (){var statearr_32287 = state_32272;
(statearr_32287[(13)] = inst_32209__$1);

return statearr_32287;
})();
if(cljs.core.truth_(inst_32210)){
var statearr_32288_33929 = state_32272__$1;
(statearr_32288_33929[(1)] = (5));

} else {
var statearr_32289_33930 = state_32272__$1;
(statearr_32289_33930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (15))){
var state_32272__$1 = state_32272;
var statearr_32295_33931 = state_32272__$1;
(statearr_32295_33931[(2)] = null);

(statearr_32295_33931[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (21))){
var state_32272__$1 = state_32272;
var statearr_32298_33932 = state_32272__$1;
(statearr_32298_33932[(2)] = null);

(statearr_32298_33932[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (13))){
var inst_32224 = (state_32272[(8)]);
var inst_32221 = (state_32272[(9)]);
var inst_32223 = (state_32272[(10)]);
var inst_32222 = (state_32272[(11)]);
var inst_32233 = (state_32272[(2)]);
var inst_32234 = (inst_32224 + (1));
var tmp32290 = inst_32221;
var tmp32291 = inst_32223;
var tmp32292 = inst_32222;
var inst_32221__$1 = tmp32290;
var inst_32222__$1 = tmp32292;
var inst_32223__$1 = tmp32291;
var inst_32224__$1 = inst_32234;
var state_32272__$1 = (function (){var statearr_32306 = state_32272;
(statearr_32306[(8)] = inst_32224__$1);

(statearr_32306[(9)] = inst_32221__$1);

(statearr_32306[(14)] = inst_32233);

(statearr_32306[(10)] = inst_32223__$1);

(statearr_32306[(11)] = inst_32222__$1);

return statearr_32306;
})();
var statearr_32307_33934 = state_32272__$1;
(statearr_32307_33934[(2)] = null);

(statearr_32307_33934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (22))){
var state_32272__$1 = state_32272;
var statearr_32309_33935 = state_32272__$1;
(statearr_32309_33935[(2)] = null);

(statearr_32309_33935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (6))){
var inst_32209 = (state_32272[(13)]);
var inst_32219 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32209) : f.call(null,inst_32209));
var inst_32220 = cljs.core.seq(inst_32219);
var inst_32221 = inst_32220;
var inst_32222 = null;
var inst_32223 = (0);
var inst_32224 = (0);
var state_32272__$1 = (function (){var statearr_32315 = state_32272;
(statearr_32315[(8)] = inst_32224);

(statearr_32315[(9)] = inst_32221);

(statearr_32315[(10)] = inst_32223);

(statearr_32315[(11)] = inst_32222);

return statearr_32315;
})();
var statearr_32317_33943 = state_32272__$1;
(statearr_32317_33943[(2)] = null);

(statearr_32317_33943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (17))){
var inst_32237 = (state_32272[(7)]);
var inst_32242 = cljs.core.chunk_first(inst_32237);
var inst_32243 = cljs.core.chunk_rest(inst_32237);
var inst_32244 = cljs.core.count(inst_32242);
var inst_32221 = inst_32243;
var inst_32222 = inst_32242;
var inst_32223 = inst_32244;
var inst_32224 = (0);
var state_32272__$1 = (function (){var statearr_32318 = state_32272;
(statearr_32318[(8)] = inst_32224);

(statearr_32318[(9)] = inst_32221);

(statearr_32318[(10)] = inst_32223);

(statearr_32318[(11)] = inst_32222);

return statearr_32318;
})();
var statearr_32319_33944 = state_32272__$1;
(statearr_32319_33944[(2)] = null);

(statearr_32319_33944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (3))){
var inst_32270 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32272__$1,inst_32270);
} else {
if((state_val_32273 === (12))){
var inst_32258 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
var statearr_32323_33945 = state_32272__$1;
(statearr_32323_33945[(2)] = inst_32258);

(statearr_32323_33945[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (2))){
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32272__$1,(4),in$);
} else {
if((state_val_32273 === (23))){
var inst_32266 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
var statearr_32327_33950 = state_32272__$1;
(statearr_32327_33950[(2)] = inst_32266);

(statearr_32327_33950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (19))){
var inst_32253 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
var statearr_32328_33951 = state_32272__$1;
(statearr_32328_33951[(2)] = inst_32253);

(statearr_32328_33951[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (11))){
var inst_32237 = (state_32272[(7)]);
var inst_32221 = (state_32272[(9)]);
var inst_32237__$1 = cljs.core.seq(inst_32221);
var state_32272__$1 = (function (){var statearr_32330 = state_32272;
(statearr_32330[(7)] = inst_32237__$1);

return statearr_32330;
})();
if(inst_32237__$1){
var statearr_32333_33952 = state_32272__$1;
(statearr_32333_33952[(1)] = (14));

} else {
var statearr_32334_33953 = state_32272__$1;
(statearr_32334_33953[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (9))){
var inst_32260 = (state_32272[(2)]);
var inst_32261 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32272__$1 = (function (){var statearr_32341 = state_32272;
(statearr_32341[(15)] = inst_32260);

return statearr_32341;
})();
if(cljs.core.truth_(inst_32261)){
var statearr_32342_33954 = state_32272__$1;
(statearr_32342_33954[(1)] = (21));

} else {
var statearr_32344_33955 = state_32272__$1;
(statearr_32344_33955[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (5))){
var inst_32212 = cljs.core.async.close_BANG_(out);
var state_32272__$1 = state_32272;
var statearr_32346_33956 = state_32272__$1;
(statearr_32346_33956[(2)] = inst_32212);

(statearr_32346_33956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (14))){
var inst_32237 = (state_32272[(7)]);
var inst_32240 = cljs.core.chunked_seq_QMARK_(inst_32237);
var state_32272__$1 = state_32272;
if(inst_32240){
var statearr_32351_33957 = state_32272__$1;
(statearr_32351_33957[(1)] = (17));

} else {
var statearr_32352_33958 = state_32272__$1;
(statearr_32352_33958[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (16))){
var inst_32256 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
var statearr_32355_33959 = state_32272__$1;
(statearr_32355_33959[(2)] = inst_32256);

(statearr_32355_33959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (10))){
var inst_32224 = (state_32272[(8)]);
var inst_32222 = (state_32272[(11)]);
var inst_32230 = cljs.core._nth(inst_32222,inst_32224);
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32272__$1,(13),out,inst_32230);
} else {
if((state_val_32273 === (18))){
var inst_32237 = (state_32272[(7)]);
var inst_32247 = cljs.core.first(inst_32237);
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32272__$1,(20),out,inst_32247);
} else {
if((state_val_32273 === (8))){
var inst_32224 = (state_32272[(8)]);
var inst_32223 = (state_32272[(10)]);
var inst_32227 = (inst_32224 < inst_32223);
var inst_32228 = inst_32227;
var state_32272__$1 = state_32272;
if(cljs.core.truth_(inst_32228)){
var statearr_32356_33963 = state_32272__$1;
(statearr_32356_33963[(1)] = (10));

} else {
var statearr_32363_33964 = state_32272__$1;
(statearr_32363_33964[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28629__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28629__auto____0 = (function (){
var statearr_32366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32366[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28629__auto__);

(statearr_32366[(1)] = (1));

return statearr_32366;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28629__auto____1 = (function (state_32272){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_32272);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e32367){var ex__28632__auto__ = e32367;
var statearr_32371_33965 = state_32272;
(statearr_32371_33965[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_32272[(4)]))){
var statearr_32372_33966 = state_32272;
(statearr_32372_33966[(1)] = cljs.core.first((state_32272[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33967 = state_32272;
state_32272 = G__33967;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28629__auto__ = function(state_32272){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28629__auto____1.call(this,state_32272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28629__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28629__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_32373 = f__28998__auto__();
(statearr_32373[(6)] = c__28997__auto__);

return statearr_32373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
}));

return c__28997__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32387 = arguments.length;
switch (G__32387) {
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
var G__32410 = arguments.length;
switch (G__32410) {
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
var G__32427 = arguments.length;
switch (G__32427) {
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
var c__28997__auto___33976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_32464){
var state_val_32465 = (state_32464[(1)]);
if((state_val_32465 === (7))){
var inst_32459 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32468_33977 = state_32464__$1;
(statearr_32468_33977[(2)] = inst_32459);

(statearr_32468_33977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (1))){
var inst_32440 = null;
var state_32464__$1 = (function (){var statearr_32470 = state_32464;
(statearr_32470[(7)] = inst_32440);

return statearr_32470;
})();
var statearr_32471_33978 = state_32464__$1;
(statearr_32471_33978[(2)] = null);

(statearr_32471_33978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (4))){
var inst_32443 = (state_32464[(8)]);
var inst_32443__$1 = (state_32464[(2)]);
var inst_32445 = (inst_32443__$1 == null);
var inst_32446 = cljs.core.not(inst_32445);
var state_32464__$1 = (function (){var statearr_32473 = state_32464;
(statearr_32473[(8)] = inst_32443__$1);

return statearr_32473;
})();
if(inst_32446){
var statearr_32478_33979 = state_32464__$1;
(statearr_32478_33979[(1)] = (5));

} else {
var statearr_32483_33980 = state_32464__$1;
(statearr_32483_33980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (6))){
var state_32464__$1 = state_32464;
var statearr_32488_33981 = state_32464__$1;
(statearr_32488_33981[(2)] = null);

(statearr_32488_33981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (3))){
var inst_32461 = (state_32464[(2)]);
var inst_32462 = cljs.core.async.close_BANG_(out);
var state_32464__$1 = (function (){var statearr_32492 = state_32464;
(statearr_32492[(9)] = inst_32461);

return statearr_32492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32464__$1,inst_32462);
} else {
if((state_val_32465 === (2))){
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32464__$1,(4),ch);
} else {
if((state_val_32465 === (11))){
var inst_32443 = (state_32464[(8)]);
var inst_32453 = (state_32464[(2)]);
var inst_32440 = inst_32443;
var state_32464__$1 = (function (){var statearr_32494 = state_32464;
(statearr_32494[(10)] = inst_32453);

(statearr_32494[(7)] = inst_32440);

return statearr_32494;
})();
var statearr_32498_33982 = state_32464__$1;
(statearr_32498_33982[(2)] = null);

(statearr_32498_33982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (9))){
var inst_32443 = (state_32464[(8)]);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32464__$1,(11),out,inst_32443);
} else {
if((state_val_32465 === (5))){
var inst_32440 = (state_32464[(7)]);
var inst_32443 = (state_32464[(8)]);
var inst_32448 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32443,inst_32440);
var state_32464__$1 = state_32464;
if(inst_32448){
var statearr_32504_33983 = state_32464__$1;
(statearr_32504_33983[(1)] = (8));

} else {
var statearr_32505_33985 = state_32464__$1;
(statearr_32505_33985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (10))){
var inst_32456 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32507_33986 = state_32464__$1;
(statearr_32507_33986[(2)] = inst_32456);

(statearr_32507_33986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (8))){
var inst_32440 = (state_32464[(7)]);
var tmp32500 = inst_32440;
var inst_32440__$1 = tmp32500;
var state_32464__$1 = (function (){var statearr_32510 = state_32464;
(statearr_32510[(7)] = inst_32440__$1);

return statearr_32510;
})();
var statearr_32511_33987 = state_32464__$1;
(statearr_32511_33987[(2)] = null);

(statearr_32511_33987[(1)] = (2));


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
var cljs$core$async$state_machine__28629__auto__ = null;
var cljs$core$async$state_machine__28629__auto____0 = (function (){
var statearr_32517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32517[(0)] = cljs$core$async$state_machine__28629__auto__);

(statearr_32517[(1)] = (1));

return statearr_32517;
});
var cljs$core$async$state_machine__28629__auto____1 = (function (state_32464){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_32464);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e32518){var ex__28632__auto__ = e32518;
var statearr_32519_33992 = state_32464;
(statearr_32519_33992[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_32464[(4)]))){
var statearr_32522_33993 = state_32464;
(statearr_32522_33993[(1)] = cljs.core.first((state_32464[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33994 = state_32464;
state_32464 = G__33994;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$state_machine__28629__auto__ = function(state_32464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28629__auto____1.call(this,state_32464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28629__auto____0;
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28629__auto____1;
return cljs$core$async$state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_32524 = f__28998__auto__();
(statearr_32524[(6)] = c__28997__auto___33976);

return statearr_32524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32532 = arguments.length;
switch (G__32532) {
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
var c__28997__auto___34000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_32612){
var state_val_32613 = (state_32612[(1)]);
if((state_val_32613 === (7))){
var inst_32608 = (state_32612[(2)]);
var state_32612__$1 = state_32612;
var statearr_32619_34001 = state_32612__$1;
(statearr_32619_34001[(2)] = inst_32608);

(statearr_32619_34001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (1))){
var inst_32542 = (new Array(n));
var inst_32543 = inst_32542;
var inst_32544 = (0);
var state_32612__$1 = (function (){var statearr_32620 = state_32612;
(statearr_32620[(7)] = inst_32543);

(statearr_32620[(8)] = inst_32544);

return statearr_32620;
})();
var statearr_32621_34002 = state_32612__$1;
(statearr_32621_34002[(2)] = null);

(statearr_32621_34002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (4))){
var inst_32554 = (state_32612[(9)]);
var inst_32554__$1 = (state_32612[(2)]);
var inst_32555 = (inst_32554__$1 == null);
var inst_32556 = cljs.core.not(inst_32555);
var state_32612__$1 = (function (){var statearr_32623 = state_32612;
(statearr_32623[(9)] = inst_32554__$1);

return statearr_32623;
})();
if(inst_32556){
var statearr_32624_34006 = state_32612__$1;
(statearr_32624_34006[(1)] = (5));

} else {
var statearr_32625_34007 = state_32612__$1;
(statearr_32625_34007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (15))){
var inst_32602 = (state_32612[(2)]);
var state_32612__$1 = state_32612;
var statearr_32626_34008 = state_32612__$1;
(statearr_32626_34008[(2)] = inst_32602);

(statearr_32626_34008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (13))){
var state_32612__$1 = state_32612;
var statearr_32627_34009 = state_32612__$1;
(statearr_32627_34009[(2)] = null);

(statearr_32627_34009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (6))){
var inst_32544 = (state_32612[(8)]);
var inst_32595 = (inst_32544 > (0));
var state_32612__$1 = state_32612;
if(cljs.core.truth_(inst_32595)){
var statearr_32628_34010 = state_32612__$1;
(statearr_32628_34010[(1)] = (12));

} else {
var statearr_32629_34011 = state_32612__$1;
(statearr_32629_34011[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (3))){
var inst_32610 = (state_32612[(2)]);
var state_32612__$1 = state_32612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32612__$1,inst_32610);
} else {
if((state_val_32613 === (12))){
var inst_32543 = (state_32612[(7)]);
var inst_32600 = cljs.core.vec(inst_32543);
var state_32612__$1 = state_32612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32612__$1,(15),out,inst_32600);
} else {
if((state_val_32613 === (2))){
var state_32612__$1 = state_32612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32612__$1,(4),ch);
} else {
if((state_val_32613 === (11))){
var inst_32589 = (state_32612[(2)]);
var inst_32590 = (new Array(n));
var inst_32543 = inst_32590;
var inst_32544 = (0);
var state_32612__$1 = (function (){var statearr_32630 = state_32612;
(statearr_32630[(7)] = inst_32543);

(statearr_32630[(8)] = inst_32544);

(statearr_32630[(10)] = inst_32589);

return statearr_32630;
})();
var statearr_32631_34012 = state_32612__$1;
(statearr_32631_34012[(2)] = null);

(statearr_32631_34012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (9))){
var inst_32543 = (state_32612[(7)]);
var inst_32587 = cljs.core.vec(inst_32543);
var state_32612__$1 = state_32612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32612__$1,(11),out,inst_32587);
} else {
if((state_val_32613 === (5))){
var inst_32543 = (state_32612[(7)]);
var inst_32544 = (state_32612[(8)]);
var inst_32582 = (state_32612[(11)]);
var inst_32554 = (state_32612[(9)]);
var inst_32578 = (inst_32543[inst_32544] = inst_32554);
var inst_32582__$1 = (inst_32544 + (1));
var inst_32583 = (inst_32582__$1 < n);
var state_32612__$1 = (function (){var statearr_32633 = state_32612;
(statearr_32633[(12)] = inst_32578);

(statearr_32633[(11)] = inst_32582__$1);

return statearr_32633;
})();
if(cljs.core.truth_(inst_32583)){
var statearr_32634_34013 = state_32612__$1;
(statearr_32634_34013[(1)] = (8));

} else {
var statearr_32635_34014 = state_32612__$1;
(statearr_32635_34014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (14))){
var inst_32605 = (state_32612[(2)]);
var inst_32606 = cljs.core.async.close_BANG_(out);
var state_32612__$1 = (function (){var statearr_32637 = state_32612;
(statearr_32637[(13)] = inst_32605);

return statearr_32637;
})();
var statearr_32640_34015 = state_32612__$1;
(statearr_32640_34015[(2)] = inst_32606);

(statearr_32640_34015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (10))){
var inst_32593 = (state_32612[(2)]);
var state_32612__$1 = state_32612;
var statearr_32642_34016 = state_32612__$1;
(statearr_32642_34016[(2)] = inst_32593);

(statearr_32642_34016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (8))){
var inst_32543 = (state_32612[(7)]);
var inst_32582 = (state_32612[(11)]);
var tmp32636 = inst_32543;
var inst_32543__$1 = tmp32636;
var inst_32544 = inst_32582;
var state_32612__$1 = (function (){var statearr_32645 = state_32612;
(statearr_32645[(7)] = inst_32543__$1);

(statearr_32645[(8)] = inst_32544);

return statearr_32645;
})();
var statearr_32649_34018 = state_32612__$1;
(statearr_32649_34018[(2)] = null);

(statearr_32649_34018[(1)] = (2));


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
var cljs$core$async$state_machine__28629__auto__ = null;
var cljs$core$async$state_machine__28629__auto____0 = (function (){
var statearr_32650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32650[(0)] = cljs$core$async$state_machine__28629__auto__);

(statearr_32650[(1)] = (1));

return statearr_32650;
});
var cljs$core$async$state_machine__28629__auto____1 = (function (state_32612){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_32612);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e32654){var ex__28632__auto__ = e32654;
var statearr_32655_34022 = state_32612;
(statearr_32655_34022[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_32612[(4)]))){
var statearr_32656_34023 = state_32612;
(statearr_32656_34023[(1)] = cljs.core.first((state_32612[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34024 = state_32612;
state_32612 = G__34024;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$state_machine__28629__auto__ = function(state_32612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28629__auto____1.call(this,state_32612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28629__auto____0;
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28629__auto____1;
return cljs$core$async$state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_32657 = f__28998__auto__();
(statearr_32657[(6)] = c__28997__auto___34000);

return statearr_32657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32665 = arguments.length;
switch (G__32665) {
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
var c__28997__auto___34026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28998__auto__ = (function (){var switch__28628__auto__ = (function (state_32713){
var state_val_32718 = (state_32713[(1)]);
if((state_val_32718 === (7))){
var inst_32709 = (state_32713[(2)]);
var state_32713__$1 = state_32713;
var statearr_32723_34028 = state_32713__$1;
(statearr_32723_34028[(2)] = inst_32709);

(statearr_32723_34028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (1))){
var inst_32669 = [];
var inst_32670 = inst_32669;
var inst_32671 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32713__$1 = (function (){var statearr_32724 = state_32713;
(statearr_32724[(7)] = inst_32671);

(statearr_32724[(8)] = inst_32670);

return statearr_32724;
})();
var statearr_32725_34029 = state_32713__$1;
(statearr_32725_34029[(2)] = null);

(statearr_32725_34029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (4))){
var inst_32674 = (state_32713[(9)]);
var inst_32674__$1 = (state_32713[(2)]);
var inst_32675 = (inst_32674__$1 == null);
var inst_32676 = cljs.core.not(inst_32675);
var state_32713__$1 = (function (){var statearr_32726 = state_32713;
(statearr_32726[(9)] = inst_32674__$1);

return statearr_32726;
})();
if(inst_32676){
var statearr_32727_34030 = state_32713__$1;
(statearr_32727_34030[(1)] = (5));

} else {
var statearr_32728_34031 = state_32713__$1;
(statearr_32728_34031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (15))){
var inst_32670 = (state_32713[(8)]);
var inst_32701 = cljs.core.vec(inst_32670);
var state_32713__$1 = state_32713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32713__$1,(18),out,inst_32701);
} else {
if((state_val_32718 === (13))){
var inst_32696 = (state_32713[(2)]);
var state_32713__$1 = state_32713;
var statearr_32746_34032 = state_32713__$1;
(statearr_32746_34032[(2)] = inst_32696);

(statearr_32746_34032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (6))){
var inst_32670 = (state_32713[(8)]);
var inst_32698 = inst_32670.length;
var inst_32699 = (inst_32698 > (0));
var state_32713__$1 = state_32713;
if(cljs.core.truth_(inst_32699)){
var statearr_32753_34033 = state_32713__$1;
(statearr_32753_34033[(1)] = (15));

} else {
var statearr_32754_34034 = state_32713__$1;
(statearr_32754_34034[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (17))){
var inst_32706 = (state_32713[(2)]);
var inst_32707 = cljs.core.async.close_BANG_(out);
var state_32713__$1 = (function (){var statearr_32756 = state_32713;
(statearr_32756[(10)] = inst_32706);

return statearr_32756;
})();
var statearr_32757_34036 = state_32713__$1;
(statearr_32757_34036[(2)] = inst_32707);

(statearr_32757_34036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (3))){
var inst_32711 = (state_32713[(2)]);
var state_32713__$1 = state_32713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32713__$1,inst_32711);
} else {
if((state_val_32718 === (12))){
var inst_32670 = (state_32713[(8)]);
var inst_32689 = cljs.core.vec(inst_32670);
var state_32713__$1 = state_32713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32713__$1,(14),out,inst_32689);
} else {
if((state_val_32718 === (2))){
var state_32713__$1 = state_32713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32713__$1,(4),ch);
} else {
if((state_val_32718 === (11))){
var inst_32674 = (state_32713[(9)]);
var inst_32678 = (state_32713[(11)]);
var inst_32670 = (state_32713[(8)]);
var inst_32686 = inst_32670.push(inst_32674);
var tmp32758 = inst_32670;
var inst_32670__$1 = tmp32758;
var inst_32671 = inst_32678;
var state_32713__$1 = (function (){var statearr_32779 = state_32713;
(statearr_32779[(7)] = inst_32671);

(statearr_32779[(12)] = inst_32686);

(statearr_32779[(8)] = inst_32670__$1);

return statearr_32779;
})();
var statearr_32780_34037 = state_32713__$1;
(statearr_32780_34037[(2)] = null);

(statearr_32780_34037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (9))){
var inst_32671 = (state_32713[(7)]);
var inst_32682 = cljs.core.keyword_identical_QMARK_(inst_32671,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32713__$1 = state_32713;
var statearr_32781_34038 = state_32713__$1;
(statearr_32781_34038[(2)] = inst_32682);

(statearr_32781_34038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (5))){
var inst_32679 = (state_32713[(13)]);
var inst_32674 = (state_32713[(9)]);
var inst_32671 = (state_32713[(7)]);
var inst_32678 = (state_32713[(11)]);
var inst_32678__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32674) : f.call(null,inst_32674));
var inst_32679__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32678__$1,inst_32671);
var state_32713__$1 = (function (){var statearr_32783 = state_32713;
(statearr_32783[(13)] = inst_32679__$1);

(statearr_32783[(11)] = inst_32678__$1);

return statearr_32783;
})();
if(inst_32679__$1){
var statearr_32786_34039 = state_32713__$1;
(statearr_32786_34039[(1)] = (8));

} else {
var statearr_32787_34040 = state_32713__$1;
(statearr_32787_34040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (14))){
var inst_32674 = (state_32713[(9)]);
var inst_32678 = (state_32713[(11)]);
var inst_32691 = (state_32713[(2)]);
var inst_32692 = [];
var inst_32693 = inst_32692.push(inst_32674);
var inst_32670 = inst_32692;
var inst_32671 = inst_32678;
var state_32713__$1 = (function (){var statearr_32789 = state_32713;
(statearr_32789[(14)] = inst_32693);

(statearr_32789[(7)] = inst_32671);

(statearr_32789[(15)] = inst_32691);

(statearr_32789[(8)] = inst_32670);

return statearr_32789;
})();
var statearr_32791_34044 = state_32713__$1;
(statearr_32791_34044[(2)] = null);

(statearr_32791_34044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (16))){
var state_32713__$1 = state_32713;
var statearr_32797_34045 = state_32713__$1;
(statearr_32797_34045[(2)] = null);

(statearr_32797_34045[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (10))){
var inst_32684 = (state_32713[(2)]);
var state_32713__$1 = state_32713;
if(cljs.core.truth_(inst_32684)){
var statearr_32803_34046 = state_32713__$1;
(statearr_32803_34046[(1)] = (11));

} else {
var statearr_32804_34047 = state_32713__$1;
(statearr_32804_34047[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (18))){
var inst_32703 = (state_32713[(2)]);
var state_32713__$1 = state_32713;
var statearr_32805_34048 = state_32713__$1;
(statearr_32805_34048[(2)] = inst_32703);

(statearr_32805_34048[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (8))){
var inst_32679 = (state_32713[(13)]);
var state_32713__$1 = state_32713;
var statearr_32807_34049 = state_32713__$1;
(statearr_32807_34049[(2)] = inst_32679);

(statearr_32807_34049[(1)] = (10));


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
var cljs$core$async$state_machine__28629__auto__ = null;
var cljs$core$async$state_machine__28629__auto____0 = (function (){
var statearr_32816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32816[(0)] = cljs$core$async$state_machine__28629__auto__);

(statearr_32816[(1)] = (1));

return statearr_32816;
});
var cljs$core$async$state_machine__28629__auto____1 = (function (state_32713){
while(true){
var ret_value__28630__auto__ = (function (){try{while(true){
var result__28631__auto__ = switch__28628__auto__(state_32713);
if(cljs.core.keyword_identical_QMARK_(result__28631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28631__auto__;
}
break;
}
}catch (e32818){var ex__28632__auto__ = e32818;
var statearr_32819_34050 = state_32713;
(statearr_32819_34050[(2)] = ex__28632__auto__);


if(cljs.core.seq((state_32713[(4)]))){
var statearr_32820_34051 = state_32713;
(statearr_32820_34051[(1)] = cljs.core.first((state_32713[(4)])));

} else {
throw ex__28632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34052 = state_32713;
state_32713 = G__34052;
continue;
} else {
return ret_value__28630__auto__;
}
break;
}
});
cljs$core$async$state_machine__28629__auto__ = function(state_32713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28629__auto____1.call(this,state_32713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28629__auto____0;
cljs$core$async$state_machine__28629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28629__auto____1;
return cljs$core$async$state_machine__28629__auto__;
})()
})();
var state__28999__auto__ = (function (){var statearr_32822 = f__28998__auto__();
(statearr_32822[(6)] = c__28997__auto___34026);

return statearr_32822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28999__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
