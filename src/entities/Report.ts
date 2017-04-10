export class Report {
    public name: string;
    public timestamp: Date;
    public interval: string;
    public country: string;
    public region: string;
    public zip: string;
    public userId: string;
    public productId: string;
    public apiId: string;
    public operationId: string;
    public apiRegion: string;
    public subscriptionId: string;
    public callCountSuccess: number;
    public callCountBlocked: number;
    public callCountFailed: number;
    public callCountOther: number;
    public callCountTotal: number;
    public bandwidth: number;
    public cacheHitCount: number;
    public cacheMissCount: number;
    public apiTimeAvg: number;
    public apiTimeMin: number;
    public apiTimeMax: number;
    public serviceTimeAvg: number;
    public serviceTimeMin: number;
    public serviceTimeMax: number;
}