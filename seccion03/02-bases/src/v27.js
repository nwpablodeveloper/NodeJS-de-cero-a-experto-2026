const { getUserById } = require('./js-foundation/03-callbacks');


const id = 2;

getUserById(id, function(error, user) {
    if(error){ 
        throw new Error(error);
    }
    console.log(user);
});