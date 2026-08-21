import { getLogger as winstonLogger, buildLogger } from "../../src/plugins";

describe('logger-plugin-parte-2', () => {

    test('builLogger tiene que regresar una función', () => {
        
        const logger = buildLogger('test');

        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');

    });

    test('logger.log tiene que llamar a winston', () => {

        // console.log(getLogger); // Es un objeto muy granda
        // vamos a neceistar de un espia para testear al winston

        // Voy a estar espiando el 'log'
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);

        logger.log(message);

        // Probamos que fue llamado al menos 1 ves
        expect(winstonLoggerMock).toHaveBeenCalled();

        // Probamos si es llamado con 0 argumentos y nos va a devolver el log en objeto "Error test"
        // expect(winstonLoggerMock).toHaveBeenCalledWith();
        
        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'info',
            // voy a estar esperando un objeto que minimamente tenga esta info
            expect.objectContaining({
                level: 'info',
                message,
                service,
            })
        );
    });
});