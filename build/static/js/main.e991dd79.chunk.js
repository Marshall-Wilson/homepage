(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(11),s=n.n(r),i=(n(19),n(14)),l=n(2),o=(n(20),n(0)),d=function(e){var t=e.selected;return Object(o.jsxs)("header",{id:"header",children:[Object(o.jsx)("h1",{id:"logo",children:Object(o.jsx)("a",{href:"/#/",children:"Marshall Wilson"})}),Object(o.jsxs)("nav",{children:["work"===t?Object(o.jsx)("a",{href:"/#/",className:"nav-links current-link",children:"work"}):Object(o.jsx)("a",{href:"/#/",className:"nav-links",children:"work"}),"about"===t?Object(o.jsx)("a",{href:"/#/about",className:"nav-links current-link",children:"about"}):Object(o.jsx)("a",{href:"/#/about",className:"nav-links",children:"about"})]})]})},j=n(5),u=n.p+"static/media/trex.c9512315.jpg",h=n.p+"static/media/um.fb0c5e73.png",b=n.p+"static/media/network.082415d4.jpg",m=n.p+"static/media/colors.5fccc065.png",O=n.p+"static/media/cat.e40e6155.jpg",f=function(e,t,n,a){return{name:e,types:t,url:n,image:a}},p=[f("Museum Employee Scheduler",["all","python"],"https://github.com/Marshall-Wilson/employee_scheduler",u),f("Universal Machine Emulator",["all","c"],"https://github.com/Marshall-Wilson/UM-Emulator",h),f("Musical Collaboration Explorer",["all","c++"],"https://github.com/Marshall-Wilson/collaboration-explorer",b),f("Color Picker Animation",["all","javascript"],"/#/colors",m),f("PNM Image Manipulation",["all","c"],"https://github.com/Marshall-Wilson/pnm-manipulation",O)],x=function(e){var t=e.project;return Object(o.jsx)("div",{className:"project",children:Object(o.jsxs)("a",{href:t.url,children:[Object(o.jsx)("img",{src:t.image,alt:t.name}),Object(o.jsx)("h3",{children:t.name})]})})},g=[{name:"All",selected:!0},{name:"Python",selected:!1},{name:"JavaScript",selected:!1},{name:"C++",selected:!1},{name:"C",selected:!1}],v=function(){var e=Object(a.useState)(p),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(g),s=Object(j.a)(r,2),i=s[0],l=s[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"selector",children:i.map((function(e){return Object(o.jsx)("button",{className:e.selected?"selected":"",type:"button",id:e.name,onClick:function(){return t=e.name,c(p.filter((function(e){return e.types.includes(t.toLowerCase())}))),void l(g.map((function(e){return e.name===t?e.selected=!0:e.selected=!1,e})));var t},children:Object(o.jsx)("h2",{children:e.name})},e.name)}))}),Object(o.jsx)("div",{className:"projects",children:n.map((function(e){return Object(o.jsx)(x,{project:e},e.name)}))})]})},k=(n(22),function(){return Object(o.jsxs)("div",{id:"Index",children:[Object(o.jsx)(d,{selected:"work"}),Object(o.jsx)(v,{})]})});n(23);var w=function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])},M=function(){var e=function(e){for(var t="linear-gradient(to bottom right ",n=0;n<e.length;n++)t+=", ",t+="rgb(".concat(e[n].r,", ").concat(e[n].g,", ").concat(e[n].b,")");return{backgroundImage:t+=")"}},t=Object(a.useState)(new Array(10).fill({r:50,g:250,b:50})),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(e(c)),i=Object(j.a)(s,2),l=i[0],u=i[1],h=Object(a.useState)({r:3,g:4,b:5}),b=Object(j.a)(h,2),m=b[0],O=b[1],f=Object(a.useState)(0),p=Object(j.a)(f,2),x=p[0],g=p[1],v=Object(a.useState)(!0),k=Object(j.a)(v,2),M=k[0],N=k[1];return w((function(){if(M){var t=function(e){return e.push(Object.assign({},e[e.length-1])),e.shift(),e}(c);x%1===0&&(t=function(e){for(var t=m,n=0,a=Object.entries(e[e.length-1]);n<a.length;n++){var c=Object(j.a)(a[n],1)[0];e[e.length-1][c]+=m[c],(e[e.length-1][c]>250||e[e.length-1][c]<50)&&(t[c]*=-1)}return O(t),e}(t)),g(x+1),r(t),u(e(c))}}),75),Object(o.jsxs)("div",{id:"ColorAnimation",onClick:function(){N(!M)},style:l,children:[Object(o.jsx)(d,{}),Object(o.jsxs)("div",{id:"colorInfo",children:[Object(o.jsx)("div",{id:"swatchColor",style:{background:"rgb(".concat(c[0].r,", ").concat(c[0].g,", ").concat(c[0].b)}}),Object(o.jsx)("h1",{children:"Current Color"}),Object(o.jsxs)("h2",{children:["R: ",Object(o.jsx)("span",{className:"colorVal",id:"rVal",children:c[0].r})]}),Object(o.jsxs)("h2",{children:["G: ",Object(o.jsx)("span",{className:"colorVal",id:"gVal",children:c[0].g})]}),Object(o.jsxs)("h2",{children:["B: ",Object(o.jsx)("span",{className:"colorVal",id:"bVal",children:c[0].b})]})]}),Object(o.jsx)("footer",{children:Object(o.jsx)("a",{href:"/",children:"Marshall Wilson 2021"})})]})},N=n.p+"static/media/headshot.079f4828.jpeg",y=function(){return Object(o.jsx)("div",{className:"headshotFrame",children:Object(o.jsx)("img",{className:"headshot",src:N,alt:"Marshall Wilson"})})},S=(n(24),n.p+"static/media/resume.7e6d59ab.pdf"),C=function(){var e="w.marshall.wilson",t="gmail.com";return Object(o.jsxs)("div",{id:"about",children:[Object(o.jsx)(d,{selected:"about"}),Object(o.jsxs)("div",{className:"profile",children:[Object(o.jsx)(y,{}),Object(o.jsxs)("div",{className:"blurb",children:[Object(o.jsxs)("p",{children:["Hi! I'm ",Object(o.jsx)("span",{children:"Marshall Wilson"}),", a software engineer who graduated from the Tufts University Computer Science Post-Bac program in August 2021. This site contains some of my personal, professional, and class projects, so feel free to look around."]}),Object(o.jsx)("p",{children:"Prior to my time at Tufts, I studied Biology at Dartmouth College, worked as a science educator and coordinator at the Museum of Science and MIT, and have even been a baker, winemaker, and farmer. I'd love to bring my coding skills and experience to your team!"}),Object(o.jsxs)("p",{className:"email",children:["email: ",Object(o.jsx)("a",{href:"mailto:"+e+"@"+t,children:e+"@"+t})]}),Object(o.jsxs)("div",{className:"mediaLinks",children:[Object(o.jsx)("a",{href:S,download:"Marshall Wilson Resume.pdf",children:"Resume"}),Object(o.jsx)("a",{href:"https://github.com/Marshall-Wilson",children:"GitHub"}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/w-marshall-wilson/",children:"LinkedIn"})]})]})]})]})},F=(n(25),["Abundant","Sweet","Sunny","Verdant","Good","Kind","Old","New","Peaceful","Stinky","Running","Sentient","Blessed"]),B=["Acorn","River","Forest","Beauty","Green","Sylvan","Nature","Natural","Freedom","Heart","Bliss","Back","Barred","Bear","Deer","Holly","Cedar","New","Sunshine","Maple","Sweet","Hill","Ridge","Forest","Mountain","Creek","Brook","Ridge","Spring","Great","Good","Kind","Meadow","Glen","Old"],I=["Ridge","Field","Horn","Forest","Mountain","Meadow","Run","Hawk","Glen","Road","Lane","Creek","Hill","Brook","Bend","Roots","View","Pond","Sunrise"],R=["Organic Farm","Farm","Dairy","Sugar Shack","Farms","Farm","Farm","Farm","Organic Farm"],G=function(e,t){var n=Math.floor(Math.random()*t.length);return e.length>0&&(e+=" "),e+t[n]},W=function(){var e="";return Math.random()>.6?(e=G(e,F),Math.random()>.6&&(e=G(e,B))):e=G(e,B),e=G(e,I),e=G(e,R)},H=function(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{id:"generator",children:[Object(o.jsx)(d,{}),Object(o.jsx)("h2",{children:"Organic Farm Name Generator"}),Object(o.jsx)("button",{type:"button",onClick:function(){c(W())},children:"Generate New Farm Name"}),n?Object(o.jsx)("div",{id:"farm",children:Object(o.jsx)("p",{id:"farm_name",children:n})}):null]})};var V=function(){return Object(o.jsx)(i.a,{basename:"/",children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:k}),Object(o.jsx)(l.a,{exact:!0,path:"/colors",component:M}),Object(o.jsx)(l.a,{exact:!0,path:"/about",component:C}),Object(o.jsx)(l.a,{exact:!0,path:"/generator",component:H})]})})};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(V,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.e991dd79.chunk.js.map