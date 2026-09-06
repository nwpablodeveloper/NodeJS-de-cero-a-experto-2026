import { LogModel } from "../../data/mongo";
import { LogDataSource } from "../../domain/datasource/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";


export class MongoLogDatasourse implements LogDataSource {

    async saveLog(log: LogEntity): Promise<void> {
        
        const newLog = await LogModel.create(log);

        console.log(`Mongo log creado con id: ${newLog.id}`);
        
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        
        const logs = await LogModel.find({
            level: severityLevel
        });

        // return logs.map( mongoLog => LogEntity.fromObject(mongoLog));
        return logs.map( LogEntity.fromObject);
        
    }

    
}