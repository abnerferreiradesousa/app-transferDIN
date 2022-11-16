import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { Account } from "../entities/Account";

export type UserLogin = Pick<User, 'username' | 'password'>

export class AccountRepository {

    private accountRepository = AppDataSource.getRepository(Account);

    public findBalanceByUserLogged = async (id: number): Promise<Account> => {
        return await this.accountRepository.findOne({ where: { id } }) as Account;
    }
}