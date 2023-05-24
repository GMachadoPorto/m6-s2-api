import { Request, Response } from "express";
import { iContactAttRequest, iContactReturn } from "../interfaces";
import {
  createContactService,
  deleteContactService,
  listContactsService,
  retrieveContactService,
  updateContactService,
} from "../services";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = res.locals.user.id;

  const contact: iContactReturn = await createContactService(req.body, userId);

  return res.status(201).json(contact);
};

const listContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = res.locals.user.id;

  const contacts: iContactReturn[] = await listContactsService(userId);

  return res.json(contacts);
};

const retrieveContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: number = parseInt(req.params.id);

  const contact: iContactReturn = await retrieveContactService(contactId);

  return res.json(contact);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: number = parseInt(req.params.id);

  const contactNewData: iContactAttRequest = req.body;

  const contact: iContactReturn = await updateContactService(
    contactNewData,
    contactId
  );

  return res.json(contact);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: number = parseInt(req.params.id);

  await deleteContactService(contactId);

  return res.status(204).send();
};

export {
  createContactController,
  listContactsController,
  retrieveContactController,
  updateContactController,
  deleteContactController,
};
