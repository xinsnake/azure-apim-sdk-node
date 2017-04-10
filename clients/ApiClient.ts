import {Credentials} from '../utils/Credentials';
import {HttpHelper} from '../utils/HttpHelper';
import {Api} from '../entities/Api';
import {Collection} from '../representations/Collection';

export class ApiClient {

    private readonly PATH_APIS = '/apis';
    private readonly PATH_OPERATIONS = '/operations';
    private credentials: Credentials;
    private httpHelper: HttpHelper;

    constructor(_credentials: Credentials) {
        this.credentials = _credentials;
        this.httpHelper = new HttpHelper(this.credentials);
    }

    public GetAll(filter?: string, top?: number, skip?: number) {
        let path = this.PATH_APIS;
        let params = {
            $filter: filter,
            $top: top,
            $skip: skip
        };
        let rq = this.httpHelper.Get(path, params);
        let result = rq.then<Collection<Api>>((value) => {
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

    public CreateOrUpdate(aid: string, contentType: string, isImport: boolean, path: string, api: Api) {

    }

    public CreateOrUpdateViaImport(aid: string, ifMatch: string, contentType: string, api: Api) {

    }

    public Update(aid: string, ifMatch: string, api: Api) {

    }

    public Delete(aid: string, ifMatch: string) {

    }
}