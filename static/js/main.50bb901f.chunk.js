(this["webpackJsonpdate-calculator"]=this["webpackJsonpdate-calculator"]||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),s=a(9),i=a.n(s),l=(a(70),a(71),a(10)),o=a(6),d=a.n(o),j="#4360FB",u="START",b="END",O="D_DAY_SETTINGS",h=a(23),v=a(20),f=function(e){var t=e.children,a=e.className,c=e.align,r=Object(v.a)(e,["children","className","align"]),s="align-".concat(c),i="card ".concat(a||""," ").concat(s);return Object(n.jsx)("div",Object(h.a)(Object(h.a)({className:i},r),{},{children:t}))};f.defaultProps={children:Object(n.jsx)("div",{}),align:"center"};var m=f,x=function(e){var t=e.children,a=Object(v.a)(e,["children"]);return Object(n.jsx)("span",Object(h.a)(Object(h.a)({className:"text"},a),{},{children:t}))},g=function(e){var t=e.type,a=e.value,c=e.onChange,r=e.placeholder,s=e.readOnly;Object(v.a)(e,["type","value","onChange","placeholder","readOnly"]);return Object(n.jsx)("input",{type:t,value:a,placeholder:r,readOnly:s,onChange:c})};g.defaultProps={type:"text",value:"",readOnly:!1};var p=g,y=a(7),D=a(141),C=a(39),N=function(e){var t=e.id,a=e.name,c=e.value,r=e.onChange,s=e.onToggleCalendar,i=c&&d()(c).format("YYYY/MM/DD");return Object(n.jsxs)("div",{className:"date-wrapper",children:[Object(n.jsxs)(x,{children:[a," "]}),Object(n.jsx)(p,{type:"text",value:i,placeholder:"YYYY/MM/DD",readOnly:!0}),Object(n.jsx)("i",{className:"icon-calendar",onClick:function(){return s(t)}}),Object(n.jsx)(D.a,{variant:"outlined",color:"primary",onClick:function(){return r(t,d()().set({hour:0,minute:0,second:0}).toDate())},children:"Today"}),Object(n.jsx)(C.a,{className:"hide",value:c,locale:"en-US",minDetail:"month",showNeighboringMonth:!1,onChange:function(e){r(t,e),s(t)}})]})},Y=function(e){var t=e.startDate,a=e.endDate,c=e.onDateChange,r=e.onCalculate,s=e.onOpenSettings,i=Object(y.a)({root:{backgroundColor:j}})(D.a),o=function(e){var t=document.getElementsByClassName("react-calendar"),a=Object(l.a)(t,2),n=a[0],c=a[1];e===u&&(n.classList.contains("hide")?(n.classList.remove("hide"),c.classList.add("hide")):n.classList.add("hide"));e===b&&(c.classList.contains("hide")?c.classList.remove("hide"):c.classList.add("hide"))};return Object(n.jsxs)(m,{className:"date-selector",children:[Object(n.jsx)("i",{className:"icon-settings",onClick:s}),Object(n.jsx)(N,{id:u,name:"Start Date",value:t,onChange:c,onToggleCalendar:o}),Object(n.jsx)(N,{id:b,name:"End Date",value:a,onChange:c,onToggleCalendar:o}),Object(n.jsx)(i,{variant:"contained",color:"primary",onClick:r,children:"Calculate"})]})},S=a(137),M=Object(y.a)((function(e){return{root:{height:"1.5rem",borderRadius:5},colorPrimary:{backgroundColor:"white"},bar:{borderRadius:5,backgroundColor:j}}}))(S.a),k=function(e){var t=e.value,a=Object(c.useState)(0),r=Object(l.a)(a,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){var e=setInterval((function(){i((function(e){return e>=t?t:e+5}))}),100);return function(){clearInterval(e)}}),[t]),Object(n.jsxs)("div",{className:"progress-bar",children:[Object(n.jsx)(M,{variant:"determinate",value:s}),Object(n.jsxs)("span",{children:[" ",t||0,"%"]})]})},w=a(140),E=a(143),T=a(138),L=a(139),I=function(e){var t=e.open,a=e.settings,r=e.onClose,s=e.onSave,i=Object(c.useState)(d()(a.endDate).toDate()),o=Object(l.a)(i,2),j=o[0],u=o[1],b=Object(c.useState)(a.title),O=Object(l.a)(b,2),h=O[0],v=O[1],f=Object(c.useState)(!1),m=Object(l.a)(f,2),x=m[0],g=m[1],y=j&&d()(j).format("YYYY/MM/DD");return Object(n.jsxs)(w.a,{maxWidth:"xs",fullWidth:!0,open:t,className:"settings-modal",children:[Object(n.jsx)(E.a,{children:" D-Day Settings"}),Object(n.jsxs)(T.a,{children:[Object(n.jsxs)("div",{className:"settings",children:[Object(n.jsx)("div",{className:"title",children:" D-Day Title"}),Object(n.jsx)(p,{type:"text",value:h||"",onChange:function(e){return t="title",a=e.target.value,void("title"===t&&v(a));var t,a}})]}),Object(n.jsxs)("div",{className:"settings",children:[Object(n.jsx)("div",{className:"title",children:" End Date"}),Object(n.jsx)(p,{type:"text",value:y||"",placeholder:"YYYY/MM/DD",readOnly:!0}),Object(n.jsx)("i",{className:"icon-calendar",onClick:function(){g((function(e){return!e}))}})]}),x&&Object(n.jsx)(C.a,{value:j,locale:"en-US",minDetail:"month",showNeighboringMonth:!1,onChange:function(e){u(e)}})]}),Object(n.jsxs)(L.a,{children:[Object(n.jsx)(D.a,{onClick:r,color:"primary",children:"Cancel"}),Object(n.jsx)(D.a,{onClick:function(){return s({title:h,date:j})},color:"primary",children:"Save"})]})]})},J=a(58),R=a(57),A=a.n(R),B=function(e){var t=[];return e.forEach((function(e){var a=e.start,n=e.end,c=e.name;"\uc124\ub0a0"!==c&&"\ucd94\uc11d"!==c||(a=d()(a).subtract(1,"days"),n=d()(a).add(3,"days"));for(var r=d()(n).diff(d()(a),"days"),s=0;s<r;s++)t.push({date:d()(a).add(s,"days").format("YYYY-MM-DD"),name:c})})),t},F=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(null),i=Object(l.a)(s,2),o=i[0],j=i[1],h=Object(c.useState)("-"),v=Object(l.a)(h,2),f=v[0],x=v[1],g=Object(c.useState)("-"),p=Object(l.a)(g,2),y=p[0],D=p[1],C=Object(c.useState)(0),N=Object(l.a)(C,2),S=N[0],M=N[1],w=Object(c.useState)(!1),E=Object(l.a)(w,2),T=E[0],L=E[1],R=Object(c.useState)({}),F=Object(l.a)(R,2),P=F[0],U=F[1];Object(c.useEffect)((function(){W()}),[]);var W=function(){var e=function(e){if(e&&""!==e){var t=localStorage.getItem(e);return t?JSON.parse(t):void 0}}(O);if(e){e.title;var t=e.endDate.split("/"),a=Object(l.a)(t,3),n=a[0],c=a[1],s=a[2];r(d()().toDate()),j(d()({year:n,month:c-1,date:s}).toDate()),U(e)}},_=function(){L((function(e){return!e}))};return Object(n.jsx)("div",{className:"main-content",children:Object(n.jsxs)("div",{className:"content-wrapper",children:[Object(n.jsx)(Y,{startDate:a,endDate:o,onDateChange:function(e,t){e===u&&r(t),e===b&&j(t)},onCalculate:function(){if(a&&o&&!(o<a)){var e=function(e,t){var a=new A.a;a.init("KR");for(var n=d()(e).year(),c=d()(t).year(),r=[],s=[],i=0;i<=c-n;i++)r.push(n+i);r.forEach((function(e){var t;return(t=s).push.apply(t,Object(J.a)(a.getHolidays(e)))}));var l=0;s=B(s);for(var o=d()(t).diff(d()(e),"days"),j=function(t){var a=d()(e).add(t,"days");s.find((function(e){return e.date===a.format("YYYY-MM-DD")}))||6===a.day()||0===a.day()||l++},u=0;u<o+1;u++)j(u);return{workDays:l,calendarDays:o}}(a,o);D(e.calendarDays||"-"),x(e.workDays||"-");var t=d()(o).subtract(2,"years"),n=(d()(a).diff(d()(t),"days")+1)/730*100;M(Number.parseFloat(n.toFixed(1)))}},onOpenSettings:_}),Object(n.jsxs)(m,{align:"left",children:[Object(n.jsx)("i",{className:"icon-work"}),f," working days"]}),Object(n.jsxs)(m,{align:"left",children:[Object(n.jsx)("i",{className:"icon-date"}),y," calendar days"]}),Object(n.jsx)(k,{value:S}),T&&Object(n.jsx)(I,{open:T,settings:P,onClose:_,onSave:function(e){var t=e.title,a=e.date,n={title:t,endDate:d()(a).format("YYYY/MM/DD")};!function(e,t){if(e&&""!==e){var a=JSON.stringify(t);localStorage.setItem(e,a)}}(O,n),_(),W()}})]})})},P=a.p+"static/media/dobby.b1cb7c5e.png";var U=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(F,{}),Object(n.jsx)("div",{className:"dobby-wrapper",children:Object(n.jsx)("img",{src:P,alt:"dobby"})})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root"))},70:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.50bb901f.chunk.js.map