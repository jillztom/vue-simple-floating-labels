webpackJsonp([1],{"0W+T":function(t,e){},"0ob2":function(t,e,s){"use strict";function n(t){s("0W+T")}var i=s("xpmu"),a=s("9s/s"),o=s("VU/8"),r=n,l=o(i.a,a.a,!1,r,null,null);e.a=l.exports},"4cEC":function(t,e){},"7ria":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticClass:"section section--xl"},[s("form",{attrs:{action:"#"}},[s("div",{staticClass:"row"},[s("FloatingLabel",{attrs:{config:{label:"Default"}}},[s("input",{attrs:{name:"default",type:"text"}})])],1),t._v(" "),s("div",{staticClass:"row"},[s("FloatingLabel",{attrs:{config:{label:"Custom color",name:"custom-color",color:{focusColor:"#ff00ff",lineColor:"#ff00ff"},hasClearButton:!1}}},[s("input",{attrs:{name:"custom-color",type:"text"}})])],1),t._v(" "),s("div",{staticClass:"row",staticStyle:{margin:"10px"}},[s("CustomFloatingLabel",{attrs:{config:{label:"Wrapper Component",name:"wrapper",line:!1,scale:!1}}},[s("input",{attrs:{name:"wrapper",type:"text"}})])],1),t._v(" "),s("div",{staticClass:"row",staticStyle:{margin:"10px"}},[s("CustomFloatingLabel",{attrs:{config:{label:"Error example",name:"error",line:!1,scale:!1,height:50,labelOffset:{top:3,left:8},classes:{error:"has-error"},hasError:t.hasError,hasClearButton:!1}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{name:"error",type:"text"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),t._v(" "),t.hasError?s("small",{staticStyle:{color:"#f00","font-weight":"bold"}},[t._v("This field contains an error.")]):t._e()],1)])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section section--xl"},[s("h3",{staticClass:"text--center"},[t._v("Simple Floating Labels Vue")])])}],a={render:n,staticRenderFns:i};e.a=a},"8OST":function(t,e,s){"use strict";function n(t){s("fvWH")}var i=s("k30G"),a=s("Q+Mt"),o=s("VU/8"),r=n,l=o(i.a,a.a,!1,r,"data-v-35ddbfcb",null);e.a=l.exports},"9s/s":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-custom-floating-label"},[s("FloatingLabel",{attrs:{config:t.config},on:{focus:function(e){t.focus=!0},blur:function(e){t.focus=!1}}},[t._t("default")],2)],1)},i=[],a={render:n,staticRenderFns:i};e.a=a},"M/Jr":function(t,e,s){"use strict";var n=s("8OST"),i=s("0ob2");e.a={components:{CustomFloatingLabel:i.a,FloatingLabel:n.a},computed:{hasError:function(){return""!==this.value}},data:function(){return{value:""}}}},"Q+Mt":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input__container",class:t.containerClasses,style:t.inputContainerStyle},[t.settings.hasClearButton?s("div",{staticClass:"icon clear__icon",on:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.clear(e)}}},[s("svg",{attrs:{width:"10px",height:"11px",viewBox:"3 3 10 11",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs"),t._v(" "),s("path",{attrs:{id:"Combined-Shape",d:"M8,6.58578644 L5.17157288,3.75735931 L3.75735931,5.17157288 L6.58578644,8 L3.75735931,10.8284271 L5.17157288,12.2426407 L8,9.41421356 L10.8284271,12.2426407 L12.2426407,10.8284271 L9.41421356,8 L12.2426407,5.17157288 L10.8284271,3.75735931 L8,6.58578644 Z",stroke:"none",fill:"#FFFFFF","fill-rule":"evenodd"}})])]):t._e(),t._v(" "),t.settings.line?s("div",{staticClass:"accessibility__icon",style:t.accessibilityStyle}):t._e(),t._v(" "),s("div",{ref:"input-container",staticClass:"slot-container"},[t._t("default")],2),t._v(" "),s("label",{staticClass:"label__placeholder",attrs:{for:t.labelName}},[t._v(t._s(t.config.label))]),t._v(" "),s("label",{staticClass:"label__active",class:t.activeLabelClasses,style:t.activeLabelStyle,attrs:{for:t.labelName}},[t._v(t._s(t.config.label))])])},i=[],a={render:n,staticRenderFns:i};e.a=a},Ygin:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("/5sW"),i=s("l30E");n.a.config.productionTip=!1,new n.a({el:"#app",render:function(t){return t(i.a)}})},fvWH:function(t,e){},k30G:function(t,e,s){"use strict";var n=s("woOf"),i=s.n(n);e.a={name:"FloatingLabel",props:{config:{required:!0}},computed:{activeLabelClasses:function(){return{"label__active--canscale":this.settings.scale}},hasClearButton:function(){return!!this.config.hasOwnProperty("hasClearButton")&&this.config.hasClearButton},containerClasses:function(){var t={"has-line":this.settings.line,"input__container--focus":this.hasFocus,"input__container--content":this.hasContent};return this.settings.hasError&&(t[this.settings.classes.error]=!0),t},labelName:function(){return void 0!==this.config.name?this.config.name:this.config.label.toLowerCase()},accessibilityStyle:function(){var t=this.settings.color.lineColor;return this.settings.hasError&&(t=this.settings.color.errorColor),{"background-color":t}},labelColor:function(){return this.settings.hasError?this.settings.color.errorColor:this.hasFocus?this.settings.color.focusColor:this.settings.color.blurredColor},activeLabelStyle:function(){return{top:this.settings.labelOffset.top+"px",left:this.settings.labelOffset.left+"px",color:this.labelColor}},inputContainerStyle:function(){return{height:this.settings.height+"px"}},settings:function(){return i()({},this.defaultSettings,this.config)}},methods:{clear:function(){this.formElement.value="",this.hasContent=!1,this.hasFocus=!1,this.$emit("clear")},focus:function(t){this.hasFocus=!0,this.$emit("focus")},input:function(t){this.hasFocus=!0,this.hasContent=""!==t.target.value,this.$emit("input")},blur:function(t){this.hasFocus=!1,this.$emit("blur")}},mounted:function(){this.formElement=this.$refs["input-container"].querySelector("input, select"),this.formElement&&(this.formElement.addEventListener("input",this.input),this.formElement.addEventListener("blur",this.blur),this.formElement.addEventListener("focus",this.focus),this.hasContent=!!this.formElement.value,"select-one"===this.formElement.type&&(this.hasContent=!0,this.settings.scale=!1,this.settings.hasClearButton=!1))},data:function(){return{defaultSettings:{classes:{error:"has-error"},hasError:!1,height:64,hasClearButton:!0,line:!0,scale:!0,labelOffset:{top:10,left:8},color:{focusColor:"#128CED",lineColor:"#128CED",errorColor:"#ff0000",blurredColor:"rgba(3, 23, 40, 0.34)"}},hasFocus:!1,hasContent:!1}}}},l30E:function(t,e,s){"use strict";function n(t){s("4cEC")}var i=s("M/Jr"),a=s("7ria"),o=s("VU/8"),r=n,l=o(i.a,a.a,!1,r,null,null);e.a=l.exports},xpmu:function(t,e,s){"use strict";var n=s("8OST");e.a={props:["config"],components:{FloatingLabel:n.a}}}},["Ygin"]);
//# sourceMappingURL=app.580db46bc33280088c18.js.map