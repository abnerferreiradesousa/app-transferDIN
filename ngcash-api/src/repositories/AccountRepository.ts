import {AppDataSource} from '../data-source';
import {Account} from '../entities/Account';

export class AccountRepository {
	private readonly accountRepository = AppDataSource.getRepository(Account);

	public findBalanceByUserLogged = async (id: number)
	: Promise<Account> => this.accountRepository
		.findOne({ where: { id } }) as unknown as Account;

	public incrementBalance = async (id: number, value: number): Promise<Account> => {
		await this.accountRepository.increment({id}, 'balance', value);
		const accountUpdated = await this.accountRepository.findOne({where: {id}});
		return accountUpdated as Account;
	};

	public decrementBalance = async (id: number, value: number): Promise<Account> => {
		await this.accountRepository.decrement({id}, 'balance', value);
		const accountUpdated = await this.accountRepository.findOne({where: {id}});
		return accountUpdated as Account ;
	};
}
