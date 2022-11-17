import { Router } from 'express';
import { AccountController } from './controllers/AccountController';
import { TransactionController } from './controllers/TransactionController';
import { UserController } from './controllers/UserController';
import { authToken } from './helpers/middlewares';

const routes = Router();

routes.post('/user', new UserController().create);
routes.post('/login', new UserController().login);

routes.use(authToken);

routes.get('/account', new AccountController().findBalanceByUserLogged);
routes.post('/transaction', new TransactionController().transfer);
routes.get('/transaction/date/type', new TransactionController().findTransactionsByDateOrAndType);
routes.get('/transaction', new TransactionController().findTransactionsByUser);

export default routes;