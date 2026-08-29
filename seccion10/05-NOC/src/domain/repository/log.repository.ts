import { LogDataSource } from "../datasource/log.datasource";
import { LogEntity, LogSeverityLevel } from "../entities/log.entity";


export class LogRepository implements LogDataSource {
    
    saveLog(log: LogEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }

}