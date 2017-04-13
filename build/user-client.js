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
class UserClient {
    constructor(_credentials) {
        this.PATH_USERS = '/users';
        this.credentials = _credentials;
        this.httpHelper = new utils_1.HttpHelper(this.credentials);
    }
    GetAll(filter, top, skip, expandGroups) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { '$filter': filter, '$top': top, '$skip': skip, 'expandGroups': expandGroups };
            return yield this.httpHelper.Get(this.PATH_USERS, params);
        });
    }
    Get(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Get(uid);
        });
    }
    GetMeta(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Head(uid);
        });
    }
    Create(uid, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Put(uid, undefined, undefined, payload);
        });
    }
    Update(uid, ifMatch, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let headers = { 'If-Match': ifMatch };
            return yield this.httpHelper.Patch(uid, undefined, headers, payload);
        });
    }
    Delete(uid, deleteSubscriptions, ifMatch) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { 'deleteSubscriptions': deleteSubscriptions };
            let headers = { 'If-Match': ifMatch };
            return yield this.httpHelper.Delete(uid, params, headers);
        });
    }
}
exports.UserClient = UserClient;
