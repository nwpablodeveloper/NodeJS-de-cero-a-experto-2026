const { getUserById } = require('./js-foundation/04-arrow-functions');


const id = 1;

/* 
    getUserById(id, function(error, user) {
        if(error){ 
            throw new Error(error);
        }
        console.log(user);
    }); 

    convertido a función de flecha
*/

getUserById(id, (error, user) => {
    if(error) throw new Error(error);
    console.log(user);
})