import {Logger} from './entities';
import {Collection} from './representation';
import {Credentials, HttpHelper} from './utils';

export class LoggerClient {

    private readonly PATH_LOGGERS = '/loggers';
    private credentials: Credentials;
    private httpHelper: HttpHelper;

    constructor(_credentials: Credentials) {
        this.credentials = _credentials;
        this.httpHelper = new HttpHelper(this.credentials);
    }

    public async GetAll(filter?: string, top?: number, skip?: number, expandGroups?: boolean) {
        let params = {'$filter': filter, '$top': top, '$skip': skip, 'expandGroups': expandGroups};
        return await this.httpHelper.Get<Collection<Logger>>(this.PATH_LOGGERS, params);
    }

    public async Get(loggerId: string) {
        return await this.httpHelper.Get<Logger>(loggerId);
    }

    public async GetMeta(loggerId: string) {
        return await this.httpHelper.Head(loggerId);
    }

    public async Create(loggerId: string, payload: Logger | string) {
        return await this.httpHelper.Put(loggerId, undefined, undefined, payload);
    }

    public async Update(loggerId: string, ifMatch: string, payload: Logger) {
        let headers = {'If-Match': ifMatch};
        return await this.httpHelper.Patch(loggerId, undefined, headers, payload);
    }

    public async Delete(loggerId: string, deleteSubscriptions: boolean, ifMatch: string) {
        let params = {'deleteSubscriptions': deleteSubscriptions};
        let headers = {'If-Match': ifMatch};
        return await this.httpHelper.Delete(loggerId, params, headers);
    }
}