/* llamando por el id a la etiqueta div*/
const renderizando = document.getElementById("renderizando");
/* POKEMON es un objeto y pokemon es un array de objetos y trae el array de objetos en pokemon1*/
let pokemon1= POKEMON.pokemon; 
/* recorre los objetos de cada pokemon */
for(let i=0; i<pokemon1.length; i++) {

renderizando.innerHTML +='<div class="col-xs-6 col-md-3"><a href="#" class="thumbnail"><img src= ' + pokemon1[i].img + ' alt="Bulbasaur"><div class="caption"><h3>' + pokemon1[i].name + '</h3><p> height:  ' +  pokemon1[i].height +  '</p> <br><p> weight:  ' +  pokemon1[i].weight +  '</p> <br><p> spawn_chance:  ' +  pokemon1[i].spawn_chance +  '</p></p> <br><p> egg:  ' +  pokemon1[i].egg +  '</p> </p> <br><p> avg_spawns:  ' +  pokemon1[i].avg_spawns +  '</p>  <br> </p> <br><p> type:  ' +  pokemon1[i].type +  '</p>  <br><br><p> weaknesses:  ' +  pokemon1[i].weaknesses +  '</p><br><p> multipliers:  ' +  pokemon1[i].multipliers +  '</p> <br><p> next_evolution:  ' +  pokemon1[i].next_evolution + ' </p> </div></div></div></a></div>'

}
/* pokemon2=pokemon1;
for(let i=0;i<pokemon2.length; i++) {
console.log(pokemon2[i].next_evolution);
} */

/* id de menu de opciones */
let optionMenu = document.getElementById("option-menu");
optionMenu.addEventListener("change", () => {
/* console.log(optionMenu.value); */
})
/* lista desplegalble ordenar de la a z */
let orderAz = document.getElementById("order-a-z");
/* lista desplegable de z a */
let orderZa = document.getElementById("order-z-a");
/*lista desplegable  filtrar por tipo de pokemon  */
let pokemonType = document.getElementById("pokemon-type");
/* lista desplegable para calcular de kg a libras */
let calculate = document.getElementById("calculate");
