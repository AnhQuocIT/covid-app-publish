(function(t){function a(a){for(var o,n,r=a[0],l=a[1],c=a[2],u=0,v=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&v.push(i[n][0]),i[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(a);while(v.length)v.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],o=!0,r=1;r<e.length;r++){var l=e[r];0!==i[l]&&(o=!1)}o&&(s.splice(a--,1),t=n(n.s=e[0]))}return t}var o={},i={app:0},s=[];function n(a){if(o[a])return o[a].exports;var e=o[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=o,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)n.d(e,o,function(a){return t[a]}.bind(null,o));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var d=l;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"1e1e":function(t,a,e){"use strict";e("b738")},4678:function(t,a,e){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var a=s(t);return e(a)}function s(t){if(!e.o(o,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=s,t.exports=i,i.id="4678"},"4ea5":function(t){t.exports=JSON.parse('{"app":{"header":{"name":"COVID-19 Data Visualization","subtitle":"COVID-19 Application","title":"Welcome to COVID-19 Data Visualization","owner":"Nguyen Anh Quoc","description":"COVID-19 Data Visualization in 30 days","imgScr":"https://picsum.photos/1920/1080?random"}}}')},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"inspire"}},[e("Header",{attrs:{header:t.header},on:{toogle:t.onToogleMenu}}),e("Menu",{attrs:{menu:t.menu,drawer:t.drawer}}),e("v-main",[e("router-view")],1),e("LoadingMark",{staticClass:"global-loading-mark",model:{value:t.globalLoading.isLoading,callback:function(a){t.$set(t.globalLoading,"isLoading",a)},expression:"globalLoading.isLoading"}})],1)},s=[],n=(e("b0c0"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app-bar",{attrs:{app:"",color:t.header.color.mainColor,dark:"",src:t.header.img.scr},scopedSlots:t._u([{key:"img",fn:function(a){var o=a.props;return[e("v-img",t._b({attrs:{gradient:t.header.img.gradientStyle}},"v-img",o,!1))]}}])},[e("v-app-bar-nav-icon",{on:{click:t.onToogleMenu}}),e("v-toolbar-title",[t._v(t._s(t.header.title))]),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:t.onOpenDialog}},[e("v-icon",[t._v(t._s(t.header.icon.rightIcon))])],1),e("AboutDialog",{attrs:{dialog:t.isShowAboutDialog},on:{onClose:t.onCloseDialog}})],1)}),r=[],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{width:"500"},on:{keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"esc",27,a.key,["Esc","Escape"])?null:t.onClose(a)},"click:outside":t.onClose},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"headline primary lighten-2 justify-center"},[t._v(" About ")]),e("v-card-text",{staticClass:"dialog-content"},[e("h3",[t._v("Thank you for visiting my website.")]),e("h3",[t._v("This website is still in development.")]),e("h3",[t._v("Technologies used in this website:")]),e("div",[t._v("- Framework: "),e("a",{attrs:{href:"https://vuejs.org/"}},[t._v("VueJS")])]),e("div",[t._v(" - Material Design Framework: "),e("a",{attrs:{href:"https://vuetifyjs.com/en/"}},[t._v("Vuetify")])]),e("div",[t._v(" - Chart: "),e("a",{attrs:{href:"https://vue-chartjs.org/"}},[t._v("Vue-Chartjs")])]),e("h3",[t._v("Contact me: quocnguyenn0206@gmail.com")])]),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:t.onClose}},[t._v(" Close ")])],1)],1)],1)},c=[],d={props:["dialog"],methods:{onClose:function(){this.$emit("onClose")}}},u=d,v=(e("8e87"),e("2877")),f=e("6544"),g=e.n(f),h=e("8336"),p=e("b0af"),b=e("99d9"),m=e("169a"),j=e("ce7e"),C=e("2fa4"),y=Object(v["a"])(u,l,c,!1,null,"a23eecfa",null),w=y.exports;g()(y,{VBtn:h["a"],VCard:p["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VDialog:m["a"],VDivider:j["a"],VSpacer:C["a"]});var D={props:["header","drawer"],components:{AboutDialog:w},data:function(){return{isShowAboutDialog:!1}},methods:{onToogleMenu:function(){this.$emit("toogle")},onOpenDialog:function(){this.isShowAboutDialog=!0},onCloseDialog:function(){this.isShowAboutDialog=!1}}},k=D,_=e("40dc"),x=e("5bc1"),S=e("132d"),V=e("adda"),O=e("2a7f"),T=Object(v["a"])(k,n,r,!1,null,null,null),z=T.exports;g()(T,{VAppBar:_["a"],VAppBarNavIcon:x["a"],VBtn:h["a"],VIcon:S["a"],VImg:V["a"],VSpacer:C["a"],VToolbarTitle:O["a"]});var L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-navigation-drawer",{attrs:{value:t.toogleMenu,app:""}},[e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.menu.title)+" ")]),e("v-list-item-subtitle",[t._v(" Data Visualization ")])],1)],1),e("v-divider"),e("v-list",{attrs:{dense:"",nav:""}},t._l(t.menu.items,(function(a){return e("v-list-item",{key:a.title,attrs:{to:a.to,link:""}},[e("v-list-item-icon",[e("v-icon",[t._v(t._s(a.icon))])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(a.title))])],1)],1)})),1)],1)},I=[],F={props:["menu","drawer"],computed:{toogleMenu:function(){return this.drawer}}},M=F,E=e("8860"),$=e("da13"),A=e("5d23"),P=e("34c3"),R=e("f774"),N=Object(v["a"])(M,L,I,!1,null,null,null),q=N.exports;g()(N,{VDivider:j["a"],VIcon:S["a"],VList:E["a"],VListItem:$["a"],VListItemContent:A["a"],VListItemIcon:P["a"],VListItemSubtitle:A["b"],VListItemTitle:A["c"],VNavigationDrawer:R["a"]});var B=e("4ea5"),Y=B,J=(function(){}(),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"loading-mark"},[t._m(0)])}),U=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"loading-mark-cycle-1"},[e("div",{staticClass:"spring-spinner"},[e("div",{staticClass:"spring-spinner-part"},[e("div",{staticClass:"spring-spinner-rotator"})])]),e("div",{staticClass:"fingerprint-spinner"},[e("div",{staticClass:"spinner-ring"}),e("div",{staticClass:"spinner-ring"}),e("div",{staticClass:"spinner-ring"}),e("div",{staticClass:"spinner-ring"}),e("div",{staticClass:"spinner-ring"}),e("div",{staticClass:"spinner-ring"}),e("div",{staticClass:"spinner-ring"}),e("div",{staticClass:"spinner-ring"}),e("div",{staticClass:"spinner-ring"})])])}],H={props:{value:Boolean}},W=H,Q=(e("efec"),Object(v["a"])(W,J,U,!1,null,"36369588",null)),G=Q.exports,K={components:{Header:z,Menu:q,LoadingMark:G},data:function(){return{drawer:!1,header:{title:Y.app.header.name,img:{scr:Y.app.header.imgScr,gradientStyle:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"},icon:{rightIcon:"mdi-shield-star"},color:{mainColor:"#fcb69f"}},menu:{title:Y.app.header.subtitle,items:[{title:"Country List",icon:"mdi-view-dashboard",to:"/"},{title:"Favorite",icon:"mdi-star-box",to:"/favorite"}],right:null},globalLoading:{isLoading:!1}}},mounted:function(){var t=this;this.globalLoading.isLoading=!0,setTimeout((function(){t.globalLoading.isLoading=!1}),1e3)},methods:{onToogleMenu:function(){this.drawer=!this.drawer}}},X=K,Z=(e("1e1e"),e("7496")),tt=e("f6c4"),at=Object(v["a"])(X,i,s,!1,null,"01526328",null),et=at.exports;g()(at,{VApp:Z["a"],VMain:tt["a"]});var ot,it,st=e("8c4f"),nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("DataTable",{attrs:{data:t.tableData}})},rt=[],lt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.data.headers,items:t.data.items,"items-per-page":10,"item-key":"name",search:t.data.search,loading:t.data.isLoading,"loading-text":"Please wait..."},on:{"click:row":function(a){return t.showDetails(a.CountryCode)}},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-text-field",{staticClass:"mx-4",attrs:{label:"Search"},model:{value:t.data.search,callback:function(a){t.$set(t.data,"search",a)},expression:"data.search"}})]},proxy:!0},{key:"item.CountryCode",fn:function(t){var a=t.item;return[e("img",{attrs:{src:"https://www.countryflags.io/"+a.CountryCode+"/shiny/32.png"}})]}},{key:"item.Favorite",fn:function(a){var o=a.item;return[e("v-simple-checkbox",{attrs:{ripple:!1},on:{click:function(a){return t.addToFavorite(o)}},model:{value:o.isFavorite,callback:function(a){t.$set(o,"isFavorite",a)},expression:"item.isFavorite"}})]}}])}),e("DetailDialog",{attrs:{dialog:t.dialog},on:{close:t.onCloseDetailDialog}}),e("LoadingDialog",{attrs:{dialog:t.loadingDialog}})],1)},ct=[],dt=(e("159b"),e("a434"),function(){var t={key:"favorite",setToStorage:function(t){localStorage.setItem(this.key,JSON.stringify(t))},getDataFromStorage:function(){return JSON.parse(localStorage.getItem(this.key))},updateDataToStorage:function(t){var a=[];if(null!=t){this.getDataFromStorage()&&(a=this.getDataFromStorage());var e=a.indexOf(t);e>-1?a.splice(e,1):a.push(t),this.setToStorage(a)}}};return t}()),ut=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.dialog.isShowDialog?e("v-dialog",{attrs:{transition:"dialog-top-transition","max-width":"80vw","loader-height":"5"},on:{keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"esc",27,a.key,["Esc","Escape"])?null:t.onClose(a)},"click:outside":t.onClose},model:{value:t.dialog.isShowDialog,callback:function(a){t.$set(t.dialog,"isShowDialog",a)},expression:"dialog.isShowDialog"}},[e("v-card",[e("v-toolbar",{staticClass:"dialog-title",attrs:{color:"primary",dark:""}},[t._v("View detail "+t._s(t.dialog.countryData.name))]),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"pa-2"},[e("v-card",{staticClass:"pa-2"},[e("v-row",[e("v-col",{staticClass:"title"},[t._v(" Country Name: ")]),e("v-col",[t._v(" "+t._s(t.dialog.countryData.name)+" ")])],1)],1)],1),e("v-col",{staticClass:"pa-2"},[e("v-card",{staticClass:"pa-2"},[e("v-row",[e("v-col",{staticClass:"title"},[t._v(" Flag: ")]),e("v-col",[e("v-img",{attrs:{src:t.dialog.countryData.flag,"max-height":"36","max-width":"48"}})],1)],1)],1)],1)],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"pa-2"},[e("v-card",{staticClass:"pa-2"},[e("v-row",[e("v-col",{staticClass:"title"},[t._v(" Population: ")]),e("v-col",[t._v(" "+t._s(t.dialog.countryData.population.toLocaleString())+" people ")])],1)],1)],1),e("v-col",{staticClass:"pa-2"},[e("v-card",{staticClass:"pa-2"},[e("v-row",[e("v-col",{staticClass:"title"},[t._v(" Capital: ")]),e("v-col",[t._v(" "+t._s(t.dialog.countryData.capital)+" ")])],1)],1)],1)],1),e("v-row",{staticClass:"mb-2",attrs:{"no-gutters":""}},[e("v-col",{staticClass:"pa-2"},[e("v-card",{staticClass:"pa-2"},[e("v-row",[e("v-col",{staticClass:"title"},[t._v(" Region: ")]),e("v-col",[t._v(" "+t._s(t.dialog.countryData.region)+" ")])],1)],1)],1),e("v-col",{staticClass:"pa-2"},[e("v-card",{staticClass:"pa-2"},[e("v-row",[e("v-col",{staticClass:"title"},[t._v(" Sub Region: ")]),e("v-col",[t._v(" "+t._s(t.dialog.countryData.subregion)+" ")])],1)],1)],1)],1),e("v-divider"),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"sub-title"},[t._v("COVID-19 Data Visualization in "+t._s(this.dialog.chart.numberRecords)+" Days")])],1),e("v-divider"),t.dialog.chart.loaded?e("bar-chart",{attrs:{styles:t.chartStyles,data:t.dialog.chart.chartdata,options:t.dialog.chart.options}}):t._e(),e("v-divider"),e("v-card-actions",{staticClass:"justify-end"},[e("v-btn",{attrs:{text:""},on:{click:t.onClose}},[t._v("Close")])],1)],1)],1):t._e()},vt=[],ft=e("1fca"),gt={extends:ft["a"],props:{data:{type:Object,default:null},options:{type:Object,default:null}},watch:{data:function(){this._chart.destroy(),this.renderChart(this.data,this.options)}},mounted:function(){this.renderChart(this.data,this.options)}},ht=gt,pt=Object(v["a"])(ht,ot,it,!1,null,null,null),bt=pt.exports,mt={props:["dialog"],components:{BarChart:bt},data:function(){return{chart:{style:{height:300}}}},computed:{chartStyles:function(){return{height:"".concat(this.chart.style.height,"px"),position:"relative"}}},mounted:function(){},methods:{onClose:function(){this.$emit("close")}}},jt=mt,Ct=(e("6ae7"),e("62ad")),yt=e("0fd9"),wt=e("71d9"),Dt=Object(v["a"])(jt,ut,vt,!1,null,"eb0533da",null),kt=Dt.exports;g()(Dt,{VBtn:h["a"],VCard:p["a"],VCardActions:b["a"],VCol:Ct["a"],VDialog:m["a"],VDivider:j["a"],VImg:V["a"],VRow:yt["a"],VToolbar:wt["a"]});e("d3b7"),e("7db0");var _t=e("bc3a"),xt=e.n(_t),St=function(){var t={baseUrl:"https://api.covid19api.com/",getSummary:"summary",getCountry:"country/",getInfo:function(){var t=this.baseUrl+this.getSummary;return new Promise((function(a,e){xt.a.get(t).then((function(t){a(t)})).catch((function(t){e(t)}))}))},mapDataWithStorage:function(t){var a=dt.getDataFromStorage();return null==a||0==a.length||a.forEach((function(a){t.find((function(t){t.CountryCode!=a||(t.isFavorite=!0)}))})),t},getFavorite:function(){var t=[];return this.getInfo().then((function(a){var e=dt.getDataFromStorage();if(null==e||0==e.length)return t;e.forEach((function(e){a.data.Countries.find((function(a){if(a.CountryCode==e)return a.isFavorite=!0,void t.push(a)}))}))})),t},getCovidOfCountry:function(t){var a=this.baseUrl+this.getCountry+t;return new Promise((function(t,e){xt.a.get(a).then((function(a){t(a)})).catch((function(t){e(t)}))}))}};return t}(),Vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{persistent:"",width:"400",height:"300"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",{attrs:{color:"primary",dark:""}},[e("v-card-text",[t._v(" Please wait... "),e("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white","buffer-value":"300"}})],1)],1)],1)},Ot=[],Tt={props:["dialog"],watch:{dialog:function(t){t||(this.dialog=!1)}}},zt=Tt,Lt=e("8e36"),It=Object(v["a"])(zt,Vt,Ot,!1,null,null,null),Ft=It.exports;g()(It,{VCard:p["a"],VCardText:b["b"],VDialog:m["a"],VProgressLinear:Lt["a"]});var Mt=function(){var t={url:"https://restcountries.eu/rest/v2/alpha/",getCountryInfo:function(t){var a=this;return new Promise((function(e,o){xt.a.get(a.url+t).then((function(t){e(t)})).catch((function(t){o(t)}))}))}};return t}(),Et=e("c1df"),$t=e.n(Et),At={props:["data"],components:{DetailDialog:kt,LoadingDialog:Ft},data:function(){return{service:{LocalStorageService:dt,CountryService:Mt,CovidService:St},loadingDialog:!1,dialog:{isShowDialog:!1,chart:{numberRecords:30,loaded:!1,chartdata:{labels:[],datasets:[]},options:{responsive:!0,maintainAspectRatio:!1}},countryData:{}}}},methods:{showDetails:function(t){this.loadCoutryData(t),this.loadCoutryCovidInfo(t)},addToFavorite:function(t){this.service.LocalStorageService.updateDataToStorage(t.CountryCode)},onCloseDetailDialog:function(){this.dialog.isShowDialog=!1},loadCoutryData:function(t){var a=this;return this.service.CountryService.getCountryInfo(t).then((function(t){a.dialog.countryData=t.data}))},loadCoutryCovidInfo:function(t){var a=this;return this.dialog.chart.chartdata.labels=[],this.dialog.chart.chartdata.datasets=[],this.loadingDialog=!0,this.service.CovidService.getCovidOfCountry(t).then((function(t){a.prepareChartData(t.data),a.dialog.chart.loaded=!0,a.loadingDialog=!1,a.dialog.isShowDialog=!0}))},prepareChartData:function(t){var a=this,e=[],o=[],i=[],s=[];t.forEach((function(t){a.isMobileView()&&(a.dialog.chart.numberRecords=10);var n=a.formatDate(new Date((new Date).setDate((new Date).getDate()-a.dialog.chart.numberRecords))),r=a.formatDate(t.Date);r>=n&&(e.push(r),o.push(t.Confirmed),i.push(t.Deaths),s.push(t.Recovered))})),this.dialog.chart.chartdata.labels=e;var n={label:"Confirmed",backgroundColor:"#2A49BD",data:o},r={label:"Deaths",backgroundColor:"#D60D14",data:i},l={label:"Recovered",backgroundColor:"#0DD61A",data:s};this.dialog.chart.chartdata.datasets.push(n,r,l)},formatDate:function(t){return $t()(t,"YYYYMMDD").format("YYYY/MM/DD")},isMobileView:function(){var t=!1;return function(a){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55\/|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12|d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i.test(a.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t}}},Pt=At,Rt=e("a523"),Nt=e("8fea"),qt=e("9e88"),Bt=e("8654"),Yt=Object(v["a"])(Pt,lt,ct,!1,null,null,null),Jt=Yt.exports;g()(Yt,{VContainer:Rt["a"],VDataTable:Nt["a"],VSimpleCheckbox:qt["a"],VTextField:Bt["a"]});var Ut={components:{DataTable:Jt},data:function(){return{service:St,tableData:{search:"",isLoading:!1,headers:[{text:"",align:"start",sortable:!1,value:"CountryCode"},{text:"Country",sortable:!1,value:"Country"},{text:"Total Confirmed",value:"TotalConfirmed"},{text:"Total Deaths",value:"TotalDeaths"},{text:"Total Recovered",value:"TotalRecovered"},{text:"Favorite",value:"Favorite"}],items:[]}}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;return this.tableData.isLoading=!0,this.service.getInfo().then((function(a){a.data.Countries&&(t.tableData.isLoading=!1,t.tableData.items=t.service.mapDataWithStorage(a.data.Countries))}))}}},Ht=Ut,Wt=Object(v["a"])(Ht,nt,rt,!1,null,null,null),Qt=Wt.exports,Gt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("DataTable",{attrs:{data:t.tableData}})},Kt=[],Xt={components:{DataTable:Jt},data:function(){return{service:{CovidInforService:St,LocalStorageService:dt},tableData:{search:"",isLoading:!1,headers:[{text:"",align:"start",sortable:!1,value:"CountryCode"},{text:"Country",sortable:!1,value:"Country"},{text:"Total Confirmed",value:"TotalConfirmed"},{text:"Total Deaths",value:"TotalDeaths"},{text:"Total Recovered",value:"TotalRecovered"},{text:"Favorite",value:"Favorite"}],items:[]}}},watch:{"tableData.items":function(){0==this.tableData.items.length||(this.tableData.isLoading=!1)}},created:function(){this.tableData.isLoading=!0,null!=this.service.LocalStorageService.getDataFromStorage()&&0!=this.service.LocalStorageService.getDataFromStorage().length?this.tableData.items=this.service.CovidInforService.getFavorite():this.tableData.isLoading=!1},destroyed:function(){clearInterval(this.timmer)}},Zt=Xt,ta=Object(v["a"])(Zt,Gt,Kt,!1,null,null,null),aa=ta.exports;o["a"].use(st["a"]);var ea=[{path:"/",name:"Home",component:Qt},{path:"/favorite",name:"Favorite",component:aa}],oa=new st["a"]({mode:"history",base:"/",routes:ea}),ia=oa,sa=e("f309");o["a"].use(sa["a"]);var na=new sa["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:ia,vuetify:na,render:function(t){return t(et)}}).$mount("#app")},"6ae7":function(t,a,e){"use strict";e("fe1b")},"8dcb":function(t,a,e){},"8e87":function(t,a,e){"use strict";e("abc7")},abc7:function(t,a,e){},b738:function(t,a,e){},efec:function(t,a,e){"use strict";e("8dcb")},fe1b:function(t,a,e){}});
//# sourceMappingURL=app.621d9c47.js.map