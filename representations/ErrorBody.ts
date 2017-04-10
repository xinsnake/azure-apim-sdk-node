import * as ed from "./ErrorDetail";

export class ErrorBody {
    public code: string;
    public message: string;
    public details: ed.ErrorDetail;
}