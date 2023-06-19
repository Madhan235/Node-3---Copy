import { client, objectId } from "../db.js";

export function getAllMentors(){
    return client.db("bwd45")
    .collection("mentors")
    .find().toArray();
}

export function getMentorsById(id){
    return client.db("bwd45")
    .collection("mentors")
    .findOne({_id: new objectId(id)})
}

export function addMentor(data){
    return client.db("bwd45")
    .collection("mentors")
    .insertOne(data);
}

export function editMentor(id,data){
    return client.db("bwd45")
    .collection("mentors")
    .findOneAndUpdate({_id: new objectId(id)},{$set: data})   
}

export function deleteMentor(id){
return client.db("bwd45")
.collection("mentors")
.deleteOne({_id: new objectId(id)})
}