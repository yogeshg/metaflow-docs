"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2677],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1096:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={pagination_next:"python/getting-started/tutorials/season-1-the-local-experience/README"},s="Tutorials",u={unversionedId:"python/getting-started/tutorials/README",id:"python/getting-started/tutorials/README",title:"Tutorials",description:"This set of tutorials provides a hands-on introduction to Metaflow. The basic concepts are introduced in practice, and you can find out more details about the functionality showcased in these tutorials in Basics of Metaflow and the following sections.",source:"@site/docs/python/getting-started/tutorials/README.md",sourceDirName:"python/getting-started/tutorials",slug:"/python/getting-started/tutorials/",permalink:"/python/getting-started/tutorials/",editUrl:"https://github.dev/obgibson/metaflow-docs/blob/master/docs/python/getting-started/tutorials/README.md",tags:[],version:"current",frontMatter:{pagination_next:"python/getting-started/tutorials/season-1-the-local-experience/README"},sidebar:"python",previous:{title:"Installing Metaflow",permalink:"/python/getting-started/install"},next:{title:"Season 1: The Local Experience",permalink:"/python/getting-started/tutorials/season-1-the-local-experience/"}},c=[{value:"Setting up.",id:"setting-up",children:[],level:3},{value:"Season 1: The Local Experience.",id:"season-1-the-local-experience",children:[],level:3},{value:"Season 2: Scaling Out and Up.",id:"season-2-scaling-out-and-up",children:[],level:3},{value:"What&#39;s next?",id:"whats-next",children:[],level:3}],p={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorials"},"Tutorials"),(0,o.kt)("p",null,"This set of tutorials provides a hands-on introduction to Metaflow. The basic concepts are introduced in practice, and you can find out more details about the functionality showcased in these tutorials in ",(0,o.kt)("a",{parentName:"p",href:"../metaflow/basics"},"Basics of Metaflow")," and the following sections."),(0,o.kt)("h3",{id:"setting-up"},"Setting up."),(0,o.kt)("p",null,"Metaflow comes packaged with the tutorials, so getting started is easy. You can make copies of all the tutorials in your current directory using the metaflow command line interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"metaflow tutorials pull\n")),(0,o.kt)("p",null,"This creates a directory ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"metaflow-tutorials"))," in your current working directory with a subdirectory for each tutorial."," "),(0,o.kt)("p",null,"Each tutorial has a brief description and instructions that you can view using the links below. Alternatively, you can use the command line interface to list available tutorials or get info about a specific one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"metaflow tutorials list\nmetaflow tutorials info 00-helloworld\n")),(0,o.kt)("h3",{id:"season-1-the-local-experience"},(0,o.kt)("a",{parentName:"h3",href:"tutorials/season-1-the-local-experience"},"Season 1: The Local Experience.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tutorials/season-1-the-local-experience/episode00"},(0,o.kt)("strong",{parentName:"a"},"Episode 0: Metaflow says Hi!"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tutorials/season-1-the-local-experience/episode01"},(0,o.kt)("strong",{parentName:"a"},"Episode 1: Let's build you a movie playlist."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tutorials/season-1-the-local-experience/episode02"},(0,o.kt)("strong",{parentName:"a"},"Episode 2: Is this Data Science?"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tutorials/season-1-the-local-experience/episode03"},(0,o.kt)("strong",{parentName:"a"},"Episode 3: Follow the Money."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tutorials/season-1-the-local-experience/episode04"},(0,o.kt)("strong",{parentName:"a"},"Episode 4: The Final Showdown.")))),(0,o.kt)("h3",{id:"season-2-scaling-out-and-up"},(0,o.kt)("a",{parentName:"h3",href:"tutorials/season-2-scaling-out-and-up/"},"Season 2: Scaling Out and Up"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tutorials/season-2-scaling-out-and-up/episode05"},(0,o.kt)("strong",{parentName:"a"},"Episode 5: Look Mom, We're in the Cloud."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tutorials/season-2-scaling-out-and-up/episode06"},(0,o.kt)("strong",{parentName:"a"},"Episode 6: Computing in the Cloud."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tutorials/season-2-scaling-out-and-up/episode07"},(0,o.kt)("strong",{parentName:"a"},"Episode 7: Way up here.")))),(0,o.kt)("h3",{id:"whats-next"},"What's next?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Explore fault tolerant flows with ",(0,o.kt)("a",{parentName:"li",href:"../metaflow/failures#catching-exceptions-with-catch-decorator"},(0,o.kt)("inlineCode",{parentName:"a"},"@catch")),", ",(0,o.kt)("a",{parentName:"li",href:"../metaflow/failures#retrying-tasks-with-retry-decorator"},(0,o.kt)("inlineCode",{parentName:"a"},"@retry")),", ",(0,o.kt)("a",{parentName:"li",href:"../metaflow/failures#timing-out-with-timeout-decorator"},(0,o.kt)("inlineCode",{parentName:"a"},"@timeout"))," decorators."),(0,o.kt)("li",{parentName:"ul"},"Try a library like ",(0,o.kt)("a",{parentName:"li",href:"https://www.tensorflow.org"},"Tensorflow")," with ",(0,o.kt)("a",{parentName:"li",href:"../metaflow/dependencies"},(0,o.kt)("inlineCode",{parentName:"a"},"@conda"))," and ",(0,o.kt)("a",{parentName:"li",href:"../metaflow/scaling#using-aws-batch-selectively-with-batch-decorator"},(0,o.kt)("inlineCode",{parentName:"a"},"@batch"))),(0,o.kt)("li",{parentName:"ul"},"Debug failed runs with ",(0,o.kt)("a",{parentName:"li",href:"../metaflow/debugging#how-to-use-the-resume-command"},"resume"),"."),(0,o.kt)("li",{parentName:"ul"},"Access large data fast with ",(0,o.kt)("a",{parentName:"li",href:"../metaflow/data#data-in-s-3-metaflow-s3"},"metaflow.S3"),"."),(0,o.kt)("li",{parentName:"ul"},"Explore results across experiments with the ",(0,o.kt)("a",{parentName:"li",href:"../metaflow/client"},"Client API"),"."),(0,o.kt)("li",{parentName:"ul"},"See how to organize results and collaborate with ",(0,o.kt)("a",{parentName:"li",href:"../metaflow/tagging#namespaces"},"namespaces")," and ",(0,o.kt)("a",{parentName:"li",href:"../metaflow/tagging#tagging"},"tags"),".")))}d.isMDXComponent=!0}}]);