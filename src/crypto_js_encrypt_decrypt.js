const CryptoJS = require('crypto-js');
text = "password-test"
const encryptWithAES = (text) => {
  const passphrase = '123';
  return CryptoJS.AES.encrypt(text, passphrase).toString();
};
ciphertext = encryptWithAES();
console.log(`ciphertext-- ${ciphertext}`)
const decryptWithAES = (ciphertext) => {
  const passphrase = '123';
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};


console.log(`decryptWithAES-- ${decryptWithAES()}`)