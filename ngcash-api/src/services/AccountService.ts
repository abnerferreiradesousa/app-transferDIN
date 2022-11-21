import {StatusCodes} from 'http-status-codes';
import {type Account} from '../entities/Account';
import {type UserJWT} from '../helpers/generateJWT';
import {errorMessage} from '../helpers/middlewares';
import {AccountRepository} from '../repositories/AccountRepository';

export class AccountService {
	private readonly accountRepository = new AccountRepository();

	public findBalanceByUserLogged = async (user: UserJWT): Promise<Account> => {
		const account = await this.accountRepository.findBalanceByUserLogged(user.id);
		if (account === null) {
			throw errorMessage(StatusCodes.NOT_FOUND, 'Conta não encontrada');
		}

		return account;
	};
}
