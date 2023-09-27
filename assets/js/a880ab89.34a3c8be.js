"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[298],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return g}});var i=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,i,o=function(n,e){if(null==n)return{};var t,i,o={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=i.createContext({}),l=function(n){var e=i.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},c=function(n){var e=l(n.components);return i.createElement(s.Provider,{value:e},n.children)},u="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,s=n.parentName,c=p(n,["components","mdxType","originalType","parentName"]),u=l(t),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?i.createElement(g,a(a({ref:e},c),{},{components:t})):i.createElement(g,a({ref:e},c))}));function g(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,a=new Array(r);a[0]=m;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=n,p[u]="string"==typeof n?n:o,a[1]=p;for(var l=2;l<r;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},996:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var i=t(7462),o=t(3366),r=(t(7294),t(3905)),a=["components"],p={id:"opinion",title:"Opinion"},s=void 0,l={unversionedId:"opinion",id:"opinion",title:"Opinion",description:"Get opinions list",source:"@site/docs/opinion.md",sourceDirName:".",slug:"/opinion",permalink:"/sherl-sdk-js/docs/opinion",draft:!1,editUrl:"https://github.com/Winzana/sherl-sdk-js/edit/master/docs/docs/opinion.md",tags:[],version:"current",frontMatter:{id:"opinion",title:"Opinion"},sidebar:"sidebar",previous:{title:"Contact",permalink:"/sherl-sdk-js/docs/contact"},next:{title:"Claim",permalink:"/sherl-sdk-js/docs/claim"}},c={},u=[{value:"Get opinions list",id:"get-opinions-list",level:2},{value:"Create opinion",id:"create-opinion",level:2},{value:"Update opinion status",id:"update-opinion-status",level:2},{value:"Create opinion claim",id:"create-opinion-claim",level:2},{value:"Get opinion average score",id:"get-opinion-average-score",level:2},{value:"Get the opinions given by connected user",id:"get-the-opinions-given-by-connected-user",level:2}],d={toc:u};function m(n){var e=n.components,t=(0,o.Z)(n,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-opinions-list"},"Get opinions list"),(0,r.kt)("p",null,"Retrieve a list of all public opinions, which you can filter with parameters (page, itemsPerPage, ...)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Require authentication\nconst opinions = await opinion(client).getOpinions(filter: IOpinionFilters);\n\n// Public\nconst publicOpinions = await opinion(client).getPublicOpinions(filters: IOpinionFilters);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IOpinionFilters")," extends ",(0,r.kt)("a",{parentName:"p",href:"pagination#pagination-filters"},"PaginationFilters")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface IOpinionFilters {\n  opnionToUri: string;\n}\n")),(0,r.kt)("p",null,"This call returns ",(0,r.kt)("a",{parentName:"p",href:"pagination#pagination"},"paginated")," array of ",(0,r.kt)("a",{parentName:"p",href:"opinion-types#iopinion"},"IOpinion")," objects"),(0,r.kt)("h2",{id:"create-opinion"},"Create opinion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const newOpinion = await opinion(client).createOpinion(data: ICreateOpinionInput);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface ICreateOpinionInput {\n  comment: string;\n  id: string;\n  opinionToUri: string;\n  score: number;\n}\n")),(0,r.kt)("p",null,"This call returns an ",(0,r.kt)("a",{parentName:"p",href:"opinion-types#iopinion"},"IOpinion")," object."),(0,r.kt)("h2",{id:"update-opinion-status"},"Update opinion status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const opinionUpdated = await opinion(client).updateOpinion(opinionId: string, status: IOpinionUpdateStatusInputDto);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface IOpinionUpdateStatusInputDto {\n  status: OpinionStatusEnum;\n  refusedComment?: string;\n}\n\nenum OpinionStatusEnum {\n  PUBLISHED = 'published',\n  REFUSED = 'refused',\n  IS_CLAIMED = 'is_claimed',\n}\n")),(0,r.kt)("p",null,"This call returns an ",(0,r.kt)("a",{parentName:"p",href:"opinion-types#iopinion"},"IOpinion")," object."),(0,r.kt)("h2",{id:"create-opinion-claim"},"Create opinion claim"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const claim = await opinion(client).createOpinionClaim(opinionId: string, data: IClaimOpinionInput);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface IClaimOpinionInput {\n  claimComment: string\n}\n")),(0,r.kt)("p",null,"This call returns an ",(0,r.kt)("a",{parentName:"p",href:"opinion-types#iopinion"},"IOpinion")," object."),(0,r.kt)("h2",{id:"get-opinion-average-score"},"Get opinion average score"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const averageScore = await opinion(client).getOpinionsAverage(opinionToUri: string);\n")),(0,r.kt)("p",null,"This call returns an ",(0,r.kt)("a",{parentName:"p",href:"opinion-types#iaverage"},"IAverage")," object"),(0,r.kt)("h2",{id:"get-the-opinions-given-by-connected-user"},"Get the opinions given by connected user"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const givenOpinions = await opinion(client).getOpinionsIGive(filters: IOpinionFilters);\n")),(0,r.kt)("p",null,"This call returns ",(0,r.kt)("a",{parentName:"p",href:"pagination#pagination"},"paginated")," array of ",(0,r.kt)("a",{parentName:"p",href:"opinion-types#iopinion"},"IOpinion")," objects."))}m.isMDXComponent=!0}}]);