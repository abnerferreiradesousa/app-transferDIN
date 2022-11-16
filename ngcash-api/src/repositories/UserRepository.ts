import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { errorMessage } from "../helpers/middlewares";
import { StatusCodes } from 'http-status-codes';
import generateJWT from "../helpers/generateJWT";
import { Account } from "../entities/Account";
import { SimpleUser, UserLogin } from "../interfaces";
import { compareHash, generateHash } from "../helpers/passwordHash";

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