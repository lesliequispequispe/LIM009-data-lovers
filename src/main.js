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
                <p>pesolibras:${data[i].weightLibras}</p>  
              </div>
              </div>`
 }
 return containerPokemonsElement.innerHTML = string;
};
/* llamando a la función para pintar los pokemons */
pintarPokemons(arrDataPokemons);

const ordenarAz = document.getElementById("ordenarAz");
ordenarAz.addEventListener("click", () => {
pintarPokemons(ordenandoPokemonesAscendente(arrDataPokemons,name,ordenarAz));
})

const ordenarZa = document.getElementById("ordenarZa");
ordenarZa.addEventListener("click", () => {
pintarPokemons(ordenandoPokemonesAscendente(arrDataPokemons,name,ordenarZa).reverse());
})

const calculate = document.getElementById("calculate");
calculate.addEventListener("click", () => {
pintarPokemons(calculandoPesoKgLb(arrDataPokemons));
 })

const opcionesDeFiltrado = document.getElementById("opcionesDeFiltrado");
opcionesDeFiltrado.addEventListener("change",() => {
let opcionesFiltradoValue =  opcionesDeFiltrado.value;
pintarPokemons(filtrandoPokemonsTipo(arrDataPokemons,opcionesFiltradoValue));
 })
