(this["webpackJsonplost-cities"]=this["webpackJsonplost-cities"]||[]).push([[0],{163:function(e,t,a){e.exports=a(335)},168:function(e,t,a){},334:function(e,t,a){},335:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),o=a.n(r),i=(a(168),a(13)),c=a(51),s=a(337),u=a(336),m=a(20),d=a(80),h=a(137),p=a.n(h),g=function(e){var t=e.expedition,a=Object(n.useState)(t.wagers),r=Object(i.a)(a,2),o=r[0],c=r[1],s=Object(n.useState)(t.cards),u=Object(i.a)(s,2),h=u[0],g=u[1],f=Object(n.useState)(t.points),b=Object(i.a)(f,2),w=b[0],y=b[1];Object(n.useEffect)((function(){var t={wagers:o,cards:h,points:w};p()(t,e.expedition)||e.onChange(t)}),[o,h,w]),Object(n.useEffect)((function(){var t=e.expedition;c(t.wagers),g(t.cards),y(t.points)}),[e,c,g,y]);for(var v=[],C=function(t){var a=h.has(t)?"primary":"dashed";v.push(l.a.createElement(m.a,{type:a,key:"".concat(e.color,":").concat(t),onClick:function(){var e=new Set(h);e.has(t)?e.delete(t):e.add(t),g(e),y(E({wagers:o,cards:e}))}},t))},j=2;j<=10;j++)C(j);return l.a.createElement("div",null,e.color,l.a.createElement("div",null,l.a.createElement(d.a.Group,{value:"".concat(o),buttonStyle:"solid",onChange:function(e){var t=parseInt(e.target.value);c(t),y(E({wagers:t,cards:h}))}},l.a.createElement(d.a.Button,{value:"0"},"0 Wagers"),l.a.createElement(d.a.Button,{value:"1"},"1 Wager"),l.a.createElement(d.a.Button,{value:"2"},"2 Wagers"),l.a.createElement(d.a.Button,{value:"3"},"3 Wagers")),v,w.finalPoints))};function E(e){if(0===e.wagers&&0===e.cards.size)return{sum:0,expeditionCost:0,subtotal:0,wager:0,total:0,eightCardBonus:0,finalPoints:0};var t=e.wagers,a=1;switch(e.wagers){case 1:a=2;break;case 2:a=3;break;case 3:a=4}var n=Array.from(e.cards).reduce((function(e,t){return e+t}),0),l=n+-20,r=l*a,o=e.cards.size+t>=8?20:0;return{sum:n,expeditionCost:-20,subtotal:l,wager:t,total:r,eightCardBonus:o,finalPoints:r+o}}var f,b=function(e){var t=Object(n.useState)(e.player.name),a=Object(i.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(e.player.yellow),u=Object(i.a)(c,2),m=u[0],d=u[1],h=Object(n.useState)(e.player.blue),p=Object(i.a)(h,2),f=p[0],b=p[1],w=Object(n.useState)(e.player.white),y=Object(i.a)(w,2),v=y[0],C=y[1],j=Object(n.useState)(e.player.green),O=Object(i.a)(j,2),k=O[0],S=O[1],P=Object(n.useState)(e.player.red),x=Object(i.a)(P,2),B=x[0],I=x[1],W=E(m).finalPoints+E(f).finalPoints+E(v).finalPoints+E(k).finalPoints+E(B).finalPoints;return Object(n.useEffect)((function(){e.onChange({name:r,points:W,yellow:m,blue:f,white:v,green:k,red:B})}),[r,m,f,v,k,B]),Object(n.useEffect)((function(){d(e.player.yellow),b(e.player.blue),C(e.player.white),S(e.player.green),I(e.player.red)}),[e,d,b,C,S,I]),l.a.createElement("div",{style:{marginBottom:"2rem"}},l.a.createElement(s.a,{size:"large",defaultValue:r,placeholder:e.placeholder,onChange:function(e){return o(e.target.value)}}),l.a.createElement(g,{color:"yellow",expedition:m,onChange:function(e){d(e)}}),l.a.createElement(g,{color:"blue",expedition:f,onChange:function(e){b(e)}}),l.a.createElement(g,{color:"white",expedition:v,onChange:function(e){C(e)}}),l.a.createElement(g,{color:"green",expedition:k,onChange:function(e){S(e)}}),l.a.createElement(g,{color:"red",expedition:B,onChange:function(e){I(e)}}),l.a.createElement("div",null,"Total: ",W))},w=function(e){var t=e.player,a=[Object(c.a)({key:"yellow"},t.yellow,{},t.yellow.points),Object(c.a)({key:"blue"},t.blue,{},t.blue.points),Object(c.a)({key:"white"},t.white,{},t.white.points),Object(c.a)({key:"green"},t.green,{},t.green.points),Object(c.a)({key:"red"},t.red,{},t.red.points),{key:"Final Points",finalPoints:t.points}],n=[{title:"Color",dataIndex:"key"},{title:"Sum",align:"right",render:function(e){return e.points?e.cards.size<=1?e.points.sum:l.a.createElement(l.a.Fragment,null,Array.from(e.cards).sort((function(e,t){return e-t})).join(" + ")," =",e.points.sum):""}},{title:"Expedition Cost",dataIndex:"expeditionCost",align:"right"},{title:"Subtotal",dataIndex:"subtotal",align:"right"},{title:"Wager",dataIndex:"wager",align:"right",render:function(e){switch(e){case 0:return"None";case 1:return"x 2";case 2:return"x 3";case 3:return"x 4"}}},{title:"Total",dataIndex:"total",align:"right"},{title:">= 8 Card Bonus",dataIndex:"eightCardBonus",align:"right"},{title:"Final Points",dataIndex:"finalPoints",align:"right"}];return l.a.createElement("div",{style:{marginBottom:"2rem"}},l.a.createElement("h2",null,e.name),l.a.createElement(u.a,{dataSource:a,columns:n,pagination:!1}))},y=a(340),v=a(339),C=a(338);function j(){return{wagers:0,cards:new Set,points:{sum:0,expeditionCost:0,subtotal:0,wager:0,total:0,eightCardBonus:0,finalPoints:0}}}function O(){return{name:"",points:0,yellow:j(),blue:j(),white:j(),green:j(),red:j()}}function k(e,t){return t===f.TIE?"":e===t?"#3f8600":"#cf1322"}!function(e){e[e.TIE=0]="TIE",e[e.P1=1]="P1",e[e.P2=2]="P2"}(f||(f={}));var S=function(){var e=Object(n.useState)(O()),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(O()),c=Object(i.a)(o,2),s=c[0],u=c[1],d="",h="".concat(a.points," vs ").concat(s.points),p=a.name?a.name:"Player 1",g=s.name?s.name:"Player 2",E=f.TIE;return a.points>s.points?(d="".concat(p," Wins"),E=f.P1):a.points<s.points?(d="".concat(g," Wins"),E=f.P2):d="Tie",l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Lost Cities"),l.a.createElement(b,{placeholder:"Player 1",player:a,onChange:function(e){return r(e)}}),l.a.createElement(b,{placeholder:"Player 2",player:s,onChange:function(e){return u(e)}}),l.a.createElement(y.a,{gutter:16},l.a.createElement(v.a,{span:4},l.a.createElement(C.a,{title:p,value:a.points,valueStyle:{color:k(f.P1,E)}})),l.a.createElement(v.a,{span:4},l.a.createElement(C.a,{title:g,value:s.points,valueStyle:{color:k(f.P2,E)}}))),d,": ",h,l.a.createElement("div",{style:{marginBottom:"2rem"}},l.a.createElement(m.a,{onClick:function(){var e=O();e.name=a.name,r(e);var t=O();t.name=s.name,u(t)}},"New Game")),l.a.createElement("h1",null,"Points Breakdown"),l.a.createElement(w,{player:a,name:p}),l.a.createElement(w,{player:s,name:g}))};a(334);var P=function(){return l.a.createElement("div",{style:{margin:"1rem"}},l.a.createElement("div",{style:{marginBottom:"3rem"}},l.a.createElement(S,null)),l.a.createElement("h1",null,"Resources"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.github.com/aizatto/lost-cities/"},"GitHub Source Code")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.thamesandkosmos.com/index.php/product/category/games/lost-cities-card-game"},"Official Site"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.thamesandkosmos.com/manuals/full/691821_LC_Card_Game.pdf"},"Rule Book")))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://boardgamegeek.com/boardgame/50/lost-cities"},"Board Game Geek"))),l.a.createElement("h1",null,"Alternatives"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://mattbru.me/tools/lost-cities-score-calculator/"},"Matt Brubaker: Lost Cities Score Calculator")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://phone-cities.netlify.app/"},"https://phone-cities.netlify.app/"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://old.reddit.com/r/boardgames/comments/ek4kiq/lost_cities_calculator_for_phones/"},"Announcement")))),l.a.createElement("li",null,l.a.createElement("a",{href:"http://thegamercouple.com/tools/lost-cities-calculator/"},"the gamer couple: Lost Cities Calculator")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://plingri.net/lc.html"},"http://plingri.net/lc.html"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://boardgamegeek.com/thread/461636/lost-cities-online-score-calculator"},"Announcement")))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://mtszkw.github.io/lost-cities/"},"Mateusz Kwa\u015bniak: Lost Cities Score Calculator"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/mtszkw/lost-cities"},"GitHub Source Code")))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://davidmcneil.github.io/lost-cities/"},"David McNeil: Lost Cities Score Calculator"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/davidMcneil/lost-cities"},"GitHub Source Code"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[163,1,2]]]);
//# sourceMappingURL=main.5ad0e3ce.chunk.js.map