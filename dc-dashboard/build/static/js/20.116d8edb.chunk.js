(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{621:function(e,t,n){"use strict";t.a="http://localhost:81"},724:function(e,t,n){"use strict";n.r(t);var a=n(159),s=n(160),c=n(162),i=n(161),o=n(20),r=n(1),l=n.n(r),d=n(622),u=n.n(d),h=n(626),f=n.n(h),j=n(628),b=n.n(j),m=n(621),w=n(620),p=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var s;Object(a.a)(this,n),(s=t.call(this,e)).fields=[{key:"id",label:"ID",_style:{width:"10%"}},{key:"username",label:"Username",_style:{width:"10%"}},{key:"email",label:"Email",_style:{width:"10%"}},{key:"createdAt",label:"Record Date",_style:{width:"20%"}},{key:"updatedAt",label:"Modify Date",_style:{width:"20%"}},{key:"action",_style:{width:"15%"}}],s.userDelete=function(){u.a.delete("".concat(m.a)+"/api/v1/user/".concat(s.state.id)).then((function(){s.setState({show:!1}),window.location.reload()})).catch((function(e){console.log(e)}))},s.hideAlert=function(){s.setState({show:!1})};var c=localStorage.getItem("uuid");return""!=c&&void 0!=c||(window.location.href="".concat(window.origin,"/#/login")),s.state={id:s.props.match.params.id,users:[],show:!1,messageAlert:""},s}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;u.a.get("".concat(m.a)+"/api/v1/user").then((function(t){e.setState({users:t.data.data}),console.log(e.state.users)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(o.jsxs)(w.f,{children:[Object(o.jsx)(w.g,{children:Object(o.jsx)(w.n,{items:this.state.users,fields:this.fields,sorter:!0,scopedSlots:{action:function(e){return Object(o.jsx)("td",{children:Object(o.jsx)(w.e,{to:"/user/edit/".concat(e.id),className:"btn btn-secondary mr-2",size:"sm",children:"Edit"})})},createdAt:function(e){return Object(o.jsx)("td",{children:Object(o.jsx)(b.a,{format:"YYYY/MMM/DD",children:e.createdAt})})},updatedAt:function(e){return Object(o.jsx)("td",{children:Object(o.jsx)(b.a,{format:"YYYY/MMM/DD",children:e.updatedAt})})}}})}),Object(o.jsx)(f.a,{show:this.state.show,warning:!0,showCancel:!0,confirmBtnText:"Yes, delete it!",confirmBtnBsStyle:"danger",cancelBtnBsStyle:"default",title:"Are you sure?",onConfirm:this.userDelete,onCancel:this.hideAlert})]})}}]),n}(l.a.Component);t.default=p}}]);
//# sourceMappingURL=20.116d8edb.chunk.js.map