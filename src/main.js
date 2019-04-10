/* llamando por el id a la etiqueta div*/
const containerPokemonsElement = document.getElementById('renderizando');
/* POKEMON es un objeto y pokemon es un array de objetos y trae el array de objetos en pokemon1*/
const arrDataPokemons = POKEMON.pokemon;
/* Creando a la función para pintar los pokemons */
const pintarPokemons = (data) => {
  let string = '';
  for (let i = 0; i < data.length; i++) {
    string += `<div class="card">
                <div class="imagen-pokemon">
                  <img src=${data[i].img} alt=${data[i].name} />
                </div>  
                <div id="card" class="card1">
                  <h4>Nombre: ${data[i].name} </h4>
                  <p>Tipo:${data[i].type}</p>
                  <p>Altura: ${data[i].height}</p> 
                  <p>Peso:${data[i].weight}</p>
                  <p>Posib. de engendro:${data[i].spawn_chance}</p>
                  <p>Huevo:${data[i].egg}</p> 
                  <p>Avg engendra:${data[i].avg_spawns}</p>                  
                  <p>Multiplicadores:${data[i].multipliers}</p>
                   
                </div> 
              </div>`;
  }
  containerPokemonsElement.innerHTML = string;
};

const pintarCalculo = (data) => {
  let string = '';
  for (let i = 0; i < data.length; i++) {
    string += `<div class="card">
        <div class="imagen-pokemon">
           <img src=${data[i].img} alt=${data[i].name} />
        </div>  
        <div id="card" class="card1">
          <h4>Nombre: ${data[i].name} </h4>
          <p>Peso:${data[i].weight}</p>
          <p>Tipo:${data[i].type}</p>
          <p>Peso en libras:${data[i].weightLibras}</p>
        </div> 
        </div>`;
  }          
  containerPokemonsElement.innerHTML = string;
};

/* llamando a la función para pintar los pokemons */
pintarPokemons(arrDataPokemons);

const ordenarAz = document.getElementById('ordenarAz');
ordenarAz.addEventListener('click', () => {
  pintarPokemons(ordenandoPokemonesAscendente(arrDataPokemons, name));
});

const ordenarZa = document.getElementById('ordenarZa');
ordenarZa.addEventListener('click', () => {
  pintarPokemons(ordenandoPokemonesAscendente(arrDataPokemons, name).reverse());
});

const calculate = document.getElementById('calculate');
calculate.addEventListener('click', () => {
  pintarCalculo(calculandoPesoKgLb(arrDataPokemons));
});
 
const opcionesDeFiltrado = document.getElementById('opcionesDeFiltrado');
opcionesDeFiltrado.addEventListener('change', () => {
  let opcionesFiltradoValue = opcionesDeFiltrado.value;
  pintarPokemons(filtrandoPokemonsTipo(arrDataPokemons, opcionesFiltradoValue));
});
 
