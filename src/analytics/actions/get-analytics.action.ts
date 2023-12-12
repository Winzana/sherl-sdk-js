import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoint';
import { AnalyticsErr, errorFactory } from '../errors';
import { IAnalyticResponse, IAnalyticsInputDto } from '../types';

export const getAnalytics = async (
  fetcher: Fetcher,
  filters?: IAnalyticsInputDto,
): Promise<IAnalyticResponse[]> => {
  try {
    const response = await fetcher.get<IAnalyticResponse[]>(
      endpoints.ANALYTICS,
      filters,
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          AnalyticsErr.ANALYTICS_AUDIENCES_FAILED_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(AnalyticsErr.ANALYTICS_NOT_FOUND);
      default:
        throw errorFactory.create(AnalyticsErr.ANALYTICS_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(AnalyticsErr.ANALYTICS_FAILED),
    );
  }
};
