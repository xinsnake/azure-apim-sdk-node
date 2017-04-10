export declare class AuthorizationServer {
    id: string;
    name: string;
    description: string;
    clientRegistrationEndpoint: string;
    authorizationEndpoint: string;
    authorizationMethods: any[];
    clientAuthenticationMethod: any[];
    tokenBodyParameters: any[];
    tokenEndpoint: string;
    supportState: boolean;
    defaultScope: string;
    grantTypes: string[];
    bearerTokenSendingMethods: string[];
    clientId: string;
    clientSecret: string;
    resourceOwnerUsername: string;
    resourceOwnerPassword: string;
}
