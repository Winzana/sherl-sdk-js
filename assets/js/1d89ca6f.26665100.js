(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{74:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return c})),t.d(e,"toc",(function(){return l})),t.d(e,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(91)),o={id:"organization",title:"Organization"},c={unversionedId:"organization",id:"organization",isDocsHomePage:!1,title:"Organization",description:"Get organizations list",source:"@site/docs/organization.md",slug:"/organization",permalink:"/sherl-sdk-js/docs/organization",editUrl:"https://github.com/Winzana/sherl-sdk-js/edit/master/docs/docs/organization.md",version:"current",sidebar:"sidebar",previous:{title:"Person",permalink:"/sherl-sdk-js/docs/person"},next:{title:"Order",permalink:"/sherl-sdk-js/docs/order"}},l=[{value:"Get organizations list",id:"get-organizations-list",children:[]},{value:"Get organization by id",id:"get-organization-by-id",children:[]},{value:"Get organization by slug",id:"get-organization-by-slug",children:[]}],s={toc:l};function u(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"get-organizations-list"},"Get organizations list"),Object(i.b)("p",null,"Retrieve organizations list."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// Require authentication\nconst organizations = await Sherl.organization.getOrganizations(1, 10, {\n  /* Filters */\n});\n\n// Public\nconst organizations = await Sherl.organization.getPublicOrganizations(1, 10, {\n  /* Filters */\n});\n")),Object(i.b)("p",null,"Return a paginated array of Organization."),Object(i.b)("h2",{id:"get-organization-by-id"},"Get organization by id"),Object(i.b)("p",null,"Retrieve an organization by ID."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// Require authentication\nconst organization = await Sherl.organization.getOrganization(\n  'organization-id',\n);\n\n// Public\nconst organization = await Sherl.organization.getPublicOrganization(\n  'organization-id',\n);\n")),Object(i.b)("p",null,"Return an Organization."),Object(i.b)("h2",{id:"get-organization-by-slug"},"Get organization by slug"),Object(i.b)("p",null,"Retrieve one organization by slug."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const organization = await Sherl.organization.getPublicOrganizationBySlug(\n  'slug',\n);\n")),Object(i.b)("p",null,"Return an Organization."))}u.isMDXComponent=!0},91:function(n,e,t){"use strict";t.d(e,"a",(function(){return g})),t.d(e,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=a.a.createContext({}),u=function(n){var e=a.a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},g=function(n){var e=u(n.components);return a.a.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},b=a.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,o=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),g=u(t),b=r,d=g["".concat(o,".").concat(b)]||g[b]||p[b]||i;return t?a.a.createElement(d,c(c({ref:e},s),{},{components:t})):a.a.createElement(d,c({ref:e},s))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c.mdxType="string"==typeof n?n:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);