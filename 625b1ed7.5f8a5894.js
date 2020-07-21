(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"metadata",(function(){return r})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return d}));var i=n(2),o=n(9),s=(n(0),n(156)),a={id:"authentication",title:"Authentication",sidebar_label:"Authentication"},r={id:"authentication",isDocsHomePage:!1,title:"Authentication",description:"All methods requires a valid authentication.",source:"@site/docs/authentication.md",permalink:"/sherl-sdk-js/docs/authentication",editUrl:"https://github.com/Winzana/sherl-sdk-js/edit/master/docs/docs/authentication.md",sidebar_label:"Authentication",sidebar:"sidebar",previous:{title:"Configuration",permalink:"/sherl-sdk-js/docs/configuration"},next:{title:"Product",permalink:"/sherl-sdk-js/docs/product"}},c=[],u={rightToc:c};function d(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(i.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,"All methods requires a valid authentication."),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"// With require\nconst sherl = require('@sherl/sdk');\n// OR import\nimport sherl from '@sherl/sdk';\n\nconst promise = sherl\n  .auth()\n  .signInWithEmailAndPassword('mail@example.com', 'password');\n\npromise.then(() => {\n  console.log('Login successful');\n});\n")))}d.isMDXComponent=!0}}]);