(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/9aa":function(e,t,n){var r=n("NykK"),u=n("ExA7");e.exports=function(e){return"symbol"==typeof e||u(e)&&"[object Symbol]"==r(e)}},"0JQy":function(e,t){var n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",u="\\ud83c[\\udffb-\\udfff]",o="[^\\ud800-\\udfff]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",i="[\\ud800-\\udbff][\\udc00-\\udfff]",f="(?:"+r+"|"+u+")"+"?",c="[\\ufe0e\\ufe0f]?"+f+("(?:\\u200d(?:"+[o,a,i].join("|")+")[\\ufe0e\\ufe0f]?"+f+")*"),d="(?:"+[o+r+"?",r,a,i,n].join("|")+")",l=RegExp(u+"(?="+u+")|"+d+c,"g");e.exports=function(e){return e.match(l)||[]}},"0ZTe":function(e,t,n){var r=n("wy8a"),u=n("quyA"),o=n("Em2t"),a=n("dt0z");e.exports=function(e){return function(t){t=a(t);var n=u(t)?o(t):void 0,i=n?n[0]:t.charAt(0),f=n?r(n,1).join(""):t.slice(1);return i[e]()+f}}},"3cYt":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"50DI":function(e,t,n){var r=n("sgoq"),u=n("gQMU"),o=r((function(e,t,n){return e+(n?" ":"")+u(t)}));e.exports=o},"6nK8":function(e,t,n){var r=n("dVn5"),u=n("fo6e"),o=n("dt0z"),a=n("9NmV");e.exports=function(e,t,n){return e=o(e),void 0===(t=n?void 0:t)?u(e)?a(e):r(e):e.match(t)||[]}},"9NmV":function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",u="\\d+",o="[\\u2700-\\u27bf]",a="[a-z\\xdf-\\xf6\\xf8-\\xff]",i="[^\\ud800-\\udfff"+n+u+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",d="[A-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:"+a+"|"+i+")",s="(?:"+d+"|"+i+")",x="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",f,c].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),g="(?:"+[o,f,c].join("|")+")"+m,p=RegExp([d+"?"+a+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,d,"$"].join("|")+")",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,d+l,"$"].join("|")+")",d+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",u,g].join("|"),"g");e.exports=function(e){return e.match(p)||[]}},Em2t:function(e,t,n){var r=n("bahg"),u=n("quyA"),o=n("0JQy");e.exports=function(e){return u(e)?o(e):r(e)}},KxBF:function(e,t){e.exports=function(e,t,n){var r=-1,u=e.length;t<0&&(t=-t>u?0:u+t),(n=n>u?u:n)<0&&(n+=u),u=t>n?0:n-t>>>0,t>>>=0;for(var o=Array(u);++r<u;)o[r]=e[r+t];return o}},Nh35:function(e,t,n){"use strict";var r=n("wTIg"),u=n("q1tI"),o=n.n(u),a=n("Wbzz"),i=n("qKvR"),f=Object(r.a)("svg",{target:"e1x199w0"})({name:"1ktqjtu",styles:"padding:0;width:0.6rem;"}),c=function(e){return Object(i.c)(f,{viewBox:"0 0 292.362 292.362"},Object(i.c)("path",{d:"M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424\r C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428\r s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"}))},d=Object(r.a)("div",{target:"ert9h0"})("width:100%;margin:-1.5rem auto 2.5rem;max-width:",(function(e){return e.theme.sizes.maxWidth}),";padding:0 1.5rem;display:flex;flex-flow:row wrap;justify-content:space-between;align-items:baseline;"),l=Object(r.a)(a.Link,{target:"ert9h1"})("background:",(function(e){return e.theme.colors.primary}),";color:white;padding:1rem;border-radius:2px;margin:0 0 0 0.5rem;cursor:pointer;text-decoration:none;transition:0.3s all;&:hover{background:",(function(e){return e.theme.colors.highlight}),";}@media (hover:none){background:",(function(e){return e.theme.colors.primary})," !important;}"),s=Object(r.a)("div",{target:"ert9h2"})("border:1px solid ",(function(e){return e.theme.colors.secondary}),";border-radius:2px;display:inline-block;float:left;color:",(function(e){return e.theme.colors.text}),";padding:1rem;background:white;position:relative;transition:0.3s all;svg{fill:",(function(e){return e.theme.colors.text}),";margin:0 0 0 0.25rem;transition:0.3s all;}&:hover{background:",(function(e){return e.theme.colors.tertiary}),";}@media (hover:none){background:white !important;}"),x=Object(r.a)("select",{target:"ert9h3"})({name:"11hydmf",styles:"font-size:1rem;background:none;border:none;cursor:pointer;position:absolute;width:100%;left:0;right:0;bottom:0;top:0;color:transparent;option{color:black;}"});t.a=function(e){return Object(i.c)(o.a.Fragment,null,e.context.numberOfPages>1&&Object(i.c)(d,null,Object(i.c)(s,null,e.context.humanPageNumber," ",Object(i.c)(x,{value:1===e.context.humanPageNumber?"":e.context.humanPageNumber,onChange:function(t){Object(a.navigate)(t.target.value?e.context.paginationPath+"/"+t.target.value:e.context.paginationPath+"/")}},Array.from({length:e.context.numberOfPages},(function(e,t){return Object(i.c)("option",{value:""+(0===t?"":t+1),key:"page"+(t+1)},t+1)}))),"/ ",e.context.numberOfPages," ",Object(i.c)(c,null)),Object(i.c)("div",null,e.context.previousPagePath&&Object(i.c)(l,{to:""+e.context.previousPagePath},Object(i.c)("span",null,"←")," Poprzednia"),e.context.nextPagePath&&Object(i.c)(l,{style:{order:3},to:""+e.context.nextPagePath},"Następna ",Object(i.c)("span",null,"→")))))}},QS3V:function(e,t,n){"use strict";var r=n("wTIg"),u=n("q1tI"),o=n.n(u),a=n("Wbzz"),i=n("9eSz"),f=n.n(i),c=n("qKvR"),d=["slug","heroImage","title","publishDate","body"],l=Object(r.a)("li",{target:"eafjpzo0"})("position:relative;border:1px solid ",(function(e){return e.theme.colors.secondary}),";border-radius:2px;margin:0 0 1em 0;width:100%;transition:background 0.2s;@media screen and (min-width:",(function(e){return e.theme.responsive.small}),"){flex:",(function(e){return e.featured?"0 0 100%":"0 0 49%"}),";margin:0 0 2vw 0;}@media screen and (min-width:",(function(e){return e.theme.responsive.medium}),"){flex:",(function(e){return e.featured?"0 0 100%":"0 0 32%"}),";}&:hover{background:",(function(e){return e.theme.colors.tertiary}),";}a{display:flex;flex-flow:column;height:100%;width:100%;color:",(function(e){return e.theme.colors.text}),";text-decoration:none;.gatsby-image-wrapper{height:0;padding-bottom:60%;@media screen and (min-width:",(function(e){return e.theme.responsive.small}),"){padding-bottom:",(function(e){return e.featured?"40%":"60%"}),";}}}"),s=Object(r.a)(f.a,{target:"eafjpzo1"})({name:"7x1lap",styles:"border-top-left-radius:1px;border-top-right-radius:1px;"}),x=Object(r.a)("h2",{target:"eafjpzo2"})({name:"1bdwny",styles:"font-size:1.5em;font-weight:600;margin:1rem 1rem 0.5rem 1rem;"}),m=Object(r.a)("h3",{target:"eafjpzo3"})({name:"11mrncz",styles:"margin:0 1rem 0.5rem 1rem;color:gray;"}),g=Object(r.a)("p",{target:"eafjpzo4"})({name:"1sjsmmv",styles:"margin:0 1rem 1rem 1rem;line-height:1.6;"});t.a=function(e){var t=e.slug,n=e.heroImage,r=e.title,u=e.publishDate,i=e.body,f=function(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,d);return Object(c.c)(o.a.Fragment,null,n&&i&&Object(c.c)(l,{featured:f.featured},Object(c.c)(a.Link,{to:f.basePath+"/"+t+"/"},Object(c.c)(s,{fluid:n.fluid,backgroundColor:"#eeeeee"}),Object(c.c)(x,null,r),Object(c.c)(m,null,u),Object(c.c)(g,{dangerouslySetInnerHTML:{__html:i.childMarkdownRemark.excerpt}}))))}},QmZb:function(e,t,n){"use strict";var r=n("wTIg"),u=(n("q1tI"),n("qKvR")),o=Object(r.a)("ul",{target:"el8hqtd0"})({name:"l26jln",styles:"display:flex;flex-flow:row wrap;justify-content:space-between;margin:0 auto;&::after{content:'';flex:0 0 32%;}"});t.a=function(e){return Object(u.c)(o,null,e.children)}},TKrE:function(e,t,n){var r=n("qRkn"),u=n("dt0z"),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=u(e))&&e.replace(o,r).replace(a,"")}},asDA:function(e,t){e.exports=function(e,t,n,r){var u=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++u]);++u<o;)n=t(n,e[u],u,e);return n}},bahg:function(e,t){e.exports=function(e){return e.split("")}},dVn5:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},dt0z:function(e,t,n){var r=n("zoYe");e.exports=function(e){return null==e?"":r(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,u=Array(r);++n<r;)u[n]=t(e[n],n,e);return u}},fo6e:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},gQMU:function(e,t,n){var r=n("0ZTe")("toUpperCase");e.exports=r},qRkn:function(e,t,n){var r=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},quyA:function(e,t){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return n.test(e)}},sgoq:function(e,t,n){var r=n("asDA"),u=n("TKrE"),o=n("6nK8"),a=RegExp("['’]","g");e.exports=function(e){return function(t){return r(o(u(t).replace(a,"")),e,"")}}},wy8a:function(e,t,n){var r=n("KxBF");e.exports=function(e,t,n){var u=e.length;return n=void 0===n?u:n,!t&&n>=u?e:r(e,t,n)}},zoYe:function(e,t,n){var r=n("nmnc"),u=n("eUgh"),o=n("Z0cm"),a=n("/9aa"),i=r?r.prototype:void 0,f=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return u(t,e)+"";if(a(t))return f?f.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}}}]);
//# sourceMappingURL=212ae2af855d65570e31b2d1c3fdec86b52467f3-87779c018275912ebb09.js.map