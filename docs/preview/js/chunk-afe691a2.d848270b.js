(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-afe691a2"],{"15af":function(t,e,a){var s=a("3eba");a("cb69"),a("abff");var i=a("7f96"),r=a("87c3");a("01ed"),s.registerVisual(i("scatter","circle")),s.registerLayout(r("scatter"))},4092:function(t,e,a){"use strict";var s=a("c90e"),i=a.n(s);i.a},"7fe0":function(t,e,a){"use strict";function s(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}var i=a("6f0c"),r=a("4cbb"),o=a("89d6");a("15af");var n=s(a("6521")),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t};function c(t){var e=t.dimension,a=t.rows,s=t.xAxisName,i=t.axisVisible,r=t.xAxisType;return e.map(function(t,e){return{type:r,nameLocation:"middle",nameGap:22,name:s[e]||"",axisTick:{show:!0,lineStyle:{color:"#eee"}},data:a.map(function(e){return e[t]}),show:i}})}function d(t){var e=t.rows,a=t.axisSite,s=t.metrics,r=t.area,o=t.stack,n=t.nullAddZero,l=t.labelMap,c=t.label,d=t.itemStyle,m=t.lineStyle,u=t.areaStyle,p=t.dimension,f=[],h={},v=o&&i.getStackMap(o);return s.forEach(function(t){h[t]=[]}),e.forEach(function(t){s.forEach(function(e){var a=null;null!=t[e]?a=t[e]:n&&(a=0),h[e].push([t[p[0]],a])})}),s.forEach(function(t){var e={name:null!=l[t]?l[t]:t,type:"line",data:h[t]};r&&(e.areaStyle={normal:{}}),a.right&&(e.yAxisIndex=~a.right.indexOf(t)?1:0),o&&v[t]&&(e.stack=v[t]),c&&(e.label=c),d&&(e.itemStyle=d),m&&(e.lineStyle=m),u&&(e.areaStyle=u),f.push(e)}),f}function m(t){for(var e=t.yAxisName,a=t.yAxisType,s=t.axisVisible,r=t.scale,o=t.min,n=t.max,c=t.digit,d={type:"value",axisTick:{show:!1},show:s},m=[],u=function(t){a[t]?m[t]=l({},d,{axisLabel:{formatter:function(e){return i.getFormated(e,a[t],c)}}}):m[t]=l({},d),m[t].name=e[t]||"",m[t].scale=r[t]||!1,m[t].min=o[t]||null,m[t].max=n[t]||null},p=0;p<2;p++)u(p);return m}function u(t){var e=t.axisSite,a=t.yAxisType,s=t.digit,o=t.labelMap,n=t.tooltipFormatter,l=e.right||[],c=o?l.map(function(t){return void 0===o[t]?t:o[t]}):l;return{trigger:"axis",formatter:function(t){if(n)return n.apply(null,arguments);var e=[],o=t[0],l=o.name,d=o.axisValueLabel,m=l||d;return e.push(m+"<br>"),t.forEach(function(t){var o=t.seriesName,n=t.data,l=t.marker,d=null,m=~c.indexOf(o)?a[1]:a[0],u=r.isArray(n)?n[1]:n;d=i.getFormated(u,m,s),e.push(l),e.push(o+": "+d),e.push("<br>")}),e.join("")}}}function p(t){var e=t.metrics,a=t.legendName,s=t.labelMap;if(!a&&!s)return{data:e};var i=s?e.map(function(t){return null==s[t]?t:s[t]}):e;return{data:i,formatter:function(t){return null!=a[t]?a[t]:t}}}var f=function(t,e,a,s){e=r.isArray(e)?e:[],t=r.isArray(t)?t:[];var i=a.axisSite,o=void 0===i?{}:i,n=a.yAxisType,l=void 0===n?["normal","normal"]:n,f=a.xAxisType,h=void 0===f?"category":f,v=a.yAxisName,x=void 0===v?[]:v,g=a.dimension,y=void 0===g?[t[0]]:g,b=a.xAxisName,w=void 0===b?[]:b,S=a.axisVisible,_=void 0===S||S,C=a.area,A=a.stack,k=a.scale,T=void 0===k?[!1,!1]:k,N=a.min,D=void 0===N?[null,null]:N,I=a.max,V=void 0===I?[null,null]:I,L=a.nullAddZero,z=void 0!==L&&L,M=a.digit,P=void 0===M?2:M,E=a.legendName,O=void 0===E?{}:E,F=a.labelMap,R=void 0===F?{}:F,j=a.label,H=a.itemStyle,U=a.lineStyle,B=a.areaStyle,Z=s.tooltipVisible,G=s.legendVisible,J=s.tooltipFormatter,K=t.slice();o.left&&o.right?K=o.left.concat(o.right):o.left&&!o.right?K=o.left:a.metrics?K=a.metrics:K.splice(t.indexOf(y[0]),1);var X=G&&p({metrics:K,legendName:O,labelMap:R}),Y=Z&&u({axisSite:o,yAxisType:l,digit:P,labelMap:R,xAxisType:h,tooltipFormatter:J}),$=c({dimension:y,rows:e,xAxisName:w,axisVisible:_,xAxisType:h}),q=m({yAxisName:x,yAxisType:l,axisVisible:_,scale:T,min:D,max:V,digit:P}),Q=d({rows:e,axisSite:o,metrics:K,area:C,stack:A,nullAddZero:z,labelMap:R,label:j,itemStyle:H,lineStyle:U,areaStyle:B,xAxisType:h,dimension:y}),W={legend:X,xAxis:$,series:Q,yAxis:q,tooltip:Y};return W};function h(t,e){return{data:t,formatter:function(t){return null!=e[t]?e[t]:t}}}function v(t){var e=t.tooltipTrigger;return{trigger:e,formatter:function(e){return r.isArray(e)?e.map(function(e){return x(e,t)}).join(""):x(e,t)}}}function x(t,e){var a=e.labelMap,s=e.columns,r=e.dataType,n=e.digit,l=[],c=t.color,d=t.seriesName,m=t.data.value;return l.push(o.itemPoint(c)+" "+d+"<br>"),m.forEach(function(t,e){var o=a[s[e]]||s[e],c=isNaN(t)?t:i.getFormated(t,r[s[e]],n);l.push(o+": "+c+"<br>")}),l.join("")}function g(t){var e=t.xAxisName,a=t.axisVisible,s=t.xAxisType,i=t.rows,r=t.dataLabels,o=t.dimension,n=[];return r.forEach(function(t){var e=i[t];e.forEach(function(t){var e=t[o];e&&!~n.indexOf(e)&&n.push(e)})}),[{type:s,show:a,name:e,data:n}]}function y(t){var e=t.min,a=t.max,s=t.scale,r=t.yAxisName,o=t.dataType,n=t.metrics,l=t.digit,c=t.axisVisible;return{type:"value",show:c,scale:s,min:e,max:a,axisTick:{show:!1},name:r,axisLabel:{formatter:function(t){return i.getFormated(t,o[n[0]],l)}}}}function b(t){var e=t.rows,a=t.dataLabels,s=t.columns,i=t.metrics,r=t.dimension,o=t.label,n=t.itemStyle,l=t.symbol,c=t.symbolSizeMax,d=t.symbolSize,m=t.symbolRotate,u=t.symbolOffset,p=t.cursor,f=s.filter(function(t){return!~i.indexOf(t)&&t!==r}),h=[];a.forEach(function(t){e[t].forEach(function(t){h.push(t[i[1]])})});var v=Math.max.apply(null,h),x=[];return a.forEach(function(t){var a=[],s=e[t];s.forEach(function(t){var e={value:[]};e.value.push(t[r],t[i[0]],t[i[1]]),f.forEach(function(a){e.value.push(t[a])}),e.symbolSize=d||t[i[1]]/v*c,a.push(e)}),x.push({type:"scatter",data:a,name:t,label:o,itemStyle:n,symbol:l,symbolRotate:m,symbolOffset:u,cursor:p})}),x}var w=function(t,e,a,s){var i=a.dimension,o=void 0===i?t[0]:i,n=a.metrics,c=void 0===n?[t[1],t[2]]:n,d=a.dataType,m=void 0===d?{}:d,u=a.xAxisType,p=void 0===u?"category":u,x=a.xAxisName,w=a.yAxisName,S=a.digit,_=void 0===S?2:S,C=a.legendName,A=void 0===C?{}:C,k=a.labelMap,T=void 0===k?{}:k,N=a.tooltipTrigger,D=void 0===N?"item":N,I=a.axisVisible,V=void 0===I||I,L=a.symbolSizeMax,z=void 0===L?50:L,M=a.symbol,P=a.symbolSize,E=a.symbolRotate,O=a.symbolOffset,F=a.cursor,R=a.min,j=a.max,H=a.scale,U=a.label,B=a.itemStyle;if(r.isArray(e)){var Z=l({},a,{xAxisName:x?[x]:void 0,yAxisName:w?[w]:void 0,scale:H?[H]:void 0,min:R?[R]:void 0,max:j?[j]:void 0,dimension:o?[o]:void 0}),G=f(t,e,Z,s);return G&&G.series?(G.series.forEach(function(t){l(t,{type:"scatter",symbol:M,symbolSize:P||10,symbolRotate:E,symbolOffset:O,cursor:F,label:U,itemStyle:B})}),G):{}}var J=s.tooltipVisible,K=s.legendVisible,X=Object.keys(e),Y=K&&h(X,A),$=J&&v({tooltipTrigger:D,labelMap:T,columns:t,dataType:m,digit:_}),q=g({xAxisName:x,axisVisible:V,xAxisType:p,dataLabels:X,dimension:o,rows:e}),Q=y({min:R,max:j,scale:H,yAxisName:w,dataType:m,metrics:c,digit:_,axisVisible:V}),W=b({rows:e,dataLabels:X,columns:t,metrics:c,dimension:o,label:U,itemStyle:B,symbol:M,symbolSizeMax:z,symbolSize:P,symbolRotate:E,symbolOffset:O,cursor:F});return{legend:Y,tooltip:$,xAxis:q,yAxis:Q,series:W}},S=l({},n,{name:"VeScatter",data:function(){return this.chartHandler=w,{}}});t.exports=S},abff:function(t,e,a){var s=a("3eba"),i=a("f706"),r=a("c965"),o=a("87c3");s.extendChartView({type:"scatter",render:function(t,e,a){var s=t.getData(),i=this._updateSymbolDraw(s,t);i.updateData(s),this._finished=!0},incrementalPrepareRender:function(t,e,a){var s=t.getData(),i=this._updateSymbolDraw(s,t);i.incrementalPrepareUpdate(s),this._finished=!1},incrementalRender:function(t,e,a){this._symbolDraw.incrementalUpdate(t,e.getData()),this._finished=t.end===e.getData().count()},updateTransform:function(t,e,a){var s=t.getData();if(this.group.dirty(),!this._finished||s.count()>1e4||!this._symbolDraw.isPersistent())return{update:!0};var i=o().reset(t);i.progress&&i.progress({start:0,end:s.count()},s),this._symbolDraw.updateLayout(s)},_updateSymbolDraw:function(t,e){var a=this._symbolDraw,s=e.pipelineContext,o=s.large;return a&&o===this._isLargeDraw||(a&&a.remove(),a=this._symbolDraw=o?new r:new i,this._isLargeDraw=o,this.group.removeAll()),this.group.add(a.group),a},remove:function(t,e){this._symbolDraw&&this._symbolDraw.remove(!0),this._symbolDraw=null},dispose:function(){}})},c90e:function(t,e,a){},c965:function(t,e,a){var s=a("2306"),i=a("a15a"),r=i.createSymbol,o=a("392f"),n=4,l=s.extendShape({shape:{points:null},symbolProxy:null,buildPath:function(t,e){var a=e.points,s=e.size,i=this.symbolProxy,r=i.shape,o=t.getContext?t.getContext():t,l=o&&s[0]<n;if(!l)for(var c=0;c<a.length;){var d=a[c++],m=a[c++];isNaN(d)||isNaN(m)||(r.x=d-s[0]/2,r.y=m-s[1]/2,r.width=s[0],r.height=s[1],i.buildPath(t,r,!0))}},afterBrush:function(t){var e=this.shape,a=e.points,s=e.size,i=s[0]<n;if(i){this.setTransform(t);for(var r=0;r<a.length;){var o=a[r++],l=a[r++];isNaN(o)||isNaN(l)||t.fillRect(o-s[0]/2,l-s[1]/2,s[0],s[1])}this.restoreTransform(t)}},findDataIndex:function(t,e){for(var a=this.shape,s=a.points,i=a.size,r=Math.max(i[0],4),o=Math.max(i[1],4),n=s.length/2-1;n>=0;n--){var l=2*n,c=s[l]-r/2,d=s[l+1]-o/2;if(t>=c&&e>=d&&t<=c+r&&e<=d+o)return n}return-1}});function c(){this.group=new s.Group}var d=c.prototype;d.isPersistent=function(){return!this._incremental},d.updateData=function(t){this.group.removeAll();var e=new l({rectHover:!0,cursor:"default"});e.setShape({points:t.getLayout("symbolPoints")}),this._setCommon(e,t),this.group.add(e),this._incremental=null},d.updateLayout=function(t){if(!this._incremental){var e=t.getLayout("symbolPoints");this.group.eachChild(function(t){if(null!=t.startIndex){var a=2*(t.endIndex-t.startIndex),s=4*t.startIndex*2;e=new Float32Array(e.buffer,s,a)}t.setShape("points",e)})}},d.incrementalPrepareUpdate=function(t){this.group.removeAll(),this._clearIncremental(),t.count()>2e6?(this._incremental||(this._incremental=new o({silent:!0})),this.group.add(this._incremental)):this._incremental=null},d.incrementalUpdate=function(t,e){var a;this._incremental?(a=new l,this._incremental.addDisplayable(a,!0)):(a=new l({rectHover:!0,cursor:"default",startIndex:t.start,endIndex:t.end}),a.incremental=!0,this.group.add(a)),a.setShape({points:e.getLayout("symbolPoints")}),this._setCommon(a,e,!!this._incremental)},d._setCommon=function(t,e,a){var s=e.hostModel,i=e.getVisual("symbolSize");t.setShape("size",i instanceof Array?i:[i,i]),t.symbolProxy=r(e.getVisual("symbol"),0,0,0,0),t.setColor=t.symbolProxy.setColor;var o=t.shape.size[0]<n;t.useStyle(s.getModel("itemStyle").getItemStyle(o?["color","shadowBlur","shadowColor"]:["color"]));var l=e.getVisual("color");l&&t.setColor(l),a||(t.seriesIndex=s.seriesIndex,t.on("mousemove",function(e){t.dataIndex=null;var a=t.findDataIndex(e.offsetX,e.offsetY);a>=0&&(t.dataIndex=a+(t.startIndex||0))}))},d.remove=function(){this._clearIncremental(),this._incremental=null,this.group.removeAll()},d._clearIncremental=function(){var t=this._incremental;t&&t.clearDisplaybles()};var m=c;t.exports=m},cb69:function(t,e,a){var s=a("3301"),i=a("4f85"),r=i.extend({type:"series.scatter",dependencies:["grid","polar","geo","singleAxis","calendar"],getInitialData:function(t,e){return s(this.getSource(),this)},brushSelector:"point",getProgressive:function(){var t=this.option.progressive;return null==t?this.option.large?5e3:this.get("progressive"):t},getProgressiveThreshold:function(){var t=this.option.progressiveThreshold;return null==t?this.option.large?1e4:this.get("progressiveThreshold"):t},defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,symbolSize:10,large:!1,largeThreshold:2e3,itemStyle:{opacity:.8}}});t.exports=r},ce04:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-home"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,sm:12,lg:6}},[a("el-card",{staticClass:"m-box-card",attrs:{shadow:"hover"}},[a("div",{staticClass:"m-icon"},[a("i",{staticClass:"el-icon-set-up",staticStyle:{color:"#F56C6C"}})]),a("div",{staticClass:"m-content"},[a("p",[t._v("待办事项")]),a("p",{staticClass:"m-count"},[t._v(t._s(t.info.tasks))])])])],1),a("el-col",{attrs:{xs:24,sm:12,lg:6}},[a("el-card",{staticClass:"m-box-card",attrs:{shadow:"hover"}},[a("div",{staticClass:"m-icon"},[a("i",{staticClass:"el-icon-message",staticStyle:{color:"#E6A23C"}})]),a("div",{staticClass:"m-content"},[a("p",[t._v("系统消息")]),a("p",{staticClass:"m-count"},[t._v(t._s(t.info.message))])])])],1),a("el-col",{attrs:{xs:24,sm:12,lg:6}},[a("el-card",{staticClass:"m-box-card",attrs:{shadow:"hover"}},[a("div",{staticClass:"m-icon"},[a("i",{staticClass:"el-icon-document",staticStyle:{color:"#67C23A"}})]),a("div",{staticClass:"m-content"},[a("p",[t._v("代码量")]),a("p",{staticClass:"m-count"},[t._v(t._s(t.info.code))])])])],1),a("el-col",{attrs:{xs:24,sm:12,lg:6}},[a("el-card",{staticClass:"m-box-card",attrs:{shadow:"hover"}},[a("div",{staticClass:"m-icon"},[a("i",{staticClass:"el-icon-sunrise-1",staticStyle:{color:"#409EFF"}})]),a("div",{staticClass:"m-content"},[a("p",[t._v("天气")]),a("p",[t._v(t._s(t.info.weather))])])])],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{sm:24,lg:18}},[a("el-card",{staticClass:"m-box-card",attrs:{shadow:"hover"}},[a("ve-line",{attrs:{data:t.chartData1,settings:t.chartSettings1}})],1)],1),a("el-col",{attrs:{sm:24,lg:6}},[a("el-row",{attrs:{gutter:20,align:""}},[a("el-col",{attrs:{sm:12,lg:24}},[a("el-card",{staticClass:"m-box-card",staticStyle:{height:"215px","background-color":"rgb(143, 201, 251)",color:"#ffffff"},attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("p",{staticStyle:{"text-align":"center"}},[a("i",{staticClass:"el-icon-user-solid",staticStyle:{color:"#F56C6C","font-size":"35px"}})]),a("div",{staticStyle:{"padding-top":"10px"}},[a("p",[t._v("账号："+t._s(t.user.name))]),a("p",[t._v("时间："+t._s(t.user.loginTime))]),a("p",[t._v("地址："+t._s(t.user.loginIp))])])]),a("div",{staticStyle:{"font-size":"12px"}},[a("p",[t._v("上次登录时间："+t._s(t.user.lastTime))]),a("p",[t._v("上次登录地址："+t._s(t.user.lastIp))])])])],1),a("el-col",{attrs:{sm:12,lg:24}},[a("el-card",{staticClass:"m-box-card",attrs:{shadow:"hover"}},[a("div",{staticStyle:{height:"215px",margin:"-20px","background-color":"rgb(247, 151, 214)",color:"#ffffff",overflow:"auto"}},[a("div",{staticStyle:{padding:"20px"}},[a("p",{staticStyle:{"font-weight":"bold","text-align":"center"}},[t._v("重要通知")]),t._l(20,function(e){return a("p",{key:e},[t._v(t._s(e)+". 帅哥/美女出没，请注意！")])}),a("p",[t._v("~(˘▾˘~)~(˘▾˘~)")]),a("p",[t._v("对面的帅哥/美女，你好啊。")])],2)])])],1)],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{sm:24,lg:12}},[a("el-card",{staticClass:"m-box-card",staticStyle:{height:"300px"},attrs:{shadow:"hover"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData2,"row-class-name":t.tableRowClassName}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"130"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"80"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)],1),a("el-col",{attrs:{sm:24,lg:12}},[a("el-card",{staticClass:"m-box-card",staticStyle:{height:"300px"},attrs:{shadow:"hover"}},[a("p",{staticStyle:{"text-align":"center","font-size":"25px",padding:"20px"}},[t._v("任务进度")]),a("div",{staticClass:"m-task-box"},[a("div",{staticClass:"m-task-text"},[t._v("语文：")]),a("div",{staticClass:"m-task-pro"},[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:0}})],1)]),a("div",{staticClass:"m-task-box"},[a("div",{staticClass:"m-task-text"},[t._v("数学：")]),a("div",{staticClass:"m-task-pro"},[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:70}})],1)]),a("div",{staticClass:"m-task-box"},[a("div",{staticClass:"m-task-text"},[t._v("英语：")]),a("div",{staticClass:"m-task-pro"},[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:80,color:"rgba(142, 113, 199, 0.7)"}})],1)]),a("div",{staticClass:"m-task-box"},[a("div",{staticClass:"m-task-text"},[t._v("生物：")]),a("div",{staticClass:"m-task-pro"},[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:100,status:"success"}})],1)]),a("div",{staticClass:"m-task-box"},[a("div",{staticClass:"m-task-text"},[t._v("地理：")]),a("div",{staticClass:"m-task-pro"},[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:50,status:"exception"}})],1)])])],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-card",{staticClass:"m-box-card",attrs:{shadow:"hover"}},[a("ve-scatter",{attrs:{data:t.chartData2,settings:t.chartSettings2}})],1)],1)],1)],1)},i=[],r=a("c3da"),o=a.n(r),n=a("7fe0"),l=a.n(n),c={name:"PageHome",components:{VeLine:o.a,VeScatter:l.a},data:function(){return{info:{tasks:parseFloat(12).toLocaleString(),message:parseFloat(6).toLocaleString(),code:parseFloat(5234).toLocaleString(),weather:"深圳，26℃，多云"},user:{name:"林锦泽",loginTime:"2018-01-05 12:00:00",loginIp:"172.28.12.34",lastTime:"2018-01-01 12:00:00",lastIp:"172.28.12.34"},chartData1:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]},chartSettings1:{axisSite:{right:["下单率"]},yAxisType:["KMB","percent"],yAxisName:["数值","比率"]},chartData2:{columns:["日期","访问用户","下单用户","年龄"],rows:{"上海":[{"日期":"1/1","访问用户":123,"年龄":3,"下单用户":1244},{"日期":"1/2","访问用户":1223,"年龄":6,"下单用户":2344},{"日期":"1/3","访问用户":7123,"年龄":9,"下单用户":3245},{"日期":"1/4","访问用户":4123,"年龄":12,"下单用户":4355},{"日期":"1/5","访问用户":3123,"年龄":15,"下单用户":4564},{"日期":"1/6","访问用户":2323,"年龄":20,"下单用户":6537}],"北京":[{"日期":"1/1","访问用户":123,"年龄":3,"下单用户":1244},{"日期":"1/2","访问用户":1273,"年龄":6,"下单用户":2344},{"日期":"1/3","访问用户":3123,"年龄":15,"下单用户":4564},{"日期":"1/4","访问用户":2123,"年龄":9,"下单用户":3245},{"日期":"1/5","访问用户":4103,"年龄":12,"下单用户":4355},{"日期":"1/6","访问用户":7123,"年龄":10,"下单用户":3567}],"广州":[{"日期":"1/1","访问用户":123,"年龄":3,"下单用户":1244},{"日期":"1/2","访问用户":1223,"年龄":6,"下单用户":2344},{"日期":"1/3","访问用户":2123,"年龄":30,"下单用户":3245},{"日期":"1/5","访问用户":4123,"年龄":12,"下单用户":4355},{"日期":"1/4","访问用户":5123,"年龄":18,"下单用户":4564},{"日期":"1/6","访问用户":3843,"年龄":30,"下单用户":4850}]}},chartSettings2:{dimension:"日期",metrics:["年龄","下单用户"]},tableData2:[{date:"2013-07-21",name:"张三",address:"你是我的小苹果"},{date:"2014-12-24",name:"李四",address:"怎么爱你都不嫌多"},{date:"2017-07-01",name:"王五",address:"有了滑板鞋"},{date:"2018-09-03",name:"666",address:"天黑都不怕"}]}},methods:{tableRowClassName:function(t){t.row;var e=t.rowIndex;return 1===e?"warning-row":3===e?"success-row":""}}},d=c,m=(a("4092"),a("da29"),a("2877")),u=Object(m["a"])(d,s,i,!1,null,"62d4e9d8",null);e["default"]=u.exports},da29:function(t,e,a){"use strict";var s=a("dbe0"),i=a.n(s);i.a},dbe0:function(t,e,a){}}]);
//# sourceMappingURL=chunk-afe691a2.d848270b.js.map