import { User } from './entities';
import { Credentials } from './utils';
export declare class UserClient {
    private readonly PATH_USERS;
    private credentials;
    private httpHelper;
    constructor(_credentials: Credentials);
    GetAll(filter?: string, top?: number, skip?: number, expandGroups?: boolean): Promise<User[]>;
    Get(uid: string): Promise<User>;
    GetMeta(uid: string): Promise<number>;
    Create(uid: string, payload: User | string): Promise<any>;
    Update(uid: string, ifMatch: string, payload: User): Promise<any>;
    Delete(uid: string, deleteSubscriptions: boolean, ifMatch: string): Promise<void>;
}
