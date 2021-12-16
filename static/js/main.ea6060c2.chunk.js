(this["webpackJsonpcountry-dropdown"]=this["webpackJsonpcountry-dropdown"]||[]).push([[0],{145:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(45),s=n.n(o),r=(n(52),n(53),n(8)),i=(n(54),n(55),n(47)),u=n(26),l=n.n(u),d=n(46),m=n.n(d),j=n(0),f=m()(Object.keys(l.a.data).map((function(e){return{code:e,name:l.a.data[e].name}})),"name");var p=function(){var e=a.a.useState([]),t=Object(r.a)(e,2),n=t[0],c=t[1],o=a.a.useState(!0),s=Object(r.a)(o,2),u=s[0],l=s[1],d=a.a.useState(null),m=Object(r.a)(d,2),p=m[0],h=m[1],b=a.a.useState(null),O=Object(r.a)(b,2),v=O[0],x=O[1],w=a.a.useRef(),g=function(){setTimeout((function(){l(!0),c([])}),100)},y=function(e){w&&w.current&&w.current.contains(e.target)||g()};return a.a.useEffect((function(){return document.addEventListener("mousedown",y),function(){document.removeEventListener("mousedown",y)}}),[]),Object(j.jsxs)("div",{className:"CountryDropdown",ref:w,children:[u?Object(j.jsx)("div",{className:"dropdown",onClick:function(){l(!1),c(f),setTimeout((function(){var e=document.querySelector(".input");e&&e.focus()}),100)},children:p?Object(j.jsxs)("div",{className:"selected-item",children:[Object(j.jsx)("div",{className:"flag flag-".concat(p.code.toLowerCase())}),Object(j.jsx)("span",{className:"selected-item-text",children:p.name})]}):"Select"}):"",u?"":Object(j.jsx)("input",{className:"input",onChange:function(e){var t=e.target.value;if(t){var n=new i.a(f,{keys:["name"],threshold:.3}).search(t);c(n.map((function(e){return e.item})))}else c(f);h(null),x(null)},onKeyDown:function(e){if("ArrowDown"===e.key)x(null===v?0:Math.min(n.length-1,v+1));else if("ArrowUp"===e.key)x(null===v?null:Math.max(0,v-1));else if("Escape"===e.key)g();else if("Enter"===e.key||"Tab"===e.key){e.preventDefault();var t=n[v||0];t&&(h(t),g())}},placeholder:"Search"}),n.length?Object(j.jsx)("div",{className:"autocomplete",children:Object(j.jsx)("ul",{className:"autocomplete-inner",children:n.map((function(e,t){return Object(j.jsxs)("li",{className:"autocomplete-item "+(v===t?"selected":""),onClick:function(){return function(e){h(e),l(!0),c([])}(e)},children:[Object(j.jsx)("div",{className:"flag flag-".concat(e.code.toLowerCase())}),e.name]},e.code)}))})}):""]})};var h=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Country Dropdown"}),Object(j.jsx)("p",{children:"Uses iso-3166-2 and fuse.js to create a simple searchable dropdown for countries which supports fuzzy matching."}),Object(j.jsx)("p",{children:"Navigate options with arrow keys and select with Enter/Tab or mouse. Escape or click outside to close the dropdown."}),Object(j.jsx)("div",{className:"py",children:Object(j.jsx)(p,{})}),Object(j.jsxs)("p",{children:["In a real project I'd probably use an existing component"," ",Object(j.jsx)("a",{href:"https://mui.com/components/autocomplete/",children:"like this"})]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,146)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),b()},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){}},[[145,1,2]]]);
//# sourceMappingURL=main.ea6060c2.chunk.js.map