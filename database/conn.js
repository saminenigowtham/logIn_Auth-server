import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import ENV from "../config.js"
async function connect(){
    const mongos = await MongoMemoryServer.create()
    const getUri = mongos.getUri();

    // const db = await mongoose.connect(getUri);
    const db = await mongoose.connect(ENV.ALTAS_URI)
    console.log('Data Base Created');
    return db;
}
export default connect;