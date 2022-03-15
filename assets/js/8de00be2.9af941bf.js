"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8208],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(a),d=r,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7462),r=a(7294),i=a(2389),o=a(9548),l=a(6010),s="tabItem_LplD";function p(e){var t,a,i,p=e.lazy,u=e.block,c=e.defaultValue,f=e.values,d=e.groupId,m=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var A=null===c?c:null!=(t=null!=c?c:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==A&&!b.some((function(e){return e.value===A})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+A+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),w=k.tabGroupChoices,v=k.setTabGroupChoices,y=(0,r.useState)(A),N=y[0],C=y[1],I=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var T=w[d];null!=T&&T!==N&&b.some((function(e){return e.value===T}))&&C(T)}var x=function(e){var t=e.currentTarget,a=I.indexOf(t),n=b[a].value;n!==N&&(E(t),C(n),null!=d&&v(d,n))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=I.indexOf(e.currentTarget)+1;a=I[n]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;a=I[r]||I[I.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},m)},b.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return I.push(e)},onKeyDown:j,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function u(e){var t=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},4582:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return f},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(9877),l=a(8215),s=["components"],p={},u="Basics of Metaflow",c={unversionedId:"r/metaflow/basics",id:"r/metaflow/basics",title:"Basics of Metaflow",description:"This document introduces the basic concepts of Metaflow. If you are eager to try out Metaflow in practice, you can start with the tutorial. After the tutorial, you can return to this document to learn more about how Metaflow works.",source:"@site/docs/r/metaflow/basics.md",sourceDirName:"r/metaflow",slug:"/r/metaflow/basics",permalink:"/r/metaflow/basics",editUrl:"https://github.dev/obgibson/metaflow-docs/blob/master/docs/r/metaflow/basics.md",tags:[],version:"current",frontMatter:{},sidebar:"r",previous:{title:"Deploying to AWS",permalink:"/r/metaflow-on-aws/deploy-to-aws"},next:{title:"Inspecting Flows and Results",permalink:"/r/metaflow/client"}},f=[{value:"The Structure of Metaflow Code",id:"the-structure-of-metaflow-code",children:[{value:"Linear",id:"linear",children:[],level:3},{value:"Branch",id:"branch",children:[],level:3},{value:"Foreach",id:"foreach",children:[],level:3}],level:2},{value:"What should be a step?",id:"what-should-be-a-step",children:[],level:2},{value:"How to define parameters for flows?",id:"how-to-define-parameters-for-flows",children:[],level:2},{value:"Data flow through the graph",id:"data-flow-through-the-graph",children:[],level:2}],d={toc:f};function m(e){var t=e.components,p=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basics-of-metaflow"},"Basics of Metaflow"),(0,i.kt)("p",null,"This document introduces the basic concepts of Metaflow. If you are eager to try out Metaflow in practice, you can start with the ",(0,i.kt)("a",{parentName:"p",href:"../getting-started/tutorials/"},"tutorial"),". After the tutorial, you can return to this document to learn more about how Metaflow works."),(0,i.kt)("h2",{id:"the-structure-of-metaflow-code"},"The Structure of Metaflow Code"),(0,i.kt)("p",null,"Metaflow follows ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dataflow_programming"},"the dataflow paradigm")," which models a program as a directed graph of operations. This is a natural paradigm for expressing data processing pipelines, machine learning in particular."),(0,i.kt)("p",null,"We call the graph of operations ",(0,i.kt)("strong",{parentName:"p"},"a flow"),". You define the operations, called ",(0,i.kt)("strong",{parentName:"p"},"steps"),", which are nodes of the graph and contain transitions to the next steps, which serve as edges."),(0,i.kt)("p",null,"Metaflow sets some constraints on the structure of the graph. For starters, every flow needs a step called ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," and a step called ",(0,i.kt)("inlineCode",{parentName:"p"},"end"),". An execution of the flow, which we call ",(0,i.kt)("strong",{parentName:"p"},"a run"),", starts at ",(0,i.kt)("inlineCode",{parentName:"p"},"start"),". The run is successful if the final ",(0,i.kt)("inlineCode",{parentName:"p"},"end")," step finishes successfully."),(0,i.kt)("p",null,"What happens between ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"end")," is up to you. You can construct the graph in between using an arbitrary combination of the following three types of transitions supported by Metaflow:"),(0,i.kt)("h3",{id:"linear"},"Linear"),(0,i.kt)("p",null,"The most basic type of transition is ",(0,i.kt)("strong",{parentName:"p"},"a linear")," transition. It moves from one step to another one."),(0,i.kt)("p",null,"Here is a graph with two linear transitions:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8302).Z,width:"389",height:"82"})),(0,i.kt)("p",null,"The corresponding Metaflow script looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-r",metastring:'title="myflow.R"',title:'"myflow.R"'},'library(metaflow)\n\nstart <- function(self){\n    self$my_var <- "hello world"\n}\n\na <- function(self){\n    print(paste("the data artifact is", self$my_var))\n}\n\nend <- function(self){\n    print("End of the linear flow")\n}\n\nmetaflow("LinearFlow") %>%\n    step(step="start",\n         r_function=start,\n         next_step="a") %>%\n    step(step="a",\n         r_function=a,\n         next_step="end") %>%\n    step(step="end",\n         r_function=end) %>%\n    run()\n')),(0,i.kt)("p",null,"You can execute this directly in your RStudio IDE or via the terminal:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Terminal",label:"Terminal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript myflow.R run\n"))),(0,i.kt)(l.Z,{value:"RStudio",label:"RStudio",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Execute as is\n")))),(0,i.kt)("p",null,"Besides executing the steps ",(0,i.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"end")," in order, this flow creates ",(0,i.kt)("strong",{parentName:"p"},"a data artifact")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"my_var"),". In Metaflow, data artifacts are created simply by assigning values to ",(0,i.kt)("inlineCode",{parentName:"p"},"$"),"-indexed variables under the ",(0,i.kt)("inlineCode",{parentName:"p"},"self")," object such as ",(0,i.kt)("inlineCode",{parentName:"p"},"self$my_var"),"."),(0,i.kt)("p",null,"Data artifacts are available in all steps after they have been created, so they behave like any normal instance variables. An exception to this rule is branching, as explained below."),(0,i.kt)("h3",{id:"branch"},"Branch"),(0,i.kt)("p",null,"You can express parallel steps with ",(0,i.kt)("strong",{parentName:"p"},"a branch"),". In the figure below, ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," transitions to two parallel steps, ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),". Any number of parallel steps are allowed. A benefit of a branch like this is performance: Metaflow can execute ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," over multiple CPU cores or over multiple instances in the cloud."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-r"},'library(metaflow)\n\na <- function(self){\n    self$var <- 1\n}\n\nb <- function(self){\n    self$var <- 2\n}\n\njoin <- function(self, inputs){\n    print(paste("var in step a is", inputs$a$var))\n    print(paste("var in step b is", inputs$b$var))\n}\n\nmetaflow("BranchFlow") %>%\n    step(step = "start",\n         next_step = c("a", "b")) %>%\n    step(step = "a",\n         r_function=a,\n         next_step="join") %>%\n    step(step="b",\n         r_function=b,\n         next_step="join") %>%\n    step(step="join",\n         r_function=join,\n         next_step="end",\n         join=TRUE) %>%\n    step(step="end") %>%\n    run()\n')),(0,i.kt)("p",null,"Every branch must be joined. The join step does not need to be called ",(0,i.kt)("inlineCode",{parentName:"p"},"join")," as above but it must take an extra argument, like ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," above."),(0,i.kt)("p",null,"In the example above, the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," above is ambiguous: ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," sets it to ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),". To disambiguate the branches, the join step can refer to a specific step in the branch, like ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs$a$var")," above. For convenience, you can also iterate over all steps in the branch using ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs"),", which is simply a list. For more details, see the section about ",(0,i.kt)("a",{parentName:"p",href:"basics#data-flow-through-the-graph"},"data flow through the graph"),"."),(0,i.kt)("p",null,"Note that you can nest branches arbitrarily, that is, you can branch inside a branch. Just remember that all branches must have a corresponding join."),(0,i.kt)("h3",{id:"foreach"},"Foreach"),(0,i.kt)("p",null,"Static branches, as shown in the previous section are useful when you know the branches at development time. Alternatively, you may want to branch based on data dynamically. This is the use case for ",(0,i.kt)("strong",{parentName:"p"},"a foreach")," branch."),(0,i.kt)("p",null,"Foreach works likes the branch construct above but instead of creating named step methods, many parallel copies of steps inside a foreach loop are executed."),(0,i.kt)("p",null,"A foreach loop can iterate over any list like ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-r"},'library(metaflow)\n\nstart <- function(self){\n    self$params <- c("param1", "param2", "param3")\n}\n\na <- function(self){\n    self$result <- paste(self$input, "processed")\n}\n\njoin <- function(self, inputs){\n    results <- gather_inputs(inputs, "result")\n    print(results)\n}\n\nmetaflow("ForeachFlow") %>%\n    step(step = "start",\n         r_function = start,\n         next_step = "a",\n         foreach="params") %>%\n    step(step = "a",\n         r_function=a,\n         next_step="join") %>%\n    step(step="join",\n         r_function=join,\n         next_step="end",\n         join=TRUE) %>%\n    step(step="end") %>%\n    run()\n')),(0,i.kt)("p",null,"The foreach loop is initialized by specifying a keyword argument ",(0,i.kt)("inlineCode",{parentName:"p"},"foreach")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"step"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"foreach")," argument takes a string that is the name of a list stored in an ",(0,i.kt)("inlineCode",{parentName:"p"},"self$")," variable, like ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," above."),(0,i.kt)("p",null,"Steps inside a foreach loop create separate ",(0,i.kt)("strong",{parentName:"p"},"tasks")," to process each item of the list. Here, Metaflow creates three parallel tasks for the step ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," to process the three items of the ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," list in parallel. You can access the specific item assigned to a task with an ",(0,i.kt)("inlineCode",{parentName:"p"},"self$")," variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"input"),"."),(0,i.kt)("p",null,"Foreach loops must be joined like static branches. Note that tasks inside a foreach loop are not named, so you can only iterate over them with ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs"),". If you want, you can assign a value to an ",(0,i.kt)("inlineCode",{parentName:"p"},"self$")," variable in a foreach step which helps you to identify the task."),(0,i.kt)("p",null,"You can nest foreaches and combine them with branches and linear steps arbitrarily."),(0,i.kt)("h2",{id:"what-should-be-a-step"},"What should be a step?"),(0,i.kt)("p",null,"There is not a single right way of structuring code as a graph of steps but here are some best practices that you can follow."),(0,i.kt)("p",null,"Metaflow treats steps as indivisible units of execution. That is, a step either succeeds or fails as a whole. After the step has finished successfully, Metaflow persists all instance variables that were created in the step code, so the step does not have to be executed again even if a subsequent step fails. In other words, you can inspect data artifacts that were present when the step finished but you can not inspect data that were manipulated within a step."),(0,i.kt)("p",null,"This makes a step ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Application_checkpointing"},"a checkpoint"),". The more granular your steps are, the more control you have over inspecting results and resuming failed runs."),(0,i.kt)("p",null,"A downside of making steps too granular is that checkpointing adds some overhead. It would not make sense to execute each line of code as a separate step. Keep your steps small but not too small. A good rule of thumb is that a single step should not take more than an hour to run, preferably much less than that."),(0,i.kt)("p",null,"Another important consideration is the readability of your code. Try running"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript myflow.R show\n"))),(0,i.kt)(l.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Replace run() in myflow.R with\n# run(show = TRUE)\n# and execute in RStudio\n")))),(0,i.kt)("p",null,"which prints out the steps of your flow. Does the overview give you a good idea of your code? If the steps are too broad, it might make sense to split them up just to make the overall flow more descriptive."),(0,i.kt)("h2",{id:"how-to-define-parameters-for-flows"},"How to define parameters for flows?"),(0,i.kt)("p",null,"Here is an example of a flow that defines a parameter, ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-r",metastring:'title="parameter_flow.R"',title:'"parameter_flow.R"'},'library(metaflow)\n\nstart <- function(self){\n    print(paste("alpha is", self$alpha))\n}\n\nend <- function(self){\n    print(paste("alpha still is", self$alpha))\n}\n\nmetaflow("ParameterFlow") %>%\n    parameter("alpha",\n              help="learning rate",\n              required = TRUE) %>%\n    step(step="start",\n         r_function=start,\n         next_step="end") %>%\n    step(step="end",\n         r_function=end) %>%\n    run()\n')),(0,i.kt)("p",null,"Parameters are defined by using the method ",(0,i.kt)("inlineCode",{parentName:"p"},"parameter")," . Parameter variables are automatically available in all steps, like ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha")," above."),(0,i.kt)("p",null,"You can set the parameter values on the command line as follows:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript parameter_flow.R run --alpha 0.6\n"))),(0,i.kt)(l.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Replace run() in parameter_flow.R with\n# run(alpha = 0.6)\n# and execute in RStudio\n")))),(0,i.kt)("p",null,"You can see available parameters with:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript parameter_flow.R run --help\n"))),(0,i.kt)(l.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Replace run() in parameter_flow.R with\n# run(help = TRUE)\n# and execute in RStudio\n")))),(0,i.kt)("p",null,"Parameters are typed based on the type of their default value. If there is no meaningful default for a parameter, you can define it as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-r"},'parameter("num_components",\n          help="Number of components",\n          required=TRUE,\n          type="int")\n')),(0,i.kt)("p",null,"Now the flow can not be run without setting ",(0,i.kt)("inlineCode",{parentName:"p"},"num_components")," to an integer value."),(0,i.kt)("p",null,"You can set the type as ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"double")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),"."),(0,i.kt)("h2",{id:"data-flow-through-the-graph"},"Data flow through the graph"),(0,i.kt)("p",null,"As previously mentioned, for ",(0,i.kt)("a",{parentName:"p",href:"basics#linear"},"linear")," steps, data artifacts are propagated and any linear step can access data artifacts created by previous steps using instance variables. In this case, Metaflow can easily determine the value of each artifact by simply taking the value of that artifact at the end of the previous step."),(0,i.kt)("p",null,"In a join step, however, the value of artifacts can potentially be set to different values on the incoming branches; the value of the artifact is said to be ambiguous."),(0,i.kt)("p",null,"To make it easier to implement a join step after foreach or branch, Metaflow provides a utility function, ",(0,i.kt)("inlineCode",{parentName:"p"},"merge_artifacts"),", to aid in propagating unambiguous values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-r"},'library(metaflow)\n\nstart <- function(self){\n    self$pass_down <- "non-modified"\n}\n\na <- function(self){\n    self$common <- "common in a and b"\n    self$x <- "x in a"\n    self$y <- "y in a"\n    self$from_a <- "only in a"\n}\n\nb <- function(self){\n    self$common <- "common in a and b"\n    self$x <- "x in b"\n    self$y <- "y in b"\n}\n\njoin <- function(self, inputs){\n    # manually propogate variable that has different values in different branches\n    self$x <- inputs$a$x\n\n    merge_artifacts(self, inputs, exclude=list("y"))\n\n    # Without merge_artifact, the following artifact accesses wouldn\u2019t work.\n    print(paste(\'pass_down is\', self$pass_down))\n    print(paste(\'from_a is\', self$from_a))\n    print(paste(\'common is\', self$common))\n}\n\nmetaflow("BranchFlow") %>%\n    step(step = "start",\n         r_function=start,\n         next_step = c("a", "b")) %>%\n    step(step = "a",\n         r_function=a,\n         next_step="join") %>%\n    step(step="b",\n         r_function=b,\n         next_step="join") %>%\n    step(step="join",\n         r_function=join,\n         next_step="end",\n         join=TRUE) %>%\n    step(step="end") %>%\n    run()\n')),(0,i.kt)("p",null,"In the example above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"merge_artifacts")," function behaves as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pass_down")," is propagated because it is unmodified in both ",(0,i.kt)("inlineCode",{parentName:"li"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"b"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"common")," is also propagated because it is set to the same value in both branches. Remember that it is the value of the artifact that matters when determining whether an artifact is ambiguous; Metaflow uses content based deduplication to store artifacts and can therefore determine if the value of two artifacts is the same."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," is handled by the code explicitly ",(0,i.kt)("em",{parentName:"li"},"prior")," to the call to ",(0,i.kt)("inlineCode",{parentName:"li"},"merge_artifacts")," which causes ",(0,i.kt)("inlineCode",{parentName:"li"},"merge_artifacts")," to ignore ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," when propagating artifacts. This pattern allows you to manually resolve any ambiguity in artifacts you would like to see propagated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y")," is not propagated because it is listed in the ",(0,i.kt)("inlineCode",{parentName:"li"},"exclude")," list. This pattern allows you to prevent the propagation of artifacts that are no longer relevant. Remember that the default behavior of ",(0,i.kt)("inlineCode",{parentName:"li"},"merge_artifacts")," is to propagate all incoming artifacts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from_a")," is propagated because it is only set in one branch and therefore is unambiguous. ",(0,i.kt)("inlineCode",{parentName:"li"},"merge_artifacts"),"will propagate all values even if they are present on only one incoming branch.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"merge_artifacts")," function will raise an exception if an artifact that it should merge has an ambiguous value. Remember that ",(0,i.kt)("inlineCode",{parentName:"p"},"merge_artifacts")," will attempt to merge all incoming artifacts except if they are already present in the step or have been explicitly excluded in the ",(0,i.kt)("inlineCode",{parentName:"p"},"exclude")," list."))}m.isMDXComponent=!0},8302:function(e,t){t.Z="data:image/png;base64,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"}}]);