import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleStoryCreateInputDto } from '../types';

export const createStoriesPage = async (
  fetcher: Fetcher,
  data: ICMSArticleStoryCreateInputDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.post<IArticle>(
      endpoints.CREATE_STORIES,
      data,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 404:
        throw errorFactory.create(
          CmsErr.CMS_CREATE_STORIES_FAILED_CMS_NOT_EXIST,
        );
      case 409:
        throw errorFactory.create(
          CmsErr.CMS_CREATE_STORIES_FAILED_STORY_ALREADY_EXIST,
        );
      default:
        throw errorFactory.create(CmsErr.CMS_CREATE_STORIES_FAILED);
    }
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_CREATE_STORIES_FAILED);
  }
};
