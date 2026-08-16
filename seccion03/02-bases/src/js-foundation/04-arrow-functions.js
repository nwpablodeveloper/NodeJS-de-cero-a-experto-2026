console.clear();

const users = [
    {
        id: 1,
        name: 'Sophia Veiga'
    },
    {
        id: 2,
        name: 'Pablo Veiga'
    },
    {
        id: 3,
        name: 'Romina Veiga'
    },
]

/* 
function getUserById(id, callback){
    const user = users.find(function(user){
        return user.id === id;
    });

    if(!user){
        return callback(`Usuario de id: ${id} no existe`);
    }

    return callback(null, user)
    
}
    Convertir a función de flecha
 */

const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);

    user 
        ? callback(null, user) 
        : callback(`Usuario de id: ${id}, no existe`)
}



module.exports = {
    getUserById
}
