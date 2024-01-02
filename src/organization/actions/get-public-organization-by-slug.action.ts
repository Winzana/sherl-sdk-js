import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { IOrganizationResponse } from '../types';
import { OrganizationErr, errorFactory } from '../errors';
import { getSherlError } from '../../common/utils';

export const getPublicOrganizationBySlug = async (
  fetcher: Fetcher,
  slug: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.get<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_ORGANIZATION_SLUG, { slug }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          OrganizationErr.GET_PUBLIC_ORGANIZATION_BY_SLUG_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(OrganizationErr.ORGANIZATION_NOT_FOUND);
      default:
        throw errorFactory.create(
          OrganizationErr.GET_PUBLIC_ORGANIZATION_BY_SLUG_FAILED,
        );
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(
        OrganizationErr.GET_PUBLIC_ORGANIZATION_BY_SLUG_FAILED,
      ),
    );
  }
};
