import { SherlClient } from '../common';
import { UserProvider } from './provider';

export const user = (client: SherlClient) => new UserProvider(client);
