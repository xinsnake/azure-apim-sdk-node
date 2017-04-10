/// <reference path="../reference.ts"/>

class AuthorizationServer {
    public id: string;
    public name: string;
    public description: string;
    public clientRegistrationEndpoint: string;
    public authorizationEndpoint: string;
    public authorizationMethods: any[];
    public clientAuthenticationMethod: any[];
    public tokenBodyParameters: any[];
    public tokenEndpoint: string;
    public supportState: boolean;
    public defaultScope: string;
    public grantTypes: string[];
    public bearerTokenSendingMethods: string[];
    public clientId: string;
    public clientSecret: string;
    public resourceOwnerUsername: string;
    public resourceOwnerPassword: string;
}