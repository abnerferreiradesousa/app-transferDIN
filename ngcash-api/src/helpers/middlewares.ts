import { NextFunction, Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IErrorHandler, MyRequest } from '../interfaces';
import jwt from 'jsonwebtoken';

const errorMessage = (status: number, message: string): IErrorHandler => ({
  name: 'Error',
  status,
  message,
});

const errorHandler = (
  err: IErrorHandler,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
};


const authToken = (req: MyRequest, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'TOKEN_NOT_FOUND' });
    }

    const tokenIsValid = jwt.verify(
      authorization, 
      process.env.JWT_SECRET = 'hulkEsmaga'
    ) as jwt.JwtPayload;

    req.user = tokenIsValid.data;
    next();
  } catch (error) {
    next(errorMessage(StatusCodes.UNAUTHORIZED, 'Token must be a valid token'));
  }
};

export {
  errorHandler,
  authToken,
  errorMessage
};