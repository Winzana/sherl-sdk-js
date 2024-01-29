import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';
import { ILoginResponse } from '../types';

/**
 * Validate an SMS code sent to a mobile phone number.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} mobilePhoneNumber - The mobile phone number to which the SMS code was sent.
 * @param {string} code - The SMS validation code to be validated.
 * @returns {Promise<ILoginResponse>} A promise that resolves to a login response if the code is valid.
 */
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

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
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
        throw getSherlError(
          error,
          errorFactory.create(AuthErr.VALIDATE_SMS_CODE_FAILED),
        );
    }
  }
};
