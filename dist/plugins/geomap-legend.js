/*!
 * /*
 * taucharts@2.6.3 (2018-09-24)
 * Copyright 2018 Targetprocess, Inc.
 * Licensed under Apache License 2.0
 * * /
 * 
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("taucharts"));else if("function"==typeof define&&define.amd)define(["taucharts"],t);else{var r="object"==typeof exports?t(require("taucharts")):t(e.Taucharts);for(var a in r)("object"==typeof exports?exports:e)[a]=r[a]}}(window,function(e){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=26)}({0:function(t,r){t.exports=e},26:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=n.a.api.utils;function l(e){i.defaults(e||{},{});var t=function(e,t,r,a){e.addEventListener(t,function(e){for(var t=e.target;t!==e.currentTarget&&null!==t;)t.classList.contains(r)&&a(e,t),t=t.parentNode})};return{init:function(e){this._chart=e,this._currentFilters={},this._legendColorByScaleId={};var r=this._chart.getSpec(),a=function(e){return function(t,a){var n=r.scales[a];return n.type===e&&n.dim&&t.push(a),t}};this._color=Object.keys(r.scales).reduce(a("color"),[]),this._fill=Object.keys(r.scales).reduce(a("fill"),[]);var n=this._color.length>0,i=this._fill.length>0;(n||i)&&(this._container=this._chart.insertToRightSidebar(this._containerTemplate),n&&(t(this._container,"click","tau-chart__legend__item-color",function(e,t){this._toggleLegendItem(t)}.bind(this)),t(this._container,"mouseover","tau-chart__legend__item-color",function(e,t){this._highlightToggle(t,!0)}.bind(this)),t(this._container,"mouseout","tau-chart__legend__item-color",function(e,t){this._highlightToggle(t,!1)}.bind(this))))},onSpecReady:function(){this._assignStaticBrewersOrEx()},onRender:function(){this._clearPanel(),this._drawColorLegend(),this._drawFillLegend()},_containerTemplate:'<div class="tau-chart__legend"></div>',_template:i.template('<div class="tau-chart__legend"><div class="tau-chart__legend__title"><%=name%></div><%=items%></div>'),_itemTemplate:i.template(["<div data-scale-id='<%= scaleId %>' data-dim='<%= dim %>' data-value='<%= value %>' class=\"tau-chart__legend__item tau-chart__legend__item-color <%=classDisabled%>\">",'<div class="tau-chart__legend__guide__wrap">','<div class="tau-chart__legend__guide <%=color%>"></div>',"</div>","<%=label%>","</div>"].join("")),_itemFillTemplate:i.template(['<div data-value=\'<%=value%>\' class="tau-chart__legend__item tau-chart__legend__item-color" style="padding: 6px 0px 10px 40px;margin-left:10px;">','<div class="tau-chart__legend__guide__wrap" style="top:0;left:0;">','   <span class="tau-chart__legend__guide" style="background-color:<%=color%>;border-radius:0"></span>','   <span style="padding-left: 20px"><%=label%></span>',"</div>","</div>"].join("")),_clearPanel:function(){this._container&&(this._container.innerHTML="")},_drawColorLegend:function(){var e=this;e._color.forEach(function(t){var r=e._chart.select(function(e){return e.config.color===t})[0];if(r){var a=r.getScale("color"),n=e._chart.getDataSources({excludeFilter:["legend"]}),l=i.unique(n[a.source].data.map(function(e){return e[a.dim]})).map(function(r){var n=i.escape(r),l=a.dim+n;return{scaleId:t,dim:a.dim,color:a(r),disabled:e._currentFilters.hasOwnProperty(l),label:r,value:n}});e._legendColorByScaleId[t]=l,e._container.insertAdjacentHTML("beforeend",e._template({items:l.map(function(t){return e._itemTemplate({scaleId:t.scaleId,dim:t.dim,color:t.color,classDisabled:t.disabled?"disabled":"",label:t.label,value:t.value})}).join(""),name:(((r.guide||{}).color||{}).label||{}).text||a.dim}))}})},_drawFillLegend:function(){var e=this;e._fill.forEach(function(t){var r=e._chart.select(function(e){return"COORDS.MAP"===e.config.type&&e.config.fill===t});if(r.length>0){var a=r[0].getScale("fill"),n=a.brewer,l=a.domain(),o=(l[1]-l[0])/n.length,c=i.range(n.length).map(function(t){var r=l[0]+t*o,c="";return 0===t&&(c=l[0]),t===n.length-1&&(c=l[1]),e._itemFillTemplate({color:a(r),label:c,value:i.escape(r)})});e._container.insertAdjacentHTML("beforeend",e._template({items:c.join(""),name:(((r[0].guide||{}).fill||{}).label||{}).text||a.dim}))}})},_toggleLegendItem:function(e){var t=e.getAttribute("data-scale-id"),r=e.getAttribute("data-dim"),a=e.getAttribute("data-value"),n=r+a,i=this._legendColorByScaleId[t].filter(function(e){return!e.disabled});if(1!==i.length||t!==i[0].scaleId||a!==i[0].value){var l=this._currentFilters;if(l.hasOwnProperty(n)){var o=l[n];delete l[n],e.classList.remove("disabled"),this._chart.removeFilter(o)}else e.classList.add("disabled"),l[n]=this._chart.addFilter({tag:"legend",predicate:function(e){return e[r]!=a}});this._chart.refresh()}},_highlightToggle:function(e,t){var r=e.getAttribute("data-scale-id"),a=e.getAttribute("data-dim"),n=e.getAttribute("data-value");this._chart.select(function(e){return e.config.color===r}).forEach(function(e){e.fire("highlight",function(e){return!t||e[a]==n})})},_generateColorMap:function(e){var t=i.range(20).map(function(e){return"color20-"+(1+e)});return e.reduce(function(e,r,a){return e[r]=t[a%20],e},{})},_assignStaticBrewersOrEx:function(){var e=this;e._color.forEach(function(t){var r=e._chart.getSpec().scales[t],a=e._chart.getDataSources({excludeFilter:["legend"]}),n=e._chart.getScaleFactory(a).createScaleInfoByName(t).domain();r.brewer||(r.brewer="measure"!==r.dimType?e._generateColorMap(n):["#e5f5e0","#a1d99b","#31a354"])})}}}n.a.api.plugins.add("geomap-legend",l),t.default=l}})});