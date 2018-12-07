webpackJsonp([15],{1171:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(1),o=r.n(c),i=r(5),l=r(1172),u=r(310),s=r(1175),d=(r.n(s),Object(i.b)("product-balances")),m=function(e,t){var r=e.balances.map(function(e){return a.a.createElement(l.a,{key:e.ProductId,balance:e})});return a.a.createElement("div",{className:d("list")},a.a.createElement("div",{className:d("header")},t.t("Balances")),e.fetching?a.a.createElement(u.a,null):a.a.createElement("div",{className:d("container")},r))};m.contextTypes={t:o.a.func.isRequired},t.a=m},1172:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(5),o=r(923),i=r(1173),l=(r.n(i),Object(c.b)("balance-item")),u=function(e){return a.a.createElement("div",{className:l("container")},a.a.createElement("div",{className:l("group")},a.a.createElement("div",{className:l("icon")},a.a.createElement(o.a,{iconFileName:e.balance.iconFileName,size:24})),a.a.createElement("div",{className:l("product")},e.balance.Product+" "+e.balance.ProductFullName)),a.a.createElement("div",{className:l("group")},a.a.createElement("div",{className:l("position")},e.balance.Amount)))};t.a=u},1173:function(e,t,r){var n=r(1174);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(888)(n,a);n.locals&&(e.exports=n.locals)},1174:function(e,t,r){t=e.exports=r(43)(!1),t.push([e.i,".balance-item__container{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:2rem 2.5rem;font-size:1.2rem;border-bottom:1px solid var(--component__border-color);color:var(--component__color-primary);background:var(--balance-item__container-bg-color)}.balance-item__container:hover{color:var(--component__color-primary);background:var(--balance-item__bg-color--hover)}.balance-item__group{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.balance-item__icon{margin-right:1.5rem}.balance-item__product{margin-right:1.5rem;font-size:1.2rem}.balance-item__position{margin-right:1.5rem;font-size:1.4rem}.balance-item__percentage{margin-left:1.5rem;font-size:1.4rem}",""])},1175:function(e,t,r){var n=r(1176);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(888)(n,a);n.locals&&(e.exports=n.locals)},1176:function(e,t,r){t=e.exports=r(43)(!1),t.push([e.i,'.product-balances__header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:var(--retail-dashboard__card-header-title-padding);height:var(--retail-dashboard__card-header-height);font-size:var(--retail-dashboard__card-header-title-font-size);color:var(--retail-dashboard__card-header-title-font-color);background:var(--component__header-bg-color);position:relative;border-top-left-radius:1rem;border-top-right-radius:1rem}.product-balances__header:after{content:"";width:100%;height:.2rem;background-color:var(--component__border-color--glow);position:absolute;bottom:0;left:0}.product-balances__container{height:calc(60rem - var(--retail-dashboard__card-header-height));overflow:auto}@media only screen and (max-width:76.8rem){.product-balances__container{height:calc(65rem - var(--retail-dashboard__card-header-height));overflow:auto}:root .product-balances__container,_:-ms-fullscreen{height:calc(50rem - var(--retail-dashboard__card-header-height))!important;overflow:auto}}',""])},337:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(7),a=r(924),c=r(1171),o=function(e){return{fetching:Object(a.a)(e),balances:Object(a.d)(e)}};t.default=Object(n.connect)(o)(c.a)},923:function(e,t,r){"use strict";var n=r(7),a=r(925),c=function(e,t){return{productManifest:e.productManifest,iconFileName:t.iconFileName,size:t.size||48}};t.a=Object(n.connect)(c)(a.a)},924:function(e,t,r){"use strict";r.d(t,"a",function(){return l}),r.d(t,"d",function(){return s}),r.d(t,"c",function(){return d}),r.d(t,"b",function(){return m}),r.d(t,"e",function(){return f});var n=r(108),a=(r.n(n),r(317)),c=function(e){return e.product.products},o=function(e){return e.position.positions},i=function(e){return e.productManifest.manifest},l=Object(n.createSelector)([function(e){return e.product},function(e){return e.position},function(e){return e.productManifest}],function(e,t,r){return e.fetching||t.fetching||r.fetching}),u=Object(n.createSelector)([c,function(e){return e.product.decimalPlaces},o],function(e,t,r){return e.map(function(e){var n=r[e.ProductId];if(!n)return e;var c=t[e.Product],o=Object(a.a)(n,c);return Object.assign({},o,e)})}),s=Object(n.createSelector)([u,i],function(e,t){return e.map(function(e){var r=t[e.Product]||{iconFileName:e.Product+"DEFAULT_ICON"};return Object.assign({},e,r)})}),d=Object(n.createSelector)([s,function(e,t){return t}],function(e,t){return e.find(function(e){return e.ProductId===t})}),m=Object(n.createSelector)(s,function(e){return e.filter(function(e){return"-"!==e.Amount})}),f=Object(n.createSelector)(s,function(e){return e.filter(function(e){return"-"===e.Amount})})},925:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(1),o=r.n(c),i=r(20),l=r(5),u=r(926),s=(r.n(u),Object(l.b)("product-icon")),d=function(e){var t=e.productManifest,r=e.iconFileName,n=e.size,c=void 0===n?48:n,o=e.customClass;return t.fetching?null:(null==r&&console.log(r),r&&r.indexOf("DEFAULT_ICON")>0?m(c,r):a.a.createElement("img",{alt:"product icon",height:c+"px",className:o,src:Object(i.a)("/local/product-icons/"+r)}))},m=function(e,t){return a.a.createElement("div",{className:s(null,"default"),style:{width:e,height:e,MozBorderRadius:e/2,WebkitBorderRadius:e/2,borderRadius:e/2,textAlign:"center",fontSize:.5*e,lineHeight:e+"px"}},a.a.createElement("span",null,t.charAt(0)))};d.propTypes={productManifest:o.a.object.isRequired,iconFileName:o.a.string,size:o.a.number},t.a=d},926:function(e,t,r){var n=r(927);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!1};a.transform=void 0;r(888)(n,a);n.locals&&(e.exports=n.locals)},927:function(e,t,r){t=e.exports=r(43)(!1),t.push([e.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}",""])}});