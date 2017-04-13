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
class BackendClient {
    constructor(_credentials) {
        this.PATH_BACKENDS = '/backends';
        this.credentials = _credentials;
        this.httpHelper = new utils_1.HttpHelper(this.credentials);
    }
    GetAll(filter, top, skip, expandGroups) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { '$filter': filter, '$top': top, '$skip': skip, 'expandGroups': expandGroups };
            return yield this.httpHelper.Get(this.PATH_BACKENDS, params);
        });
    }
    Get(backendId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Get(backendId);
        });
    }
    GetMeta(backendId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Head(backendId);
        });
    }
    Create(backendId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Put(backendId, undefined, undefined, payload);
        });
    }
    Update(backendId, ifMatch, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let headers = { 'If-Match': ifMatch };
            return yield this.httpHelper.Patch(backendId, undefined, headers, payload);
        });
    }
    Delete(backendId, ifMatch) {
        return __awaiter(this, void 0, void 0, function* () {
            let headers = { 'If-Match': ifMatch };
            return yield this.httpHelper.Delete(backendId, undefined, headers);
        });
    }
}
exports.BackendClient = BackendClient;
