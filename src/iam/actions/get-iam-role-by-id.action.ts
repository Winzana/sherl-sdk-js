import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IRole } from '../types';
import { errorFactory, IamErr } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { getSherlError } from '../../common/utils/errors';

/**
 * Get an IAM role by its unique identifier (ID).
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} id - The unique identifier (ID) of the IAM role to retrieve.
 * @returns {Promise<IRole>} A promise that resolves to an IRole object.
 */

export const getIamRoleById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IRole> => {
  try {
    const response = await fetcher.get<IRole>(
      StringUtils.bindContext(endpoints.GET_IAM_ROLE_BY_ID, { id }),
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(IamErr.IAM_GET_ROLE_BY_ID_FORBIDDEN);
      case 404:
        throw errorFactory.create(IamErr.IAM_ROLE_NOT_FOUND_ERROR);
      default:
        throw errorFactory.create(IamErr.FETCH_FAILED);
    }
  } catch (err) {
    throw getSherlError(err, errorFactory.create(IamErr.FETCH_FAILED));
  }
};
