// A A A 

describe('Test en los archivos de la App', () => {
    test('La suma se cumple?', () => {

        // 1. Arrange (Preparación)
        const num1 = 30;
        const num2 = 10;

        // 2. Act
        const resultado = num1 + num2;

        // 3. Assert
        // Quiero saber si el resultado que estoy esperando es "loQueEspero"
        const loQueEspero = 30;

        //  expect "espera" que el toBe "resultado sea: " loQueEspero
        expect(resultado).toBe(loQueEspero); 

    })
})

describe('Test en los archivos de la App', () => {
    test('La suma se cumple?', () => {

        // 1. Arrange (Preparación)
        const num1 = 20;
        const num2 = 10;

        // 2. Act
        const resultado = num1 + num2;

        // 3. Assert
        // Quiero saber si el resultado que estoy esperando es "loQueEspero"
        const loQueEspero = 30;

        //  expect "espera" que el toBe "resultado sea: " loQueEspero
        expect(resultado).toBe(loQueEspero); 

    })
})