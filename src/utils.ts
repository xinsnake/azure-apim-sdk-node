import {Collection} from './representation';
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

    private readonly VERSION = '2016-10-10';
    private credentials: Credentials;

    constructor(_credentials: Credentials) {
        this.credentials = _credentials;
    }

    public async GetCollection<T>(type: {new(): T}, path: string, params?: any, headers?: any): Promise<T[]> {
        let options: request.CoreOptions & request.UriOptions = {
            uri: this.prepareUri(path, params),
            baseUrl: this.credentials.serviceUri,
            headers: this.prepareHeaders(headers)
        };
        return requestp.get(options).then<T[]>((value) => {
            // TODO deal with multiple pages
            let objs = JSON.parse(value) as Collection<T>;
            let responses: T[] = [];
            for (let i = 0; i < objs.value.length; i++) {
                let c = new type();
                responses.push(Object.assign(c, objs.value[i]));
            }
            return responses;
        });
    }

    public async Get<T>(type: {new(): T}, path: string, params?: any, headers?: any, raw?: boolean): Promise<T> {
        let options: request.CoreOptions & request.UriOptions = {
            uri: this.prepareUri(path, params),
            baseUrl: this.credentials.serviceUri,
            headers: this.prepareHeaders(headers)
        };
        return requestp.get(options).then<T>((value) => {
            if (raw) {
                return value;
            }
            let c = new type();
            let obj = JSON.parse(value);
            return Object.assign(c, obj);
        });
    }

    public async Head(path: string): Promise<number> {
        let options: requestp.RequestPromiseOptions & request.UriOptions = {
            uri: this.prepareUri(path),
            baseUrl: this.credentials.serviceUri,
            headers: this.prepareHeaders(),
            simple: false,
            resolveWithFullResponse: true
        };
        return requestp.head(options).then((response) => {
            return parseInt(response.statusCode);
        });
    }

    public async Post(path: string, params?: any, headers?: any, payload?: any, raw?: boolean): Promise<any> {
        if (!raw) {
            payload = JSON.stringify(payload)
        }
        let options: request.CoreOptions & request.UriOptions = {
            uri: this.prepareUri(path, params),
            baseUrl: this.credentials.serviceUri,
            headers: this.prepareHeaders(headers),
            body: payload
        };
        return requestp.post(options);
    }

    public async Put(path: string, params?: any, headers?: any, payload?: any, raw?: boolean): Promise<any> {
        if (!raw) {
            payload = JSON.stringify(payload)
        }
        let options: request.CoreOptions & request.UriOptions = {
            uri: this.prepareUri(path, params),
            baseUrl: this.credentials.serviceUri,
            headers: this.prepareHeaders(headers),
            body: payload
        };
        return requestp.put(options);
    }

    public async Patch(path: string, params?: any, headers?: any, payload?: any, raw?: boolean): Promise<any> {
        if (!raw) {
            payload = JSON.stringify(payload)
        }
        let options: request.CoreOptions & request.UriOptions = {
            uri: this.prepareUri(path, params),
            baseUrl: this.credentials.serviceUri,
            headers: this.prepareHeaders(headers),
            body: payload
        };
        return requestp.patch(options);
    }

    public async Delete(path: string, params?: any, headers?: any): Promise<void> {
        let options: request.CoreOptions & request.UriOptions = {
            uri: this.prepareUri(path, params),
            baseUrl: this.credentials.serviceUri,
            headers: this.prepareHeaders(headers)
        };
        return requestp.delete(options);
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
            if (typeof params[key] === 'undefined') {
                continue;
            }
            if (paramString != "") {
                paramString += "&";
            }
            paramString += key + "=" + encodeURIComponent(params[key]);
        }
        return paramString;
    }

    private prepareHeaders(headers?: any) {
        if (typeof headers !== 'object') {
            headers = {};
        }

        let auth = new Authentication();
        headers['Authorization'] = auth.getAuthorizationHeader(this.credentials);
        headers['Content-Type'] = headers['Content-Type'] || 'application/json';
        return headers;
    }
}