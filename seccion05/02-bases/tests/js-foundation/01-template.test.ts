import { emailTemplate } from '../../src/js-foundation/01-template';

describe('01-Templates', () => {

    test('comprobar si la plantilla tiene la palabra "Hi', () => {
        expect(emailTemplate).toContain("Hi, ")
    });

    test('Comprobar que exista {{name}} y {{orderId}} en la plantilla', () => {
        expect(emailTemplate).toMatch("{{name}}");
        expect(emailTemplate).toMatch("{{orderId}}");
    });
    
});