import{r as o,u as C,m as F,o as d,g as i,b as e,s as _,D as T,d as a,C as v,F as g,h as b,f,t as r,z as V}from"./app-7cfb65c9.js";import{s as M}from"./string-91d4200a.js";import{u as k}from"./OrderStore-102b0082.js";import"./useFlash-0de93865.js";const P={class:"relative grid"},U=["onSubmit"],z=e("p",{class:"font-bold text-slate-800 text-xl"},"Calculate Price",-1),L={class:"mt-2"},B=e("label",{class:"font-semibold text-gray-600"},[f(" Enter your Title/Topic "),e("span",{class:"text-red-500"},"* required")],-1),D=e("br",null,null,-1),N={class:"mt-2"},R=e("option",{disabled:"",value:""},"Select type of service",-1),q=["value"],E={class:"flex gap-x-3 mt-1"},I={class:"mt-1"},W=e("option",{disabled:"",value:""},"Select your school level",-1),$=["value"],A={class:"mt-2"},G=e("option",{disabled:"",value:""},"Select the deadline",-1),H=["value"],J={class:"mt-2"},K=e("option",{disabled:"",value:""},"Select number of Pages",-1),Q=e("option",{value:0},"0 Pages/ 0 words",-1),X=["value"],Y={class:"mt-2"},Z={class:"text-sm text-gray-700 text-right p-1"},ee={class:"px-1 underline underline-offset-4 font-bold italic text-lg text-purple-900"},te=e("button",{type:"submit",class:"mt-4 mx-auto mb-4 p-2 w-full bg-purple-600 hover:bg-purple-700 text-slate-50 rounded-md text-base place-content-center font-bold font-serif flex flex-row"},[f(" Order Now > "),e("span",{id:"blinking-cursor",class:"text-sm pl-1"},"|")],-1),se=e("div",{class:"absolute inset-0 shadow-sm ml-4 mt-5 -mr-6 bg-purple-50 h-[105%] max-w-xs rounded-2xl",style:{"z-index":"2"}},null,-1),le=e("div",{class:"absolute inset-0 shadow-sm ml-8 mt-16 -mr-12 bg-purple-100 border border-purple-200 h-[102%] max-w-xs rounded-2xl",style:{"z-index":"1"}},null,-1),ie={__name:"SubForm",props:{services:Object,levels:Object,rates:Object,spacings:Object,currencies:Object},setup(m){const x=m,p=o(null),O=o(null),h=o(null),y=o(null);o(null),o(null),o(!1),o(!1),o(!0);const s=C({title:"Writer's Choice",academic_level_id:2,subject_id:1,service_type_id:1,deadline:336,pages:1,slides:0,sources:1,instructions:"",referencing_style_id:1,spacing_id:1,writer_category_id:1,discount_id:"",currency_id:2,language_id:1,extra:"",files:[],amount:"",name:"",email:"",password:"",password_confirmation:""});F(u);let w=k();const j=()=>{w.form=s.data(),w.saveToLocal(s.data()),window.location.href="/orders/new"};function u(){let n=M.parseInt(Object.values(x.rates).find(c=>Object.values(c).includes(s.deadline)).amount??0);O.value=n,h.value=Object.values(x.levels).find(c=>Object.values(c).includes(s.academic_level_id)).rate??0,y.value=Object.values(x.services).find(c=>Object.values(c).includes(s.service_type_id)).rate??0;let l=n+n*(h.value/100)+n*(y.value/100),t=s.pages,S=s.slides;n=(Math.round((l*t+l*S)*100)/100).toFixed(2),p.value=n,p.value=(Math.round(n*100)/100).toFixed(2),s.amount=p.value}return o(!0),(n,l)=>(d(),i("section",P,[e("form",{onSubmit:V(j,["prevent"]),style:{"z-index":"3"},class:"max-w-xs mt-6 p-2 lg:px-4 bg-white rounded-xl shadow shadow-purple-200 text-xs relative"},[z,e("div",L,[B,D,_(e("input",{type:"text",class:"border-1 p-1 w-full text-sm border-gray-200 bg-slate-100 leading-none rounded-sm","onUpdate:modelValue":l[0]||(l[0]=t=>a(s).title=t),ref:"titleInput",name:"title",id:"title",placeholder:"Leave blank to use Writer's Choice",required:""},null,512),[[T,a(s).title]])]),e("div",N,[_(e("select",{id:"service_type","onUpdate:modelValue":l[1]||(l[1]=t=>a(s).service_type_id=t),onChange:u,class:"w-full rounded-lg leading-none border-gray-200 bg-slate-100 text-gray-900",name:"service_type",autofocus:""},[R,(d(!0),i(g,null,b(m.services,t=>(d(),i("option",{value:t.id},r(t.name),9,q))),256))],544),[[v,a(s).service_type_id]])]),e("div",E,[e("div",I,[_(e("select",{id:"academic_level","onUpdate:modelValue":l[2]||(l[2]=t=>a(s).academic_level_id=t),onChange:u,class:"w-full rounded-lg border-gray-200 bg-slate-100 leading-none text-gray-900",name:"academic_level",autofocus:""},[W,(d(!0),i(g,null,b(m.levels,t=>(d(),i("option",{value:t.id},r(t.name),9,$))),256))],544),[[v,a(s).academic_level_id]])]),e("div",A,[_(e("select",{id:"deadline","onUpdate:modelValue":l[3]||(l[3]=t=>a(s).deadline=t),onChange:u,class:"w-full rounded-lg border-gray-200 leading-none bg-slate-100 text-gray-900",name:"deadline",autofocus:""},[G,(d(!0),i(g,null,b(m.rates,t=>(d(),i("option",{value:t.hours},r(t.name),9,H))),256))],544),[[v,a(s).deadline]])])]),e("div",J,[_(e("select",{id:"pages","onUpdate:modelValue":l[4]||(l[4]=t=>a(s).pages=t),onChange:u,class:"w-full border-gray-200 rounded-lg leading-none bg-slate-100 text-gray-900",name:"pages",autofocus:""},[K,Q,(d(),i(g,null,b(200,t=>e("option",{key:t,value:t},r(t)+" page(s) / "+r(t*275)+" words",9,X)),64))],544),[[v,a(s).pages]])]),e("div",Y,[e("p",Z,[f("Price: "),e("span",ee,"$"+r(p.value),1)])]),te],40,U),se,le]))}};export{ie as default};