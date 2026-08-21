import { httpClient } from "../../src/plugins";

describe('httpClient-plugin', () => {

    const url = `https://jsonplaceholder.typicode.com/todos/1`;

    test('Tiene que regresar un string', async () => {

        const data = await httpClient.get(url)

        expect(data).toEqual({
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": expect.any(Boolean)
            }
        );

        // expect(data).toEqual({
        //         "userId": 1,
        //         "id": 1,
        //         "title": "delectus aut autem",
        //         "completed": true // nos limita a que si o si recibimos un true o false
        //     }
        // );

    });

    test('porbando los otros metodos del CRUD que no estan implementados',  () => {
        // vamos a eveluar de que sean funciones

        // console.log(typeof httpClient.post);

        expect(typeof httpClient.get).toBe('function');
        expect(typeof httpClient.post).toBe('function');
        expect(typeof httpClient.put).toBe('function');
        expect(typeof httpClient.delete).toBe('function');
    });

})



