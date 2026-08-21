import { buildMakePerson, BuildMakerPersonOptions, PersonOptions } from "../../src/js-foundation/05-factory"


describe('05-factory', () => {

    const obj: BuildMakerPersonOptions = { 
        getUUID: () => '1234',
        getAge: () => 38,
    };

    const persona1: PersonOptions = {
        name: 'Pablo',
        birthdate: '1988-05-19'
    }

    test('buildMakePerson tiene que retornar una función', () => {

        const makePerson = buildMakePerson( obj );

        expect(typeof makePerson).toBe('function');

    });

    test('makePerson tiene retornar una persona', () => {
        
        const makePerson = buildMakePerson( obj );
        const pablo = makePerson(persona1);

        expect(pablo).toEqual({
            id: '1234',
            name: 'Pablo',
            birthdate: '1988-05-19',
            age: 38
        })
    });
})