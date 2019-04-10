global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');
const input = [{"name": "Bulbasaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
  "type": ["Grass", "Poison"],
},
{"name": "Poliwag",
  "img": "http://www.serebii.net/pokemongo/pokemon/060.png",
  "type": ["Water"],
},
{
  "name": "Squirtle",
  "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
  "type": ["Water"],
},
{
  "name": "Wartortle",
  "img": "http://www.serebii.net/pokemongo/pokemon/008.png",
  "type": ["Water"],
},
{"name": "Psyduck",
  "img": "http://www.serebii.net/pokemongo/pokemon/054.png",
  "type": ["Water"],
},
];
const condicion = "Water";
const output = [ { name: 'Poliwag',
  img: 'http://www.serebii.net/pokemongo/pokemon/060.png',
  type: [ 'Water' ] },
{ name: 'Squirtle',
  img: 'http://www.serebii.net/pokemongo/pokemon/007.png',
  type: [ 'Water' ] },
{ name: 'Wartortle',
  img: 'http://www.serebii.net/pokemongo/pokemon/008.png',
  type: [ 'Water' ] },
{ name: 'Psyduck',
  img: 'http://www.serebii.net/pokemongo/pokemon/054.png',
  type: [ 'Water' ] } ];

/* describe('example', () => {
  it('debería ser una función', () => {
    expect(typeof example).toBe('function');
  });
  it('debería retornar "example"', () => {
    expect(example()).toBe('example');
  });
}); */


describe('filtrandoPokemonsTipo', () => {
  it('debería ser una función', () => {
    expect(typeof filtrandoPokemonsTipo).toBe('function');
  });
  it('debería retornar "output"', () => {
    expect(filtrandoPokemonsTipo(input, condicion)).toEqual(output);
  });
});
const input2 = [{"name": "Chansey",
  "img": "http://www.serebii.net/pokemongo/pokemon/113.png", },
{"name": "Beedrill",
  "img": "http://www.serebii.net/pokemongo/pokemon/015.png", },
{"name": "Abra",
  "img": "http://www.serebii.net/pokemongo/pokemon/063.png", },
];
const output2 = [{"name": "Abra",
  "img": "http://www.serebii.net/pokemongo/pokemon/063.png", },
{"name": "Beedrill",
  "img": "http://www.serebii.net/pokemongo/pokemon/015.png", },
{"name": "Chansey",
  "img": "http://www.serebii.net/pokemongo/pokemon/113.png", },
];
const condicion2 = "name";
describe('ordenandoPokemonesAscendente', () => {
  it('debería ser una función', () => {
    expect(typeof ordenandoPokemonesAscendente).toBe('function');
  });
  it('debería retornar "output2"', () => {
    expect(ordenandoPokemonesAscendente(input2, condicion2)).toEqual(output2);
  });
});
const input3 = [{"name": "Mew",
  "weight": "4.0 kg", },
{"name": "Mewtwo",
  "weight": "122.0 kg", },
{"name": "Dragonite",
  "weight": "210.0 kg", },
];
const output3 = [{"name": "Mew",
  "weight": "4.0 kg",
  "weightLibras": "8.82 lb" },
{"name": "Mewtwo",
  "weight": "122.0 kg",
  "weightLibras": "268.96 lb"},
{"name": "Dragonite",
  "weight": "210.0 kg",
  "weightLibras": "462.97 lb"},
];
describe('calculandoPesoKgLb', () => {
  it('debería ser una función', () => {
    expect(typeof calculandoPesoKgLb).toBe('function');
  });
  it('debería retornar "output3"', () => {
    expect(calculandoPesoKgLb(input3)).toEqual(output3);
  });
});
const input4 = [{"name": "Abra",
  "img": "http://www.serebii.net/pokemongo/pokemon/063.png", },
{"name": "Abra",
  "img": "http://www.serebii.net/pokemongo/pokemon/063.png", },
];
const output4 = [{"name": "Abra",
  "img": "http://www.serebii.net/pokemongo/pokemon/063.png", },
{"name": "Abra",
  "img": "http://www.serebii.net/pokemongo/pokemon/063.png", },
];
describe('ordenandoPokemonesAscendente', () => {
  it('debería ser una función', () => {
    expect(typeof ordenandoPokemonesAscendente).toBe('function');
  });
      it('debería retornar "output2"', () => {
    expect(ordenandoPokemonesAscendente(input2, condicion2)).toEqual(output2);
  });
  it("deveria retornar output4 " , () => {
expect(ordenandoPokemonesAscendente(input4, condicion2)).toEqual(output4);
  });
});