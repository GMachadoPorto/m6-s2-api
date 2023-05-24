import { iUser, iUserAttRequest, iUserReturn } from "../../interfaces";
import { userRepository } from "../../repositories";
import { userSchemaReturn } from "../../schemas";

export const updateUserService = async (
  userId: number,
  userNewData: iUserAttRequest
): Promise<iUserReturn> => {
  const userOldData: iUser | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const userAtt: iUser = userRepository.create({
    ...userOldData,
    ...userNewData,
  });

  await userRepository.save(userAtt);

  const userReturn: iUserReturn = userSchemaReturn.parse(userAtt);

  return userReturn;
};
