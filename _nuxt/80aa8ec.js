(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{4557:function(t,e,n){"use strict";n.r(e);var r=n(2),c=(n(32),n(192)),l={data:function(){return{collections:null}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content({deep:!0}).where({draft:{$ne:!0}}).sortBy("dir").sortBy("order").sortBy("title").fetch().catch((function(){}));case 2:n=e.sent,t.collections=Object(c.groupBy)(n,"dir");case 4:case"end":return e.stop()}}),e)})))()}},o=n(22),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-full"},[n("ul",{staticClass:"menu flex flex-col p-4"},[t._l(t.collections,(function(e,r){return["/"!=r?n("li",{staticClass:"menu-title mt-2"},[n("span",[n("NuxtLink",{attrs:{to:r},nativeOn:{click:function(e){return t.$emit("close-menu")}}},[t._v(t._s(t._f("titleize")(r.split("/").pop())))])],1)]):t._e(),t._l(e,(function(e){return n("li",{key:e.slug},[n("NuxtLink",{attrs:{to:e},nativeOn:{click:function(e){return t.$emit("close-menu")}}},[t._v(t._s(e.title))])],1)}))]}))],2)])}),[],!1,null,null,null);e.default=component.exports}}]);