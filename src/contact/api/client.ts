import { IContactNew } from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';
// import { StringUtils } from '../../common/utils/string';

const fetcher = new Fetcher(errorFactory);

class ContactApi {
  /**
   * Post add new contact.
   *
   * @static
   * @memberof ContactApi
   */
  public static postContactNew = (data: IContactNew) =>
    fetcher.post<IContactNew>(endpoints.POST_NEW_CONTACT, data);
}

export { ContactApi };
