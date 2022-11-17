import { AppDataSource } from "../data-source";
import { Transaction } from "../entities/Transaction";
import { FilterInfo, TransactionData } from "../interfaces";

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



    // Filtragem pelo tempo...
    public findByDate = async (id: number, dates: FilterInfo) => {
        const transactions = await this.findTransactionsByUser(id);

        return this.filterByDateAfter(transactions, dates);
    }

    // Filtragem por cashout...
    public findByCashOut = async (id: number, dates: FilterInfo) => {
        let transactions = await this.transactionRepository.find({ where: [
            {debitedAccountId: id},
        ] })

        if(dates.dataStart !== null && dates.dataEnd !== null) {
            transactions = this.filterByDateAfter(transactions, dates);
        }

        return transactions;
    }

    // Filtragem por cashin
    public findByCashIn = async (id: number, dates: FilterInfo) => {
        let transactions = await this.transactionRepository.find({ where: [
            {creditedAccountId: id}
        ] })

        if(dates.dataStart !== null && dates.dataEnd !== null) {
            transactions = this.filterByDateAfter(transactions, dates);
        }

        return transactions;
    }

    private filterByDateAfter = (transactions: Transaction[], dates: FilterInfo) => {
        const filterByDate = transactions.filter((t: Transaction) => {
            if(
                t.createdAt > new Date(dates.dataStart) 
                && t.createdAt < new Date(dates.dataEnd)
            ) return t;
        });
        return filterByDate;
    }
}