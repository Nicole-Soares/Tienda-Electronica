(this["webpackJsonpstore-soares-nicole"]=this["webpackJsonpstore-soares-nicole"]||[]).push([[0],[,,,,function(e,c,t){},,,,,,,,,function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),r=t(5),a=t.n(r),i=(t(4),t(7)),o=t(0),l=Object(s.createContext)();function j(e){var c=e.children,t=Object(s.useState)(""),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(o.jsx)(l.Provider,{value:{productos:r,setProductos:a},children:c})}var d=t.p+"static/media/header.b6f067c6.png",b=t.p+"static/media/aerolab-logo.40b78ac9.svg";t(13);function h(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsxs)("div",{className:"contenedor-icono-nombre-monedas",children:[Object(o.jsx)("div",{className:"contendor-icono",children:Object(o.jsx)("img",{className:"logo",src:b,alt:"logo"})}),Object(o.jsxs)("div",{className:"contenedor-botones",children:[Object(o.jsx)("button",{className:"boton-iniciar",children:"Iniciar sesion"}),Object(o.jsxs)("button",{className:"boton-monedas",children:["6000",Object(o.jsx)("div",{className:"circulo"})]})]})]}),Object(o.jsxs)("div",{className:"contenedor-imagen",children:[Object(o.jsx)("img",{className:"imagen",src:d,alt:"imagen de cabecera",height:"412px"}),Object(o.jsx)("div",{className:"contenedor-titulo",children:Object(o.jsx)("h3",{className:"titulo",children:"Electronics"})})]})]})}var u=t.p+"static/media/arrow-left.e6eb9be1.svg",m=t.p+"static/media/arrow-right.3306c112.svg";t(14);function x(){return Object(o.jsxs)("div",{className:"contenedor-principal",children:[Object(o.jsx)("div",{className:"productos",children:Object(o.jsx)("span",{children:"16 of 32 products"})}),Object(o.jsxs)("div",{className:"contenedor-filtros",children:[Object(o.jsx)("span",{className:"sort",children:"Sort by:"}),Object(o.jsx)("button",{className:"recent",children:"Most recent"}),Object(o.jsx)("button",{className:"priceLow",children:"Lowest price"}),Object(o.jsx)("button",{className:"priceHig",children:"Highest price"})]}),Object(o.jsxs)("div",{className:"contenedor-flechas",children:[Object(o.jsx)("img",{height:"48px",src:u,alt:"flecha-izquierda"}),Object(o.jsx)("img",{height:"48px",src:m,alt:"flecha-derecha"})]}),Object(o.jsx)("br",{})]})}var O=t(3),p=t.n(O),g=t(6);t(16),t(17);function v(e){return Object(o.jsxs)("div",{className:"contenedor-principal",children:[Object(o.jsx)("div",{className:"imagen",children:Object(o.jsx)("img",{src:e.imagen,alt:"producto"})}),Object(o.jsxs)("div",{className:"descripcion",children:[Object(o.jsx)("h4",{children:e.categoria}),Object(o.jsx)("h3",{children:e.nombre})]}),Object(o.jsx)("div",{className:"transparente",children:Object(o.jsx)("h3",{children:e.precio})})]})}var f={headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExOGYxM2Q5ZmMzODAwMjFmNjM4NDUiLCJpYXQiOjE2Mjg1NDA2OTJ9.PA0rEWI4gDP8xHFtuty2J7uJW1yCTVcnDqWyDw8UVZQ")}};function N(){var e=Object(s.useContext)(l),c=e.productos,t=e.setProductos;function n(){return(n=Object(g.a)(p.a.mark((function e(){var c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://coding-challenge-api.aerolab.co/products",f);case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,console.log(s),t(s),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){n.apply(this,arguments)}()}),[]),Object(o.jsx)("div",{className:"listado",children:c.length>0?c.map((function(e){return Object(o.jsx)(v,{imagen:e.img.url,nombre:e.name,precio:e.cost,categoria:e.category},e.id)})):"no hay productos"})}var y=function(){return Object(o.jsx)(j,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(h,{}),Object(o.jsx)(x,{}),Object(o.jsx)(N,{})]})})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,r=c.getLCP,a=c.getTTFB;t(e),s(e),n(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),I()}],[[18,1,2]]]);
//# sourceMappingURL=main.dcde2481.chunk.js.map