/// <reference path="../reference.ts"/>

class HttpRequest {
    public description: string;
    public queryParameters: Parameter[];
    public headers: Parameter[];
    public representations: Representation[];
}