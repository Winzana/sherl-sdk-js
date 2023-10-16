import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';
import { ILoginResponse } from '../types';

export const validateCode = async (
  fetcher: Fetcher,
  mobilePhoneNumber: string,
  code: string,
): Promise<ILoginResponse> => {
  const response = await fetcher.post<ILoginResponse>(
    endpoints.VALIDATE_SMS_CODE,
    {
      mobilePhoneNumber,
      code,
    },
  );

  if (!response.data) {
    throw errorFactory.create(AuthErr.VALIDATE_SMS_CODE_FAILED);
  }

  return response.data;
};
