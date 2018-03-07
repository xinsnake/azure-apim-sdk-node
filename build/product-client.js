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
class ProductClient {
    constructor(_credentials) {
        this.PATH_PRODUCTS = '/products';
        this.credentials = _credentials;
        this.httpHelper = new utils_1.HttpHelper(this.credentials);
    }
    GetAll(filter, top, skip, expandGroups) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { '$filter': filter, '$top': top, '$skip': skip, 'expandGroups': expandGroups };
            let products = yield this.httpHelper.GetCollection(entities_1.Product, this.PATH_PRODUCTS, params);
            products.forEach((product) => {
                product.SetCredentials(this.credentials);
            });
            return products;
        });
    }
    Get(pid) {
        return __awaiter(this, void 0, void 0, function* () {
            let product = yield this.httpHelper.Get(entities_1.Product, pid);
            return product.SetCredentials(this.credentials);
        });
    }
    GetMeta(pid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Head(pid);
        });
    }
    Create(pid, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpHelper.Put(pid, undefined, undefined, payload);
        });
    }
    Update(pid, ifMatch, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let headers = { 'If-Match': ifMatch };
            return yield this.httpHelper.Patch(pid, undefined, headers, payload);
        });
    }
    Delete(pid, deleteSubscriptions, ifMatch) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { 'deleteSubscriptions': deleteSubscriptions };
            let headers = { 'If-Match': ifMatch };
            return yield this.httpHelper.Delete(pid, params, headers);
        });
    }
}
exports.ProductClient = ProductClient;
