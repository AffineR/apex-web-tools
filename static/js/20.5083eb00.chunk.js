webpackJsonp([20],{1206:function(t,e,r){"use strict";var n=r(0),o=r.n(n),a=r(1207),i=r(80),s=r(1210),c=(r.n(s),Object(i.b)("market-data-cards")),u=function(t){var e=t.level1,r=t.instruments,n=t.products,i=r.map(function(t){var r=t.InstrumentId,i=e[r];if(!i)return null;var s=t.Product1,u=t.Product2,l=n.find(function(t){return t.ProductId===s}),p=n.find(function(t){return t.ProductId===u});return o.a.createElement("div",{key:r,className:c("card")+" container-with-shadow"},o.a.createElement(a.a,{product1:l,product2:p,level1Data:i}))});return o.a.createElement("div",{className:c()},o.a.createElement("div",{className:c("row")},i))};e.a=u},1207:function(t,e,r){"use strict";var n=r(0),o=r.n(n),a=r(1),i=r.n(a),s=r(80),c=r(272),u=r(776),l=r(707),p=r(789),d=r(20),f=r(1208),h=(r.n(f),Object(s.b)("market-data-card")),m=function(t,e){var r=t.product1,n=t.product2,a=t.level1Data,i=t.coin;return o.a.createElement("div",{className:h()},o.a.createElement("div",{className:h("row")},i?o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{iconFileName:r.iconFileName,size:40}),o.a.createElement("div",{className:h("coins-header-text")},r.ProductFullName+" "+r.ProductSymbol)):o.a.createElement(u.a,{label:r.ProductFullName+" / "+n.ProductFullName,text:r.ProductSymbol+"/"+n.ProductSymbol,customClass:h(),classModifiers:"header"})),o.a.createElement("div",{className:h("row")},o.a.createElement(u.a,{label:e.t("Last Price"),text:Object(d.b)(a.LastTradedPx,n.ProductSymbol),customClass:h()}),o.a.createElement(u.a,{label:e.t("24-Hour Change"),text:Object(d.b)(a.Rolling24HrPxChange,n.ProductSymbol),customClass:h(),classModifiers:a.Rolling24HrPxChange>=0?"24h-positive":"24h-negative"})),o.a.createElement("div",{className:h("row")},o.a.createElement(u.a,{label:e.t("24-Hour Change"),text:Object(d.c)(a.Rolling24HrPxChange),customClass:h(),classModifiers:a.Rolling24HrPxChange>=0?"24h-positive":"24h-negative"}),o.a.createElement(u.a,{label:e.t("24-Hour Vol."),text:Object(d.b)(a.Rolling24HrVolume,r.ProductSymbol),customClass:h()})),o.a.createElement("div",{className:h("row")},o.a.createElement(u.a,{label:e.t("24-Hour High"),text:Object(d.b)(a.SessionHigh,n.ProductSymbol),customClass:h()}),o.a.createElement(u.a,{label:e.t("24-Hour Low"),text:Object(d.b)(a.SessionLow,n.ProductSymbol),customClass:h()})),o.a.createElement("div",{className:h("row")},o.a.createElement(u.a,{label:e.t("Bid"),text:Object(d.b)(a.BestBid,n.ProductSymbol),customClass:h(),classModifiers:"bid"}),o.a.createElement(u.a,{label:e.t("Ask"),text:Object(d.b)(a.BestOffer,n.ProductSymbol),customClass:h(),classModifiers:"ask"})),i&&o.a.createElement("div",{className:h("row")},o.a.createElement("div",{className:h("activity"),onClick:function(){}},"View Activity \u2192"),o.a.createElement("div",{className:h("icons")},o.a.createElement("div",{className:h("icon-container"),onClick:function(){}},o.a.createElement(l.a,{name:"buy",customClass:h("icon")})),o.a.createElement("div",{className:h("icon-container"),onClick:function(){}},o.a.createElement(l.a,{name:"sell",customClass:h("icon")})))))};m.propTypes={level1Data:c.b.isRequired,product1:i.a.object.isRequired,product2:i.a.object.isRequired,coin:i.a.bool},m.contextTypes={t:i.a.func.isRequired},e.a=m},1208:function(t,e,r){var n=r(1209);"string"===typeof n&&(n=[[t.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(682)(n,o);n.locals&&(t.exports=n.locals)},1209:function(t,e,r){e=t.exports=r(26)(!1),e.push([t.i,".market-data-card{background:var(--component__bg-color);border-radius:1rem;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around;height:100%}.market-data-card__row{height:6.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding-left:2.5rem;border-bottom:1px solid var(--border__color)}.market-data-card__row:last-child{-webkit-box-shadow:none;box-shadow:none;border-bottom:none}.market-data-card__coins-header-text{font-size:2rem;padding-left:1.8rem;margin-right:auto;color:var(--font__color-primary)}.market-data-card__activity{font-size:1.4rem;color:var(--information__color);cursor:pointer}.market-data-card__icon-container{display:inline-block;border:solid 1px var(--border__color);height:4rem;width:4rem;margin-right:1.6rem;cursor:pointer}.market-data-card__icon{margin-left:10px;margin-top:12px;color:var(--font__color-secondary)}.market-data-card__lwt-container{-ms-flex-direction:column-reverse;flex-direction:column-reverse;width:50%}.market-data-card__lwt-label{padding-top:.2rem;font-size:1.1rem;margin:0;color:var(--font__color-secondary)}.market-data-card__lwt-text{white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;font-size:1.6rem;color:var(--font__color-primary)}.market-data-card__lwt-label--header{color:var(--font__color-secondary)}.market-data-card__lwt-text--header{font-weight:700;font-size:2rem}.market-data-card__lwt-text--bid{color:var(--exchange-colors__buy)}.market-data-card__lwt-text--ask{color:var(--exchange-colors__sell)}.market-data-card__lwt-text--24h-positive{color:var(--exchange-colors__buy)}.market-data-card__lwt-text--24h-negative{color:var(--exchange-colors__sell)}",""])},1210:function(t,e,r){var n=r(1211);"string"===typeof n&&(n=[[t.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(682)(n,o);n.locals&&(t.exports=n.locals)},1211:function(t,e,r){e=t.exports=r(26)(!1),e.push([t.i,".market-data-cards__row{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:center;justify-content:center;margin-top:4rem;max-width:120rem}.market-data-cards__card{width:35rem;height:32rem;margin:0 2rem 4rem;border-radius:1rem;overflow:hidden}",""])},288:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(7),o=r(1206),a=r(795),i=function(t){return{level1:t.level1,instruments:t.instrument.instruments,products:Object(a.d)(t)}};e.default=Object(n.connect)(i)(o.a)},706:function(t,e){function r(){for(var t={},e=0;e<arguments.length;e++){var r=arguments[e];for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])}return t}t.exports=r},707:function(t,e,r){"use strict";var n=r(0),o=r.n(n),a=r(1),i=r.n(a),s=r(713),c=r(80),u=r(724),l=(r.n(u),r(726)),p=r.n(l),d=r(727),f=r.n(d),h=r(728),m=r.n(h),v=r(729),b=r.n(v),g=r(730),w=r.n(g),y=r(731),x=r.n(y),_=r(732),E=r.n(_),O=r(733),R=r.n(O),k=r(734),P=r.n(k),j=r(735),N=r.n(j),C=r(736),S=r.n(C),T=r(737),q=r.n(T),A=r(738),L=r.n(A),H=r(739),M=r.n(H),I=r(740),D=r.n(I),U=r(741),F=r.n(U),z=r(742),B=r.n(z),G=r(743),X=r.n(G),V=r(744),W=r.n(V),$=r(745),J=r.n($),K=r(746),Q=r.n(K),Y=r(747),Z=r.n(Y),tt=r(748),et=r.n(tt),rt=r(749),nt=r.n(rt),ot=r(750),at=r.n(ot),it=r(751),st=r.n(it),ct=r(752),ut=r.n(ct),lt=r(753),pt=r.n(lt),dt=r(754),ft=r.n(dt),ht=r(755),mt=r.n(ht),vt=r(756),bt=r.n(vt),gt=r(757),wt=r.n(gt),yt=r(758),xt=r.n(yt),_t=r(759),Et=r.n(_t),Ot=r(760),Rt=r.n(Ot),kt=r(761),Pt=r.n(kt),jt=r(762),Nt=r.n(jt),Ct=r(763),St=r.n(Ct),Tt=r(764),qt=r.n(Tt),At=r(765),Lt=r.n(At),Ht=r(766),Mt=r.n(Ht),It=r(767),Dt=r.n(It),Ut={"user-settings":et.a,"buy-sell":at.a,user:pt.a,notification:ft.a,dashboard:ut.a,trading:st.a,wallet:nt.a,stop:p.a,balance:f.a,center:m.a,close:b.a,"close-inverse":w.a,"deposit-arrow":x.a,download:F.a,exchange:E.a,"generate-reports":R.a,check:P.a,checkbox:N.a,refresh:S.a,"withdraw-arrow":q.a,menu:L.a,"menu-toggle":M.a,key:D.a,arrowPrevious:B.a,arrowNext:X.a,"simple-check":Z.a,pending:Q.a,settings:J.a,alert:W.a,buy:mt.a,sell:bt.a,eye:wt.a,receive:xt.a,send:Et.a,deposit:Rt.a,withdraw:Pt.a,info:Nt.a,copy:St.a,star:qt.a,"logo-powered":Lt.a,"open-buy":Mt.a,"open-sell":Dt.a},Ft=function(t){var e=t.name,r=t.customClass,n=t.classModifiers,a=Object(c.a)(n,e),i=Object(c.b)(["ap-icon",r]),u=Ut[e];return o.a.createElement(s.a,{src:u,className:i(null,a)})};Ft.defaultProps={name:"",customClass:"custom-icon",classModifiers:"",disabled:!1},Ft.propTypes={name:i.a.string,customClass:i.a.string,classModifiers:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),disabled:i.a.bool},e.a=Ft},708:function(t,e,r){"use strict";function n(t){this.request=t.request,this.xhr=t.xhr,this.headers=t.headers||{},this.status=t.status||0,this.text=t.text,this.body=t.body,this.contentType=t.contentType,this.isHttpError=t.status>=400}var o=r(709),a=r(710);n.prototype.header=o.prototype.header,n.fromRequest=function(t){return new n(a(t))},t.exports=n},709:function(t,e,r){"use strict";function n(t){var e="string"===typeof t?{url:t}:t||{};this.method=e.method?e.method.toUpperCase():"GET",this.url=e.url,this.headers=e.headers||{},this.body=e.body,this.timeout=e.timeout||0,this.errorOn404=null==e.errorOn404||e.errorOn404,this.onload=e.onload,this.onerror=e.onerror}n.prototype.abort=function(){if(!this.aborted)return this.aborted=!0,this.xhr.abort(),this},n.prototype.header=function(t,e){var r;for(r in this.headers)if(this.headers.hasOwnProperty(r)&&t.toLowerCase()===r.toLowerCase()){if(1===arguments.length)return this.headers[r];delete this.headers[r];break}if(null!=e)return this.headers[t]=e,e},t.exports=n},710:function(t,e,r){"use strict";var n=r(706);t.exports=function(t){var e=t.xhr,r={request:t,xhr:e};try{var o,a,i,s={};if(e.getAllResponseHeaders)for(o=e.getAllResponseHeaders().split("\n"),a=0;a<o.length;a++)(i=o[a].match(/\s*([^\s]+):\s+([^\s]+)/))&&(s[i[1]]=i[2]);r=n(r,{status:e.status,contentType:e.contentType||e.getResponseHeader&&e.getResponseHeader("Content-Type"),headers:s,text:e.responseText,body:e.response||e.responseText})}catch(t){}return r}},711:function(t,e,r){"use strict";t.exports=function(t){var e,r=!1;return function(){return r||(r=!0,e=t.apply(this,arguments)),e}}},712:function(t,e,r){var n,o;!function(){"use strict";function r(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=typeof n;if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&t.push(i)}else if("object"===o)for(var s in n)a.call(n,s)&&n[s]&&t.push(s)}}return t.join(" ")}var a={}.hasOwnProperty;"undefined"!==typeof t&&t.exports?(r.default=r,t.exports=r):(n=[],void 0!==(o=function(){return r}.apply(e,n))&&(t.exports=o))}()},713:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=r(0),s=r.n(i),c=r(1),u=r.n(c),l=r(714),p=r.n(l),d=r(719),f=r.n(d),h=r(721),m=function(){function t(t,e){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),b=p.a.use(f.a),g={PENDING:"pending",LOADING:"loading",LOADED:"loaded",FAILED:"failed",UNSUPPORTED:"unsupported"},w={},y={},x=function(t){function e(t){n(this,e);var r=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.handleLoad=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t)return void r.fail(t);r.isActive&&r.setState({loadedText:e.text,status:g.LOADED},function(){r.props.onLoad(r.props.src,n)})},r.state={status:g.PENDING},r.isActive=!1,r}return a(e,t),v(e,[{key:"componentWillMount",value:function(){this.isActive=!0}},{key:"componentDidMount",value:function(){this.state.status===g.PENDING&&(this.props.supportTest()?this.props.src?this.startLoad():this.fail(Object(h.a)("Missing source")):this.fail(Object(h.e)()))}},{key:"componentDidUpdate",value:function(t){t.src!==this.props.src&&(this.props.src?this.startLoad():this.fail(Object(h.a)("Missing source")))}},{key:"componentWillUnmount",value:function(){this.isActive=!1}},{key:"getFile",value:function(t){var e=this,r=this.props,n=r.cacheGetRequests,o=r.src;if(n){if(y[o]){var a=m(y[o],2),i=a[0],s=a[1];t(i,s,!0)}w[o]||(w[o]=[],b.get(o,function(t,r){w[o].forEach(function(n){y[o]=[t,r],o===e.props.src&&n(t,r)})})),w[o].push(t)}else b.get(o,function(r,n){o===e.props.src&&t(r,n)})}},{key:"fail",value:function(t){var e=this,r=t.isUnsupportedBrowserError?g.UNSUPPORTED:g.FAILED;this.isActive&&this.setState({status:r},function(){"function"===typeof e.props.onError&&e.props.onError(t)})}},{key:"startLoad",value:function(){this.isActive&&this.setState({status:g.LOADING},this.load)}},{key:"load",value:function(){var t=this.props.src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);return t?this.handleLoad(null,{text:t[1]?atob(t[2]):decodeURIComponent(t[2])}):this.getFile(this.handleLoad)}},{key:"getClassName",value:function(){var t="isvg "+this.state.status;return this.props.className&&(t+=" "+this.props.className),t}},{key:"processSVG",value:function(t){var e=this.props,r=e.uniquifyIDs,n=e.uniqueHash,o=e.baseURL;return r?Object(h.d)(t,n||Object(h.c)(),o):t}},{key:"renderContents",value:function(){switch(this.state.status){case g.UNSUPPORTED:case g.FAILED:return this.props.children;default:return this.props.preloader}}},{key:"render",value:function(){var t=void 0,e=void 0;return this.state.loadedText?e={__html:this.processSVG(this.state.loadedText)}:t=this.renderContents(),this.props.wrapper({style:this.props.style,className:this.getClassName(),dangerouslySetInnerHTML:e},t)}}]),e}(s.a.PureComponent);x.propTypes={baseURL:u.a.string,cacheGetRequests:u.a.bool,children:u.a.node,className:u.a.string,onError:u.a.func,onLoad:u.a.func,preloader:u.a.node,src:u.a.string.isRequired,style:u.a.object,supportTest:u.a.func,uniqueHash:u.a.string,uniquifyIDs:u.a.bool,wrapper:u.a.func},x.defaultProps={baseURL:"",cacheGetRequests:!1,onLoad:function(){},supportTest:h.b,uniquifyIDs:!0,wrapper:s.a.createFactory("span")},e.a=x},714:function(t,e,r){"use strict";function n(t,e){function r(r,n){var i,u,h,m,v,b;for(r=new p(d(t,r)),a=0;a<e.length;a++)u=e[a],u.processRequest&&u.processRequest(r);for(a=0;a<e.length;a++)if(u=e[a],u.createXHR){i=u.createXHR(r);break}i=i||new s,r.xhr=i,h=f(c(function(t){clearTimeout(v),i.onload=i.onerror=i.onabort=i.onreadystatechange=i.ontimeout=i.onprogress=null;var s=o(r,t),c=s||l.fromRequest(r);for(a=0;a<e.length;a++)u=e[a],u.processResponse&&u.processResponse(c);s&&r.onerror&&r.onerror(s),!s&&r.onload&&r.onload(c),n&&n(s,s?void 0:c)})),b="onload"in i&&"onerror"in i,i.onload=function(){h()},i.onerror=h,i.onabort=function(){h()},i.onreadystatechange=function(){if(4===i.readyState){if(r.aborted)return h();if(!b){var t;try{t=i.status}catch(e){}var e=0===t?new Error("Internal XHR Error"):null;return h(e)}}},i.ontimeout=function(){},i.onprogress=function(){},i.open(r.method,r.url),r.timeout&&(v=setTimeout(function(){r.timedOut=!0,h();try{i.abort()}catch(t){}},r.timeout));for(m in r.headers)r.headers.hasOwnProperty(m)&&i.setRequestHeader(m,r.headers[m]);return i.send(r.body),r}t=t||{},e=e||[];var i,h=["get","post","put","head","patch","delete"];for(a=0;a<h.length;a++)i=h[a],r[i]=function(t){return function(e,n){return e=new p(e),e.method=t,r(e,n)}}(i);return r.plugins=function(){return e},r.defaults=function(r){return r?n(d(t,r),e):t},r.use=function(){var r=Array.prototype.slice.call(arguments,0);return n(t,e.concat(r))},r.bare=function(){return n()},r.Request=p,r.Response=l,r.RequestError=u,r}function o(t,e){if(t.aborted)return h("Request aborted",t,{name:"Abort"});if(t.timedOut)return h("Request timeout",t,{name:"Timeout"});var r,n=t.xhr,o=Math.floor(n.status/100);switch(o){case 0:case 2:if(!e)return;return h(e.message,t);case 4:if(404===n.status&&!t.errorOn404)return;r="Client";break;case 5:r="Server";break;default:r="HTTP"}var a=r+" Error: The server returned a status of "+n.status+' for the request "'+t.method.toUpperCase()+" "+t.url+'"';return h(a,t)}var a,i=r(715),s=r(716),c=r(717),u=r(718),l=r(708),p=r(709),d=r(706),f=r(711),h=u.create;t.exports=n({},[i])},715:function(t,e,r){"use strict";t.exports={processRequest:function(t){t.url=t.url.replace(/[^%]+/g,function(t){return encodeURI(t)})}}},716:function(t,e){t.exports=window.XMLHttpRequest},717:function(t,e,r){"use strict";t.exports=function(t){return function(){var e=Array.prototype.slice.call(arguments,0),r=function(){return t.apply(null,e)};setTimeout(r,0)}}},718:function(t,e,r){"use strict";function n(t,e){var r=new Error(t);r.name="RequestError",this.name=r.name,this.message=r.message,r.stack&&(this.stack=r.stack),this.toString=function(){return this.message};for(var n in e)e.hasOwnProperty(n)&&(this[n]=e[n])}var o=r(708),a=r(710),i=r(706);n.prototype=i(Error.prototype),n.prototype.constructor=n,n.create=function(t,e,r){var i=new n(t,r);return o.call(i,a(e)),i},t.exports=n},719:function(t,e,r){"use strict";var n=r(720),o=r(711),a=!1,i=o(function(){return"undefined"!==typeof window&&null!==window&&window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest});t.exports={createXHR:function(t){var e,r,o;if("undefined"!==typeof window&&null!==window&&(e=n(t.url),r=n(window.location.href),e.host&&(e.protocol!==r.protocol||e.host!==r.host||e.port!==r.port))){if(!a&&t.headers)for(o in t.headers)if(t.headers.hasOwnProperty(o)){a=!0,window&&window.console&&window.console.warn&&window.console.warn("Request headers are ignored in old IE when using the oldiexdomain plugin.");break}if(window.XDomainRequest&&!i()){var s=new window.XDomainRequest;return s.setRequestHeader=function(){},s}}}}},720:function(t,e){(function(){var e,r,n,o={}.hasOwnProperty;e=/^(?:(?:([^:\/?\#]+:)\/+|(\/\/))(?:([a-z0-9-\._~%]+)(?::([a-z0-9-\._~%]+))?@)?(([a-z0-9-\._~%!$&'()*+,;=]+)(?::([0-9]+))?)?)?([^?\#]*?)(\?[^\#]*)?(\#.*)?$/,n=function(t,e){return n.URL.parse(t,e)},n.URL=function(){function t(t){var e,n,a;for(e in r)o.call(r,e)&&(n=r[e],this[e]=null!=(a=t[e])?a:n);this.host||(this.host=this.hostname&&this.port?this.hostname+":"+this.port:this.hostname?this.hostname:""),this.origin||(this.origin=this.protocol?this.protocol+"//"+this.host:""),this.isAbsolutePathRelative=!this.host&&"/"===this.pathname.charAt(0),this.isPathRelative=!this.host&&"/"!==this.pathname.charAt(0),this.isRelative=this.isSchemeRelative||this.isAbsolutePathRelative||this.isPathRelative,this.isAbsolute=!this.isRelative}return t.parse=function(t){var r,o,a;return r=t.toString().match(e),o=r[8]||"",a=r[1],new n.URL({protocol:a,username:r[3],password:r[4],hostname:r[6],port:r[7],pathname:a&&"/"!==o.charAt(0)?"/"+o:o,search:r[9],hash:r[10],isSchemeRelative:null!=r[2]})},t}(),r={protocol:"",username:"",password:"",host:"",hostname:"",port:"",pathname:"",search:"",hash:"",origin:"",isSchemeRelative:!1},t.exports=n}).call(this)},721:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.d(e,"b",function(){return l}),r.d(e,"c",function(){return p}),r.d(e,"d",function(){return d}),r.d(e,"e",function(){return m}),r.d(e,"a",function(){return v});var i=r(722),s=r.n(i),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},u=s()(function(){if(!document)return!1;var t=document.createElement("div");return t.innerHTML="<svg />",t.firstChild&&"http://www.w3.org/2000/svg"===t.firstChild.namespaceURI}),l=s()(function(){return!(!u()||"undefined"===typeof window||null===window)&&(window.XMLHttpRequest||window.XDomainRequest)}),p=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e="abcdefghijklmnopqrstuvwxyz",r=e+e.toUpperCase()+"1234567890",n="",o=0;o<t;o++)n+=function(t){return t[Math.floor(Math.random()*t.length)]}(r);return n},d=function(){var t=function(t){return"(?:(?:\\s|\\:)"+t+")"},e=new RegExp("(?:("+t("id")+')="([^"]+)")|(?:('+t("href")+"|"+t("role")+"|"+t("arcrole")+')="\\#([^"]+)")|(?:="url\\(\\#([^\\)]+)\\)")|(?:url\\(\\#([^\\)]+)\\))',"g");return function(t,r,n){var o=function(t){return t+"___"+r};return t.replace(e,function(t,e,r,a,i,s,c){return r?e+'="'+o(r)+'"':i?a+'="'+n+"#"+o(i)+'"':s?'="url('+n+"#"+o(s)+')"':c?"url("+n+"#"+o(c)+")":void 0})}}(),f=function(t){function e(t){var r;n(this,e);var a=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.name="InlineSVGError",a.isSupportedBrowser=!0,a.isConfigurationError=!1,a.isUnsupportedBrowserError=!1,a.message=t,r=a,o(a,r)}return a(e,t),e}(Error),h=function(t,e){var r=new f(t);return c({},r,e)},m=function(t){var e=t;return e||(e="Unsupported Browser"),h(e,{isSupportedBrowser:!1,isUnsupportedBrowserError:!0})},v=function(t){return h(t,{isConfigurationError:!0})}},722:function(t,e,r){function n(t){var e=function(){return e.called?e.value:(e.called=!0,e.value=t.apply(this,arguments))};return e.called=!1,e}function o(t){var e=function(){if(e.called)throw new Error(e.onceError);return e.called=!0,e.value=t.apply(this,arguments)},r=t.name||"Function wrapped with `once`";return e.onceError=r+" shouldn't be called more than once",e.called=!1,e}var a=r(723);t.exports=a(n),t.exports.strict=a(o),n.proto=n(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return n(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return o(this)},configurable:!0})})},723:function(t,e){function r(t,e){function n(){for(var e=new Array(arguments.length),r=0;r<e.length;r++)e[r]=arguments[r];var n=t.apply(this,e),o=e[e.length-1];return"function"===typeof n&&n!==o&&Object.keys(o).forEach(function(t){n[t]=o[t]}),n}if(t&&e)return r(t)(e);if("function"!==typeof t)throw new TypeError("need wrapper function");return Object.keys(t).forEach(function(e){n[e]=t[e]}),n}t.exports=r},724:function(t,e,r){var n=r(725);"string"===typeof n&&(n=[[t.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(682)(n,o);n.locals&&(t.exports=n.locals)},725:function(t,e,r){e=t.exports=r(26)(!1),e.push([t.i,".ap-icon{display:inline-block;width:10px}.ap-icon--success{color:var(--success)}.ap-icon--info{color:var(--information__color)}.ap-icon--danger{color:var(--danger__color);height:1rem}.ap-icon--big{width:14px}.ap-icon--center{width:12px}.ap-icon--deposit-arrow,.ap-icon--withdraw-arrow{width:11px}.ap-icon--balance,.ap-icon--exchange,.ap-icon--settings{width:16px;margin-top:3px;margin-bottom:-3px}.ap-icon--generate-report{width:12px}.ap-icon--key{width:16px}.ap-icon--menu{width:24px}.ap-icon--refresh{width:15px}.ap-icon--widthraw-arrow{width:11px}",""])},726:function(t,e,r){t.exports=r.p+"static/media/icon-stop.12973336.svg"},727:function(t,e,r){t.exports=r.p+"static/media/icon-balance.25d500b4.svg"},728:function(t,e,r){t.exports=r.p+"static/media/icon-center.d3865558.svg"},729:function(t,e,r){t.exports=r.p+"static/media/icon-close.f5458b61.svg"},730:function(t,e,r){t.exports=r.p+"static/media/icon-close-inverse.241501cd.svg"},731:function(t,e,r){t.exports=r.p+"static/media/icon-deposit-arrow.fb9cee72.svg"},732:function(t,e,r){t.exports=r.p+"static/media/icon-exchange.a6cdeb82.svg"},733:function(t,e,r){t.exports=r.p+"static/media/icon-generate-reports.c25e875a.svg"},734:function(t,e,r){t.exports=r.p+"static/media/icon-check.4443b294.svg"},735:function(t,e,r){t.exports=r.p+"static/media/icon-checkbox.6ff75c6f.svg"},736:function(t,e,r){t.exports=r.p+"static/media/icon-refresh.36718f54.svg"},737:function(t,e,r){t.exports=r.p+"static/media/icon-withdraw-arrow.4644456c.svg"},738:function(t,e,r){t.exports=r.p+"static/media/icon-menu.ff0128f9.svg"},739:function(t,e,r){t.exports=r.p+"static/media/icon-menu-toggle.ad89aeb9.svg"},740:function(t,e,r){t.exports=r.p+"static/media/icon-key.c3b5c80f.svg"},741:function(t,e,r){t.exports=r.p+"static/media/icon-download.ebdd4d2b.svg"},742:function(t,e,r){t.exports=r.p+"static/media/icon-arrow-prev.ec3c7dc9.svg"},743:function(t,e,r){t.exports=r.p+"static/media/icon-arrow-next.02ae871b.svg"},744:function(t,e,r){t.exports=r.p+"static/media/icon-alert.b09e6a92.svg"},745:function(t,e,r){t.exports=r.p+"static/media/icon-settings.d15941a5.svg"},746:function(t,e,r){t.exports=r.p+"static/media/icon-pending.e2938acc.svg"},747:function(t,e,r){t.exports=r.p+"static/media/icon-simple-check.03179922.svg"},748:function(t,e,r){t.exports=r.p+"static/media/icon-nav-settings.18d95955.svg"},749:function(t,e,r){t.exports=r.p+"static/media/icon-nav-wallet.057192aa.svg"},750:function(t,e,r){t.exports=r.p+"static/media/icon-nav-buy-sell.5ff447ad.svg"},751:function(t,e,r){t.exports=r.p+"static/media/icon-nav-trading.6846b323.svg"},752:function(t,e,r){t.exports=r.p+"static/media/icon-nav-dashboard-on.da8d7604.svg"},753:function(t,e,r){t.exports=r.p+"static/media/icon-nav-user.4473673a.svg"},754:function(t,e,r){t.exports=r.p+"static/media/icon-nav-notification.84f07c0e.svg"},755:function(t,e,r){t.exports=r.p+"static/media/icon-buy.4736e26a.svg"},756:function(t,e,r){t.exports=r.p+"static/media/icon-sell.749581f6.svg"},757:function(t,e,r){t.exports=r.p+"static/media/icon-eye.f3c39bfb.svg"},758:function(t,e,r){t.exports=r.p+"static/media/icon-receive.f8805981.svg"},759:function(t,e,r){t.exports=r.p+"static/media/icon-send.0eae48e8.svg"},760:function(t,e,r){t.exports=r.p+"static/media/icon-deposit.59dc6048.svg"},761:function(t,e,r){t.exports=r.p+"static/media/icon-withdraw.ce30850a.svg"},762:function(t,e,r){t.exports=r.p+"static/media/icon-info.6448a8d0.svg"},763:function(t,e,r){t.exports=r.p+"static/media/icon-copy.9dc9a9a7.svg"},764:function(t,e,r){t.exports=r.p+"static/media/icon-star.9e54355c.svg"},765:function(t,e,r){t.exports=r.p+"static/media/logo-powered.7f6a585c.svg"},766:function(t,e,r){t.exports=r.p+"static/media/icon-open-buy-big.ec282aaa.svg"},767:function(t,e,r){t.exports=r.p+"static/media/icon-open-sell-big.04ef7f4d.svg"},776:function(t,e,r){"use strict";var n=r(0),o=r.n(n),a=r(1),i=r.n(a),s=r(712),c=r.n(s),u=r(263),l=r.n(u),p=r(814),d=(r.n(p),new l.a({name:"ap-label-with-text",outputIsString:!0})),f=function(t){var e=t.label,r=t.text,n=t.customClass,a=t.classModifiers,i=new l.a({name:n,outputIsString:!0});return o.a.createElement("div",{className:c()(d(),i("lwt-container",a))},o.a.createElement("label",{className:c()("ap--label",d("label"),i("lwt-label",a))},e),o.a.createElement("span",{className:c()(d("text"),i("lwt-text",a))},r))};f.propTypes={label:i.a.string.isRequired,text:i.a.oneOfType([i.a.string,i.a.number,i.a.object]),customClass:i.a.string,classModifiers:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string),i.a.objectOf(i.a.bool)])},f.defaultProps={customClass:"custom-label-with-text"},e.a=f},789:function(t,e,r){"use strict";var n=r(7),o=r(791),a=function(t,e){return{productManifest:t.productManifest,iconFileName:e.iconFileName,size:e.size||48}};e.a=Object(n.connect)(a)(o.a)},791:function(t,e,r){"use strict";var n=r(0),o=r.n(n),a=r(1),i=r.n(a),s=r(45),c=r(80),u=r(792),l=(r.n(u),Object(c.b)("product-icon")),p=function(t){var e=t.productManifest,r=t.iconFileName,n=t.size,a=void 0===n?48:n,i=t.customClass;return e.fetching?null:(null==r&&console.log(r),r&&r.indexOf("DEFAULT_ICON")>0?d(a,r):o.a.createElement("img",{alt:"product icon",height:a+"px",className:i,src:Object(s.a)("/local/product-icons/"+r)}))},d=function(t,e){return o.a.createElement("div",{className:l(null,"default"),style:{width:t,height:t,MozBorderRadius:t/2,WebkitBorderRadius:t/2,borderRadius:t/2,textAlign:"center",fontSize:.5*t,lineHeight:t+"px"}},o.a.createElement("span",null,e.charAt(0)))};p.propTypes={productManifest:i.a.object.isRequired,iconFileName:i.a.string,size:i.a.number},e.a=p},792:function(t,e,r){var n=r(793);"string"===typeof n&&(n=[[t.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(682)(n,o);n.locals&&(t.exports=n.locals)},793:function(t,e,r){e=t.exports=r(26)(!1),e.push([t.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}",""])},795:function(t,e,r){"use strict";r.d(e,"a",function(){return c}),r.d(e,"d",function(){return l}),r.d(e,"c",function(){return p}),r.d(e,"b",function(){return d}),r.d(e,"e",function(){return f});var n=r(81),o=(r.n(n),r(264)),a=function(t){return t.product.products},i=function(t){return t.position.positions},s=function(t){return t.productManifest.manifest},c=Object(n.createSelector)([function(t){return t.product},function(t){return t.position},function(t){return t.productManifest}],function(t,e,r){return t.fetching||e.fetching||r.fetching}),u=Object(n.createSelector)([a,function(t){return t.product.decimalPlaces},i],function(t,e,r){return t.map(function(t){var n=r[t.ProductId];if(!n)return t;var a=e[t.Product],i=Object(o.a)(n,a);return Object.assign({},i,t)})}),l=Object(n.createSelector)([u,s],function(t,e){return t.map(function(t){var r=e[t.Product]||{iconFileName:t.Product+"DEFAULT_ICON"};return Object.assign({},t,r)})}),p=Object(n.createSelector)([l,function(t,e){return e}],function(t,e){return t.find(function(t){return t.ProductId===e})}),d=Object(n.createSelector)(l,function(t){return t.filter(function(t){return"-"!==t.Amount})}),f=Object(n.createSelector)(l,function(t){return t.filter(function(t){return"-"===t.Amount})})},814:function(t,e,r){var n=r(683);"string"===typeof n&&(n=[[t.i,n,""]]);var o={hmr:!1};o.transform=void 0;r(682)(n,o);n.locals&&(t.exports=n.locals)}});