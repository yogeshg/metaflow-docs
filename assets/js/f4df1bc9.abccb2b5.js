"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7914],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=i,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3414:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={},l="Dealing with Failures",p={unversionedId:"python/metaflow/failures",id:"python/metaflow/failures",title:"Dealing with Failures",description:"Failures are a natural, expected part of data science workflows. Here are some typical reasons why you can expect your workflow to fail:",source:"@site/docs/python/metaflow/failures.md",sourceDirName:"python/metaflow",slug:"/python/metaflow/failures",permalink:"/python/metaflow/failures",editUrl:"https://github.dev/obgibson/metaflow-docs/blob/master/docs/python/metaflow/failures.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Managing External Libraries",permalink:"/python/metaflow/dependencies"},next:{title:"Organizing Results",permalink:"/python/metaflow/tagging"}},u=[{value:"Retrying Tasks with the <code>retry</code> Decorator",id:"retrying-tasks-with-the-retry-decorator",children:[{value:"How to Prevent Retries\xb6",id:"how-to-prevent-retries",children:[],level:3},{value:"Maximizing Safety",id:"maximizing-safety",children:[],level:3},{value:"Results of Retries",id:"results-of-retries",children:[],level:3}],level:2},{value:"Catching Exceptions with the <code>catch</code> Decorator",id:"catching-exceptions-with-the-catch-decorator",children:[{value:"Exceptions Raised by Your Code",id:"exceptions-raised-by-your-code",children:[],level:3},{value:"Platform Exceptions",id:"platform-exceptions",children:[],level:3}],level:2},{value:"Timing out with the <code>timeout</code> Decorator",id:"timing-out-with-the-timeout-decorator",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],c={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dealing-with-failures"},"Dealing with Failures"),(0,o.kt)("p",null,"Failures are a natural, expected part of data science workflows. Here are some typical reasons why you can expect your workflow to fail:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Misbehaving code:")," no code is perfect. Your code may fail to handle edge cases or libraries behave differently than what you expected."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Unanticipated issues with data:")," data is harder than science. Data is how Metaflow workflows interact with the chaotic, high entropy, outside world. It is practically impossible to anticipate all possible ways the input data can be broken."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Platform issues:")," the best infrastructure is invisible. Unfortunately every now and then platforms that Metaflow relies on, or Metaflow itself, make their existence painfully obvious by failing in creative ways.")),(0,o.kt)("p",null,"Metaflow provides straightforward tools for you to handle all these scenarios. If you are in a hurry, see ",(0,o.kt)("a",{parentName:"p",href:"/python/metaflow/failures#summary"},"a quick summary of the tools"),"."),(0,o.kt)("h2",{id:"retrying-tasks-with-the-retry-decorator"},"Retrying Tasks with the ",(0,o.kt)("inlineCode",{parentName:"h2"},"retry")," Decorator"),(0,o.kt)("p",null,"Retrying a failed task is the simplest way to try to handle errors. It is a particularly effective strategy with platform issues which are typically transient in nature."),(0,o.kt)("p",null,"You can enable retries for a step simply by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"retry")," decorator in the step, like here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from metaflow import FlowSpec, step, retry\n\nclass RetryFlow(FlowSpec):\n\n    @retry\n    @step\n    def start(self):\n        import time\n        if int(time.time()) % 2 == 0:\n            raise Exception("Bad luck!")\n        else:\n            print("Lucky you!")\n        self.next(self.end)\n\n    @step\n    def end(self):\n        print("Phew!")\n\nif __name__ == \'__main__\':\n    RetryFlow()\n')),(0,o.kt)("p",null,"When you run this flow, you will see that sometimes it succeeds without a hitch but sometimes the ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," step raises an exception and it needs to be retried. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"retry")," retries the step three times. Thanks to ",(0,o.kt)("inlineCode",{parentName:"p"},"retry"),", this workflow will almost always succeed."),(0,o.kt)("p",null,"It is highly recommended that you use ",(0,o.kt)("inlineCode",{parentName:"p"},"retry")," every time you run your flow on the ",(0,o.kt)("a",{parentName:"p",href:"/python/metaflow-on-aws/"},"cloud"),". Instead of annotating every step with a retry decorator, you can also automatically add a retry decorator to all steps that do not have one as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"python RetryFlow.py run --with retry\n")),(0,o.kt)("h3",{id:"how-to-prevent-retries"},"How to Prevent Retries",(0,o.kt)("a",{parentName:"h3",href:"http://manuals.test.netflix.net/view/mli/mkdocs/master/failures/#how-to-prevent-retries"},"\xb6")),(0,o.kt)("p",null,"If retries are such a good idea, why not enable them by default for all steps? First, retries only help with transient errors, like sporadic platform issues. If the input data or your code is broken, retrying will not help anything. Secondly, not all steps can be retried safely."),(0,o.kt)("p",null,"Imagine a hypothetical step like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@step\ndef withdraw_money_from_account(self):\n    requests.post('bank.com/account/123/withdraw', data={'amount': 1000})\n")),(0,o.kt)("p",null,"If you run this code with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python MoneyFlow.py run --with retry\n")),(0,o.kt)("p",null,"you may end up withdrawing up to $4000 instead of the intended $1000. To make sure no one will accidentally retry a step with ",(0,o.kt)("em",{parentName:"p"},"destructive side-effects")," like this, you should add ",(0,o.kt)("inlineCode",{parentName:"p"},"times=0")," in the code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@retry(times=0)\n@step\ndef withdraw_money_from_account(self):\n    requests.post('bank.com/account/123/withdraw', data={'amount': 1000})\n")),(0,o.kt)("p",null,"Now the code can be safely rerun, even using ",(0,o.kt)("inlineCode",{parentName:"p"},"--with retry"),". All other steps will be retried as usual."),(0,o.kt)("p",null,"Most data science workflows do not have to worry about this. As long as your step only reads and writes Metaflow artifacts and/or performs only read-only operations with external systems ","(","e.g. performs only ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," queries, no ",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT"),"s etc.",")",", your step is ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Idempotence#Computer_science_meaning"},"idempotent")," and it can be retried without concern."),(0,o.kt)("h3",{id:"maximizing-safety"},"Maximizing Safety"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"retry")," will retry the step for three times before giving up. It waits for 2 minutes between retries on the ",(0,o.kt)("a",{parentName:"p",href:"/python/metaflow-on-aws/"},"cloud"),". This means that if your code fails fast, any transient platform issues need to get resolved in less than 10 minutes or the whole run will fail. Typically 10 minutes is more than enough but sometimes you want both a belt and suspenders."),(0,o.kt)("p",null,"If you have a sensitive production workflow which should not fail easily, there are four things you can do:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can increase the number of retries to ",(0,o.kt)("inlineCode",{parentName:"li"},"times=4"),", which is the maximum number of retries currently."),(0,o.kt)("li",{parentName:"ol"},"You can make the time between retries arbitrarily long, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"times=4, minutes_between_retries=20.")," This will give the task over an hour to succeed."),(0,o.kt)("li",{parentName:"ol"},"You can use ",(0,o.kt)("inlineCode",{parentName:"li"},"catch"),", described below, as a way to continue even after all retries have failed."),(0,o.kt)("li",{parentName:"ol"},"You can use ",(0,o.kt)("inlineCode",{parentName:"li"},"timeout"),", also described below, to make sure your code will not get stuck.")),(0,o.kt)("p",null,"You can use any combination of these four techniques, or all of them together, to build rock-solid workflows."),(0,o.kt)("h3",{id:"results-of-retries"},"Results of Retries"),(0,o.kt)("p",null,"If the same code is executed multiple times by ",(0,o.kt)("inlineCode",{parentName:"p"},"retry"),", are there going to be duplicate artifacts? No, Metaflow manages retries so that only artifacts from the last retry are visible. If you use ",(0,o.kt)("a",{parentName:"p",href:"/python/metaflow/client"},"the Client API "),"to inspect results, you don't have to do anything special to deal with retries that may have happened. Each task will have only one set of results. Correspondingly, the logs returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"task")," show the output of the last attempt only."),(0,o.kt)("p",null,"If you want to know if a task was retried, you can retrieve retry timestamps from ",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," metadata:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import Run, namespace\n\nnamespace(None)\ntask = Run('RetryFlow/10')['start'].task\nattempts = [m for m in task.metadata if m.type == 'attempt']\n")),(0,o.kt)("h2",{id:"catching-exceptions-with-the-catch-decorator"},"Catching Exceptions with the ",(0,o.kt)("inlineCode",{parentName:"h2"},"catch")," Decorator"),(0,o.kt)("p",null,"As mentioned above, ",(0,o.kt)("inlineCode",{parentName:"p"},"retry")," is an appropriate tool for dealing with transient issues. What about issues that are not transient? Metaflow has another decorator, ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," that catches any exceptions that occur during the step and then continues execution of subsequent steps."),(0,o.kt)("p",null,"The main upside of ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," is that it can make your workflows extremely robust: it will handle all error scenarios from faulty code and faulty data to platform issues. The main downside is that your code needs to be modified so that it can tolerate faulty steps."),(0,o.kt)("p",null,"Let's consider issues caused by your code versus everything surrounding it separately."),(0,o.kt)("h3",{id:"exceptions-raised-by-your-code"},"Exceptions Raised by Your Code"),(0,o.kt)("p",null,"By default, Metaflow stops execution of the flow when a step fails. It can't know what to do with failed steps automatically."),(0,o.kt)("p",null,"You may know that some steps are error-prone. For instance, this can happen with a step inside a foreach loop that iterates over unknown data, such as the results of a query or a parameter matrix. In this case, it may be desirable to let some tasks fail without crashing the whole flow."),(0,o.kt)("p",null,"Consider this example that is structured like a hyperparameter search:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, catch, step\n\nclass CatchFlow(FlowSpec):\n\n    @step\n    def start(self):\n        self.params = range(3)\n        self.next(self.compute, foreach='params')\n\n    @catch(var='compute_failed')\n    @step\n    def compute(self):\n        self.div = self.input\n        self.x = 5 / self.div\n        self.next(self.join)\n\n    @step\n    def join(self, inputs):\n        for input in inputs:\n            if input.compute_failed:\n                print('compute failed for parameter: %d' % input.div)\n        self.next(self.end)\n\n    @step\n    def end(self):\n        pass\n\nif __name__ == '__main__':\n    CatchFlow()\n")),(0,o.kt)("p",null,"As you can guess, the above flow raises an error. Normally, this would crash the whole flow. However, in this example the ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," decorator catches the exception and stores it in an instance variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"compute_failed"),", and lets the execution continue. The next step, ",(0,o.kt)("inlineCode",{parentName:"p"},"join"),", contains logic to handle the exception."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"var")," argument is optional. The exception is not stored unless you specify it. You can also specify ",(0,o.kt)("inlineCode",{parentName:"p"},"print_exception=False")," to prevent the ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," decorator from printing out the caught exception on stdout."),(0,o.kt)("h3",{id:"platform-exceptions"},"Platform Exceptions"),(0,o.kt)("p",null,"You could have dealt with the above error by wrapping the whole step in a ",(0,o.kt)("inlineCode",{parentName:"p"},"try ... except")," block. In effect, this is how ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," deals with errors raised in the user code."),(0,o.kt)("p",null,"In contrast, platform issues happen outside of your code, so you can't handle them with a ",(0,o.kt)("inlineCode",{parentName:"p"},"try ... except")," block."),(0,o.kt)("p",null,"Let's simulate a platform issue like these with the following flow that kills itself without giving Python a chance to recover:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, step, retry, catch\n\nclass SuicidalFlow(FlowSpec):\n\n    @catch(var='start_failed')\n    @retry\n    @step\n    def start(self):\n        import os, signal\n        # kill this process with the KILL signal\n        os.kill(os.getpid(), signal.SIGKILL)\n        self.next(self.end)\n\n    @step\n    def end(self):\n        if self.start_failed is not None:\n            print(\"It seems 'start' did not survive.\")\n\nif __name__ == '__main__':\n    SuicidalFlow()\n")),(0,o.kt)("p",null,"Note that we use both ",(0,o.kt)("inlineCode",{parentName:"p"},"retry")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," above. ",(0,o.kt)("inlineCode",{parentName:"p"},"retry")," attempts to run the step three times, hoping that the issue is transient. The hope is futile. The task kills itself every time."),(0,o.kt)("p",null,"After all retries are exhausted, ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," takes over and records an exception in ",(0,o.kt)("inlineCode",{parentName:"p"},"start_failed"),", notifying that all attempts to run ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," failed. Now it is up to the subsequent steps, ",(0,o.kt)("inlineCode",{parentName:"p"},"end")," in this case, to deal with the scenario that ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," produced no results whatsoever. They can choose an alternative code path using the variable assigned by ",(0,o.kt)("inlineCode",{parentName:"p"},"catch"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"start_failed")," in this example."),(0,o.kt)("h2",{id:"timing-out-with-the-timeout-decorator"},"Timing out with the ",(0,o.kt)("inlineCode",{parentName:"h2"},"timeout")," Decorator"),(0,o.kt)("p",null,"By default, there is no timeout for steps. If you cause an infinite loop accidentally or you query an external service that hangs, the step will block the flow forever. This is undesirable especially in production runs that should not require human intervention."),(0,o.kt)("p",null,"Metaflow provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"timeout")," decorator to address this issue:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, timeout, step\nimport time\n\nclass TimeoutFlow(FlowSpec):\n\n    @timeout(seconds=5)\n    @step\n    def start(self):\n        for i in range(100):\n            print(i)\n            time.sleep(1)\n        self.next(self.end)\n\n    @step\n    def end(self):\n        pass\n\nif __name__ == '__main__':\n    TimeoutFlow()\n")),(0,o.kt)("p",null,"Here, the ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," step times out after five seconds. Besides ",(0,o.kt)("inlineCode",{parentName:"p"},"seconds"),", you can specify ",(0,o.kt)("inlineCode",{parentName:"p"},"minutes")," and/or ",(0,o.kt)("inlineCode",{parentName:"p"},"hours")," as the timeout value. Note that all values specified are cumulative so specifying 10 seconds and 5 minutes will result in a timeout of 5 minutes and 10 seconds."),(0,o.kt)("p",null,"The above example raises an exception if the step does not finish in the given time period. This is a good pattern if the timeout is a genuine error condition."),(0,o.kt)("p",null,"In some cases you can handle a timeout in subsequent steps. Similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"SuicidalFlow")," above, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," decorator to catch the timeout exception:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from metaflow import FlowSpec, timeout, step, catch\nimport time\n\nclass CatchTimeoutFlow(FlowSpec):\n\n    @catch(print_exception=False, var='timeout')\n    @timeout(seconds=5)\n    @step\n    def start(self):\n        for i in range(100):\n            print(i)\n            time.sleep(1)\n        self.next(self.end)\n\n    @step\n    def end(self):\n        if self.timeout:\n            print('the previous step timed out')\n        else:\n            print('all ok!')\n\nif __name__ == '__main__':\n    CatchTimeoutFlow()\n")),(0,o.kt)("p",null,"This example handles a timeout in ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," gracefully without showing any exceptions."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Here is a quick summary of failure handling in Metaflow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"retry")," to deal with transient platform issues. You can do this easily on the command line with the ",(0,o.kt)("inlineCode",{parentName:"li"},"--with retry")," option."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"retry")," ",(0,o.kt)("strong",{parentName:"li"},"with")," ",(0,o.kt)("inlineCode",{parentName:"li"},"catch")," for extra robustness if you have modified your code to deal with faulty steps which are handled by ",(0,o.kt)("inlineCode",{parentName:"li"},"catch"),"."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"catch")," ",(0,o.kt)("strong",{parentName:"li"},"without")," ",(0,o.kt)("inlineCode",{parentName:"li"},"retry")," to handle steps ",(0,o.kt)("a",{parentName:"li",href:"/python/metaflow/failures#how-to-prevent-retries"},"that can't be retried safely"),". It is a good idea to use ",(0,o.kt)("inlineCode",{parentName:"li"},"times=0")," for ",(0,o.kt)("inlineCode",{parentName:"li"},"retry")," in this case."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"timeout")," with any of the above if your code can get stuck.")))}h.isMDXComponent=!0}}]);