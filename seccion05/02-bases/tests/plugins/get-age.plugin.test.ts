import { getAge } from "../../src/plugins";


describe('get-age.plugin.ts', () => {

        const birthdate = '1988-05-19';

    test('getAge() devuelve la edad actual de la persona', () => {

        const edad = getAge(birthdate);

        expect(typeof edad).toBe('number');

    });

    test('getAge retorna edad actual tomando en cuenta el año actual', () => {

        const age = getAge(birthdate);

        const calcularAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toEqual(calcularAge);

    });

    test('getAge tiene que retornar 0 años', () => {
        /* 
            Este test verifica que getAge retorne 0 años cuando el año actual coincide
            con el año de nacimiento. Para controlar el año actual, se crea un "spy"
            sobre Date.prototype.getFullYear y se fuerza a que siempre devuelva 1995.
            Así, al llamar getAge(birthdate), la función usará ese año simulado.
            Luego se comprueba que:
            - la edad calculada sea 0
            - getFullYear haya sido llamado realmente dentro de getAge
         */

        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

        const age = getAge(birthdate);

        expect(age).toBe(0);
        expect(spy).toHaveBeenCalledWith();
        
    });

});