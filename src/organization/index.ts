import { SherlClient } from '../common';
import { OrganizationProvider } from './provider';

export const organization = (client: SherlClient) =>
  new OrganizationProvider(client);
