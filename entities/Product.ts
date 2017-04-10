import * as g from "./Group";

export class Product {
    public id: string;
    public name: string;
    public description: string;
    public terms: string;
    public subscriptionRequired: boolean;
    public approvalRequired: boolean;
    public subscriptionLimit: number;
    public state: string;
    public groups: g.Group[];
}