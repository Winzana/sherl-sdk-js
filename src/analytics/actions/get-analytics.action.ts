import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoint';
import { AnalyticsErr, errorFactory } from '../errors';
import { IAnalyticResponse, IAnalyticsInputDto, ITrace } from '../types';

/**
 * Get analytics data.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IAnalyticsInputDto} filters - Optional filters for the analytics data.
 * @returns {Promise<ITrace>} A promise that resolves to the analytics data.
 */
export const getAnalytics = async (
  fetcher: Fetcher,
  filters?: IAnalyticsInputDto,
): Promise<ITrace> => {
  try {
    const response = await fetcher.get<ITrace>(endpoints.ANALYTICS, filters);
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch (error.status) {
      case 403:
        throw errorFactory.create(AnalyticsErr.ANALYTICS_FORBIDDEN_ERROR);
      case 404:
        throw errorFactory.create(AnalyticsErr.ANALYTICS_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(AnalyticsErr.ANALYTICS_FAILED),
        );
    }
  }
};
