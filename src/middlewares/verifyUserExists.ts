import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { iUser } from "../interfaces";
import { userRepository } from "../repositories";

export const verifyUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userIdRequest: number | undefined = parseInt(req.params.id);

  const userWithId: iUser | null = await userRepository.findOne({
    where: {
      id: userIdRequest,
    },
  });

  if (!userWithId) {
    throw new AppError("User not found", 404);
  }

  return next();
};
