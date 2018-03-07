import {Subscription} from '../entities';
import {Collection} from '../representation';
import {Credentials, HttpHelper} from '../utils';

export class SubscriptionClient {

    private readonly PATH_SUBSCRIPTIONS = '/subscriptions';
    private credentials: Credentials;
    private httpHelper: HttpHelper;

    constructor(_credentials: Credentials) {
        this.credentials = _credentials;
        this.httpHelper = new HttpHelper(this.credentials);
    }

    public async GetAll(filter?: string, top?: number, skip?: number) {
        let params = {'$filter': filter, '$top': top, '$skip': skip};
        return await this.httpHelper.GetCollection<Subscription>(Subscription, this.PATH_SUBSCRIPTIONS, params);
    }

    public async Get(sid: string) {
        return await this.httpHelper.Get<Subscription>(Subscription, sid);
    }

    public async GetMeta(sid: string) {
        return await this.httpHelper.Head(sid);
    }

    public async Create(sid: string, payload: Subscription | string) {
        return await this.httpHelper.Put(sid, undefined, undefined, payload);
    }

    public async Update(sid: string, ifMatch: string, payload: Subscription) {
        let headers = {'If-Match': ifMatch};
        return await this.httpHelper.Patch(sid, undefined, headers, payload);
    }

    public async Delete(sid: string, ifMatch: string) {
        let headers = {'If-Match': ifMatch};
        return await this.httpHelper.Delete(sid, undefined, headers);
    }
}