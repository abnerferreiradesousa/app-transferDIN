import { StatusCodes } from "http-status-codes";
import { Account } from "../entities/Account";
import { Transaction } from "../entities/Transaction";
import { UserJWT } from "../helpers/generateJWT";
import { errorMessage } from "../helpers/middlewares";
import { TransactionData, TransferData } from "../interfaces";
import { AccountRepository } from "../repositories/AccountRepository";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { UserRepository } from "../repositories/UserRepository";


export class TransactionService {

    private transactionRepository = new TransactionRepository();
    private accountRepository = new AccountRepository();
    private userRepository = new UserRepository();

    public transfer = async (
        senderCashInfo: UserJWT, 
        recieverCashInfo: TransferData): Promise<TransactionData> => {
        
        if(senderCashInfo.username === recieverCashInfo.usernameCredited) {
            throw errorMessage(StatusCodes.CONFLICT, "Não pode efetuar transferências para você mesmo!")
        }

        const senderAccount = await this.accountRepository.findBalanceByUserLogged(senderCashInfo.id)
        const recieverData = await this.userRepository.findByUsername(recieverCashInfo.usernameCredited)
        
        if(senderAccount.balance < recieverCashInfo.value) {
            throw errorMessage(StatusCodes.CONFLICT, "Saldo insuficiente!")
        }

        const incrementReciever = await this.accountRepository.
            incrementBalance(recieverData.id, recieverCashInfo.value)

        const decrementSender = await this.accountRepository.
            decrementBalance(senderAccount.id, recieverCashInfo.value)

        const transferInfo:TransactionData = {
                value: recieverCashInfo.value,
                debitedAccountId: decrementSender?.id,
                creditedAccountId: incrementReciever?.id,
            }

        await this.transactionRepository.transfer(transferInfo);

        return transferInfo;
    }
}