(this["webpackJsonproda-dagar"]=this["webpackJsonproda-dagar"]||[]).push([[0],{15:function(e,a,t){e.exports=t(28)},2:function(e,a,t){e.exports={h1:"Header_h1__86Lt0",header:"Header_header__e964W",yearContainer:"Header_yearContainer__Q-l27",sticky:"Header_sticky__P294C",yearBtn:"Header_yearBtn__2qPoY"}},20:function(e,a,t){},21:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(14),i=t.n(s),c=(t(20),t(12)),l=t(3),o=t(6),d=t(7),m=t(9),u=t(8),g=(t(21),["s\xf6ndag","m\xe5ndag","tisdag","onsdag","torsdag","fredag","l\xf6rdag"]),h=["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],f=t(2),y=t.n(f),v=t(5),D=t(4),w=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isSticky:!1},n.myRef=r.a.createRef(),n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){return e.handleScroll()}),{passive:!0}),console.log(this.state)}},{key:"handleScroll",value:function(){var e=this.myRef.current.getBoundingClientRect();!this.state.isSticky&&e.y<0?this.setState((function(){return{isSticky:!0}})):this.state.isSticky&&window.scrollY<56&&this.setState((function(){return{isSticky:!1}}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:y.a.header+" col-12 header p-0"},r.a.createElement("h1",{className:y.a.h1},"R\xf6da dagar"),r.a.createElement("div",{className:y.a.yearContainer+" "+(this.state.isSticky?y.a.sticky:""),ref:this.myRef},r.a.createElement("span",{className:y.a.yearBtn+" float-left",onClick:function(){return e.props.changeYear(-1)}},r.a.createElement(v.a,{icon:D.a})),r.a.createElement("div",{className:"d-inline-block year"},this.props.year," - ",this.props.squeezeDays," kl\xe4mdag",this.props.squeezeDays>1?"ar":""),r.a.createElement("span",{className:y.a.yearBtn+" float-right",onClick:function(){return e.props.changeYear(1)}},r.a.createElement(v.a,{icon:D.b})))))}}]),t}(n.Component),p=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={selectedYear:(new Date).getFullYear(),showPastDates:!1},n}return Object(d.a)(t,[{key:"getAllDates",value:function(){var e,a=[].concat(Object(l.a)((e=this.state.selectedYear,[{date:new Date(e+"-01-01"),name:"Ny\xe5rsdagen"},{date:new Date(e+"-01-06"),name:"Trettondedag jul"},{date:new Date(e+"-04-30"),name:"Valborgsm\xe4ssoafton"},{date:new Date(e+"-05-01"),name:"F\xf6rsta maj"},{date:new Date(e+"-06-06"),name:"Nationaldagen"},{date:new Date(e+"-12-24"),name:"Julafton",notReallyRed:!0},{date:new Date(e+"-12-25"),name:"Juldagen"},{date:new Date(e+"-12-26"),name:"Annandag jul"},{date:new Date(e+"-12-31"),name:"Ny\xe5rsafton",notReallyRed:!0}])),Object(l.a)(function(e){var a=(19*(e%19)+24)%30,t=22+a+(2*(e%4)+4*(e%7)+6*a+5)%7,n=new Date("".concat(e,"-").concat(t<=31?"03-"+("0"+t).slice(-2):"04-"+("0"+(t-31)).slice(-2)));return[{name:"L\xe5ngfredagen",date:new Date(n.getTime()-1728e5)},{name:"P\xe5skafton",date:new Date(n.getTime()-864e5)},{name:"P\xe5skdagen",date:n},{name:"Annandag p\xe5sk",date:new Date(n.getTime()+864e5)},{name:"Kristihimmelf\xe4rdsdag",date:new Date(n.getTime()+33696e5)},{name:"Pingsdagen",date:new Date(n.getTime()+42336e5)}]}(this.state.selectedYear)),Object(l.a)(function(e){for(var a=20;a<=26;a++){var t=new Date(e+"-06-"+a);if(6===t.getDay())return[{name:"Midsommarafton",date:new Date(t.getTime()-864e5),notReallyRed:!0},{name:"Midsommardagen",date:t}]}}(this.state.selectedYear)),Object(l.a)(function(e){return["10-31","11-01","11-02","11-03","11-04","11-05","11-06"].map((function(a){return new Date(e+"-"+a)})).filter((function(e){return 6===e.getDay()})).map((function(e){return[{name:"Alla helgons afton",date:new Date(e.getTime()-864e5),notReallyRed:!0},{name:"Alla helgons dag",date:e}]}))[0]}(this.state.selectedYear)));return a.reduce((function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(function(e,a){var t=e.date.getDay();if(2===t||4===t){var n=new Date(e.date.getTime()+864e5*(2===t?-1:1));if(0===a.filter((function(e){return new Date(e.date).getTime()===n.getTime()})).length&&n.getFullYear()===e.date.getFullYear())return[e,{date:n,isSqueezeDay:!0,name:"Kl\xe4mdag"}]}return[e]}(t,a)))}),[]).sort((function(e,a){return e.date-a.date})).map((function(e){return Object(c.a)(Object(c.a)({},e),{},{dayName:g[e.date.getDay()]})}))}},{key:"changeYear",value:function(e){this.setState((function(a){return{selectedYear:a.selectedYear+e}}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(w,{squeezeDays:this.getAllDates().filter((function(e){return e.isSqueezeDay})).length,year:this.state.selectedYear,changeYear:function(a){return e.changeYear(a)}}),r.a.createElement("div",{className:"container pt-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 p-0 text-center"},this.state.selectedYear===(new Date).getFullYear()?r.a.createElement("div",{className:"d-inline-block text-right clickable mb-2",onClick:function(){return e.setState({showPastDates:!e.state.showPastDates})}},r.a.createElement(v.a,{icon:this.state.showPastDates?D.d:D.c}),this.state.showPastDates?" D\xf6lj":" Visa"," tidigare datum"):"",this.getAllDates().filter((function(a){return a.date>new Date||e.state.showPastDates||e.state.selectedYear!==(new Date).getFullYear()})).map((function(e,a){var t,n,s;return r.a.createElement("div",{key:a,className:"day-container d-flex position-relative mb-2 text-left "+(e.notReallyRed?"gray":e.isSqueezeDay?"squeeze":"red")+(e.date<new Date?" past-date":"")},r.a.createElement("div",{className:"text-center date-box mr-2"},r.a.createElement("h1",{className:"mb-0"},null===(t=e.date)||void 0===t?void 0:t.getUTCDate()),r.a.createElement("h4",null,null===(n=h[e.date.getMonth()])||void 0===n?void 0:n.toUpperCase())),r.a.createElement("div",{className:"date-name"},r.a.createElement("h2",{className:"mb-0 pl-3"},e.name)),r.a.createElement("div",{className:"day-name"},null===(s=e.dayName)||void 0===s?void 0:s.substr(0,3)))})),r.a.createElement("div",{className:"footer mt-3"},"rodadagar.nu visar r\xf6da dagar, semi-r\xf6da dagar och kl\xe4mdagar.")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(27);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.d2b71bc9.chunk.js.map