(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f38e0cf"],{"90d8":function(t,s,e){},a8a8:function(t,s,e){"use strict";e("da128")},b28e:function(t,s,e){"use strict";e("90d8")},da128:function(t,s,e){},fd61:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Modal",{ref:"modal",attrs:{minWidth:"85%"},scopedSlots:t._u([{key:"main",fn:function(){return[e("section",{staticClass:"vue-component basedata"},[e("div",{staticClass:"tabular"},[e("label",[t._v("ID:")]),t._v(" "),e("code",{staticClass:"value"},[t._v(t._s(t.job.id))])])]),t.job.description?e("section",{staticClass:"vue-component description"},[e("h3",[t._v("Description")]),e("Description",{attrs:{description:t.job.description}})],1):t._e(),e("section",{staticClass:"vue-component progress"},[e("h3",[t._v("Progress")]),e("div",{staticClass:"tabular"},[e("label",[t._v("Submitted:")]),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.created))])]),e("div",{staticClass:"tabular"},[e("label",[t._v("Updated:")]),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.updated))])]),e("div",{staticClass:"tabular"},[e("label",[t._v("Status:")]),t._v(" "),e("span",{staticClass:"value status",attrs:{"data-value":t.job.status}},[t._v(t._s(t.job.status))])]),"number"===typeof t.job.progress?e("div",{staticClass:"tabular"},[e("label",[t._v("Progress:")]),t._v(" "),e("div",{staticClass:"value"},[e("div",{staticClass:"progressBar",class:{error:!!t.job.error}},[e("div",{staticClass:"completed",style:"width: "+t.progress},[t.job.progress>50?e("span",{staticClass:"number"},[t._v(t._s(t.progress))]):t._e()]),t.job.progress<=50?e("span",{staticClass:"number"},[t._v(t._s(t.progress))]):t._e()])])]):t._e()]),t.job.plan||t.job.costs||t.job.budget?e("section",{staticClass:"vue-component billing"},[e("h3",[t._v("Billing")]),t.job.plan?e("div",{staticClass:"tabular"},[e("label",[t._v("Billing plan:")]),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.job.plan))])]):t._e(),t.job.costs?e("div",{staticClass:"tabular"},[e("label",[t._v("Costs:")]),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.formatCurrency(t.job.costs)))])]):t._e(),t.job.budget?e("div",{staticClass:"tabular"},[e("label",[t._v("Budget:")]),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.formatCurrency(t.job.budget)))])]):t._e()]):t._e(),t.resultType?e("section",{staticClass:"vue-component result"},[e("h3",[t._v("Results")]),e("p",[e("em",[t._v("Below the metadata for the results of the batch job are shown.")])]),"Collection"===t.resultType?e("Collection",{attrs:{data:t.result},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",{staticClass:"hidden"})]},proxy:!0},{key:"spatial-extents",fn:function(s){return[e("MapViewer",{attrs:{id:"collectionMap",show:t.showMap,extents:s.extents}})]}}],null,!1,1959136896)}):e("Item",{attrs:{data:t.result},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",{staticClass:"hidden"})]},proxy:!0},{key:"location",fn:function(s){return[e("MapViewer",{attrs:{id:"itemMap",show:t.showMap,geoJson:s.geometry,extents:s.bbox}})]}}],null,!1,1029189681)})],1):t._e(),e("section",{staticClass:"vue-component process-graph"},[e("h3",[t._v("Process")]),e("Editor",{staticClass:"infoViewer",attrs:{value:t.job.process,editable:!1,id:"jobPgViewer"}})],1)]},proxy:!0}])})},o=[],l=e("025e"),i=e("2930"),r=e("8088"),n=e("ceb0"),c={name:"JobInfoModal",components:{Collection:()=>Promise.resolve().then(e.bind(null,"8088")),Description:r["default"],Editor:n["default"],Item:()=>e.e("chunk-d3a52986").then(e.bind(null,"2263")),Modal:i["a"]},computed:{...l["a"].mapGetters(["formatCurrency"]),resultType(){return l["a"].isObject(this.result)?"Feature"===this.result.type?"Item":"Collection":null},created(){return l["a"].formatDateTime(this.job.created)},updated(){return this.job.updated?l["a"].formatDateTime(this.job.updated):"N/A"},displayTitle(){return"Batch Job: "+(this.job.title||"#"+this.job.id)},progress(){return"number"===typeof this.job.progress?Math.round(10*this.job.progress)/10+"%":"0%"}},data(){return{job:{},result:null,showMap:!1}},methods:{show(t,s=null){this.job=t,this.result=s,this.$refs.modal.show(this.displayTitle),this.$nextTick(()=>{this.showMap=!0})}}},u=c,d=(e("a8a8"),e("b28e"),e("2877")),p=Object(d["a"])(u,a,o,!1,null,"94ec8a5e",null);s["default"]=p.exports}}]);
//# sourceMappingURL=chunk-6f38e0cf.ceaccc98.js.map