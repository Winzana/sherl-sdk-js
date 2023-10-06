import { SherlClient } from '../common';
import { AccountProvider } from './provider';

const account = (client: SherlClient) => new AccountProvider(client);
export { account };
export * as AccountType from './types';
