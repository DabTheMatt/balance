(this.webpackJsonpbalance=this.webpackJsonpbalance||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},38:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),o=a.n(r),s=(a(37),a(38),a(3)),i=a(4),c=a(6),m=a(5),u=a(11),p=a(15),h=a(14),d=a.n(h),b=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).reloadPage=function(){window.location.reload(!1)},n.handleSubmit=function(e){e.preventDefault(),0==n.state.costValue?(e.preventDefault(),console.log("zero"),n.setState({costErrorMsg:"enter the amount"})):0!==n.state.costValue&&(console.log("empty"),n.setState({showHow:!n.state.showHow}))},n.handleThingChange=function(e){n.setState({whatValue:e.target.value})},n.handleThingChange=function(e){n.setState({whatValue:e.target.value})},n.handleCostChange=function(e){n.setState({costValue:e.target.value})},n.handleClick=function(){0==n.state.costValue?console.log("ggg"):n.state.costValue<=20?n.state.data.map((function(e){if(e.thershold<=20){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}})):n.state.costValue<=50?n.state.data.map((function(e){if(e.thershold<=50){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}})):n.state.costValue<=80?n.state.data.map((function(e){if(e.thershold<=80){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}})):n.state.costValue<=100?n.state.data.map((function(e){if(e.thershold<=100){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}})):n.state.costValue<=200?n.state.data.map((function(e){if(e.thershold<=200){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}})):n.state.costValue<=250?n.state.data.map((function(e){if(e.thershold<=250){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}})):n.state.costValue<=500?n.state.data.map((function(e){if(e.thershold<=500){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}})):n.state.costValue<=2e3?n.state.data.map((function(e){if(e.thershold<=2e3){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}})):n.state.costValue<=25e3?n.state.data.map((function(e){if(e.thershold<=25e3){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}})):n.state.costValue<=5e4?n.state.data.map((function(e){if(e.thershold<=5e4){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}})):n.state.costValue<=1e5&&n.state.data.map((function(e){if(e.thershold<=1e5){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1),text2:e.text2,info:e.info,adress:e.website_name,href:e.webpage_adress})}}))},n.state={data:[],whatValue:"",defaultValue:0,costValue:"",showHow:!1,nomberOfVacines:"",table:[],numberOfShelters:"",numberOf:"",image:"",text1:"",text2:"",info:"",adress:"",href:"",whatErrorMsg:"",costErrorMsg:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.init({key:"1NKa7gPtvcImda1TyAfkM9mlkJ5rDuke5eRqmQImNFWA",callback:function(t){e.setState({data:t})},simpleSheet:!0})}},{key:"render",value:function(){var e=this;this.state.data;return l.a.createElement("div",{className:"container main"},this.state.showHow?l.a.createElement("div",{className:"center container main"},l.a.createElement("h1",{className:"top1em"},"Your ",l.a.createElement("br",null),l.a.createElement("span",{className:"thing"},this.state.whatValue)),l.a.createElement("h2",null,"is worth ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{style:{color:"black"}},this.state.text1," ",this.state.table.length," ",this.state.text2)," "),l.a.createElement("div",{className:"margin3em info"},Object(p.a)(this.state.table).map((function(t){return l.a.createElement("img",{className:"image",src:e.state.image})}))),l.a.createElement("div",{className:"margin3em info"},l.a.createElement("h2",null,l.a.createElement("br",null),l.a.createElement("q",null,this.state.info))),l.a.createElement("div",null,l.a.createElement("h3",null,"more info at:"," ",l.a.createElement("a",{className:"a",href:this.state.href},this.state.adress))),l.a.createElement("div",null,l.a.createElement("h3",{className:"ainvert",onClick:this.reloadPage},"Check once again...")),l.a.createElement("div",null,l.a.createElement("a",{className:"a",style:{marginTop:"6em",fontSize:"1.5em"},href:"../balance/#/"},"Home")),l.a.createElement("div",{id:"footer"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))):l.a.createElement("div",{className:"margintop10vh"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"form"},l.a.createElement("label",null,"What do you want to buy?"),l.a.createElement("input",{className:"input",onChange:this.handleThingChange,value:this.state.whatValue}),l.a.createElement("label",null,"How much it costs?"),l.a.createElement("input",{type:"number",className:"input",onChange:this.handleCostChange,placeholder:"$",value:this.state.costValue,style:{width:"40%"}}),(this.state.costErrorMsg,l.a.createElement("div",{style:{height:"20px"}},this.state.costErrorMsg)),l.a.createElement("button",{onClick:this.handleClick,type:"submit",className:"check top5rem",style:{textTransform:""}},"How much is it worth?"))),l.a.createElement("div",null),l.a.createElement("p",null,"v0.1-alpha"),l.a.createElement("br",null),l.a.createElement("br",null))}}]),a}(n.Component),f=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"center "},l.a.createElement(b,null))}}]),a}(n.Component),g=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.setState({isTurnOn:!0,bulbOn:"bulbOff"})},n.handleEnter=function(){n.setState({isTurnOn:!n.state.isEnter,bulbOn:"bulbOn"}),console.log("on",n.state.isEnter),console.log("class",n.state.bulbOn)},n.handleLeave=function(){n.setState({isTurnOn:!n.state.isEnter,bulbOn:"bulbOff"}),console.log("on",n.state.isEnter),console.log("class",n.state.bulbOn)},n.state={isEnter:!1,bulbOn:"bulbOn"},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"center container"},l.a.createElement("div",{className:"margintop20vh bulbPosition"},l.a.createElement("div",{className:this.state.bulbOn})),l.a.createElement("div",null,l.a.createElement("h1",{className:"titleRotation  animate__animated animate__fadeIn"},"BALANCE")),l.a.createElement("h2",{className:"mainh2"},"how much is it worth?"),l.a.createElement("div",{className:"checkmargintop20vh"},l.a.createElement("button",{onMouseEnter:this.handleEnter,onMouseLeave:this.handleLeave},l.a.createElement(u.b,{className:"check  animate__slow animate__animated animate__fadeIn",to:"/what"},"check"))),l.a.createElement("div",null,l.a.createElement("h2",null,l.a.createElement(u.b,{className:"check polishbutton",to:"/hellopl"},"/ wersja polska /"))),l.a.createElement("div",null,l.a.createElement("h2",null,l.a.createElement(u.b,{className:"check polishbutton",to:"about"},"about")),l.a.createElement("p",null,"v0.1-alpha"))))}}]),a}(n.Component),w=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).reloadPage=function(){window.location.reload(!1)},n.handleSubmit=function(e){e.preventDefault(),0==n.state.costValue?(console.log("zero"),n.setState({costErrorMsg:"wpisz kwot\u0119"})):0!==n.state.costValue&&(console.log("empty"),n.setState({showHow:!n.state.showHow}))},n.handleThingChange=function(e){n.setState({whatValue:e.target.value})},n.handleCostChange=function(e){n.setState({costValue:e.target.value})},n.handleClick=function(){n.state.costValue<=10?n.state.data.map((function(e){if(e.thershold_pl<=10){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item_pl));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(t.length," ").concat(e.text1_pl),text2:e.text2_pl,info:e.info_pl,adress:e.website_name_pl,href:e.webpage_adress})}})):n.state.costValue<=20?n.state.data.map((function(e){if(e.thershold_pl<=20){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item_pl));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(e.text1_pl),text2:e.text2_pl,info:e.info_pl,adress:e.website_name_pl,href:e.webpage_adress})}})):n.state.costValue<=50?n.state.data.map((function(e){if(e.thershold_pl<=50){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item_pl));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(e.text1_pl),text2:e.text2_pl,info:e.info_pl,adress:e.website_name_pl,href:e.webpage_adress})}})):n.state.costValue<=100?n.state.data.map((function(e){if(e.thershold_pl<=100){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item_pl));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(e.text1_pl),text2:e.text2_pl,info:e.info_pl,adress:e.website_name_pl,href:e.webpage_adress})}})):n.state.costValue<=500?n.state.data.map((function(e){if(e.thershold_pl<=500){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item_pl));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(e.text1_pl),text2:e.text2_pl,info:e.info_pl,adress:e.website_name_pl,href:e.webpage_adress})}})):n.state.costValue<=1e3?n.state.data.map((function(e){if(e.thershold_pl<=1e3){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item_pl));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(e.text1_pl),text2:e.text2_pl,info:e.info_pl,adress:e.website_name_pl,href:e.webpage_adress})}})):n.state.costValue<=2e3?n.state.data.map((function(e){if(e.thershold_pl<=2e3){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item_pl));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(e.text1_pl),text2:e.text2_pl,info:e.info_pl,adress:e.website_name_pl,href:e.webpage_adress})}})):n.state.costValue<=5e3?n.state.data.map((function(e){if(e.thershold_pl<=5e3){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item_pl));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(e.text1_pl),text2:e.text2_pl,info:e.info_pl,adress:e.website_name_pl,href:e.webpage_adress})}})):n.state.costValue<=5e4?n.state.data.map((function(e){if(e.thershold_pl<=5e4){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item_pl));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(e.text1_pl),text2:e.text2_pl,info:e.info_pl,adress:e.website_name_pl,href:e.webpage_adress})}})):n.state.costValue<=1e5?n.state.data.map((function(e){if(e.thershold_pl<=1e5){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item_pl));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(e.text1_pl),text2:e.text2_pl,info:e.info_pl,adress:e.website_name_pl,href:e.webpage_adress})}})):n.state.costValue<=5e5&&n.state.data.map((function(e){if(e.thershold_pl<=5e5){var t=new Array(parseInt(Number(n.state.costValue)/e.price_per_item_pl));return n.setState({numberOf:t.length,image:e.image,table:[].concat(t),text1:"".concat(e.text1_pl),text2:e.text2_pl,info:e.info_pl,adress:e.website_name_pl,href:e.webpage_adress})}}))},n.state={data:[],whatValue:"",defaultValue:0,costValue:"",showHow:!1,nomberOfVacines:"",table:[],numberOfShelters:"",numberOf:"",image:"",text1:"",text2:"",info:"",adress:"",href:"",whatErrorMsg:"",costErrorMsg:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.init({key:"1NKa7gPtvcImda1TyAfkM9mlkJ5rDuke5eRqmQImNFWA",callback:function(t){e.setState({data:t})},simpleSheet:!0})}},{key:"render",value:function(){var e=this;this.state.data;return l.a.createElement("div",{className:"container main"},this.state.showHow?l.a.createElement("div",{className:"center container main"},l.a.createElement("h1",{className:"top1em"},l.a.createElement("br",null),l.a.createElement("span",{className:"thing"},this.state.whatValue)),l.a.createElement("h2",null,"kosztuje tyle, ile... ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{style:{color:"black"}},this.state.text1," ",this.state.table.length," ",this.state.text2)," "),l.a.createElement("div",{className:"margin3em"},Object(p.a)(this.state.table).map((function(t){return l.a.createElement("img",{className:"image",src:e.state.image})}))),l.a.createElement("div",{className:"margin3em"},l.a.createElement("h2",null,l.a.createElement("br",null),l.a.createElement("q",null,this.state.info))),l.a.createElement("div",null,l.a.createElement("h3",null,"wi\u0119cej informacji pod adresem:"," ",l.a.createElement("a",{className:"a",href:this.state.href},this.state.adress))),l.a.createElement("div",null,l.a.createElement("h3",{className:"ainvert",onClick:this.reloadPage},"Sprawd\u017a jeszcze raz...")),l.a.createElement("div",null,l.a.createElement("a",{className:"a",style:{marginTop:"6em",fontSize:"1.5em"},href:"../balance/#/hellopl"},"Strona g\u0142\xf3wna")),l.a.createElement("div",{id:"footer"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))):l.a.createElement("div",{className:"margintop10vh"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"form"},l.a.createElement("label",null,"Co chcesz kupi\u0107?"),l.a.createElement("input",{className:"input",onChange:this.handleThingChange,value:this.state.whatValue,style:{width:"40%"}}),(this.state.whatErrorMsg,l.a.createElement("div",{style:{height:"20px"}},this.state.whatErrorMsg)),l.a.createElement("label",null,"Ile to kosztuje?"),l.a.createElement("input",{type:"number",className:"input",onChange:this.handleCostChange,placeholder:"z\u0142",value:this.state.costValue,style:{width:"40%"}}),(this.state.costErrorMsg,l.a.createElement("div",{style:{height:"20px"}},this.state.costErrorMsg)),l.a.createElement("button",{onClick:this.handleClick,type:"submit",className:"check top5rem",style:{textTransform:""}},"Ile to jest wate?"))),l.a.createElement("div",null),l.a.createElement("p",null,"v0.1-alpha"),l.a.createElement("br",null),l.a.createElement("br",null))}}]),a}(n.Component),E=(n.Component,function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container "},l.a.createElement("div",{className:"aboutHeaderContainer"},l.a.createElement("h2",null,l.a.createElement("div",{className:"aboutHeader"},"Welcome to the "),l.a.createElement("div",{className:"aboutHeader aboutTitle"},"Balance Project"))),l.a.createElement("div",{className:"aboutParagraph"},l.a.createElement("p",null,"the project to create an application that will change the world. The idea for Balance was born out of the search for an answer to the question of how much are our everyday decisions worth? How much are our purchases worth? How much is a new chair, a pair of trousers, a video game worth?"," "),l.a.createElement("p",null,"Balance was created during conversations about consumerism, about respect for the environment, and about increasing our awareness as consumers."),l.a.createElement("p",null,"The Balance App aims not only to change the world globally, but also to change the lives of our immediate community by raising awareness of global issues, challenging our consumerism and informing our decisions."," "),l.a.createElement("p",null,"We are looking for people who want to get involved in this life changing project and who can offer their time, experience and expertise."," "),l.a.createElement("p",null,"(more information at our GitHub repozitory page"," ",l.a.createElement("a",{className:"ainvert",style:{fontSize:"1.4em"},target:"blank",href:"https://github.com/DabTheMatt/balance"},"here")," ","- will open in a new tab)"),l.a.createElement("p",null,"Balance is a simple application that compares the value of an item with the value of supporting organisations dealing with humanitarian aid, heritage conservation and grassroots initiatives."),l.a.createElement("p",null,"Balance gives the consumer the opportunity to learn about organizations and programs that help others and care for the natural environment."),l.a.createElement("p",null,"The Balance App project is a Non Profit project, however we are looking for patrons of change who might be willing to donate funds for the development of the app."),l.a.createElement("p",null,'We hope that the development of the application will not only bring about a change in our spending habits, social awareness and community spirit, but will also help in the development of the social startup "INSPIRO UP". In the future \u201cINSPIRO UP\u201d will financially support the construction of an independent community center in Poland, where INSPIRO has operated for many years. Inspiro created a community centre that was a safe haven for people from all walks of life focusing on education, self development, socializing, culture, art and building a civil society.'),l.a.createElement("p",null,"We dream about INSPIRO being able to exist again and we believe that the development of the Balance App and work on this project will help us make this dream come true."),l.a.createElement("p",null,"To make our vision a reality and build a social startup that creates applications to change the world, we learned the basics of programming, and now we are putting that knowledge into action."),l.a.createElement("p",null,"Change is difficult but it does not have to be impossible, and we hope it will be possible with you."),l.a.createElement("p",null,"We invite you to collaborate with us "),l.a.createElement("p",null,"INSPIRO UP / Beata Kwieci\u0144ska / Maciej D\u0105browski"),l.a.createElement("p",null,"email:"," ",l.a.createElement("a",{className:"ainvert",style:{fontSize:"1.2em",textDecoration:"none"},href:"mailto:biuro@inspiro.org"},"biuro@inspiro.org"))),l.a.createElement("div",{style:{marginBottom:"4em"}},l.a.createElement("a",{className:"checkinvert",style:{marginTop:"6em",fontSize:"1.5em"},href:"../balance/#/"},"Home"))),l.a.createElement("p",null,"v0.1-alpha"))}}]),a}(n.Component));var v=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container "},l.a.createElement("div",{className:"aboutHeaderContainer"},l.a.createElement("h2",null,l.a.createElement("div",{className:"aboutHeader"},"Witaj ",l.a.createElement("span",{style:{fontFamily:"Baskervville, serif",textDecoration:"lowercase"}},"w")),l.a.createElement("div",{className:"aboutHeader aboutTitle"},"projekcie Balance"))),l.a.createElement("div",{className:"aboutParagraph"},l.a.createElement("p",null,"projekcie stworzenia aplikacji, kt\xf3ra zmieni \u015bwiat. Pomys\u0142 na Balance zrodzi\u0142 si\u0119 z poszukiwania odpowiedzi na pytanie, ile warte s\u0105 nasze codzienne decyzje? Ile warte s\u0105 nasze zakupy? Ile warte jest nowe krzes\u0142o, para spodni, gra wideo?"),l.a.createElement("p",null,"Balance powsta\u0142o podczas rozm\xf3w o konsumpcjonizmie, szacunku dla \u015brodowiska, a tak\u017ce o zwi\u0119kszaniu naszej \u015bwiadomo\u015bci jako konsument\xf3w."),l.a.createElement("p",null,"Celem aplikacji Balance jest nie tylko globalna zmiana \u015bwiata, ale tak\u017ce zmiana \u017cycia naszej najbli\u017cszej spo\u0142eczno\u015bci poprzez zwi\u0119kszanie \u015bwiadomo\u015bci o globalnych problemach, kwestionowanie naszego konsumpcjonizmu i informowanie o naszych decyzjach."),l.a.createElement("p",null,"Poszukujemy os\xf3b, kt\xf3re chc\u0105 zaanga\u017cowa\u0107 si\u0119 w ten zmieniaj\u0105cy \u017cycie projekt i mog\u0105 zaoferowa\u0107 sw\xf3j czas, do\u015bwiadczenie i wiedz\u0119."),l.a.createElement("p",null,"(wi\u0119cej informacji znajdziesz na stroinie naszego repozytorium na platformie GitHub"," ",l.a.createElement("a",{className:"ainvert",style:{fontSize:"1.4em"},target:"blank",href:"https://github.com/DabTheMatt/balance"},"tutaj")," ","- strona otworzy si\u0119 w nowej zak\u0142adce)"),l.a.createElement("p",null,"Balance to prosta aplikacja, kt\xf3ra por\xf3wnuje warto\u015b\u0107 przedmiotu z warto\u015bci\u0105 pomocy organizacji zajmuj\u0105cych si\u0119 pomoc\u0105 humanitarn\u0105, ochron\u0105 dziedzictwa kulturowego oraz wspieraniem inicjatyw oddolnych."),l.a.createElement("p",null,"Balance daje konsumentowi mo\u017cliwo\u015b\u0107 poznania organizacji i program\xf3w, kt\xf3re pomagaj\u0105 innym i dbaj\u0105 o \u015brodowisko naturalne."),l.a.createElement("p",null,"Projekt Balance App to projekt non-profit, jednak poszukujemy patron\xf3w zmian, kt\xf3rzy mogliby przekaza\u0107 \u015brodki finansowe na rozw\xf3j aplikacji."),l.a.createElement("p",null,"Mamy nadziej\u0119, \u017ce rozw\xf3j aplikacji przyniesie zmian\u0119 nie tylko w naszych konsumenckich nawykach, \u015bwiadomo\u015bci spo\u0142ecznej i duchu wsp\xf3lnoty, ale tak\u017ce pomo\u017ce w rozwoju startupu spo\u0142ecznego \u201cINSPIRO UP\u201d. W przysz\u0142o\u015bci \u201cINSPIRO UP\u201d wesprze finansowo budow\u0119 niezale\u017cnego domu kultury w Polsce, gdzie INSPIRO dzia\u0142a\u0142o przez wiele lat. Stworzyli\u015bmy centrum spo\u0142eczno\u015bci, kt\xf3re by\u0142o bezpieczn\u0105 przystani\u0105 dla ludzi z r\xf3\u017cnych \u015brodowisk i kt\xf3re skupia\u0142o si\u0119 na edukacji, samorozwoju, \u017cyciu towarzyskim, kulturze, sztuce i budowaniu spo\u0142ecze\u0144stwa obywatelskiego."),l.a.createElement("p",null,"Marzymy o tym, by INSPIRO mog\u0142o znowu zaistnie\u0107 i wierzymy, \u017ce rozw\xf3j aplikacji Balance i praca nad tym projektem pomo\u017ce nam to marzenie spe\u0142ni\u0107."),l.a.createElement("p",null,"Aby urzeczywistni\u0107 nasz\u0105 wizj\u0119 i zbudowa\u0107 spo\u0142eczny startup tworz\u0105cy aplikacje zmieniaj\u0105ce \u015bwiat, nauczyli\u015bmy si\u0119 podstaw programowania. Teraz wprowadzamy t\u0119 wiedz\u0119 w \u017cycie."),l.a.createElement("p",null,"Zmiana jest trudna, ale wierzymy, \u017ce z Tob\u0105 stanie si\u0119 mo\u017cliwa."),l.a.createElement("p",null,"Zapraszamy do wsp\xf3\u0142pracy"),l.a.createElement("p",null,"INSPIRO UP / Beata Kwieci\u0144ska / Maciej D\u0105browski"),l.a.createElement("p",null,"email:"," ",l.a.createElement("a",{className:"ainvert",style:{fontSize:"1.2em",textDecoration:"none"},href:"mailto:biuro@inspiro.org"},"biuro@inspiro.org"))),l.a.createElement("div",{style:{marginBottom:"4em"}},l.a.createElement("a",{className:"checkinvert",style:{marginTop:"6em",fontSize:"1.5em"},href:"../balance/#/hellopl"},"Strona g\u0142\xf3wna"))),l.a.createElement("p",null,"v0.1-alpha"))},_=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.setState({isTurnOn:!0,bulbOn:"bulbOff"})},n.handleEnter=function(){n.setState({isTurnOn:!n.state.isEnter,bulbOn:"bulbOn"}),console.log("on",n.state.isEnter),console.log("class",n.state.bulbOn)},n.handleLeave=function(){n.setState({isTurnOn:!n.state.isEnter,bulbOn:"bulbOff"}),console.log("on",n.state.isEnter),console.log("class",n.state.bulbOn)},n.state={isEnter:!1,bulbOn:"bulbOn"},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"center container"},l.a.createElement("div",{className:"margintop20vh bulbPosition"},l.a.createElement("div",{className:this.state.bulbOn})),l.a.createElement("div",null,l.a.createElement("h1",{className:"titleRotation  animate__animated animate__fadeIn"},"BALANCE")),l.a.createElement("h2",{className:"mainh2"},"ile to jest warte?"),l.a.createElement("div",{className:"checkmargintop20vh"},l.a.createElement("button",{onMouseEnter:this.handleEnter,onMouseLeave:this.handleLeave},l.a.createElement(u.b,{className:"check  animate__slow animate__animated animate__fadeIn",to:"/whatpl"},"sprawd\u017a"))),l.a.createElement("div",null,l.a.createElement("h2",null,l.a.createElement(u.b,{className:"check polishbutton",to:"/#"},"/ english version /"))),l.a.createElement("div",null,l.a.createElement("h2",null,l.a.createElement(u.b,{className:"check polishbutton",to:"aboutpl"},"o projekcie")),l.a.createElement("p",null,"v0.1-alpha"))))}}]),a}(n.Component),y=a(1);var z=function(){return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(y.c,null,l.a.createElement(y.a,{exact:!0,path:"/",component:g}),l.a.createElement(y.a,{path:"/main",component:f}),l.a.createElement(y.a,{path:"/what",component:b}),l.a.createElement(y.a,{path:"/whatpl",component:w}),l.a.createElement(y.a,{path:"/about",component:E}),l.a.createElement(y.a,{path:"/aboutpl",component:v}),l.a.createElement(y.a,{path:"/hellopl",component:_}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.7712da5a.chunk.js.map