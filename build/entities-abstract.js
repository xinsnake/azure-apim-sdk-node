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
class PolicyEntity extends GenericEntity {
    constructor() {
        super(...arguments);
        this.PATH_POLICY = '/policy';
    }
    GetPolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {};
            let headers = { 'Content-Type': 'application/vnd.ms-azure-apim.policy+xml' };
            return yield this.httpHelper.Get(String, this.id + this.PATH_POLICY, params, headers, true);
        });
    }
    CheckPolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Head(this.id + this.PATH_POLICY);
        });
    }
    SetPolicy(ifMatch, rawXml, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {};
            let contentType;
            if (rawXml) {
                contentType = 'application/vnd.ms-azure-apim.policy.raw+xml';
            }
            else {
                contentType = 'application/vnd.ms-azure-apim.policy+xml';
            }
            let headers = { 'If-Match': ifMatch, 'Content-Type': contentType };
            return yield this.httpHelper.Put(this.id + this.PATH_POLICY, params, headers, payload, true);
        });
    }
    RemovePolicy(ifMatch) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {};
            let headers = { 'If-Match': ifMatch };
            return yield this.httpHelper.Delete(this.id + this.PATH_POLICY, params, headers);
        });
    }
}
exports.PolicyEntity = PolicyEntity;
