(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),i=n.n(c),l=n(11),o=n(3),s=n(48),u=n(12),m=n(31),d=n(49),p=n.n(d),f=n(2),b="SET_CURRENT_USER",h={currentUser:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(f.a)(Object(f.a)({},e),{},{currentUser:t.payload});default:return e}},v={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},g=n(55),O=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(f.a)(Object(f.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(g.a)(e),[Object(f.a)(Object(f.a)({},t),{},{quantity:1})])},y=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(f.a)(Object(f.a)({},e),{},{quantity:e.quantity-1}):e}))},j={hidden:!0,cartItems:[]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.TOGGLE_CART_HIDDEN:return Object(f.a)(Object(f.a)({},e),{},{hidden:!e.hidden});case v.ADD_ITEM:return Object(f.a)(Object(f.a)({},e),{},{cartItems:O(e.cartItems,t.payload)});case v.CLEAR_ITEM_FROM_CART:return Object(f.a)(Object(f.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case v.REMOVE_ITEM:return Object(f.a)(Object(f.a)({},e),{},{cartItems:y(e.cartItems,t.payload)});default:return e}},C={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type,e},k={UPDATE_COLLECTIONS:"UPDATE_COLLECTIONS"},I={collections:null},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.UPDATE_COLLECTIONS:return Object(f.a)(Object(f.a)({},e),{},{collections:t.payload});default:return e}},S={key:"root",storage:p.a,whitelist:["cart"]},T=Object(u.c)({user:E,cart:w,directory:N,shop:x}),U=Object(m.a)(S,T),A=Object(u.d)(U,u.a.apply(void 0,[])),_=Object(m.b)(A),R=(n(67),n(6)),L=n.n(R),P=n(13),D=n(17),M=n(18),G=n(20),q=n(19),H=n(5),z=(n(69),n(14)),V=(n(70),Object(H.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(a," menu-item"),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),F=n(4),W=Object(F.a)([function(e){return e.directory}],(function(e){return e.sections})),B=(n(72),Object(F.b)({sections:W})),K=Object(o.b)(B)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=Object(z.a)(e,["id"]);return r.a.createElement(V,Object.assign({key:t},n))})))})),J=n(15),Y=n(16);function Q(){var e=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Q=function(){return e},e}var $=Y.a.div(Q()),X=function(){return r.a.createElement($,null,r.a.createElement(K,null))},Z=n(24),ee=n.n(Z),te=(n(76),n(80),function(){var e=Object(P.a)(L.a.mark((function e(t,n){var a,r,c,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=re.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=ee.a.firestore.Timestamp.now(),e.prev=9,e.next=12,a.set(Object(f.a)({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log(e.t0.message,"User Can't be created");case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());ee.a.initializeApp({apiKey:"AIzaSyAd3EvzEuH9jG6Ksik3iohhnhtTb6zTzpg",authDomain:"store-db-19383.firebaseapp.com",databaseURL:"https://store-db-19383.firebaseio.com",projectId:"store-db-19383",storageBucket:"store-db-19383.appspot.com",messagingSenderId:"940194323555",appId:"1:940194323555:web:e043b7faa3734880192c56",measurementId:"G-194S79NG79"});var ne=function(e){var t=e.docs.map((function(e){var t=e.data(),n=t.title,a=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}}));return console.log(t),t.reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},ae=ee.a.auth(),re=ee.a.firestore(),ce=new ee.a.auth.GoogleAuthProvider;ce.setCustomParameters({prompt:"select_account"});var ie=function(){return ae.signInWithPopup(ce)};ee.a;function le(){var e=Object(J.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return le=function(){return e},e}function oe(){var e=Object(J.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return oe=function(){return e},e}var se=Y.a.div(oe()),ue=Y.a.div(le()),me=function(e){return function(t){var n=t.isLoading,a=Object(z.a)(t,["isLoading"]);return n?r.a.createElement(se,null,r.a.createElement(ue,null)):r.a.createElement(e,a)}},de=n(53),pe=n.n(de),fe=Object(F.a)([function(e){return e.shop}],(function(e){return e.collections})),be=pe()((function(e){return Object(F.a)([fe],(function(t){return t[e]}))})),he=Object(F.a)([fe],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),Ee=(n(113),n(114),function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,c=Object(z.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(a?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},c),t)}),ve=function(){return{type:v.TOGGLE_CART_HIDDEN}},ge=function(e){return{type:v.ADD_ITEM,payload:e}},Oe=(n(115),Object(o.b)(null,(function(e){return{addItem:function(t){return e(ge(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},"$ ",c)),r.a.createElement(Ee,{onClick:function(){return n(t)},inverted:!0},"Add to cart"))}))),ye=(n(116),function(e){var t=e.title,n=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement(l.b,{to:"shop/".concat(t.toLowerCase())},r.a.createElement("h1",{className:"title"},t.toUpperCase())),r.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(Oe,{key:e.id,item:e})}))))}),je=Object(F.b)({collections:he}),we=Object(o.b)(je)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object(z.a)(e,["id"]);return r.a.createElement(ye,Object.assign({key:t},n))})))})),Ce=(n(117),Object(o.b)((function(e,t){return{collection:be(t.match.params.collectionId)(e)}}))((function(e){var t=e.collection,n=t.title,a=t.items;return console.log(t),r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"items"},a.map((function(e){return r.a.createElement(Oe,{key:e.id,item:e})}))))}))),Ne=me(we),ke=me(Ce),Ie=function(e){Object(G.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(D.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0},e.unsubscribeFromSnapshot=null,e}return Object(M.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.updateCollection;re.collection("collections").onSnapshot(function(){var n=Object(P.a)(L.a.mark((function n(a){var r;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=ne(a),t(r),e.setState({isLoading:!1});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this,t=this.props.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(H.b,{exact:!0,path:"".concat(t.path),render:function(t){return r.a.createElement(Ne,Object.assign({isLoading:e.state.isLoading},t))}}),r.a.createElement(H.b,{path:"".concat(t.path,"/:collectionId"),render:function(t){return r.a.createElement(ke,Object.assign({isLoading:e.state.isLoading},t))}}))}}]),n}(r.a.Component),xe=Object(o.b)(null,(function(e){return{updateCollection:function(t){return e(function(e){return{type:k.UPDATE_COLLECTIONS,payload:e}}(t))}}}))(Ie),Se=n(26),Te=(n(118),function(e){var t=e.handleChange,n=e.label,a=Object(z.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),Ue=(n(119),function(e){Object(G.a)(n,e);var t=Object(q.a)(n);function n(e){var a;return Object(D.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(P.a)(L.a.mark((function e(t){var n,r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,c=n.password,e.prev=2,e.next=5,ae.signInWithEmailAndPassword(r,c);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(Se.a)({},r,n))},a.state={email:"",password:""},a}return Object(M.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(Te,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),r.a.createElement(Te,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(Ee,{type:"submit"}," Sign in "),r.a.createElement(Ee,{type:"button",onClick:ie,isGoogleSignIn:!0},"Sign in with Google"))))}}]),n}(r.a.Component)),Ae=(n(120),function(e){Object(G.a)(n,e);var t=Object(q.a)(n);function n(){var e;return Object(D.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(P.a)(L.a.mark((function t(n){var a,r,c,i,l,o,s;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,c=a.email,i=a.password,l=a.confirmPassword,i===l){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,ae.createUserWithEmailAndPassword(c,i);case 8:return o=t.sent,s=o.user,t.next=12,te(s,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(Se.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(M.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(Te,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(Te,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(Te,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(Te,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(Ee,{type:"submit"},"SIGN UP")))}}]),n}(r.a.Component)),_e=(n(121),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(Ue,null),r.a.createElement(Ae,null))});function Re(){return(Re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Le(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Pe=r.a.createElement("g",null),De=r.a.createElement("g",null),Me=r.a.createElement("g",null),Ge=r.a.createElement("g",null),qe=r.a.createElement("g",null),He=r.a.createElement("g",null),ze=r.a.createElement("g",null),Ve=r.a.createElement("g",null),Fe=r.a.createElement("g",null),We=r.a.createElement("g",null),Be=r.a.createElement("g",null),Ke=r.a.createElement("g",null),Je=r.a.createElement("g",null),Ye=r.a.createElement("g",null),Qe=r.a.createElement("g",null),$e=function(e){var t=e.svgRef,n=e.title,a=Le(e,["svgRef","title"]);return r.a.createElement("svg",Re({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Pe,De,Me,Ge,qe,He,ze,Ve,Fe,We,Be,Ke,Je,Ye,Qe)},Xe=r.a.forwardRef((function(e,t){return r.a.createElement($e,Re({svgRef:t},e))})),Ze=(n.p,n(122),function(e){return e.cart}),et=Object(F.a)([Ze],(function(e){return e.cartItems})),tt=(Object(F.a)([Ze],(function(e){return e.hidden})),Object(F.a)([et],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)}))),nt=Object(F.a)([et],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),at=Object(o.b)((function(e){return{itemCount:tt(e)}}),(function(e){return{toggleCartHidden:function(){return e(ve())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Xe,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))})),rt=(n(123),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x ",a)))}),ct=(n(124),Object(F.b)({cartItems:et})),it=Object(H.g)(Object(o.b)(ct,(function(e){return{toggleCartHidden:function(){return e(ve())}}}))((function(e){var t=e.cartItems,n=e.history,a=e.toggleCartHidden;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(rt,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your Cart is Empty")),r.a.createElement(Ee,{onClick:function(){n.push("/checkout"),a()}},"GO TO CHECKOUT"))})));function lt(){return(lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ot(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var st=r.a.createElement("title",null,"Group"),ut=r.a.createElement("desc",null,"Created with Sketch."),mt=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),dt=function(e){var t=e.svgRef,n=e.title,a=ot(e,["svgRef","title"]);return r.a.createElement("svg",lt({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?st:n?r.a.createElement("title",null,n):null,ut,mt)},pt=r.a.forwardRef((function(e,t){return r.a.createElement(dt,lt({svgRef:t},e))}));n.p;function ft(){var e=Object(J.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]);return ft=function(){return e},e}function bt(){var e=Object(J.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);return bt=function(){return e},e}function ht(){var e=Object(J.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n"]);return ht=function(){return e},e}function Et(){var e=Object(J.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]);return Et=function(){return e},e}var vt=Y.a.div(Et()),gt=Object(Y.a)(l.b)(ht()),Ot=Y.a.div(bt()),yt=Object(Y.a)(l.b)(ft()),jt=Object(o.b)((function(e){return{currentUser:e.user.currentUser,hidden:e.cart.hidden}}))((function(e){var t=e.currentUser,n=e.hidden;return r.a.createElement(vt,null,r.a.createElement(gt,{to:"/Crown-Store"},r.a.createElement(pt,null)),r.a.createElement(Ot,null,r.a.createElement(yt,{to:"/shop"},"SHOP"),r.a.createElement(yt,{to:"/shop"},"CONTACT"),t?r.a.createElement(yt,{as:"div",onClick:function(){return ae.signOut()}},"SIGN OUT"):r.a.createElement(yt,{to:"/signin"},"SIGN IN"),r.a.createElement(at,null)),n?null:r.a.createElement(it,null))})),wt=Object(F.a)([function(e){return e.user}],(function(e){return e.currentUser})),Ct=(n(125),n(126),Object(o.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:v.CLEAR_ITEM_FROM_CART,payload:e}}(t))},removeItem:function(t){return e(function(e){return{type:v.REMOVE_ITEM,payload:e}}(t))},addItem:function(t){return e(ge(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,a=e.removeItem,c=e.addItem;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:t.imageUrl,alt:"item"})),r.a.createElement("span",{className:"name"},t.name),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276e"),r.a.createElement("span",{className:"value"},t.quantity),r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276f")),r.a.createElement("span",{className:"price"},t.price),r.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))}))),Nt=n(54),kt=n.n(Nt),It=function(e){var t=e.price,n=100*t;return r.a.createElement(kt.a,{label:"Pay Now",name:"Crwn Store",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $ ".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_51HOSZ1KNVMV3dsJIYovfIjFwiOd4smhvLQXvpCjGE02eoyqPUr3iSLFbfhmWs5YkoK36Acbepvbf5Dza7ptkJ74000caFcuXxt"})},xt=Object(F.b)({cartItems:et,cartTotal:nt}),St=Object(o.b)(xt)((function(e){var t=e.cartItems,n=e.cartTotal;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(Ct,{cartItem:e,key:e.id})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL: $ ",n)),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/30 - CVV: 123"),r.a.createElement(It,{price:n}))})),Tt=function(e){Object(G.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(D.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(M.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=ae.onAuthStateChanged(function(){var t=Object(P.a)(L.a.mark((function t(n){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,te(n);case 3:t.sent.onSnapshot((function(t){e(Object(f.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(jt,null),r.a.createElement(H.d,null,r.a.createElement(H.b,{exact:!0,path:"/Crown-Store",component:X}),r.a.createElement(H.b,{path:"/shop",component:xe}),r.a.createElement(H.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(H.a,{to:"/Crown-Store"}):r.a.createElement(_e,null)}}),r.a.createElement(H.b,{exact:!0,path:"/checkout",component:St})))}}]),n}(r.a.Component),Ut=Object(F.b)({currentUser:wt}),At=Object(o.b)(Ut,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:b,payload:e}}(t))}}}))(Tt);i.a.render(r.a.createElement(o.a,{store:A},r.a.createElement(l.a,null,r.a.createElement(s.a,{persistor:_},r.a.createElement(At,null)))),document.getElementById("root"))},56:function(e,t,n){e.exports=n(127)},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){}},[[56,1,2]]]);
//# sourceMappingURL=main.6b6af3ad.chunk.js.map