const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const methods = require('../src/methods');

// Validate oauth2 client_id
describe('Validate client_id', () => { 
  const clientId = methods.generateClientId();
  const name = 'test';
  const clientIdName = methods.generateClientId(name);

  // Validate client_id without name param
  describe('Validate without name', () => {
    it('client_id should be 32 characters long', () => {
      assert.lengthOf(clientId, 32, 'client_id should be 32 characters long');
      expect(clientIdName).to.be.a('string');
    });
    it('client_id without name should be type string', () => {
      expect(clientIdName).to.be.a('string');
    });
  });

  // Validate client_id with name param
  describe('Validate with name', () => {
    const nameLength = name.length + 33;
    
    it(`client_id should be ${nameLength} characters long`, () => {
      assert.lengthOf(clientIdName, nameLength, `client_id should be ${nameLength} characters long`);
    });
    it('client_id with name should be type string', () => {
      expect(clientIdName).to.be.a('string');
    });
  });
});

// Validate oauth2 client_secret
describe('Validate client_secret', () => { 
  const clientSecret = methods.generateClientSecret();
  
  it('client_secret should be 256 characters long', () => {
    assert.lengthOf(clientSecret, 256, 'client_secret should be 256 characters long');
  });
  it('client_secret should be type string', () => {
    expect(clientSecret).to.be.a('string');
  })
});