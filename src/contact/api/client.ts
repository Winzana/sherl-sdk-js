import { IContactNew } from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';

const fetcher = new Fetcher(errorFactory);

class ContactApi {
  /**
   * Post add new contact msg.
   *
   * @static
   * @memberof ContactApi
   */
  public static postContactNew = (data: IContactNew) =>
    fetcher.post<IContactNew>(endpoints.POST_NEW_CONTACT, data);

  /**
   * Post add new contact msg by person id.
   *
   * @static
   * @memberof ContactApi
   */
  public static postContactNewById = (id: string, data: IContactNew) =>
    fetcher.post<IContactNew>(
      StringUtils.bindContext(endpoints.POST_NEW_CONTACT_BY_ID, { id }),
      data,
    );
}

export { ContactApi };
