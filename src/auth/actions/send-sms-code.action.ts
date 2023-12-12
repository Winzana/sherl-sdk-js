import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';

export const sendSMSCode = async (
  fetcher: Fetcher,
  mobilePhoneNumber: string,
): Promise<boolean> => {
  try {
    const response = await fetcher.post<boolean>(endpoints.REQUEST_SMS_CODE, {
      mobilePhoneNumber,
    });

    if (response.status == 404) {
      throw errorFactory.create(AuthErr.REQUEST_SMS_CODE_NOT_FOUND);
    }

    if (!response.data) {
      throw errorFactory.create(AuthErr.REQUEST_SMS_CODE_FAILED);
    }

    return response.data;
  } catch (err) {
    throw errorFactory.create(AuthErr.REQUEST_SMS_CODE_FAILED);
  }
};
