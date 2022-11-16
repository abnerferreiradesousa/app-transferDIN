import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { errorMessage } from "../helpers/Middlewares";
import { StatusCodes } from 'http-status-codes';
import generateJWT from "../helpers/GenerateJWT";
import { Account } from "../entities/Account";
import { SimpleUser, UserLogin } from "../interfaces";
import { hash } from "bcrypt";

export class UserRepository {

    private COMPLEXITY_ENCRYT = 8;
    private userRepository = AppDataSource.getRepository(User);
    private accountRepository = AppDataSource.getRepository(Account);

    public create = async (user: SimpleUser): Promise<User> => {
        const passwordHash = await hash(user.password, this.COMPLEXITY_ENCRYT);

        const newUser = this.userRepository.create({ ...user, password: passwordHash });
        await this.userRepository.save(newUser);

        return await this.findByUsername(newUser.username);
    }

    public findByUsername = async (username: string): Promise<User> => {
        const isUser = await this.userRepository.findOne(
            { where: { username: username } }
        ) as unknown as User;

        return isUser;
    }

    public login = async (user: UserLogin): Promise<string> => {
        const isUser = this.userRepository.findOne(
            { where: { username: user.username } }
        ) as unknown as User;

        if(isUser == null || isUser.password != user.password) {
            throw errorMessage(StatusCodes.NOT_FOUND, "User not found!")
        }
        const { password, ...restData} = isUser;

        return generateJWT(restData)
    }
}