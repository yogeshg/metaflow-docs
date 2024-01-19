"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4106],{8577:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7462),s=(a(7294),a(3905)),o=a(2004);const i={},r="Visualizing Results",l={unversionedId:"metaflow/visualizing-results/README",id:"metaflow/visualizing-results/README",title:"Visualizing Results",description:"What if you want to share results of flows with human beings or inspect results by",source:"@site/docs/metaflow/visualizing-results/README.md",sourceDirName:"metaflow/visualizing-results",slug:"/metaflow/visualizing-results/",permalink:"/metaflow/visualizing-results/",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/metaflow/visualizing-results/README.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Debugging Flows",permalink:"/metaflow/debugging"},next:{title:"Effortless Task Inspection with Default Cards",permalink:"/metaflow/visualizing-results/effortless-task-inspection-with-default-cards"}},c={},u=[{value:"What are cards?",id:"what-are-cards",level:2},{value:"How to use cards?",id:"how-to-use-cards",level:2},{value:"How to view cards",id:"how-to-view-cards",level:3},{value:"Start developing cards",id:"start-developing-cards",level:2}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"visualizing-results"},"Visualizing Results"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(9831).Z,width:"800",height:"500"})),(0,s.kt)("p",null,"What if you want to share results of flows with human beings or inspect results by\nyourself? One option is to use Jupyter notebooks and Metaflow ",(0,s.kt)("a",{parentName:"p",href:"../metaflow/client"},"Client\nAPI"),", which is a good combination for ad-hoc analysis and\nexploration."),(0,s.kt)("p",null,"If you have a good idea what information you want to observe in every execution, it is\nmore convenient to produce a relevant report automatically. Metaflow comes with a\nbuilt-in mechanism to create and view such reports with a few lines of code, called\n",(0,s.kt)("em",{parentName:"p"},"cards"),". These cards can contain any images, text, and tables which help you observe the\nflow."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"As of Metaflow 2.11, cards can update live while tasks are executing, so you\ncan use them to monitor progress and visualize intermediate results of running tasks.")),(0,s.kt)("h2",{id:"what-are-cards"},"What are cards?"),(0,s.kt)("p",null,"To get an idea of how cards can make an ML project observable, take a look at the following\nshort video:"),(0,s.kt)(o.Z,{controls:!0,url:"https://www.youtube.com/watch?v=Sb5GQ-rc4J4",mdxType:"ReactPlayer"}),(0,s.kt)("br",null),(0,s.kt)("p",null,"Here are some illustrative use cases that cards are a good fit for:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Creating a report of model performance or data quality every time a task executes, for instance,\nevery time a new model is trained."),(0,s.kt)("li",{parentName:"ul"},"Monitoring progress of a long-running task."),(0,s.kt)("li",{parentName:"ul"},"Sharing human-readable results with non-technical stakeholders."),(0,s.kt)("li",{parentName:"ul"},"Debugging task behavior by attaching a suitable card to the flow during development."),(0,s.kt)("li",{parentName:"ul"},"Experiment tracking: comparing results across multiple runs")),(0,s.kt)("p",null,"In contrast, cards are not meant for building complex, interactive dashboards or for\nad-hoc exploration that is a spot-on use case for notebooks. If you are curious, you can read\nmore about the motivation for cards in ",(0,s.kt)("a",{parentName:"p",href:"https://outerbounds.com/blog/integrating-pythonic-visual-reports-into-ml-pipelines/"},"the original release blog post")," and\n",(0,s.kt)("a",{parentName:"p",href:"https://outerbounds.com/blog/metaflow-dynamic-cards/"},"the announcement post for updating cards"),"."),(0,s.kt)("h2",{id:"how-to-use-cards"},"How to use cards?"),(0,s.kt)("p",null,"This short video (no sound) shows cards from the developer point of view:"),(0,s.kt)(o.Z,{controls:!0,url:"https://www.youtube.com/watch?v=YSJXn6KLzXg",mdxType:"ReactPlayer"}),(0,s.kt)("br",null),(0,s.kt)("p",null,"You can attach cards in any Metaflow step. When a task corresponding to the step\nfinishes, an additional piece of code is executed which creates an HTML file visualizing\nthe results of the task. In the illustration below, the train step trains three models\nin parallel by using ",(0,s.kt)("a",{parentName:"p",href:"../metaflow/basics#foreach"},"foreach"),". The step is decorated with\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"@card")," decorator, so it produces a human-readable report alongside its usual\nprogrammatic results."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(3706).Z,width:"437",height:"312"})),(0,s.kt)("p",null,"Each model could be accompanied by a card showing model validation metrics. For\ninstance, you can easily customize the cards to look something like this:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(5882).Z,width:"1166",height:"903"})),(0,s.kt)("p",null,"Note that cards don\u2019t change the behavior of the workflow in any way. They are created\nand stored independent of the flow or task. Should something fail during the creation of\na card, the execution of the workflow is not affected, which makes cards safe to use\neven in sensitive production deployments."),(0,s.kt)("h3",{id:"how-to-view-cards"},"How to view cards"),(0,s.kt)("p",null,"Currently, there are three main mechanisms for viewing cards, which are discussed in\ndetail below:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"You can use ",(0,s.kt)("a",{parentName:"li",href:"../metaflow/visualizing-results/effortless-task-inspection-with-default-cards#using-local-card-viewer"},"the Metaflow\nCLI"),"\non the command line to view cards in a browser."),(0,s.kt)("li",{parentName:"ol"},"You can use ",(0,s.kt)("a",{parentName:"li",href:"../metaflow/visualizing-results/effortless-task-inspection-with-default-cards#accessing-cards-via-an-api"},"the ",(0,s.kt)("inlineCode",{parentName:"a"},"get_cards"),"\nAPI"),"\nto access cards programmatically, e.g. in a notebook."),(0,s.kt)("li",{parentName:"ol"},"If you have ",(0,s.kt)("a",{parentName:"li",href:"https://netflixtechblog.com/open-sourcing-a-monitoring-gui-for-metaflow-75ff465f0d60"},"the Metaflow Monitoring\nGUI"),"\ndeployed, cards will automatically show in the task page, as shown in the video\nabove.")),(0,s.kt)("p",null,"Also, crucially, cards work in any compute\nenvironment such as laptops, ",(0,s.kt)("a",{parentName:"p",href:"/scaling/remote-tasks/introduction"},"any remote tasks"),", or\nwhen the flow is ",(0,s.kt)("a",{parentName:"p",href:"/production/introduction"},"scheduled to run automatically"),". Hence, you\ncan use cards to inspect and debug results during prototyping, as well as monitor the\nquality of production runs."),(0,s.kt)("h2",{id:"start-developing-cards"},"Start developing cards"),(0,s.kt)("p",null,"You can customize the content of cards as much or as little as you want: You can attach\na ",(0,s.kt)("a",{parentName:"p",href:"../metaflow/visualizing-results/effortless-task-inspection-with-default-cards"},(0,s.kt)("em",{parentName:"a"},"Default\nCard"))," to\nany existing workflow without changing anything in the code. Or, with a few lines of\nPython, you can create a card with custom content by using built-in ",(0,s.kt)("a",{parentName:"p",href:"../metaflow/visualizing-results/easy-custom-reports-with-card-components"},(0,s.kt)("em",{parentName:"a"},"Card\nComponents")),".\nWith a few additional lines, you can ",(0,s.kt)("a",{parentName:"p",href:"../metaflow/visualizing-results/dynamic-cards"},"update cards in real-time during\ntask execution"),"."),(0,s.kt)("p",null,"If you need even more flexibility, you can find or create a ",(0,s.kt)("a",{parentName:"p",href:"../metaflow/visualizing-results/advanced-shareable-cards-with-card-templates"},(0,s.kt)("em",{parentName:"a"},"Card\nTemplate")),"\nto output a report formatted with arbitrary HTML and Javascript."),(0,s.kt)("p",null,"Learn more about these approaches in the following subsections:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"../metaflow/visualizing-results/effortless-task-inspection-with-default-cards"},"Effortless Task Inspection with Default\nCards")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"../metaflow/visualizing-results/easy-custom-reports-with-card-components"},"Easy Custom Reports with Card\nComponents")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"../metaflow/visualizing-results/dynamic-cards"},"Updating Cards During Task\nExecution")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"../metaflow/visualizing-results/advanced-shareable-cards-with-card-templates"},"Advanced, Shareable Cards with Card\nTemplates"))),(0,s.kt)("p",null,"If you are unsure, start with the ",(0,s.kt)("a",{parentName:"p",href:"../metaflow/visualizing-results/effortless-task-inspection-with-default-cards"},(0,s.kt)("em",{parentName:"a"},"Default\nCards")),"\nwhich explains the basics of card usage. For technical details, see the API reference\nthat contains ",(0,s.kt)("a",{parentName:"p",href:"/api/cards"},"a complete guide of all card APIs"),"."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can test example cards interactively in ",(0,s.kt)("a",{parentName:"p",href:"https://account.outerbounds.dev/account/?workspace=/home/workspace/workspaces/dynamic-cards/workspace.code-workspace"},"Metaflow\nSandbox"),", conveniently in the browser.")))}p.isMDXComponent=!0},3706:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Visualizing_Results-fb96c855a5b54fe3af721df0cc00b143.png"},5882:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/card-docs-roc-3580f12db777a8c9137a373687d67e4a.png"},9831:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cards-cover-91f89b2d0696d124c7b7b7a54155fc07.gif"}}]);