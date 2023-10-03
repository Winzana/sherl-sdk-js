import { SherlClient } from '../common';
import { AccountProvider } from './provider';
import { IAccount, AccountCreateInputDto, IAddressDto } from './types';

const account = (client: SherlClient) => new AccountProvider(client);
export { account, IAccount, AccountCreateInputDto, IAddressDto };
