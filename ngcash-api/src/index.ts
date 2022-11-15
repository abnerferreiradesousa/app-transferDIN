import express from "express";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json());

    app.get('/', (req, res) => {
        return res.json({message: "Thank GOD!"});
    })

    const PORT = process.env.API_PORT;

    return app.listen(3000, () => {
        console.log(`Server is running on port: http://localhost:${PORT}`);
    });
});