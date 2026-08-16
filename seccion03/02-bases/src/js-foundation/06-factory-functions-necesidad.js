 const { v4: uuidv4 } = require('uuid');
 var getAge = require('get-age')
 
 const buildPerson = ({ name, birthDate}) => {
    return {
        id: uuidv4(),
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