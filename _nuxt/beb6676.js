(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{331:function(t,e,r){var content=r(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("ca08b364",content,!0,{sourceMap:!1})},334:function(t,e,r){"use strict";r(331)},335:function(t,e,r){var n=r(16)(!1);n.push([t.i,".slider-wrapper[data-v-6933ec4c]{display:flex;justify-content:center;margin-bottom:50px}.slider[data-v-6933ec4c]{position:relative;width:640px;height:450px;font-family:\"RotondaC\",sans-serif;font-style:normal}.slider-list[data-v-6933ec4c]{position:relative;margin:0;padding:0;list-style:none}.slide[data-v-6933ec4c],.slider-list[data-v-6933ec4c]{width:100%;height:100%}.slide[data-v-6933ec4c]{display:flex;justify-content:center;align-items:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);box-sizing:border-box;opacity:0;background-color:#fff;padding:40px;transition:opacity,1s;box-shadow:0 0 40px rgba(0,0,0,.1);border-radius:10px}.active[data-v-6933ec4c]{opacity:1}.big[data-v-6933ec4c]{position:fixed;display:flex;justify-content:center;align-items:center;top:64px;bottom:0;left:0;right:0;transform:none;transition:none;background-color:rgba(0,0,0,.5)}.img[data-v-6933ec4c]{display:block;width:100%;height:auto}.arrow[data-v-6933ec4c]{position:absolute;top:50%;width:20px;height:40px;transform:translateY(-50%);cursor:pointer}.arrow[data-v-6933ec4c]:before{content:\"\";position:absolute;top:0;bottom:0;left:0;right:0;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='44' fill='none'%3E%3Cpath d='M2 2l20 20L2 42' stroke='%23D0D5CD' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:50%;background-size:contain}.arrow-left[data-v-6933ec4c]{right:calc(100% + 30px)}.arrow-left[data-v-6933ec4c]:before{transform:rotate(-180deg)}.arrow-right[data-v-6933ec4c]{left:calc(100% + 30px)}@media (max-width:1024px){.slider[data-v-6933ec4c]{width:280px;height:350px;padding-bottom:62px}.slide[data-v-6933ec4c]{padding:20px}.arrow[data-v-6933ec4c]{top:auto;bottom:0;transform:none;width:14px;height:28px}.arrow-left[data-v-6933ec4c]{right:auto;left:calc(50% - 44px)}.arrow-right[data-v-6933ec4c]{right:calc(50% - 44px);left:auto}}",""]),t.exports=n},337:function(t,e,r){"use strict";r.r(e);r(10),r(5),r(12),r(13);var n=r(2),o=r(24),c=(r(133),r(42),r(52),r(9),r(7),r(80),r(101));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(r=t.store).getters["news/getNews"].length){e.next=4;break}return e.next=4,r.dispatch("news/requestNews");case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{activeSlide:0,bigSlide:null}},computed:d(d({},Object(c.b)({news:["news/getNews"]})),{},{_new:function(){var t=this;return this.news.find((function(e){return+e.id==+t.$route.params.id}))},imgArray:function(){var t=[];return this._new.enclosure&&(this._new.enclosure.hasOwnProperty("@type")?this._new.enclosure["@type"].includes("image")&&(t=[this._new.enclosure]):t=this._new.enclosure.filter((function(t){return t["@type"].includes("image")}))),t.forEach((function(img){img.isActive=!1,img.isBig=!1})),t[this.activeSlide].isActive=!0,null!==this.bigSlide&&(t[this.bigSlide].isBig=!0),t}}),methods:{changeSlide:function(t){"next"===t&&(this.activeSlide===this.imgArray.length-1?this.activeSlide=0:this.activeSlide++),"prev"===t&&(0===this.activeSlide?this.activeSlide=this.imgArray.length-1:this.activeSlide--)},q:function(t){console.log(t)}}},h=(r(334),r(70)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("nuxt-link",{attrs:{to:"/news"}},[t._v("\n\t\tНазад к списку новостей\n\t")]),t._v(" "),r("h1",[t._v(t._s(t._new.title["#cdata"]))]),t._v(" "),r("p",[t._v(t._s(new Date(t._new.pubDate).toLocaleDateString()))]),t._v(" "),t._new.author?r("p",[t._v("Автор: "+t._s(t._new.author))]):t._e(),t._v(" "),r("p",[t._v(t._s(t._new.description["#cdata"]))]),t._v(" "),t._new.enclosure?r("div",[r("div",{staticClass:"slider-wrapper"},[r("div",{staticClass:"slider"},[r("ul",{staticClass:"slider-list"},t._l(t.imgArray,(function(e,n){return r("li",{key:n,staticClass:"slide",class:{active:e.isActive,big:e.isBig}},[r("img",{staticClass:"img",attrs:{src:e["@url"]},on:{click:function(e){null===t.bigSlide?t.bigSlide=t.activeSlide:t.bigSlide=null}}})])})),0),t._v(" "),t.imgArray.length>1?r("div",{staticClass:"arrow arrow-left",on:{click:function(e){return t.changeSlide("prev")}}}):t._e(),t._v(" "),t.imgArray.length>1?r("div",{staticClass:"arrow arrow-right",on:{click:function(e){return t.changeSlide("next")}}}):t._e()])])]):t._e(),t._v(" "),r("a",{attrs:{href:""+t._new.link,target:"_blank"}},[t._v("Ссылка на оригинальную новость на сайте РБК.")])],1)}),[],!1,null,"6933ec4c",null);e.default=component.exports}}]);