import { Collection } from '../representations/Collection';
import { Group } from "./Group";
export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    state: string;
    registrationDate: Date;
    note: string;
    groups: Collection<Group>;
}
