import { Collection, Parameter, HttpRequest, HttpResponse } from './representation';
export declare class Api {
    id: string;
    name: string;
    description: string;
    serviceUrl: string;
    path: string;
    protocols: string[];
    operations: Collection<Operation>;
}
export declare class AuthorizationServer {
    id: string;
    name: string;
    description: string;
    clientRegistrationEndpoint: string;
    authorizationEndpoint: string;
    authorizationMethods: any[];
    clientAuthenticationMethod: any[];
    tokenBodyParameters: any[];
    tokenEndpoint: string;
    supportState: boolean;
    defaultScope: string;
    grantTypes: string[];
    bearerTokenSendingMethods: string[];
    clientId: string;
    clientSecret: string;
    resourceOwnerUsername: string;
    resourceOwnerPassword: string;
}
export declare class Backend {
    id: string;
    host: string;
    skipCertificateChainValidation: boolean;
}
export declare class Certificate {
    id: string;
    subject: string;
    thumbprint: string;
    expirationDate: Date;
    data: string;
    password: string;
}
export declare class Group {
    id: string;
    name: string;
    description: string;
    builtIn: boolean;
    type: string;
    externalId: string;
}
export declare class Logger {
    id: string;
    type: string;
    description: string;
    credentials: {
        string: string;
    };
}
export declare class OperationSummary {
    id: string;
    name: string;
    method: string;
    urlTemplate: string;
    description: string;
}
export declare class Operation {
    id: string;
    name: string;
    nmethod: string;
    urlTemplate: string;
    templateParameters: Parameter[];
    description: string;
    request: HttpRequest;
    responses: HttpResponse[];
}
export declare class Product {
    id: string;
    name: string;
    description: string;
    terms: string;
    subscriptionRequired: boolean;
    approvalRequired: boolean;
    subscriptionLimit: number;
    state: string;
    groups: Group[];
}
export declare class Property {
    id: string;
    name: string;
    value: string;
    tags: string[];
    secret: boolean;
}
export declare class Report {
    name: string;
    timestamp: Date;
    interval: string;
    country: string;
    region: string;
    zip: string;
    userId: string;
    productId: string;
    apiId: string;
    operationId: string;
    apiRegion: string;
    subscriptionId: string;
    callCountSuccess: number;
    callCountBlocked: number;
    callCountFailed: number;
    callCountOther: number;
    callCountTotal: number;
    bandwidth: number;
    cacheHitCount: number;
    cacheMissCount: number;
    apiTimeAvg: number;
    apiTimeMin: number;
    apiTimeMax: number;
    serviceTimeAvg: number;
    serviceTimeMin: number;
    serviceTimeMax: number;
}
export declare class Subscription {
    id: string;
    userId: string;
    productId: string;
    name: string;
    state: string;
    createdDate: Date;
    startDate: Date;
    expirationDate: Date;
    endDate: Date;
    notificationDate: Date;
    primaryKey: string;
    secondaryKey: string;
    stateComment: string;
}
export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    state: string;
    registrationDate: Date;
    note: string;
    groups: Collection<Group>;
}
