import { httpCliente } from '../plugins'

export const getPokemonById = async( id: string|number ):Promise<string> => {

    try {

        const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
        const pokemon = await httpCliente.get( url );
      
        return pokemon.name;
        
    } catch (error) {
        throw ('Pokemon inexistente')   
    }

  
}


