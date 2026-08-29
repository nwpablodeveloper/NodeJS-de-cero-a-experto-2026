import { LogDataSource } from "../../domain/datasource/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from 'fs';


export class FileSystemDatasource implements LogDataSource{

    private readonly logPath = 'log/';
    private readonly allLogPath = 'log/logs-low.log';
    private readonly mediumLogPath = 'log/logs-medium.log';
    private readonly highLogPath = 'log/logs-high.log';

    constructor(){
        this.createLogsFiles();
    }
    
    private createLogsFiles = () => {
        console.log("entro");
        
        if(!fs.existsSync(this.logPath)){
            fs.mkdirSync(this.logPath)
        }
        
        [
            this.allLogPath,
            this.mediumLogPath,
            this.highLogPath
        ].forEach( path => {
            
            if(fs.existsSync(path)) return;
            
            fs.writeFileSync(path, '' )
        })

    }
    
    saveLog(log: LogEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }

}