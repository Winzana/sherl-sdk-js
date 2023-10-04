import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { ICategoryResponse } from '../../types';

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
  } catch (err) {
    throw errorFactory.create(ProductErr.GET_ORGANIZATION_CATEGORIES_FAILED);
  }
};
