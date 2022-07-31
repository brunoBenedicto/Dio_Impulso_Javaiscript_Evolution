import {Router} from 'express';
import { UsersController } from './controllers/usersController.js';

const routes = Router();
const usersController = new UsersController;

routes.get('/users', usersController.listarUsuario)

routes.post('/user', usersController.criarUsuario)
export {routes }