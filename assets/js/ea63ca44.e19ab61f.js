"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[439],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=r.createContext({}),c=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},u=function(n){var e=c(n.components);return r.createElement(l.Provider,{value:e},n.children)},g="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,l=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),g=c(t),m=a,d=g["".concat(l,".").concat(m)]||g[m]||p[m]||i;return t?r.createElement(d,o(o({ref:e},u),{},{components:t})):r.createElement(d,o({ref:e},u))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[g]="string"==typeof n?n:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return g}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={id:"organization-roaming",title:"Roaming"},l=void 0,c={unversionedId:"organization/organization-roaming",id:"organization/organization-roaming",title:"Roaming",description:"This page list all actions available on organization's roaming management.",source:"@site/docs/organization/roaming.md",sourceDirName:"organization",slug:"/organization/organization-roaming",permalink:"/sherl-sdk-js/docs/organization/organization-roaming",draft:!1,editUrl:"https://github.com/Winzana/sherl-sdk-js/edit/master/docs/docs/organization/roaming.md",tags:[],version:"current",frontMatter:{id:"organization-roaming",title:"Roaming"},sidebar:"sidebar",previous:{title:"RIB",permalink:"/sherl-sdk-js/docs/organization/organization-rib"},next:{title:"Address",permalink:"/sherl-sdk-js/docs/person/person-address"}},u={},g=[{value:"Enable roaming",id:"enable-roaming",level:2},{value:"Disable roaming",id:"disable-roaming",level:2}],p={toc:g},m="wrapper";function d(n){var e=n.components,t=(0,a.Z)(n,o);return(0,i.kt)(m,(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page list all actions available on organization's roaming management."),(0,i.kt)("h2",{id:"enable-roaming"},"Enable roaming"),(0,i.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await organization(client).enableRoaming(organizationId: string);\n")),(0,i.kt)("p",null,"This call returns an ",(0,i.kt)("a",{parentName:"p",href:"../organization-types#iorganizationresponse"},"IOrganizationResponse")," object."),(0,i.kt)("h2",{id:"disable-roaming"},"Disable roaming"),(0,i.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await organization(client).disableRoaming(organizationId: string);\n")),(0,i.kt)("p",null,"This call returns an ",(0,i.kt)("a",{parentName:"p",href:"../organization-types#iorganizationresponse"},"IOrganizationResponse")," object."))}d.isMDXComponent=!0}}]);