console.clear();

import fs from 'fs';
import { miYarg } from './config/plugins/args.plugin';

const { b: base, l: limit, s:show } = miYarg;


let outputMessage = `
========================================
    Tabla del ${base} hastá limite de ${limit}
========================================
`;

for (let i = 1; i <= miYarg.l; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

const dir = `outputs`;

fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(`./${dir}/tabla-${base}-hasta-${limit}.txt`, outputMessage);

if(show)
    console.log(outputMessage);