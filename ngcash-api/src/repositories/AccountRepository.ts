import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { Account } from "../entities/Account";

export type UserLogin = Pick<User, 'username' | 'password'>

export class AccountRepository {

    private accountRepository = AppDataSource.getRepository(Account);

    public create = async (account: Account) => {
        const newAccount = this.accountRepository.create(account)
        await this.accountRepository.save(newAccount)
        return await this.accountRepository.findOneBy(newAccount);
    }
}