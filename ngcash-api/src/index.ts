import 'express-async-errors';
import express from "express";
import { AppDataSource } from "./data-source";
import { errorHandler } from "./helpers/middlewares";
import routes from "./routes";

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json());

    app.use(routes)

    app.use(errorHandler)

    const PORT = process.env.API_PORT;

    return app.listen(3000, () => {
        console.log(`Server is running on port: http://localhost:${PORT}/user`);
    });
});