import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { iContact } from "../interfaces";
import { contactRepository } from "../repositories";

export const verifyIsUserContact = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId: number = res.locals.user.id;

  const contactId: number = parseInt(req.params.id);

  const contact: iContact | null = await contactRepository.findOne({
    where: {
      id: contactId,
      user: {
        id: userId,
      },
    },
    relations: {
      user: true,
    },
  });

  if (!contact) {
    throw new AppError("Insuficient permission", 403);
  }

  return next();
};
