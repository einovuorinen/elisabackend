(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{21:function(e,t,a){e.exports=a(48)},26:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),c=a.n(i),o=(a(26),a(9)),l=a.n(o),s=a(20),u=a(3),m=a(50),f=a(51),d=a(52),v=a(8),p=a.n(v),h=function(e){return r.a.createElement("div",{className:"belowNav"},"Search for a program",r.a.createElement("form",{onSubmit:e.search,className:"searchForm"},"channel:",r.a.createElement("select",{onChange:e.getResultsbyChannel},e.channelData.map((function(e){return r.a.createElement("option",{value:e.id},e.name)}))),"date: ",r.a.createElement("input",{type:"date",value:e.date,onChange:e.getResultsByDate}),r.a.createElement("button",{type:"submit"},"Search")))},b=function(e){return e.favorites.find((function(t){return t.id===e.id}))?r.a.createElement("button",{className:"favoriteButton",onClick:function(){return e.favorite(e.id,e.type)}},"Remove from Favorites"):r.a.createElement("button",{className:"favoriteButton",onClick:function(){return e.favorite(e.id,e.type)}},"Favorite")},E=function(e){var t=e.filter.toLowerCase();return r.a.createElement("table",{className:"table"},e.displayData.filter((function(e){return e.name&&e.name.toLowerCase().includes(t)||e.description&&e.description.toLowerCase().includes(t)})).map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{className:"firstColumn"},t.name),r.a.createElement("td",null,t.rightColumn),r.a.createElement("td",null,r.a.createElement(b,{favorite:e.favorite,favorites:e.favorites,type:t.type,id:t.id})))})))},g=function(e){return r.a.createElement("div",null,r.a.createElement(m.a,null,"Keywords:"),r.a.createElement("input",{value:e.filter,onChange:e.filterResults}))},y=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"alert alert-primary"},t)},O=function(){var e=Object(n.useState)(37),t=Object(u.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),m=o[0],v=o[1],b=Object(n.useState)([]),O=Object(u.a)(b,2),j=O[0],S=O[1],C=Object(n.useState)(""),w=Object(u.a)(C,2),N=w[0],k=w[1],D=Object(n.useState)([]),R=Object(u.a)(D,2),T=R[0],B=R[1],J=Object(n.useState)([]),F=Object(u.a)(J,2),L=F[0],x=F[1],A=Object(n.useState)(localStorage.favorites?JSON.parse(localStorage.favorites):[]),I=Object(u.a)(A,2),P=I[0],W=I[1],K=Object(n.useState)(null),$=Object(u.a)(K,2),q=$[0],z=$[1],G=Object(n.useState)(!0),H=Object(u.a)(G,2),M=H[0],Q=H[1],U=Object(n.useState)(!1),V=Object(u.a)(U,2),X=V[0],Y=V[1],Z=Object(n.useState)(!1),_=Object(u.a)(Z,2),ee=_[0],te=_[1],ae=Object(n.useState)(!1),ne=Object(u.a)(ae,2),re=ne[0],ie=ne[1];Object(n.useEffect)((function(){p.a.get("/channelnames").then((function(e){B(e.data)})),p.a.get("/liveprograms").then((function(e){x(e.data)}))}),[]);var ce=function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,p.a.post("/search",{channel:a,date:m});case 3:n=e.sent,S(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(e,t){if(P.find((function(t){return t.id===e})))return W(P.filter((function(t){return t.id!=e}))),localStorage.setItem("favorites",JSON.stringify(P)),z("Removed ".concat(t," from favorites")),void setTimeout((function(){z(null)}),2500);switch(t){case"program":W(P.concat(j.find((function(t){return t.id===e}))));break;case"liveProgram":W(P.concat(L.find((function(t){return t.id===e}))));break;case"channel":W(P.concat(T.find((function(t){return t.id===e}))));break;default:return}localStorage.setItem("favorites",JSON.stringify(P)),z("Added ".concat(t," to favorites")),setTimeout((function(){z(null)}),2500)};return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{className:"dark"},r.a.createElement(d.a,{onClick:function(){Y(!1),Q(!0),te(!1),ie(!1),k("")}},"All Channels"),r.a.createElement(d.a,{onClick:function(){Y(!0),Q(!1),te(!1),ie(!1),k("")}},"Search"),r.a.createElement(d.a,{onClick:function(){Y(!1),Q(!1),te(!0),ie(!1),k("")}},"Live Programs"),r.a.createElement(d.a,{onClick:function(){Y(!1),Q(!1),te(!1),ie(!0),k("")}},"Favorites"),r.a.createElement(g,{filter:N,filterResults:function(e){k(e.target.value)}})),r.a.createElement(y,{message:q}),r.a.createElement("div",{style:{display:X?"":"none"}},r.a.createElement(h,{channelData:T,channel:a,date:m,getResultsbyChannel:function(e){i(e.target.value)},getResultsByDate:function(e){v(e.target.value)},search:ce}),r.a.createElement(E,{displayData:j.map((function(e){return{type:"program",id:e.id,name:e.name,description:e.shortDescription,rightColumn:e.startTime}})),filter:N,favorite:oe,favorites:P})),r.a.createElement("div",{style:{display:M?"":"none"}},r.a.createElement("div",{className:"belowNav"},"These are all the available channels"),r.a.createElement(E,{displayData:T.map((function(e){return{type:"channel",id:e.id,name:e.name,description:e.description,rightColumn:e.id}})),filter:N,favorite:oe,favorites:P})),r.a.createElement("div",{style:{display:ee?"":"none"}},r.a.createElement("div",{className:"belowNav"},"These are currently live programs"),r.a.createElement(E,{displayData:L.map((function(e){return{type:"liveProgram",id:e.id,name:e.name,description:e.shortDescription,rightColumn:e.startTime}})),filter:N,favorite:oe,favorites:P})),r.a.createElement("div",{style:{display:re?"":"none"}},r.a.createElement("div",{className:"belowNav"},"These are your favorites"),r.a.createElement(E,{displayData:P.map((function(e){return{type:"item",id:e.id,name:e.name,description:e.shortDescription,rightColumn:e.type}})),filter:N,favorite:oe,favorites:P})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47);c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.e3065b8c.chunk.js.map