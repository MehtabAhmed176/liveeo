"use strict";(self.webpackChunkliveeo=self.webpackChunkliveeo||[]).push([[92],{5092:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var a=t(2982),r=t(8683),s=t(5861),c=t(885),i=t(7757),o=t.n(i),l=t(4191),d=t(184);var u=function(e){var n=e.handleDelete;return(0,d.jsxs)("div",{children:[" ",(0,d.jsx)(l.YK6,{onClick:n,style:{fontSize:"17px",color:"#84829e"}})]})};var p=function(e){var n=e.handleUpdate;return(0,d.jsxs)("div",{children:[" ",(0,d.jsx)(l.dEB,{onClick:n,style:{fontSize:"17px",color:"#8698a1"}})]})};var h=function(e){var n=e.name,t=e.email,a=e.body,r=e.index,s=e.handleDelete,c=e.handleUpdate;return(0,d.jsxs)("div",{className:["card ".concat(4===r||5===r||10===r||11===r?"long-card":"")],children:[(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)("div",{className:"card-header",children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{style:{paddingLeft:"20px"},children:[(0,d.jsxs)("b",{children:[" ",n.slice(0,5)," "]})," "]})," "]})," ",(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{style:{paddingRight:"20px"},children:[" ",t," "]})," "]})," "]})," ",(0,d.jsxs)("p",{className:"card-body",children:[" ",a.slice(0,85)," "]})," ",(0,d.jsxs)("div",{className:"delete-btn",children:[(0,d.jsx)("div",{style:{marginRight:"5px"},children:(0,d.jsx)(p,{handleUpdate:c})}),(0,d.jsx)(u,{handleDelete:s})]})]})," "]})},x=t(7229),f=t.n(x),v=function(){var e=(0,s.Z)(o().mark((function e(){var n,t,a,r=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,f().get("https://jsonplaceholder.typicode.com/comments?_page=".concat(n,"&_limit=12"));case 3:return t=e.sent,a=parseInt(t.headers["x-total-count"])/12,e.abrupt("return",{data:t.data,totalPages:a});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=v,j=function(){var e=(0,s.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().delete("https://jsonplaceholder.typicode.com/comments/".concat(n));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),y=j,b=function(){var e=(0,s.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().post("https://jsonplaceholder.typicode.com/comments/",n);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=b,k=t(2791),C=t(6048),w=t.n(C);var Z=function(e){var n=e.isShow,t=e.isEdit,a=e.handleClose,r=e.value,s=e.handleChange,c=e.handleSave;return(0,d.jsx)("div",{id:"myModal",className:"modal",style:{display:"".concat(n?"block":"none")},children:(0,d.jsxs)("div",{className:"modal-content",children:[(0,d.jsx)("span",{className:"close",onClick:a,children:"\xd7"}),(0,d.jsx)("p",{children:"Add new Comments.."}),(0,d.jsx)("div",{children:(0,d.jsxs)("form",{children:[(0,d.jsx)("div",{children:(0,d.jsx)("input",{type:"text",value:r.body,onChange:s,placeholder:"type your comments...",className:"form-input-create"})}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{className:"save-btn",onClick:c,children:t?"Update":"Save"})})]})})]})})},N={display:"flex",justifyContent:"center",flexWrap:"wrap"},S={display:"flex",justifyContent:"space-between",alignItems:"center",margin:"19px 13px 12px 25px"};var D=function(){var e=(0,k.useState)([]),n=(0,c.Z)(e,2),t=n[0],i=n[1],l=(0,k.useState)(!1),u=(0,c.Z)(l,2),p=u[0],x=(u[1],(0,k.useState)(!1)),f=(0,c.Z)(x,2),v=f[0],j=f[1],b=(0,k.useState)(!1),C=(0,c.Z)(b,2),D=C[0],E=C[1],L=(0,k.useState)(1),U=(0,c.Z)(L,2),P=U[0],I=U[1],M=(0,k.useState)({id:"",name:"kabeer khan",email:"kabeer@gmail.com",body:""}),R=(0,c.Z)(M,2),z=R[0],W=R[1];function _(e){return A.apply(this,arguments)}function A(){return(A=(0,s.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(n);case 2:t=e.sent,console.log("response",t),I(t.totalPages),i(t.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(){var e=(0,s.Z)(o().mark((function e(){var n,s,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!D){e.next=7;break}console.log("I am from Edit"),console.log("id and body is",z.id,z.body),j(!v),E(!D),e.next=15;break;case 7:return n=Math.floor(1e3*Math.random())+500,s=(0,r.Z)((0,r.Z)({},z),{},{id:n}),W(s),c=[].concat((0,a.Z)(t),[s]),e.next=13,g(s);case 13:i(c),j(!v);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,k.useEffect)((function(){_()}),[]);var K=t.map((function(e,n){return(0,d.jsx)(h,{index:n,name:e.name,email:e.email,body:e.body,handleDelete:function(){return O(e.id)},handleUpdate:function(){return Y(e.id,e.body)}},e.id)})),O=function(){var e=(0,s.Z)(o().mark((function e(n){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(n);case 2:a=t.filter((function(e){return e.id!==n})),i(a);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Y=function(){var e=(0,s.Z)(o().mark((function e(n,t){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=(0,r.Z)((0,r.Z)({},z),{},{id:n,body:t}),W(a),j(!v),E(!D);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),q=function(){return j(!v)};return(0,d.jsxs)("div",{style:{maxWidth:"1000px"},children:[(0,d.jsxs)("div",{style:S,children:[(0,d.jsx)("h3",{children:"Comments"}),(0,d.jsx)("button",{className:"create-button",onClick:q,children:"Create comment"})]}),(0,d.jsx)("div",{style:N,children:p?"loading...":K}),(0,d.jsx)(w(),{breakLabel:"...",nextLabel:">",nextClassName:"next-nav",onPageChange:function(e){_(e.selected)},pageRangeDisplayed:1,pageCount:P,previousLabel:"<",previousClassName:"prev-nav",renderOnZeroPageCount:null,className:"pagination",pageClassName:"list",pageLinkClassName:"link"}),(0,d.jsx)("div",{children:(0,d.jsx)(Z,{isShow:v,isEdit:D,handleClose:q,value:z,handleChange:function(e){var n=(0,r.Z)((0,r.Z)({},z),{},{body:e.target.value});W(n)},handleSave:B})})]})}}}]);
//# sourceMappingURL=92.5b879570.chunk.js.map