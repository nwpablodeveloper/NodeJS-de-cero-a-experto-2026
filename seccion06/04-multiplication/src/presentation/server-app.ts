import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file-use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
}

export class ServerApp {

    static run({ base, limit, showTable }: RunOptions){
        console.log(`Server Online`);

        const table = new CreateTable().execute({ base, limit });

        const wasCreated = new SaveFile()
                            .execuse({
                                fileContent: table,
                                destination: `outputs/tablas-del-${base}`,
                                fileName: `tabla-del-${base}-al-${limit}`
                            });


        if(showTable) console.log(table);

        (wasCreated)
            ? console.log('Archivo creado')
            : console.log('Archivo NO creado');
    }

}