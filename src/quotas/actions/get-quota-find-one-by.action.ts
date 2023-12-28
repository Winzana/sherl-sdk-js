import { Fetcher } from '../../common/api';
import { QuotaErr, errorFactory } from '../errors/errors';

import { IQuotaFilter, IQuota } from '../types';
import { endpoints } from '../api/endpoints';
import { getSherlError } from '../../common/utils';

/**
 * Retrieves a single quota based on the provided filters.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make API requests.
 * @param {IQuotaFilter} filters - Optional filters to apply when fetching the quota.
 * @returns {Promise<IQuota>} - A promise that resolves to the retrieved quota.
 * @throws {Error} - Throws an error if the API request fails or the quota is forbidden.
 */
export const getQuotaFindOneBy = async (
  fetcher: Fetcher,
  filters?: IQuotaFilter,
): Promise<IQuota> => {
  try {
    const response = await fetcher.get<IQuota>(
      endpoints.GET_QUOTA_FIND_ONE_BY,
      filters,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(QuotaErr.FETCH_QUOTA_FIND_ONE_BY_FORBIDDEN);
      default:
        throw errorFactory.create(QuotaErr.FETCH_FAILED);
    }
  } catch (error) {
    throw getSherlError(error, errorFactory.create(QuotaErr.FETCH_FAILED));
  }
};
