"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5649],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,f=u["".concat(c,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"loyalty",title:"Loyalty"},c=void 0,s={unversionedId:"shop/loyalty",id:"shop/loyalty",title:"Loyalty",description:"Get loyalty cards (current user connected)",source:"@site/docs/shop/loyalty.md",sourceDirName:"shop",slug:"/shop/loyalty",permalink:"/sherl-sdk-js/docs/shop/loyalty",draft:!1,editUrl:"https://github.com/Winzana/sherl-sdk-js/edit/master/docs/docs/shop/loyalty.md",tags:[],version:"current",frontMatter:{id:"loyalty",title:"Loyalty"},sidebar:"sidebar",previous:{title:"Invoice",permalink:"/sherl-sdk-js/docs/shop/invoice"},next:{title:"Order",permalink:"/sherl-sdk-js/docs/shop/order"}},p={},u=[{value:"Get loyalty cards (current user connected)",id:"get-loyalty-cards-current-user-connected",level:2},{value:"Get organization loyalty card",id:"get-organization-loyalty-card",level:2},{value:"Update loyalty card",id:"update-loyalty-card",level:2}],d={toc:u},y="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(y,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-loyalty-cards-current-user-connected"},"Get loyalty cards (current user connected)"),(0,o.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await shop(client).getLoyaltiesCardToMe(filters?: ILoyaltyCardFindByDto);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface ILoyaltyCardFindByDto extends PaginationFilters {\n  id?: string;\n  uri?: string;\n  ownerUri?: string;\n  ownerUris?: string[];\n  enabled?: boolean;\n}\n")),(0,o.kt)("p",null,"This interface extends ",(0,o.kt)("a",{parentName:"p",href:"../pagination#pagination-filters"},"PaginationFilters")),(0,o.kt)("p",null,"This call returns an ",(0,o.kt)("a",{parentName:"p",href:"../pagination#isearchresult"},"ISearchResult")," of ",(0,o.kt)("a",{parentName:"p",href:"../shop-types#iloyaltycard"},"ILoyaltyCard")," objects."),(0,o.kt)("h2",{id:"get-organization-loyalty-card"},"Get organization loyalty card"),(0,o.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await shop(client).getOrganizationLoyaltyCard(organizationId: string);\n")),(0,o.kt)("p",null,"This call returns an ",(0,o.kt)("a",{parentName:"p",href:"../shop-types#iloyaltycard"},"ILoyaltyCard")," object."),(0,o.kt)("h2",{id:"update-loyalty-card"},"Update loyalty card"),(0,o.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await shop(client).updateLoyaltyCard(cardId: string, updatedCard: IShopLoyaltyCardUpdateInputDto);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface IShopLoyaltyCardUpdateInputDto {\n  amount?: number;\n  discountType: DiscountTypeEnum;\n  percentage?: number;\n  enabled?: boolean;\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../shop-types#discounttypeenum"},"DiscountTypeEnum"),"(",(0,o.kt)("inlineCode",{parentName:"li"},"discountType"),")")),(0,o.kt)("p",null,"This call returns an ",(0,o.kt)("a",{parentName:"p",href:"../shop-types#iloyaltycard"},"ILoyaltyCard")," object."))}f.isMDXComponent=!0}}]);