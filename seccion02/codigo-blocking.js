const fs = require('fs');

// Hasta que no se lea el archivo el programa no continua su ejecución
const data = fs.readFileSync('/README.md'); 
console.log(data);