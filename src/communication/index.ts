import { SherlClient } from '../common';
import { CommunicationProvider } from './provider';

export const organization = (client: SherlClient) =>
  new CommunicationProvider(client);
