import { envs } from "./config/plugins/envs.plugin";
import { LogModel } from "./data/mongo";
import { MongoDataBase } from "./data/mongo/init";

(async() => {
    await main();
})()

async function main() {

    await MongoDataBase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB
    })

}