(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e53baaf"],{"0c44":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Modal",{attrs:{show:t.show,title:t.title},on:{closed:function(e){return t.$emit("closed")}}},[0==t.listCount?i("strong",{staticClass:"listEmpty"},[t._v("Sorry, no data available.")]):i("ul",{staticClass:"modal-list"},t._l(t.listItems,(function(e,s){return i("li",{key:s,on:{click:function(i){return t.doMainListAction(e,s)}}},[i("strong",[t._v(t._s(Array.isArray(t.listItems)?e:s))]),t._l(t.otherListActions,(function(o){return i("button",{key:o.icon,attrs:{type:"button",title:o.title},on:{click:function(i){return i.preventDefault(),i.stopPropagation(),t.doListAction(e,s,o.callback)}}},[i("i",{class:"fas fa-"+o.icon})])}))],2)})),0)])},o=[],n=i("025e"),a=i("2930"),l={name:"ListModal",components:{Modal:a["a"]},props:{title:{type:String,default:null},list:{type:Array,default:()=>[]},listActions:{type:Array,default:()=>[]}},data(){return{show:!0}},computed:{listCount(){return n["a"].size(this.listItems)},listItems(){return"function"==typeof this.list?this.list():this.list},otherListActions(){return Array.isArray(this.listActions)&&this.listActions.length>1?this.listActions.slice(1):[]}},methods:{doListAction(t,e,i){const s=i(Array.isArray(this.listItems)?t:e);!0===s&&(this.show=!1)},doMainListAction(t,e){this.listActions.length>0&&this.doListAction(t,e,this.listActions[0].callback)}}},r=l,c=(i("c392"),i("2877")),d=Object(c["a"])(r,s,o,!1,null,"29a5fdc7",null);e["default"]=d.exports},2930:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal",style:{"z-index":t.zIndex},on:{mousedown:t.backgroundClose}},[i("div",{ref:"container",staticClass:"modal-container",style:t.style},[i("header",{staticClass:"modal-header",on:{mousedown:function(e){return e.preventDefault(),e.stopPropagation(),t.startMove.apply(null,arguments)}}},[t._t("header",(function(){return[i("h2",[t._v(t._s(t.title))]),i("span",{staticClass:"close",on:{click:t.close}},[i("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]}))],2),i("main",{staticClass:"modal-content"},[t._t("default")],2),i("footer",{staticClass:"modal-footer"},[t._t("footer")],2)])])},o=[],n=i("3115"),a=i("025e"),l={name:"Modal",mixins:[n["a"]],props:{title:{type:String,default:null},minWidth:{type:String,default:"30%"},maxWidth:{type:String,default:"85%"},minHeight:{type:String,default:"auto"},show:{type:Boolean,default:!0}},data(){return{zIndex:1e3,position:null,dragPosition:null}},computed:{...a["a"].mapState("editor",["hightestModalZIndex"]),style(){let t={"min-width":this.minWidth,"max-width":this.maxWidth,"min-height":this.minHeight};return Array.isArray(this.position)&&(t.position="absolute",t.left=this.position[0]+"px",t.top=this.position[1]+"px"),t}},watch:{show:{immediate:!0,handler(t){t?this.open():this.close()}}},methods:{...a["a"].mapMutations("editor",["openModal","closeModal"]),open(){this.openModal(),this.zIndex=this.hightestModalZIndex,window.addEventListener("keydown",this.escCloseListener),this.$emit("shown")},close(){window.removeEventListener("keydown",this.escCloseListener),this.closeModal(),this.$emit("closed")},startMove(t){this.dragPosition=[t.clientX,t.clientY],document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.stopMove)},stopMove(){document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.stopMove)},move(t){t.preventDefault(),this.position=[this.$refs.container.offsetLeft-(this.dragPosition[0]-t.clientX),this.$refs.container.offsetTop-(this.dragPosition[1]-t.clientY)],this.dragPosition=[t.clientX,t.clientY]},escCloseListener(t){if("Escape"==t.key)return this.close(),t.preventDefault(),t.stopPropagation(),!1},backgroundClose(t){t.target===this.$el&&this.close()}}},r=l,c=(i("8781"),i("2877")),d=Object(c["a"])(r,s,o,!1,null,null,null);e["a"]=d.exports},"6b1e":function(t,e,i){},8781:function(t,e,i){"use strict";i("6b1e")},"9c2b":function(t,e,i){},c392:function(t,e,i){"use strict";i("9c2b")}}]);
//# sourceMappingURL=chunk-6e53baaf.54f4a92d.js.map