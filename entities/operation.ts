/// <reference path="../reference.ts"/>

class Operation {
    public id: string;
    public name: string;
    public nmethod: string;
    public urlTemplate: string;
    public templateParameters: Parameter[];
    public description: string;
    public request: HttpRequest;
    public responses: HttpResponse[];
}