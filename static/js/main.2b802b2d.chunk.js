(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{11:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return f}));var r=n(5),c=n.n(r),a=n(9),s=n(13),i=n(14),o=n.n(i),l=function(){return new Promise((function(t,n){fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:"Basic "+e.from("d4c2fd522b164d169533cc916f7c5d27:fcd4680273bc464ab3524d0ce93bf654").toString("base64"),"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})}).then((function(e){return e.json().then((function(e){return t(e)}))})).catch((function(e){return n(e)}))}))},u=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var i,o,l,u,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=[new s.a(t,null,null)],o=[],l=null;case 3:if(h(n.id,i)||!(i.length>0)){e.next=13;break}return l=i.shift(),a(l),o.push(l),e.next=9,d(l,r);case 9:e.sent.forEach((function(e){h(e.id,i)||h(e.id,o)||i.push(e)})),e.next=3;break;case 13:return u=i.find((function(e){return e.id===n.id})),j=u.getPredecessors(),a(null),e.abrupt("return",j.reverse());case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),d=function(e,t){return new Promise((function(n,r){t.getArtistRelatedArtists(e.id).then((function(t){n(t.artists.map((function(t){return new s.a(t,e,null)})))}))}))},j=function(e,t){return new Promise(function(){var n=Object(a.a)(c.a.mark((function n(r,a){var s,i;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s=[],i=0;case 2:if(!(i<e.length)){n.next=8;break}return n.next=5,t.getArtistTopTracks(e[i].id,"US").then((function(e){s.push(e.tracks[0])})).catch((function(e){return a(e)}));case 5:i++,n.next=2;break;case 8:r(s);case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())},h=function(e,t){return-1!==t.findIndex((function(t){return t.id===e}))},b=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new o.a).setAccessToken(t),e.next=4,r.getMe();case 4:return a=e.sent,e.next=7,r.createPlaylist(a.id,{name:"Degrees of Separation",public:!1,collaborative:!1,description:"Several degrees of spotify exploration"});case 7:return s=e.sent,e.next=10,r.addTracksToPlaylist(s.id,n.map((function(e){return"spotify:track:"+e})));case 10:return e.abrupt("return",s.id);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(t){return new Promise((function(n,r){fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:"Basic "+e.from("d4c2fd522b164d169533cc916f7c5d27:fcd4680273bc464ab3524d0ce93bf654").toString("base64"),"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"authorization_code",code:t,redirect_uri:"http://marshallwilson.info/"})}).then((function(e){e.json().then((function(e){return n(e)}))})).catch((function(e){r(e)}))}))}}).call(this,n(44).Buffer)},13:function(e,t,n){"use strict";var r=n(23),c=n(24),a=function(){function e(t,n,c){Object(r.a)(this,e),this.artist=t,this.prev=n,this.id=t.id,this.prevCollab=c}return Object(c.a)(e,[{key:"getPredecessors",value:function(){if(null===this.prev)return[this];var e=[this];return e=e.concat(this.prev.getPredecessors())}}]),e}();t.a=a},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(20),s=n.n(a),i=(n(29),n(17)),o=n(3),l=(n(30),n(0)),u=function(e){var t=e.selected;return Object(l.jsxs)("header",{id:"header",children:[Object(l.jsx)("h1",{id:"logo",children:Object(l.jsx)("a",{href:"/#/",children:"Marshall Wilson"})}),Object(l.jsxs)("nav",{children:["work"===t?Object(l.jsx)("a",{href:"/#/",className:"nav-links current-link",children:"work"}):Object(l.jsx)("a",{href:"/#/",className:"nav-links",children:"work"}),"about"===t?Object(l.jsx)("a",{href:"/#/about",className:"nav-links current-link",children:"about"}):Object(l.jsx)("a",{href:"/#/about",className:"nav-links",children:"about"})]})]})},d=n(2),j=n.p+"static/media/trex.c9512315.jpg",h=n.p+"static/media/um.fb0c5e73.png",b=n.p+"static/media/network.082415d4.jpg",f=n.p+"static/media/colors.5fccc065.png",p=n.p+"static/media/cat.e40e6155.jpg",m=function(e,t,n,r){return{name:e,types:t,url:n,image:r}},O=[m("Spotify Artist Explorer",["all","javascript"],"/#/explorer",b),m("Museum Employee Scheduler",["all","python"],"https://github.com/Marshall-Wilson/employee_scheduler",j),m("Universal Machine Emulator",["all","c"],"https://github.com/Marshall-Wilson/UM-Emulator",h),m("Color Picker Animation",["all","javascript"],"/#/colors",f),m("PNM Image Manipulation",["all","c"],"https://github.com/Marshall-Wilson/pnm-manipulation",p),m("Musical Collaboration Explorer",["all","c++"],"https://github.com/Marshall-Wilson/collaboration-explorer",b)],x=function(e){var t=e.project;return Object(l.jsx)("div",{className:"project",children:Object(l.jsxs)("a",{href:t.url,children:[Object(l.jsx)("img",{src:t.image,alt:t.name}),Object(l.jsx)("h3",{children:t.name})]})})},g=[{name:"All",selected:!0},{name:"Python",selected:!1},{name:"JavaScript",selected:!1},{name:"C++",selected:!1},{name:"C",selected:!1}],v=function(){var e=Object(r.useState)(O),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(g),s=Object(d.a)(a,2),i=s[0],o=s[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"selector",children:i.map((function(e){return Object(l.jsx)("button",{className:e.selected?"selected":"",type:"button",id:e.name,onClick:function(){return t=e.name,c(O.filter((function(e){return e.types.includes(t.toLowerCase())}))),void o(g.map((function(e){return e.name===t?e.selected=!0:e.selected=!1,e})));var t},children:Object(l.jsx)("h2",{children:e.name})},e.name)}))}),Object(l.jsx)("div",{className:"projects",children:n.map((function(e){return Object(l.jsx)(x,{project:e},e.name)}))})]})},w=(n(32),function(){return""!==window.location.search?Object(l.jsx)(o.a,{to:"/explorer"}):Object(l.jsxs)("div",{id:"Index",children:[Object(l.jsx)(u,{selected:"work"}),Object(l.jsx)(v,{})]})});n(40);var y=function(e,t){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])},k=function(){var e=function(e){for(var t="linear-gradient(to bottom right ",n=0;n<e.length;n++)t+=", ",t+="rgb(".concat(e[n].r,", ").concat(e[n].g,", ").concat(e[n].b,")");return{backgroundImage:t+=")"}},t=Object(r.useState)(new Array(10).fill({r:50,g:250,b:50})),n=Object(d.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(e(c)),i=Object(d.a)(s,2),o=i[0],j=i[1],h=Object(r.useState)({r:3,g:4,b:5}),b=Object(d.a)(h,2),f=b[0],p=b[1],m=Object(r.useState)(0),O=Object(d.a)(m,2),x=O[0],g=O[1],v=Object(r.useState)(!0),w=Object(d.a)(v,2),k=w[0],S=w[1];return y((function(){if(k){var t=function(e){return e.push(Object.assign({},e[e.length-1])),e.shift(),e}(c);x%1===0&&(t=function(e){for(var t=f,n=0,r=Object.entries(e[e.length-1]);n<r.length;n++){var c=Object(d.a)(r[n],1)[0];e[e.length-1][c]+=f[c],(e[e.length-1][c]>250||e[e.length-1][c]<50)&&(t[c]*=-1)}return p(t),e}(t)),g(x+1),a(t),j(e(c))}}),75),Object(l.jsxs)("div",{id:"ColorAnimation",onClick:function(){S(!k)},style:o,children:[Object(l.jsx)(u,{}),Object(l.jsxs)("div",{id:"colorInfo",children:[Object(l.jsx)("div",{id:"swatchColor",style:{background:"rgb(".concat(c[0].r,", ").concat(c[0].g,", ").concat(c[0].b)}}),Object(l.jsx)("h1",{children:"Current Color"}),Object(l.jsxs)("h2",{children:["R: ",Object(l.jsx)("span",{className:"colorVal",id:"rVal",children:c[0].r})]}),Object(l.jsxs)("h2",{children:["G: ",Object(l.jsx)("span",{className:"colorVal",id:"gVal",children:c[0].g})]}),Object(l.jsxs)("h2",{children:["B: ",Object(l.jsx)("span",{className:"colorVal",id:"bVal",children:c[0].b})]})]}),Object(l.jsx)("footer",{children:Object(l.jsx)("a",{href:"/",children:"Marshall Wilson 2021"})})]})},S=n.p+"static/media/headshot.079f4828.jpeg",N=function(){return Object(l.jsx)("div",{className:"headshotFrame",children:Object(l.jsx)("img",{className:"headshot",src:S,alt:"Marshall Wilson"})})},M=(n(41),n.p+"static/media/resume.7e6d59ab.pdf"),C=function(){var e="w.marshall.wilson",t="gmail.com";return Object(l.jsxs)("div",{id:"about",children:[Object(l.jsx)(u,{selected:"about"}),Object(l.jsxs)("div",{className:"profile",children:[Object(l.jsx)(N,{}),Object(l.jsxs)("div",{className:"blurb",children:[Object(l.jsxs)("p",{children:["Hi! I'm ",Object(l.jsx)("span",{children:"Marshall Wilson"}),", a software engineer who graduated from the Tufts University Computer Science Post-Bac program in August 2021. This site contains some of my personal, professional, and class projects, so feel free to look around."]}),Object(l.jsx)("p",{children:"Prior to my time at Tufts, I studied Biology at Dartmouth College, worked as a science educator and coordinator at the Museum of Science and MIT, and have even been a baker, winemaker, and farmer. I'd love to bring my coding skills and experience to your team!"}),Object(l.jsxs)("p",{className:"email",children:["email: ",Object(l.jsx)("a",{href:"mailto:"+e+"@"+t,children:e+"@"+t})]}),Object(l.jsxs)("div",{className:"mediaLinks",children:[Object(l.jsx)("a",{href:M,download:"Marshall Wilson Resume.pdf",children:"Resume"}),Object(l.jsx)("a",{href:"https://github.com/Marshall-Wilson",children:"GitHub"}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/w-marshall-wilson/",children:"LinkedIn"})]})]})]})]})},A=(n(42),["Abundant","Sweet","Sunny","Verdant","Good","Kind","Old","New","Peaceful","Stinky","Running","Sentient","Blessed"]),P=["Acorn","River","Forest","Beauty","Green","Sylvan","Nature","Natural","Freedom","Heart","Bliss","Back","Barred","Bear","Deer","Holly","Cedar","New","Sunshine","Maple","Sweet","Hill","Ridge","Forest","Mountain","Creek","Brook","Ridge","Spring","Great","Good","Kind","Meadow","Glen","Old"],I=["Ridge","Field","Horn","Forest","Mountain","Meadow","Run","Hawk","Glen","Road","Lane","Creek","Hill","Brook","Bend","Roots","View","Pond","Sunrise"],E=["Organic Farm","Farm","Dairy","Sugar Shack","Farms","Farm","Farm","Farm","Organic Farm"],T=function(e,t){var n=Math.floor(Math.random()*t.length);return e.length>0&&(e+=" "),e+t[n]},R=function(){var e="";return Math.random()>.6?(e=T(e,A),Math.random()>.6&&(e=T(e,P))):e=T(e,P),e=T(e,I),e=T(e,E)},F=function(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{id:"generator",children:[Object(l.jsx)(u,{}),Object(l.jsx)("h2",{children:"Organic Farm Name Generator"}),Object(l.jsx)("button",{type:"button",onClick:function(){c(R())},children:"Generate New Farm Name"}),n?Object(l.jsx)("div",{id:"farm",children:Object(l.jsx)("p",{id:"farm_name",children:n})}):null]})},B=(n(43),n(11)),_=n(5),W=n.n(_),G=n(9),H=n(14),L=n.n(H),V=function(e){var t=e.artistInfo;return Object(l.jsxs)("div",{id:"Artist",children:[Object(l.jsx)("h2",{children:t.name}),t.images&&t.images[0]?Object(l.jsx)("img",{alt:t.name,src:t.images[0].url}):null]})},D=function(e,t){return e+"-"+t.id},U=function(e){var t=e.songList,n="".concat("https://accounts.spotify.com/authorize","?response_type=code&client_id=").concat("d4c2fd522b164d169533cc916f7c5d27","&redirect_uri=").concat("http://marshallwilson.info/","&state=").concat(t.reduce(D,""),"&scope=").concat(["user-modify-private","playlist-modify-private"].join("%20"),"&show_dialog=true");return Object(l.jsx)("div",{className:"playlist",children:Object(l.jsx)("a",{className:"playlist-button",href:n,children:Object(l.jsx)("p",{children:"Get The Playlist"})})})},z=function(e){var t=e.startName,n=e.endName,c=Object(r.useState)(null),a=Object(d.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)(null),u=Object(d.a)(o,2),j=u[0],h=u[1],b=Object(r.useState)(null),f=Object(d.a)(b,2),p=f[0],m=f[1],O=Object(r.useState)([]),x=Object(d.a)(O,2),g=x[0],v=x[1],w=Object(r.useState)(null),y=Object(d.a)(w,2),k=y[0],S=y[1],N=Object(r.useRef)(k),M=Object(r.useState)([]),C=Object(d.a)(M,2),A=C[0],P=C[1],I=Object(r.useState)(""),E=Object(d.a)(I,2),T=E[0],R=E[1],F=new L.a;Object(r.useEffect)((function(){Object(B.a)().then((function(e){return i(e)}))}),[]),Object(r.useEffect)((function(){s&&(F.setAccessToken(s.access_token),F.searchArtists(t).then((function(e){return h(e.artists.items[0])})).catch((function(e){return alert("start not found")})),F.searchArtists(n).then((function(e){return m(e.artists.items[0])})).catch((function(e){return alert("end not found")})))}),[s]),Object(r.useEffect)((function(){j&&p&&(setTimeout((function(){N&&R("Searching for ".concat(p.name," starting with ").concat(j.name,"'s related artists"))}),3e3),setTimeout((function(){N&&R("Artist relations don't always go both ways, so the shortest path from ".concat(j.name," to ").concat(p.name," could be very different from the shortest path from ").concat(p.name," to ").concat(j.name,"."))}),15e3),setTimeout((function(){N&&R("The speed of this app is limited by the number of API calls it makes. If your artists are far apart, there could be thousands of other artists to search first.")}),3e4),H())}),[j,p]),Object(r.useEffect)((function(){g.length>0&&(_(),R(""))}),[g]);var _=function(){var e=Object(G.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=P,e.next=3,Object(B.c)(g,F);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(G.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=v,e.next=3,Object(B.e)(j,p,F,S);case 3:e.t1=e.sent,(0,e.t0)(e.t1),R("");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"traverser",children:[Object(l.jsx)("div",{className:"search",children:j&&p?Object(l.jsxs)("div",{className:"results",children:[Object(l.jsx)(V,{artistInfo:j}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"middle-wrapper",children:k?Object(l.jsxs)("div",{id:"current",children:[Object(l.jsx)("h4",{children:"Currently Exploring:"}),Object(l.jsx)("h4",{children:k.artist.name}),""===T?null:Object(l.jsx)("p",{id:"message",children:T})]}):g.slice(1,-1).map((function(e){return Object(l.jsx)(V,{artistInfo:e.artist},e.id)}))}),Object(l.jsx)("hr",{}),Object(l.jsx)(V,{artistInfo:p})]}):Object(l.jsx)("p",{children:"Loading..."})}),A.length>0?Object(l.jsx)(U,{songList:A}):null]})},J=function(e){var t=e.setStartName,n=e.setEndName,r=e.beginSearching;return Object(l.jsxs)("div",{className:"input",children:[Object(l.jsx)("p",{children:"Find the shortest path between two artists"}),Object(l.jsx)("input",{type:"text",placeholder:"Starting Artist Name",onChange:function(e){return t(e.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"Ending Artist Name",onChange:function(e){return n(e.target.value)}}),Object(l.jsx)("button",{onClick:r,children:"Search"})]})},K=window.location.search.substring(1).split("&").reduce((function(e,t){if(t){var n=t.split("=");e[n[0]]=decodeURIComponent(n[1])}return e}),{});var q=function(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(d.a)(a,2),i=s[0],o=s[1],u=Object(r.useState)(""),j=Object(d.a)(u,2),h=j[0],b=j[1],f=Object(r.useState)(!1),p=Object(d.a)(f,2),m=p[0],O=p[1],x=Object(r.useState)(null),g=Object(d.a)(x,2),v=g[0],w=g[1];return Object(r.useEffect)((function(){K.code&&K.state&&c(K.code)}),[]),Object(r.useEffect)((function(){if(n&&K.state){var e=K.state.split("-").filter((function(e){return""!==e}));console.log("getting token"),Object(B.d)(n).then((function(t){console.log(t),Object(B.b)(t.access_token,e).then((function(e){return w(e)}))}))}}),[n]),Object(l.jsx)("div",{className:"artist-explorer",children:n?Object(l.jsxs)("div",{className:"playlist-added",children:[Object(l.jsx)("h1",{children:" Playlist Added "}),Object(l.jsx)("a",{className:"playlist-button",href:"https://open.spotify.com/playlist/".concat(v),target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("p",{children:"Open Spotify?"})})]}):m?Object(l.jsx)(z,{startName:i,endName:h}):Object(l.jsx)(J,{setStartName:o,setEndName:b,beginSearching:function(){O(!0)}})})},Q=function(){return Object(l.jsxs)("div",{className:"about",children:[Object(l.jsx)("h1",{children:"About"}),Object(l.jsxs)("p",{children:["This project was meant to translate a ",Object(l.jsx)("a",{href:"https://github.com/Marshall-Wilson/collaboration-explorer",children:"previous C++ project"}),", which explored pre-establishes networks of artists and collaborations, into the real world by incorporating the Spotify API"]}),Object(l.jsx)("p",{children:"The app implements a breadth-first search of Spotify's related artists feature, searching first through the related artists of the starting artist, then through those artists' related artists, and so on until it finds the ending artist."}),Object(l.jsx)("p",{children:"Due to the Spotify API's rate limiting and the average API response time, the current version of this app has a hard time dealing with artists more than a few steps apart. If you're just looking to try out the app, I recommend using artists in similar genres, well-known artists, or some of the suggestions below."}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Hozier to Iron and Wine"}),": ",Object(l.jsx)("p",{children:"\u2043 2 steps, 1 second"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Joni Mitchell to Bob Dylan"}),": ",Object(l.jsx)("p",{children:"\u2043 3 steps, 6 seconds"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Dolly Parton to Chicago"}),": ",Object(l.jsx)("p",{children:"\u2043 4 steps, 30 seconds"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Carly Rae Jepsen to Nicki Minaj"}),": ",Object(l.jsx)("p",{children:"\u2043 5 steps, 3 minutes"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Frank Sinatra to Kermit the Frog"}),": ",Object(l.jsx)("p",{children:"\u2043 7 steps, 7 minutes"})]})]})]})},X=function(e){var t=e.clickHandler;return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)("h1",{children:"Spotify Artist Explorer"}),Object(l.jsxs)("div",{className:"nav-links",children:[Object(l.jsx)("h2",{onClick:function(){return t("main")},children:"Main"}),Object(l.jsx)("h2",{onClick:function(){return t("about")},children:"About"})]})]})},Y=function(){var e=Object(r.useState)("main"),t=Object(d.a)(e,2),n=t[0],c=t[1],a=function(e){e.code,e.trackString;return"main"===n?Object(l.jsx)(q,{}):"about"===n?Object(l.jsx)(Q,{}):Object(l.jsx)("p",{children:"Error: Please Reload Page"})};return Object(l.jsxs)("div",{className:"explorer-container",children:[Object(l.jsx)(X,{clickHandler:function(e){c(e)}}),Object(l.jsx)(a,{}),Object(l.jsx)("footer",{children:Object(l.jsxs)("p",{children:[" Marshall Wilson 2021 | ",Object(l.jsx)("a",{href:"http://www.marshallwilson.info",children:" www.marshallwilson.info "})]})})]})};var Z=function(){return Object(l.jsx)(i.a,{basename:"/",children:Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/",component:w}),Object(l.jsx)(o.b,{exact:!0,path:"/colors",component:k}),Object(l.jsx)(o.b,{exact:!0,path:"/about",component:C}),Object(l.jsx)(o.b,{exact:!0,path:"/generator",component:F}),Object(l.jsx)(o.b,{exact:!0,path:"/explorer",component:Y})]})})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(Z,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.2b802b2d.chunk.js.map