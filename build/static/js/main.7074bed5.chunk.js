(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),c=t.n(o),u=t(2),l=t(3),i=t.n(l),m=function(){return i.a.get("/persons").then((function(e){return e.data}))},s=function(e){return i.a.post("/persons",e).then((function(e){return e.data}))},f=function(e){return i.a.delete("".concat("/persons","/").concat(e)).then((function(e){return e.data}))},d=function(e,n){return i.a.put("".concat("/persons","/").concat(e),n).then((function(e){return e.data}))},b=function(e){var n=e.newFilter,t=e.onInputChange;return r.a.createElement("p",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},h=function(e){return r.a.createElement("form",{onSubmit:e.onSubmitChange},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.nameValue,onChange:e.onNameChange})," ",r.a.createElement("br",null),"number:"," ",r.a.createElement("input",{value:e.numberValue,onChange:e.onNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},p=function(e){var n=e.name,t=e.number,a=e.id,o=e.onButtonClick;return r.a.createElement("p",null,n," ",t,r.a.createElement("button",{onClick:function(){return o(n,a)}},"Delete"))},g=function(e){var n=e.list,t=e.onButtonClick;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(p,{key:e.name,name:e.name,number:e.number,id:e.id,onButtonClick:t})})))},E=t(4),v=function(e){var n=e.notificationObject,t={background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"},a=Object(E.a)({color:"green"},t),o=Object(E.a)({color:"red"},t);return null==n?null:r.a.createElement("div",{style:"success"===n.type?a:o},n.message)},C=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),l=Object(u.a)(c,2),i=l[0],p=l[1],E=Object(a.useState)(""),C=Object(u.a)(E,2),w=C[0],j=C[1],O=Object(a.useState)(""),k=Object(u.a)(O,2),S=k[0],y=k[1],B=Object(a.useState)(null),N=Object(u.a)(B,2),x=N[0],L=N[1];Object(a.useEffect)((function(){m().then((function(e){o(e)})).catch((function(e){return D("there has been an error","error")}))}),[]);var V=function(){j(""),p("")},D=function(e,n){L({message:e,type:n}),setTimeout((function(){L(null)}),5e3)},I=""!==S?t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())})):t;return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(v,{notificationObject:x}),r.a.createElement(b,{newFilter:S,onInputChange:function(e){y(e.target.value)}}),r.a.createElement("h2",null,"Add a new person"),r.a.createElement(h,{onSubmitChange:function(e){e.preventDefault(),console.log(t);var n={name:i,number:w},a=t.filter((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}));a.length>0?function(e,n){window.confirm("".concat(e.name," is already added to phonebook, replace the older number with a new one?"))?d(e.id,n).then((function(n){o(t.map((function(t){return t.id!==e.id?t:n}))),V(),D("Number for ".concat(e.name," was changed"),"success")})):V()}(a[0],n):s(n).then((function(e){o(t.concat(e)),V(),D("".concat(e.name," was added to the Phonebook"),"success")}))},nameValue:i,onNameChange:function(e){p(e.target.value)},numberValue:w,onNumberChange:function(e){j(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(g,{list:I,onButtonClick:function(e,n){f(n).then((function(a){window.confirm("Delete ".concat(e,"?"))?(o(t.filter((function(e){return e.id!==n}))),D("".concat(e," has been deleted"),"success")):o(t)})).catch((function(n){D("".concat(e," has already been deleted"),"error")}))}}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7074bed5.chunk.js.map