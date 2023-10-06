"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3274],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9908:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"media",title:"Media"},c=void 0,u={unversionedId:"media",id:"media",title:"Media",description:"Get file by id",source:"@site/docs/media.md",sourceDirName:".",slug:"/media",permalink:"/sherl-sdk-js/docs/media",draft:!1,editUrl:"https://github.com/Winzana/sherl-sdk-js/edit/master/docs/docs/media.md",tags:[],version:"current",frontMatter:{id:"media",title:"Media"},sidebar:"sidebar",previous:{title:"Iam",permalink:"/sherl-sdk-js/docs/iam"},next:{title:"Notification",permalink:"/sherl-sdk-js/docs/notification"}},s={},d=[{value:"Get file by id",id:"get-file-by-id",level:2},{value:"Upload file",id:"upload-file",level:2},{value:"Delete file",id:"delete-file",level:2}],p={toc:d},f="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-file-by-id"},"Get file by id"),(0,i.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,i.kt)("p",null,"Retrieve file informations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const file = await media(client).getFile(query: IMediaQuery);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface IMediaQuery {\n  id: string;\n  domain: string;\n  type?: TypeEnum;\n}\n\nenum TypeEnum {\n  FILE = 'file',\n  MOVIE = 'movie',\n}\n")),(0,i.kt)("p",null,"This call returns an ",(0,i.kt)("a",{parentName:"p",href:"media-types#iimageobject"},"IImageObject")," object."),(0,i.kt)("h2",{id:"upload-file"},"Upload file"),(0,i.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,i.kt)("p",null,"Upload a file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const file = await media(client).uploadFile(formData: FormData, query: IMediaQuery);\n")),(0,i.kt)("p",null,"This call returns an ",(0,i.kt)("a",{parentName:"p",href:"media-types#iimageobject"},"IImageObject")," object."),(0,i.kt)("h2",{id:"delete-file"},"Delete file"),(0,i.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,i.kt)("p",null,"Delete a file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const file = await media(client).deleteFile(mediaId: string);\n")),(0,i.kt)("p",null,"This call returns a string."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Media successfully deleted : ${id}\n")))}m.isMDXComponent=!0}}]);