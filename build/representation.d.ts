export declare class Collection<T> {
    nextLink?: string;
    count?: number;
    value?: T[];
}
export declare class Parameter {
    name: string;
    description: string;
    type: string;
    defaultValue: string;
    required: boolean;
    values: string[];
}
export declare class Representation {
    contentType: string;
    sample: string;
}
export declare class HttpRequest {
    description: string;
    queryParameters: Parameter[];
    headers: Parameter[];
    representations: Representation[];
}
export declare class HttpResponse {
    statusCode: number;
    description: string;
    representations: Representation[];
}
export declare class BaseError {
    error: ErrorBody;
}
export declare class ErrorBody {
    code: string;
    message: string;
    details: ErrorDetail;
}
export declare class ErrorDetail {
    code: string;
    message: string;
    target: string;
}
export declare class OAuth2AuthenticationSettings {
    authorizationServerId: string;
    scope: string;
}
