(this.webpackJsonpbalance=this.webpackJsonpbalance||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},38:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),s=a.n(c),l=(a(37),a(38),a(8)),i=a(10),o=a(11),m=a(13),u=a(12),h=a(31),f=a(29),b=a.n(f),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.setState({showHow:!n.state.showHow})},n.handleThingChange=function(e){n.setState({whatValue:e.target.value})},n.handleCostChange=function(e){n.setState({costValue:e.target.value})},n.handleClick=function(){n.state.costValue<=20?n.state.data.map((function(e){if(e.thershold<=20){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}})):n.state.costValue<=50?n.state.data.map((function(e){if(e.thershold<=50){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}})):n.state.costValue<=80?n.state.data.map((function(e){if(e.thershold<=80){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}})):n.state.costValue<=100?n.state.data.map((function(e){if(e.thershold<=100){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}})):n.state.costValue<=200?n.state.data.map((function(e){if(e.thershold<=200){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}})):n.state.costValue<=500?n.state.data.map((function(e){if(e.thershold<=500){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}})):n.state.costValue<=2e3?n.state.data.map((function(e){if(e.thershold<=2e3){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}})):n.state.costValue<=5e4&&n.state.data.map((function(e){if(e.thershold<=5e4){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}}))},n.state={data:[],whatValue:"",costValue:"",showHow:!1,nomberOfVacines:"",table:[],numberOfShelters:"",numberOf:"",image:"",text1:"",text2:"",info:"",adress:"",href:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.init({key:"1NKa7gPtvcImda1TyAfkM9mlkJ5rDuke5eRqmQImNFWA",callback:function(t){e.setState({data:t})},simpleSheet:!0})}},{key:"render",value:function(){var e=this;this.state.data;return r.a.createElement("div",{className:"container main"},this.state.showHow?r.a.createElement("div",{className:"center container main"},r.a.createElement("h1",{className:"top1em"},"Your ",r.a.createElement("br",null),r.a.createElement("span",{className:"thing"},this.state.whatValue)),r.a.createElement("h2",null,"is worth ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{style:{color:"black"}},this.state.text1," ",this.state.table.length," ",this.state.text2)," "),r.a.createElement("div",{className:"margin3em"},Object(h.a)(this.state.table).map((function(t){return r.a.createElement("img",{className:"image",src:e.state.image})}))),r.a.createElement("div",{className:"margin3em"},r.a.createElement("h2",null,r.a.createElement("br",null),r.a.createElement("q",null,this.state.info))),r.a.createElement("div",null,r.a.createElement("h3",null,"more info at:"," ",r.a.createElement("a",{className:"a",href:this.state.href},this.state.adress))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("a",{className:"ainvert",href:"../balance/#/"},"Check once again..."))),r.a.createElement("div",{id:"footer"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))):r.a.createElement("div",{className:"margintop10vh"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form"},r.a.createElement("label",null,"What do you want to buy?"),r.a.createElement("input",{className:"input",onChange:this.handleThingChange,value:this.state.whatValue}),r.a.createElement("label",null,"How much it costs?"),r.a.createElement("input",{type:"number",className:"input",onChange:this.handleCostChange,placeholder:"",value:this.state.costValue,style:{width:"40%"}}),r.a.createElement("button",{onClick:this.handleClick,type:"submit",className:"check top5rem",style:{textTransform:""}},"How much is it worth?"))),r.a.createElement("div",null))}}]),a}(n.Component),p=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"center "},r.a.createElement(d,null))}}]),a}(n.Component);var g=function(){return r.a.createElement("div",{className:"center container"},r.a.createElement("div",{className:"margintop20vh"},r.a.createElement("h1",{className:"titleRotation"},"BALANCE")),r.a.createElement("h2",{className:"mainh2"},"how much is it worth?"),r.a.createElement("div",{className:"checkmargintop20vh"},r.a.createElement("button",null,r.a.createElement(l.b,{className:"check",to:"/main"},"Check"))))},w=a(1);var E=function(){return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",component:g}),r.a.createElement(w.a,{path:"/main",component:p}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.984d522d.chunk.js.map