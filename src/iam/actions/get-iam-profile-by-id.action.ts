import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IProfile } from '../types';
import { errorFactory, IamErr } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { getSherlError } from '../../common/utils/errors';

export const getIamProfileById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IProfile> => {
  try {
    const response = await fetcher.get<IProfile>(
      StringUtils.bindContext(endpoints.GET_IAM_PROFILE_BY_ID, { id }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(IamErr.IAM_GET_PROFILE_BY_ID_FORBIDDEN);
      case 404:
        throw errorFactory.create(IamErr.IAM_PROFILE_NOT_FOUND_ERROR);
      default:
        throw errorFactory.create(IamErr.FETCH_FAILED);
    }
  } catch (err) {
    throw getSherlError(err, errorFactory.create(IamErr.FETCH_FAILED));
  }
};
