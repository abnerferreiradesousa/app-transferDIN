import {AppDataSource} from '../data-source';
import {User} from '../entities/User';
import {type SimpleUser} from '../interfaces';

export class UserRepository {
	private readonly userRepository = AppDataSource.getRepository(User);

	public create = async (user: SimpleUser): Promise<User> => {
		const newUser = this.userRepository.create(user);
		return this.userRepository.save(newUser);
	};

	public findByUsername = async (username: string): Promise<User | null> => {
		const isUser = await this.userRepository.findOne({where: {username}});
		return isUser;
	};
}
