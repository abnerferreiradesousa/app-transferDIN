import { AppDataSource } from "../data-source";
import { Transaction } from "../entities/Transaction";
import { TransactionData } from "../interfaces";

export class TransactionRepository {

    private transactionRepository = AppDataSource.getRepository(Transaction);

    public transfer = async (transaction: TransactionData) => {
        const transactionObj = this.transactionRepository.create(transaction);
        const result = await this.transactionRepository.save(transactionObj)
        console.log(result)
    }
}