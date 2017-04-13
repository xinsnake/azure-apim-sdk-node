import { Backend } from './entities';
import { Collection } from './representation';
import { Credentials } from './utils';
export declare class BackendClient {
    private readonly PATH_BACKENDS;
    private credentials;
    private httpHelper;
    constructor(_credentials: Credentials);
    GetAll(filter?: string, top?: number, skip?: number, expandGroups?: boolean): Promise<Collection<Backend>>;
    Get(backendId: string): Promise<Backend>;
    GetMeta(backendId: string): Promise<string>;
    Create(backendId: string, payload: Backend): Promise<void>;
    Update(backendId: string, ifMatch: string, payload: Backend): Promise<void>;
    Delete(backendId: string, ifMatch: string): Promise<void>;
}
