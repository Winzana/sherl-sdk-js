import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleTrainingCreateInputDto } from '../types';

/**
 * Create a new training page in the CMS.
 *
 * This function sends a POST request to create a new training page in the CMS
 * using the provided ICMSArticleTrainingCreateInputDto object. It handles different
 * HTTP status codes and throws specific errors for different scenarios.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {ICMSArticleTrainingCreateInputDto} data - The data for creating a new training page in the CMS.
 * @returns {Promise<IArticle>} A promise that resolves to the newly created training page information.
 * @throws {CmsErr.CREATE_CMS_TRAINING_FAILED_FORBIDDEN} Throws an error if the request is forbidden (HTTP 403).
 * @throws {CmsErr.CMS_CREATE_TRAININGS_FAILED} Throws an error for other failure scenarios.
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

    if (response.status !== 201) {
      throw errorFactory.create(CmsErr.CMS_CREATE_TRAININGS_FAILED);
    }
    return response.data;
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_CREATE_TRAININGS_FAILED);
  }
};
