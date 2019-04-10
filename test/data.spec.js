global.window = global;
require('../src/data');

const dataInput = [
  { "id": 1,
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weight": "6.9 kg"},
  {"id": 2,
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weight": "13.0 kg"},
  {"id": 3,
    "name": "Venusaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weight": "100.0 kg"},
  {"id": 4,
    "name": "Charmander",
    "type": [
      "Fire"
    ],
    "weight": "8.5 kg" },
  {"id": 151,
    "name": "Mew",
    "type": [
      "Psychic"
    ],
    "weight": "4.0 kg"}
];

const dataInput2 = [
  { "id": 1,
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weight": "6.9 kg"},
  {"id": 2,
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weight": "13.0 kg"},
  {"id": 3,
    "name": "Venusaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weight": "100.0 kg"},
  {"id": 4,
    "name": "Charmander",
    "type": [
      "Fire"
    ],
    "weight": "8.5 kg" },
  {"id": 151,
    "name": "Mew",
    "type": [
      "Psychic"
    ],
    "weight": "4.0 kg"}
];


const dataOuput = [
  { "id": 1,
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weight": "6.9 kg"},
  { "id": 4,
    "name": "Charmander",
    "type": [
      "Fire"
    ],
    "weight": "8.5 kg"},
  {"id": 2,
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weight": "13.0 kg"}, 
  { "id": 151,
    "name": "Mew",
    "type": [
      "Psychic"
    ],
    "weight": "4.0 kg"},
  {"id": 3,
    "name": "Venusaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weight": "100.0 kg"} 
];

const dataOuput1 = [
  { "id": 1,
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weight": "6.9 kg"},
  {"id": 2,
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weight": "13.0 kg"},
  {"id": 3,
    "name": "Venusaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weight": "100.0 kg"},
];
const dataOuput2 = [
  { "id": 1,
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weight": "6.9 kg",
    "weightLibras": "15.21 lb" },
  {"id": 2,
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weight": "13.0 kg",
    "weightLibras": "28.66 lb"},
  {"id": 3,
    "name": "Venusaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "weight": "100.0 kg",
    "weightLibras": "220.46 lb"},
  {"id": 4,
    "name": "Charmander",
    "type": [
      "Fire"
    ],
    "weight": "8.5 kg",
    "weightLibras": "18.74 lb" },
  {"id": 151,
    "name": "Mew",
    "type": [
      "Psychic"
    ],
    "weight": "4.0 kg",
    "weightLibras": "8.82 lb"}
];

const sortby = "name";
const condicion = "Grass";


describe('OrdenandoPokemonesAscendente', () => {
  it('Es una funcion', () => {
    expect(typeof ordenandoPokemonesAscendente).toBe('function');
  });
  it('array ordenado', () => {
    expect(ordenandoPokemonesAscendente(dataInput, sortby)).toEqual(dataOuput);
  });
});
describe('filtrandoPokemonsTipo', () => {
  it('Es una funcion', () => {
    expect(typeof filtrandoPokemonsTipo).toBe('function');
  });
  it('array filtrado', () => {
    expect(filtrandoPokemonsTipo(dataInput, condicion)).toEqual(dataOuput1);
  });
});
describe('calculandoPesoKgLb', () => {
  it('Es una funcion', () => {
    expect(typeof calculandoPesoKgLb).toBe('function');
  });
  it('array con la propiedad peso en libras', () => {
    expect(calculandoPesoKgLb(dataInput2)).toEqual(dataOuput2);
  });
});