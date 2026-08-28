import { CronJob } from "cron";


export class ServerApp {

    public static start(){


        const job = new CronJob(
            '*/2 * * * * *',
            function () {
                console.log(new Date());
            }, 
            null, // onComplete
            true, // start
            'America/Los_Angeles' // timeZone
        );
        job.start();
    }


}