import express from 'express';


export class Server {

    private app = express(); 

    async start(){

        this.app.listen('8080', () => {
            console.log(`Server express online: http://localhost:8080`);
        })

    }

}