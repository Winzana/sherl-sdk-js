import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';
import { ILoginResponse } from '../types';

export const validateCode = async (
  fetcher: Fetcher,
  mobilePhoneNumber: string,
  code: string,
): Promise<ILoginResponse> => {
  try {
    const response = await fetcher.post<ILoginResponse>(
      endpoints.VALIDATE_SMS_CODE,
      {
        mobilePhoneNumber,
        code,
      },
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 401:
        throw errorFactory.create(
          AuthErr.VALIDATE_SMS_CODE_FAILED_UNAUTHORIZED,
        );
      case 404:
        throw errorFactory.create(AuthErr.SMS_CODE_OR_PHONE_NUMBER_NOT_FOUND);
      case 403:
        throw errorFactory.create(AuthErr.VALIDATE_SMS_CODE_FAILED_FORBIDDEN);

      case 498:
        throw errorFactory.create(AuthErr.SMS_VALIDATION_CODE_EXPIRED);

      default:
        throw errorFactory.create(AuthErr.VALIDATE_SMS_CODE_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(AuthErr.VALIDATE_SMS_CODE_FAILED),
    );
  }
};
