# Oauth2 Credentials Generator

## Description
A small, cryptographically secure library, with ***zero*** dependencies, for generating [***client_id***](https://tools.ietf.org/html/rfc6749#appendix-A.1) and [***client_secret***](https://tools.ietf.org/html/rfc6749#appendix-A.2) for your oauth2 application.

## Installation
`npm i jeremyhamm/oauth2-credentials-generator`

## Useage

#### Client Id
```
const credentials = require('oauth2-credentials-generator');
const client_id = credentials.clientId();
```

#### Client Id with optional name

This will append `name + _` to the returned client id.  Useful if creating client ids for multiple clients.
```
const credentials = require('oauth2-credentials-generator');
const client_id = credentials.clientId('name');
```

#### Client Secret
```
const credentials = require('oauth2-credentials-generator');
const client_secret = credentials.clientSecret();
```
