import { ErrorFactory } from '../common/errors';

export enum NotificationErr {
  POST_FAILED = 'notification/post-notification-failed',
  FETCH_FAILED = 'notification/fetch-failed',
  NOT_FOUND = 'notification/not-found',
  UPDATE_FAILED = 'notification/update-notification-failed',
  ENABLED_FAILED = 'notification/enabled-notification-failed',
  DISABLED_FAILED = 'notification/disabled-notification-failed',
  SEND_NOTIFICATION_BY_TYPE_FAILED = 'notification/send-notification-by-type-failed',
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
};

export const errorFactory = new ErrorFactory<NotificationErr>(
  'Notification',
  errors,
);
