(this["webpackJsonpcoolest-github-app"]=this["webpackJsonpcoolest-github-app"]||[]).push([[0],Array(18).concat([function(e,c,s){},function(e,c,s){},,function(e,c,s){},function(e,c,s){},,function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){"use strict";s.r(c);var t=s(2),a=s.n(t),n=s(12),r=s.n(n),i=(s(18),s(19),s(6)),j=s.n(i),o=s(8),l=s(4),b=(s(21),s(22),s(1));var u=function(e){var c=e.avatar;return Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"profile-icon",src:c,alt:"user-icon"})})},d=s(7);var m=function(e){var c=e.avatar,s=e.username,t=e.name,a=e.repos,n=e.following,r=e.followers;return Object(b.jsxs)("div",{className:"profilecard-main-container",children:[Object(b.jsx)(u,{avatar:c}),Object(b.jsxs)("div",{className:"profilecard-names-container",children:[Object(b.jsx)("h1",{children:s}),Object(b.jsx)("p",{children:t})]}),Object(b.jsxs)("div",{className:"profilecard-numbers-container",children:[Object(b.jsx)("p",{children:Object(b.jsxs)(d.b,{className:"numbers-link",to:"/repos/".concat(a,"/").concat(s),children:["Repositories: ",a]})}),Object(b.jsx)("p",{children:Object(b.jsxs)(d.b,{className:"numbers-link",to:"/followers/".concat(r,"/").concat(s),children:["Followers: ",r]})}),Object(b.jsxs)("p",{children:["Following: ",n]})]})]})};s(24),s(25);var O=function(){return Object(b.jsxs)("div",{className:"error-container",children:[Object(b.jsx)("h3",{className:"title",children:"Whoops! an error occurred!"}),Object(b.jsx)("p",{className:"text",children:"We couldn't find the user you were looking for"})]})};s(26);var x=function(){return Object(b.jsxs)("div",{class:"lds-ripple",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})};var h=function(){var e=Object(t.useState)(""),c=Object(l.a)(e,2),s=c[0],a=c[1],n=Object(t.useState)(null),r=Object(l.a)(n,2),i=r[0],u=r[1],d=Object(t.useState)(!1),h=Object(l.a)(d,2),v=h[0],p=h[1],f=Object(t.useState)(!1),N=Object(l.a)(f,2),g=N[0],w=N[1],k=function(){var e=Object(o.a)(j.a.mark((function e(c){var t,a,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),w(!0),t="https://api.github.com/users/".concat(s),e.prev=3,e.next=6,fetch(t);case 6:if((a=e.sent).ok){e.next=12;break}throw(n=new O("Fetch request error")).status=a.status||"00",n.statusText=a.statusText||"An error occured",n;case 12:return e.next=14,a.json();case 14:r=e.sent,console.log(r),u(r),p(!1),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(3),console.error(e.t0),p(!0),u(null);case 25:return e.prev=25,w(!1),e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[3,20,25,28]])})));return function(c){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{onSubmit:k,className:"searchbar-main-container",children:[Object(b.jsx)("h1",{className:"searchbar-title",children:"Search a Github user"}),Object(b.jsxs)("form",{className:"search-container",children:[Object(b.jsx)("input",{className:"search-box",name:"name",onChange:function(e){a(e.target.value)},type:"text",placeholder:"Github Username"}),Object(b.jsx)("input",{className:"search-button",type:"submit",value:"Buscar"})]}),v&&Object(b.jsx)(O,{}),g&&Object(b.jsx)(x,{}),i&&Object(b.jsx)(m,{avatar:i.avatar_url,username:i.login,name:i.name||i.login,repos:i.public_repos,followers:i.followers,following:i.following})]})},v=(s(27),s(13));var p=function(){return Object(b.jsxs)("div",{className:"home-main-container",children:[Object(b.jsx)(h,{}),Object(b.jsxs)("div",{className:"poweredby-container",children:[Object(b.jsx)("p",{children:"Powered by:"}),Object(b.jsx)(v.a,{className:"github-powered"})]})]})},f=s(3);s(28);var N=function(e){var c=e.avatar,s=e.username,t=e.repos;return Object(b.jsxs)("div",{className:"mini-card-main-container",children:[Object(b.jsx)("img",{className:"mini-card__icon",src:c,alt:"user_icon"}),Object(b.jsx)("h3",{className:"mini-card__username",children:s}),Object(b.jsx)(d.b,{target:"_blank",className:"mini-card__repos",to:"/repos/".concat(t,"/").concat(s),children:"Repositories"})]})};s(29),s(30);var g=function(){return Object(b.jsx)("div",{className:"noinfo-container",children:Object(b.jsx)("h1",{children:"Whoops! there's nothing to show here."})})},w=s(9);var k=function(){var e=Object(t.useState)([]),c=Object(l.a)(e,2),s=c[0],a=c[1],n=Object(t.useState)(null),r=Object(l.a)(n,2),i=r[0],u=r[1],m=Object(t.useState)(!0),O=Object(l.a)(m,2),h=O[0],v=O[1],p=Object(f.g)();console.log(p);var k="https://api.github.com/users/".concat(p.username,"/followers"),_="https://api.github.com/users/".concat(p.username);return Object(t.useEffect)((function(){var e=function(){var e=Object(o.a)(j.a.mark((function e(){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k);case 2:return c=e.sent,e.next=5,c.json();case 5:s=e.sent,a(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),v(!1)}),[p.username]),Object(t.useEffect)((function(){var e=function(){var e=Object(o.a)(j.a.mark((function e(){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(_);case 2:return c=e.sent,e.next=5,c.json();case 5:s=e.sent,u(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s]),console.log(s),Object(b.jsxs)("div",{className:"followers-main-container",children:[h&&Object(b.jsx)("div",{className:"loader-container",children:Object(b.jsx)(x,{})}),i&&Object(b.jsxs)("div",{className:"header-container",children:[Object(b.jsx)("img",{className:"main-user-avatar",src:i.avatar_url,alt:"main-user-icon"}),Object(b.jsx)("p",{className:"main-user-name",children:"".concat(p.username)}),Object(b.jsx)("p",{className:"main-user-company",children:i.company||"developer"})]}),Object(b.jsxs)("div",{className:"followers-container",children:[s&&s.length>0?s.map((function(e){return Object(b.jsx)(N,{avatar:e.avatar_url,username:e.login,repos:e.public_repos},e.id)})):Object(b.jsx)(g,{}),Object(b.jsx)(d.b,{className:"goback-button",to:"/",children:Object(b.jsx)(w.a,{className:"goback-icon"})})]})]})};s(31);var _=function(e){var c=e.name,s=e.url,t=e.date;return Object(b.jsxs)("div",{className:"repocard-container",children:[Object(b.jsx)("h2",{children:c}),Object(b.jsxs)("h5",{children:["Last updated: ",Object(b.jsx)("p",{children:t})]}),Object(b.jsx)("p",{className:"repo-link-button",children:Object(b.jsx)("a",{target:"_blank",href:"".concat(s),children:"Repository"})})]})};s(32);var y=function(){var e=Object(t.useState)(null),c=Object(l.a)(e,2),s=c[0],a=c[1],n=Object(t.useState)(!1),r=Object(l.a)(n,2),i=r[0],u=r[1],m=Object(t.useState)(null),O=Object(l.a)(m,2),h=O[0],v=O[1],p=Object(f.g)(),N="https://api.github.com/users/".concat(p.username,"/repos"),g="https://api.github.com/users/".concat(p.username);return Object(t.useEffect)((function(){var e=function(){var e=Object(o.a)(j.a.mark((function e(){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g);case 2:return c=e.sent,e.next=5,c.json();case 5:s=e.sent,console.log(s),v(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(t.useEffect)((function(){u(!0);var e=function(){var e=Object(o.a)(j.a.mark((function e(){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(N);case 2:return c=e.sent,e.next=5,c.json();case 5:s=e.sent,console.log(s),a(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();u(!1),e()}),[h]),Object(b.jsxs)("div",{className:"repos-main-container",children:[i&&Object(b.jsx)("div",{className:"repos-loader",children:Object(b.jsx)(x,{})}),h&&Object(b.jsxs)("div",{className:"user-information",children:[Object(b.jsx)("img",{src:h.avatar_url,alt:"user-icon"}),Object(b.jsx)("p",{children:h.login}),Object(b.jsxs)("p",{className:"repos-repos-number",children:["Repositories: ",Object(b.jsx)("strong",{children:h.public_repos})]})]}),Object(b.jsx)("div",{className:"repos-container",children:s&&s.map((function(e){return Object(b.jsx)(_,{name:e.name,url:e.html_url,date:e.updated_at},e.id)}))}),Object(b.jsx)(d.b,{className:"goback-button",to:"/",children:Object(b.jsx)(w.a,{className:"goback-icon"})})]})};s(33);var S=function(){return Object(b.jsxs)("div",{className:"error404-main-container",children:[Object(b.jsxs)("div",{className:"error404-title",children:[Object(b.jsx)("h1",{children:"Error 404"}),Object(b.jsx)("h3",{children:"We couldn't reach the requested page"})]}),Object(b.jsxs)("div",{className:"machine",children:[Object(b.jsx)("div",{className:"upper"}),Object(b.jsxs)("div",{className:"middle",children:[Object(b.jsxs)("div",{className:"timer",children:[Object(b.jsx)("div",{className:"dot1"}),Object(b.jsx)("div",{className:"dot2"}),Object(b.jsx)("div",{className:"dot3"}),Object(b.jsx)("div",{className:"dot4"}),Object(b.jsx)("div",{className:"dot5"}),Object(b.jsx)("div",{className:"dot6"}),Object(b.jsx)("div",{className:"dot7"}),Object(b.jsx)("div",{className:"dot8"}),Object(b.jsx)("div",{className:"hand"})]}),Object(b.jsx)("div",{className:"btn1"}),Object(b.jsx)("div",{className:"btn2",children:Object(b.jsx)("div",{className:"btn0"})})]}),Object(b.jsxs)("div",{className:"b1",children:[Object(b.jsx)("div",{className:"b2"}),Object(b.jsx)("div",{className:"b3"}),Object(b.jsx)("div",{className:"b4"}),Object(b.jsxs)("div",{className:"handle",children:[Object(b.jsx)("div",{className:"h1"}),Object(b.jsx)("div",{className:"h2"})]}),Object(b.jsx)("div",{className:"coff"}),Object(b.jsx)("div",{className:"steam",children:Object(b.jsx)("div",{className:"s1"})}),Object(b.jsx)("div",{className:"drop"})]}),Object(b.jsxs)("div",{className:"back",children:[Object(b.jsxs)("div",{className:"brdr",children:[Object(b.jsx)("div",{className:"d1"}),Object(b.jsx)("div",{className:"d2"}),Object(b.jsx)("div",{className:"d3"}),Object(b.jsx)("div",{className:"d4"}),Object(b.jsx)("div",{className:"d5"}),Object(b.jsx)("div",{className:"d6"}),Object(b.jsx)("div",{className:"d7"}),Object(b.jsx)("div",{className:"d8"}),Object(b.jsx)("div",{className:"d9"}),Object(b.jsx)("div",{className:"d10"}),Object(b.jsx)("div",{className:"d11"})]}),Object(b.jsxs)("div",{className:"cup",children:[Object(b.jsx)("div",{className:"shadow"}),Object(b.jsx)("div",{className:"u"})]})]}),Object(b.jsxs)("div",{className:"lower",children:[Object(b.jsx)("div",{className:"btnn"}),Object(b.jsx)("div",{className:"light"}),Object(b.jsx)("div",{className:"bottom"})]})]}),Object(b.jsxs)("div",{className:"error404-footer",children:[Object(b.jsx)("h3",{children:"But hey, here's a coffee for you!"}),Object(b.jsx)("p",{children:"Click on the coffee machine to get a steaming cup of coffee (:"})]})]})};var F=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{children:Object(b.jsxs)(f.c,{children:[Object(b.jsx)(f.a,{exact:!0,path:"/",element:Object(b.jsx)(p,{})}),Object(b.jsx)(f.a,{exact:!0,path:"/repos/:repos/:username",element:Object(b.jsx)(y,{})}),Object(b.jsx)(f.a,{exact:!0,path:"/followers/:followers/:username",element:Object(b.jsx)(k,{})}),Object(b.jsx)(f.a,{path:"*",element:Object(b.jsx)(S,{})})]})})})},E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,35)).then((function(c){var s=c.getCLS,t=c.getFID,a=c.getFCP,n=c.getLCP,r=c.getTTFB;s(e),t(e),a(e),n(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),E()}]),[[34,1,2]]]);
//# sourceMappingURL=main.89d80808.chunk.js.map