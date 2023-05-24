import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { contactRepository } from "../repositories";
import { iContact } from "../interfaces";

export const verifyContactEmailAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const emailRequest: string | undefined = req.body.email;

  if (!emailRequest) {
    return next();
  }

  const contactWithEmail: iContact | null = await contactRepository.findOne({
    where: {
      email: emailRequest,
    },
  });

  if (contactWithEmail) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
