import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express";

import { handleErrors } from "./middlewares";
import { contactsRoutes, loginRoutes, usersRoutes } from "./routes";

const app: Application = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrors);

export default app;
