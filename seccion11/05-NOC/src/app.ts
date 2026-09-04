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


    // Crear colección = tablas, documento = registro
    const newLog = await LogModel.create({
        message: 'Test mensaje desde mongo',
        origin: 'App.ts',
        level: 'low',
    })

    // await newLog.save();

    const logs = await LogModel.find();
    console.log(logs);

    console.log(newLog);

    // ServerApp.start();
}