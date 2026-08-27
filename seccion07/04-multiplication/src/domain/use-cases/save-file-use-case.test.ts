import fs from 'fs';
import { SaveFile } from "./save-file-use-case";

describe('save-file-use-case', () => {
    
    // Ejecutar despues de la prueba
    afterEach(() => {
        fs.rmSync('outputs', { recursive: true });
    });

    test('Verificar la creación del archivo con valores por defecto', () => {

        const saveFile = new SaveFile();
        
        const options = {
            fileContent: 'Contenido a guardar',
        }
        
        const resultado = saveFile.execuse(options);
        console.log(resultado);
        
        expect(saveFile).toBeInstanceOf(SaveFile);
        expect(resultado).toBe(true);
        

        const path = 'outputs/table.txt';
        const checkFile = fs.existsSync(path);
        
        expect(checkFile).toBe(true);

        const fileContent = fs.readFileSync(path, {encoding: 'utf-8'})
        expect(fileContent).toContain('Contenido a guardar');


    });

});