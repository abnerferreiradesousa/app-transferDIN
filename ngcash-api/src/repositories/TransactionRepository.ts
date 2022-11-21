import { Between, LessThan, MoreThan } from "typeorm";
import { AppDataSource } from "../data-source";
import { Transaction } from "../entities/Transaction";
import { FilterInfo, ITransactionMaster, TransactionData } from "../interfaces";

const select = {
    account: { user: {username: true} },
    account2: { user: {username: true} }
};

const relations = {
    account2: { user: true },
    account: { user: true }
};

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
            {creditedAccountId: id},
        ], select, relations })

        return this.serialize(transactions);
    }

    public findByDate = async (id: number, dates: FilterInfo) => {
        const transactions = await this.transactionRepository
            .createQueryBuilder('t')
            .where('t.debitedAccountId = :id', {id})
            .orWhere('t.creditedAccountId = :id', {id})
            .andWhere('t.createdAt > :startDate', {startDate: new Date(dates.dataStart)})
            .andWhere('t.createdAt < :endDate', {endDate: new Date(dates.dataEnd)})
            .getMany();

        return transactions;
    }

    public findByCashOut = async (id: number, dates: FilterInfo) => {

        // if(dates !== null) {
        //     transactions = await this.transactionRepository
        //     .createQueryBuilder('t')
        //     .where('t.debitedAccountId = :id', {id})
        //     .andWhere('t.createdAt > :startDate', 
        //         {startDate: new Date(dates.dataStart || new Date(1111, 11, 11))})
        //     .andWhere('t.createdAt < :endDate', 
        //         {endDate: new Date(dates.dataEnd || new Date())})
        //     .getMany();
        // }

        let transactions = await this.transactionRepository
            .find({ where: { debitedAccountId: id }})

        return transactions;
    }

    public findByCashIn = async (id: number, dates: FilterInfo) => {
        let transactions;

        if(dates !== null) {
            transactions = await this.transactionRepository
            .createQueryBuilder('t')
            .where('t.creditedAccountId = :id', {id})
            .andWhere('t.createdAt > :startDate', 
                {startDate: new Date(dates.dataStart || new Date(1111, 11, 11))})
            .andWhere('t.createdAt < :endDate', 
                {endDate: new Date(dates.dataEnd || new Date())})
            .getMany();
        }
        // else {
        //     transactions = await this.transactionRepository
        //         .find({ where: {creditedAccountId: id}, select, relations })
        // }

        return transactions;
    }

    private serialize = (transactions: ITransactionMaster[]) => {
        return transactions.map((t: ITransactionMaster) => ({
            id: t.id,
            value: t.value,
            createdAt: t.createdAt,
            debitedAccountId: t.debitedAccountId,
            creditedAccountId: t.creditedAccountId,
            debitedName: t.account.user.username,
            creditedName: t.account2.user.username
        }))

    }
}