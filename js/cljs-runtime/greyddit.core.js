goog.provide('greyddit.core');
var module$node_modules$marked$lib$marked_cjs=shadow.js.require("module$node_modules$marked$lib$marked_cjs", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
if((typeof greyddit !== 'undefined') && (typeof greyddit.core !== 'undefined') && (typeof greyddit.core.state !== 'undefined')){
} else {
greyddit.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),null,new cljs.core.Keyword(null,"posts","posts",760043164),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"after","after",594996914),null,new cljs.core.Keyword(null,"selected-post","selected-post",807230830),null,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], null));
}
if((typeof greyddit !== 'undefined') && (typeof greyddit.core !== 'undefined') && (typeof greyddit.core.subreddits !== 'undefined')){
} else {
greyddit.core.subreddits = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["askculinary","askhistorians","askscience","clojure","comics","credibledefense","curatedtumblr","experienceddevs","hobbydrama","noncredibledefense","personalfinance","stardewvalley","subredditdrama","totalwar","warcollege"], null);
}
greyddit.core.mobile_button_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"1.25rem",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"background","background",-863952629),"#f0f0f0",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"left"], null);
greyddit.core.delay_transition = (function greyddit$core$delay_transition(transition_fn){
var delay_ms = ((1000) + cljs.core.rand_int((6000)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(greyddit.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true);

return setTimeout((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(greyddit.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false);

return (transition_fn.cljs$core$IFn$_invoke$arity$0 ? transition_fn.cljs$core$IFn$_invoke$arity$0() : transition_fn.call(null));
}),delay_ms);
});
greyddit.core.fetch_json = (function greyddit$core$fetch_json(url,on_success,on_error){
return window.fetch(url).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
throw (new Error("Fetch failed"));
}
})).then(on_success).catch((function (err){
console.error(err);

return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(err) : on_error.call(null,err));
}));
});
greyddit.core.render_markdown = (function greyddit$core$render_markdown(md){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),module$node_modules$marked$lib$marked_cjs.parse(md)], null)], null);
});
greyddit.core.build_reddit_url = (function greyddit$core$build_reddit_url(subreddit,after){
return ["https://www.reddit.com/r/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(subreddit),"/top.json?limit=20&t=week",(cljs.core.truth_(after)?["&after=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(after)].join(''):null)].join('');
});
greyddit.core.handle_reddit_response = (function greyddit$core$handle_reddit_response(response,push_history_QMARK_){
var clj_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var posts = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clj_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"children","children",-940561982)], null));
var new_after = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clj_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"after","after",594996914)], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(greyddit.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"posts","posts",760043164),posts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"after","after",594996914),new_after,new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
});
greyddit.core.build_comments_url = (function greyddit$core$build_comments_url(subreddit,id){
return ["https://www.reddit.com/r/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(subreddit),"/comments/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".json"].join('');
});
greyddit.core.fetch_comments = (function greyddit$core$fetch_comments(subreddit,id){
var url = greyddit.core.build_comments_url(subreddit,id);
return greyddit.core.fetch_json(url,(function (response){
var vec__18675 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18675,(0),null);
var comments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18675,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(greyddit.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-post","selected-post",807230830),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(post,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"children","children",-940561982),(0),new cljs.core.Keyword(null,"data","data",-232669377)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(comments,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"children","children",-940561982)], null)),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"post","post",269697687)], 0));
}),(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(greyddit.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),"Failed to load post or CORS error");
}));
});
greyddit.core.fetch_reddit_posts = (function greyddit$core$fetch_reddit_posts(var_args){
var G__18680 = arguments.length;
switch (G__18680) {
case 1:
return greyddit.core.fetch_reddit_posts.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return greyddit.core.fetch_reddit_posts.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(greyddit.core.fetch_reddit_posts.cljs$core$IFn$_invoke$arity$1 = (function (subreddit){
return greyddit.core.fetch_reddit_posts.cljs$core$IFn$_invoke$arity$3(subreddit,null,false);
}));

(greyddit.core.fetch_reddit_posts.cljs$core$IFn$_invoke$arity$3 = (function (subreddit,after,push_history_QMARK_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(greyddit.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);

var url = greyddit.core.build_reddit_url(subreddit,after);
return greyddit.core.fetch_json(url,(function (p1__18678_SHARP_){
return greyddit.core.handle_reddit_response(p1__18678_SHARP_,push_history_QMARK_);
}),(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(greyddit.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),"Failed to load or CORS error");
}));
}));

(greyddit.core.fetch_reddit_posts.cljs$lang$maxFixedArity = 3);

greyddit.core.reddit_image_url = (function greyddit$core$reddit_image_url(post){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(post,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preview","preview",451279890),new cljs.core.Keyword(null,"images","images",1757475080),(0),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"url","url",276297046)], null));
});
greyddit.core.reddit_video_url = (function greyddit$core$reddit_video_url(post){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(post,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.Keyword(null,"reddit_video","reddit_video",1275202184),new cljs.core.Keyword(null,"fallback_url","fallback_url",1794940795)], null));
});
greyddit.core.reddit_gif_url = (function greyddit$core$reddit_gif_url(post){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(post,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.Keyword(null,"reddit_video","reddit_video",1275202184),new cljs.core.Keyword(null,"fallback_url","fallback_url",1794940795)], null));
});
greyddit.core.is_youtube_url_QMARK_ = (function greyddit$core$is_youtube_url_QMARK_(url){
return cljs.core.re_find(/youtube\.com|youtu\.be/i,url);
});
greyddit.core.gallery_images = (function greyddit$core$gallery_images(post){
var media_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(post,new cljs.core.Keyword(null,"media_metadata","media_metadata",1087653737));
var ids = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(post,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gallery_data","gallery_data",635335364),new cljs.core.Keyword(null,"items","items",1031954938)], null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18681){
var map__18682 = p__18681;
var map__18682__$1 = cljs.core.__destructure_map(map__18682);
var media_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18682__$1,new cljs.core.Keyword(null,"media_id","media_id",1349356005));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(media_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [media_id,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"u","u",-1156634785)], null));
}),ids);
});
greyddit.core.flatten_comments = (function greyddit$core$flatten_comments(var_args){
var G__18684 = arguments.length;
switch (G__18684) {
case 1:
return greyddit.core.flatten_comments.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return greyddit.core.flatten_comments.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(greyddit.core.flatten_comments.cljs$core$IFn$_invoke$arity$1 = (function (comments){
return greyddit.core.flatten_comments.cljs$core$IFn$_invoke$arity$2(comments,null);
}));

(greyddit.core.flatten_comments.cljs$core$IFn$_invoke$arity$2 = (function (comments,parent_map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__18685){
var map__18686 = p__18685;
var map__18686__$1 = cljs.core.__destructure_map(map__18686);
var full_comment = map__18686__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18686__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data);
var parent_id = new cljs.core.Keyword(null,"parent_id","parent_id",-1999171020).cljs$core$IFn$_invoke$arity$1(data);
var flattened = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comment","comment",532206069),data,new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent_map,parent_id)], null));
var reply_children = ((cljs.core.map_QMARK_(new cljs.core.Keyword(null,"replies","replies",-1389888974).cljs$core$IFn$_invoke$arity$1(data)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replies","replies",-1389888974),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"children","children",-940561982)], null)):null);
if(cljs.core.seq(reply_children)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(flattened,greyddit.core.flatten_comments.cljs$core$IFn$_invoke$arity$2(reply_children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parent_map,["t1_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),data)));
} else {
return flattened;
}
}),cljs.core.PersistentVector.EMPTY,(function (){var or__5002__auto__ = comments;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
}));

(greyddit.core.flatten_comments.cljs$lang$maxFixedArity = 2);

greyddit.core.post_page = (function greyddit$core$post_page(){
var map__18687 = cljs.core.deref(greyddit.core.state);
var map__18687__$1 = cljs.core.__destructure_map(map__18687);
var selected_post = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18687__$1,new cljs.core.Keyword(null,"selected-post","selected-post",807230830));
var comments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18687__$1,new cljs.core.Keyword(null,"comments","comments",-293346423));
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(selected_post);
var video_url = greyddit.core.reddit_video_url(selected_post);
var image_url = greyddit.core.reddit_image_url(selected_post);
var gif_url = (cljs.core.truth_((function (){var and__5000__auto__ = video_url;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.re_find(/\.gif/,url);
} else {
return and__5000__auto__;
}
})())?video_url:null);
var gallery = greyddit.core.gallery_images(selected_post);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(greyddit.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selected-post","selected-post",807230830),null], 0));
}),new cljs.core.Keyword(null,"style","style",-496642736),greyddit.core.mobile_button_style], null),"\u2190 Back to Subreddit"], null),(cljs.core.truth_(selected_post)?new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(selected_post)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(selected_post)], null)], null),(cljs.core.truth_((function (){var and__5000__auto__ = video_url;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(gif_url);
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),video_url,new cljs.core.Keyword(null,"type","type",1174270348),"video/mp4"], null)], null)], null):null),(cljs.core.truth_(gif_url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"autoplay","autoplay",-1319501991),true,new cljs.core.Keyword(null,"loop","loop",-395552849),true,new cljs.core.Keyword(null,"muted","muted",1275109029),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),gif_url,new cljs.core.Keyword(null,"type","type",1174270348),"video/mp4"], null)], null)], null):null),(cljs.core.truth_(greyddit.core.is_youtube_url_QMARK_(url))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"400",new cljs.core.Keyword(null,"src","src",-1651076051),["https://www.youtube.com/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/[=\/]/)))].join(''),new cljs.core.Keyword(null,"frameBorder","frameBorder",-1546202685),"0",new cljs.core.Keyword(null,"allow","allow",-1857325745),"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",new cljs.core.Keyword(null,"allowFullScreen","allowFullScreen",475491825),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem 0"], null)], null)], null):null),((cljs.core.seq(gallery))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"1rem",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem 0"], null)], null),(function (){var iter__5480__auto__ = (function greyddit$core$post_page_$_iter__18688(s__18689){
return (new cljs.core.LazySeq(null,(function (){
var s__18689__$1 = s__18689;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18689__$1);
if(temp__5804__auto__){
var s__18689__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18689__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18689__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18691 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18690 = (0);
while(true){
if((i__18690 < size__5479__auto__)){
var img_url = cljs.core._nth(c__5478__auto__,i__18690);
cljs.core.chunk_append(b__18691,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img_url,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),img_url], null)));

var G__18714 = (i__18690 + (1));
i__18690 = G__18714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18691),greyddit$core$post_page_$_iter__18688(cljs.core.chunk_rest(s__18689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18691),null);
}
} else {
var img_url = cljs.core.first(s__18689__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img_url,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),img_url], null)),greyddit$core$post_page_$_iter__18688(cljs.core.rest(s__18689__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(gallery);
})()], null):null),(cljs.core.truth_((function (){var and__5000__auto__ = image_url;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.not(video_url);
if(and__5000__auto____$1){
var and__5000__auto____$2 = cljs.core.not(greyddit.core.is_youtube_url_QMARK_(url));
if(and__5000__auto____$2){
return cljs.core.re_matches(/.*\.(jpg|jpeg|png|gif)$/i,image_url);
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),image_url,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem 0",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc"], null)], null)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"selftext","selftext",621378021).cljs$core$IFn$_invoke$arity$1(selected_post))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"0.5rem",new cljs.core.Keyword(null,"background","background",-863952629),"#f9f9f9",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"4px"], null)], null),greyddit.core.render_markdown(new cljs.core.Keyword(null,"selftext","selftext",621378021).cljs$core$IFn$_invoke$arity$1(selected_post))], 0))], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Comments"], null),(function (){var flat_comments = greyddit.core.flatten_comments.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = comments;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
if(cljs.core.seq(flat_comments)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5480__auto__ = (function greyddit$core$post_page_$_iter__18692(s__18693){
return (new cljs.core.LazySeq(null,(function (){
var s__18693__$1 = s__18693;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18693__$1);
if(temp__5804__auto__){
var s__18693__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18693__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18693__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18695 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18694 = (0);
while(true){
if((i__18694 < size__5479__auto__)){
var map__18696 = cljs.core._nth(c__5478__auto__,i__18694);
var map__18696__$1 = cljs.core.__destructure_map(map__18696);
var comment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18696__$1,new cljs.core.Keyword(null,"comment","comment",532206069));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18696__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.not(new cljs.core.Keyword(null,"stickied","stickied",-406063578).cljs$core$IFn$_invoke$arity$1(comment))){
cljs.core.chunk_append(b__18695,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"2rem"], null)], null),(cljs.core.truth_(parent)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"0.5rem",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"4px",new cljs.core.Keyword(null,"fontStyle","fontStyle",1246842165),"italic"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(parent)], null),":"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),greyddit.core.render_markdown(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(parent))], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9f9f9",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"4px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ddd"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(comment)], null),":"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(comment))?greyddit.core.render_markdown(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(comment)):null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(comment)], null)));

var G__18715 = (i__18694 + (1));
i__18694 = G__18715;
continue;
} else {
var G__18716 = (i__18694 + (1));
i__18694 = G__18716;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18695),greyddit$core$post_page_$_iter__18692(cljs.core.chunk_rest(s__18693__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18695),null);
}
} else {
var map__18697 = cljs.core.first(s__18693__$2);
var map__18697__$1 = cljs.core.__destructure_map(map__18697);
var comment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18697__$1,new cljs.core.Keyword(null,"comment","comment",532206069));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18697__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.not(new cljs.core.Keyword(null,"stickied","stickied",-406063578).cljs$core$IFn$_invoke$arity$1(comment))){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"2rem"], null)], null),(cljs.core.truth_(parent)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"0.5rem",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"4px",new cljs.core.Keyword(null,"fontStyle","fontStyle",1246842165),"italic"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(parent)], null),":"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),greyddit.core.render_markdown(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(parent))], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9f9f9",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"4px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ddd"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(comment)], null),":"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(comment))?greyddit.core.render_markdown(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(comment)):null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(comment)], null)),greyddit$core$post_page_$_iter__18692(cljs.core.rest(s__18693__$2)));
} else {
var G__18717 = cljs.core.rest(s__18693__$2);
s__18693__$1 = G__18717;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(flat_comments);
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No comments or failed to load."], null);
}
})()], null):null)], null);
});
greyddit.core.post_table = (function greyddit$core$post_table(posts){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflowX","overflowX",-1923805821),"auto",new cljs.core.Keyword(null,"maxWidth","maxWidth",-1375124795),"100%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"borderCollapse","borderCollapse",-1962230194),"collapse",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),"500px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"borderBottom","borderBottom",1676563277),"1px solid #ccc"], null)], null),"Title"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"borderBottom","borderBottom",1676563277),"1px solid #ccc"], null)], null),"Author"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"borderBottom","borderBottom",1676563277),"1px solid #ccc"], null)], null),"Upvotes"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5480__auto__ = (function greyddit$core$post_table_$_iter__18699(s__18700){
return (new cljs.core.LazySeq(null,(function (){
var s__18700__$1 = s__18700;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18700__$1);
if(temp__5804__auto__){
var s__18700__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18700__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18700__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18702 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18701 = (0);
while(true){
if((i__18701 < size__5479__auto__)){
var map__18703 = cljs.core._nth(c__5478__auto__,i__18701);
var map__18703__$1 = cljs.core.__destructure_map(map__18703);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18703__$1,new cljs.core.Keyword(null,"data","data",-232669377));
cljs.core.chunk_append(b__18702,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1.5rem",new cljs.core.Keyword(null,"borderBottom","borderBottom",1676563277),"1px solid #eee"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18701,map__18703,map__18703__$1,data,c__5478__auto__,size__5479__auto__,b__18702,s__18700__$2,temp__5804__auto__){
return (function (p1__18698_SHARP_){
p1__18698_SHARP_.preventDefault();

return greyddit.core.delay_transition(((function (i__18701,map__18703,map__18703__$1,data,c__5478__auto__,size__5479__auto__,b__18702,s__18700__$2,temp__5804__auto__){
return (function (){
return greyddit.core.fetch_comments(new cljs.core.Keyword(null,"subreddit","subreddit",-670654754).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(greyddit.core.state)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data));
});})(i__18701,map__18703,map__18703__$1,data,c__5478__auto__,size__5479__auto__,b__18702,s__18700__$2,temp__5804__auto__))
);
});})(i__18701,map__18703,map__18703__$1,data,c__5478__auto__,size__5479__auto__,b__18702,s__18700__$2,temp__5804__auto__))
], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"borderBottom","borderBottom",1676563277),"1px solid #eee"], null)], null),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"borderBottom","borderBottom",1676563277),"1px solid #eee"], null)], null),new cljs.core.Keyword(null,"ups","ups",-996341883).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)], null)));

var G__18718 = (i__18701 + (1));
i__18701 = G__18718;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18702),greyddit$core$post_table_$_iter__18699(cljs.core.chunk_rest(s__18700__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18702),null);
}
} else {
var map__18704 = cljs.core.first(s__18700__$2);
var map__18704__$1 = cljs.core.__destructure_map(map__18704);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18704__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1.5rem",new cljs.core.Keyword(null,"borderBottom","borderBottom",1676563277),"1px solid #eee"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__18704,map__18704__$1,data,s__18700__$2,temp__5804__auto__){
return (function (p1__18698_SHARP_){
p1__18698_SHARP_.preventDefault();

return greyddit.core.delay_transition((function (){
return greyddit.core.fetch_comments(new cljs.core.Keyword(null,"subreddit","subreddit",-670654754).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(greyddit.core.state)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data));
}));
});})(map__18704,map__18704__$1,data,s__18700__$2,temp__5804__auto__))
], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"borderBottom","borderBottom",1676563277),"1px solid #eee"], null)], null),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"borderBottom","borderBottom",1676563277),"1px solid #eee"], null)], null),new cljs.core.Keyword(null,"ups","ups",-996341883).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)], null)),greyddit$core$post_table_$_iter__18699(cljs.core.rest(s__18700__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(posts);
})()], null)], null)], null);
});
greyddit.core.home_page = (function greyddit$core$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to Greyddit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Select a subreddit:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"gap","gap",80255254),"1rem",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"1rem"], null)], null),(function (){var iter__5480__auto__ = (function greyddit$core$home_page_$_iter__18705(s__18706){
return (new cljs.core.LazySeq(null,(function (){
var s__18706__$1 = s__18706;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18706__$1);
if(temp__5804__auto__){
var s__18706__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18706__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18706__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18708 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18707 = (0);
while(true){
if((i__18707 < size__5479__auto__)){
var s = cljs.core._nth(c__5478__auto__,i__18707);
cljs.core.chunk_append(b__18708,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18707,s,c__5478__auto__,size__5479__auto__,b__18708,s__18706__$2,temp__5804__auto__){
return (function (){
return greyddit.core.delay_transition(((function (i__18707,s,c__5478__auto__,size__5479__auto__,b__18708,s__18706__$2,temp__5804__auto__){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(greyddit.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),s,new cljs.core.Keyword(null,"posts","posts",760043164),cljs.core.PersistentVector.EMPTY], 0));

return greyddit.core.fetch_reddit_posts.cljs$core$IFn$_invoke$arity$1(s);
});})(i__18707,s,c__5478__auto__,size__5479__auto__,b__18708,s__18706__$2,temp__5804__auto__))
);
});})(i__18707,s,c__5478__auto__,size__5479__auto__,b__18708,s__18706__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"style","style",-496642736),greyddit.core.mobile_button_style], null),["r/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)));

var G__18719 = (i__18707 + (1));
i__18707 = G__18719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18708),greyddit$core$home_page_$_iter__18705(cljs.core.chunk_rest(s__18706__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18708),null);
}
} else {
var s = cljs.core.first(s__18706__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s,s__18706__$2,temp__5804__auto__){
return (function (){
return greyddit.core.delay_transition((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(greyddit.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),s,new cljs.core.Keyword(null,"posts","posts",760043164),cljs.core.PersistentVector.EMPTY], 0));

return greyddit.core.fetch_reddit_posts.cljs$core$IFn$_invoke$arity$1(s);
}));
});})(s,s__18706__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"style","style",-496642736),greyddit.core.mobile_button_style], null),["r/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)),greyddit$core$home_page_$_iter__18705(cljs.core.rest(s__18706__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(greyddit.core.subreddits);
})()], null)], null);
});
greyddit.core.subreddit_page = (function greyddit$core$subreddit_page(){
var map__18709 = cljs.core.deref(greyddit.core.state);
var map__18709__$1 = cljs.core.__destructure_map(map__18709);
var subreddit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18709__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var posts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18709__$1,new cljs.core.Keyword(null,"posts","posts",760043164));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18709__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18709__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["Top r/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(subreddit)," Posts"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flexWrap","flexWrap",-1972563518),"wrap",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return greyddit.core.delay_transition((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(greyddit.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"home","home",-74557309));
}));
}),new cljs.core.Keyword(null,"style","style",-496642736),greyddit.core.mobile_button_style], null),"\u2190 Back to Home"], null),(cljs.core.truth_(after)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return greyddit.core.fetch_reddit_posts.cljs$core$IFn$_invoke$arity$3(subreddit,after,false);
}),new cljs.core.Keyword(null,"style","style",-496642736),greyddit.core.mobile_button_style], null),"Next Page \u2192"], null):null)], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),error], null):null),((cljs.core.seq(posts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [greyddit.core.post_table,posts], null):null)], null);
});
greyddit.core.app = (function greyddit$core$app(){
var map__18710 = cljs.core.deref(greyddit.core.state);
var map__18710__$1 = cljs.core.__destructure_map(map__18710);
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18710__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18710__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
if(cljs.core.truth_(loading_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"2rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Loading..."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"3rem",new cljs.core.Keyword(null,"height","height",1025178622),"3rem",new cljs.core.Keyword(null,"border","border",1444987323),"4px solid #ccc",new cljs.core.Keyword(null,"borderTop","borderTop",2080227753),"4px solid #333",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"50%",new cljs.core.Keyword(null,"animation","animation",-1248293244),"spin 1s linear infinite"], null)], null)], null)], null);
} else {
var G__18711 = view;
var G__18711__$1 = (((G__18711 instanceof cljs.core.Keyword))?G__18711.fqn:null);
switch (G__18711__$1) {
case "home":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [greyddit.core.home_page], null);

break;
case "subreddit":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [greyddit.core.subreddit_page], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [greyddit.core.post_page], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Unknown view"], null);

}
}
});
greyddit.core.start = (function greyddit$core$start(){
var root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
return root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [greyddit.core.app], null)));
});
greyddit.core.init = (function greyddit$core$init(){
return greyddit.core.start();
});
goog.exportSymbol('greyddit.core.init', greyddit.core.init);

//# sourceMappingURL=greyddit.core.js.map
