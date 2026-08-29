import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class ServerApp {

    public static start(){
        console.log('Server started...');
        
        const url = 'http://localhost:3000'
        CronService.createJob(
            '*/10 * * * * *', 
            () => {
                new CheckService(
                    () => console.log(`URL OK: ${url}`),
                    (error) => console.log(error)
                ).execute(url);
            }
        );
        
    }


}