(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+fAT":function(t,a,e){var n={"./components/ExampleComponent.vue":"AEaB","./components/MapComponent.vue":"rlHA","./components/MapDetailsComponent.vue":"tq84","./components/MyMapsComponent.vue":"4lAs","./components/Rss.vue":"9oGP"};function i(t){var a=s(t);return e(a)}function s(t){if(!e.o(n,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id="+fAT"},0:function(t,a,e){e("bUC5"),t.exports=e("pyCd")},"4lAs":function(t,a,e){"use strict";e.r(a);var n={data:function(){return{zoom:4,public_maps:[],private_maps:[],submit_data:{lat:0,lng:0,category:0,category_name:"",loading:!1}}},mounted:function(){var t=this;localStorage["map_"+this.map_id]&&(this.token=localStorage["map_"+this.map_id]);var a=[];Object.keys(localStorage).forEach((function(t){t.includes("map_")&&a.push(t.replace("map_",""))})),console.log(a),axios.get("/api/maps").then((function(a){return t.public_maps=a.data})),a.length>0&&axios.get("/api/maps",{params:{ids:a}}).then((function(a){return t.private_maps=a.data}))},computed:{canEdit:function(){return this.token.length>0}},watch:{title:function(t,a){this.title="Waiting for you to stop typing..."}},created:function(){},methods:{handleSelectInput:function(t){this.submit_data.fullCategory=t,this.submit_data.category=t.id,this.submit_data.category_name=t.name},checkForLocalStorageKey:function(t){return!!localStorage["map_"+t]},submitForm:function(t){var a=this;this.submit_data.loading=!0,axios.post("/api/incidents",this.submit_data).then((function(t){a.$refs.hello_popup.mapObject.closePopup(),a.submit_data.loading=!1,localStorage["post_"+t.data.id]=t.data.id})).catch((function(t){a.submit_data.loading=!1,console.log(t),alert(t.message)}))}}},i=e("KHd+"),s=Object(i.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h2",[t._v("Your maps")]),t._v(" "),e("p",[t._v("These are the maps that you've created on the site.")]),t._v(" "),t._l(t.private_maps,(function(a){return e("div",{key:a.id,staticClass:"card bg-dark text-white mb-3"},[e("map-component",{staticStyle:{height:"250px"},attrs:{map_id:a.uuid}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(a.title?a.title:"Untitled map"))]),t._v(" "),e("p",{staticClass:"card-text"},[t._v(t._s(t._f("truncate")(a.description,250,"...")))]),t._v(" "),e("p",{staticClass:"card-text small"},[t._v(t._s(a.incidents_count)+" reports · Created "),e("span",{staticClass:"timestamp",attrs:{datetime:a.created_at}},[t._v(t._s(a.created_at))])]),t._v(" "),e("a",{staticClass:"btn btn-primary",attrs:{href:/maps/+a.uuid}},[t._v("See map")])])],1)})),t._v(" "),t.private_maps.length<1?e("div",[t._v("You have no maps yet")]):t._e(),t._v(" "),e("hr",{staticClass:"my-4"}),t._v(" "),e("h2",{staticClass:"mt-5"},[t._v("Public maps")]),t._v(" "),e("p",[t._v("These maps are made by the community, and public.")]),t._v(" "),t._l(t.public_maps,(function(a){return e("div",{key:a.id,staticClass:"card bg-dark text-white mb-3"},[e("map-component",{staticStyle:{height:"250px"},attrs:{map_id:a.uuid}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(a.title?a.title:"Untitled map"))]),t._v(" "),e("p",{staticClass:"card-text"},[t._v(t._s(t._f("truncate")(a.description,250,"...")))]),t._v(" "),e("p",{staticClass:"card-text small"},[t._v(t._s(a.incidents_count)+" reports")]),t._v(" "),e("a",{staticClass:"btn btn-primary",attrs:{href:/maps/+a.uuid}},[t._v("See map")])])],1)}))],2)}),[],!1,null,"014eadd2",null);a.default=s.exports},"9Wh1":function(t,a,e){"use strict";e.r(a);var n=e("Vjiq");window._=e("LvDl");try{window.Popper=e("8L3F").default,window.$=window.jQuery=e("EVdn"),e("SYky")}catch(t){}window.axios=e("vDqi"),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var i=document.head.querySelector('meta[name="csrf-token"]');i?window.axios.defaults.headers.common["X-CSRF-TOKEN"]=i.content:console.error("CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token"),window.Pusher=e("eC5B"),window.Echo=new n.a({broadcaster:"pusher",key:"14011b674484b7b9c2e8",cluster:"eu",encrypted:!0})},"9oGP":function(t,a,e){"use strict";e.r(a);var n={props:["title","date","source","link"]},i=e("KHd+"),s=Object(i.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"small"},[e("p",[t.title?e("a",{attrs:{target:"_BLANK",href:t.link}},[t._v(t._s(t.title)+" ")]):t._e(),t._v(" "),t.date?e("small",[t._v(" "+t._s(t.date)+"\n            "),t.source?e("span",{staticClass:"text-muted"},[t._v(" "+t._s(t.source)+" ")]):t._e()]):t._e()])])}),[],!1,null,null,null);a.default=s.exports},AEaB:function(t,a,e){"use strict";e.r(a);var n={mounted:function(){console.log("Component mounted.")}},i=e("KHd+"),s=Object(i.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card card-default"},[a("div",{staticClass:"card-header"},[this._v("Example Component")]),this._v(" "),a("div",{staticClass:"card-body"},[this._v("\n                    I'm an example component.\n                ")])])])])])}],!1,null,null,null);a.default=s.exports},E4uI:function(t,a,e){"use strict";var n=e("vE9f");e.n(n).a},KNNm:function(t,a,e){(a=t.exports=e("I1BE")(!1)).i(e("hhfp"),""),a.i(e("bKdT"),""),a.i(e("FekW"),""),a.push([t.i,"\n.map-notification[data-v-0bb9ed83] {\n   position: fixed;\n   bottom: 1rem;\n   z-index: 1002;\n   left: 1rem;\n   right: 1rem;\n}\n.your_custom_class[data-v-0bb9ed83] .multiselect__option--highlight, .your_custom_class[data-v-0bb9ed83] .multiselect__option::after {\n     background: var(--primary);\n}\n",""])},bUC5:function(t,a,e){"use strict";e.r(a);var n=e("4R65");e("9Wh1"),window.timeago=e("xyvv"),window.Vue=e("XuX8"),delete n.Icon.Default.prototype._getIconUrl,n.Icon.Default.mergeOptions({iconRetinaUrl:e("WE1v"),iconUrl:e("Y5fm"),shadowUrl:e("4rkx")});var i=e("+fAT");i.keys().map((function(t){return Vue.component(t.split("/").pop().split(".")[0],i(t).default)})),Vue.filter("truncate",(function(t,a,e){return t?t.length>a?t.substring(0,a)+e:t:"No description available"}));new Vue({el:"#app"})},pyCd:function(t,a){},rlHA:function(t,a,e){"use strict";e.r(a);var n=e("JpmB"),i=e("pArE"),s=e("Tith"),o=e("9g/y"),r=e("+7pQ"),c=e("Hrto"),l=e("L2ck"),u=e("yp/A"),d=e.n(u),p=e("jl8+"),m=e.n(p);function h(t,a){return function(t){if(Array.isArray(t))return t}(t)||function(t,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],n=!0,i=!1,s=void 0;try{for(var o,r=t[Symbol.iterator]();!(n=(o=r.next()).done)&&(e.push(o.value),!a||e.length!==a);n=!0);}catch(t){i=!0,s=t}finally{try{n||null==r.return||r.return()}finally{if(i)throw s}}return e}(t,a)||function(t,a){if(!t)return;if("string"==typeof t)return _(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return _(t,a)}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,a){(null==a||a>t.length)&&(a=t.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=t[e];return n}!function(t){var a,e=(a=t.documentMode,"onhashchange"in t&&(void 0===a||a>7));L.Hash=function(t){this.onHashChange=L.Util.bind(this.onHashChange,this),t&&this.init(t)},L.Hash.parseHash=function(t){0===t.indexOf("#")&&(t=t.substr(1));var a=t.split("/");if(3==a.length){var e=parseInt(a[0],10),n=parseFloat(a[1]),i=parseFloat(a[2]);return!(isNaN(e)||isNaN(n)||isNaN(i))&&{center:new L.LatLng(n,i),zoom:e}}return!1},L.Hash.formatHash=function(t){var a=t.getCenter(),e=t.getZoom(),n=Math.max(0,Math.ceil(Math.log(e)/Math.LN2));return"#"+[e,a.lat.toFixed(n),a.lng.toFixed(n)].join("/")},L.Hash.prototype={map:null,lastHash:null,parseHash:L.Hash.parseHash,formatHash:L.Hash.formatHash,init:function(t){this.map=t,this.lastHash=null,this.onHashChange(),this.isListening||this.startListening()},removeFrom:function(t){this.changeTimeout&&clearTimeout(this.changeTimeout),this.isListening&&this.stopListening(),this.map=null},onMapMove:function(){if(this.movingMap||!this.map._loaded)return!1;var t=this.formatHash(this.map);this.lastHash!=t&&(location.replace(t),this.lastHash=t)},movingMap:!1,update:function(){var t=location.hash;if(t!==this.lastHash){var a=this.parseHash(t);a?(this.movingMap=!0,this.map.setView(a.center,a.zoom),this.movingMap=!1):this.onMapMove(this.map)}},changeDefer:100,changeTimeout:null,onHashChange:function(){if(!this.changeTimeout){var t=this;this.changeTimeout=setTimeout((function(){t.update(),t.changeTimeout=null}),this.changeDefer)}},isListening:!1,hashChangeInterval:null,startListening:function(){this.map.on("moveend",this.onMapMove,this),e?L.DomEvent.addListener(t,"hashchange",this.onHashChange):(clearInterval(this.hashChangeInterval),this.hashChangeInterval=setInterval(this.onHashChange,50)),this.isListening=!0},stopListening:function(){this.map.off("moveend",this.onMapMove,this),e?L.DomEvent.removeListener(t,"hashchange",this.onHashChange):clearInterval(this.hashChangeInterval),this.isListening=!1}},L.hash=function(t){return new L.Hash(t)},L.Map.prototype.addHash=function(){this._hash=L.hash(this)},L.Map.prototype.removeHash=function(){this._hash.removeFrom()}}(window);var f={props:["map_id","map_token"],components:{LMap:n.a,LTileLayer:i.a,LMarker:s.a,LPopup:o.a,"l-locatecontrol":l.a,LIcon:r.a,"l-marker-cluster":d.a,LLayerGroup:c.a,Multiselect:m.a},data:function(){return{zoom:4,center:L.latLng(43.704,7.3111),url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:19,minZoom:3,incidents:[],categories:[],new_message:"",fullCategory:{id:null,name:""},submit_data:{lat:0,lng:0,category:0,category_name:"",loading:!1,map_token:this.map_token}}},mounted:function(){var t=this;new L.Hash(this.$refs.map.mapObject),this.map_token&&(localStorage["map_"+this.map_id]=this.map_token),this.submit_data.map_token=localStorage["map_"+this.map_id],axios.get("/api/maps/"+this.map_id+"/incidents").then((function(a){return t.incidents=a.data})),axios.get("/api/categories?paginate=false").then((function(a){return t.categories=a.data})),Echo.channel("maps."+this.map_id).listen("IncidentCreated",(function(a){t.incidents.push(a.incident),t.new_message=""+a.incident.category.name,setTimeout(function(){this.new_message=""}.bind(t),5e3)}))},computed:{incidentsCount:function(){return this.incidents.length},activeIncidents:function(){return this.incidents.filter((function(t){return null==t.expires_at||Date()<=Date(Date.parse(t.expires_at.replace(/-/g,"/")))}))}},watch:{incidentsCount:function(t){}},methods:{addMarker:function(t){this.$refs.hello_popup.mapObject.openPopup(t.latlng),this.submit_data.lat=t.latlng.lat,this.submit_data.lng=t.latlng.lng},openPopup:function(t){timeago.render(document.querySelectorAll(".timestamp"))},addTag:function(t){var a={category_id:-1,name:t,icon:"/images/vendor/leaflet/dist/marker-icon-2x.png"};this.categories.push(a),this.fullCategory=a,this.submit_data.category=a.category_id,this.submit_data.category_name=a.name},handleSelectInput:function(t){this.fullCategory=t,this.submit_data.category=t.id,this.submit_data.category_name=t.name},checkForLocalStorageKey:function(t){return!!localStorage["post_"+t]},deleteIncident:function(t){var a=this;this.submit_data.loading=!0,axios.delete("/api/maps/"+this.map_id+"/incidents/"+t,{data:{token:localStorage["post_"+t]}}).then((function(e){a.incidents=a.incidents.filter((function(a){return a.id!==t})),a.submit_data.loading=!1}))},submitForm:function(t){var a=this;this.submit_data.loading=!0,axios.post("/api/maps/"+this.map_id+"/incidents",this.submit_data).then((function(t){a.$refs.hello_popup.mapObject.closePopup(),a.submit_data.loading=!1,localStorage["post_"+t.data.id]=t.data.token})).catch((function(t){if(a.submit_data.loading=!1,console.log(t.response),t.response.data.errors)var e=Object.entries(t.response.data.errors).map((function(t,a){var e=h(t,2),n=e[0],i=e[1];return"".concat(n,": ").concat(i[0]," | ")})).join("\n");else e=t.response.data.message;alert(e)}))}}},v=(e("E4uI"),e("KHd+")),g=Object(v.a)(f,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("l-map",{ref:"map",staticStyle:{width:"100%",height:"100%"},attrs:{zoom:t.zoom,center:t.center},on:{contextmenu:t.addMarker}},[e("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._v(" "),e("l-locatecontrol"),t._v(" "),e("l-layer-group",{ref:"hello_popup"},[e("l-popup",[e("form",{attrs:{method:"POST",action:"/incidents",disabled:!t.submit_data.category_name},on:{submit:function(a){return a.preventDefault(),t.submitForm()}}},[e("label",{staticClass:"my-1 mr-2"},[t._v("Report incident:")]),t._v(" "),e("multiselect",{staticClass:"your_custom_class",staticStyle:{width:"250px"},attrs:{"track-by":"name",label:"name",placeholder:"Select one or add a new label","tag-placeholder":"Add this as new label",options:t.categories,searchable:!0,"allow-empty":!1,taggable:!0,optionsLimit:10,"show-labels":!1,required:""},on:{input:t.handleSelectInput,tag:t.addTag},scopedSlots:t._u([{key:"limit",fn:function(a){a.option;return[t._v("Keep typing to refine your search")]}},{key:"singleLabel",fn:function(a){var n=a.option;return[e("strong",[t._v(t._s(n.name))])]}},{key:"option",fn:function(a){return[a.option.icon?e("img",{staticClass:"rounded img-thumbnail mr-1",staticStyle:{position:"initial"},attrs:{height:"25",width:"25",src:a.option.icon,alt:""}}):t._e(),t._v(t._s(a.option.name)+"\n            ")]}}]),model:{value:t.fullCategory,callback:function(a){t.fullCategory=a},expression:"fullCategory"}}),t._v(" "),e("input",{staticClass:"btn btn-primary btn-sm my-1",attrs:{type:"submit",value:"Add marker",disabled:t.submit_data.loading||!t.submit_data.category_name}})],1)])],1),t._v(" "),e("l-marker-cluster",t._l(t.activeIncidents,(function(a){return e("l-marker",{key:a.id+"marker",attrs:{"lat-lng":a.location.coordinates}},[e("l-icon",{attrs:{"icon-url":a.category.icon,"icon-size":[30,30],"icon-anchor":[15,15]}}),t._v(" "),e("l-popup",{on:{ready:t.openPopup}},[e("b",[t._v(t._s(a.category.name))]),e("br"),t._v("Last report: "),e("span",{staticClass:"timestamp",attrs:{datetime:a.updated_at}},[t._v(t._s(a.updated_at))]),t._v("."),e("br"),t._v(" "),t.checkForLocalStorageKey(a.id)?e("button",{staticClass:"btn btn-danger btn-sm my-1",attrs:{disabled:t.submit_data.loading},on:{click:function(e){return t.deleteIncident(a.id)}}},[t._v("Delete")]):t._e()])],1)})),1)],1),t._v(" "),t.new_message?e("div",{staticClass:"alert alert-primary map-notification",attrs:{role:"alert"}},[e("h4",{staticClass:"alert-heading"},[t._v("A new incident was reported")]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v(t._s(t.new_message))])]):t._e()],1)}),[],!1,null,"0bb9ed83",null);a.default=g.exports},tq84:function(t,a,e){"use strict";e.r(a);var n=e("fWYB"),i=e("+QRC"),s=e.n(i),o={props:["map_id","map_token","map"],components:{NavigatorShare:n.a},data:function(){return{token:this.map_token,submit_data:{title:this.map.title,description:this.map.description,token:this.map_token,privacy:this.map.privacy,users_can_create_incidents:this.map.users_can_create_incidents,loading:!1}}},mounted:function(){localStorage["map_"+this.map_id]&&(this.token=localStorage["map_"+this.map_id],this.submit_data.token=localStorage["map_"+this.map_id])},computed:{map_url:function(){return window.location.href},canEdit:function(){return this.token.length>0}},watch:{title:function(t,a){this.submit_data.title="Waiting for you to stop typing...",this.debouncedGetAnswer()}},created:function(){this.debouncedGetAnswer=_.debounce(this.submitForm,750)},methods:{onShareError:function(t){s()(this.map_url,{message:"Press #{key} to copy",onCopy:alert("Link copied")})},handleSelectInput:function(t,a){this.submit_data[a]="privacy"==a||"users_can_create_incidents"==a?t.target.value:t.target.innerText,this.debouncedGetAnswer()},checkForLocalStorageKey:function(t){return!!localStorage["map_"+t]},submitForm:function(t){var a=this;this.submit_data.loading=!0,axios.put("/api/maps/"+this.map_id,this.submit_data).then((function(t){a.submit_data.loading=!1})).catch((function(t){a.submit_data.loading=!1,console.log(t),alert(t.message)}))}}},r=e("KHd+"),c=Object(r.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-7"},[t.map&&t.map.title||!t.canEdit?t.submit_data.title?e("h1",{attrs:{contenteditable:t.canEdit},on:{input:function(a){return t.handleSelectInput(a,"title")}}},[t._v(t._s(t.map.title))]):e("h1",[t._v("Untitled map")]):e("h1",{attrs:{contenteditable:t.canEdit},on:{input:function(a){return t.handleSelectInput(a,"title")}}},[t._v("Here's your new map!"),t.canEdit?e("small",{staticClass:"text-muted"},[t._v(" (Click to edit)")]):t._e()]),t._v(" "),t.map&&t.map.description||!t.canEdit?t.map&&t.map.description?e("p",{attrs:{contenteditable:t.canEdit},on:{input:function(a){return t.handleSelectInput(a,"description")}}},[t._v(t._s(t.map.description))]):e("p",[t._v("This map has no description.")]):e("p",{attrs:{contenteditable:t.canEdit},on:{input:function(a){return t.handleSelectInput(a,"description")}}},[t._v("Click to edit the map description.")])]),t._v(" "),e("div",{staticClass:"col-md-5 mt-5 mt-md-0"},[e("navigator-share",{staticClass:"mb-3",attrs:{"on-error":t.onShareError,url:t.map_url,title:t.submit_data.title,text:t.submit_data.description}},[e("a",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{slot:"clickable"},slot:"clickable"},[t._v("Share this map")])]),t._v(" "),t.canEdit?e("div",{staticClass:"card bg-dark text-white mb-3"},[e("div",{staticClass:"card-header"},[t._v("Map settings")]),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-12 col-form-label",attrs:{for:"password-confirm"}},[t._v("Who can see this map")]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-check"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"privacy",id:"exampleRadios1",value:"public"},domProps:{checked:"public"==t.submit_data.privacy},on:{input:function(a){return t.handleSelectInput(a,"privacy")}}}),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"form-check"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"privacy",id:"exampleRadios2",value:"unlisted"},domProps:{checked:"unlisted"==t.submit_data.privacy},on:{input:function(a){return t.handleSelectInput(a,"privacy")}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios2"}},[t._v("\n                Only people with a link\n              ")])]),t._v(" "),e("div",{staticClass:"form-check disabled"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"privacy",id:"exampleRadios3",value:"private",disabled:""},on:{input:function(a){return t.handleSelectInput(a,"privacy")}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios3"}},[t._v("\n                No one\n              ")])])])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-12 col-form-label",attrs:{for:"password-confirm"}},[t._v("Who can create markers")]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-check"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"users_can_create_incidents",id:"exampleRadios4",value:"yes"},domProps:{checked:"yes"==t.submit_data.users_can_create_incidents},on:{input:function(a){return t.handleSelectInput(a,"users_can_create_incidents")}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios4"}},[t._v("\n                Anyone\n              ")])]),t._v(" "),e("div",{staticClass:"form-check"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"users_can_create_incidents",id:"exampleRadios5",value:"only_logged_in"},domProps:{checked:"only_logged_in"==t.submit_data.users_can_create_incidents},on:{input:function(a){return t.handleSelectInput(a,"users_can_create_incidents")}}}),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"form-check disabled"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"users_can_create_incidents",id:"exampleRadios6",value:"no",disabled:""},on:{input:function(a){return t.handleSelectInput(a,"no")}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios6"}},[t._v("\n                No one\n              ")])])])])])]):t._e(),t._v(" "),e("p",{staticClass:"small"},[t._v("Right click (or long-tap on mobile) on the map to create a marker. You can choose one of the existing labels or create your own.")]),t._v(" "),e("p",{staticClass:"small mb-3"},[t._v("After 3 hours, your report will automatically dissapear from the map.")])],1)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios1"}},[this._v("\n                Everyone "),a("small",[this._v("(make this map public)")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios5"}},[this._v("\n                Only people that are logged in"),a("br"),a("small",[this._v("(You can still add markers even if not logged in)")])])}],!1,null,"6df45afe",null);a.default=c.exports},vE9f:function(t,a,e){var n=e("KNNm");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(t.exports=n.locals)}},[[0,1,2]]]);
//# sourceMappingURL=app.js.map