
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
let auto_generated_hashedPwd=''
let hashedPwd=''
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
        hashedPwd =hash;
        console.log(`hashedPwd='${hash}'`)
    });
});

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    auto_generated_hashedPwd =hash;
         console.log(`auto_generated_hashedPwd= '${hash}'`)

});

// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//    
 // Store hash in your password DB.
// });