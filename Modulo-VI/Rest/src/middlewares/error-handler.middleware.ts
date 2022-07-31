import { Request, Response, NextFunction } from "express";
import DatabaseError from "../model/errors/database.error.model";
import { StatusCodes } from "http-status-codes";



function errorHandler(error:any, request: Request, response: Response, next: NextFunction ){
    if(error instanceof DatabaseError){
        response.sendStatus(StatusCodes.BAD_REQUEST)    
    }else{
        response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }

}

export default errorHandler;