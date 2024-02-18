 import { MongoClient } from "mongodb";
 import obj from "mongodb";

 const mongo_url = "mongodb://MadhanR:Madhan23@ac-blfx7qv-shard-00-00.diey8bl.mongodb.net:27017,ac-blfx7qv-shard-00-01.diey8bl.mongodb.net:27017,ac-blfx7qv-shard-00-02.diey8bl.mongodb.net:27017/?ssl=true&replicaSet=atlas-12px7j-shard-0&authSource=admin&retryWrites=true&w=majority"

  
 async function createConnection (){

    try {
        const client =   new MongoClient(mongo_url);
     await client.connect();
    console.log("mongodb connection established");
return client;
    } catch (error) {
        console.error(error.message);
    }
    
 }
 export var objectId = obj.ObjectId;
export const client = await createConnection();