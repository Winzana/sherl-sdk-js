import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { ContactErr, errorFactory } from '../errors';
import { ContactInputDto } from '../types';

export const contactPerson = async (
  fetcher: Fetcher,
  contact: ContactInputDto,
  id: string,
) => {
  const response = await fetcher
    .post<any>(
      StringUtils.bindContext(endpoints.CONTACT_PERSON, { id }),
      contact,
    )
    .catch(() => {
      throw errorFactory.create(ContactErr.CONTACT_PERSON_FAILED);
    });
  if (response.status !== 201) {
    throw errorFactory.create(ContactErr.CONTACT_PERSON_FAILED);
  }
  return true;
};
