import { iUserRequest, iUserReturn } from "../../interfaces";
import { User } from "../../entities";
import { userSchemaReturn } from "../../schemas";
import { userRepository } from "../../repositories";

export const createUserService = async (
  userData: iUserRequest
): Promise<iUserReturn> => {
  const newUser: User = userRepository.create({ ...userData });

  await userRepository.save(newUser);

  const userReturn: iUserReturn = userSchemaReturn.parse(newUser);

  return userReturn;
};
