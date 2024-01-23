import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import {
  IPublicCategoryResponse,
  IPublicCategoryAndSubCategoryFindByDto,
} from '../../types';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { getSherlError } from '../../../common/utils/errors';

/**
 * Retrieves a list of public categories and their subcategories, optionally filtered by specific criteria.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IPublicCategoryAndSubCategoryFindByDto} filters - Optional filters to apply when fetching public categories and subcategories.
 * @returns {Promise<IPublicCategoryResponse[]>} A promise that resolves to an array of public category responses, each including its subcategories, based on the provided filters.
 */
export const getPublicCategoriesAndSub = async (
  fetcher: Fetcher,
  filters: IPublicCategoryAndSubCategoryFindByDto,
): Promise<IPublicCategoryResponse[]> => {
  try {
    const response = await fetcher.get<IPublicCategoryResponse[]>(
      endpoints.GET_PUBLIC_CATEGORIES_AND_SUB,
      filters,
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          ProductErr.GET_PUBLIC_CATEGORIES_AND_SUBS_FORBIDDEN,
        );
      default:
        throw getSherlError(
          error,
          errorFactory.create(ProductErr.GET_PUBLIC_CATEGORIES_AND_SUBS_FAILED),
        );
    }
  }
};
