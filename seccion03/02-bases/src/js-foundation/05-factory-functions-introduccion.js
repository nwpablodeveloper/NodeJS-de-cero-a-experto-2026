 const buildPerson = ({ name, birthDate}) => {
    return {
        id: new Date().getTime(),
        name: name,
        birthDate: birthDate,
        age: new Date().getFullYear() - new Date(birthDate).getFullYear(),
    };
 }

 
 const obj = { 
    name: 'Pablo', 
    birthDate: '1988-05-19'
};

 const pablo = buildPerson(obj);

 console.log(pablo);