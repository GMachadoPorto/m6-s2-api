import { iUser, iUserReturn } from "../../interfaces";
import { userRepository } from "../../repositories";
import { userSchemaReturn } from "../../schemas";

export const retrieveUserWithTokenService = async (
  userId: number
): Promise<iUserReturn> => {
  const user: iUser | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const userReturn: iUserReturn = userSchemaReturn.parse(user);

  return userReturn;
};
