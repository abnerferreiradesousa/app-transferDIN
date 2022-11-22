import {type Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {type UserJWT} from '../helpers/generateJWT';
import {FilterInfo, type MyRequest} from '../interfaces';
import {TransactionService} from '../services/TransactionService';

export class TransactionController {
	private readonly transactionService = new TransactionService();

	public transfer = async (req: MyRequest, res: Response) => {
		const transfered = await this
			.transactionService.transfer(req.user as UserJWT, req.body);

		return res.status(StatusCodes.OK).json({transfered});
	};

	public findTransactionsByUser = async (req: MyRequest, res: Response) => {
		const transactions = await this
			.transactionService.findTransactionsByUser(req.user as UserJWT);

		return res.status(StatusCodes.OK).json({transactions});
	};

	public findByDate = async (req: MyRequest, res: Response) => {
		// console.log(req.body)
		const transactions = await this
			.transactionService.findByDate(req.user as UserJWT, req.body as FilterInfo);
		return res.status(StatusCodes.OK).json({transactions});
	};

	public findTransactionsByCashIn = async (req: MyRequest, res: Response) => {
		const transactions = await this
			.transactionService.findTransactionsByCashIn(req.user as UserJWT, req.body);

		return res.status(StatusCodes.OK).json({transactions});
	};

	public findTransactionsByCashOut = async (req: MyRequest, res: Response) => {
		const transactions = await this
			.transactionService.findTransactionsByCashOut(req.user as UserJWT, req.body);

		return res.status(StatusCodes.OK).json({transactions});
	};
}
