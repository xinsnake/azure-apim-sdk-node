export declare class Report {
    name: string;
    timestamp: Date;
    interval: string;
    country: string;
    region: string;
    zip: string;
    userId: string;
    productId: string;
    apiId: string;
    operationId: string;
    apiRegion: string;
    subscriptionId: string;
    callCountSuccess: number;
    callCountBlocked: number;
    callCountFailed: number;
    callCountOther: number;
    callCountTotal: number;
    bandwidth: number;
    cacheHitCount: number;
    cacheMissCount: number;
    apiTimeAvg: number;
    apiTimeMin: number;
    apiTimeMax: number;
    serviceTimeAvg: number;
    serviceTimeMin: number;
    serviceTimeMax: number;
}
