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
    const secret_key = "madhan23"
return jwt.sign({id},secret_key, {"expiresIn":"30d"})
}