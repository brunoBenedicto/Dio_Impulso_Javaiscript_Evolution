import { Router, Request, Response, NextFunction } from "express";
import { request } from "http";
import { StatusCodes } from "http-status-codes";
import { DatabaseError } from "pg";
import user_repository from "../repositories/user_repository";


const usersRoute = Router();

usersRoute.get('/users', async (request: Request, response: Response, next: NextFunction) =>{
    const users = await user_repository.findAllUsers();
    response.status(StatusCodes.OK).send({users});
});

usersRoute.get('/users/:uuid', async (request: Request<{uuid:string}>, response: Response, next: NextFunction) =>{
    try{
        const uuid = request.params.uuid;
        const user = await user_repository.findbyId(uuid);
        response.status(StatusCodes.OK).send(user);
    }catch(error){
       next(error);
    }
});

usersRoute.post ('/users/', async (request: Request<{uuid:string}>, response: Response, next: NextFunction)=>{
    const newUser = request.body;
    const uuid = await user_repository.create(newUser);
    response.status(StatusCodes.CREATED).send(uuid);
});

usersRoute.put('/users/:uuid', async (request: Request<{uuid:string}>, response: Response, next: NextFunction) =>{
    const uid = request.params.uuid;
    const modifiedUser = request.body;
    modifiedUser.uuid = uid;
    await user_repository.update(modifiedUser)
    
    response.status(StatusCodes.OK).send(modifiedUser.json);
});

usersRoute.delete('/users/:uuid', async (request:Request<{uuid: string}>, response: Response, next: NextFunction)=>{
    const uuid = request.params.uuid;
    await user_repository.remove(uuid);
    response.sendStatus(StatusCodes.OK);
})


export default usersRoute;