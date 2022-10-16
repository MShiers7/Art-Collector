(this.webpackJsonpart_collector_react=this.webpackJsonpart_collector_react||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),c=a.n(r),s=a(5),u=a.n(s),l=function(){return c.a.createElement("div",{id:"loading"},c.a.createElement("h2",{className:"message"},"Searching..."))},o=a(1),i=a.n(o),p=a(2),f="https://api.harvardartmuseums.org",m="apikey=6d41d63f-1f02-4648-b058-8c18fe236ecf";function h(e){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function d(e){return b.apply(this,arguments)}function b(){return(b=Object(p.a)(i.a.mark((function e(t){var a,n,r,c,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.century,n=t.classification,r=t.queryString,c="".concat(f,"/object?").concat(m,"&classification=").concat(n,"&century=").concat(a,"&keyword=").concat(r),e.prev=2,e.next=5,fetch(c);case 5:return s=e.sent,e.next=8,s.json();case 8:return u=e.sent,e.abrupt("return",u);case 12:throw e.prev=12,e.t0=e.catch(2),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function y(){return E.apply(this,arguments)}function E(){return(E=Object(p.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("centuries")){e.next=2;break}return e.abrupt("return",JSON.parse(localStorage.getItem("centuries")));case 2:return t="".concat(f,"/century?").concat(m,"&size=100&sort=temporalorder"),e.prev=3,e.next=6,fetch(t);case 6:return a=e.sent,e.next=9,a.json();case 9:return n=e.sent,r=n.records,localStorage.setItem("centuries",JSON.stringify(r)),e.abrupt("return",r);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}function g(){return j.apply(this,arguments)}function j(){return(j=Object(p.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("classifications")){e.next=2;break}return e.abrupt("return",JSON.parse(localStorage.getItem("classifications")));case 2:return t="".concat(f,"/classification?").concat(m,"&size=100&sort=name"),e.prev=3,e.next=6,fetch(t);case 6:return a=e.sent,e.next=9,a.json();case 9:return n=e.sent,r=n.records,localStorage.setItem("classifications",JSON.stringify(r)),e.abrupt("return",r);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}var S=function(e){var t=e.setSearchResults,a=(e.setFeaturedResult,e.setIsLoading);function n(e){return r.apply(this,arguments)}function r(){return(r=Object(p.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,h(n);case 4:r=e.sent,t(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:return e.prev=11,a(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}return c.a.createElement("aside",{id:"preview"},c.a.createElement("header",{className:"pagination"},c.a.createElement("button",{disabled:"",className:"previous",onClick:n()},"Previous"),c.a.createElement("button",{disabled:"",className:"next",onClick:n()},"Next")),c.a.createElement("section",{className:"results"}))},O=function(e){var t=e.setIsLoading,a=e.setSearchResults,s=Object(r.useState)([]),u=Object(n.a)(s,2),l=u[0],o=u[1],f=Object(r.useState)([]),m=Object(n.a)(f,2),h=m[0],v=m[1],b=Object(r.useState)(""),E=Object(n.a)(b,2),j=E[0],S=E[1],O=Object(r.useState)("any"),x=Object(n.a)(O,2),w=x[0],k=x[1],N=Object(r.useState)("any"),I=Object(n.a)(N,2),C=I[0],R=I[1];return Object(r.useEffect)((function(){Promise.all([y(),g()]).then((function(e){try{o(e[0]),v(e[1])}catch(t){console.error(t)}}))}),[]),c.a.createElement("form",{id:"search",onSubmit:function(){var e=Object(p.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t(!0),e.prev=2,e.next=5,d({century:w,classification:C,queryString:j});case 5:r=e.sent,a(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:return e.prev=12,t(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(t){return e.apply(this,arguments)}}()},c.a.createElement("fieldset",null,c.a.createElement("label",{htmlFor:"keywords"},"Query"),c.a.createElement("input",{id:"keywords",type:"text",placeholder:"enter keywords...",value:j,onChange:S})),c.a.createElement("fieldset",null,c.a.createElement("label",{htmlFor:"select-classification"},"Classification"," ",c.a.createElement("span",{className:"classification-count"},"(",h.length,")")),c.a.createElement("select",{name:"classification",id:"select-classification",value:C,onChange:function(e){return R(e.target.value)}},c.a.createElement("option",{value:"any"},"Any"),h.map((function(e,t){return c.a.createElement("option",{key:t},e.name)})))),c.a.createElement("fieldset",null,c.a.createElement("label",{htmlFor:"select-century"},"Century ",c.a.createElement("span",{className:"century-count"},"(",l.length,")")),c.a.createElement("select",{name:"century",id:"select-century",value:w,onChange:function(e){return k(e.target.value)}},c.a.createElement("option",{value:"any"},"Any"),l.map((function(e,t){return c.a.createElement("option",{key:t},e.name)})))),c.a.createElement("button",null,"SEARCH"))},x=function(){return c.a.createElement("div",{id:"title"},c.a.createElement("h1",null,"The Art Collector"),c.a.createElement("h5",null,"Search the Harvard Art Museums' Private Collections"))},w=function(){var e=Object(r.useState)({info:{},records:[]}),t=Object(n.a)(e,2),a=t[0],s=t[1],u=Object(r.useState)(null),o=Object(n.a)(u,2),i=(o[0],o[1],Object(r.useState)(!1)),p=Object(n.a)(i,2),f=p[0],m=p[1];return c.a.createElement("div",{className:"app"},c.a.createElement(x,null),c.a.createElement(O,{setIsLoading:m,setSearchResults:s}),c.a.createElement(S,{searchResults:a,setIsLoading:m,setSearchResults:s}),f?c.a.createElement(l,null):null)};u.a.render(c.a.createElement(w,null),document.getElementById("app"))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.07b1de30.chunk.js.map