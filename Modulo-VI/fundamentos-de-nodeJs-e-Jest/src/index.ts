import { routes } from "./routes";
import express from "express";


const server = express();
server.use(express.json())
server.use(routes)

server.listen(5000, ()=>{
    console.log("eaeeee")
}); 