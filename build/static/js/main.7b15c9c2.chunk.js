(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),o=t.n(c),a=t(15),s=t.n(a),i=t(3),u=t(4),d=t.n(u),b="/api/persons",l=function(){return d.a.get(b).then((function(e){return e.data}))},f=function(e){return d.a.post(b,e).then((function(e){return e.data}))},j=function(e){return d.a.put("".concat(b,"/").concat(e.id),e).then((function(e){return e.data}))},h=function(e){return d.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},m=function(e){var n=e.filter,t=e.handleFilter;return Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:n,onChange:t})]})},p=t(6),O=function(e){var n=e.persons,t=e.setPersons,o=e.snackbar,a=Object(c.useState)(""),s=Object(i.a)(a,2),u=s[0],d=s[1],b=Object(c.useState)(""),l=Object(i.a)(b,2),h=l[0],m=l[1];return Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r={name:u,number:h};if(""===r.name||""===r.number)o("Please enter name and number","error");else if(n.filter((function(e){return e.name===r.name})).length>0){if(window.confirm("".concat(r.name," already added to phonebook, replace the old number with a new one?"))){var c=n.filter((function(e){return e.name===u}))[0];j(Object(p.a)(Object(p.a)({},c),{},{number:r.number})).then((function(e){t(n.map((function(n){return n.id===c.id?e:n}))),d(""),m(""),o("".concat(c.name," number was successfully updated"),"success")})).catch((function(){t(n.filter((function(e){return e.id!==c.id}))),o("".concat(c.name," does not exist"),"error")}))}}else f(r).then((function(e){t(n.concat(e)),d(""),m(""),o("Added ".concat(r.name),"success")}))},children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:u,onChange:function(e){d(e.target.value)}})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:h,onChange:function(e){m(e.target.value)}})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})},x=function(e){var n=e.persons,t=e.person,c=e.setPersons,o=e.snackbar;return Object(r.jsxs)("div",{children:[t.name," ",t.number,Object(r.jsx)("button",{onClick:function(){return e=t.id,void(window.confirm("Delete ".concat(t.name,"?"))&&h(e).then((function(){o("".concat(t.name," has been successfully removed from server"),"success")})).catch((function(){o("".concat(t.name," has been already removed from server"),"error")})).finally((function(){c(n.filter((function(n){return n.id!==e})))})));var e},children:"delete"})]})},v=function(e){var n=e.persons,t=e.filtered,c=e.setPersons,o=e.snackbar,a=""===t?n:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(r.jsx)("div",{children:a.map((function(e,t){return Object(r.jsx)(x,{persons:n,person:e,setPersons:c,snackbar:o},t)}))})},g=function(e){var n=e.title;return Object(r.jsx)("h2",{children:n})},k=function(e){var n=e.notification,t=n.text,c=n.type,o={color:"error"===c?"red":"green",backgroundColor:"lightgrey",border:"error"===c?"1px solid red":"1px solid green",padding:"5px",margin:"0px 0px 10px 0px"};return""===t?null:Object(r.jsx)("div",{style:o,children:t})},y=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],a=Object(c.useState)(""),s=Object(i.a)(a,2),u=s[0],d=s[1],b=Object(c.useState)({text:"",type:""}),f=Object(i.a)(b,2),j=f[0],h=f[1];Object(c.useEffect)((function(){l().then((function(e){o(e)}))}),[]);var p=function(e,n){h({text:e,type:n}),setTimeout((function(){return h({text:"",type:""})}),3e3)};return Object(r.jsxs)("div",{children:[Object(r.jsx)(g,{title:"Phonebook"}),Object(r.jsx)(k,{notification:j}),Object(r.jsx)(m,{filtered:u,handleFilter:function(e){d(e.target.value)}}),Object(r.jsx)(g,{title:"add a new"}),Object(r.jsx)(O,{persons:t,setPersons:o,snackbar:p}),Object(r.jsx)(g,{title:"Numbers"}),Object(r.jsx)(v,{persons:t,filtered:u,setPersons:o,snackbar:p})]})};s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.7b15c9c2.chunk.js.map