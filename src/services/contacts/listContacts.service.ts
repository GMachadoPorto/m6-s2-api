import { iContact, iContactReturn, iUser } from "../../interfaces";
import { contactRepository, userRepository } from "../../repositories";
import { listContactSchemaReturn } from "../../schemas";

export const listContactsService = async (
  userId: number
): Promise<iContactReturn[]> => {
  const contacts: iContact[] = await contactRepository.find({
    where: {
      user: {
        id: userId,
      },
    },
    relations: {
      user: true,
    },
  });

  const contactsReturn: iContactReturn[] =
    listContactSchemaReturn.parse(contacts);

  return contactsReturn;
};
