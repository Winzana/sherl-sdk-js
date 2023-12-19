import { SherlClient } from '../common';
import { CalendarProvider } from './provider';
export * from './types';

export const calendar = (client: SherlClient) => new CalendarProvider(client);
