import { z } from "zod";

const loginSchemaRequest = z.object({
  email: z.string().email(),
  password: z.string(),
});

export { loginSchemaRequest };
