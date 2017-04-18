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
    GetCollection<T>(type: {
        new (): T;
    }, path: string, params?: any, headers?: any): Promise<T[]>;
    Get<T>(type: {
        new (): T;
    }, path: string, params?: any, headers?: any): Promise<T>;
    Head(path: string): Promise<string>;
    Put(path: string, params?: any, headers?: any, payload?: any): Promise<void>;
    Patch(path: string, params?: any, headers?: any, payload?: any): Promise<void>;
    Delete(path: string, params?: any, headers?: any): Promise<void>;
    private prepareUri(path, params?);
    private prepareParams(params?);
    private prepareHeaders(headers?);
}
export declare class ObjectFactory {
    static Create<T>(type: {
        new (): T;
    }): T;
}
