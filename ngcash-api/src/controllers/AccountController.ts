import { Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { UserJWT } from "../helpers/generateJWT";
import { MyRequest } from "../interfaces";
import { AccountService } from "../services/AccountService";

export class AccountController {
    
    private accountService = new AccountService();

    public findBalanceByUserLogged = async (req: MyRequest, res: Response) => {
        const account = await this
            .accountService
            .findBalanceByUserLogged(req.user as UserJWT)
            
        return res.status(StatusCodes.OK).json({ account })
    }
    
}