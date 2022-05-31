(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{300:function(e,t,n){"use strict";var r=n(9),a=n.n(r),o=n(12),s=n.n(o),i=n(0),c=n.n(i),l=n(78),u=n(8),d=n(22),j=n(11),f=n(70),b=n(112),m=n(13),p=n(251),x=n.n(p),h=n(204),g=n(46),y=n(66),O=n(1),_=j.a.create({buttonText:{fontSize:20,textAlign:"center"}}),v=function(e){var t=e.onPress,n=e.text,r=e.backgroundColor,a=e.textColor,o=e.fontFamily,s=e.containerStyle;return Object(O.jsx)(y.a,{onPress:t,style:[s,{backgroundColor:r}],children:Object(O.jsx)(u.a,{children:Object(O.jsx)(d.a,{style:[_.buttonText,{color:a,fontFamily:o}],children:n})})})},w=c.a.createContext(null),S=n(303),C=n(23),k=n.n(C),P=n(3),B=n.n(P),I=n(4),z=n.n(I),T="#FEF156",F="#AEAC99",N="#00F1EE",M="#83C5BE",D="#298980",E="#454545",A="#FFFFFF",L="#001219",R="#A30800",H="#F5F5F5",G="#E4E4E4",W="#000080";function V(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return U(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var J=function(){function e(){B()(this,e)}return z()(e,null,[{key:"parseCourseName",value:function(e){return e.includes("(")?e.substring(0,e.lastIndexOf("(")).trim():e}},{key:"convertGradebook",value:function(e){for(var t,n=this,r={gpa:0,courses:new Map,reportingPeriod:{name:e.reportingPeriod.current.name,index:e.reportingPeriod.current.index},reportingPeriods:e.reportingPeriod.available.map((function(e){return{name:e.name,index:e.index}}))},a=function(t){r.courses.set(t.title,{name:t.title,period:e.courses.findIndex((function(e){return e.title===t.title}))+1,teacher:t.staff.name,points:0,total:0,value:NaN,assignments:[],categories:new Map});for(var a,o=r.courses.get(t.title),s=V(t.marks[0].weightedCategories);!(a=s()).done;){var i=a.value;o.categories.set(i.type,{name:i.type,points:0,total:0,value:NaN,weight:parseFloat(i.weight.standard)})}for(var c,l=V(t.marks[0].assignments);!(c=l()).done;){var u=c.value,d=u.score.value,j=n.parsePoints(u.points),f={name:u.name,category:u.type,status:"Not Graded"!=d&&"Not Due"!=d?"Graded":d,notes:u.notes,points:j[0],total:j[1],modified:!1,date:{due:u.date.due,start:u.date.start}};o.assignments.push(f)}},o=V(e.courses);!(t=o()).done;){a(t.value)}return r=this.calculatePoints(r),new Promise((function(e){e(r)}))}},{key:"calculatePoints",value:function(e){e.gpa=0;for(var t,n=0,r=V(e.courses.values());!(t=r()).done;){var a=t.value;a.points=0,a.total=0,a.value=NaN;for(var o,s=V(a.categories.values());!(o=s()).done;){var i=o.value;i.points=0,i.total=0,i.value=NaN}for(var c,l=V(a.assignments);!(c=l()).done;){var u=c.value,d=a.categories.get(u.category);isNaN(u.points)||isNaN(u.total)||(d.points+=u.points,d.total+=u.total,d.value=d.points/d.total)}for(var j,f=V(a.categories.values());!(j=f()).done;){var b=j.value;isNaN(b.value)||(a.points+=b.value*b.weight,a.total+=b.weight)}a.value=this.roundTo(a.points/a.total*100,2),isNaN(a.value)||(a.value>=89.5?e.gpa+=4:a.value>=79.5?e.gpa+=3:a.value>=69.5?e.gpa+=2:a.value>=59.5&&(e.gpa+=1),n++)}return e.gpa=this.roundTo(e.gpa/n,2),e}},{key:"parsePoints",value:function(e){var t=/^(\d+\.?\d*|\.\d+) \/ (\d+\.?\d*|\.\d+)$/;if(e.match(t)){var n=e.split(t);return[parseFloat(n[1]),parseFloat(n[2])]}return[NaN,parseFloat(e)]}},{key:"roundTo",value:function(e,t){var n=Math.pow(10,t);return e=parseFloat((e*n).toFixed(11)),+(Math.round(e)/n).toFixed(t)}},{key:"deleteAssignment",value:function(t,n,r){var a=k()({},t);return a.courses.get(n).assignments=a.courses.get(n).assignments.filter((function(e){return e.name!==r})),e.calculatePoints(a)}},{key:"updatePoints",value:function(t,n,r,a,o){var s=k()({},t),i=s.courses.get(n).assignments.find((function(e){return e.name===r}));return"earned"===o?i.points=a:"total"===o&&(i.total=a),i.modified=!0,e.calculatePoints(s)}},{key:"addAssignment",value:function(t,n,r,a,o,s){var i=0===r.length?"Assignment":r;n.assignments.some((function(e){return e.name===i}))&&function(){for(var e=2;n.assignments.some((function(t){return t.name===i+e}));)e++;i+=e}(),n.assignments.unshift({name:i,category:a,status:"Graded",notes:"",points:o,total:s,modified:!0,date:{due:new Date,start:new Date}}),t.courses.set(n.name,n);var c=k()({},t);return e.calculatePoints(c)}},{key:"calculateMarkColor",value:function(e){switch(this.calculateLetterGrade(e)){case"A":return"#10C212";case"B":return"#1E2EE6";case"C":return"#F5A327";case"D":return"#C72222";case"E":return"#330505";case"F":return L}}},{key:"calculateLetterGrade",value:function(e){return e>=89.5?"A":e>=79.5?"B":e>=69.5?"C":e>=59.5?"D":e>=49.5?"E":"F"}}]),e}(),$=n(185),q=n(110),Y=function(){var e=Object(g.o)(),t=Object(i.useContext)(w),n=t.username,r=t.password,o=t.setUsername,c=t.setPassword,j=t.setClient,p=t.setMarks,h=Object(i.useState)(!1),y=a()(h,2),_=y[0],C=y[1],k=Object(i.useState)(!1),P=a()(k,2),B=P[0],I=P[1],z=Object(i.useState)(!1),M=a()(z,2),D=M[0],E=M[1],R=Object(i.useState)(),H=a()(R,2),G=H[0],V=H[1];return"web"!==m.a.OS&&void 0===n&&void 0===r&&s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,s.a.awrap(X("Username"));case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=c,e.next=8,s.a.awrap(X("Password"));case 8:e.t3=e.sent,(0,e.t2)(e.t3);case 10:case"end":return e.stop()}}),null,null,null,Promise),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)($.a,{colors:["#FFF785",T],style:{flex:1},children:[Object(O.jsx)(b.a,{style:{alignItems:"center"},children:Object(O.jsxs)(d.a,{style:K.welcome,children:["Welcome To","\n","ScholarHelper"]})}),Object(O.jsxs)(b.a,{style:K.container,children:[Object(O.jsx)(l.a,{defaultValue:n,onChangeText:function(e){return o(e)},placeholder:"Username",style:K.input}),Object(O.jsx)(l.a,{defaultValue:r,onChangeText:function(e){return c(e)},placeholder:"Password",secureTextEntry:!0,style:K.input}),"web"!==m.a.OS&&Object(O.jsxs)(u.a,{style:K.checkbox_container,children:[Object(O.jsx)(S.a,{size:24,fillColor:N,unfillColor:"transparent",disableText:!0,iconStyle:{borderColor:L},isChecked:B,disableBuiltInState:!0,onPress:function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:I(!B);case 1:case"end":return e.stop()}}),null,null,null,Promise)}}),Object(O.jsx)(d.a,{style:K.save_text,children:"Save Login Information"})]}),Object(O.jsx)(v,{onPress:function(){var t,a,i;return s.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return C(!0),l.prev=1,l.next=4,s.a.awrap(x.a.login("https://md-mcps-psv.edupoint.com/",{username:n,password:r}));case 4:return t=l.sent,l.next=7,s.a.awrap(t.gradebook());case 7:return a=l.sent,l.next=10,s.a.awrap(J.convertGradebook(a));case 10:i=l.sent,j(t),p(i),l.next=21;break;case 15:return l.prev=15,l.t0=l.catch(1),C(!1),V(l.t0.message),E(!0),l.abrupt("return");case 21:o(n),c(r),"web"!==m.a.OS&&B&&(Q("Username",n),Q("Password",r)),C(!1),e.navigate("Menu");case 26:case"end":return l.stop()}}),null,null,[[1,15]],Promise)}.bind(void 0),text:"Login",backgroundColor:W,textColor:A,fontFamily:"Inter_800ExtraBold",containerStyle:K.button_container}),Object(O.jsx)(f.a,{color:F,animating:_,size:"large"})]})]}),Object(O.jsx)(q.a,{show:D,showProgress:!1,title:"Error, Try Again",message:G,closeOnTouchOutside:!0,closeOnHardwareBackPress:!0,showCancelButton:!1,showConfirmButton:!0,confirmText:"Ok",confirmButtonColor:T,confirmButtonTextStyle:{color:L},onConfirmPressed:function(){E(!1)}})]})},K=j.a.create({container:{flex:1,alignItems:"center",alignSelf:"center",justifyContent:"center"},welcome:{fontFamily:"Montserrat_900Black",fontSize:30,textAlign:"center",marginTop:10},checkbox_container:{flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:10},input:{width:220,height:50,padding:10,borderWidth:1,borderColor:L,borderRadius:5,marginBottom:10},loading:{margin:"auto"},button_container:{justifyContent:"center",alignItems:"center",position:"relative",width:100,height:50,padding:10,borderRadius:10,borderWidth:0,marginBottom:10},save_text:{marginLeft:8,fontFamily:"Inter_400Regular"}});function Q(e,t){return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!==t){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,s.a.awrap(h.b(e,t));case 4:case"end":return n.stop()}}),null,null,null,Promise)}function X(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(h.a(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),null,null,null,Promise)}var Z=n(7),ee=n.n(Z),te=n(520),ne=n(519),re=n(74),ae=n(513),oe=n(84),se=n(90);var ie=j.a.create({container:{backgroundColor:T,borderRadius:10,marginLeft:7,marginRight:7,marginTop:7,elevation:3,shadowOffset:{width:0,height:2},shadowOpacity:.1,shadowRadius:2},horizontal_container:{flexDirection:"row"},dropdown_container:{padding:10,backgroundColor:G,borderTopColor:E,borderTopWidth:1},assignment_info_container:{flexDirection:"column",justifyContent:"center",marginLeft:7,flex:1},name:{color:L,fontFamily:"Inter_700Bold",fontSize:14,marginHorizontal:7,lineHeight:10.5,paddingTop:3.5,textAlign:"left"},category:{color:L,fontFamily:"Inter_400Regular",fontSize:11,marginHorizontal:7,lineHeight:8.25,marginTop:4,paddingTop:2.75,textAlign:"left"},input_container:{flexDirection:"row",alignItems:"center",justifyContent:"center"},mark:{height:60,borderWidth:0,fontSize:23,fontFamily:"Inter_600SemiBold",alignSelf:"center"},dash:{fontSize:20,alignSelf:"center",textAlignVertical:"center",marginRight:3},dropdown_text_name:{marginHorizontal:7,fontFamily:"Montserrat_600SemiBold"},dropdown_text_value:{fontFamily:"Inter_400Regular",flex:1}}),ce=function(e){var t=Object(i.useContext)(w),n=t.marks,r=t.setMarks,o=Object(i.useState)(!1),s=a()(o,2),c=s[0],j=s[1],f=n.courses.get(e.course).assignments.find((function(t){return t.name===e.name})),b=Array.from(n.courses.get(e.course).categories.values()).reduce((function(e,t){return isNaN(t.value)?e:e+t.weight}),0),m=function(t,a){r(J.updatePoints(n,e.course,f.name,parseFloat(t),a))},p=function(e){return isNaN(e)?34:Math.max(15*e.toString().length,34)};return Object(O.jsxs)(u.a,{style:[ie.container,e.style],children:[Object(O.jsxs)(u.a,{style:[ie.horizontal_container,{height:52}],children:[Object(O.jsxs)(u.a,{style:ie.assignment_info_container,children:[Object(O.jsx)(d.a,{numberOfLines:1,style:[ie.name,{color:f.modified?D:W}],children:e.name}),Object(O.jsxs)(d.a,{numberOfLines:1,style:ie.category,children:[f.category," - ",f.date.due.toLocaleDateString()]})]}),Object(O.jsxs)(u.a,{style:ie.input_container,children:[Object(O.jsx)(l.a,{defaultValue:isNaN(f.points)?"":f.points.toString(),placeholder:"__",keyboardType:"number-pad",autoCompleteType:"off",style:[ie.mark,{color:f.modified?D:L,width:p(f.points)}],onChangeText:function(e){return m(e,"earned")}}),Object(O.jsx)(d.a,{style:ie.dash,children:" / "}),Object(O.jsx)(l.a,{defaultValue:isNaN(f.total)?"":f.total.toString(),placeholder:"__",keyboardType:"numeric",style:[ie.mark,{color:f.modified?D:L,width:p(f.total)}],onChangeText:function(e){return m(e,"total")}})]}),Object(O.jsx)(oe.c,{onPress:function(){return j(!c)},children:Object(O.jsx)(ae.a,{name:c?"arrow-drop-up":"arrow-drop-down",color:M,size:36,style:{marginRight:5}})})]}),c&&Object(O.jsxs)(u.a,{style:ie.dropdown_container,children:[Object(O.jsxs)(u.a,{style:ie.horizontal_container,children:[Object(O.jsx)(d.a,{style:ie.dropdown_text_name,children:"Name:"}),Object(O.jsx)(d.a,{style:ie.dropdown_text_value,children:f.name})]}),Object(O.jsxs)(u.a,{style:ie.horizontal_container,children:[Object(O.jsx)(d.a,{style:ie.dropdown_text_name,children:"Category:"}),Object(O.jsx)(d.a,{style:ie.dropdown_text_value,children:f.category})]}),Object(O.jsxs)(u.a,{style:ie.horizontal_container,children:[Object(O.jsx)(d.a,{style:ie.dropdown_text_name,children:"Effective Weight:"}),Object(O.jsxs)(d.a,{style:ie.dropdown_text_value,children:[J.roundTo(n.courses.get(e.course).categories.get(f.category).weight/b*100,2),"%"]})]}),Object(O.jsxs)(u.a,{style:ie.horizontal_container,children:[Object(O.jsx)(d.a,{style:ie.dropdown_text_name,children:"Weight:"}),Object(O.jsxs)(d.a,{style:ie.dropdown_text_value,children:[n.courses.get(e.course).categories.get(f.category).weight,"%"]})]}),Object(O.jsxs)(u.a,{style:ie.horizontal_container,children:[Object(O.jsx)(d.a,{style:ie.dropdown_text_name,children:"Grade:"}),Object(O.jsx)(d.a,{style:ie.dropdown_text_value,children:isNaN(f.points/f.total)?"N/A":J.roundTo(f.points/f.total*100,2)+" ("+J.calculateLetterGrade(f.points/f.total*100)+")"})]}),Object(O.jsxs)(u.a,{style:ie.horizontal_container,children:[Object(O.jsx)(d.a,{style:ie.dropdown_text_name,children:"Status:"}),Object(O.jsx)(d.a,{style:ie.dropdown_text_value,children:f.status})]}),Object(O.jsxs)(u.a,{style:ie.horizontal_container,children:[Object(O.jsx)(d.a,{style:ie.dropdown_text_name,children:"Due Date:"}),Object(O.jsx)(d.a,{style:ie.dropdown_text_value,children:f.date.due.toLocaleDateString()})]}),Object(O.jsxs)(u.a,{style:ie.horizontal_container,children:[Object(O.jsx)(d.a,{style:ie.dropdown_text_name,children:"Start Date:"}),Object(O.jsx)(d.a,{style:ie.dropdown_text_value,children:f.date.start.toLocaleDateString()})]}),Object(O.jsxs)(u.a,{style:ie.horizontal_container,children:[Object(O.jsx)(d.a,{style:ie.dropdown_text_name,children:"Notes:"}),Object(O.jsx)(d.a,{style:ie.dropdown_text_value,children:0===f.notes.length?"None":f.notes})]}),Object(O.jsxs)(u.a,{style:ie.horizontal_container,children:[Object(O.jsx)(d.a,{style:ie.dropdown_text_name,children:"Modified By You:"}),Object(O.jsx)(d.a,{style:ie.dropdown_text_value,children:f.modified?"True":"False"})]}),Object(O.jsx)(se.a.Button,{name:"trash-o",backgroundColor:"transparent",iconStyle:{color:R},underlayColor:"none",activeOpacity:.5,size:24,onPress:function(){r(J.deleteAssignment(n,e.course,f.name))}})]})]})},le={dark:!1,colors:{primary:T,background:A,card:T,text:L,border:F,notification:N}},ue=n(299),de=n(184),je=n(109),fe=n(514),be=j.a.create({input:{margin:7,padding:5,borderWidth:1,height:30,borderColor:L},modal_title:{alignSelf:"center",marginBottom:7,marginTop:14,fontFamily:"Inter_600SemiBold",fontSize:18},modal:{flexDirection:"column",alignItems:"center",alignSelf:"center",backgroundColor:"white",borderRadius:10,width:330,height:300},modal_view:{width:330,height:300},dropdown:{height:30,borderRadius:0,alignItems:"center",alignSelf:"center"},button_container:{justifyContent:"center",alignItems:"center",alignSelf:"center",width:200,height:50,borderRadius:10,borderWidth:0,marginTop:30},course_details:{fontSize:22,flex:1,flexWrap:"wrap",fontFamily:"Inter_800ExtraBold"},course_details_container:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},loading:{position:"absolute",left:0,right:0,top:0,bottom:0,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(200, 200, 200, 0.2)"}}),me=function(e){var t=e.route.params.title,n=Object(g.o)(),r=Object(i.useContext)(w),o=r.marks,c=r.client,l=r.setMarks,j=o.courses.get(t),b=Object(i.useState)(!1),m=a()(b,2),p=m[0],x=m[1],h=Object(i.useState)(!1),y=a()(h,2),_=y[0],S=y[1],C=Object(i.useState)(o.courses.get(t).categories.values().next().value.name),k=a()(C,2),P=k[0],B=k[1],I=Object(i.useState)(Array.from(o.courses.get(t).categories.values()).map((function(e){return{label:e.name,value:e.name}}))),z=a()(I,2),N=z[0],M=z[1],D=Object(i.useState)(""),E=a()(D,2),A=E[0],R=E[1],H=Object(i.useState)(NaN),G=a()(H,2),W=G[0],V=G[1],U=Object(i.useState)(NaN),$=a()(U,2),Y=$[0],K=$[1],Q=Object(i.useState)(!1),X=a()(Q,2),Z=X[0],ee=X[1],te=Object(i.useState)(!1),ne=a()(te,2),ae=ne[0],ie=ne[1],me=Object(i.useState)(),pe=a()(me,2),xe=pe[0],he=pe[1];Object(i.useEffect)((function(){p&&(R(""),V(NaN),K(NaN))}),[p]);var ge=function(){x(!p)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(fe.a,{style:{flex:1},pointerEvents:Z?"none":"auto",children:[Object(O.jsxs)(u.a,{style:be.course_details_container,children:[Object(O.jsx)(u.a,{style:{flexDirection:"row",justifyContent:"flex-start"},children:Object(O.jsx)(se.a.Button,{name:"chevron-left",backgroundColor:"transparent",iconStyle:{color:F},underlayColor:"none",activeOpacity:.5,size:24,onPress:function(){return n.goBack()}})}),Object(O.jsxs)(d.a,{numberOfLines:1,style:be.course_details,children:[isNaN(j.value)?"N/A":j.value," |"," ",J.parseCourseName(t)]}),Object(O.jsxs)(u.a,{style:{flexDirection:"row",justifyContent:"flex-end"},children:[Object(O.jsx)(se.a.Button,{name:"plus-circle",backgroundColor:"transparent",iconStyle:{color:F},size:24,underlayColor:"none",activeOpacity:.5,onPress:function(){return ge()}}),Object(O.jsx)(se.a.Button,{name:"refresh",backgroundColor:"transparent",iconStyle:{color:F},underlayColor:"none",activeOpacity:.5,size:24,onPress:function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return ee(!0),e.prev=1,e.t0=l,e.t1=s.a,e.t2=J,e.next=7,s.a.awrap(c.gradebook(o.reportingPeriod.index));case 7:return e.t3=e.sent,e.t4=e.t2.convertGradebook.call(e.t2,e.t3),e.next=11,e.t1.awrap.call(e.t1,e.t4);case 11:e.t5=e.sent,(0,e.t0)(e.t5),Object(je.b)({message:"Refreshed",type:"info",icon:"success"}),e.next=20;break;case 16:e.prev=16,e.t6=e.catch(1),he(e.t6.message),ie(!0);case 20:ee(!1);case 21:case"end":return e.stop()}}),null,null,[[1,16]],Promise)}})]})]}),Object(O.jsx)(re.a,{data:j.assignments,renderItem:function(e){var n=e.item;return Object(O.jsx)(ce,{name:n.name,course:t})},keyExtractor:function(e){return e.name}}),Object(O.jsx)(ue.a,{isVisible:p,coverScreen:!0,onBackdropPress:ge,children:Object(O.jsx)(u.a,{style:be.modal,children:Object(O.jsxs)(u.a,{style:be.modal_view,children:[Object(O.jsx)(d.a,{style:be.modal_title,children:"New Assignment"}),Object(O.jsx)(oe.b,{value:A,placeholder:"Name",onChangeText:function(e){R(e)},style:be.input}),Object(O.jsx)(oe.b,{defaultValue:isNaN(W)?"":W.toString(),keyboardType:"numeric",placeholder:"Points Earned",onChangeText:function(e){return V(parseFloat(e))},style:be.input}),Object(O.jsx)(oe.b,{defaultValue:isNaN(Y)?"":Y.toString(),keyboardType:"numeric",placeholder:"Total Points",onChangeText:function(e){return K(parseFloat(e))},style:be.input}),Object(O.jsxs)(u.a,{style:{marginHorizontal:7,marginTop:7},children:[Object(O.jsx)(de.a,{open:_,value:P,items:N,setOpen:S,setValue:B,setItems:M,maxHeight:null,style:be.dropdown}),Object(O.jsx)(v,{onPress:function(){l(J.addAssignment(o,j,A,P,W,Y)),ge()},text:"Add Assignment",backgroundColor:le.colors.card,textColor:L,fontFamily:"Inter_600SemiBold",containerStyle:be.button_container})]})]})})})]}),Z&&Object(O.jsx)(fe.a,{style:be.loading,children:Object(O.jsx)(f.a,{size:"large"})}),Object(O.jsx)(q.a,{show:ae,showProgress:!1,title:"Error",message:xe,closeOnTouchOutside:!0,closeOnHardwareBackPress:!0,showCancelButton:!1,showConfirmButton:!0,confirmText:"Ok",confirmButtonColor:T,confirmButtonTextStyle:{color:L},onConfirmPressed:function(){ie(!1)}})]})},pe=n(15),xe=n.n(pe);var he=j.a.create({container:{backgroundColor:T,borderRadius:15,height:55,flexDirection:"row",justifyContent:"center",alignItems:"center",marginHorizontal:7,marginTop:7,padding:7,elevation:3,shadowOffset:{width:0,height:2},shadowOpacity:.1,shadowRadius:2},period_number:{fontFamily:"Montserrat_800ExtraBold",fontSize:32},course_info_container:{flexDirection:"column",justifyContent:"center",marginHorizontal:7,flex:1},name:{color:W,fontFamily:"Montserrat_700Bold",fontSize:18,marginRight:14,marginLeft:7,lineHeight:13.5,paddingTop:4.5,textAlign:"left"},teacher:{color:L,fontFamily:"Inter_400Regular",fontSize:12,marginRight:14,marginLeft:7,lineHeight:9,paddingTop:3,marginTop:4,textAlign:"left"},mark:{fontFamily:"Montserrat_500Medium",fontSize:28,alignSelf:"center"},letter_grade:{marginLeft:7,fontFamily:"Montserrat_800ExtraBold",fontSize:32,alignSelf:"center"}}),ge=function(e){var t=parseFloat(e.mark);return Object(O.jsxs)(u.a,{style:[he.container,e.style],children:[Object(O.jsx)(d.a,{style:he.period_number,children:"0"+e.period}),Object(O.jsxs)(u.a,{style:he.course_info_container,children:[Object(O.jsx)(d.a,{numberOfLines:1,style:he.name,children:e.name}),Object(O.jsx)(d.a,{numberOfLines:1,style:he.teacher,children:e.teacher})]}),Object(O.jsx)(d.a,{style:[he.mark],children:isNaN(parseFloat(e.mark))?"N/A":e.mark}),Object(O.jsx)(d.a,{style:[he.letter_grade,{color:J.calculateMarkColor(t)}],children:J.calculateLetterGrade(t)})]})},ye=j.a.create({dropdown:{borderWidth:0,height:30,marginBottom:15,backgroundColor:"transparent"},dropdown_text:{fontFamily:"Inter_800ExtraBold",fontSize:30},row_container:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},gpa_container:{flex:1,flexDirection:"row",justifyContent:"flex-start"},gpa:{marginLeft:11,fontFamily:"Montserrat_700Bold",fontSize:22},refresh_button_container:{flex:1,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"},loading:{position:"absolute",left:0,right:0,top:0,bottom:0,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(200, 200, 200, 0.2)"}}),Oe=function(e){var t=e.navigation,n=Object(i.useContext)(w),r=n.client,o=n.marks,c=n.setMarks,l=Object(i.useState)(!1),j=a()(l,2),m=j[0],p=j[1],x=Object(i.useState)(o.reportingPeriod.index),h=a()(x,2),g=h[0],y=h[1],_=Object(i.useState)(o.reportingPeriods.map((function(e){return{label:e.name,value:e.index}}))),v=a()(_,2),S=v[0],C=v[1],k=Object(i.useState)(!1),P=a()(k,2),B=P[0],I=P[1],z=Object(i.useState)(!1),N=a()(z,2),M=N[0],D=N[1],E=Object(i.useState)(),A=a()(E,2),R=A[0],H=A[1];Object(i.useEffect)((function(){I(!0);var e=!0;return function(){var t;s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.t0=s.a,n.t1=J,n.next=5,s.a.awrap(r.gradebook(g));case 5:return n.t2=n.sent,n.t3=n.t1.convertGradebook.call(n.t1,n.t2),n.next=9,n.t0.awrap.call(n.t0,n.t3);case 9:t=n.sent,e&&c(t),n.next=17;break;case 13:n.prev=13,n.t4=n.catch(0),H(n.t4.message),D(!0);case 17:case"end":return n.stop()}}),null,null,[[0,13]],Promise)}(),I(!1),function(){e=!1}}),[g]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(b.a,{style:{flex:1},pointerEvents:B?"none":"auto",children:[Object(O.jsx)(de.a,{open:m,value:g,items:S,setOpen:p,setValue:y,setItems:C,maxHeight:null,style:ye.dropdown,textStyle:ye.dropdown_text}),Object(O.jsxs)(u.a,{style:ye.row_container,children:[Object(O.jsx)(u.a,{style:ye.gpa_container,children:Object(O.jsxs)(d.a,{style:ye.gpa,children:[o.gpa," GPA"]})}),Object(O.jsx)(u.a,{style:ye.refresh_button_container,children:Object(O.jsx)(se.a.Button,{name:"refresh",backgroundColor:"transparent",iconStyle:{color:F},underlayColor:"none",activeOpacity:.5,size:24,onPress:function(){return function(){var e,t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return I(!0),n.prev=1,n.next=4,s.a.awrap(r.gradebook(g));case 4:return e=n.sent,n.next=7,s.a.awrap(J.convertGradebook(e));case 7:t=n.sent,c(t),n.next=17;break;case 11:return n.prev=11,n.t0=n.catch(1),H(n.t0.message),D(!0),I(!1),n.abrupt("return");case 17:Object(je.b)({message:"Gradebook refreshed",type:"info",icon:"success"}),I(!1);case 19:case"end":return n.stop()}}),null,null,[[1,11]],Promise)}()}})})]}),void 0!=o&&Object(O.jsx)(oe.a,{data:xe()(o.courses.entries()),renderItem:function(e){var n=e.item;return Object(O.jsx)(oe.c,{onPress:function(){return t.navigate("Course Details",{title:n[0]})},children:Object(O.jsx)(ge,{name:J.parseCourseName(n[0]),mark:n[1].value,period:n[1].period,teacher:n[1].teacher})})},keyExtractor:function(e){return e[0]}})]}),B&&Object(O.jsx)(b.a,{style:ye.loading,children:Object(O.jsx)(f.a,{size:"large"})}),Object(O.jsx)(q.a,{show:M,showProgress:!1,title:"Error",message:R,closeOnTouchOutside:!0,closeOnHardwareBackPress:!0,showCancelButton:!1,showConfirmButton:!0,confirmText:"Ok",confirmButtonColor:T,confirmButtonTextStyle:{color:L},onConfirmPressed:function(){D(!1)}})]})},_e=c.a.createContext(null),ve=Object(ne.a)(),we=function(){var e=Object(i.useState)(void 0),t=a()(e,2),n=t[0],r=t[1];return Object(O.jsx)(_e.Provider,{value:{courseHeader:n,setCourse:r},children:Object(O.jsxs)(ve.Navigator,{children:[Object(O.jsx)(ve.Screen,{name:"Courses",component:Oe,options:{headerShown:!1}}),Object(O.jsx)(ve.Screen,{name:"Course Details",component:me,options:{headerShown:!1}})]})})},Se=n(51),Ce=n(284),ke=n(516),Pe=function(e){var t=e%10,n=e%100;return 1===t&&11!==n?"st":2===t&&12!==n?"nd":3===t&&13!==n?"rd":"th"},Be=j.a.create({header:{height:150},name:{fontSize:24,fontFamily:"Montserrat_700Bold",alignSelf:"center",marginTop:10},avatar:{width:130,height:130,borderRadius:65,borderWidth:4,borderColor:"white",alignSelf:"center",marginTop:-65},description_container:{marginTop:10,flexDirection:"row",justifyContent:"space-between",borderColor:F,borderWidth:1},description_part_container:{flex:1,alignItems:"center",justifyContent:"center",padding:10},description_part_text:{marginTop:5,fontSize:22,fontFamily:"Montserrat_800ExtraBold"},property_container:{flexDirection:"row",padding:12},property_text:{marginHorizontal:8,fontFamily:"Inter_400Regular",fontSize:18,color:E}}),Ie=function(){var e=Object(i.useContext)(w).client,t=Object(i.useState)(void 0),n=a()(t,2),r=n[0],o=n[1];return r||s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=o,t.next=3,s.a.awrap(e.studentInfo());case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),null,null,null,Promise),Object(O.jsx)(u.a,{style:{flex:1},children:r?Object(O.jsxs)(u.a,{children:[Object(O.jsx)($.a,{colors:["#DED140",T],style:Be.header}),Object(O.jsx)(Se.a,{style:Be.avatar,source:{uri:"data:image/png;base64,"+r.photo}}),Object(O.jsx)(d.a,{style:Be.name,children:r.student.name}),Object(O.jsxs)(u.a,{style:Be.description_container,children:[Object(O.jsxs)(u.a,{style:Be.description_part_container,children:[Object(O.jsx)(d.a,{style:Be.description_part_text,children:r.grade+Pe(parseInt(r.grade))}),Object(O.jsx)(Ce.a,{name:"graduation-cap",size:18,color:L})]}),Object(O.jsxs)(u.a,{style:Be.description_part_container,children:[Object(O.jsx)(d.a,{style:Be.description_part_text,children:r.birthDate.toLocaleDateString()}),Object(O.jsx)(Ce.a,{name:"birthday-cake",size:18,color:L})]})]}),Object(O.jsxs)(u.a,{style:Be.property_container,children:[Object(O.jsx)(ke.a,{name:"phone",size:26,color:L}),Object(O.jsx)(d.a,{style:Be.property_text,children:r.phone})]}),Object(O.jsxs)(u.a,{style:Be.property_container,children:[Object(O.jsx)(ke.a,{name:"mail",size:26,color:L}),Object(O.jsx)(d.a,{style:Be.property_text,children:r.email})]}),Object(O.jsxs)(u.a,{style:Be.property_container,children:[Object(O.jsx)(ke.a,{name:"map-pin",size:26,color:L}),Object(O.jsx)(d.a,{style:Be.property_text,children:r.address})]}),Object(O.jsxs)(u.a,{style:Be.property_container,children:[Object(O.jsx)(Ce.a,{name:"building-o",size:26,color:L}),Object(O.jsx)(d.a,{style:Be.property_text,children:r.currentSchool})]})]}):Object(O.jsx)(f.a,{color:F,animating:!0,size:"large",style:{alignSelf:"center",flex:1,justifyContent:"center"}})})},ze=n(517),Te=n(305),Fe=n(522);var Ne=j.a.create({container:{backgroundColor:H,borderRadius:10,height:50,flexDirection:"row",justifyContent:"center",alignItems:"center",marginHorizontal:7,marginTop:7,padding:7,elevation:3,shadowOffset:{width:0,height:2},shadowOpacity:.1,shadowRadius:2},doc_info_container:{flexDirection:"column",justifyContent:"center",flex:1,marginHorizontal:4},info_container:{flexDirection:"row",justifyContent:"flex-start",flex:1},name:{color:L,fontFamily:"Montserrat_600SemiBold",fontSize:16,lineHeight:12,paddingTop:4,textAlign:"left"},type:{color:L,fontFamily:"Inter_300Light",fontSize:12,flex:1,lineHeight:9,paddingTop:3,marginTop:4,textAlign:"left"},date:{color:L,fontFamily:"Inter_400Regular",fontSize:12,lineHeight:9,paddingTop:3,marginTop:4,textAlign:"left"}}),Me=function(e){return Object(O.jsx)(u.a,{style:[Ne.container,e.style],children:Object(O.jsxs)(u.a,{style:Ne.doc_info_container,children:[Object(O.jsx)(d.a,{numberOfLines:1,style:Ne.name,children:e.name}),Object(O.jsxs)(u.a,{style:Ne.info_container,children:[Object(O.jsx)(d.a,{numberOfLines:1,style:[Ne.type],children:e.type}),Object(O.jsx)(d.a,{numberOfLines:1,style:Ne.date,children:e.date})]})]})})},De=j.a.create({row_container:{flexDirection:"row",alignItems:"center"},title_container:{flexDirection:"row",justifyContent:"flex-start",width:"75%"},title:{fontFamily:"Inter_800ExtraBold",fontSize:30,marginHorizontal:11},refresh_button_container:{flex:1,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"},loading:{position:"absolute",left:0,right:0,top:0,bottom:0,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(200, 200, 200, 0.2)"}}),Ee=function(){var e=Object(i.useContext)(w).client,t=Object(i.useState)(void 0),r=a()(t,2),o=r[0],c=r[1],l=Object(i.useState)(!1),j=a()(l,2),b=j[0],p=j[1],x=Object(i.useState)(!1),h=a()(x,2),g=h[0],y=h[1],_=Object(i.useState)(),v=a()(_,2),S=v[0],C=v[1];o||b||s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),t.prev=1,t.t0=c,t.next=5,s.a.awrap(e.documents());case 5:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 9:t.prev=9,t.t2=t.catch(1),C(t.t2.message),y(!0);case 13:p(!1);case 14:case"end":return t.stop()}}),null,null,[[1,9]],Promise);var k=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:512,n=window.atob(e),r=[],a=0;a<n.length;a+=t){for(var o=n.slice(a,a+t),s=new Array(o.length),i=0;i<o.length;i++)s[i]=o.charCodeAt(i);r.push(new Uint8Array(s))}return new Blob(r)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(fe.a,{style:{flex:1},pointerEvents:b?"none":"auto",children:[Object(O.jsxs)(u.a,{style:De.row_container,children:[Object(O.jsx)(u.a,{style:De.title_container,children:Object(O.jsx)(d.a,{style:De.title,children:"Documents"})}),Object(O.jsx)(u.a,{style:De.refresh_button_container,children:Object(O.jsx)(se.a.Button,{name:"refresh",backgroundColor:"transparent",iconStyle:{color:F},underlayColor:"none",activeOpacity:.5,size:24,onPress:function(){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=c,t.next=4,s.a.awrap(e.documents());case 4:t.t1=t.sent,(0,t.t0)(t.t1),Object(je.b)({message:"Refreshed",type:"info",icon:"success"}),t.next=13;break;case 9:t.prev=9,t.t2=t.catch(0),C(t.t2.message),y(!0);case 13:case"end":return t.stop()}}),null,null,[[0,9]],Promise)}})})]}),o&&Object(O.jsx)(re.a,{data:o,renderItem:function(e){var t=e.item;return Object(O.jsx)(oe.c,{onPress:function(){!function(e){var t,r,a;s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,s.a.awrap(e.get());case 2:if(t=o.sent[0],r=e.comment.replace(/ /g,"_")+t.file.name.substring(t.file.name.lastIndexOf(".")),"android"!==m.a.OS&&"ios"!==m.a.OS){o.next=17;break}return a=Fe.a+r,o.prev=6,o.next=9,s.a.awrap(Fe.b(a,t.base64,{encoding:"base64"}));case 9:return o.next=11,s.a.awrap(Te.a(a));case 11:o.next=15;break;case 13:o.prev=13,o.t0=o.catch(6);case 15:o.next=18;break;case 17:n(476).saveAs(k(t.base64),r);case 18:case"end":return o.stop()}}),null,null,[[6,13]],Promise)}(t)},children:Object(O.jsx)(Me,{name:t.comment,type:t.file.type,date:t.file.date.toLocaleDateString()})})},keyExtractor:function(e){return e.documentGu}})]}),b&&Object(O.jsx)(fe.a,{style:De.loading,children:Object(O.jsx)(f.a,{size:"large"})}),Object(O.jsx)(q.a,{show:g,showProgress:!1,title:"Error",message:S,closeOnTouchOutside:!0,closeOnHardwareBackPress:!0,showCancelButton:!1,showConfirmButton:!0,confirmText:"Ok",confirmButtonColor:T,confirmButtonTextStyle:{color:L},onConfirmPressed:function(){y(!1)}})]})};function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(n),!0).forEach((function(t){ee()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Re=Object(te.a)(),He=function(){return null},Ge=function(){Object(g.o)();return Object(O.jsxs)(Re.Navigator,{screenOptions:{tabBarShowLabel:!1,tabBarStyle:{borderTopWidth:1}},children:[Object(O.jsx)(Re.Screen,{name:"Grades",component:we,options:{headerShown:!1,tabBarIcon:function(e){return e.focused?Object(O.jsx)(ae.a,{name:"insert-chart",size:30,color:M}):Object(O.jsx)(ae.a,{name:"insert-chart-outlined",size:30,color:F})}}}),Object(O.jsx)(Re.Screen,{name:"Documents",component:Ee,options:{headerShown:!1,tabBarIcon:function(e){return e.focused?Object(O.jsx)(ze.a,{name:"folder",size:30,color:M}):Object(O.jsx)(ze.a,{name:"folder-outline",size:30,color:F})}}}),Object(O.jsx)(Re.Screen,{name:"Profile",component:Ie,options:{headerShown:!1,tabBarIcon:function(e){return e.focused?Object(O.jsx)(ze.a,{name:"person",size:30,color:M}):Object(O.jsx)(ze.a,{name:"person-outline",size:30,color:F})}}}),Object(O.jsx)(Re.Screen,{name:"Logout",component:He,options:function(e){var t=e.navigation;return{headerShown:!1,tabBarIcon:function(){return Object(O.jsx)(ze.a,{name:"exit-outline",size:32,color:L})},tabBarButton:function(e){return Object(O.jsx)(y.a,Le(Le({},e),{},{onPress:function(){return t.navigate("Login")}}))}}}})]})},We=n(518),Ve=n(87),Ue=n(56),Je=n(304),$e=Object(ne.a)();t.a=function(){var e=Object(i.useState)(void 0),t=a()(e,2),n=t[0],r=t[1],o=Object(i.useState)(void 0),s=a()(o,2),c=s[0],l=s[1],d=Object(i.useState)(void 0),j=a()(d,2),f=j[0],b=j[1],m=Object(i.useState)(void 0),p=a()(m,2),x=p[0],h=p[1],g=Object(i.useState)(void 0),y=a()(g,2),_={username:x,password:y[0],client:n,marks:c,gradebook:f,setUsername:h,setPassword:y[1],setClient:r,setMarks:l,setGradebook:b},v=Object(Ve.j)({Inter_100Thin:Ve.a,Inter_200ExtraLight:Ve.b,Inter_300Light:Ve.c,Inter_400Regular:Ve.d,Inter_500Medium:Ve.e,Inter_600SemiBold:Ve.f,Inter_700Bold:Ve.g,Inter_800ExtraBold:Ve.h,Inter_900Black:Ve.i,Montserrat_100Thin:Ue.a,Montserrat_200ExtraLight:Ue.c,Montserrat_300Light:Ue.e,Montserrat_400Regular:Ue.g,Montserrat_500Medium:Ue.i,Montserrat_600SemiBold:Ue.k,Montserrat_700Bold:Ue.m,Montserrat_800ExtraBold:Ue.o,Montserrat_900Black:Ue.q,Montserrat_100Thin_Italic:Ue.b,Montserrat_200ExtraLight_Italic:Ue.d,Montserrat_300Light_Italic:Ue.f,Montserrat_400Regular_Italic:Ue.h,Montserrat_500Medium_Italic:Ue.j,Montserrat_600SemiBold_Italic:Ue.l,Montserrat_700Bold_Italic:Ue.n,Montserrat_800ExtraBold_Italic:Ue.p,Montserrat_900Black_Italic:Ue.r});return a()(v,1)[0]?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Je.b,{children:Object(O.jsx)(w.Provider,{value:_,children:Object(O.jsx)(We.a,{theme:le,children:Object(O.jsxs)($e.Navigator,{children:[Object(O.jsx)($e.Screen,{name:"Login",component:Y,options:{headerShown:!1}}),Object(O.jsx)($e.Screen,{name:"Menu",component:Ge,options:{headerShown:!1}})]})})})}),Object(O.jsx)(je.a,{position:"top"})]}):Object(O.jsx)(u.a,{})}},310:function(e,t,n){e.exports=n(506)}},[[310,1,2]]]);
//# sourceMappingURL=app.ba861801.chunk.js.map