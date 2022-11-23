import { jar } from 'superagent';
import {AppDataSource} from '../data-source';
import {Transaction} from '../entities/Transaction';
import {
	ITransactionSerial,
	type FilterInfo,
	type ITransactionMaster,
	type TransactionData,
} from '../interfaces';

const select = {
	account: {user: {username: true}},
	account2: {user: {username: true}},
};

const relations = {
	account2: {user: true},
	account: {user: true},
};

export class TransactionRepository {
	private readonly transactionRepository = AppDataSource.getRepository(Transaction);

	public transfer = async (transaction: TransactionData) => {
		const transactionObj = this.transactionRepository.create(transaction);
		const transactionInserted = await this.transactionRepository.save(transactionObj);
		return transactionInserted;
	};

	public findTransactionsByUser = async (id: number) => {
		const transactions = await this.transactionRepository.find({where: [
			{debitedAccountId: id},
			{creditedAccountId: id},
		], select, relations, order: {
			createdAt: 'DESC',
		}});

		return this.serialize(transactions);
	};

	public findByDate = async (id: number, dates: FilterInfo) => {
		const transactions = await this.findTransactionsByUser(id);
		return this.filterByDate(transactions, dates);
	};

	public findByCashOut = async (id: number, dates: FilterInfo) => {
		let transactions = await this.transactionRepository
			.find({where: {debitedAccountId: id}, select, relations, order: {
				createdAt: 'DESC',
			}});

		if(Object.keys(dates).length === 0) {
			return this.serialize(transactions);
		} else {
			let serialized = this.serialize(transactions);
			return this.filterByDate(serialized, dates)
		}
	};

	public findByCashIn = async (id: number, dates: FilterInfo) => {
		let transactions = await this.transactionRepository
			.find({where: {creditedAccountId: id}, select, relations, order: {
				createdAt: 'DESC',
			}});

		if(Object.keys(dates).length === 0) {
			return this.serialize(transactions);
		} else {
			let serialized = this.serialize(transactions);
			return this.filterByDate(serialized, dates)
		}
	};

	private readonly filterByDate = (transactions: ITransactionSerial[], dates: FilterInfo) => {
		return transactions.filter((t: ITransactionSerial) => {
			const { dataEnd, dataStart } = dates;
			const newDate = new Date(t.createdAt);
			const data1 = String(dataStart).split("/");
			const data2 = String(dataEnd).split("/");
			const start = new Date(Number(data1[2]), Number(data1[1]), Number(data1[0]));
			const end = new Date(Number(data2[2]), Number(data2[1]), Number(data2[0]));
			if(newDate >= start && newDate <= end) {
				return t
			}	
		})
	}

	private readonly serialize = (transactions: ITransactionMaster[]) => transactions
		.map((t: ITransactionMaster) => ({
			id: t.id,
			value: t.value,
			createdAt: t.createdAt,
			debitedAccountId: t.debitedAccountId,
			creditedAccountId: t.creditedAccountId,
			debitedName: t.account.user.username,
			creditedName: t.account2.user.username,
		}));
}
