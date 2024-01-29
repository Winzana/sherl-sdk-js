import { ErrorFactory } from '../common/errors';

export enum NotificationErr {
  NOTIFICATION_NOT_FOUND = 'notification/notification_not_found',
  NOTIFICATION_REGISTRATION_FAILED = 'notification/post-notification-failed',
  GET_NOTIFICATIONS_FAILED = 'notification/fetch-failed',
  UPDATE_NOTIFICATION_FAILED = 'notification/update-notification-failed',
  ENABLED_TO_ORGANIZATION_FAILED = 'notification/enabled-notification-failed',
  ENABLE_TO_ORGANIZATION_FORBIDDEN = 'notification/enable-to-organization-forbidden',
  DISABLED_TO_ORGANIZATION_FAILED = 'notification/disabled-notification-failed',
  DISABLE_TO_ORGANIZATION_FORBIDDEN = 'notification/disable-to-organization-forbidden',
  SEND_NOTIFICATION_BY_TYPE_FAILED = 'notification/send-notification-by-type-failed',
  GET_NOTIFICATIONS_FORBIDDEN = 'notification/get-notifications-forbidden',
  NOTIFICATION_REGISTRATION_FORBIDDEN = 'notification/notification-registration-forbidden',
  SEND_NOTIFICATION_BY_TYPE_FORBIDDEN = 'send-notification-by-type-forbidden',
  UPDATE_NOTIFICATION_FORBIDDEN = 'update-notification-forbidden',
}

export const errors = {
  [NotificationErr.GET_NOTIFICATIONS_FAILED]:
    'Failed to fetch notification API',
  [NotificationErr.NOTIFICATION_NOT_FOUND]: 'Notification not found',
  [NotificationErr.UPDATE_NOTIFICATION_FAILED]: 'Failed to update notification',
  [NotificationErr.NOTIFICATION_REGISTRATION_FAILED]:
    'Failed to create notification',
  [NotificationErr.ENABLED_TO_ORGANIZATION_FAILED]:
    'Failed to enable notifications',
  [NotificationErr.DISABLED_TO_ORGANIZATION_FAILED]:
    'Failed to disabled notifications',
  [NotificationErr.SEND_NOTIFICATION_BY_TYPE_FAILED]:
    'Failed to send notification by type',
  [NotificationErr.DISABLE_TO_ORGANIZATION_FORBIDDEN]:
    'Failed to enable organization, forbidden',
  [NotificationErr.ENABLE_TO_ORGANIZATION_FORBIDDEN]:
    'Failed to enable organization, forbidden',
  [NotificationErr.GET_NOTIFICATIONS_FORBIDDEN]:
    'Failed to get organization, forbidden',
  [NotificationErr.NOTIFICATION_REGISTRATION_FORBIDDEN]:
    'Failed to register notification, forbidden',
  [NotificationErr.SEND_NOTIFICATION_BY_TYPE_FORBIDDEN]:
    'Failed to send notification by type, forbidden',
  [NotificationErr.UPDATE_NOTIFICATION_FORBIDDEN]:
    'Failed to update notification, forbidden',
};

export const errorFactory = new ErrorFactory<NotificationErr>(
  'Notification',
  errors,
);
