const filtrandoPokemonsTipo = (data, condicion) => {
  const filtrandoPokemons = data.filter(
    (types) => 
      types.type[0] === condicion || types.type[1] === condicion);
  return filtrandoPokemons ;
};
window.filtrandoPokemonsTipo = filtrandoPokemonsTipo;
const ordenandoPokemonesAscendente = (data, sortBy) => {
  data.sort(function(parametroa, parametrob) {
    sortBy === name ;
    let xx = parametroa.name.toLowerCase() ;
    let yy = parametrob.name.toLowerCase() ;
    return xx < yy ? -1 : xx > yy ? 1 : 0;
  });
  return data;
};
window.ordenandoPokemonesAscendente = ordenandoPokemonesAscendente ;
const calculandoPesoKgLb = (data) => {
  let arrPokemonLb = data;

  for (let i = 0; i < arrPokemonLb.length;i++) {
    const PesoLibras = Math.round((parseFloat(arrPokemonLb[i].weight) * 2.20462) * 100) / 100;
    const resultado = PesoLibras + ' lb';
    arrPokemonLb[i].weightLibras = resultado;
  }
  return arrPokemonLb;
};
window.calculandoPesoKgLb = calculandoPesoKgLb;