/*
 * Entities
 */
import em = require('./entities');
// export const GenericEntity = em.GenericEntity;
export const Api = em.Api;
export const ImportLink = em.ImportLink;
export const AuthorizationServer = em.AuthorizationServer;
export const Backend = em.Backend;
export const Certificate = em.Certificate;
export const Group = em.Group;
export const Logger = em.Logger;
export const OperationSummary = em.OperationSummary;
export const Operation = em.Operation;
export const Product = em.Product;
export const Property = em.Property;
export const Report = em.Report;
export const Subscription = em.Subscription;
export const User = em.User;

/*
 * Clients
 */
import acm = require('./clients/api-client');
export const ApiClient = acm.ApiClient;

import ascm = require('./clients/authorizationServer-client');
export const AuthorizationServerClient = ascm.AuthorizationServerClient;

import bcm = require('./clients/backend-client');
export const BackendClient = bcm.BackendClient;

import ccm = require('./clients/certificate-client');
export const CertificateClient = ccm.CertificateClient;

import gcm = require('./clients/group-client');
export const GroupClient = gcm.GroupClient;

import lcm = require('./clients/logger-client');
export const LoggerClient = lcm.LoggerClient;

import prodcm = require('./clients/product-client');
export const ProductClient = prodcm.ProductClient;

import propcm = require('./clients/property-client');
export const PropertyClient = propcm.PropertyClient;

import scm = require('./clients/subscription-client');
export const SubscriptionClient = scm.SubscriptionClient;

import ucm = require('./clients/user-client');
export const UserClient = ucm.UserClient;

/*
 * Representations
 */
import rm = require('./representation');

/*
 * Utils
 */
import um = require('./utils');
export const Credentials = um.Credentials;

