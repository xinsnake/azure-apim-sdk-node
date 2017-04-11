"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const requestp = require("request-promise-native");
class Authentication {
    constructor() {
        this.TIME_TO_EXPIRE = 3600 * 1000;
    }
    getAuthorizationHeader(_credentials) {
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
    generateSignature(expireTimeISOString) {
        this.hmac = crypto.createHmac('sha512', this.credentials.key);
        let strToSign = `${this.credentials.identifier}\n${expireTimeISOString}`;
        this.hmac.update(strToSign);
        return this.hmac.digest('base64');
    }
}
exports.Authentication = Authentication;
class Credentials {
    constructor(_serviceUri, _identifier, _key) {
        this.serviceUri = _serviceUri;
        this.identifier = _identifier;
        this.key = _key;
    }
}
exports.Credentials = Credentials;
class HttpHelper {
    constructor(_credentials) {
        this.VERSION = '2016-07-07';
        this.credentials = _credentials;
    }
    Get(path, params, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            let options = {
                uri: this.prepareUri(path, params),
                baseUrl: this.credentials.serviceUri,
                headers: this.prepareHeaders(headers)
            };
            return requestp.get(options);
        });
    }
    prepareUri(path, params) {
        return `${path}?${this.prepareParams(params)}`;
    }
    prepareParams(params) {
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
    prepareHeaders(headers) {
        if (typeof headers === 'object') {
            headers = {};
        }
        let auth = new Authentication();
        headers['Authorization'] = auth.getAuthorizationHeader(this.credentials);
        return headers;
    }
}
exports.HttpHelper = HttpHelper;
