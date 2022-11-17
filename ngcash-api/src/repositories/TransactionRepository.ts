import { AppDataSource } from "../data-source";
import { Transaction } from "../entities/Transaction";
import { TransactionData } from "../interfaces";

export class TransactionRepository {

    private transactionRepository = AppDataSource.getRepository(Transaction);

    public transfer = async (transaction: TransactionData) => {
        const transactionObj = this.transactionRepository.create(transaction);
        const transactionInserted = await this.transactionRepository.save(transactionObj)
        return transactionInserted;
    }

    public findTransactionsByUser = async (id: number) => {
        const transactions = await this.transactionRepository.find({ where: [
            {debitedAccountId: id},
            {creditedAccountId: id}
        ] })

        return transactions;
    }

}