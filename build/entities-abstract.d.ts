import { Credentials, HttpHelper } from './utils';
export interface ImportLink {
    link?: string;
}
export declare abstract class GenericEntity {
    id?: string;
    protected httpHelper?: HttpHelper;
    protected credentials?: Credentials;
    SetCredentials(_credentials: Credentials): this;
}
export declare abstract class PolicyEntity extends GenericEntity {
    protected readonly PATH_POLICY: string;
    GetPolicy(): Promise<String>;
    CheckPolicy(): Promise<number>;
    SetPolicy(ifMatch: string, rawXml: boolean, payload: string): Promise<any>;
    RemovePolicy(ifMatch: string): Promise<void>;
}
