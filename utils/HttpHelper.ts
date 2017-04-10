/// <reference path="../typings/index.d.ts"/>

import * as request from "request";
import * as requestPromise from "request-promise";
import * as credentials from './Credentials';
import * as authentication from './Authentication';

export class HttpHelper {

    private readonly VERSION = '2016-07-07';
    private credentials: credentials.Credentials;

    constructor(_credentials: credentials.Credentials) {
        this.credentials = _credentials;
    }

    public Get(path: string, params?: Object, headers?: Object): requestPromise.RequestPromise {
        let options: request.CoreOptions & request.UriOptions = {
            uri: this.prepareUri(path, params),
            baseUrl: this.credentials.serviceUri,
            headers: headers
        }
        return requestPromise.get(options);
    }

    private prepareUri(path: string, params?: Object) {
        return `${path}?${this.prepareParams(params)}`;
    }

    private prepareParams(params?: Object) {
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

        let auth = new authentication.Authentication();
        headers['Authorization'] = auth.getAuthorizationHeader(this.credentials);
        return headers;
    }
}
