import { getUUID } from "../../src/plugins";


describe('get-uuid.plugin', () => {


    test('Comprobar que el uuid tenga 36 caracteres y sea string', () => {
        
        const uuid = getUUID();
        expect(typeof uuid).toBe('string');

        // Los uuid tiene 36 caracteres por defecto
        expect(uuid.length).toBe(36);

    });

});