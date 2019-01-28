webpackJsonp([4],{1003:function(e,t,n){"use strict";var r=n(8),o=n(1004),a=n(967),c=n(47),i=function(e){return{referenceCode:e.deposit.depositStatus.requestcode}},l=Object(r.connect)(i,null)(o.a);t.a=Object(a.a)({name:c.b.DEPOSIT_REFERENCE_ID})(l)},1004:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),c=n.n(a),i=n(189),l=n(46),s=n(5),u=n(1005),d=(n.n(u),Object(s.b)("deposit-reference-id-modal")),f=function(e,t){return o.a.createElement(i.a,{isOpen:!(!e.referenceCode||!e.isOpen),title:o.a.createElement("div",{className:d("header-content")},o.a.createElement(l.a,{name:"depositWithBorder",size:44,customClass:d("icon")}),o.a.createElement("div",{className:d("header-title")},t.t("Deposit")+" "+e.ProductSymbol)),close:e.close,footer:{buttonText:t.t("OK"),buttonStyle:"additive",onClick:function(){return e.close}},customClass:d()},o.a.createElement("p",{className:d("title")},t.t("Your deposit ticket has been created successfully.")),o.a.createElement("div",{className:d("reference-code-container")},o.a.createElement("p",{className:d("reference-code-title")},t.t("Please note the following deposit ticket ID for your reference:")),o.a.createElement("p",{className:d("reference-code")},e.referenceCode)))};f.propTypes={close:c.a.func.isRequired},f.defaultProps={referenceCode:""},f.contextTypes={t:c.a.func.isRequired},t.a=f},1005:function(e,t,n){var r=n(1006);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(934)(r,o);r.locals&&(e.exports=r.locals)},1006:function(e,t,n){t=e.exports=n(45)(!1),t.push([e.i,".deposit-reference-id-modal{border-radius:1rem}.deposit-reference-id-modal__content{padding:3rem}.deposit-reference-id-modal__header{border-bottom:2px solid var(--tab__border-color--selected);padding:1.6rem}.deposit-reference-id-modal__header-content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.deposit-reference-id-modal__header-title{font-size:2rem;color:var(--font__color-primary)}.deposit-reference-id-modal__footer{padding:2.5rem 3rem;margin:0}.deposit-reference-id-modal__btn{width:100%;-ms-flex-align:center;align-items:center;border-radius:.5rem;background:var(--success__bg-color);font-size:1.4rem;height:5rem;-ms-flex-pack:center;justify-content:center;padding:2.8rem 0}.deposit-reference-id-modal__title{font-size:1.6rem;color:var(--font__color-primary);margin-bottom:2.6rem}.deposit-reference-id-modal__icon{margin-right:1.5rem;width:3.6rem;height:3.6rem}.deposit-reference-id-modal__reference-code-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:11.7rem;width:35.1rem;border-radius:6px;border:1px solid #394154;padding:2.1rem 5rem;margin-bottom:1rem}.deposit-reference-id-modal__reference-code-title{font-size:1.2rem;color:var(--font__color-secondary);text-align:center;margin:0;padding-bottom:2rem}.deposit-reference-id-modal__reference-code{font-size:1.6rem;color:var(--font__color-primary);text-align:center;margin:0}.deposit-reference-id-modal__close-icon{color:var(--font__color-primary);padding:1.4rem 1.1rem}",""])},1026:function(e,t,n){"use strict";var r=n(8),o=n(15),a=n(1027),c=function(e){return{openSendReceiveSidePane:function(t,n){e(Object(o.p)(t,n))}}};t.a=Object(r.connect)(null,c)(a.a)},1027:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),i=n.n(c),l=n(1),s=n.n(l),u=n(992),d=n(5),f=n(988),m=n(993),p=(n.n(m),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),b=Object(d.b)("wallet-nav-item"),v=function(e){function t(){var e,n,a,c;r(this,t);for(var i=arguments.length,l=Array(i),s=0;s<i;s++)l[s]=arguments[s];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.onSendClick=function(){a.onBtnClick(!0)},a.onReceiveClick=function(){a.onBtnClick(!1)},a.onBtnClick=function(e){var t=a.props;(0,t.openSendReceiveSidePane)(e,t.product)},c=n,o(a,c)}return a(t,e),p(t,[{key:"render",value:function(){var e=this.props.showIconButtonLabel;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{iconName:"send",action:this.onSendClick,tooltipText:this.context.t("Send"),customClass:b(),showLabel:e}),i.a.createElement(u.a,{iconName:"receive",action:this.onReceiveClick,tooltipText:this.context.t("Receive"),customClass:b(),showLabel:e}))}}]),t}(i.a.Component);v.defaultProps={showIconButtonLabel:!0},v.propTypes={openSendReceiveSidePane:s.a.func.isRequired,product:f.a,showIconButtonLabel:s.a.bool},v.contextTypes={t:s.a.func.isRequired},t.a=v},1028:function(e,t,n){var r=n(1029);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(934)(r,o);r.locals&&(e.exports=r.locals)},1029:function(e,t,n){t=e.exports=n(45)(!1),t.push([e.i,".icon-button{min-width:4rem;height:4rem;border-radius:4px;color:var(--font__color-secondary);background:var(--primary__bg-color);border:1px solid var(--border-secondary);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer}.icon-button:hover,.icon-button:hover .icon-button__icon{color:var(--font__color-primary)}.icon-button__icon{-ms-flex-negative:0;flex-shrink:0;width:2rem;height:2rem;color:var(--font__color-secondary);-webkit-transition:var(--transition__settings);-o-transition:var(--transition__settings);transition:var(--transition__settings)}",""])},1030:function(e,t,n){t=e.exports=n(45)(!1),t.push([e.i,".wallet-nav-item{margin-left:1.2rem;padding:0 1rem;background:var(--wallet-card__button-bg-color);border:1px solid var(--wallet-card__button-border-color)}.wallet-nav-item__label{text-transform:capitalize;padding-left:1rem}",""])},1031:function(e,t,n){"use strict";var r=n(8),o=n(15),a=n(1032),c=function(e){return{openRetailFiatSidePane:function(t,n){e(Object(o.o)(t,n))}}};t.a=Object(r.connect)(null,c)(a.a)},1032:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),i=n.n(c),l=n(1),s=n.n(l),u=n(992),d=n(5),f=n(993),m=(n.n(f),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),p=Object(d.b)("wallet-nav-item"),b=function(e){function t(){var e,n,a,c;r(this,t);for(var i=arguments.length,l=Array(i),s=0;s<i;s++)l[s]=arguments[s];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.onDepositClick=function(){a.onBtnClick(!0)},a.onWithdrawClick=function(){a.onBtnClick(!1)},a.onBtnClick=function(e){var t=a.props;(0,t.openRetailFiatSidePane)(e,t.product)},c=n,o(a,c)}return a(t,e),m(t,[{key:"render",value:function(){var e=this.props.showIconButtonLabel;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{iconName:"deposit",action:this.onDepositClick,tooltipText:this.context.t("Deposit"),customClass:p(),showLabel:e}),i.a.createElement(u.a,{iconName:"withdraw",action:this.onWithdrawClick,tooltipText:this.context.t("Withdraw"),customClass:p(),showLabel:e}))}}]),t}(i.a.Component);b.defaultProps={showIconButtonLabel:!0},b.propTypes={openRetailFiatSidePane:s.a.func.isRequired,product:s.a.shape({iconFileName:s.a.string,ProductFullName:s.a.string,ProductSymbol:s.a.string,ProductId:s.a.number}),showIconButtonLabel:s.a.bool},b.contextTypes={t:s.a.func.isRequired},t.a=b},1242:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),c=n.n(a),i=n(5),l=n(1243),s=n(1003),u=n(332),d=n(1247),f=(n.n(d),Object(i.b)("wallet-row-list")),m=function(e,t){if(e.fetching)return o.a.createElement(u.a,{customClass:f});var n=e.products.map(function(e){return o.a.createElement(l.a,{key:e.ProductId,productId:e.ProductId})});return o.a.createElement("div",{className:f()},n,o.a.createElement(s.a,null))};m.contextTypes={t:c.a.func.isRequired},t.a=m},1243:function(e,t,n){"use strict";var r=n(8),o=n(1244),a=n(970),c=n(201),i=function(e,t){var n=Object(a.c)(e,t.productId);return{iconFileName:n.iconFileName,ProductSymbol:n.ProductSymbol,ProductFullName:n.ProductFullName,Amount:n.Amount,isCrypto:"CryptoCurrency"===n.ProductType,ProductId:n.ProductId}},l=function(e,t){return{selectPositionAndSave:function(){e(Object(c.g)(t.productId))}}};t.a=Object(r.connect)(i,l)(o.a)},1244:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),c=n.n(a),i=n(35),l=n(22),s=n(5),u=n(969),d=n(1026),f=n(46),m=n(1031),p=n(122),b=n(1245),v=(n.n(b),Object(s.b)("wallet-row")),_=function(e,t){var n=e.iconFileName,r=e.ProductSymbol,a=e.ProductFullName,c=e.Amount,s=e.isCrypto,b=e.ProductId;return o.a.createElement("div",{className:v()},o.a.createElement("div",{className:v("icon-label")},o.a.createElement("div",{className:v("product-icon")},o.a.createElement(u.a,{iconFileName:n,size:44})),o.a.createElement("div",{className:v("symbol-label")},r+" "+a)),o.a.createElement("div",{className:v("balance-columns")},o.a.createElement("div",{className:v("balance")},o.a.createElement("div",{className:v("label")},t.t("Current Balance")),o.a.createElement("div",{className:v("amount")},c+" ",o.a.createElement("span",{className:v("amount-label")},r)))),o.a.createElement("div",{className:v("activity-link-columns")},o.a.createElement("div",{className:v("activity-link")},o.a.createElement(i.a,{className:v("activity-link"),to:Object(l.a)(p.g.path),onClick:e.selectPositionAndSave},t.t("Details")," ",o.a.createElement(f.a,{name:"arrowNext",customClass:v("next-icon")}))),o.a.createElement("div",{className:v("icon-nav-buttons")},s?o.a.createElement(d.a,{product:{iconFileName:n,ProductSymbol:r,ProductFullName:a,ProductId:b},showIconButtonLabel:!1}):o.a.createElement(m.a,{product:{iconFileName:n,ProductSymbol:r,ProductFullName:a,ProductId:b},showIconButtonLabel:!1}))))};_.contextTypes={t:c.a.func.isRequired},t.a=_},1245:function(e,t,n){var r=n(1246);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(934)(r,o);r.locals&&(e.exports=r.locals)},1246:function(e,t,n){t=e.exports=n(45)(!1),t.push([e.i,".wallet-row{display:-ms-flexbox;display:flex;min-width:100rem;width:100%;border-bottom:1px solid var(--table__row-separator-color);background:var(--table__row-bg-color)}.wallet-row:hover{background:var(--wallet-row__bg-color--hover)}.wallet-row__icon-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:25%;padding:2% 1rem 2% 2%}.wallet-row__symbol-label{margin-left:1.5rem;font-size:1.75rem;color:var(--font__color-primary)}.wallet-row__balance-columns{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:40%;padding:0 2%}.wallet-row__label{margin-bottom:1rem;color:var(--font__color-secondary)}.wallet-row__amount{font-size:1.5rem;color:var(--font__color-primary)}.wallet-row__amount-label{color:var(--font__color-secondary)}.wallet-row__activity-link-columns{display:-ms-flexbox;display:flex;width:35%}.wallet-row__activity-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:40%;padding:1%;font-size:1.4rem;border-left:1px solid var(--wallet-card__divider-border-color-secondary)}a.wallet-row__activity-link{width:100%;letter-spacing:.05rem;border:none;padding-left:3rem}.wallet-row__next-icon{margin-left:.75rem}.wallet-row__icon-nav-buttons{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding-right:2.5rem;width:60%;background:var(--market-data-card-secondary-background)}.wallet-row__icon-nav-buttons>.wallet-nav-item{min-width:4rem}.wallet-row__icon-nav-buttons>:first-child{margin-left:0}",""])},1247:function(e,t,n){var r=n(1248);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(934)(r,o);r.locals&&(e.exports=r.locals)},1248:function(e,t,n){t=e.exports=n(45)(!1),t.push([e.i,".wallet-row-list{width:100%;background-color:var(--secondary__bg-color);border-radius:1rem;overflow-x:auto}",""])},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),o=n(970),a=n(1242),c=function(e){return{fetching:Object(o.a)(e),products:Object(o.e)(e)}};t.default=Object(r.connect)(c)(a.a)},967:function(e,t,n){"use strict";var r=n(8),o=n(47),a=function(e){var t=e.name,n=function(e){if(e.modal.hasOwnProperty(t)){var n=e.modal[t],r=n.isOpen,o=n.modalProps;return Object.assign({isOpen:r},o)}return{isOpen:!1}},a=function(e){return{close:function(){return e(Object(o.d)(t))}}};return function(e){return Object(r.connect)(n,a)(e)}};t.a=a},969:function(e,t,n){"use strict";var r=n(8),o=n(971),a=function(e,t){return{productManifest:e.productManifest,iconFileName:t.iconFileName,size:t.size||48}};t.a=Object(r.connect)(a)(o.a)},970:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"d",function(){return u}),n.d(t,"c",function(){return d}),n.d(t,"b",function(){return f}),n.d(t,"e",function(){return m});var r=n(120),o=(n.n(r),n(339)),a=function(e){return e.product.products},c=function(e){return e.position.positions},i=function(e){return e.productManifest.manifest},l=Object(r.createSelector)([function(e){return e.product},function(e){return e.position},function(e){return e.productManifest}],function(e,t,n){return e.fetching||t.fetching||n.fetching}),s=Object(r.createSelector)([a,function(e){return e.product.decimalPlaces},c],function(e,t,n){return e.map(function(e){var r=n[e.ProductId];if(!r)return e;var a=t[e.Product],c=Object(o.a)(r,a);return Object.assign({},c,e)})}),u=Object(r.createSelector)([s,i],function(e,t){return e.map(function(e){var n=t[e.Product]||{iconFileName:e.Product+"DEFAULT_ICON"};return Object.assign({},e,n)})}),d=Object(r.createSelector)([u,function(e,t){return t}],function(e,t){return e.find(function(e){return e.ProductId===t})}),f=Object(r.createSelector)(u,function(e){return e.filter(function(e){return"-"!==e.Amount})}),m=Object(r.createSelector)(u,function(e){return e.filter(function(e){return"-"===e.Amount})})},971:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),c=n.n(a),i=n(22),l=n(5),s=n(972),u=(n.n(s),Object(l.b)("product-icon")),d=function(e){var t=e.productManifest,n=e.iconFileName,r=e.size,a=void 0===r?48:r,c=e.customClass;return t.fetching?null:(null==n&&console.log(n),n&&n.indexOf("DEFAULT_ICON")>0?f(a,n):o.a.createElement("img",{alt:"product icon",height:a+"px",className:c,src:Object(i.a)("/local/product-icons/"+n)}))},f=function(e,t){return o.a.createElement("div",{className:u(null,"default"),style:{width:e,height:e,MozBorderRadius:e/2,WebkitBorderRadius:e/2,borderRadius:e/2,textAlign:"center",fontSize:.5*e,lineHeight:e+"px"}},o.a.createElement("span",null,t.charAt(0)))};d.propTypes={productManifest:c.a.object.isRequired,iconFileName:c.a.string,size:c.a.number},t.a=d},972:function(e,t,n){var r=n(973);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(934)(r,o);r.locals&&(e.exports=r.locals)},973:function(e,t,n){t=e.exports=n(45)(!1),t.push([e.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}",""])},988:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(1),o=n.n(r),a=o.a.shape({iconFileName:o.a.string,ProductFullName:o.a.string,ProductSymbol:o.a.string,ProductId:o.a.number})},992:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),c=n.n(a),i=n(5),l=n(46),s=n(1028),u=(n.n(s),function(e){var t=e.tooltipText,n=e.iconName,r=e.customClass,a=e.action,c=e.showLabel,s=Object(i.b)("icon-button",r);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{"data-tip":t,"data-place":"bottom","data-effect":"solid",onClick:a,className:s()},o.a.createElement(l.a,{name:n,customClass:s("icon")}),c&&o.a.createElement("span",{className:s("label")},n)))});u.defaultProps={showLabel:!0},u.protoTypes={tooltipText:c.a.string.isRequired,iconName:c.a.string.isRequired,parentClass:c.a.string.isRequired,action:c.a.func,showLabel:c.a.bool},t.a=u},993:function(e,t,n){var r=n(1030);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(934)(r,o);r.locals&&(e.exports=r.locals)}});