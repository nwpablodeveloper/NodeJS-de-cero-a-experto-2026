import { EmailService } from "../../../presentation/email/email-service";
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface SendLogEmailUseCase {
    execute: (to: string | string[]) => Promise<boolean>;
}

export class SendEmailLogs implements SendLogEmailUseCase{

    constructor(
        private readonly emailsService: EmailService,
        private readonly logRespository: LogRepository
    ){}

    async execute (to: string | string[]){

        try {
            
            const sent = await this.emailsService.sendEMailWithFileSystemLogs(to);

            if(!sent) {
                throw new Error('Email Logs no enviado');
            }
            

            const log = new LogEntity({
                message: `Log Email enviado`,
                level: LogSeverityLevel.low,
                origin: 'send-email-logs.ts'
            })

            this.logRespository.saveLog(log);
            return true;
        } catch (error) {

            const log = new LogEntity({
                message: `${error}`,
                level: LogSeverityLevel.high,
                origin: 'send-email-logs.ts'
            })

            this.logRespository.saveLog(log);
            return false;
        }
    }

}