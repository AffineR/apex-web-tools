webpackJsonp([7],{1112:function(e,t,r){"use strict";var a=r(0),o=r.n(a),i=r(1),n=r.n(i),l=r(31),c=r(21),s=r(82),m=r(1113),d=(r.n(m),function(e,t){var r=Object(s.b)("nav-menu-vertical",e.customClass);return o.a.createElement("div",{className:r()},o.a.createElement("ul",{className:r("list")},e.items.filter(function(e){return void 0===e.show||e.show}).map(function(e){return o.a.createElement("li",{key:e.path,"data-test":e.text},o.a.createElement(l.b,{className:r("item",["hoverable"]),to:Object(c.a)(e.path)},t.t(e.text)))})))});d.propTypes={customClass:n.a.string,items:n.a.array},d.contextTypes={t:n.a.func.isRequired},t.a=d},1113:function(e,t,r){var a=r(1114);"string"===typeof a&&(a=[[e.i,a,""]]);var o={hmr:!1};o.transform=void 0;r(688)(a,o);a.locals&&(e.exports=a.locals)},1114:function(e,t,r){t=e.exports=r(28)(!1),t.push([e.i,".nav-menu-vertical{background:var(--sidebar-nav-background)}.nav-menu-vertical__list{padding:0;margin:0;height:100%;overflow:auto;-ms-flex-direction:column;flex-direction:column}.nav-menu-vertical__list li{display:-ms-flexbox;display:flex;border-bottom:solid 1px var(--border__color)}.nav-menu-vertical__list li:last-child{border-bottom:solid .5px var(--border__color)}.nav-menu-vertical__item{-ms-flex:1 0 auto;flex:1 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:1.3rem;border-left:4px solid transparent;padding:0 2rem 0 1.75rem;cursor:pointer;width:var(--side-menu__item-width);height:var(--side-menu__item-height);color:var(--font__color-secondary)}.nav-menu-vertical__item:hover{color:var(--font__color-primary);background:var(--side-menu__item-bg-color--selected);border-left-color:var(--side-menu__item-accent-color)}.nav-menu-vertical__item.active,.nav-menu-vertical__item.active:hover{color:var(--font__color-primary);background:var(--side-menu__item-bg-color--selected);border-left-color:var(--side-menu__item-accent-color--selected)}@media only screen and (max-width:48rem){.nav-menu-vertical__list{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.nav-menu-vertical__list li{list-style-type:none}.nav-menu-vertical__item{-ms-flex:unset;flex:unset;width:unset;border-left:unset;border-right:1px solid var(--border__color);border-bottom:4px solid transparent}.nav-menu-vertical__item:hover{border-bottom-color:var(--side-menu__item-accent-color)}.nav-menu-vertical__item.active,.nav-menu-vertical__item.active:hover{border-bottom-color:var(--side-menu__item-accent-color--selected)}}",""])},93:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),o=r.n(a),i=r(1112),n=r(85),l=function(){return o.a.createElement(i.a,{items:n.e.items})};t.default=l}});