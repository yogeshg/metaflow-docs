"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4092],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6626:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],l={},i="Easy Custom Reports with Card Components",p={unversionedId:"python/metaflow/visualizing-results/easy-custom-reports-with-card-components",id:"python/metaflow/visualizing-results/easy-custom-reports-with-card-components",title:"Easy Custom Reports with Card Components",description:"Default Cards are useful during development when you need to quickly inspect artifacts produced by a task or visualize the overall structure of the flow. As your project progresses, you may want to create a custom card that highlights information specific to your project.",source:"@site/docs/python/metaflow/visualizing-results/easy-custom-reports-with-card-components.md",sourceDirName:"python/metaflow/visualizing-results",slug:"/python/metaflow/visualizing-results/easy-custom-reports-with-card-components",permalink:"/python/metaflow/visualizing-results/easy-custom-reports-with-card-components",editUrl:"https://github.dev/obgibson/metaflow-docs/blob/master/docs/python/metaflow/visualizing-results/easy-custom-reports-with-card-components.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Effortless Task Inspection with Default Cards",permalink:"/python/metaflow/visualizing-results/effortless-task-inspection-with-default-cards"},next:{title:"Advanced, Shareable Cards with Card Templates",permalink:"/python/metaflow/visualizing-results/advanced-shareable-cards-with-card-templates"}},c=[{value:"Showing Plots",id:"showing-plots",children:[],level:2},{value:"Multiple Cards In a Step",id:"multiple-cards-in-a-step",children:[],level:2},{value:"Comparing Data Across Runs",id:"comparing-data-across-runs",children:[],level:2}],u={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"easy-custom-reports-with-card-components"},"Easy Custom Reports with Card Components"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Default Cards")," are useful during development when you need to quickly inspect artifacts produced by a task or visualize the overall structure of the flow. As your project progresses, you may want to create a custom card that highlights information specific to your project."),(0,o.kt)("p",null,"The easiest way to create a custom card is to use built-in components: ",(0,o.kt)("em",{parentName:"p"},"Images"),", ",(0,o.kt)("em",{parentName:"p"},"Tables"),", ",(0,o.kt)("em",{parentName:"p"},"Artifacts"),", and ",(0,o.kt)("em",{parentName:"p"},"Markdown")," text. You can construct a report with these components in Python without having to worry about HTML or styling in CSS. Rest assured that if components ever show their limits, you have an option to customize reports even further using ",(0,o.kt)("a",{parentName:"p",href:"advanced-shareable-cards-with-card-templates"},(0,o.kt)("em",{parentName:"a"},"Card Templates")),"."),(0,o.kt)("p",null,"Let\u2019s start with a simple example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from metaflow import FlowSpec, step, card, Parameter, current\nfrom metaflow.cards import Markdown\n\nclass GuessCardFlow(FlowSpec):\n\n    number = Parameter(\'number\', default=3)\n\n    @card(type=\'blank\')\n    @step\n    def start(self):\n        current.card.append(Markdown("# Guess my number"))\n        if self.number > 5:\n            current.card.append(Markdown("My number is **smaller** \u2b07\ufe0f"))\n        elif self.number < 5:\n            current.card.append(Markdown("My number is **larger** \u2b06\ufe0f"))\n        else:\n            current.card.append(Markdown("## Correct! \ud83c\udf89"))\n        self.next(self.end)\n\n    @step\n    def end(self):\n        pass\n\nif __name__ == "__main__":\n    GuessCardFlow()\n')),(0,o.kt)("p",null,"Notice how in the ",(0,o.kt)("inlineCode",{parentName:"p"},"@card")," decorator we specify ",(0,o.kt)("inlineCode",{parentName:"p"},"type=\u2019blank\u2019.")," Instead of the ",(0,o.kt)("em",{parentName:"p"},"Default Card"),", we want an empty card with no content by default. The ",(0,o.kt)("inlineCode",{parentName:"p"},"blank")," card provides a nice empty canvas for custom components."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"current.card.append")," call adds a component in the card. Each component occupies a row in the card, so you don\u2019t have to worry about the layout. If you run ",(0,o.kt)("inlineCode",{parentName:"p"},"GuessCardFlow"),", you will see a card like below. The exact content depends on the value of the number parameter."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9391).Z,width:"696",height:"161"})),(0,o.kt)("p",null,"Currently, the following components are provided:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Markdown"))," - output a block of text formatted as ",(0,o.kt)("a",{parentName:"li",href:"https://www.markdownguide.org"},"Markdown"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Table")," ")," - a table of rows and columns. Each cell may include other components."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Image")," ")," - an image, constructed from bytes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Artifact")," ")," - pretty-print any Python object.")),(0,o.kt)("p",null,"The following example demonstrates all the components in action:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, step, current, card\nfrom metaflow.cards import Markdown, Artifact, Image, Table\nimport requests\n\nROOT = 'https://upload.wikimedia.org/wikipedia/commons/'\nIMAGES = {\n    'Mammals': {\n        'cat': 'b/b9/CyprusShorthair.jpg',\n        'bandicoot': '8/8b/Perameles_gunni.jpg',\n        'dog': '5/5d/Akbash_Dog_male_2016.jpg'\n    },\n    'Birds': {\n        'penguin': 'b/bf/Spheniscus_humboldti_20070116.jpg'\n    }\n}\n\nclass ComponentDemoFlow(FlowSpec):\n\n    @card(type='blank')\n    @step\n    def start(self):\n        for section, animals in IMAGES.items():\n            current.card.append(Markdown('## %s' % section))\n            rows = []\n            for label, url in animals.items():\n                resp = requests.get(ROOT + url,\n                                    headers={'user-agent': 'metaflow-example'})\n                rows.append([Markdown('Animal: **%s**' % label),\n                             Artifact(resp.headers),\n                             Image(resp.content)])\n            current.card.append(Table(rows))\n        self.next(self.end)\n\n    @step\n    def end(self):\n       pass\n\nif __name__ == '__main__':\n    ComponentDemoFlow()\n")),(0,o.kt)("p",null,"The resulting card will look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8158).Z,width:"1122",height:"903"})),(0,o.kt)("p",null,"Notice how the ",(0,o.kt)("inlineCode",{parentName:"p"},"Artifact")," component automatically truncates a large dictionary in the middle column, so you can use it to safely output even huge objects. It is also worth knowing that the ",(0,o.kt)("inlineCode",{parentName:"p"},"Image")," component stores the image in the resulting HTML file itself, so you can view the card without an internet connection or even if the original image becomes unavailable."),(0,o.kt)("h2",{id:"showing-plots"},"Showing Plots"),(0,o.kt)("p",null,"A data scientist may care more about showing data visualizations rather than photos of cats. Technically there isn\u2019t a huge difference: You can use any existing visualization library in Python to produce plots, save the resulting image in a file or an in-memory object, and provide the contents of the file (bytes) to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Image")," component."),(0,o.kt)("p",null,"For convenience, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Image")," component provides a utility method, ",(0,o.kt)("inlineCode",{parentName:"p"},"Image.from_matplotlib"),", that extracts bytes from a ",(0,o.kt)("a",{parentName:"p",href:"https://matplotlib.org"},"Matplotlib")," figure automatically. Here\u2019s an example that uses the ",(0,o.kt)("a",{parentName:"p",href:"../dependencies"},"@conda decorator")," to make sure that Matplotlib is available. If you have Matplotlib and Numpy already installed in your environment, you can run the example without ",(0,o.kt)("inlineCode",{parentName:"p"},"@conda_base"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, step, current, card, conda_base\nfrom metaflow.cards import Image\n\n@conda_base(python='3.8.1',\n            libraries={'numpy':'1.20.3', 'matplotlib':'3.4.2'})\nclass PlotDemoFlow(FlowSpec):\n\n    @card(type='blank')\n    @step\n    def start(self):\n        import matplotlib.pyplot as plt\n        import numpy\n        fig = plt.figure()\n        x = numpy.random.normal(0, 0.1, 100000)\n        y = numpy.random.normal(0, 0.1, 100000)\n        plt.scatter(x, y, s=0.1, color=(0.2, 0.2, 1.0, 0.2))\n        current.card.append(Image.from_matplotlib(fig))\n        self.next(self.end)\n\n    @step\n    def end(self):\n        pass\n\nif __name__ == '__main__':\n    PlotDemoFlow()\n")),(0,o.kt)("p",null,"The resulting card will look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(396).Z,width:"1116",height:"606"})),(0,o.kt)("p",null,"Note that you can click the image in the card to see a larger version of it."),(0,o.kt)("h2",{id:"multiple-cards-in-a-step"},"Multiple Cards In a Step"),(0,o.kt)("p",null,"You may want to produce multiple separate cards in a step. Maybe one card shows high-level business metrics that are suitable for wide distribution, while another shows technical details for debugging purposes."),(0,o.kt)("p",null,"When multiple cards are present, calling ",(0,o.kt)("inlineCode",{parentName:"p"},"current.card.append")," is ambiguous: As such, it doesn\u2019t know which of the many cards the component should be added to. Metaflow will show a warning if you try to do this, but it won\u2019t crash the flow - nothing card-related should ever cause the flow to crash."),(0,o.kt)("p",null,"Use the id keyword argument in the ",(0,o.kt)("inlineCode",{parentName:"p"},"@card")," decorator to uniquely identify each card. Then, you can refer to a specific card with the ",(0,o.kt)("inlineCode",{parentName:"p"},"current.card[card_id].append")," notation. Here\u2019s an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, step, current, card\nfrom metaflow.cards import Markdown\n\nclass ManyCardsFlow(FlowSpec):\n\n    @card(type='blank', id='first')\n    @card(type='blank', id='second')\n    @step\n    def start(self):\n        current.card['first'].append(\\\n            Markdown('# I am the first card'))\n        current.card['second'].append(\\\n            Markdown('# I am the second card'))\n        self.next(self.end)\n\n    @step\n    def end(self):\n        pass\n\nif __name__ == '__main__':\n    ManyCardsFlow()\n")),(0,o.kt)("p",null,"When a task has multiple cards, the \u201c",(0,o.kt)("inlineCode",{parentName:"p"},"card view"),"\u201d command will list all cards that are viewable for the task. You must specify which exact card you want to view:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you have specified an ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," for the card, use the ",(0,o.kt)("inlineCode",{parentName:"li"},"\u2013id")," option to view a card corresponding to the given ",(0,o.kt)("inlineCode",{parentName:"li"},"id"),". For instance, \u201c",(0,o.kt)("inlineCode",{parentName:"li"},"card view \u2013id first"),"\u201d to see the card corresponding to ",(0,o.kt)("inlineCode",{parentName:"li"},"@card(id=\u2019first\u2019)"),"."),(0,o.kt)("li",{parentName:"ul"},"Each card has a unique hash value which is shown by \u201c",(0,o.kt)("inlineCode",{parentName:"li"},"card view"),"\u201d and \u201c",(0,o.kt)("inlineCode",{parentName:"li"},"card list"),"\u201d. You can execute e.g. \u201c",(0,o.kt)("inlineCode",{parentName:"li"},"card view \u2013hash 23b4e"),"\u201d to see a card corresponding to the given hash.")),(0,o.kt)("h2",{id:"comparing-data-across-runs"},"Comparing Data Across Runs"),(0,o.kt)("p",null,"In many cases, you may want to produce a single card that characterizes the results of the whole flow. A natural way to do this is to assign a card to the ",(0,o.kt)("inlineCode",{parentName:"p"},"end")," step that has access to all results produced by a run."),(0,o.kt)("p",null,"Besides accessing all results of a single run, you may want to access results across multiple runs and produce a card that compares the latest data to past results. Thanks to the fact that Metaflow persists and versions all results, this can be done easily: Just use ",(0,o.kt)("a",{parentName:"p",href:"../client"},"the Client API")," to access past results."),(0,o.kt)("p",null,"The following example demonstrates how you can create a card that accesses all data produced by a flow at the ",(0,o.kt)("inlineCode",{parentName:"p"},"end")," step, as well as compares results across historical runs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, step, current, card, conda_base, Flow, Parameter\nfrom metaflow.cards import Image, Table, Artifact\nfrom itertools import islice\n\n@conda_base(python='3.8.1',\n            libraries={'numpy':'1.20.3', 'matplotlib':'3.4.2'})\nclass CompareRunsFlow(FlowSpec):\n\n    alpha = Parameter('alpha', default=0.1)\n\n    @step\n    def start(self):\n        import numpy as np\n        self.x = np.linspace(-1, 2, 100)\n        self.y = self.alpha * np.exp(self.x)\n        self.next(self.end)\n\n    @card(type='blank')\n    @step\n    def end(self):\n        self.compare_runs()\n\n    def compare_runs(self):\n        import matplotlib.pyplot as plt\n        rows = []\n        fig = plt.figure()\n        for run in islice(Flow('CompareRunsFlow'), 3):\n            data = run['start'].task.data\n            rows.append(list(map(Artifact, (run.id,\n                                            run.created_at,\n                                            data.alpha))))\n            plt.plot(data.x, data.y, label=run.id)\n        plt.legend()\n        current.card.append(Table(rows,\\\n            headers=['Run ID', 'Created', 'Alpha']))\n        current.card.append(Image.from_matplotlib(fig))\n\nif __name__ == '__main__':\n    CompareRunsFlow()\n")),(0,o.kt)("p",null,"To see the comparison in action, run the flow at least three times with varying values of the ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2013alpha")," parameter. Note the following features of the flow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The flow-level card is produced by a separate helper function, ",(0,o.kt)("inlineCode",{parentName:"li"},"compare_runs"),". It is a good idea to separate code that produces a complex card in its own function or even in a separate module. The ",(0,o.kt)("inlineCode",{parentName:"li"},"current.card.append")," call is available globally when a task is executing, so there is no need to restrict card creation in a ",(0,o.kt)("inlineCode",{parentName:"li"},"@step")," function."),(0,o.kt)("li",{parentName:"ul"},"The \u201c",(0,o.kt)("inlineCode",{parentName:"li"},"islice(Flow('CompareRunsFlow'), 3)"),"\u201d expression is used to access the latest three runs of the flow, including the currently executing one. Thanks to the ",(0,o.kt)("a",{parentName:"li",href:"../tagging"},"namespacing")," functionality of Metaflow, the expression returns the latest three runs executed by you personally, i.e. in your user namespace, when you run the flow locally. In contrast, if ",(0,o.kt)("a",{parentName:"li",href:"../../going-to-production-with-metaflow/coordinating-larger-metaflow-projects"},"deployed to a production environment"),", it returns the latest three production runs. This way, you can cleanly manage multiple versions of the project, some in development and some in production, and keep the results separate."),(0,o.kt)("li",{parentName:"ul"},"You can use any off-the-shelf libraries, like Matplotlib here, to compare, visualize, and analyze results. You can develop your own helper libraries or ",(0,o.kt)("a",{parentName:"li",href:"advanced-shareable-cards-with-card-templates"},"Card Templates")," which standardize the analyses and reporting that are relevant for your projects.")),(0,o.kt)("p",null,"The resulting card will look something like below. It shows the latest three runs of the flow, the parameter supplied for each run, and a visualization that allows you to compare the runs."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(214).Z,width:"1439",height:"783"})))}d.isMDXComponent=!0},214:function(e,t,n){t.Z=n.p+"assets/images/card-docs-compare-02220a2117e515da3f3ea8c867ee0d39.png"},8158:function(e,t,n){t.Z=n.p+"assets/images/card-docs-components-f7988bff68a098370c7061566787ccf1.png"},9391:function(e,t,n){t.Z=n.p+"assets/images/card-docs-guess-310a187be8a868c4aaa3545911dedfdc.png"},396:function(e,t,n){t.Z=n.p+"assets/images/card-docs-plot-85aac4dec56f3d6eff34b772fcd182be.png"}}]);