import { Fetcher, Pagination } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IPublicCategoryResponse } from '../../types/product/types';

export const getPublicCategoriesSlug = async (
  fetcher: Fetcher,
  slug: {
    [key: string]: any;
  },
): Promise<Pagination<IPublicCategoryResponse>> => {
  const response = await fetcher.get<Pagination<IPublicCategoryResponse>>(
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
