import { SherlClient } from '../common';
import { NotificationProvider } from './provider';
import {
  INotificationRegistration,
  INotificationRegistrationResponse,
  INotificationUpdateAvailabilityInput,
  INotification,
  INotificationFilters,
} from './types';

const notification = (client: SherlClient) => new NotificationProvider(client);
export {
  notification,
  INotificationRegistration,
  INotificationRegistrationResponse,
  INotificationUpdateAvailabilityInput,
  INotification,
  INotificationFilters,
};
