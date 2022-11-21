import {type Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {type UserJWT} from '../helpers/generateJWT';
import {type MyRequest} from '../interfaces';
import {AccountService} from '../services/AccountService';

export class AccountController {
	private readonly accountService = new AccountService();

	public findBalanceByUserLogged = async (req: MyRequest, res: Response) => {
		const account = await this
			.accountService
			.findBalanceByUserLogged(req.user as UserJWT);

		return res.status(StatusCodes.OK).json({account});
	};
}
