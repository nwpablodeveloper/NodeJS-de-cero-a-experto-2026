const runCommand = async( args: string[] ) => {

    process.argv = [ ...process.argv, ...args];

    const { miYarg } = await import('./args.plugin.js');

    return miYarg;

}

describe('Args Plugin', () => {

    test('retornar los valores configurados por defecto', async () => {

        const argv = await runCommand(['b', '5']);

        expect(argv).toEqual( expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'Nombre del archivo',
            d: 'outputs'
        }))
    });

});