import { Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { User } from "../entities/User";
import { MyRequest } from "../interfaces";
import { TransactionService } from "../services/TransactionService";

export class TransactionController {
    
    private transactionService = new TransactionService();

    public transfer = async (req: MyRequest, res: Response) => {
        const transfered = await this
            .transactionService.transfer(req.user as User, req.body)
            
        return res.status(StatusCodes.OK).json({ transfered })
    }
    
}