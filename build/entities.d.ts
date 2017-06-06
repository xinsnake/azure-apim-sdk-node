import { Credentials, HttpHelper } from './utils';
import { Collection, Parameter, HttpRequest, HttpResponse } from './representation';
export declare class GenericEntity {
    id?: string;
    protected httpHelper?: HttpHelper;
    protected credentials?: Credentials;
    SetCredentials(_credentials: Credentials): this;
}
export declare class PolicyEntity extends GenericEntity {
    protected readonly PATH_POLICY: string;
    GetPolicy(): Promise<String>;
    CheckPolicy(): Promise<number>;
    SetPolicy(ifMatch: string, rawXml: boolean, payload: string): Promise<any>;
    RemovePolicy(ifMatch: string): Promise<void>;
}
export declare class Api extends PolicyEntity {
    name?: string;
    description?: string;
    serviceUrl?: string;
    path?: string;
    protocols?: string[];
    operations?: Collection<Operation>;
    subscriptionKeyParameterNames?: any;
}
export declare class ImportLink {
    link?: string;
}
export declare class AuthorizationServer {
    id?: string;
    name?: string;
    description?: string;
    clientRegistrationEndpoint?: string;
    authorizationEndpoint?: string;
    authorizationMethods?: any[];
    clientAuthenticationMethod?: any[];
    tokenBodyParameters?: any[];
    tokenEndpoint?: string;
    supportState?: boolean;
    defaultScope?: string;
    grantTypes?: string[];
    bearerTokenSendingMethods?: string[];
    clientId?: string;
    clientSecret?: string;
    resourceOwnerUsername?: string;
    resourceOwnerPassword?: string;
}
export declare class Backend {
    id?: string;
    host?: string;
    skipCertificateChainValidation?: boolean;
    skipCertificateNameValidation?: boolean;
}
export declare class Certificate {
    id?: string;
    subject?: string;
    thumbprint?: string;
    expirationDate?: Date;
    data?: string;
    password?: string;
}
export declare class Group extends GenericEntity {
    name?: string;
    description?: string;
    builtIn?: boolean;
    type?: string;
    externalId?: string;
    private readonly PATH_USERS;
    ListUsers(filter?: string, top?: number, skip?: number): Promise<User[]>;
    AddUser(uid: string): Promise<any>;
    RemoveUser(uid: string): Promise<void>;
    CheckUserMembership(uid: string): Promise<number>;
}
export declare class Logger {
    id?: string;
    type?: string;
    description?: string;
    credentials?: any;
}
export declare class OperationSummary {
    id?: string;
    name?: string;
    method?: string;
    urlTemplate?: string;
    description?: string;
}
export declare class Operation {
    id?: string;
    name?: string;
    nmethod?: string;
    urlTemplate?: string;
    templateParameters?: Parameter[];
    description?: string;
    request?: HttpRequest;
    responses?: HttpResponse[];
}
export declare class Product extends PolicyEntity {
    name?: string;
    description?: string;
    terms?: string;
    subscriptionRequired?: boolean;
    approvalRequired?: boolean;
    subscriptionLimit?: number;
    state?: string;
    groups?: Group[];
    private readonly PATH_APIS;
    ListApis(filter?: string, top?: number, skip?: number): Promise<Api[]>;
    CheckApiMembership(aid: string): Promise<number>;
    AddApi(aid: string): Promise<any>;
    RemoveApi(aid: string): Promise<void>;
}
export declare class Property {
    id?: string;
    name?: string;
    value?: string;
    tags?: string[];
    secret?: boolean;
}
export declare class Report {
    name?: string;
    timestamp?: Date;
    interval?: string;
    country?: string;
    region?: string;
    zip?: string;
    userId?: string;
    productId?: string;
    apiId?: string;
    operationId?: string;
    apiRegion?: string;
    subscriptionId?: string;
    callCountSuccess?: number;
    callCountBlocked?: number;
    callCountFailed?: number;
    callCountOther?: number;
    callCountTotal?: number;
    bandwidth?: number;
    cacheHitCount?: number;
    cacheMissCount?: number;
    apiTimeAvg?: number;
    apiTimeMin?: number;
    apiTimeMax?: number;
    serviceTimeAvg?: number;
    serviceTimeMin?: number;
    serviceTimeMax?: number;
}
export declare class Subscription extends GenericEntity {
    userId?: string;
    productId?: string;
    name?: string;
    state?: string;
    createdDate?: Date;
    startDate?: Date;
    expirationDate?: Date;
    endDate?: Date;
    notificationDate?: Date;
    primaryKey?: string;
    secondaryKey?: string;
    stateComment?: string;
    RegeneratePrimaryKey(): Promise<any>;
    RegenerateSecondaryKey(): Promise<any>;
}
export declare class User extends GenericEntity {
    firstName?: string;
    lastName?: string;
    password?: string;
    email?: string;
    state?: string;
    registrationDate?: Date;
    note?: string;
    groups?: Collection<Group>;
    private readonly PATH_GROUPS;
    private readonly PATH_SUBSCRIPTIONS;
    ListGroups(filter?: string, top?: number, skip?: number): Promise<Group[]>;
    ListSubscriptions(filter?: string, top?: number, skip?: number): Promise<Subscription[]>;
    GettSingleSignOnUrl(): Promise<any>;
}
