import { client } from "../db.js";
import jwt from "jsonwebtoken";

export function addUser(userInfo){
    return  client
    .db("bwd45")
    .collection("users")
    .insertOne(userInfo)
}

export function  getUser(userEmail) {
    return client
    .db("bwd45")
    .collection("users")
    .findOne({email:userEmail})
}

export function generateJwtToken(id){
return jwt.sign({id},process.env.secretkey, {"expiresIn":"30d"})
}