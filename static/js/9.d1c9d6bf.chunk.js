webpackJsonp([9],{1233:function(e,t,n){var a=n(1234);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1};r.transform=void 0;n(934)(a,r);a.locals&&(e.exports=a.locals)},1234:function(e,t,n){t=e.exports=n(45)(!1),t.push([e.i,".single-fluid-header-fixed-content-layout__accent-bar{height:21.5rem;margin-bottom:-21.5rem;background-image:var(--accent-bar__gradient);width:100%;-ms-flex-negative:0;flex-shrink:0}.single-fluid-header-fixed-content-layout__fixed-container{width:95%;max-width:1200px;margin:0 auto;-ms-flex:1 0 auto;flex:1 0 auto}.single-fluid-header-fixed-content-layout__footer{margin-top:8rem;-ms-flex-negative:0;flex-shrink:0}",""])},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),i=n(5),c=n(1233),o=(n.n(c),n(981)),u=Object(i.b)("single-fluid-header-fixed-content-layout"),l=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:u("accent-bar")}),r.a.createElement("div",{className:u("fixed-container")},e.children),r.a.createElement("div",{className:u("footer")},e.footer))};t.default=Object(o.a)(l)},981:function(e,t,n){"use strict";function a(e){var t=function(t){var n=t.isAuthenticated,a=t.location,r=t.pendingAuth,c=t.redirectFromLogin;return r?i.a.createElement(l.a,null):n?i.a.createElement(e,t):(c(a),i.a.createElement(o.c,{to:Object(d.a)("/login")}))},n=function(e){return{isAuthenticated:e.auth.isAuthenticated,pendingAuth:e.auth.pending}},a=function(e){return{redirectFromLogin:function(t){return e(Object(u.h)(t))}}};return Object(c.connect)(n,a)(t)}var r=n(0),i=n.n(r),c=n(8),o=n(35),u=n(74),l=n(341),d=n(22);t.a=a}});