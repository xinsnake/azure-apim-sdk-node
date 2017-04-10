import {Parameter} from "../representations/Parameter";
import {HttpRequest} from "../representations/HttpRequest";
import {HttpResponse} from "../representations/HttpResponse";

export class Operation {
    public id: string;
    public name: string;
    public nmethod: string;
    public urlTemplate: string;
    public templateParameters: Parameter[];
    public description: string;
    public request: HttpRequest;
    public responses: HttpResponse[];
}