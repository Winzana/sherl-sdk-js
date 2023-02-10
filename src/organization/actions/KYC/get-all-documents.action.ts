import { ApiResponse, Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IDocument } from '../../types';

export const getAllDocuments = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IDocument[]> => {
  let response: ApiResponse<IDocument[]> | null = null;

  try {
    response = await fetcher.get<IDocument[]>(
      StringUtils.bindContext(endpoints.GET_DOCUMENTS, { organizationId }),
    );
  } catch {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
