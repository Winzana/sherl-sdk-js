import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
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

    switch (response.status) {
      case 200:
        return response.data;
      case 404:
        throw errorFactory.create(AuthErr.PHONE_NUMBER_NOT_FOUND);
      case 403:
        throw errorFactory.create(AuthErr.SMS_ALREADY_SENT);

      default:
        throw errorFactory.create(AuthErr.REQUEST_SMS_CODE_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(AuthErr.REQUEST_SMS_CODE_FAILED),
    );
  }
};
