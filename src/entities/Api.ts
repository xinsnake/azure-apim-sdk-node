import {Collection} from '../representations/Collection';
import {Operation} from '../entities/Operation';

export class Api {
    public id: string;
    public name: string;
    public description: string;
    public serviceUrl: string;
    public path: string;
    public protocols: string[];
    public operations: Collection<Operation>;
}