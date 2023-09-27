import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { ContactErr, errorFactory } from '../errors';
import { ContactInputDto } from '../types';

export const sendContact = async (
  fetcher: Fetcher,
  contact: ContactInputDto,
) => {
  const response = await fetcher
    .post<any>(endpoints.CONTACT, contact)
    .catch(() => {
      throw errorFactory.create(ContactErr.CONTACT_FAILED);
    });
  if (response.status !== 201) {
    throw errorFactory.create(ContactErr.CONTACT_FAILED);
  }
  return true;
};
