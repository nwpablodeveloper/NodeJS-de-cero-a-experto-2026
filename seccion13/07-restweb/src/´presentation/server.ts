import express from 'express';
import path from 'node:path';


export class Server {

    private app = express(); 

    async start(){

        //* Middlewares

        //* Public Folder
        this.app.use( express.static('public'));


        // Busca cualquier petición get
        this.app.get('/*splat', (req, res) => {
            const indexPath = path.join( __dirname + '../../../public/index.html');
            res.sendFile(indexPath);
            return;
        })

        this.app.listen('8080', () => {
            console.log(`Server express online: http://localhost:8080`);
        })

    }

}