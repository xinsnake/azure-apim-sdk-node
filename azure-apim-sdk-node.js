var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define("utils/Credentials", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Credentials {
        constructor(_serviceUri, _identifier, _key) {
            this.serviceUri = _serviceUri;
            this.identifier = _identifier;
            this.key = _key;
        }
    }
    exports.Credentials = Credentials;
});
define("utils/Authentication", ["require", "exports", "crypto"], function (require, exports, crypto) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Authentication {
        constructor() {
            this.TIME_TO_EXPIRE = 3600 * 1000;
        }
        getAuthorizationHeader(_credentials) {
            this.credentials = _credentials;
            let currentTime = new Date();
            if (currentTime < this.expireTime) {
                return this.headerCache;
            }
            let expireTime = new Date(currentTime.getTime() + this.TIME_TO_EXPIRE);
            let expireTimeISOString = expireTime.toISOString().replace('Z', '0000Z');
            let signature = this.generateSignature(expireTimeISOString);
            this.expireTime = expireTime;
            this.headerCache = `SharedAccessSignature uid=${this.credentials.identifier}` +
                `&ex=${expireTimeISOString}&sn=${signature}`;
            return this.headerCache;
        }
        generateSignature(expireTimeISOString) {
            this.hmac = crypto.createHmac('sha512', this.credentials.key);
            let strToSign = `${this.credentials.identifier}\n${expireTimeISOString}`;
            this.hmac.update(strToSign);
            return this.hmac.digest('base64');
        }
    }
    exports.Authentication = Authentication;
});
define("utils/HttpHelper", ["require", "exports", "request-promise-native", "utils/Authentication"], function (require, exports, requestp, Authentication_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class HttpHelper {
        constructor(_credentials) {
            this.VERSION = '2016-07-07';
            this.credentials = _credentials;
        }
        Get(path, params, headers) {
            return __awaiter(this, void 0, void 0, function* () {
                let options = {
                    uri: this.prepareUri(path, params),
                    baseUrl: this.credentials.serviceUri,
                    headers: headers
                };
                return requestp.get(options);
            });
        }
        prepareUri(path, params) {
            return `${path}?${this.prepareParams(params)}`;
        }
        prepareParams(params) {
            if (typeof params !== 'object') {
                params = {};
            }
            params['api-version'] = this.VERSION;
            let paramString = "";
            for (let key in params) {
                if (paramString != "") {
                    paramString += "&";
                }
                paramString += key + "=" + encodeURIComponent(params[key]);
            }
            return paramString;
        }
        prepareHeaders(headers) {
            if (typeof headers === 'object') {
                headers = {};
            }
            let auth = new Authentication_1.Authentication();
            headers['Authorization'] = auth.getAuthorizationHeader(this.credentials);
            return headers;
        }
    }
    exports.HttpHelper = HttpHelper;
});
define("representations/Collection", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Collection {
    }
    exports.Collection = Collection;
});
define("representations/Parameter", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Parameter {
    }
    exports.Parameter = Parameter;
});
define("representations/Representation", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Representation {
    }
    exports.Representation = Representation;
});
define("representations/HttpRequest", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class HttpRequest {
    }
    exports.HttpRequest = HttpRequest;
});
define("representations/HttpResponse", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class HttpResponse {
    }
    exports.HttpResponse = HttpResponse;
});
define("entities/Operation", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Operation {
    }
    exports.Operation = Operation;
});
define("entities/Api", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Api {
    }
    exports.Api = Api;
});
define("clients/ApiClient", ["require", "exports", "utils/HttpHelper"], function (require, exports, HttpHelper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ApiClient {
        constructor(_credentials) {
            this.PATH_APIS = '/apis';
            this.PATH_OPERATIONS = '/operations';
            this.credentials = _credentials;
            this.httpHelper = new HttpHelper_1.HttpHelper(this.credentials);
        }
        GetAll(filter, top, skip) {
            return __awaiter(this, void 0, void 0, function* () {
                let params = { $filter: filter, $top: top, $skip: skip };
                let collection = yield this.httpHelper.Get(this.PATH_APIS, params);
                return collection;
            });
        }
        Get(aid, accept, isExport) {
        }
        GetMeta(aid) {
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
});
define("entities/AuthorizationServer", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AuthorizationServer {
    }
    exports.AuthorizationServer = AuthorizationServer;
});
define("entities/Backend", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Backend {
    }
    exports.Backend = Backend;
});
define("entities/Certificate", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Certificate {
    }
    exports.Certificate = Certificate;
});
define("entities/Group", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Group {
    }
    exports.Group = Group;
});
define("entities/Logger", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Logger {
    }
    exports.Logger = Logger;
});
define("entities/OperationSummary", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class OperationSummary {
    }
    exports.OperationSummary = OperationSummary;
});
define("entities/Product", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Product {
    }
    exports.Product = Product;
});
define("entities/Property", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Property {
    }
    exports.Property = Property;
});
define("entities/Report", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Report {
    }
    exports.Report = Report;
});
define("entities/Subscription", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Subscription {
    }
    exports.Subscription = Subscription;
});
define("entities/User", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class User {
    }
    exports.User = User;
});
define("representations/ErrorDetail", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ErrorDetail {
    }
    exports.ErrorDetail = ErrorDetail;
});
define("representations/ErrorBody", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ErrorBody {
    }
    exports.ErrorBody = ErrorBody;
});
define("representations/BaseError", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BaseError {
    }
    exports.BaseError = BaseError;
});
define("representations/OAuth2AuthenticationSettings", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class OAuth2AuthenticationSettings {
    }
    exports.OAuth2AuthenticationSettings = OAuth2AuthenticationSettings;
});
//# sourceMappingURL=azure-apim-sdk-node.js.map