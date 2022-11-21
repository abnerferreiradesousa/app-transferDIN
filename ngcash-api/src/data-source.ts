import 'dotenv/config';
import 'reflect-metadata';
import {DataSource} from 'typeorm';

const port = Number(process.env.DB_PORT) || 3001;

export const AppDataSource = new DataSource({
	type: 'postgres',
	port,
	host: process.env.DB_HOST ?? 'localhost',
	username: process.env.DB_USER ?? 'postgres',
	password: process.env.DB_PASS ?? 'postgres',
	database: process.env.DB_NAME ?? 'ngcash_db',
	entities: [`${__dirname}/**/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});
