import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  disableToOrganization,
  enableToOrganization,
  getNotifications,
  notificationRegistration,
  updateNotification,
} from './actions';
import { errorFactory } from './errors';

class NotificationProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  public notificationRegistration = this.withFetcher(notificationRegistration);
  public enableToOrganization = this.withFetcher(enableToOrganization);
  public disableToOrganization = this.withFetcher(disableToOrganization);
  public updateNotification = this.withFetcher(updateNotification);
  public getNotifications = this.withFetcher(getNotifications);
}

export { NotificationProvider };
