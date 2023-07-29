// Import dependencies
const jwt = require("jsonwebtoken");
const Cryptr = require("cryptr");

// Secrets
const secret1 = "123";
const secret2 = "123";

// Cryptr
const cryptr = new Cryptr(secret1);

// Generate the product key
function generate(type) {
    return cryptr.encrypt(jwt.sign({ type: type }, secret2));
}

// Validate the product key
function validate(productKey) {
    return jwt.verify(cryptr.decrypt(productKey), secret2);
}

// Examples
console.log(validate(generate("basic")));
console.log(generate("premium"));

//https://github.com/VLabStudio/Tutorials/blob/master/How%20to%20Create%20a%20Secure%20REST%20API%20with%20Node.js%20and%20Express/middleware/auth.js