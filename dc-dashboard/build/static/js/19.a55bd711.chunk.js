(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{621:function(e,t,a){"use strict";t.a="http://localhost:81"},726:function(e,t,a){"use strict";a.r(t);var s=a(159),n=a(160),c=a(162),r=a(161),i=a(20),o=a(1),l=a.n(o),d=a(622),h=a.n(d),u=a(621),j=a(620),m=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).submitHandler=function(e){e.preventDefault();var t=[];t=""==n.state.password||void 0==n.state.password?{username:n.state.username,email:n.state.email,role_id:n.state.role,description:n.state.description}:{username:n.state.username,email:n.state.email,password:n.state.password,role_id:n.state.role,description:n.state.description},console.log(t),h.a.put("".concat(u.a)+"/api/v1/user/".concat(n.state.id),t).then((function(){window.location.href="".concat(window.origin,"/#/user")}))},n.handleChange=function(e){n.setState(e)};var c=localStorage.getItem("uuid");return""!=c&&void 0!=c||(window.location.href="".concat(window.origin,"/#/login")),n.state={id:n.props.match.params.id,users:[],rolesOption:[],username:"",email:"",password:"",roleSelected:"",description:""},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("".concat(u.a)+"/api/v1/role").then((function(t){e.setState({rolesOption:t.data.data})})).catch((function(e){console.log(e)})),h.a.get("".concat(u.a)+"/api/v1/user/".concat(this.state.id)).then((function(t){e.setState({users:t.data.data}),e.state.users.map((function(t){e.setState({username:t.username,email:t.email,roleSelected:t.role_id,description:t.description})}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(i.jsx)(j.f,{children:Object(i.jsx)(j.g,{children:Object(i.jsxs)(j.u,{children:[Object(i.jsx)(j.N,{children:Object(i.jsx)(j.k,{className:"md-12 xs-12",children:Object(i.jsxs)(j.v,{children:[Object(i.jsxs)(j.H,{children:["Username ",Object(i.jsx)("span",{className:"text-danger",children:"*"})]}),Object(i.jsx)(j.C,{className:"form-control",placeholder:"Enter Username",name:"username",value:this.state.username,onChange:function(t){return e.handleChange({username:t.target.value})}})]})})}),Object(i.jsx)(j.N,{children:Object(i.jsx)(j.k,{className:"md-12 xs-12",children:Object(i.jsxs)(j.v,{children:[Object(i.jsx)(j.H,{children:"Email"}),Object(i.jsx)(j.C,{className:"form-control",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:function(t){return e.handleChange({email:t.target.value})}})]})})}),Object(i.jsx)(j.N,{children:Object(i.jsx)(j.k,{className:"md-12 xs-12",children:Object(i.jsxs)(j.v,{children:[Object(i.jsxs)(j.H,{children:["Password ",Object(i.jsx)("span",{className:"text-danger",children:"*"})]}),Object(i.jsx)(j.C,{className:"form-control",placeholder:"Enter Password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange({password:t.target.value})}})]})})}),Object(i.jsx)(j.N,{children:Object(i.jsx)(j.k,{className:"md-12 xs-12",children:Object(i.jsxs)(j.v,{children:[Object(i.jsx)(j.H,{children:"Description"}),Object(i.jsx)(j.ab,{placeholder:"Enter Description",name:"description",value:this.state.description,onChange:function(t){return e.handleChange({description:t.target.value})}})]})})}),Object(i.jsx)(j.N,{children:Object(i.jsx)(j.k,{className:"md-12 xs-12",children:Object(i.jsxs)(j.v,{children:[Object(i.jsx)(j.e,{to:"/user",className:"float-right",children:"Cancel"}),Object(i.jsx)(j.e,{type:"submit",onClick:this.submitHandler,className:"float-right",children:"Save Change"})]})})})]})})})}}]),a}(l.a.Component);t.default=m}}]);
//# sourceMappingURL=19.a55bd711.chunk.js.map