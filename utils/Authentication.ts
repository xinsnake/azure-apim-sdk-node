/// <reference path="../typings/index.d.ts"/>

import * as crypto from 'crypto';
import {Credentials} from './Credentials';

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
