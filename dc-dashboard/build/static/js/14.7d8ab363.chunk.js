(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[14],{621:function(e,t,a){"use strict";t.a="http://localhost:81"},732:function(e,t,a){"use strict";a.r(t);var c=a(164),n=a(159),s=a(160),i=a(162),o=a(161),l=a(20),r=a(1),d=a.n(r),j=a(632),h=a(636),u=a.n(h),b=a(622),p=a.n(b),m=a(621),g=a(620),x={headers:{"content-type":"multipart/form-data",Accept:"*"}},O=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var c;Object(n.a)(this,a),(c=t.call(this,e)).handleChange=function(e){c.setState(e)},c.submitHandler=function(e){e.preventDefault();var t=[];if(""!=c.state.file){p.a.delete("".concat(m.a,"/api/v1/delete/file/").concat(c.state.fileName));var a=new FormData;a.append("file",c.state.file),p.a.post("".concat(m.a,"/api/v1/upload"),a,x).then((function(e){c.setState({file:e.data.filename}),t={title:c.state.title,barcode:c.state.barcode,thumbnail:c.state.file,description:c.state.description,body:c.state.body,category_id:c.state.category_id},p.a.put("".concat(m.a)+"/api/v1/post/".concat(c.state.id),t).then((function(){window.location.href="".concat(window.origin,"/#/post")})).catch((function(e){console.log(e)}))})).catch((function(e){return console.log(e)}))}else t={title:c.state.title,barcode:c.state.barcode,description:c.state.description,body:c.state.body,category_id:c.state.category_id},p.a.put("".concat(m.a)+"/api/v1/post/".concat(c.state.id),t).then((function(){window.location.href="".concat(window.origin,"/#/post")})).catch((function(e){console.log(e)}))};var s=localStorage.getItem("uuid");return""!=s&&void 0!=s||(window.location.href="".concat(window.origin,"/#/login")),c.state={id:c.props.match.params.id,content:e.content,handleWYSIWYGInput:e.handleWYSIWYGInput,editor:u.a,title:"",barcode:"",file:[],description:"",body:"",fileName:"",url:"avatars/no_image.png",category:"",categoryOption:[],tagOption:[]},c}return Object(s.a)(a,[{key:"handleUploadChange",value:function(e){this.setState({file:e.target.files[0],url:URL.createObjectURL(e.target.files[0])})}},{key:"componentDidMount",value:function(){var e=this;p.a.get("".concat(m.a,"/api/v1/post/").concat(this.state.id)).then((function(t){e.setState({posts:t.data.data}),e.state.posts.map((function(t){e.setState({category:t.category_id,description:t.description,body:t.body,title:t.title,url:"".concat(m.a,"/uploads/").concat(t.thumbnail),barcode:t.barcode,fileName:t.thumbnail})}))})).catch((function(e){console.log(e)})),p.a.get("".concat(m.a,"/api/v1/category")).then((function(t){e.setState({categoryOption:t.data.data})})).catch((function(e){console.log(e)})),p.a.get("".concat(m.a,"/api/v1/tag")).then((function(t){e.setState({tagOption:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t=this;return Object(l.jsx)(g.f,{children:Object(l.jsx)(g.g,{children:Object(l.jsxs)(g.u,{onSubmit:this.submitHandler,children:[Object(l.jsxs)(g.N,{children:[Object(l.jsxs)(g.k,{className:"col-md-8 xs-8",children:[Object(l.jsx)(g.N,{children:Object(l.jsx)(g.k,{className:"md-12 xs-12",children:Object(l.jsxs)(g.v,{children:[Object(l.jsxs)(g.H,{children:["Post Name ",Object(l.jsx)("span",{className:"text-danger",children:"*"})]}),Object(l.jsx)(g.C,{className:"form-control",placeholder:"Enter Post Name",name:"title",value:this.state.title,onChange:function(e){return t.handleChange({title:e.target.value})}})]})})}),Object(l.jsx)(g.N,{children:Object(l.jsx)(g.k,{className:"md-12 xs-12",children:Object(l.jsxs)(g.v,{children:[Object(l.jsx)(g.H,{children:"Post Code "}),Object(l.jsx)(g.C,{className:"form-control",placeholder:"Enter Post Code",name:"barcode",value:this.state.barcode,onChange:function(e){return t.handleChange({barcode:e.target.value})}})]})})}),Object(l.jsx)(g.N,{children:Object(l.jsx)(g.k,{className:"md-12 xs-12",children:Object(l.jsxs)(g.v,{children:[Object(l.jsx)(g.H,{children:"Description"}),Object(l.jsx)(g.ab,{className:"form-control",placeholder:"Enter Description",name:"description",rows:"6",cols:"4",value:this.state.description,onChange:function(e){return t.handleChange({description:e.target.value})}})]})})}),Object(l.jsx)(g.N,{children:Object(l.jsx)(g.k,{className:"md-12 xs-12",children:Object(l.jsxs)(g.v,{children:[Object(l.jsx)(g.H,{children:"Content"}),Object(l.jsx)(j.CKEditor,{editor:u.a,data:this.state.body,config:{ckfinder:{uploadUrl:"".concat(m.a,"/api/v1/uploader")}},onChange:function(e,a){var c=a.getData();t.setState({body:c}),console.log(t.state.body)}})]})})})]}),Object(l.jsx)(g.k,{className:"col-md-4 col-xs-4",children:Object(l.jsx)(g.f,{children:Object(l.jsxs)(g.g,{children:[Object(l.jsxs)(g.f,{children:[Object(l.jsx)(g.g,{children:Object(l.jsx)(g.N,{children:Object(l.jsx)(g.k,{className:"md-12 xs-12",children:Object(l.jsx)(g.v,{children:Object(l.jsx)("img",{src:"".concat(this.state.url),alt:"logo",className:"img-fluid"})})})})}),Object(l.jsx)(g.h,{children:Object(l.jsx)(g.N,{children:Object(l.jsx)(g.k,{className:"md-12 xs-12",children:Object(l.jsx)(g.v,{children:Object(l.jsxs)("div",{className:"input-group mb-3",children:[Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("span",{className:"input-group-text",children:"Upload"})}),Object(l.jsxs)("div",{className:"custom-file",children:[Object(l.jsx)("input",(e={type:"file",className:"custom-file-input",id:"inputGroupFile01"},Object(c.a)(e,"className","custom-file-input"),Object(c.a)(e,"onChange",(function(e){return t.handleUploadChange(e)})),e)),Object(l.jsx)("label",{className:"custom-file-label",for:"inputGroupFile01",children:"Choose Image"})]})]})})})})})]}),Object(l.jsx)(g.N,{children:Object(l.jsx)(g.k,{className:"md-12 xs-12",children:Object(l.jsxs)(g.v,{children:[Object(l.jsxs)(g.H,{children:["Menu Post ",Object(l.jsx)("span",{className:"text-danger",children:"*"})]}),Object(l.jsx)(g.O,{name:"category_id",onChange:function(e){return t.handleChange({category_id:e.target.value})},children:this.state.categoryOption.map((function(e){return Object(l.jsx)("option",{selected:t.state.category==e.id,value:e.id,children:e.name},e.id)}))})]})})})]})})})]}),Object(l.jsx)(g.N,{children:Object(l.jsx)(g.k,{className:"md-12 xs-12",children:Object(l.jsxs)(g.v,{children:[Object(l.jsx)(g.e,{type:"submit",className:"float-right",children:"Public"}),Object(l.jsx)(g.e,{to:"/post",className:"float-right",children:"Cancel"})]})})})]})})})}}]),a}(d.a.Component);t.default=O}}]);
//# sourceMappingURL=14.7d8ab363.chunk.js.map