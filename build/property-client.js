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
class PropertyClient {
    constructor(_credentials) {
        this.PATH_PROPERTIES = '/properties';
        this.credentials = _credentials;
        this.httpHelper = new utils_1.HttpHelper(this.credentials);
    }
    GetAll(filter, top, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { '$filter': filter, '$top': top, '$skip': skip };
            return yield this.httpHelper.Get(this.PATH_PROPERTIES, params);
        });
    }
    Get(propId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Get(propId);
        });
    }
    GetMeta(propId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Head(propId);
        });
    }
    Create(propId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Put(propId, undefined, undefined, payload);
        });
    }
    Update(propId, ifMatch, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let headers = { 'If-Match': ifMatch };
            return yield this.httpHelper.Patch(propId, undefined, headers, payload);
        });
    }
    Delete(propId, ifMatch) {
        return __awaiter(this, void 0, void 0, function* () {
            let headers = { 'If-Match': ifMatch };
            return yield this.httpHelper.Delete(propId, undefined, headers);
        });
    }
}
exports.PropertyClient = PropertyClient;
