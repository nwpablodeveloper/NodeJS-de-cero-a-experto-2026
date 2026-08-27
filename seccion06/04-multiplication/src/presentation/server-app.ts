import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file-use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    name: string,
    destination: string
}

export class ServerApp {

    static run({ base, limit, showTable, name, destination }: RunOptions){
        console.log(`Server Online`);

        const fileContent = new CreateTable().execute({ base, limit });

        const wasCreated = new SaveFile()
                            .execuse({
                                fileContent,
                                destination,
                                fileName: name
                            });


        if(showTable) console.log(fileContent);

        (wasCreated)
            ? console.log('Archivo creado')
            : console.log('Archivo NO creado');
    }

}