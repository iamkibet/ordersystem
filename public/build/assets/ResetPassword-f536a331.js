import{u as c,o as f,c as w,w as n,a as e,d as o,H as _,b as r,z as V,f as g,n as b}from"./app-7cfb65c9.js";import{_ as v}from"./GuestLayout-4869af10.js";import{_ as l,a as m}from"./InputError-760d4d9c.js";import{_ as i}from"./InputLabel-98023fe9.js";import{_ as k}from"./PrimaryButton-3d24646e.js";import"./ApplicationLogo-7b42fb0a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FooterGlobal-409d70a9.js";const x={class:"max-w-md my-12 mx-auto shadow-md p-8 rounded-lg"},y=["onSubmit"],P={class:"mt-4"},$={class:"mt-4"},h={class:"flex items-center justify-end mt-4"},H={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.store"),{onFinish:()=>s.reset("password","password_confirmation")})};return(S,a)=>(f(),w(v,null,{default:n(()=>[e(o(_),{title:"Reset Password"}),r("div",x,[r("form",{onSubmit:V(u,["prevent"])},[r("div",null,[e(i,{for:"email",value:"Email"}),e(l,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o(s).email,"onUpdate:modelValue":a[0]||(a[0]=t=>o(s).email=t),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),r("div",P,[e(i,{for:"password",value:"Password"}),e(l,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>o(s).password=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),r("div",$,[e(i,{for:"password_confirmation",value:"Confirm Password"}),e(l,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>o(s).password_confirmation=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),r("div",h,[e(k,{class:b({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:n(()=>[g(" Reset Password ")]),_:1},8,["class","disabled"])])],40,y)])]),_:1}))}};export{H as default};
