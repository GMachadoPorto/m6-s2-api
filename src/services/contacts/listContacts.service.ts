import { iContact, iContactReturn, iUser } from "../../interfaces";
import { contactRepository, userRepository } from "../../repositories";
import { listContactSchemaReturn } from "../../schemas";

export const listContactsService = async (
  userId: number
): Promise<iContactReturn[]> => {
  const userData: iUser | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const contacts: iContact[] = await contactRepository.find({
    where: {
      user: userData!,
    },
    relations: {
      user: true,
    },
  });

  const contactsReturn: iContactReturn[] =
    listContactSchemaReturn.parse(contacts);

  return contactsReturn;
};
