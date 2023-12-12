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

    if (response.status == 404) {
      throw errorFactory.create(AuthErr.VALIDATE_SMS_CODE_NOT_FOUND);
    }

    if (!response.data) {
      throw errorFactory.create(AuthErr.VALIDATE_SMS_CODE_FAILED);
    }

    return response.data;
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(AuthErr.VALIDATE_SMS_CODE_FAILED),
    );
  }
};
