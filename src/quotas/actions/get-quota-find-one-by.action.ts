import { Fetcher } from '../../common/api';
import { QuotaErr, errorFactory } from '../errors/errors';

import { IQuotaFilter, IQuota } from '../types';
import { endpoints } from '../api/endpoints';
import { getSherlError } from '../../common/utils';

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
