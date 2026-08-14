const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const worrdContent = content.split(' ');
console.log('Palabras contadas: ', worrdContent.length);


let reactWordContent = 0;
worrdContent.find(palabra => {
    if(palabra.toLowerCase() == 'react')
        reactWordContent++
})

console.log('Palabras React: ', reactWordContent);
