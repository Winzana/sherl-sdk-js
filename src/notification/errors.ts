import { ErrorFactory } from '../common/errors';

export enum NotificationErr {
  POST_FAILED = 'notification/post-notification-failed',
  FETCH_FAILED = 'notification/fetch-failed',
  NOT_FOUND = 'notification/not-found',
  UPDATE_FAILED = 'notification/update-notification-failed',
  ENABLED_FAILED = 'notification/enabled-notification-failed',
  DISABLED_FAILED = 'notification/disabled-notification-failed',
  SEND_NOTIFICATION_BY_TYPE_FAILED = 'notification/send-notification-by-type-failed',
  DISABLE_TO_ORGANIZATION_FORBIDDEN = 'notification/disable-to-organization-forbidden',
  DISABLE_TO_ORGANIZATION_NOT_FOUND = 'notification/disable-to-organization-not-found',
  ENABLE_TO_ORGANIZATION_FORBIDDEN = 'notification/enable-to-organization-forbidden',
  ENABLE_TO_ORGANIZATION_NOT_FOUND = 'notification/enable-to-organization-not-found',
  GET_NOTIFICATIONS_FORBIDDEN = 'notification/get-notifications-forbidden',
  GET_NOTIFICATIONS_NOT_EXIST = 'notification/get-notifications-not-exist',
  NOTIFICATION_REGISTRATION_FORBIDDEN = 'notification/notification-registration-forbidden',
  NOTIFICATION_REGISTRATION_NOT_FOUND = 'notification/notification-registration-not-found',
  SEND_NOTIFICATION_BY_TYPE_FORBIDDEN = 'send-notification-by-type-forbidden',
  SEND_NOTIFICATION_BY_TYPE_NOT_FOUND = 'send-notification-by-type-not-found',
  UPDATE_NOTIFICATION_FORBIDDEN = 'update-notification-forbidden',
  UPDATE_NOTIFICATION_NOT_FOUND = 'update-notification-not-found',
}

export const errors = {
  [NotificationErr.FETCH_FAILED]: 'Failed to fetch notification API',
  [NotificationErr.NOT_FOUND]: 'Notification not found',
  [NotificationErr.UPDATE_FAILED]: 'Failed to update notification',
  [NotificationErr.POST_FAILED]: 'Failed to create notification',
  [NotificationErr.ENABLED_FAILED]: 'Failed to enable notifications',
  [NotificationErr.DISABLED_FAILED]: 'Failed to disabled notifications',
  [NotificationErr.SEND_NOTIFICATION_BY_TYPE_FAILED]:
    'Failed to send notification by type',
  [NotificationErr.DISABLE_TO_ORGANIZATION_FORBIDDEN]:
    'Failed to enable organization forbidden',
  [NotificationErr.DISABLE_TO_ORGANIZATION_NOT_FOUND]:
    'Failed to  enable organization not found',
  [NotificationErr.ENABLE_TO_ORGANIZATION_FORBIDDEN]:
    'Failed to enable organization forbidden',
  [NotificationErr.ENABLE_TO_ORGANIZATION_NOT_FOUND]:
    'Failed to  enable organization not found',
  [NotificationErr.GET_NOTIFICATIONS_FORBIDDEN]:
    'Failed to get organization forbidden',
  [NotificationErr.GET_NOTIFICATIONS_NOT_EXIST]:
    'Failed to get organization not found',
  [NotificationErr.NOTIFICATION_REGISTRATION_FORBIDDEN]:
    'Failed to  notification forbidden',
  [NotificationErr.NOTIFICATION_REGISTRATION_NOT_FOUND]:
    'Failed to  notification not found',
  [NotificationErr.NOTIFICATION_REGISTRATION_FORBIDDEN]:
    'Failed to  notification registration forbidden',
  [NotificationErr.NOTIFICATION_REGISTRATION_NOT_FOUND]:
    'Failed to  notification registration not found',
  [NotificationErr.UPDATE_NOTIFICATION_FORBIDDEN]:
    'Failed to update notification  forbidden',
  [NotificationErr.UPDATE_NOTIFICATION_NOT_FOUND]:
    'Failed to update notification  not found',
};

export const errorFactory = new ErrorFactory<NotificationErr>(
  'Notification',
  errors,
);
