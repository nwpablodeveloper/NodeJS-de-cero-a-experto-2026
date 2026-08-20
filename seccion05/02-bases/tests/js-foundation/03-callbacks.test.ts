import { getUserById } from "../../src/js-foundation/03-callbacks";


describe('03-Callbacks', () => {
    test('getUserById deberia retornar error o un usuario', ()=> {
        
        const id = 10;

        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
        });
    });
});