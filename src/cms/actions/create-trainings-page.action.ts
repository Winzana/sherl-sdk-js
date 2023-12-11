import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleTrainingCreateInputDto } from '../types';

export const createTrainingsPage = async (
  fetcher: Fetcher,
  data: ICMSArticleTrainingCreateInputDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.post<IArticle>(
      endpoints.CREATE_TRAINING,
      data,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 404:
        throw errorFactory.create(
          CmsErr.CMS_CREATE_TRAININGS_FAILED_CMS_NOT_EXIST,
        );
      case 409:
        throw errorFactory.create(
          CmsErr.CMS_CREATE_TRAININGS_FAILED_TRAINING_ALREADY_EXIST,
        );
      default:
        throw errorFactory.create(CmsErr.CMS_CREATE_TRAININGS_FAILED);
    }
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_CREATE_TRAININGS_FAILED);
  }
};
