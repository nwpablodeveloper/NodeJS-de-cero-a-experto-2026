const fs = require('fs');

// El código pasa a ejecutarse en segundo plano y no bloquea el flujo de lectura
fs.readFile('README.md', (err, data)=>{
    if(err) throw err;
    console.log(data);
});