import { SherlClient } from '../common';
import { AccountProvider } from './provider';
import { IAccount, IAccountCreateInputDto, IAddressDto } from './types';

const account = (client: SherlClient) => new AccountProvider(client);
export { account, IAccount, IAccountCreateInputDto, IAddressDto };
