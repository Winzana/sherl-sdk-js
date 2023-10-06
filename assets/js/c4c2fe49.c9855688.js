"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4407],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return y}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=p(a),d=n,y=g["".concat(c,".").concat(d)]||g[d]||u[d]||o;return a?r.createElement(y,i(i({ref:t},l),{},{components:a})):r.createElement(y,i({ref:t},l))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[g]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1906:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return g}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],s={id:"product-category",title:"Category"},c=void 0,p={unversionedId:"shop/product-category",id:"shop/product-category",title:"Category",description:"Get category by id",source:"@site/docs/shop/category.md",sourceDirName:"shop",slug:"/shop/product-category",permalink:"/sherl-sdk-js/docs/shop/product-category",draft:!1,editUrl:"https://github.com/Winzana/sherl-sdk-js/edit/master/docs/docs/shop/category.md",tags:[],version:"current",frontMatter:{id:"product-category",title:"Category"},sidebar:"sidebar",previous:{title:"Product picture",permalink:"/sherl-sdk-js/docs/shop/product-picture"},next:{title:"Product",permalink:"/sherl-sdk-js/docs/shop/product"}},l={},g=[{value:"Get category by id",id:"get-category-by-id",level:2},{value:"Get organization categories",id:"get-organization-categories",level:2},{value:"Add category to organization",id:"add-category-to-organization",level:2},{value:"Update category",id:"update-category",level:2},{value:"Delete category",id:"delete-category",level:2},{value:"Add subcategory to category",id:"add-subcategory-to-category",level:2},{value:"Get organization categories",id:"get-organization-categories-1",level:2},{value:"Get organization subcategories",id:"get-organization-subcategories",level:2},{value:"Get public category by slug",id:"get-public-category-by-slug",level:2},{value:"Get categories and subcategories",id:"get-categories-and-subcategories",level:2},{value:"Get public categories",id:"get-public-categories",level:2},{value:"Get unrestricted products",id:"get-unrestricted-products",level:2}],u={toc:g},d="wrapper";function y(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-category-by-id"},"Get category by id"),(0,o.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await shop(client).getCategoryById(categoryId: string);\n")),(0,o.kt)("p",null,"This call returns an ",(0,o.kt)("a",{parentName:"p",href:"../shop-types#icategoryresponse"},"ICategoryResponse")," object."),(0,o.kt)("h2",{id:"get-organization-categories"},"Get organization categories"),(0,o.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await shop(client).getCategories(filters?: IShopProductCategoryFindByQuery);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface IShopProductCategoryFindByQuery {\n  organizationId?: string;\n  depth?: number;\n}\n")),(0,o.kt)("p",null,"This call returns an array of ",(0,o.kt)("a",{parentName:"p",href:"../shop-types#icategoryresponse"},"ICategoryResponse")," objects."),(0,o.kt)("h2",{id:"add-category-to-organization"},"Add category to organization"),(0,o.kt)("p",null,"To determine which organization targeted, the api uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"affiliation.id")," property of the ",(0,o.kt)("a",{parentName:"p",href:"../person-types#iperson"},"IPerson")," interface (which corresponds to the logged-in user)"),(0,o.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await shop(client).addCategoryToOrganization(category: IShopProductCategoryCreateInputDto);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface IShopProductCategoryCreateInputDto {\n  id: string;\n  globalUri?: string;\n  name?: string;\n  color?: string;\n  taxeValue: number;\n  position?: number;\n  seo?: ISEO;\n}\n\ninterface ISEO {\n  title?: string;\n  description?: string;\n  keywords?: string;\n  others?: { [key: string]: string };\n}\n")),(0,o.kt)("p",null,"This call returns an ",(0,o.kt)("a",{parentName:"p",href:"../shop-types#icategoryresponse"},"ICategoryResponse")," object."),(0,o.kt)("h2",{id:"update-category"},"Update category"),(0,o.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await shop(client).updateCategory(categoryId: string, updatedCategory: Partial<IShopProductCategoryCreateInputDto>);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#add-category-to-organization"},"IShopProductCategoryCreateInputDto"))),(0,o.kt)("p",null,"This call returns an ",(0,o.kt)("a",{parentName:"p",href:"../shop-types#icategoryresponse"},"ICategoryResponse")," object."),(0,o.kt)("h2",{id:"delete-category"},"Delete category"),(0,o.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await shop(client).deleteCategory(categoryId: string);\n")),(0,o.kt)("p",null,"This call returns an ",(0,o.kt)("a",{parentName:"p",href:"../shop-types#icategoryresponse"},"ICategoryResponse")," object."),(0,o.kt)("h2",{id:"add-subcategory-to-category"},"Add subcategory to category"),(0,o.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await shop(client).addSubCategoryToCategory(categoryId: string, subCategory: IShopProductSubCategoryCreateInputDto);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface IShopProductSubCategoryCreateInputDto {\n  id: string;\n  globalUri?: string;\n  color?: string;\n  name?: string;\n  seo?: ISEO;\n  position: number;\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#add-category-to-organization"},"ISEO"),"(",(0,o.kt)("inlineCode",{parentName:"li"},"seo"),")")),(0,o.kt)("p",null,"This call returns an ",(0,o.kt)("a",{parentName:"p",href:"../shop-types#icategoryresponse"},"ICategoryResponse")," object."),(0,o.kt)("h2",{id:"get-organization-categories-1"},"Get organization categories"),(0,o.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await shop(client).getOrganizationCategories(organizationId: string);\n")),(0,o.kt)("p",null,"This call returns an array of ",(0,o.kt)("a",{parentName:"p",href:"../shop-types#icategoryresponse"},"ICategoryResponse")," objects."),(0,o.kt)("h2",{id:"get-organization-subcategories"},"Get organization subcategories"),(0,o.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,o.kt)("p",null,"To determine which organization targeted, the api uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"affiliation.id")," property of the ",(0,o.kt)("a",{parentName:"p",href:"../person-types#iperson"},"IPerson")," interface (which corresponds to the logged-in user)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await shop(client).getOrganizationSubCategories(categoryId: string);\n")),(0,o.kt)("p",null,"This call returns an array of ",(0,o.kt)("a",{parentName:"p",href:"../shop-types#icategoryresponse"},"ICategoryResponse")," objects."),(0,o.kt)("h2",{id:"get-public-category-by-slug"},"Get public category by slug"),(0,o.kt)("span",{class:"badge badge--success"},"Public"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await shop(client).getPublicCategoryBySlug(slug: string);\n")),(0,o.kt)("p",null,"This call returns ",(0,o.kt)("a",{parentName:"p",href:"../shop-types#ipubliccategoryresponse"},"IPublicCategoryResponse")," object."),(0,o.kt)("h2",{id:"get-categories-and-subcategories"},"Get categories and subcategories"),(0,o.kt)("span",{class:"badge badge--success"},"Public"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await shop(client).getPublicCategoriesAndSub(filters: IPublicCategoryAndSubCategoryFindByDto);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface IPublicCategoryAndSubCategoryFindByDto {\n  q?: string;\n  organizationSlug?: string;\n  organizationId?: string;\n  organizationUri?: string;\n  depth?: number;\n}\n")),(0,o.kt)("p",null,"Return an array of ",(0,o.kt)("a",{parentName:"p",href:"../shop-types#ipubliccategoryresponse"},"IPublicCategoryResponse")," objects."),(0,o.kt)("h2",{id:"get-public-categories"},"Get public categories"),(0,o.kt)("span",{class:"badge badge--success"},"Public"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await shop(client).getPublicCategories();\n")),(0,o.kt)("p",null,"This call returns an array of ",(0,o.kt)("a",{parentName:"p",href:"../shop-types#ipubliccategoryresponse"},"IPublicCategoryResponse")," objects."),(0,o.kt)("h2",{id:"get-unrestricted-products"},"Get unrestricted products"),(0,o.kt)("span",{class:"badge badge--warning"},"Require authentication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await shop(client).getUnrestrictedCategories();\n")),(0,o.kt)("p",null,"This call returns an array of ",(0,o.kt)("a",{parentName:"p",href:"../shop-types#icategoryresponse"},"ICategoryResponse")," object."))}y.isMDXComponent=!0}}]);