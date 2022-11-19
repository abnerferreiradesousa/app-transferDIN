import 'express-async-errors';
import express from "express";
import { AppDataSource } from "./data-source";
import { errorHandler } from "./helpers/middlewares";
import routes from "./routes";
import cors from 'cors';

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(cors())

    app.use(express.json());

    app.use(routes)

    app.use(errorHandler)

    const PORT = process.env.API_PORT || 3001;

    return app.listen(PORT, () => {
        console.log(`Server is running on port: http://localhost:${PORT}/user`);
    });
});
