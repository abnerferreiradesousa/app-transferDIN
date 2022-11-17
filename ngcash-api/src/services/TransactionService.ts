import { StatusCodes } from "http-status-codes";
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

    public transfer = async (senderInfo: UserJWT, recieverInfo: TransferData): Promise<TransactionData> => {

        const [recieverData, senderAccount] = await this
            .validate(senderInfo, recieverInfo);

        const incrementReciever = await this.accountRepository.
            incrementBalance(recieverData.id, recieverInfo.value)

        const decrementSender = await this.accountRepository.
            decrementBalance(senderAccount.id, recieverInfo.value)

        const transferInfo:TransactionData = {
            value: recieverInfo.value,
            debitedAccountId: decrementSender?.id,
            creditedAccountId: incrementReciever?.id,
        }

        const trasferedInserted = await this.transactionRepository.transfer(transferInfo);

        return trasferedInserted;
    }
    
    public findTransactionsByUser = async (user: UserJWT) => {
        const transactions = await this
            .transactionRepository.findTransactionsByUser(user.id);
            
        return transactions;
    }

    private validate = async (senderInfo: UserJWT, recieverInfo: TransferData) => {
        if(senderInfo.username === recieverInfo.usernameCredited) {
            throw errorMessage(
                StatusCodes.CONFLICT, 
                "Não pode efetuar transferências para você mesmo!")
        }

        const senderAccount = await this
            .accountRepository.findBalanceByUserLogged(senderInfo.id)

        const recieverData = await this
            .userRepository.findByUsername(recieverInfo.usernameCredited)
        
        if(senderAccount.balance < recieverInfo.value) {
            throw errorMessage(StatusCodes.CONFLICT, "Saldo insuficiente!")
        }

        return [recieverData, senderAccount];
    }

}