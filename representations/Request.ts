import * as p from "./Parameter";
import * as r from "./Representation";

export class HttpRequest {
    public description: string;
    public queryParameters: p.Parameter[];
    public headers: p.Parameter[];
    public representations: r.Representation[];
}