import express from 'express';
import path from 'node:path';

interface Options {
    port: number,
    publicPath?: string
}

export class Server {

    private app = express(); 
    private readonly port: number;
    private readonly publicPath: string;

    constructor(options: Options){

        const { port, publicPath = 'public' } = options;

        this.port = port,
        this.publicPath = publicPath
    }

    async start(){

        //* Middlewares

        //* Public Folder
        this.app.use( express.static(this.publicPath));


        // Busca cualquier petición get
        this.app.get('/*splat', (req, res) => {
            const indexPath = path.join( __dirname + `../../../${this.publicPath}/index.html`);
            res.sendFile(indexPath);
            return;
        })

        this.app.listen(this.port, () => {
            console.log(`Server express online: http://localhost:${this.port}}`);
        })

    }

}