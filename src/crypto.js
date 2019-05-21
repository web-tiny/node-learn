/*
 * @Author: Tiny
 * @Date: 2019-05-21 19:54:37
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-21 20:41:57
 */
const crypto = require('crypto');

// MD5/SHA1,
const hash = crypto.createHash('md5');

hash.update('hello, world');
console.log(hash.digest('hex'));

// Hmac算法
const hmac = crypto.createHmac('sha256', 'secret');
hmac.update('hello, world');
console.log(hmac.digest('hex'));

// AES算法
function aesEncrypt(data, key) {
  const cipher = crypto.createCipher('aes192', key);
  let crypted = cipher.update(data, 'utf8', 'hex');
  // 加密结果有hex和base64
  crypted +=cipher.final('hex');
  return crypted;
}

function aesDecrypt(encrypted, key) {
  const decipher = crypto.createDecipher('aes192', key);
  let derypted = decipher.update(encrypted, 'hex', 'utf8');
  derypted +=decipher.final('utf8');
  return derypted;
}

let data = 'hello, this is a secret message!';
let key = 'password!';
let encrypted = aesEncrypt(data, key);
let decrypted = aesDecrypt(encrypted, key);

console.log('Plain text:' + data);
console.log('Encrypted text:' + encrypted);
console.log('Decrypted text:' + decrypted);

// ming's keys:
let ming = crypto.createDiffieHellman(512);
let ming_keys = ming.generateKeys();

let prime = ming.getPrime();
let generator = ming.getGenerator();
console.log('Prime:' + prime.toString('hex'));
console.log('Generator:' + generator.toString('hex'));

// hong's keys:
let hong = crypto.createDiffieHellman(prime, generator)
let hong_keys = hong.generateKeys()

// exhange and generate secret
let ming_secret = ming.computeSecret(hong_keys);
let hong_secret = hong.computeSecret(ming_keys);

// pint secret:
console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));

// RSA算法