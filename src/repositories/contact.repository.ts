import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities";

export const contactRepository: Repository<Contact> =
  AppDataSource.getRepository(Contact);
