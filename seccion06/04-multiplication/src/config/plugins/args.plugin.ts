import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const miYarg = yargs(hideBin(process.argv))
    .option(
        'b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Base de la tabla de multiplicación'
            },
        )
        .option(
            'l', {
                    alias: 'limit',
                    type: 'number',
                    demandOption: true,
                    default: 10,
                    describe: 'Limite de multipliación'
                },
        )
        .option(
            's', {
                    alias: 'show',
                    type: 'boolean',
                    default: false,
                    describe: 'Limite de multipliación'
                },
        )
        .option(
            'n', {
                    alias: 'name',
                    type: 'string',
                    default: 'table',
                    describe: 'Nombre del archivo'
                },
        )
        .option(
            'd', {
                    alias: 'destination',
                    type: 'string',
                    default: './outputs',
                    describe: 'Destino del archivo'
                },
        )
        .check((argv, option) => {
            
            if(argv.b <= 0) throw `La base tiene que ser mayor a 0`;
            if(typeof argv.b == 'string') throw `La base de multiplicación no es un número`;
            
            return true
        })
        .parseSync()