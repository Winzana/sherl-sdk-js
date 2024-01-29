import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { ApiResponse } from '../../common';
import { IConfig } from '../../config/types';
import { errorFactory, PersonErr } from '../errors';
import { getSherlError } from '../../common/utils';

/**
 * Retrieves a list of configuration settings from the API.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @returns {Promise<IConfig[]>} A promise that resolves to an array of configuration objects.
 */
export const getConfigs = async (fetcher: Fetcher): Promise<IConfig[]> => {
  let response: ApiResponse<IConfig[]> | null = null;

  try {
    response = await fetcher.get<IConfig[]>(endpoints.GET_CONFIG);

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(PersonErr.GET_CONFIGS_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(PersonErr.GET_CONFIGS_FAILED),
        );
    }
  }
};
