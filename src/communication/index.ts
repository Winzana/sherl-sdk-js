import { SherlClient } from '../common';
import { CommunicationProvider } from './provider';

export const communication = (client: SherlClient) =>
  new CommunicationProvider(client);
