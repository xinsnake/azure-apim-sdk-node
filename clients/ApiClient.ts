import * as credentials from '../utils/Credentials';
import * as httphelper from '../utils/HttpHelper';
import * as a from '../entities/Api';
import * as c from '../representations/Collection';

export class ApiClient {

    private readonly PATH_APIS = '/apis';
    private readonly PATH_OPERATIONS = '/operations';
    private credentials: credentials.Credentials;
    private httpHelper: httphelper.HttpHelper;

    constructor(_credentials: credentials.Credentials) {
        this.credentials = _credentials;
        this.httpHelper = new httphelper.HttpHelper(this.credentials);
    }

    public GetAll(filter?: string, top?: number, skip?: number) {
        let path = this.PATH_APIS;
        let params = {
            $filter: filter,
            $top: top,
            $skip: skip
        };
        let rq = this.httpHelper.Get(path, params);
        let result = rq.then<c.Collection<a.Api>>((value) => {
            return value;
        }, (reason) => {
            console.log(reason);
        });
        console.log(result);
    }

    public Get(aid: string, accept: string, isExport: boolean) {

    }

    public GetMeta(aid: string) {

    }

    public CreateOrUpdate(aid: string, contentType: string, isImport: boolean, path: string, api: a.Api) {

    }

    public CreateOrUpdateViaImport(aid: string, ifMatch: string, contentType: string, api: a.Api) {

    }

    public Update(aid: string, ifMatch: string, api: a.Api) {

    }

    public Delete(aid: string, ifMatch: string) {

    }
}