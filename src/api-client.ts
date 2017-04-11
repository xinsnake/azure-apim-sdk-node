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
        let params = {$filter: filter, $top: top, $skip: skip};
        let collection = await this.httpHelper.Get<Collection<Api>>(this.PATH_APIS, params);
        return collection;
    }

    public Get(aid: string, accept: string, isExport: boolean) {

    }

    public GetMeta(aid: string) {

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