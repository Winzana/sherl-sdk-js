import {
  IDiscountResponse,
  IDiscountParameter,
} from '../../types/discount/types';
import { Pagination } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../../common/api';
import { errorFactory, DiscountErr } from '../../errors/discount/errors';

const fetcher = new Fetcher(errorFactory);

class DiscountApi {
  /**
   * Get one discount by id.
   *
   * @static
   * @memberof DiscountApi
   */
  public static getDiscount = (id: string) =>
    fetcher.get<IDiscountResponse>(
      StringUtils.bindContext(endpoints.GET_DISCOUNT_ID, { id }),
    );

  /**
   * Get one discount by params.
   *
   * @static
   * @memberof DiscountApi
   */
  public static getDiscountByParams = (params: { [key: string]: any }) =>
    fetcher.get<Pagination<IDiscountResponse>>(endpoints.GET_DISCOUNT_BY, {
      params,
    });

  /**
   * Get list of Discounts.
   *
   * @static
   * @memberof DiscountApi
   */
  public static getDiscounts = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IDiscountResponse[]>>(endpoints.GET_DISCOUNTS, {
      page,
      itemsPerPage,
      ...filters,
    });

  /**
   * Get list public of Discounts.
   *
   * @static
   * @memberof DiscountApi
   */
  public static getPublicDiscounts = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IDiscountResponse[]>>(
      endpoints.GET_PUBLIC_DISCOUNTS,
      {
        page,
        itemsPerPage,
        ...filters,
      },
    );

  public static postDiscount = (parameter: IDiscountParameter) =>
    fetcher
      .post<IDiscountResponse>(endpoints.POST_DISCOUNT, {
        ...parameter,
      })
      .catch(_err => {
        throw errorFactory.create(DiscountErr.POST_FAILED);
      });
}

export { DiscountApi };
