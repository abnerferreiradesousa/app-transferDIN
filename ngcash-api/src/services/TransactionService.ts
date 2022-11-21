import {StatusCodes} from 'http-status-codes';
import {Transaction} from '../entities/Transaction';
import {type UserJWT} from '../helpers/generateJWT';
import {errorMessage} from '../helpers/middlewares';
import {type FilterInfo, type TransactionData, type TransferData} from '../interfaces';
import {AccountRepository} from '../repositories/AccountRepository';
import {TransactionRepository} from '../repositories/TransactionRepository';
import {UserRepository} from '../repositories/UserRepository';

export class TransactionService {
	private readonly transactionRepository = new TransactionRepository();
	private readonly accountRepository = new AccountRepository();
	private readonly userRepository = new UserRepository();

	public transfer = async (senderInfo: UserJWT, recieverInfo: TransferData): Promise<TransactionData> => {
		const [recieverData, senderAccount] = await this
			.validate(senderInfo, recieverInfo);

		const incrementReciever = await this.accountRepository
			.incrementBalance(recieverData.id, recieverInfo.value);

		const decrementSender = await this.accountRepository
			.decrementBalance(senderAccount.id, recieverInfo.value);

		const transferInfo: TransactionData = {
			value: recieverInfo.value,
			debitedAccountId: decrementSender?.id,
			creditedAccountId: incrementReciever?.id,
		};

		const trasferedInserted = await this.transactionRepository.transfer(transferInfo);

		return trasferedInserted;
	};

	public findTransactionsByUser = async (user: UserJWT) => {
		const transactions = await this
			.transactionRepository.findTransactionsByUser(user.id);

		return transactions;
	};

	public findTransactionsByDate = async (user: UserJWT, filterInfo: FilterInfo) => {
		const transactions = await this.transactionRepository
			.findByDate(user.id, filterInfo);
		return transactions;
	};

	public findTransactionsByCashIn = async (user: UserJWT, filterInfo: FilterInfo) => {
		const transactions = await this.transactionRepository
			.findByCashIn(user.id, filterInfo);

		return transactions;
	};

	public findTransactionsByCashOut = async (user: UserJWT, filterInfo: FilterInfo) => {
		const transactions = await this.transactionRepository
			.findByCashOut(user.id, filterInfo);

		return transactions;
	};

	private readonly validate = async (senderInfo: UserJWT, recieverInfo: TransferData) => {
		if (senderInfo.username === recieverInfo.usernameCredited) {
			throw errorMessage(
				StatusCodes.CONFLICT,
				'Não pode efetuar transferências para você mesmo!');
		}

		const senderAccount = await this
			.accountRepository.findBalanceByUserLogged(senderInfo.id);

		const recieverData = await this
			.userRepository.findByUsername(recieverInfo.usernameCredited);

		if (senderAccount.balance < recieverInfo.value) {
			throw errorMessage(StatusCodes.CONFLICT, 'Saldo insuficiente!');
		}

		return [recieverData, senderAccount];
	};
}
