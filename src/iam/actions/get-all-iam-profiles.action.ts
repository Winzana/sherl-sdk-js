import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IIamProfilesFilters, IGetAllIamProfiles } from '../types';
import { Pagination } from '../../common/types/response';
import { errorFactory, IamErr } from '../errors';

export const getAllIamProfiles = async (
  fetcher: Fetcher,
  filters: IIamProfilesFilters,
): Promise<Pagination<IGetAllIamProfiles[]>> => {
  const response = await fetcher
    .get<Pagination<IGetAllIamProfiles[]>>(
      endpoints.GET_ALL_IAM_PROFILES,
      filters,
    )
    .catch((_err) => {
      throw errorFactory.create(IamErr.FETCH_FAILED);
    });

  if (response.status !== 200) {
    throw errorFactory.create(IamErr.FETCH_FAILED);
  }

  return response.data;
};
