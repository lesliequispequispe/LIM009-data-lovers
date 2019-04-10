const filtrandoPokemonsTipo = (data, condicion) => {
  const filtrandoPokemons = data.filter(
    (filtro) =>
      filtro.type[0] === condicion || filtro.type[1] === condicion);
  return filtrandoPokemons;
};
window.filtrandoPokemonsTipo = filtrandoPokemonsTipo;

const ordenandoPokemonesAscendente = (data, sortBy) => {
  data.sort(function(aa, bb) {
    sortBy === name;
    let xx = aa.name.toLowerCase();
    let yy = bb.name.toLowerCase();
    return xx < yy ? -1 : xx > yy ? 1 : 0;
  });
  return data;
};

window.ordenandoPokemonesAscendente = ordenandoPokemonesAscendente;

const calculandoPesoKgLb = (data) => {
  let arrPokemonLb = data;
  for (let i = 0; i < arrPokemonLb.length; i++) {
    const PesoLibras = Math.round((parseFloat(arrPokemonLb[i].weight) * 2.20462) * 100) / 100;
    const resultado = PesoLibras + ' lb';
    arrPokemonLb[i].weightLibras = resultado;
  }
  return arrPokemonLb;
};
window.calculandoPesoKgLb = calculandoPesoKgLb;