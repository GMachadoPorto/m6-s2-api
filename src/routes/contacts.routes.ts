import { Router } from "express";
import {
  verifyBodyData,
  verifyContactEmailAlreadyExists,
  verifyContactExists,
  verifyIsUserContact,
  verifyTokenIsValid,
} from "../middlewares";
import { contactAttSchemaRequest, contactSchemaRequest } from "../schemas";
import {
  createContactController,
  deleteContactController,
  listContactsController,
  retrieveContactController,
  updateContactController,
} from "../controllers";

export const contactsRoutes = Router();

contactsRoutes.post(
  "",
  verifyBodyData(contactSchemaRequest),
  verifyTokenIsValid,
  verifyContactEmailAlreadyExists,
  createContactController
);

contactsRoutes.get("", verifyTokenIsValid, listContactsController);

contactsRoutes.get(
  "/:id",
  verifyTokenIsValid,
  verifyContactExists,
  verifyIsUserContact,
  retrieveContactController
);

contactsRoutes.patch(
  "/:id",
  verifyBodyData(contactAttSchemaRequest),
  verifyTokenIsValid,
  verifyContactExists,
  verifyIsUserContact,
  updateContactController
);

contactsRoutes.delete(
  "/:id",
  verifyTokenIsValid,
  verifyContactExists,
  verifyIsUserContact,
  deleteContactController
);
