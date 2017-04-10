import * as c from '../representations/Collection';
import * as o from '../entities/Operation';

export class Api {
    public id: string;
    public name: string;
    public description: string;
    public serviceUrl: string;
    public path: string;
    public protocols: string[];
    public operations: c.Collection<o.Operation>;
}