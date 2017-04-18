import { Logger } from './entities';
import { Credentials } from './utils';
export declare class LoggerClient {
    private readonly PATH_LOGGERS;
    private credentials;
    private httpHelper;
    constructor(_credentials: Credentials);
    GetAll(filter?: string, top?: number, skip?: number): Promise<Logger[]>;
    Get(loggerId: string): Promise<Logger>;
    GetMeta(loggerId: string): Promise<number>;
    Create(loggerId: string, payload: Logger | string): Promise<void>;
    Update(loggerId: string, ifMatch: string, payload: Logger): Promise<void>;
    Delete(loggerId: string, deleteSubscriptions: boolean, ifMatch: string): Promise<void>;
}
