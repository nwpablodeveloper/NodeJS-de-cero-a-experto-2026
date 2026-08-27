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
        
        const options = {
            fileContent: 'Contenido personalizado', 
            destination: 'outputs-personalizados', 
            fileName: 'table-personalizada'
            
        }
        
        const path = `${options.destination}/${options.fileName}.txt`

        const resultado = saveFile.execuse(options);
        const fileExist = fs.existsSync(options.destination);
        const fileContent = fs.readFileSync(path, {encoding: 'utf-8'});

        expect(resultado).toBe(true);
        expect(fileExist).toBe(true);
        expect(fileContent).toContain(options.fileContent);

    });

});