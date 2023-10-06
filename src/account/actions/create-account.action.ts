import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { AccountErr, errorFactory } from '../errors';
import { IAccount, IAccountCreateInputDto } from '../types/entities';

export const createAccount = async (
  fetcher: Fetcher,
  data: IAccountCreateInputDto,
): Promise<IAccount> => {
  try {
    const response = await fetcher.post<IAccount>(
      endpoints.CREATE_ACCOUNT,
      data,
    );
    if (response.status !== 201) {
      throw errorFactory.create(AccountErr.CREATE_ACCOUNT_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(AccountErr.CREATE_ACCOUNT_FAILED);
  }
};
