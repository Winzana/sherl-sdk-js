import {
  IPersonMeResponse,
  ILocation,
  IConfigResponse,
  IPersonRegister,
} from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { Pagination } from '../../common/api';

const fetcher = new Fetcher(errorFactory);

class PersonApi {
  /**
   * Get Me.
   *
   * @static
   * @memberof PersonApi
   */
  public static getMe = () => fetcher.get<IPersonMeResponse>(endpoints.GET_ME);

  public static getPersonById = (id: string) =>
    fetcher.get<IPersonMeResponse>(
      StringUtils.bindContext(endpoints.GET_ONE_BY_USERID, { id }),
    );

  /**
   * Get Position with longitude and latitude
   *
   * @static
   * @memberof PersonApi
   */
  public static getCurrentAddress = (position: { [key: string]: string }) =>
    fetcher.get<Pagination<ILocation[]>>(endpoints.GET_POSITION, {
      position,
    });

  /**
   * Get list of person.
   *
   * @static
   * @memberof PersonApi
   */
  public static getPersons = (
    page: number,
    itemsPerPage = 10,
    filters: { [key: string]: string },
  ) =>
    fetcher.get<Pagination<IPersonMeResponse[]>>(endpoints.GET_PERSONS, {
      page,
      itemsPerPage,
      ...filters,
    });

  public static getConfigs = () =>
    fetcher.get<IConfigResponse[]>(endpoints.GET_CONFIG);

  public static getVirtualMoney = () =>
    fetcher.get<IPersonMeResponse[]>(endpoints.GET_VIRTUAL_MONEY);

  /**
   * Register person.
   *
   * @static
   * @memberof PersonApi
   */
  public static postRequestRegisterCredential = (data: IPersonRegister) =>
    fetcher.post<IPersonMeResponse[]>(
      endpoints.REGISTER_WITH_EMAIL_AND_PASSWORD,
      data,
    );
}

export { PersonApi };
