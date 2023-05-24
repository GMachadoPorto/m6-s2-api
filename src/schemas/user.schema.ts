import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(120),
  email: z.string().email().max(60),
  telephone: z.string().max(11),
  password: z.string().max(120),
  createdAt: z.string(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
});

const userAttSchemaRequest = userSchemaRequest.partial();

const userSchemaReturn = userSchema.omit({
  password: true,
});

const listUserSchemaReturn = userSchemaReturn.array();

export {
  userSchema,
  userSchemaRequest,
  userAttSchemaRequest,
  userSchemaReturn,
  listUserSchemaReturn,
};
