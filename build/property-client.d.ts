import { Property } from './entities';
import { Credentials } from './utils';
export declare class PropertyClient {
    private readonly PATH_PROPERTIES;
    private credentials;
    private httpHelper;
    constructor(_credentials: Credentials);
    GetAll(filter?: string, top?: number, skip?: number): Promise<Property[]>;
    Get(propId: string): Promise<Property>;
    GetMeta(propId: string): Promise<number>;
    Create(propId: string, payload: Property | string): Promise<any>;
    Update(propId: string, ifMatch: string, payload: Property): Promise<any>;
    Delete(propId: string, ifMatch: string): Promise<void>;
}
