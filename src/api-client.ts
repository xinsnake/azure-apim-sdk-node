import {Api} from './entities';
import {Collection} from './representation';
import {Credentials, HttpHelper} from './utils';

export class ApiClient {

    private readonly PATH_APIS = '/apis';
    private readonly PATH_OPERATIONS = '/operations';
    private credentials: Credentials;
    private httpHelper: HttpHelper;

    constructor(_credentials: Credentials) {
        this.credentials = _credentials;
        this.httpHelper = new HttpHelper(this.credentials);
    }

    public async GetAll(filter?: string, top?: number, skip?: number) {
        let path = this.PATH_APIS;
        let params = {$filter: filter, $top: top, $skip: skip};
        return await this.httpHelper.Get<Collection<Api>>(path, params);
    }

    public async Get(aid: string, accept?: string, isExport?: boolean) {
        let path = aid;
        let params = {export: isExport};
        let headers = {Accept: accept}
        return await this.httpHelper.Get<Api>(path, params, headers);
    }

    public async GetMeta(aid: string) {
        let path = aid;
        return await this.httpHelper.Head(path);
    }

    public CreateOrUpdate(aid: string, contentType: string, isImport: boolean, path: string, api: Api) {

    }

    public CreateOrUpdateViaImport(aid: string, ifMatch: string, contentType: string, api: Api) {

    }

    public Update(aid: string, ifMatch: string, api: Api) {

    }

    public Delete(aid: string, ifMatch: string) {

    }
}