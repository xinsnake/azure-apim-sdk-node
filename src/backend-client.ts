import { Backend } from './entities'
import { Collection } from './representation'
import { Credentials, HttpHelper } from './utils'

export class BackendClient {

    private readonly PATH_BACKENDS = '/backends'
    private credentials: Credentials
    private httpHelper: HttpHelper

    constructor(_credentials: Credentials) {
        this.credentials = _credentials
        this.httpHelper = new HttpHelper(this.credentials)
    }

    /* List backend services */
    public async GetAll(filter?: string, top?: number, skip?: number, expandGroups?: boolean) {
        let params = { '$filter': filter, '$top': top, '$skip': skip, 'expandGroups': expandGroups }
        return await this.httpHelper.GetCollection<Backend>(Backend, this.PATH_BACKENDS, params)
    }

    /* Get a specific backend */
    public async Get(backendId: string) {
        return await this.httpHelper.Get<Backend>(Backend, backendId)
    }

    /* Get the metadata for a specific backend */
    public async GetMeta(backendId: string) {
        return await this.httpHelper.Head(backendId)
    }

    /* Create a backend */
    public async Create(backendId: string, payload: Backend) {
        return await this.httpHelper.Put(backendId, undefined, undefined, payload)
    }

    /* Update a backend */
    public async Update(backendId: string, ifMatch: string, payload: Backend) {
        let headers = { 'If-Match': ifMatch }
        return await this.httpHelper.Patch(backendId, undefined, headers, payload)
    }

    /* Delete a backend */
    public async Delete(backendId: string, ifMatch: string) {
        let headers = { 'If-Match': ifMatch }
        return await this.httpHelper.Delete(backendId, undefined, headers)
    }
}