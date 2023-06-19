
import { client , objectId  } from "../db.js";

  

export function getAllStudents (req){
    return  client
    .db("bwd45")
    .collection("students")
    .find(req.query).toArray();
}

 export function  getStudentById (id){
    return client.db("bwd45")
    .collection("students")
    .findOne({_id: new objectId(id)})
 }

 export function addStudent (data){
return client.db("bwd45")
.collection("students")
.insertOne(data)
 }

 export function editStudent (id, updatedStudent){
    return client.db("bwd45")
    .collection("students")
    .findOneAndUpdate({_id:new objectId(id)},{$set:updatedStudent})
 }

 export function deleteStudent (id){
    return client.db("bwd45")
    .collection("students")
    .deleteOne({_id:new objectId(id)})
 }

 