import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ICategoryResponse } from '../../types';

export const getCategoriesById = async (
  fetcher: Fetcher,
  categoryId: string,
): Promise<ICategoryResponse[]> => {
  const response = await fetcher.get<ICategoryResponse[]>(
    StringUtils.bindContext(endpoints.GET_CATEGORY, { id: categoryId }),
  );
  return response.data;
};
