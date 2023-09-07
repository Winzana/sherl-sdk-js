import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IGetOneIamProfile } from '../types';
import { errorFactory, IamErr } from '../errors';
import { StringUtils } from '../../common/utils/string';

export const getIamProfileById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IGetOneIamProfile> => {
  const response = await fetcher
    .get<IGetOneIamProfile>(
      StringUtils.bindContext(endpoints.GET_IAM_PROFILE_BY_ID, { id }),
    )
    .catch((_err) => {
      throw errorFactory.create(IamErr.FETCH_FAILED);
    });

  if (response.status !== 200) {
    throw errorFactory.create(IamErr.FETCH_FAILED);
  }

  return response.data;
};
