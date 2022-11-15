import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";

export class UserController {
    
    private userRepository = new UserRepository();

    public create = async (request: Request, response: Response) => {
        const user = this.userRepository.create(request.body)
        return response.json({user})
    }

    
}