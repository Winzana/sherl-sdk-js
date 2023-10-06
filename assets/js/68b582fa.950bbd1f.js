"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5016],{3905:function(n,t,e){e.d(t,{Zo:function(){return u},kt:function(){return z}});var a=e(7294);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function s(n,t){if(null==n)return{};var e,a,i=function(n,t){if(null==n)return{};var e,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var g=a.createContext({}),l=function(n){var t=a.useContext(g),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},u=function(n){var t=l(n.components);return a.createElement(g.Provider,{value:t},n.children)},c="mdxType",p={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(n,t){var e=n.components,i=n.mdxType,r=n.originalType,g=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),c=l(e),d=i,z=c["".concat(g,".").concat(d)]||c[d]||p[d]||r;return e?a.createElement(z,o(o({ref:t},u),{},{components:e})):a.createElement(z,o({ref:t},u))}));function z(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var r=e.length,o=new Array(r);o[0]=d;var s={};for(var g in t)hasOwnProperty.call(t,g)&&(s[g]=t[g]);s.originalType=n,s[c]="string"==typeof n?n:i,o[1]=s;for(var l=2;l<r;l++)o[l]=e[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},1606:function(n,t,e){e.r(t),e.d(t,{assets:function(){return u},contentTitle:function(){return g},default:function(){return z},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=e(7462),i=e(3366),r=(e(7294),e(3905)),o=["components"],s={id:"organization-index",title:"CRUD"},g=void 0,l={unversionedId:"organization/organization-index",id:"organization/organization-index",title:"CRUD",description:"Get organizations list",source:"@site/docs/organization/index.md",sourceDirName:"organization",slug:"/organization/",permalink:"/sherl-sdk-js/docs/organization/",draft:!1,editUrl:"https://github.com/Winzana/sherl-sdk-js/edit/master/docs/docs/organization/index.md",tags:[],version:"current",frontMatter:{id:"organization-index",title:"CRUD"},sidebar:"sidebar",previous:{title:"Employee",permalink:"/sherl-sdk-js/docs/organization/organization-employee"},next:{title:"KYC",permalink:"/sherl-sdk-js/docs/organization/organization-kyc"}},u={},c=[{value:"Get organizations list",id:"get-organizations-list",level:2},{value:"Get organization by id",id:"get-organization-by-id",level:2},{value:"Get organization by slug",id:"get-organization-by-slug",level:2},{value:"Create organization",id:"create-organization",level:2},{value:"Register organization to person",id:"register-organization-to-person",level:2},{value:"Update organization",id:"update-organization",level:2},{value:"Suggest an organization",id:"suggest-an-organization",level:2}],p={toc:c},d="wrapper";function z(n){var t=n.components,e=(0,i.Z)(n,o);return(0,r.kt)(d,(0,a.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-organizations-list"},"Get organizations list"),(0,r.kt)("p",null,"Retrieve organizations list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Require authentication\nconst organizations = await organization(client).getOrganizations(filters: OrganizationFiltersDto);\n\n// Public\nconst organizations = await organization(client).getPublicOrganizations(filters: OrganizationFiltersDto);\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"../organization-types#organizationfiltersdto"},(0,r.kt)("strong",{parentName:"a"},"OrganizationFiltersDto"))),(0,r.kt)("p",null,"This call return a ",(0,r.kt)("a",{parentName:"p",href:"../pagination#pagination"},"paginated")," array of ",(0,r.kt)("a",{parentName:"p",href:"../organization-types#iorganizationresponse"},"IOrganizationResponse"),"."),(0,r.kt)("h2",{id:"get-organization-by-id"},"Get organization by id"),(0,r.kt)("p",null,"Retrieve an organization by ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Require authentication\nconst organization = await organization(client).getOrganization(id: string);\n\n// Public\nconst organization = await organization(client).getPublicOrganization(id: string);\n")),(0,r.kt)("p",null,"This call returns an ",(0,r.kt)("a",{parentName:"p",href:"../organization-types#iorganizationresponse"},"IOrganizationResponse")," object."),(0,r.kt)("h2",{id:"get-organization-by-slug"},"Get organization by slug"),(0,r.kt)("p",null,"Retrieve one public organization by slug."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const organization = await organization(client).getPublicOrganizationBySlug(slug: string);\n")),(0,r.kt)("p",null,"This call returns an ",(0,r.kt)("a",{parentName:"p",href:"../organization-types#iorganizationresponse"},"IOrganizationResponse")," object."),(0,r.kt)("h2",{id:"create-organization"},"Create organization"),(0,r.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await organization(client).createOrganization(data: ICreateOrganizationInputDto);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface ICreateOrganizationInputDto {\n  id: string;\n  legalName: string;\n  siret: string;\n  createdAt: string;\n  location: {\n    id: string;\n    country: string;\n    locality: string;\n    region: string;\n    postalCode: string;\n    streetAddress: string;\n    uri: string;\n    createdAt: string;\n    department: string;\n    complementaryStreetAddress: string;\n    name: string;\n    originId: string;\n    latitude: number;\n    longitude: number;\n  }\n}\n")),(0,r.kt)("p",null,"This call returns an ",(0,r.kt)("a",{parentName:"p",href:"../organization-types#iorganizationresponse"},"IOrganizationResponse")," object."),(0,r.kt)("h2",{id:"register-organization-to-person"},"Register organization to person"),(0,r.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await organization(client).registerOrganizationToPerson(organizationToPerson: IRegisterOrganizationToPerson);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface IRegisterOrganizationToPerson {\n  organization: {\n    id: string;\n    legalName: string;\n    location: {\n      id: string;\n      country: string;\n      locality: string;\n      region: string;\n      postalCode: string;\n      streetAddress: string;\n      latitude: number;\n      longitude: number;\n    };\n  };\n  person: {\n    firstName: string;\n    lastName: string;\n    address: {\n      id: string;\n      country: string;\n      locality: string;\n      region: string;\n      postalCode: string;\n      streetAddress: string;\n    };\n    mobilePhoneNumber: string;\n    nationality: string;\n    birthDate: string;\n    email: string;\n    gender: string;\n    settings: {\n      notifications: {\n        smsEnable: boolean;\n        emailEnable: boolean;\n        pushEnable: boolean;\n      };\n    };\n  };\n}\n")),(0,r.kt)("p",null,"This call returns an ",(0,r.kt)("a",{parentName:"p",href:"../organization-types#iorganizationresponse"},"IOrganizationResponse")," object."),(0,r.kt)("h2",{id:"update-organization"},"Update organization"),(0,r.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await organization(client).updateOrganization(organizationId: string, updatedOrganization: IUpdateOrganizationDto);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface IUpdateOrganizationRequest {\n  location: {\n    country: string;\n    locality: string;\n    region: string;\n    postalCode: string;\n    streetAddress: string;\n    latitude: number;\n    longitude: number;\n  };\n}\n")),(0,r.kt)("p",null,"This call returns an ",(0,r.kt)("a",{parentName:"p",href:"../organization-types#iorganizationresponse"},"IOrganizationResponse")," object."),(0,r.kt)("h2",{id:"suggest-an-organization"},"Suggest an organization"),(0,r.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await organization(client).suggestOrganization(suggestion: ISuggestOrganizationRequest);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface ISuggestOrganizationRequest {\n  id: string;\n  legalName: string;\n  siret: number;\n  location: {\n    id: string;\n    country: string;\n    locality: string;\n    region: string;\n    postalCode: string;\n    streetAddress: string;\n    latitude: number;\n    longitude: number;\n  };\n  serviceType: [\n    {\n      id: string;\n      uri: string;\n      code: string;\n      values: [\n        {\n          language: string;\n          value: string;\n          createdAt: string;\n        },\n      ];\n      createdAt: string;\n    },\n    {\n      id: string;\n      uri: string;\n      code: string;\n      values: [\n        {\n          language: string;\n          value: string;\n          createdAt: string;\n        },\n      ];\n      createdAt: string;\n    },\n  ];\n}\n")),(0,r.kt)("p",null,"This call returns an ",(0,r.kt)("a",{parentName:"p",href:"../organization-types#iorganizationresponse"},"IOrganizationResponse")," object."))}z.isMDXComponent=!0}}]);