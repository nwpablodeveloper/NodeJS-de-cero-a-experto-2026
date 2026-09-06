import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasource/file-system.datasource";
import { MongoLogDatasourse } from "../infrastructure/datasource/mongo-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log-impl.repository";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email-service";

const logRepository = new LogRepositoryImpl(
    // new PostgresSQLLogDataSource()
    // new mongoLogDS()
    // OracleDataSource
    new FileSystemDatasource()
    // new MongoLogDatasourse()
);

const emailService = new EmailService();

export class ServerApp {

    public static async start(){
        console.log('Server started...');
        
        // console.log(envs);
        

        const logs = await logRepository.getLogs(LogSeverityLevel.low);
        console.log(logs);

        return;
        const url = 'http://localhost:3000';

        CronService.createJob(
            '*/3 * * * * *', 
            () => {
                new CheckService(
                    logRepository,
                    () => console.log(`URL OK: ${url}`),
                    (error) => console.log(error)
                ).execute(url);
            }
        );
        return;
        new SendEmailLogs(
            emailService, 
            logRepository
        ).execute('pabloveiga1988@gmail.com');



        // return;
        // const emailService: EmailService = new EmailService();
        // emailService.sendEMailWithFileSystemLogs(['pabloveiga1988@gmail.com']);
        
        // return;

        // return ;
        // const emailService2 = new EmailService();
        // emailService2.sendEmail({
        //     to: 'pabloveiga1988@gmail.com',
        //     subject: 'Probando envio de emails',
        //     htmlBody: `
        //         <h3>Cuerpo del email por aquí</h3>
        //     `
        // })
        
    }


}