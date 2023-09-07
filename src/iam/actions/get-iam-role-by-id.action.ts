import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IIamRole } from '../types';
import { errorFactory, IamErr } from '../errors';
import { StringUtils } from '../../common/utils/string';

export const getIamRoleById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IIamRole> => {
  const response = await fetcher
    .get<IIamRole>(
      StringUtils.bindContext(endpoints.GET_IAM_ROLE_BY_ID, { id }),
    )
    .catch((_err) => {
      throw errorFactory.create(IamErr.FETCH_FAILED);
    });

  if (response.status !== 200) {
    throw errorFactory.create(IamErr.FETCH_FAILED);
  }

  return response.data;
};
