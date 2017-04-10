import * as p from "../representations/Parameter";
import * as req from "../representations/Request";
import * as res from "../representations/Response";

export class Operation {
    public id: string;
    public name: string;
    public nmethod: string;
    public urlTemplate: string;
    public templateParameters: p.Parameter[];
    public description: string;
    public request: req.HttpRequest;
    public responses: res.HttpResponse[];
}