(this["webpackJsonpmy-first-react"]=this["webpackJsonpmy-first-react"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(5),a=n.n(r),i=n(6),j=(n(11),n(3)),l=n(1);var o=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("https://reqres.in/api/users?page=1").then((function(e){return e.json()})).then((function(e){return s(e.data)}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"text-center my-5",children:"Fake Users"}),Object(l.jsx)("div",{className:"container my-5",children:Object(l.jsx)("div",{className:"row row-cols-3 d-flex justify-content-between",children:n.map((function(e){return Object(l.jsx)("div",{className:"col my-4",children:Object(l.jsxs)(j.a,{style:{width:"18rem"},children:[Object(l.jsx)(j.a.Img,{variant:"top",src:e.avatar}),Object(l.jsxs)(j.a.Body,{children:[Object(l.jsxs)(j.a.Title,{children:[e.first_name," ",e.last_name]}),Object(l.jsx)(j.a.Text,{children:e.email})]})]})},e.id)}))})})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root")),d()}},[[13,1,2]]]);
//# sourceMappingURL=main.acfdaae9.chunk.js.map