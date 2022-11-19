import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { UserService } from "../services/UserService";

export class UserController {
    
    private userService = new UserService();

    public create = async (req: Request, res: Response) => {
        const user = await this.userService.create(req.body)
        console.log(req.body, user)
        return res.status(StatusCodes.CREATED).json({ user })
    }

    public login = async (req: Request, res: Response) => {
        const token = await this.userService.login(req.body)
        console.log(req.body, token)
        return res.status(StatusCodes.OK).json({ token })
    }
    
}