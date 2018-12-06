(function(e){function t(t){for(var i,s,a=t[0],l=t[1],c=t[2],d=0,p=[];d<a.length;d++)s=a[d],o[s]&&p.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e04":function(e,t,n){},"1e60":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("SearchBar",{on:{termChange:e.onTermChange}}),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8"},[n("VideoDetail",{attrs:{video:e.selectedVideo}})],1),n("VideoList",{attrs:{videos:e.videos},on:{videoSelect:e.onVideoSelect}})],1)],1)},r=[],s=n("bc3a"),a=n.n(s),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{on:{input:e.onInput}})])},c=[],u={name:"SearchBar",methods:{onInput:function(e){this.$emit("termChange",e.target.value)}}},d=u,p=(n("ef24"),n("2877")),f=Object(p["a"])(d,l,c,!1,null,"49e569b9",null);f.options.__file="SearchBar.vue";var v=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"list-group col-md-4"},e._l(e.videos,function(t){return n("VideoListItem",{key:t.etag,attrs:{video:t},on:{videoSelect:e.onVideoSelect}})}))},h=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"list-group-item",on:{click:e.onVideoSelect}},[n("img",{staticClass:"mr-3",attrs:{src:e.thumbnailsUrl,alt:"not found image"}}),n("p",{staticClass:"media-body"},[e._v("\n    "+e._s(e.video.snippet.title)+"\n  ")])])},_=[],g={name:"VideoListItem",props:{video:Object},computed:{thumbnailsUrl:function(){return this.video.snippet.thumbnails.default.url}},methods:{onVideoSelect:function(){this.$emit("videoSelect",this.video)}}},y=g,S=(n("bf2b"),Object(p["a"])(y,b,_,!1,null,"1e8f109e",null));S.options.__file="VideoListItem.vue";var V=S.exports,w={name:"VideoList",props:{videos:Array},components:{VideoListItem:V},methods:{onVideoSelect:function(e){this.$emit("videoSelect",e)}}},O=w,j=(n("7ed9"),Object(p["a"])(O,m,h,!1,null,null,null));j.options.__file="VideoList.vue";var C=j.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.video?n("div",[n("div",{staticClass:"embed-responsive embed-responsive-16by9"},[n("iframe",{staticClass:"embed-responsive-item",attrs:{src:e.videoUrl}})]),n("div",{staticClass:"details"},[n("h4",[e._v(e._s(e.video.snippet.title))]),n("p",[e._v(e._s(e.video.snippet.description))])])]):e._e()},I=[],L={name:"VideoDetail",props:{video:Object},computed:{videoUrl:function(){var e=this.video.id.videoId;return"https://www.youtube.com/embed/".concat(e)}}},$=L,k=(n("70ef"),Object(p["a"])($,x,I,!1,null,"3972d4fb",null));k.options.__file="VideoDetail.vue";var B=k.exports,E="AIzaSyBBEnwLzIN3OF2kT0DKl4t5SGOXpKql2rg",P=E,D={name:"app",components:{SearchBar:v,VideoList:C,VideoDetail:B},data:function(){return{videos:[],selectedVideo:null}},methods:{onTermChange:function(e){var t=this;a.a.get("https://www.googleapis.com/youtube/v3/search",{params:{key:P,type:"video",part:"snippet",q:e}}).then(function(e){t.videos=e.data.items})},onVideoSelect:function(e){this.selectedVideo=e}}},T=D,M=Object(p["a"])(T,o,r,!1,null,null,null);M.options.__file="App.vue";var U=M.exports;new i["a"]({render:function(e){return e(U)}}).$mount("#app")},"70ef":function(e,t,n){"use strict";var i=n("0e04"),o=n.n(i);o.a},"7ed9":function(e,t,n){"use strict";var i=n("7edc"),o=n.n(i);o.a},"7edc":function(e,t,n){},"8da6":function(e,t,n){},bf2b:function(e,t,n){"use strict";var i=n("1e60"),o=n.n(i);o.a},ef24:function(e,t,n){"use strict";var i=n("8da6"),o=n.n(i);o.a}});
//# sourceMappingURL=app.4e952d31.js.map