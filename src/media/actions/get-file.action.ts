import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { MediaErr, errorFactory } from '../errors';
import { IFile, IMediaQuery } from '../types';

export const getFile = async (
  fetcher: Fetcher,
  query: IMediaQuery,
): Promise<IFile> => {
  const id = query.id;
  const response = await fetcher
    .get<IFile>(StringUtils.bindContext(endpoints.MANAGE_FILE, { id }), query)
    .catch((_err) => {
      throw errorFactory.create(MediaErr.GET_FILE_FAILED);
    });

  if (response.status !== 201) {
    throw errorFactory.create(MediaErr.GET_FILE_FAILED);
  }
  return response.data;
};
