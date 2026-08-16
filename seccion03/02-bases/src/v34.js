console.clear();

const getPokemonById = require('../src/js-foundation/10-promesas-en-cadena');


getPokemonById(1)
    .then(pokemon => console.log(pokemon))
    .catch( (error) => console.log(`Por favor intente de nuevo`))
    .finally(() => console.log(`Finalmente`))

