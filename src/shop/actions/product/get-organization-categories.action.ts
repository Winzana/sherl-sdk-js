import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
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

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          ProductErr.GET_ORGANIZATION_CATEGORIES_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(ProductErr.ORGANIZATION_NOT_FOUND);
      default:
        throw errorFactory.create(
          ProductErr.GET_ORGANIZATION_CATEGORIES_FAILED,
        );
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(ProductErr.GET_ORGANIZATION_CATEGORIES_FAILED),
    );
  }
};
