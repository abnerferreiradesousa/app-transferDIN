import 'express-async-errors';
import express from 'express';
import {errorHandler} from './helpers/middlewares';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errorHandler);

export default app;
