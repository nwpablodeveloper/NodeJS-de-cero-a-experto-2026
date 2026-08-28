import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file-use-case";
import { ServerApp } from "./server-app";

describe('Server app', () => {

    
    const options = {
            base: 2,
            limit: 10,
            showTable: true,
            fileName: 'testName',
            destination: 'testOutputs'
    }

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Ver la instancia del ServerApp', () => {

        const serverApp = new ServerApp();
        expect(serverApp).toBeInstanceOf(ServerApp);
        
        expect(typeof ServerApp.run).toBe('function');

    });

    test('Correr el server con opciones', () => {

        const logSpy = jest.spyOn(console, 'log');
        const creatTableSpy = jest.spyOn( CreateTable.prototype, 'execute');
        const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execuse');

        ServerApp.run(options);

        expect(logSpy).toHaveBeenCalledTimes(3);
        expect(logSpy).toHaveBeenCalledWith('Server Online');
        expect(logSpy).toHaveBeenCalledWith('Archivo creado');

        expect(creatTableSpy).toHaveBeenCalledTimes(1);
        expect(creatTableSpy).toHaveBeenCalledWith({
                                    "base": options.base, 
                                    "limit": options.limit});

        expect(saveFileSpy).toHaveBeenCalledTimes(1);
        expect(saveFileSpy).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            destination: options.destination,
            fileName: options.fileName
        });

    });


    test('Ejecutar con valores personalizados', () => {

        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2'); // para que no sea undefined
        const saveFileMock = jest.fn().mockReturnValue(true);

        console.log = logMock;
        console.error = logErrorMock;

        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execuse = saveFileMock;

        ServerApp.run(options);

        expect(logMock).toHaveBeenCalledWith("Server Online");
        expect(createMock).toHaveBeenCalledWith({"base": 2, "limit": 10});
        expect(saveFileMock).toHaveBeenCalledWith({
                            "destination": options.destination, 
                            "fileContent": expect.any(String), 
                            "fileName": options.fileName
                        });

        expect(logMock).toHaveBeenCalledWith('Archivo creado');
        expect(logErrorMock).not.toHaveBeenCalled();

    });
});