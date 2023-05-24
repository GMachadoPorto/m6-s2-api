import { NextFunction, Request, Response } from "express";
import { iContact } from "../interfaces";
import { contactRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyContactExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const contactId: number = parseInt(req.params.id);

  const contact: iContact | null = await contactRepository.findOne({
    where: {
      id: contactId,
    },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  return next();
};
