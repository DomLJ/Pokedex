(this["webpackJsonpallegro-internship-task"]=this["webpackJsonpallegro-internship-task"]||[]).push([[0],{57:function(e,t,a){e.exports=a(66)},62:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=(a(62),a(103)),i=a(106),u=a(107);var m=function(){return r.a.createElement(o.a,{position:"static"},r.a.createElement(i.a,null,r.a.createElement(u.a,{variant:"h5",component:"h1"},"Pokedex")))},s=a(15),p=a(115),f=a(114),h=a(113),E=a(117),g=a(118),b=a(109),d=a(108),y=Object(d.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120}}}));var v=function(e){var t=e.properties,a=e.selectedCategory,n=e.selectedProperty,c=e.setSelectedCategory,l=e.setSelectedProperty,o=y(),i=[{name:"color",endpoint:"pokemon-color"},{name:"shape",endpoint:"pokemon-shape"},{name:"habitat",endpoint:"pokemon-habitat"}].map((function(e){return r.a.createElement(E.a,{value:e.endpoint,key:e.name}," ",e.name," ")})),u=t.map((function(e){return r.a.createElement(E.a,{value:e.url,key:e.name}," ",e.name," ")}));return r.a.createElement(f.a,{p:1,display:"flex",justifyContent:"center"},r.a.createElement(b.a,{className:o.formControl},r.a.createElement(g.a,{id:"categories-label"},"Category"),r.a.createElement(h.a,{labelId:"categories-label",value:a,onChange:function(e){return c(e.target.value)}},r.a.createElement(E.a,{value:""},"None"),i)),r.a.createElement(b.a,{className:o.formControl},r.a.createElement(g.a,{id:"properties-label"},"Property"),r.a.createElement(h.a,{labelId:"properties-label",value:n,onChange:function(e){return l(e.target.value)},disabled:0===t.length},r.a.createElement(E.a,{value:""},"None"),u)))},j=a(111),k=a(120),O=a(112),C=a(110),S=Object(d.a)((function(){return{card:{textAlign:"center",width:"200px"},image:{width:"96px",height:"96px"},statLabel:{fontSize:"0.75rem",fontWeight:500,margin:0},statValue:{fontSize:"1.25rem",fontWeight:"bold",marginTop:12,marginBottom:4,letterSpacing:"1px"},typeChip:{margin:5}}}));var x=function(e){var t=e.name,a=Object(n.useState)(null),c=Object(s.a)(a,2),l=c[0],o=c[1];Object(n.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon/".concat(t)).then((function(e){return e.json()})).then((function(e){return o(e)}))}),[t]);var i=S();if(l){var m=l.types.map((function(e,t){return r.a.createElement(k.a,{color:"primary",label:e.type.name,key:t,className:i.typeChip})}));return r.a.createElement(C.a,{item:!0},r.a.createElement(f.a,{boxShadow:3,borderRadius:3},r.a.createElement(j.a,{className:i.card},r.a.createElement("img",{alt:l.name,src:l.sprites.front_default,className:i.image}),r.a.createElement(u.a,{variant:"subtitle1"},l.name),r.a.createElement(O.a,{light:!0}),r.a.createElement(f.a,{display:"flex",pt:2,pb:1},r.a.createElement(f.a,{flex:"auto"},r.a.createElement(u.a,{className:i.statLabel},"height"),r.a.createElement(u.a,{className:i.statValue},l.height/10,"m")),r.a.createElement(f.a,{flex:"auto"},r.a.createElement(u.a,{className:i.statLabel},"weight"),r.a.createElement(u.a,{className:i.statValue},l.weight/10,"kg"))),r.a.createElement(O.a,{light:!0}),r.a.createElement(f.a,{display:"flex",justifyContent:"center",flexWrap:"wrap",pt:2,pb:1},m))))}return null};var N=function(e){var t=e.results,a=e.pageCapacity,n=e.page,c=t.slice((n-1)*a,n*a).map((function(e,t){return r.a.createElement(x,{key:t,name:e.name})}));return r.a.createElement(f.a,{p:1},r.a.createElement(C.a,{container:!0,justify:"center",spacing:2},c))};var w=function(e,t){var a=Object(n.useRef)(!1);Object(n.useEffect)((function(){a.current?e():a.current=!0}),t)};var P=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(1),o=Object(s.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)(0),h=Object(s.a)(m,2),E=h[0],g=h[1],b=Object(n.useState)(""),d=Object(s.a)(b,2),y=d[0],j=d[1],k=Object(n.useState)(""),O=Object(s.a)(k,2),C=O[0],S=O[1],x=Object(n.useState)([]),P=Object(s.a)(x,2),W=P[0],I=P[1],L=Math.ceil(E/20);function V(){fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=964").then((function(e){return e.json()})).then((function(e){c(e.results),g(e.count),u(1)}))}return Object(n.useEffect)((function(){V()}),[]),w((function(){y?fetch("https://pokeapi.co/api/v2/".concat(y)).then((function(e){return e.json()})).then((function(e){I(e.results)})):(I([]),V())}),[y]),w((function(){C?fetch(C).then((function(e){return e.json()})).then((function(e){c(e.pokemon_species),g(e.pokemon_species.length),u(1)})):V()}),[C]),r.a.createElement("main",null,r.a.createElement(v,{properties:W,selectedCategory:y,selectedProperty:C,setSelectedCategory:j,setSelectedProperty:S}),r.a.createElement(N,{results:a,page:i,pageCapacity:20}),r.a.createElement(f.a,{m:1,mb:2,mt:2,display:"flex",justifyContent:"center"},r.a.createElement(p.a,{count:L,color:"primary",page:i,onChange:function(e,t){return u(t)}})))};var W=function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(P,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.fb8ff546.chunk.js.map