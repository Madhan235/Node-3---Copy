 import { MongoClient } from "mongodb";
 import obj from "mongodb";

 const mongoURL = "mongodb+srv://MadhanR:Madhan23@cluster0.diey8bl.mongodb.net/?retryWrites=true&w=majority"
 async function createConnection (){
    const client =   new MongoClient(mongoURL);
     await client.connect();
    console.log("mongodb connection established");
return client;
 }
 export var objectId = obj.ObjectId;
export const client = await createConnection();