import { getAge } from "../../src/plugins";


describe('get-age.plugin.ts', () => {

    test('getAge() devuelve la edad actual de la persona', () => {

        const edad = getAge('1988-05-19');

        expect(typeof edad).toBe('number');

    });

    test('getAge retorna edad actual tomando en cuenta el año actual', () => {

        const birthdate = '1988-05-19';
        const age = getAge(birthdate);

        const calcularAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toEqual(calcularAge);

    });

});