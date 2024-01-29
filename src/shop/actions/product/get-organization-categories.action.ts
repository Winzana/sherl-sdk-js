import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { ICategoryResponse } from '../../types';

/**
 * Retrieves all product categories associated with a specific organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization whose product categories are being retrieved.
 * @returns {Promise<ICategoryResponse[]>} A promise that resolves to an array of category responses specific to the given organization.
 */
export const getOrganizationCategories = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<ICategoryResponse[]> => {
  try {
    const response = await fetcher.get<ICategoryResponse[]>(
      endpoints.ORGANIZATION_CATEGORIES,
      { organizationId },
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          ProductErr.GET_ORGANIZATION_CATEGORIES_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(ProductErr.ORGANIZATION_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(ProductErr.GET_ORGANIZATION_CATEGORIES_FAILED),
        );
    }
  }
};
