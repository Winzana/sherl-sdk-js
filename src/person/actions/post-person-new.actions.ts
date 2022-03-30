import { ApiResponse } from '../../common/api';
import { IAddress } from '../../common/types';
import { PersonApi } from '../api/client';
import { IPersonNew } from '../types';

/**
 *
 * @param data
 * @returns
 */
export const addNewPerson = async (data: {
  firstName: string;
  lastName: string;
  address?: IAddress;
  phoneNumber?: string;
  mobilePhoneNumber: string;
  birthDate: Date;
  email: string;
  nationality?: string;
  jobTitle?: string;
  gender?: string;
  faxNumber?: string;
  affiliation?: {
    id: string;
    uri: string;
    legalName: string;
    location: {};
    subOrganizations: [string];
  };
}): Promise<string> => {
  let response: ApiResponse<PersonApi> | null = null;
  try {
    response = await PersonApi.postPersonNew(data);
  } catch ({ response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return JSON.stringify(response.data);
  }

  throw new Error('Empty response from API');
};
