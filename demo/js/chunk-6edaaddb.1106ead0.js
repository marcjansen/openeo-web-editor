(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6edaaddb","chunk-1b2b421d"],{"25e7":function(t,e,n){(function(t,n){n(e)})(0,(function(t){"use strict";var e="1.0.0+master.7986dc5";function n(t){return"number"===typeof t?t?t<0?-1:1:0:NaN}function s(t,e){if(t instanceof L.LatLng&&e instanceof L.LatLng){if(t.lat>e.lat){var n=t;t=e,e=n}var s=360-Math.abs(t.lng-e.lng),a=e.lat-t.lat,i=Math.abs(180-Math.abs(t.lng));return t.lat+a*i/s}throw new Error("In order to calculate the Antimeridian latitude, two valid LatLngs are required.")}function a(t,e){if(t instanceof L.LatLng&&e instanceof L.LatLng)return n(t.lng)*n(e.lng)<0;throw new Error("In order to calculate whether two LatLngs cross a meridian, two valid LatLngs are required.")}function i(t,e,n,s){if(!(t instanceof Array&&e instanceof L.Bounds&&n instanceof L.LatLng&&s instanceof L.Map))throw new Error("In order to push a LatLng into a ring, the ring point array, the LatLng, the projectedBounds, and the map must all be valid.");t.push(s.latLngToLayerPoint(n)),e.extend(t[t.length-1])}function r(t,e){if(t instanceof L.LatLng&&e instanceof L.LatLng)return a(t,e)&&360-Math.abs(t.lng)-Math.abs(e.lng)<180;throw new Error("In order to calculate whether the ring created by two LatLngs should be broken, two valid LatLngs are required.")}function o(t,e,a,r,o){if(t instanceof L.LatLng&&e instanceof L.LatLng&&a instanceof Array&&r instanceof L.Bounds&&o instanceof L.Map){var l=a[a.length-1],c=s(t,e),u=[new L.LatLng(c,180),new L.LatLng(c,-180)];return n(t.lng)>0?i(l,r,u.shift(),o):i(l,r,u.pop(),o),u.pop()}throw new Error("In order to break a ring, all the inputs must exist and be valid.")}var l=L.Polyline.extend({_projectLatlngs:function(t,e,n){var s=t[0]instanceof L.LatLng;if(s)this._createRings(t,e,n);else for(var a=0;a<t.length;a++)this._projectLatlngs(t[a],e,n)},_createRings:function(t,e,n){var s=t.length;e.push([]);for(var a=0;a<s;a++){var l=this._getCompareLatLng(a,s,t),c=t[a];if(i(e[e.length-1],n,t[a],this._map),l&&r(l,c)){var u=o(c,l,e,n,this._map);this._startNextRing(e,n,u)}}},_getCompareLatLng:function(t,e,n){return t+1<e?n[t+1]:null},_startNextRing:function(t,e,n){var s=[];t.push(s),i(s,e,n,this._map)}});function c(t,e){return new L.Wrapped.Polyline(t,e)}var u=L.Polygon.extend({_projectLatlngs:function(t,e,n){var s=t[0]instanceof L.LatLng;if(s)this._createRings(t,e,n);else for(var a=0;a<t.length;a++)this._projectLatlngs(t[a],e,n)},_createRings:function(t,e,n){var s=t.length;e.push([]);for(var a=0;a<s;a++){var l=this._getCompareLatLng(a,s,t),c=t[a];if(i(e[e.length-1],n,c,this._map),r(l,c)){var u=o(c,l,e,n,this._map);this._startNextRing(e,n,u,a===s-1)}}this._checkConcaveRings(e),this._joinLastRing(e,t)},_startNextRing:function(t,e,n,s){var a;s?(a=t[0],a.unshift(this._map.latLngToLayerPoint(n)),e.extend(a[0])):(a=[],t.push(a),i(a,e,n,this._map))},_getCompareLatLng:function(t,e,n){return t+1<e?n[t+1]:n[0]},_joinLastRing:function(t,e){var n=t[0],s=t[t.length-1];if(t.length>1&&(2===n.length||2===s.length)&&!a(e[0],e[e.length-1])){for(var i=s.length,r=0;r<i;r++)n.unshift(s.pop());t.pop()}},_checkConcaveRings:function(t){for(var e=this._map.layerPointToLatLng(t[0][0]),n=0;n<=t.length-3;n++){var s=this._map.layerPointToLatLng(t[n+1][0]),i=this._map.layerPointToLatLng(t[n+2][0]);if(a(e,s)&&a(s,i)){var r=t[0],o=t[n+2],l=r.concat(o);t.splice(n+2,1),t.splice(0,1,l)}}}});function h(t,e){return new L.Wrapped.Polygon(t,e)}t.version=e,t.Polyline=l,t.wrappedPolyline=c,t.Polygon=u,t.wrappedPolygon=h,t.calculateAntimeridianLat=s,t.isCrossMeridian=a,t.isBreakRing=r,t.sign=n}))},"3e79":function(t,e,n){"use strict";n("ba02")},"47ed":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"vue-component stac collection"},[t._t("title",(function(){return[n("a",{staticClass:"anchor",attrs:{name:t.data.id}}),n("h2",[t._v(t._s(t.data.id))])]}),null,t.$props),t.data.title?n("summary",[t._v(t._s(t.data.title))]):t._e(),t._t("before-description",null,null,t.$props),t.data.description?n("section",{staticClass:"description"},[n("h3",[t._v("Description")]),n("Description",{attrs:{description:t.data.description}}),t.data.deprecated?n("DeprecationNotice",{attrs:{entity:"collection"}}):t._e(),t.hasElements(t.data.keywords)?n("div",[n("strong",[t._v("Keywords:")]),t._v("  "),n("ul",{staticClass:"comma-separated-list"},t._l(t.data.keywords,(function(e){return n("li",{key:e},[t._v(t._s(e))])})),0)]):t._e()],1):t._e(),n("section",{staticClass:"license"},[n("h3",[t._v("License")]),n("span",{domProps:{innerHTML:t._s(t.license)}})]),n("section",{directives:[{name:"show",rawName:"v-show",value:t.thumbnails.length,expression:"thumbnails.length"}],staticClass:"preview"},[n("h3",[t._v("Previews")]),n("div",{staticClass:"thumbnails"},t._l(t.thumbnails,(function(t){return n("a",{key:t.href,attrs:{href:t.href,target:"_blank"}},[n("img",{attrs:{src:t.href,title:t.title,alt:t.title||"Preview"}})])})),0)]),t.temporalIntervals.length||t.boundingBoxes.length?n("section",{staticClass:"extent"},[t.temporalIntervals.length?[n("h3",[t._v("Temporal Extent")]),t._t("temporal-extents",(function(){return t._l(t.temporalIntervals,(function(e,s){return n("ul",{key:s},[n("li",{domProps:{innerHTML:t._s(t.stac.formatTemporalExtent(e))}})])}))}),{extents:t.temporalIntervals})]:t._e(),t.boundingBoxes.length?[n("h3",[t._v("Spatial Extent")]),t._t("spatial-extents",(function(){return[n("div",{ref:"mapContainer",staticClass:"map"},[t.map?t._e():t._l(t.boundingBoxes,(function(e,s){return n("ul",{key:s},[n("li",[t._v("Latitudes: "+t._s(e[1])+" / "+t._s(e[3])+", Longitudes: "+t._s(e[0])+" / "+t._s(e[2]))])])}))],2)]}),{extents:t.boundingBoxes,mapOptions:t.mapOptions})]:t._e()],2):t._e(),t.data.providers?n("section",{staticClass:"providers"},[n("h3",[t._v("Providers")]),n("ol",t._l(t.data.providers,(function(e){return n("li",{key:e.name},[e.url?n("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.name))]):[t._v(t._s(e.name))],t.hasElements(e.roles)?[t._v(" ("),n("ul",{staticClass:"comma-separated-list"},t._l(e.roles,(function(e){return n("li",{key:e,staticClass:"provider-role"},[t._v(t._s(e))])})),0),t._v(") ")]:t._e(),e.description?n("Description",{attrs:{description:e.description,compact:!0}}):t._e()],2)})),0)]):t._e(),t.hasDimensions?n("section",{staticClass:"dimensions"},[n("h3",[t._v("Data Cube Dimensions")]),n("ul",t._l(t.data["cube:dimensions"],(function(e,s){return n("li",{key:s,staticClass:"dimension"},[n("h4",["bands"===e.type?n("a",{staticClass:"name",attrs:{href:"#summary_eo:bands"},on:{click:t.scrollToBands}},[t._v(t._s(s))]):n("span",{staticClass:"name"},[t._v(t._s(s))]),n("ul",{staticClass:"type badges small"},[n("li",{staticClass:"badge"},[t._v(t._s(e.type))])])]),e.description?n("Description",{attrs:{description:e.description}}):t._e(),e.axis?n("div",{staticClass:"tabular"},[n("label",[t._v("Axis:")]),n("div",{staticClass:"value"},[t._v(t._s(e.axis))])]):t._e(),n("div",{staticClass:"tabular"},[n("label",[t._v("Labels:")]),e.extent?n("div",{staticClass:"value"},["temporal"===e.type?n("span",{domProps:{innerHTML:t._s(t.stac.formatTemporalExtent(e.extent))}}):n("span",{domProps:{innerHTML:t._s(t.stac.formatExtent(e.extent))}})]):Array.isArray(e.values)&&e.values.length>0?n("ul",{staticClass:"value"},t._l(e.values,(function(e){return n("li",{key:e},[t._v(t._s(e))])})),0):n("div",{staticClass:"value"},[n("i",[t._v("n/a")])])]),"undefined"!==typeof e.step?n("div",{staticClass:"tabular"},[n("label",[t._v("Steps:")]),n("div",{staticClass:"value"},[null===e.step?[t._v("irregularly spaced")]:"temporal"===e.type?[t._v(t._s(t.formatDuration(e.step)))]:[t._v(t._s(e.step))]],2)]):t._e(),"undefined"!==typeof e.reference_system?n("div",{staticClass:"tabular"},[n("label",[t._v("Reference System:")]),n("div",{staticClass:"value"},["number"===typeof e.reference_system?n("div",{staticClass:"epsg",domProps:{innerHTML:t._s(t.stac.formatEPSG(e.reference_system))}}):"string"===typeof e.reference_system?n("div",{staticClass:"wkt2",domProps:{innerHTML:t._s(t.stac.formatWKT2(e.reference_system))}}):"object"===typeof e.reference_system?n("ObjectTree",{attrs:{data:e.reference_system}}):[t._v(t._s(e.reference_system))]],2)]):t._e()],1)})),0)]):t._e(),n("StacFields",{staticClass:"summaries",attrs:{metadata:t.data}}),n("section",{staticClass:"assets"},[n("LinkList",{attrs:{links:t.assetLinks,heading:"Assets",headingTag:"h3"}})],1),n("section",{staticClass:"links"},[n("LinkList",{attrs:{links:t.data.links,heading:"See Also",headingTag:"h3",ignoreRel:["self","parent","root","license","cite-as"]}})],1),t._t("end",null,null,t.$props)],2)},a=[],i=n("60a2"),r=n("6057"),o=n("8205"),l=n("863a"),c={name:"Collection",components:{ObjectTree:()=>Promise.resolve().then(n.bind(null,"0a37"))},mixins:[o["a"]],props:{...o["a"].props},data(){return{stac:r["Formatters"]}},computed:{showMap(){return 0!==this.boundingBoxes.length},temporalIntervals(){let t=this.data.extent;return i["a"].isObject(t)&&i["a"].isObject(t.temporal)&&i["a"].size(t.temporal.interval)>0?t.temporal.interval.filter(t=>Array.isArray(t)&&t.length>=2):[]},boundingBoxes(){let t=this.data.extent;return i["a"].isObject(t)&&i["a"].isObject(t.spatial)&&i["a"].size(t.spatial.bbox)>0?t.spatial.bbox.filter(t=>Array.isArray(t)&&t.length>=4):[]},hasDimensions(){return i["a"].size(this.data["cube:dimensions"])>0},license(){return"string"===typeof this.data.license&&0!==this.data.license.length&&r["Formatters"].formatLicense(this.data.license,null,null,this.data)}},methods:{addFeatures(){try{L.Wrapped=n("25e7")}catch(e){console.warn("Leaflet Antimeridian plugin is not available: "+e.message)}let t=L.featureGroup();for(let n of this.boundingBoxes){let e,s=[[n[1],n[0]],[n[3],n[0]],[n[3],n[2]],[n[1],n[2]]];e=L.Wrapped&&n[2]<n[0]?new L.Wrapped.Polygon(s):L.polygon(s),e.setStyle({color:"#3388ff",fillOpacity:.2}),t.addLayer(e)}return t},scrollToBands(t){let e=this.$el.querySelector("#field_eo\\:bands");e&&(e.scrollIntoView(),e.classList.add("highlight-box"),setTimeout(()=>{e.classList.remove("highlight-box")},5e3)),t.preventDefault()},hasElements(t){return"object"===typeof t&&null!==t&&Object.keys(t).length>0},formatDuration(t){if("string"===typeof t)try{return l["b"].setLocales({en:l["a"]}),Object(l["b"])(t).humanize("en")}catch(e){console.warn(e)}return"n/a"}}},u=c,h=(n("3e79"),n("2877")),p=Object(h["a"])(u,s,a,!1,null,null,null);e["default"]=p.exports},"4ac7":function(t,e,n){},"7f84":function(t,e,n){"use strict";n("4ac7")},8205:function(t,e,n){"use strict";var s=n("60a2"),a=n("ab25"),i=n.n(a);const r=["image/apng","image/gif","image/png","image/jpeg","image/webp"],o=["gif","png","jpg","jpeg","webp"];e["a"]={components:{Description:()=>Promise.resolve().then(n.bind(null,"8088")),DeprecationNotice:()=>n.e("chunk-1a5e51b5").then(n.bind(null,"5dc7")),LinkList:()=>n.e("chunk-7a30752e").then(n.bind(null,"4845")),StacFields:()=>n.e("chunk-53770df3").then(n.bind(null,"f21e"))},props:{data:{type:Object,default:()=>({})},mapOptions:{type:Object,default:()=>({}),validator:function(t){const e={height:"string",width:"string",wrapAroundAntimeridian:"boolean",scrollWheelZoom:"boolean"},n=Object.keys(e);return"object"==typeof t&&Object.keys(t).every(s=>-1!=n.indexOf(s)&&typeof t[s]==e[s])}}},data(){return{map:null}},computed:{leafletOptions(){return{height:this.mapOptions.height||"300px",width:this.mapOptions.width||"auto",noWrap:void 0===this.mapOptions.wrapAroundAntimeridian||!this.mapOptions.wrapAroundAntimeridian,scrollWheelZoom:void 0!==this.mapOptions.scrollWheelZoom&&this.mapOptions.scrollWheelZoom}},assetLinks(){return s["a"].isObject(this.data.assets)?Object.values(this.data.assets).filter(t=>!this.assetIsImage(t)).map(t=>(Array.isArray(t.role)&&t.roles.length>0&&(t.rel=t.roles.join(" "),delete t.roles),t)):[]},thumbnails(){return s["a"].isObject(this.data.assets)?Object.values(this.data.assets).filter(this.assetIsImage):[]}},watch:{data(){this.initMap()},showMap(t){t&&this.initMap()}},beforeCreate(){s["a"].enableHtmlProps(this)},mounted(){this.initMap()},methods:{assetIsImage(t){let e="string"===typeof t.href?t.href.split(".").pop():"";return Array.isArray(t.roles)&&(t.roles.includes("thumbnail")||t.roles.includes("overview"))&&(r.includes(t.type)||o.includes(e))},initLeafletPlugins(){},async initMap(){if(this.$refs.mapContainer||await this.$nextTick(),!this.$refs.mapContainer||null!==this.map||!this.showMap)return!1;let t=window.L;try{this.map={leaflet:null,instance:null,geometries:null};let r=()=>s["a"].isObject(window.L)&&i.a.validate(window.L.version)&&i.a.compare(window.L.version,"1.x.x","=");if(r()||(window.L=n("860c")),!r())return console.warn("Leaflet is not available"),!1;this.map.leaflet=window.L;let o=await n.e("chunk-76d54288").then(n.t.bind(null,"6cc5",7));this.$root&&this.$root.$options.shadowRoot&&o.__inject__&&o.__inject__(this.$root.$options.shadowRoot);var e=this.map.leaflet.map(this.$refs.mapContainer,{scrollWheelZoom:this.leafletOptions.scrollWheelZoom});this.map.instance=e;var a=this.map.leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{name:"OpenStreetMap",attribution:'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>',noWrap:this.leafletOptions.noWrap});return a.addTo(e),"function"===typeof this.addFeatures&&(this.map.geometries=this.addFeatures(),this.map.geometries&&this.map.geometries.addTo(e)),this.$refs.mapContainer.style.width=this.leafletOptions.width,this.$refs.mapContainer.style.height=this.leafletOptions.height,e.invalidateSize(!1),this.updateMapView(),"function"===typeof this.mapOptions.onAfterMapInit&&this.mapOptions.onAfterMapInit(e,this.map.geometries),window.L=t,!0}catch(r){return console.error(r),window.L=t,!1}},updateMapView(){if(this.map&&this.map.geometries){var t=this.map.geometries.getBounds(),e=this.map.instance.getBoundsZoom(t),n=Math.min(e,11);e>8?n-=3:e>5?n-=2:e>2&&n--,this.map.instance.fitBounds(t),this.map.instance.setZoom(n),this.map.instance.once("moveend zoomend",()=>this.map.instance.invalidateSize(!1))}}}}},8295:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{ref:"modal",scopedSlots:t._u([{key:"main",fn:function(){return[n("div",{staticClass:"docgen"},[n("Collection",{attrs:{data:t.collection},scopedSlots:t._u([{key:"spatial-extents",fn:function(e){return[n("MapViewer",{attrs:{id:"collectionMap",show:t.showMap,extents:e.extents}})]}}])}),t.currentItems?n("section",[n("Items",{attrs:{items:t.currentItems},scopedSlots:t._u([{key:"item-location",fn:function(t){return[n("MapViewer",{attrs:{id:String(Date.now()),geoJson:t.geometry}})]}}],null,!1,3894742568)}),n("div",{staticClass:"pagination"},[n("button",{attrs:{title:"Previous page",disabled:!t.hasPrevItems},on:{click:function(e){return t.paginate(-1)}}},[n("i",{staticClass:"fas fa-arrow-left"}),t._v(" Previous Page")]),n("button",{attrs:{title:"Next page",disabled:!t.hasNextItems},on:{click:function(e){return t.paginate(1)}}},[t._v("Next Page "),n("i",{staticClass:"fas fa-arrow-right"})])])],1):t._e()],1)]},proxy:!0}])})},a=[],i=n("a5c1"),r=n("2930"),o=n("47ed"),l=n("025e"),c={name:"CollectionModal",components:{MapViewer:i["a"],Modal:r["a"],Collection:o["default"],Items:()=>n.e("chunk-f7f19c5e").then(n.bind(null,"d25f"))},data(){return{collection:null,showMap:!1,items:[],itemsPage:0,itemsIterator:null}},computed:{...l["a"].mapState(["connection"]),...l["a"].mapGetters(["supports"]),bbox(){try{return this.collection.extent.spatial.bbox[0]}catch(t){return null}},currentItems(){return this.items.length>=this.itemsPage?this.items[this.itemsPage]:null},hasPrevItems(){return this.itemsPage>0},hasNextItems(){return this.itemsPage<this.items.length-1}},methods:{async paginate(t){if(t>0)await this.nextItems();else if(0===this.itemsPage&&t<0)return;this.itemsPage+=t},async nextItems(){this.itemsIterator||(this.itemsIterator=await this.connection.listCollectionItems(this.collection.id));let t=await this.itemsIterator.next();t&&t.value&&!t.done&&this.items.push(t.value)},async show(t){this.collection=t,this.items=[],this.itemsPage=0,this.itemsIterator=null,this.$refs.modal.show(t.id),this.$nextTick(()=>{this.showMap=!0}),this.supports("listCollectionItems")&&(await this.nextItems(),this.nextItems())}}},u=c,h=(n("7f84"),n("2877")),p=Object(h["a"])(u,s,a,!1,null,null,null);e["default"]=p.exports},"863a":function(t,e,n){"use strict";n.d(e,"a",(function(){return M})),n.d(e,"b",(function(){return P}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var s=function(){return s=Object.assign||function(t){for(var e,n=1,s=arguments.length;n<s;n++)for(var a in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},s.apply(this,arguments)},a="\\d+(?:[\\.,]\\d+)?",i="("+a+"W)",r="("+a+"Y)?("+a+"M)?("+a+"D)?",o="T("+a+"H)?("+a+"M)?("+a+"S)?",l="^P(?:"+i+"|"+r+"(?:"+o+")?)$",c=new RegExp(l),u=["weeks","years","months","days","hours","minutes","seconds"],h={years:"Y",months:"M",days:"D",hours:"H",minutes:"M",seconds:"S",weeks:"W"},p=Object.freeze({weeks:0,years:0,months:0,days:0,hours:0,minutes:0,seconds:0}),d=function(t){var e=t.match(c);if(!e)throw new Error("Invalid duration string");var n=e.slice(1).reduce((function(t,e,n){return t[u[n]]=parseFloat(e)||0,t}),{});return n},m=function(t){return t.weeks&&t.weeks>0?Object.assign({},p,{weeks:t.weeks}):u.reduce((function(e,n){var a;return s(s({},e),(a={},a[n]=t[n]||0,a))}),{})},f={locales:{},options:{},setLocales:function(t,e){this.locales=s(s({},this.locales),t),e&&(this.options=s(s({},this.options),e))},getLangConfig:function(t){var e=this.locales[t];if(!e&&this.options.fallbackLocale&&(e=this.locales[this.options.fallbackLocale]),!e)throw new Error("isoDuration: Translations for language: "+t+" are not provided");return e}},g=function(t){for(var e=["years","months","days"],n="",s=0,a=e;s<a.length;s++){var i=a[s];t[i]&&(n+=""+t[i]+h[i])}return n},v=function(t){for(var e=["hours","minutes","seconds"],n="",s=0,a=e;s<a.length;s++){var i=a[s];t[i]&&(n+=""+t[i]+h[i])}return n},_=function(t){if(t.weeks>0)return"P"+t.weeks+"W";var e="P",n=g(t);n&&(e+=n);var s=v(t);return s&&(e+="T"+s),n||s||(e+="0D"),e},L=function(t,e){var n=f.getLangConfig(e);return t.weeks+" "+n.weeks(t.weeks)},y=function(t,e,n){for(var s=f.getLangConfig(e),a="",i=["years","months","days","hours","minutes","seconds"],r=0,o=0;o<i.length;o++){var l=i[o],c=t[l];if(c&&(""!==a&&(a+=" "),a+=c+" "+s[l](c),r++,n&&n.largest&&n.largest<=r))break}return a},b=function(t,e,n){return t.weeks>0?L(t,e):y(t,e,n)},w=["seconds","minutes","hours","days","months"],x=function(t){return function(e){return{nextUnitValue:Math.floor(e/t),value:e%t}}},k=function(t,e){return new Date(e,t+1,0).getDate()},C={seconds:x(60),minutes:x(60),hours:x(24),days:function(t,e){var n=e?new Date(e.getTime()):new Date,s=t,a=0,i=k(n.getMonth(),n.getFullYear());while(s>i)s-=i,a++,n.setMonth(n.getMonth()+1),i=k(n.getMonth(),n.getFullYear());return{nextUnitValue:a,value:s}},months:x(12)},O=function(t,e){for(var n=s({},t),a=0;a<w.length;a++){var i=w[a],r=n[i];if(r>0){var o=C[i](r,e);if(n[i]=o.value,o.nextUnitValue){var l="months"===i?"years":w[a+1];n[l]=n[l]+o.nextUnitValue}}}return n},j=function(){function t(t){this.durationObj=t}return t.prototype.parse=function(){return this.durationObj},t.prototype.toString=function(){return _(this.durationObj)},t.prototype.humanize=function(t,e){return b(this.durationObj,t,e)},t.prototype.normalize=function(t){return this.durationObj=O(this.durationObj,t),this},t.prototype.isEmpty=function(){var t=this;return Object.keys(this.durationObj).every((function(e){return 0===t.durationObj[e]}))},t}();var M={years:function(t){return"year"+(1===t?"":"s")},months:function(t){return"month"+(1===t?"":"s")},weeks:function(t){return"week"+(1===t?"":"s")},days:function(t){return"day"+(1===t?"":"s")},hours:function(t){return"hour"+(1===t?"":"s")},minutes:function(t){return"minute"+(1===t?"":"s")},seconds:function(t){return"second"+(1===t?"":"s")},decimal:"."};function P(t){return new j("string"===typeof t?d(t):m(t))}P.setLocales=function(t,e){f.setLocales(t,e)}},ba02:function(t,e,n){}}]);
//# sourceMappingURL=chunk-6edaaddb.1106ead0.js.map