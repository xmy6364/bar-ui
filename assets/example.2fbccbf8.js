var e=Object.assign;import{r as a,o as l,B as t,f as o,u as n,a as d,b as i,c as s,d as u,e as r,C as c,F as m,A as f,z as p,x as b}from"./index.05c7536a.js";import{i as h,j as _,B as g,I as v,a as x,D as k,H as V,m as y,b as w,k as C,P as U,l as I,p as A,q as B,c as R,R as z,d as j,f as M,C as L,g as T,e as q,O as S,T as O,h as D,n as E,L as P,o as $,S as F,A as H}from"./index.6c520161.js";import{M as G}from"./index.e0498e63.js";import{D as J}from"./index.d971948f.js";var K=o({name:"example",components:{[h.name]:h,[_.name]:_,[g.name]:g,[v.name]:v,[x.name]:x,[k.name]:k,[V.name]:V,[y.name]:y,[w.name]:w,[C.name]:C,[U.name]:U,[I.name]:I,[A.name]:A,[B.name]:B,[R.name]:R,[z.name]:z,[j.name]:j,[M.name]:M,[L.name]:L,[T.name]:T,[q.name]:q,[S.name]:S,[O.name]:O,[D.name]:D,[E.name]:E,[P.name]:P,[$.name]:$,[F.name]:F,[H.name]:H},setup(){const o=a(),d=a(!1),i=a(!1),s=a(!1),u=a(1),r=a(""),c=a(),m=a([1]),f=a(!0),p=a(""),b=a(""),h=a(!0),_=a([]),g=a(!1),v=a(!1),x=a("home"),k=a(""),V=n();return e(e({data:[{title:"卡1",content:"卡片堆叠滑动效果只有手机端有用"},{title:"卡2",content:"内容2"},{title:"卡3",content:"内容3"},{title:"卡4",content:"内容4"},{title:"卡5",content:"内容5"},{title:"卡6",content:"内容6"},{title:"卡7",content:"内容7"}],handleClick:()=>{G.info("test")},handleClick1:()=>{console.log("close")},handleClick2:e=>{console.log(2,e)},showMessage1:()=>{G.info("info")},showMessage2:()=>{G.success("success")},showMessage3:()=>{G.warn("warn")},showMessage4:()=>{G.error("error")}},function(e,o,n){const d=a(0),i=()=>{const a=document.querySelectorAll(e),l=[];a.forEach((e=>{l.push(e.offsetTop)}));const t=o.scrollTop-n+10;let i=0;for(let e=0;e<l.length;e++)t>=l[e]&&(i=e);d.value=i};l((()=>{o.addEventListener("scroll",i,!1)})),t((()=>{o.removeEventListener("scroll",i)}));const s=(e,a)=>{const l=Math.abs((a-e)/10);return l>1?l:1};return{active:d,scrollTo:a=>{const l=document.querySelector(`${e}:nth-child(${a+1})`).offsetTop+n;let t=o.scrollTop;t>l?function e(){if(t>l){const a=s(l,t);t-l>=a?t-=a:t=l,o.scrollTop=t,requestAnimationFrame(e)}}():function e(){if(t<l){const a=s(l,t);l-t>=a?t+=a:t=l,o.scrollTop=t,requestAnimationFrame(e)}}()}}}(".bar-section",document.getElementById("container"),-60)),{activeIndex:o,openPanel:()=>{console.log(1)},visible:d,notice:i,noMask:s,showDialog:()=>{J.danger({type:"notice",title:"你好",content:"你好你你好你好你好",onOk:()=>{console.log(1)}})},tabActive:u,input:r,radioValue:c,changeRadio:()=>{c.value>2||!c.value?c.value=1:c.value+=1},radioChange:e=>{console.log("radioChange() ",e)},checkboxValue:m,clearCheckbox:()=>{m.value=[]},switchVal:f,selectVal:p,textarea:b,alertShow:h,load:()=>new Promise((e=>{setTimeout((()=>{const a=_.value.length;if(a>=60)return g.value=!0,e();for(let e=a+1;e<=a+20;e++)_.value.push(e);e()}),1e3)})),list:_,finished:g,isLoad:v,tabbarActive:x,sidebar:[{label:"侧边栏1",icon:"home",name:"test1"},{label:"侧边栏2",icon:"menu",name:"test2",subItems:[{label:"侧边栏2-1",icon:"heart",name:"test3",subItems:[{label:"侧边栏2-1-1",name:"test4"}]}]},{label:"侧边栏3",icon:"user",name:"test5",subItems:[{label:"侧边栏3-1",name:"test6"},{label:"侧边栏3-2",name:"test7"}]}],sidebarVal:k,back:()=>{V.replace("/")}})}});const N={class:"example-container"},Q=b("文字"),W=b("文字"),X=b("default按钮"),Y=b("primary按钮"),Z=b("禁用按钮"),ee=b("loading按钮"),ae=b("warn按钮"),le=b("danger按钮"),te=b("link按钮"),oe=b("text按钮"),ne=b("large按钮"),de=b("small按钮"),ie=b("圆"),se=b("圆角"),ue=b("future按钮"),re=b("block按钮"),ce=b(" block round按钮 "),me=b("你好"),fe=b("不准偷看"),pe=b("切换"),be=b("鸡肉"),he=b("猪肉"),_e=b("羊肉"),ge=b("苹果"),ve=b("梨"),xe=b("清空"),ke=b("看电视"),Ve=b("玩电脑"),ye=b("玩手机"),we=b("睡觉"),Ce=b("吃饭"),Ue=b("看电视"),Ie=b("玩电脑"),Ae=b("玩手机"),Be=b("睡觉"),Re=b("吃饭"),ze=b("1"),je=b("0"),Me=b("切换状态"),Le=b("info提示"),Te=b("success提示"),qe=b("warn提示"),Se=b("danger提示"),Oe=b("自定义"),De=b("自定义"),Ee=b("我是分割线"),Pe=b("我是分割线靠左"),$e=b("我是分割线靠右"),Fe={style:{display:"flex","align-items":"center"}},He=b(" 我 "),Ge=b(" 是 "),Je=b(" 分 "),Ke=b(" 割 "),Ne=b(" 线 "),Qe=b("info"),We=b("success"),Xe=b("warn"),Ye=b("error"),Ze=b(" 代码写出来是给人看的，附带能够在机器上运行 "),ea=b("slot标题"),aa=b(" 测试2 "),la=b(" 代码写出来是给人看的，附带能够在机器上运行 "),ta=b("测试2"),oa=b("测试3"),na=b(" 代码写出来是给人看的，附带能够在机器上运行 "),da=b("测试2"),ia=b("测试3"),sa=b("基本模态框"),ua=b("通知框"),ra=b("无遮罩"),ca=b("编程式"),ma=b("标签内容1"),fa=b("标签内容2"),pa=b("标签内容3"),ba=b("标签内容1"),ha=b("标签内容2"),_a=b("标签内容3"),ga=b("标签内容1"),va=b("标签内容2"),xa=b("标签内容3"),ka=u("div",null," 感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI ",-1),Va=u("div",null," 感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI感谢使用BAR-UI ",-1),ya=b("首页"),wa=b("用户"),Ca=b(" 菜单 "),Ua=b(" 设置 "),Ia=b("卡片内容"),Aa=b("模态框"),Ba=u("div",{style:{"margin-bottom":"10px"}}," 1. 更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公 ",-1),Ra=u("div",null," 2. 更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更 ",-1),za=b(" 模态框 ");K.render=function(e,a,l,t,o,n){const h=d("bar-item"),_=d("bar-dropdown"),g=d("bar-header"),v=d("bar-icon"),x=d("bar-section"),k=d("bar-avatar"),V=d("bar-divider"),y=d("bar-button"),w=d("bar-input"),C=d("bar-radio"),U=d("bar-radio-group"),I=d("bar-checkbox"),A=d("bar-checkbox-group"),B=d("bar-option"),R=d("bar-select"),z=d("bar-switch"),j=d("bar-textarea"),M=d("bar-alert"),L=d("bar-panel"),T=d("bar-collapse"),q=d("bar-tab"),S=d("bar-tabs"),O=d("bar-infinite-scroll"),D=d("bar-loading"),E=d("bar-tabbar"),P=d("bar-sidebar"),$=d("bar-card"),F=d("bar-card-stack"),H=d("bar-modal");return i(),s("div",N,[u(g,{title:"演示页","sub-title":"这是副标题","scroll-target":"#container","left-text":"返回",onClickLeft:c(e.back,["prevent","stop"]),"left-arrow":!0,fixed:""},{right:r((()=>[u(_,{"button-title":"导航","button-type":"primary","button-shadow":!1,"show-icon":!1},{default:r((()=>[(i(),s(m,null,f(["加载图标","其他图标","按钮组件","输入框组件","单选框组件","多选框组件","选择器组件","开关组件","多行输入框组件","警告提示组件","页头组件","分割线组件","下拉菜单组件","轻提示组件","折叠面板组件","模态框组件","标签栏组件","无限滚动组件","加载组件","底部标签栏组件","侧边栏组件","卡片组件"],((a,l)=>u(h,{class:["anchor",{active:e.active===l}],type:"dropdown",key:l,onClick:a=>e.scrollTo(l+1)},{default:r((()=>[b(p(a),1)])),_:2},1032,["class","onClick"]))),64))])),_:1})])),_:1},8,["onClickLeft"]),u(x,{title:"加载图标"},{default:r((()=>[u(v,{name:"loading",size:"lg"}),u(v,{name:"loading"}),u(v,{name:"loading",size:"sm"})])),_:1}),u(x,{title:"其他图标"},{default:r((()=>[u(v,{name:"left",size:"sm"}),u(v,{name:"down",size:"sm"}),u(v,{name:"up",size:"sm"}),u(v,{name:"right",size:"sm"}),u(v,{name:"heart",size:"sm"}),u(v,{name:"success",size:"sm"}),u(v,{name:"info",size:"sm"}),u(v,{name:"warn",size:"sm"}),u(v,{name:"error",size:"sm"}),u(v,{name:"close",size:"sm"}),u(v,{name:"home",size:"sm"}),u(v,{name:"user",size:"sm"}),u(v,{name:"bars",size:"sm"}),u(v,{name:"menu",size:"sm"}),u(v,{name:"setting",size:"sm"})])),_:1}),u(x,{title:"头像组件"},{default:r((()=>[u(k,{src:"https://cdn.jsdelivr.net/gh/xmy6364/blog-image/img/20200914avatar.jpg",alt:"123",size:64}),u(k,{src:"https://cdn.jsdelivr.net/gh/xmy6364/blog-image/img/20200914avatar.jpg",alt:"123"}),u(k,null,{default:r((()=>[Q])),_:1}),u(k,{src:"https://cdn.jsdelivr.net/gh/xmy6364/blog-image/img/20200914avatar.jpg",alt:"123",size:32}),u(V),u(k,{src:"https://cdn.jsdelivr.net/gh/xmy6364/blog-image/img/20200914avatar.jpg",alt:"123",shape:"square",size:64}),u(k,{src:"https://cdn.jsdelivr.net/gh/xmy6364/blog-image/img/20200914avatar.jpg",alt:"123",shape:"square"}),u(k,{shape:"square"},{default:r((()=>[W])),_:1}),u(k,{src:"https://cdn.jsdelivr.net/gh/xmy6364/blog-image/img/20200914avatar.jpg",alt:"123",size:32,shape:"square"})])),_:1}),u(x,{title:"按钮组件"},{default:r((()=>[u(y,null,{default:r((()=>[X])),_:1}),u(y,{type:"primary"},{default:r((()=>[Y])),_:1}),u(y,{disabled:"",onClick:e.handleClick},{default:r((()=>[Z])),_:1},8,["onClick"]),u(y,{loading:""},{default:r((()=>[ee])),_:1}),u(y,{type:"warn"},{default:r((()=>[ae])),_:1}),u(y,{type:"danger"},{default:r((()=>[le])),_:1}),u(y,{type:"link"},{default:r((()=>[te])),_:1}),u(y,{type:"text"},{default:r((()=>[oe])),_:1}),u(y,{size:"lg"},{default:r((()=>[ne])),_:1}),u(y,{type:"primary",size:"sm"},{default:r((()=>[de])),_:1}),u(y,{type:"primary",size:"sm",shape:"circle"},{default:r((()=>[ie])),_:1}),u(y,{type:"primary",size:"sm",shape:"round"},{default:r((()=>[se])),_:1}),u(y,{type:"future"},{default:r((()=>[ue])),_:1}),u(y,{block:"",onClick:e.handleClick},{default:r((()=>[re])),_:1},8,["onClick"]),u(y,{block:"",shape:"round",onClick:e.handleClick2},{default:r((()=>[ce])),_:1},8,["onClick"])])),_:1}),u(x,{title:"输入框组件"},{default:r((()=>[u(w,{modelValue:e.input,"onUpdate:modelValue":a[1]||(a[1]=a=>e.input=a),placeholder:"请输入文本，可以加icon","prefix-icon":"success","suffix-icon":"error"},null,8,["modelValue"]),u(w,{placeholder:"只能输入数字",type:"number"},{prefix:r((()=>[me])),_:1}),u(w,{placeholder:"请输入密码",type:"password"},{suffix:r((()=>[fe])),_:1}),u(w,{placeholder:"有错误","has-fail":""}),u(w,{placeholder:"不可用",disabled:""}),u(w,{placeholder:"只读",readonly:""}),u(w,{placeholder:"行内输入框",inline:""})])),_:1}),u(x,{title:"单选框组件"},{default:r((()=>[u(y,{onClick:e.changeRadio,size:"sm"},{default:r((()=>[pe])),_:1},8,["onClick"]),u("span",null,"已选："+p(e.radioValue),1),u(U,{name:"test",modelValue:e.radioValue,"onUpdate:modelValue":a[2]||(a[2]=a=>e.radioValue=a),onChange:e.radioChange},{default:r((()=>[u(C,{value:1,onClick:e.handleClick2},{default:r((()=>[be])),_:1},8,["onClick"]),u(C,{value:2},{default:r((()=>[he])),_:1}),u(C,{value:3},{default:r((()=>[_e])),_:1})])),_:1},8,["modelValue","onChange"]),u(U,{name:"test2",mode:"vertical"},{default:r((()=>[u(C,{value:"5",disabled:""},{default:r((()=>[ge])),_:1}),u(C,{value:"6",disabled:"",checked:""},{default:r((()=>[ve])),_:1})])),_:1})])),_:1}),u(x,{title:"多选框组件"},{default:r((()=>[u(y,{onClick:e.clearCheckbox,size:"sm",inline:""},{default:r((()=>[xe])),_:1},8,["onClick"]),u(A,{modelValue:e.checkboxValue,"onUpdate:modelValue":a[3]||(a[3]=a=>e.checkboxValue=a),name:"something"},{default:r((()=>[u(I,{value:1},{default:r((()=>[ke])),_:1}),u(I,{value:2},{default:r((()=>[Ve])),_:1}),u(I,{value:3},{default:r((()=>[ye])),_:1}),u(I,{value:4,disabled:""},{default:r((()=>[we])),_:1}),u(I,{value:5,checked:"",disabled:""},{default:r((()=>[Ce])),_:1})])),_:1},8,["modelValue"]),u(V,null,{default:r((()=>[b("已选："+p(e.checkboxValue),1)])),_:1}),u(A,{name:"some",mode:"vertical"},{default:r((()=>[u(I,{value:1},{default:r((()=>[Ue])),_:1}),u(I,{value:2},{default:r((()=>[Ie])),_:1}),u(I,{value:3},{default:r((()=>[Ae])),_:1}),u(I,{value:4,disabled:""},{default:r((()=>[Be])),_:1}),u(I,{value:5,checked:"",disabled:""},{default:r((()=>[Re])),_:1})])),_:1})])),_:1}),u(x,{title:"选择器组件"},{default:r((()=>[u("div",null,"对应的value："+p(e.selectVal||"暂未选择"),1),u(R,{modelValue:e.selectVal,"onUpdate:modelValue":a[4]||(a[4]=a=>e.selectVal=a),name:"city",placeholder:"可输入检索"},{default:r((()=>[u(B,{label:"河南",value:1}),u(B,{label:"河北",value:2}),u(B,{label:"湖南",value:3}),u(B,{label:"湖北",value:4})])),_:1},8,["modelValue"]),u(R,{name:"b",placeholder:"可清除",clearable:"","default-value":1},{default:r((()=>[u(B,{label:"默认选项",value:1}),u(B,{label:"选项2",value:2})])),_:1}),u(R,{name:"a",placeholder:"禁用",disabled:""},{default:r((()=>[u(B,{label:"选项1",value:1}),u(B,{label:"选项2",value:2})])),_:1})])),_:1}),u(x,{title:"开关组件"},{default:r((()=>[u(z),u(z,{modelValue:e.switchVal,"onUpdate:modelValue":a[5]||(a[5]=a=>e.switchVal=a)},{prefix:r((()=>[ze])),suffix:r((()=>[je])),_:1},8,["modelValue"]),u(z,{disabled:""}),u(z,{disabled:"",checked:""})])),_:1}),u(x,{title:"多行输入框组件"},{default:r((()=>[u(j,{modelValue:e.textarea,"onUpdate:modelValue":a[6]||(a[6]=a=>e.textarea=a),rows:5,cols:30,placeholder:"自定义行列数"},null,8,["modelValue"]),u(j,{modelValue:e.textarea,"onUpdate:modelValue":a[7]||(a[7]=a=>e.textarea=a),row:5,placeholder:"占满宽度",block:""},null,8,["modelValue"]),u(j,{placeholder:"有错误","has-fail":"",maxlength:5}),u(j,{placeholder:"禁用",disabled:""}),u(j,{placeholder:"只读",readonly:""})])),_:1}),u(x,{title:"警告提示组件"},{default:r((()=>[u(y,{onClick:a[8]||(a[8]=a=>e.alertShow=!e.alertShow)},{default:r((()=>[Me])),_:1}),u(M,{modelValue:e.alertShow,"onUpdate:modelValue":a[9]||(a[9]=a=>e.alertShow=a),closable:!1},{default:r((()=>[Le])),_:1},8,["modelValue"]),u(M,{type:"success"},{default:r((()=>[Te])),_:1}),u(M,{type:"warn"},{default:r((()=>[qe])),_:1}),u(M,{type:"danger"},{default:r((()=>[Se])),_:1})])),_:1}),u(x,{title:"页头组件"},{default:r((()=>[u(g,{title:"普通页头"}),u(g,{title:"普通页头","sub-title":"有子标题的页头"}),u(g,{title:"普通页头","sub-title":"有返回按钮的页头","left-text":"返回","left-arrow":!0}),u(g,{title:"都可以自定义","sub-title":"有右侧按钮的页头"},{left:r((()=>[Oe])),right:r((()=>[De])),_:1}),u(g,{title:"自定义颜色",color:"#fff","text-color":"#000","left-text":"返回","left-arrow":!0})])),_:1}),u(x,{title:"分割线"},{default:r((()=>[u(V),u(V,null,{default:r((()=>[Ee])),_:1}),u(V,{position:"left"},{default:r((()=>[Pe])),_:1}),u(V,{position:"right"},{default:r((()=>[$e])),_:1}),u("div",Fe,[He,u(V,{type:"vertical"}),Ge,u(V,{type:"vertical"}),Je,u(V,{type:"vertical"}),Ke,u(V,{type:"vertical"}),Ne])])),_:1}),u(x,{title:"下拉菜单组件"},{default:r((()=>[u(_,{"button-title":"基本使用","button-type":"primary","button-shadow":!1,"show-icon":!1,"dropdown-position":"rightdown"},{default:r((()=>[(i(),s(m,null,f(["吃饭","睡觉","打豆豆"],((e,a)=>u(h,{type:"dropdown",key:a},{default:r((()=>[b(p(e),1)])),_:2},1024))),64))])),_:1}),u(_,{"button-title":"有箭头","button-type":"primary","button-shadow":!1,"dropdown-position":"rightdown",onOpen:e.handleClick2,onClose:e.handleClick1},{default:r((()=>[(i(),s(m,null,f(5,(e=>u(h,{icon:e%2?"up":"down",type:"dropdown",key:e},{default:r((()=>[b(" 这是下拉菜单"+p(e),1)])),_:2},1032,["icon"]))),64))])),_:1},8,["onOpen","onClose"]),u(_,{"button-title":"适用按钮样式","button-type":"danger","button-shadow":!1,"dropdown-position":"rightdown"},{default:r((()=>[(i(),s(m,null,f(4,(e=>u(h,{icon:"heart",type:"dropdown",key:e},{default:r((()=>[b(" 这是下拉菜单"+p(e),1)])),_:2},1024))),64))])),_:1})])),_:1}),u(x,{title:"轻提示组件"},{default:r((()=>[u(y,{onClick:e.showMessage1},{default:r((()=>[Qe])),_:1},8,["onClick"]),u(y,{type:"success",onClick:e.showMessage2},{default:r((()=>[We])),_:1},8,["onClick"]),u(y,{type:"warn",onClick:e.showMessage3},{default:r((()=>[Xe])),_:1},8,["onClick"]),u(y,{type:"danger",onClick:e.showMessage4},{default:r((()=>[Ye])),_:1},8,["onClick"])])),_:1}),u(x,{title:"折叠面板组件"},{default:r((()=>[u(T,null,{default:r((()=>[u(L,{title:"基本使用",index:1,onOpen:e.openPanel},{default:r((()=>[Ze])),_:1},8,["onOpen"]),u(L,{index:2},{title:r((()=>[ea])),default:r((()=>[aa])),_:1}),u(L,{title:"标题3",index:3},{default:r((()=>[u(T,{accordion:!0,modelValue:e.activeIndex,"onUpdate:modelValue":a[10]||(a[10]=a=>e.activeIndex=a)},{default:r((()=>[u(L,{title:`双向绑定activeIndex: ${e.activeIndex}`,index:1},{default:r((()=>[la])),_:1},8,["title"]),u(L,{title:"标题2",index:2},{default:r((()=>[ta])),_:1}),u(L,{title:"标题3",index:3},{default:r((()=>[oa])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),u(T,{accordion:!0,modelValue:e.activeIndex,"onUpdate:modelValue":a[11]||(a[11]=a=>e.activeIndex=a)},{default:r((()=>[u(L,{title:`手风琴模式，activeIndex: ${e.activeIndex}`,index:1},{default:r((()=>[na])),_:1},8,["title"]),u(L,{title:"标题2",index:2},{default:r((()=>[da])),_:1}),u(L,{title:"标题3",index:3},{default:r((()=>[ia])),_:1})])),_:1},8,["modelValue"])])),_:1}),u(x,{title:"模态框组件"},{default:r((()=>[u(y,{onClick:a[12]||(a[12]=a=>e.visible=!0)},{default:r((()=>[sa])),_:1}),u(y,{onClick:a[13]||(a[13]=a=>e.notice=!0)},{default:r((()=>[ua])),_:1}),u(y,{onClick:a[14]||(a[14]=a=>e.noMask=!0)},{default:r((()=>[ra])),_:1}),u(y,{onClick:e.showDialog},{default:r((()=>[ca])),_:1},8,["onClick"])])),_:1}),u(x,{title:"标签栏组件"},{default:r((()=>[u(S,{modelValue:e.tabActive,"onUpdate:modelValue":a[15]||(a[15]=a=>e.tabActive=a)},{default:r((()=>[u(q,{index:1,title:"水平标签栏"},{default:r((()=>[ma])),_:1}),u(q,{index:2,disabled:!0,title:"禁用"},{default:r((()=>[fa])),_:1}),u(q,{index:3,title:"标签3"},{default:r((()=>[pa])),_:1})])),_:1},8,["modelValue"]),u(S,{type:"underline"},{default:r((()=>[u(q,{index:1,title:"下划线样式"},{default:r((()=>[ba])),_:1}),u(q,{index:2,title:"标签2"},{default:r((()=>[ha])),_:1}),u(q,{index:3,title:"标签3"},{default:r((()=>[_a])),_:1})])),_:1}),u(S,{mode:"vertical"},{default:r((()=>[u(q,{index:1,title:"垂直标签栏"},{default:r((()=>[ga])),_:1}),u(q,{index:2,title:"标签2"},{default:r((()=>[va])),_:1}),u(q,{index:3,title:"标签3"},{default:r((()=>[xa])),_:1})])),_:1})])),_:1}),u(x,{title:"无限滚动组件"},{default:r((()=>[u(O,{onLoad:e.load,height:200,finished:e.finished},{default:r((()=>[(i(!0),s(m,null,f(e.list,(e=>(i(),s("div",{class:"scroll-card",key:e},p(e),1)))),128))])),_:1},8,["onLoad","finished"])])),_:1}),u(x,{title:"加载组件"},{default:r((()=>[u(z,{modelValue:e.isLoad,"onUpdate:modelValue":a[16]||(a[16]=a=>e.isLoad=a)},null,8,["modelValue"]),u(D,{modelValue:e.isLoad,"onUpdate:modelValue":a[17]||(a[17]=a=>e.isLoad=a),"loading-text":"自定义加载文字"},{default:r((()=>[ka])),_:1},8,["modelValue"]),u(D,{"loading-text":"自定义加载图标和颜色",color:"red"},{icon:r((()=>[u(v,{name:"success",color:"red"})])),default:r((()=>[Va])),_:1})])),_:1}),u(x,{title:"底部标签栏组件"},{default:r((()=>[u("div",null,p(e.tabbarActive),1),u(E,{modelValue:e.tabbarActive,"onUpdate:modelValue":a[18]||(a[18]=a=>e.tabbarActive=a),fixed:!1},{default:r((()=>[u(h,{type:"tabbar",name:"home",icon:"home"},{default:r((()=>[ya])),_:1}),u(h,{type:"tabbar",name:"user",icon:"user",dot:""},{default:r((()=>[wa])),_:1}),u(h,{type:"tabbar",name:"menu",icon:"bars",badge:5},{default:r((()=>[Ca])),_:1}),u(h,{type:"tabbar",name:"setting",icon:"setting",badge:15},{default:r((()=>[Ua])),_:1})])),_:1},8,["modelValue"])])),_:1}),u(x,{title:"侧边栏组件"},{default:r((()=>[u("div",null,p(e.sidebarVal),1),u(P,{modelValue:e.sidebarVal,"onUpdate:modelValue":a[19]||(a[19]=a=>e.sidebarVal=a),style:{width:"200px"},value:e.sidebar,accordion:"",header:"导航",footer:"Copyright © Tuzilow"},null,8,["modelValue","value"])])),_:1}),u(x,{title:"卡片组件",class:"last-section"},{default:r((()=>[u($,{style:{"margin-bottom":"1rem"},title:"卡片标题"},{default:r((()=>[Ia])),_:1}),u(F,{class:"stack",data:e.data,"fly-distance":1e3,"limit-distance":100,"base-card-style":{width:300,height:100,top:0,left:0},dragDirection:"horizontal"},null,8,["data"])])),_:1}),u(H,{title:"模态框标题",modelValue:e.visible,"onUpdate:modelValue":a[20]||(a[20]=a=>e.visible=a)},{default:r((()=>[Aa])),_:1},8,["modelValue"]),u(H,{type:"notice",title:"通知",modelValue:e.notice,"onUpdate:modelValue":a[21]||(a[21]=a=>e.notice=a)},{default:r((()=>[Ba,Ra])),_:1},8,["modelValue"]),u(H,{title:"模态框标题",modelValue:e.noMask,"onUpdate:modelValue":a[22]||(a[22]=a=>e.noMask=a),"show-mask":!1},{default:r((()=>[za])),_:1},8,["modelValue"])])};export default K;