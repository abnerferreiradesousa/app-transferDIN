import { StatusCodes } from "http-status-codes";
import { User } from "../entities/User";
import generateJWT from "../helpers/generateJWT";
import { errorMessage } from "../helpers/middlewares";
import { compareHash, generateHash } from "../helpers/passwordHash";
import { SimpleUser, UserLogin } from "../interfaces";
import { UserRepository } from "../repositories/UserRepository";


export class UserService {

    private userRepository = new UserRepository();
    
    public create = async (user: SimpleUser): Promise<User> => {
        this.validLength(user.username, 3)
        const pattern = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}$/;

        if (!user.password.match(pattern)) {
            throw errorMessage(StatusCodes.CONFLICT, "Password incorrect format")
        }

        const hasEqualUser = await this.userRepository.findByUsername(user.username)
        if(hasEqualUser !== null) {
            throw errorMessage(StatusCodes.CONFLICT, "Username already exists!")
        }
        
        user.account = { balance: 100 }
        const passwordHash = await generateHash(user.password);

        return await this.userRepository.create({ ...user, password: passwordHash });
    }

    public login = async (user: UserLogin): Promise<string> => {
        const isUser = await this.userRepository.findByUsername(user.username);
        const isSamePassword = await compareHash(user.password, isUser.password);

        if(isUser == null || !isSamePassword) {
            throw errorMessage(StatusCodes.NOT_FOUND, "User not found!")
        }

        const { password, ...restData} = isUser;
        return generateJWT(restData)
    }

    public validLength = (value: string, minLength: number): void => {
        if(value.length < minLength)
            throw errorMessage(StatusCodes.CONFLICT, "Invalid length")
    } 
}