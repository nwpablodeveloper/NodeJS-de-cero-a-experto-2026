// import './app';

import { ServerApp } from "./presentation/server-app";

describe('App', () => {
    test('Ejecutar el server con valores', async () => {
        
        const serverMockRun = jest.fn();
        ServerApp.run = serverMockRun;
        process.argv = [
            'node', 
            'app.ts', 
            '-b', '10', 
            '-l', '5',
            '-s', 'false',
            '-d', 'test-destination',
            '-n', 'name-test'
        ];

        await import('./app.js');

        expect(serverMockRun).toHaveBeenCalledWith({
            base: 10,
            limit: 5,
            showTable: false,
            fileNme: 'name-test',
            destination: 'test-destination'
        });
    
    });
});