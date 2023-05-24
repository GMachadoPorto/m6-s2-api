import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const verifyBodyData =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const validatedBody = schema.parse(req.body);

    req.body = validatedBody;

    next();
  };
