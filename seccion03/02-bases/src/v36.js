console.clear();

const getPokemonById = require('../src/js-foundation/12-patron-adaptador-fetchApi');


getPokemonById('2')
    .then(pokemon => console.log(pokemon))
    .catch( (error) => console.log(`Por favor intente de nuevo\n`, error))
    .finally(() => console.log(`Operación finalizada`))

