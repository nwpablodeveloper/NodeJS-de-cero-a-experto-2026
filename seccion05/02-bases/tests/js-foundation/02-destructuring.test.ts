import { characters } from '../../src/js-foundation/02-destructuring'

describe('destructuración', () => {

    test('El arreglo tiene que tener Flash y Superman', () => {

        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');

    });

    test('Tiene que estar en 1° lugar Flash y 2° Superman', () => {

        const [ flash, superman ] = characters;

        expect(flash).toBe('Flash');
        expect(superman).toBe('Superman');

    });
});