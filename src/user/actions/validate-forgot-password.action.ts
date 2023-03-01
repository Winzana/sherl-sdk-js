import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { errorFactory, UserErr } from '../errors';
import { IValidateForgotPasswordDto } from '../types';

export const validateForgotPassword = async (
  fetcher: Fetcher,
  data: IValidateForgotPasswordDto,
): Promise<any> => {
  try {
    const response = await fetcher
      .post<any>(endpoints.VALIDATE_FORGOT_PASSWORD, data)
      .catch(() => {
        throw errorFactory.create(UserErr.VALIDATE_FORGOT_PASSWORD_FAILED);
      });
    return response.data;
  } catch (err) {
    throw errorFactory.create(UserErr.VALIDATE_FORGOT_PASSWORD_FAILED);
  }
};
