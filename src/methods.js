let crypto;
try {
  crypto = require('crypto');
} catch (err) {
  console.error('crypto support is disabled!');
}

/**
 * Generate 32 character random hex string with optional prepended name
 * @param   {String}    name - optional value prepended to output string
 * @return  {String}         - generated client id string
 */
const generateClientId = (name) => {
    const buffer = crypto.randomBytes(16);
    return name ? `${name}_${buffer.toString('hex')}` : buffer.toString('hex');
}

/**
 * Generate 256 character random hex string
 * @return  {String} - generated client secret hexadecimal string    
 */
const generateClientSecret = () => {
    const buffer = crypto.randomBytes(128);
    return buffer.toString('hex');
}

module.exports = {
    generateClientId,
    generateClientSecret
}
