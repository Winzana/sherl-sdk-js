import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoint';
import { AnalyticsErr, errorFactory } from '../errors';
import { IAnalyticResponse, IAnalyticsInputBaseDto } from '../types';

/**
 * Get audience analytics data.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IAnalyticsInputBaseDto} filters - Optional filters for the audience analytics data.
 * @returns {Promise<IAnalyticResponse[]>} A promise that resolves to an array of audience analytics data.
 */
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
  } catch (error: SherlError | Error | any) {
    switch (error.status) {
      case 403:
        throw errorFactory.create(
          AnalyticsErr.ANALYTICS_AUDIENCES_FAILED_FORBIDDEN,
        );
      default:
        throw getSherlError(
          error,
          errorFactory.create(AnalyticsErr.ANALYTICS_AUDIENCES_FAILED),
        );
    }
  }
};
