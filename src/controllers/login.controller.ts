import { Request, Response } from "express";
import { userLoginService } from "../services";

const userLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token: string = await userLoginService(req.body);

  return res.json({ token: token });
};

export { userLoginController };
