import { Api } from './entities';
import { Credentials } from './utils';
import { ImportLink } from './entities-abstract';
export declare class ApiClient {
    private readonly PATH_APIS;
    private credentials;
    private httpHelper;
    constructor(_credentials: Credentials);
    GetAll(filter?: string, top?: number, skip?: number): Promise<Api[]>;
    Get(aid: string, accept?: string, isExport?: boolean): Promise<Api>;
    GetMeta(aid: string): Promise<number>;
    CreateOrImport(aid: string, contentType: string, isImport: boolean, path: string, payload: Api | ImportLink | string): Promise<any>;
    UpdateViaImport(aid: string, ifMatch: string, contentType: string, payload: Api | ImportLink | string): Promise<any>;
    Update(aid: string, ifMatch: string, payload: Api): Promise<any>;
    Delete(aid: string, ifMatch: string): Promise<void>;
}
