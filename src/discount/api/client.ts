import {
  IDiscountResponse,
  IDiscountParameter,
  IValidateDiscountCode,
} from '../types';
import { Pagination } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory, DiscountErr } from '../errors';

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
  public static getDiscountParams = (params: { [key: string]: any }) =>
    fetcher.get<Pagination<IDiscountResponse>>(endpoints.GET_DISCOUNT_BY, {
      params,
    });

  /**
   * Get list of Discounts.
   *
   * @static
   * @memberof DiscountApi
   */
  public static ListDiscount = (
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
  public static ListPublicDiscount = (
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

  /**
   * Post new discount
   *
   * @param parameter @IDiscountParameter
   * @returns
   */
  public static postDiscount = (parameter: IDiscountParameter) =>
    fetcher
      .post<IDiscountResponse>(endpoints.POST_DISCOUNT, {
        ...parameter,
      })
      .catch(_err => {
        throw errorFactory.create(DiscountErr.POST_FAILED);
      });

  /**
   * Post validate discount
   *
   * @param parameter @IValidateDiscountCode
   * @returns
   */
  public static postValidateDiscount = (parameter: IValidateDiscountCode) =>
    fetcher
      .post<any>(endpoints.POST_VALIDATE_CODE, {
        ...parameter,
      })
      .catch(_err => {
        throw errorFactory.create(DiscountErr.POST_VAL_DISCOUNT_FAILED);
      });

  /**
   * Delete one discount by id.
   *
   * @static
   * @memberof DiscountApi
   */
  public static deleteDiscount = (id: string) =>
    fetcher.delete<IDiscountResponse>(
      StringUtils.bindContext(endpoints.DELETE_DISCOUNT_ID, { id }),
    );

  /**
   * PUT update existing discount
   *
   * @param parameter @IDiscountParameter
   * @returns
   */
  public static putDiscount = (parameter: IDiscountParameter, id: string) =>
    fetcher
      .put<IDiscountResponse>(
        StringUtils.bindContext(endpoints.PUT_DISCOUNT_ID, { id }),
        { ...parameter },
      )
      .catch(_err => {
        throw errorFactory.create(DiscountErr.PUT_FAILED);
      });
}

export { DiscountApi };
