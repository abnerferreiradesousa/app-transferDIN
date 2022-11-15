import { DataSource } from "typeorm";

const port = process.env.DB_HOST as number | undefined;

export const AppDataSource = new DataSource({
    type: 'postgres',
    port,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});