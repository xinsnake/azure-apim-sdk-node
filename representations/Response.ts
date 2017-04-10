import * as r from "./Representation";

export class HttpResponse {
    public statusCode: number;
    public description: string;
    public representations: r.Representation[];
}