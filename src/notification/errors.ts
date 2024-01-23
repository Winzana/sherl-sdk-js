import { ErrorFactory } from '../common/errors';

export enum NotificationErr {
  NOTIFICATION_NOT_FOUND = 'notification/notification_not_found',
  POST_FAILED = 'notification/post-notification-failed',
  FETCH_FAILED = 'notification/fetch-failed',
  UPDATE_FAILED = 'notification/update-notification-failed',
  ENABLED_FAILED = 'notification/enabled-notification-failed',
  DISABLED_FAILED = 'notification/disabled-notification-failed',
  SEND_NOTIFICATION_BY_TYPE_FAILED = 'notification/send-notification-by-type-failed',
  DISABLE_TO_ORGANIZATION_FORBIDDEN = 'notification/disable-to-organization-forbidden',
  ENABLE_TO_ORGANIZATION_FORBIDDEN = 'notification/enable-to-organization-forbidden',
  GET_NOTIFICATIONS_FORBIDDEN = 'notification/get-notifications-forbidden',
  NOTIFICATION_REGISTRATION_FORBIDDEN = 'notification/notification-registration-forbidden',
  SEND_NOTIFICATION_BY_TYPE_FORBIDDEN = 'send-notification-by-type-forbidden',
  UPDATE_NOTIFICATION_FORBIDDEN = 'update-notification-forbidden',
}

export const errors = {
  [NotificationErr.FETCH_FAILED]: 'Failed to fetch notification API',
  [NotificationErr.NOTIFICATION_NOT_FOUND]: 'Notification not found',
  [NotificationErr.UPDATE_FAILED]: 'Failed to update notification',
  [NotificationErr.POST_FAILED]: 'Failed to create notification',
  [NotificationErr.ENABLED_FAILED]: 'Failed to enable notifications',
  [NotificationErr.DISABLED_FAILED]: 'Failed to disabled notifications',
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
