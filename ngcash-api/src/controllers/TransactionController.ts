import { Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { UserJWT } from "../helpers/generateJWT";
import { MyRequest } from "../interfaces";
import { TransactionService } from "../services/TransactionService";

export class TransactionController {
    
    private transactionService = new TransactionService();

    public transfer = async (req: MyRequest, res: Response) => {
        const transfered = await this
            .transactionService.transfer(req.user as UserJWT, req.body)
            
        return res.status(StatusCodes.OK).json({ transfered })
    }

    public findTransactionsByUser = async (req: MyRequest, res: Response) => {
        const transactions = await this
            .transactionService.findTransactionsByUser(req.user as UserJWT)
            
        return res.status(StatusCodes.OK).json({ transactions })
    }

    public findTransactionsByDate = async (req: MyRequest, res: Response) => {
        const transactions = await this
            .transactionService.findTransactionsByDate(req.user as UserJWT, req.body)
            
        return res.status(StatusCodes.OK).json({ transactions })
    }

    public findTransactionsByCashIn = async (req: MyRequest, res: Response) => {
        const transactions = await this
            .transactionService.findTransactionsByCashIn(req.user as UserJWT, req.body)
            
        return res.status(StatusCodes.OK).json({ transactions })
    }

    public findTransactionsByCashOut = async (req: MyRequest, res: Response) => {
        const transactions = await this
            .transactionService.findTransactionsByCashOut(req.user as UserJWT, req.body)
            
        return res.status(StatusCodes.OK).json({ transactions })
    }
    
}