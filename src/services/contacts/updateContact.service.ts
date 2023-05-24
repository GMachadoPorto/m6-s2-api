import { iContact, iContactAttRequest, iContactReturn } from "../../interfaces";
import { contactRepository } from "../../repositories";
import { contactSchemaReturn } from "../../schemas";

export const updateContactService = async (
  contactNewData: iContactAttRequest,
  contactId: number
): Promise<iContactReturn> => {
  const contactOldData: iContact | null = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  const contact: iContact = contactRepository.create({
    ...contactOldData,
    ...contactNewData,
  });

  await contactRepository.save(contact);

  const contactReturn: iContactReturn = contactSchemaReturn.parse(contact);

  return contactReturn;
};
