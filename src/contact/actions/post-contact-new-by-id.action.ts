import { ApiResponse } from '../../common/api';
import { ContactApi } from '../api/client';
import { IContactNew } from '../types';

/**
 *
 * @param data
 * @returns
 */
export const addNewContactMsgById = async (
  id: string,
  data: IContactNew,
): Promise<string> => {
  let response: ApiResponse<ContactApi> | null = null;
  try {
    response = await ContactApi.postContactNewById(id, data);
  } catch ({ response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return JSON.stringify(response.data);
  }

  throw new Error('Empty response from API');
};
