import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IPublicCategoryResponse } from '../../types';

/**
 * Retrieves a specific public product category identified by its slug.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} slug - The slug identifier of the public category to be retrieved.
 * @returns {Promise<IPublicCategoryResponse>} A promise that resolves to the detailed information of the specified public category.
 */
export const getPublicCategoryBySlug = async (
  fetcher: Fetcher,
  slug: string,
): Promise<IPublicCategoryResponse> => {
  const response = await fetcher.get<IPublicCategoryResponse>(
    endpoints.GET_PUBLIC_CATEGORIES_SLUG,
    { slug },
  );

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
