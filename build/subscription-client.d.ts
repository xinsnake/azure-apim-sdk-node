import { Subscription } from './entities';
import { Credentials } from './utils';
export declare class SubscriptionClient {
    private readonly PATH_SUBSCRIPTIONS;
    private credentials;
    private httpHelper;
    constructor(_credentials: Credentials);
    GetAll(filter?: string, top?: number, skip?: number): Promise<Subscription[]>;
    Get(sid: string): Promise<Subscription>;
    GetMeta(sid: string): Promise<number>;
    Create(sid: string, payload: Subscription | string): Promise<any>;
    Update(sid: string, ifMatch: string, payload: Subscription): Promise<any>;
    Delete(sid: string, ifMatch: string): Promise<void>;
}
