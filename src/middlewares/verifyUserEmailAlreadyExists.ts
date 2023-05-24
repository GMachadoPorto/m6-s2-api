import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { userRepository } from "../repositories";
import { iUser } from "../interfaces";

export const verifyUserEmailAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const emailRequest: string | undefined = req.body.email;

  if (!emailRequest) {
    return next();
  }

  const userWithEmail: iUser | null = await userRepository.findOne({
    where: {
      email: emailRequest,
    },
  });

  if (userWithEmail) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
