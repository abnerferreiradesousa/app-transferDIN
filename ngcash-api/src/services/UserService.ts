import { StatusCodes } from "http-status-codes";
import { User } from "../entities/User";
import { errorMessage } from "../helpers/Middlewares";
import { UserLogin } from "../interfaces";
import { UserRepository } from "../repositories/UserRepository";


export class UserService {

    private userRepository = new UserRepository();

    public validLength = (value: string, minLength: number): void => {
        if(value.length < minLength)
            throw errorMessage(StatusCodes.CONFLICT, "Invalid length")
    } 
    
    public create = async (user: User): Promise<User> => {
        this.validLength(user.username, 3)
        const pattern = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}$/;

        if (!user.password.match(pattern)) {
            throw errorMessage(StatusCodes.CONFLICT, "Password incorrect format")
        }
        
        const hasEqualUser = await this.userRepository.findByUsername(user.username)
        if(hasEqualUser !== null) {
            throw errorMessage(StatusCodes.CONFLICT, "Username already exists")
        }
        
        return await this.userRepository.create(user);
    }

    public login = async (user: UserLogin): Promise<string> => {
        const token = this.userRepository.login(user)
        return token;
    }
}