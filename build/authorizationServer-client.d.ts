import { AuthorizationServer } from './entities';
import { Credentials } from './utils';
export declare class AuthorizationServerClient {
    private readonly PATH_AUTHORIZATION_SERVERS;
    private credentials;
    private httpHelper;
    constructor(_credentials: Credentials);
    GetAll(filter?: string, top?: number, skip?: number): Promise<AuthorizationServer[]>;
    Get(authsid: string): Promise<AuthorizationServer>;
    GetMeta(authsid: string): Promise<string>;
    Create(authsid: string, payload: AuthorizationServer | string): Promise<void>;
    Update(authsid: string, ifMatch: string, payload: AuthorizationServer): Promise<void>;
    Delete(authsid: string, ifMatch: string): Promise<void>;
}
