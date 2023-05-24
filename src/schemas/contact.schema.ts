import { z } from "zod";
import { userSchemaReturn } from "./user.schema";

const contactSchema = z.object({
  id: z.number(),
  name: z.string().max(120),
  email: z.string().email().max(60),
  telephone: z.string().max(11),
  createdAt: z.string(),
  user: userSchemaReturn,
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  createdAt: true,
  user: true,
});

const contactAttSchemaRequest = contactSchemaRequest.partial();

const contactSchemaReturn = contactSchema;

const listContactSchemaReturn = contactSchemaReturn.array();

export {
  contactSchema,
  contactSchemaRequest,
  contactAttSchemaRequest,
  contactSchemaReturn,
  listContactSchemaReturn,
};
