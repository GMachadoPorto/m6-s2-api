import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const verifyIsIdOwner = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idRequest: number = parseInt(req.params.id);

  const idLogged: number = parseInt(res.locals.user.id);

  if (idRequest !== idLogged) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
