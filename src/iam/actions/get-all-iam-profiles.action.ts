import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IIamProfilesFilters, IProfile } from '../types';
import { errorFactory, IamErr } from '../errors';

export const getAllIamProfiles = async (
  fetcher: Fetcher,
  filters: IIamProfilesFilters,
): Promise<IProfile[]> => {
  const response = await fetcher
    .get<IProfile[]>(endpoints.GET_ALL_IAM_PROFILES, filters)
    .catch((_err) => {
      throw errorFactory.create(IamErr.FETCH_FAILED);
    });

  if (response.status !== 200) {
    throw errorFactory.create(IamErr.FETCH_FAILED);
  }

  return response.data;
};
