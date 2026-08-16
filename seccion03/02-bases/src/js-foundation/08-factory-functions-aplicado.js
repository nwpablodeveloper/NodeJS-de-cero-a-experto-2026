

const buildMakePerson = ( { getAge, getUUID }) => {

    
    return ({ name, birthdate}) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        };
    }
    
}
 
 module.exports = {
    buildMakePerson,
 }