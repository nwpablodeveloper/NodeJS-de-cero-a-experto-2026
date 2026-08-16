console.clear();
const { getAge, getUUID } = require('../plugins')
const { buildMakePerson } = require('./js-foundation/08-factory-functions-aplicado');

const makePerson = buildMakePerson({getAge, getUUID});

const obj = {
    name: 'Pablo',
    birthdate: '1988-05-19'
}

const pablo = makePerson(obj);
console.log(pablo);


