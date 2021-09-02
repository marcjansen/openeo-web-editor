(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54945d85","chunk-39c40125"],{2930:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal",style:{"z-index":t.zIndex},on:{mousedown:t.backgroundClose}},[i("div",{ref:"container",staticClass:"modal-container",style:t.style},[i("header",{staticClass:"modal-header",on:{mousedown:function(e){return e.preventDefault(),e.stopPropagation(),t.startMove.apply(null,arguments)}}},[t._t("header",(function(){return[i("h2",[t._v(t._s(t.title))]),i("span",{staticClass:"close",on:{click:t.close}},[i("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),i("main",{staticClass:"modal-content"},[t._t("default")],2),i("footer",{staticClass:"modal-footer"},[t._t("footer")],2)])])},n=[],a=i("3115"),r=i("025e"),o={name:"Modal",mixins:[a["a"]],props:{title:{type:String,default:null},minWidth:{type:String,default:"30%"},maxWidth:{type:String,default:"85%"},minHeight:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...r["a"].mapState("editor",["hightestModalZIndex"]),style(){let t={"min-width":this.minWidth,"max-width":this.maxWidth,"min-height":this.minHeight};return Array.isArray(this.position)&&(t.position="absolute",t.left=this.position[0]+"px",t.top=this.position[1]+"px"),t}},watch:{show:{immediate:!0,handler(t){t?this.open():this.close()}}},methods:{...r["a"].mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(t){this.dragPosition=[t.clientX,t.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove)},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(t){t.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-t.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-t.clientY)],this.dragPosition=[t.clientX,t.clientY]},escCloseListener(t){if("Escape"==t.key)return this.close(),t.preventDefault(),t.stopPropagation(),!1},backgroundClose(t){t.target===this.$el&&this.close()}}},l=o,c=(i("8781"),i("2877")),u=Object(c["a"])(l,s,n,!1,null,null,null);e["a"]=u.exports},"5c17":function(t,e,i){},6919:function(t,e,i){"use strict";i("5c17")},"6b1e":function(t,e,i){},8781:function(t,e,i){"use strict";i("6b1e")},"8a57":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Modal",{attrs:{title:t.title},on:{closed:function(e){return t.$emit("closed")}}},[i("UdfRuntime",{attrs:{id:t.id,runtime:t.data,version:t.version}})],1)},n=[],a=i("2930"),r=i("c462"),o={name:"UdfRuntimeModal",components:{Modal:a["a"],UdfRuntime:r["default"]},props:{id:{type:String},data:{type:Object},version:{type:String}},computed:{title(){return this.data.title||this.id}}},l=o,c=(i("8d1e"),i("2877")),u=Object(c["a"])(l,s,n,!1,null,null,null);e["default"]=u.exports},"8d1e":function(t,e,i){"use strict";i("cfe3")},c462:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"vue-component udf-runtime"},[t._t("title",(function(){return[i("a",{staticClass:"anchor",attrs:{name:t.id}}),i("h2",[t.runtime.title?[t._v(" "+t._s(t.runtime.title)+" ("),i("code",{staticClass:"id"},[t._v(t._s(t.id))]),t._v(") ")]:i("code",{staticClass:"id"},[t._v(t._s(t.id))])],2)]}),null,t.$props),t._t("badges",(function(){return[i("ul",{staticClass:"badges"},[t.isDocker?i("li",{staticClass:"badge docker"},[t._v("Docker: "+t._s(t.runtime.docker))]):i("li",{staticClass:"badge"},[t._v("Programming Language")])])]}),null,t.$props),t._t("before-description",null,null,t.$props),t.runtime.description?i("section",{staticClass:"description"},[i("Description",{attrs:{description:t.runtime.description}}),t.runtime.deprecated?i("DeprecationNotice",{attrs:{entity:"UDF runtime"}}):t._e(),t.runtime.experimental?i("ExperimentalNotice",{attrs:{entity:"UDF runtime"}}):t._e()],1):t._e(),i("section",{staticClass:"links"},[i("LinkList",{attrs:{links:t.runtime.links,heading:"See Also",headingTag:"h3"}})],1),t.isDocker?[i("h3",[t._v("Tags")]),i("ul",t._l(t.runtime.tags,(function(e){return i("li",{key:e},[t._v(" "+t._s(e)+" "),e===t.runtime.default?i("ul",{staticClass:"badges small"},[i("li",{staticClass:"badge default"},[t._v("default")])]):t._e()])})),0)]:[i("h3",[t._v("Versions")]),i("Tabs",{ref:"tabs",attrs:{id:"userContent"}},t._l(t.runtime.versions,(function(e,s){return i("Tab",{key:s,attrs:{id:s,name:s,selected:s===t.selectVersion}},[s===t.runtime.default?i("ul",{staticClass:"badges"},[i("li",{staticClass:"badge default"},[t._v("default")])]):t._e(),e.deprecated?i("DeprecationNotice",{attrs:{entity:"UDF runtime version"}}):t._e(),e.experimental?i("ExperimentalNotice",{attrs:{entity:"UDF runtime version"}}):t._e(),i("p",[t._v("This runtime includes support for:")]),i("ul",t._l(e.libraries,(function(e,s){return i("li",{key:s,staticClass:"library"},[t._v(" "+t._s(s)+" "),i("ul",{staticClass:"badges small"},[i("span",{staticClass:"badge"},[t._v(t._s(e.version))]),e.experimental?i("span",{staticClass:"badge experimental"},[t._v("experimental")]):t._e(),e.deprecated?i("span",{staticClass:"badge deprecated"},[t._v("deprecated")]):t._e()]),i("LinkList",{attrs:{links:e.links}})],1)})),0)],1)})),1)]],2)},n=[],a=i("60a2"),r={name:"UdfRuntime",components:{DeprecationNotice:()=>i.e("chunk-aca32992").then(i.bind(null,"5dc7")),Description:()=>i.e("chunk-adfa0f9c").then(i.bind(null,"8088")),ExperimentalNotice:()=>i.e("chunk-eccca334").then(i.bind(null,"b581")),LinkList:()=>i.e("chunk-241547dc").then(i.bind(null,"4845")),Tabs:()=>Promise.resolve().then(i.bind(null,"e7ea")),Tab:()=>Promise.resolve().then(i.bind(null,"bdb2"))},props:{id:{type:String,default:""},runtime:{type:Object,default:()=>({})},version:{type:String,default:null}},computed:{title(){return this.runtime.title||this.id},isDocker(){return Boolean("docker"===this.runtime.type||this.runtime.docker&&this.runtime.tags)},selectVersion(){return a["a"].isObject(this.runtime.versions)&&this.runtime.versions[this.version]||Array.isArray(this.runtime.tags)&&this.runtime.tags[this.version]?this.version:this.runtime.default}},beforeCreate(){a["a"].enableHtmlProps(this)}},o=r,l=(i("6919"),i("2877")),c=Object(l["a"])(o,s,n,!1,null,null,null);e["default"]=c.exports},cfe3:function(t,e,i){}}]);
//# sourceMappingURL=chunk-54945d85.5b8e0fda.js.map