import { Logger } from './entities'
import { Collection } from './representation'
import { Credentials, HttpHelper } from './utils'

export class LoggerClient {

    private readonly PATH_LOGGERS = '/loggers'
    private credentials: Credentials
    private httpHelper: HttpHelper

    constructor(_credentials: Credentials) {
        this.credentials = _credentials
        this.httpHelper = new HttpHelper(this.credentials)
    }

    /* List loggers */
    public async GetAll(filter?: string, top?: number, skip?: number) {
        let params = { '$filter': filter, '$top': top, '$skip': skip }
        return await this.httpHelper.GetCollection<Logger>(Logger, this.PATH_LOGGERS, params)
    }

    /* Get a specific logger */
    public async Get(loggerId: string) {
        return await this.httpHelper.Get<Logger>(Logger, loggerId)
    }

    /* Get the metadata for a specific logger */
    public async GetMeta(loggerId: string) {
        return await this.httpHelper.Head(loggerId)
    }

    /* Create a logger */
    public async Create(loggerId: string, payload: Logger | string) {
        return await this.httpHelper.Put(loggerId, undefined, undefined, payload)
    }

    /* Update a logger */
    public async Update(loggerId: string, ifMatch: string, payload: Logger) {
        let headers = { 'If-Match': ifMatch }
        return await this.httpHelper.Patch(loggerId, undefined, headers, payload)
    }

    /* Delete a logger */
    public async Delete(loggerId: string, deleteSubscriptions: boolean, ifMatch: string) {
        let params = { 'deleteSubscriptions': deleteSubscriptions }
        let headers = { 'If-Match': ifMatch }
        return await this.httpHelper.Delete(loggerId, params, headers)
    }
}