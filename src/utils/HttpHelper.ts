/// <reference path="../../typings/index.d.ts"/>

import * as request from "request";
import * as requestp from "request-promise-native";
import {Credentials} from './Credentials';
import {Authentication} from './Authentication';

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
