(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{13:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},23:function(t,e,a){},24:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),i=a(15),s=a(12),d=a(5),l=a(6),b=a(9),m=a(7),p=a(3),u=a(13),h=a(4),g=a(8),x=a(2);var j=Object(x.a)("form",{target:"e1tlsoj03"})({name:"hwcqhj",styles:"display:flex;flex-direction:column;align-items:center;width:500px;margin:0 auto;border:1px solid var(--bs-gray-600);padding-top:20px;padding-bottom:20px"}),f=Object(x.a)("label",{target:"e1tlsoj02"})({name:"pr10xp",styles:"margin-bottom:10px"}),O=Object(x.a)("input",{target:"e1tlsoj01"})({name:"1azpx8r",styles:"margin-bottom:20px"}),v=Object(x.a)("button",{target:"e1tlsoj00"})({name:"qflsm9",styles:"display:flex;align-items:center;padding:10px;background-color:var(--bs-cyan);color:var(--bs-light);box-shadow:0 3px var(--bs-info);border-radius:5px;&:hover{background-color:var(--bs-info);box-shadow:0 3px var(--bs-cyan);}&:active{margin-top:2px;margin-bottom:-2px;background-color:var(--bs-cyan);box-shadow:0 -2px 0 0 var(--bs-info);}"}),y=a(1),C=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameId=Object(p.a)(),t.numberId=Object(p.a)(),t.handleChange=function(e){var a=e.currentTarget,n=a.name,r=a.value;t.setState(Object(h.a)({},n,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.number;return Object(y.jsxs)(j,{onSubmit:this.handleSubmit,children:[Object(y.jsx)(f,{htmlFor:this.nameId,children:"Name"}),Object(y.jsx)(O,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:this.nameId,value:e,onChange:this.handleChange}),Object(y.jsx)(f,{htmlFor:this.numberId,children:"Number"}),Object(y.jsx)(O,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:this.numberId,value:a,onChange:this.handleChange}),Object(y.jsxs)(v,{type:"submit",children:[Object(y.jsx)(g.b,{size:20,style:{marginRight:10}}),"Add contact"]})]})}}]),a}(n.Component);var w=Object(x.a)("div",{target:"e16t0fpd1"})({name:"b4rmc5",styles:"display:flex;flex-direction:column;align-items:center;width:300px;margin:0 auto"}),k=Object(x.a)("label",{target:"e16t0fpd0"})({name:"pr10xp",styles:"margin-bottom:10px"});function A(t){var e=t.value,a=t.onChange,n=Object(p.a)();return Object(y.jsxs)(w,{children:[Object(y.jsx)(k,{htmlFor:n,children:"Find contacts by name"}),Object(y.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:e,id:n,onChange:a})]})}var S=Object(x.a)("ul",{target:"ebua8sb2"})({name:"1m0qdp3",styles:"display:flex;align-items:center;flex-direction:column;margin:0 auto;margin-top:30px;width:500px"}),z=Object(x.a)("li",{target:"ebua8sb1"})({name:"19k9m7i",styles:"display:flex;padding:10px;align-items:center;&:not(:last-of-type){margin-bottom:10px;}"}),F=Object(x.a)("button",{target:"ebua8sb0"})({name:"1ee0khb",styles:"display:flex;align-items:center;justify-content:center;padding:10px;margin-left:20px;background-color:var(--bs-cyan);color:var(--bs-light);box-shadow:0 3px var(--bs-info);border-radius:5px;&:hover{background-color:var(--bs-info);box-shadow:0 3px var(--bs-cyan);}&:active{margin-top:2px;margin-bottom:-2px;background-color:var(--bs-cyan);box-shadow:0 -2px 0 0 var(--bs-info);}"});function q(t){var e=t.getContact,a=t.onDeleteContact;return Object(y.jsx)(S,{children:e.map((function(t){var e=t.id,n=t.name,r=t.number;return Object(y.jsxs)(z,{children:[Object(y.jsx)("p",{children:"".concat(n,": ").concat(r)}),Object(y.jsxs)(F,{onClick:function(){return a(e)},children:[Object(y.jsx)(g.a,{style:{marginRight:10}}),"Delete"]})]},e)}))})}var I=Object(x.a)("div",{target:"e17cin2d3"})({name:"xg67yz",styles:"width:1200px;margin:0 auto;padding-left:20px;padding-right:20px"}),Z=Object(x.a)("h1",{target:"e17cin2d2"})({name:"1b6so4a",styles:"text-align:center;padding-top:30px;padding-bottom:30px"}),J=Object(x.a)("h2",{target:"e17cin2d1"})({name:"3x8i3q",styles:"padding-top:20px;padding-bottom:20px;text-align:center"}),N=Object(x.a)("p",{target:"e17cin2d0"})({name:"1dhbs2p",styles:"text-align:center;padding-top:30px"}),D=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:u,filter:""},t.setContact=function(e){var a=t.state.contacts,n=e.name.toLowerCase(),r=a.find((function(t){return t.name.toLowerCase().includes(n)}));if(r)return alert("".concat(e.name," is already in contacts"));var o=Object(s.a)({id:Object(p.a)()},e);t.setState((function(t){var e=t.contacts;return{contacts:[o].concat(Object(i.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getContact=function(){var e=t.state,a=e.filter,n=e.contacts,r=a.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e})),filter:""}}))},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.filter,a=t.contacts,n=this.setContact,r=this.changeFilter,o=(0,this.getContact)();return Object(y.jsxs)(I,{children:[Object(y.jsx)(Z,{children:"Phonebook"}),Object(y.jsx)(C,{onSubmit:n}),Object(y.jsx)(J,{children:"Contacts"}),Object(y.jsx)(A,{value:e,onChange:r}),a.length?Object(y.jsx)(q,{getContact:o,onDeleteContact:this.deleteContact}):Object(y.jsx)(N,{children:"Phonebook is Empty"})]})}}]),a}(n.Component);a(23);c.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(D,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.f6225c99.chunk.js.map