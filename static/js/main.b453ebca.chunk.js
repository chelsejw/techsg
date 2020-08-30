(this["webpackJsonpreact-front"]=this["webpackJsonpreact-front"]||[]).push([[0],{19:function(e,a,t){e.exports=t(49)},24:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(16),l=t.n(r),s=(t(24),t(6)),o=t(3),m=t(4),i=t.n(m),u=function(e){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark"},c.a.createElement("a",{className:"navbar-brand",href:"#"},"Tech@SG"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement("a",{className:"nav-link",href:"#"},"Home ",c.a.createElement("span",{className:"sr-only"},"(current)"))))))},d=t(5),b=t.n(d),E=function(e){var a=e.stack.map((function(e){return c.a.createElement("div",{class:"form-check"},c.a.createElement("input",{class:"form-check-input",type:"checkbox",value:e.name,id:"techid_".concat(e.id)}),c.a.createElement("label",{class:"form-check-label",for:"techid_".concat(e.id)},e.name))}));return c.a.createElement("div",{className:"col-md-3 opt opt-stack"},a)},v=function(e){return c.a.createElement("div",{className:"options-container"},c.a.createElement("div",{className:"opt-headers row"},c.a.createElement("div",{className:"col-md-3"},"Stack"),c.a.createElement("div",{className:"col-md-7"},"Company"),c.a.createElement("div",{className:"col-md-2"},"Sort")),c.a.createElement("div",{className:"options-items row"},c.a.createElement(E,{stack:e.stack}),c.a.createElement("div",{className:"col-md-7 opt opt-companies"}),c.a.createElement("div",{className:"col-md-2 opt opt-sort"})))},p=function(e){var a=e.name.toLowerCase();switch(a){case"express":a="expressjs";break;case"mongo":a="mongodb";break;case".net":a="dotnet";break;case"aws":a="amazonwebservices";break;case"node":a="nodejs";break;case"golang":a="go";break;case"c#":a="csharp";break;case"angular":a="angularjs";break;case"c++":a="cplusplus";break;case"vue":a="vuejs"}return c.a.createElement("div",{className:"stack-btn mr-2 mb-1"},c.a.createElement("i",{className:"devicon-".concat(a,"-plain stack-").concat(a)}))},f=function(e){var a=e.data.stack.map((function(e,a){return c.a.createElement(p,{key:a,name:e})}));return c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},e.num),c.a.createElement("td",null,e.data.company),c.a.createElement("td",null,c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.data.link},e.data.title)),c.a.createElement("td",null,a.length>0?a:"-"),c.a.createElement("td",null,e.created))},g=t(5),h=function(e){var a=e.data.map((function(a,t){return c.a.createElement(f,{key:a.id,created:g(a.created_at).format("DD/MM/YYYY"),num:e.firstIndex+t,data:a})}));return c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"mt-2 table table-dark"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Company"),c.a.createElement("th",{scope:"col"},"Title"),c.a.createElement("th",{scope:"col"},"Stack"),c.a.createElement("th",{scope:"col"},"Added"))),c.a.createElement("tbody",null,a)),e.data.length<1&&"There is no data.")},k=t(17),j=t.n(k),N=function(e){var a=e.failure,t=e.loading,n=e.lastUpdate,r=e.data;return c.a.createElement("div",null,!a&&!t&&c.a.createElement("div",null,c.a.createElement("div",{className:"text-right last-add-jobs"},"Last added jobs: ",n," SGT"),c.a.createElement(h,{firstIndex:e.firstIndex,data:r})),t&&c.a.createElement("div",{className:"my-5"},c.a.createElement(j.a,{css:"margin: 0 auto;",color:"#d84242",size:150,loading:t}),c.a.createElement("div",{className:"text-center mt-3"},c.a.createElement("span",{className:"main-loading-txt"},"Getting jobs..."))),a&&c.a.createElement("div",{className:"text-center mt-3"},c.a.createElement("span",{className:"main-loading-txt"},"Failed to get jobs.")))},x=function(e){return c.a.createElement("button",{className:"direction-btn ".concat(e.current&&"direction-btn-active"),onClick:function(){e.setPage(e.num)}},e.text)},O=function(e){var a=e.info,t=a.next,n=a.prev,r=a.count,l=e.current,s=[],o=Math.ceil(r/20);console.log(o);for(var m=l-2;m<l+3;m++)m>0&&s.push(c.a.createElement(x,{current:m==l,setPage:e.setPage,num:m,text:m}));return c.a.createElement("div",{className:"my-3 text-center"},c.a.createElement("div",{className:"pg-btns"},n&&c.a.createElement(x,{setPage:e.setPage,num:l-1,text:"<"}),s,t&&c.a.createElement(x,{setPage:e.setPage,num:l+1,text:">"})))},S=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(!0),m=Object(o.a)(l,2),d=m[0],E=m[1],p=Object(n.useState)(!1),f=Object(o.a)(p,2),g=f[0],h=f[1],k=Object(n.useState)({}),j=Object(o.a)(k,2),x=j[0],S=j[1],w=Object(n.useState)([]),y=Object(o.a)(w,2),P=y[0],M=y[1],T=Object(n.useState)(1),_=Object(o.a)(T,2),I=_[0],C=_[1],D=Object(n.useState)("default"),G=Object(o.a)(D,2),Y=G[0],q=(G[1],Object(n.useState)({})),z=Object(o.a)(q,2),B=z[0],J=z[1],L=Object(n.useState)(null),U=Object(o.a)(L,2),W=U[0],A=(U[1],Object(n.useState)(null)),F=Object(o.a)(A,2),H=F[0];F[1];Object(n.useEffect)((function(){H&&H.length>0&&"&stack=".concat(H.join("&stack="));W&&"&company=".concat(W),i.a.get("http://tech-sg.herokuapp.com/?page=".concat(I)).then((function(e){r(e.data.results),J({count:e.data.count,next:e.data.next,prev:e.data.previous}),S((function(a){return Object(s.a)({},a,{jobs:e.data.results[0].created_at})})),E(!1)})).catch((function(e){E(!1),h(!0),console.log("Error in axios request",e)})),i.a.get("/tech").then((function(e){M(e.data),S((function(a){return Object(s.a)({},a,{tech:e.data[e.data.length-1].created_at})}))})).catch((function(e){console.log("Error in axios request for tech",e)}))}),[]),Object(n.useEffect)((function(){H&&H.length>0&&"&stack=".concat(H.join("&stack="));W&&"&company=".concat(W),i.a.get("/jobs?page=".concat(I)).then((function(e){console.log(e.data),r(e.data.results),J({count:e.data.count,next:e.data.next,prev:e.data.previous}),E(!1)})).catch((function(e){E(!1),h(!0),console.log("Error in axios request",e)}))}),[I,H,W,Y]),Object(n.useEffect)((function(){}),[t,P,x]);return c.a.createElement("div",null,c.a.createElement(u,null),c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"text-center main-header mb-2"},"Tech@SG"),c.a.createElement(v,{stack:P}),c.a.createElement(O,{current:I,info:B,setPage:C}),c.a.createElement(N,{firstIndex:function(e,a){return e*(a-1)+1}(20,I),loading:d,failure:g,lastUpdate:b()(x.jobs).format("DD MMM, h:mm:ss a"),data:t}),c.a.createElement(O,{current:I,info:B,setPage:C})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.b453ebca.chunk.js.map