import { Router } from "express";

import {
  verifyBodyData,
  verifyIsIdOwner,
  verifyTokenIsValid,
  verifyUserEmailAlreadyExists,
  verifyUserExists,
} from "../middlewares";
import { userSchemaRequest, userAttSchemaRequest } from "../schemas";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  retrieveUserController,
  updateUserController,
} from "../controllers";

export const usersRoutes = Router();

usersRoutes.post(
  "",
  verifyBodyData(userSchemaRequest),
  verifyUserEmailAlreadyExists,
  createUserController
);
usersRoutes.get("", listUsersController);
usersRoutes.get(
  "/:id",
  verifyTokenIsValid,
  verifyIsIdOwner,
  verifyUserExists,
  retrieveUserController
);
usersRoutes.patch(
  "/:id",
  verifyBodyData(userAttSchemaRequest),
  verifyTokenIsValid,
  verifyIsIdOwner,
  verifyUserExists,
  verifyUserEmailAlreadyExists,
  updateUserController
);
usersRoutes.delete(
  "/:id",
  verifyTokenIsValid,
  verifyIsIdOwner,
  verifyUserExists,
  deleteUserController
);
