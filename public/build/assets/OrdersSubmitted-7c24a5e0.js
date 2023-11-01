import{_ as m}from"./ClientLayout-89c8cb02.js";import{O as h}from"./OrdersCard-1b29cb49.js";import{o as l,g as i,a as t,d as a,w as s,F as c,H as _,b as e,L as n,f as r,h as x,t as u}from"./app-7cfb65c9.js";import"./NavLink-c5717994.js";import"./ApplicationLogo-7b42fb0a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FlashMessage-f45d1e5c.js";import"./FooterGlobal-409d70a9.js";const f=e("h1",{class:"pt-4 font-bold sm:font-extrabold text-indigo-900 leading-8 text-xl md:text-4xl"}," Submitted Orders ",-1),b=e("p",{class:"text-xs text-gray-500 p-4"},[e("span",{class:"font-bold"},"About: "),r("Submitted orders awaiting confirmation. ")],-1),g={class:"bg-white text-gray-900 rounded"},v={class:"m-3 ml-4 p-4 lg:pt-6"},w={class:"md:grid md:grid-cols-3 pb-6"},O=e("div",{class:"text-center underline text-indigo-500 col-span-3"},[e("h3",null,"Recently Submitted Orders")],-1),y={class:"md:col-span-2 lg:col-span-3 text-sm md:text-base space-y-6"},S={class:"flex justify-between md:max-w-2/3 lg:w-full mx-auto border-b border-indigo-100"},k={class:"text-xs"},N={class:"p-2"},T={__name:"OrdersSubmitted",props:{submittedOrders:Object},setup(p){return(o,B)=>(l(),i(c,null,[t(a(_),{title:`Submitted Orders: ${o.$page.props.websiteName}`},null,8,["title"]),t(m,null,{header:s(()=>[f,b]),default:s(()=>[e("section",null,[t(h,null,{default:s(()=>[e("section",g,[e("div",v,[t(a(n),{href:o.route("orders.new"),class:"mx-auto p-2 px-4 bg-slate-200 text-purple-900 hover:underline border border-slate-700 rounded hover:bg-slate-300 hover:text-purple-800 active:bg-slate-400 active:ring-purple-900 transition ease-in-out hover:duration-500 active:duration-500"},{default:s(()=>[r(" New Order ")]),_:1},8,["href"])]),e("div",null,[e("div",w,[O,e("div",y,[(l(!0),i(c,null,x(p.submittedOrders,d=>(l(),i("div",S,[e("div",null,[e("p",null,"Order Topic: "+u(d.title),1),e("p",k,[r("Order Id: "),e("span",null,"#"+u(d.id),1)])]),e("div",N,[t(a(n),{href:o.route("orders.show",d.id),class:"text-sky-400 hover:text-sky-500 underline mx-2"},{default:s(()=>[r(" view ")]),_:2},1032,["href"]),t(a(n),{href:o.route("orders.delete",d.id),class:"text-red-400 hover:text-red-500 underline mx-2"},{default:s(()=>[r("Delete")]),_:2},1032,["href"])])]))),256))])])])])]),_:1})])]),_:1})],64))}};export{T as default};