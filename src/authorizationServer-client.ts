import { AuthorizationServer } from './entities'
import { Collection } from './representation'
import { Credentials, HttpHelper } from './utils'

export class AuthorizationServerClient {

    private readonly PATH_AUTHORIZATION_SERVERS = '/authorizationServers'
    private credentials: Credentials
    private httpHelper: HttpHelper

    constructor(_credentials: Credentials) {
        this.credentials = _credentials
        this.httpHelper = new HttpHelper(this.credentials)
    }

    /** Get a list of authorization servers */
    public async GetAll(filter?: string, top?: number, skip?: number) {
        let params = { '$filter': filter, '$top': top, '$skip': skip }
        return await this.httpHelper.GetCollection<AuthorizationServer>(AuthorizationServer, this.PATH_AUTHORIZATION_SERVERS, params)
    }

    /** Get a specific authorization server */
    public async Get(authsid: string) {
        return await this.httpHelper.Get<AuthorizationServer>(AuthorizationServer, authsid)
    }

    /** Get the metadata for a specific authorization server */
    public async GetMeta(authsid: string) {
        return await this.httpHelper.Head(authsid)
    }

    /** Create a new authorization server */
    public async Create(authsid: string, payload: AuthorizationServer | string) {
        return await this.httpHelper.Put(authsid, undefined, undefined, payload)
    }

    /** Update an authorization server */
    public async Update(authsid: string, ifMatch: string, payload: AuthorizationServer) {
        let headers = { 'If-Match': ifMatch }
        return await this.httpHelper.Patch(authsid, undefined, headers, payload)
    }

    /** Delete an authorization server */
    public async Delete(authsid: string, ifMatch: string) {
        let headers = { 'If-Match': ifMatch }
        return await this.httpHelper.Delete(authsid, undefined, headers)
    }
}