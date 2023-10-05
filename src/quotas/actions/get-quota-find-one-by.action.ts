import { Fetcher } from '../../common/api';
import { QuotaErr, errorFactory } from '../errors/errors';

import { IQuotaFilter, IQuota } from '../types';
import { endpoints } from '../api/endpoints';

export const getQuotaFindOneBy = async (
  fetcher: Fetcher,
  filters?: IQuotaFilter,
): Promise<IQuota> => {
  try {
    const response = await fetcher.get<IQuota>(
      endpoints.GET_QUOTA_FIND_ONE_BY,
      filters,
    );

    return response.data;
  } catch (error) {
    throw errorFactory.create(QuotaErr.FETCH_FAILED);
  }
};
