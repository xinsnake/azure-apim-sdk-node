import { Backend } from './entities';
import { Credentials } from './utils';
export declare class BackendClient {
    private readonly PATH_BACKENDS;
    private credentials;
    private httpHelper;
    constructor(_credentials: Credentials);
    GetAll(filter?: string, top?: number, skip?: number, expandGroups?: boolean): Promise<Backend[]>;
    Get(backendId: string): Promise<Backend>;
    GetMeta(backendId: string): Promise<number>;
    Create(backendId: string, payload: Backend): Promise<any>;
    Update(backendId: string, ifMatch: string, payload: Backend): Promise<any>;
    Delete(backendId: string, ifMatch: string): Promise<void>;
}
