import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IDocument, IAddDocument } from '../../types';

export const addDocument = async (
  fetcher: Fetcher,
  request: IAddDocument,
): Promise<IDocument> => {
  const response = await fetcher.post<IDocument>(
    endpoints.ADD_DOCUMENT,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.ADD_DOCUMENT_FAILED);
  }

  return response.data;
};
