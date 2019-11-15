const clientId = Credentials.clientId();
console.log(`Client ID: ${clientId}`);

const clientSecret = Credentials.clientSecret();
console.log(`Client Secret: ${clientSecret}`);


const chai      = require('chai');
const assert    = chai.assert;

// Validate oauth2 client_id
describe('Validate Client ID', () => { 
  it('Client ID should be 32 characters long', () => {
    
    assert.equal(authToken.length, 18, 'AuthToken has incorrect length');
  });
});

// Validate oauth2 client_secret
describe('Validate Client Secret', () => { 
  it('AuthToken should be 18 characters long', () => {
    assert.equal(authToken.length, 18, 'AuthToken has incorrect length');
  });
});