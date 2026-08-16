const getAgePlugin = require('get-age');

const getAge = (birthDate) => {
    if(!birthDate) return new Error(`La fecha de nacimiento es requerida`);

    return getAgePlugin(birthDate);
}

module.exports = {
    getAge
}