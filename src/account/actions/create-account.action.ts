import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
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
    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(AccountErr.CREATE_ACCOUNT_FORBIDDEN);
      case 404:
        throw errorFactory.create(AccountErr.CREATE_ACCOUNT_NOT_FOUND);
      case 409:
        throw errorFactory.create(AccountErr.CREATE_ACCOUNT_ALREADY_EXISTS);
      default:
        throw errorFactory.create(AccountErr.CREATE_ACCOUNT_FAILED);
    }
  } catch (error) {
    const sherlError = getSherlError(
      error,
      errorFactory.create(AccountErr.CREATE_ACCOUNT_FAILED),
    );
    throw sherlError;
  }
};
