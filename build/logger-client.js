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
class LoggerClient {
    constructor(_credentials) {
        this.PATH_LOGGERS = '/loggers';
        this.credentials = _credentials;
        this.httpHelper = new utils_1.HttpHelper(this.credentials);
    }
    GetAll(filter, top, skip, expandGroups) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { '$filter': filter, '$top': top, '$skip': skip, 'expandGroups': expandGroups };
            return yield this.httpHelper.Get(this.PATH_LOGGERS, params);
        });
    }
    Get(loggerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Get(loggerId);
        });
    }
    GetMeta(loggerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Head(loggerId);
        });
    }
    Create(loggerId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Put(loggerId, undefined, undefined, payload);
        });
    }
    Update(loggerId, ifMatch, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let headers = { 'If-Match': ifMatch };
            return yield this.httpHelper.Patch(loggerId, undefined, headers, payload);
        });
    }
    Delete(loggerId, deleteSubscriptions, ifMatch) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { 'deleteSubscriptions': deleteSubscriptions };
            let headers = { 'If-Match': ifMatch };
            return yield this.httpHelper.Delete(loggerId, params, headers);
        });
    }
}
exports.LoggerClient = LoggerClient;
