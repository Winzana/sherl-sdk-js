import { SherlClient } from '../common';
import { NotificationProvider } from './provider';

export const notification = (client: SherlClient) =>
  new NotificationProvider(client);

export * as NotificationTypes from './types';
