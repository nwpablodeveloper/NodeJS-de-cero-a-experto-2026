import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
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
        .parseAsync()