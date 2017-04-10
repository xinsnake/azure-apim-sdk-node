/// <reference path="typings/index.d.ts" />
declare module "utils/Credentials" {
    export class Credentials {
        serviceUri: string;
        identifier: string;
        key: string;
        constructor(_serviceUri: string, _identifier: string, _key: string);
    }
}
declare module "utils/Authentication" {
    import { Credentials } from "utils/Credentials";
    export class Authentication {
        private readonly TIME_TO_EXPIRE;
        private credentials;
        private expireTime;
        private hmac;
        private headerCache;
        getAuthorizationHeader(_credentials: Credentials): string;
        private generateSignature(expireTimeISOString);
    }
}
declare module "utils/HttpHelper" {
    import { Credentials } from "utils/Credentials";
    export class HttpHelper {
        private readonly VERSION;
        private credentials;
        constructor(_credentials: Credentials);
        Get<T>(path: string, params?: any, headers?: any): Promise<T>;
        private prepareUri(path, params?);
        private prepareParams(params?);
        private prepareHeaders(headers?);
    }
}
declare module "representations/Collection" {
    export class Collection<T> {
        nextLink: string;
        count: number;
        value: T[];
    }
}
declare module "representations/Parameter" {
    export class Parameter {
        name: string;
        description: string;
        type: string;
        defaultValue: string;
        required: boolean;
        values: string[];
    }
}
declare module "representations/Representation" {
    export class Representation {
        contentType: string;
        sample: string;
    }
}
declare module "representations/HttpRequest" {
    import { Parameter } from "representations/Parameter";
    import { Representation } from "representations/Representation";
    export class HttpRequest {
        description: string;
        queryParameters: Parameter[];
        headers: Parameter[];
        representations: Representation[];
    }
}
declare module "representations/HttpResponse" {
    import { Representation } from "representations/Representation";
    export class HttpResponse {
        statusCode: number;
        description: string;
        representations: Representation[];
    }
}
declare module "entities/Operation" {
    import { Parameter } from "representations/Parameter";
    import { HttpRequest } from "representations/HttpRequest";
    import { HttpResponse } from "representations/HttpResponse";
    export class Operation {
        id: string;
        name: string;
        nmethod: string;
        urlTemplate: string;
        templateParameters: Parameter[];
        description: string;
        request: HttpRequest;
        responses: HttpResponse[];
    }
}
declare module "entities/Api" {
    import { Collection } from "representations/Collection";
    import { Operation } from "entities/Operation";
    export class Api {
        id: string;
        name: string;
        description: string;
        serviceUrl: string;
        path: string;
        protocols: string[];
        operations: Collection<Operation>;
    }
}
declare module "clients/ApiClient" {
    import { Credentials } from "utils/Credentials";
    import { Api } from "entities/Api";
    import { Collection } from "representations/Collection";
    export class ApiClient {
        private readonly PATH_APIS;
        private readonly PATH_OPERATIONS;
        private credentials;
        private httpHelper;
        constructor(_credentials: Credentials);
        GetAll(filter?: string, top?: number, skip?: number): Promise<Collection<Api>>;
        Get(aid: string, accept: string, isExport: boolean): void;
        GetMeta(aid: string): void;
        CreateOrUpdate(aid: string, contentType: string, isImport: boolean, path: string, api: Api): void;
        CreateOrUpdateViaImport(aid: string, ifMatch: string, contentType: string, api: Api): void;
        Update(aid: string, ifMatch: string, api: Api): void;
        Delete(aid: string, ifMatch: string): void;
    }
}
declare module "main" {
}
declare module "entities/AuthorizationServer" {
    export class AuthorizationServer {
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
}
declare module "entities/Backend" {
    export class Backend {
        id: string;
        host: string;
        skipCertificateChainValidation: boolean;
    }
}
declare module "entities/Certificate" {
    export class Certificate {
        id: string;
        subject: string;
        thumbprint: string;
        expirationDate: Date;
        data: string;
        password: string;
    }
}
declare module "entities/Group" {
    export class Group {
        id: string;
        name: string;
        description: string;
        builtIn: boolean;
        type: string;
        externalId: string;
    }
}
declare module "entities/Logger" {
    export class Logger {
        id: string;
        type: string;
        description: string;
        credentials: {
            string: string;
        };
    }
}
declare module "entities/OperationSummary" {
    export class OperationSummary {
        id: string;
        name: string;
        method: string;
        urlTemplate: string;
        description: string;
    }
}
declare module "entities/Product" {
    import { Group } from "entities/Group";
    export class Product {
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
}
declare module "entities/Property" {
    export class Property {
        id: string;
        name: string;
        value: string;
        tags: string[];
        secret: boolean;
    }
}
declare module "entities/Report" {
    export class Report {
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
}
declare module "entities/Subscription" {
    export class Subscription {
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
}
declare module "entities/User" {
    import { Collection } from "representations/Collection";
    import { Group } from "entities/Group";
    export class User {
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
}
declare module "representations/ErrorDetail" {
    export class ErrorDetail {
        code: string;
        message: string;
        target: string;
    }
}
declare module "representations/ErrorBody" {
    import { ErrorDetail } from "representations/ErrorDetail";
    export class ErrorBody {
        code: string;
        message: string;
        details: ErrorDetail;
    }
}
declare module "representations/BaseError" {
    import { ErrorBody } from "representations/ErrorBody";
    export class BaseError {
        error: ErrorBody;
    }
}
declare module "representations/OAuth2AuthenticationSettings" {
    export class OAuth2AuthenticationSettings {
        authorizationServerId: string;
        scope: string;
    }
}
