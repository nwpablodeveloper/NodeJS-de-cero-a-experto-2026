import { ServerApp } from "./server-app";

describe('Server app', () => {

    test('Ver la instancia del ServerApp', () => {

        const serverApp = new ServerApp();
        expect(serverApp).toBeInstanceOf(ServerApp);
        
        expect(typeof ServerApp.run).toBe('function');

    });

})