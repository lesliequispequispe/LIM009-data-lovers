/* /* Manejo de data */
//window.example = example;
/*const example = () => {
  return 'example';
};*/
const converterLb = (arrPokemons) => {
  let arrPokemonLb = arrPokemons
  for(let i=0; i<arrPokemonLb.length; i++){
    const weightLibras=Math.round((parseFloat(arrPokemonLb[i].weight)*2.20462)*100)/100 ;
    const resultado = weightLibras +  " lb";
    arrPokemonLb[i].weightLibras = resultado;
  };
  return arrPokemonLb;
};
window.converterLb = converterLb;