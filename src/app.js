const methods = require('./methods');

/** Class representing a credentials. */
class Credentials {
  
  /**
   * Get the generated client id
   * @param   {String}  name - string prepended to generated token
   * @return  {String}       - crypographically secure 32 bit client_id
   */
  static clientId(name) {
    return methods.generateClientId(name);
  }

  /**
   * Get the generated client secret
   * @return {String} - crypographically secure 256 bit client_secret
   */
  static clientSecret() {
    return methods.generateClientSecret();
  }
}

module.exports = {
  Credentials: Credentials
}