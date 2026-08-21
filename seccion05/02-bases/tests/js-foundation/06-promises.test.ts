import { getPokemonById } from "../../src/js-foundation/06-promises";

describe('06-promises', () => {
    
    test('Tiene que retornar nombre de un Pokemon', async () => {

        const pokemon = await getPokemonById(1);

        expect(pokemon).toBe('bulbasaur');

    });

    test('Tiene que retornar un error (Pokemon inexistente)', async () => {

        try {
            // Para comprobar el error el código no deberia de entrar en el "try"
            const pokemon = await getPokemonById(100000);
            expect(true).toBeFalsy();  // Un falso verdaro para ver si es que entra y generar el error

        } catch (error) {
            expect(error).toBe('Pokemon inexistente');
        }



    })

});