webpackJsonp([10],{1249:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(81),c=n(1250),u=n(785),l=n(1254),p=(n.n(l),Object(s.b)("wallet-card-grid")),d=function(e,t){var n=e.products.map(function(e){return o.a.createElement(c.a,{key:e.ProductId,productId:e.ProductId})});return o.a.createElement(o.a.Fragment,null,e.fetching||n.length?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:p("header")},e.header),o.a.createElement("div",{className:p()},e.fetching?o.a.createElement(u.a,null):n)):"")};d.contextTypes={t:a.a.func.isRequired},t.a=d},1250:function(e,t,n){"use strict";var r=n(7),o=n(1251),i=n(821),a=n(147),s=function(e,t){var n=Object(i.c)(e,t.productId);return{iconFileName:n.iconFileName,ProductSymbol:n.ProductSymbol,ProductFullName:n.ProductFullName,Amount:n.Amount,isCrypto:"CryptoCurrency"===n.ProductType,ProductId:n.ProductId}},c=function(e,t){return{selectPositionAndSave:function(){e(Object(a.g)(t.productId))}}};t.a=Object(r.connect)(s,c)(o.a)},1251:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(31),c=n(21),u=n(81),l=n(820),p=n(711),d=n(946),f=n(951),m=n(84),h=n(1252),v=(n.n(h),Object(u.b)("wallet-card")),b=function(e,t){var n=e.iconFileName,r=e.ProductSymbol,i=e.ProductFullName,a=e.Amount,u=e.isCrypto,h=e.ProductId;return o.a.createElement("div",{className:v()+" container-with-shadow"},o.a.createElement("div",{className:v("icon-label-row")},o.a.createElement("div",{className:v("icon")},o.a.createElement(l.a,{iconFileName:n,size:44})),o.a.createElement("span",{className:v("symbol-label")},r+" "+i)),o.a.createElement("div",{className:v("balance-row")},o.a.createElement("div",{className:v("balance")},o.a.createElement("span",{className:v("label")},t.t("Current Balance")),o.a.createElement("div",{className:v("amount")},a))),o.a.createElement("div",{className:v("activity-link-row")},o.a.createElement("div",{className:v("activity-link-container")},o.a.createElement(s.a,{className:v("activity-link"),to:Object(c.a)(m.g.path),onClick:e.selectPositionAndSave},t.t("View Activity")," ",o.a.createElement(p.a,{name:"arrowNext",customClass:v("next-icon")}))),o.a.createElement("div",{className:v("icon-nav-buttons")},u?o.a.createElement(d.a,{product:{iconFileName:n,ProductSymbol:r,ProductFullName:i,ProductId:h}}):o.a.createElement(f.a,{product:{iconFileName:n,ProductSymbol:r,ProductFullName:i,ProductId:h}}))))};b.contextTypes={t:a.a.func.isRequired},t.a=b},1252:function(e,t,n){var r=n(1253);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(686)(r,o);r.locals&&(e.exports=r.locals)},1253:function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,".wallet-card{width:37rem;background:var(--wallet-card__bg-color);border-radius:1rem;margin:0 2rem 4rem}.wallet-card__icon-label-row{display:-ms-flexbox;display:flex;padding:2rem;-ms-flex-align:center;align-items:center}.wallet-card__symbol-label{font-size:2rem;margin-left:1.5rem;color:var(--font__color-primary)}.wallet-card__balance-row{display:-ms-flexbox;display:flex;width:100%;border-top:1px solid var(--wallet-card__divider-border-color);border-bottom:1px solid var(--wallet-card__divider-border-color-secondary)}.wallet-card__balance{width:50%;padding:2rem 2rem 3rem;border-right:solid 1px var(--wallet-card__divider-border-color)}.wallet-card__label{margin-bottom:1rem;color:var(--font__color-secondary)}.wallet-card__value{width:50%;border-left:1px solid var(--border__color);padding:2rem 2rem 3rem}.wallet-card__amount{font-size:2rem;color:var(--font__color-primary)}.wallet-card__activity-link-row{background:var(--wallet-card__activity-link-row-bg-color);padding:1.5rem 2.5rem;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;display:-ms-flexbox;display:flex;width:100%;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.wallet-card__activity-link{font-size:1.4rem}.wallet-card__next-icon{margin-left:.75rem}.wallet-card__icon-nav-buttons{display:-ms-flexbox;display:flex}",""])},1254:function(e,t,n){var r=n(1255);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(686)(r,o);r.locals&&(e.exports=r.locals)},1255:function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,".wallet-card-grid{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;margin:0 -2rem;min-height:5rem;margin-bottom:4rem}.wallet-card-grid__header{padding:0 3rem 3.6rem;font-size:2.4rem}",""])},159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=n(821),i=n(1249),a=function(e){return{header:"Funded Accounts",fetching:Object(o.a)(e),products:Object(o.b)(e)}};t.default=Object(r.connect)(a)(i.a)},709:function(e,t){function n(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}e.exports=n},711:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(719),c=n(81),u=n(733),l=(n.n(u),n(735)),p=n.n(l),d=n(736),f=n.n(d),m=n(737),h=n.n(m),v=n(738),b=n.n(v),g=n(739),y=n.n(g),w=n(740),x=n.n(w),_=n(741),O=n.n(_),E=n(742),k=n.n(E),R=n(743),P=n.n(R),j=n(744),N=n.n(j),C=n(745),T=n.n(C),S=n(746),q=n.n(S),A=n(747),F=n.n(A),I=n(748),L=n.n(I),D=n(749),U=n.n(D),M=n(750),H=n.n(M),B=n(751),z=n.n(B),G=n(752),X=n.n(G),W=n(753),V=n.n(W),Z=n(754),$=n.n(Z),J=n(755),K=n.n(J),Q=n(756),Y=n.n(Q),ee=n(757),te=n.n(ee),ne=n(758),re=n.n(ne),oe=n(759),ie=n.n(oe),ae=n(760),se=n.n(ae),ce=n(761),ue=n.n(ce),le=n(762),pe=n.n(le),de=n(763),fe=n.n(de),me=n(764),he=n.n(me),ve=n(765),be=n.n(ve),ge=n(766),ye=n.n(ge),we=n(767),xe=n.n(we),_e=n(768),Oe=n.n(_e),Ee=n(769),ke=n.n(Ee),Re=n(770),Pe=n.n(Re),je=n(771),Ne=n.n(je),Ce=n(772),Te=n.n(Ce),Se=n(773),qe=n.n(Se),Ae=n(774),Fe=n.n(Ae),Ie=n(775),Le=n.n(Ie),De=n(776),Ue=n.n(De),Me=n(777),He=n.n(Me),Be=n(778),ze=n.n(Be),Ge=n(779),Xe=n.n(Ge),We=n(780),Ve=n.n(We),Ze={"user-settings":re.a,"buy-sell":se.a,user:fe.a,notification:he.a,dashboard:pe.a,trading:ue.a,wallet:ie.a,stop:p.a,balance:f.a,center:h.a,close:b.a,"close-inverse":y.a,"deposit-arrow":x.a,download:z.a,exchange:O.a,"generate-reports":k.a,check:P.a,checkbox:N.a,refresh:T.a,"withdraw-arrow":q.a,menu:F.a,"menu-toggle":L.a,key:U.a,bigKey:H.a,arrowPrevious:X.a,arrowNext:V.a,"simple-check":te.a,pending:Y.a,settings:K.a,alert:$.a,buy:be.a,sell:ye.a,eye:xe.a,receive:Oe.a,receiveWithBorder:ke.a,send:Pe.a,sendWithBorder:Ne.a,deposit:Te.a,withdraw:qe.a,withdrawWithBorder:Fe.a,info:Le.a,copy:Ue.a,star:He.a,"logo-powered":ze.a,"open-buy":Xe.a,"open-sell":Ve.a},$e=function(e){var t=e.name,n=e.customClass,r=e.classModifiers,i=Object(c.a)(r,t),a=Object(c.b)(["ap-icon",n]),u=Ze[t];return o.a.createElement(s.a,{src:u,className:a(null,i)})};$e.defaultProps={name:"",customClass:"custom-icon",classModifiers:"",disabled:!1},$e.propTypes={name:a.a.string,customClass:a.a.string,classModifiers:a.a.oneOfType([a.a.string,a.a.arrayOf(a.a.string)]),disabled:a.a.bool},t.a=$e},714:function(e,t,n){"use strict";function r(e){this.request=e.request,this.xhr=e.xhr,this.headers=e.headers||{},this.status=e.status||0,this.text=e.text,this.body=e.body,this.contentType=e.contentType,this.isHttpError=e.status>=400}var o=n(715),i=n(716);r.prototype.header=o.prototype.header,r.fromRequest=function(e){return new r(i(e))},e.exports=r},715:function(e,t,n){"use strict";function r(e){var t="string"===typeof e?{url:e}:e||{};this.method=t.method?t.method.toUpperCase():"GET",this.url=t.url,this.headers=t.headers||{},this.body=t.body,this.timeout=t.timeout||0,this.errorOn404=null==t.errorOn404||t.errorOn404,this.onload=t.onload,this.onerror=t.onerror}r.prototype.abort=function(){if(!this.aborted)return this.aborted=!0,this.xhr.abort(),this},r.prototype.header=function(e,t){var n;for(n in this.headers)if(this.headers.hasOwnProperty(n)&&e.toLowerCase()===n.toLowerCase()){if(1===arguments.length)return this.headers[n];delete this.headers[n];break}if(null!=t)return this.headers[e]=t,t},e.exports=r},716:function(e,t,n){"use strict";var r=n(709);e.exports=function(e){var t=e.xhr,n={request:e,xhr:t};try{var o,i,a,s={};if(t.getAllResponseHeaders)for(o=t.getAllResponseHeaders().split("\n"),i=0;i<o.length;i++)(a=o[i].match(/\s*([^\s]+):\s+([^\s]+)/))&&(s[a[1]]=a[2]);n=r(n,{status:t.status,contentType:t.contentType||t.getResponseHeader&&t.getResponseHeader("Content-Type"),headers:s,text:t.responseText,body:t.response||t.responseText})}catch(e){}return n}},717:function(e,t,n){"use strict";e.exports=function(e){var t,n=!1;return function(){return n||(n=!0,t=e.apply(this,arguments)),t}}},719:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),s=n.n(a),c=n(1),u=n.n(c),l=n(720),p=n.n(l),d=n(725),f=n.n(d),m=n(727),h=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=p.a.use(f.a),g={PENDING:"pending",LOADING:"loading",LOADED:"loaded",FAILED:"failed",UNSUPPORTED:"unsupported"},y={},w={},x=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleLoad=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e)return void n.fail(e);n.isActive&&n.setState({loadedText:t.text,status:g.LOADED},function(){n.props.onLoad(n.props.src,r)})},n.state={status:g.PENDING},n.isActive=!1,n}return i(t,e),v(t,[{key:"componentWillMount",value:function(){this.isActive=!0}},{key:"componentDidMount",value:function(){this.state.status===g.PENDING&&(this.props.supportTest()?this.props.src?this.startLoad():this.fail(Object(m.a)("Missing source")):this.fail(Object(m.e)()))}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&(this.props.src?this.startLoad():this.fail(Object(m.a)("Missing source")))}},{key:"componentWillUnmount",value:function(){this.isActive=!1}},{key:"getFile",value:function(e){var t=this,n=this.props,r=n.cacheGetRequests,o=n.src;if(r){if(w[o]){var i=h(w[o],2),a=i[0],s=i[1];e(a,s,!0)}y[o]||(y[o]=[],b.get(o,function(e,n){y[o].forEach(function(r){w[o]=[e,n],o===t.props.src&&r(e,n)})})),y[o].push(e)}else b.get(o,function(n,r){o===t.props.src&&e(n,r)})}},{key:"fail",value:function(e){var t=this,n=e.isUnsupportedBrowserError?g.UNSUPPORTED:g.FAILED;this.isActive&&this.setState({status:n},function(){"function"===typeof t.props.onError&&t.props.onError(e)})}},{key:"startLoad",value:function(){this.isActive&&this.setState({status:g.LOADING},this.load)}},{key:"load",value:function(){var e=this.props.src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);return e?this.handleLoad(null,{text:e[1]?atob(e[2]):decodeURIComponent(e[2])}):this.getFile(this.handleLoad)}},{key:"getClassName",value:function(){var e="isvg "+this.state.status;return this.props.className&&(e+=" "+this.props.className),e}},{key:"processSVG",value:function(e){var t=this.props,n=t.uniquifyIDs,r=t.uniqueHash,o=t.baseURL;return n?Object(m.d)(e,r||Object(m.c)(),o):e}},{key:"renderContents",value:function(){switch(this.state.status){case g.UNSUPPORTED:case g.FAILED:return this.props.children;default:return this.props.preloader}}},{key:"render",value:function(){var e=void 0,t=void 0;return this.state.loadedText?t={__html:this.processSVG(this.state.loadedText)}:e=this.renderContents(),this.props.wrapper({style:this.props.style,className:this.getClassName(),dangerouslySetInnerHTML:t},e)}}]),t}(s.a.PureComponent);x.propTypes={baseURL:u.a.string,cacheGetRequests:u.a.bool,children:u.a.node,className:u.a.string,onError:u.a.func,onLoad:u.a.func,preloader:u.a.node,src:u.a.string.isRequired,style:u.a.object,supportTest:u.a.func,uniqueHash:u.a.string,uniquifyIDs:u.a.bool,wrapper:u.a.func},x.defaultProps={baseURL:"",cacheGetRequests:!1,onLoad:function(){},supportTest:m.b,uniquifyIDs:!0,wrapper:s.a.createFactory("span")},t.a=x},720:function(e,t,n){"use strict";function r(e,t){function n(n,r){var a,u,m,h,v,b;for(n=new p(d(e,n)),i=0;i<t.length;i++)u=t[i],u.processRequest&&u.processRequest(n);for(i=0;i<t.length;i++)if(u=t[i],u.createXHR){a=u.createXHR(n);break}a=a||new s,n.xhr=a,m=f(c(function(e){clearTimeout(v),a.onload=a.onerror=a.onabort=a.onreadystatechange=a.ontimeout=a.onprogress=null;var s=o(n,e),c=s||l.fromRequest(n);for(i=0;i<t.length;i++)u=t[i],u.processResponse&&u.processResponse(c);s&&n.onerror&&n.onerror(s),!s&&n.onload&&n.onload(c),r&&r(s,s?void 0:c)})),b="onload"in a&&"onerror"in a,a.onload=function(){m()},a.onerror=m,a.onabort=function(){m()},a.onreadystatechange=function(){if(4===a.readyState){if(n.aborted)return m();if(!b){var e;try{e=a.status}catch(t){}var t=0===e?new Error("Internal XHR Error"):null;return m(t)}}},a.ontimeout=function(){},a.onprogress=function(){},a.open(n.method,n.url),n.timeout&&(v=setTimeout(function(){n.timedOut=!0,m();try{a.abort()}catch(e){}},n.timeout));for(h in n.headers)n.headers.hasOwnProperty(h)&&a.setRequestHeader(h,n.headers[h]);return a.send(n.body),n}e=e||{},t=t||[];var a,m=["get","post","put","head","patch","delete"];for(i=0;i<m.length;i++)a=m[i],n[a]=function(e){return function(t,r){return t=new p(t),t.method=e,n(t,r)}}(a);return n.plugins=function(){return t},n.defaults=function(n){return n?r(d(e,n),t):e},n.use=function(){var n=Array.prototype.slice.call(arguments,0);return r(e,t.concat(n))},n.bare=function(){return r()},n.Request=p,n.Response=l,n.RequestError=u,n}function o(e,t){if(e.aborted)return m("Request aborted",e,{name:"Abort"});if(e.timedOut)return m("Request timeout",e,{name:"Timeout"});var n,r=e.xhr,o=Math.floor(r.status/100);switch(o){case 0:case 2:if(!t)return;return m(t.message,e);case 4:if(404===r.status&&!e.errorOn404)return;n="Client";break;case 5:n="Server";break;default:n="HTTP"}var i=n+" Error: The server returned a status of "+r.status+' for the request "'+e.method.toUpperCase()+" "+e.url+'"';return m(i,e)}var i,a=n(721),s=n(722),c=n(723),u=n(724),l=n(714),p=n(715),d=n(709),f=n(717),m=u.create;e.exports=r({},[a])},721:function(e,t,n){"use strict";e.exports={processRequest:function(e){e.url=e.url.replace(/[^%]+/g,function(e){return encodeURI(e)})}}},722:function(e,t){e.exports=window.XMLHttpRequest},723:function(e,t,n){"use strict";e.exports=function(e){return function(){var t=Array.prototype.slice.call(arguments,0),n=function(){return e.apply(null,t)};setTimeout(n,0)}}},724:function(e,t,n){"use strict";function r(e,t){var n=new Error(e);n.name="RequestError",this.name=n.name,this.message=n.message,n.stack&&(this.stack=n.stack),this.toString=function(){return this.message};for(var r in t)t.hasOwnProperty(r)&&(this[r]=t[r])}var o=n(714),i=n(716),a=n(709);r.prototype=a(Error.prototype),r.prototype.constructor=r,r.create=function(e,t,n){var a=new r(e,n);return o.call(a,i(t)),a},e.exports=r},725:function(e,t,n){"use strict";var r=n(726),o=n(717),i=!1,a=o(function(){return"undefined"!==typeof window&&null!==window&&window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest});e.exports={createXHR:function(e){var t,n,o;if("undefined"!==typeof window&&null!==window&&(t=r(e.url),n=r(window.location.href),t.host&&(t.protocol!==n.protocol||t.host!==n.host||t.port!==n.port))){if(!i&&e.headers)for(o in e.headers)if(e.headers.hasOwnProperty(o)){i=!0,window&&window.console&&window.console.warn&&window.console.warn("Request headers are ignored in old IE when using the oldiexdomain plugin.");break}if(window.XDomainRequest&&!a()){var s=new window.XDomainRequest;return s.setRequestHeader=function(){},s}}}}},726:function(e,t){(function(){var t,n,r,o={}.hasOwnProperty;t=/^(?:(?:([^:\/?\#]+:)\/+|(\/\/))(?:([a-z0-9-\._~%]+)(?::([a-z0-9-\._~%]+))?@)?(([a-z0-9-\._~%!$&'()*+,;=]+)(?::([0-9]+))?)?)?([^?\#]*?)(\?[^\#]*)?(\#.*)?$/,r=function(e,t){return r.URL.parse(e,t)},r.URL=function(){function e(e){var t,r,i;for(t in n)o.call(n,t)&&(r=n[t],this[t]=null!=(i=e[t])?i:r);this.host||(this.host=this.hostname&&this.port?this.hostname+":"+this.port:this.hostname?this.hostname:""),this.origin||(this.origin=this.protocol?this.protocol+"//"+this.host:""),this.isAbsolutePathRelative=!this.host&&"/"===this.pathname.charAt(0),this.isPathRelative=!this.host&&"/"!==this.pathname.charAt(0),this.isRelative=this.isSchemeRelative||this.isAbsolutePathRelative||this.isPathRelative,this.isAbsolute=!this.isRelative}return e.parse=function(e){var n,o,i;return n=e.toString().match(t),o=n[8]||"",i=n[1],new r.URL({protocol:i,username:n[3],password:n[4],hostname:n[6],port:n[7],pathname:i&&"/"!==o.charAt(0)?"/"+o:o,search:n[9],hash:n[10],isSchemeRelative:null!=n[2]})},e}(),n={protocol:"",username:"",password:"",host:"",hostname:"",port:"",pathname:"",search:"",hash:"",origin:"",isSchemeRelative:!1},e.exports=r}).call(this)},727:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return l}),n.d(t,"c",function(){return p}),n.d(t,"d",function(){return d}),n.d(t,"e",function(){return h}),n.d(t,"a",function(){return v});var a=n(728),s=n.n(a),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=s()(function(){if(!document)return!1;var e=document.createElement("div");return e.innerHTML="<svg />",e.firstChild&&"http://www.w3.org/2000/svg"===e.firstChild.namespaceURI}),l=s()(function(){return!(!u()||"undefined"===typeof window||null===window)&&(window.XMLHttpRequest||window.XDomainRequest)}),p=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t="abcdefghijklmnopqrstuvwxyz",n=t+t.toUpperCase()+"1234567890",r="",o=0;o<e;o++)r+=function(e){return e[Math.floor(Math.random()*e.length)]}(n);return r},d=function(){var e=function(e){return"(?:(?:\\s|\\:)"+e+")"},t=new RegExp("(?:("+e("id")+')="([^"]+)")|(?:('+e("href")+"|"+e("role")+"|"+e("arcrole")+')="\\#([^"]+)")|(?:="url\\(\\#([^\\)]+)\\)")|(?:url\\(\\#([^\\)]+)\\))',"g");return function(e,n,r){var o=function(e){return e+"___"+n};return e.replace(t,function(e,t,n,i,a,s,c){return n?t+'="'+o(n)+'"':a?i+'="'+r+"#"+o(a)+'"':s?'="url('+r+"#"+o(s)+')"':c?"url("+r+"#"+o(c)+")":void 0})}}(),f=function(e){function t(e){var n;r(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.name="InlineSVGError",i.isSupportedBrowser=!0,i.isConfigurationError=!1,i.isUnsupportedBrowserError=!1,i.message=e,n=i,o(i,n)}return i(t,e),t}(Error),m=function(e,t){var n=new f(e);return c({},n,t)},h=function(e){var t=e;return t||(t="Unsupported Browser"),m(t,{isSupportedBrowser:!1,isUnsupportedBrowserError:!0})},v=function(e){return m(e,{isConfigurationError:!0})}},728:function(e,t,n){function r(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}function o(e){var t=function(){if(t.called)throw new Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)},n=e.name||"Function wrapped with `once`";return t.onceError=n+" shouldn't be called more than once",t.called=!1,t}var i=n(729);e.exports=i(r),e.exports.strict=i(o),r.proto=r(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return r(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return o(this)},configurable:!0})})},729:function(e,t){function n(e,t){function r(){for(var t=new Array(arguments.length),n=0;n<t.length;n++)t[n]=arguments[n];var r=e.apply(this,t),o=t[t.length-1];return"function"===typeof r&&r!==o&&Object.keys(o).forEach(function(e){r[e]=o[e]}),r}if(e&&t)return n(e)(t);if("function"!==typeof e)throw new TypeError("need wrapper function");return Object.keys(e).forEach(function(t){r[t]=e[t]}),r}e.exports=n},733:function(e,t,n){var r=n(734);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(686)(r,o);r.locals&&(e.exports=r.locals)},734:function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,".ap-icon{display:inline-block;width:10px}.ap-icon--success{color:var(--success)}.ap-icon--info{color:var(--information__color)}.ap-icon--danger{color:var(--danger__color);height:1rem}.ap-icon--big{width:14px}.ap-icon--center{width:12px}.ap-icon--deposit-arrow,.ap-icon--withdraw-arrow{width:11px}.ap-icon--balance,.ap-icon--exchange,.ap-icon--settings{width:16px;margin-top:3px;margin-bottom:-3px}.ap-icon--generate-report{width:12px}.ap-icon--key{width:16px}.ap-icon--menu{width:24px}.ap-icon--refresh{width:15px}.ap-icon--widthraw-arrow{width:11px}",""])},735:function(e,t,n){e.exports=n.p+"static/media/icon-stop.12973336.svg"},736:function(e,t,n){e.exports=n.p+"static/media/icon-balance.25d500b4.svg"},737:function(e,t,n){e.exports=n.p+"static/media/icon-center.d3865558.svg"},738:function(e,t,n){e.exports=n.p+"static/media/icon-close.f5458b61.svg"},739:function(e,t,n){e.exports=n.p+"static/media/icon-close-inverse.241501cd.svg"},740:function(e,t,n){e.exports=n.p+"static/media/icon-deposit-arrow.fb9cee72.svg"},741:function(e,t,n){e.exports=n.p+"static/media/icon-exchange.a6cdeb82.svg"},742:function(e,t,n){e.exports=n.p+"static/media/icon-generate-reports.c25e875a.svg"},743:function(e,t,n){e.exports=n.p+"static/media/icon-check.4443b294.svg"},744:function(e,t,n){e.exports=n.p+"static/media/icon-checkbox.6ff75c6f.svg"},745:function(e,t,n){e.exports=n.p+"static/media/icon-refresh.36718f54.svg"},746:function(e,t,n){e.exports=n.p+"static/media/icon-withdraw-arrow.4644456c.svg"},747:function(e,t,n){e.exports=n.p+"static/media/icon-menu.ff0128f9.svg"},748:function(e,t,n){e.exports=n.p+"static/media/icon-menu-toggle.ad89aeb9.svg"},749:function(e,t,n){e.exports=n.p+"static/media/icon-key.c3b5c80f.svg"},750:function(e,t,n){e.exports=n.p+"static/media/icon-key-big.0d56bc9b.svg"},751:function(e,t,n){e.exports=n.p+"static/media/icon-download.ebdd4d2b.svg"},752:function(e,t,n){e.exports=n.p+"static/media/icon-arrow-prev.ec3c7dc9.svg"},753:function(e,t,n){e.exports=n.p+"static/media/icon-arrow-next.02ae871b.svg"},754:function(e,t,n){e.exports=n.p+"static/media/icon-alert.b09e6a92.svg"},755:function(e,t,n){e.exports=n.p+"static/media/icon-settings.d15941a5.svg"},756:function(e,t,n){e.exports=n.p+"static/media/icon-pending.e2938acc.svg"},757:function(e,t,n){e.exports=n.p+"static/media/icon-simple-check.03179922.svg"},758:function(e,t,n){e.exports=n.p+"static/media/icon-nav-settings.18d95955.svg"},759:function(e,t,n){e.exports=n.p+"static/media/icon-nav-wallet.057192aa.svg"},760:function(e,t,n){e.exports=n.p+"static/media/icon-nav-buy-sell.5ff447ad.svg"},761:function(e,t,n){e.exports=n.p+"static/media/icon-nav-trading.6846b323.svg"},762:function(e,t,n){e.exports=n.p+"static/media/icon-nav-dashboard-on.da8d7604.svg"},763:function(e,t,n){e.exports=n.p+"static/media/icon-nav-user.4473673a.svg"},764:function(e,t,n){e.exports=n.p+"static/media/icon-nav-notification.84f07c0e.svg"},765:function(e,t,n){e.exports=n.p+"static/media/icon-buy.4736e26a.svg"},766:function(e,t,n){e.exports=n.p+"static/media/icon-sell.749581f6.svg"},767:function(e,t,n){e.exports=n.p+"static/media/icon-eye.f3c39bfb.svg"},768:function(e,t,n){e.exports=n.p+"static/media/icon-receive.f8805981.svg"},769:function(e,t,n){e.exports=n.p+"static/media/icon-receive-with-border.51998985.svg"},770:function(e,t,n){e.exports=n.p+"static/media/icon-send.0eae48e8.svg"},771:function(e,t,n){e.exports=n.p+"static/media/icon-send-with-border.d2690259.svg"},772:function(e,t,n){e.exports=n.p+"static/media/icon-deposit.361361b7.svg"},773:function(e,t,n){e.exports=n.p+"static/media/icon-withdraw.aa1ee13f.svg"},774:function(e,t,n){e.exports=n.p+"static/media/icon-withdraw-with-border.e6866da7.svg"},775:function(e,t,n){e.exports=n.p+"static/media/icon-info.6448a8d0.svg"},776:function(e,t,n){e.exports=n.p+"static/media/icon-copy.9dc9a9a7.svg"},777:function(e,t,n){e.exports=n.p+"static/media/icon-star.9e54355c.svg"},778:function(e,t,n){e.exports=n.p+"static/media/logo-powered.7f6a585c.svg"},779:function(e,t,n){e.exports=n.p+"static/media/icon-open-buy-big.ec282aaa.svg"},780:function(e,t,n){e.exports=n.p+"static/media/icon-open-sell-big.04ef7f4d.svg"},785:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(81),c=n(789),u=(n.n(c),Object(s.b)("spinner")),l=function(e){var t=e.isVisible,n=e.isInline,r=e.text,i=e.customClass,a=i||function(){return""};return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement("div",{className:u("container",n&&"inline")+" "+a("spinner-container")},o.a.createElement("div",{className:u("circle",n&&"inline")+" "+a("spinner-circle")}),r&&o.a.createElement("div",{className:u("text")},r)))};l.propTypes={isInline:a.a.bool,isVisible:a.a.bool.isRequired,customClass:a.a.func,text:a.a.string},l.defaultProps={isVisible:!0},t.a=l},789:function(e,t,n){var r=n(790);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(686)(r,o);r.locals&&(e.exports=r.locals)},790:function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,".spinner__circle,.spinner__circle:after{border-radius:50%;width:2.5rem;height:2.5rem}.spinner__circle{margin:auto;-webkit-transform:translateZ(0);transform:translateZ(0);border-top:.2rem solid var(--spinner__color-secondary);border-right:.2rem solid var(--spinner__color-secondary);border-bottom:.2rem solid var(--spinner__color-secondary);border-left:.2rem solid var(--spinner__color-primary);-webkit-animation:loading 1.1s infinite linear;animation:loading 1.1s infinite linear}.spinner__circle--inline{border-top:.2rem solid var(--spinner__color-tertiary);border-right:.2rem solid var(--spinner__color-tertiary);border-bottom:.2rem solid var(--spinner__color-tertiary)}.spinner__container{position:absolute;display:-ms-flexbox;display:flex;margin:1rem 1.75rem;height:3rem;line-height:3rem}.spinner__container--inline{position:relative;margin:0;background:transparent}.spinner__text{color:var(--spinner__font-color);margin-left:1rem;display:inline-block}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},820:function(e,t,n){"use strict";var r=n(7),o=n(823),i=function(e,t){return{productManifest:e.productManifest,iconFileName:t.iconFileName,size:t.size||48}};t.a=Object(r.connect)(i)(o.a)},821:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"d",function(){return l}),n.d(t,"c",function(){return p}),n.d(t,"b",function(){return d}),n.d(t,"e",function(){return f});var r=n(82),o=(n.n(r),n(261)),i=function(e){return e.product.products},a=function(e){return e.position.positions},s=function(e){return e.productManifest.manifest},c=Object(r.createSelector)([function(e){return e.product},function(e){return e.position},function(e){return e.productManifest}],function(e,t,n){return e.fetching||t.fetching||n.fetching}),u=Object(r.createSelector)([i,function(e){return e.product.decimalPlaces},a],function(e,t,n){return e.map(function(e){var r=n[e.ProductId];if(!r)return e;var i=t[e.Product],a=Object(o.a)(r,i);return Object.assign({},a,e)})}),l=Object(r.createSelector)([u,s],function(e,t){return e.map(function(e){var n=t[e.Product]||{iconFileName:e.Product+"DEFAULT_ICON"};return Object.assign({},e,n)})}),p=Object(r.createSelector)([l,function(e,t){return t}],function(e,t){return e.find(function(e){return e.ProductId===t})}),d=Object(r.createSelector)(l,function(e){return e.filter(function(e){return"-"!==e.Amount})}),f=Object(r.createSelector)(l,function(e){return e.filter(function(e){return"-"===e.Amount})})},823:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(21),c=n(81),u=n(824),l=(n.n(u),Object(c.b)("product-icon")),p=function(e){var t=e.productManifest,n=e.iconFileName,r=e.size,i=void 0===r?48:r,a=e.customClass;return t.fetching?null:(null==n&&console.log(n),n&&n.indexOf("DEFAULT_ICON")>0?d(i,n):o.a.createElement("img",{alt:"product icon",height:i+"px",className:a,src:Object(s.a)("/local/product-icons/"+n)}))},d=function(e,t){return o.a.createElement("div",{className:l(null,"default"),style:{width:e,height:e,MozBorderRadius:e/2,WebkitBorderRadius:e/2,borderRadius:e/2,textAlign:"center",fontSize:.5*e,lineHeight:e+"px"}},o.a.createElement("span",null,t.charAt(0)))};p.propTypes={productManifest:a.a.object.isRequired,iconFileName:a.a.string,size:a.a.number},t.a=p},824:function(e,t,n){var r=n(825);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(686)(r,o);r.locals&&(e.exports=r.locals)},825:function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}",""])},865:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(1),o=n.n(r),i=o.a.shape({iconFileName:o.a.string,ProductFullName:o.a.string,ProductSymbol:o.a.string,ProductId:o.a.number})},875:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(81),c=n(711),u=n(948),l=(n.n(u),function(e){var t=e.tooltipText,n=e.iconName,r=e.customClass,i=e.action,a=Object(s.b)("icon-button",r);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{"data-tip":t,"data-place":"bottom","data-effect":"solid",onClick:i,className:a()},o.a.createElement(c.a,{name:n,customClass:a("icon")}),o.a.createElement("span",{className:a("label")},n)))});l.protoTypes={tooltipText:a.a.string.isRequired,iconName:a.a.string.isRequired,parentClass:a.a.string.isRequired,action:a.a.func},t.a=l},876:function(e,t,n){var r=n(950);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(686)(r,o);r.locals&&(e.exports=r.locals)},946:function(e,t,n){"use strict";var r=n(7),o=n(11),i=n(947),a=function(e){return{openSendReceiveSidePane:function(t,n){e(Object(o.p)(t,n))}}};t.a=Object(r.connect)(null,a)(i.a)},947:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),s=n.n(a),c=n(1),u=n.n(c),l=n(875),p=n(81),d=n(865),f=n(876),m=(n.n(f),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),h=Object(p.b)("wallet-nav-item"),v=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.onSendClick=function(){i.onBtnClick(!0)},i.onReceiveClick=function(){i.onBtnClick(!1)},i.onBtnClick=function(e){var t=i.props;(0,t.openSendReceiveSidePane)(e,t.product)},a=n,o(i,a)}return i(t,e),m(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{iconName:"send",action:this.onSendClick,tooltipText:this.context.t("Send"),customClass:h()}),s.a.createElement(l.a,{iconName:"receive",action:this.onReceiveClick,tooltipText:this.context.t("Receive"),customClass:h()}))}}]),t}(s.a.Component);v.propTypes={openSendReceiveSidePane:u.a.func.isRequired,product:d.a},v.contextTypes={t:u.a.func.isRequired},t.a=v},948:function(e,t,n){var r=n(949);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(686)(r,o);r.locals&&(e.exports=r.locals)},949:function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,".icon-button{min-width:4rem;height:4rem;border-radius:4px;color:var(--font__color-secondary);background:var(--primary__bg-color);border:1px solid var(--border-secondary);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer}.icon-button:hover,.icon-button:hover .icon-button__icon{color:var(--font__color-primary)}.icon-button__icon{-ms-flex-negative:0;flex-shrink:0;width:2rem;height:2rem;color:var(--font__color-secondary);-webkit-transition:var(--transition__settings);-o-transition:var(--transition__settings);transition:var(--transition__settings)}",""])},950:function(e,t,n){t=e.exports=n(28)(!1),t.push([e.i,".wallet-nav-item{margin-left:1.2rem;padding:0 1rem}.wallet-nav-item__label{text-transform:capitalize;padding-left:1rem}",""])},951:function(e,t,n){"use strict";var r=n(7),o=n(11),i=n(952),a=function(e){return{openRetailFiatSidePane:function(t,n){e(Object(o.o)(t,n))}}};t.a=Object(r.connect)(null,a)(i.a)},952:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),s=n.n(a),c=n(1),u=n.n(c),l=n(875),p=n(81),d=n(876),f=(n.n(d),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),m=Object(p.b)("wallet-nav-item"),h=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.onDepositClick=function(){i.onBtnClick(!0)},i.onWithdrawClick=function(){i.onBtnClick(!1)},i.onBtnClick=function(e){var t=i.props;(0,t.openRetailFiatSidePane)(e,t.product)},a=n,o(i,a)}return i(t,e),f(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{iconName:"deposit",action:this.onDepositClick,tooltipText:this.context.t("Deposit"),customClass:m()}),s.a.createElement(l.a,{iconName:"withdraw",action:this.onWithdrawClick,tooltipText:this.context.t("Withdraw"),customClass:m()}))}}]),t}(s.a.Component);h.propTypes={openRetailFiatSidePane:u.a.func.isRequired,product:u.a.shape({iconFileName:u.a.string,ProductFullName:u.a.string,ProductSymbol:u.a.string,ProductId:u.a.number})},h.contextTypes={t:u.a.func.isRequired},t.a=h}});