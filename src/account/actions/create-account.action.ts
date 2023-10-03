import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { AccountErr, errorFactory } from '../errors';
import { IAccount, AccountCreateInputDto } from '../types/entities';

export const createAccount = async (
  fetcher: Fetcher,
  data: AccountCreateInputDto,
) => {
  const response = await fetcher
    .post<IAccount>(endpoints.CREATE_ACCOUNT, data)
    .catch((_err) => {
      throw errorFactory.create(AccountErr.CREATE_ACCOUNT_FAILED);
    });
  if (response.status !== 201) {
    throw errorFactory.create(AccountErr.CREATE_ACCOUNT_FAILED);
  }

  return response.data;
};
