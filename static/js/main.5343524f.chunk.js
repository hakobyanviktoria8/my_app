(this.webpackJsonpmy_app=this.webpackJsonpmy_app||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},28:function(e,t,c){},30:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(0),r=c(15),a=c.n(r),i=(c(23),c(24),c(8)),j=c(3),l=c(36),o=c(37),b=c(38);c(25);function h(e){return Object(n.jsxs)(l.a,{children:[Object(n.jsx)(o.a,{className:"navBar border",children:Object(n.jsx)(b.a,{children:Object(n.jsx)(i.b,{to:"/",children:"LOGO"})})}),Object(n.jsx)(o.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsx)(j.a,{})})})]})}c(28);function u(e){return Object(n.jsxs)(o.a,{className:"home",children:[Object(n.jsx)(b.a,{xs:"6",sm:"6",md:"6",lg:"6",xl:"6",children:Object(n.jsx)("div",{className:"cartComponent border",children:Object(n.jsxs)(i.b,{to:"series",children:[Object(n.jsx)("img",{src:"https://streamcoimg-a.akamaihd.net/000/120/40/12040-PosterArt-2a08532d986336771ea5a70658b6a957.jpg",alt:""}),Object(n.jsx)("h2",{children:"Series"})]})})}),Object(n.jsx)(b.a,{xs:"6",sm:"6",md:"6",lg:"6",xl:"6",children:Object(n.jsx)("div",{className:"cartComponent border",children:Object(n.jsxs)(i.b,{to:"movie",children:[Object(n.jsx)("img",{src:"https://streamcoimg-a.akamaihd.net/000/109/8345/1098345-PosterArt-f0f207e02947ca76d9f9b238aea54dc1.jpg",alt:""}),Object(n.jsx)("h2",{children:"Movies"})]})})})]})}var d=c(12),m=c.n(d),x=c(16),O=c(11),p=(c(30),c(17)),f=c.n(p);function g(e){var t=Object(j.i)().type,c=Object(s.useState)([]),r=Object(O.a)(c,2),a=r[0],i=r[1],l=Object(s.useState)([]),h=Object(O.a)(l,2),u=h[0],d=h[1],p=Object(s.useState)(1),g=Object(O.a)(p,2),v=g[0],y=g[1],C=function(e){for(var t=[],c=0;c<e.length;c+=10)t.push(e.slice(c,c+10));d(t)};return Object(s.useEffect)((function(){(function(){var e=Object(x.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json").then((function(e){return e.json()})).then((function(e){var c=e.entries.filter((function(e){return e.releaseYear>=2010})).sort((function(e,t){return e.title>t.title?1:-1})).filter((function(e){return e.programType===t}));i(c),C(c)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0);case 8:return e.prev=8,document.getElementById("root").value="please wait...!",e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[0,5,8,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"text-center",children:t.toUpperCase()}),Object(n.jsx)(o.a,{className:"cartWraper",children:u&&u.length>0&&u[v-1].map((function(e,t){return Object(n.jsx)(b.a,{xs:"8",sm:"6",md:"4",lg:"4",xl:"3",className:"cart p-0",children:Object(n.jsxs)("div",{className:"border m-1",children:[Object(n.jsx)("img",{src:e.images["Poster Art"].url,alt:""}),Object(n.jsxs)("h3",{className:"text-center",children:[" ",e.title.slice(0,15)]})]})},t)}))}),Object(n.jsx)(f.a,{itemClass:"page-item",linkClass:"page-link",activePage:v,itemsCountPerPage:10,totalItemsCount:a.length,pageRangeDisplayed:Math.ceil(u.length),onChange:function(e){y(e)}})]})}var v=function(){return Object(n.jsx)(i.a,{children:Object(n.jsx)(j.d,{children:Object(n.jsxs)(j.b,{path:"/",element:Object(n.jsx)(h,{}),children:[Object(n.jsx)(j.b,{path:"/",element:Object(n.jsx)(u,{})}),Object(n.jsx)(j.b,{path:":type",element:Object(n.jsx)(g,{})})]})})})};c(34);a.a.render(Object(n.jsx)(v,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.5343524f.chunk.js.map