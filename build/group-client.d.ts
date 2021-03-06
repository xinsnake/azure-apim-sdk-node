import { Group } from './entities';
import { Credentials } from './utils';
export declare class GroupClient {
    private readonly PATH_GROUPS;
    private credentials;
    private httpHelper;
    constructor(_credentials: Credentials);
    GetAll(filter?: string, top?: number, skip?: number): Promise<Group[]>;
    Get(gid: string): Promise<Group>;
    GetMeta(gid: string): Promise<number>;
    Create(gid: string, payload: Group | string): Promise<any>;
    Update(gid: string, ifMatch: string, payload: Group): Promise<any>;
    Delete(gid: string, ifMatch: string): Promise<void>;
}
