import { Api } from './entities';
import { Collection } from './representation';
import { Credentials } from './utils';
export declare class ApiClient {
    private readonly PATH_APIS;
    private readonly PATH_OPERATIONS;
    private credentials;
    private httpHelper;
    constructor(_credentials: Credentials);
    GetAll(filter?: string, top?: number, skip?: number): Promise<Collection<Api>>;
    Get(aid: string, accept: string, isExport: boolean): void;
    GetMeta(aid: string): void;
    CreateOrUpdate(aid: string, contentType: string, isImport: boolean, path: string, api: Api): void;
    CreateOrUpdateViaImport(aid: string, ifMatch: string, contentType: string, api: Api): void;
    Update(aid: string, ifMatch: string, api: Api): void;
    Delete(aid: string, ifMatch: string): void;
}