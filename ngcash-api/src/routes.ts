import {Router} from 'express';
import {AccountController} from './controllers/AccountController';
import {TransactionController} from './controllers/TransactionController';
import {UserController} from './controllers/UserController';
import {authToken} from './helpers/middlewares';

const routes = Router();

const userController = new UserController();
const accountController = new AccountController();
const transactionController = new TransactionController();

routes.post('/user', userController.create);
routes.post('/login', userController.login);

routes.use(authToken);

routes.get('/account', accountController.findBalanceByUserLogged);

routes.post('/transaction', transactionController.transfer);
routes.post('/transaction/date', transactionController.findByDate);
routes.post('/transaction/cashin', transactionController.findTransactionsByCashIn);
routes.post('/transaction/cashout', transactionController.findTransactionsByCashOut);
routes.get('/transaction', transactionController.findTransactionsByUser);

export default routes;
