import { Certificate } from './entities'
import { Collection } from './representation'
import { Credentials, HttpHelper } from './utils'

export class CertificateClient {

    private readonly PATH_CERTIFICATES = '/certificates'
    private credentials: Credentials
    private httpHelper: HttpHelper

    constructor(_credentials: Credentials) {
        this.credentials = _credentials
        this.httpHelper = new HttpHelper(this.credentials)
    }

    /* Get a list of all certificates */
    public async GetAll(filter?: string, top?: number, skip?: number) {
        let params = { '$filter': filter, '$top': top, '$skip': skip }
        return await this.httpHelper.GetCollection<Certificate>(Certificate, this.PATH_CERTIFICATES, params)
    }

    /* Get a certificate */
    public async Get(cid: string) {
        return await this.httpHelper.Get<Certificate>(Certificate, cid)
    }

    /* Get the metadata for a certificate */
    public async GetMeta(cid: string) {
        return await this.httpHelper.Head(cid)
    }

    /* Add or update a certificate */
    public async Upsert(cid: string, ifMatch: string, payload: Certificate) {
        let headers = { 'If-Match': ifMatch }
        return await this.httpHelper.Patch(cid, undefined, headers, payload)
    }

    /* Remove a certificate */
    public async Delete(cid: string, ifMatch: string) {
        let headers = { 'If-Match': ifMatch }
        return await this.httpHelper.Delete(cid, undefined, headers)
    }
}