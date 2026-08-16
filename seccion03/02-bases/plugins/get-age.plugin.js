const getAgePlugin = require('get-age');

const getAge = (birthdate) => {
    if(!birthdate) return new Error(`La fecha de nacimiento es requerida`);

    return getAgePlugin(birthdate);
}

module.exports = {
    getAge
}