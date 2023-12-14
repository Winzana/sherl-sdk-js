import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoint';
import { AnalyticsErr, errorFactory } from '../errors';
import { IAnalyticResponse, ICAAnalyticsInputDto } from '../types';

export const getCAAnalytics = async (
  fetcher: Fetcher,
  filters?: ICAAnalyticsInputDto,
): Promise<IAnalyticResponse[]> => {
  try {
    const response = await fetcher.get<IAnalyticResponse[]>(
      endpoints.ANALYTICS_CA,
      filters,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(AnalyticsErr.ANALYTICS_CA_FAILED_FORBIDDEN);
      default:
        throw errorFactory.create(AnalyticsErr.ANALYTICS_CA_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(AnalyticsErr.ANALYTICS_CA_FAILED),
    );
  }
};
