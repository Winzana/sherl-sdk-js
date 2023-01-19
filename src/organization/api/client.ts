import { IOrganizationResponse } from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class OrganizationApi {
  /**
   * Get one Organization.
   *
   * @static
   * @memberof OrganizationApi
   */
  public static getOrganization = (id: string) =>
    fetcher.get<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.GET_ORGANIZATION, { id }),
    );

  /**
   * Get list of Organization.
   *
   * @static
   * @memberof OrganizationApi
   */
  public static getOrganizations = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IOrganizationResponse[]>>(
      endpoints.GET_ORGANIZATIONS,
      {
        page,
        itemsPerPage,
        ...filters,
      },
    );

  public static getPublicOrganizations = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IOrganizationResponse[]>>(
      endpoints.GET_PUBLIC_ORGANIZATIONS,
      {
        page,
        itemsPerPage,
        ...filters,
      },
    );

  /**
   * Get one public Organization by id.
   *
   * @static
   * @memberof OrganizationApi
   */
  public static getPublicOrganization = (id: string) =>
    fetcher.get<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_ORGANIZATION_ID, { id }),
    );

  /**
   * Get one public Organization by slug.
   *
   * @static
   * @memberof OrganizationApi
   */
  public static getPublicOrganizationBySlug = (slug: string) =>
    fetcher.get<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_ORGANIZATION_SLUG, { slug }),
    );
}

export { OrganizationApi };
