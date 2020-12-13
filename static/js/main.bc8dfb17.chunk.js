(this["webpackJsonpdate-calculator"]=this["webpackJsonpdate-calculator"]||[]).push([[0],{127:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(0),s=a.n(n),r=a(10),i=a.n(r),l=a(7),o=a(8),j=a(65),d=a.n(j),b=a(66),u=a.n(b),O=a(160),p=a(5),h=a.n(p),x="#4360FB",f="START",m="END",v="COMMON",g="DAYS",y="NEAREST_DAYS",S="WEEKS",N="MONTHS",D="D_DAY_SETTINGS",C="YYYY/MM/DD",k="STATUS_LOADING",E=a(24),Y=a(23),w=function(e){var t=e.children,a=e.className,n=e.align,s=e.outlined,r=Object(Y.a)(e,["children","className","align","outlined"]),i="align-".concat(n),l=s?"outlined":"",o="card ".concat(a||""," ").concat(i," ").concat(l);return Object(c.jsx)("div",Object(E.a)(Object(E.a)({className:o},r),{},{children:t}))};w.defaultProps={children:Object(c.jsx)("div",{}),align:"center"};var M=w,T=function(e){var t=e.children,a=Object(Y.a)(e,["children"]);return Object(c.jsx)("span",Object(E.a)(Object(E.a)({className:"text"},a),{},{children:t}))},L=function(e){var t=e.type,a=e.value,n=e.onChange,s=e.placeholder,r=e.readOnly;Object(Y.a)(e,["type","value","onChange","placeholder","readOnly"]);return Object(c.jsx)("input",{type:t,value:a,placeholder:s,readOnly:r,onChange:n})};L.defaultProps={type:"text",value:"",readOnly:!1};var I=L,A=a(43),R=function(e){var t=e.id,a=e.name,n=e.value,s=e.onChange,r=e.onToggleCalendar,i=n&&h()(n).format(C);return Object(c.jsxs)("div",{className:"date-wrapper",children:[Object(c.jsxs)(T,{children:[a," "]}),Object(c.jsxs)("div",{className:"date",children:[Object(c.jsx)(I,{type:"text",value:i,placeholder:C,readOnly:!0}),Object(c.jsx)("i",{className:"icon-calendar",onClick:function(){return r(t)}}),Object(c.jsx)(O.a,{variant:"outlined",color:"primary",onClick:function(){return s(t,h()().set({hour:0,minute:0,second:0}).toDate())},children:"Today"}),Object(c.jsx)(A.a,{className:"hide",value:n,locale:"en-US",minDetail:"month",nextLabel:Object(c.jsx)("i",{className:"icon-caret-right"}),prevLabel:Object(c.jsx)("i",{className:"icon-caret-right flip"}),next2Label:Object(c.jsx)("div",{}),prev2Label:Object(c.jsx)("div",{}),showNeighboringMonth:!1,onChange:function(e){s(t,e),r(t)}})]})]})},U=function(e){var t=e.startDate,a=e.endDate,s=e.onDateChange,r=e.onCalculate,i=Object(o.a)({root:{backgroundColor:x}})(O.a);Object(n.useEffect)((function(){return window.addEventListener("resize",j),function(){return window.removeEventListener("resize",j)}}),[]);var j=function(){var e=350,t=document.querySelector(".react-calendar:not(.hide)");if(t){var a=t.previousElementSibling.previousElementSibling.getBoundingClientRect(),c=a.height,n=a.left,s=a.top;t.style.top="".concat(s+c+13,"px");var r=document.body.clientWidth;r<420?(e-=40,t.style.width="".concat(e,"px"),t.style.left="".concat((r-e)/2,"px")):(t.style.left="".concat(n-e/2+13,"px"),t.style.width="".concat(e,"px"))}},d=function(e){var t=document.getElementsByClassName("react-calendar"),a=Object(l.a)(t,2),c=a[0],n=a[1];e===f&&(c.classList.contains("hide")?(c.classList.remove("hide"),n.classList.add("hide"),j(f)):c.classList.add("hide"));e===m&&(n.classList.contains("hide")?(n.classList.remove("hide"),j(m)):n.classList.add("hide"))};return Object(c.jsxs)(M,{className:"date-selector",children:[Object(c.jsx)(R,{id:f,name:"Start Date",value:t,onChange:s,onOpenCalendar:d,onToggleCalendar:d}),Object(c.jsx)(R,{id:m,name:"End Date",value:a,onChange:s,onOpenCalendar:d,onToggleCalendar:d}),Object(c.jsx)(i,{variant:"contained",color:"primary",onClick:r,children:"Calculate"})]})},B=a(156),_=Object(o.a)((function(e){return{root:{height:"1.5rem",borderRadius:5},colorPrimary:{backgroundColor:"white"},bar:{borderRadius:5,backgroundColor:x}}}))(B.a),G=function(e){var t=e.value,a=Object(n.useState)(0),s=Object(l.a)(a,2),r=s[0],i=s[1];return Object(n.useEffect)((function(){var e=setInterval((function(){i((function(e){return e>=t?t:e+5}))}),100);return function(){clearInterval(e)}}),[t]),Object(c.jsxs)("div",{className:"progress-bar",children:[Object(c.jsx)(_,{variant:"determinate",value:r}),Object(c.jsxs)("span",{children:[" ",t||0,"%"]})]})},H=a(159),z=a(162),F=a(157),P=a(158),W=function(e){var t=e.open,a=e.settings,s=e.onClose,r=e.onSave,i=Object(n.useState)(a?h()(a.endDate).toDate():null),o=Object(l.a)(i,2),j=o[0],d=o[1],b=Object(n.useState)(a?a.title:""),u=Object(l.a)(b,2),p=u[0],x=u[1],f=Object(n.useState)(!1),m=Object(l.a)(f,2),v=m[0],g=m[1],y=j&&h()(j).format("YYYY/MM/DD");return Object(c.jsxs)(H.a,{maxWidth:"xs",fullWidth:!0,open:t,className:"settings-modal christmas-theme",children:[Object(c.jsx)(z.a,{children:" D-Day Settings"}),Object(c.jsxs)(F.a,{children:[Object(c.jsxs)("div",{className:"settings",children:[Object(c.jsx)("div",{className:"title",children:" D-Day Title"}),Object(c.jsx)(I,{type:"text",value:p||"",onChange:function(e){return t="title",a=e.target.value,void("title"===t&&x(a));var t,a}})]}),Object(c.jsxs)("div",{className:"settings",children:[Object(c.jsx)("div",{className:"title",children:" End Date"}),Object(c.jsx)(I,{type:"text",value:y||"",placeholder:"YYYY/MM/DD",readOnly:!0}),Object(c.jsx)("i",{className:"icon-calendar",onClick:function(){g((function(e){return!e}))}})]}),v&&Object(c.jsx)(A.a,{value:j,locale:"en-US",minDetail:"month",showNeighboringMonth:!1,onChange:function(e){d(e)},nextLabel:Object(c.jsx)("i",{className:"icon-caret-right"}),prevLabel:Object(c.jsx)("i",{className:"icon-caret-right flip"}),next2Label:Object(c.jsx)("div",{}),prev2Label:Object(c.jsx)("div",{})})]}),Object(c.jsxs)(P.a,{children:[Object(c.jsx)(O.a,{onClick:s,color:"primary",children:"Cancel"}),Object(c.jsx)(O.a,{onClick:function(){return r({title:p,date:j})},color:"primary",children:"Save"})]})]})},J=function(e){var t=e.title,a=e.value;return Object(c.jsxs)("div",{className:"time-card",children:[Object(c.jsxs)("div",{className:"time",children:[" ",a]}),Object(c.jsxs)("div",{className:"type",children:[" ",t," "]})]})},K=function(){return Object(c.jsx)("div",{className:"colon",children:Object(c.jsx)("i",{className:"icon-colon"})})},q=function(e){var t=e.endDate,a=Object(n.useState)({}),s=Object(l.a)(a,2),r=s[0],i=s[1],o=null;Object(n.useEffect)((function(){return o=setInterval((function(){var e=h()(t),a=h()(),c=e.diff(a),n=Math.floor(c/1e3%60),s=Math.floor(c/1e3/60)%60,r=Math.floor(c/36e5%24),l=Math.floor(c/864e5);i({days:isNaN(l)?"-":l,hours:isNaN(r)?"-":r,minutes:isNaN(s)?"-":s,seconds:isNaN(n)?"-":n})}),1e3),function(){o&&clearInterval(o)}}),[t]);var j=r.days,d=void 0===j?"-":j,b=r.hours,u=void 0===b?"-":b,O=r.minutes,p=void 0===O?"-":O,x=r.seconds,f=void 0===x?"-":x;return Object(c.jsxs)(M,{className:"gradient time-counter",children:[Object(c.jsx)(J,{title:"DAYS",value:d}),Object(c.jsx)(K,{}),Object(c.jsx)(J,{title:"HOURS",value:u}),Object(c.jsx)(K,{}),Object(c.jsx)(J,{title:"MINUTES",value:p}),Object(c.jsx)(K,{}),Object(c.jsx)(J,{title:"SECONDS",value:f})]})},V=a(75),Q=a(64),X=a.n(Q),Z=function(e){var t=[];return e.forEach((function(e){var a=e.start,c=e.end,n=e.name;"\uc124\ub0a0"!==n&&"\ucd94\uc11d"!==n||(a=h()(a).subtract(1,"days"),c=h()(a).add(3,"days"));for(var s=h()(c).diff(h()(a),"days"),r=0;r<s;r++)t.push({date:h()(a).add(r,"days").format("YYYY-MM-DD"),name:n})})),t},$=a(22),ee=[{type:v,text:function(){return"\uc2dc\uac04 \uc548\uac08\uac70 \uac19\uc8e0? \uae08\ubc29 \uc635\ub2c8\ub2e4. \ud654\uc774\ud305!"}},{type:v,text:function(){return"\ub9cc\uae30\uc77c\uc774 \ub9ce\uc774 \ub0a8\uc558\ub098\uc694..? \ub3c4\ube44 \ud3ec\uc988\ub97c \ub530\ub77c\ud574\ubcf4\uc138\uc694\ud83d\ude0e"}},{type:v,text:function(){return"\ub9cc\uae30\ub418\uba74 \ubb50\ud558\uc2e4 \uac74\uac00\uc694? \ub9cc\uae30\uacc4\ud68d\uc744 \uc138\uc6cc\ubcf4\uc138\uc694!\ud83d\udcdd"}},{type:g,text:function(e){return"1600\ub9cc\uc6d0 \uae4c\uc9c0 ".concat(e,"\uc77c \ub0a8\uc558\uc5b4\uc694!")}},{type:S,text:function(e){return e>0?"1600\ub9cc\uc6d0 \uae4c\uc9c0 \uc57d ".concat(e,"\uc8fc \ub0a8\uc558\uc5b4\uc694! \ud798\ub0b4\uc138\uc694\ud83e\udd7a"):"\ub4dc\ub514\uc5b4 \uc774\ubc88\uc8fc\uac00 \ub9cc\uae30\uc77c \uc774\uc608\uc694!!\ud83d\udcb8"}},{type:N,text:function(e){return e>0?"1600\ub9cc\uc6d0 \uae4c\uc9c0 \uc57d ".concat(e,"\ub2ec \ub0a8\uc558\uc5b4\uc694!!!\ud83d\ude42"):"\ub4dc\ub514\uc5b4 \uc774\ubc88\ub2ec\uc774 \ub9cc\uae30\uc77c \uc774\uc608\uc694!!!\ud83d\ude2d"}},{type:y,text:function(e){return e>0?"D-".concat(e,"\uc77c\uc774 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc5b4\uc694! \ud654\uc774\ud305"):"\ub9cc\uae30\uc77c\uc774 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc5b4\uc694!\ud83d\ude00"}}],te=function(e){var t=e.onClick,a=Object(o.a)({root:{backgroundColor:x,color:"white",justifySelf:"end"}})(O.a);return Object(c.jsx)(a,{variant:"contained",color:"primary",startIcon:Object(c.jsx)(d.a,{}),onClick:t,children:"Add a new event"})},ae=function(e){var t=e.settings,a=e.onLoadSettings,n=e.onOpenSettings;return Object(c.jsxs)("div",{className:"settings-info",children:[Object(c.jsx)(O.a,{variant:"contained",color:"primary",onClick:a,children:t.title}),Object(c.jsx)(O.a,{variant:"outlined",color:"primary",startIcon:Object(c.jsx)(u.a,{}),onClick:n,children:"Edit"})]})},ce=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(null),i=Object(l.a)(r,2),o=i[0],j=i[1],d=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(o),b=Object(n.useState)("-"),u=Object(l.a)(b,2),O=u[0],p=u[1],x=Object(n.useState)("-"),v=Object(l.a)(x,2),k=v[0],E=v[1],Y=Object(n.useState)(0),w=Object(l.a)(Y,2),T=w[0],L=w[1],I=Object(n.useState)("\ud83c\udf81"),A=Object(l.a)(I,2),R=A[0],B=A[1],_=Object(n.useState)(!1),H=Object(l.a)(_,2),z=H[0],F=H[1],P=Object(n.useState)(null),J=Object(l.a)(P,2),K=J[0],Q=J[1],ce=Object(n.useState)(!1),ne=Object(l.a)(ce,2),se=ne[0],re=ne[1];Object(n.useEffect)((function(){ie()}),[]),Object(n.useEffect)((function(){var e=h()(a).format(C)===h()().format(C),t=h()(d).format(C)===h()(o).format(C);e&&t||re(!1)}),[a,o]);var ie=function(){var e=function(e){if(e&&""!==e){var t=localStorage.getItem(e);return t?JSON.parse(t):void 0}}(D);if(e){var t=e.endDate.split("/"),a=Object(l.a)(t,3),c=a[0],n=a[1],r=a[2];s(h()().set({h:0,m:0,s:0}).toDate()),j(h()({year:c,month:n-1,date:r}).toDate()),Q(e)}},le=function(){F((function(e){return!e}))},oe=function(){p("-"),E("-"),L(0),B("\ud83c\udf81")};return Object(c.jsx)("div",{className:"main-content",children:Object(c.jsxs)("div",{className:"content-wrapper",children:[K?Object(c.jsx)(ae,{settings:K,onOpenSettings:le,onLoadSettings:ie}):Object(c.jsx)(te,{onClick:le}),Object(c.jsx)(U,{startDate:a,endDate:o,title:K?K.title:"",onDateChange:function(e,t){e===f&&s(t),e===m&&j(t)},onCalculate:function(){if(!a||!o||o<a||a===o)oe();else{var e=function(e,t){var a=new X.a;a.init("KR");for(var c=h()(e).year(),n=h()(t).year(),s=[],r=[],i=0;i<=n-c;i++)s.push(c+i);s.forEach((function(e){var t;return(t=r).push.apply(t,Object(V.a)(a.getHolidays(e)))}));var l=0;r=Z(r);for(var o=h()(t).diff(h()(e),"days"),j=function(t){var a=h()(e).add(t,"days");r.find((function(e){return e.date===a.format("YYYY-MM-DD")}))||6===a.day()||0===a.day()||l++},d=0;d<o+1;d++)j(d);return{workDays:l,calendarDays:o}}(a,o),t=e.calendarDays,c=e.workDays;E(t||"-"),p(c||"-");var n=h()(o).subtract(2,"years"),s=(h()(a).diff(h()(n),"days")+1)/730*100;L(s<0||s>100?0:Number.parseFloat(s.toFixed(1))),h()(a).format(C)===h()().format(C)&&re(!0);var r=function(e){var t,a=Math.floor(Math.random()*ee.length)+0,c=ee[a],n=c.type,s=c.text,r=(t={},Object($.a)(t,g,e),Object($.a)(t,S,e>7?Math.ceil(e/7):0),Object($.a)(t,N,Math.floor(e/30)),Object($.a)(t,y,e-e%100),t);return e>0?s(r[n]):"\ub4dc\ub514\uc5b4 \ub9cc\uae30\uc77c \uc774\uc608\uc694!!! \ucd95\ud558\ud569\ub2c8\ub2e4\ud83c\udf89\ud83c\udf81"}(t);B(r)}},onOpenSettings:le}),Object(c.jsxs)(M,{align:"left",children:[Object(c.jsx)("i",{className:"icon-work"}),O," working days"]}),Object(c.jsxs)(M,{align:"left",children:[Object(c.jsx)("i",{className:"icon-date"}),k," calendar days"]}),Object(c.jsx)(G,{value:T}),Object(c.jsx)(q,{endDate:se?o:null}),Object(c.jsx)(M,{outlined:!0,children:R}),z&&Object(c.jsx)(W,{open:z,settings:K||{},onClose:le,onSave:function(e){var t=e.title,a=e.date,c={title:t,endDate:h()(a).format(C)};!function(e,t){if(e&&""!==e){var a=JSON.stringify(t);localStorage.setItem(e,a)}}(D,c),le(),ie()}})]})})},ne=a(67),se=a.n(ne),re=a(41),ie=a.n(re),le=(a(68),a(71),a(69),a(70),a(49)),oe=a.n(le),je=a(72),de=[{id:1,name:"Terrible",icon:Object(c.jsxs)("span",{class:"icon-terrible",children:[Object(c.jsx)("span",{class:"path1"}),Object(c.jsx)("span",{class:"path2"}),Object(c.jsx)("span",{class:"path3"}),Object(c.jsx)("span",{class:"path4"}),Object(c.jsx)("span",{class:"path5"}),Object(c.jsx)("span",{class:"path6"}),Object(c.jsx)("span",{class:"path7"}),Object(c.jsx)("span",{class:"path8"}),Object(c.jsx)("span",{class:"path9"}),Object(c.jsx)("span",{class:"path10"})]})},{id:2,name:"Bad",icon:Object(c.jsxs)("span",{class:"icon-bad",children:[Object(c.jsx)("span",{class:"path1"}),Object(c.jsx)("span",{class:"path2"}),Object(c.jsx)("span",{class:"path3"}),Object(c.jsx)("span",{class:"path4"}),Object(c.jsx)("span",{class:"path5"}),Object(c.jsx)("span",{class:"path6"}),Object(c.jsx)("span",{class:"path7"}),Object(c.jsx)("span",{class:"path8"}),Object(c.jsx)("span",{class:"path9"})]})},{id:3,name:"Okay",icon:Object(c.jsxs)("span",{class:"icon-okay",children:[Object(c.jsx)("span",{class:"path1"}),Object(c.jsx)("span",{class:"path2"}),Object(c.jsx)("span",{class:"path3"}),Object(c.jsx)("span",{class:"path4"}),Object(c.jsx)("span",{class:"path5"}),Object(c.jsx)("span",{class:"path6"}),Object(c.jsx)("span",{class:"path7"}),Object(c.jsx)("span",{class:"path8"}),Object(c.jsx)("span",{class:"path9"}),Object(c.jsx)("span",{class:"path10"}),Object(c.jsx)("span",{class:"path11"}),Object(c.jsx)("span",{class:"path12"}),Object(c.jsx)("span",{class:"path13"}),Object(c.jsx)("span",{class:"path14"})]})},{id:4,name:"Good",icon:Object(c.jsxs)("span",{class:"icon-good",children:[Object(c.jsx)("span",{class:"path1"}),Object(c.jsx)("span",{class:"path2"}),Object(c.jsx)("span",{class:"path3"}),Object(c.jsx)("span",{class:"path4"}),Object(c.jsx)("span",{class:"path5"}),Object(c.jsx)("span",{class:"path6"}),Object(c.jsx)("span",{class:"path7"}),Object(c.jsx)("span",{class:"path8"}),Object(c.jsx)("span",{class:"path9"})]})},{id:5,name:"Great",icon:Object(c.jsxs)("span",{class:"icon-great",children:[Object(c.jsx)("span",{class:"path1"}),Object(c.jsx)("span",{class:"path2"}),Object(c.jsx)("span",{class:"path3"}),Object(c.jsx)("span",{class:"path4"}),Object(c.jsx)("span",{class:"path5"}),Object(c.jsx)("span",{class:"path6"}),Object(c.jsx)("span",{class:"path7"}),Object(c.jsx)("span",{class:"path8"})]})}],be=function(e){var t=e.onToggle,a=Object(n.useState)(null),s=Object(l.a)(a,2),r=s[0],i=s[1],o=Object(n.useState)(""),j=Object(l.a)(o,2),d=j[0],b=j[1],u=Object(n.useState)("STATUS_INIT"),p=Object(l.a)(u,2),x=p[0],f=p[1],m=function(){var e=Object(je.a)(oe.a.mark((function e(){var a,c;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URL("https://script.google.com/macros/s/".concat("AKfycbzlYW8e_-R9Mdhq5U9VME_t6l7UuYD328AFSuG61o6RnT1dGD0","/exec")),c={date:h()().format("YYYY-MM-DD HH:mm:ss"),rating:r,comment:d},a.search=new URLSearchParams(c),f(k),e.next=6,fetch(a.toString(),{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){f("STATUS_SUCCESS"),g(t)})).catch((function(e){return console.error(e)}));case 6:e.sent,v();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){i(null),b("")},g=function(e){e();var t=document.getElementById("message");t.classList.toggle("fade"),t.style.display="block",setTimeout((function(){t.style.display="none",t.classList.toggle("fade")}),3e3)};return Object(c.jsxs)("div",{id:"feedback",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("span",{className:"title",children:" SHARE YOUR FEEDBACK"}),Object(c.jsx)(ie.a,{onClick:t})]}),Object(c.jsx)("div",{className:"ratings",children:de.map((function(e){return Object(c.jsxs)("div",{className:"rate ".concat(r===e.id?"selected":""),onClick:function(){return i(e.id)},children:[e.icon,Object(c.jsxs)("span",{className:"label",children:[" ",e.name]})]})}))}),Object(c.jsx)("div",{className:"comment",children:Object(c.jsx)("textarea",{rows:"5",placeholder:"Leave a Comment ...",maxlength:"250",spellcheck:"false",autocomplete:"false",required:!0,value:d,onChange:function(e){return b(e.target.value)}})}),Object(c.jsx)(O.a,{variant:"contained",color:"primary",onClick:m,disabled:0===d.length||x===k||!r,children:x===k?"SENDING ...":"SEND"})]})};a(73),a(74),a(127),a(128);var ue=function(){return Object(c.jsx)("div",{id:"message",children:"Thanks for your feedback ! \ud83d\udc96"})},Oe=function(){Object(n.useEffect)((function(){se()({color:"white",count:40,speed:1,minSize:13,maxSize:18,minOpacity:.5})}),[]);var e=function(){document.getElementById("feedback").classList.toggle("show")};return Object(c.jsxs)("div",{className:"App christmas-theme",children:[Object(c.jsx)(ce,{}),Object(c.jsxs)("div",{className:"feedback-icon",onClick:e,children:[Object(c.jsx)("i",{className:"icon-feedback"}),Object(c.jsx)(ue,{})]}),Object(c.jsx)(be,{onToggle:e})]})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(Oe,{})}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.bc8dfb17.chunk.js.map