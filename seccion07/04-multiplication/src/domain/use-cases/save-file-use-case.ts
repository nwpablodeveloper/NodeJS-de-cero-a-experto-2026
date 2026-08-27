import fs from 'fs';

interface SaveFileUseCase {
    execuse: (options: Options) => boolean;
}

interface Options {
    fileContent: string;
    destination?: string;
    fileName?: string;
}


export class SaveFile implements SaveFileUseCase {

    constructor(
        /* 
            Inyección de dependencias 
            Repositorio de donde se va a guardar
        */
    ){}

    execuse({ 
            fileContent, 
            destination = 'outputs', 
            fileName = 'table'
        }: Options): boolean{
        
        try {
            fs.mkdirSync(destination, { recursive: true });
            fs.writeFileSync(`./${ destination }/${ fileName }.txt`, fileContent);
            return true;
        }catch (error) {
            console.log(error);
            return false;        
        }
        
    }
    
}