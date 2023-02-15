import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IPicture, ICreatePictureResponse } from '../../types';

export const createPicture = async (
  fetcher: Fetcher,
  request: IPicture,
): Promise<ICreatePictureResponse> => {
  const response = await fetcher.post<IPicture>(
    endpoints.CREATE_PICTURE,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.CREATE_PICTURE_FAILED);
  }

  return response.data;
};
