import 'express-async-errors';
import {AppDataSource} from './data-source';
import app from './app';
import { User } from './entities/User';
import { Transaction } from './entities/Transaction';

void AppDataSource.initialize().then(async () => {
	const PORT = process.env.API_PORT ?? 3001;

	await AppDataSource.manager.save(
		AppDataSource.manager.create(User, {
			username: "Abner",
			password: "$2b$08$phbiwGfs3MB8CyT6d05VNOeAiyM8RKnLOfReCpOoIwPJQlnW7sbyq",
			account: {
				balance: 100,
			}
		})
	)

	await AppDataSource.manager.save(
		AppDataSource.manager.create(User, {
			username: "Phineas",
			password: "$2b$08$phbiwGfs3MB8CyT6d05VNOeAiyM8RKnLOfReCpOoIwPJQlnW7sbyq",
			account: {
				balance: 100,
			}
		})
	)

	await AppDataSource.manager.save(
		AppDataSource.manager.create(User, {
			username: "Ferb",
			password: "$2b$08$phbiwGfs3MB8CyT6d05VNOeAiyM8RKnLOfReCpOoIwPJQlnW7sbyq",
			account: {
				balance: 100,
			}
		})
	)

	await AppDataSource.manager.save(
		AppDataSource.manager.create(User, {
			username: "Perry",
			password: "$2b$08$phbiwGfs3MB8CyT6d05VNOeAiyM8RKnLOfReCpOoIwPJQlnW7sbyq",
			account: {
				balance: 100,
			}
		})
	)

	await AppDataSource.manager.save(
		AppDataSource.manager.create(Transaction, {
			value: 10,
			createdAt: new Date(2022, 10, 19),
			debitedAccountId: 1,
			creditedAccountId: 2,
		})
	)

	await AppDataSource.manager.save(
		AppDataSource.manager.create(Transaction, {
			value: 20,
			createdAt: new Date(2022, 10, 20),
			debitedAccountId: 1,
			creditedAccountId: 2,
		})
	)

	await AppDataSource.manager.save(
		AppDataSource.manager.create(Transaction, {
			value: 15,
			createdAt: new Date(2022, 10, 21),
			debitedAccountId: 1,
			creditedAccountId: 3,
		})
	)

	await AppDataSource.manager.save(
		AppDataSource.manager.create(Transaction, {
			value: 5,
			createdAt: new Date(2022, 10, 22),
			debitedAccountId: 1,
			creditedAccountId: 4,
		})
	)

	await AppDataSource.manager.save(
		AppDataSource.manager.create(Transaction, {
			value: 15,
			createdAt: new Date(2022, 10, 23),
			debitedAccountId: 2,
			creditedAccountId: 1,
		})
	)

	await AppDataSource.manager.save(
		AppDataSource.manager.create(Transaction, {
			value: 15,
			createdAt: new Date(2022, 10, 24),
			debitedAccountId: 3,
			creditedAccountId: 1,
		})
	)


	return app.listen(PORT, () => {
		console.log(`Server is running on port: http://localhost:${PORT}/`);
	});
}).catch(error => console.log(error));
