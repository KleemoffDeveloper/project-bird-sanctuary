(this["webpackJsonpmodule-three-midmodule-assessment"]=this["webpackJsonpmodule-three-midmodule-assessment"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(5),i=n(1),r=n.n(i),a=n(7),s=n.n(a),o=(n(13),n(8)),l=n(3),u=["Stickers","Background for your computer","Tote bag","Invites to VIP live streams"],d=n(0);function j(e){var t=e.birdCart,n=e.total,c=e.discount,i=e.bonus;return Object(d.jsxs)("div",{className:"Cart side-card",children:[Object(d.jsx)("h1",{children:"Cart"}),Object(d.jsxs)("ol",{children:[Object(d.jsx)("h3",{id:"cart-default-msg",children:"Birds"}),t.map((function(e){return Object(d.jsxs)("li",{children:[" ",e.name,", $",e.amount]},e.id)}))]}),Object(d.jsxs)("h4",{children:["Discount: ",c,"%"]}),Object(d.jsxs)("h4",{children:["Total: $",n]}),Object(d.jsxs)("ul",{className:"bonus",children:[Object(d.jsx)("h3",{children:"Bonuses"}),u.map((function(e,t){for(var n=0;n<i;n++)if(n===t)return Object(d.jsx)("li",{children:e})}))]})]})}function m(e){var t=e.formComplete,n=e.handleForm;return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t&&(window.alert("You have adopted birds. Thank you!"),window.location.reload())},className:"checkout side-card",children:[Object(d.jsx)("h1",{children:"Checkout"}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"First Name"}),Object(d.jsx)("input",{type:"text"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Last Name"}),Object(d.jsx)("input",{type:"text"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Email"}),Object(d.jsx)("input",{type:"text"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Zip Code"}),Object(d.jsx)("input",{type:"text"})]})]}),Object(d.jsx)("input",{onClick:function(){return n()},type:"submit"})]})}function b(e){var t=e.bird,n=e.handleCart;return Object(d.jsxs)("div",{className:"card",style:{margin:0},children:[Object(d.jsx)("h2",{children:t.name}),Object(d.jsx)("img",{src:t.img}),Object(d.jsxs)("h4",{children:["$",t.amount]}),Object(d.jsx)("button",{onClick:function(){return n(t)},children:"Adopt"})]})}var h=[{img:"https://cdn.pixabay.com/photo/2020/06/03/13/47/bird-5255017_960_720.jpg",name:"Shoebill",amount:100,id:444},{img:"https://i.imgur.com/20pjOv5b.jpg",name:"Resplendent Quetzal",amount:200,id:555},{img:"https://i.imgur.com/GacKN4tb.jpg",name:"Royal Flycatcher",amount:300,id:777},{img:"https://i.redditmedia.com/sl3adn3eXY65Y4yNLxMRO_O4y-Pf1EYCxPuHpV34WqI.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=640&s=f461fa6cd525892f85eb89268550867a",name:"Boat Billed Heron",amount:600,id:1333},{img:"https://i.imgur.com/vHQizcwb.jpg",name:"Turaco",amount:400,id:888},{img:"https://i.imgur.com/YHApS55.png",name:"King Vulture",amount:500,id:1010},{img:"https://i.imgur.com/ZkvJHL8b.jpg",name:"Frilled Coquette Hummingbird",amount:600,id:1212},{img:"https://i.imgur.com/VGAxKX1.png",name:"tweetr",amount:1e4,id:999},{img:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/07/14/15/MPP.jpg?w968h681",name:"Ex Parrot",amount:700,id:2424}];var p=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];function a(e){var t,c=n;c.push(e),r(Object(o.a)(c)),console.log(n),O((function(){return x(n)})),t=n.length,y(t>=3?10:0),function(e){e>100&&e<=300&&S(1);e>300&&e<=500&&S(2);e>500&&e<=1e3&&S(3);e>1e3&&S(4)}(x(n))}var s=Object(i.useState)(0),u=Object(l.a)(s,2),p=u[0],O=u[1];function x(e){var t=0;return e.map((function(e){t+=e.amount})),t}var f=Object(i.useState)(0),g=Object(l.a)(f,2),v=g[0],y=g[1],w=Object(i.useState)(0),C=Object(l.a)(w,2),N=C[0],S=C[1],k=Object(i.useState)(!1),P=Object(l.a)(k,2),B=P[0],H=P[1];return Object(d.jsxs)("main",{children:[Object(d.jsxs)("section",{className:"sidebar",children:[Object(d.jsx)(j,{birdCart:n,total:p,discount:v,bonus:N}),Object(d.jsx)(m,{formComplete:B,handleForm:function(){var e=document.querySelectorAll('input[type="text"]');if(n.length<1)window.alert("Please add birds to your cart.");else{var t,i=Object(c.a)(e);try{for(i.s();!(t=i.n()).done;){if(t.value.value.length<1)return window.alert("Please fill out each field."),void H(!1)}}catch(a){i.e(a)}finally{i.f()}var r=e[e.length-1];console.log(r.value),isNaN(Number(r.value))?window.alert("You must enter a proper zip code."):H(!0)}}})]}),Object(d.jsx)("section",{className:"birds",children:h.map((function(e){return Object(d.jsx)(b,{bird:e,handleCart:a})}))})]})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"));var O,x=document.querySelectorAll("script"),f=Object(c.a)(x);try{for(f.s();!(O=f.n()).done;){O.value.remove()}}catch(g){f.e(g)}finally{f.f()}}},[[15,1,2]]]);
//# sourceMappingURL=main.d8f058fe.chunk.js.map