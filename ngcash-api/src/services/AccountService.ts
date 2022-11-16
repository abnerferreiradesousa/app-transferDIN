import { Account } from "../entities/Account";
import { UserJWT } from "../helpers/generateJWT";
import { AccountRepository } from "../repositories/AccountRepository";


export class AccountService {

    private accountRepository = new AccountRepository();

    public findBalanceByUserLogged = async (user: UserJWT): Promise<Account> => {
        const account = await this.accountRepository.findBalanceByUserLogged(user.id);
        return account;
    }
}