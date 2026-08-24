console.clear();

import { miYarg } from '../src/config/plugins/args.plugin'

import { ServerApp } from "./presentation/server-app";


(async () => {
    main();
})();


async function main() {

    const { b: base, l: limit, s: showTable } = miYarg;
    
    ServerApp.run({ base, limit, showTable });

}

