import em = require('./entities');
export declare const Api: typeof em.Api;
export declare const AuthorizationServer: typeof em.AuthorizationServer;
export declare const Backend: typeof em.Backend;
export declare const Certificate: typeof em.Certificate;
export declare const Group: typeof em.Group;
export declare const Logger: typeof em.Logger;
export declare const OperationSummary: typeof em.OperationSummary;
export declare const Operation: typeof em.Operation;
export declare const Product: typeof em.Product;
export declare const Property: typeof em.Property;
export declare const Report: typeof em.Report;
export declare const Subscription: typeof em.Subscription;
export declare const User: typeof em.User;
import acm = require('./api-client');
export declare const ApiClient: typeof acm.ApiClient;
import ascm = require('./authorizationServer-client');
export declare const AuthorizationServerClient: typeof ascm.AuthorizationServerClient;
import bcm = require('./backend-client');
export declare const BackendClient: typeof bcm.BackendClient;
import ccm = require('./certificate-client');
export declare const CertificateClient: typeof ccm.CertificateClient;
import gcm = require('./group-client');
export declare const GroupClient: typeof gcm.GroupClient;
import lcm = require('./logger-client');
export declare const LoggerClient: typeof lcm.LoggerClient;
import prodcm = require('./product-client');
export declare const ProductClient: typeof prodcm.ProductClient;
import propcm = require('./property-client');
export declare const PropertyClient: typeof propcm.PropertyClient;
import scm = require('./subscription-client');
export declare const SubscriptionClient: typeof scm.SubscriptionClient;
import ucm = require('./user-client');
export declare const UserClient: typeof ucm.UserClient;
import um = require('./utils');
export declare const Credentials: typeof um.Credentials;
