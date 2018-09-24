/*!
 * /*
 * taucharts@2.6.3 (2018-09-24)
 * Copyright 2018 Targetprocess, Inc.
 * Licensed under Apache License 2.0
 * * /
 * 
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("taucharts"),require("d3-color"));else if("function"==typeof define&&define.amd)define(["taucharts","d3-color"],e);else{var a="object"==typeof exports?e(require("taucharts"),require("d3-color")):e(t.Taucharts,t.d3);for(var n in a)("object"==typeof exports?exports:t)[n]=a[n]}}(window,function(t,e){return function(t){var e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=14)}({0:function(e,a){e.exports=t},14:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(5);function o(t,e){return t.replace(/\{\{\s*(.+?)\s*\}\}/g,function(t,a){return e.hasOwnProperty(a)?e[a]:""})}var s=r.a.api.utils,u=r.a.api.pluginsSDK,c=function(t,e,a){"front"===a?t.push(e):t.unshift(e)},l=function(t){return function(e){var a={},n=[{dim:e.scaleX.dim,scale:e.scaleY,method:"yi",k:-1},{dim:e.scaleY.dim,scale:e.scaleX,method:"xi",k:1},{dim:null,scale:null,method:null,k:null}].find(function(e){return Array.isArray(t.dim)?t.dim.indexOf(e.dim)>=0:e.dim===t.dim});if(null===n.method)return a;var i=n.k,o={l:-.5,r:.5},s=n.method,u=n.scale;return a[s]=function(t){var a=(o[t.__pos__]||0)*i;if(u.discrete)return e[s](t)+u.stepSize(t[u.dim])*a;if(u.period){for(var n=r.a.api.tickPeriod.get(u.period,{utc:u.utcTime}),c=u.domain(),l=n.cast(c[0]);l<c[0];)l=n.next(l);var f=n.cast(c[1]),d=(u(f)-u(l))/(f-l);switch(t.__pos__){case"l":var m=Math.min(0,c[0]-l);return u(l)+d*m;case"r":m=Math.max(0,c[1]-f);return u(f)+d*m}}return e[s](t)},a}};function f(t){var e=s.defaults(t||{},{items:[],formatters:{}});return{init:function(t){var e=this;this._chart=t;var a=t.getSpec();a.scales.annotation_text={type:"value",dim:"text",source:"?"},a.transformations=a.transformations||{};var n=function(t){return a.settings.log(t,"LOG")};this._dataRefs={},a.transformations.dataRange=function(i,s){var u=s.from,c=s.to,l=t.getScaleInfo(s.primaryScale);if(l.period){var f=r.a.api.tickPeriod.get(l.period,{utc:a.settings.utcTime});u=f.cast(new Date(s.from)),c=f.cast(new Date(s.to))}var d=!l.isInDomain(u),m=!l.isInDomain(c);if(l.discrete?d||m:d&&m)return n("Annotation is out of domain"),[];var p=t.getScaleInfo(s.secondaryScale),y=p.domain(),v=[y[0],y[y.length-1]],h=l.dim,g=p.dim,x="__pos__",_={},S={},b={},A={};_[x]="l",_[h]=u,_[g]=v[0],S[x]="l",S[h]=c,S[g]=v[0],b[x]="r",b[h]=c,b[g]=v[1],A[x]="r",A[h]=u,A[g]=v[1];var D="y"===s.axis?b:A,T="y"===s.axis?A:b,R=e._getFormat(h);return s.startText&&(D.text=o(s.startText,{value:R(D[h])})),s.endText&&(T.text=o(s.endText,{value:R(T[h])})),e._useSavedDataRefs([_,S,b,A],String([h,u,c]))},a.transformations.dataLimit=function(i,s){var u=s.primaryScale,c=s.secondaryScale,l=t.getScaleInfo(u),f=l.period?r.a.api.tickPeriod.get(l.period,{utc:a.settings.utcTime}).cast(new Date(s.from)):s.from;if(!l.isInDomain(f))return n("Annotation is out of domain"),[];var d=t.getScaleInfo(c),m=d.domain(),p=[m[0],m[m.length-1]],y={},v={},h=l.dim,g=d.dim,x="__pos__",_=e._getFormat(h);return y[h]=f,y[g]=p[0],y[x]="l",s.startText&&(y.text=o(s.startText,{value:_(f)})),v[h]=f,v[g]=p[1],v[x]="r",s.endText&&(v.text=o(s.endText,{value:_(f)})),e._useSavedDataRefs([y,v],String([h,g,f]))},a.transformations.lineNoteData=function(a,i){var s=i.xScale,u=i.yScale,c=t.getScaleInfo(s),l=t.getScaleInfo(u),f=c.period?r.a.api.tickPeriod.get(c.period,{utc:c.utcTime}):null,d=l.period?r.a.api.tickPeriod.get(l.period,{utc:l.utcTime}):null,m=i.points.map(function(t){return[f?f.cast(t[0]):t[0],d?d.cast(t[1]):t[1]]});if(m.some(function(t){return!c.isInDomain(t[0])||!l.isInDomain(t[1])}))return n("Annotation is out of domain"),[];var p=c.dim,y=l.dim,v=[p,y].map(function(t){return e._getFormat(t)}),h=m.map(function(t,e){0===e||m.length;var a,n=0===e?i.startText:e===m.length-1?i.endText:"";return(a={})[p]=t[0],a[y]=t[1],a.text=n?o(n,{x:v[0](t[0]),y:v[1](t[1])}):null,a});return e._useSavedDataRefs(h,JSON.stringify([p,y,i.points]))}},addAreaNote:function(t,e,a){var n=t.scales[e.x],r=t.scales[e.y],i=a.dim===n.dim?["x","y"]:a.dim===r.dim?["y","x"]:null;if(null!==i){var o=a.val[0],s=a.val[1],u=a.text,f={type:"ELEMENT.PATH",namespace:"annotations",x:e.x,y:e.y,color:a.colorScaleName,label:"annotation_text",expression:{inherit:!1,operator:"none",params:[],source:"/"},transformModel:[l(a)],transformation:[{type:"dataRange",args:{axis:i[0],startText:"string"==typeof u?u:u.start,endText:"string"==typeof u?"":u.end,from:o,to:s,primaryScale:e[i[0]],secondaryScale:e[i[1]]}}],guide:{animationSpeed:e.guide.animationSpeed,showAnchors:"never",cssClass:"tau-chart__annotation-area",label:{fontColor:a.color,position:["r","b","keep-in-box"]}}};c(e.units,f,a.position)}else!function(e){t.settings.log(e,"LOG")}("Annotation doesn't match any data field")},addLineNote:function(t,e,a){var n,r=t.scales[e.x],i=t.scales[e.y],o=null,s=!0;if(Array.isArray(a.dim)?(s=!1,((n=a.dim)[0]===r.dim&&n[1]===i.dim||n[0]===i.dim&&n[1]===r.dim)&&(o=["x","y"])):a.dim===r.dim?o=["x","y"]:a.dim===i.dim&&(o=["y","x"]),null!==o){var u=a.text,f={type:"ELEMENT.LINE",namespace:"annotations",x:e.x,y:e.y,label:"annotation_text",color:a.colorScaleName,expression:{inherit:!1,operator:"none",params:[],source:"/"},guide:{animationSpeed:e.guide.animationSpeed,showAnchors:"never",widthCssClass:"tau-chart__line-width-2",cssClass:"tau-chart__annotation-line",label:{fontColor:a.color,position:s?["r","b","keep-in-box"]:["auto:avoid-label-edges-overlap","auto:adjust-on-label-overflow","keep-in-box"]},x:{fillGaps:!1},y:{fillGaps:!1}}},d=s?{transformModel:[l(a)],transformation:[{type:"dataLimit",args:{from:a.val,startText:"string"==typeof u?"":u.start,endText:"string"==typeof u?u:u.end,primaryScale:e[o[0]],secondaryScale:e[o[1]]}}]}:{transformation:[{type:"lineNoteData",args:{points:n[0]===r.dim?a.val:a.val.map(function(t){return t.slice().reverse()}),startText:"string"==typeof u?"":u.start,endText:"string"==typeof u?u:u.end,xScale:e.x,yScale:e.y}}]};Object.assign(f,d),c(e.units,f,a.position)}else!function(e){t.settings.log(e,"LOG")}("Annotation doesn't match any field")},onRender:function(){this._clearUnusedDataRefs()},onSpecReady:function(t,a){var n=this,r=[];this._setupAdditionalSeries(),this._startWatchingDataRefs(),t.traverseSpec(a,function(t){t&&"COORDS.RECT"===t.type&&t.units&&r.push(t)}),this._formatters=u.getFieldFormatters(a,e.formatters);var o=u.spec(a);r.forEach(function(t){e.items.map(function(t,e){var a=(t.color||"#BD10E0").toLowerCase(),n=i.rgb(a).toString();"black"!==a&&"rgb(0, 0, 0)"===n&&(n=null);var r=n||a,s="annotation_color_"+e;return o.addScale(s,{type:"color",source:"?",brewer:[r]}),{dim:t.dim,val:t.val,text:t.text,color:r,position:t.position,colorScaleName:s}}).forEach(function(e){Array.isArray(e.dim)?Array.isArray(e.val)&&e.val.every(Array.isArray)?n.addLineNote(a,t,e):function(t){a.settings.log(t,"LOG")}("Point annotation is not implemented yet"):Array.isArray(e.val)?n.addAreaNote(a,t,e):n.addLineNote(a,t,e)})})},_setupAdditionalSeries:function(){var t=this._chart,a=t.getSpec(),n=t.getDataSources()["/"].data,r=this._getAnnotatedDimValues(e.items);Object.keys(r).forEach(function(t){["x_"+t,"y_"+t].forEach(function(e){if(e in a.scales){var i=a.scales[e],o=n.map(function(e){return e[t]}),u=["period","time"].indexOf(i.type)>=0?r[t].map(function(t){return new Date(t)}):r[t];i.series=s.unique(o.concat(u))}})})},_getFormat:function(t){return this._formatters[t]?this._formatters[t].format:function(t){return String(t)}},_useSavedDataRefs:function(t,e){var a=this._dataRefs;return this._usedDataRefsKeys.add(e),e in a?(a[e].forEach(function(e,a){return Object.assign(e,t[a])}),a[e]):(a[e]=t,t)},_startWatchingDataRefs:function(){var t=this._dataRefs;this._initialDataRefsKeys=new Set(Object.keys(t)),this._usedDataRefsKeys=new Set},_clearUnusedDataRefs:function(){var t=this._dataRefs,e=this._initialDataRefsKeys,a=this._usedDataRefsKeys;Array.from(e).filter(function(t){return!a.has(t)}).forEach(function(e){return delete t[e]}),this._initialDataRefsKeys=null,this._usedDataRefsKeys=null},_getDataRowsFromItems:function(t){var e=function(t,e){return t.reduce(function(t,a,n){return t[a]=e[n],t},{})};return t.reduce(function(t,a){return Array.isArray(a.dim)?Array.isArray(a.val)&&a.val.every(Array.isArray)&&a.val.forEach(function(n){t.push(e(a.dim,n))}):Array.isArray(a.val)?a.val.forEach(function(n){t.push(e([a.dim],[n]))}):t.push(e([a.dim],[a.val])),t},[])},_getAnnotatedDimValues:function(t){var e={};return this._getDataRowsFromItems(t).forEach(function(t){Object.keys(t).forEach(function(a){e[a]=e[a]||[],e[a].push(t[a])})}),e}}}r.a.api.plugins.add("annotations",f),e.default=f},5:function(t,a){t.exports=e}})});