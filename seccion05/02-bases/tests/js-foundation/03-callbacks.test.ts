import { error } from "node:console";
import { getUserById } from "../../src/js-foundation/03-callbacks";


describe('03-Callbacks', () => {

    test('getUserById deberia retornar error o un usuario', (done)=> {
        
        const id = 10;

        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();

            done();
        });
    });

    test('tiene que comprobar que el user 1 con nombre John Doe', (done) => {

        const id = 1;

        getUserById(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toEqual({id: 1,name: 'John Doe',});

            done();
        });
    })
    
});