(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={form:"Form_form__2XL27",formItem:"Form_formItem__32_VV",label:"Form_label__1_LXW",inputField:"Form_inputField__2gjDX",input:"Form_input__2f1Ot",formItemBar:"Form_formItemBar__1QWPI",error:"Form_error__OhT0B",tooltip:"Form_tooltip__1Nqtb",tooltiptext:"Form_tooltiptext__1M9t9",button:"Form_button__nVP8k",emptyFieldMsg:"Form_emptyFieldMsg__fUIgB"}},function(e,t,a){e.exports={wrapper:"ListWrapper_wrapper__1MDnI",table:"ListWrapper_table__RX12w",header:"ListWrapper_header__17Q26",title:"ListWrapper_title__dGNA0",info:"ListWrapper_info__1XApk"}},function(e,t,a){e.exports={row:"ListItem_row__HTgsc",appear:"ListItem_appear__N0hUZ",data:"ListItem_data__11LxT",removeBtn:"ListItem_removeBtn__1tr44"}},function(e,t,a){e.exports={wrapper:"Popup_wrapper__9-GzQ",popup:"Popup_popup__38YZB",userName:"Popup_userName__3eiNz",popupTxt:"Popup_popupTxt__2geY2",closeBtn:"Popup_closeBtn__1USZl",confirm:"Popup_confirm__2x1Im",cancel:"Popup_cancel__2_1md"}},function(e,t,a){e.exports={wrapper:"Modal_wrapper__3rU2w",popup:"Modal_popup__1C--t",popupTxt:"Modal_popupTxt__3EcaI",closeBtn:"Modal_closeBtn__2n_9g",confirm:"Modal_confirm__2JPJO",cancel:"Modal_cancel__3hrTI"}},,,,,,function(e,t,a){e.exports={wrapper:"Sort_wrapper__2P_qn",title:"Sort_title__2gYlB",button:"Sort_button__jRsoj"}},function(e,t,a){e.exports={header:"App_header__2q72L",info:"App_info__2GcbP",delete:"App_delete__-vZBl",removeAllBtn:"App_removeAllBtn__362Xm"}},,,,,function(e){e.exports=[{nickname:"Cat",email:"cat@gmail.com",ip:"127.255.255",date:1559931484789},{nickname:"Dog",email:"dog@gmail.com",ip:"127.255.255",date:1560070428867},{nickname:"Wolf",email:"wolf@gmail.com",ip:"127.255.255",date:1559931972489}]},,function(e,t,a){e.exports=a(26)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(16),l=a.n(r),i=(a(25),a(14)),o=a(6),m=a(7),c=a(9),p=a(8),u=a(10),d=a(12),h=a.n(d),_=a(17),N=a(3),E=a.n(N),f=a(4),g=a.n(f),v=function(e){var t=e.closePopupFn,a=e.deleteUserFn,s=e.nick;return n.a.createElement("div",{className:g.a.wrapper},n.a.createElement("button",{onClick:t,className:g.a.closeBtn}),n.a.createElement("div",{className:g.a.popup},n.a.createElement("p",{className:g.a.popupTxt},"Are you sure you want to delete user ",n.a.createElement("span",{className:g.a.userName},s),"?"),n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return a(s)},className:g.a.confirm},"Yes"),n.a.createElement("button",{onClick:t,className:g.a.cancel},"Cancel"))))},b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={isPopupOpen:!1},a.openPopup=function(){a.setState({isPopupOpen:!0})},a.closePopup=function(){a.setState({isPopupOpen:!1})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.isPopupOpen;return n.a.createElement("tr",{className:E.a.row},n.a.createElement("td",{className:E.a.data},this.props.nickname),n.a.createElement("td",{className:E.a.data},this.props.email),n.a.createElement("td",{className:E.a.data},this.props.ip),n.a.createElement("td",{className:E.a.data},new Date(this.props.date).toLocaleString("pl-PL",{day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric"})),n.a.createElement("td",{className:E.a.data},n.a.createElement("button",{onClick:this.openPopup,className:E.a.removeBtn})),e&&n.a.createElement(v,{deleteUserFn:this.props.deleteUserFn,nick:this.props.nickname,closePopupFn:this.closePopup}))}}]),t}(n.a.Component),k=a(2),w=a.n(k),y=function(e){return n.a.createElement("div",{className:w.a.wrapper},e.items.length?n.a.createElement("table",{className:w.a.table},n.a.createElement("tr",{className:w.a.header},n.a.createElement("th",{className:w.a.title},"Nickname"),n.a.createElement("th",{className:w.a.title},"Email"),n.a.createElement("th",{className:w.a.title},"IP address"),n.a.createElement("th",{className:w.a.title},"Date"),n.a.createElement("th",null)),e.items.map(function(t){return n.a.createElement(b,Object.assign({deleteUserFn:e.delete,key:t.nickname},t))})):n.a.createElement("h2",{className:w.a.info},"The list is empty"))},F=a(13),C=a(18),B=a(1),I=a.n(B),P=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),O=RegExp(/^(?=.*[^\.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$/),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={userName:null,ip:null,email:null,formErrors:{userName:"",ip:"",email:""}},a.handleChange=function(e){e.preventDefault();var t=e.target,s=t.name,n=t.value,r=Object(C.a)({},a.state.formErrors),l=a.props.items;switch(s){case"userName":n.length<3?r.userName="Minimum 3 characaters required.":r.userName=n.length>10?r.userName="Nickname can contain up to 10 characters.":r.userName=-1!==n.indexOf(" ")?r.userName="The given name contains space.":r.userName=l.filter(function(e){return e.nickname.toLowerCase()===n.toLowerCase()}).length>0?r.userName="This nickname is already on the list.":r.userName="";break;case"ip":r.ip=O.test(n)?"":"Wrong IP adress format.";break;case"email":l.filter(function(e){return e.email.toLowerCase()===n.toLowerCase()}).length>0?r.email="This e-mail is already on the list.":r.email=P.test(n)?r.email="":r.email="Invalid email address."}a.setState(Object(F.a)({formErrors:r},s,n))},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.formErrors;return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("form",{className:I.a.form,onSubmit:this.props.submitFn,noValidate:!0},n.a.createElement("div",{className:I.a.formItem},n.a.createElement("label",{htmlFor:"userName",className:I.a.label},"Nickname"),n.a.createElement("div",{className:I.a.inputField},n.a.createElement("input",{className:I.a.input,placeholder:"Enter user name",type:"text",name:"userName",noValidate:!0,onChange:this.handleChange}),n.a.createElement("div",{className:e.userName.length>0?I.a.tooltip:null},n.a.createElement("span",{className:""!==this.props.msgNick?I.a.emptyFieldMsg:null},this.props.msgNick),e.userName.length>0&&n.a.createElement("span",{className:I.a.tooltiptext},e.userName))),n.a.createElement("div",{className:e.userName.length>0?I.a.error:I.a.formItemBar})),n.a.createElement("div",{className:I.a.formItem},n.a.createElement("label",{htmlFor:"email",className:I.a.label},"Email"),n.a.createElement("div",{className:I.a.inputField},n.a.createElement("input",{className:I.a.input,placeholder:"Enter e-mail adress",type:"email",name:"email",noValidate:!0,onChange:this.handleChange}),n.a.createElement("div",{className:e.email.length>0?I.a.tooltip:null},n.a.createElement("span",{className:""!==this.props.msgMail?I.a.emptyFieldMsg:null},this.props.msgMail),e.email.length>0&&n.a.createElement("span",{className:I.a.tooltiptext},e.email))),n.a.createElement("div",{className:e.email.length>0?I.a.error:I.a.formItemBar})),n.a.createElement("div",{className:I.a.formItem},n.a.createElement("label",{htmlFor:"ip",className:I.a.label},"IP address"),n.a.createElement("div",{className:I.a.inputField},n.a.createElement("input",{className:I.a.input,placeholder:"Enter IP address",type:"text",name:"ip",noValidate:!0,onChange:this.handleChange}),n.a.createElement("div",{className:e.ip.length>0?I.a.tooltip:null},n.a.createElement("span",{className:""!==this.props.msgIP?I.a.emptyFieldMsg:null},this.props.msgIP),e.ip.length>0&&n.a.createElement("span",{className:I.a.tooltiptext},e.ip))),n.a.createElement("div",{className:e.ip.length>0?I.a.error:I.a.formItemBar})),n.a.createElement("button",{type:"submit",className:I.a.button,disabled:this.state.formErrors.email.length>0||this.state.formErrors.userName.length>0||this.state.formErrors.ip.length>0||!this.state.userName||!this.state.ip||!this.state.email},"Add user"))))}}]),t}(n.a.Component),L=a(5),x=a.n(L),j=function(e){var t=e.closeModalFn,a=e.deleteListFn;return n.a.createElement("div",{className:x.a.wrapper},n.a.createElement("button",{onClick:t,className:x.a.closeBtn}),n.a.createElement("div",{className:x.a.popup},n.a.createElement("p",{className:x.a.popupTxt},"Are you sure you want to delete all users?"),n.a.createElement("div",null,n.a.createElement("button",{onClick:a,className:x.a.confirm},"Yes"),n.a.createElement("button",{onClick:t,className:x.a.cancel},"Cancel"))))},S=a(11),T=a.n(S),A=function(e){var t=e.sortByNameFn,a=e.sortByEmailFn,s=e.sortByDateFn;return n.a.createElement("section",{className:T.a.wrapper},n.a.createElement("h2",{className:T.a.title},"Sort list by:"),n.a.createElement("button",{className:T.a.button,onClick:t},"nickname"),n.a.createElement("button",{className:T.a.button,onClick:a},"e-mail"),n.a.createElement("button",{className:T.a.button,onClick:s},"date"))},D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={items:Object(i.a)(_),isModalOpen:!1,messageNick:"",messageMail:"",messageIP:""},a.sortByName=function(){var e=a.state.items;a.setState({users:e.sort(function(e,t){return e.nickname.toLowerCase()<t.nickname.toLowerCase()?-1:e.nickname.toLowerCase()>t.nickname.toLowerCase()?1:0})})},a.sortByEmail=function(){var e=a.state.items;a.setState({users:e.sort(function(e,t){return e.email.toLowerCase()<t.email.toLowerCase()?-1:e.email.toLowerCase()>t.email.toLowerCase()?1:0})})},a.sortByDate=function(){var e=a.state.items;a.setState({users:e.sort(function(e,t){return t.date-e.date})})},a.deleteUsers=function(e){var t=a.state.items;a.setState({users:t.length=0,isModalOpen:!1})},a.addItem=function(e){e.preventDefault();var t={nickname:e.target[0].value,email:e.target[1].value,ip:e.target[2].value,date:Date.now()};e.target[0].value.length<1?a.setState({messageNick:"This field is required"}):e.target[1].value.length<1?a.setState({messageMail:"This field is required."}):e.target[2].value.length<1?a.setState({messageIP:"This field is required."}):(""!==e.target[0].value&&""!==e.target[1].value&&""!==e.target[2].value&&a.setState(function(e){return{items:[t].concat(Object(i.a)(e.items)),message:"The new user has been added successfully."}}),e.target.reset())},a.openModal=function(){a.setState({isModalOpen:!0})},a.closeModal=function(){a.setState({isModalOpen:!1})},a.deleteUser=function(e){var t=Object(i.a)(a.state.items);t=t.filter(function(t){return t.nickname!==e}),a.setState({items:t,message:"User ".concat(e," has been successfully removed.")})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;""===this.state.messageNick&&""===this.state.messageMail&&""===this.state.messageIP&&""===this.state.message||setTimeout(function(){return e.setState({messageNick:"",messageMail:"",messageIP:"",message:""})},2e3)}},{key:"render",value:function(){var e=this.state,t=e.isModalOpen,a=e.messageNick,s=e.messageMail,r=e.messageIP;return n.a.createElement("div",null,n.a.createElement("header",{className:h.a.header},n.a.createElement("h1",null,"Crypto users")),n.a.createElement("section",null,n.a.createElement(M,{items:this.state.items,submitFn:this.addItem,msgNick:a,msgMail:s,msgIP:r})),n.a.createElement(A,{sortByNameFn:this.sortByName,sortByEmailFn:this.sortByEmail,sortByDateFn:this.sortByDate}),n.a.createElement("section",null,n.a.createElement("div",null,this.state.message&&n.a.createElement("h3",{className:h.a.info},this.state.message)),n.a.createElement(y,{items:this.state.items,delete:this.deleteUser}),n.a.createElement("div",{className:h.a.delete},this.state.items.length>0&&n.a.createElement("button",{onClick:this.openModal,className:h.a.removeAllBtn},"Delete all users"))),n.a.createElement("section",null,t&&n.a.createElement(j,{deleteListFn:this.deleteUsers,closeModalFn:this.closeModal})))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[19,1,2]]]);
//# sourceMappingURL=main.9cdcd191.chunk.js.map