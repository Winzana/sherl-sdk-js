import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IProfile } from '../types';
import { errorFactory, IamErr } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { getSherlError } from '../../common/utils/errors';

/**
 * Get an IAM profile by its unique identifier (ID).
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} id - The unique identifier (ID) of the IAM profile to retrieve.
 * @returns {Promise<IProfile>} A promise that resolves to an IProfile object.
 */
export const getIamProfileById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IProfile> => {
  try {
    const response = await fetcher.get<IProfile>(
      StringUtils.bindContext(endpoints.GET_IAM_PROFILE_BY_ID, { id }),
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(IamErr.IAM_GET_PROFILE_BY_ID_FORBIDDEN);
      case 404:
        throw errorFactory.create(IamErr.IAM_PROFILE_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(IamErr.GET_IAM_PROFILE_BY_ID_FAILED),
        );
    }
  }
};
