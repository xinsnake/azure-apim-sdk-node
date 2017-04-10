/// <reference path="../reference.ts"/>

class Api {
    public id: string;
    public name: string;
    public description: string;
    public serviceUrl: string;
    public path: string;
    public protocols: string[];
    public operations: Collection<Operation>;
}