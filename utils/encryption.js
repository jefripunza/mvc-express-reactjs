const crypto = require('crypto');

const { config } = require('../config');

function encode(text) {
    const cipher = crypto.createCipher('aes256', config.password_encrypt);
    return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
}

function decode(encrypted) {
    const decipher = crypto.createDecipher('aes256', config.password_encrypt);
    return decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
}

module.exports = {
    encode, decode,
}