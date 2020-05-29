(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+fAT":function(t,e,a){var s={"./components/ExampleComponent.vue":"AEaB","./components/MapCardComponent.vue":"Sr5G","./components/MapComponent.vue":"rlHA","./components/MapDetailsComponent.vue":"tq84","./components/MapMarkersChartComponent.vue":"vMva","./components/MyMapsComponent.vue":"4lAs","./components/RevokeConsentComponent.vue":"dS//","./components/Rss.vue":"9oGP"};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="+fAT"},"+wvE":function(t,e,a){"use strict";a.r(e);var s=a("H8ri"),n=s.c.reactiveProp;e.default={extends:s.a,mixins:[n],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},0:function(t,e,a){a("bUC5"),t.exports=a("pyCd")},"4lAs":function(t,e,a){"use strict";a.r(e);var s={data:function(){return{public_maps:[],private_maps:[],public_maps_total:0,private_maps_total:0}},mounted:function(){var t=this,e=[];Object.keys(localStorage).forEach((function(t){t.includes("map_")&&e.push(t.replace("map_",""))})),axios.get("/api/maps?orderBy=incidents_count").then((function(e){t.public_maps_total=e.data.total,t.public_maps=e.data.data})),e.length>0&&axios.get("/api/maps",{params:{ids:e,orderBy:"updated_at"}}).then((function(e){t.private_maps_total=e.data.total,t.private_maps=e.data.data}))},computed:{},watch:{},methods:{}},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Your maps")]),t._v(" "),a("p",[t._v("These are the maps that you've created on the site.")]),t._v(" "),t._l(t.private_maps,(function(t,e){return a("map-card-component",{key:t.uuid,attrs:{map:t,disable_map:e>0}})})),t._v(" "),t.private_maps.length<1?a("div",{staticClass:"alert bg-dark"},[t._v("You have no maps yet. Create your first map or browse the public ones below.")]):t._e(),t._v(" "),t.private_maps_total>15?a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"small"},[t._v(t._s(t.private_maps.length)+" / "+t._s(t.private_maps_total)+" of your maps are shown here")])]):t._e(),t._v(" "),a("hr",{staticClass:"my-4"}),t._v(" "),a("h2",{staticClass:"mt-5"},[t._v("Public maps")]),t._v(" "),a("p",[t._v("These maps are made by the community and shared with everyone.")]),t._v(" "),t._l(t.public_maps,(function(t,e){return a("map-card-component",{key:"p_map"+t.uuid,attrs:{map:t,disable_map:e>2}})})),t._v(" "),t.public_maps_total>15?a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"small"},[t._v(t._s(t.public_maps.length)+" / "+t._s(t.public_maps_total)+" public maps, and a lot more private ones")])]):t._e()],2)}),[],!1,null,null,null);e.default=i.exports},"9Wh1":function(t,e,a){"use strict";a.r(e);var s=a("Vjiq");window._=a("LvDl");try{window.Popper=a("8L3F").default,window.$=window.jQuery=a("EVdn"),a("SYky")}catch(t){}window.axios=a("vDqi"),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var n=document.head.querySelector('meta[name="csrf-token"]');n?window.axios.defaults.headers.common["X-CSRF-TOKEN"]=n.content:console.error("CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token"),window.Pusher=a("eC5B"),window.Echo=new s.a({broadcaster:"pusher",key:"14011b674484b7b9c2e8xxx",cluster:"eu",encrypted:!0})},"9oGP":function(t,e,a){"use strict";a.r(e);var s={props:["title","date","source","link"]},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"small"},[a("p",[t.title?a("a",{attrs:{target:"_BLANK",href:t.link}},[t._v(t._s(t.title)+" ")]):t._e(),t._v(" "),t.date?a("small",[t._v(" "+t._s(t.date)+"\n            "),t.source?a("span",{staticClass:"text-muted"},[t._v(" "+t._s(t.source)+" ")]):t._e()]):t._e()])])}),[],!1,null,null,null);e.default=i.exports},AEaB:function(t,e,a){"use strict";a.r(e);var s={mounted:function(){console.log("Component mounted.")}},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card card-default"},[e("div",{staticClass:"card-header"},[this._v("Example Component")]),this._v(" "),e("div",{staticClass:"card-body"},[this._v("\n                    I'm an example component.\n                ")])])])])])}],!1,null,null,null);e.default=i.exports},RnhZ:function(t,e,a){var s={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="RnhZ"},Sr5G:function(t,e,a){"use strict";a.r(e);var s={props:["map","is_minimal","disable_map"],data:function(){return{}},mounted:function(){},computed:{},watch:{},methods:{}},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card bg-dark text-white mb-5",staticStyle:{"min-height":"250px"}},[t.disable_map?t._e():a("map-component",{staticStyle:{height:"50vh"},attrs:{map_id:t.map.uuid,map_categories:t.map.categories,users_can_create_incidents:t.map.users_can_create_incidents}}),t._v(" "),t.map.categories&&!t.disable_map?a("div",{staticClass:"pl-1 pr-1 d-flex",staticStyle:{top:"49vh","z-index":"1001",overflow:"scroll",width:"100%",position:"absolute"}},t._l(t.map.categories,(function(e){return a("a",{key:e.id,staticClass:"badge badge-secondary mr-1 mb-1",attrs:{href:"#"}},[t._v(t._s(e.name))])})),0):t._e(),t._v(" "),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title mt-3"},[t._v(t._s(t.map.title?t.map.title:"Untitled map"))]),t._v(" "),t.is_minimal?t._e():a("p",{staticClass:"card-text"},[t._v(t._s(t._f("truncate")(t.map.description,250,"...")))]),t._v(" "),a("a",{staticClass:"btn btn-primary btn-block",attrs:{href:/maps/+t.map.uuid}},[t._v("Open map")])]),t._v(" "),t.is_minimal?t._e():a("div",{staticClass:"card-footer"},[a("p",{staticClass:"card-text small text-secondary"},[t._v(t._s(t.map.incidents_count)+" reports · Updated "),a("span",{staticClass:"timestamp",attrs:{datetime:t.map.updated_at}},[t._v(t._s(t.map.updated_at))])])])],1)}),[],!1,null,null,null);e.default=i.exports},UtuO:function(t,e,a){"use strict";var s=a("iuh1");a.n(s).a},bUC5:function(t,e,a){"use strict";a.r(e);var s=a("4R65");a("9Wh1"),window.timeago=a("xyvv"),window.Vue=a("XuX8"),delete s.Icon.Default.prototype._getIconUrl,s.Icon.Default.mergeOptions({iconRetinaUrl:a("WE1v"),iconUrl:a("Y5fm"),shadowUrl:a("4rkx")});var n=a("+fAT");n.keys().map((function(t){return Vue.component(t.split("/").pop().split(".")[0],n(t).default)})),Vue.component("chart-line-component",a("+wvE").default),Vue.component("chart-pie-component",a("pbe3").default),Vue.filter("truncate",(function(t,e,a){return t?t.length>e?t.substring(0,e)+a:t:"No description available"}));new Vue({el:"#app"})},dAhr:function(t,e,a){(e=t.exports=a("I1BE")(!1)).i(a("hhfp"),""),e.i(a("bKdT"),""),e.i(a("FekW"),""),e.push([t.i,"@import url(https://unpkg.com/leaflet-geosearch@2.6.0/assets/css/leaflet.css);",""]),e.push([t.i,"\n.map-notification {\n    position: fixed;\n    bottom: 1rem;\n    z-index: 1002;\n    left: 1rem;\n    right: 1rem;\n}\n.your_custom_class .multiselect__option--highlight,\n.your_custom_class .multiselect__option::after {\n    background: var(--primary);\n}\n\n",""])},"dS//":function(t,e,a){"use strict";a.r(e);var s={data:function(){return{}},mounted:function(){},computed:{hasCookie:function(){return document.cookie.match(/^(.*;)?\s*laravel_cookie_consent\s*=\s*[^;]+(.*)?$/)}},watch:{},methods:{revokeConsent:function(){document.cookie="laravel_cookie_consent=; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=/; domain=.incidents",document.cookie="laravel_cookie_consent=; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=/; domain=.cartes.io",window.location.href="/"}}},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.hasCookie?e("input",{staticClass:"btn btn-danger mb-5 mt-3",attrs:{type:"button",value:"Revoke analytics cookie consent"},on:{click:this.revokeConsent}}):this._e()])}),[],!1,null,null,null);e.default=i.exports},iuh1:function(t,e,a){var s=a("dAhr");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,n);s.locals&&(t.exports=s.locals)},pbe3:function(t,e,a){"use strict";a.r(e);var s=a("H8ri"),n=s.c.reactiveProp;e.default={extends:s.b,mixins:[n],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},pyCd:function(t,e){},rlHA:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),n=a.n(s),i=a("JpmB"),o=a("pArE"),r=a("Tith"),c=a("9g/y"),l=a("+7pQ"),u=a("Hrto"),d=a("L2ck"),m=a("yp/A"),p=a.n(m),h=a("jl8+"),v=a.n(h),f=a("xuDP"),b=a("zCu8");function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var a=[],s=!0,n=!1,i=void 0;try{for(var o,r=t[Symbol.iterator]();!(s=(o=r.next()).done)&&(a.push(o.value),!e||a.length!==e);s=!0);}catch(t){n=!0,i=t}finally{try{s||null==r.return||r.return()}finally{if(n)throw i}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}function k(t,e,a,s,n,i,o){try{var r=t[i](o),c=r.value}catch(t){return void a(t)}r.done?e(c):Promise.resolve(c).then(s,n)}!function(t){var e,a=(e=t.documentMode,"onhashchange"in t&&(void 0===e||e>7));L.Hash=function(t){this.onHashChange=L.Util.bind(this.onHashChange,this),t&&this.init(t)},L.Hash.parseHash=function(t){0===t.indexOf("#")&&(t=t.substr(1));var e=t.split("/");if(3==e.length){var a=parseInt(e[0],10),s=parseFloat(e[1]),n=parseFloat(e[2]);return!(isNaN(a)||isNaN(s)||isNaN(n))&&{center:new L.LatLng(s,n),zoom:a}}return!1},L.Hash.formatHash=function(t){var e=t.getCenter(),a=t.getZoom(),s=Math.max(0,Math.ceil(Math.log(a)/Math.LN2));return"#"+[a,e.lat.toFixed(s),e.lng.toFixed(s)].join("/")},L.Hash.prototype={map:null,lastHash:null,parseHash:L.Hash.parseHash,formatHash:L.Hash.formatHash,init:function(t){this.map=t,this.lastHash=null,this.onHashChange(),this.isListening||this.startListening()},removeFrom:function(t){this.changeTimeout&&clearTimeout(this.changeTimeout),this.isListening&&this.stopListening(),this.map=null},onMapMove:function(){if(this.movingMap||!this.map._loaded)return!1;var t=this.formatHash(this.map);this.lastHash!=t&&(location.replace(t),this.lastHash=t)},movingMap:!1,update:function(){var t=location.hash;if(t!==this.lastHash){var e=this.parseHash(t);e?(this.movingMap=!0,this.map.setView(e.center,e.zoom),this.movingMap=!1):this.onMapMove(this.map)}},changeDefer:100,changeTimeout:null,onHashChange:function(){if(!this.changeTimeout){var t=this;this.changeTimeout=setTimeout((function(){t.update(),t.changeTimeout=null}),this.changeDefer)}},isListening:!1,hashChangeInterval:null,startListening:function(){this.map.on("moveend",this.onMapMove,this),a?L.DomEvent.addListener(t,"hashchange",this.onHashChange):(clearInterval(this.hashChangeInterval),this.hashChangeInterval=setInterval(this.onHashChange,50)),this.isListening=!0},stopListening:function(){this.map.off("moveend",this.onMapMove,this),a?L.DomEvent.removeListener(t,"hashchange",this.onHashChange):clearInterval(this.hashChangeInterval),this.isListening=!1}},L.hash=function(t){return new L.Hash(t)},L.Map.prototype.addHash=function(){this._hash=L.hash(this)},L.Map.prototype.removeHash=function(){this._hash.removeFrom()}}(window);var C=new f.OpenStreetMapProvider,j={props:["map_id","map_token","users_can_create_incidents","map_categories"],components:{LMap:i.a,LTileLayer:o.a,LMarker:r.a,LPopup:c.a,"l-locatecontrol":d.a,LIcon:l.a,"l-marker-cluster":p.a,LLayerGroup:u.a,Multiselect:v.a,"v-geosearch":b.a},data:function(){return{center:L.latLng(43.704,7.3111),url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",attribution:'&copy; <a href="https://cartes.io">Cartes.io</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",incidents:[],categories:this.map_categories?this.map_categories:[],new_message:"",fullCategory:{id:null,name:""},query:"",open_incident:null,markerResults:{},submit_data:{lat:0,lng:0,category:0,category_name:"",loading:!1,map_token:this.map_token},geosearchOptions:{provider:C,style:"button",autoClose:!0,showPopup:!0,showMarker:!1,keepResult:!0,marker:{draggable:!1}}}},mounted:function(){var t=this;new L.Hash(this.$refs.map.mapObject),this.$refs.map.mapObject.setMaxBounds([[-90,-1/0],[90,1/0]]),localStorage.getItem("map_"+this.map_id)&&!this.submit_data.map_token?this.submit_data.map_token=localStorage.getItem("map_"+this.map_id):this.submit_data.token&&(localStorage["map_"+this.map_id]=this.submit_data.map_token),this.getIncidents(),Echo.channel("maps."+this.map_id).listen("IncidentCreated",(function(e){t.incidents.push(e.incident),t.new_message=""+e.incident.category.name,setTimeout(function(){this.new_message=""}.bind(t),5e3)}))},computed:{incidentsCount:function(){return this.incidents.length},canPost:function(){return this.submit_data.map_token?"yes":this.users_can_create_incidents},activeIncidents:function(){return this.incidents.filter((function(t){return null==t.expires_at||Date()<=Date(Date.parse(t.expires_at.replace(/-/g,"/")))}))}},watch:{incidentsCount:function(t){}},created:function(){this.debouncedGetCategories=_.debounce(this.getCategories,250),this.debouncedRenderTimeago=_.debounce(this.renderTimeago,50)},methods:{addMarker:function(t){this.$refs.hello_popup.mapObject.openPopup(t.latlng),this.submit_data.category||$(".multiselect").focus(),this.submit_data.lat=t.latlng.lat,this.submit_data.lng=t.latlng.lng},handleOpenedPopup:function(t,e){var a,s=this;return(a=n.a.mark((function a(){var i;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s.open_incident=s.incidents.findIndex((function(t){return t.id===e})),!s.incidents[s.open_incident]||!s.incidents[s.open_incident].marker){a.next=4;break}a.next=9;break;case 4:return Vue.set(s.incidents[s.open_incident],"marker",{label:"One sec, we're fetching the address..."}),a.next=7,C.search({query:t.latlng.lat+" "+t.latlng.lng});case 7:i=a.sent,Vue.set(s.incidents[s.open_incident],"marker",i[0]);case 9:case"end":return a.stop()}}),a)})),function(){var t=this,e=arguments;return new Promise((function(s,n){var i=a.apply(t,e);function o(t){k(i,s,n,o,r,"next",t)}function r(t){k(i,s,n,o,r,"throw",t)}o(void 0)}))})()},openPopup:function(t){this.debouncedRenderTimeago()},renderTimeago:function(){timeago.render(document.querySelectorAll(".timestamp"))},addTag:function(t){var e={category_id:-1,name:t,icon:"/images/marker-01.svg"};this.categories.push(e),this.fullCategory=e,this.submit_data.category=e.category_id,this.submit_data.category_name=e.name,this.submitForm()},handleSelectInput:function(t){this.submit_data.category=t.id,this.submit_data.category_name=t.name,this.submitForm()},inLocalStorageKey:function(t){return!!localStorage["post_"+t]},asyncFind:function(t){if(t.length<3)return!1;this.submit_data.loading=!0,this.query=t,this.debouncedGetCategories()},getIncidents:function(){var t=this;axios.get("/api/maps/"+this.map_id+"/incidents").then((function(e){return t.incidents=e.data}))},getCategories:function(t){var e=this;axios.get("/api/categories?query="+this.query).then((function(t){e.categories=t.data,e.submit_data.loading=!1}))},deleteIncident:function(t){var e=this;this.submit_data.loading=!0,axios.delete("/api/maps/"+this.map_id+"/incidents/"+t,{data:{token:localStorage["post_"+t]}}).then((function(a){e.incidents=e.incidents.filter((function(e){return e.id!==t})),localStorage.removeItem("post_"+t),e.submit_data.loading=!1}))},submitForm:function(){var t=this;this.submit_data.loading=!0,axios.post("/api/maps/"+this.map_id+"/incidents",this.submit_data).then((function(e){t.$refs.hello_popup.mapObject.closePopup(),t.submit_data.loading=!1,t.incidents.push(e.data),localStorage["post_"+e.data.id]=e.data.token,dataLayer.push({event:"marker-create"})})).catch((function(e){if(t.submit_data.loading=!1,console.log(e.response),e.response.data.errors)var a=Object.entries(e.response.data.errors).map((function(t,e){var a=g(t,2),s=a[0],n=a[1];return"".concat(s,": ").concat(n[0]," | ")})).join("\n");else a=e.response.data.message;alert(a)}))}}},w=(a("UtuO"),a("KHd+")),x=Object(w.a)(j,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("l-map",{ref:"map",staticStyle:{width:"100%",height:"100%"},attrs:{zoom:2,center:t.center,maxBoundsViscosity:1,worldCopyJump:!0},on:{contextmenu:t.addMarker}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._v(" "),a("l-locatecontrol"),t._v(" "),a("v-geosearch",{attrs:{options:t.geosearchOptions}}),t._v(" "),a("l-layer-group",{ref:"hello_popup"},[a("l-popup",["yes"==t.canPost?a("form",{attrs:{method:"POST",action:"/incidents",disabled:!t.submit_data.category_name},on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[a("label",{staticClass:"my-1 mr-2"},[t._v("Marker label:")]),t._v(" "),a("multiselect",{staticClass:"your_custom_class",staticStyle:{width:"250px"},attrs:{"track-by":"name",label:"name",placeholder:"Your marker label","tag-placeholder":"Add this as new label",options:t.categories,searchable:!0,"allow-empty":!1,taggable:!0,"show-labels":!1,loading:t.submit_data.loading,"internal-search":!1,"clear-on-select":!1,"options-limit":300,limit:3,"max-height":600,"show-no-results":!1,"preserve-search":!0,required:""},on:{input:t.handleSelectInput,tag:t.addTag,"search-change":t.asyncFind},scopedSlots:t._u([{key:"limit",fn:function(e){e.option;return[t._v("Keep typing to refine your search")]}},{key:"singleLabel",fn:function(e){var s=e.option;return[a("strong",[t._v(t._s(s.name))])]}},{key:"option",fn:function(e){return[e.option.icon?a("img",{staticClass:"rounded img-thumbnail mr-1",staticStyle:{position:"initial"},attrs:{height:"25",width:"25",src:e.option.icon,alt:""}}):t._e(),t._v(t._s(e.option.name)+"\n                        ")]}}],null,!1,1055531020),model:{value:t.fullCategory,callback:function(e){t.fullCategory=e},expression:"fullCategory"}},[t._v(" "),a("template",{slot:"noOptions"},[t._v("Search for or add a new label")])],2),t._v(" "),a("input",{staticClass:"btn btn-primary btn-sm my-1",attrs:{type:"submit",value:"Add marker",disabled:t.submit_data.loading||!t.submit_data.category_name}})],1):"only_logged_in"==t.canPost?a("div",[t._v("You must be logged in to Cartes.io to post on this map.")]):a("div",[t._v("You can't create markers on this map.")])])],1),t._v(" "),a("l-marker-cluster",t._l(t.activeIncidents,(function(e){return a("l-marker",{key:e.id+"marker",attrs:{"lat-lng":e.location.coordinates},on:{click:function(a){return t.handleOpenedPopup(a,e.id)}}},[a("l-icon",{attrs:{"icon-url":e.category.icon,"icon-size":[30,30],"icon-anchor":[15,25]}}),t._v(" "),a("l-popup",{on:{ready:t.openPopup}},[a("p",{staticClass:"mb-1",staticStyle:{"min-width":"200px"}},[a("b",[t._v(t._s(e.category.name))])]),t._v(" "),e.marker?a("p",{staticClass:"mt-0 mb-1"},[t._v(t._s(e.marker.label))]):t._e(),t._v(" "),a("small",{staticClass:"w-100 d-block"},[t._v("Last report: "),a("span",{staticClass:"timestamp",attrs:{datetime:e.updated_at}},[t._v(t._s(e.updated_at))]),t._v(".")]),t._v(" "),t.inLocalStorageKey(e.id)?a("a",{staticClass:"btn btn-link btn-sm text-danger",attrs:{disabled:t.submit_data.loading},on:{click:function(a){return t.deleteIncident(e.id)}}},[t._v("Delete")]):t._e()])],1)})),1)],1),t._v(" "),t.new_message?a("div",{staticClass:"alert bg-primary map-notification",attrs:{role:"alert"}},[a("h4",{staticClass:"alert-heading"},[t._v("A new marker was created")]),t._v(" "),a("p",{staticClass:"mb-0"},[t._v(t._s(t.new_message))])]):t._e()],1)}),[],!1,null,null,null);e.default=x.exports},tq84:function(t,e,a){"use strict";a.r(e);var s=a("fWYB"),n=a("+QRC"),i=a.n(n),o={props:["map_id","map_token","map"],components:{NavigatorShare:s.a},data:function(){return{submit_data:{title:this.map.title,description:this.map.description,token:this.map_token,privacy:this.map.privacy,users_can_create_incidents:this.map.users_can_create_incidents,loading:!1,options:{default_expiration_time:this.map.options&&this.map.options.default_expiration_time?this.map.options.default_expiration_time:null}}}},mounted:function(){localStorage["map_"+this.map_id]&&!this.submit_data.token?this.submit_data.token=localStorage["map_"+this.map_id]:this.submit_data.token&&(localStorage["map_"+this.map_id]=this.submit_data.token)},computed:{map_url:function(){return window.location.href},canEdit:function(){return!!this.submit_data.token}},watch:{title:function(t,e){this.submit_data.title="Waiting for you to stop typing...",this.debouncedGetAnswer()}},created:function(){this.debouncedGetAnswer=_.debounce(this.submitForm,750)},methods:{onShareError:function(t){i()(this.map_url,{message:"Press #{key} to copy",onCopy:alert("Link copied")})},handleSelectInput:function(t,e){"privacy"==e||"users_can_create_incidents"==e?this.submit_data[e]=t.target.value:"options.default_expiration_time"==e?this.submit_data.options.default_expiration_time=t.target.value:this.submit_data[e]=t.target.innerText,this.debouncedGetAnswer()},checkForLocalStorageKey:function(t){return!!localStorage["map_"+t]},submitForm:function(t){var e=this;this.submit_data.loading=!0,axios.put("/api/maps/"+this.map_id,this.submit_data).then((function(t){e.submit_data.loading=!1})).catch((function(t){e.submit_data.loading=!1,console.log(t),alert(t.message)}))},deleteMap:function(t){var e=this;confirm("You'll never see this map again. Are you sure?")&&(this.submit_data.loading=!0,axios.delete("/api/maps/"+this.map_id,{data:{token:this.submit_data.token}}).then((function(t){localStorage.removeItem("map_"+e.map_id),alert("This map has gone with the wind!"),window.location.href="/",e.submit_data.loading=!1})).catch((function(t){e.submit_data.loading=!1,alert(t.message)})))}}},r=a("KHd+"),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-7"},[t.map&&t.map.title||!t.canEdit?t.submit_data.title?a("h1",{attrs:{contenteditable:t.canEdit},on:{input:function(e){return t.handleSelectInput(e,"title")}}},[t._v(t._s(t.map.title))]):a("h1",[t._v("Untitled map")]):a("h1",{attrs:{contenteditable:t.canEdit},on:{input:function(e){return t.handleSelectInput(e,"title")}}},[t._v("Here's your new map!"),t.canEdit?a("small",{staticClass:"text-muted"},[t._v(" (Click to edit the title)")]):t._e()]),t._v(" "),t.map&&t.map.description||!t.canEdit?t.map&&t.map.description?a("p",{attrs:{contenteditable:t.canEdit},on:{input:function(e){return t.handleSelectInput(e,"description")}}},[t._v(t._s(t.map.description))]):a("p",[t._v("This map has no description.")]):a("p",{attrs:{contenteditable:t.canEdit},on:{input:function(e){return t.handleSelectInput(e,"description")}}},[t._v("Right click (or long-tap on mobile) on the map to add markers. Click here to edit the map description.")])]),t._v(" "),a("div",{staticClass:"col-md-5 mt-5 mt-md-0"},[a("navigator-share",{staticClass:"mb-3",attrs:{"on-error":t.onShareError,url:t.map_url,title:t.submit_data.title?t.submit_data.title:"Untitled map",text:t.submit_data.description?t.submit_data.description:"Here's my map"}},[a("a",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{slot:"clickable"},slot:"clickable"},[t._v("Share this map")])]),t._v(" "),t.canEdit?a("div",{staticClass:"card bg-dark text-white mb-3"},[a("div",{staticClass:"card-header"},[t._v("Map settings")]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-12 col-form-label",attrs:{for:"password-confirm"}},[t._v("Who can see this map")]),t._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"privacy",id:"exampleRadios1",value:"public"},domProps:{checked:"public"==t.submit_data.privacy},on:{input:function(e){return t.handleSelectInput(e,"privacy")}}}),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"privacy",id:"exampleRadios2",value:"unlisted"},domProps:{checked:"unlisted"==t.submit_data.privacy},on:{input:function(e){return t.handleSelectInput(e,"privacy")}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios2"}},[t._v("\n                                Only people with a link\n                            ")])]),t._v(" "),a("div",{staticClass:"form-check disabled"},[a("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"privacy",id:"exampleRadios3",value:"private",disabled:""},on:{input:function(e){return t.handleSelectInput(e,"privacy")}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios3"}},[t._v("\n                                No one\n                            ")])])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-12 col-form-label",attrs:{for:"users_can_create_incidents"}},[t._v("Who can create markers")]),t._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"users_can_create_incidents",id:"exampleRadios4",value:"yes"},domProps:{checked:"yes"==t.submit_data.users_can_create_incidents},on:{input:function(e){return t.handleSelectInput(e,"users_can_create_incidents")}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios4"}},[t._v("\n                                Anyone\n                            ")])]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"users_can_create_incidents",id:"exampleRadios5",value:"only_logged_in"},domProps:{checked:"only_logged_in"==t.submit_data.users_can_create_incidents},on:{input:function(e){return t.handleSelectInput(e,"users_can_create_incidents")}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios5"}},[t._v("\n                                Only people that are logged in\n                            ")])]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"users_can_create_incidents",id:"exampleRadios6",value:"no"},domProps:{checked:"no"==t.submit_data.users_can_create_incidents},on:{input:function(e){return t.handleSelectInput(e,"users_can_create_incidents")}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios6"}},[t._v("\n                                No one\n                            ")])]),t._v(" "),t.canEdit?a("small",[t._v("You can add markers to your own map regardless of this setting")]):t._e()])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-12 col-form-label",attrs:{for:"password-confirm"}},[t._v("When should new markers dissapear from the map")]),t._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"options.default_expiration_time",id:"cdet1",value:"4320"},domProps:{checked:4320==t.submit_data.options.default_expiration_time},on:{input:function(e){return t.handleSelectInput(e,"options.default_expiration_time")}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"cdet1"}},[t._v("\n                                after 3 days\n                            ")])]),t._v(" "),a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"options.default_expiration_time",id:"cdet2",value:"180"},domProps:{checked:180==t.submit_data.options.default_expiration_time},on:{input:function(e){return t.handleSelectInput(e,"options.default_expiration_time")}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"cdet2"}},[t._v("\n                                after 3 hours\n                            ")])]),t._v(" "),a("div",{staticClass:"form-check disabled"},[a("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"options.default_expiration_time",id:"cdet3"},domProps:{value:null,checked:null==t.submit_data.options.default_expiration_time},on:{input:function(e){return t.handleSelectInput(e,"options.default_expiration_time")}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"cdet3"}},[t._v("\n                                Never\n                            ")])])])])])]):t._e(),t._v(" "),a("p",{staticClass:"small"},[t._v("Right click (or long-tap on mobile) on the map to create a marker. You can choose one of the existing labels or create your own.")]),t._v(" "),t.submit_data.options.default_expiration_time?a("p",{staticClass:"small mb-3"},[t._v(t._s(t.submit_data.options.default_expiration_time/60)+" hours after creating a marker it will automatically dissapear from the map.")]):t._e(),t._v(" "),a("h2",{staticClass:"mt-5"},[t._v("Map stats")]),t._v(" "),a("map-markers-chart-component",{attrs:{map_id:t.map.uuid}}),t._v(" "),t.map.categories?a("div",{staticClass:"d-flex mt-3",staticStyle:{"flex-wrap":"wrap"}},t._l(t.map.categories,(function(e){return a("a",{key:e.id,staticClass:"badge badge-secondary mr-1 mb-1",attrs:{href:"#"}},[t._v(t._s(e.name))])})),0):t._e(),t._v(" "),t.canEdit?a("a",{staticClass:"btn btn-danger mt-3",attrs:{disabled:t.submit_data.loading},on:{click:t.deleteMap}},[t._v("Delete map")]):t._e(),t._v(" "),a("details",{staticClass:"mt-3 mb-3 small"},[t._m(1),t._v(" "),a("div",[a("p",[t._v("Use standard API requests to get data from this map. No authentication required for public and unlisted maps.")]),t._v(" "),a("div",{staticClass:"mb-3"},[t._m(2),t._v(" "),a("code",[t._v("/api/maps/"+t._s(t.map.uuid))])]),t._v(" "),a("div",{staticClass:"mb-3"},[t._m(3),t._v(" "),a("code",[t._v("/api/maps/"+t._s(t.map.uuid)+"/incidents")])]),t._v(" "),a("div",{staticClass:"mb-3"},[a("p",{staticClass:"mb-0"},[t._v("Embed this map on your website")]),t._v(" "),a("code",[t._v('<iframe src="https://cartes.io/embeds/maps/'+t._s(t.map.uuid)+'?type=map" width="100%" height="400" frameborder="0"></iframe>')])]),t._v(" "),a("p",[t._v("When using the API or embedding the map, you must attribute this website on your front-end.")])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios1"}},[this._v("\n                                Everyone "),e("small",[this._v("(make this map public)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("summary",[e("dt",{staticClass:"d-inline text-muted"},[this._v("Developer info")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mb-0"},[this._v("API "),e("code",[this._v("GET")]),this._v(" map endpoint")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mb-0"},[this._v("API "),e("code",[this._v("GET")]),this._v(" markers endpoint")])}],!1,null,null,null);e.default=c.exports},vMva:function(t,e,a){"use strict";a.r(e);var s={props:["map_id"],data:function(){return{datacollection:{},timedatacollection:{},markers:[]}},mounted:function(){this.getMarkers()},computed:{},watch:{},methods:{groupBy:function(t,e){var a=new Map;return t.forEach((function(t){var s=e(t),n=a.get(s);n?n.push(t):a.set(s,[t])})),a},fillData:function(){var t=this.markers,e=this.groupBy(t,(function(t){return t.created_at.slice(0,-6)})),a=Array.from(e).map((function(t){return t[1].length})),s=Array.from(e).map((function(t){return t[0]+":00"}));this.timedatacollection={labels:s,datasets:[{label:"Markers",borderColor:"#1C77C3",data:a}]};var n=this.groupBy(t,(function(t){return t.category.name})),i=Array.from(n).map((function(t){return t[1].length})),o=Array.from(n).map((function(t){return t[0]}));this.datacollection={labels:o,datasets:[{label:"New markers",borderColor:"#1C77C3",data:i}]}},getMarkers:function(){var t=this;axios.get("/api/maps/"+this.map_id+"/incidents?show_expired=true").then((function(e){t.markers=e.data,t.fillData()}))}}},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",[this._v("Marker type distribution")]),this._v(" "),e("chart-pie-component",{staticClass:"mt-5 mb-5",staticStyle:{width:"100%"},attrs:{"chart-data":this.datacollection,height:225}}),this._v(" "),e("h3",[this._v("New markers by date")]),this._v(" "),e("chart-line-component",{staticClass:"mt-5 mb-5",staticStyle:{width:"100%"},attrs:{"chart-data":this.timedatacollection,options:{scales:{xAxes:[{type:"time",distribution:"linear"}]}},height:225}})],1)}),[],!1,null,null,null);e.default=i.exports}},[[0,1,2]]]);
//# sourceMappingURL=app.js.map