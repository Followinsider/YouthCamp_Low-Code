(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-120c3356"],{"41e8":function(t,e,n){},b8d8:function(t,e,n){"use strict";n("41e8")},d59a:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"attr-list"},[n("CommonAttr"),n("el-form",[n("el-form-item",{attrs:{label:"添加视频"}},[n("div",{staticClass:"avatar el-icon-upload el-icon--right"},[n("input",{staticClass:"upload ",attrs:{type:"file"},on:{change:t.getObjectURL}}),t._v(" 上传视频 ")])])],1)],1)},r=[],a=(n("b64b"),n("4de4"),n("d3b7"),n("caad"),n("2532"),n("c81d")),s=n("39df"),i={components:{CommonAttr:s["a"]},data:function(){return{optionMap:a["b"],styleData:a["d"],textAlignOptions:a["f"],borderStyleOptions:a["a"],verticalAlignOptions:a["g"],selectKey:a["c"]}},computed:{styleKeys:function(){if(this.curComponent){var t=Object.keys(this.curComponent.style);return this.styleData.filter((function(e){return t.includes(e.key)}))}return[]},curComponent:function(){return this.$store.state.curComponent}},methods:{isIncludesColor:function(t){return t.toLowerCase().includes("color")},getObjectURL:function(t){var e=this,n=null,o=new FileReader;o.readAsDataURL(t.target.files[0]),o.onload=function(t){n=t.target.result,e.curComponent.propValue.url=n}}}},c=i,l=(n("b8d8"),n("2877")),u=Object(l["a"])(c,o,r,!1,null,"79ffa3b4",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-120c3356.0558d2e6.js.map