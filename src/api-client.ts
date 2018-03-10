import { Api, Operation } from './entities'
import { Collection } from './representation'
import { Credentials, HttpHelper } from './utils'
import { ImportLink } from './entities-abstract';

export class ApiClient {

    private readonly PATH_APIS = '/apis'
    private credentials: Credentials
    private httpHelper: HttpHelper

    constructor(_credentials: Credentials) {
        this.credentials = _credentials
        this.httpHelper = new HttpHelper(this.credentials)
    }

    /** Get a list of all APIs */
    public async GetAll(filter?: string, top?: number, skip?: number) {
        let params = { '$filter': filter, '$top': top, '$skip': skip }
        return await this.httpHelper.GetCollection<Api>(Api, this.PATH_APIS, params)
    }

    /** Get a specific API */
    public async Get(aid: string, accept?: string, isExport?: boolean) {
        let params = { 'export': isExport }
        let headers = { 'Accept': accept }
        return await this.httpHelper.Get<Api>(Api, aid, params, headers)
    }

    /** Get the metadata for a specific API */
    public async GetMeta(aid: string) {
        return await this.httpHelper.Head(aid)
    }

    /** Create or import a new API */
    public async CreateOrImport(aid: string, contentType: string, isImport: boolean, path: string, payload: Api | ImportLink | string) {
        let params = { 'import': isImport, 'path': path }
        let headers = { 'Content-Type': contentType }
        return await this.httpHelper.Put(aid, params, headers, payload)
    }

    /** Update an API via import */
    public async UpdateViaImport(aid: string, ifMatch: string, contentType: string, payload: Api | ImportLink | string) {
        let headers = { 'If-Match': ifMatch, 'Content-Type': contentType }
        return await this.httpHelper.Put(aid, undefined, headers, payload)
    }

    /** Update an API */
    public async Update(aid: string, ifMatch: string, payload: Api) {
        let headers = { 'If-Match': ifMatch }
        return await this.httpHelper.Patch(aid, undefined, headers, payload)
    }

    /** Delete an API */
    public async Delete(aid: string, ifMatch: string) {
        let headers = { 'If-Match': ifMatch }
        return await this.httpHelper.Delete(aid, undefined, headers)
    }
}