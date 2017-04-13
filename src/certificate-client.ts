import {Certificate} from './entities';
import {Collection} from './representation';
import {Credentials, HttpHelper} from './utils';

export class CertificateClient {

    private readonly PATH_CERTIFICATES = '/certificates';
    private credentials: Credentials;
    private httpHelper: HttpHelper;

    constructor(_credentials: Credentials) {
        this.credentials = _credentials;
        this.httpHelper = new HttpHelper(this.credentials);
    }

    public async GetAll(filter?: string, top?: number, skip?: number) {
        let params = {'$filter': filter, '$top': top, '$skip': skip};
        return await this.httpHelper.Get<Collection<Certificate>>(this.PATH_CERTIFICATES, params);
    }

    public async Get(cid: string) {
        return await this.httpHelper.Get<Certificate>(cid);
    }

    public async GetMeta(cid: string) {
        return await this.httpHelper.Head(cid);
    }

    public async Upsert(cid: string, ifMatch: string, payload: Certificate) {
        let headers = {'If-Match': ifMatch};
        return await this.httpHelper.Patch(cid, undefined, headers, payload);
    }

    public async Delete(cid: string, ifMatch: string) {
        let headers = {'If-Match': ifMatch};
        return await this.httpHelper.Delete(cid, undefined, headers);
    }
}