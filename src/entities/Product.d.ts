import { Group } from "./Group";
export declare class Product {
    id: string;
    name: string;
    description: string;
    terms: string;
    subscriptionRequired: boolean;
    approvalRequired: boolean;
    subscriptionLimit: number;
    state: string;
    groups: Group[];
}
