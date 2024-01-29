import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { ContactErr, errorFactory } from '../errors';
import { ContactInputDto } from '../types';

export const sendContact = async (
  fetcher: Fetcher,
  contact: ContactInputDto,
): Promise<boolean> => {
  try {
    const response = await fetcher.post<boolean>(endpoints.CONTACT, contact);
    return true;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(ContactErr.SEND_CONTACT_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(ContactErr.SEND_CONTACT_FAILED),
        );
    }
  }
};
