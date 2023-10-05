import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoint';
import { AnalyticsErr, errorFactory } from '../errors';
import { IAnalyticResponse, IAnalyticsInputBaseDto } from '../types';

export const getAudienceAnalytics = async (
  fetcher: Fetcher,
  filters?: IAnalyticsInputBaseDto,
): Promise<IAnalyticResponse[]> => {
  try {
    const response = await fetcher.get<IAnalyticResponse[]>(
      endpoints.ANALYTICS_AUDIENCES,
      filters,
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(AnalyticsErr.ANALYTICS_AUDIENCES_FAILED);
  }
};
