/// <reference path="../typings/index.d.ts" />
export declare class Authentication {
    private readonly TIME_TO_EXPIRE;
    private credentials;
    private expireTime;
    private hmac;
    private headerCache;
    getAuthorizationHeader(_credentials: Credentials): string;
    private generateSignature(expireTimeISOString);
}
export declare class Credentials {
    serviceUri: string;
    identifier: string;
    key: string;
    constructor(_serviceUri: string, _identifier: string, _key: string);
}
export declare class HttpHelper {
    private readonly VERSION;
    private credentials;
    constructor(_credentials: Credentials);
    Get<T>(path: string, params?: any, headers?: any): Promise<T>;
    Head(path: string): Promise<string>;
    private prepareUri(path, params?);
    private prepareParams(params?);
    private prepareHeaders(headers?);
}
