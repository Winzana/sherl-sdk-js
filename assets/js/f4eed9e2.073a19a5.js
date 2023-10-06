"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[985],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1505:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={id:"quotas",title:"Quotas"},s=void 0,c={unversionedId:"quotas",id:"quotas",title:"Quotas",description:"Find Quota with filter",source:"@site/docs/quotas.md",sourceDirName:".",slug:"/quotas",permalink:"/sherl-sdk-js/docs/quotas",draft:!1,editUrl:"https://github.com/Winzana/sherl-sdk-js/edit/master/docs/docs/quotas.md",tags:[],version:"current",frontMatter:{id:"quotas",title:"Quotas"},sidebar:"sidebar",previous:{title:"Place",permalink:"/sherl-sdk-js/docs/place"},next:{title:"Search",permalink:"/sherl-sdk-js/docs/search"}},l={},p=[{value:"Find Quota with filter",id:"find-quota-with-filter",level:2}],f={toc:p},d="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(d,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"find-quota-with-filter"},"Find Quota with filter"),(0,o.kt)("p",null,"Get Quota information by using a filter or not."),(0,o.kt)("span",{class:"badge badge--warning"},"Required authentication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await quota(client).getQuotaFindByOne(filters?: IQuotaFilter);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IQuotaFilter")," extends ",(0,o.kt)("a",{parentName:"p",href:"pagination#pagination-filters"},"PaginationFilters")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface IQuotaFilter extends PaginationFilters {\n  page?: number;\n  itemsPerPage?: number;\n  id: number;\n  uri: string;\n  consumerId: string;\n  ownerUri: string;\n}\n")),(0,o.kt)("p",null,"This call returns an ",(0,o.kt)("a",{parentName:"p",href:"./quotas-types#iquota"},"IQuota")," object."))}m.isMDXComponent=!0}}]);