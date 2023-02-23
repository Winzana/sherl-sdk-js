import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IDocument, IUpdateDocument } from '../../types';

export const updateDocument = async (
  fetcher: Fetcher,
  request: IUpdateDocument,
): Promise<IDocument> => {
  try {
    const response = await fetcher.put<IDocument>(
      endpoints.UPDATE_DOCUMENT,
      request,
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.ADD_DOCUMENT_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.ADD_DOCUMENT_FAILED);
  }
};
