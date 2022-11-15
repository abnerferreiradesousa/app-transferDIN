import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

export class UserRepository {

    private userRepository = AppDataSource.getRepository(User);

    public create = async (user: User) => {
        const newUser = this.userRepository.create(user)
        return await this.userRepository.save(newUser)
    }
}