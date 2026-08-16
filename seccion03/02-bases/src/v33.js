console.clear();

const getPokemonById = require('../src/js-foundation/09-promises');

 getPokemonById(1, (pokemon) => {
    console.log({pokemon})
});