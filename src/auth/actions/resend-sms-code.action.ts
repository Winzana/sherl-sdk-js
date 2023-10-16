import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';

export const resendSMSCode = async (
  fetcher: Fetcher,
  mobilePhoneNumber: string,
): Promise<boolean> => {
  const response = await fetcher.post<boolean>(endpoints.RE_REQUEST_SMS_CODE, {
    mobilePhoneNumber,
  });

  if (!response.data) {
    throw errorFactory.create(AuthErr.RE_REQUEST_SMS_CODE_FAILED);
  }

  return response.data;
};
