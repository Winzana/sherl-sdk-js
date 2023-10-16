import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { ICMSArticleStoryCreateInputDto } from '../types';

export const createStoriesPage = async (
  fetcher: Fetcher,
  data: ICMSArticleStoryCreateInputDto,
): Promise<ICMSArticleStoryCreateInputDto> => {
  try {
    const response = await fetcher.post<ICMSArticleStoryCreateInputDto>(
      endpoints.CREATE_STORIES,
      data,
    );

    if (response.status !== 201) {
      throw errorFactory.create(CmsErr.CMS_CREATE_STORIES_FAILED);
    }
    return response.data;
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_CREATE_STORIES_FAILED);
  }
};
