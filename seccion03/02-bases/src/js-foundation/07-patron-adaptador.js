const { getAge, getUUID } = require('../../plugins')

 const buildPerson = ({ name, birthDate}) => {
    return {
        id: getUUID(),
        name: name,
        birthDate: birthDate,
        age: getAge(birthDate)
    };
 }

 
 const obj = { 
    name: 'Pablo', 
    birthDate: '1988-05-19'
};

 const pablo = buildPerson(obj);

 console.log(pablo);