import { AuthorizationServer } from './entities';
import { Credentials } from './utils';
export declare class AuthorizationServerClient {
    private readonly PATH_AUTHORIZATION_SERVERS;
    private credentials;
    private httpHelper;
    constructor(_credentials: Credentials);
    GetAll(filter?: string, top?: number, skip?: number): Promise<AuthorizationServer[]>;
    Get(authsid: string): Promise<AuthorizationServer>;
    GetMeta(authsid: string): Promise<number>;
    Create(authsid: string, payload: AuthorizationServer | string): Promise<any>;
    Update(authsid: string, ifMatch: string, payload: AuthorizationServer): Promise<any>;
    Delete(authsid: string, ifMatch: string): Promise<void>;
}
