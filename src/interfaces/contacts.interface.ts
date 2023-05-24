import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaReturn,
} from "../schemas";
import { DeepPartial } from "typeorm";

type iContact = z.infer<typeof contactSchema>;
type iContactRequest = z.infer<typeof contactSchemaRequest>;
type iContactReturn = z.infer<typeof contactSchemaReturn>;
type iContactAttRequest = DeepPartial<iContactRequest>;

export { iContact, iContactRequest, iContactAttRequest, iContactReturn };
