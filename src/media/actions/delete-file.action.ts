import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { MediaErr, errorFactory } from '../errors';
import { IMedia, IMediaQuery } from '../types';

export const deleteFile = async (
  fetcher: Fetcher,
  query: IMediaQuery,
): Promise<IMedia> => {
  const id = query.id;
  const response = await fetcher
    .delete<IMedia>(
      StringUtils.bindContext(endpoints.MANAGE_FILE, { id }),
      query,
    )
    .catch((_err) => {
      throw errorFactory.create(MediaErr.DELETE_FILE_FAILED);
    });

  if (response.status !== 201) {
    throw errorFactory.create(MediaErr.DELETE_FILE_FAILED);
  }
  return response.data;
};
