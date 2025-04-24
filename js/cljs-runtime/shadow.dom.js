goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12380 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12380(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12382 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12382(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11709 = coll;
var G__11710 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11709,G__11710) : shadow.dom.lazy_native_coll_seq.call(null,G__11709,G__11710));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11738 = arguments.length;
switch (G__11738) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11745 = arguments.length;
switch (G__11745) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11748 = arguments.length;
switch (G__11748) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11751 = arguments.length;
switch (G__11751) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11773 = arguments.length;
switch (G__11773) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11808 = arguments.length;
switch (G__11808) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11811){if((e11811 instanceof Object)){
var e = e11811;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11811;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11818 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11819 = null;
var count__11820 = (0);
var i__11821 = (0);
while(true){
if((i__11821 < count__11820)){
var el = chunk__11819.cljs$core$IIndexed$_nth$arity$2(null,i__11821);
var handler_12471__$1 = ((function (seq__11818,chunk__11819,count__11820,i__11821,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11818,chunk__11819,count__11820,i__11821,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12471__$1);


var G__12473 = seq__11818;
var G__12474 = chunk__11819;
var G__12475 = count__11820;
var G__12476 = (i__11821 + (1));
seq__11818 = G__12473;
chunk__11819 = G__12474;
count__11820 = G__12475;
i__11821 = G__12476;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11818);
if(temp__5804__auto__){
var seq__11818__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11818__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11818__$1);
var G__12480 = cljs.core.chunk_rest(seq__11818__$1);
var G__12481 = c__5525__auto__;
var G__12482 = cljs.core.count(c__5525__auto__);
var G__12483 = (0);
seq__11818 = G__12480;
chunk__11819 = G__12481;
count__11820 = G__12482;
i__11821 = G__12483;
continue;
} else {
var el = cljs.core.first(seq__11818__$1);
var handler_12486__$1 = ((function (seq__11818,chunk__11819,count__11820,i__11821,el,seq__11818__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11818,chunk__11819,count__11820,i__11821,el,seq__11818__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12486__$1);


var G__12495 = cljs.core.next(seq__11818__$1);
var G__12496 = null;
var G__12497 = (0);
var G__12498 = (0);
seq__11818 = G__12495;
chunk__11819 = G__12496;
count__11820 = G__12497;
i__11821 = G__12498;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11823 = arguments.length;
switch (G__11823) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11826 = cljs.core.seq(events);
var chunk__11827 = null;
var count__11828 = (0);
var i__11829 = (0);
while(true){
if((i__11829 < count__11828)){
var vec__11838 = chunk__11827.cljs$core$IIndexed$_nth$arity$2(null,i__11829);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11838,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11838,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12507 = seq__11826;
var G__12508 = chunk__11827;
var G__12509 = count__11828;
var G__12510 = (i__11829 + (1));
seq__11826 = G__12507;
chunk__11827 = G__12508;
count__11828 = G__12509;
i__11829 = G__12510;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11826);
if(temp__5804__auto__){
var seq__11826__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11826__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11826__$1);
var G__12513 = cljs.core.chunk_rest(seq__11826__$1);
var G__12514 = c__5525__auto__;
var G__12515 = cljs.core.count(c__5525__auto__);
var G__12516 = (0);
seq__11826 = G__12513;
chunk__11827 = G__12514;
count__11828 = G__12515;
i__11829 = G__12516;
continue;
} else {
var vec__11843 = cljs.core.first(seq__11826__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11843,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11843,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12521 = cljs.core.next(seq__11826__$1);
var G__12522 = null;
var G__12523 = (0);
var G__12524 = (0);
seq__11826 = G__12521;
chunk__11827 = G__12522;
count__11828 = G__12523;
i__11829 = G__12524;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11848 = cljs.core.seq(styles);
var chunk__11849 = null;
var count__11850 = (0);
var i__11851 = (0);
while(true){
if((i__11851 < count__11850)){
var vec__11866 = chunk__11849.cljs$core$IIndexed$_nth$arity$2(null,i__11851);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11866,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11866,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12531 = seq__11848;
var G__12532 = chunk__11849;
var G__12533 = count__11850;
var G__12534 = (i__11851 + (1));
seq__11848 = G__12531;
chunk__11849 = G__12532;
count__11850 = G__12533;
i__11851 = G__12534;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11848);
if(temp__5804__auto__){
var seq__11848__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11848__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11848__$1);
var G__12536 = cljs.core.chunk_rest(seq__11848__$1);
var G__12537 = c__5525__auto__;
var G__12538 = cljs.core.count(c__5525__auto__);
var G__12539 = (0);
seq__11848 = G__12536;
chunk__11849 = G__12537;
count__11850 = G__12538;
i__11851 = G__12539;
continue;
} else {
var vec__11873 = cljs.core.first(seq__11848__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11873,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11873,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12541 = cljs.core.next(seq__11848__$1);
var G__12542 = null;
var G__12543 = (0);
var G__12544 = (0);
seq__11848 = G__12541;
chunk__11849 = G__12542;
count__11850 = G__12543;
i__11851 = G__12544;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11895_12545 = key;
var G__11895_12546__$1 = (((G__11895_12545 instanceof cljs.core.Keyword))?G__11895_12545.fqn:null);
switch (G__11895_12546__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12554 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12554,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12554,"aria-");
}
})())){
el.setAttribute(ks_12554,value);
} else {
(el[ks_12554] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11930){
var map__11931 = p__11930;
var map__11931__$1 = cljs.core.__destructure_map(map__11931);
var props = map__11931__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11931__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11932 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11935 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11935,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11935;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11937 = arguments.length;
switch (G__11937) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11939){
var vec__11940 = p__11939;
var seq__11941 = cljs.core.seq(vec__11940);
var first__11942 = cljs.core.first(seq__11941);
var seq__11941__$1 = cljs.core.next(seq__11941);
var nn = first__11942;
var first__11942__$1 = cljs.core.first(seq__11941__$1);
var seq__11941__$2 = cljs.core.next(seq__11941__$1);
var np = first__11942__$1;
var nc = seq__11941__$2;
var node = vec__11940;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11943 = nn;
var G__11944 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11943,G__11944) : create_fn.call(null,G__11943,G__11944));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11948 = nn;
var G__11949 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11948,G__11949) : create_fn.call(null,G__11948,G__11949));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11950 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11950,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11950,(1),null);
var seq__11953_12565 = cljs.core.seq(node_children);
var chunk__11954_12566 = null;
var count__11955_12567 = (0);
var i__11956_12568 = (0);
while(true){
if((i__11956_12568 < count__11955_12567)){
var child_struct_12569 = chunk__11954_12566.cljs$core$IIndexed$_nth$arity$2(null,i__11956_12568);
var children_12571 = shadow.dom.dom_node(child_struct_12569);
if(cljs.core.seq_QMARK_(children_12571)){
var seq__11970_12572 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12571));
var chunk__11972_12573 = null;
var count__11973_12574 = (0);
var i__11974_12575 = (0);
while(true){
if((i__11974_12575 < count__11973_12574)){
var child_12577 = chunk__11972_12573.cljs$core$IIndexed$_nth$arity$2(null,i__11974_12575);
if(cljs.core.truth_(child_12577)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12577);


var G__12578 = seq__11970_12572;
var G__12579 = chunk__11972_12573;
var G__12580 = count__11973_12574;
var G__12581 = (i__11974_12575 + (1));
seq__11970_12572 = G__12578;
chunk__11972_12573 = G__12579;
count__11973_12574 = G__12580;
i__11974_12575 = G__12581;
continue;
} else {
var G__12582 = seq__11970_12572;
var G__12583 = chunk__11972_12573;
var G__12584 = count__11973_12574;
var G__12585 = (i__11974_12575 + (1));
seq__11970_12572 = G__12582;
chunk__11972_12573 = G__12583;
count__11973_12574 = G__12584;
i__11974_12575 = G__12585;
continue;
}
} else {
var temp__5804__auto___12586 = cljs.core.seq(seq__11970_12572);
if(temp__5804__auto___12586){
var seq__11970_12587__$1 = temp__5804__auto___12586;
if(cljs.core.chunked_seq_QMARK_(seq__11970_12587__$1)){
var c__5525__auto___12588 = cljs.core.chunk_first(seq__11970_12587__$1);
var G__12589 = cljs.core.chunk_rest(seq__11970_12587__$1);
var G__12590 = c__5525__auto___12588;
var G__12591 = cljs.core.count(c__5525__auto___12588);
var G__12592 = (0);
seq__11970_12572 = G__12589;
chunk__11972_12573 = G__12590;
count__11973_12574 = G__12591;
i__11974_12575 = G__12592;
continue;
} else {
var child_12593 = cljs.core.first(seq__11970_12587__$1);
if(cljs.core.truth_(child_12593)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12593);


var G__12594 = cljs.core.next(seq__11970_12587__$1);
var G__12595 = null;
var G__12596 = (0);
var G__12597 = (0);
seq__11970_12572 = G__12594;
chunk__11972_12573 = G__12595;
count__11973_12574 = G__12596;
i__11974_12575 = G__12597;
continue;
} else {
var G__12598 = cljs.core.next(seq__11970_12587__$1);
var G__12599 = null;
var G__12600 = (0);
var G__12601 = (0);
seq__11970_12572 = G__12598;
chunk__11972_12573 = G__12599;
count__11973_12574 = G__12600;
i__11974_12575 = G__12601;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12571);
}


var G__12602 = seq__11953_12565;
var G__12603 = chunk__11954_12566;
var G__12604 = count__11955_12567;
var G__12605 = (i__11956_12568 + (1));
seq__11953_12565 = G__12602;
chunk__11954_12566 = G__12603;
count__11955_12567 = G__12604;
i__11956_12568 = G__12605;
continue;
} else {
var temp__5804__auto___12606 = cljs.core.seq(seq__11953_12565);
if(temp__5804__auto___12606){
var seq__11953_12607__$1 = temp__5804__auto___12606;
if(cljs.core.chunked_seq_QMARK_(seq__11953_12607__$1)){
var c__5525__auto___12608 = cljs.core.chunk_first(seq__11953_12607__$1);
var G__12609 = cljs.core.chunk_rest(seq__11953_12607__$1);
var G__12610 = c__5525__auto___12608;
var G__12611 = cljs.core.count(c__5525__auto___12608);
var G__12612 = (0);
seq__11953_12565 = G__12609;
chunk__11954_12566 = G__12610;
count__11955_12567 = G__12611;
i__11956_12568 = G__12612;
continue;
} else {
var child_struct_12613 = cljs.core.first(seq__11953_12607__$1);
var children_12614 = shadow.dom.dom_node(child_struct_12613);
if(cljs.core.seq_QMARK_(children_12614)){
var seq__11976_12615 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12614));
var chunk__11978_12616 = null;
var count__11979_12617 = (0);
var i__11980_12618 = (0);
while(true){
if((i__11980_12618 < count__11979_12617)){
var child_12619 = chunk__11978_12616.cljs$core$IIndexed$_nth$arity$2(null,i__11980_12618);
if(cljs.core.truth_(child_12619)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12619);


var G__12620 = seq__11976_12615;
var G__12621 = chunk__11978_12616;
var G__12622 = count__11979_12617;
var G__12623 = (i__11980_12618 + (1));
seq__11976_12615 = G__12620;
chunk__11978_12616 = G__12621;
count__11979_12617 = G__12622;
i__11980_12618 = G__12623;
continue;
} else {
var G__12624 = seq__11976_12615;
var G__12625 = chunk__11978_12616;
var G__12626 = count__11979_12617;
var G__12627 = (i__11980_12618 + (1));
seq__11976_12615 = G__12624;
chunk__11978_12616 = G__12625;
count__11979_12617 = G__12626;
i__11980_12618 = G__12627;
continue;
}
} else {
var temp__5804__auto___12628__$1 = cljs.core.seq(seq__11976_12615);
if(temp__5804__auto___12628__$1){
var seq__11976_12629__$1 = temp__5804__auto___12628__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11976_12629__$1)){
var c__5525__auto___12630 = cljs.core.chunk_first(seq__11976_12629__$1);
var G__12631 = cljs.core.chunk_rest(seq__11976_12629__$1);
var G__12632 = c__5525__auto___12630;
var G__12633 = cljs.core.count(c__5525__auto___12630);
var G__12634 = (0);
seq__11976_12615 = G__12631;
chunk__11978_12616 = G__12632;
count__11979_12617 = G__12633;
i__11980_12618 = G__12634;
continue;
} else {
var child_12635 = cljs.core.first(seq__11976_12629__$1);
if(cljs.core.truth_(child_12635)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12635);


var G__12636 = cljs.core.next(seq__11976_12629__$1);
var G__12637 = null;
var G__12638 = (0);
var G__12639 = (0);
seq__11976_12615 = G__12636;
chunk__11978_12616 = G__12637;
count__11979_12617 = G__12638;
i__11980_12618 = G__12639;
continue;
} else {
var G__12640 = cljs.core.next(seq__11976_12629__$1);
var G__12641 = null;
var G__12642 = (0);
var G__12643 = (0);
seq__11976_12615 = G__12640;
chunk__11978_12616 = G__12641;
count__11979_12617 = G__12642;
i__11980_12618 = G__12643;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12614);
}


var G__12644 = cljs.core.next(seq__11953_12607__$1);
var G__12645 = null;
var G__12646 = (0);
var G__12647 = (0);
seq__11953_12565 = G__12644;
chunk__11954_12566 = G__12645;
count__11955_12567 = G__12646;
i__11956_12568 = G__12647;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__11985 = cljs.core.seq(node);
var chunk__11986 = null;
var count__11987 = (0);
var i__11988 = (0);
while(true){
if((i__11988 < count__11987)){
var n = chunk__11986.cljs$core$IIndexed$_nth$arity$2(null,i__11988);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12652 = seq__11985;
var G__12653 = chunk__11986;
var G__12654 = count__11987;
var G__12655 = (i__11988 + (1));
seq__11985 = G__12652;
chunk__11986 = G__12653;
count__11987 = G__12654;
i__11988 = G__12655;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11985);
if(temp__5804__auto__){
var seq__11985__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11985__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11985__$1);
var G__12659 = cljs.core.chunk_rest(seq__11985__$1);
var G__12660 = c__5525__auto__;
var G__12661 = cljs.core.count(c__5525__auto__);
var G__12662 = (0);
seq__11985 = G__12659;
chunk__11986 = G__12660;
count__11987 = G__12661;
i__11988 = G__12662;
continue;
} else {
var n = cljs.core.first(seq__11985__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12663 = cljs.core.next(seq__11985__$1);
var G__12664 = null;
var G__12665 = (0);
var G__12666 = (0);
seq__11985 = G__12663;
chunk__11986 = G__12664;
count__11987 = G__12665;
i__11988 = G__12666;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__11990 = arguments.length;
switch (G__11990) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__11996 = arguments.length;
switch (G__11996) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__11999 = arguments.length;
switch (G__11999) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12676 = arguments.length;
var i__5727__auto___12677 = (0);
while(true){
if((i__5727__auto___12677 < len__5726__auto___12676)){
args__5732__auto__.push((arguments[i__5727__auto___12677]));

var G__12679 = (i__5727__auto___12677 + (1));
i__5727__auto___12677 = G__12679;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12009_12680 = cljs.core.seq(nodes);
var chunk__12010_12681 = null;
var count__12011_12682 = (0);
var i__12012_12683 = (0);
while(true){
if((i__12012_12683 < count__12011_12682)){
var node_12684 = chunk__12010_12681.cljs$core$IIndexed$_nth$arity$2(null,i__12012_12683);
fragment.appendChild(shadow.dom._to_dom(node_12684));


var G__12685 = seq__12009_12680;
var G__12686 = chunk__12010_12681;
var G__12687 = count__12011_12682;
var G__12688 = (i__12012_12683 + (1));
seq__12009_12680 = G__12685;
chunk__12010_12681 = G__12686;
count__12011_12682 = G__12687;
i__12012_12683 = G__12688;
continue;
} else {
var temp__5804__auto___12689 = cljs.core.seq(seq__12009_12680);
if(temp__5804__auto___12689){
var seq__12009_12690__$1 = temp__5804__auto___12689;
if(cljs.core.chunked_seq_QMARK_(seq__12009_12690__$1)){
var c__5525__auto___12691 = cljs.core.chunk_first(seq__12009_12690__$1);
var G__12692 = cljs.core.chunk_rest(seq__12009_12690__$1);
var G__12693 = c__5525__auto___12691;
var G__12694 = cljs.core.count(c__5525__auto___12691);
var G__12695 = (0);
seq__12009_12680 = G__12692;
chunk__12010_12681 = G__12693;
count__12011_12682 = G__12694;
i__12012_12683 = G__12695;
continue;
} else {
var node_12696 = cljs.core.first(seq__12009_12690__$1);
fragment.appendChild(shadow.dom._to_dom(node_12696));


var G__12697 = cljs.core.next(seq__12009_12690__$1);
var G__12698 = null;
var G__12699 = (0);
var G__12700 = (0);
seq__12009_12680 = G__12697;
chunk__12010_12681 = G__12698;
count__12011_12682 = G__12699;
i__12012_12683 = G__12700;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12008){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12008));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12018_12701 = cljs.core.seq(scripts);
var chunk__12019_12702 = null;
var count__12020_12703 = (0);
var i__12021_12704 = (0);
while(true){
if((i__12021_12704 < count__12020_12703)){
var vec__12028_12705 = chunk__12019_12702.cljs$core$IIndexed$_nth$arity$2(null,i__12021_12704);
var script_tag_12706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12028_12705,(0),null);
var script_body_12707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12028_12705,(1),null);
eval(script_body_12707);


var G__12709 = seq__12018_12701;
var G__12710 = chunk__12019_12702;
var G__12711 = count__12020_12703;
var G__12712 = (i__12021_12704 + (1));
seq__12018_12701 = G__12709;
chunk__12019_12702 = G__12710;
count__12020_12703 = G__12711;
i__12021_12704 = G__12712;
continue;
} else {
var temp__5804__auto___12713 = cljs.core.seq(seq__12018_12701);
if(temp__5804__auto___12713){
var seq__12018_12714__$1 = temp__5804__auto___12713;
if(cljs.core.chunked_seq_QMARK_(seq__12018_12714__$1)){
var c__5525__auto___12715 = cljs.core.chunk_first(seq__12018_12714__$1);
var G__12716 = cljs.core.chunk_rest(seq__12018_12714__$1);
var G__12717 = c__5525__auto___12715;
var G__12718 = cljs.core.count(c__5525__auto___12715);
var G__12719 = (0);
seq__12018_12701 = G__12716;
chunk__12019_12702 = G__12717;
count__12020_12703 = G__12718;
i__12021_12704 = G__12719;
continue;
} else {
var vec__12031_12720 = cljs.core.first(seq__12018_12714__$1);
var script_tag_12721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12031_12720,(0),null);
var script_body_12722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12031_12720,(1),null);
eval(script_body_12722);


var G__12724 = cljs.core.next(seq__12018_12714__$1);
var G__12725 = null;
var G__12726 = (0);
var G__12727 = (0);
seq__12018_12701 = G__12724;
chunk__12019_12702 = G__12725;
count__12020_12703 = G__12726;
i__12021_12704 = G__12727;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12034){
var vec__12035 = p__12034;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12035,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12035,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12040 = arguments.length;
switch (G__12040) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12045 = cljs.core.seq(style_keys);
var chunk__12046 = null;
var count__12047 = (0);
var i__12048 = (0);
while(true){
if((i__12048 < count__12047)){
var it = chunk__12046.cljs$core$IIndexed$_nth$arity$2(null,i__12048);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12729 = seq__12045;
var G__12730 = chunk__12046;
var G__12731 = count__12047;
var G__12732 = (i__12048 + (1));
seq__12045 = G__12729;
chunk__12046 = G__12730;
count__12047 = G__12731;
i__12048 = G__12732;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12045);
if(temp__5804__auto__){
var seq__12045__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12045__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12045__$1);
var G__12733 = cljs.core.chunk_rest(seq__12045__$1);
var G__12734 = c__5525__auto__;
var G__12735 = cljs.core.count(c__5525__auto__);
var G__12736 = (0);
seq__12045 = G__12733;
chunk__12046 = G__12734;
count__12047 = G__12735;
i__12048 = G__12736;
continue;
} else {
var it = cljs.core.first(seq__12045__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12737 = cljs.core.next(seq__12045__$1);
var G__12738 = null;
var G__12739 = (0);
var G__12740 = (0);
seq__12045 = G__12737;
chunk__12046 = G__12738;
count__12047 = G__12739;
i__12048 = G__12740;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12064,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12068 = k12064;
var G__12068__$1 = (((G__12068 instanceof cljs.core.Keyword))?G__12068.fqn:null);
switch (G__12068__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12064,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12069){
var vec__12070 = p__12069;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12070,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12070,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12063){
var self__ = this;
var G__12063__$1 = this;
return (new cljs.core.RecordIter((0),G__12063__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12065,other12066){
var self__ = this;
var this12065__$1 = this;
return (((!((other12066 == null)))) && ((((this12065__$1.constructor === other12066.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12065__$1.x,other12066.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12065__$1.y,other12066.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12065__$1.__extmap,other12066.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12064){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12085 = k12064;
var G__12085__$1 = (((G__12085 instanceof cljs.core.Keyword))?G__12085.fqn:null);
switch (G__12085__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12064);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12063){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12088 = cljs.core.keyword_identical_QMARK_;
var expr__12089 = k__5309__auto__;
if(cljs.core.truth_((pred__12088.cljs$core$IFn$_invoke$arity$2 ? pred__12088.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12089) : pred__12088.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12089)))){
return (new shadow.dom.Coordinate(G__12063,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12088.cljs$core$IFn$_invoke$arity$2 ? pred__12088.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12089) : pred__12088.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12089)))){
return (new shadow.dom.Coordinate(self__.x,G__12063,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12063),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12063){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12063,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12067){
var extmap__5342__auto__ = (function (){var G__12092 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12067,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12067)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12092);
} else {
return G__12092;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12067),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12067),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12102,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12125 = k12102;
var G__12125__$1 = (((G__12125 instanceof cljs.core.Keyword))?G__12125.fqn:null);
switch (G__12125__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12102,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12128){
var vec__12129 = p__12128;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12129,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12129,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12101){
var self__ = this;
var G__12101__$1 = this;
return (new cljs.core.RecordIter((0),G__12101__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12103,other12104){
var self__ = this;
var this12103__$1 = this;
return (((!((other12104 == null)))) && ((((this12103__$1.constructor === other12104.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12103__$1.w,other12104.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12103__$1.h,other12104.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12103__$1.__extmap,other12104.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12102){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12139 = k12102;
var G__12139__$1 = (((G__12139 instanceof cljs.core.Keyword))?G__12139.fqn:null);
switch (G__12139__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12102);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12101){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12145 = cljs.core.keyword_identical_QMARK_;
var expr__12146 = k__5309__auto__;
if(cljs.core.truth_((pred__12145.cljs$core$IFn$_invoke$arity$2 ? pred__12145.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12146) : pred__12145.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12146)))){
return (new shadow.dom.Size(G__12101,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12145.cljs$core$IFn$_invoke$arity$2 ? pred__12145.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12146) : pred__12145.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12146)))){
return (new shadow.dom.Size(self__.w,G__12101,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12101),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12101){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12101,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12117){
var extmap__5342__auto__ = (function (){var G__12162 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12117,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12117)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12162);
} else {
return G__12162;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12117),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12117),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__12762 = (i + (1));
var G__12763 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12762;
ret = G__12763;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12182){
var vec__12183 = p__12182;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12183,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12183,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12187 = arguments.length;
switch (G__12187) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12766 = ps;
var G__12767 = (i + (1));
el__$1 = G__12766;
i = G__12767;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12242 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12242,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12242,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12242,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12249_12768 = cljs.core.seq(props);
var chunk__12250_12769 = null;
var count__12251_12770 = (0);
var i__12252_12771 = (0);
while(true){
if((i__12252_12771 < count__12251_12770)){
var vec__12264_12772 = chunk__12250_12769.cljs$core$IIndexed$_nth$arity$2(null,i__12252_12771);
var k_12773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12264_12772,(0),null);
var v_12774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12264_12772,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_12773);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12773),v_12774);


var G__12775 = seq__12249_12768;
var G__12776 = chunk__12250_12769;
var G__12777 = count__12251_12770;
var G__12778 = (i__12252_12771 + (1));
seq__12249_12768 = G__12775;
chunk__12250_12769 = G__12776;
count__12251_12770 = G__12777;
i__12252_12771 = G__12778;
continue;
} else {
var temp__5804__auto___12779 = cljs.core.seq(seq__12249_12768);
if(temp__5804__auto___12779){
var seq__12249_12780__$1 = temp__5804__auto___12779;
if(cljs.core.chunked_seq_QMARK_(seq__12249_12780__$1)){
var c__5525__auto___12781 = cljs.core.chunk_first(seq__12249_12780__$1);
var G__12782 = cljs.core.chunk_rest(seq__12249_12780__$1);
var G__12783 = c__5525__auto___12781;
var G__12784 = cljs.core.count(c__5525__auto___12781);
var G__12785 = (0);
seq__12249_12768 = G__12782;
chunk__12250_12769 = G__12783;
count__12251_12770 = G__12784;
i__12252_12771 = G__12785;
continue;
} else {
var vec__12267_12786 = cljs.core.first(seq__12249_12780__$1);
var k_12787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12267_12786,(0),null);
var v_12788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12267_12786,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_12787);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12787),v_12788);


var G__12789 = cljs.core.next(seq__12249_12780__$1);
var G__12790 = null;
var G__12791 = (0);
var G__12792 = (0);
seq__12249_12768 = G__12789;
chunk__12250_12769 = G__12790;
count__12251_12770 = G__12791;
i__12252_12771 = G__12792;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12274 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12274,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12274,(1),null);
var seq__12277_12793 = cljs.core.seq(node_children);
var chunk__12279_12794 = null;
var count__12280_12795 = (0);
var i__12282_12796 = (0);
while(true){
if((i__12282_12796 < count__12280_12795)){
var child_struct_12797 = chunk__12279_12794.cljs$core$IIndexed$_nth$arity$2(null,i__12282_12796);
if((!((child_struct_12797 == null)))){
if(typeof child_struct_12797 === 'string'){
var text_12798 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12798),child_struct_12797].join(''));
} else {
var children_12799 = shadow.dom.svg_node(child_struct_12797);
if(cljs.core.seq_QMARK_(children_12799)){
var seq__12330_12800 = cljs.core.seq(children_12799);
var chunk__12332_12801 = null;
var count__12333_12802 = (0);
var i__12334_12803 = (0);
while(true){
if((i__12334_12803 < count__12333_12802)){
var child_12804 = chunk__12332_12801.cljs$core$IIndexed$_nth$arity$2(null,i__12334_12803);
if(cljs.core.truth_(child_12804)){
node.appendChild(child_12804);


var G__12805 = seq__12330_12800;
var G__12806 = chunk__12332_12801;
var G__12807 = count__12333_12802;
var G__12808 = (i__12334_12803 + (1));
seq__12330_12800 = G__12805;
chunk__12332_12801 = G__12806;
count__12333_12802 = G__12807;
i__12334_12803 = G__12808;
continue;
} else {
var G__12809 = seq__12330_12800;
var G__12810 = chunk__12332_12801;
var G__12811 = count__12333_12802;
var G__12812 = (i__12334_12803 + (1));
seq__12330_12800 = G__12809;
chunk__12332_12801 = G__12810;
count__12333_12802 = G__12811;
i__12334_12803 = G__12812;
continue;
}
} else {
var temp__5804__auto___12813 = cljs.core.seq(seq__12330_12800);
if(temp__5804__auto___12813){
var seq__12330_12814__$1 = temp__5804__auto___12813;
if(cljs.core.chunked_seq_QMARK_(seq__12330_12814__$1)){
var c__5525__auto___12815 = cljs.core.chunk_first(seq__12330_12814__$1);
var G__12816 = cljs.core.chunk_rest(seq__12330_12814__$1);
var G__12817 = c__5525__auto___12815;
var G__12818 = cljs.core.count(c__5525__auto___12815);
var G__12819 = (0);
seq__12330_12800 = G__12816;
chunk__12332_12801 = G__12817;
count__12333_12802 = G__12818;
i__12334_12803 = G__12819;
continue;
} else {
var child_12820 = cljs.core.first(seq__12330_12814__$1);
if(cljs.core.truth_(child_12820)){
node.appendChild(child_12820);


var G__12821 = cljs.core.next(seq__12330_12814__$1);
var G__12822 = null;
var G__12823 = (0);
var G__12824 = (0);
seq__12330_12800 = G__12821;
chunk__12332_12801 = G__12822;
count__12333_12802 = G__12823;
i__12334_12803 = G__12824;
continue;
} else {
var G__12825 = cljs.core.next(seq__12330_12814__$1);
var G__12826 = null;
var G__12827 = (0);
var G__12828 = (0);
seq__12330_12800 = G__12825;
chunk__12332_12801 = G__12826;
count__12333_12802 = G__12827;
i__12334_12803 = G__12828;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12799);
}
}


var G__12829 = seq__12277_12793;
var G__12830 = chunk__12279_12794;
var G__12831 = count__12280_12795;
var G__12832 = (i__12282_12796 + (1));
seq__12277_12793 = G__12829;
chunk__12279_12794 = G__12830;
count__12280_12795 = G__12831;
i__12282_12796 = G__12832;
continue;
} else {
var G__12833 = seq__12277_12793;
var G__12834 = chunk__12279_12794;
var G__12835 = count__12280_12795;
var G__12836 = (i__12282_12796 + (1));
seq__12277_12793 = G__12833;
chunk__12279_12794 = G__12834;
count__12280_12795 = G__12835;
i__12282_12796 = G__12836;
continue;
}
} else {
var temp__5804__auto___12837 = cljs.core.seq(seq__12277_12793);
if(temp__5804__auto___12837){
var seq__12277_12838__$1 = temp__5804__auto___12837;
if(cljs.core.chunked_seq_QMARK_(seq__12277_12838__$1)){
var c__5525__auto___12839 = cljs.core.chunk_first(seq__12277_12838__$1);
var G__12840 = cljs.core.chunk_rest(seq__12277_12838__$1);
var G__12841 = c__5525__auto___12839;
var G__12842 = cljs.core.count(c__5525__auto___12839);
var G__12843 = (0);
seq__12277_12793 = G__12840;
chunk__12279_12794 = G__12841;
count__12280_12795 = G__12842;
i__12282_12796 = G__12843;
continue;
} else {
var child_struct_12844 = cljs.core.first(seq__12277_12838__$1);
if((!((child_struct_12844 == null)))){
if(typeof child_struct_12844 === 'string'){
var text_12845 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12845),child_struct_12844].join(''));
} else {
var children_12846 = shadow.dom.svg_node(child_struct_12844);
if(cljs.core.seq_QMARK_(children_12846)){
var seq__12347_12847 = cljs.core.seq(children_12846);
var chunk__12349_12848 = null;
var count__12350_12849 = (0);
var i__12351_12850 = (0);
while(true){
if((i__12351_12850 < count__12350_12849)){
var child_12851 = chunk__12349_12848.cljs$core$IIndexed$_nth$arity$2(null,i__12351_12850);
if(cljs.core.truth_(child_12851)){
node.appendChild(child_12851);


var G__12852 = seq__12347_12847;
var G__12853 = chunk__12349_12848;
var G__12854 = count__12350_12849;
var G__12855 = (i__12351_12850 + (1));
seq__12347_12847 = G__12852;
chunk__12349_12848 = G__12853;
count__12350_12849 = G__12854;
i__12351_12850 = G__12855;
continue;
} else {
var G__12856 = seq__12347_12847;
var G__12857 = chunk__12349_12848;
var G__12858 = count__12350_12849;
var G__12859 = (i__12351_12850 + (1));
seq__12347_12847 = G__12856;
chunk__12349_12848 = G__12857;
count__12350_12849 = G__12858;
i__12351_12850 = G__12859;
continue;
}
} else {
var temp__5804__auto___12860__$1 = cljs.core.seq(seq__12347_12847);
if(temp__5804__auto___12860__$1){
var seq__12347_12861__$1 = temp__5804__auto___12860__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12347_12861__$1)){
var c__5525__auto___12862 = cljs.core.chunk_first(seq__12347_12861__$1);
var G__12863 = cljs.core.chunk_rest(seq__12347_12861__$1);
var G__12864 = c__5525__auto___12862;
var G__12865 = cljs.core.count(c__5525__auto___12862);
var G__12866 = (0);
seq__12347_12847 = G__12863;
chunk__12349_12848 = G__12864;
count__12350_12849 = G__12865;
i__12351_12850 = G__12866;
continue;
} else {
var child_12867 = cljs.core.first(seq__12347_12861__$1);
if(cljs.core.truth_(child_12867)){
node.appendChild(child_12867);


var G__12868 = cljs.core.next(seq__12347_12861__$1);
var G__12869 = null;
var G__12870 = (0);
var G__12871 = (0);
seq__12347_12847 = G__12868;
chunk__12349_12848 = G__12869;
count__12350_12849 = G__12870;
i__12351_12850 = G__12871;
continue;
} else {
var G__12872 = cljs.core.next(seq__12347_12861__$1);
var G__12873 = null;
var G__12874 = (0);
var G__12875 = (0);
seq__12347_12847 = G__12872;
chunk__12349_12848 = G__12873;
count__12350_12849 = G__12874;
i__12351_12850 = G__12875;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12846);
}
}


var G__12876 = cljs.core.next(seq__12277_12838__$1);
var G__12877 = null;
var G__12878 = (0);
var G__12879 = (0);
seq__12277_12793 = G__12876;
chunk__12279_12794 = G__12877;
count__12280_12795 = G__12878;
i__12282_12796 = G__12879;
continue;
} else {
var G__12880 = cljs.core.next(seq__12277_12838__$1);
var G__12881 = null;
var G__12882 = (0);
var G__12883 = (0);
seq__12277_12793 = G__12880;
chunk__12279_12794 = G__12881;
count__12280_12795 = G__12882;
i__12282_12796 = G__12883;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12886 = arguments.length;
var i__5727__auto___12887 = (0);
while(true){
if((i__5727__auto___12887 < len__5726__auto___12886)){
args__5732__auto__.push((arguments[i__5727__auto___12887]));

var G__12888 = (i__5727__auto___12887 + (1));
i__5727__auto___12887 = G__12888;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12368){
var G__12369 = cljs.core.first(seq12368);
var seq12368__$1 = cljs.core.next(seq12368);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12369,seq12368__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
