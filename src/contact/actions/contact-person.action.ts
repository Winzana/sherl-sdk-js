import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { ContactErr, errorFactory } from '../errors';
import { ContactInputDto } from '../types';

export const contactPerson = async (
  fetcher: Fetcher,
  contact: ContactInputDto,
  id: string,
): Promise<boolean> => {
  try {
    const response = await fetcher.post<boolean>(
      StringUtils.bindContext(endpoints.CONTACT_PERSON, { id }),
      contact,
    );
    return true;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(ContactErr.CONTACT_PERSON_FORBIDDEN);
      case 404:
        throw errorFactory.create(ContactErr.CONTACT_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(ContactErr.CONTACT_PERSON_FAILED),
        );
    }
  }
};
