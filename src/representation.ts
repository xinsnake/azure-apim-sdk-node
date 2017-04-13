export class Collection<T> {
    public nextLink?: string;
    public count?: number;
    public value?: T[];
}

export class Parameter {
    public name: string;
    public description: string;
    public type: string;
    public defaultValue: string;
    public required: boolean;
    public values: string[];
}

export class Representation {
    public contentType: string;
    public sample: string;
}

export class HttpRequest {
    public description: string;
    public queryParameters: Parameter[];
    public headers: Parameter[];
    public representations: Representation[];
}

export class HttpResponse {
    public statusCode: number;
    public description: string;
    public representations: Representation[];
}

export class BaseError {
    public error: ErrorBody;
}

export class ErrorBody {
    public code: string;
    public message: string;
    public details: ErrorDetail;
}

export class ErrorDetail {
    public code: string;
    public message: string;
    public target: string;
}

export class OAuth2AuthenticationSettings {
    public authorizationServerId: string;
    public scope: string;
}