import { ApiResponse, Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { IAddressRegister } from '../types';
import { StringUtils } from '../../common/utils/string';

export const updateAddress = async (
  fetcher: Fetcher,
  id: string,
  params: Partial<IAddressRegister>,
) => {
  let response: ApiResponse<IAddressRegister> | null = null;

  try {
    response = await fetcher
      .put<IAddressRegister>(
        StringUtils.bindContext(endpoints.UPDATE_ADDRESS, { id }),
        params,
      )
      .catch(() => {
        throw errorFactory.create(PersonErr.PUT_ADDRESS_FAILED);
      });
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw errorFactory.create(PersonErr.PUT_ADDRESS_FAILED);
  }

  if (!response.data) {
    throw errorFactory.create(PersonErr.PUT_ADDRESS_FAILED);
  }

  return response.data;
};
