(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[9],{621:function(e,t,c){"use strict";t.a="http://localhost:81"},741:function(e,t,c){"use strict";c.r(t);var a=c(159),n=c(160),o=c(162),i=c(161),l=c(20),s=c(1),d=c.n(s),r=c(622),u=c.n(r),h=c(628),j=c.n(h),b=c(621),m=c(620),f=function(e){Object(o.a)(c,e);var t=Object(i.a)(c);function c(e){var n;Object(a.a)(this,c),(n=t.call(this,e)).fields=[{key:"id",label:"ID",_style:{width:"10%"}},{key:"name",label:"Name",_style:{width:"20%"}},{key:"logo",label:"Logo",_style:{width:"10%"}},{key:"phone",label:"Phone",_style:{width:"10%"}},{key:"email",label:"Email",_style:{width:"10%"}},{key:"createdAt",label:"Record Date",_style:{width:"5%"}},{key:"updatedAt",label:"Modify Date",_style:{width:"5%"}},{key:"action",_style:{width:"15%"}}];var o=localStorage.getItem("uuid");return""!=o&&void 0!=o||(window.location.href="".concat(window.origin,"/#/login")),n.state={companies:[]},n}return Object(n.a)(c,[{key:"componentDidMount",value:function(){var e=this;u.a.get("".concat(b.a)+"/api/v1/company/1").then((function(t){e.setState({companies:t.data.data}),console.log(e.state.companies)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(l.jsx)(m.f,{children:Object(l.jsx)(m.g,{children:Object(l.jsx)(m.n,{items:this.state.companies,fields:this.fields,sorter:!0,scopedSlots:{action:function(e){return Object(l.jsx)("td",{children:Object(l.jsx)(m.e,{to:"/company/edit/".concat(e.id),className:"btn btn-secondary mr-2",size:"sm",children:"Edit"})})},logo:function(e){return Object(l.jsx)("td",{children:Object(l.jsx)("a",{href:"".concat(b.a,"/uploads/").concat(e.logo),children:Object(l.jsx)("img",{className:"img-fluid rounded",width:"100%",height:"100%",src:"".concat(b.a,"/uploads/").concat(e.logo)})})})},createdAt:function(e){return Object(l.jsx)("td",{children:Object(l.jsx)(j.a,{format:"YYYY/MMM/DD",children:e.createdAt})})},updatedAt:function(e){return Object(l.jsx)("td",{children:Object(l.jsx)(j.a,{format:"YYYY/MMM/DD",children:e.updatedAt})})}}})})})}}]),c}(d.a.Component);t.default=f}}]);
//# sourceMappingURL=9.33a29344.chunk.js.map