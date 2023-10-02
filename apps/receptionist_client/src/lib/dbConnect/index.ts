import ConnectDB from "./dbConnection";

let connectDBInstance : any;

export const ensureConnection = () => {
    if(!connectDBInstance){
        console.log("Class Instantiation not found, so making one");
        connectDBInstance = new ConnectDB()
    }else{
        console.log("existing Class Instantiation found");
    }
    connectDBInstance.connect()
}
