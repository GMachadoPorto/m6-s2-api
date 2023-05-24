import { Router } from "express";

import { loginSchemaRequest } from "../schemas";
import { verifyBodyData } from "../middlewares";
import { userLoginController } from "../controllers";

export const loginRoutes = Router();

loginRoutes.post("", verifyBodyData(loginSchemaRequest), userLoginController);
