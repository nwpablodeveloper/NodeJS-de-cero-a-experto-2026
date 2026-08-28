const runCommand = async( args: string[] ) => {

    process.argv = [ ...process.argv, ...args];

    const { miYarg } = await import('./args.plugin.js');

    return miYarg;

}

describe('Args Plugin', () => {

    const originalArgv = process.argv;

    beforeEach(()=> {
        process.argv = originalArgv;
        jest.resetModules();
    })

    test('retornar los valores configurados por defecto', async () => {

        const argv = await runCommand(['-b', '5']);

        expect(argv).toEqual( expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'Nombre del archivo',
            d: 'outputs'
        }))
    });

    
    test('Retornar con valores personalizados', async () => {

        const argv = await runCommand([
            '-b', '7',
            '-l', '12',
            '-s',
            '-n', 'tabla-del-7-al-12',
            '-d', 'tablas-del-7',
        ])

        expect(argv).toEqual( expect.objectContaining({
            b: 7,
            l: 12,
            s: true,
            n: 'tabla-del-7-al-12',
            d: 'tablas-del-7'
        }))
    });


});