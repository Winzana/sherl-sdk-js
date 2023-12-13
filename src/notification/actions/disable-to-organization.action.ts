import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { NotificationErr, errorFactory } from '../errors';
import { INotification, INotificationUpdateAvailabilityInput } from '../types';

export const disableToOrganization = async (
  fetcher: Fetcher,
  disableToOrganizationInput: INotificationUpdateAvailabilityInput,
  id: string,
): Promise<INotification> => {
  try {
    const response = await fetcher.post<INotification>(
      StringUtils.bindContext(endpoints.DISABLE_TO_ORGANIZATION, { id }),
      disableToOrganizationInput,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(
          NotificationErr.DISABLE_TO_ORGANIZATION_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(
          NotificationErr.DISABLE_TO_ORGANIZATION_NOT_FOUND,
        );
      default:
        throw errorFactory.create(NotificationErr.DISABLED_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(NotificationErr.DISABLED_FAILED);
  }
};
