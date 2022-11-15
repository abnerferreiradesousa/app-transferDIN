import { NextFunction, Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IErrorHandler } from '../interfaces';

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

export default errorHandler;