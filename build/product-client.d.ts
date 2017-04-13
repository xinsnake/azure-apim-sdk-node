import { Product } from './entities';
import { Collection } from './representation';
import { Credentials } from './utils';
export declare class ProductClient {
    private readonly PATH_PRODUCTS;
    private credentials;
    private httpHelper;
    constructor(_credentials: Credentials);
    GetAll(filter?: string, top?: number, skip?: number, expandGroups?: boolean): Promise<Collection<Product>>;
    Get(pid: string): Promise<Product>;
    GetMeta(pid: string): Promise<string>;
    Create(pid: string, payload: Product | string): Promise<void>;
    Update(pid: string, ifMatch: string, payload: Product): Promise<void>;
    Delete(pid: string, deleteSubscriptions: boolean, ifMatch: string): Promise<void>;
}
