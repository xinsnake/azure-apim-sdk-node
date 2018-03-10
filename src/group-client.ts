import { Group } from './entities'
import { Collection } from './representation'
import { Credentials, HttpHelper } from './utils'

export class GroupClient {

    private readonly PATH_GROUPS = '/groups'
    private credentials: Credentials
    private httpHelper: HttpHelper

    constructor(_credentials: Credentials) {
        this.credentials = _credentials
        this.httpHelper = new HttpHelper(this.credentials)
    }

    /* Get a list of all groups */
    public async GetAll(filter?: string, top?: number, skip?: number) {
        let params = { '$filter': filter, '$top': top, '$skip': skip }
        return await this.httpHelper.GetCollection<Group>(Group, this.PATH_GROUPS, params)
    }

    /* Get a specific group */
    public async Get(gid: string) {
        return await this.httpHelper.Get<Group>(Group, gid)
    }

    /* Get the metadata for a specific group */
    public async GetMeta(gid: string) {
        return await this.httpHelper.Head(gid)
    }

    /* Create a new group */
    public async Create(gid: string, payload: Group | string) {
        return await this.httpHelper.Put(gid, undefined, undefined, payload)
    }

    /* Update an existing group */
    public async Update(gid: string, ifMatch: string, payload: Group) {
        let headers = { 'If-Match': ifMatch }
        return await this.httpHelper.Patch(gid, undefined, headers, payload)
    }

    /* Delete a group */
    public async Delete(gid: string, ifMatch: string) {
        let headers = { 'If-Match': ifMatch }
        return await this.httpHelper.Delete(gid, undefined, headers)
    }
}