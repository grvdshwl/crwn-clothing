(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[7],{114:function(e,t,n){},115:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);n(1);var c,a,i,s,r,l=n(16),o=n(14),j=o.c.div(c||(c=Object(l.a)(["\n  width: 55%;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px auto 0;\n"]))),d=o.c.div(a||(a=Object(l.a)(["\n  width: 100%;\n  padding: 10px 0;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n"]))),u=o.c.div(i||(i=Object(l.a)(["\n  text-transform: capitalize;\n  width: 23%;\n\n  &:last-child {\n    width: 8%;\n  }\n"]))),m=o.c.div(s||(s=Object(l.a)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n"]))),b=o.c.div(r||(r=Object(l.a)(["\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  color: red;\n  margin-bottom: 40px;\n"]))),p=n(19),h=n(28),x=n(36),O=(n(114),n(33)),f=n(3),g=Object(h.b)(null,(function(e){return{clearItem:function(t){return e(Object(O.c)(t))},addItem:function(t){return e(Object(O.a)(t))},removeItem:function(t){return e(Object(O.d)(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,c=e.addItem,a=e.removeItem,i=t.name,s=t.quantity,r=t.price,l=t.imageUrl;return Object(f.jsxs)("div",{className:"checkout-item",children:[Object(f.jsx)("div",{className:"image-container",children:Object(f.jsx)("img",{alt:"item",src:l})}),Object(f.jsxs)("span",{className:"name",children:[" ",i]}),Object(f.jsxs)("span",{className:"quantity",children:[Object(f.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:" \u276e"}),Object(f.jsx)("span",{className:"value",children:s}),Object(f.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276f"})]}),Object(f.jsx)("span",{className:"price",children:r}),Object(f.jsx)("div",{className:"remove-button",onClick:function(){n(t)},children:"\u2715"})]})})),v=(n(115),n(116)),y=n.n(v),w=n(117),N=n.n(w),I=function(e){var t=e.price,n=100*t;return Object(f.jsx)(y.a,{label:"Pay Now",name:"Crwn Clothing Pvt. Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now ",token:function(e,t){N()({url:"http://localhost:5000/payment",method:"post",data:{amount:n,token:e}}).then((function(e){alert("Payment successful")})).catch((function(e){console.log("Payment error:",JSON.parse(e)),alert("There was an issue with your payment.Please make sure you use a provided credit card.")}))},stripeKey:"pk_test_51JFV3ySIPG1zY6Qx1NOFLoUjPZtKhGxZitnYJCsBYu9QIu27xFzUv0I1uf4IzkoazAXeCyu8fapz6Tb4cBFCpz10007OimmtYA"})},k=Object(p.b)({cartItems:x.b,total:x.d});t.default=Object(h.b)(k)((function(e){var t=e.cartItems,n=e.total;return Object(f.jsxs)(j,{children:[Object(f.jsxs)(d,{children:[Object(f.jsx)(u,{children:Object(f.jsx)("span",{children:"Product"})}),Object(f.jsx)(u,{children:Object(f.jsx)("span",{children:"Description"})}),Object(f.jsx)(u,{children:Object(f.jsx)("span",{children:"Quantity"})}),Object(f.jsx)(u,{children:Object(f.jsx)("span",{children:"Price"})}),Object(f.jsx)(u,{children:Object(f.jsx)("span",{children:"Remove"})})]}),t.length?t.map((function(e){return Object(f.jsx)(g,{cartItem:e},e.id)})):null,Object(f.jsxs)(m,{className:"total",children:["Total : $",n]}),Object(f.jsxs)(b,{className:"test-warning",children:["*Please use the following test credit cards for payments*",Object(f.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/30 - CVV: 158",Object(f.jsx)("br",{}),"5555 5555 5555 4444 - Exp: 08/32 - CVV: 297"]}),Object(f.jsx)(I,{price:n})]})}))}}]);
//# sourceMappingURL=7.cc346546.chunk.js.map