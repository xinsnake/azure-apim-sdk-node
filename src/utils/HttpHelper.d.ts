/// <reference path="../typings/index.d.ts" />
import { Credentials } from './Credentials';
export declare class HttpHelper {
    private readonly VERSION;
    private credentials;
    constructor(_credentials: Credentials);
    Get<T>(path: string, params?: any, headers?: any): Promise<T>;
    private prepareUri(path, params?);
    private prepareParams(params?);
    private prepareHeaders(headers?);
}
