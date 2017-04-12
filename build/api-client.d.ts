import { Api, ImportLink } from './entities';
import { Collection } from './representation';
import { Credentials } from './utils';
export declare class ApiClient {
    private readonly PATH_APIS;
    private readonly PATH_OPERATIONS;
    private credentials;
    private httpHelper;
    constructor(_credentials: Credentials);
    GetAll(filter?: string, top?: number, skip?: number): Promise<Collection<Api>>;
    Get(aid: string, accept?: string, isExport?: boolean): Promise<Api>;
    GetMeta(aid: string): Promise<string>;
    CreateOrImport(aid: string, contentType: string, isImport: boolean, path: string, payload: Api | ImportLink | string): Promise<void>;
    UpdateViaImport(aid: string, ifMatch: string, contentType: string, payload: Api | ImportLink | string): Promise<void>;
    Update(aid: string, ifMatch: string, payload: Api): Promise<void>;
    Delete(aid: string, ifMatch: string): Promise<void>;
}
