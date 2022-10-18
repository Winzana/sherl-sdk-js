import { IOrderResponse } from '../../types/order/types';
import { Pagination } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from './endpoints';
import { Fetcher } from '../../../common/api';
import { errorFactory } from '../../errors/order/errors';

const fetcher = new Fetcher(errorFactory);

class OrderApi {
  /**
   * Get list of products.
   *
   * @static
   * @memberof OrderApi
   */
  public static getOrders = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IOrderResponse[]>>(endpoints.GET_CUSTOMER_ORDERS, {
      page,
      itemsPerPage,
      ...filters,
    });

  /**
   * Get one order.
   *
   * @static
   * @memberof OrderApi
   */
  public static getOrder = (id: string) =>
    fetcher.get<IOrderResponse>(
      StringUtils.bindContext(endpoints.GET_ORDER, { id }),
    );

  /**
   * Get organization order.
   *
   * @static
   * @memberof OrderApi
   */
  public static getOrganizationOrders = (id: string) =>
    fetcher.get<IOrderResponse[]>(
      StringUtils.bindContext(endpoints.GET_ORDER, { id }),
    );

  /**
   * Get automation primary
   *
   * @static
   * @memberof OrderApi
   */
  public static getAutomationPrimary = (id: string) =>
    fetcher.get<IOrderResponse>( /// Je ne sais pas s'il y a une interface ????????
      StringUtils.bindContext(endpoints.GET_ORDER_AUTOMATION_PRIMARY, { id }),
    );

  /**
   * Get automation secondary
   *
   * @static
   * @memberof OrderApi
   */
  public static getAutomationSecondary = (id: string) =>
    fetcher.get<IOrderResponse>( /// Je ne sais pas s'il y a une interface ????????
      StringUtils.bindContext(endpoints.GET_ORDER_AUTOMATION_SECONDARY, { id }),
    );
}

export { OrderApi };
