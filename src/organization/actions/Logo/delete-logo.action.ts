import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IDeleteLogoResponse, IDeleteLogo } from '../../types';

export const deleteLogo = async (
  fetcher: Fetcher,
  request: IDeleteLogo,
): Promise<IDeleteLogoResponse> => {
  const response = await fetcher.post<IDeleteLogoResponse>(
    endpoints.DELETE_LOGO,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.DELETE_LOGO_FAILED);
  }

  return response.data;
};
