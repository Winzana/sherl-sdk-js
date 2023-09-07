import { SherlClient } from '../common';
import { NotificationProvider } from './provider';
import {
  INotificationRegistration,
  INotificationRegistrationResponse,
  INotificationToOrganization,
  IUpdateNotification,
  INotification,
  INotificationFilters,
} from './types';

const notification = (client: SherlClient) => new NotificationProvider(client);
export {
  notification,
  INotificationRegistration,
  INotificationRegistrationResponse,
  INotificationToOrganization,
  IUpdateNotification,
  INotification,
  INotificationFilters,
};
