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
class CertificateClient {
    constructor(_credentials) {
        this.PATH_CERTIFICATES = '/certificates';
        this.credentials = _credentials;
        this.httpHelper = new utils_1.HttpHelper(this.credentials);
    }
    GetAll(filter, top, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { '$filter': filter, '$top': top, '$skip': skip };
            return yield this.httpHelper.GetCollection(entities_1.Certificate, this.PATH_CERTIFICATES, params);
        });
    }
    Get(cid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Get(entities_1.Certificate, cid);
        });
    }
    GetMeta(cid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Head(cid);
        });
    }
    Upsert(cid, ifMatch, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let headers = { 'If-Match': ifMatch };
            return yield this.httpHelper.Patch(cid, undefined, headers, payload);
        });
    }
    Delete(cid, ifMatch) {
        return __awaiter(this, void 0, void 0, function* () {
            let headers = { 'If-Match': ifMatch };
            return yield this.httpHelper.Delete(cid, undefined, headers);
        });
    }
}
exports.CertificateClient = CertificateClient;
