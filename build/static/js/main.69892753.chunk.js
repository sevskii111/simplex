(this.webpackJsonpotg=this.webpackJsonpotg||[]).push([[0],{31:function(e,t,a){e.exports=a(44)},36:function(e,t,a){},37:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),c=a.n(l),s=(a(36),a(37),a(12)),i=a(13),h=a(15),u=a(14),o=a(8),m=a(16),d=a(52),p=a(46),g=a(47),f=a(20),v=a(19),b=a(48),E=a(49),x=a(50),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={width:1,height:1},a.handleInput=a.handleInput.bind(Object(o.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleInput",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(v.a)({},a,n)),this.props.handleSizeChange(Object(f.a)({},this.state,Object(v.a)({},a,n)))}},{key:"render",value:function(){return r.a.createElement(p.a,{className:"text-left"},r.a.createElement(g.a,{xs:{size:12},md:{size:"auto"}},r.a.createElement("h2",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438\u0433\u0440\u044b:")),r.a.createElement(g.a,{xs:11,md:3,className:"mt-1"},r.a.createElement(b.a,null,r.a.createElement(E.a,{row:!0},r.a.createElement(g.a,null,r.a.createElement(x.a,{type:"number",placeholder:0,name:"width",value:this.state.width,onChange:this.handleInput,min:1})),r.a.createElement("span",{className:"cross"},"X"),r.a.createElement(g.a,null,r.a.createElement(x.a,{type:"number",placeholder:0,name:"height",value:this.state.height,onChange:this.handleInput,min:1}))))))}}]),t}(n.Component),j=a(51),O=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).handleInput=function(e,t){return function(n){for(var r=n.target.value,l=a.state.values,c=[],s=0;s<a.state.height;s++){c.push([]);for(var i=0;i<a.state.width;i++)l[s]?c[s].push(l[s][i]||0):c[s].push(0)}c[e][t]=Number(r),a.props.handleMatrixChange(c),a.setState(Object(f.a)({},a.state,{values:c}))}},a.state={width:a.props.width||1,height:a.props.height||1,values:[],saddle:{x:-1,y:-1}};for(var n=0;n<a.state.height;n++){a.state.values.push([]);for(var r=0;r<a.state.width;r++)a.state.values[n].push(0)}return a.handleInput=a.handleInput.bind(Object(o.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleResize",value:function(e){var t=e.width,a=e.height;if(this.state.width!==t||this.state.height!==a){for(var n=this.state.values,r=[],l=0;l<a;l++){r.push([]);for(var c=0;c<t;c++)n[l]?r[l].push(n[l][c]||0):r[l].push(0)}this.setState({width:t,height:a,values:r}),this.props.handleMatrixChange(r)}}},{key:"componentDidUpdate",value:function(e,t,a){this.handleResize(this.props)}},{key:"componentDidMount",value:function(){this.props.handleMatrixChange(this.state.values)}},{key:"renderTable",value:function(){var e=this,t=function(t,a){return e.props.saddle?t===e.props.saddle.y&&a===e.props.saddle.x?"highlight":t===e.props.saddle.y||a===e.props.saddle.x?"semi-highlight":"":""},a=[];a.push(r.a.createElement("tr",{key:"0c"},r.a.createElement("th",{className:"bg-light"},"\u0418\u0433\u0440\u043e\u043a\u0438"),this.state.values[0].map((function(e,t){return r.a.createElement("th",{className:"bg-light",key:"-".concat(t)},"B",r.a.createElement("sub",null,t+1))})),r.a.createElement("th",{className:"bg-light"},"min(A",r.a.createElement("sub",null,"i"),")")));for(var n=[],l=0;l<this.state.height;l++){for(var c=[r.a.createElement("th",{className:"bg-light",key:"min-".concat(l)},"A",r.a.createElement("sub",null,l+1))],s=this.state.values[l][0],i=0;i<this.state.width;i++){var h=this.state.values[l][i];s=Math.min(s,h),(!n[i]||n[i]<h)&&(n[i]=h),c.push(r.a.createElement("td",{key:"".concat(l,"-").concat(i),className:t(l,i)},r.a.createElement("input",{type:"number",value:h||"",placeholder:"0",className:"table-input",onChange:this.handleInput(l,i),key:"".concat(l,"-").concat(i)})))}c.push(r.a.createElement("td",{className:"bg-light",key:"".concat(l,"-min")},s)),a.push(r.a.createElement("tr",{key:l},c))}return a.push(r.a.createElement("tr",{key:"lc"},r.a.createElement("th",{className:"bg-light"},"max(B",r.a.createElement("sub",null,"i"),")"),n.map((function(e,t){return r.a.createElement("td",{className:"bg-light",key:"".concat(t,"-")},e)})))),a}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(g.a,{xs:12,md:"auto"},r.a.createElement(j.a,{bordered:!0,className:"text-center",responsive:!0},r.a.createElement("tbody",null,this.renderTable())))))}}]),t}(n.Component),w=function(e){var t,a=e.saddle;return t=a?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"text-success"},"\u041c\u0430\u0442\u0440\u0438\u0446\u0430 \u0438\u043c\u0435\u0435\u0442 \u0441\u0435\u0434\u043b\u043e\u0432\u0443\u044e \u0442\u043e\u0447\u043a\u0443"),r.a.createElement("h3",null,"\u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u0442\u043e\u0447\u043a\u0438: (",a.x+1,",",a.y+1,")"),r.a.createElement("h3",null,"\u0426\u0435\u043d\u0430 \u0438\u0433\u0440\u044b: ",a.price)):r.a.createElement("h2",{className:"text-warning"},"\u0421\u0435\u0434\u043b\u043e\u0432\u0430\u044f \u0442\u043e\u0447\u043a\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"),r.a.createElement(p.a,{className:"text-left"},r.a.createElement(g.a,{xs:12},r.a.createElement("hr",null),t))},k=a(9),N=a(27),C=a(53),S=function(e){for(var t=e.length||0,a=e?e[0].length:0,n=[],r=0;r<t;r++)n[r]=Math.min.apply(Math,Object(k.a)(e[r]));for(var l=[],c=0;c<a;c++){l[c]=e[0][c];for(var s=1;s<t;s++)e[s][c]>l[c]&&(l[c]=e[s][c])}for(var i=0;i<t;i++)for(var h=0;h<a;h++)if(n[h]===l[i])return{x:i,y:h,price:e[i][h]};return!1},M=function(e){var t=e.length||0,a=e?e[0].length:0;if(t!==a)return{a:[],b:[],s:!1};for(var n=[],r=0;r<t;r++){n.push([]);for(var l=0;l<a;l++)n[r].push(e[r][l]);n[r].push(-1)}n.push([].concat(Object(k.a)(e.map((function(){return 1}))),[0]));var c=[].concat(Object(k.a)(e.map((function(){return 0}))),[1]);try{return{a:n,b:c,s:N.solve(n,c)}}catch(s){return{a:n,b:c,s:!1}}},z=1e-6;function I(e,t){return e.b+e.a*t[0]+z>=t[1]}function F(e,t){return e.b+e.a*t[0]-z<=t[1]}var B=function(e){if(!e||!e[0]||2!==e.length&&2!==e[0].length)return!1;var t,a,n={matrix:[],bolds:[],point:null};"h"===(2===e.length?"h":"v")?(n.matrix=Object(C.b)(e),t=e[0].map((function(t,a){return{a:e[1][a]-t,b:t,x1:0,y1:t,x2:1,y2:e[1][a]}})),a=I):(n.matrix=e,t=e.map((function(e){return{a:e[1]-e[0],b:e[0],x1:0,y1:e[0],x2:1,y2:e[1]}})),a=F);for(var r=[],l=[].concat(Object(k.a)(t),[{x1:0,y1:-100,x2:0,y2:100},{x1:1,y1:-100,x2:1,y2:100}]),c=0;c<l.length;c++)for(var s=l[c],i=function(e){var t=l[e],a=Object(C.a)([s.x1,s.y1],[s.x2,s.y2],[t.x1,t.y1],[t.x2,t.y2]);a&&!~r.findIndex((function(e){return e[0]===a[0]&&e[1]===a[1]}))&&r.push(a)},h=c+1;h<l.length;h++)i(h);r=r.filter((function(e){return e[0]>=0&&e[0]<=1&&t.every((function(t){return a(t,e)}))})).sort((function(e,t){return e[0]-t[0]})),console.log(r);for(var u=0;u<r.length-1;u++)n.bolds.push([r[u][0],r[u][1],r[u+1][0],r[u+1][1]]);return console.log(n.bolds),n},A=function(e,t,a){return r.a.createElement("div",null,r.a.createElement("h3",null,"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0439 \u0434\u043b\u044f ",e," \u0438\u0433\u0440\u043e\u043a\u0430"),t.map((function(e,a){return r.a.createElement("p",{key:"a-".concat(a)},e.splice(0,e.length-1).map((function(e,t){return r.a.createElement("span",{key:"a-".concat(a,"-").concat(t)},e>=0&&0!==t?"+".concat(e):e,"p",r.a.createElement("sub",null,t+1))}))," = ",a<t.length-1?"y":"1")})),r.a.createElement("h4",null,"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"),r.a.createElement("p",null,"y = ",a[a.length-1].toFixed(2)),a.slice(0,a.length-1).map((function(e,t){return r.a.createElement("p",{key:"s-".concat(t)},"p",r.a.createElement("sub",null,t+1)," = ",e.toFixed(2))})))},D=function(e){var t=e.matrix;if(!t||!t[0]||t.length!==t[0].length)return r.a.createElement("div",null);var a=[M(Object(C.b)(t)),M(t)];return r.a.createElement(p.a,null,r.a.createElement(g.a,{xs:12},r.a.createElement("hr",null),r.a.createElement("h2",{className:"text-success"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0438\u043c\u0435\u0435\u0442 \u0432\u0438\u0434 NxN"),A(1,a[0].a,a[0].s),A(2,a[1].a,a[1].s)))},J=a(29),R=a.n(J),T=function(e){var t=e.sol;if(!t)return r.a.createElement("div",null);var a=t.matrix,n=t.bolds,l=(t.point,a.map((function(e){return{x:[0,1],y:[e[0],e[1]],type:"scatter",mode:"lines",line:{color:"grey",width:1}}})));l.push.apply(l,Object(k.a)(n.map((function(e){return{x:[e[0],e[2]],y:[e[1],e[3]],type:"scatter",mode:"lines",line:{color:"orange",width:1}}})))),l.push({x:[1,1],y:[0,Math.max.apply(Math,Object(k.a)(a.map((function(e){return Math.max(e[0],e[1])}))))],type:"scatter",mode:"lines",line:{color:"black",width:1}});return r.a.createElement(p.a,null,r.a.createElement(g.a,{xs:12},r.a.createElement("hr",null),r.a.createElement(R.a,{data:l,labels:[],layout:{showlegend:!1},config:{staticPlot:!0},className:"plot"})))},W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={width:1,height:1,matrix:[[0]],graphSol:!1},a.handleSizeChange=a.handleSizeChange.bind(Object(o.a)(a)),a.handleMatrixChange=a.handleMatrixChange.bind(Object(o.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleSizeChange",value:function(e){var t=e.width,a=e.height;this.setState({width:t,height:a})}},{key:"handleMatrixChange",value:function(e){this.setState({matrix:e,saddle:S(e),graphSol:B(e)})}},{key:"renderSolution",value:function(){if(this.state.matrix)return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{saddle:this.state.saddle}),r.a.createElement(T,{sol:this.state.graphSol}),r.a.createElement(D,{matrix:this.state.matrix}),r.a.createElement(T,{matrix:this.state.matrix}))}},{key:"render",value:function(){return r.a.createElement(d.a,{fluid:!0},r.a.createElement(p.a,null,r.a.createElement(g.a,{xs:{offset:1,size:"10"},className:"mt-2"},r.a.createElement(y,{handleSizeChange:this.handleSizeChange}),r.a.createElement(O,{width:this.state.width,height:this.state.height,handleMatrixChange:this.handleMatrixChange,saddle:this.state.saddle}),this.renderSolution())))}}]),t}(n.Component);a(43);var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.69892753.chunk.js.map