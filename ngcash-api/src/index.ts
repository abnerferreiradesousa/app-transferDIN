import 'express-async-errors';
import {AppDataSource} from './data-source';
import app from './app';

void AppDataSource.initialize().then(() => {
	const PORT = process.env.API_PORT ?? 3001;

	return app.listen(PORT, () => {
		console.log(`Server is running on port: http://localhost:${PORT}/user`);
	});
});
