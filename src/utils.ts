/// <reference path="../typings/index.d.ts"/>

import * as crypto from 'crypto';
import * as request from "request";
import * as requestp from "request-promise-native";

export class Authentication {

    private readonly TIME_TO_EXPIRE = 3600 * 1000;
    private credentials: Credentials;
    private expireTime: Date;
    private hmac: crypto.Hmac;
    private headerCache: string;

    public getAuthorizationHeader(_credentials: Credentials): string {
        this.credentials = _credentials;

        let currentTime = new Date();

        if (currentTime < this.expireTime) {
            return this.headerCache;
        }

        let expireTime = new Date(currentTime.getTime() + this.TIME_TO_EXPIRE);
        let expireTimeISOString = expireTime.toISOString().replace('Z', '0000Z');
        let signature = this.generateSignature(expireTimeISOString);
        
        this.expireTime = expireTime;
        this.headerCache = `SharedAccessSignature uid=${this.credentials.identifier}` +
            `&ex=${expireTimeISOString}&sn=${signature}`;
        
        return this.headerCache;
    }

    private generateSignature(expireTimeISOString: string): string {
        this.hmac = crypto.createHmac('sha512', this.credentials.key);
        let strToSign = `${this.credentials.identifier}\n${expireTimeISOString}`;
        this.hmac.update(strToSign);
        return this.hmac.digest('base64');
    }
}
export class Credentials {

    public serviceUri: string;
    public identifier: string;
    public key: string;

    constructor(_serviceUri: string, _identifier: string, _key: string) {
        this.serviceUri = _serviceUri;
        this.identifier = _identifier;
        this.key = _key;
    }
}

export class HttpHelper {

    private readonly VERSION = '2016-07-07';
    private credentials: Credentials;

    constructor(_credentials: Credentials) {
        this.credentials = _credentials;
    }

    public async Get<T>(path: string, params?: any, headers?: any): Promise<T> {
        let options: request.CoreOptions & request.UriOptions = {
            uri: this.prepareUri(path, params),
            baseUrl: this.credentials.serviceUri,
            headers: headers
        }
        return requestp.get(options);
    }

    private prepareUri(path: string, params?: any) {
        return `${path}?${this.prepareParams(params)}`;
    }

    private prepareParams(params?: any) {
        if (typeof params !== 'object') {
            params = {};
        }
        params['api-version'] = this.VERSION;

        let paramString = "";
        for (let key in params) {
            if (paramString != "") {
                paramString += "&";
            }
            paramString += key + "=" + encodeURIComponent(params[key]);
        }
        return paramString;
    }

    private prepareHeaders(headers?: any) {
        if (typeof headers === 'object') {
            headers = {};
        }

        let auth = new Authentication();
        headers['Authorization'] = auth.getAuthorizationHeader(this.credentials);
        return headers;
    }
}