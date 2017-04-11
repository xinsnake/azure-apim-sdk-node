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
            let path = this.PATH_APIS;
            let params = { $filter: filter, $top: top, $skip: skip };
            return yield this.httpHelper.Get(path, params);
        });
    }
    Get(aid, accept, isExport) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = aid;
            let params = { export: isExport };
            let headers = { Accept: accept };
            return yield this.httpHelper.Get(path, params, headers);
        });
    }
    GetMeta(aid) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = aid;
            return yield this.httpHelper.Head(path);
        });
    }
    CreateOrUpdate(aid, contentType, isImport, path, api) {
    }
    CreateOrUpdateViaImport(aid, ifMatch, contentType, api) {
    }
    Update(aid, ifMatch, api) {
    }
    Delete(aid, ifMatch) {
    }
}
exports.ApiClient = ApiClient;
