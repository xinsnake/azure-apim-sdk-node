import {Credentials, HttpHelper} from './utils';
import {Collection, Parameter, HttpRequest, HttpResponse} from './representation';

export class GenericEntity {
    protected httpHelper?: HttpHelper;
    protected credentials?: Credentials;

    public SetCredentials(_credentials: Credentials) {
        this.credentials = _credentials;
        this.httpHelper = new HttpHelper(this.credentials);
        return this;
    }
}

export class Api {
    public id?: string;
    public name?: string;
    public description?: string;
    public serviceUrl?: string;
    public path?: string;
    public protocols?: string[];
    public operations?: Collection<Operation>;
    public subscriptionKeyParameterNames?: any;
}

export class ImportLink {
    public link?: string;
}

export class AuthorizationServer {
    public id?: string;
    public name?: string;
    public description?: string;
    public clientRegistrationEndpoint?: string;
    public authorizationEndpoint?: string;
    public authorizationMethods?: any[];
    public clientAuthenticationMethod?: any[];
    public tokenBodyParameters?: any[];
    public tokenEndpoint?: string;
    public supportState?: boolean;
    public defaultScope?: string;
    public grantTypes?: string[];
    public bearerTokenSendingMethods?: string[];
    public clientId?: string;
    public clientSecret?: string;
    public resourceOwnerUsername?: string;
    public resourceOwnerPassword?: string;
}

export class Backend {
    public id?: string;
    public host?: string;
    public skipCertificateChainValidation?: boolean;
    public skipCertificateNameValidation?: boolean;
}

export class Certificate {
    public id?: string;
    public subject?: string;
    public thumbprint?: string;
    public expirationDate?: Date;
    public data?: string;
    public password?: string;
}

export class Group {
    public id?: string;
    public name?: string;
    public description?: string;
    public builtIn?: boolean;
    public type?: string;
    public externalId?: string;
}

export class Logger {
    public id?: string;
    public type?: string;
    public description?: string;
    public credentials?: any;
}
export class OperationSummary {
    public id?: string;
    public name?: string;
    public method?: string;
    public urlTemplate?: string;
    public description?: string;
}

export class Operation {
    public id?: string;
    public name?: string;
    public nmethod?: string;
    public urlTemplate?: string;
    public templateParameters?: Parameter[];
    public description?: string;
    public request?: HttpRequest;
    public responses?: HttpResponse[];
}

export class Product extends GenericEntity {
    public id?: string;
    public name?: string;
    public description?: string;
    public terms?: string;
    public subscriptionRequired?: boolean;
    public approvalRequired?: boolean;
    public subscriptionLimit?: number;
    public state?: string;
    public groups?: Group[];

    private readonly PATH_PRODUCTS = '/products';
    private readonly PATH_APIS = '/apis';

    public async ListApis(filter?: string, top?: number, skip?: number) {
        let params = {'$filter': filter, '$top': top, '$skip': skip};
        return await this.httpHelper.GetCollection<Api>(Api, this.id + this.PATH_APIS, params);
    }

    public async CheckApiMembership(aid: string) {
        return await this.httpHelper.Head(this.id + aid);
    }

    public async AddApi(aid: string) {
        return await this.httpHelper.Put(this.id + aid);
    }

    public async RemoveApi(aid: string) {
        return await this.httpHelper.Delete(this.id + aid);
    }
}

export class Property {
    public id?: string;
    public name?: string;
    public value?: string;
    public tags?: string[];
    public secret?: boolean;
}

export class Report {
    public name?: string;
    public timestamp?: Date;
    public interval?: string;
    public country?: string;
    public region?: string;
    public zip?: string;
    public userId?: string;
    public productId?: string;
    public apiId?: string;
    public operationId?: string;
    public apiRegion?: string;
    public subscriptionId?: string;
    public callCountSuccess?: number;
    public callCountBlocked?: number;
    public callCountFailed?: number;
    public callCountOther?: number;
    public callCountTotal?: number;
    public bandwidth?: number;
    public cacheHitCount?: number;
    public cacheMissCount?: number;
    public apiTimeAvg?: number;
    public apiTimeMin?: number;
    public apiTimeMax?: number;
    public serviceTimeAvg?: number;
    public serviceTimeMin?: number;
    public serviceTimeMax?: number;
}

export class Subscription {
    public id?: string;
    public userId?: string;
    public productId?: string;
    public name?: string;
    public state?: string;
    public createdDate?: Date;
    public startDate?: Date;
    public expirationDate?: Date;
    public endDate?: Date;
    public notificationDate?: Date;
    public primaryKey?: string;
    public secondaryKey?: string;
    public stateComment?: string;
}

export class User {
    public id?: string;
    public firstName?: string;
    public lastName?: string;
    public password?: string;
    public email?: string;
    public state?: string;
    public registrationDate?: Date;
    public note?: string;
    public groups?: Collection<Group>;
}