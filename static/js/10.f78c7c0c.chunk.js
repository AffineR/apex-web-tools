webpackJsonp([10],{1199:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(80),c=n(1200),u=n(768),l=n(1204),p=(n.n(l),Object(s.b)("wallet-row-list")),f=function(t,e){if(t.fetching)return o.a.createElement(u.a,{customClass:p});var n=t.products.map(function(t){return o.a.createElement(c.a,{key:t.ProductId,productId:t.ProductId})});return o.a.createElement("div",{className:p()},n)};f.contextTypes={t:a.a.func.isRequired},e.a=f},1200:function(t,e,n){"use strict";var r=n(7),o=n(1201),i=n(795),a=n(143),s=function(t,e){var n=Object(i.c)(t,e.productId);return{iconFileName:n.iconFileName,ProductSymbol:n.ProductSymbol,ProductFullName:n.ProductFullName,Amount:n.Amount,isCrypto:"CryptoCurrency"===n.ProductType,ProductId:n.ProductId}},c=function(t,e){return{selectPositionAndSave:function(){t(Object(a.g)(e.productId))}}};e.a=Object(r.connect)(s,c)(o.a)},1201:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(27),c=n(45),u=n(80),l=n(789),p=n(936),f=n(707),d=n(941),m=n(83),h=n(1202),v=(n.n(h),Object(u.b)("wallet-row")),b=function(t,e){var n=t.iconFileName,r=t.ProductSymbol,i=t.ProductFullName,a=t.Amount,u=t.isCrypto,h=t.ProductId;return o.a.createElement("div",{className:v()},o.a.createElement("div",{className:v("icon-label")},o.a.createElement("div",{className:v("product-icon")},o.a.createElement(l.a,{iconFileName:n,size:44})),o.a.createElement("div",{className:v("symbol-label")},r+" "+i)),o.a.createElement("div",{className:v("balance-columns")},o.a.createElement("div",{className:v("balance")},o.a.createElement("div",{className:v("label")},e.t("Current Balance")),o.a.createElement("div",{className:v("amount")},a+" "+r))),o.a.createElement("div",{className:v("activity-link-columns")},o.a.createElement("div",{className:v("activity-link")},o.a.createElement(s.a,{className:v("activity-link"),to:Object(c.a)(m.g.path),onClick:t.selectPositionAndSave},e.t("View Activity")," ",o.a.createElement(f.a,{name:"arrowNext",customClass:v("next-icon")}))),o.a.createElement("div",{className:v("icon-nav-buttons")},u?o.a.createElement(p.a,{product:{iconFileName:n,ProductSymbol:r,ProductFullName:i,ProductId:h}}):o.a.createElement(d.a,{product:{iconFileName:n,ProductSymbol:r,ProductFullName:i,ProductId:h}}))))};b.contextTypes={t:a.a.func.isRequired},e.a=b},1202:function(t,e,n){var r=n(1203);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(682)(r,o);r.locals&&(t.exports=r.locals)},1203:function(t,e,n){e=t.exports=n(26)(!1),e.push([t.i,".wallet-row{display:-ms-flexbox;display:flex;width:100%;border-bottom:1px solid var(--table__row-separator-color);background:var(--table__row-bg-color)}.wallet-row:hover{background:var(--wallet-row__bg-color--hover)}.wallet-row__icon-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:25%;padding:2% 0 2% 2%}.wallet-row__symbol-label{margin-left:1.5rem;font-size:1.75rem;color:var(--font__color-primary)}.wallet-row__balance-columns{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:40%;padding:0 2%;border-left:1px solid var(--border__color)}.wallet-row__label{margin-bottom:1rem;color:var(--font__color-secondary)}.wallet-row__amount{font-size:1.5rem;color:var(--font__color-primary)}.wallet-row__activity-link-columns{display:-ms-flexbox;display:flex;width:35%}.wallet-row__activity-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:40%;padding:1%;font-size:1.4rem}a.wallet-row__activity-link{width:100%;letter-spacing:.05rem}.wallet-row__next-icon{margin-left:.75rem}.wallet-row__icon-nav-buttons{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:60%;padding:0 2%;border-left:1px solid var(--border__color);background:var(--market-data-card-secondary-background)}.wallet-row__icon-nav-buttons>.wallet-nav-item{min-width:8.8rem}.wallet-row__icon-nav-buttons>:first-child{margin-left:0}",""])},1204:function(t,e,n){var r=n(1205);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(682)(r,o);r.locals&&(t.exports=r.locals)},1205:function(t,e,n){e=t.exports=n(26)(!1),e.push([t.i,".wallet-row-list{width:100%;background-color:var(--secondary__bg-color);border-radius:1rem}",""])},160:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7),o=n(795),i=n(1199),a=function(t){return{fetching:Object(o.a)(t),products:Object(o.e)(t)}};e.default=Object(r.connect)(a)(i.a)},706:function(t,e){function n(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])}return t}t.exports=n},707:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(713),c=n(80),u=n(724),l=(n.n(u),n(726)),p=n.n(l),f=n(727),d=n.n(f),m=n(728),h=n.n(m),v=n(729),b=n.n(v),g=n(730),y=n.n(g),w=n(731),x=n.n(w),_=n(732),O=n.n(_),E=n(733),k=n.n(E),R=n(734),P=n.n(R),j=n(735),N=n.n(j),C=n(736),T=n.n(C),S=n(737),q=n.n(S),A=n(738),F=n.n(A),I=n(739),L=n.n(I),D=n(740),U=n.n(D),M=n(741),H=n.n(M),z=n(742),B=n.n(z),G=n(743),X=n.n(G),V=n(744),W=n.n(V),Z=n(745),$=n.n(Z),J=n(746),K=n.n(J),Q=n(747),Y=n.n(Q),tt=n(748),et=n.n(tt),nt=n(749),rt=n.n(nt),ot=n(750),it=n.n(ot),at=n(751),st=n.n(at),ct=n(752),ut=n.n(ct),lt=n(753),pt=n.n(lt),ft=n(754),dt=n.n(ft),mt=n(755),ht=n.n(mt),vt=n(756),bt=n.n(vt),gt=n(757),yt=n.n(gt),wt=n(758),xt=n.n(wt),_t=n(759),Ot=n.n(_t),Et=n(760),kt=n.n(Et),Rt=n(761),Pt=n.n(Rt),jt=n(762),Nt=n.n(jt),Ct=n(763),Tt=n.n(Ct),St=n(764),qt=n.n(St),At=n(765),Ft=n.n(At),It=n(766),Lt=n.n(It),Dt=n(767),Ut=n.n(Dt),Mt={"user-settings":et.a,"buy-sell":it.a,user:pt.a,notification:dt.a,dashboard:ut.a,trading:st.a,wallet:rt.a,stop:p.a,balance:d.a,center:h.a,close:b.a,"close-inverse":y.a,"deposit-arrow":x.a,download:H.a,exchange:O.a,"generate-reports":k.a,check:P.a,checkbox:N.a,refresh:T.a,"withdraw-arrow":q.a,menu:F.a,"menu-toggle":L.a,key:U.a,arrowPrevious:B.a,arrowNext:X.a,"simple-check":Y.a,pending:K.a,settings:$.a,alert:W.a,buy:ht.a,sell:bt.a,eye:yt.a,receive:xt.a,send:Ot.a,deposit:kt.a,withdraw:Pt.a,info:Nt.a,copy:Tt.a,star:qt.a,"logo-powered":Ft.a,"open-buy":Lt.a,"open-sell":Ut.a},Ht=function(t){var e=t.name,n=t.customClass,r=t.classModifiers,i=Object(c.a)(r,e),a=Object(c.b)(["ap-icon",n]),u=Mt[e];return o.a.createElement(s.a,{src:u,className:a(null,i)})};Ht.defaultProps={name:"",customClass:"custom-icon",classModifiers:"",disabled:!1},Ht.propTypes={name:a.a.string,customClass:a.a.string,classModifiers:a.a.oneOfType([a.a.string,a.a.arrayOf(a.a.string)]),disabled:a.a.bool},e.a=Ht},708:function(t,e,n){"use strict";function r(t){this.request=t.request,this.xhr=t.xhr,this.headers=t.headers||{},this.status=t.status||0,this.text=t.text,this.body=t.body,this.contentType=t.contentType,this.isHttpError=t.status>=400}var o=n(709),i=n(710);r.prototype.header=o.prototype.header,r.fromRequest=function(t){return new r(i(t))},t.exports=r},709:function(t,e,n){"use strict";function r(t){var e="string"===typeof t?{url:t}:t||{};this.method=e.method?e.method.toUpperCase():"GET",this.url=e.url,this.headers=e.headers||{},this.body=e.body,this.timeout=e.timeout||0,this.errorOn404=null==e.errorOn404||e.errorOn404,this.onload=e.onload,this.onerror=e.onerror}r.prototype.abort=function(){if(!this.aborted)return this.aborted=!0,this.xhr.abort(),this},r.prototype.header=function(t,e){var n;for(n in this.headers)if(this.headers.hasOwnProperty(n)&&t.toLowerCase()===n.toLowerCase()){if(1===arguments.length)return this.headers[n];delete this.headers[n];break}if(null!=e)return this.headers[t]=e,e},t.exports=r},710:function(t,e,n){"use strict";var r=n(706);t.exports=function(t){var e=t.xhr,n={request:t,xhr:e};try{var o,i,a,s={};if(e.getAllResponseHeaders)for(o=e.getAllResponseHeaders().split("\n"),i=0;i<o.length;i++)(a=o[i].match(/\s*([^\s]+):\s+([^\s]+)/))&&(s[a[1]]=a[2]);n=r(n,{status:e.status,contentType:e.contentType||e.getResponseHeader&&e.getResponseHeader("Content-Type"),headers:s,text:e.responseText,body:e.response||e.responseText})}catch(t){}return n}},711:function(t,e,n){"use strict";t.exports=function(t){var e,n=!1;return function(){return n||(n=!0,e=t.apply(this,arguments)),e}}},713:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(0),s=n.n(a),c=n(1),u=n.n(c),l=n(714),p=n.n(l),f=n(719),d=n.n(f),m=n(721),h=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),b=p.a.use(d.a),g={PENDING:"pending",LOADING:"loading",LOADED:"loaded",FAILED:"failed",UNSUPPORTED:"unsupported"},y={},w={},x=function(t){function e(t){r(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.handleLoad=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t)return void n.fail(t);n.isActive&&n.setState({loadedText:e.text,status:g.LOADED},function(){n.props.onLoad(n.props.src,r)})},n.state={status:g.PENDING},n.isActive=!1,n}return i(e,t),v(e,[{key:"componentWillMount",value:function(){this.isActive=!0}},{key:"componentDidMount",value:function(){this.state.status===g.PENDING&&(this.props.supportTest()?this.props.src?this.startLoad():this.fail(Object(m.a)("Missing source")):this.fail(Object(m.e)()))}},{key:"componentDidUpdate",value:function(t){t.src!==this.props.src&&(this.props.src?this.startLoad():this.fail(Object(m.a)("Missing source")))}},{key:"componentWillUnmount",value:function(){this.isActive=!1}},{key:"getFile",value:function(t){var e=this,n=this.props,r=n.cacheGetRequests,o=n.src;if(r){if(w[o]){var i=h(w[o],2),a=i[0],s=i[1];t(a,s,!0)}y[o]||(y[o]=[],b.get(o,function(t,n){y[o].forEach(function(r){w[o]=[t,n],o===e.props.src&&r(t,n)})})),y[o].push(t)}else b.get(o,function(n,r){o===e.props.src&&t(n,r)})}},{key:"fail",value:function(t){var e=this,n=t.isUnsupportedBrowserError?g.UNSUPPORTED:g.FAILED;this.isActive&&this.setState({status:n},function(){"function"===typeof e.props.onError&&e.props.onError(t)})}},{key:"startLoad",value:function(){this.isActive&&this.setState({status:g.LOADING},this.load)}},{key:"load",value:function(){var t=this.props.src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);return t?this.handleLoad(null,{text:t[1]?atob(t[2]):decodeURIComponent(t[2])}):this.getFile(this.handleLoad)}},{key:"getClassName",value:function(){var t="isvg "+this.state.status;return this.props.className&&(t+=" "+this.props.className),t}},{key:"processSVG",value:function(t){var e=this.props,n=e.uniquifyIDs,r=e.uniqueHash,o=e.baseURL;return n?Object(m.d)(t,r||Object(m.c)(),o):t}},{key:"renderContents",value:function(){switch(this.state.status){case g.UNSUPPORTED:case g.FAILED:return this.props.children;default:return this.props.preloader}}},{key:"render",value:function(){var t=void 0,e=void 0;return this.state.loadedText?e={__html:this.processSVG(this.state.loadedText)}:t=this.renderContents(),this.props.wrapper({style:this.props.style,className:this.getClassName(),dangerouslySetInnerHTML:e},t)}}]),e}(s.a.PureComponent);x.propTypes={baseURL:u.a.string,cacheGetRequests:u.a.bool,children:u.a.node,className:u.a.string,onError:u.a.func,onLoad:u.a.func,preloader:u.a.node,src:u.a.string.isRequired,style:u.a.object,supportTest:u.a.func,uniqueHash:u.a.string,uniquifyIDs:u.a.bool,wrapper:u.a.func},x.defaultProps={baseURL:"",cacheGetRequests:!1,onLoad:function(){},supportTest:m.b,uniquifyIDs:!0,wrapper:s.a.createFactory("span")},e.a=x},714:function(t,e,n){"use strict";function r(t,e){function n(n,r){var a,u,m,h,v,b;for(n=new p(f(t,n)),i=0;i<e.length;i++)u=e[i],u.processRequest&&u.processRequest(n);for(i=0;i<e.length;i++)if(u=e[i],u.createXHR){a=u.createXHR(n);break}a=a||new s,n.xhr=a,m=d(c(function(t){clearTimeout(v),a.onload=a.onerror=a.onabort=a.onreadystatechange=a.ontimeout=a.onprogress=null;var s=o(n,t),c=s||l.fromRequest(n);for(i=0;i<e.length;i++)u=e[i],u.processResponse&&u.processResponse(c);s&&n.onerror&&n.onerror(s),!s&&n.onload&&n.onload(c),r&&r(s,s?void 0:c)})),b="onload"in a&&"onerror"in a,a.onload=function(){m()},a.onerror=m,a.onabort=function(){m()},a.onreadystatechange=function(){if(4===a.readyState){if(n.aborted)return m();if(!b){var t;try{t=a.status}catch(e){}var e=0===t?new Error("Internal XHR Error"):null;return m(e)}}},a.ontimeout=function(){},a.onprogress=function(){},a.open(n.method,n.url),n.timeout&&(v=setTimeout(function(){n.timedOut=!0,m();try{a.abort()}catch(t){}},n.timeout));for(h in n.headers)n.headers.hasOwnProperty(h)&&a.setRequestHeader(h,n.headers[h]);return a.send(n.body),n}t=t||{},e=e||[];var a,m=["get","post","put","head","patch","delete"];for(i=0;i<m.length;i++)a=m[i],n[a]=function(t){return function(e,r){return e=new p(e),e.method=t,n(e,r)}}(a);return n.plugins=function(){return e},n.defaults=function(n){return n?r(f(t,n),e):t},n.use=function(){var n=Array.prototype.slice.call(arguments,0);return r(t,e.concat(n))},n.bare=function(){return r()},n.Request=p,n.Response=l,n.RequestError=u,n}function o(t,e){if(t.aborted)return m("Request aborted",t,{name:"Abort"});if(t.timedOut)return m("Request timeout",t,{name:"Timeout"});var n,r=t.xhr,o=Math.floor(r.status/100);switch(o){case 0:case 2:if(!e)return;return m(e.message,t);case 4:if(404===r.status&&!t.errorOn404)return;n="Client";break;case 5:n="Server";break;default:n="HTTP"}var i=n+" Error: The server returned a status of "+r.status+' for the request "'+t.method.toUpperCase()+" "+t.url+'"';return m(i,t)}var i,a=n(715),s=n(716),c=n(717),u=n(718),l=n(708),p=n(709),f=n(706),d=n(711),m=u.create;t.exports=r({},[a])},715:function(t,e,n){"use strict";t.exports={processRequest:function(t){t.url=t.url.replace(/[^%]+/g,function(t){return encodeURI(t)})}}},716:function(t,e){t.exports=window.XMLHttpRequest},717:function(t,e,n){"use strict";t.exports=function(t){return function(){var e=Array.prototype.slice.call(arguments,0),n=function(){return t.apply(null,e)};setTimeout(n,0)}}},718:function(t,e,n){"use strict";function r(t,e){var n=new Error(t);n.name="RequestError",this.name=n.name,this.message=n.message,n.stack&&(this.stack=n.stack),this.toString=function(){return this.message};for(var r in e)e.hasOwnProperty(r)&&(this[r]=e[r])}var o=n(708),i=n(710),a=n(706);r.prototype=a(Error.prototype),r.prototype.constructor=r,r.create=function(t,e,n){var a=new r(t,n);return o.call(a,i(e)),a},t.exports=r},719:function(t,e,n){"use strict";var r=n(720),o=n(711),i=!1,a=o(function(){return"undefined"!==typeof window&&null!==window&&window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest});t.exports={createXHR:function(t){var e,n,o;if("undefined"!==typeof window&&null!==window&&(e=r(t.url),n=r(window.location.href),e.host&&(e.protocol!==n.protocol||e.host!==n.host||e.port!==n.port))){if(!i&&t.headers)for(o in t.headers)if(t.headers.hasOwnProperty(o)){i=!0,window&&window.console&&window.console.warn&&window.console.warn("Request headers are ignored in old IE when using the oldiexdomain plugin.");break}if(window.XDomainRequest&&!a()){var s=new window.XDomainRequest;return s.setRequestHeader=function(){},s}}}}},720:function(t,e){(function(){var e,n,r,o={}.hasOwnProperty;e=/^(?:(?:([^:\/?\#]+:)\/+|(\/\/))(?:([a-z0-9-\._~%]+)(?::([a-z0-9-\._~%]+))?@)?(([a-z0-9-\._~%!$&'()*+,;=]+)(?::([0-9]+))?)?)?([^?\#]*?)(\?[^\#]*)?(\#.*)?$/,r=function(t,e){return r.URL.parse(t,e)},r.URL=function(){function t(t){var e,r,i;for(e in n)o.call(n,e)&&(r=n[e],this[e]=null!=(i=t[e])?i:r);this.host||(this.host=this.hostname&&this.port?this.hostname+":"+this.port:this.hostname?this.hostname:""),this.origin||(this.origin=this.protocol?this.protocol+"//"+this.host:""),this.isAbsolutePathRelative=!this.host&&"/"===this.pathname.charAt(0),this.isPathRelative=!this.host&&"/"!==this.pathname.charAt(0),this.isRelative=this.isSchemeRelative||this.isAbsolutePathRelative||this.isPathRelative,this.isAbsolute=!this.isRelative}return t.parse=function(t){var n,o,i;return n=t.toString().match(e),o=n[8]||"",i=n[1],new r.URL({protocol:i,username:n[3],password:n[4],hostname:n[6],port:n[7],pathname:i&&"/"!==o.charAt(0)?"/"+o:o,search:n[9],hash:n[10],isSchemeRelative:null!=n[2]})},t}(),n={protocol:"",username:"",password:"",host:"",hostname:"",port:"",pathname:"",search:"",hash:"",origin:"",isSchemeRelative:!1},t.exports=r}).call(this)},721:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"b",function(){return l}),n.d(e,"c",function(){return p}),n.d(e,"d",function(){return f}),n.d(e,"e",function(){return h}),n.d(e,"a",function(){return v});var a=n(722),s=n.n(a),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=s()(function(){if(!document)return!1;var t=document.createElement("div");return t.innerHTML="<svg />",t.firstChild&&"http://www.w3.org/2000/svg"===t.firstChild.namespaceURI}),l=s()(function(){return!(!u()||"undefined"===typeof window||null===window)&&(window.XMLHttpRequest||window.XDomainRequest)}),p=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e="abcdefghijklmnopqrstuvwxyz",n=e+e.toUpperCase()+"1234567890",r="",o=0;o<t;o++)r+=function(t){return t[Math.floor(Math.random()*t.length)]}(n);return r},f=function(){var t=function(t){return"(?:(?:\\s|\\:)"+t+")"},e=new RegExp("(?:("+t("id")+')="([^"]+)")|(?:('+t("href")+"|"+t("role")+"|"+t("arcrole")+')="\\#([^"]+)")|(?:="url\\(\\#([^\\)]+)\\)")|(?:url\\(\\#([^\\)]+)\\))',"g");return function(t,n,r){var o=function(t){return t+"___"+n};return t.replace(e,function(t,e,n,i,a,s,c){return n?e+'="'+o(n)+'"':a?i+'="'+r+"#"+o(a)+'"':s?'="url('+r+"#"+o(s)+')"':c?"url("+r+"#"+o(c)+")":void 0})}}(),d=function(t){function e(t){var n;r(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.name="InlineSVGError",i.isSupportedBrowser=!0,i.isConfigurationError=!1,i.isUnsupportedBrowserError=!1,i.message=t,n=i,o(i,n)}return i(e,t),e}(Error),m=function(t,e){var n=new d(t);return c({},n,e)},h=function(t){var e=t;return e||(e="Unsupported Browser"),m(e,{isSupportedBrowser:!1,isUnsupportedBrowserError:!0})},v=function(t){return m(t,{isConfigurationError:!0})}},722:function(t,e,n){function r(t){var e=function(){return e.called?e.value:(e.called=!0,e.value=t.apply(this,arguments))};return e.called=!1,e}function o(t){var e=function(){if(e.called)throw new Error(e.onceError);return e.called=!0,e.value=t.apply(this,arguments)},n=t.name||"Function wrapped with `once`";return e.onceError=n+" shouldn't be called more than once",e.called=!1,e}var i=n(723);t.exports=i(r),t.exports.strict=i(o),r.proto=r(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return r(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return o(this)},configurable:!0})})},723:function(t,e){function n(t,e){function r(){for(var e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n];var r=t.apply(this,e),o=e[e.length-1];return"function"===typeof r&&r!==o&&Object.keys(o).forEach(function(t){r[t]=o[t]}),r}if(t&&e)return n(t)(e);if("function"!==typeof t)throw new TypeError("need wrapper function");return Object.keys(t).forEach(function(e){r[e]=t[e]}),r}t.exports=n},724:function(t,e,n){var r=n(725);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(682)(r,o);r.locals&&(t.exports=r.locals)},725:function(t,e,n){e=t.exports=n(26)(!1),e.push([t.i,".ap-icon{display:inline-block;width:10px}.ap-icon--success{color:var(--success)}.ap-icon--info{color:var(--information__color)}.ap-icon--danger{color:var(--danger__color);height:1rem}.ap-icon--big{width:14px}.ap-icon--center{width:12px}.ap-icon--deposit-arrow,.ap-icon--withdraw-arrow{width:11px}.ap-icon--balance,.ap-icon--exchange,.ap-icon--settings{width:16px;margin-top:3px;margin-bottom:-3px}.ap-icon--generate-report{width:12px}.ap-icon--key{width:16px}.ap-icon--menu{width:24px}.ap-icon--refresh{width:15px}.ap-icon--widthraw-arrow{width:11px}",""])},726:function(t,e,n){t.exports=n.p+"static/media/icon-stop.12973336.svg"},727:function(t,e,n){t.exports=n.p+"static/media/icon-balance.25d500b4.svg"},728:function(t,e,n){t.exports=n.p+"static/media/icon-center.d3865558.svg"},729:function(t,e,n){t.exports=n.p+"static/media/icon-close.f5458b61.svg"},730:function(t,e,n){t.exports=n.p+"static/media/icon-close-inverse.241501cd.svg"},731:function(t,e,n){t.exports=n.p+"static/media/icon-deposit-arrow.fb9cee72.svg"},732:function(t,e,n){t.exports=n.p+"static/media/icon-exchange.a6cdeb82.svg"},733:function(t,e,n){t.exports=n.p+"static/media/icon-generate-reports.c25e875a.svg"},734:function(t,e,n){t.exports=n.p+"static/media/icon-check.4443b294.svg"},735:function(t,e,n){t.exports=n.p+"static/media/icon-checkbox.6ff75c6f.svg"},736:function(t,e,n){t.exports=n.p+"static/media/icon-refresh.36718f54.svg"},737:function(t,e,n){t.exports=n.p+"static/media/icon-withdraw-arrow.4644456c.svg"},738:function(t,e,n){t.exports=n.p+"static/media/icon-menu.ff0128f9.svg"},739:function(t,e,n){t.exports=n.p+"static/media/icon-menu-toggle.ad89aeb9.svg"},740:function(t,e,n){t.exports=n.p+"static/media/icon-key.c3b5c80f.svg"},741:function(t,e,n){t.exports=n.p+"static/media/icon-download.ebdd4d2b.svg"},742:function(t,e,n){t.exports=n.p+"static/media/icon-arrow-prev.ec3c7dc9.svg"},743:function(t,e,n){t.exports=n.p+"static/media/icon-arrow-next.02ae871b.svg"},744:function(t,e,n){t.exports=n.p+"static/media/icon-alert.b09e6a92.svg"},745:function(t,e,n){t.exports=n.p+"static/media/icon-settings.d15941a5.svg"},746:function(t,e,n){t.exports=n.p+"static/media/icon-pending.e2938acc.svg"},747:function(t,e,n){t.exports=n.p+"static/media/icon-simple-check.03179922.svg"},748:function(t,e,n){t.exports=n.p+"static/media/icon-nav-settings.18d95955.svg"},749:function(t,e,n){t.exports=n.p+"static/media/icon-nav-wallet.057192aa.svg"},750:function(t,e,n){t.exports=n.p+"static/media/icon-nav-buy-sell.5ff447ad.svg"},751:function(t,e,n){t.exports=n.p+"static/media/icon-nav-trading.6846b323.svg"},752:function(t,e,n){t.exports=n.p+"static/media/icon-nav-dashboard-on.da8d7604.svg"},753:function(t,e,n){t.exports=n.p+"static/media/icon-nav-user.4473673a.svg"},754:function(t,e,n){t.exports=n.p+"static/media/icon-nav-notification.84f07c0e.svg"},755:function(t,e,n){t.exports=n.p+"static/media/icon-buy.4736e26a.svg"},756:function(t,e,n){t.exports=n.p+"static/media/icon-sell.749581f6.svg"},757:function(t,e,n){t.exports=n.p+"static/media/icon-eye.f3c39bfb.svg"},758:function(t,e,n){t.exports=n.p+"static/media/icon-receive.f8805981.svg"},759:function(t,e,n){t.exports=n.p+"static/media/icon-send.0eae48e8.svg"},760:function(t,e,n){t.exports=n.p+"static/media/icon-deposit.59dc6048.svg"},761:function(t,e,n){t.exports=n.p+"static/media/icon-withdraw.ce30850a.svg"},762:function(t,e,n){t.exports=n.p+"static/media/icon-info.6448a8d0.svg"},763:function(t,e,n){t.exports=n.p+"static/media/icon-copy.9dc9a9a7.svg"},764:function(t,e,n){t.exports=n.p+"static/media/icon-star.9e54355c.svg"},765:function(t,e,n){t.exports=n.p+"static/media/logo-powered.7f6a585c.svg"},766:function(t,e,n){t.exports=n.p+"static/media/icon-open-buy-big.ec282aaa.svg"},767:function(t,e,n){t.exports=n.p+"static/media/icon-open-sell-big.04ef7f4d.svg"},768:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(80),c=n(773),u=(n.n(c),Object(s.b)("spinner")),l=function(t){var e=t.isVisible,n=t.isInline,r=t.text,i=t.customClass,a=i||function(){return""};return o.a.createElement(o.a.Fragment,null,e&&o.a.createElement("div",{className:u("container",n&&"inline")+" "+a("spinner-container")},o.a.createElement("div",{className:u("circle",n&&"inline")+" "+a("spinner-circle")}),r&&o.a.createElement("div",{className:u("text")},r)))};l.propTypes={isInline:a.a.bool,isVisible:a.a.bool.isRequired,customClass:a.a.func,text:a.a.string},l.defaultProps={isVisible:!0},e.a=l},773:function(t,e,n){var r=n(774);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(682)(r,o);r.locals&&(t.exports=r.locals)},774:function(t,e,n){e=t.exports=n(26)(!1),e.push([t.i,".spinner__circle,.spinner__circle:after{border-radius:50%;width:2.5rem;height:2.5rem}.spinner__circle{margin:auto;-webkit-transform:translateZ(0);transform:translateZ(0);border-top:.2rem solid var(--spinner__color-secondary);border-right:.2rem solid var(--spinner__color-secondary);border-bottom:.2rem solid var(--spinner__color-secondary);border-left:.2rem solid var(--spinner__color-primary);-webkit-animation:loading 1.1s infinite linear;animation:loading 1.1s infinite linear}.spinner__circle--inline{border-top:.2rem solid var(--spinner__color-tertiary);border-right:.2rem solid var(--spinner__color-tertiary);border-bottom:.2rem solid var(--spinner__color-tertiary)}.spinner__container{position:absolute;display:-ms-flexbox;display:flex;margin:1rem 1.75rem;height:3rem;line-height:3rem}.spinner__container--inline{position:relative;margin:0;background:transparent}.spinner__text{color:var(--spinner__font-color);margin-left:1rem;display:inline-block}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},789:function(t,e,n){"use strict";var r=n(7),o=n(791),i=function(t,e){return{productManifest:t.productManifest,iconFileName:e.iconFileName,size:e.size||48}};e.a=Object(r.connect)(i)(o.a)},791:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(45),c=n(80),u=n(792),l=(n.n(u),Object(c.b)("product-icon")),p=function(t){var e=t.productManifest,n=t.iconFileName,r=t.size,i=void 0===r?48:r,a=t.customClass;return e.fetching?null:(null==n&&console.log(n),n&&n.indexOf("DEFAULT_ICON")>0?f(i,n):o.a.createElement("img",{alt:"product icon",height:i+"px",className:a,src:Object(s.a)("/local/product-icons/"+n)}))},f=function(t,e){return o.a.createElement("div",{className:l(null,"default"),style:{width:t,height:t,MozBorderRadius:t/2,WebkitBorderRadius:t/2,borderRadius:t/2,textAlign:"center",fontSize:.5*t,lineHeight:t+"px"}},o.a.createElement("span",null,e.charAt(0)))};p.propTypes={productManifest:a.a.object.isRequired,iconFileName:a.a.string,size:a.a.number},e.a=p},792:function(t,e,n){var r=n(793);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(682)(r,o);r.locals&&(t.exports=r.locals)},793:function(t,e,n){e=t.exports=n(26)(!1),e.push([t.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}",""])},795:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"d",function(){return l}),n.d(e,"c",function(){return p}),n.d(e,"b",function(){return f}),n.d(e,"e",function(){return d});var r=n(81),o=(n.n(r),n(264)),i=function(t){return t.product.products},a=function(t){return t.position.positions},s=function(t){return t.productManifest.manifest},c=Object(r.createSelector)([function(t){return t.product},function(t){return t.position},function(t){return t.productManifest}],function(t,e,n){return t.fetching||e.fetching||n.fetching}),u=Object(r.createSelector)([i,function(t){return t.product.decimalPlaces},a],function(t,e,n){return t.map(function(t){var r=n[t.ProductId];if(!r)return t;var i=e[t.Product],a=Object(o.a)(r,i);return Object.assign({},a,t)})}),l=Object(r.createSelector)([u,s],function(t,e){return t.map(function(t){var n=e[t.Product]||{iconFileName:t.Product+"DEFAULT_ICON"};return Object.assign({},t,n)})}),p=Object(r.createSelector)([l,function(t,e){return e}],function(t,e){return t.find(function(t){return t.ProductId===e})}),f=Object(r.createSelector)(l,function(t){return t.filter(function(t){return"-"!==t.Amount})}),d=Object(r.createSelector)(l,function(t){return t.filter(function(t){return"-"===t.Amount})})},847:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(1),o=n.n(r),i=o.a.shape({iconFileName:o.a.string,ProductFullName:o.a.string,ProductSymbol:o.a.string,ProductId:o.a.number})},855:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(80),c=n(707),u=n(938),l=(n.n(u),function(t){var e=t.tooltipText,n=t.iconName,r=t.customClass,i=t.action,a=Object(s.b)("icon-button",r);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{"data-tip":e,"data-place":"bottom","data-effect":"solid",onClick:i,className:a()},o.a.createElement(c.a,{name:n,customClass:a("icon")}),o.a.createElement("span",{className:a("label")},n)))});l.protoTypes={tooltipText:a.a.string.isRequired,iconName:a.a.string.isRequired,parentClass:a.a.string.isRequired,action:a.a.func},e.a=l},856:function(t,e,n){var r=n(940);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(682)(r,o);r.locals&&(t.exports=r.locals)},936:function(t,e,n){"use strict";var r=n(7),o=n(13),i=n(937),a=function(t){return{openSendReceiveSidePane:function(e,n){t(Object(o.o)(e,n))}}};e.a=Object(r.connect)(null,a)(i.a)},937:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(0),s=n.n(a),c=n(1),u=n.n(c),l=n(855),p=n(80),f=n(847),d=n(856),m=(n.n(d),function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()),h=Object(p.b)("wallet-nav-item"),v=function(t){function e(){var t,n,i,a;r(this,e);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),i.onSendClick=function(){i.onBtnClick(!0)},i.onReceiveClick=function(){i.onBtnClick(!1)},i.onBtnClick=function(t){var e=i.props;(0,e.openSendReceiveSidePane)(t,e.product)},a=n,o(i,a)}return i(e,t),m(e,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{iconName:"send",action:this.onSendClick,tooltipText:this.context.t("Send"),customClass:h()}),s.a.createElement(l.a,{iconName:"receive",action:this.onReceiveClick,tooltipText:this.context.t("Receive"),customClass:h()}))}}]),e}(s.a.Component);v.propTypes={openSendReceiveSidePane:u.a.func.isRequired,product:f.a},v.contextTypes={t:u.a.func.isRequired},e.a=v},938:function(t,e,n){var r=n(939);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(682)(r,o);r.locals&&(t.exports=r.locals)},939:function(t,e,n){e=t.exports=n(26)(!1),e.push([t.i,".icon-button{min-width:4rem;height:4rem;border-radius:4px;color:var(--font__color-secondary);background:var(--primary__bg-color);border:1px solid var(--border-secondary);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer}.icon-button:hover,.icon-button:hover .icon-button__icon{color:var(--font__color-primary)}.icon-button__icon{-ms-flex-negative:0;flex-shrink:0;width:2rem;height:2rem;color:var(--font__color-secondary);-webkit-transition:var(--transition__settings);-o-transition:var(--transition__settings);transition:var(--transition__settings)}",""])},940:function(t,e,n){e=t.exports=n(26)(!1),e.push([t.i,".wallet-nav-item{margin-left:1.2rem;padding:0 1rem}.wallet-nav-item__label{text-transform:capitalize;padding-left:1rem}",""])},941:function(t,e,n){"use strict";var r=n(7),o=n(13),i=n(942),a=function(t){return{openRetailFiatSidePane:function(e,n){t(Object(o.n)(e,n))}}};e.a=Object(r.connect)(null,a)(i.a)},942:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(0),s=n.n(a),c=n(1),u=n.n(c),l=n(855),p=n(80),f=n(856),d=(n.n(f),function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()),m=Object(p.b)("wallet-nav-item"),h=function(t){function e(){var t,n,i,a;r(this,e);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),i.onDepositClick=function(){i.onBtnClick(!0)},i.onWithdrawClick=function(){i.onBtnClick(!1)},i.onBtnClick=function(t){var e=i.props;(0,e.openRetailFiatSidePane)(t,e.product)},a=n,o(i,a)}return i(e,t),d(e,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{iconName:"deposit",action:this.onDepositClick,tooltipText:this.context.t("Deposit"),customClass:m()}),s.a.createElement(l.a,{iconName:"withdraw",action:this.onWithdrawClick,tooltipText:this.context.t("Withdraw"),customClass:m()}))}}]),e}(s.a.Component);h.propTypes={openRetailFiatSidePane:u.a.func.isRequired,product:u.a.shape({iconFileName:u.a.string,ProductFullName:u.a.string,ProductSymbol:u.a.string,ProductId:u.a.number})},h.contextTypes={t:u.a.func.isRequired},e.a=h}});