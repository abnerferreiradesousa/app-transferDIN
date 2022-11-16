import { Router } from 'express';
import { AccountController } from './controllers/AccountController';
import { UserController } from './controllers/UserController';
import { authToken } from './helpers/middlewares';

const routes = Router();

routes.post('/user', new UserController().create);
routes.post('/login', new UserController().login);

routes.get('/account', authToken, new AccountController().findBalanceByUserLogged);

export default routes;