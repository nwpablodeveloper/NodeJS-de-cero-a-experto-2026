import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasource/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log-impl.repository";
import { CronService } from "./cron/cron-service";

const fileSystemLogRespository = new LogRepositoryImpl(
    // new PostgresSQLLogDataSource()
    // new mongoLogDS()
    // OracleDataSource
    new FileSystemDatasource()
);

export class ServerApp {

    public static start(){
        console.log('Server started...');
        
        
        const url = 'http://localhost:3000'
        CronService.createJob(
            '*/1 * * * * *', 
            () => {
                new CheckService(
                    fileSystemLogRespository,
                    () => console.log(`URL OK: ${url}`),
                    (error) => console.log(error)
                ).execute(url);
            }
        );
        
    }


}