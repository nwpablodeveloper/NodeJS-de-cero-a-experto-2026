import { FileSystemDatasource } from "./infrastructure/datasource/file-system.datasource";
import { ServerApp } from "./presentation/server"

(async() => {
    await main();
})()

function main() {
    ServerApp.start();

    new FileSystemDatasource();
}