import { SherlClient } from '../common';
import { AccountProvider } from './provider';
import { IAccount, IAccountCreateInputDto } from './types';

const account = (client: SherlClient) => new AccountProvider(client);
export { account, IAccount, IAccountCreateInputDto };
