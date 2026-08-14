const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const words = content.split(' ');

/* 
const reactWordCount = words.filter(
    (word) => word.toLowerCase().includes('react')
).length;
 */

// Con expresión regular
const reactWordCount = content.match(/react/gi ?? []).length


console.log(reactWordCount);
