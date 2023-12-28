import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoint';
import { AnalyticsErr, errorFactory } from '../errors';
import { IAnalyticsFindBIInputDto } from '../types';

/**
 * Get Business Intelligence (BI) analytics data.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IAnalyticsFindBIInputDto} filters - Filters for the BI analytics data.
 * @returns {Promise<any>} A promise that resolves to the BI analytics data.
 */
export const getBIAnalytics = async (
  fetcher: Fetcher,
  filters: IAnalyticsFindBIInputDto,
): Promise<any> => {
  try {
    const response = await fetcher.post<any>(endpoints.ANALYTICS_BI, filters);

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(AnalyticsErr.ANALYTICS_BI_FAILED_FORBIDDEN);
      default:
        throw errorFactory.create(AnalyticsErr.ANALYTICS_BI_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(AnalyticsErr.ANALYTICS_BI_FAILED),
    );
  }
};
