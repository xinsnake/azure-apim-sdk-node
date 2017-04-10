import { Parameter } from "../representations/Parameter";
import { HttpRequest } from "../representations/HttpRequest";
import { HttpResponse } from "../representations/HttpResponse";
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
