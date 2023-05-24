import {
  iContact,
  iContactRequest,
  iContactReturn,
  iUser,
} from "../../interfaces";
import { contactRepository, userRepository } from "../../repositories";
import { contactSchemaReturn } from "../../schemas";

export const createContactService = async (
  contactData: iContactRequest,
  userId: number
): Promise<iContactReturn> => {
  const userData: iUser | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const contactDataRequest = { ...contactData, user: { ...userData! } };

  const contact: iContact = contactRepository.create(contactDataRequest);

  await contactRepository.save(contact);

  const contactReturn: iContactReturn = contactSchemaReturn.parse(contact);

  return contactReturn;
};
