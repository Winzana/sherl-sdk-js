// import { Fetcher } from '../../../common/api';
// import { endpoints } from '../../api/endpoints';
// import { OrganizationErr, errorFactory } from '../../errors';
// import { IRib, IAddRib } from '../../types';

// export const addRib = async (
//   fetcher: Fetcher,
//   request: IAddRib,
// ): Promise<IRib> => {
//   const response = await fetcher.post<IRib>(endpoints.ADD_RIB, request);

//   if (response.status !== 200) {
//     throw errorFactory.create(OrganizationErr.ADD_RIB_FAILED);
//   }

//   return response.data;
// };

import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { StringUtils } from '../../../common/utils/string';
import { IAddRib, IRib } from '../../types';

export const addRib = async (
  fetcher: Fetcher,
  request: IAddRib,
): Promise<IRib> => {
  try {
    const response = await fetcher.post<IRib>(
      StringUtils.bindContext(endpoints.ADD_RIB, {
        organizationId: request.organizationId,
      }),
      request,
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.ADD_RIB_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.ADD_RIB_FAILED);
  }
};
