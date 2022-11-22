import 'express-async-errors';
import {AppDataSource} from './data-source';
import app from './app';
import { User } from './entities/User';

void AppDataSource.initialize().then(async () => {
	const PORT = process.env.API_PORT ?? 3001;

	await AppDataSource.manager.save(
		AppDataSource.manager.create(User, {
			username: "Abner",
			password: "Ab123456",
			account: {
				balance: 100,
			}
		})
	)

	await AppDataSource.manager.save(
		AppDataSource.manager.create(User, {
			username: "Phineas",
			password: "Ab123456",
			account: {
				balance: 100,
			}
		})
	)

	await AppDataSource.manager.save(
		AppDataSource.manager.create(User, {
			username: "Ferb",
			password: "Ab123456",
			account: {
				balance: 100,
			}
		})
	)

	await AppDataSource.manager.save(
		AppDataSource.manager.create(User, {
			username: "Perry",
			password: "Ab123456",
			account: {
				balance: 100,
			}
		})
	)

	return app.listen(PORT, () => {
		console.log(`Server is running on port: http://localhost:${PORT}/`);
	});
}).catch(error => console.log(error));
