# Sample: Avoid issuing duplicate requests with the Microsoft Graph JS SDK

This repo contains a sample app showing how to avoid issuing duplicate requests when using the [Microsoft Graph JS SDK](https://github.com/microsoftgraph/msgraph-sdk-javascript).

The sample app uses a custom [middleware](https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/master/docs/CustomMiddlewareChain.md) that facilitates keeping track of pending requests and caching completed requests. The app illustrates the usage of the middleware with loading basic information about the current user spread over two requests.

## Run the sample

- register a new Azure AD app
  - multi-tenant
  - single-page application
  - redirect URI: `http://localhost`
  - API Permissions: Microsoft Graph User.Read
  - copy the application (client) ID
- in the `env.js` file, update the `clientId` property with the ID of the Azure AD app
- using the VSCode Live Server extension start the app
