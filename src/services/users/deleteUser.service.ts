import { iUser } from "../../interfaces";
import { userRepository } from "../../repositories";

export const deleteUserService = async (userId: number): Promise<void> => {
  const user: iUser | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  await userRepository.delete(user!);

  return;
};
