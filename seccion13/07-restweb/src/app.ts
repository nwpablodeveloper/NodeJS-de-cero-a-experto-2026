import { Server } from "./´presentation/server";



(async () => {

    await main();
    

})();


function main(){
    
    const server = new Server();

    server.start();
    
}