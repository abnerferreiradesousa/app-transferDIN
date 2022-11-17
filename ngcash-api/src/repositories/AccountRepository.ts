import { AppDataSource } from "../data-source";
import { Account } from "../entities/Account";

export class AccountRepository {

    private accountRepository = AppDataSource.getRepository(Account);

    public findBalanceByUserLogged = async (id: number): Promise<Account> => {
        return await this.accountRepository.findOne({ where: { id } }) as Account;
    }

    public incrementBalance = async (id: number, value: number) => {
        await this.accountRepository.increment({ id }, 'balance', value)
        const accountUpdated = await this.accountRepository.findOne({where: { id }})
        return accountUpdated;
    }

    public decrementBalance = async (id: number, value: number) => {
        await this.accountRepository.decrement({ id }, 'balance', value)
        const accountUpdated = await this.accountRepository.findOne({where: { id }})
        return accountUpdated;
    }
}