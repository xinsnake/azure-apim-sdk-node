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
const entities_1 = require("./entities");
const utils_1 = require("./utils");
class SubscriptionClient {
    constructor(_credentials) {
        this.PATH_SUBSCRIPTIONS = '/subscriptions';
        this.credentials = _credentials;
        this.httpHelper = new utils_1.HttpHelper(this.credentials);
    }
    GetAll(filter, top, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { '$filter': filter, '$top': top, '$skip': skip };
            return yield this.httpHelper.GetCollection(entities_1.Subscription, this.PATH_SUBSCRIPTIONS, params);
        });
    }
    Get(sid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Get(entities_1.Subscription, sid);
        });
    }
    GetMeta(sid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Head(sid);
        });
    }
    Create(sid, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Put(sid, undefined, undefined, payload);
        });
    }
    Update(sid, ifMatch, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let headers = { 'If-Match': ifMatch };
            return yield this.httpHelper.Patch(sid, undefined, headers, payload);
        });
    }
    Delete(sid, ifMatch) {
        return __awaiter(this, void 0, void 0, function* () {
            let headers = { 'If-Match': ifMatch };
            return yield this.httpHelper.Delete(sid, undefined, headers);
        });
    }
}
exports.SubscriptionClient = SubscriptionClient;
