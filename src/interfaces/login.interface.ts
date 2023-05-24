import { z } from "zod";
import { loginSchemaRequest } from "../schemas";

type iUserLogin = z.infer<typeof loginSchemaRequest>;

export { iUserLogin };
