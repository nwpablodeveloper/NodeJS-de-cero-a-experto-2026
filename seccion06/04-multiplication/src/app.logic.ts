console.clear();

import fs from 'fs';

const base = 5;

let outputMessage = `
======================
      Tabla del ${base}
======================
`;

for (let i = 1; i <= 10; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

const dir = `outputs`;

fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(`./${dir}/tabla-${base}.txt`, outputMessage);

console.log(outputMessage);