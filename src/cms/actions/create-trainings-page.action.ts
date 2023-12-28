import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleTrainingCreateInputDto } from '../types';

/**
 * Create a new training page in the CMS.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {ICMSArticleTrainingCreateInputDto} data - The data for creating a new training page in the CMS.
 * @returns {Promise<IArticle>} A promise that resolves to the newly created training page information.
 */
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
      case 403:
        throw errorFactory.create(CmsErr.CREATE_CMS_TRAINING_FAILED_FORBIDDEN);
      default:
        throw errorFactory.create(CmsErr.CMS_CREATE_TRAININGS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(CmsErr.CMS_CREATE_TRAININGS_FAILED),
    );
  }
};
