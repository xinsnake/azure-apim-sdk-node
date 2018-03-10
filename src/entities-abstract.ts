import { Credentials, HttpHelper } from './utils'

export interface ImportLink {
    link?: string
}

export abstract class GenericEntity {
    public id?: string
    protected httpHelper?: HttpHelper
    protected credentials?: Credentials

    public SetCredentials(_credentials: Credentials) {
        this.credentials = _credentials
        this.httpHelper = new HttpHelper(this.credentials)
        return this
    }
}

export abstract class PolicyEntity extends GenericEntity {
    protected readonly PATH_POLICY = '/policy'

    public async GetPolicy() {
        let params = {}
        let headers = { 'Content-Type': 'application/vnd.ms-azure-apim.policy+xml' }
        return await this.httpHelper.Get<String>(String, this.id + this.PATH_POLICY, params, headers, true)
    }

    public async CheckPolicy() {
        return await this.httpHelper.Head(this.id + this.PATH_POLICY)
    }

    public async SetPolicy(ifMatch: string, rawXml: boolean, payload: string) {
        let params = {}

        let contentType: string
        if (rawXml) {
            contentType = 'application/vnd.ms-azure-apim.policy.raw+xml'
        } else {
            contentType = 'application/vnd.ms-azure-apim.policy+xml'
        }
        let headers = { 'If-Match': ifMatch, 'Content-Type': contentType }

        return await this.httpHelper.Put(this.id + this.PATH_POLICY, params, headers, payload, true)
    }

    public async RemovePolicy(ifMatch: string) {
        let params = {}
        let headers = { 'If-Match': ifMatch }
        return await this.httpHelper.Delete(this.id + this.PATH_POLICY, params, headers)
    }
}