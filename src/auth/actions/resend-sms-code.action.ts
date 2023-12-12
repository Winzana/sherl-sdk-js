import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';

export const resendSMSCode = async (
  fetcher: Fetcher,
  mobilePhoneNumber: string,
): Promise<boolean> => {
  try {
    const response = await fetcher.post<boolean>(
      endpoints.RE_REQUEST_SMS_CODE,
      {
        mobilePhoneNumber,
      },
    );

    if (response.status == 404) {
      throw errorFactory.create(AuthErr.RE_REQUEST_SMS_CODE_NOT_FOUND);
    }

    if (!response.data) {
      throw errorFactory.create(AuthErr.RE_REQUEST_SMS_CODE_FAILED);
    }

    return response.data;
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(AuthErr.RE_REQUEST_SMS_CODE_FAILED),
    );
  }
};
