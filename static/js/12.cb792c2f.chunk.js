webpackJsonp([12],{1217:function(t,e,n){var r=n(1218);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(688)(r,o);r.locals&&(t.exports=r.locals)},1218:function(t,e,n){e=t.exports=n(28)(!1),e.push([t.i,".wallet-details-back-button__item{width:100%;-ms-flex-pack:center;justify-content:center;color:var(--link__color)}.wallet-details-back-button--arrowPrevious{margin-right:.75rem}",""])},156:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n.n(r),i=n(1),s=n.n(i),a=n(82),c=n(21),u=n(982),p=n(713),f=n(85),l=n(1217),d=(n.n(l),Object(a.b)("wallet-details-back-button")),h=function(t,e){return o.a.createElement(u.a,{customClass:d(),onItemClick:function(){return e.router.history.push(Object(c.a)(f.h.path))}},o.a.createElement(p.a,{name:"arrowPrevious",customClass:d()})," ",e.t("Back to Overview"))};h.contextTypes={router:s.a.shape({history:s.a.object.isRequired}).isRequired,t:s.a.func.isRequired},e.default=h},711:function(t,e){function n(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])}return t}t.exports=n},713:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(1),s=n.n(i),a=n(721),c=n(82),u=n(735),p=(n.n(u),n(737)),f=n.n(p),l=n(738),d=n.n(l),h=n(739),m=n.n(h),v=n(740),g=n.n(v),w=n(741),b=n.n(w),y=n(742),x=n.n(y),_=n(743),O=n.n(_),R=n(744),E=n.n(R),k=n(745),P=n.n(k),j=n(746),T=n.n(j),q=n(747),C=n.n(q),L=n(748),A=n.n(L),S=n(749),U=n.n(S),D=n(750),I=n.n(D),H=n(751),N=n.n(H),M=n(752),B=n.n(M),G=n(753),X=n.n(G),F=n(754),W=n.n(F),z=n(755),V=n.n(z),$=n(756),J=n.n($),K=n(757),Q=n.n(K),Y=n(758),Z=n.n(Y),tt=n(759),et=n.n(tt),nt=n(760),rt=n.n(nt),ot=n(761),it=n.n(ot),st=n(762),at=n.n(st),ct=n(763),ut=n.n(ct),pt=n(764),ft=n.n(pt),lt=n(765),dt=n.n(lt),ht=n(766),mt=n.n(ht),vt=n(767),gt=n.n(vt),wt=n(768),bt=n.n(wt),yt=n(769),xt=n.n(yt),_t=n(770),Ot=n.n(_t),Rt=n(771),Et=n.n(Rt),kt=n(772),Pt=n.n(kt),jt=n(773),Tt=n.n(jt),qt=n(774),Ct=n.n(qt),Lt=n(775),At=n.n(Lt),St=n(776),Ut=n.n(St),Dt=n(777),It=n.n(Dt),Ht=n(778),Nt=n.n(Ht),Mt=n(779),Bt=n.n(Mt),Gt=n(780),Xt=n.n(Gt),Ft=n(781),Wt=n.n(Ft),zt=n(782),Vt=n.n(zt),$t={"user-settings":rt.a,"buy-sell":at.a,user:dt.a,notification:mt.a,dashboard:ft.a,trading:ut.a,wallet:it.a,stop:f.a,balance:d.a,center:m.a,close:g.a,"close-inverse":b.a,"deposit-arrow":x.a,download:X.a,exchange:O.a,"generate-reports":E.a,check:P.a,checkbox:T.a,refresh:C.a,"withdraw-arrow":A.a,menu:U.a,"menu-toggle":I.a,key:N.a,bigKey:B.a,arrowPrevious:W.a,arrowNext:V.a,"simple-check":et.a,pending:Z.a,settings:Q.a,alert:J.a,buy:gt.a,sell:bt.a,eye:xt.a,receive:Ot.a,receiveWithBorder:Et.a,send:Pt.a,sendWithBorder:Tt.a,deposit:Ct.a,withdraw:At.a,withdrawWithBorder:Ut.a,info:It.a,copy:Nt.a,star:Bt.a,"logo-powered":Xt.a,"open-buy":Wt.a,"open-sell":Vt.a},Jt=function(t){var e=t.name,n=t.customClass,r=t.classModifiers,i=Object(c.a)(r,e),s=Object(c.b)(["ap-icon",n]),u=$t[e];return o.a.createElement(a.a,{src:u,className:s(null,i)})};Jt.defaultProps={name:"",customClass:"custom-icon",classModifiers:"",disabled:!1},Jt.propTypes={name:s.a.string,customClass:s.a.string,classModifiers:s.a.oneOfType([s.a.string,s.a.arrayOf(s.a.string)]),disabled:s.a.bool},e.a=Jt},716:function(t,e,n){"use strict";function r(t){this.request=t.request,this.xhr=t.xhr,this.headers=t.headers||{},this.status=t.status||0,this.text=t.text,this.body=t.body,this.contentType=t.contentType,this.isHttpError=t.status>=400}var o=n(717),i=n(718);r.prototype.header=o.prototype.header,r.fromRequest=function(t){return new r(i(t))},t.exports=r},717:function(t,e,n){"use strict";function r(t){var e="string"===typeof t?{url:t}:t||{};this.method=e.method?e.method.toUpperCase():"GET",this.url=e.url,this.headers=e.headers||{},this.body=e.body,this.timeout=e.timeout||0,this.errorOn404=null==e.errorOn404||e.errorOn404,this.onload=e.onload,this.onerror=e.onerror}r.prototype.abort=function(){if(!this.aborted)return this.aborted=!0,this.xhr.abort(),this},r.prototype.header=function(t,e){var n;for(n in this.headers)if(this.headers.hasOwnProperty(n)&&t.toLowerCase()===n.toLowerCase()){if(1===arguments.length)return this.headers[n];delete this.headers[n];break}if(null!=e)return this.headers[t]=e,e},t.exports=r},718:function(t,e,n){"use strict";var r=n(711);t.exports=function(t){var e=t.xhr,n={request:t,xhr:e};try{var o,i,s,a={};if(e.getAllResponseHeaders)for(o=e.getAllResponseHeaders().split("\n"),i=0;i<o.length;i++)(s=o[i].match(/\s*([^\s]+):\s+([^\s]+)/))&&(a[s[1]]=s[2]);n=r(n,{status:e.status,contentType:e.contentType||e.getResponseHeader&&e.getResponseHeader("Content-Type"),headers:a,text:e.responseText,body:e.response||e.responseText})}catch(t){}return n}},719:function(t,e,n){"use strict";t.exports=function(t){var e,n=!1;return function(){return n||(n=!0,e=t.apply(this,arguments)),e}}},721:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=n(0),a=n.n(s),c=n(1),u=n.n(c),p=n(722),f=n.n(p),l=n(727),d=n.n(l),h=n(729),m=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),g=f.a.use(d.a),w={PENDING:"pending",LOADING:"loading",LOADED:"loaded",FAILED:"failed",UNSUPPORTED:"unsupported"},b={},y={},x=function(t){function e(t){r(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.handleLoad=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t)return void n.fail(t);n.isActive&&n.setState({loadedText:e.text,status:w.LOADED},function(){n.props.onLoad(n.props.src,r)})},n.state={status:w.PENDING},n.isActive=!1,n}return i(e,t),v(e,[{key:"componentWillMount",value:function(){this.isActive=!0}},{key:"componentDidMount",value:function(){this.state.status===w.PENDING&&(this.props.supportTest()?this.props.src?this.startLoad():this.fail(Object(h.a)("Missing source")):this.fail(Object(h.e)()))}},{key:"componentDidUpdate",value:function(t){t.src!==this.props.src&&(this.props.src?this.startLoad():this.fail(Object(h.a)("Missing source")))}},{key:"componentWillUnmount",value:function(){this.isActive=!1}},{key:"getFile",value:function(t){var e=this,n=this.props,r=n.cacheGetRequests,o=n.src;if(r){if(y[o]){var i=m(y[o],2),s=i[0],a=i[1];t(s,a,!0)}b[o]||(b[o]=[],g.get(o,function(t,n){b[o].forEach(function(r){y[o]=[t,n],o===e.props.src&&r(t,n)})})),b[o].push(t)}else g.get(o,function(n,r){o===e.props.src&&t(n,r)})}},{key:"fail",value:function(t){var e=this,n=t.isUnsupportedBrowserError?w.UNSUPPORTED:w.FAILED;this.isActive&&this.setState({status:n},function(){"function"===typeof e.props.onError&&e.props.onError(t)})}},{key:"startLoad",value:function(){this.isActive&&this.setState({status:w.LOADING},this.load)}},{key:"load",value:function(){var t=this.props.src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);return t?this.handleLoad(null,{text:t[1]?atob(t[2]):decodeURIComponent(t[2])}):this.getFile(this.handleLoad)}},{key:"getClassName",value:function(){var t="isvg "+this.state.status;return this.props.className&&(t+=" "+this.props.className),t}},{key:"processSVG",value:function(t){var e=this.props,n=e.uniquifyIDs,r=e.uniqueHash,o=e.baseURL;return n?Object(h.d)(t,r||Object(h.c)(),o):t}},{key:"renderContents",value:function(){switch(this.state.status){case w.UNSUPPORTED:case w.FAILED:return this.props.children;default:return this.props.preloader}}},{key:"render",value:function(){var t=void 0,e=void 0;return this.state.loadedText?e={__html:this.processSVG(this.state.loadedText)}:t=this.renderContents(),this.props.wrapper({style:this.props.style,className:this.getClassName(),dangerouslySetInnerHTML:e},t)}}]),e}(a.a.PureComponent);x.propTypes={baseURL:u.a.string,cacheGetRequests:u.a.bool,children:u.a.node,className:u.a.string,onError:u.a.func,onLoad:u.a.func,preloader:u.a.node,src:u.a.string.isRequired,style:u.a.object,supportTest:u.a.func,uniqueHash:u.a.string,uniquifyIDs:u.a.bool,wrapper:u.a.func},x.defaultProps={baseURL:"",cacheGetRequests:!1,onLoad:function(){},supportTest:h.b,uniquifyIDs:!0,wrapper:a.a.createFactory("span")},e.a=x},722:function(t,e,n){"use strict";function r(t,e){function n(n,r){var s,u,h,m,v,g;for(n=new f(l(t,n)),i=0;i<e.length;i++)u=e[i],u.processRequest&&u.processRequest(n);for(i=0;i<e.length;i++)if(u=e[i],u.createXHR){s=u.createXHR(n);break}s=s||new a,n.xhr=s,h=d(c(function(t){clearTimeout(v),s.onload=s.onerror=s.onabort=s.onreadystatechange=s.ontimeout=s.onprogress=null;var a=o(n,t),c=a||p.fromRequest(n);for(i=0;i<e.length;i++)u=e[i],u.processResponse&&u.processResponse(c);a&&n.onerror&&n.onerror(a),!a&&n.onload&&n.onload(c),r&&r(a,a?void 0:c)})),g="onload"in s&&"onerror"in s,s.onload=function(){h()},s.onerror=h,s.onabort=function(){h()},s.onreadystatechange=function(){if(4===s.readyState){if(n.aborted)return h();if(!g){var t;try{t=s.status}catch(e){}var e=0===t?new Error("Internal XHR Error"):null;return h(e)}}},s.ontimeout=function(){},s.onprogress=function(){},s.open(n.method,n.url),n.timeout&&(v=setTimeout(function(){n.timedOut=!0,h();try{s.abort()}catch(t){}},n.timeout));for(m in n.headers)n.headers.hasOwnProperty(m)&&s.setRequestHeader(m,n.headers[m]);return s.send(n.body),n}t=t||{},e=e||[];var s,h=["get","post","put","head","patch","delete"];for(i=0;i<h.length;i++)s=h[i],n[s]=function(t){return function(e,r){return e=new f(e),e.method=t,n(e,r)}}(s);return n.plugins=function(){return e},n.defaults=function(n){return n?r(l(t,n),e):t},n.use=function(){var n=Array.prototype.slice.call(arguments,0);return r(t,e.concat(n))},n.bare=function(){return r()},n.Request=f,n.Response=p,n.RequestError=u,n}function o(t,e){if(t.aborted)return h("Request aborted",t,{name:"Abort"});if(t.timedOut)return h("Request timeout",t,{name:"Timeout"});var n,r=t.xhr,o=Math.floor(r.status/100);switch(o){case 0:case 2:if(!e)return;return h(e.message,t);case 4:if(404===r.status&&!t.errorOn404)return;n="Client";break;case 5:n="Server";break;default:n="HTTP"}var i=n+" Error: The server returned a status of "+r.status+' for the request "'+t.method.toUpperCase()+" "+t.url+'"';return h(i,t)}var i,s=n(723),a=n(724),c=n(725),u=n(726),p=n(716),f=n(717),l=n(711),d=n(719),h=u.create;t.exports=r({},[s])},723:function(t,e,n){"use strict";t.exports={processRequest:function(t){t.url=t.url.replace(/[^%]+/g,function(t){return encodeURI(t)})}}},724:function(t,e){t.exports=window.XMLHttpRequest},725:function(t,e,n){"use strict";t.exports=function(t){return function(){var e=Array.prototype.slice.call(arguments,0),n=function(){return t.apply(null,e)};setTimeout(n,0)}}},726:function(t,e,n){"use strict";function r(t,e){var n=new Error(t);n.name="RequestError",this.name=n.name,this.message=n.message,n.stack&&(this.stack=n.stack),this.toString=function(){return this.message};for(var r in e)e.hasOwnProperty(r)&&(this[r]=e[r])}var o=n(716),i=n(718),s=n(711);r.prototype=s(Error.prototype),r.prototype.constructor=r,r.create=function(t,e,n){var s=new r(t,n);return o.call(s,i(e)),s},t.exports=r},727:function(t,e,n){"use strict";var r=n(728),o=n(719),i=!1,s=o(function(){return"undefined"!==typeof window&&null!==window&&window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest});t.exports={createXHR:function(t){var e,n,o;if("undefined"!==typeof window&&null!==window&&(e=r(t.url),n=r(window.location.href),e.host&&(e.protocol!==n.protocol||e.host!==n.host||e.port!==n.port))){if(!i&&t.headers)for(o in t.headers)if(t.headers.hasOwnProperty(o)){i=!0,window&&window.console&&window.console.warn&&window.console.warn("Request headers are ignored in old IE when using the oldiexdomain plugin.");break}if(window.XDomainRequest&&!s()){var a=new window.XDomainRequest;return a.setRequestHeader=function(){},a}}}}},728:function(t,e){(function(){var e,n,r,o={}.hasOwnProperty;e=/^(?:(?:([^:\/?\#]+:)\/+|(\/\/))(?:([a-z0-9-\._~%]+)(?::([a-z0-9-\._~%]+))?@)?(([a-z0-9-\._~%!$&'()*+,;=]+)(?::([0-9]+))?)?)?([^?\#]*?)(\?[^\#]*)?(\#.*)?$/,r=function(t,e){return r.URL.parse(t,e)},r.URL=function(){function t(t){var e,r,i;for(e in n)o.call(n,e)&&(r=n[e],this[e]=null!=(i=t[e])?i:r);this.host||(this.host=this.hostname&&this.port?this.hostname+":"+this.port:this.hostname?this.hostname:""),this.origin||(this.origin=this.protocol?this.protocol+"//"+this.host:""),this.isAbsolutePathRelative=!this.host&&"/"===this.pathname.charAt(0),this.isPathRelative=!this.host&&"/"!==this.pathname.charAt(0),this.isRelative=this.isSchemeRelative||this.isAbsolutePathRelative||this.isPathRelative,this.isAbsolute=!this.isRelative}return t.parse=function(t){var n,o,i;return n=t.toString().match(e),o=n[8]||"",i=n[1],new r.URL({protocol:i,username:n[3],password:n[4],hostname:n[6],port:n[7],pathname:i&&"/"!==o.charAt(0)?"/"+o:o,search:n[9],hash:n[10],isSchemeRelative:null!=n[2]})},t}(),n={protocol:"",username:"",password:"",host:"",hostname:"",port:"",pathname:"",search:"",hash:"",origin:"",isSchemeRelative:!1},t.exports=r}).call(this)},729:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"b",function(){return p}),n.d(e,"c",function(){return f}),n.d(e,"d",function(){return l}),n.d(e,"e",function(){return m}),n.d(e,"a",function(){return v});var s=n(730),a=n.n(s),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=a()(function(){if(!document)return!1;var t=document.createElement("div");return t.innerHTML="<svg />",t.firstChild&&"http://www.w3.org/2000/svg"===t.firstChild.namespaceURI}),p=a()(function(){return!(!u()||"undefined"===typeof window||null===window)&&(window.XMLHttpRequest||window.XDomainRequest)}),f=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e="abcdefghijklmnopqrstuvwxyz",n=e+e.toUpperCase()+"1234567890",r="",o=0;o<t;o++)r+=function(t){return t[Math.floor(Math.random()*t.length)]}(n);return r},l=function(){var t=function(t){return"(?:(?:\\s|\\:)"+t+")"},e=new RegExp("(?:("+t("id")+')="([^"]+)")|(?:('+t("href")+"|"+t("role")+"|"+t("arcrole")+')="\\#([^"]+)")|(?:="url\\(\\#([^\\)]+)\\)")|(?:url\\(\\#([^\\)]+)\\))',"g");return function(t,n,r){var o=function(t){return t+"___"+n};return t.replace(e,function(t,e,n,i,s,a,c){return n?e+'="'+o(n)+'"':s?i+'="'+r+"#"+o(s)+'"':a?'="url('+r+"#"+o(a)+')"':c?"url("+r+"#"+o(c)+")":void 0})}}(),d=function(t){function e(t){var n;r(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.name="InlineSVGError",i.isSupportedBrowser=!0,i.isConfigurationError=!1,i.isUnsupportedBrowserError=!1,i.message=t,n=i,o(i,n)}return i(e,t),e}(Error),h=function(t,e){var n=new d(t);return c({},n,e)},m=function(t){var e=t;return e||(e="Unsupported Browser"),h(e,{isSupportedBrowser:!1,isUnsupportedBrowserError:!0})},v=function(t){return h(t,{isConfigurationError:!0})}},730:function(t,e,n){function r(t){var e=function(){return e.called?e.value:(e.called=!0,e.value=t.apply(this,arguments))};return e.called=!1,e}function o(t){var e=function(){if(e.called)throw new Error(e.onceError);return e.called=!0,e.value=t.apply(this,arguments)},n=t.name||"Function wrapped with `once`";return e.onceError=n+" shouldn't be called more than once",e.called=!1,e}var i=n(731);t.exports=i(r),t.exports.strict=i(o),r.proto=r(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return r(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return o(this)},configurable:!0})})},731:function(t,e){function n(t,e){function r(){for(var e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n];var r=t.apply(this,e),o=e[e.length-1];return"function"===typeof r&&r!==o&&Object.keys(o).forEach(function(t){r[t]=o[t]}),r}if(t&&e)return n(t)(e);if("function"!==typeof t)throw new TypeError("need wrapper function");return Object.keys(t).forEach(function(e){r[e]=t[e]}),r}t.exports=n},735:function(t,e,n){var r=n(736);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(688)(r,o);r.locals&&(t.exports=r.locals)},736:function(t,e,n){e=t.exports=n(28)(!1),e.push([t.i,".ap-icon{display:inline-block;width:10px}.ap-icon--success{color:var(--success)}.ap-icon--info{color:var(--information__color)}.ap-icon--danger{color:var(--danger__color);height:1rem}.ap-icon--big{width:14px}.ap-icon--center{width:12px}.ap-icon--deposit-arrow,.ap-icon--withdraw-arrow{width:11px}.ap-icon--balance,.ap-icon--exchange,.ap-icon--settings{width:16px;margin-top:3px;margin-bottom:-3px}.ap-icon--generate-report{width:12px}.ap-icon--key{width:16px}.ap-icon--menu{width:24px}.ap-icon--refresh{width:15px}.ap-icon--widthraw-arrow{width:11px}",""])},737:function(t,e,n){t.exports=n.p+"static/media/icon-stop.12973336.svg"},738:function(t,e,n){t.exports=n.p+"static/media/icon-balance.25d500b4.svg"},739:function(t,e,n){t.exports=n.p+"static/media/icon-center.d3865558.svg"},740:function(t,e,n){t.exports=n.p+"static/media/icon-close.f5458b61.svg"},741:function(t,e,n){t.exports=n.p+"static/media/icon-close-inverse.241501cd.svg"},742:function(t,e,n){t.exports=n.p+"static/media/icon-deposit-arrow.fb9cee72.svg"},743:function(t,e,n){t.exports=n.p+"static/media/icon-exchange.a6cdeb82.svg"},744:function(t,e,n){t.exports=n.p+"static/media/icon-generate-reports.c25e875a.svg"},745:function(t,e,n){t.exports=n.p+"static/media/icon-check.4443b294.svg"},746:function(t,e,n){t.exports=n.p+"static/media/icon-checkbox.6ff75c6f.svg"},747:function(t,e,n){t.exports=n.p+"static/media/icon-refresh.36718f54.svg"},748:function(t,e,n){t.exports=n.p+"static/media/icon-withdraw-arrow.4644456c.svg"},749:function(t,e,n){t.exports=n.p+"static/media/icon-menu.ff0128f9.svg"},750:function(t,e,n){t.exports=n.p+"static/media/icon-menu-toggle.ad89aeb9.svg"},751:function(t,e,n){t.exports=n.p+"static/media/icon-key.c3b5c80f.svg"},752:function(t,e,n){t.exports=n.p+"static/media/icon-key-big.0d56bc9b.svg"},753:function(t,e,n){t.exports=n.p+"static/media/icon-download.ebdd4d2b.svg"},754:function(t,e,n){t.exports=n.p+"static/media/icon-arrow-prev.ec3c7dc9.svg"},755:function(t,e,n){t.exports=n.p+"static/media/icon-arrow-next.02ae871b.svg"},756:function(t,e,n){t.exports=n.p+"static/media/icon-alert.b09e6a92.svg"},757:function(t,e,n){t.exports=n.p+"static/media/icon-settings.d15941a5.svg"},758:function(t,e,n){t.exports=n.p+"static/media/icon-pending.e2938acc.svg"},759:function(t,e,n){t.exports=n.p+"static/media/icon-simple-check.03179922.svg"},760:function(t,e,n){t.exports=n.p+"static/media/icon-nav-settings.18d95955.svg"},761:function(t,e,n){t.exports=n.p+"static/media/icon-nav-wallet.057192aa.svg"},762:function(t,e,n){t.exports=n.p+"static/media/icon-nav-buy-sell.5ff447ad.svg"},763:function(t,e,n){t.exports=n.p+"static/media/icon-nav-trading.6846b323.svg"},764:function(t,e,n){t.exports=n.p+"static/media/icon-nav-dashboard-on.da8d7604.svg"},765:function(t,e,n){t.exports=n.p+"static/media/icon-nav-user.4473673a.svg"},766:function(t,e,n){t.exports=n.p+"static/media/icon-nav-notification.84f07c0e.svg"},767:function(t,e,n){t.exports=n.p+"static/media/icon-buy.4736e26a.svg"},768:function(t,e,n){t.exports=n.p+"static/media/icon-sell.749581f6.svg"},769:function(t,e,n){t.exports=n.p+"static/media/icon-eye.f3c39bfb.svg"},770:function(t,e,n){t.exports=n.p+"static/media/icon-receive.f8805981.svg"},771:function(t,e,n){t.exports=n.p+"static/media/icon-receive-with-border.51998985.svg"},772:function(t,e,n){t.exports=n.p+"static/media/icon-send.0eae48e8.svg"},773:function(t,e,n){t.exports=n.p+"static/media/icon-send-with-border.d2690259.svg"},774:function(t,e,n){t.exports=n.p+"static/media/icon-deposit.361361b7.svg"},775:function(t,e,n){t.exports=n.p+"static/media/icon-withdraw.aa1ee13f.svg"},776:function(t,e,n){t.exports=n.p+"static/media/icon-withdraw-with-border.e6866da7.svg"},777:function(t,e,n){t.exports=n.p+"static/media/icon-info.6448a8d0.svg"},778:function(t,e,n){t.exports=n.p+"static/media/icon-copy.9dc9a9a7.svg"},779:function(t,e,n){t.exports=n.p+"static/media/icon-star.9e54355c.svg"},780:function(t,e,n){t.exports=n.p+"static/media/logo-powered.7f6a585c.svg"},781:function(t,e,n){t.exports=n.p+"static/media/icon-open-buy-big.ec282aaa.svg"},782:function(t,e,n){t.exports=n.p+"static/media/icon-open-sell-big.04ef7f4d.svg"},958:function(t,e,n){var r=n(983);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(688)(r,o);r.locals&&(t.exports=r.locals)},982:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=n(0),a=n.n(s),c=n(1),u=n.n(c),p=n(82),f=n(958),l=(n.n(f),function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()),d="menu-component",h=function(t){function e(){var t,n,i,s;r(this,e);for(var a=arguments.length,c=Array(a),u=0;u<a;u++)c[u]=arguments[u];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),i.getBEMClasses=function(){return Object(p.b)(d,i.props.customClass)},s=n,o(i,s)}return i(e,t),l(e,[{key:"render",value:function(){var t=this.getBEMClasses();return a.a.createElement("li",{className:t("item",this.props.selected&&"selected"),onClick:this.props.onItemClick},this.props.children)}}]),e}(a.a.Component);h.propTypes={onItemClick:u.a.func.isRequired,selected:u.a.bool,customClass:u.a.string},e.a=h},983:function(t,e,n){e=t.exports=n(28)(!1),e.push([t.i,".menu-component{-ms-flex:1 1;flex:1 1;overflow:auto}.menu-component__list{padding:0;margin:0}.menu-component__item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-bottom:solid 1px var(--side-menu__item-separator-color);border-left:4px solid transparent;width:var(--side-menu__item-width);height:var(--side-menu__item-height);padding:0 2rem 0 .75rem;cursor:pointer}.menu-component__item:active,.menu-component__item:hover{background:var(--side-menu__item-bg-color--hover)}.menu-component__item--selected,.menu-component__item--selected:hover,.menu-component__item:active{background:var(--side-menu__item-bg-color--selected)}",""])}});