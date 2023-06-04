import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { userRepository } from "../repositories";
import { iUser } from "../interfaces";

export const verifyUserEmailIsValid = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const emailRequest: string | undefined = req.body.email;
  const idRequest: number = parseInt(req.params.id);

  if (!emailRequest) {
    return next();
  }

  const userWithEmail: iUser | null = await userRepository.findOne({
    where: {
      email: emailRequest,
    },
  });

  if (userWithEmail && idRequest !== userWithEmail.id) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
