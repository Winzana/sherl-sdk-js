import { Fetcher } from '../../common/api';
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
    return response.data;
  } catch (err) {
    throw errorFactory.create(AnalyticsErr.ANALYTICS_CA_FAILED);
  }
};
