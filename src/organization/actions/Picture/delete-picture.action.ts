import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IPicture, IDeletePictureResponse } from '../../types';

export const deletePicture = async (
  fetcher: Fetcher,
  request: IPicture,
): Promise<IDeletePictureResponse> => {
  const response = await fetcher.post<IPicture>(
    endpoints.DELETE_PICTURE,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.DELETE_PICTURE_FAILED);
  }

  return response.data;
};
