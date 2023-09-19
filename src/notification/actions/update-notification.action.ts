import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { NotificationErr, errorFactory } from '../errors';
import { IUpdateNotification } from '../types';
//todo : replace "any" with the api return interface
export const updateNotification = async (
  fetcher: Fetcher,
  updateContentOfNotification: IUpdateNotification,
  id: string,
): Promise<any> => {
  const response = await fetcher
    .put<any>(
      StringUtils.bindContext(endpoints.UPDATE_NOTIFICATION, { id }),
      updateContentOfNotification,
    )
    .catch((_err) => {
      throw errorFactory.create(NotificationErr.UPDATE_FAILED);
    });
  if (response.status !== 201) {
    throw errorFactory.create(NotificationErr.UPDATE_FAILED);
  }

  return response.data;
};
