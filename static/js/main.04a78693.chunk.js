(this["webpackJsonppricing-component"]=this["webpackJsonppricing-component"]||[]).push([[0],{10:function(e,n,s){},11:function(e,n,s){"use strict";s.r(n);var t=s(1),c=s(3),o=s.n(c),r=s(4),l=s(0);function a(e){var n=e.option,s=e.card,t=s.type,c=s.priceMonthly,o=s.priceAnnually,r=s.storage,a=s.users,i=s.send;return Object(l.jsxs)("div",{className:"".concat("Professional"===t?"card-professional":"card"),children:[Object(l.jsx)("p",{className:"".concat("Professional"===t?"text-professional":"text"),children:t}),Object(l.jsx)("p",{className:"".concat("Professional"===t?"price-professional":"price"),children:"monthly"===n?c:o}),Object(l.jsxs)("ul",{className:"".concat("Professional"===t?"info-professional":""),children:[Object(l.jsx)("li",{children:r}),Object(l.jsx)("li",{children:a}),Object(l.jsx)("li",{children:i})]}),Object(l.jsx)("button",{className:"".concat("Professional"===t?"button-professional":""),children:"LEARN MORE"})]})}function i(e){var n=e.option,s=e.handleToggle;return Object(l.jsxs)("label",{className:"switch",children:[Object(l.jsx)("input",{type:"checkbox",option:n,onClick:s}),Object(l.jsx)("span",{className:"slider round"})]})}var p=[{type:"Basic",priceMonthly:"$19.99",priceAnnually:"$199.99",storage:"500 GB Storage",users:"2 Users Allowed",send:"Send up to 3 GB"},{type:"Professional",priceMonthly:"$24.99",priceAnnually:"$249.99",storage:"1 TB Storage",users:"5 Users Allowed",send:"Send up to 10 GB"},{type:"Master",priceMonthly:"$39.99",priceAnnually:"$399.99",storage:"2 TB Storage",users:"10 Users Allowed",send:"Send up to 20 GB"}];s(10);var j=function(){var e=Object(t.useState)("monthly"),n=Object(r.a)(e,2),s=n[0],c=n[1],o=p.map((function(e){return Object(l.jsx)(a,{card:e,option:s},e.name)}));return Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("h1",{className:"title",children:"Our Pricing"}),Object(l.jsxs)("div",{className:"toggle-container",children:[Object(l.jsx)("span",{className:"toggle-type",children:"Monthly"}),Object(l.jsx)(i,{option:s,handleToggle:function(){c("monthly"===s?"annually":"monthly")}}),Object(l.jsx)("span",{className:"toggle-type",children:"Annually"})]}),Object(l.jsx)("div",{className:"price-position",children:o})]})};function d(){return Object(l.jsx)(j,{})}o.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.04a78693.chunk.js.map