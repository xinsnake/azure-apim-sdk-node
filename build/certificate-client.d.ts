import { Certificate } from './entities';
import { Credentials } from './utils';
export declare class CertificateClient {
    private readonly PATH_CERTIFICATES;
    private credentials;
    private httpHelper;
    constructor(_credentials: Credentials);
    GetAll(filter?: string, top?: number, skip?: number): Promise<Certificate[]>;
    Get(cid: string): Promise<Certificate>;
    GetMeta(cid: string): Promise<number>;
    Upsert(cid: string, ifMatch: string, payload: Certificate): Promise<any>;
    Delete(cid: string, ifMatch: string): Promise<void>;
}
