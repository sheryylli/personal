(this.webpackJsonppersonal=this.webpackJsonppersonal||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),n=c(6),r=c.n(n),a=c(3),l=(c(14),c(41)),j=c(0);function o(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(j.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsxs)("div",{className:"itemContainer",children:[Object(j.jsx)(l.a,{className:"icon"}),Object(j.jsx)("span",{children:"sherylli2015@gmail.com"})]})}),Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"hamburger",onClick:function(){return c(!t)},children:[Object(j.jsx)("span",{className:"line1"}),Object(j.jsx)("span",{className:"line2"}),Object(j.jsx)("span",{className:"line3"})]})})]})})}c(20);var d=c(8);function m(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(d.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["innovator","programmer","writer(?)"]})}),[]),Object(j.jsxs)("div",{className:"intro",id:"intro",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("div",{className:"imgContainer",children:Object(j.jsx)("img",{src:"assets/sherylpurple.jpg",alt:""})})}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h2",{children:"Hi! I'm"}),Object(j.jsx)("h1",{children:"Sheryl Li"}),Object(j.jsxs)("h3",{children:["I'm a ",Object(j.jsx)("span",{ref:e})]})]}),Object(j.jsx)("a",{href:"#portfolio",children:Object(j.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}c(21);function b(e){var t=e.id,c=e.title,i=e.active,s=e.setSelected;return Object(j.jsx)("li",{className:i?"portfolioList active":"portfolioList",onClick:function(){return s(t)},children:c})}c(22);var O=[{id:1,title:"Project name"},{id:2,title:"Project name"},{id:3,title:"Project name"},{id:4,title:"Project name"},{id:5,title:"Project name"},{id:6,title:"Project name"}],u=[{id:1,title:"Project name"},{id:2,title:"Project name"},{id:3,title:"Project name"},{id:4,title:"Project name"},{id:5,title:"Project name"},{id:6,title:"Project name"}],h=[{id:1,title:"Project name"},{id:2,title:"Project name"},{id:3,title:"Project name"},{id:4,title:"Project name"},{id:5,title:"Project name"},{id:6,title:"Project name"}],x=[{id:1,title:"Project name"},{id:2,title:"Project name"},{id:3,title:"Project name"},{id:4,title:"Project name"},{id:5,title:"Project name"},{id:6,title:"Project name"}];function p(){var e=Object(i.useState)("featured"),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)([]),r=Object(a.a)(n,2),l=r[0],o=r[1];return Object(i.useEffect)((function(){switch(c){case"Projects":default:o(O);break;case"Articles":o(u);break;case"Videos":o(h);break;case"Blogs":o(x)}}),[c]),Object(j.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(j.jsx)("h1",{children:"Portfolio"}),Object(j.jsx)("ul",{children:[{id:"project",title:"Projects"},{id:"article",title:"Articles"},{id:"video",title:"Videos"},{id:"blog",title:"Blogs"}].map((function(e){return Object(j.jsx)(b,{title:e.title,active:c===e.id,setSelected:s,id:e.id})}))}),Object(j.jsx)("div",{className:"container",children:l.map((function(e){return Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:e.img,alt:""}),Object(j.jsx)("h3",{children:e.title})]})}))})]})}c(23);function f(){var e=Object(i.useState)(0),t=Object(a.a)(e,2),c=t[0],s=t[1],n=[{id:"1",title:"Project",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "},{id:"2",title:"Placeholder",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{id:"3",title:"Placeholder",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}],r=function(e){s("left"===e?c>0?c-1:2:c<n.length-1?c+1:0)};return Object(j.jsxs)("div",{className:"works",id:"works",children:[Object(j.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*c,"vw)")},children:n.map((function(e){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsxs)("div",{className:"leftContainer",children:[Object(j.jsx)("div",{className:"imgContainer",children:Object(j.jsx)("img",{src:e.icon,alt:""})}),Object(j.jsx)("h2",{children:e.title}),Object(j.jsx)("p",{children:e.desc}),Object(j.jsx)("span",{children:"Projects"})]})}),Object(j.jsx)("div",{className:"right",children:Object(j.jsx)("img",{src:"https://drive.google.com/file/d/1snGce-bOw_LdvSKK2YSa10EXEZZfr1Yg/view?usp=sharing",alt:""})})]})})}))}),Object(j.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"",onClick:function(){return r("left")}}),Object(j.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"",onClick:function(){return r()}})]})}c(24);function v(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(j.jsxs)("div",{className:"contact",id:"contact",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("img",{src:"assets/shake.svg",alt:""})}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)("h2",{children:"Contact :)"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(!0)},children:[Object(j.jsx)("input",{type:"text",placeholder:"Email"}),Object(j.jsx)("textarea",{placeholder:"Message"}),Object(j.jsx)("button",{type:"submit",children:"Send"}),c&&Object(j.jsx)("span",{children:"Thanks, I'll reply ASAP :)"})]})]})]})}c(25),c(26);function g(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(j.jsx)("div",{className:"menu "+(t&&"active"),children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{onClick:function(){return c(!1)},children:Object(j.jsx)("a",{href:"#intro",children:"Home"})}),Object(j.jsx)("li",{onClick:function(){return c(!1)},children:Object(j.jsx)("a",{href:"#portfolio",children:"Projects"})}),Object(j.jsx)("li",{onClick:function(){return c(!1)},children:Object(j.jsx)("a",{href:"#works",children:"Works"})}),Object(j.jsx)("li",{onClick:function(){return c(!1)},children:Object(j.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var N=function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(o,{menuOpen:c,setMenuOpen:s}),Object(j.jsx)(g,{menuOpen:c,setMenuOpen:s}),Object(j.jsxs)("div",{className:"sections",children:[Object(j.jsx)(m,{}),Object(j.jsx)(p,{}),Object(j.jsx)(f,{}),Object(j.jsx)(v,{})]})]})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.9a4ad509.chunk.js.map