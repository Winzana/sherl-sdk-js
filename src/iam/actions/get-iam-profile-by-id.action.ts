import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IProfile } from '../types';
import { errorFactory, IamErr } from '../errors';
import { StringUtils } from '../../common/utils/string';

export const getIamProfileById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IProfile> => {
  const response = await fetcher
    .get<IProfile>(
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
