import { Request, Response } from "express";
import {
  createUserService,
  deleteUserService,
  listUsersService,
  retrieveUserService,
  updateUserService,
} from "../services";
import { iUserReturn } from "../interfaces";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: iUserReturn = await createUserService(req.body);

  return res.status(201).json(user);
};

const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: iUserReturn[] = await listUsersService();

  return res.json(users);
};

const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);

  const user: iUserReturn = await retrieveUserService(userId);

  return res.json(user);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);

  const user: iUserReturn = await updateUserService(userId, req.body);

  return res.json(user);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);

  await deleteUserService(userId);

  return res.status(204).send();
};

export {
  createUserController,
  listUsersController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
};
