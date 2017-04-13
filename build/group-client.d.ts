import { Group } from './entities';
import { Collection } from './representation';
import { Credentials } from './utils';
export declare class GroupClient {
    private readonly PATH_GROUPS;
    private credentials;
    private httpHelper;
    constructor(_credentials: Credentials);
    GetAll(filter?: string, top?: number, skip?: number): Promise<Collection<Group>>;
    Get(gid: string): Promise<Group>;
    GetMeta(gid: string): Promise<string>;
    Create(gid: string, payload: Group | string): Promise<void>;
    Update(gid: string, ifMatch: string, payload: Group): Promise<void>;
    Delete(gid: string, ifMatch: string): Promise<void>;
}
