import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { StringUtils } from '../../../common/utils/string';
import { IDocument, IAddDocument } from '../../types';

export const addDocument = async (
  fetcher: Fetcher,
  id: string,
  request: IAddDocument,
): Promise<IDocument> => {
  try {
    const response = await fetcher.post<IDocument>(
      StringUtils.bindContext(endpoints.ADD_DOCUMENT, {
        id,
      }),
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
