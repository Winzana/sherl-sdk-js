import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleTrainingCreateInputDto } from '../types';

/**
 * Creates a new trainings page in the CMS.
 *
 * This function is an asynchronous operation for creating a new trainings page
 * in the Content Management System (CMS). It sends a POST request to the CMS's
 * training creation endpoint with the provided training data. If the request is
 * successful (indicated by a 201 status code), the function returns the
 * details of the newly created trainings page. If any error occurs, such as
 * a response with a status other than 201 or a connectivity issue, the function
 * throws a specific error indicating the creation failure.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {ICMSArticleTrainingCreateInputDto} data - The data for creating the new trainings page.
 * @returns {Promise<IArticle>} A promise that resolves to the data of the newly created trainings page.
 * @throws {CmsErr.CMS_CREATE_TRAININGS_FAILED} Throws an error if the trainings page creation fails.
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
