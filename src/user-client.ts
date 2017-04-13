import {User} from './entities';
import {Collection} from './representation';
import {Credentials, HttpHelper} from './utils';

export class UserClient {

    private readonly PATH_USERS = '/users';
    private credentials: Credentials;
    private httpHelper: HttpHelper;

    constructor(_credentials: Credentials) {
        this.credentials = _credentials;
        this.httpHelper = new HttpHelper(this.credentials);
    }

    public async GetAll(filter?: string, top?: number, skip?: number, expandGroups?: boolean) {
        let params = {'$filter': filter, '$top': top, '$skip': skip, 'expandGroups': expandGroups};
        return await this.httpHelper.Get<Collection<User>>(this.PATH_USERS, params);
    }

    public async Get(uid: string) {
        return await this.httpHelper.Get<User>(uid);
    }

    public async GetMeta(uid: string) {
        return await this.httpHelper.Head(uid);
    }

    public async Create(uid: string, payload: User | string) {
        return await this.httpHelper.Put(uid, undefined, undefined, payload);
    }

    public async Update(uid: string, ifMatch: string, payload: User) {
        let headers = {'If-Match': ifMatch};
        return await this.httpHelper.Patch(uid, undefined, headers, payload);
    }

    public async Delete(uid: string, deleteSubscriptions: boolean, ifMatch: string) {
        let params = {'deleteSubscriptions': deleteSubscriptions};
        let headers = {'If-Match': ifMatch};
        return await this.httpHelper.Delete(uid, params, headers);
    }
}