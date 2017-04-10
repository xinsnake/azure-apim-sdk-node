import {Parameter} from "./Parameter";
import {Representation} from "./Representation";

export class HttpRequest {
    public description: string;
    public queryParameters: Parameter[];
    public headers: Parameter[];
    public representations: Representation[];
}