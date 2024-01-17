import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoint';
import { AnalyticsErr, errorFactory } from '../errors';
import { IAnalyticResponse, IProductAnalyticsInputDto } from '../types';

/**
 * Get analytics data related to products.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IProductAnalyticsInputDto} filters - Filters for the product analytics data (optional).
 * @returns {Promise<IAnalyticResponse[]>} A promise that resolves to an array of analytics data.
 */
export const getProductsAnalytics = async (
  fetcher: Fetcher,
  filters?: IProductAnalyticsInputDto,
): Promise<IAnalyticResponse[]> => {
  try {
    const response = await fetcher.get<IAnalyticResponse[]>(
      endpoints.ANALYTICS_PRODUCTS,
      filters,
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          AnalyticsErr.ANALYTICS_PRODUCTS_FAILED_FORBIDDEN,
        );
      default:
        throw getSherlError(
          error,
          errorFactory.create(AnalyticsErr.ANALYTICS_PRODUCTS_FAILED),
        );
    }
  }
};
