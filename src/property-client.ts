import {Property} from './entities';
import {Collection} from './representation';
import {Credentials, HttpHelper} from './utils';

export class PropertyClient {

    private readonly PATH_PROPERTIES = '/properties';
    private credentials: Credentials;
    private httpHelper: HttpHelper;

    constructor(_credentials: Credentials) {
        this.credentials = _credentials;
        this.httpHelper = new HttpHelper(this.credentials);
    }

    public async GetAll(filter?: string, top?: number, skip?: number) {
        let params = {'$filter': filter, '$top': top, '$skip': skip};
        return await this.httpHelper.Get<Collection<Property>>(this.PATH_PROPERTIES, params);
    }

    public async Get(propId: string) {
        return await this.httpHelper.Get<Property>(propId);
    }

    public async GetMeta(propId: string) {
        return await this.httpHelper.Head(propId);
    }

    public async Create(propId: string, payload: Property | string) {
        return await this.httpHelper.Put(propId, undefined, undefined, payload);
    }

    public async Update(propId: string, ifMatch: string, payload: Property) {
        let headers = {'If-Match': ifMatch};
        return await this.httpHelper.Patch(propId, undefined, headers, payload);
    }

    public async Delete(propId: string, ifMatch: string) {
        let headers = {'If-Match': ifMatch};
        return await this.httpHelper.Delete(propId, undefined, headers);
    }
}