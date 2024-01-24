import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { NotificationErr, errorFactory } from '../errors';
import { INotification, INotificationUpdateAvailabilityInput } from '../types';

/**
 * Enable a notification for a specific organization.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {INotificationUpdateAvailabilityInput} enableToOrganization - The input data to enable the notification for an organization.
 * @param {string} id - The ID of the notification to enable.
 * @returns {Promise<INotification>} A promise that resolves to the updated notification as an INotification.
 */
export const enableToOrganization = async (
  fetcher: Fetcher,
  enableToOrganization: INotificationUpdateAvailabilityInput,
  id: string,
): Promise<INotification> => {
  try {
    const response = await fetcher.post<INotification>(
      StringUtils.bindContext(endpoints.ENABLE_TO_ORGANIZATION, { id }),
      enableToOrganization,
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          NotificationErr.ENABLE_TO_ORGANIZATION_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(NotificationErr.NOTIFICATION_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(NotificationErr.ENABLED_TO_ORGANIZATION_FAILED),
        );
    }
  }
};
