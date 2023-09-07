import { ErrorFactory } from '../common/errors';

export enum NotificationErr {
  POST_FAILED = 'notification/post-notification-failed',
  FETCH_FAILED = 'notification/fetch-failed',
  NOT_FOUND = 'notification/not-found',
  UPDATE_FAILED = 'notification/update-notification-failed',
}

export const errors = {
  [NotificationErr.FETCH_FAILED]: 'Failed to fetch notification API',
  [NotificationErr.NOT_FOUND]: 'Notification not found',
  [NotificationErr.UPDATE_FAILED]: 'Failed to update notification',
  [NotificationErr.POST_FAILED]: 'Failed to create notification',
};

export const errorFactory = new ErrorFactory<NotificationErr>(
  'Notification',
  errors,
);
