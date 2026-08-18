console.clear();

const getPokemonById = require('./js-foundation/axios-promises');


getPokemonById('1')
    .then(pokemon => console.log({pokemon}))
    .catch( (error) => console.log(`Por favor intente de nuevo\n`, error))
    .finally(() => console.log(`Operación finalizada`))

