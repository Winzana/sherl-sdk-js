import { SherlClient } from '../common';
import { AnalyticsProvider } from './provider';

export const analytics = (client: SherlClient) => new AnalyticsProvider(client);
export * as AnalyticsTypes from './types';
