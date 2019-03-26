/* llamando por el id a la etiqueta div*/
const containerPokemonsElement = document.getElementById("renderizando");
/* POKEMON es un objeto y pokemon es un array de objetos y trae el array de objetos en pokemon1*/
const arrDataPokemons = POKEMON.pokemon;
/* Creando a la función para pintar los pokemons */
const pintarPokemons = (data) => {
 let string = '';
 for(let i = 0; i < data.length; i++){
   string += `<div class="ancho">
               <img src=${data[i].img} alt=${data[i].name} />
               <div>
                <h3>nombre: ${data[i].name} </h3>
                <p>altura: ${data[i].height}</p> 
                <p>peso:${data[i].weight}</p>
                <p>posibilidad de engendro:${data[i].spawn_chance}</p>
                <p>huevo:${data[i].egg}</p> 
                <p>avg engendra:${data[i].avg_spawns}</p>
                <p>tipo:${data[i].type}</p>
                <p>debilidades:${data[i].weaknesses}</p>
                <p>multiplicadores:${data[i].multipliers}</p>  
              </div>
              </div>`
 }
 containerPokemonsElement.innerHTML = string;
};
/* llamando a la función para pintar los pokemons */
pintarPokemons(arrDataPokemons);
/* evento click para nuestros botones */

const valoresSelect = document.getElementById("valores-select")

const ordenarAz = document.getElementById("ordenarAz");
ordenarAz.addEventListener("click", () => {
 /*  console.log(ordenarAz); */
/*  const arrayValuesDePokemons = Object.values(POKEMON);
 console.log(arrayValuesDePokemons);
  */
 /* console.log(arrDataPokemons); */
 arrDataPokemons.sort(function(a,b) {
   var x = a.name.toLowerCase();
   var y = b.name.toLowerCase();
   return x < y ? -1 : x > y ? 1 : 0;
 });
pintarPokemons(arrDataPokemons);
})


const ordenarZa = document.getElementById("ordenarZa");
ordenarZa.addEventListener("click", () => {
 /* console.log(ordenarZa); */
 console.log(arrDataPokemons);
 arrDataPokemons.sort(function(a,b) {
   var x = a.name.toLowerCase();
   var y = b.name.toLowerCase();
   return x > y ? -1 : x < y ? 1 : 0;
 });
pintarPokemons(arrDataPokemons);
})
const calculate = document.getElementById("calculate");
calculate.addEventListener("click", () =>{
/* console.log(calculate); */

})

const opcionesDeFiltrado = document.getElementById("opcionesDeFiltrado");
opcionesDeFiltrado.addEventListener("change",() => {
/* console.log(opcionesDeFiltrado.value); */

})

