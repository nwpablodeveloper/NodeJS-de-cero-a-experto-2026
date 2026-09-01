import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

// Este es el contrato que tienen que cumplir cuyas clases lo tengan implementado

export abstract class LogDataSource {
    abstract saveLog(log: LogEntity): Promise<void>;
    abstract getLogs( severityLevel: LogSeverityLevel):Promise<LogEntity[]>;
}