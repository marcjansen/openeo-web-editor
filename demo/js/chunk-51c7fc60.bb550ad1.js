(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51c7fc60"],{2339:function(e,t,s){},5089:function(e,t,s){"use strict";s("2339")},b64d:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("article",{staticClass:"vue-component service-type"},[e._t("title",(function(){return[s("a",{staticClass:"anchor",attrs:{name:e.id}}),s("h2",[e.service.title?[e._v(" "+e._s(e.service.title)+" ("),s("code",{staticClass:"id"},[e._v(e._s(e._f("abbrev")(e.id)))]),e._v(") ")]:s("code",{staticClass:"id"},[e._v(e._s(e._f("abbrev")(e.id)))])],2)]}),null,e.$props),e._t("before-description",null,null,e.$props),e.service.description?s("section",{staticClass:"description"},[s("h3",[e._v("Description")]),s("Description",{attrs:{description:e.service.description}}),e.service.deprecated?s("DeprecationNotice",{attrs:{entity:"service"}}):e._e(),e.service.experimental?s("ExperimentalNotice",{attrs:{entity:"service"}}):e._e()],1):e._e(),s("section",{staticClass:"configuration"},[s("h3",[e._v("Configuration Settings")]),e._l(e.configuration,(function(e,t){return s("ProcessParameter",{key:t,attrs:{parameter:e}})})),0===e.configuration.length?s("p",[e._v("This service has no configuration settings.")]):e._e()],2),s("section",{staticClass:"parameters"},[s("h3",[e._v("Process Parameters")]),e._l(e.parameters,(function(e,t){return s("ProcessParameter",{key:t,attrs:{parameter:e}})})),0===e.parameters.length?s("p",[e._v("This service has no process parameters.")]):e._e()],2),s("section",{staticClass:"links"},[s("LinkList",{attrs:{links:e.service.links,heading:"See Also",headingTag:"h3"}})],1),e._t("end",null,null,e.$props)],2)},i=[],n=s("60a2"),a={name:"ServiceType",components:{DeprecationNotice:()=>s.e("chunk-1a5e51b5").then(s.bind(null,"5dc7")),Description:()=>Promise.resolve().then(s.bind(null,"8088")),ExperimentalNotice:()=>s.e("chunk-67d91f7d").then(s.bind(null,"b581")),ProcessParameter:()=>s.e("chunk-9abe1ace").then(s.bind(null,"81dd")),LinkList:()=>s.e("chunk-7a30752e").then(s.bind(null,"4845"))},props:{id:{type:String,default:""},service:{type:Object,default:()=>({})}},computed:{configuration(){return n["a"].toProcessParameters(this.service.configuration)},parameters(){return Array.isArray(this.service.process_parameters)?this.service.process_parameters.slice(0).sort((e,t)=>n["a"].compareStringCaseInsensitive(e.name,t.name)):[]}},filters:{abbrev:n["a"].prettifyAbbreviation},beforeCreate(){n["a"].enableHtmlProps(this)}},c=a,o=(s("5089"),s("2877")),l=Object(o["a"])(c,r,i,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-51c7fc60.bb550ad1.js.map