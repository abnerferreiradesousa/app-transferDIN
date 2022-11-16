import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { SimpleUser } from "../interfaces";

export class UserRepository {

    private userRepository = AppDataSource.getRepository(User);

    public create = async (user: SimpleUser): Promise<User> => {
        const newUser = this.userRepository.create(user);
        await this.userRepository.save(newUser);

        return await this.findByUsername(newUser.username);
    }

    public findByUsername = async (username: string): Promise<User> => {
        const isUser = await this.userRepository.findOne(
            { where: { username: username } }
        ) as unknown as User;

        return isUser;
    }
}