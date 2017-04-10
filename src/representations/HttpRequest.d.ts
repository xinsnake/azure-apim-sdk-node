import { Parameter } from "./Parameter";
import { Representation } from "./Representation";
export declare class HttpRequest {
    description: string;
    queryParameters: Parameter[];
    headers: Parameter[];
    representations: Representation[];
}
