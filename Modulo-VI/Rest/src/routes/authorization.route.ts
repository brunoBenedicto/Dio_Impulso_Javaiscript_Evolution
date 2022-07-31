import { Request, Response, NextFunction, Router } from "express";

const authorizationRoute = Router();

authorizationRoute.post('/token', (request: Request, response: Response, next: NextFunction)=> {
    const authorizationHeadder = request.headers['authorization'];
});


export default authorizationRoute