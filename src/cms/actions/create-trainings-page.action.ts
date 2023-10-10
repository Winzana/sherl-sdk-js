import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { ICMSArticleTrainingCreateInputDto } from '../types';

export const createTrainingsPage = async (
  fetcher: Fetcher,
  data: ICMSArticleTrainingCreateInputDto,
) => {
  const response = await fetcher
    .post<ICMSArticleTrainingCreateInputDto>(endpoints.CREATE_TRAINING, data)
    .catch(() => {
      throw errorFactory.create(CmsErr.CMS_CREATE_TRAININGS_FAILED);
    });
  if (response.status !== 201) {
    throw errorFactory.create(CmsErr.CMS_CREATE_TRAININGS_FAILED);
  }
  return response.data;
};
