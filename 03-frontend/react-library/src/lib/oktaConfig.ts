export const oktaConfig = {
    clientId: '0oagiq13kbPXjNbWT5d7',
    issuer: 'https://dev-23956884.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}