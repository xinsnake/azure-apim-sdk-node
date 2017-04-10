/// <reference path="../typings/index.d.ts" />
import { Credentials } from './Credentials';
export declare class Authentication {
    private readonly TIME_TO_EXPIRE;
    private credentials;
    private expireTime;
    private hmac;
    private headerCache;
    getAuthorizationHeader(_credentials: Credentials): string;
    private generateSignature(expireTimeISOString);
}
