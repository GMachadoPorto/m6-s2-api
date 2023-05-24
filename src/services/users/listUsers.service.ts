import { iUser, iUserReturn } from "../../interfaces";
import { userRepository } from "../../repositories";
import { listUserSchemaReturn } from "../../schemas";

export const listUsersService = async (): Promise<iUserReturn[]> => {
  const users: iUser[] = await userRepository.find();

  const usersReturn: iUserReturn[] = listUserSchemaReturn.parse(users);

  return usersReturn;
};
