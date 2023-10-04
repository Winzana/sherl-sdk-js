import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IPublicCategoryResponse } from '../../types';

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
