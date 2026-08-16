

const getPokemonById = async (id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    /* 
        return fetch(url)
        .then( (resp) => resp.json() )
        // .then( () =>{ throw new Error(`Error al buscar el pokemon`)})
        .then( (pokemon ) => pokemon.name)

        actualizado a async-await
    */
   
    
    const resp = await fetch(url);
    const pokemon = await resp.json();

    // throw new Error(`Pokemon no existe`);

    return pokemon.name;


}

module.exports = getPokemonById;
