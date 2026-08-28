import fs from 'fs';
import { SaveFile } from "./save-file-use-case";

describe('save-file-use-case', () => {
    
    // Ejecutar despues de la prueba
    afterEach(() => {
        const exist = fs.existsSync('outputs');
        const existPer = fs.existsSync('outputs-personalizados');

        if(exist)
            fs.rmSync('outputs', { recursive: true });
        
        if(existPer)
            fs.rmSync('outputs-personalizados', { recursive: true });

    });

    const customsOptions = {
        fileContent: 'Contenido personalizado', 
        destination: 'outputs-personalizados', 
        fileName: 'table-personalizada'
    }

    
    test('Creación del archivo con valores por defecto', () => {
        
        const saveFile = new SaveFile();
        const path = 'outputs/table.txt';
        
        const options = {
            fileContent: 'Contenido a guardar',
        }
        
        const resultado = saveFile.execuse(options);
        const fileExist = fs.existsSync(path);
        const fileContent = fs.readFileSync(path, {encoding: 'utf-8'})
        
        expect(resultado).toBe(true);
        expect(fileExist).toBe(true);
        expect(fileContent).toContain('Contenido a guardar');
    });
    
    
    test('Creación el archivo con valores personalizados', () => {
        
        const saveFile = new SaveFile();
        
        const path = `${customsOptions.destination}/${customsOptions.fileName}.txt`

        const resultado = saveFile.execuse(customsOptions);
        const fileExist = fs.existsSync(customsOptions.destination);
        const fileContent = fs.readFileSync(path, {encoding: 'utf-8'});

        expect(resultado).toBe(true);
        expect(fileExist).toBe(true);
        expect(fileContent).toContain(customsOptions.fileContent);

    });

    test('Capturar el error al crear el directorio', () => {

        const saveFile = new SaveFile();
        
        /* 
            FORZAR A GENERAR UN ERROR COMO PRUEBA
            Crear un espia
            Espia a al metodo 'mkdirSync' de fs/
            Espiamos mkdirSync para controlar su comportamiento durante el test.
            En lugar de crear la carpeta, hacemos que lance un error para probar
            cómo se comporta nuestro código cuando falla la creación de la carpeta.
        
            mockImplementation() sustituye temporalmente la función real
            por la función que nosotros definimos.
       */
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
            throw new Error ('Error al querer guaradar el archivo');
        });

        const resul = saveFile.execuse(customsOptions);
        expect(resul).toBe(false);

        // Volvemos a dejar la función en su estado anterior para no afectar a los próximos tests
        mkdirSpy.mockRestore();

    });

    test('Capturar el error al guardar el archivo', () => {

        const saveFile = new SaveFile();

        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation( () => {
            throw new Error ('Error al guardar el archivo');
        });

        const result = saveFile.execuse({fileContent: 'Hola testing'});

        expect(result).toBe(false);

        writeFileSpy.mockRestore(); // Dejamos la función como estaba antes del espia

    });

});