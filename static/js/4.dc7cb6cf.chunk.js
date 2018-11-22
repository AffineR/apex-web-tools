webpackJsonp([4],{1077:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(919),l=n(5),s=n(311),d=n(951),u=n(956),m=n(958),f=n(1078),p=(n.n(f),Object(l.b)("wallet-details")),b=function(e,t){var n=e.positionDetails,r=n.iconFileName,a=n.Product,i=n.ProductFullName,l=n.AvailableBalance,f=n.Hold,b=n.PendingDeposits,_=n.Amount,v=n.ProductType,g=n.ProductId,h="CryptoCurrency"===v,y=function(e,n){return o.a.createElement("div",{className:p("detail")},o.a.createElement("div",{className:p("label")},t.t(e)),o.a.createElement("div",{className:p("value")},n))};return o.a.createElement("div",{className:p()},e.fetching?o.a.createElement(s.a,{isInline:!0,customClass:p}):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:p("product-actions-row")},o.a.createElement("div",{className:p("product-label")},o.a.createElement("div",{className:p("product-icon")},o.a.createElement(c.a,{iconFileName:r,size:48})),o.a.createElement("div",{className:p("product-symbol-name")},a+" "+i)),o.a.createElement("div",{className:p("wallet-nav-items")},h?o.a.createElement(d.a,{product:{iconFileName:r,ProductFullName:i,ProductSymbol:a,ProductId:g}}):o.a.createElement(u.a,{product:{iconFileName:r,ProductFullName:i,ProductSymbol:a,ProductId:g}}))),o.a.createElement("div",{className:p("position-row")},y("Available Balance",l),y("Hold",f),y("Pending Deposits",b),y("Total Balance",_)),o.a.createElement(m.a,null)))};b.propTypes={positionDetails:i.a.object,fetching:i.a.bool.isRequired},b.contextTypes={t:i.a.func.isRequired},t.a=b},1078:function(e,t,n){var r=n(1079);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(884)(r,o);r.locals&&(e.exports=r.locals)},1079:function(e,t,n){t=e.exports=n(43)(!1),t.push([e.i,".wallet-details{margin:var(--wallet-details__body-margin);width:var(--wallet-details__body-width);background-color:var(--component__bg-color);border-radius:1rem;-webkit-box-shadow:0 .5rem 2.5rem 0 var(--shadow__color);box-shadow:0 .5rem 2.5rem 0 var(--shadow__color)}.wallet-details__product-actions-row{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid var(--border__color)}.wallet-details__product-label{display:-ms-flexbox;display:flex}.wallet-details__product-icon{padding:30px}.wallet-details__product-symbol-name{height:100%;font-size:2.5rem}.wallet-details__product-symbol-name,.wallet-details__wallet-nav-items{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.wallet-details__wallet-nav-items{padding-right:30px}.wallet-details__position-row{display:-ms-flexbox;display:flex;width:100%}.wallet-details__detail{width:25%;padding:30px;border-right:1px solid var(--border__color)}.wallet-details__detail:last-of-type{border-right:0}.wallet-details__label{font-size:1.2rem;color:var(--wallet-detail__label-color)}.wallet-details__value{font-size:2.5rem}.wallet-details__spinner-container{margin:1.5rem 3.5rem}@media not all and (min-resolution:.001dpcm){@supports (-webkit-appearance:none){@media only screen and (max-width:150rem){.wallet-details__wallet-nav-items{-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:unset;align-items:unset}.wallet-details__position-row,.wallet-details__wallet-nav-items{-ms-flex-direction:column;flex-direction:column}.wallet-details__detail{width:auto;padding:2rem;border-bottom:1px solid var(--border__color)}}}}@media only screen and (max-width:76.8rem){.wallet-details{width:100%;margin:0;border-radius:0}.wallet-details__wallet-nav-items{-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:unset;align-items:unset}.wallet-details__position-row,.wallet-details__wallet-nav-items{-ms-flex-direction:column;flex-direction:column}.wallet-details__detail{width:auto;padding:2rem;border-bottom:1px solid var(--border__color)}.wallet-details__product-actions-row{background:var(--nav-header__bg-color)}}",""])},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=n(1077),a=n(918),i=function(e){var t=e.position,n=Object(a.a)(e);return{positionDetails:Object(a.d)(e).find(function(e){return e.ProductId===t.selectedProductId}),fetching:n}};t.default=Object(r.connect)(i)(o.a)},916:function(e,t,n){"use strict";var r=n(7),o=n(45),a=function(e){var t=e.name,n=function(e){if(e.modal.hasOwnProperty(t)){var n=e.modal[t],r=n.isOpen,o=n.modalProps;return Object.assign({isOpen:r},o)}return{isOpen:!1}},a=function(e){return{close:function(){return e(Object(o.d)(t))}}};return function(e){return Object(r.connect)(n,a)(e)}};t.a=a},918:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"d",function(){return d}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return m}),n.d(t,"e",function(){return f});var r=n(109),o=(n.n(r),n(317)),a=function(e){return e.product.products},i=function(e){return e.position.positions},c=function(e){return e.productManifest.manifest},l=Object(r.createSelector)([function(e){return e.product},function(e){return e.position},function(e){return e.productManifest}],function(e,t,n){return e.fetching||t.fetching||n.fetching}),s=Object(r.createSelector)([a,function(e){return e.product.decimalPlaces},i],function(e,t,n){return e.map(function(e){var r=n[e.ProductId];if(!r)return e;var a=t[e.Product],i=Object(o.a)(r,a);return Object.assign({},i,e)})}),d=Object(r.createSelector)([s,c],function(e,t){return e.map(function(e){var n=t[e.Product]||{iconFileName:e.Product+"DEFAULT_ICON"};return Object.assign({},e,n)})}),u=Object(r.createSelector)([d,function(e,t){return t}],function(e,t){return e.find(function(e){return e.ProductId===t})}),m=Object(r.createSelector)(d,function(e){return e.filter(function(e){return"-"!==e.Amount})}),f=Object(r.createSelector)(d,function(e){return e.filter(function(e){return"-"===e.Amount})})},919:function(e,t,n){"use strict";var r=n(7),o=n(920),a=function(e,t){return{productManifest:e.productManifest,iconFileName:t.iconFileName,size:t.size||48}};t.a=Object(r.connect)(a)(o.a)},920:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(17),l=n(5),s=n(921),d=(n.n(s),Object(l.b)("product-icon")),u=function(e){var t=e.productManifest,n=e.iconFileName,r=e.size,a=void 0===r?48:r,i=e.customClass;return t.fetching?null:(null==n&&console.log(n),n&&n.indexOf("DEFAULT_ICON")>0?m(a,n):o.a.createElement("img",{alt:"product icon",height:a+"px",className:i,src:Object(c.a)("/local/product-icons/"+n)}))},m=function(e,t){return o.a.createElement("div",{className:d(null,"default"),style:{width:e,height:e,MozBorderRadius:e/2,WebkitBorderRadius:e/2,borderRadius:e/2,textAlign:"center",fontSize:.5*e,lineHeight:e+"px"}},o.a.createElement("span",null,t.charAt(0)))};u.propTypes={productManifest:i.a.object.isRequired,iconFileName:i.a.string,size:i.a.number},t.a=u},921:function(e,t,n){var r=n(922);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(884)(r,o);r.locals&&(e.exports=r.locals)},922:function(e,t,n){t=e.exports=n(43)(!1),t.push([e.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}",""])},935:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(1),o=n.n(r),a=o.a.shape({iconFileName:o.a.string,ProductFullName:o.a.string,ProductSymbol:o.a.string,ProductId:o.a.number})},938:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(5),l=n(44),s=n(953),d=(n.n(s),function(e){var t=e.tooltipText,n=e.iconName,r=e.customClass,a=e.action,i=Object(c.b)("icon-button",r);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{"data-tip":t,"data-place":"bottom","data-effect":"solid",onClick:a,className:i()},o.a.createElement(l.a,{name:n,customClass:i("icon")}),o.a.createElement("span",{className:i("label")},n)))});d.protoTypes={tooltipText:i.a.string.isRequired,iconName:i.a.string.isRequired,parentClass:i.a.string.isRequired,action:i.a.func},t.a=d},939:function(e,t,n){var r=n(955);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(884)(r,o);r.locals&&(e.exports=r.locals)},951:function(e,t,n){"use strict";var r=n(7),o=n(15),a=n(952),i=function(e){return{openSendReceiveSidePane:function(t,n){e(Object(o.p)(t,n))}}};t.a=Object(r.connect)(null,i)(a.a)},952:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),l=n(1),s=n.n(l),d=n(938),u=n(5),m=n(935),f=n(939),p=(n.n(f),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),b=Object(u.b)("wallet-nav-item"),_=function(e){function t(){var e,n,a,i;r(this,t);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.onSendClick=function(){a.onBtnClick(!0)},a.onReceiveClick=function(){a.onBtnClick(!1)},a.onBtnClick=function(e){var t=a.props;(0,t.openSendReceiveSidePane)(e,t.product)},i=n,o(a,i)}return a(t,e),p(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{iconName:"send",action:this.onSendClick,tooltipText:this.context.t("Send"),customClass:b()}),c.a.createElement(d.a,{iconName:"receive",action:this.onReceiveClick,tooltipText:this.context.t("Receive"),customClass:b()}))}}]),t}(c.a.Component);_.propTypes={openSendReceiveSidePane:s.a.func.isRequired,product:m.a},_.contextTypes={t:s.a.func.isRequired},t.a=_},953:function(e,t,n){var r=n(954);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(884)(r,o);r.locals&&(e.exports=r.locals)},954:function(e,t,n){t=e.exports=n(43)(!1),t.push([e.i,".icon-button{min-width:4rem;height:4rem;border-radius:4px;color:var(--font__color-secondary);background:var(--primary__bg-color);border:1px solid var(--border-secondary);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer}.icon-button:hover,.icon-button:hover .icon-button__icon{color:var(--font__color-primary)}.icon-button__icon{-ms-flex-negative:0;flex-shrink:0;width:2rem;height:2rem;color:var(--font__color-secondary);-webkit-transition:var(--transition__settings);-o-transition:var(--transition__settings);transition:var(--transition__settings)}",""])},955:function(e,t,n){t=e.exports=n(43)(!1),t.push([e.i,".wallet-nav-item{margin-left:1.2rem;padding:0 1rem}.wallet-nav-item__label{text-transform:capitalize;padding-left:1rem}",""])},956:function(e,t,n){"use strict";var r=n(7),o=n(15),a=n(957),i=function(e){return{openRetailFiatSidePane:function(t,n){e(Object(o.o)(t,n))}}};t.a=Object(r.connect)(null,i)(a.a)},957:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),l=n(1),s=n.n(l),d=n(938),u=n(5),m=n(939),f=(n.n(m),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),p=Object(u.b)("wallet-nav-item"),b=function(e){function t(){var e,n,a,i;r(this,t);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.onDepositClick=function(){a.onBtnClick(!0)},a.onWithdrawClick=function(){a.onBtnClick(!1)},a.onBtnClick=function(e){var t=a.props;(0,t.openRetailFiatSidePane)(e,t.product)},i=n,o(a,i)}return a(t,e),f(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{iconName:"deposit",action:this.onDepositClick,tooltipText:this.context.t("Deposit"),customClass:p()}),c.a.createElement(d.a,{iconName:"withdraw",action:this.onWithdrawClick,tooltipText:this.context.t("Withdraw"),customClass:p()}))}}]),t}(c.a.Component);b.propTypes={openRetailFiatSidePane:s.a.func.isRequired,product:s.a.shape({iconFileName:s.a.string,ProductFullName:s.a.string,ProductSymbol:s.a.string,ProductId:s.a.number})},b.contextTypes={t:s.a.func.isRequired},t.a=b},958:function(e,t,n){"use strict";var r=n(7),o=n(959),a=n(916),i=n(45),c=function(e){return{referenceCode:e.deposit.depositStatus.requestcode}},l=Object(r.connect)(c,null)(o.a);t.a=Object(a.a)({name:i.b.DEPOSIT_REFERENCE_ID})(l)},959:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(174),l=n(44),s=n(5),d=n(960),u=(n.n(d),Object(s.b)("deposit-reference-id-modal")),m=function(e,t){return o.a.createElement(c.a,{isOpen:!(!e.referenceCode||!e.isOpen),title:o.a.createElement("div",{className:u("header-content")},o.a.createElement(l.a,{name:"depositWithBorder",size:44,customClass:u("icon")}),o.a.createElement("div",{className:u("header-title")},t.t("Deposit")+" "+e.ProductSymbol)),close:e.close,footer:{buttonText:t.t("OK"),buttonStyle:"additive",onClick:function(){return e.close}},customClass:u()},o.a.createElement("p",{className:u("title")},t.t("Your deposit ticket has been created successfully.")),o.a.createElement("div",{className:u("reference-code-container")},o.a.createElement("p",{className:u("reference-code-title")},t.t("Please note the following deposit ticket ID for your reference:")),o.a.createElement("p",{className:u("reference-code")},e.referenceCode)))};m.propTypes={close:i.a.func.isRequired},m.defaultProps={referenceCode:""},m.contextTypes={t:i.a.func.isRequired},t.a=m},960:function(e,t,n){var r=n(961);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(884)(r,o);r.locals&&(e.exports=r.locals)},961:function(e,t,n){t=e.exports=n(43)(!1),t.push([e.i,".deposit-reference-id-modal{border-radius:1rem}.deposit-reference-id-modal__content{padding:3rem}.deposit-reference-id-modal__header{border-bottom:2px solid var(--tab__border-color--selected);padding:1.6rem}.deposit-reference-id-modal__header-content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.deposit-reference-id-modal__header-title{font-size:2rem;color:var(--font__color-primary)}.deposit-reference-id-modal__footer{padding:2.5rem 3rem;margin:0}.deposit-reference-id-modal__btn{width:100%;-ms-flex-align:center;align-items:center;border-radius:.5rem;background:var(--success__bg-color);font-size:1.4rem;height:5rem;-ms-flex-pack:center;justify-content:center;padding:2.8rem 0}.deposit-reference-id-modal__title{font-size:1.6rem;color:var(--font__color-primary);margin-bottom:2.6rem}.deposit-reference-id-modal__icon{margin-right:1.5rem;width:3.6rem;height:3.6rem}.deposit-reference-id-modal__reference-code-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:11.7rem;width:35.1rem;border-radius:6px;border:1px solid #394154;padding:2.1rem 5rem;margin-bottom:1rem}.deposit-reference-id-modal__reference-code-title{font-size:1.2rem;color:var(--font__color-secondary);text-align:center;margin:0;padding-bottom:2rem}.deposit-reference-id-modal__reference-code{font-size:1.6rem;color:var(--font__color-primary);text-align:center;margin:0}.deposit-reference-id-modal__close-icon{color:var(--font__color-primary);padding:1.4rem 1.1rem}",""])}});