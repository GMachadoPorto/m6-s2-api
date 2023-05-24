import { iContact } from "../../interfaces";
import { contactRepository } from "../../repositories";

export const deleteContactService = async (
  contactId: number
): Promise<void> => {
  const contact: iContact | null = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  await contactRepository.delete(contact!);

  return;
};
