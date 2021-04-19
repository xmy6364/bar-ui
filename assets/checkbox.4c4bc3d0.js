import{b as t,c as e,d as l,z as a,s as n,r as d,a as c,t as o,e as h,h as s,x as b}from"./index.05c7536a.js";import{B as x,C as r,f as i}from"./index.6c520161.js";const u={class:"markdown-body"},f={class:"language-html"},g=n('<h2>CheckboxGroup API</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选值</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">当前 group 内选中的 checkout 的 value</td><td style="text-align:left;">unknown[]</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;">input[type=“radio”] 的 name</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">mode</td><td style="text-align:left;">排列方式</td><td style="text-align:left;">string</td><td style="text-align:left;">horizontal, vertical</td><td style="text-align:left;">horizontal</td></tr></tbody></table><h2>CheckboxGroup Events</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">函数签名</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;">radio 选中改变</td><td style="text-align:left;">(value: unknown) =&gt; void</td></tr></tbody></table><h2>Checkbox API</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选值</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;">Checkbox 的 value</td><td style="text-align:left;">string|number</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">是否可用</td><td style="text-align:left;">boolean</td><td style="text-align:left;"></td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">checked</td><td style="text-align:left;">是否选择</td><td style="text-align:left;">boolean</td><td style="text-align:left;"></td><td style="text-align:left;">false</td></tr></tbody></table><h2>Checkbox Event</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">函数签名</th></tr></thead><tbody><tr><td style="text-align:left;">click</td><td style="text-align:left;">点击</td><td style="text-align:left;">({ event, value }: { event: MouseEvent; value: string | number }) =&gt; void</td></tr></tbody></table>',8),k={expose:[],setup:n=>(n,d)=>(t(),e("div",u,[l("pre",null,[l("code",f,'<template>\n  <div class="checkbox-container">\n    <h2>Checkbox 多选组件</h2>\n    <bar-button @click="clearCheckbox" size="sm" inline>清空</bar-button>\n    <span>已选：'+a(n.checkboxValue)+'</span>\n    <bar-checkbox-group v-model="checkboxValue" name="something">\n      <bar-checkbox :value="1">看电视</bar-checkbox>\n      <bar-checkbox :value="2">玩电脑</bar-checkbox>\n      <bar-checkbox :value="3">玩手机</bar-checkbox>\n      <bar-checkbox :value="4" disabled>睡觉</bar-checkbox>\n      <bar-checkbox :value="5" checked disabled>吃饭</bar-checkbox>\n    </bar-checkbox-group>\n\n    <bar-checkbox-group name="some" mode="vertical">\n      <bar-checkbox :value="1">看电视</bar-checkbox>\n      <bar-checkbox :value="2">玩电脑</bar-checkbox>\n      <bar-checkbox :value="3">玩手机</bar-checkbox>\n      <bar-checkbox :value="4" disabled>睡觉</bar-checkbox>\n      <bar-checkbox :value="5" checked disabled>吃饭</bar-checkbox>\n    </bar-checkbox-group>\n  </div>\n</template>\n\n<script>\n  import { ref } from \'vue\';\n  import { Button, CheckboxGroup, Checkbox } from \'../../components\';\n  export default {\n    components: {\n      [Button.name]: Button,\n      [CheckboxGroup.name]: CheckboxGroup,\n      [Checkbox.name]: Checkbox,\n    },\n    setup() {\n      const checkboxValue = ref([1]);\n\n      const clearCheckbox = () => {\n        checkboxValue.value = [];\n      };\n\n      return { checkboxValue, clearCheckbox };\n    },\n  };\n<\/script>\n',1)]),g]))};const y={components:{[x.name]:x,[r.name]:r,[i.name]:i,md:k},setup(){const t=d([1]);return{checkboxValue:t,clearCheckbox:()=>{t.value=[]}}}},m={class:"checkbox-container"},v=l("h2",null,"Checkbox 多选组件",-1),p=b("清空"),C=b("看电视"),_=b("玩电脑"),V=b("玩手机"),z=b("睡觉"),G=b("吃饭"),B=b("看电视"),j=b("玩电脑"),w=b("玩手机"),E=b("睡觉"),A=b("吃饭"),I=b("      "),P=b("\n    ");y.render=function(n,d,b,x,r,i){const u=c("bar-button"),f=c("bar-checkbox"),g=c("bar-checkbox-group"),k=c("md"),y=o("highlightjs");return t(),e("div",m,[v,l(u,{onClick:x.clearCheckbox,size:"sm",inline:""},{default:h((()=>[p])),_:1},8,["onClick"]),l("span",null,"已选："+a(x.checkboxValue),1),l(g,{modelValue:x.checkboxValue,"onUpdate:modelValue":d[1]||(d[1]=t=>x.checkboxValue=t),name:"something"},{default:h((()=>[l(f,{value:1},{default:h((()=>[C])),_:1}),l(f,{value:2},{default:h((()=>[_])),_:1}),l(f,{value:3},{default:h((()=>[V])),_:1}),l(f,{value:4,disabled:""},{default:h((()=>[z])),_:1}),l(f,{value:5,checked:"",disabled:""},{default:h((()=>[G])),_:1})])),_:1},8,["modelValue"]),l(g,{name:"some",mode:"vertical"},{default:h((()=>[l(f,{value:1},{default:h((()=>[B])),_:1}),l(f,{value:2},{default:h((()=>[j])),_:1}),l(f,{value:3},{default:h((()=>[w])),_:1}),l(f,{value:4,disabled:""},{default:h((()=>[E])),_:1}),l(f,{value:5,checked:"",disabled:""},{default:h((()=>[A])),_:1})])),_:1}),s(l("pre",null,[I,l(k),P],512),[[y]])])};export default y;