import {Api, ImportLink} from '../entities';
import {Collection} from '../representation';
import {Credentials, HttpHelper} from '../utils';

export class ApiClient {

    private readonly PATH_APIS = '/apis';
    private credentials: Credentials;
    private httpHelper: HttpHelper;

    constructor(_credentials: Credentials) {
        this.credentials = _credentials;
        this.httpHelper = new HttpHelper(this.credentials);
    }

    public async GetAll(filter?: string, top?: number, skip?: number) {
        let params = {'$filter': filter, '$top': top, '$skip': skip};
        return await this.httpHelper.GetCollection<Api>(Api, this.PATH_APIS, params);
    }

    public async Get(aid: string, accept?: string, isExport?: boolean) {
        let params = {'export': isExport};
        let headers = {'Accept': accept}
        return await this.httpHelper.Get<Api>(Api, aid, params, headers);
    }

    public async GetMeta(aid: string) {
        return await this.httpHelper.Head(aid);
    }

    public async CreateOrImport(aid: string, contentType: string, isImport: boolean, path: string, payload: Api | ImportLink | string) {
        let params = {'import': isImport, 'path': path};
        let headers = {'Content-Type': contentType};
        return await this.httpHelper.Put(aid, params, headers, payload);
    }

    public async UpdateViaImport(aid: string, ifMatch: string, contentType: string, payload: Api | ImportLink | string) {
        let headers = {'If-Match': ifMatch, 'Content-Type': contentType};
        return await this.httpHelper.Put(aid, undefined, headers, payload);
    }

    public async Update(aid: string, ifMatch: string, payload: Api) {
        let headers = {'If-Match': ifMatch};
        return await this.httpHelper.Patch(aid, undefined, headers, payload);
    }

    public async Delete(aid: string, ifMatch: string) {
        let headers = {'If-Match': ifMatch};
        return await this.httpHelper.Delete(aid, undefined, headers);
    }
}