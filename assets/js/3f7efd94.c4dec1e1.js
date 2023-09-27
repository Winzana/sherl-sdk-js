"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[183],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3620:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),s=["components"],o={id:"person-types",title:"Person types"},l=void 0,c={unversionedId:"person-types",id:"person-types",title:"Person types",description:"In all the interfaces you will find, it's possible that some properties inherit from interfaces from other domains.",source:"@site/docs/person-types.md",sourceDirName:".",slug:"/person-types",permalink:"/sherl-sdk-js/docs/person-types",draft:!1,editUrl:"https://github.com/Winzana/sherl-sdk-js/edit/master/docs/docs/person-types.md",tags:[],version:"current",frontMatter:{id:"person-types",title:"Person types"},sidebar:"sidebar",previous:{title:"Shop types",permalink:"/sherl-sdk-js/docs/shop-types"}},p={},d=[{value:"IPerson",id:"iperson",level:2},{value:"Interconnection with establishment",id:"interconnection-with-establishment",level:2},{value:"IFrequentedEstablishments",id:"ifrequentedestablishments",level:3},{value:"Interconnection with payment methods",id:"interconnection-with-payment-methods",level:2},{value:"MangoPay",id:"mangopay",level:3},{value:"Lemonway",id:"lemonway",level:3},{value:"Stripe",id:"stripe",level:3}],m={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In all the interfaces you will find, it's possible that some properties inherit from interfaces from other domains. "),(0,i.kt)("p",null,"To access these properties, you need to have activated the domains on which the interfaces are based."),(0,i.kt)("h2",{id:"iperson"},"IPerson"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface IPerson {\n  id: string;\n  uri: string;\n  consumerId: string;\n  userId: string;\n  firstName: string;\n  lastName: string;\n  address: IPlace;\n  myAddresses: IPlace[];\n  subscriptionLocation: IGeoCoordinates;\n  phoneNumber: string;\n  mobilePhoneNumber: string;\n  faxNumber: string;\n  nationality: string;\n  affiliation: IOrganizationResponse;\n  birthDate: Date;\n  email: string;\n  gender: GendersEnum;\n  latitude: number;\n  longitude: number;\n  jobTitle: string;\n  enabled: boolean;\n  legalNotice: ILegalNoticeAcceptance;\n  privacyPolicy: ILegalNoticeAcceptance;\n  createdAt: Date;\n  updatedAt: Date;\n  picture: IImageObject;\n  settings: ISettings;\n  organizationFavorites: string[];\n  mangopayUserId: string;\n  mangopayWalletId: string;\n  mangopayCards: IMangopayCard[];\n  stripe: IStripe;\n  lemonway: ILemonway;\n  type: PersonTypeEnum;\n  frequentedEstablishments: IFrequentedEstablishments[];\n  metadatas: { [key: string]: any };\n  statistics: {\n    lastVisit: Date;\n    firstVisit: Date;\n    totalVisit: number;\n    amountLastOrder: number;\n    amountTotalOrder: number;\n    frequentedEstablishments: IFrequentedEstablishments[];\n    loyalCustomer: boolean;\n  };\n}\n\nenum GendersEnum {\n  MAN = 'man',\n  WOMAN = 'woman',\n  OTHER = 'other',\n  NSP = 'nsp',\n}\n\ninterface ILegalNoticeAcceptance {\n  version: string;\n  dateOfAcceptance: Date;\n}\n\ninterface ISettings {\n  notifications: {\n    emailEnable: boolean;\n    smsEnable: boolean;\n    pushEnable: boolean;\n  };\n}\n\nenum PersonTypeEnum {\n  DEFAULT = 'DEFAULT',\n  EMPLOYEE = 'EMPLOYEE',\n  FOUNDER = 'FOUNDER',\n  ADMIN = 'ADMIN',\n}\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"place")," : ",(0,i.kt)("a",{parentName:"li",href:"place-types#iplace"},(0,i.kt)("strong",{parentName:"a"},"IPlace")),"(",(0,i.kt)("inlineCode",{parentName:"li"},"address"),",",(0,i.kt)("inlineCode",{parentName:"li"},"myAddresses"),"), ",(0,i.kt)("a",{parentName:"li",href:"place-types#igeocoordinates"},(0,i.kt)("strong",{parentName:"a"},"IGeoCoordinates")),"(",(0,i.kt)("inlineCode",{parentName:"li"},"subscriptionLocation"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"organization")," ",(0,i.kt)("a",{parentName:"li",href:"organization-types#iorganizationresponse"},(0,i.kt)("strong",{parentName:"a"},"IOrganizationResponse")),"(",(0,i.kt)("inlineCode",{parentName:"li"},"affiliation"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"media")," ",(0,i.kt)("a",{parentName:"li",href:"media-types#iimageobject"},(0,i.kt)("strong",{parentName:"a"},"IImageObject")),"(",(0,i.kt)("inlineCode",{parentName:"li"},"picture"),")")),(0,i.kt)("h2",{id:"interconnection-with-establishment"},"Interconnection with establishment"),(0,i.kt)("h3",{id:"ifrequentedestablishments"},"IFrequentedEstablishments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface IFrequentedEstablishments {\n  organizationId: string;\n  organizationName: string;\n  firstVisit: Date;\n  lastVisit: Date;\n  isCustomer: boolean;\n}\n")),(0,i.kt)("h2",{id:"interconnection-with-payment-methods"},"Interconnection with payment methods"),(0,i.kt)("h3",{id:"mangopay"},"MangoPay"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface IMangopayCard {\n ExpirationDate: string;\n Alias: string;\n CardType: string;\n CardProvider: string;\n Country: string;\n Product: string;\n BankCode: string;\n Active: boolean;\n Currency: string;\n Validity: string;\n Id: string;\n Tag: string | null;\n CreationDate: number;\n Fingerprint: string;\n default: boolean;\n}\n")),(0,i.kt)("h3",{id:"lemonway"},"Lemonway"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface ILemonway {\n  customerId: string;\n  cards: ILemonwayCard[];\n}\n\ninterface ILemonwayCard {\n  id: number;\n  transactionId: number;\n  is3DS: boolean;\n  country: string;\n  authorizationNumber: string;\n  maskedNumber: string;\n  type: string;\n  default: boolean;\n  webKitToken: string;\n}\n")),(0,i.kt)("h3",{id:"stripe"},"Stripe"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface IStripe {\n  customerId: string;\n  cards: IStripeCard[];\n}\n\ninterface IStripeCard {\n  id: string;\n  object: string;\n  address_city: string;\n  address_country: string;\n  address_line1: string;\n  address_line1_check: string;\n  address_line2: string;\n  address_state: string;\n  address_zip: string;\n  address_zip_check: string;\n  brand: string;\n  country: string;\n  customer: string;\n  cvc_check: string;\n  dynamic_last4: string;\n  exp_month: number;\n  exp_year: number;\n  fingerprint: string;\n  funding: string;\n  last4: string;\n  metadata: object;\n  name: string;\n  tokenization_method: string;\n  default: boolean;\n}\n")))}u.isMDXComponent=!0}}]);