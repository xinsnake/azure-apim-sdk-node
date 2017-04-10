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