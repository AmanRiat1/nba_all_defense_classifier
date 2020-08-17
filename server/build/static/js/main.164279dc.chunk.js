(this.webpackJsonpnba_classifier=this.webpackJsonpnba_classifier||[]).push([[0],{59:function(e,t,a){e.exports=a.p+"static/media/bball.72eb6632.svg"},84:function(e,t,a){e.exports=a(99)},89:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(14),l=a.n(r),c=a(22),i=(a(89),a(147)),s=a(135),m=a(136),u=a(149),d=a(152),h=a(59),b=a.n(h),g=a(65);var f=e=>o.a.createElement(i.a,{variant:"#363537"===e.currentTheme.text?"light":"dark",expand:"lg",style:{backgroundColor:e.currentTheme.contentColor}},o.a.createElement(s.a,null,o.a.createElement(m.a,null,o.a.createElement(i.a.Brand,{style:{color:e.currentTheme.text},href:"#home"},o.a.createElement("img",{alt:"",src:b.a,width:"30",height:"30",className:"logo d-inline-block align-top"})," ","All Defensive Team Classifier"))),o.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(u.a,{className:"mr-auto"},o.a.createElement(u.a.Link,{variant:"dark",href:"https://github.com/AmanRiat1/nba_all_defense_classifier",target:"_blank"},o.a.createElement(g.a,{size:24,className:"mr-sm-2",style:{float:"left"}})," Github")),o.a.createElement(s.a,null,o.a.createElement(m.a,null,"Light",o.a.createElement(d.a,{onChange:e.toggleTheme,inputProps:{"aria-label":"primary checkbox"}}),"Dark")))),E=a(142),p=a(151),v=a(143),j=a(146),k=a(148),y=a(67),O=a.n(y),w=a(141),C=a(68);var x=e=>{const t=Object(n.useState)(null),a=Object(c.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),u=Object(c.a)(i,2),d=u[0],h=u[1],b=Object(n.useState)(""),g=Object(c.a)(b,2),f=g[0],y=g[1],x=Object(n.useState)(!1),T=Object(c.a)(x,2),F=T[0],S=T[1],A=Object(n.useState)([]),B=Object(c.a)(A,2),N=B[0],L=B[1],_=Object(n.useState)(),R=Object(c.a)(_,2),W=R[0],z=R[1],I=Object(n.useState)("0"),D=Object(c.a)(I,2),J=D[0],M=D[1];Object(n.useEffect)(()=>{fetch("http://localhost:3001/rookies").then(e=>e.json()).then(e=>{S(!0),L(e.rookies)},e=>{S(!0),l(e)})},[]);const P=Object(w.a)(t=>({inputRoot:{color:e.currentTheme.text,"&  .MuiOutlinedInput-notchedOutline":{borderColor:e.currentTheme.text},fontFamily:"Consolas",".MuiAutocomplete-listbox":{fontFamily:"Consolas"}}}))();return r?o.a.createElement("div",null,"Error: ",r.message):F?o.a.createElement(v.a,{fluid:!0},o.a.createElement(p.a,{style:{borderRadius:"15px",backgroundColor:e.currentTheme.contentColor}},o.a.createElement(p.a.Body,{className:"text-center"},o.a.createElement(p.a.Title,null,"Select a 2019-20 NBA Rookie"),o.a.createElement("br",null),o.a.createElement(k.a,{classes:P,onChange:(e,t)=>{y(t),fetch("http://localhost:3001/player-image/".concat(t)).then(e=>e.json()).then(e=>{M(e.imageLink)},e=>{M("0")}),(e=>{fetch("http://localhost:3001/predict/".concat(e)).then(e=>e.json()).then(e=>{z(e.playerPrediction),h(0)},e=>{h(1),z("0")})})(t)},id:"combo-box-demo",options:N,renderInput:e=>o.a.createElement(j.a,Object.assign({},e,{variant:"outlined"}))}),o.a.createElement("br",null),o.a.createElement(s.a,null,o.a.createElement(m.a,null,"0"===J?o.a.createElement(C.a,{size:180}):o.a.createElement(E.a,{src:J,style:{border:"1px solid black"},rounded:!0})),o.a.createElement(m.a,null,o.a.createElement("div",{style:{justifyContent:"center"}},o.a.createElement(O.a,{lineWidth:32,size:190,progress:W,progressColor:"maroon",bgColor:"moccasin",textColor:e.currentTheme.text,textStyle:{font:"bold 5rem Oswald , Arial, sans-serif"},roundedStroke:!0})))),o.a.createElement("br",null),o.a.createElement(s.a,{style:{justifyContent:"center",fontFamily:"Consolas"}},""===f||null===f?"":1===d?"Sorry we couldn't gather enough information on ".concat(f):"".concat(f," has a ").concat(W,"% chance of making an all defensive team"))))):o.a.createElement("div",null,"Loading...")},T=a(70),F=a(45);function S(){const e=Object(T.a)(["\n  body {\n    background: ",";\n    color: ",";\n    font-family: Oswald, sans-serif;\n  }\n  "]);return S=function(){return e},e}var A=Object(F.b)(S(),({theme:e})=>e.body,({theme:e})=>e.text);const B={body:"linear-gradient(to bottom, #2BC0E4, #EAECC6)",text:"#363537",toggleBorder:"#FFF",background:"#363537",contentColor:"#FFF"},N={body:"linear-gradient(to bottom, #661884, #794a99)",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#999",contentColor:"#292929"};var L=()=>{const e=Object(n.useState)(B),t=Object(c.a)(e,2),a=t[0],r=t[1];return o.a.createElement(F.a,{theme:a},o.a.createElement(o.a.Fragment,null,o.a.createElement(A,null),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(f,{toggleTheme:()=>{r(a===B?N:B)},currentTheme:a})),o.a.createElement("main",{className:"container center"},o.a.createElement(x,{currentTheme:a})))))},_=a(150);const R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const t=e.installing;t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}a(97),a(98);l.a.render(o.a.createElement(_.a,null,o.a.createElement(L,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="".concat("","/service-worker.js");R?function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):W(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e):W(e)})}}()}},[[84,1,2]]]);
//# sourceMappingURL=main.164279dc.chunk.js.map