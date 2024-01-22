import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IIamProfilesFilters, IProfile } from '../types';
import { errorFactory, IamErr } from '../errors';
import { getSherlError } from '../../common/utils/errors';

/**
 * Get all IAM profiles based on the provided filters.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IIamProfilesFilters} filters - Filters to apply when fetching IAM profiles.
 * @returns {Promise<IProfile[]>} A promise that resolves to an array of IProfile objects.
 */
export const getAllIamProfiles = async (
  fetcher: Fetcher,
  filters: IIamProfilesFilters,
): Promise<IProfile[]> => {
  try {
    const response = await fetcher.get<IProfile[]>(
      endpoints.GET_ALL_IAM_PROFILES,
      filters,
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(IamErr.IAM_GET_ALL_FORBIDDEN);
      default:
        throw getSherlError(error, errorFactory.create(IamErr.FETCH_FAILED));
    }
  }
};
