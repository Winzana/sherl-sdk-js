import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';

/**
 * Resend an SMS verification code to the provided mobile phone number.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} mobilePhoneNumber - The mobile phone number to which the SMS code should be resent.
 * @returns {Promise<boolean>} A promise that resolves to a boolean indicating the success of the resend operation.
 */
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

    switch (response.status) {
      case 200:
        return response.data;
      case 404:
        throw errorFactory.create(AuthErr.PHONE_NUMBER_NOT_FOUND);
      case 403:
        throw errorFactory.create(AuthErr.SMS_ALREADY_SENT);

      default:
        throw errorFactory.create(AuthErr.RE_REQUEST_SMS_CODE_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(AuthErr.RE_REQUEST_SMS_CODE_FAILED),
    );
  }
};
