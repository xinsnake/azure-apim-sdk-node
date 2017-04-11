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
class ApiClient {
    constructor(_credentials) {
        this.PATH_APIS = '/apis';
        this.PATH_OPERATIONS = '/operations';
        this.credentials = _credentials;
        this.httpHelper = new utils_1.HttpHelper(this.credentials);
    }
    GetAll(filter, top, skip) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { '$filter': filter, '$top': top, '$skip': skip };
            return yield this.httpHelper.Get(this.PATH_APIS, params);
        });
    }
    Get(aid, accept, isExport) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { 'export': isExport };
            let headers = { 'Accept': accept };
            return yield this.httpHelper.Get(aid, params, headers);
        });
    }
    GetMeta(aid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Head(aid);
        });
    }
    CreateOrImport(aid, contentType, isImport, path, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { 'import': isImport, 'path': path };
            let headers = { 'Content-Type': contentType };
            return yield this.httpHelper.Put(aid, params, headers, payload);
        });
    }
    UpdateViaImport(aid, ifMatch, contentType, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let headers = { 'If-Match': ifMatch, 'Content-Type': contentType };
            return yield this.httpHelper.Put(aid, undefined, headers, payload);
        });
    }
    Update(aid, ifMatch, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let headers = { 'If-Match': ifMatch };
            return yield this.httpHelper.Patch(aid, undefined, headers, payload);
        });
    }
    Delete(aid, ifMatch) {
        return __awaiter(this, void 0, void 0, function* () {
            let headers = { 'If-Match': ifMatch };
            return yield this.httpHelper.Delete(aid, undefined, headers);
        });
    }
}
exports.ApiClient = ApiClient;
