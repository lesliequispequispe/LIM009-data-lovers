/*  Manejo de data */
const filtrandoPokemonsTipo = (data,condicion) => {
     const filtrandoPokemons = data.filter(
      (a) => 
      a.type == condicion );
  return filtrandoPokemons;
  }
  window.filtrandoPokemonsTipo = filtrandoPokemonsTipo;

const ordenandoPokemonesAscendente = (data,sortBy,sortOrder) => {
  data.sort(function(a,b) {
    sortBy==name;
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
    
  });
  return data;
}
window.ordenandoPokemonesAscendente=ordenandoPokemonesAscendente;

 const calculandoPesoKgLb = (data)=>{
let arrPokemonLb = data;
for(let i = 0; i<arrPokemonLb.length;i++){
  const PesoLibras = Math.round((parseFloat(arrPokemonLb[i].weight)*2.20462)*100)/100;
  const resultado = PesoLibras + " lb";
  arrPokemonLb[i].weightLibras = resultado;
};
return arrPokemonLb;
 }
window.calculandoPesoKgLb=calculandoPesoKgLb;