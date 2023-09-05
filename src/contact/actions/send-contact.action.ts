import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { ContactErr, errorFactory } from '../errors';
import { IContactBody } from '../types';

export const sendContact = async (fetcher: Fetcher, contact: IContactBody) => {
  const response = await fetcher
    .post<IContactBody>(endpoints.CONTACT, contact)
    .catch((_err) => {
      throw errorFactory.create(ContactErr.CONTACT_FAILED);
    });
  if (response.status !== 201) {
    throw errorFactory.create(ContactErr.CONTACT_FAILED);
  }
  return true;
};
