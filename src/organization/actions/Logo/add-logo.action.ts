import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IAddLogoResponse, IAddLogo } from '../../types';

export const addLogo = async (
  fetcher: Fetcher,
  request: IAddLogo,
): Promise<IAddLogoResponse> => {
  const response = await fetcher.post<IAddLogoResponse>(
    endpoints.ADD_LOGO,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.ADD_LOGO_FAILED);
  }

  return response.data;
};
