import { iContact, iContactReturn } from "../../interfaces";
import { contactRepository } from "../../repositories";
import { contactSchemaReturn } from "../../schemas";

export const retrieveContactService = async (
  contactId: number
): Promise<iContactReturn> => {
  const contact: iContact | null = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  const contactReturn: iContactReturn = contactSchemaReturn.parse(contact);

  return contactReturn;
};
