import {Representation} from "./Representation";

export class HttpResponse {
    public statusCode: number;
    public description: string;
    public representations: Representation[];
}