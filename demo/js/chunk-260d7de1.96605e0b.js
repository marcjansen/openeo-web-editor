(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-260d7de1"],{"0b4b":function(e,t,s){},"3e57":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"select-container"},[e.loaded?s("MultiSelect",{key:e.type,ref:"htmlElement",attrs:{label:"label","track-by":"id",multiple:e.multiple,options:e.selectOptions,allowEmpty:!1,preselectFirst:e.preselect,disabled:!e.editable,deselectLabel:e.deselectLabel,taggable:e.taggable,tagPlaceholder:e.tagPlaceholder},on:{tag:e.addValue},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}):e._e(),e.showDetails?s("button",{attrs:{type:"button",title:"Details"},on:{click:function(t){return e.$emit("onDetails")}}},[s("i",{staticClass:"fas fa-info"})]):e._e()],1)},a=[],l=s("8e5f"),r=s.n(l),c=s("025e"),n={name:"SelectBox",components:{MultiSelect:r.a},props:{value:{type:[String,Number]},type:{type:String},editable:{type:Boolean,default:!0},options:{type:[Array,Object]},schema:{type:Object},context:{}},computed:{...c["a"].mapGetters(["collectionDefaults"]),selectOptions(){let e=[];switch(this.type){case"band-name":let t=this.$store.state.collections.find(e=>e.id==this.context);if(c["a"].isObject(t)){try{e=t.summaries["eo:bands"].map(e=>e.name)}catch(i){}if(0===e.length&&c["a"].isObject(t["cube:dimensions"]))try{let s=Object.values(t["cube:dimensions"]).find(e=>"bands"===e.type);s&&Array.isArray(s.values)&&(e=s.values)}catch(i){}}break;case"collection-id":e=this.$store.state.collections;break;case"job-id":e=this.$store.state.jobs.jobs;break;case"file-path":case"file-paths":e=this.$store.state.files.files;break;case"epsg-code":e=this.$store.state.editor.epsgCodes;break;case"input-format":e=this.$store.state.fileFormats.getInputTypes();break;case"output-format":e=this.$store.state.fileFormats.getOutputTypes();break;case"service-type":e=this.$store.state.serviceTypes;break;case"billing-plan":e=this.$store.state.connection.capabilities().listPlans();break;case"udf-runtime":e=Object.keys(this.$store.state.udfRuntimes);break;case"udf-runtime-version":e=this.context in this.$store.state.udfRuntimes?Object.keys(this.$store.state.udfRuntimes[this.context].versions):[];break}let t=[];switch(this.type){case"collection-id":return e.map(e=>this.e(e.id)).sort(this.sortByLabel);case"job-id":return e.map(e=>({id:e.id,label:c["a"].getResourceTitle(e)})).sort(this.sortByLabel);case"file-path":case"file-paths":return e.map(e=>this.e(e.path)).sort((e,t)=>c["a"].sortByPath(e.id,t.id));case"epsg-code":for(let s in e)t.push({id:s,label:s+": "+e[s]});return t;case"input-format":case"output-format":case"service-type":for(let s in e)t.push({id:s.toUpperCase(),label:e[s].title||s.toUpperCase()});return t.sort(this.sortByLabel);case"billing-plan":return e.map(e=>({id:e.name,label:e.name+(e.paid?" (paid)":" (free)")}));case"year":let i=(new Date).getFullYear(),a=Array.from({length:100},(e,t)=>this.e(String(i-t)));if("string"===typeof this.value&&this.value.length>0&&-1===a.findIndex(e=>e.id===this.value)){var s=this.e(this.value);this.value>i?a.unshift(s):a.push(this.e(this.value))}return a;case"band-name":case"udf-runtime":case"udf-runtime-version":return e.map(e=>this.e(e));default:return c["a"].isObject(this.schema)&&this.schema.isEnum()?this.schema.getEnumChoices().map(e=>this.e(e)):Array.isArray(this.options)?this.options.map(e=>this.e(e)):[]}},showDetails(){return"collection-id"===this.type},deselectLabel(){return this.multiple?"Press enter to remove":""},tagPlaceholder(){return"year"===this.type?"Press enter to select":"Press enter to create a tag"},multiple(){return"file-paths"===this.type},taggable(){return"year"===this.type},preselect(){return this.multiple?!Array.isArray(this.selected)||0===this.selected.length:null===this.selected}},data(){return{selected:null,loaded:!1}},created(){this.loadData()},watch:{type(){this.loadData()},selected(e){let t;if(null===e)t=null;else if(this.multiple)Array.isArray(e)||(e=[e]),t=e.map(e=>e.id);else switch(this.type){case"epsg-code":var s=Number.parseInt(e.id);t=Number.isNaN(s)?null:s;break;case"year":t=String(e.id);break;default:t=e.id}this.$emit("input",t)},context(){switch(this.type){case"udf-runtime":case"udf-runtime-version":this.selected=null,this.preselectFirst();break;case"band-name":this.selected=null,this.loadData();break}}},methods:{...c["a"].mapActions(["describeCollection"]),...c["a"].mapActions("editor",["loadEpsgCodes"]),e(e){return{id:e,label:e}},async loadData(){this.loaded=!1,"epsg-code"===this.type?(await this.loadEpsgCodes(),this.setSelected()):"band-name"===this.type?(await this.describeCollection(this.context),this.setSelected()):this.setSelected(),this.loaded=!0},async preselectFirst(){await this.$nextTick();let e=this.$refs.htmlElement;e.preselectFirst&&Array.isArray(e.filteredOptions)&&e.filteredOptions.length&&e.select(e.filteredOptions[0])},setSelected(){let e=this.value;if(this.multiple&&Array.isArray(e))this.selected=this.selectOptions.filter(t=>e.includes(t.id));else if("string"===typeof e){switch(this.type){case"input-format":case"output-format":case"service-type":e=e.toUpperCase();break}let t=this.selectOptions.find(t=>t.id===e);void 0!==t&&(this.selected=t)}},sortByLabel(e,t){return c["a"].compareStringCaseInsensitive(e.label,t.label)},addValue(e){this.selected=this.e(e)}}},o=n,d=(s("60bc"),s("f22c"),s("2877")),h=Object(d["a"])(o,i,a,!1,null,"c64afcee",null);t["default"]=h.exports},"60bc":function(e,t,s){"use strict";s("0b4b")},b84e:function(e,t,s){},f22c:function(e,t,s){"use strict";s("b84e")}}]);
//# sourceMappingURL=chunk-260d7de1.96605e0b.js.map