import {Collection} from '../representations/Collection';
import {Group} from "./Group";

export class User {
    public id: string;
    public firstName: string;
    public lastName: string;
    public password: string;
    public email: string;
    public state: string;
    public registrationDate: Date;
    public note: string;
    public groups: Collection<Group>;
}