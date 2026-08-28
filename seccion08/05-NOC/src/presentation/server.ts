import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class ServerApp {

    public static start(){
        console.log('Server started...');
        let c: number = 0;
        CronService.createJob(
            '*/5 * * * * *', 
            () => {
                new CheckService().execute(`http://google.com`);
            }
        );
        
    }


}