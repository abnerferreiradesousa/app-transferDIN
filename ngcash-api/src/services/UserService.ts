import {StatusCodes} from 'http-status-codes';
import generateJWT from '../helpers/generateJWT';
import {errorMessage} from '../helpers/middlewares';
import {compareHash, generateHash} from '../helpers/passwordHash';
import {type IUserToken, type SimpleUser, type UserLogin} from '../interfaces';
import {UserRepository} from '../repositories/UserRepository';

export class UserService {
	private readonly userRepository = new UserRepository();

	public create = async (user: SimpleUser): Promise<IUserToken> => {
		
		this.validLength(user.username, 3);

		const pattern = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}$/;
		if (!(pattern.exec(user.password))) {
			throw errorMessage(StatusCodes.CONFLICT, 'Senha inválida');
		}

		const hasEqualUser = await this.userRepository.findByUsername(user.username);
		if (hasEqualUser !== null) {
			throw errorMessage(StatusCodes.CONFLICT, 'Username já existe');
		}

		user.account = {balance: 100};
		const passwordHash = await generateHash(user.password);
		const userCreated = await this.userRepository.create({...user, password: passwordHash });
		return {
			...userCreated,
			token: generateJWT(userCreated),
		}
	};

	public login = async (user: UserLogin): Promise<IUserToken> => {
		const isUser = await this.userRepository.findByUsername(user.username);
		if (isUser === null) {
			throw errorMessage(StatusCodes.NOT_FOUND, 'Usuário não encontrado');
		}

		const isSamePassword = await compareHash(user.password, isUser.password);
		if (!isSamePassword) {
			throw errorMessage(StatusCodes.BAD_REQUEST, 'Dados inválidos');
		}

		const {password, ...restData} = isUser;
		return {
			token: generateJWT(restData),
			...isUser,
		};
	};

	private readonly validLength = (value: string, minLength: number): void => {
		if (value.length < minLength) {
			throw errorMessage(StatusCodes.CONFLICT, 'Tamanho inválido');
		}
	};
}
