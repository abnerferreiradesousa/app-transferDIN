import {type Request, type Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {UserService} from '../services/UserService';

export class UserController {
	private readonly userService = new UserService();

	public create = async (req: Request, res: Response) => {
		const user = await this.userService.create(req.body);
		return res.status(StatusCodes.CREATED).json({user});
	};

	public login = async (req: Request, res: Response) => {
		const userLogged = await this.userService.login(req.body);
		return res.status(StatusCodes.OK).json({userLogged});
	};
}
