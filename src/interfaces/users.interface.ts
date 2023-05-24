import { z } from "zod";

import { userSchema, userSchemaRequest, userSchemaReturn } from "../schemas";
import { DeepPartial } from "typeorm";

type iUser = z.infer<typeof userSchema>;
type iUserRequest = z.infer<typeof userSchemaRequest>;
type iUserAttRequest = DeepPartial<iUserRequest>;
type iUserReturn = z.infer<typeof userSchemaReturn>;

export { iUser, iUserRequest, iUserAttRequest, iUserReturn };
