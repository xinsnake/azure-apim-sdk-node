import { Collection } from '../representations/Collection';
import { Operation } from '../entities/Operation';
export declare class Api {
    id: string;
    name: string;
    description: string;
    serviceUrl: string;
    path: string;
    protocols: string[];
    operations: Collection<Operation>;
}
