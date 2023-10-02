import mongoose from "mongoose"
const MONGO_URI = "mongodb+srv://abhishek:12345@cluster0.pcghker.mongodb.net/?retryWrites=true&w=majority"
const MONGO_DB_NAME = "Chikitsa"

export default class ConnectDB {
    private dbConnection : any
    constructor () {
    }
    makeConnection() {
        // const connection = mongoose.connect("mongodb+srv://abhishek:12345@cluster0.pcghker.mongodb.net/?retryWrites=true&w=majority",{dbName: "Chikitsa"})
        const connection = mongoose.connect(MONGO_URI, {dbName: MONGO_DB_NAME})
        this.dbConnection = connection;
    }

    connect () {
        if(this.dbConnection){
            console.log("existing DB instance found");
        }else{
            this.makeConnection()
        }
        return this.dbConnection
    }
}