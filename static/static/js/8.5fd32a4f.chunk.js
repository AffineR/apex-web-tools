webpackJsonp([8],{1023:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),s=n.n(a),c=n(1),l=n.n(c),u=n(5),p=n(997),m=(n.n(p),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),f="menu-component",d=function(e){function t(){var e,n,i,a;o(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=i=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.getBEMClasses=function(){return Object(u.b)(f,i.props.customClass)},a=n,r(i,a)}return i(t,e),m(t,[{key:"render",value:function(){var e=this.getBEMClasses();return s.a.createElement("li",{className:e("item",this.props.selected&&"selected"),onClick:this.props.onItemClick},this.props.children)}}]),t}(s.a.Component);d.propTypes={onItemClick:l.a.func.isRequired,selected:l.a.bool,customClass:l.a.string},t.a=d},1024:function(e,t,n){t=e.exports=n(43)(!1),t.push([e.i,".menu-component{-ms-flex:1 1;flex:1 1;overflow:auto}.menu-component__list{padding:0;margin:0}.menu-component__item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-bottom:solid 1px var(--side-menu__item-separator-color);border-left:4px solid transparent;width:var(--side-menu__item-width);height:var(--side-menu__item-height);padding:0 2rem 0 .75rem;cursor:pointer}.menu-component__item:active,.menu-component__item:hover{background:var(--side-menu__item-bg-color--hover)}.menu-component__item--selected,.menu-component__item--selected:hover,.menu-component__item:active{background:var(--side-menu__item-bg-color--selected)}",""])},1155:function(e,t,n){var o=n(1156);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(888)(o,r);o.locals&&(e.exports=o.locals)},1156:function(e,t,n){t=e.exports=n(43)(!1),t.push([e.i,".wallet-details-back-button__item{width:100%;-ms-flex-pack:center;justify-content:center;color:var(--link__color)}.wallet-details-back-button--arrowPrevious{margin-right:.75rem}",""])},194:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(1),a=n.n(i),s=n(5),c=n(20),l=n(1023),u=n(44),p=n(112),m=n(1155),f=(n.n(m),Object(s.b)("wallet-details-back-button")),d=function(e,t){return r.a.createElement(l.a,{customClass:f(),onItemClick:function(){return t.router.history.push(Object(c.a)(p.h.path))}},r.a.createElement(u.a,{name:"arrowPrevious",customClass:f()})," ",t.t("Back to Overview"))};d.contextTypes={router:a.a.shape({history:a.a.object.isRequired}).isRequired,t:a.a.func.isRequired},t.default=d},997:function(e,t,n){var o=n(1024);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(888)(o,r);o.locals&&(e.exports=o.locals)}});