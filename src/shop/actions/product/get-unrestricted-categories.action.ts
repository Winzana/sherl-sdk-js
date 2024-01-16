import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { ICategoryResponse } from '../../types';

/**
 * Retrieves a list of categories that are not restricted by any specific criteria.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @returns {Promise<ICategoryResponse[]>} A promise that resolves to an array of category responses, representing the unrestricted categories.
 */
export const getUnrestrictedCategories = async (
  fetcher: Fetcher,
): Promise<ICategoryResponse[]> => {
  try {
    const response = await fetcher.get<ICategoryResponse[]>(
      endpoints.GET_UNRESTRICTED_CATEGORIES,
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          ProductErr.GET_UNRESTRICTED_CATEGORIES_FORBIDDEN,
        );
      default:
        throw errorFactory.create(
          ProductErr.GET_UNRESTRICTED_CATEGORIES_FAILED,
        );
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(ProductErr.GET_UNRESTRICTED_CATEGORIES_FAILED),
    );
  }
};
