(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-687b5005"],{"0538":function(t,e,i){"use strict";var n=i("da84"),r=i("e330"),o=i("59ed"),s=i("861d"),a=i("1a2d"),c=i("f36a"),l=i("40d5"),u=n.Function,d=r([].concat),h=r([].join),f={},v=function(t,e,i){if(!a(f,e)){for(var n=[],r=0;r<e;r++)n[r]="a["+r+"]";f[e]=u("C,a","return new C("+h(n,",")+")")}return f[e](t,i)};t.exports=l?u.bind:function(t){var e=o(this),i=e.prototype,n=c(arguments,1),r=function(){var i=d(n,c(arguments));return this instanceof r?v(e,i.length,i):e.apply(t,i)};return s(i)&&(r.prototype=i),r}},"0ccb":function(t,e,i){var n=i("e330"),r=i("50c4"),o=i("577e"),s=i("1148"),a=i("1d80"),c=n(s),l=n("".slice),u=Math.ceil,d=function(t){return function(e,i,n){var s,d,h=o(a(e)),f=r(i),v=h.length,p=void 0===n?" ":o(n);return f<=v||""==p?h:(s=f-v,d=c(p,u(s/p.length)),d.length>s&&(d=l(d,0,s)),t?h+d:d+h)}};t.exports={start:d(!1),end:d(!0)}},"0d03":function(t,e,i){var n=i("e330"),r=i("6eeb"),o=Date.prototype,s="Invalid Date",a="toString",c=n(o[a]),l=n(o.getTime);String(new Date(NaN))!=s&&r(o,a,(function(){var t=l(this);return t===t?c(this):s}))},1148:function(t,e,i){"use strict";var n=i("da84"),r=i("5926"),o=i("577e"),s=i("1d80"),a=n.RangeError;t.exports=function(t){var e=o(s(this)),i="",n=r(t);if(n<0||n==1/0)throw a("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(i+=e);return i}},"25f0":function(t,e,i){"use strict";var n=i("e330"),r=i("5e77").PROPER,o=i("6eeb"),s=i("825a"),a=i("3a9b"),c=i("577e"),l=i("d039"),u=i("ad6d"),d="toString",h=RegExp.prototype,f=h[d],v=n(u),p=l((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),g=r&&f.name!=d;(p||g)&&o(RegExp.prototype,d,(function(){var t=s(this),e=c(t.source),i=t.flags,n=c(void 0===i&&a(h,t)&&!("flags"in h)?v(t):i);return"/"+e+"/"+n}),{unsafe:!0})},4795:function(t,e,i){var n=i("23e7"),r=i("da84"),o=i("2ba4"),s=i("1626"),a=i("342f"),c=i("f36a"),l=i("d6d6"),u=/MSIE .\./.test(a),d=r.Function,h=function(t){return function(e,i){var n=l(arguments.length,1)>2,r=s(e)?e:d(e),a=n?c(arguments,2):void 0;return t(n?function(){o(r,this,a)}:r,i)}};n({global:!0,bind:!0,forced:u},{setTimeout:h(r.setTimeout),setInterval:h(r.setInterval)})},"4d90":function(t,e,i){"use strict";var n=i("23e7"),r=i("0ccb").start,o=i("9a0c");n({target:"String",proto:!0,forced:o},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"66d5":function(t,e,i){"use strict";i("7d9e")},"6ea9":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("canvas",{ref:"canvas"}),i("div",{staticClass:"ctrl-box"},[i("div",{staticClass:"btn-box"},[i("el-button",{attrs:{icon:t.videoState},on:{click:t.ProgressStop}}),i("div",{staticClass:"progress-time"},[t._v(t._s(t.timeStr))])],1),i("div",{ref:"progressBox",staticClass:"progress-box",on:{click:t.ProgressBox}},[i("div",{ref:"progress",staticClass:"progress"})])]),i("video",{ref:"video",attrs:{width:"0",src:t.videolink,type:"video/mp4"}})])},r=[],o=(i("4795"),i("c0b6"),i("4d90"),i("d401"),i("0d03"),i("d3b7"),i("25f0"),i("99af"),i("728d")),s={props:{propValue:{type:Object,require:!0,default:function(){}},element:{type:Object,default:function(){}}},extends:o["a"],data:function(){return{videolink:this.propValue.url,progressTimer:null,timeStr:"00:00/00:00",videoState:"el-icon-video-pause"}},watch:{"propValue.url":function(){this.changevideo()},"element.style.width":function(){this.render()},"element.style.height":function(){this.render()}},mounted:function(){this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.progressBox=this.$refs.progressBox,this.progress=this.$refs.progress,this.video=this.$refs.video,this.render()},methods:{render:function(){function t(){var e=this.element.style,i=e.width,n=e.height;this.canvas.width=i,this.canvas.height=n,this.ctx.clearRect(0,0,i,n),this.ctx.drawImage(this.video,0,0,i,n),setTimeout(t.bind(this),0)}setTimeout(t.bind(this),0)},changevideo:function(){this.videolink=this.propValue.url},changeProgress:function(){this.timeStr=this.parseTime(this.video.currentTime)+"/"+this.parseTime(this.video.duration);var t=this.video.currentTime/this.video.duration;this.progress.style.width=100*t+"%"},parseTime:function(t){if(!t)return"";var e=Math.floor(t),i=Math.floor(e/60).toString().padStart(2,"0"),n=(e%60).toString().padStart(2,"0");return"".concat(i,":").concat(n)},ProgressBox:function(t){clearInterval(this.progressTimer);var e=t.pageX-this.progressBox.getBoundingClientRect().x,i=e/this.progressBox.getBoundingClientRect().width;this.video.currentTime=i*this.video.duration,this.video.play(),this.progressTimer=setInterval(this.changeProgress,60)},ProgressStop:function(){this.video.paused?(this.video.play(),this.videoState="el-icon-video-pause",this.progressTimer=setInterval(this.changeProgress,60)):(this.video.pause(),this.videoState="el-icon-video-play",clearInterval(this.progressTimer))}}},a=s,c=(i("66d5"),i("2877")),l=Object(c["a"])(a,n,r,!1,null,"4eb3f0f4",null);e["default"]=l.exports},"728d":function(t,e,i){"use strict";i("4160"),i("d3b7"),i("159b"),i("4de4");var n,r,o=i("986e"),s={props:{linkage:{type:Object,default:function(){}},element:{type:Object,default:function(){}}},created:function(){var t,e;null!==(t=this.linkage)&&void 0!==t&&null!==(e=t.data)&&void 0!==e&&e.length&&(o["a"].$on("v-click",this.onClick),o["a"].$on("v-hover",this.onHover),o["a"].$on("v-dblclick",this.onDblclick))},mounted:function(){var t=this.linkage||{},e=t.data,i=t.duration;null!==e&&void 0!==e&&e.length&&(this.$el.style.transition="all ".concat(i,"s"))},beforeDestroy:function(){var t,e;null!==(t=this.linkage)&&void 0!==t&&null!==(e=t.data)&&void 0!==e&&e.length&&(o["a"].$off("v-click",this.onClick),o["a"].$off("v-hover",this.onHover),o["a"].$on("v-dblclick",this.onDblclick))},methods:{changeStyle:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.forEach((function(e){e.style.forEach((function(e){e.key&&(t.element.style[e.key]=e.value)}))}))},onClick:function(t){var e=this.linkage.data.filter((function(e){return e.id===t&&"v-click"===e.event}));this.changeStyle(e)},onDblclick:function(t){var e=this.linkage.data.filter((function(e){return e.id===t&&"v-dblclick"===e.event}));console.log("v-dblclick"),this.changeStyle(e)},onHover:function(t){var e=this.linkage.data.filter((function(e){return e.id===t&&"v-hover"===e.event}));this.changeStyle(e)}}},a=s,c=i("2877"),l=Object(c["a"])(a,n,r,!1,null,null,null);e["a"]=l.exports},"7d9e":function(t,e,i){},"99af":function(t,e,i){"use strict";var n=i("23e7"),r=i("da84"),o=i("d039"),s=i("e8b5"),a=i("861d"),c=i("7b0b"),l=i("07fa"),u=i("8418"),d=i("65f0"),h=i("1dde"),f=i("b622"),v=i("2d00"),p=f("isConcatSpreadable"),g=9007199254740991,b="Maximum allowed index exceeded",m=r.TypeError,k=v>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),y=h("concat"),x=function(t){if(!a(t))return!1;var e=t[p];return void 0!==e?!!e:s(t)},S=!k||!y;n({target:"Array",proto:!0,forced:S},{concat:function(t){var e,i,n,r,o,s=c(this),a=d(s,0),h=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?s:arguments[e],x(o)){if(r=l(o),h+r>g)throw m(b);for(i=0;i<r;i++,h++)i in o&&u(a,h,o[i])}else{if(h>=g)throw m(b);u(a,h++,o)}return a.length=h,a}})},"9a0c":function(t,e,i){var n=i("342f");t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)},c0b6:function(t,e,i){var n=i("23e7"),r=i("0538");n({target:"Function",proto:!0,forced:Function.bind!==r},{bind:r})}}]);
//# sourceMappingURL=chunk-687b5005.e06ca80f.js.map