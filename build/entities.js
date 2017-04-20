"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class GenericEntity {
    SetCredentials(_credentials) {
        this.credentials = _credentials;
        this.httpHelper = new utils_1.HttpHelper(this.credentials);
        return this;
    }
}
exports.GenericEntity = GenericEntity;
class Api {
}
exports.Api = Api;
class ImportLink {
}
exports.ImportLink = ImportLink;
class AuthorizationServer {
}
exports.AuthorizationServer = AuthorizationServer;
class Backend {
}
exports.Backend = Backend;
class Certificate {
}
exports.Certificate = Certificate;
class Group extends GenericEntity {
    constructor() {
        super(...arguments);
        this.PATH_USERS = '/users';
    }
    ListUsers(filter, top, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { '$filter': filter, '$top': top, '$skip': skip };
            return yield this.httpHelper.GetCollection(User, this.id + this.PATH_USERS, params);
        });
    }
    AddUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Put(this.id + uid);
        });
    }
    RemoveUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Delete(this.id + uid);
        });
    }
    CheckUserMembership(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Head(this.id + uid);
        });
    }
}
exports.Group = Group;
class Logger {
}
exports.Logger = Logger;
class OperationSummary {
}
exports.OperationSummary = OperationSummary;
class Operation {
}
exports.Operation = Operation;
class Product extends GenericEntity {
    constructor() {
        super(...arguments);
        this.PATH_APIS = '/apis';
    }
    ListApis(filter, top, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { '$filter': filter, '$top': top, '$skip': skip };
            return yield this.httpHelper.GetCollection(Api, this.id + this.PATH_APIS, params);
        });
    }
    CheckApiMembership(aid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Head(this.id + aid);
        });
    }
    AddApi(aid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Put(this.id + aid);
        });
    }
    RemoveApi(aid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Delete(this.id + aid);
        });
    }
}
exports.Product = Product;
class Property {
}
exports.Property = Property;
class Report {
}
exports.Report = Report;
class Subscription extends GenericEntity {
    RegeneratePrimaryKey() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Post(`${this.id}/regeneratePrimaryKey`);
        });
    }
    RegenerateSecondaryKey() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Post(`${this.id}/regenerateSecondaryKey`);
        });
    }
}
exports.Subscription = Subscription;
class User extends GenericEntity {
    constructor() {
        super(...arguments);
        this.PATH_GROUPS = '/groups';
        this.PATH_SUBSCRIPTIONS = '/subscriptions';
    }
    ListGroups(filter, top, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { '$filter': filter, '$top': top, '$skip': skip };
            return yield this.httpHelper.GetCollection(Group, this.id + this.PATH_GROUPS, params);
        });
    }
    ListSubscriptions(filter, top, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { '$filter': filter, '$top': top, '$skip': skip };
            return yield this.httpHelper.GetCollection(Subscription, this.id + this.PATH_SUBSCRIPTIONS, params);
        });
    }
    GettSingleSignOnUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Post(`${this.id}/generateSsoUrl`);
        });
    }
}
exports.User = User;
